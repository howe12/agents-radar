# Hugging Face 热门模型日报 2026-10-06

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-06 04:19 UTC

---

# Hugging Face 热门模型日报
**日期：2026-10-06**

---

## 一、今日速览

今日 Hugging Face 热度榜由 **Qwen 系列**绝对主导——`Qwen3.8-27B` 以 17,046 点赞、670 万次下载稳居榜首，`Qwen3.8-Flash-Next` 也紧随其后。视频生成赛道再添黑马，**Lightricks/LTX-2.5** 一周拿下 6,500+ 点赞，成为 SOTA 多模态视频生成的有力竞争者。与此同时，社区微调与 GGUF 量化生态持续井喷，Qwen3.8 已有数十个变体（Heretic、Uncensored、Coder、二值/三值量化版本），折射出开源权重大模型"基础模型 + 社区炼金"的成熟分工。

---

## 二、热门模型

### 🧠 语言模型（LLM、对话、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 简介 |
|------|------|------|------|------|
| **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** | Qwen | 17,046 | 6,758,884 | 本周榜首，通义新一代 27B 多模态对话旗舰，下载量遥遥领先 |
| **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)** | deepseek-ai | 4,133 | 869,321 | DeepSeek 新一代 Flash 版本，主打低延迟多模态推理 |
| **[Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1)** | Aleph-Alpha | 640 | 2,453 | 欧洲厂商 Aleph-Alpha 发布的 MoE 推理模型，强调可解释性 |
| **[Venastine-Research/Xing4.0-29B-A4B-GGUF](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF)** | Venastine-Research | 419 | 18,863 | 29B 总参 / 4B 激活的稀疏激活生成模型 |
| **[jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer)** | jialinyyzz | 242 | 10,329 | 文本"人性化"改写器，让 AI 文本更难被判别 |

### 🎨 多模态与生成（图像 / 视频 / 音频）

| 模型 | 作者 | 点赞 | 下载 | 简介 |
|------|------|------|------|------|
| **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** | Lightricks | 6,513 | 1,645,444 | 当前最热的开源视频生成器，覆盖文/图/视频全条件输入 |
| **[Cloudflare/clef](https://huggingface.co/Cloudflare/clef)** + **[clef-flash](https://huggingface.co/Cloudflare/clef-flash)** | Cloudflare | 1,525+538 | 5,416+8,075 | Cloudflare 自家多模态模型，主打边缘部署 |
| **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)** | Qwen | 3,006 | 94,556 | 通义图像生成 2.1，支持编辑能力 |
| **[autotrust/JEV-27B-VL](https://huggingface.co/autotrust/JEV-27B-VL)** | autotrust | 693 | 1,278,569 | 基于 Qwen3.5 的 27B 视觉语言模型 |
| **[TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B)** | TaichuAI（中科院自动化所） | 2,876 | 12,782 | 9B 视觉语言模型，专注空间推理能力 |
| **[Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo)** | Viggle | 618 | 286,885 | Qwen-Image 的 Turbo LoRA 加速版 |
| **[Alissonerdx/BFS-Best-Face-Swap](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap)** | Alissonerdx | 1,218 | 212,575 | Qwen-Image-2.1 上的最佳换脸 LoRA |
| **[FermionResearch/Phonon-2](https://huggingface.co/FermionResearch/Phonon-2)** | FermionResearch | 235 | 3,063 | 基于 Parakeet TDT 的 Apple Silicon 优化 ASR |
| **[nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization)** | nvidia | 701 | 55,491 | 英伟达第三代说话人 diarization 模型 |
| **[akatz-ai/MiniMax-H3-Character-Swap-LoRA](https://huggingface.co/akatz-ai/MiniMax-H3-Character-Swap-LoRA)** / **[pablodawson/MiniMax-H3-360-Orbit-LoRA](https://huggingface.co/pablodawson/MiniMax-H3-360-Orbit-LoRA)** | 社区 | 310+218 | — | 围绕 MiniMax-H3 的视频编辑 LoRA 生态 |

### 🔧 专用模型（代码 / 决策 / 排序 / 视觉）

| 模型 | 作者 | 点赞 | 下载 | 简介 |
|------|------|------|------|------|
| **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)** | convaiinnovations | 5,247 | 11,733 | "System-One" 校准决策模型，本周纯模型热度王 |
| **[Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B)** | Contrastive-LM | 740 | 3,715 | 对比学习范式的 8B reranker，用作通用验证器 |
| **[autotrust/GEV-26B-Decide](https://huggingface.co/autotrust/GEV-26B-Decide)** | autotrust | 471 | 446,527 | 基于 Gemma4 的 26B 决策/分类模型 |
| **[SupersonicLabs/Julia-1](https://huggingface.co/SupersonicLabs/Julia-1)** | SupersonicLabs | 442 | 3,898 | 多语言决策模型，主打可控分类 |
| **[PSRben/VisionHOPE](https://huggingface.co/PSRben/VisionHOPE)** | PSRben | 426 | 1,654 | 计算机视觉方向的新论文模型 |

### 📦 微调与量化（GGUF / LoRA / 社区炼金）

| 模型 | 作者 | 点赞 | 下载 | 简介 |
|------|------|------|------|------|
| **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** | DavidAU | 1,464 | 2,134,360 | 集 TURBO/Coder/Heretic/Multitoken Prediction 于一身的终极合并版 |
| **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** | prism-ml | 2,461 | 4,120,718 | 2-bit 三值量化 27B，409 万下载验证极致压缩的可行性 |
| **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)** + **[Coder 版](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF)** | ISTA-DASLab | 620+295 | 2,244,732+389,398 | GSQ/RCO 混合精度 + 剪枝的科研派量化方案 |
| **[orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF)** | orcarouter | 405 | 16,802 | 面向网络安全场景的 Qwen3.8 解锁版 |
| **[Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw](https://huggingface.co/Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw)** | Infatoshi | 244 | 1,342 | GLM-MOE 3.0bpw EXL3 极低比特率量化版 |
| **[abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF)** | abenzerps | 3,278 | 1,638,838 | Qwen-Image 2.1 的 ComfyUI GGUF 优化版本，下载量破百万 |

---

## 三、生态信号

**Qwen 生态一家独大**：通义 Qwen3.8 在本周榜单中出现至少 7 次，涵盖基座模型、Flash 变体、视觉-语言、Turbo/Heretic/Uncensored 等多个微调分支，下载量普遍在百万级，证明其已成为中文乃至全球开源 LLM 的事实标准。**DeepSeek 仍具号召力**——`DeepSeek-V4.1-Flash` 以新版本号延续了社区对 DeepSeek 高性价比路线的期待。**决策模型（System-One）正在崛起**：`laya`（5,247 点赞）和 `GEV-26B-Decide`、`Julia-1` 共同指向"校准决策"这一新兴细分赛道，可视为对 Chain-of-Thought 之外"显式置信度推理"路线的探索。**视频生成两极分化**：专业派（LTX-2.5、Qwen-Image）和玩具派（Character-Swap、360-Orbit LoRA）并存，社区炼金已经把基础模型能力压榨到极致。**量化方面**，GGUF 已是绝对主流，EXL3、2-bit 三值（`Ternary-Bonsai-2`）等极低比特率方案受到大量本地部署用户青睐。

---

## 四、值得探索

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 关注度与下载量双双登顶，是当前最值得深入研究的多模态基座；建议对比 Qwen3.8-Flash-Next 评估质量-延迟权衡。
2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 开源视频生成的代表作品，融合文/图/视频/FLF2V 全条件生成，值得关注其与 Wan/Mochi 等竞品的差距。
3. **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)** — 本周最被低估的"非 LLM"模型，"System-One 校准决策"理念新颖，对高风险场景（医疗、法律、金融）的 AI 落地具有方法论意义。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*