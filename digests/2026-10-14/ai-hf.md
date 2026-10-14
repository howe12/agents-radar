# Hugging Face 热门模型日报 2026-10-14

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-14 03:05 UTC

---

# 🤗 Hugging Face 热门模型日报
**2026-10-14 · Top 30 按周点赞排序**

---

## 一、今日速览

今日榜单被 **Qwen3.8 系列** 强势统治 —— `Qwen/Qwen3.8-27B` 单周斩获 17,647 点赞、累计 711 万次下载，成为本周毫无争议的"模型之王"。视频生成赛道由 **Lightricks/LTX-2.5**（7,659 点赞）领跑，分割领域则由 **facebook/sam3**（4,256 点赞）接力。值得注意的是，**Cloudflare/clef**（2,144 点赞）和 **LiquidAI** 系列正式跻身主流视野，而社区围绕 Qwen3.8、Qwen-Image-2.1 的 **GGUF 量化与 "Uncensored" 微调** 出现明显聚集效应。

---

## 二、热门模型

### 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---|---|---|
| [**Qwen/Qwen3.8-27B**](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 17,647 | 7,119,569 | 本周绝对王者，多模态对话基座，qwen3_5 架构标杆 |
| [**jialinyyzz/humanizer**](https://huggingface.co/jialinyyzz/humanizer) | jialinyyzz | 1,529 | 54,039 | 基于 gemma4_unified 的"人性化"改写模型，文案 / 润色场景首选 |
| [**Aleph-Alpha/Kolibri-1**](https://huggingface.co/Aleph-Alpha/Kolibri-1) | Aleph-Alpha | 928 | 15,335 | 欧洲厂商推出的推理型 MoE，主打 reasoning + vLLM 部署 |
| [**ConwayResearch/Underdog-Saluki-27B-1.0**](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0) | ConwayResearch | 427 | 269,829 | 2-bit llama.cpp 量化，专注 tool-calling / function-calling |
| [**LiquidAI/LFM2.5-24B-A2B**](https://huggingface.co/LiquidAI/LFM2.5-24B-A2B) | LiquidAI | 178 | 2,565 | LiquidAI 新一代 MoE 文本基座 LFM2_moe，活跃架构 |

### 🎨 多模态与生成（图 / 视频 / 音频）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---|---|---|
| [**Lightricks/LTX-2.5**](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 7,659 | 1,724,548 | 本周最强视频模型，image-to-video / text-to-video 全能 |
| [**facebook/sam3**](https://huggingface.co/facebook/sam3) | facebook | 4,256 | 2,037,775 | Meta 第三代 SAM，支持视频级 mask 生成，CV 基础设施级更新 |
| [**Qwen/Qwen-Image-2.1**](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 3,283 | 147,995 | 通义图像 2.1 正式版，diffusers 友好的文生图 / 编辑双能力 |
| [**Qwen/Qwen-Image-2.1-Turbo**](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo) | Qwen | 713 | 9,665 | 2.1 的 Turbo 蒸馏版本，主打速度 |
| [**baidu/Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 4,617 | 1,175,446 | 百度 OCR 大模型，下载量破百万，多语言文档识别首选 |
| [**Cloudflare/clef**](https://huggingface.co/Cloudflare/clef) | Cloudflare | 2,144 | 17,173 | Cloudflare 推出的视觉语言模型，qwen3_5 后端 |
| [**Cloudflare/clef-flash**](https://huggingface.co/Cloudflare/clef-flash) | Cloudflare | 805 | 24,809 | clef 的低延迟版本，主打实时视觉交互 |
| [**openbmb/MiniCPM-V-4.7-35B-A3B**](https://huggingface.co/openbmb/MiniCPM-V-4.7-35B-A3B) | openbmb | 474 | 630 | 面壁 35B MoE 视觉模型，新一代旗舰 |
| [**openbmb/MiniCPM-V-4.7-1B**](https://huggingface.co/openbmb/MiniCPM-V-4.7-1B) | openbmb | 288 | 263 | MiniCPM-V 端侧 1B 版本，边缘部署友好 |
| [**LiquidAI/d1-3B**](https://huggingface.co/LiquidAI/d1-3B) | LiquidAI | 381 | 13,190 | LiquidAI 紧凑型视觉模型，lfm2_vl 架构 |
| [**speridlabs/iris-3b**](https://huggingface.co/speridlabs/iris-3b) | speridlabs | 234 | 889 | 3B 小型扩散模型，pixel-space 直生图像 |
| [**pablodawson/MiniMax-H3-360-Orbit-LoRA**](https://huggingface.co/pablodawson/MiniMax-H3-360-Orbit-LoRA) | pablodawson | 419 | 15,540 | 视频生成首末帧 LoRA，flf2v 工作流热门 |
| [**canberkkkkkk/ema-lightning**](https://huggingface.co/canberkkkkkk/ema-lightning) | canberkkkkkk | 403 | 22,641 | 土耳其语 TTS，本土化语音合成代表 |
| [**Cactus-Compute/whistle**](https://huggingface.co/Cactus-Compute/whistle) | Cactus-Compute | 383 | 21,005 | 端侧 ASR 模型，"on-device speech-to-text" 标杆 |

### 🔧 专用模型（嵌入 / 分类 / OCR / 推理）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---|---|---|
| [**convaiinnovations/laya**](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 5,574 | 46,160 | "system-one calibrated" 决策类上榜黑马，社区关注度高 |
| [**google/embeddinggemma-2**](https://huggingface.co/google/embeddinggemma-2) | google | 2,113 | 124,930 | Google 新一代 embedding 模型，RAG / 检索场景新基线 |
| [**autotrust/JEV-35B**](https://huggingface.co/autotrust/JEV-35B) | autotrust | 532 | 17,426 | qwen3_5_moe 后端的 "system-one" 文本分类模型 |
| [**autotrust/JEV-35B-NVFP4**](https://huggingface.co/autotrust/JEV-35B-NVFP4) | autotrust | 301 | 20,494 | JEV-35B 的 NVFP4 量化版，推理部署优化 |

### 📦 微调与量化（社区微调 / GGUF / AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---|---|---|
| [**abenzerps/Qwen-Image-2.1-Uncensored-Quantized**](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized) | abenzerps | 4,212 | 2,247,929 | Qwen-Image-2.1 去限制版量化，comfyui-gguf 工作流爆款 |
| [**DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF**](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,744 | 1,940,062 | Qwen3.8 的 "Heretic Uncensored" 极限融合微调 |
| [**ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF**](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA-DAS

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*