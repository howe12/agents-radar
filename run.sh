#!/bin/bash
# agents-radar 本地运行脚本
# 以 deepseek-chat 为 LLM provider
# 凭证从临时文件读取，不硬编码

export GITHUB_TOKEN=*** /tmp/gh_token.txt)
export LLM_PROVIDER=deepseek
export DEEPSEEK_API_KEY=*** /tmp/ds_key.txt)
export DEEPSEEK_MODEL=deepseek-chat

# 不设 DIGEST_REPO —— 跳过 GitHub Issue 创建

cd /home/leo/agents-radar
pnpm start 2>&1
