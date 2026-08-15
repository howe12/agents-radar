# Hugging Face 热门模型日报 2026-08-15

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-15 00:52 UTC

---

# 🤗 Hugging Face 热门模型日报
**日期：2026-08-15 | 共 30 个热门模型**

---

## 📰 今日速览

今天榜单一句话：**「Kimi-K3 登顶、Minimax-H3 统治视频、Qwen3.8 全面铺开」**。Moonshot 的 [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) 以 **10,673 赞**成为本周最受关注的模型，展示了"功能提取 + 多模态理解"路线；与此同时，国产文本到视频模型 [Minimax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) 凭借 197 万次下载和庞大的衍生生态（含 Comfy-Org 适配、Turbo 版本、多家 LoRA）成为视频生成领域事实上的新基准；Qwen、DeepSeek、NVIDIA 三大家族也在榜单上"密集刷屏"。

---

## 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | 👍 | ⬇️ | 一句话 |
|------|------|-----|-----|--------|
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | **10,673** | 1.97M | 本周榜首，多模态 + feature-extraction 路线，被视为下一代"长上下文推理 + 压缩表征"的代表 |
| [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 8,989 | 2 | 通义千问 3.8 代旗舰，多模态版 27B，点赞活跃说明发布热度极高 |
| [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,383 | 1.60M | V4 Flash 快速版，主打低延迟 + 高吞吐，下载量惊人 |
| [Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 916 | 3,832 | Qwen3.8 超大规模 MoE，总参 2.4T / 激活 95B |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 615 | 124K | 轻量级 2.6B，主打端侧部署 |
| [DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 433 | 245 | V4 旗舰 Pro 版，资深度对齐、刚发布 |
| [Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 235 | 2,283 | 含元智能（Inclusion AI）小巧路线，MIT 许可证友好 |
| [NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16) | nvidia | 143 | 34K | 30B-A3B Hybrid MoE，"Lightning" 系列对齐推理 |
| [dots3-note-prev](https://huggingface.co/dots-studio/dots3-note-prev) | dots-studio | 140 | 11 | Dots3 预览版，主打"记录/笔记"场景 |

---

## 🎨 多模态与生成（图像 / 视频 / 音频）

| 模型 | 作者 | 👍 | ⬇️ | 一句话 |
|------|------|-----|-----|--------|
| [Minimax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,920 | **1.99M** | MiniMax 最新视频生成，文字/图像/参考三模式（即 r2v），日下载百万级 |
| [Meta-Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,512 | 165K | Meta 的图文多模态对话 30B，主打"glimmer"轻量化 |
| [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 858 | 207K | 老牌视频厂 Lightricks 升级版，支持图生 / 文生 / 视频续编 |
| [Minimax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 651 | 63 | 文本到音乐第三代，独占"music-generation"赛道 |
| [Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 493 | 149K | LightX2V 出品的 H3 蒸馏 Turbo 版，主打速度 |
| [Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 162 | 10K | ComfyUI 单文件文本到图像 2.9B，独立创作者作品 |

---

## 🔧 专用模型

| 模型 | 作者 | 👍 | ⬇️ | 一句话 |
|------|------|-----|-----|--------|
| [NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 381 | 1,366 | Nemotron 实验室的端到端语音对话 11B，与 arxiv:2604.04847 论文挂钩 |
| [Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 235 | 2,283 | 同时具备 bailing_hybrid + 自定义代码，定位混合推理小模型 |

> Kimi-K3 虽归在 LLM 一类，但其 `feature-extraction + compressed-tensors` 标签暗示它也具备专门的表征/压缩能力。

---

## 📦 微调与量化（社区派生 / GGUF / AWQ / FP8）

| 模型 | 作者 | 👍 | ⬇️ | 说明 |
|------|------|-----|-----|------|
| [Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 295 | 0 | 官方 FP8 量化版，单卡可跑 27B |
| [Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) | Qwen | 184 | 9,334 | MoE 旗舰的 FP8 量化变体 |
| [NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 257 | 119K | 4-bit NVFP4，Blackwell 优化 |
| [Comfy-Org/Minimax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,317 | **11.7M** | H3 的 ComfyUI 工程化发行版，下载量全榜第一 |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,016 | 2.89M | 社区"解封向"微调 + GGUF，下载夸张 |
| [Kijai/Minimax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 339 | 0 | 专为 ComfyUI 节点工作流打包的 H3 |
| [Minimax-H3-Turbo-Lora](https://huggingface.co/larryvrh/Minimax-H3-Turbo-Lora) | larryvrh | 742 | 0 | H3-Turbo 上的 LoRA 微调 |
| [Minimax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 176 | 9,060 | fal 团队出品的人物写实 LoRA |
| [Minimax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/Minimax-H3-Turbo-L

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*