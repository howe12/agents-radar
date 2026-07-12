# Hugging Face 热门模型日报 2026-07-12

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-12 02:06 UTC

---

# 🤗 Hugging Face 热门模型日报 · 2026-07-12

---

## 📌 今日速览

今天榜单被 **Qwen3.5 / Qwen3.6 家族** 和 **NVIDIA 实验室** 双线主导：智谱 GLM-5.2 以近 4,000 周赞稳居榜首，而 NVIDIA 同期释出 LocateAnything-3B、Nemotron-Labs-Audex、Puzzle-75B 等多款新品。**MoE 架构** 已成为主流厂商默认配置（GLM-5.2、Qwen3.6-35B-A3B、Mistral Leanstral-119B-A6B 均采用 MoE）。量化层面，**NVFP4**（NVIDIA 4-bit 浮点）正在与传统的 GGUF 并行崛起，标志低精度部署进入新阶段。

---

## 🧠 语言模型（LLM / 对话 / 指令微调）

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
  作者：zai-org ｜ 👍 3,833 ｜ ⬇️ 421,270
  智谱新一代 MoE 大模型，采用 **GLM MoE + DSA（DeepSeek Attention）** 架构；本周榜单点赞与下载双第一，是国内开源旗舰代表。

- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)**
  作者：tencent ｜ 👍 697 ｜ ⬇️ 8,210
  腾讯混元 Hy3 文本生成模型，作为 HunYuan V3 系列的新版本，吸引大量关注。

- **[meituan-longcat/LongCat-2.0](https://huggingface.co/meituan-longcat/LongCat-2.0)**
  作者：meituan-longcat ｜ 👍 177 ｜ ⬇️ 1,572
  美团推出的 LongCat-2.0 对话模型，国产商业力量布局开源对话赛道。

- **[nvidia/Nemotron-Labs-Audex-30B-A3B](https://huggingface.co/nvidia/Nemotron-Labs-Audex-30B-A3B)**
  作者：nvidia ｜ 👍 120 ｜ ⬇️ 743
  NVIDIA Nemotron Labs 系列新作，30B 总参 / 3B 激活的 MoE 架构，专注高质量语言生成。

- **[mistralai/Leanstral-1.5-119B-A6B](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B)**
  作者：mistralai ｜ 👍 189 ｜ ⬇️ 350
  Mistral 大型 MoE（119B-A6B），继承 Leanstral-2603 基座，主打 Apache-2.0 开源。

- **[SupraLabs/Supra-Router-51M](https://huggingface.co/SupraLabs/Supra-Router-51M)**
  作者：SupraLabs ｜ 👍 98 ｜ ⬇️ 1,275
  极轻量（51M）路由模型，用于在多 LLM 之间动态分发请求，体现 "LLM-as-a-Service" 路由层趋势。

---

## 🎨 多模态与生成（图像 / 视频 / 音频）

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
  作者：nvidia ｜ 👍 2,707 ｜ ⬇️ 1,472,194
  视觉定位（Visual Grounding）模型，可对图像中任意目标进行指代与坐标预测；高下载量说明工业需求旺盛。

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  作者：HauhauCS ｜ 👍 2,652 ｜ ⬇️ 2,641,936
  基于 Qwen3.6-35B-A3B 的视觉 MoE 解锁版，社区 "Aggressive" 路线代表，下载量惊人。

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
  作者：baidu ｜ 👍 1,931 ｜ ⬇️ 1,380,690
  百度推出的多语言不限场景 OCR 特征提取模型，强实用性带来高下载。

- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**
  作者：krea ｜ 👍 588 ｜ ⬇️ 168,154
  Krea-2 Raw 的蒸馏 / Turbo 版本，主打高质量文生图快速推理。

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M)**
  作者：empero-ai ｜ 👍 768 ｜ ⬇️ 186,852
  基于 Qwen3.5 9B 的多模态 Claude "Mythos" 风格微调，号称支持 1M 上下文。

- **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)**
  作者：InternScience ｜ 👍 495 ｜ ⬇️ 28,141
  基于 Qwen3.5 MoE 的 Agentic 多模态模型，主打工具调用与多步推理。

- **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)**
  作者：bottlecapai ｜ 👍 236 ｜ ⬇️ 4,128
  Qwen3.6-27B 思维链增强版本，强调显式 "思考" 过程。

- **[migtissera/Tess-4-27B](https://huggingface.co/migtissera/Tess-4-27B)**
  作者：migtissera ｜ 👍 84 ｜ ⬇️ 806
  知名社区作者 migtissera 的 Tess-4 系列多模态模型。

- **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)**
  作者：conradlocke ｜ 👍 186 ｜ ⬇️ 0
  Krea-2 的身份保持图像编辑 LoRA，ComfyUI 生态友好。

- **[Al

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*