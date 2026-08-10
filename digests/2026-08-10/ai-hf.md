# Hugging Face 热门模型日报 2026-08-10

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-10 01:14 UTC

---

# Hugging Face 热门模型日报
**日期：2026-08-10**

---

## 📌 今日速览

本周 Hub 热度由视频生成模型 **MiniMax-H3** 全面主导——榜单 30 个模型中有 11 个围绕其衍生的 LoRA、GGUF、ComfyUI 节点和实验性微调展开，反映出新一代视频生成模型引发了一波"基础设施级"的社区跟进。同时，大语言模型侧 **Kimi-K3**（10,399 赞）与 **GLM-5.2**（4,914 赞）表现强劲，Baidu **Unlimited-OCR** 与 NVIDIA **VoiceChat-11B** 则把 OCR 与语音对话这两个传统任务重新推上热度榜。多模态仍是开源主线，Qwen3 系列则在社区量化与"去审查"微调生态中持续走热。

---

## 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|-----------|
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,399 | 1,456,459 | Moonshot 第三代旗舰，feature-extraction + compressed-tensors 路线，多模态对话能力持续在线 |
| [GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,914 | 2,488,397 | 智谱 GLM 系列的最新 MoE 版本（glm_moe_dsa），下载量级稳定，国产开源 LLM 主力之一 |
| [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 2,945 | 868,576 | DeepSeek V4 家族的轻量对话分支，主打高性价比生成 |
| [Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,808 | 2,390,692 | Qwen3.6 的"去审查"融合微调版，社区蒸馏/合并玩法的代表作 |
| [Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF) | LuffyTheFox | 455 | 396,282 | Qwen3.6 35B-A3B MoE 架构的 Hermes 风格 GGUF 量化版 |
| [LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 452 | 85,651 | Liquid AI 的轻量级高效 LFM2 系列，主打端侧部署 |
| [maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 289 | 1,089 | 小众 MoE 架构预览版，因架构新颖上榜 |
| [Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 245 | 4,747 | 包含 bailing_hybrid 混合架构的小型对话模型 |
| [BigBang-v1](https://huggingface.co/endless-frontier/BigBang-v1) | endless-frontier | 123 | 482 | 基于 qwen3_5_moe 的多模态对话微调，仍处早期阶段 |

---

## 🎨 多模态与生成（图像 / 视频 / 音频）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|-----------|
| [FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev) | black-forest-labs | 14,059 | 487,171 | 长期霸榜的经典文生图模型，社区生态成熟 |
| [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,245 | 35,295 | 本周视频生成最大爆点，支持 image-text-to-video 的多模态生成 |
| [Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,986 | 2,889,062 | 百度推出的高下载量 OCR 模型，把"不限场景"的文字识别重新推回热门 |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,073 | 4,947,943 | MiniMax-H3 的官方单文件版，下载量级远高于其他衍生模型 |
| [Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 418 | 0 | 把 Qwen3-VL 与 MiniMax-H3 视觉编码器串联的混合多模态实验 |
| [Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 333 | 13,132 | 基于 arktts 架构的轻量 TTS 预览版，0.6B 参数即可部署 |
| [NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 260 | 543 | NVIDIA 实验室推出的端到端语音对话模型，融合多篇 arxiv 成果 |
| [Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 233 | 6,117 | H3 的蒸馏 Turbo 版，主打更快推理速度 |
| [Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 323 | 461,150 | 微软的多模态视觉语言模型，企业级落地代表 |

---

## 🔧 专用模型（代码 / OCR / 安全）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|-----------|
| [KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 552 | 18,574 | 基于 Qwen3.5 MoE 的代码专用模型，主打开发者场景 |
| [Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 211 | 5,651 | Mistral 推出的安全/护栏（Shield）系列 3B 模型 |

---

## 📦 微调与量化（社区微调 / GGUF / LoRA）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|-----------|
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 545 | 0 | H3 的 Turbo LoRA 加速方案，社区改进的代表 |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 627 | 188,761 | Unsloth 出品的官方 GGUF 量化版，终端可跑 |
| [realrebelai/MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) | realrebelai | 188 | 160,747 | H3 的多档位 GGUF 量化合集，本地部署首选 |
| [LiquidAI/LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF) | LiquidAI | 174 | 68,468 | LFM2.5 官方 GGUF 版，配合 llama.cpp 一键启动 |
| [Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 234 | 0 | ComfyUI 友好的 H3 节点封装 |
| [drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 231 | 0 | 剪枝版 Turbo LoRA，专为 ComfyUI 工作流优化 |
| [SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 231 | 0 | H3 的社区风格化微调分支 |
| [Kijai/MiniMax-H3-experimental](https://huggingface.co/Kijai/MiniMax-H3-experimental) | Kijai | 169 | 0 | H3 的实验性 fork，开发者尝鲜首选 |
| [Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot) | Abiray | 155 | 511,473 | 融合 NVFP4 + INT4/INT8 + ConvRot 多种压缩方案的 H3 |
| [sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4](https://huggingface.co/sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4) | sakamakismile | 143 | 0 | NVFP4 量化的"Heretic"风格 H3 文本编码器组合 |

---

## 📊 生态信号

本周最显著的信号是 **MiniMax-H3 正在重演"FLUX/Wan2.1 现象"**——一个核心视频生成模型短时间内催生出十余个 LoRA、GGUF、ComfyUI 节点、量化变体与混合编码器实验，说明开源社区已经把视频生成视作继图像生成之后的下一个"基础设施赛道"。与此同时，**Qwen3.6 系列的"去审查/Hermes/Heretic"微调**与 **Unsloth、realrebelai 等专业量化账号** 双线活跃，体现了"基础模型 + 社区量化/微调"的两层生态结构越发成熟；开源权重（GLM-5.2、Kimi-K3、DeepSeek-V4-Flash、FLUX.1-dev）继续压倒闭源分发，而企业级研究产物（NVIDIA VoiceChat、Microsoft Mage-VL、Baidu Unlimited-OCR）正以高质量单点能力加入榜单，呈现"通用大模型 + 任务专用模型"并行的格局。

---

## 🌟 值得探索

1. **[MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — 当前最值得跟进的视频生成底座，配套生态（Turbo LoRA、ConvRot、NVFP4）齐全，是研究可控视频生成与高效推理的优选样本。
2. **[Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — 单周点赞过万，compressed-tensors + feature-extraction 路线在生产部署中值得对比同类模型。
3. **[Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — 下载量近 290 万、点赞近 4,000，对"任意场景文字识别"这一长期难题给出了工程级解法，适合作为多模态前置模块集成。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*