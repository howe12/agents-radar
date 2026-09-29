# Hugging Face 热门模型日报 2026-09-29

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-29 03:41 UTC

---

# Hugging Face 热门模型日报
**日期：2026-09-29**

---

## 📌 今日速览

今日榜单被 **Qwen 家族**强势主导——Qwen3.8-27B 以 **16,503 点赞**与 **684 万下载**登顶，Qwen-Image-2.1 系列更衍生出 6 个不同变体（GGUF、LoRA、Turbo 等），反映出 **多模态扩散模型生态正在围绕单一强势基座快速分化**。视频侧 **Lightricks/LTX-2.5** 异军突起（5,433 点赞 / 160 万下载），成为 I2V/V2V 方向最活跃的开源方案。值得关注的另一信号是 **极致量化探索**：2-bit Ternary Bonsai 与 GSQ-RCO 混合精度版 Qwen3.8 同步上榜，说明社区正加速把 27B 级模型压向消费级硬件。**deepseek-ai/DeepSeek-V4.1-Flash**（3,870 点赞）也以多模态 Flash 版本强势回归。

---

## 🧠 语言模型（LLM / 对话 / 指令）

| 模型 | 作者 | 点赞 | 下载 | 简介 |
|---|---|---|---|---|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 16,503 | 6.84M | **本周榜首**，Qwen3.5 系列 27B 多模态旗舰，文本与图像输入并重，社区认可度极高 |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | DeepSeek | 3,870 | 668K | DeepSeek V4.1 的轻量 Flash 版，支持图文双输入，是榜单上少数能与 Qwen 抗衡的基座 |
| [XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B) | XingChen-AGI | 1,801 | 45K | 29B 参数 MoE 架构（Active 4B），主打对话场景，国产新势力代表 |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 1,706 | 11K | 紫东太初 5.0 9B 多模态，强调**空间推理**能力 |
| [XiaomiMiMo/MiMo-V2.6-Pro-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL) | XiaomiMiMo | 585 | 76K | 小米 MiMo V2.6 强化学习对齐版本，多模态文本生成 |
| [XiaomiMiMo/MiMo-V2.6-Flash-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL) | XiaomiMiMo | 512 | 28K | MiMo V2.6 的轻量 RL 版本，部署更友好 |
| [Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1) | Altworld | 765 | 7K | 基于 Qwen3.8 的文本生成微调，强调文风一致性 |
| [orcarouter/OrcaSAQ-2-27B](https://huggingface.co/orcarouter/OrcaSAQ-2-27B) | orcarouter | 195 | 1.6K | Qwen3.8 衍生微调，面向 SAQ 问答场景，vLLM 友好 |

---

## 🎨 多模态与生成（图像 / 视频 / 音频 / OCR）

| 模型 | 作者 | 点赞 | 下载 | 简介 |
|---|---|---|---|---|
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 5,433 | 1.59M | **本周最热视频模型**，支持 I2V/T2V/V2V，单文件部署，开源视频生成的事实新标准 |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 2,598 | 58K | Qwen 官方文生图基座，支持图像编辑，是榜单上 T2I 主线 |
| [XingChen-AGI/TeleOCR](https://huggingface.co/XingChen-AGI/TeleOCR) | XingChen-AGI | 812 | 27K | 基于 Qwen2.5-VL 的 OCR 专用模型，文本识别场景的强力工具 |
| [Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo) | Viggle | 387 | 175K | Qwen-Image-2.1 的 LoRA Turbo 加速版，I2I + T2I 兼顾 |
| [XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B) | XiaomiMiMo | 553 | 9K | 从 Qwen 蒸馏的 9B 多模态小模型，性价比路线 |
| [apple/LensVLM-9B](https://huggingface.co/apple/LensVLM-9B) | Apple | 262 | 1.8K | Apple 罕见开源的 9B 视觉语言模型，主打图像理解 |
| [Edge0/Audio8-ASR-Infinite](https://huggingface.co/Edge0/Audio8-ASR-Infinite) | Edge0 | 1,422 | 19K | 支持**流式长音频**的 ASR 模型，强调"无限时长"识别 |
| [netease-youdao/Confucius4-R2T2](https://huggingface.co/netease-youdao/Confucius4-R2T2) | netease-Youdao | 448 | 9K | 网易有道 Confucius4 ASR 升级版，Qwen3-ASR 系底座 |
| [nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization) | NVIDIA | 466 | 26K | 说话人日志（VAD/Diarization）专用，工业级音频工具 |
| [inclusionAI/Ming-Image-0.1-Design](https://huggingface.co/inclusionAI/Ming-Image-0.1-Design) | inclusionAI | 330 | 0 | Ming-Image 设计方向 T2I，发布首日即上榜，关注度上升 |

---

## 🔧 专用模型（代码 / 排序 / NLI / 抽取）

| 模型 | 作者 | 点赞 | 下载 | 简介 |
|---|---|---|---|---|
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 4,330 | 0 | 文本分类模型，强调"系统一 + 校准决策"，本周点赞亚军却**零下载**，疑似营销或新发布 |
| [Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B) | Contrastive-LM | 488 | 1.2K | 8B 对比学习重排序/验证器，面向 RAG 与 LLM-as-Judge 场景 |
| [fastino/GLiNER2.5-Decide](https://huggingface.co/fastino/GLiNER2.5-Decide) | fastino | 232 | 24K | GLiNER 系列升级，新增**意图分类与决策抽取**，少样本实体抽取新选择 |
| [akhilaaa3/Jev-Omni](https://huggingface.co/akhilaaa3/Jev-Omni) | akhilaaa3 | 299 | 577 | 基于 Gemma4 unified 的多任务分类模型 |
| [SupersonicLabs/Julia-1](https://huggingface.co/SupersonicLabs/Julia-1) | SupersonicLabs | 263 | 1K | 多语言"决策模型"，文本分类小而精 |
| [AlexWortega/openjev](https://huggingface.co/AlexWortega/openjev) | AlexWortega | 621 | 0 | 基于 Qwen3.5 的 NLI 交叉编码器，文本蕴含判断新工具 |

---

## 📦 微调与量化（社区微调 / GGUF / AWQ / 极致量化）

| 模型 | 作者 | 点赞 | 下载 | 简介 |
|---|---|---|---|---|
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 2,237 | 3.45M | **2-bit 三值量化 GGUF**，27B 模型压缩到极致，下载量极高，主打 llama.cpp 低显存部署 |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,813 | 1.65M | Qwen3.8-27B 的 **GSQ + RCO 混合精度 GGUF**，实验性高压缩方案 |
| [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 2,292 | 1.06M | Qwen-Image-2.1 的去审查 GGUF 版，ComfyUI 部署首选 |
| [Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1) | Comfy-Org | 829 | 4.35M | ComfyUI 官方封装版，**下载量全榜第二**，生态分发位 |
| [unsloth/Qwen-Image-2.1-GGUF](https://huggingface.co/unsloth/Qwen-Image-2.1-GGUF) | unsloth | 288 | 220K | unsloth 经典 GGUF 量化出品，质量稳定 |
| [pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF](https://huggingface.co/pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF) | pottokao | 316 | 158K | 针对 Qwen-Image-2.1 文本编码器的 Heretic GGUF，fp8 量化 |

---

## 🌐 生态信号

Qwen 家族在 30 个席位中占据约 **40%**，从 27B 主线到 Image-2.1 文生图，再到各类 GGUF 与 LoRA 微调，已经形成完整的"基座 + 社区衍生"金字塔。**国产开源力量加速崛起**：XingChen-AGI、TaichuAI、XiaomiMiMo、inclusionAI、Netease-Youdao 同时登榜，覆盖对话、多模态、ASR、文生图多个赛道。量化层面出现**2-bit Ternary、GSQ-RCO 混合精度**等激进方案，目标是让 27B 级模型能在 16GB 以下显存运行。开源权重整体占绝对优势，闭源厂商仅 Apple 与 NVIDIA 以专用任务（LensVLM、Nemotron Diarization）参与，市场格局依然高度开放。

---

## ⭐ 值得探索

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 16,503 点赞 + 684 万下载的双料冠军，是当前最强的开源多模态基座之一，研究、应用两端都值得优先试用。
2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 唯一进入榜单前列的开源视频生成模型，单文件部署、I2V/T2V/V2V 全支持，是替代闭源视频工具的最现实选择。
3. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — 2-bit 三值量化的代表作，3.45M 下载说明社区对其低资源部署价值高度认可，是研究**极限量化 + 质量权衡**必看的样本。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*