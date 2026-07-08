/**
 * Robotics & Embodied AI data source — GitHub Search API for
 * robotics-related repositories, plus ArXiv cs.RO papers and RSS news.
 */

import type { ArxivPaper } from "./arxiv.js";
import { fetchArxivCategory, fetchRssNews, type RssItem } from "./rss.js";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface RoboticsRepo {
  fullName: string;
  description: string;
  language: string;
  stars: number;
  pushedAt: string;
  url: string;
  searchQuery: string;
}

export interface RoboticsData {
  repos: RoboticsRepo[];
  papers: ArxivPaper[];
  news: RssItem[];
  fetchSuccess: boolean;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const SEARCH_QUERIES = [
  { q: "topic:robotics", label: "robotics" },
  { q: "topic:ros", label: "ros" },
  { q: "topic:embodied-ai", label: "embodied-ai" },
  { q: "topic:robot-learning", label: "robot-learning" },
  { q: "topic:reinforcement-learning", label: "rl" },
  { q: "topic:simulation", label: "sim" },
  { q: "topic:gazebo", label: "gazebo" },
  { q: "topic:mujoco", label: "mujoco" },
  { q: "topic:imitation-learning", label: "imitation" },
  { q: "vla+robot", label: "vla" },
];

const ARXIV_CATEGORIES = ["cs.RO"];

// ---------------------------------------------------------------------------
// Fetch
// ---------------------------------------------------------------------------

async function searchRoboticsRepos(sevenDaysAgo: string): Promise<RoboticsRepo[]> {
  const token = process.env["GITHUB_TOKEN"] ?? "";
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const seen = new Set<string>();
  const all: RoboticsRepo[] = [];

  await Promise.all(
    SEARCH_QUERIES.map(async ({ q, label }) => {
      try {
        const query = `${q}+pushed:>${sevenDaysAgo}&sort=stars&order=desc`;
        const url = `https://api.github.com/search/repositories?q=${query}&per_page=15`;
        const resp = await fetch(url, { headers });
        if (!resp.ok) {
          console.error(`  [robotics/search] "${label}": HTTP ${resp.status}`);
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
        console.log(`  [robotics/search] "${label}": ${added} repos`);
      } catch (err) {
        console.error(`  [robotics/search] "${label}": ${err}`);
      }
    }),
  );

  return all;
}

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export async function fetchRoboticsData(): Promise<RoboticsData> {
  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);

  try {
    const [repos, papers, news] = await Promise.all([
      searchRoboticsRepos(sevenDaysAgo),
      fetchArxivCategory(ARXIV_CATEGORIES).catch((): ArxivPaper[] => []),
      fetchRssNews("robotics").catch((): RssItem[] => []),
    ]);

    console.log(
      `  [robotics] ${repos.length} repos, ${papers.length} papers, ${news.length} news (from ${SEARCH_QUERIES.length} queries)`,
    );
    return { repos, papers, news, fetchSuccess: repos.length > 0 || papers.length > 0 || news.length > 0 };
  } catch (err) {
    console.error(`  [robotics] Fetch failed: ${err}`);
    return { repos: [], papers: [], news: [], fetchSuccess: false };
  }
}
