# Hugging Face 热门模型日报 2026-10-10

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-10 03:49 UTC

---

# 🤗 Hugging Face 热门模型日报
**日期：2026-10-10**

---

## 📌 今日速览

今日 Hugging Face 热门榜单由 **Qwen3.8 系列** 强势主导——`Qwen3.8-27B` 以 17,357 周点赞登顶，配套的 `Qwen3.8-Flash-Next` 紧随其后（6,061 赞），整个家族的 GGUF 量化与社区微调变体几乎占据了榜单的一半。视频生成持续升温，`Lightricks/LTX-2.5` 与 `FrancisRing/Prism` 显示多模态扩散正在向 "视频 + 音频联合生成" 演进。值得关注的是，**Cloudflare**（`clef`、`clef-flash`）、**DeepSeek V4.1-Flash** 和 **LiquidAI d1-3B** 同期亮相，标志着头部玩家在视觉语言模型（VLM）赛道密集交锋。

---

## 🔥 热门模型

### 🧠 语言模型（LLM / 对话 / 推理）

**Qwen/Qwen3.8-27B** [链接](https://huggingface.co/Qwen/Qwen3.8-27B)
- 作者：Qwen ｜ 👍 17,357 ｜ ⬇️ 6,783,589
- 本周现象级原生多模态旗舰，27B 参数原生支持图像-文本对话，开源权重 + 工业级规模，是 Qwen4 实验架构下的代表作品。

**deepseek-ai/DeepSeek-V4.1-Flash** [链接](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)
- 作者：deepseek-ai ｜ 👍 4,299 ｜ ⬇️ 1,316,468
- DeepSeek 4.1 的轻量版，专为多模态推理优化，定位 "Flash" 高速推理，在 VLM 基准上具有竞争力。

**Aleph-Alpha/Kolibri-1** [链接](https://huggingface.co/Aleph-Alpha/Kolibri-1)
- 作者：Aleph-Alpha ｜ 👍 845 ｜ ⬇️ 8,474
- 欧洲主权 AI 代表作，MoE 架构 + 强推理定位，强调合规与多语言。

**LiquidAI/d1-3B** [链接](https://huggingface.co/LiquidAI/d1-3B)
- 作者：LiquidAI ｜ 👍 239 ｜ ⬇️ 7,302
- 新兴势力的 3B 级多模态小钢炮，主打边缘部署友好。

---

### 🎨 多模态与生成（图像 / 视频 / 音频）

**Lightricks/LTX-2.5** [链接](https://huggingface.co/Lightricks/LTX-2.5)
- 作者：Lightricks ｜ 👍 7,077 ｜ ⬇️ 1,687,531
- 当前开源视频生成标杆，支持 image-to-video / text-to-video / video-to-video 三模态输入。

**Qwen/Qwen-Image-2.1** [链接](https://huggingface.co/Qwen/Qwen-Image-2.1)
- 作者：Qwen ｜ 👍 3,163 ｜ ⬇️ 122,311
- 阿里推出的图像生成 + 编辑一体化扩散模型，"Turbo" 版本也已上线。

**Qwen/Qwen-Image-2.1-Turbo** [链接](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo)
- 作者：Qwen ｜ 👍 315 ｜ ⬇️ 0
- 极速推理变体，刚发布尚未放量，但代表了 Qwen 在扩散模型推理加速上的布局。

**Cloudflare/clef** [链接](https://huggingface.co/Cloudflare/clef)
- 作者：Cloudflare ｜ 👍 1,947 ｜ ⬇️ 12,066
- Cloudflare Workers AI 配套 VLM，瞄准边缘推理场景。

**Cloudflare/clef-flash** [链接](https://huggingface.co/Cloudflare/clef-flash)
- 作者：Cloudflare ｜ 👍 716 ｜ ⬇️ 18,971
- clef 的轻量版，主打低延迟视觉对话。

**FrancisRing/Prism** [链接](https://huggingface.co/FrancisRing/Prism)
- 作者：FrancisRing ｜ 👍 134 ｜ ⬇️ 0
- 联合视频-音频生成的扩散 Transformer，新生但指向未来方向。

**Alissonerdx/BFS-Best-Face-Swap** [链接](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap)
- 作者：Alissonerdx ｜ 👍 1,340 ｜ ⬇️ 245,270
- 基于 Qwen-Image-Edit 的 LoRA 换脸模型，社区实用工具代表。

**canberkkkkkk/ema-lightning** [链接](https://huggingface.co/canberkkkkkk/ema-lightning)
- 作者：canberkkkkkk ｜ 👍 323 ｜ ⬇️ 12,118
- 土耳其语 TTS 模型，反映小语种语音合成需求。

---

### 🔧 专用模型（嵌入 / 分类 / 语音）

**convaiinnovations/laya** [链接](https://huggingface.co/convaiinnovations/laya)
- 作者：convaiinnovations ｜ 👍 5,430 ｜ ⬇️ 41,468
- 主打 "校准决策" 的文本分类模型，独特标签 `system-one` 与 `calibrated-decisions`，点赞/下载比极高（社区关注度爆表）。

**google/embeddinggemma-2** [链接](https://huggingface.co/google/embeddinggemma-2)
- 作者：google ｜ 👍 1,365 ｜ ⬇️ 29,185
- Google 推出的多模态嵌入模型，主打 RAG 与检索场景。

**jialinyyzz/humanizer** [链接](https://huggingface.co/jialinyyzz/humanizer)
- 作者：jialinyyzz ｜ 👍 769 ｜ ⬇️ 29,470
- 文本 "人类化" 改写模型，应对 AI 检测场景。

**Cactus-Compute/whistle** [链接](https://huggingface.co/Cactus-Compute/whistle)
- 作者：Cactus-Compute ｜ 👍 269 ｜ ⬇️ 5,558
- 端侧 ASR 模型，强调 "on-device" 部署。

---

### 📦 微调与量化（GGUF / AWQ / 社区微调）

**unsloth/Qwen3.8-27B-GGUF** [链接](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)
- 作者：unsloth ｜ 👍 4,985 ｜ ⬇️ 6,452,782
- 官方 GGUF 量化版本，社区微调首选基座。

**prism-ml/Ternary-Bonsai-2-27B-gguf** [链接](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)
- 作者：prism-ml ｜ 👍 2,572 ｜ ⬇️ 4,389,072
- **三元（ternary, 2-bit）量化** 27B 模型，极致压缩下保持可用性的探索。

**ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF** [链接](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)
- 作者：ISTA-DASLab ｜ 👍 2,097 ｜ ⬇️ 1,490,741
- GSQ + RCO 混合精度量化，研究向的工程创新。

**ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF** [链接](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)
- 作者：ISTA-DASLab ｜ 👍 751 ｜ ⬇️ 3,559,321
- 同上技术用于 Flash-Next 版本。

**DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF** [链接](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)
- 作者：DavidAU ｜ 👍 1,613 ｜ ⬇️ 2,000,216
- 极具代表性的社区多合一大乱炖微调，覆盖多个微调目标的合并版本。

**Venastine-Research/Xing4.0-29B-A4B-GGUF** [链接](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF)
- 作者：Venastine-Research ｜ 👍 676 ｜ ⬇️ 38,740
- 29B-A4B（激活参数 4B）架构的中文优化生成模型。

**ConwayResearch/Underdog-Saluki-27B-1.0** [链接](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0)
- 作者：ConwayResearch ｜ 👍 199 ｜ ⬇️ 15,274
- 2-bit + Tool-calling 强化，主打 Agent 工具调用。

**Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw** [链接](https://huggingface.co/Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw)
- 作者：Infatoshi ｜ 👍 311 ｜ ⬇️ 2,277
- 智谱 GLM-5.3 的 EXL3 3.0bpw 极低比特率 + 去审查变体。

**orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF** [链接](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF) ｜ **orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF** [链接](https://huggingface.co/orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF)
- 作者：orcarouter ｜ 👍 703 / 489 ｜ ⬇️ 499k / 21k
- 体现社区对 "abliterated / uncensored" 版本的稳定需求。

**SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF** [链接](https://huggingface.co/SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF)
- 作者：SC117 ｜ 👍 174 ｜ ⬇️ 684,487
- GSQ 量化 + abliterated 的组合变体。

**unsloth/embeddinggemma-2-GGUF** [链接](https://huggingface.co/unsloth/embeddinggemma-2-GGUF)
- 作者：unsloth ｜ 👍 218 ｜ ⬇️ 41,582
- embeddinggemma-2 的 GGUF 版本，便于本地部署嵌入任务。

---

## 🌐 生态信号

**Qwen 家族全面统治榜单**：原生（Qwen3.8-27B、Flash-Next、Image-2.1）到量化（GSQ-RCO、Ternary-Bonsai）再到社区微调（DavidAU、orcarouter、SC117），约 13/30 的模型与 Qwen 系相关，呈现 "一家基座、多家分叉" 的典型开源生态结构。**开源权重继续碾压闭源**：Top 10 中仅 DeepSeek 与 Cloudflare 提供完整权重下载，其余均为 Qwen/Alibaba 系，表明顶级 VLM 战场已全面开源化。**量化活动异常活跃**：GGUF 几乎占据 30 个席位中的 17 个，且出现三元（2-bit）、GSQ/RCO 混合精度、EXL3 等前沿压缩方案，说明 "70B → 27B → 2-bit" 的部署链已成熟；"uncensored / abliterated" 微调连续上榜，反映社区对内容限制解除的稳定需求。视频生成从 "文生视频" 走向 "联合音视频扩散"（Prism），LTX-2.5 单模型支持 4 种视频任务也代表 "一模型多模态 I/O" 的新范式。

---

## ✨ 值得探索

1. **Qwen/Qwen3.8-27B** [链接](https://huggingface.co/Qwen/Qwen3.8-27B) — 当周点赞第一（17,357），原生多模态旗舰，开源协议与权重完整度都属顶级，是研究当前 VLM 范式的必看基线。

2. **Lightricks/LTX-2.5** [链接](https://huggingface.co/Lightricks/LTX-2.5) — 视频生成领域难得的 "单模型多任务" 标杆，下载量逼近 170 万，可作为开源视频模型的能力基线。

3. **prism-ml/Ternary-Bonsai-2-27B-gguf** [链接](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) — 三元（2-bit）量化 + 27B 参数，下载量超 438 万，是边缘部署 / 极限压缩研究的重要案例。

---

*报告基于

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*