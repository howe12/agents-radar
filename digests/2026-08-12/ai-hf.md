# Hugging Face 热门模型日报 2026-08-12

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-12 01:20 UTC

---

# 🤗 Hugging Face 热门模型日报
**日期：2026-08-12 · 数据来源：HF Hub 周热门 Top 30**

---

## 一、今日速览

🔥 本周 HF 热点几乎被 **MiniMax-H3 视频生成生态** 统治——一款基础模型衍生出 10 余款 LoRA / ComfyUI / Turbo 版本，社区创作力惊人。🚀 语言模型方面，**MoonshotAI/Kimi-K3 以 10,526 点赞登顶**，**DeepSeek-V4-Flash-0731 下载量突破百万**（1,048,685），国产开源 LLM 持续领跑。📦 **GGUF / NVFP4 / INT8 量化版本密集涌现**，unsloth、lightx2v、Kijai 等社区玩家已成为模型分发的关键节点。OCR（百度 Unlimited-OCR）、语音（NVIDIA VoiceChat）、安全护栏（Mistral Shieldstral）等专用模型也值得关注。

---

## 二、热门模型

### 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话点评 |
|------|------|------|------|------------|
| [**moonshotai/Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,526 | 1,565,484 | 本周榜冠军，Kimi K3 主模型，混合架构 + compressed-tensors，主打开源 SOTA |
| [**deepseek-ai/DeepSeek-V4-Flash-0731**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseekai | 3,150 | 1,048,685 | DeepSeek V4 Flash 高速推理版，下载量破百万，社区首选生产模型 |
| [**LiquidAI/LFM2.5-2.6B**](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 550 | 93,668 | Liquid 全新 2.6B 小模型，主打端侧高效推理 |
| [**inclusionAI/Ling-3.0-flash**](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 303 | 6,148 | 包含 Bailing 混合架构的轻量 Flash 版本 |
| [**deepgrove/maple-preview**](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 332 | 2,049 | 社区 MoE 预览版，主打架构探索 |
| [**endless-frontier/BigBang-v1**](https://huggingface.co/endless-frontier/BigBang-v1) | endless-frontier | 166 | 708 | 基于 Qwen3.5 MoE 的多模态对话实验模型 |
| [**nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4**](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 126 | 19,250 | Nemotron 3.5 Lightning NVFP4 量化版，主打推理加速 |

### 🎨 多模态与生成（视频 / 图像 / 音频 / OCR）

| 模型 | 作者 | 点赞 | 下载 | 一句话点评 |
|------|------|------|------|------------|
| [**MiniMaxAI/MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,574 | 59,368 | 本周视频生成赛道核心，image-text-to-video 一体化，衍生生态超 10+ 版本 |
| [**baidu/Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 4,018 | 2,892,191 | OCR 黑马，点赞仅次于 Kimi-K3，主打无限制场景文本识别 |
| [**Comfy-Org/MiniMax-H3**](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,212 | 6,798,796 | H3 的 ComfyUI 单文件版，下载量近 700 万，工作流部署首选 |
| [**lightx2v/Minimax-h3-Turbo**](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 341 | 20,376 | H3 加速版，支持 t2v / i2v / r2v 三模态生成 |
| [**larryvrh/MiniMax-H3-Turbo-Lora**](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 651 | 0 | Turbo 版 H3 的 LoRA 适配器，支持文生视频 + 音视频联合生成 |
| [**Lightricks/LTX-2.5**](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 213 | 39 | LTX 系列 2.5 版本，覆盖 image-to-video / video-to-video 全流程 |
| [**fal/MiniMax-H3-Realism-People-LoRA**](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 111 | 0 | fal 推出的 H3 真人写实风格 LoRA |
| [**SexGod1979/PinkCherry_MiniMax-H3**](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 265 | 0 | 社区 H3 风格化微调（Apache-2.0 协议） |

### 🔧 专用模型（语音 / 安全 / OCR / 视觉语言）

| 模型 | 作者 | 点赞 | 下载 | 一句话点评 |
|------|------|------|------|------------|
| [**nvidia/NVIDIA-NemotronLabs-VoiceChat-11B**](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 325 | 653 | NVIDIA 语音对话 11B，主打低延迟端到端语音交互 |
| [**mistralai/Shieldstral-1.0-3B**](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 228 | 6,769 | Mistral 安全护栏模型，3B 体量用于内容审核 |
| [**meta-models/Muse-Glimmer-30B**](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,097 | 0 | Meta 多模态对话模型 Muse-Glimmer-30B，已催生多个 GGUF 衍生版 |

### 📦 微调与量化（社区 GGUF / LoRA / INT8 / NVFP4）

| 模型 | 作者 | 点赞 | 下载 | 一句话点评 |
|------|------|------|------|------------|
| [**DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF**](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,898 | 2,521,093 | Qwen3.6 27B 去审查 + Heretic 风格微调，下载量超 250 万 |
| [**unsloth/DeepSeek-V4-Flash-0731-GGUF**](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 649 | 207,990 | DeepSeek V4 Flash 的 unsloth GGUF 量化版 |
| [**ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot**](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 458 | 0 | Qwen3-VL 32B 视觉语言模型的 INT8 ConvRot 量化版，针对 ComfyUI H3 优化 |
| [**LiquidAI/LFM2.5-2.6B-GGUF**](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF) | LiquidAI | 201 | 111,942 | LFM2.5 小模型的 llama.cpp GGUF 版本 |
| [**unsloth/Muse-Glimmer-30B-GGUF**](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 305 | 0 | Meta Muse-Glimmer 的 GGUF 量化 |
| [**meta-models/Muse-Glimmer-30B-GGUF**](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 202 | 0 | 官方 Muse-Glimmer GGUF 版本 |
| [**Kijai/MiniMax-H3_comfy**](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 276 | 0 | H3 模型的 ComfyUI 工作流包装 |
| [**drbaph/MiniMax-H3-Turbo-Lora-ComfyUI**](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 273 | 0 | H3 Turbo LoRA 的 ComfyUI 剪枝适配器 |
| [**Kijai/MiniMax-H3-experimental**](https://huggingface.co/Kijai/MiniMax-H3-experimental) | Kijai | 191 | 0 | Kijai 的 H3 实验性版本 |
| [**lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA**](https://huggingface.co/lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA) | lightx2v | 129 | 353 | 针对 H3 的 prompt 改写

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*