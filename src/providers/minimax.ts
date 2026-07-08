/**
 * MiniMax provider — OpenAI-compatible endpoint.
 *
 * Env vars:
 *   MINIMAX_API_KEY  - API key
 *   MINIMAX_MODEL    - model name (default: MiniMax-M3)
 *   MINIMAX_BASE_URL - base URL (default: https://api.minimax.chat/v1)
 *
 * Note: MiniMax-M3 is a reasoning model that emits <think>...</think> tags.
 * This provider auto-strips them for clean output.
 */

import { OpenAICompatibleProvider } from "./openai-compatible.ts";

const DEFAULT_BASE_URL = "https://api.minimax.chat/v1";

export class MiniMaxProvider extends OpenAICompatibleProvider {
  readonly name = "minimax";

  constructor(opts?: { apiKey?: string; model?: string; baseURL?: string }) {
    super({
      apiKey: opts?.apiKey ?? process.env["MINIMAX_API_KEY"],
      baseURL: opts?.baseURL ?? process.env["MINIMAX_BASE_URL"] ?? DEFAULT_BASE_URL,
      model: opts?.model ?? process.env["MINIMAX_MODEL"] ?? "MiniMax-M3",
    });
  }

  /** Strip thinking tags that MiniMax reasoning models emit. */
  private stripThinking(text: string): string {
    // Remove <think>...</think> blocks (possibly multi-line)
    return text.replace(/<think>[\s\S]*?<\/think>\n?/g, "").trim();
  }

  async call(prompt: string, maxTokens: number): Promise<string> {
    const raw = await super.call(prompt, maxTokens);
    return this.stripThinking(raw);
  }
}
