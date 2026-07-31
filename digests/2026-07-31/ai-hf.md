# Hugging Face 热门模型日报 2026-07-31

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-31 02:09 UTC

---

# 🤗 Hugging Face 热门模型日报
**日期：2026-07-31**

---

## 📌 今日速览

今日榜单由 **moonshotai/Kimi-K3**（9,016 点赞）领跑，其官方权重与社区镜像（unsloth）同步上榜，显示新一代多模态模型关注度极高。**Qwen3.6-35B-A3B** 系列成为生态"基座之王"——官方版本下载量突破 610 万，催生了 HauhauCS、DavidAU、LuffyTheFox、EschaLabs 等大量社区微调与 GGUF 量化版本。**GLM-5.2**（4,682 点赞）与 **Baidu Unlimited-OCR**（3,584 点赞）继续占据中文大模型与文档理解头部位置。值得关注的是 2-bit **三元量化**（Ternary-Bonsai）与 **MTP 投机解码** GGUF 正在成为推理侧的新潮流。

---

## 🧠 语言模型（LLM / 对话 / 指令微调）

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
  作者：zai-org｜点赞 4,682｜下载 1,527,760
  智谱最新一代 MoE-DSA 架构大模型，对话与文本生成综合能力强，是中文开源 LLM 的旗舰之一。

- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
  作者：Qwen｜点赞 2,595｜下载 6,119,519
  阿里 Qwen3.5 MoE 架构的官方版本，A3B 激活参数下实现旗舰模型性能，是本周衍生微调最多、下载量最大的基座。

- **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)**
  作者：upstage｜点赞 703｜下载 12,411
  Upstage 250B 开放大模型，主打企业级对话与推理，权重开放但生态量级仍处于起步阶段。

- **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)**
  作者：poolside｜点赞 847｜下载 73,246
  Poolside 面向软件工程场景的专用 LLM，强调代码与长上下文能力，是开发者专注型模型的代表。

- **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)**
  作者：Nanbeige｜点赞 582｜下载 24,542
  南北极 3B 轻量级 LLM，主打小参数高性能路线，适合本地化部署。

- **[amd/Instella-MoE-16B-A3B-Think](https://huggingface.co/amd/Instella-MoE-16B-A3B-Think)**
  作者：amd｜点赞 94｜下载 1,315
  AMD 基于 DeepSeek V3 架构训练的 MoE 思维链模型，硬件厂商下场做模型训练，生态意义大于下载量。

- **[fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b)**
  作者：fdtn-ai｜点赞 240｜下载 9,820
  基于 Granite MoE Hybrid 架构的 1B 安全领域 LLM，面向合规与威胁检测场景。

---

## 🎨 多模态与生成

- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**
  作者：moonshotai｜点赞 9,016｜下载 387,822
  本周榜单冠军，Kimi K3 多模态模型，主打图文理解与生成，compressed-tensors 格式降低推理门槛。

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
  作者：baidu｜点赞 3,584｜下载 2,598,659
  百度不限场景 OCR 文档理解模型，下载量在榜单中排名第二，是 RAG 与文档智能的事实标准之一。

- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)**
  作者：thinkingmachines｜点赞 1,654｜下载 45,658
  全新 Inkling 多模态架构，对话与图像理解兼顾，社区关注度快速上升。

- **[thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small)**
  作者：thinkingmachines｜点赞 121｜下载 840
  Inkling 的轻量版本，适合边缘部署与多模态能力普及。

- **[microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B)**
  作者：microsoft｜点赞 223｜下载 2,316
  基于 Qwen3.5 的 Computer-Use 专用多模态模型，主打屏幕理解与 GUI 操作 Agent。

- **[microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL)**
  作者：microsoft｜点赞 121｜下载 2,951
  微软新一代视觉语言模型，多模态推理能力对标开源前沿。

- **[Microsoft/Mage-Flow (via Comfy-Org)](https://huggingface.co/Comfy-Org/Mage-Flow)**
  作者：Comfy-Org｜点赞 97｜下载 44,714
  微软的扩散生成模型，已被 ComfyUI 生态收录为基底模型，适合图像生成工作流。

- **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)**
  作者：ATH-MaaS｜点赞 351｜下载 57,439
  基于 Qwen3.5 的 OCR 专用 VLM，是 Unlimited-OCR 之外的另一强力开源选择。

- **[owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2)**
  作者：owensong｜点赞 321｜下载 1,100
  CPU/边缘端 TTS 小模型，适合本地语音合成。

- **[owensong/Inflect-Nano-v2](https://huggingface.co/owensong/Inflect-Nano-v2)**
  作者：owensong｜点赞 119｜下载 654
  更小体积的 TTS 模型，主打 Edge-AI 场景。

- **[Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b)**
  作者：Audio8｜点赞 126｜下载 225
  基于 ArkTTS 架构的 0.6B 语音合成预览模型，体积小、可玩性高。

- **[microsoft/VibeVoice-ASR-BitNet](https://huggingface.co/microsoft/VibeVoice-ASR-BitNet)**
  作者：microsoft｜点赞 120｜下载 3,864
  微软基于 BitNet 的 1-bit 语音识别模型，BitNet 路径下探语音推理极限。

---

## 🔧 专用模型

- **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)**
  作者：Kwaipilot｜点赞 351｜下载 9,225
  基于 Qwen3.5 MoE 架构的代码专用模型，定位开发者 Agent 与代码补全。

- **[microsoft/VibeVoice-ASR-BitNet](https://huggingface.co/microsoft/VibeVoice-ASR-BitNet)**
  作者：microsoft｜点赞 120｜下载 3,864
  语音识别专用，BitNet 1-bit 量化实现端侧部署。

- **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)**
  作者：ATH-MaaS｜点赞 351｜下载 57,439
  OCR 专用 VLM，多语言文档解析。

- **[fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b)**
  作者：fdtn-ai｜点赞 240｜下载 9,820
  安全/合规场景专用 LLM。

---

## 📦 微调与量化

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  作者：HauhauCS｜点赞 3,190｜下载 1,803,090
  本周最火社区微调，GGUF + Uncensored Qwen3.6 MoE 视觉版，下载量逼近 180 万。

- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
  作者：prism-ml｜点赞 1,116｜下载 697,666
  **2-bit 三元量化** 27B 模型，llama.cpp 兼容，主打极致压缩 + 可用性能，量化技术新标杆。

- **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)**
  作者：DavidAU｜点赞 1,037｜下载 955,767
  集成 **MTP（Multi-Token Prediction）投机解码**与 iMatrix 量化，Uncensored Qwen3.6 27B 合并微调。

- **[LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF)**
  作者：LuffyTheFox｜点赞 241｜下载 162,394
  基于 Hermes 框架的 Qwen3.6 MoE Uncensored 版本，社区老牌量化管线的延续。

- **[EschaLabs/Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2)**
  作者：EschaLabs｜点赞 94｜下载 201
  较新的 Qwen3.6 MoE 微调，权重刚发布，处于早期传播阶段。

- **[nota-ai/Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4)**
  作者：nota-ai｜点赞 147｜下载 7,755
  250B 模型的 **NVFP4 4-bit 量化**版本，vLLM 兼容，硬件生态与量化策略紧密结合。

- **[unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF)**
  作者：unsloth｜点赞 209｜下载 12,178
  Unsloth 出品的 Kimi-K3 GGUF 镜像，社区推理首选。

- **[unsloth/Kimi-K3](https://huggingface.co/unsloth/Kimi-K3)**
  作者：unsloth｜点赞 176｜下载 766
  Unsloth 的 Kimi-K3 完整权重镜像。

- **[unsloth/Laguna-S-2.1-GGUF](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF)**
  作者：unsloth｜点赞 259｜下载 159,331
  Laguna-S-2.1 的 GGUF 量化版本，vLLM 兼容。

- **[DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF)**
  作者：DavidAU｜点赞 159｜下载 248,173
  Qwen3.5 9B 的 iMatrix + MTP 量化微调，主打小模型 + 投机解码。

---

## 🌐 生态信号

Qwen3.6-35B-A3B 已成为事实上的"开源基座之王"，官方版本下载量突破 610 万，催生了至少 4 个高热度社区微调（HauhauCS、DavidAU、LuffyTheFox、EschaLabs），并衍生出 GGUF、Uncensored、MTP 投机解码等多种变体。中文厂商（Moonshot、Zhipu、Baidu、Alibaba、AMD）继续主导前沿权重发布，**MoE 架构**（Qwen3.5 MoE、GLM MoE、DeepSeek V3 衍生）几乎成为 2026 年下半年的标准答案。**量化技术**正在加速演进：2-bit 三元量化（Ternary-Bonsai）、NVFP4 4-bit（Solar）、MTP 投机解码（DavidAU）并行推进，推理侧的算力门槛被进一步压低。值得关注的反常信号是 **Uncensored 微调**（HauhauCS 单模型 180 万下载）已与官方版本量级相当，社区对"无审查版本"的稳定需求已成规模。

---

## 🔍 值得探索

1. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — 榜单冠军，compressed-tensors 格式从权重层面降低推理成本，是近期多模态技术路线的重要参考。

2. **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** — 2-bit 三元量化在 27B 模型上的落地验证，研究端侧 LLM 部署的必看案例。

3. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — 社区微调数据信号最强（点赞 3,190 + 下载 180 万），揭示开源生态的真实需求分布。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*