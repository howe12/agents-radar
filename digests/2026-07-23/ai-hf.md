# Hugging Face 热门模型日报 2026-07-23

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-23 02:09 UTC

---

# Hugging Face 热门模型日报
**2026-07-23 · 周点赞榜 Top 30**

---

## 📰 今日速览

今日榜单呈现几大清晰信号：国产旗舰 GLM-5.2（zai-org）以 4,339 点赞登顶，Zhipu 在 MoE + DSA 架构上的押注获得强烈关注；Google Gemma 4-31B-IT 下载量突破 1,200 万，闭源级能力 + 开源权重的组合依然是开发者首选；社区围绕 Qwen3.6 的"解禁/角色扮演"微调和 1-bit/ternary 极致量化持续活跃，prism-ml 的 Bonsai-27B 系列（GGUF/MLX/三值）成为边缘部署热门。多模态方面，OCR（百度 Unlimited-OCR、OvisOCR2）、视频身份保持（LTX-Best-Face-ID）和机器人 VLA（MiniCPM）共同撑起下半榜单。

---

## 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | 👍 | ⬇️ | 一句话说明 |
|---|---|---|---|---|
| **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | zai-org | 4,339 | 545,109 | 国产旗舰，采用 `glm_moe_dsa` 架构的 MoE 模型，本周最受关注的中文基座 |
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 3,328 | 12,113,203 | 多模态对话模型，下载量断层第一，开源 Gemma 4 家族的代表 |
| **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)** | upstage | 266 | 0 | 韩国 Upstage 的 250B 新版本，刚上线即引发关注 |
| **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)** | Nanbeige | 234 | 0 | 南北豆 4.2 代小模型，3B 尺寸主打轻量场景 |
| **[Motif-Technologies/Motif-3-Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta)** | Motif | 161 | 125 | 新晋基座模型，主打特征提取与对话的多用途能力 |
| **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)** | poolside | 397 | 3,056 | Poolside 编程向基座模型，配套多份量化版本同步上线 |

## 🎨 多模态与生成（图像 / 视频 / 音频 / OCR）

| 模型 | 作者 | 👍 | ⬇️ | 一句话说明 |
|---|---|---|---|---|
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 3,003 | 1,997,690 | 基于 Qwen3.6 35B-A3B MoE 的视觉+对话解禁模型，社区氛围极强 |
| **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | baidu | 2,716 | 2,237,351 | 百度发布的通用 OCR 模型，"无限制"长文档识别是亮点 |
| **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | empero-ai | 2,417 | 2,133,420 | 基于 Qwen3.5 的 9B 量化角色模型，支持 1M 超长上下文 |
| **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** | thinkingmachines | 1,455 | 16,441 | 多模态图像-文本模型，Thinking Machines 的旗舰基座首发 |
| **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** | moonshotai | 1,226 | 722,058 | Moonshot Kimi K2.7 代码专用版，使用 compressed-tensors 压缩 |
| **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)** | ATH-MaaS | 249 | 17,162 | 阿里 Ovis 团队 OCR 模型第二代，针对中文场景优化 |
| **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** | OpenMOSS | 308 | 92,265 | 音频转写 + 说话人分离（diarization），长音频场景实用 |
| **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | nvidia | 914 | 590,230 | NVIDIA 流式 ASR 小模型，0.6B 参数主打实时语音转写 |
| **[microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow)** | microsoft | 127 | 0 | 微软基于 Diffusers 的文生图/编辑 Flow 模型 |
| **[nvidia/Cosmos3-Edge](https://huggingface.co/nvidia/Cosmos3-Edge)** | nvidia | 90 | 6,623 | NVIDIA Cosmos3 系列边缘部署版视频生成模型 |
| **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** | Alissonerdx | 235 | 0 | LTX-Video 的身份保持 LoRA，"参考图→视频"应用 |
| **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** | conradlocke | 497 | 0 | Krea-2 的身份编辑 LoRA，ComfyUI 友好 |
| **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)** | openbmb | 154 | 58 | 面壁 MiniCPM 的机器人操作 VLA 模型 |
| **[openbmb/MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack)** | openbmb | 114 | 72 | 同系列机器人追踪模型，VLA 路线生态完善 |

## 🔧 专用模型（OCR / 机器人 / 视觉编辑）

> OCR：百度 Unlimited-OCR（#2）、OvisOCR2（#16）—— 文档智能继续是中文社区刚需。
> 机器人 VLA：openbmb 推出 Manip 与 Track 两条线，是国内首个规模化开源 VLA 系列。
> 视觉编辑：Krea-2 / LTX-Video 的 LoRA 适配器快速占领 ComfyUI 节点市场。

## 📦 微调与量化（社区微调 / GGUF / AWQ / 1-bit）

| 模型 | 作者 | 👍 | ⬇️ | 一句话说明 |
|---|---|---|---|---|
| **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** | DavidAU | 323 | 62,842 | Qwen3.6 27B 的多融合"Heretic"GGUF 量化，融合 7+ 来源模型 |
| **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)** | bottlecapai | 514 | 12,002 | Qwen3.6 27B 加"思考帽"的视觉+对话微调 |
| **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** | prism-ml | 596 | 1,404,962 | 1-bit 极致量化 GGUF，本周边缘部署明星 |
| **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** | prism-ml | 946 | 432,196 | 三值（2-bit）量化版本，体积再压一半 |
| **[prism-ml/Bonsai-27B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit)** | prism-ml | 165 | 25,273 | Apple MLX 框架的 1-bit 适配，面向 M-series 芯片 |
| **[unsloth/inkling-GGUF](https://huggingface.co/unsloth/inkling-GGUF)** | unsloth | 120 | 7,377 | Unsloth 给 Inkling 出的 GGUF 量化版，多模态边缘推理 |
| **[unsloth/Laguna-S-2.1-GGUF](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF)** | unsloth | 109 | 0 | Unsloth 量化版本，搭配 vLLM 友好 |
| **[poolside/Laguna-S-2.1-GGUF](https://huggingface.co/poolside/Laguna-S-2.1-GGUF)** | poolside | 94 | 289 | 官方 GGUF 量化版，标注了 endpoints_compatible |
| **[poolside/Laguna-S-2.1-NVFP4](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4)** | poolside | 93 | 1,953 | NVFP4（NVIDIA FP4）量化，Blackwell 架构优化 |
| **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF)** | GnLOLot | 153 | 51,746 | MiniCPM5 1B 的 GGUF 推理强化版，强调 thinking |

---

## 📡 生态信号

**国产基座全面发力**：zai-org GLM-5.2 单周 4,339 点赞登顶，MoE + DSA 架构代表了 2026 年中文基座的技术前沿；Kimi-K2.7-Code、Nanbeige4.2、MiniCPM 系列共同构成中文矩阵。**Google 闭源级开源策略威力不减**：Gemma 4-31B-IT 累计下载突破 1,200 万，开发者默认起点仍是大厂多模态模型。**极致量化进入 1-bit

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*