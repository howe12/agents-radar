# Hugging Face 热门模型日报 2026-07-09

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-09 05:53 UTC

---

# 🤗 Hugging Face 热门模型日报
**日期：2026-07-09**

---

## 📰 今日速览

今日 Hugging Face 热度榜由 **GLM-5.2（3,677 周赞）** 强势登顶，智谱 AI 的新一代 MoE 模型继续延续其在开源社区的影响力。**Qwen3.6 生态持续扩张**，衍生出 MTP 推理加速版、社区去审查版、Nemotron 适配版等多种变体，下载量纷纷突破百万。**NVIDIA 大举进攻**：既推出面向空间理解的 LocateAnything-3B，又发布 NVFP4 新一代量化格式，定义后训练优化新标准。**Krea-2 图像生态初具规模**，Turbo 基模配合社区 LoRA / ControlNet 形成完整工具体系。

---

## 🔥 热门模型

### 🧠 语言模型（LLM / 对话 / 指令微调）

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
  作者：zai-org｜点赞 3,677｜下载 281,584
  智谱 AI 新一代 GLM 旗舰，采用 `glm_moe_dsa` 架构（MoE + DeepSeek Sparse Attention），本周周赞断层第一，国产开源 LLM 标杆。

- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)**
  作者：tencent｜点赞 572｜下载 121
  腾讯混元系列 HY_v3 架构新模型，主打文本生成，发布初期即进入热度榜，标志混元第三代公开化。

- **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)**
  作者：deepseek-ai｜点赞 440｜下载 15,538
  DeepSeek V4 Pro 版本，搭配 DSpark 加速技术，官方在 arXiv:2606.19348 中发表配套论文，瞄准推理效率优化。

- **[meituan-longcat/LongCat-2.0](https://huggingface.co/meituan-longcat/LongCat-2.0)**
  作者：meituan-longcat｜点赞 153｜下载 385
  美团龙猫第二代对话模型，主打长上下文与对话场景，企业级 LLM 落地导向。

- **[mistralai/Leanstral-1.5-119B-A6B](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B)**
  作者：mistralai｜点赞 168｜下载 157
  Mistral 推出 119B-A6B 大稀疏 MoE 模型，是 Leanstral-2603 的指令微调版本，Apache-2.0 友好许可。

- **[poolside/Laguna-XS-2.1](https://huggingface.co/poolside/Laguna-XS-2.1)**
  作者：poolside｜点赞 81｜下载 3,385
  Poolside 编程专属模型 Laguna 系列的紧凑版本，专为代码生成与软件工程任务设计。

### 🎨 多模态与生成（图像 / 视觉语言 / 文本到 X）

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
  作者：nvidia｜点赞 2,670｜下载 1,424,958
  NVIDIA 推出的视觉定位（Visual Grounding）模型，仅 3B 参数即可在图内精确定位任意对象，下载量破百万，体现"小而强"趋势。

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
  作者：baidu｜点赞 1,877｜下载 1,084,945
  百度发布的"无限长度 OCR"模型，突破传统 OCR 长度限制，文档理解与结构化提取场景刚需，下载量超百万。

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
  作者：empero-ai｜点赞 1,871｜下载 1,683,711
  基于 Qwen3.5 蒸馏的 Claude Mythos 风格模型，支持 1M 超长上下文，GGUF 量化版下载量近 170 万，长文任务首选。

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M)**
  作者：empero-ai｜点赞 737｜下载 152,516
  同系列原版（非量化），为社区提供全精度部署选项。

- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**
  作者：krea｜点赞 557｜下载 123,729
  Krea-2 Raw 基模的 Turbo 蒸馏版，主打快速文本到图像生成，新一代开源图像生成代表。

- **[eric-venti-seeds/Sun-Direction-Lora-Flux2Klein9B](https://huggingface.co/eric-venti-seeds/Sun-Direction-Lora-Flux2Klein9B)**
  作者：eric-venti-seeds｜点赞 113｜下载 0
  针对 Flux2Klein 9B 的太阳光照方向 LoRA，单一光照控制能力突出。

- **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)**
  作者：conradlocke｜点赞 104｜下载 0
  Krea-2 生态下的身份保持编辑 LoRA，ComfyUI 友好。

- **[Patil/Krea-2-depth-controlnet](https://huggingface.co/Patil/Krea-2-depth-controlnet)**
  作者：Patil｜点赞 75｜下载 0
  Krea-2 的深度 ControlNet，扩展图像生成的结构控制能力。

### 🔧 专用模型（代码 / 表格 / 嵌入）

- **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**
  作者：google｜点赞 314｜下载 9,458
  Google 发布的表格基础模型（Tabular Foundation Model），零样本即可做分类与回归，是 TabFM 路线的代表作。

- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
  作者：yuxinlu1｜点赞 2,656｜下载 674,977
  基于 Gemma 4 12B 的代码专精模型（fable5/composer2.5 配方），社区 GGUF 量化下载近 70 万，代码任务首选。

### 📦 微调与量化（社区微调 / GGUF / NVFP4）

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  作者：HauhauCS｜点赞 2,578｜下载 2,823,988
  社区去审查强化版 Qwen3.6-35B-A3B（MoE），兼容视觉输入，下载量近 283 万，**全榜下载冠军**。

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
  作者：unsloth｜点赞 1,017｜下载 2,842,118
  Unsloth 出品的 Qwen3.6-27B MTP（Multi-Token Prediction）GGUF 量化版，凭借推理加速特性下载突破 280 万。

- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**
  作者：yuxinlu1｜点赞 1,102｜下载 384,383
  Gemma 4 12B 的 Agentic 强化版，针对终端操作与 Agent 工作流进行 3.5x tau2 配方训练。

- **[nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)**
  作者：nvidia｜点赞 326｜下载 538,687
  NVIDIA ModelOpt 工具链产出的 NVFP4 4-bit 量化版 Qwen3.6-27B，下载量超 50 万，验证 NVFP4 生产可用性。

- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)**
  作者：deepreinforce-ai｜点赞 807｜下载 502,663
  Ornith 1.0 35B 社区微调，MIT 许可，端点兼容，下载超 50 万。

- **[deepreinforce-ai/Ornith-1.0-9B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B-GGUF)**
  作者：deepreinforce-ai｜点赞 463｜下载 454,944
  Ornith 1.0 系列紧凑 9B 版本，轻量部署首选。

- **[deepreinforce-ai/Ornith-1.0-9B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B)**
  作者：deepreinforce-ai｜点赞 412｜下载 136,037
  Ornith 1.0 9B 全精度版。

- **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)**
  作者：bottlecapai｜点赞 147｜下载 46
  强化"思维链帽"机制的 Qwen3.6-27B 微调版本，专注推理可解释性。

- **[InternScience/Agents-A1-Q4_K_M-GGUF](https://huggingface.co/InternScience/Agents-A1-Q4_K_M-GGUF)**
  作者：InternScience｜点赞 85｜下载 11,226
  书生 Agents-A1 的 Q4_K_M GGUF 量化版，MoE 视觉语言模型本地部署方案。

- **[unsloth/DeepSeek-V4-Flash-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF)**
  作者：unsloth｜点赞 99｜下载 47
  DeepSeek V4 Flash 极速版的 GGUF 量化，Unsloth 出品，定位低延迟边缘推理。

- **[nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4)**
  作者：nvidia｜点赞 70｜下载 47
  Nemotron Labs 3 "Puzzle" 75B-A9B MoE 模型的 NVFP4 实验性量化版，NVIDIA 探索超稀疏 MoE 量化的研究产物。

- **[froggeric

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*