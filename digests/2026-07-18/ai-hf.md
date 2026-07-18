# Hugging Face 热门模型日报 2026-07-18

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-18 01:53 UTC

---

# 🤗 Hugging Face 热门模型日报
**日期：2026-07-18**

---

## 📌 今日速览

智谱 **GLM-5.2** 以 4,071 点赞强势登顶，MoE + 专家流式架构引发社区关注；**Qwen3.5/Qwen3.6 生态**继续呈"洪水式"扩散——从 GGUF/MLX 极低比特量化、Uncensored 视觉变体到 LoRA 适配器，已占据榜单近三分之一席位。OCR 方向成为新的增长极（百度 Unlimited-OCR 与 ATH-MaaS OvisOCR2 双双上榜），而 **1-bit / 2-bit 亚比特量化**和 **NVFP4** 等新格式正在挑战推理部署的成本下限。视频生成侧 Wan-Dancer-14B 与 LTX-2.3 LoRA 矩阵显示 I2V/参考到视频范式走向成熟。

---

## 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|---|---|---:|---:|---|
| [**zai-org/GLM-5.2**](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,071 | 534,698 | 智谱新一代旗舰，GLM MoE + DSA 架构，Transformer 原生权重，今日榜首 |
| [**tencent/Hy3**](https://huggingface.co/tencent/Hy3) | tencent | 820 | 12,719 | 腾讯混元 Hy3 文本生成版，主打推理与对话能力 |
| [**InternScience/Agents-A1**](https://huggingface.co/InternScience/Agents-A1) | InternScience | 572 | 34,066 | 基于 Qwen3.5 MoE 的智能体导向微调，主打 Agent 工作流 |
| [**empero-ai/Qwythos-9B-v2**](https://huggingface.co/empero-ai/Qwythos-9B-v2) | empero-ai | 137 | 7,980 | Qwen3.5-9B 指令微调变体，主打文本生成 |
| [**GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking**](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking) | GnLOLot | 134 | 4,840 | 小型"思维链"蒸馏模型，主打高效推理 |

---

## 🎨 多模态与生成（图像、视频、音频）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|---|---|---:|---:|---|
| [**thinkingmachines/Inkling**](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 958 | 7,870 | 自研 Inkling 多模态架构，image-text-to-text + 对话，原生支持音频 |
| [**HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 2,828 | 2,295,313 | Qwen3.6 35B-A3B MoE Uncensored 视觉变体，下载量霸榜 |
| [**empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,274 | 2,096,147 | Qwen3.5 9B 视觉模型，支持 1M 超长上下文 |
| [**baidu/Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 2,020 | 1,992,355 | 百度 OCR 专用模型，多语种/无长度限制识别 |
| [**bottlecapai/ThinkingCap-Qwen3.6-27B**](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B) | bottlecapai | 413 | 9,383 | Qwen3.6 27B 视觉+思维链微调版 |
| [**empero-ai/Qwythos-9B-v2-GGUF**](https://huggingface.co/empero-ai/Qwythos-9B-v2-GGUF) | empero-ai | 160 | 98,370 | Qwythos v2 GGUF 量化版，便于本地部署 |
| [**ATH-MaaS/OvisOCR2**](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 153 | 10,795 | Ovis2 系列 OCR 端到端方案 |
| [**mgwr/M87**](https://huggingface.co/mgwr/M87) | mgwr | 146 | 3,874 | 基于 Krea-2-Turbo 的 T2I 风格 LoRA |
| [**Alissonerdx/LTX-Best-Face-ID**](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID) | Alissonerdx | 178 | 0 | LTX-Video 人脸一致性 LoRA（IPT2V） |
| [**Wan-AI/Wan-Dancer-14B**](https://huggingface.co/Wan-AI/Wan-Dancer-14B) | Wan-AI | 108 | 2,185 | Wan 系列图生视频 14B，Diffusers 原生支持 |
| [**Cseti/LTX2.3-22B_IC-LoRA-CrossView-Prompt**](https://huggingface.co/Cseti/LTX2.3-22B_IC-LoRA-CrossView-Prompt) | Cseti | 86 | 0 | LTX2.3 22B 的 IC-LoRA，主打跨视角合成 |
| [**conradlocke/krea2-identity-edit**](https://huggingface.co/conradlocke/krea2-identity-edit) | conradlocke | 346 | 0 | Krea-2-Raw 之上的身份保持 LoRA（ComfyUI） |
| [**OpenMOSS-Team/MOSS-Transcribe-Diarize**](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize) | OpenMOSS-Team | 249 | 83,160 | 音频转写 + 说话人分离端到端模型 |

---

## 🔧 专用模型（代码、Agent、OCR、音频）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|---|---|---:|---:|---|
| [**Cactus-Compute/needle**](https://huggingface.co/Cactus-Compute/needle) | Cactus-Compute | 257 | 874 | 基于 JAX 的 Function-Calling / Tool-Use 小模型，专为 Agent 场景设计 |
| [**baidu/Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 2,020 | 1,992,355 | 见上，OCR 场景专用 |
| [**ATH-MaaS/OvisOCR2**](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 153 | 10,795 | 见上，文档/表格识别专用 |
| [**OpenMOSS-Team/MOSS-Transcribe-Diarize**](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize) | OpenMOSS-Team | 249 | 83,160 | 见上，语音转写 + 说话人日志 |

---

## 📦 微调与量化（社区微调、GGUF、MLX、极低比特）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|---|---|---:|---:|---|
| [**froggeric/Qwen-Fixed-Chat-Templates**](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 934 | 0 | MLX 生态下 Qwen3.5 聊天模板修复包，社区工具型资产 |
| [**prism-ml/Ternary-Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 680 | 200,774 | **2-bit 三元量化** GGUF，Qwen3.5-27B 极限压缩 |
| [**prism-ml/Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 396 | 1,045,182 | **1-bit 极低比特** GGUF，部署友好的 Bonsai 系列 |
| [**GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF**](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF) | GnLOLot | 273 | 154,762 | MiniCPM5-1B 思维链蒸馏 GGUF 量化版 |
| [**

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*