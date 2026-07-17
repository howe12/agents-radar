# Hugging Face 热门模型日报 2026-07-17

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-17 02:05 UTC

---

# 🤗 Hugging Face 热门模型日报 · 2026-07-17

---

## 📰 今日速览

**Zhipu AI 的 GLM-5.2 一骑绝尘登顶周榜（4,029 赞）**，这款 MoE 架构语言模型刷新了开源 LLM 的关注度纪录。视觉语言模型继续霸榜：**Qwen3.6-35B-A3B Uncensored 版本（2,787 赞）** 与 **Qwythos-9B Claude Mythos 1M（2,237 赞）** 形成"长上下文 + 多模态"的二强格局。**百度 Unlimited-OCR（2,011 赞）** 与多款 Qwen3.6 GGUF 衍生模型共同显示：OCR、量化、轻量化是当前社区最热的三大工程方向。腾讯 Hunyuan 系列（Hy3）正式登场，意味着中国大模型开源梯队迎来新一轮集体发力。

---

## 🧠 语言模型（LLM / 对话 / 指令微调）

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
  作者：zai-org ｜ 点赞 4,029 ｜ 下载 513,061
  智谱最新一代 MoE 旗舰（`glm_moe_dsa` 架构），本周榜首。本地推理与商用友好的双重定位使其迅速成为开源社区新基准。

- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)**
  作者：tencent ｜ 点赞 813 ｜ 下载 11,849
  腾讯混元 Hy3 正式版上线（`hy_v3` 架构），作为腾讯主力开源 LLM，标志着 Hunyuan 进入 v3 时代。

- **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)**
  作者：InternScience ｜ 点赞 568 ｜ 下载 33,400
  基于 Qwen3.5 MoE 的智能体专用模型，针对工具调用与多步任务规划微调，是 Agentic 路线上的代表作品。

- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)**
  作者：deepreinforce-ai ｜ 点赞 902 ｜ 下载 1,785,575
  MIT 许可的 35B 文本生成模型 GGUF 量化版，下载量与点赞比显示其有真实生产部署用户。

- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking)**
  作者：GnLOLot ｜ 点赞 131 ｜ 下载 4,117
  小型思维链模型变体，体现 MiniCPM 生态在"小尺寸 + 强推理"路线上的持续探索。

---

## 🎨 多模态与生成（图像 / 视频 / 音频 / OCR）

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  作者：HauhauCS ｜ 点赞 2,787 ｜ 下载 2,328,315
  Qwen3.6 视觉 MoE 的"去审查"GGUF 版本，单模型下载量超 230 万，社区对"无限制视觉理解"的需求显而易见。

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
  作者：empero-ai ｜ 点赞 2,237 ｜ 下载 2,042,670
  具备 1M token 上下文的多模态 GGUF 量化模型，长上下文 + 视觉的双重卖点驱动了极高下载量。

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
  作者：baidu ｜ 点赞 2,011 ｜ 下载 1,852,722
  百度发布的无限制 OCR 模型，专注文档/票据/场景文字识别，下载近 200 万次，是当下最热的专用模型之一。

- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)**
  作者：thinkingmachines ｜ 点赞 813 ｜ 下载 4
  神秘新晋多模态模型（`inkling_mm_model`），点赞高但下载极低，处于早期曝光阶段，值得跟踪观察。

- **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)**
  作者：bottlecapai ｜ 点赞 389 ｜ 下载 8,238
  Qwen3.6-27B 的"思维增强"视觉版，主打强化推理能力的图像理解。

- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)**
  作者：OpenMOSS-Team ｜ 点赞 232 ｜ 下载 75,105
  音频转写 + 说话人分离（Speaker Diarization）一体化模型，应用场景覆盖会议、字幕、播客。

- **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)**
  作者：ATH-MaaS ｜ 点赞 136 ｜ 下载 3,678
  基于 Qwen3.5 的第二代 OCR 多模态模型，结构化文字抽取能力是其卖点。

- **[empero-ai/Qwythos-9B-v2](https://huggingface.co/empero-ai/Qwythos-9B-v2) / [empero-ai/Qwythos-9B-v2-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-v2-GGUF)**
  作者：empero-ai ｜ 点赞 129 / 150
  Qwythos 系列的 v2 迭代，配套 transformers 与 GGUF 双版本发布。

- **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)**
  作者：Wan-AI ｜ 点赞 92 ｜ 下载 1,884
  14B 参数量级的图像到视频生成模型，视频生成赛道的新玩家。

- **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit) / [Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID) / [Cseti/LTX2.3-22B_IC-LoRA-CrossView-Prompt](https://huggingface.co/Cseti/LTX2.3-22B_IC-LoRA-CrossView-Prompt)**
  多款 Krea-2 与 LTX-Video 的 LoRA 适配器，分别针对人脸身份编辑、参考视频生成、跨视角合成，体现社区在生成模型上的快速微调能力。

---

## 🔧 专用模型（代码 / Agent / 嵌入 / 函数调用）

- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**
  作者：yuxinlu1 ｜ 点赞 1,208 ｜ 下载 506,068
  基于 Gemma-4 12B 的 Agentic Coding GGUF 模型，专攻终端/编码任务，是当前最热门的代码 Agent 衍生模型。

- **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)**
  作者：Cactus-Compute ｜ 点赞 248 ｜ 下载 733
  基于 JAX 的函数调用 / Tool-Use 模型，定位明确——为 Agent 工作流提供 Function Calling 能力。

---

## 📦 微调与量化（社区微调 / GGUF / 极低比特）

- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
  作者：prism-ml ｜ 点赞 608 ｜ 下载 74,007
  **2-bit ternary（{-1, 0, +1}）** GGUF 量化 Bonsai-27B，激进压缩方案，社区关注度飙升。

- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**
  作者：prism-ml ｜ 点赞 342 ｜ 下载 559,267
  1-bit 极低比特 GGUF 版本，下载量近 56 万，是 1-bit 量化路线的标杆。

- **[unsloth/Qwen3.6-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4)**
  作者：unsloth ｜ 点赞 216 ｜ 下载 1,712,974
  Unsloth 出品的 NVFP4（4-bit 浮点）量化版本，下载超 170 万次，专为 NVIDIA 硬件优化。

- **[jlnsrk/GLM-5.2-colibri-int4](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4)**
  作者：jlnsrk ｜ 点赞 119 ｜ 下载 2,621
  GLM-5.2 的 INT4 CPU 推理版，强调 Expert Streaming 技术，为 MoE 在 CPU 上的部署提供新方案。

- **[AngelSlim/Hy3-GGUF](https://huggingface.co/AngelSlim/Hy3-GGUF)**
  作者：AngelSlim ｜ 点赞 117 ｜ 下载 80,796
  Tencent Hy3 的 GGUF 量化版（Apache-2.0），补全 Hunyuan 的本地推理生态。

- **[prism-ml/Ternary-Bonsai-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-mlx-2bit) / [prism-ml/Bonsai-27B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit)**
  作者：prism-ml ｜ 点赞 84 / 82
  上述 Bonsai 系列的 MLX 版本（Apple Silicon 优化），形成 GGUF + MLX 双平台覆盖。

- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**
  作者：froggeric ｜ 点赞 924 ｜ 下载 0
  专门修复 Qwen3.5 Chat Template 的 Jinja 模板仓库，虽无权重但高赞反映出社区对 Qwen 工具链缺陷修复的迫切需求。

---

## 🌐 生态信号

本周榜单清晰勾勒出**"中国大模型集体开闸 + 极低比特量化爆发"**两条主线。Qwen3.5/3.6 家族仍然是社区微调的事实底座，衍生出 Uncensored、Agentic、OCR、NVFP4、Thinking 等至少 7 个细分变体，呈现"一个底座 + N 个下游"的典型开源生态扩张模式。GLM-5.2 与 Hy3 同周亮相，标志智谱与腾讯进入正面交锋，**开源权重 vs 闭源 API**的格局进一步向开源倾斜。

量化层面信号尤为强烈：1-bit（Bonsai）和 2-bit Ternary（Bonsai 2bit）首次同时进入 Top 30，**极低比特量化（sub-4-bit）从实验走向大规模分发**；配合 Unsloth 的 NVFP4（4-bit 浮点）与 jlnsrk 的 INT4+Expert Streaming，量化技术栈正从单一 GGUF 走向"平台化分层"。OCR（百度 Unlimited-OCR、O

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*