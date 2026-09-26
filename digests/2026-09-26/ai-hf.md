# Hugging Face 热门模型日报 2026-09-26

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-26 03:00 UTC

---

# 📊 Hugging Face 热门模型日报
**日期：2026-09-26**

---

## 🔥 今日速览

今日 Hugging Face 趋势榜由 **Qwen 系列**和**多模态模型**牢牢占据：Qwen3.8-27B 以 16,292 周点赞稳居榜首，Qwen3.8-Flash-Next（5,703）、DeepSeek-V4.1-Flash（3,753）紧随其后。视频生成领域 **Lightricks/LTX-2.5**（5,116 点赞）持续走强，文本到图像侧 **Qwen-Image-2.1** 生态正在快速扩张。社区层面，**unsloth、ISTA-DASLab、prism-ml** 等量化版本合计下载量已突破 1800 万，2-bit 三元量化、GGUF 仍是本地化部署的主流路径。

---

## 🧠 语言模型（LLM、对话模型、指令微调）

- **[XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B)**
  作者：XingChen-AGI ｜ 点赞 1,686 ｜ 下载 42,950
  星陈 AGI 发布的 29B MoE（4B 激活）文本生成模型，定位对话场景，国产中型 LLM 阵营新成员。

- **[Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1)**
  作者：Altworld ｜ 点赞 676 ｜ 下载 4,978
  基于 Qwen3.5 架构的文本生成模型，专注写作风格与对话能力。

- **[XiaomiMiMo/MiMo-V2.6-Pro-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL)**
  作者：XiaomiMiMo ｜ 点赞 500 ｜ 下载 42,062
  小米 MiMo V2.6 系列的 RL 强化版本，多模态文本生成旗舰款。

- **[XiaomiMiMo/MiMo-V2.6-Flash-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL)**
  作者：XiaomiMiMo ｜ 点赞 463 ｜ 下载 20,473
  轻量化的 MiMo V2.6 Flash，主打推理速度与多模态能力平衡。

- **[yandex/AliceAI-Foundation-80B-A3B-Base](https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base)**
  作者：Yandex ｜ 点赞 333 ｜ 下载 2,911
  Yandex 推出的 80B-A3B MoE 基础模型，俄罗斯本地化 LLM 生态代表。

---

## 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**
  作者：Qwen ｜ 点赞 16,292 ｜ 下载 6,579,319
  本周绝对焦点——Qwen3.5 系列 27B 视觉语言模型，多模态对话与推理能力俱佳，下载量居榜首。

- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)**
  作者：Qwen ｜ 点赞 5,703 ｜ 下载 846,820
  Qwen3.8 系列的轻量 Flash 版本，定位低延迟多模态推理。

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**
  作者：Lightricks ｜ 点赞 5,116 ｜ 下载 1,598,133
  图像/文本到视频的扩散模型，支持 video-to-video 与图生视频，视频生成领域第一阵营。

- **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)**
  作者：Qwen ｜ 点赞 2,324 ｜ 下载 42,469
  阿里最新图像生成与编辑模型，统一文生图与图像编辑能力。

- **[TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B)**
  作者：TaichuAI ｜ 点赞 1,050 ｜ 下载 9,498
  中科院自动化所 Taichu 多模态模型，强调空间推理能力。

- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)**
  作者：deepseek-ai ｜ 点赞 3,753 ｜ 下载 621,396
  DeepSeek V4.1 Flash 版，支持图像-文本联合任务，开源多模态 LLM 的强力竞争者。

- **[Edge0/Audio8-ASR-Infinite](https://huggingface.co/Edge0/Audio8-ASR-Infinite)**
  作者：Edge0 ｜ 点赞 606 ｜ 下载 2,853
  支持流式（streaming）的 ASR 模型，长音频无限时长识别。

- **[netease-youdao/Confucius4-R2T2](https://huggingface.co/netease-youdao/Confucius4-R2T2)**
  作者：netease-youdao ｜ 点赞 412 ｜ 下载 5,827
  网易有道基于 Qwen3-ASR 的孔子 4 代语音识别模型，中文场景优化。

- **[nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization)**
  作者：NVIDIA ｜ 点赞 343 ｜ 下载 11,459
  基于 NeMo 框架的说话人 diarization 模型，音频会议场景必备。

- **[StarDoc-AI/TeleOCR](https://huggingface.co/StarDoc-AI/TeleOCR)**
  作者：StarDoc-AI ｜ 点赞 315 ｜ 下载 32,056
  基于 Qwen2.5-VL 的 OCR 模型，电信文档识别场景的专用微调。

- **[inclusionAI/Ming-Image-0.1-Design](https://huggingface.co/inclusionAI/Ming-Image-0.1-Design)**
  作者：inclusionAI ｜ 点赞 240 ｜ 下载 0
  新发布的设计向文生图模型，聚焦海报与视觉设计场景。

- **[Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo)**
  作者：Viggle ｜ 点赞 233 ｜ 下载 47,873
  基于 Qwen-Image-2.1 的 LoRA 微调，定位 Turbo 加速版图像生成。

---

## 🔧 专用模型（代码、数学、医疗、嵌入、NLI）

- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)**
  作者：convaiinnovations ｜ 点赞 3,701 ｜ 下载 0
  本周点赞第二高的模型，定位"校准决策"的文本分类系统，system-one 推理新范式，值得关注。

- **[AlexWortega/openjev](https://huggingface.co/AlexWortega/openjev)**
  作者：AlexWortega ｜ 点赞 578 ｜ 下载 0
  基于 Qwen3.5 的 NLI 交叉编码器，自然语言推理专用模型。

- **[convaiinnovations/laya-multilingual](https://huggingface.co/convaiinnovations/laya-multilingual)**
  作者：convaiinnovations ｜ 点赞 277 ｜ 下载 0
  laya 的多语言版本，基于 mmmBERT 架构。

- **[akhilaaa3/Jev-Omni](https://huggingface.co/akhilaaa3/Jev-Omni)**
  作者：akhilaaa3 ｜ 点赞 234 ｜ 下载 0
  基于 Gemma4 unified 架构的多任务文本分类模型。

---

## 📦 微调与量化（社区微调、GGUF、AWQ）

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)**
  作者：unsloth ｜ 点赞 4,624 ｜ 下载 6,938,321
  下载量冠军，本地部署 Qwen3.8-27B 的首选 GGUF 版本。

- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)**
  作者：prism-ml ｜ 点赞 2,093 ｜ 下载 3,109,078
  2-bit 三元量化 27B 模型，激进压缩路线的标杆，3M+ 下载说明极低显存部署需求旺盛。

- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)**
  作者：ISTA-DASLab ｜ 点赞 1,704 ｜ 下载 1,510,016
  采用 GSQ（分组尺度量化）+ RCO 混合精度策略的研究型量化。

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/David

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*