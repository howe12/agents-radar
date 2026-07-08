/**
 * CAD & Mechanical Design data source — GitHub Search API for
 * CAD, geometry, 3D-printing, generative-design repositories,
 * plus ArXiv cs.GR/cs.CG papers and RSS news.
 */

import type { ArxivPaper } from "./arxiv.js";
import { fetchArxivCategory, fetchRssNews, type RssItem } from "./rss.js";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface CadRepo {
  fullName: string;
  description: string;
  language: string;
  stars: number;
  pushedAt: string;
  url: string;
  searchQuery: string;
}

export interface CadData {
  repos: CadRepo[];
  papers: ArxivPaper[];
  news: RssItem[];
  fetchSuccess: boolean;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const SEARCH_QUERIES = [
  { q: "topic:cad", label: "cad" },
  { q: "topic:freecad", label: "freecad" },
  { q: "topic:openscad", label: "openscad" },
  { q: "topic:computational-geometry", label: "geom" },
  { q: "topic:generative-design", label: "gendesign" },
  { q: "topic:3d-printing", label: "3dp" },
  { q: "topic:mesh", label: "mesh" },
  { q: "topic:step", label: "step" },
  { q: "topic:g-code", label: "gcode" },
  { q: "code-cad+pipeline", label: "codecad" },
];

const ARXIV_CATEGORIES = ["cs.GR", "cs.CG"];

// ---------------------------------------------------------------------------
// Fetch
// ---------------------------------------------------------------------------

async function searchCadRepos(sevenDaysAgo: string): Promise<CadRepo[]> {
  const token = process.env["GITHUB_TOKEN"] ?? "";
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const seen = new Set<string>();
  const all: CadRepo[] = [];

  await Promise.all(
    SEARCH_QUERIES.map(async ({ q, label }) => {
      try {
        const query = `${q}+pushed:>${sevenDaysAgo}&sort=stars&order=desc`;
        const url = `https://api.github.com/search/repositories?q=${query}&per_page=15`;
        const resp = await fetch(url, { headers });
        if (!resp.ok) {
          console.error(`  [cad/search] "${label}": HTTP ${resp.status}`);
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
        console.log(`  [cad/search] "${label}": ${added} repos`);
      } catch (err) {
        console.error(`  [cad/search] "${label}": ${err}`);
      }
    }),
  );

  return all;
}

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export async function fetchCadData(): Promise<CadData> {
  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);

  try {
    const [repos, papers, news] = await Promise.all([
      searchCadRepos(sevenDaysAgo),
      fetchArxivCategory(ARXIV_CATEGORIES).catch((): ArxivPaper[] => []),
      fetchRssNews("cad").catch((): RssItem[] => []),
    ]);

    console.log(
      `  [cad] ${repos.length} repos, ${papers.length} papers, ${news.length} news (from ${SEARCH_QUERIES.length} queries)`,
    );
    return { repos, papers, news, fetchSuccess: repos.length > 0 || papers.length > 0 || news.length > 0 };
  } catch (err) {
    console.error(`  [cad] Fetch failed: ${err}`);
    return { repos: [], papers: [], news: [], fetchSuccess: false };
  }
}
