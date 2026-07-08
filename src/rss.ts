/**
 * RSS + domain-specific ArXiv sources for robotics and CAD modules.
 *
 * Fetches RSS/Atom feeds for vendor blogs and community news, plus
 * domain-specific ArXiv categories (cs.RO for robotics, cs.GR/cs.CG for CAD).
 */

import type { ArxivPaper } from "./arxiv.js";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface RssItem {
  title: string;
  url: string;
  summary: string;
  date: string;
  source: string;
}

// ---------------------------------------------------------------------------
// RSS feed configuration
// ---------------------------------------------------------------------------

interface RssFeedConfig {
  url: string;
  source: string;
  module: "robotics" | "cad" | "embedded";
}

const RSS_FEEDS: RssFeedConfig[] = [
  // --- Robotics ---
  {
    url: "https://spectrum.ieee.org/feeds/topic/robotics.rss",
    source: "IEEE Spectrum Robotics",
    module: "robotics",
  },
  {
    url: "https://www.therobotreport.com/feed/",
    source: "The Robot Report",
    module: "robotics",
  },
  {
    url: "https://discourse.ros.org/latest.rss",
    source: "ROS Discourse",
    module: "robotics",
  },

  // --- CAD ---
  {
    url: "https://blog.freecad.org/feed/",
    source: "FreeCAD Blog",
    module: "cad",
  },
  {
    url: "https://blog.prusa3d.com/feed/",
    source: "Prusa Blog",
    module: "cad",
  },
  {
    url: "https://blog.bambulab.com/feed/",
    source: "Bambu Lab",
    module: "cad",
  },
  {
    url: "https://dev.opencascade.org/rss.xml",
    source: "OpenCASCADE",
    module: "cad",
  },
  {
    url: "https://hackaday.com/category/3d-printing/feed/",
    source: "Hackaday 3DP",
    module: "cad",
  },

  // --- Embedded / DIY ---
  {
    url: "https://hackaday.com/blog/feed/",
    source: "Hackaday",
    module: "embedded",
  },
  {
    url: "https://blog.arduino.cc/feed/",
    source: "Arduino Blog",
    module: "embedded",
  },
  {
    url: "https://www.raspberrypi.com/news/feed/",
    source: "Raspberry Pi Blog",
    module: "embedded",
  },
  {
    url: "https://www.cnx-software.com/feed/",
    source: "CNX Software",
    module: "embedded",
  },
];

// ---------------------------------------------------------------------------
// XML helpers (same pattern as arxiv.ts — 0 deps)
// ---------------------------------------------------------------------------

function extractTag(xml: string, tag: string): string {
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`);
  const m = xml.match(re);
  return m ? m[1]!.trim() : "";
}

function stripHtml(text: string): string {
  return text
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

// ---------------------------------------------------------------------------
// RSS / Atom fetch
// ---------------------------------------------------------------------------

async function fetchOneFeed(feed: RssFeedConfig): Promise<RssItem[]> {
  try {
    const resp = await fetch(feed.url, {
      headers: { "User-Agent": "agents-radar/1.0" },
    });
    if (!resp.ok) {
      console.error(`  [rss] ${feed.source}: HTTP ${resp.status}`);
      return [];
    }
    const xml = await resp.text();
    const items: RssItem[] = [];

    // Auto-detect RSS vs Atom
    const isAtom = xml.includes("<entry>");
    const blocks = isAtom ? xml.split("<entry>").slice(1) : xml.split("<item>").slice(1);

    for (const block of blocks) {
      const title = extractTag(block, "title");
      if (!title) continue;

      // Link: RSS has <link>text</link> or <link href="…"/>, Atom has <link href="…"/>
      let url = extractTag(block, "link");
      if (!url) {
        const m = block.match(/<link[^>]*href="([^"]*)"/);
        if (m) url = m[1]!;
      }

      // Summary: RSS uses <description>, Atom uses <summary> or <content>
      const rawSummary =
        extractTag(block, "description") ||
        extractTag(block, "summary") ||
        extractTag(block, "content") ||
        "";
      const summary = stripHtml(rawSummary).slice(0, 300);

      // Date: RSS uses <pubDate>, Atom uses <published> or <updated>
      const date =
        extractTag(block, "pubDate") || extractTag(block, "published") || extractTag(block, "updated") || "";

      items.push({ title, url: url || "", summary, date, source: feed.source });
    }

    console.log(`  [rss] ${feed.source}: ${items.length} items`);
    return items;
  } catch (err) {
    console.error(`  [rss] ${feed.source}: ${err}`);
    return [];
  }
}

/**
 * Fetch RSS news items for a given module ("robotics" or "cad").
 * Filters to items published in the last 7 days.
 */
export async function fetchRssNews(module: "robotics" | "cad" | "embedded"): Promise<RssItem[]> {
  const feeds = RSS_FEEDS.filter((f) => f.module === module);
  const results = await Promise.all(feeds.map(fetchOneFeed));
  const all = results.flat();

  // Filter to last 7 days
  const cutoff = Date.now() - 7 * 24 * 60 * 60 * 1000;
  const recent = all.filter((item) => {
    const d = new Date(item.date);
    return !isNaN(d.getTime()) && d.getTime() > cutoff;
  });

  console.log(
    `  [rss/${module}] ${recent.length} recent (from ${all.length} total across ${feeds.length} feeds)`,
  );
  return recent;
}

// ---------------------------------------------------------------------------
// Domain-specific ArXiv fetch
// ---------------------------------------------------------------------------

const ARXIV_API = "https://export.arxiv.org/api/query";
const ARXIV_MAX = 30;

/**
 * Fetch ArXiv papers for given categories (e.g. cs.RO, cs.GR).
 * Filters to last 48h, returns up to 30 most recent.
 */
export async function fetchArxivCategory(categories: string[]): Promise<ArxivPaper[]> {
  const seen = new Map<string, ArxivPaper>();

  for (let i = 0; i < categories.length; i++) {
    const cat = categories[i]!;
    // ArXiv asks for 3s between requests
    if (i > 0) await new Promise((r) => setTimeout(r, 3000));

    try {
      const params = new URLSearchParams({
        search_query: `cat:${cat}`,
        sortBy: "submittedDate",
        sortOrder: "descending",
        max_results: String(ARXIV_MAX),
      });

      const resp = await fetch(`${ARXIV_API}?${params}`, {
        headers: { "User-Agent": "agents-radar/1.0" },
      });

      if (!resp.ok) {
        console.error(`  [arxiv-cat] ${cat}: HTTP ${resp.status}`);
        continue;
      }

      const xml = await resp.text();
      const entryBlocks = xml.split("<entry>").slice(1);

      for (const block of entryBlocks) {
        const entry = "<entry>" + block;
        const id = extractTag(entry, "id");
        if (!id || seen.has(id)) continue;

        const title = extractTag(entry, "title").replace(/\s+/g, " ");
        const summary = extractTag(entry, "summary").replace(/\s+/g, " ");
        const authors = [...entry.matchAll(/<name>([^<]*)<\/name>/g)].map((m) => m[1]!);
        const published = extractTag(entry, "published");
        const url = id;
        const pdfUrl = url.replace("/abs/", "/pdf/");

        seen.set(id, {
          id,
          title,
          summary,
          authors,
          published,
          updated: published,
          categories: [cat],
          url,
          pdfUrl,
        });
      }

      console.log(`  [arxiv-cat] ${cat}: ${entryBlocks.length} papers`);
    } catch (err) {
      console.error(`  [arxiv-cat] ${cat}: ${err}`);
    }
  }

  // Filter to last 48h
  const cutoff = Date.now() - 48 * 60 * 60 * 1000;
  const papers = [...seen.values()]
    .filter((p) => new Date(p.published).getTime() > cutoff)
    .sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime())
    .slice(0, ARXIV_MAX);

  console.log(`  [arxiv-cat] ${papers.length} papers (${categories.join(", ")})`);
  return papers;
}
