# Hugging Face 热门模型日报 2026-08-13

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-13 01:22 UTC

---

# 📊 Hugging Face 热门模型日报 · 2026-08-13

---

## 🔥 今日速览

今日 HuggingFace 趋势榜被 **视频生成模型** 重度占领 —— **MiniMaxAI/MiniMax-H3** 及其 12 个生态衍生模型（LoRA、ComfyUI 包装、GGUF 量化、现实人像增强）横扫榜单，是真正意义上的"日现象"。LLM 端，**moonshotai/Kimi-K3** 以 **10,584 点赞** 遥遥领先，紧随其后的是 **deepseek-ai/DeepSeek-V4-Flash**（3,238 赞）和 **Qwen3.8-2.4T** MoE 超大模型。社区微调与量化（尤其是 unsloth 与 DavidAU）继续主导衍生生态，"基础模型 + 即用变体" 的流水线已高度成熟。

---

## 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---|---|---|
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | **10,584** | 1.57M | 月之暗面 K3 多模态对话模型，本周榜首，下载量与点赞双爆发 |
| [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,238 | 1.05M | 极速 V4-Flash 推理优化版本，社区下载量破百万 |
| [Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 507 | 978 | 通义千问 3.8，**2.4 万亿参数 MoE**超大旗舰 |
| [LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 584 | 93.7K | Liquid 团队 2.6B 高效小模型，主打低延迟部署 |
| [NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 205 | 19.3K | 英伟达 Lightning MoE 30B-A3B，NVFP4 量化推理 |
| [NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16) | nvidia | 116 | 15.7K | 同上模型的 BF16 完整精度版本 |
| [Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 319 | 6.1K | 灵极 3.0 Flash 混合架构，主打速度与质量平衡 |
| [Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 190 | 0 | 灵极 3.0 微型化版本 |
| [maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 346 | 2.0K | 社区 MoE 预览版，causal LM 实验性发布 |
| [Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) | Qwen | 116 | 3.9K | 旗舰 MoE 的 FP8 量化版本，部署友好 |

---

## 🎨 多模态与生成（图像 / 视频 / 音频）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---|---|---|
| [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | **3,716** | 83.5K | 本周**视频生成统治者**，image-text-to-video 旗舰模型，下载量爆炸 |
| [Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,297 | 0 | Meta 多模态 30B 新作，但下载尚未起量 |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,258 | **6.80M** | H3 的 ComfyUI 工程化发布版本，**下载量冠军** |
| [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 569 | 39 | Lightricks 新一代图像→视频扩散模型 |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 411 | 20.4K | 第三方 H3 加速版（Turbo），支持 t2v/i2v/r2v |
| [NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 352 | 653 | 英伟达语音对话 11B，融合 ASR+TTS+LLM |
| [BigBang-v1](https://huggingface.co/endless-frontier/BigBang-v1) | endless-frontier | 182 | 708 | 基于 Qwen3.5 MoE 的多模态微调实验 |

---

## 🔧 专用模型

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---|---|---|
| [NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 352 | 653 | 语音对话一体化模型（兼具上一栏分类） |

> 注：本日趋势榜中专用模型较少，反映出当前社区重点仍在通用 LLM 与多媒体生成；专门垂类（代码/数学/医疗）未进入 Top 30。

---

## 📦 微调与量化（社区衍生 / GGUF / AWQ / LoRA）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---|---|---|
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-...-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,957 | 2.52M | 名称最长量级 GGUF，社区**取消审查+Heretic** 风潮代表 |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 701 | 0 | H3 首个高赞 Turbo LoRA（703 赞） |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 666 | 208K | unsloth 的 DeepSeek V4 GGUF，下载活跃 |
| [ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 477 | 0 | 命名混搭 Qwen3-VL + H3 的 INT8 转换实验 |
| [drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 301 | 0 | H3 LoRA 的 ComfyUI 修剪版 |
| [Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 294 | 0 | Kijai 经典工程风格包装 |
| [SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 287 | 0 | H3 社区 NSFW 风格 LoRA |
| [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 360 | 0 | Meta Muse-Glimmer 的 GGUF 量化首发 |
| [meta-models/Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 240 | 0 | 官方 GGUF 版本 |
| [Kijai/MiniMax-H3-experimental](https://huggingface.co/Kijai/MiniMax-H3-experimental) | Kijai | 214 | 0 | Kijai 实验性 H3 分支 |
| [fal/MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 146 | 0 | fal 推出的 H3 真人写实 LoRA |
| [lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA](https://huggingface.co/lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA) | lightx2v | 141 | 353 | H3 提示词改写专用 LoRA |
| [unsloth/MiniMax-H3-GGUF](https://huggingface.co/unsloth/MiniMax-H3-GGUF) | unsloth | 137 | 781 | H3 的 GGUF 量化版（stable-diffusion.cpp 兼容） |

---

## 🌱 生态信号

**视频生成已成本周 Hub 一条绝对主线**：MiniMax-H3 单点出圈后，24 小时内即出现 Turbo LoRA、ComfyUI 转换、NSFW LoRA、Realism LoRA、Prompt-Rewriter LoRA、GGUF 量化等十余个衍生分支，呈现"基础

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*