# Hugging Face 热门模型日报 2026-09-27

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-27 03:05 UTC

---

# 📊 Hugging Face 热门模型日报
**日期：2026-09-27 ｜ 样本：30 个模型（按周点赞数排序）**

---

## 一、今日速览

**Qwen3.8-27B** 本周以 **16,358 点赞 / 665 万下载** 登顶榜首，成为当之无愧的现象级模型，并衍生出 unsloth GGUF、ISTA-DASLab GSQ-RCO 量化等多个分支。**Qwen-Image-2.1** 同步引爆图像生成生态，出现"原始权重 + ComfyUI 单文件 + Viggle Turbo LoRA + unsloth GGUF + Heretic 文本编码器"的完整分发链。**deepseek-ai/DeepSeek-V4.1-Flash** 与 **Xiaomi MiMo-V2.6 系列** 表明国内头部实验室在多模态 RL 路线上集中发力。视频侧 **Lightricks/LTX-2.5** 与社区激进的 **2-bit ternary 量化** 也值得关注。

---

## 二、热门模型

### 🧠 语言模型（LLM / 对话 / 指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**
  作者：Qwen ｜ 👍 16,358 ｜ ⬇️ 6,652,309
  阿里通义千问本周旗舰多模态基座，集成了文本与视觉能力，单模型带动整个生态链。

- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)**
  作者：deepseek-ai ｜ 👍 3,775 ｜ ⬇️ 640,577
  DeepSeek V4.1 的"Flash"高效版，强调推理/多模态平衡，是本周新一代主力模型之一。

- **[XiaomiMiMo/MiMo-V2.6-Pro-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL)**
  作者：XiaomiMiMo ｜ 👍 530 ｜ ⬇️ 74,497
  小米 MiMo V2.6 的 Pro-RL 强化学习版本，主打多模态推理训练。

- **[XiaomiMiMo/MiMo-V2.6-Flash-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL)**
  作者：XiaomiMiMo ｜ 👍 480 ｜ ⬇️ 23,000
  同期推出的轻量版 Flash，强调 RL 后训练效率，对部署更友好。

- **[XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B)**
  作者：XingChen-AGI ｜ 👍 1,728 ｜ ⬇️ 43,947
  XingChen-AGI 推出的 MoE-A4B 架构（29B 总参/4B 激活）对话模型，主打高效推理。

- **[Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1)**
  作者：Altworld ｜ 👍 711 ｜ ⬇️ 5,590
  基于 Qwen3.8 文本骨干的社区文本生成模型，主打长篇写作风格。

- **[yandex/AliceAI-Foundation-80B-A3B-Base](https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base)**
  作者：yandex ｜ 👍 339 ｜ ⬇️ 3,336
  Yandex Alice AI 系列的 Foundation 80B-A3B 基础模型，欧洲大厂的代表性开源。

### 🎨 多模态与生成（图像 / 视频 / 音频 / 文本到X）

- **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)**
  作者：Qwen ｜ 👍 2,405 ｜ ⬇️ 48,361
  通义千问图像生成 2.1 主版本，集成图像生成与编辑能力，本周图像侧"母模型"。

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**
  作者：Lightricks ｜ 👍 5,236 ｜ ⬇️ 1,604,804
  视频侧本周最热，支持图生视频、文生视频、视频到视频多任务。

- **[inclusionAI/Ming-Image-0.1-Design](https://huggingface.co/inclusionAI/Ming-Image-0.1-Design)**
  作者：inclusionAI ｜ 👍 255 ｜ ⬇️ 0
  阿里 InclusionAI 团队的 Ming-Image 设计版，专攻海报/排版类结构化图像生成。

- **[Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo)**
  作者：Viggle ｜ 👍 294 ｜ ⬇️ 101,512
  基于 Qwen-Image-2.1 的 LoRA 加速变体，主打快速风格化生成。

- **[Edge0/Audio8-ASR-Infinite](https://huggingface.co/Edge0/Audio8-ASR-Infinite)**
  作者：Edge0 ｜ 👍 835 ｜ ⬇️ 7,859
  主打"无限长"流式语音识别的 ASR 模型，适合长会议/长音频转写。

- **[nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization)**
  作者：nvidia ｜ 👍 372 ｜ ⬇️ 19,620
  NVIDIA Nemotron 3 系列的说话人 diarization 模型，提供 GGUF 与 NeMo 多种部署形态。

### 🔧 专用模型（代码 / 数学 / OCR / 嵌入 / 排序）

- **[TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B)**
  作者：TaichuAI ｜ 👍 1,571 ｜ ⬇️ 11,063
  智谱/中科 Taichu 系列 9B VLM，主打**空间推理**与视觉语言任务。

- **[apple/LensVLM-9B](https://huggingface.co/apple/LensVLM-9B)**
  作者：apple ｜ 👍 228 ｜ ⬇️ 1,432
  罕见再次回归 HF 的 Apple 开源 9B 视觉语言模型，技术品牌价值高于下载量。

- **[StarDoc-AI/TeleOCR](https://huggingface.co/StarDoc-AI/TeleOCR)**
  作者：StarDoc-AI ｜ 👍 423 ｜ ⬇️ 26,152
  基于 Qwen2.5-VL 的电信/票据场景 OCR 模型，工业级文档理解代表。

- **[netease-youdao/Confucius4-R2T2](https://huggingface.co/netease-youdao/Confucius4-R2T2)**
  作者：netease-youdao ｜ 👍 427 ｜ ⬇️ 7,155
  网易有道"孔子 4"系列 ASR，专注中文场景的语音转写。

- **[Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B)**
  作者：Contrastive-LM ｜ 👍 292 ｜ ⬇️ 434
  采用"对比语言建模"思路的 8B 验证/重排模型，可作为 LLM 输出的判别器。

- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)**
  作者：convaiinnovations ｜ 👍 3,908 ｜ ⬇️ 0
  标榜"system-one calibrated decisions"理念的 NLI / 决策分类模型，强调可信决策。

- **[convaiinnovations/laya-multilingual](https://huggingface.co/convaiinnovations/laya-multilingual)**
  作者：convaiinnovations ｜ 👍 294 ｜ ⬇️ 0
  上者的多语言扩展版，基于 mmbert 架构。

- **[AlexWortega/openjev](https://huggingface.co/AlexWortega/openjev)**
  作者：AlexWortega ｜ 👍 597 ｜ ⬇️ 0
  基于 Qwen3.5 的跨编码器（cross-encoder）NLI 模型，用于文本蕴含与事实性判断。

- **[akhilaaa3/Jev-Omni](https://huggingface.co/akhilaaa3/Jev-Omni)**
  作者：akhilaaa3 ｜ 👍 256 ｜ ⬇️ 128
  基于 Gemma4 Unified 的统一图像-文本分类模型，尝试把分类和多模态合并到一个权重。

### 📦 微调与量化（社区微调 / GGUF / AWQ 等）

- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)**
  作者：prism-ml ｜ 👍 2,143 ｜ ⬇️ 3,247,527
  采用**极端 2-bit 三值量化**的 27B 模型，社区极端压缩的代表，超高下载量说明实战价值。

- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)**
  作者：ISTA-DASLab ｜ 👍 1,734 ｜ ⬇️ 1,560,929
  引入 **GSQ + RCO** 两种新量化与混合精度方案的 Qwen3.8 量化版本，研究向创新明显。

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)**
  作者：unsloth ｜ 👍 4,655 ｜ ⬇️ 6,832,629
  Unsloth 出品的"消费级 GGUF"标杆，方便本地显存紧张的用户跑 27B。

- **[abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF)**
  作者：abenzerps ｜ 👍 1,945 ｜ ⬇️ 876,673
  Qwen-Image-2.1 的去限制 GGUF 版本，提供 ComfyUI GGUF 工作流。

- **[Comfy-Org/Qwen-

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*