/**
 * Embedded Development & DIY electronics data source —
 * GitHub Search API for embedded-related repositories,
 * plus ArXiv cs.AR papers and RSS news.
 */

import type { ArxivPaper } from "./arxiv.js";
import { fetchArxivCategory, fetchRssNews, type RssItem } from "./rss.js";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface EmbeddedRepo {
  fullName: string;
  description: string;
  language: string;
  stars: number;
  pushedAt: string;
  url: string;
  searchQuery: string;
}

export interface EmbeddedData {
  repos: EmbeddedRepo[];
  papers: ArxivPaper[];
  news: RssItem[];
  fetchSuccess: boolean;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const SEARCH_QUERIES = [
  { q: "topic:embedded", label: "embedded" },
  { q: "topic:arduino", label: "arduino" },
  { q: "topic:esp32", label: "esp32" },
  { q: "topic:raspberry-pi", label: "rpi" },
  { q: "topic:iot", label: "iot" },
  { q: "topic:microcontroller", label: "mcu" },
  { q: "topic:firmware", label: "firmware" },
  { q: "topic:rtos", label: "rtos" },
  { q: "topic:fpga", label: "fpga" },
  { q: "topic:riscv", label: "riscv" },
  { q: "topic:diy-electronics+tutorial", label: "diy" },
  { q: "pcb+design+open-source", label: "pcb" },
];

const ARXIV_CATEGORIES = ["cs.AR"]; // Hardware Architecture

// ---------------------------------------------------------------------------
// Fetch
// ---------------------------------------------------------------------------

async function searchEmbeddedRepos(sevenDaysAgo: string): Promise<EmbeddedRepo[]> {
  const token = process.env["GITHUB_TOKEN"] ?? "";
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const seen = new Set<string>();
  const all: EmbeddedRepo[] = [];

  await Promise.all(
    SEARCH_QUERIES.map(async ({ q, label }) => {
      try {
        const query = `${q}+pushed:>${sevenDaysAgo}&sort=stars&order=desc`;
        const url = `https://api.github.com/search/repositories?q=${query}&per_page=15`;
        const resp = await fetch(url, { headers });
        if (!resp.ok) {
          console.error(`  [embedded/search] "${label}": HTTP ${resp.status}`);
          return;
        }
        const data = (await resp.json()) as {
          items: Array<{
            full_name: string;
            description: string | null;
            language: string | null;
            stargazers_count: number;
            pushed_at: string;
            html_url: string;
          }>;
        };
        let added = 0;
        for (const item of data.items ?? []) {
          if (!seen.has(item.full_name)) {
            seen.add(item.full_name);
            all.push({
              fullName: item.full_name,
              description: item.description ?? "",
              language: item.language ?? "",
              stars: item.stargazers_count,
              pushedAt: item.pushed_at,
              url: item.html_url,
              searchQuery: label,
            });
            added++;
          }
        }
        console.log(`  [embedded/search] "${label}": ${added} repos`);
      } catch (err) {
        console.error(`  [embedded/search] "${label}": ${err}`);
      }
    }),
  );

  return all;
}

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export async function fetchEmbeddedData(): Promise<EmbeddedData> {
  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);

  try {
    const [repos, papers, news] = await Promise.all([
      searchEmbeddedRepos(sevenDaysAgo),
      fetchArxivCategory(ARXIV_CATEGORIES).catch((): ArxivPaper[] => []),
      fetchRssNews("embedded").catch((): RssItem[] => []),
    ]);

    console.log(
      `  [embedded] ${repos.length} repos, ${papers.length} papers, ${news.length} news (from ${SEARCH_QUERIES.length} queries)`,
    );
    return { repos, papers, news, fetchSuccess: repos.length > 0 || papers.length > 0 || news.length > 0 };
  } catch (err) {
    console.error(`  [embedded] Fetch failed: ${err}`);
    return { repos: [], papers: [], news: [], fetchSuccess: false };
  }
}
