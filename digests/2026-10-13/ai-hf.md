# Hugging Face 热门模型日报 2026-10-13

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-13 04:58 UTC

---

# Hugging Face 热门模型日报 · 2026-10-13

---

## 1. 今日速览

今日 Hub 流量高度集中于 **Qwen3.8 系列**——原版 Qwen3.8-27B 以 17,585 赞领跑全榜，轻量版 Qwen3.8-Flash-Next 紧随其后，衍生出的 GGUF 量化、Uncensored、Code 等变体几乎占据榜单三分之一。**视频生成**赛道由 Lightricks/LTX-2.5 强势带热（7,503 赞，172 万次下载），而 **多模态**领域则由 Cloudflare 的 Clef 双子、DeepSeek-V4.1-Flash、百度 Unlimited-OCR 共同推动。社区层面，**GSQ/RCO 混合精度量化**与**Uncensored 微调**已成为本周最活跃的两条生产线。

---

## 2. 热门模型

### 🧠 语言模型（LLM / 对话 / 指令微调）

- **[Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1)**
  作者：Aleph-Alpha | 👍 916 | ⬇️ 14,018
  德国厂商 Aleph Alpha 推出的 MoE 推理模型，强调可解释与本地化部署，重新回归欧洲开源前沿。

- **[ConwayResearch/Underdog-Saluki-27B-1.0](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0)**
  作者：ConwayResearch | 👍 379 | ⬇️ 242,329
  主打 2-bit 极致压缩的 llama.cpp 量化版本，原生支持 Tool-Calling / Function-Calling，适合边缘端 agent 场景。

- **[Venastine-Research/Xing4.0-29B-A4B-GGUF](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF)**
  作者：Venastine-Research | 👍 705 | ⬇️ 52,788
  29B 参数、A4B 激活的 MoE 架构 GGUF 版本，主打高质量文本生成，活跃 MoE 社区实验生态。

- **[jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer)**
  作者：jialinyyzz | 👍 1,345 | ⬇️ 46,070
  "AI 文本人性化"微调模型，可将机器生成文本改写得更自然，常用于绕过 AI 检测或润色场景。

---

### 🎨 多模态与生成（图像 / 视频 / 音频）

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**
  作者：Lightricks | 👍 7,503 | ⬇️ 1,719,766
  统一式 image-to-video / text-to-video / video-to-video 视频生成模型，本周视频赛道当之无愧的爆款。

- **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)**
  作者：Qwen | 👍 3,266 | ⬇️ 142,375
  阿里 Qwen 图像生成与编辑基座模型，支持 image-editing，是 Qwen 视觉系列的核心。

- **[Qwen/Qwen-Image-2.1-Turbo](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo)**
  作者：Qwen | 👍 649 | ⬇️ 6,787
  上述模型的蒸馏加速版，牺牲少量质量换取生成速度，适合实时出图场景。

- **[speridlabs/iris-3b](https://huggingface.co/speridlabs/iris-3b)**
  作者：speridlabs | 👍 203 | ⬇️ 706
  3B 轻量 Pixel-Space Diffusion 图像生成模型，主打小显存可用。

- **[canberkkkkkk/ema-lightning](https://huggingface.co/canberkkkkkk/ema-lightning)**
  作者：canberkkkkkk | 👍 393 | ⬇️ 20,310
  土耳其语 TTS 模型，针对小语种语音合成，可填补主流模型在土耳其语上的空白。

- **[Cactus-Compute/whistle](https://huggingface.co/Cactus-Compute/whistle)**
  作者：Cactus-Compute | 👍 366 | ⬇️ 18,643
  端侧 ASR 模型，强调 on-device 部署，瞄准移动端语音识别场景。

- **[Cloudflare/clef](https://huggingface.co/Cloudflare/clef)** & **[Cloudflare/clef-flash](https://huggingface.co/Cloudflare/clef-flash)**
  作者：Cloudflare | 👍 2,101 / 791 | ⬇️ 15,064 / 23,285
  基于 Qwen3.5 的多模态视觉理解模型，Cloudflare 在 Workers AI 平台上的旗舰 VLM，提供标准版与 Flash 加速版。

- **[LiquidAI/d1-3B](https://huggingface.co/LiquidAI/d1-3B)**
  作者：LiquidAI | 👍 353 | ⬇️ 11,866
  基于 LFM2-VL 架构的 3B 视觉-语言模型，Liquid AI 持续推进高效小模型路线。

- **[openbmb/MiniCPM-V-4.7-35B-A3B](https://huggingface.co/openbmb/MiniCPM-V-4.7-35B-A3B)**
  作者：openbmb | 👍 176 | ⬇️ 166
  清华系面壁智能 35B-A3B MoE 多模态大模型，旗舰 MiniCPM-V 系列最新版本。

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**
  作者：Qwen | 👍 17,585 | ⬇️ 6,895,303
  本周全榜冠军，27B 规模多模态对话模型，下载量逼近 700 万，是 Qwen 系列本周最热旗舰。

- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)**
  作者：Qwen | 👍 6,151 | ⬇️ 1,934,542
  基于 qwen4_exp 架构的 Flash 轻量版，主打低延迟对话与多模态应用。

- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)**
  作者：deepseek-ai | 👍 4,418 | ⬇️ 1,294,550
  DeepSeek 4.1 Flash 文本/多模态双任务版本，国产顶级开源模型继续高速迭代。

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
  作者：baidu | 👍 4,527 | ⬇️ 1,205,646
  百度推出的通用 OCR 模型，"Unlimited" 暗示其面向任意版式/语种的文本识别。

- **[facebook/sam3](https://huggingface.co/facebook/sam3)**
  作者：facebook | 👍 4,170 | ⬇️ 2,054,071
  Meta SAM3 分割大模型，支持图像与视频统一分割，是视觉基础模型重要进展。

---

### 🔧 专用模型（代码 / 嵌入 / 分类 / OCR）

- **[google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2)**
  作者：google | 👍 1,961 | ⬇️ 115,763
  Google 推出的 Gemma2 架构嵌入模型，feature-extraction 领域本周最热，是 RAG 检索系统的重要候选。

- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)**
  作者：convaiinnovations | 👍 5,537 | ⬇️ 45,062
  "System-One" 校准式文本分类模型，强调可解释决策，在对齐与安全研究社区受关注。

- **[autotrust/JEV-35B](https://huggingface.co/autotrust/JEV-35B)**
  作者：autotrust | 👍 237 | ⬇️ 6,262
  基于 Qwen3.5 MoE 的 System-One 判别器，定位为"AI 评判 AI"的元分类模型。

- **[nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2](https://huggingface.co/nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2)**
  作者：nerkyor | 👍 286 | ⬇️ 75,302
  集成 Efficient-Think、MTP、DFlash2 等多种推理增强的 Qwen3.8 代码变体，社区实验性质强。

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)**
  作者：DavidAU | 👍 1,698 | ⬇️ 2,025,498
  DavidAU 长期活跃社区作者推出的 Uncensored + 编码 + 故事创作融合 GGUF 量化模型。

---

### 📦 微调与量化（GGUF / AWQ / 社区变体）

- **[abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized)**
  作者：abenzerps | 👍 4,115 | ⬇️ 2,188,658
  Qwen-Image-2.1 的去审查量化版，ComfyUI 友好，是本周下载量第二高的模型。

- **[AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF](https://huggingface.co/AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF)**
  作者：AtomicChat | 👍 377 | ⬇️ 161,715
  Turbo 加速版的去审查 GGUF 量化，针对推理速度与内容自由度双重优化。

- **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)**
  作者：ISTA-DASLab | 👍 835 | ⬇️ 4,413,142
  ISTA-DASLab 推出的 GSQ（Grouped Sparsity Quantization）+ RCO（Rotary Calibration Optimization）混合精度方案，下载量超 440 万。

- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)**
  作者：ISTA-DASLab | 👍 2,180 | ⬇️ 1,482,471
  上述 GSQ-RCO 技术在 27B 旗舰版上的对应产物，是混合精度量化的代表性成果。

- **[orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF)**
  作者：orcarouter | 👍 820 | ⬇️ 629,886
  Flash-Next 的 abliterated/Uncensored 变体，保留模型能力同时放宽内容限制。

- **[unsloth/embeddinggemma-2-GGUF](https://huggingface.co/unsloth/embeddinggemma-2-GGUF)**
  作者：unsloth | 👍 285 | ⬇️ 71,914
  Unsloth 维护的 EmbeddingGemma-2 GGUF 量化版，是检索增强场景的常用底座。

---

##

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*