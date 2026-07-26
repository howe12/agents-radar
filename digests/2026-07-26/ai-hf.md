# Hugging Face 热门模型日报 2026-07-26

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-26 02:09 UTC

---

# Hugging Face 热门模型日报
**📅 2026-07-26**

---

## 📌 今日速览

今日趋势榜显示开源大模型生态呈现"**Qwen3.6 全家族爆发 + 极低比特量化 + 视觉/机器人专用模型**"三大主线。**GLM-5.2**（zai-org）以 4,447 周点赞领跑，**Qwen3.6-35B-A3B** 与 **baidu/Unlimited-OCR** 紧随其后，社区围绕 Qwen3.6 派生出的"去审查"和 GGUF/NVFP4 量化版本占据榜单半壁江山。同时，**openbmb 的 MiniCPM 机器人系列**、**microsoft 的 Fara1.5 计算机操控模型**以及 NVIDIA Cosmos3-Edge 共同预示"具身智能"成为下一个开源热点。

---

## 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---|---|---|
| [**zai-org/GLM-5.2**](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,447 | 707K | 智谱最新 MoE-DSA 架构旗舰，本周冠军，70 万下载证明其作为开源 SOTA 基础模型地位 |
| [**Qwen/Qwen3.6-35B-A3B**](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Qwen | 2,516 | 6.41M | 阿里 Qwen3.6 旗舰 MoE（激活 3B），下载量惊人，已成为社区微调的事实底座 |
| [**poolside/Laguna-S-2.1**](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 662 | 45K | poolside 第二代代码/对话模型，已形成原生 / GGUF / NVFP4 三件套矩阵 |
| [**upstage/Solar-Open2-250B**](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 563 | 2.8K | Solar Open 系列的 250B 巨兽，开放权重仅 2K 下载但热度高 |
| [**Nanbeige/Nanbeige4.2-3B**](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 406 | 11K | 南北方（Nanbeige）小尺寸 LLM，主打端侧部署 |
| [**Motif-Technologies/Motif-3-Beta**](https://huggingface.co/Motif-Technologies/Motif-3-Beta) | Motif-Technologies | 191 | 2.3K | 新晋文本生成模型，处于 Beta 测试阶段 |

---

## 🎨 多模态与生成（图像 / 视频 / 音频 / 文本到 X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---|---|---|
| [**baidu/Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,107 | 2.56M | 百度无限场景 OCR，本周下载第二高，证明企业级文档理解需求旺盛 |
| [**thinkingmachines/Inkling**](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,571 | 31K | 多模态对话模型，1.5K 点赞显示市场对非主流玩家的关注 |
| [**microsoft/Mage-Flow**](https://huggingface.co/microsoft/Mage-Flow) | microsoft | 277 | 1.2K | 微软扩散模型新成员，支持文生图与图像编辑 |
| [**conradlocke/krea2-identity-edit**](https://huggingface.co/conradlocke/krea2-identity-edit) | conradlocke | 539 | 0 | 基于 Krea-2-Raw 的身份保持 LoRA，ComfyUI 生态专用 |
| [**nvidia/Cosmos3-Edge**](https://huggingface.co/nvidia/Cosmos3-Edge) | nvidia | 121 | 31K | NVIDIA Cosmos3 边缘端世界模型，面向具身智能与机器人 |
| [**owensong/Inflect-Micro-v2**](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 84 | 47 | 轻量级本地 TTS，主打 CPU / 边缘 AI |

---

## 🔧 专用模型（代码 / 机器人 / 安全 / 计算机操控）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---|---|---|
| [**Kwaipilot/KAT-Coder-V2.5-Dev**](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 166 | 841 | 基于 Qwen3.5-MoE 的代码专用模型，开发者向 |
| [**openbmb/MiniCPM-RobotManip**](https://huggingface.co/openbmb/MiniCPM-RobotManip) | openbmb | 175 | 607 | 清华系的机器人操控 VLA（Vision-Language-Action）模型 |
| [**openbmb/MiniCPM-RobotTrack**](https://huggingface.co/openbmb/MiniCPM-RobotTrack) | openbmb | 128 | 379 | 配套的视觉追踪模型，MiniCPM 机器人家族已具雏形 |
| [**microsoft/Fara1.5-27B**](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 90 | 1K | 微软计算机操控（Computer-Use）模型，GUI Agent 方向 |
| [**fdtn-ai/antares-1b**](https://huggingface.co/fdtn-ai/antares-1b) | fdtn-ai | 163 | 5.6K | 基于 Granite MoE Hybrid 的安全/网络安全垂直 LLM |
| [**moonshotai/Kimi-K2.7-Code**](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 1,277 | 749K | 月之暗面 Kimi 编程版本，压缩张量格式，下载量极高 |
| [**ATH-MaaS/OvisOCR2**](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 287 | 33K | Ovis 多模态家族的 OCR v2，文档智能方向 |

---

## 📦 微调与量化（社区微调 / GGUF / NVFP4 / Ternary）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---|---|---|
| [**HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,091 | 1.99M | Qwen3.6 "激进去审查"微调，单周近 200 万下载，社区最热 |
| [**empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,465 | 1.57M | Qwen3.5 + Claude 神话融合的推理 GGUF，1M 上下文 |
| [**DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic**](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 546 | 484K | DavidAU 老牌 Qwen "寓言融合 711"，MTP 增强去审查版 |
| [**bottlecapai/ThinkingCap-Qwen3.6-27B**](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B) | bottlecapai | 551 | 27K | 给 Qwen3.6-27B 加 "思考帽" 的指令微调版 |
| [**prism-ml/Ternary-Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 1,028 | 612K | **三值（2-bit）量化** Bonsai，激进压缩新范式 |
| [**prism-ml/Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 638 | 2.11M | **1-bit 二值量化** Bonsai，下载量破 200 万，极致边缘部署 |
| [**unsloth/Laguna-S-2.1-GGUF**](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF) | unsloth | 187 | 72K | Unsloth 优化的 Laguna-S-2.1 GGUF |
| [**poolside/Laguna-S-2.1-GGUF**](https://huggingface.co/poolside/Laguna-S-2.1-GGUF) | poolside | 142 | 77K | poolside 官方 GGUF 版本 |
| [**poolside/Laguna-S-2.1-NVFP4**](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4) | poolside | 135 | 117K | NVFP4（4-bit Float）版本，面向 NVIDIA Blackwell 推理 |
| [**baseten/GLM-5.2-Vision-NVFP4**](https://huggingface.co/baseten/GLM-5.2-Vision-NVFP4) | baseten | 99 | 2K | Baseten 提供的 GLM-5.2-Vision 4-bit 浮点量化 |
| [**LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF**](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF) | LuffyTheFox | 153 | 61K | Hermes 协议 + Qwen3.6 去审查 GGUF |

---

## 📊 生态信号

**Qwen3.6 系列已形成事实标准生态底座。** 榜单 30 个模型中至少 7 个直接基于 Qwen3.6（35B-A3B 与 27B 两个分支），覆盖原生 MoE、uncensored 微调、GGUF/NVFP4 量化、MTP 增强、思考增强等多个维度，反映出社区对阿里通义系列架构的高度认可。**极低比特量化走向主流**：prism-ml 的 1-bit Bonsai（210 万下载）与 2-bit Ternary Bonsai（61 万下载）证明二进制/三值量化在边缘部署场景已具备实用价值，而 NVFP4 则成为 NVIDIA Blackwell 时代的推理标配格式。**具身智能与计算机操控正在崛起**：openbmb 的 MiniCPM-RobotManip / RobotTrack、NVIDIA Cosmos3-Edge、Microsoft Fara1.5-27B 共同标志 2026 下半年"开源具身基础模型"竞赛正式开启。**"Uncensored / Heretic" 类社区微调持续火热**，HauhauCS、DavidAU、empero-ai 等作者通过合规替代版本提供差异化体验，下载量常常突破百万级。

---

## 🔭 值得探索

1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** ——本周点赞冠军，MoE + DSA 架构，若你正在评估国产开源旗舰的最新 SOTA，这是必看基线。

2. **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf) 与 [prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** ——**1-bit / 2-bit 极低比特量化的研究范本**，下载量双双破百万，对边缘部署、量化算法研究、内存受限推理场景极具参考价值。

3. **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip) + [MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack)** ——清华大学开源的机器人操控 + 追踪模型组合，配合 NVIDIA Cosmos3-Edge，是进入"开源具身智能"研究栈最便捷的入口。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*