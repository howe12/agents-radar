# Hugging Face 热门模型日报 2026-10-04

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-04 03:46 UTC

---

# 📊 Hugging Face 热门模型日报
**日期：2026-10-04**

---

## 🚀 今日速览

今日 Hugging Face 趋势榜由 **Qwen3.8 系列**主导——27B 主模型与 Flash-Next 变体双双跻身前列，周点赞合计突破 22K。**视频生成**领域 Lightricks/LTX-2.5 继续爆发（6146 点赞、近 163 万下载），与 Qwen-Image-2.1 图像系列形成"视频+图像"双引擎。量化方面，**ISTA-DASLab 的 GSQ-RCO 混合精度方案**与 **prism-ml 的三元（2-bit）量化**正在开辟新的高效推理路径。Cloudflare 的 Clef 系列、DeepSeek-V4.1-Flash 等新晋原生多模态模型亦显示出开源生态正加速向"全模态+边缘部署"演进。

---

## 🔥 热门模型

### 🧠 语言模型（LLM / 对话 / 推理）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**
  作者：Qwen ｜ 点赞 16,889 ｜ 下载 6,895,117
  Qwen3.5 家族旗舰多模态大模型，本周点赞冠军，凭借图像理解+对话能力一体化拿下大量关注。

- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)**
  作者：deepseek-ai ｜ 点赞 4,061 ｜ 下载 787,841
  DeepSeek 系列 Flash 版本，主打低延迟多模态推理，是中文开源 LLM 在生产部署上的最新代表。

- **[Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1)**
  作者：Aleph-Alpha ｜ 点赞 258 ｜ 下载 0
  欧洲厂商推出的 MoE 推理模型，强调可控与可解释性，vLLM 原生支持。

- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)**
  作者：convaiinnovations ｜ 点赞 5,081 ｜ 下载 0
  高赞"系统一"风格决策/分类模型，主打校准输出（calibrated decisions），适合高风险场景的辅助判断。

- **[NaiveAI/Naive-N0.5-Flash](https://huggingface.co/NaiveAI/Naive-N0.5-Flash)**
  作者：NaiveAI ｜ 点赞 145 ｜ 下载 1,497
  MoE 架构的长上下文代码模型，定位 AI 研究场景。

- **[SupersonicLabs/Julia-1](https://huggingface.co/SupersonicLabs/Julia-1)**
  作者：SupersonicLabs ｜ 点赞 400 ｜ 下载 3,251
  多语言决策型分类模型，专为业务决策任务设计。

---

### 🎨 多模态与生成（图像 / 视频 / 音频）

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**
  作者：Lightricks ｜ 点赞 6,146 ｜ 下载 1,629,984
  当前最强的开源图生视频模型之一，支持 image-to-video / text-to-video / video-to-video 全流程，社区创作热度极高。

- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)**
  作者：Qwen ｜ 点赞 5,861 ｜ 下载 1,404,413
  Qwen4 实验分支的轻量多模态模型，主打速度与图像理解并重。

- **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)**
  作者：Qwen ｜ 点赞 2,905 ｜ 下载 85,895
  官方原生文生图+编辑模型，是当前开源图像生成的标杆之一。

- **[TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B)**
  作者：TaichuAI ｜ 点赞 2,773 ｜ 下载 12,483
  9B 参数的空间推理视觉语言模型，强调 3D/空间理解能力。

- **[Cloudflare/clef](https://huggingface.co/Cloudflare/clef)**
  作者：Cloudflare ｜ 点赞 1,005 ｜ 下载 2,620
  Cloudflare 推出的多模态模型，基于 Qwen3.5，主打边缘部署场景。

- **[Cloudflare/clef-flash](https://huggingface.co/Cloudflare/clef-flash)**
  作者：Cloudflare ｜ 点赞 365 ｜ 下载 4,310
  Clef 的轻量 Flash 版本，主打低延迟实时多模态推理。

- **[Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo)**
  作者：Viggle ｜ 点赞 570 ｜ 下载 257,298
  基于 Qwen-Image-2.1 的角色可控 LoRA 微调，社区图像创作热门。

- **[Alissonerdx/BFS-Best-Face-Swap](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap)**
  作者：Alissonerdx ｜ 点赞 1,150 ｜ 下载 193,270
  专为 Qwen-Image-2.1 系列打造的换脸 LoRA，社区图像编辑热度高。

- **[akatz-ai/MiniMax-H3-Character-Swap-LoRA](https://huggingface.co/akatz-ai/MiniMax-H3-Character-Swap-LoRA)**
  作者：akatz-ai ｜ 点赞 272 ｜ 下载 13,258
  MiniMax-H3 视频模型的角色替换 LoRA，针对视频编辑场景。

- **[pablodawson/MiniMax-H3-360-Orbit-LoRA](https://huggingface.co/pablodawson/MiniMax-H3-360-Orbit-LoRA)**
  作者：pablodawson ｜ 点赞 163 ｜ 下载 4,924
  MiniMax-H3 的 360° 环绕相机运动 LoRA，专为首尾帧图生视频设计。

- **[nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization)**
  作者：nvidia ｜ 点赞 651 ｜ 下载 48,784
  NVIDIA 第三代说话人 diarization 模型，支持多说话人语音切分。

---

### 🔧 专用模型（排序 / 分类 / 语音）

- **[Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B)**
  作者：Contrastive-LM ｜ 点赞 691 ｜ 下载 3,190
  基于对比学习的 8B 文本排序/验证模型，可作为 RAG 系统的 reranker 使用。

- **[PSRben/VisionHOPE](https://huggingface.co/PSRben/VisionHOPE)**
  作者：PSRben ｜ 点赞 391 ｜ 下载 1,338
  论文级（arxiv:2609.33325）视觉分类模型，代表学术社区的新发布。

- **[fastino/GLiNER2.5-Decide](https://huggingface.co/fastino/GLiNER2.5-Decide)**
  作者：fastino ｜ 点赞 351 ｜ 下载 50,402
  GLiNER 系列第二代升级版，统一 NER、抽取与意图分类任务。

- **[FermionResearch/Phonon-2](https://huggingface.co/FermionResearch/Phonon-2)**
  作者：FermionResearch ｜ 点赞 172 ｜ 下载 2,361
  基于 Parakeet TDT 的 Apple Silicon MLX 优化 ASR 模型，本地语音转写体验佳。

---

### 📦 微调与量化（GGUF / AWQ / LoRA）

- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)**
  作者：prism-ml ｜ 点赞 2,395 ｜ 下载 3,969,867
  27B 模型的**三元（2-bit）量化**版本，下载量惊人，证明极低比特量化在社区已具备实用价值。

- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)**
  作者：ISTA-DASLab ｜ 点赞 1,942 ｜ 下载 1,674,292
  Qwen3.8-27B 的 GSQ+RCO 混合精度量化，平衡大小与质量。

- **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)**
  作者：ISTA-DASLab ｜ 点赞 517 ｜ 下载 1,474,719
  Flash-Next 的同方案量化版本，主打轻量高效部署。

- **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF)**
  作者：ISTA-DASLab ｜ 点赞 241 ｜ 下载 303,256
  面向代码任务的量化剪枝版本。

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-…GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)**
  作者：DavidAU ｜ 点赞 1,398 ｜ 下载 2,116,212
  DavidAU 标志性的"heretic uncensored"融合微调长名 GGUF，社区故事/角色创作

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*