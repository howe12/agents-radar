# Hugging Face 热门模型日报 2026-07-25

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-25 02:04 UTC

---

# Hugging Face 热门模型日报 · 2026-07-25

---

## 📌 今日速览

今日榜单由 **GLM-5.2**（4,416 点赞）领跑，**Google Gemma 4 31B** 以 1263 万下载量稳坐"装机之王"。**Qwen3.6-35B-A3B** 生态持续扩散——官方权重与至少 5 个社区微调/量化变体同时登榜，体现 MoE 架构已成为开源主力形态。OCR、代码、机器人视觉语言动作（VLA）三大垂直方向均有新品爆发。

---

## 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | 👍 点赞 | ⬇ 下载 |
|---|---|---:|---:|
| [**zai-org/GLM-5.2**](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,416 | 667,403 |
| [**google/gemma-4-31B-it**](https://huggingface.co/google/gemma-4-31B-it) | google | 3,360 | 12,629,921 |
| [**Qwen/Qwen3.6-35B-A3B**](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Qwen | 2,503 | 6,460,680 |
| [**prism-ml/Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 632 | 2,028,115 |
| [**poolside/Laguna-S-2.1**](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 612 | 28,992 |
| [**upstage/Solar-Open2-250B**](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 542 | 1,106 |
| [**Nanbeige/Nanbeige4.2-3B**](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 372 | 8,169 |
| [**Motif-Technologies/Motif-3-Beta**](https://huggingface.co/Motif-Technologies/Motif-3-Beta) | Motif | 185 | 2,108 |
| [**fdtn-ai/antares-1b**](https://huggingface.co/fdtn-ai/antares-1b) | fdtn-ai | 149 | 4,266 |
| [**poolside/Laguna-S-2.1-NVFP4**](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4) | poolside | 129 | 89,186 |
| [**poolside/Laguna-S-2.1-GGUF**](https://huggingface.co/poolside/Laguna-S-2.1-GGUF) | poolside | 133 | 62,092 |
| [**unsloth/Laguna-S-2.1-GGUF**](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF) | unsloth | 170 | 57,536 |

**看点：** GLM-5.2 采用 `glm_moe_dsa` MoE + 深度稀疏注意力，单周点赞断层第一；Gemma 4 31B 凭借 Google 出品 + 多模态能力一周内吸量 1263 万；Poolside Laguna-S-2.1 一口气放出原生、GGUF、NVFP4 三种格式（加上 unsloth 转制），是本周"全格式发布"典范。

---

## 🎨 多模态与生成（图像 / 视频 / 音频 / 文本到 X）

| 模型 | 作者 | 👍 | ⬇ |
|---|---|---:|---:|
| [**baidu/Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,014 | 2,500,391 |
| [**thinkingmachines/Inkling**](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,546 | 27,883 |
| [**microsoft/Mage-Flow**](https://huggingface.co/microsoft/Mage-Flow) | microsoft | 235 | 891 |
| [**ATH-MaaS/OvisOCR2**](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 276 | 30,292 |
| [**nvidia/Cosmos3-Edge**](https://huggingface.co/nvidia/Cosmos3-Edge) | nvidia | 112 | 30,303 |
| [**baseten/GLM-5.2-Vision-NVFP4**](https://huggingface.co/baseten/GLM-5.2-Vision-NVFP4) | baseten | 90 | 494 |
| [**openbmb/MiniCPM-RobotManip**](https://huggingface.co/openbmb/MiniCPM-RobotManip) | openbmb | 173 | 559 |
| [**openbmb/MiniCPM-RobotTrack**](https://huggingface.co/openbmb/MiniCPM-RobotTrack) | openbmb | 123 | 349 |
| [**conradlocke/krea2-identity-edit**](https://huggingface.co/conradlocke/krea2-identity-edit) | conradlocke | 532 | 0 |

**看点：** OCR 赛道本周双星闪耀——Baidu Unlimited-OCR（不限长度文档解析）与 OvisOCR2 形成直接竞争；Thinking Machines（Mira Murati 新厂）的 Inkling 首次亮相即冲进前三，神秘度高；MiniCPM-RobotManip / RobotTrack 标志**VLA（视觉-语言-动作）机器人基础模型正式进入 HF 主流视野**；NVIDIA Cosmos3-Edge 则把 Cosmos 世界模型推到边缘端。

---

## 🔧 专用模型（代码 / 数学 / 医疗 / 嵌入）

| 模型 | 作者 | 👍 | ⬇ |
|---|---|---:|---:|
| [**moonshotai/Kimi-K2.7-Code**](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 1,263 | 756,668 |
| [**Kwaipilot/KAT-Coder-V2.5-Dev**](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 125 | 396 |
| [**nvidia/nemotron-3.5-asr-streaming-0.6b**](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | nvidia | 937 | 797,525 |

**看点：** Kimi-K2.7-Code 以 1263 点赞稳坐代码模型头名，单周 75 万下载量；Kwaipilot（快手旗下）发布的 KAT-Coder 走小而精路线（Qwen3.5-MoE 内核）；NVIDIA Nemotron 3.5 流式 ASR 仅 0.6B 参数，是榜单上少数纯音频模型，主打低延迟实时听写。

---

## 📦 微调与量化（社区 GGUF / AWQ / Uncensored）

| 模型 | 作者 | 👍 | ⬇ |
|---|---|---:|---:|
| [**HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,069 | 2,057,103 |
| [**empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,455 | 1,906,539 |
| [**prism-ml/Ternary-Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 1,006 | 595,415 |
| [**DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-…-GGUF**](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 486 | 407,421 |
| [**bottlecapai/ThinkingCap-Qwen3.6-27B**](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B) | bottlecai | 542 | 26,092 |
| [**LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF**](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF) | LuffyTheFox | 134 | 36,703 |

**看点：** Qwen3.6 是当之无愧的"开源基座之王"——上榜 6 款模型中 5 款基于其衍生；"Uncensored / Heretic" 路线依然是社区出圈最快的流量密码（单模型 200 万+ 下载）；**Ternary-Bonsai** 探索 2-bit 三元量化，是极低比特落地的激进实验。

---

## 🌐 生态信号

本周榜单清晰呈现三大趋势：**① MoE 成为开源旗舰默认形态**，Qwen3.6-35B-A3B、GLM-5.2、Solar-Open2-250B、GLM-5.2-Vision 均采用稀疏激活路线，稠密模型在 Top 榜几近边缘化。**② 量化与多格式发布已成标配**——Poolside Laguna-S-2.1、GLM-5.2-Vision 等头部模型均在原生权重同日同步 GGUF / NVFP4 版本，由 unsloth、baseten 等专业量化厂商接力，体现"一次发布，多端覆盖"的工业化路径。**③ 开源 vs 闭源天平继续向开源倾斜**：Gemma 4、Qwen3.6、Kimi-K2.7、GLM-5.2 等厂商开源权重单周下载量级均达百万级，远超闭源 API 调用阈值；但"Uncensored" 类衍生品暴增也折射出**安全对齐与社区需求的张力**——这是 2026 年最值得监管与研究者关注的分歧点。

---

## ⭐ 值得探索

1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** —— 本周点赞冠军，`glm_moe_dsa` 架构（DSA = Deep Sparse Attention）首次大规模落地，是研究下一代 MoE+长上下文范式的必看样本。
2. **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** —— Mira Murati 创立的 Thinking Machines 首个公开模型，27K 下载即获 1,546 点赞，社区期待值极高，建议尽早体验其 `inkling_mm_model` 多模态风格。
3. **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** —— 0.6B 参数实现流式 ASR，单周近 80 万下载，边缘设备语音交互方案的标杆，适合做端侧实时听写产品原型。

---

*日报基于 Hugging Face Hub 2026-07-25 周点赞 Top 30 模型整理。*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*