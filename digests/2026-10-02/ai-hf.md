# Hugging Face 热门模型日报 2026-10-02

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-02 03:34 UTC

---

# 📊 Hugging Face 热门模型日报
**日期：2026-10-02**

---

## 一、今日速览

本周 HF 热门榜单呈现明显的**"Qwen 生态全面统治"**态势：Qwen3.8-27B 以 16,734 点赞稳居榜首，Qwen-Image-2.1 系列在文生图领域形成矩阵。**量化创新**成为本周焦点——ISTA-DASLab 推出全新的 GSQ-RCO 混合精度量化方案，连同 prism-ml 的 2-bit 三元量化（Ternary），标志着社区正向更低比特、更激进的压缩方向探索。**视频生成**继续高速增长，Lightricks/LTX-2.5 单周下载量突破 158 万。决策类模型（laya、Julia-1、GLiNER2.5-Decide）的涌现，暗示 LLM 正从"对话生成"向"结构化决策"演进。

---

## 二、热门模型分类

### 🧠 语言模型（LLM / 对话 / 指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**
  作者：Qwen | 点赞 16,734 | 下载 6,950,834
  通义千问 3.8 代旗舰开源模型，多模态原生架构（qwen3_5 backbone），本周绝对头部，已成社区微调的"底座标配"。

- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)**
  作者：deepseek-ai | 点赞 3,984 | 下载 748,482
  DeepSeek V4.1 轻量级版本，专注于图文多模态推理，主打低延迟推理场景，社区关注度快速攀升。

- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)**
  作者：convaiinnovations | 点赞 4,868 | 下载 0
  标榜 "System-One / Calibrated Decisions" 的决策模型，代表"LLM-as-Decider"的新方向——高点赞但下载为 0，说明仍处于早期关注阶段。

- **[XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B)**
  作者：XingChen-AGI | 点赞 1,825 | 下载 48,705
  29B 总参 / 4B 激活的 MoE 架构对话模型，国产新势力 XingChen 系列 4.0 版本，主打高效推理。

- **[TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B)**
  作者：TaichuAI | 点赞 2,571 | 下载 12,194
  中科院自动化所"紫东太初"5.0 多模态模型，强调空间推理能力，国产开源 VLM 中表现亮眼。

- **[Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1)**
  作者：Altworld | 点赞 807 | 下载 8,996
  基于 Qwen3.8 的创意写作向微调，命名致敬海明威的硬汉文风，长文本生成质量受关注。

- **[XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B)**
  作者：XiaomiMiMo | 点赞 601 | 下载 12,758
  小米 MiMo 团队推出 2.6 版本蒸馏模型，9B 尺寸保留 Qwen3.5 多模态能力，主打端侧可部署。

### 🎨 多模态与生成（图像 / 视频 / 音频）

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**
  作者：Lightricks | 点赞 5,868 | 下载 1,588,619
  LTX 视频系列 2.5 版本，支持图生视频、文生视频、视频生视频的多合一扩散模型，本周下载量仅次于 Qwen3.8。

- **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)**
  作者：Qwen | 点赞 2,795 | 下载 76,938
  通义千问图像生成 2.1 官方版（diffusers），文生图 + 图像编辑双能力，是当前文生图领域的"底座级"模型。

- **[abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF)**
  作者：abenzerps | 点赞 2,715 | 下载 1,303,476
  Qwen-Image-2.1 的去审查 GGUF 量化版，社区为绕过内容限制高度活跃，单周下载超 130 万。

- **[XingChen-AGI/TeleOCR](https://huggingface.co/XingChen-AGI/TeleOCR)**
  作者：XingChen-AGI | 点赞 1,233 | 下载 31,584
  基于 Qwen2.5-VL 的 OCR 专用模型，针对电信/票据场景的图文识别任务做精调。

- **[Alissonerdx/BFS-Best-Face-Swap](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap)**
  作者：Alissonerdx | 点赞 1,077 | 下载 173,323
  基于 Qwen-Image-2.1 Edit 的 LoRA 换脸模型，下载量远超点赞，反映换脸类工具的强需求。

- **[Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1)**
  作者：Comfy-Org | 点赞 890 | 下载 5,376,977
  ComfyUI 官方仓库封装的 Qwen-Image-2.1 工作流版本，下载量 537 万冠绝全榜，是生态分发的核心枢纽。

- **[Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo)**
  作者：Viggle | 点赞 501 | 下载 217,638
  Viggle 团队对 Qwen-Image-2.1 的 Turbo 加速 LoRA，在保持质量下显著提升生成速度。

- **[Cloudflare/clef](https://huggingface.co/Cloudflare/clef)**
  作者：Cloudflare | 点赞 371 | 下载 18
  Cloudflare 推出的多模态小模型，基于 Qwen3.5，定位边缘部署，目前处于早期 PoC 阶段。

- **[akatz-ai/MiniMax-H3-Character-Swap-LoRA](https://huggingface.co/akatz-ai/MiniMax-H3-Character-Swap-LoRA)**
  作者：akatz-ai | 点赞 222 | 下载 10,031
  针对 MiniMax-H3 视频模型的"角色替换"LoRA，专注视频编辑细分场景。

### 🔧 专用模型（代码 / 决策 / 嵌入 / 音频）

- **[nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization)**
  作者：nvidia | 点赞 604 | 下载 40,936
  英伟达第三代说话人日志模型，基于 NeMo 框架，同时提供 safetensors 与 GGUF 双格式。

- **[Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B)**
  作者：Contrastive-LM | 点赞 627 | 下载 2,720
  对比学习范式的 8B 验证器/重排器，将 LLM 用于 reranking 任务，是 RAG 流水线的新组件。

- **[PSRben/VisionHOPE](https://huggingface.co/PSRben/VisionHOPE)**
  作者：PSRben | 点赞 362 | 下载 305
  计算机视觉分类模型，附 arxiv:2609.33325 论文，是学术成果驱动的早期项目。

- **[fastino/GLiNER2.5-Decide](https://huggingface.co/fastino/GLiNER2.5-Decide)**
  作者：fastino | 点赞 291 | 下载 38,386
  GLiNER 2.5 的"Decide"版本，专注文本分类与意图分类的结构化抽取任务。

- **[SupersonicLabs/Julia-1](https://huggingface.co/SupersonicLabs/Julia-1)**
  作者：SupersonicLabs | 点赞 345 | 下载 2,556
  多语言决策模型，定位为"decision-model"，与 laya 共同代表本周决策类模型的新浪潮。

### 📦 微调与量化（GGUF / LoRA / 蒸馏）

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)**
  作者：unsloth | 点赞 4,792 | 下载 6,271,224
  Unsloth 团队的 Qwen3.8-27B 官方 GGUF 量化版，凭借高效推理成为消费级 GPU 首选。

- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)**
  作者：prism-ml | 点赞 2,335 | 下载 3,766,691
  极端 2-bit 三元量化（ternary）实验，将 27B 模型压缩到极小体积，下载量近 377 万证明社区对极限压缩的热情。

- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)**
  作者：ISTA-DASLab | 点赞 1,881 | 下载 1,679,425
  采用 GSQ（Group-wise Scaling Quantization）+ RCO（Regularized Channel Optimization）的混合精度量化，质量损失更小。

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)**
  作者：DavidAU | 点赞 1,337 | 下载 1,817,224
  超长命名风格的"Heretic"反审查 + 多任务微调 GGUF，融合 Turbo / Cold-Fusion / MTP 等技术。

- **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)**
  作者：ISTA-DASLab | 点赞 432 | 下载 952,084
  Qwen3.8 Flash-Next 的 GSQ-RCO 量化版，配合剪枝进一步压缩。

- **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF)**
  作者：ISTA-DASLab | 点赞 183 | 下载 148,142
  上述模型的代码专用版本，专为编程任务优化。

- **[ukisai/Swift-1.5-Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ukisai/Swift-1.5-Qwen3.8-27B-GSQ-RCO-GGUF)**
  作者：ukisai | 点赞 190 | 下载

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*