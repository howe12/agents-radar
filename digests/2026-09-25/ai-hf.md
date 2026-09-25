# Hugging Face 热门模型日报 2026-09-25

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-25 02:57 UTC

---

# 📊 Hugging Face 热门模型日报
**日期：2026-09-25 · 共统计 30 个热门模型**

---

## 一、今日速览

Qwen 家族继续主导本周榜单，**Qwen3.8-27B** 以 16,226 点赞稳居榜首，其配套的 **Qwen3.8-Flash-Next** 与 **Qwen-Image-2.1** 在多模态和快速推理领域同样表现强劲。视频生成方向由 **Lightricks/LTX-2.5**（5,017 点赞）领跑，标志着可控 I2V/T2V 模型走向成熟。同时，量化与社区微调活动呈爆发态势，**unsloth**、**ISTA-DASLab**、**prism-ml** 等团队围绕 Qwen3.8 推出多种 GGUF/2-bit 版本，边缘端部署生态加速成型。

---

## 二、热门模型分类

### 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|---|---|---|---|---|
| **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** | Qwen | 16,226 | 6,765,008 | 本周绝对焦点，Qwen3.5 架构旗舰，多模态对话与通用推理能力拉满 |
| **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** | Qwen | 5,682 | 830,208 | 面向低延迟场景的轻量分支，Qwen4 实验架构，兼顾速度与质量 |
| **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)** | deepseek-ai | 3,721 | 606,028 | DeepSeek 全新 Flash 版本，多模态理解与文本生成兼具，社区关注度高 |
| **[XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B)** | XingChen-AGI | 1,647 | 41,923 | 29B-A4B 架构 MoE 对话模型，主打开源对话与角色一致性 |
| **[Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1)** | Altworld | 637 | 4,541 | 基于 Qwen3.5 的文风化指令微调，主打文学性长文本生成 |
| **[yandex/AliceAI-Foundation-80B-A3B-Base](https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base)** | yandex | 321 | 2,678 | Yandex Alice 系列 80B 总参 / 3B 激活 MoE 基座，支持自定义代码 |
| **[Cactus-Compute/needle3](https://huggingface.co/Cactus-Compute/needle3)** | Cactus-Compute | 226 | 69,655 | 面向 on-device 的工具调用与函数执行模型，体积小、实用性强 |

### 🎨 多模态与生成（图像 / 视频 / 音频）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|---|---|---|---|---|
| **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** | Lightricks | 5,017 | 1,637,601 | 视频生成王者，统一支持 I2V / T2V / V2V，是当下最热视频模型 |
| **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)** | Qwen | 2,213 | 37,618 | Qwen 第二代图像生成 + 编辑模型，diffusers 标准接口 |
| **[TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B)** | TaichuAI | 1,041 | 8,313 | 紫东太初 5.0 多模态模型，主打空间推理与视觉语言能力 |
| **[m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B)** | m-a-p | 995 | 23,703 | 第二代 YuE 音乐生成模型，结合符号规划与 Agentic 编辑能力 |
| **[Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1)** | Comfy-Org | 686 | 2,858,923 | Qwen-Image 官方单文件版，下载量极高，ComfyUI 工作流首选 |
| **[inclusionAI/Ming-Image-0.1-Design](https://huggingface.co/inclusionAI/Ming-Image-0.1-Design)** | inclusionAI | 228 | 0 | Ming-Image 首发设计分支，专注平面/海报类图像生成 |
| **[XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B)** | XiaomiMiMo | 435 | 5,705 | 小米 MiMo V2.6 蒸馏版多模态模型，继承 Qwen3.5 图像理解能力 |

### 🔧 专用模型（代码 / 推理 / 语音 / 嵌入）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|---|---|---|---|---|
| **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)** | convaiinnovations | 3,422 | 0 | 基于 System-One 思路的"校准式决策"文本分类模型，新概念受关注 |
| **[convaiinnovations/laya-multilingual](https://huggingface.co/convaiinnovations/laya-multilingual)** | convaiinnovations | 251 | 0 | Laya 多语言版本，基于 mmbert 扩展多语种分类能力 |
| **[AlexWortega/openjev](https://huggingface.co/AlexWortega/openjev)** | AlexWortega | 559 | 0 | 基于 Qwen3.5 的 NLI 跨编码器，专攻零样本分类与语义蕴含判断 |
| **[netease-youdao/Confucius4-R2T2](https://huggingface.co/netease-youdao/Confucius4-R2T2)** | netease-youdao | 395 | 4,930 | 网易有道 ASR 第四代 R2T2 架构，面向高准确率语音识别 |
| **[Edge0/Audio8-ASR-Infinite](https://huggingface.co/Edge0/Audio8-ASR-Infinite)** | Edge0 | 353 | 347 | 面向无限长音频的流式 ASR，主打边缘端实时转写 |
| **[nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization)** | nvidia | 279 | 4,282 | NVIDIA 说话人 diarization 模型，支持音频帧级分类 |

### 📦 微调与量化（GGUF / AWQ / 社区版）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|---|---|---|---|---|
| **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** | unsloth | 4,588 | 7,063,930 | Qwen3.8 官方 GGUF 量化版本，下载量第一，边缘部署首选 |
| **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** | ISTA-DASLab | 1,656 | 1,465,429 | GSQ + RCO 混合精度量化实验，体积更小、精度损失可控 |
| **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-…GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** | DavidAU | 1,160 | 1,502,387 | "Heretic Uncensored" 多能力融合版，融合 Fable/Coder/MTP 等多任务 |
| **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** | prism-ml | 2,043 | 2,991,233 | 2-bit 三值量化实验版本，极致压缩推动 27B 模型在消费级 GPU 跑起来 |
| **[prism-ml/Ternary-Bonsai-2-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-mlx-2bit)** | prism-ml | 368 | 51,644 | 同系列 MLX 版，专为 Apple Silicon 优化的 2-bit 推理版本 |
| **[abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF)** | abenzerps | 1,643 | 575,697 | Qwen-Image 2.1 的去审查 GGUF 版，主打 ComfyUI 工作流无限制出图 |
| **[pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF](https://huggingface.co/pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF)** | pottokao | 243 | 103,226 | 单独量化 Qwen-Image 文本编码器，FP8 + ComfyUI 优化 |
| **[harshatheg/Qwen-2.5-1B-RLCD](https://huggingface.co/harshatheg/Qwen-2.5-1B-RLCD)** | harshatheg | 566 | 0 | Qwen-2.5 1B 上的 RLCD（约束式解码）实验，主打结构化输出 |

---

## 三、生态信号

**Qwen 3.8 正在成为"开源基座标准"**——榜单中至少有 12 个模型直接基于 Qwen3.5/Qwen3.8 微调或量化，覆盖文本、图像、视频、ASR、代码、uncensored 等几乎所有方向，显示其在中文与多模态生态中的主导地位。**国产模型军团**（DeepSeek、Xiaomi MiMo、TaichuAI、inclusionAI、有道 Confucius、Yandex Alice）首次在同一榜单中集体亮相，反映出非英语社区在开源权重层面的协同加速。

**量化与边缘部署是最大增长极**。本周 GGUF

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*