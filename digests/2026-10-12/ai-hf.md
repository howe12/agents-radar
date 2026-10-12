# Hugging Face 热门模型日报 2026-10-12

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-12 03:46 UTC

---

# Hugging Face 热门模型日报
**日期：2026-10-12**

---

## 📰 今日速览

今日趋势榜最显著的特征是 **Qwen 系列** 的全面统治——从 27B 旗舰对话模型到 GGUF 量化版本，再到图像生成 Turbo 版本，Qwen 家族占据榜单近半数席位。视频生成继续升温，**Lightricks/LTX-2.5** 以 7,330 点赞登顶周热度。**DeepSeek-V4.1-Flash** 与 **facebook/sam3** 的强势上榜，说明头部研究机构正将多模态能力作为下一代模型的标配。社区微调方面，"Uncensored"（去审查）与三元/二值量化变体异常活跃，标志着边缘化推理生态正在快速成熟。

---

## 🔥 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**
  - 作者: Qwen | ⭐ 17,515 | 📥 6,843,108
  - 通义千问最新 27B 旗舰对话模型，支持多模态输入，点赞与下载双双领跑，是当下中文大模型生态的事实基准。

- **[Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1)**
  - 作者: Aleph-Alpha | ⭐ 887 | 📥 12,550
  - 欧洲本土厂商 Aleph-Alpha 发布的 MoE 推理模型，承载了非美中厂商在通用大模型上的最新探索。

- **[LiquidAI/d1-3B](https://huggingface.co/LiquidAI/d1-3B)**
  - 作者: LiquidAI | ⭐ 300 | 📥 10,843
  - 3B 体量的 LFM2 视觉-语言模型，主打边缘部署友好。

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**
  - 作者: Lightricks | ⭐ 7,330 | 📥 1,726,683
  - 当周榜首，支持文/图到视频、视频到视频的多功能扩散模型，是开源视频生成赛道的标杆。

- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)**
  - 作者: Qwen | ⭐ 6,114 | 📥 1,870,465
  - Qwen 系列的高速多模态变体（qwen4_exp 架构），主打低延迟对话与图像理解。

- **[Cloudflare/clef](https://huggingface.co/Cloudflare/clef)**
  - 作者: Cloudflare | ⭐ 2,030 | 📥 14,351
  - Cloudflare 推出的多模态模型（基于 Qwen3.5 架构），从 CDN 巨头进军模型层的标志性作品。

- **[facebook/sam3](https://huggingface.co/facebook/sam3)**
  - 作者: facebook | ⭐ 4,074 | 📥 2,081,596
  - SAM 3 视频分割模型，支持视频掩码生成（mask-generation），是 Meta 在视觉基础模型上的最新迭代。

- **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)**
  - 作者: Qwen | ⭐ 3,229 | 📥 136,103
  - Qwen 官方图像生成/编辑模型，主打高质量图像合成。

- **[Qwen/Qwen-Image-2.1-Turbo](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo)**
  - 作者: Qwen | ⭐ 549 | 📥 4,702
  - Qwen-Image 的高速推理版本，平衡画质与生成速度。

- **[Cloudflare/clef-flash](https://huggingface.co/Cloudflare/clef-flash)**
  - 作者: Cloudflare | ⭐ 758 | 📥 22,123
  - Clef 的低延迟版本，面向实时云端推理场景。

- **[FrancisRing/Prism](https://huggingface.co/FrancisRing/Prism)**
  - 作者: FrancisRing | ⭐ 162 | 📥 0
  - 支持音视频联合生成的视频扩散 Transformer，刚发布即获关注。

- **[speridlabs/iris-3b](https://huggingface.co/speridlabs/iris-3b)**
  - 作者: speridlabs | ⭐ 155 | 📥 393
  - 3B 参数的像素空间扩散图像生成模型，定位小而美。

- **[canberkkkkkk/ema-lightning](https://huggingface.co/canberkkkkkk/ema-lightning)**
  - 作者: canberkkkkkk | ⭐ 358 | 📥 18,079
  - 面向土耳其语的 TTS 模型，多语种语音合成生态正在扩张。

- **[Cactus-Compute/whistle](https://huggingface.co/Cactus-Compute/whistle)**
  - 作者: Cactus-Compute | ⭐ 337 | 📥 16,434
  - 面向端侧的语音识别模型，强调 on-device 部署。

---

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2)**
  - 作者: google | ⭐ 1,736 | 📥 98,829
  - Google 推出的 Gemma 架构第二代嵌入模型，RAG 与检索场景的首选基座。

- **[DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)**
  - 作者: deepseek-ai | ⭐ 4,366 | 📥 1,382,367
  - DeepSeek 最新 Flash 系列，主打代码与推理的快速多模态版本。

- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)**
  - 作者: convaiinnovations | ⭐ 5,496 | 📥 44,088
  - "System-One" 风格的校准决策分类模型，反映出行业在结构化判断任务上的探索。

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)**
  - 作者: unsloth | ⭐ 5,026 | 📥 6,488,262
  - unsloth 出品的 Qwen3.8-27B 官方量化版本，本地部署生态的标配。

- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)**
  - 作者: prism-ml | ⭐ 2,633 | 📥 4,549,911
  - 激进的三元（2-bit）量化实验，将 27B 模型压缩至可在消费级硬件运行。

- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)**
  - 作者: ISTA-DASLab | ⭐ 2,155 | 📥 1,489,676
  - 基于 GSQ+RCO 的混合精度量化方法，是研究级量化算法的工业落地代表。

- **[abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF)**
  - 作者: abenzerps | ⭐ 4,000 | 📥 2,188,658
  - Qwen-Image 2.1 的"去审查"GGUF 版本，主打 ComfyUI 工作流，深受创作者社区青睐。

- **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)**
  - 作者: ISTA-DASLab | ⭐ 801 | 📥 4,189,006
  - Flash-Next 的 GSQ 量化版本，是当下下载量最高的研究级量化产物之一。

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Al-GGUF)**
  - 作者: DavidAU | ⭐ 1,657 | 📥 2,016,567
  - 命名虽长，但体现了社区在 Heretic 框架下对 uncensored、MTP 推理增强的复合微调尝试。

- **[nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2](https://huggingface.co/nerkyor/Qwen3.8-27B-Coder390-EfficientThink-...)**
  - 作者: nerkyor | ⭐ 241 | 📥 56,525
  - 复合 SFT+RLOO 训练管线，强调高效思考（Efficient-Thinking）与推理能力叠加。

- **[jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer)**
  - 作者: jialinyyzz | ⭐ 1,122 | 📥 37,647
  - 基于 Gemma4 的"风格人类化"模型，把 AI 文本改写得更加自然，社区写作工具链的新型组件。

- **[Venastine-Research/Xing4.0-29B-A4B-GGUF](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF)**
  - 作者: Venastine-Research | ⭐ 691 | 📥 48,389
  - 29B-A4B 激活参数的 MoE 模型 GGUF 版本，参数效率派关注。

- **[ConwayResearch/Underdog-Saluki-27B-1.0](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0)**
  - 作者: ConwayResearch | ⭐ 327 | 📥 108,900
  - 2-bit GGUF 的工具调用/函数调用微调模型，主打极致压缩下保留 agent 能力。

- **[AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF](https://huggingface.co/AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF)**
  - 作者: AtomicChat | ⭐ 334 | 📥 100,530
  - Turbo 图像模型的"去审查"GGUF 变体，AtomicChat 是新兴的图像社区。

- **[orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF)**
  - 作者: orcarouter | ⭐ 761 | 📥 614,193
  - Qwen3.8-Flash-Next 的 abliterated（去审查）量化版本。

- **[unsloth/embeddinggemma-2-GGUF](https://huggingface.co/unsloth/embeddinggemma-2-GGUF)**
  - 作者: unsloth | ⭐ 258 | 📥 59,274
  - EmbeddingGemma-2 的 GGUF 版本，将检索模型本地化。

---

## 📊 生态信号

当前 Hugging Face 趋势榜呈现三条清晰主线。**Qwen 系列已成为新一代开源基座的事实标准**：从旗舰 Qwen3.8-27B 到 Flash-Next、Qwen-Image-2.1，再衍生出十余款社区微调与量化变体，其生态密度已显著超越 Llama 与 Mistral 时代。第二，**多模态正在从"加分项"转为"入场券"**：DeepSeek-V4.1-Flash、Qwen3.8-Flash-Next、Cloudflare/clef 均原生支持图文理解，连 Lightricks/LTX-2.5 与 facebook/sam3 也代表视频、分割领域的爆发。第三，**边缘推理生态正经历激进压缩**：2-bit（ConwayResearch）、三元量化（Ternary-Bonsai）、混合精度（GSQ+RCO）三种路线同步推进，目标是把 27B 模型压缩到消费级硬件即可运行；与之并行的是"Uncensored / abliterated" 系列微调，体现出社区对内容自由与本地化的双重诉求。值得警惕的是，部分模型命名已经长到难以辨识（例如 nerkyor 与 DavidAU 的复合管线模型），反映出微调管线过度拼接、缺乏标准化的问题。

---

## ✨ 值得探索

1. **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** — 兼具高点赞（6,114）与高下载（1,870 万）的 qwen4_exp 实验架构，是观察下一代通义架构演进的一手样本，值得做架构与延迟基准测试。

2. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — 2-bit 三元量化的代表作，下载量 450 万级别，是检验"超低比特量化在 27B 模型上是否仍可保持可用性"的关键实验，适合做质量/性能对比研究。

3. **[facebook/sam3](https://huggingface.co/facebook/sam3)** — Meta SAM 系列在视频分割上的最新进展，配合 LTX-2.5 等生成模型可搭建完整的"生成→分割"管线，对内容创作与视频理解研究有重要参考价值。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*