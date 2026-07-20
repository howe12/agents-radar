# Hugging Face 热门模型日报 2026-07-20

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-20 02:25 UTC

---

# 📊 Hugging Face 热门模型日报
**日期：2026-07-20**

---

## 一、今日速览

今日 Hugging Face 趋势榜呈现"巨头集中爆发 + 极端量化突围"的双线格局：智谱 **GLM-5.2**（4,170 点赞）登顶周榜，谷歌 **Gemma-4-31B** 单周下载突破 1230 万，体现头部厂商的开源号召力。同时 **prism-ml/Bonsai-27B** 系列以 1-bit / 三进制 / 2-bit 三种极限量化包探索 LLM 压缩新边界，下载量合计超 160 万。Qwen3.5/3.6 系列衍生模型继续霸榜，"中国系"开源力量在视觉、OCR、视频、Agent 等多个赛道全面开花。

---

## 二、热门模型分类

### 🧠 语言模型（LLM、对话模型、指令微调）

| # | 模型 | 作者 | 点赞 | 下载 | 一句话 |
|---|---|---|---|---|---|
| 1 | [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,170 | 536,177 | 智谱最新 MoE 旗舰，采用 `glm_moe_dsa` 架构，本周最强新发模型 |
| 2 | [google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) | google | 3,273 | 12,337,374 | 谷歌 Gemma 4 系列指令版，单周下载破千万，社区普及速度极快 |
| 3 | [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 947 | 0 | 修复 Qwen3.5 聊天模板的小工具，但解决了大量下游用户痛点 |
| 4 | [tencent/Hy3](https://huggingface.co/tencent/Hy3) | tencent | 835 | 13,698 | 腾讯混元 Hy3 基础模型，Apache-2.0 开源 |
| 5 | [InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1) | InternScience | 584 | 35,833 | 基于 Qwen3.5 MoE 的 Agent 专用模型，主打智能体任务 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| # | 模型 | 作者 | 点赞 | 下载 | 一句话 |
|---|---|---|---|---|---|
| 1 | [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,346 | 2,118,995 | 基于 Qwen3.5 的 1M 上下文推理视觉模型，下载量爆表 |
| 2 | [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 2,193 | 2,122,848 | 百度不限长度 OCR 模型，工业级文档识别能力 |
| 3 | [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 2,901 | 2,084,530 | Qwen3.6 35B-A3B MoE 视觉模型，"Uncensored" 路线仍受热捧 |
| 4 | [thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,152 | 13,462 | thinkingmachines 首个 `inkling_mm_model` 多模态模型，全模态架构 |
| 5 | [bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B) | bottlecapai | 462 | 10,647 | Qwen3.6 27B 视觉模型，强调推理能力 |
| 6 | [ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 195 | 14,587 | 基于 Qwen3.5 的第二代 OCR 模型 |
| 7 | [Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B) | Wan-AI | 128 | 2,408 | 阿里 Wan 团队图像到视频生成模型 |
| 8 | [OpenMOSS-Team/MOSS-VL-Realtime](https://huggingface.co/OpenMOSS-Team/MOSS-VL-Realtime) | OpenMOSS-Team | 81 | 544 | 实时视频-文本多模态模型，关注流式理解场景 |
| 9 | [mgwr/M87](https://huggingface.co/mgwr/M87) | mgwr | 159 | 4,652 | 基于 Krea-2-Turbo 的扩散 LoRA，文生图风格微调 |
| 10 | [conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit) | conradlocke | 425 | 0 | 基于 Krea-2-Raw 的身份保持图像编辑 LoRA |
| 11 | [Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID) | Alissonerdx | 195 | 0 | LTX-Video 人脸身份保持 LoRA，IPT2V 路线 |
| 12 | [Cseti/LTX2.3-22B_IC-LoRA-CrossView-Prompt](https://huggingface.co/Cseti/LTX2.3-22B_IC-LoRA-CrossView-Prompt) | Cseti | 99 | 0 | LTX-Video 新视角合成 IC-LoRA |

### 🔧 专用模型（代码、数学、Agent、工具使用）

| # | 模型 | 作者 | 点赞 | 下载 | 一句话 |
|---|---|---|---|---|---|
| 1 | [Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle) | Cactus-Compute | 279 | 955 | 基于 JAX 的函数调用与工具使用模型，定位 Agent 基础设施 |

### 📦 微调与量化（社区微调、GGUF、AWQ、1-bit）

| # | 模型 | 作者 | 点赞 | 下载 | 一句话 |
|---|---|---|---|---|---|
| 1 | [prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 794 | 338,945 | 27B 三进制（ternary）量化 GGUF，极致压缩 |
| 2 | [prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 499 | 1,262,894 | 27B 1-bit 量化 GGUF，本周下载量冠军 |
| 3 | [prism-ml/Bonsai-27B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit) | prism-ml | 139 | 21,690 | Apple MLX 平台 1-bit 版本，面向 M-series 芯片 |
| 4 | [prism-ml/Ternary-Bonsai-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-mlx-2bit) | prism-ml | 120 | 17,869 | Apple MLX 三进制版本 |
| 5 | [empero-ai/Qwythos-9B-v2-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-v2-GGUF) | empero-ai | 183 | 105,749 | Qwen3.5 视觉模型 v2 GGUF 版 |
| 6 | [unsloth/inkling-GGUF](https://huggingface.co/unsloth/inkling-GGUF) | unsloth | 105 | 6,771 | 知名量化团队 unsloth 出品的 Inkling GGUF 版 |
| 7 | [AngelSlim/Hy3-GGUF](https://huggingface.co/AngelSlim/Hy3-GGUF) | AngelSlim | 137 | 109,749 | 腾讯 Hy3 的量化 GGUF 衍生版 |
| 8 | [jlnsrk/GLM-5.2-colibri-int4](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4) | jlnsrk | 141 | 4,035 | GLM-5.2 的 INT4 + MoE 专家流式推理变体，主打 CPU 部署 |
| 9 | [GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking) | GnLOLot | 149 | 5,494 | 基于 MiniCPM5 1B 的"Opus 风格"思维链微调 |
| 10 | [GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF) | GnLOLot | 121 | 28,012 | V2 版本 GGUF 量化 |
| 11 | [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 107 | 16,719 | DavidAU 出品的 Qwen3.6 多融合 Uncensored GGUF |

---

## 三、生态信号

本周趋势榜呈现三个明显信号：

**第一，Qwen 系列成为绝对生态基石。** 30 个模型中有近 10 个基于 Qwen3.5 或 Qwen3.6 衍生，覆盖视觉（Qwythos）、OCR（OvisOCR2）、Uncensored 微调、推理融合（Fable Fusion）等多类场景，阿里通义已成中国开源生态的事实底座。

**第二，极端量化进入实战阶段。** prism-ml 的 Bonsai-27B 系列在同一周内推出 1-bit、ternary、MLX 三种格式，累计下载超过 160 万，说明社区对**消费级硬件跑大模型**的需求已从 4-bit 推进到 sub-2-bit 时代；jlnsrk 的 colibri-int4 则尝试在 CPU 上跑 MoE + 专家流式输出。

**第三，OCR、视频生成、身份保持成为新一轮应用热点。** 百度 Unlimited-OCR、ATH-MaaS OvisOCR2 体现文档智能爆发；Krea-2、LTX-Video 成为图像/视频 LoRA 的事实底模；"Uncensored"路线依然有稳定流量，但正向"推理增强"和"长上下文"方向分流（1M context Qwythos、ThinkingCap）。

---

## 四、值得探索

1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — 本周点赞榜首的 MoE 旗舰，`glm_moe_dsa` 架构值得研究；若要做中文 Agent / 推理类应用，是首选 baseline。

2. **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** — 1-bit 量化依然能保持可用性的工程奇迹，单周 126 万下载证明了"边缘部署大模型"已不再是 PPT 概念。

3. **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** — 9B 视觉模型 + 1M 上下文 + GGUF 三者结合，是少有的"本地可跑、长记忆、可推理视觉"组合，值得用作多模态 Agent 实验基座。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*