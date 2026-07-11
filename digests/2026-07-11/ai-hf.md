# Hugging Face 热门模型日报 2026-07-11

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-11 02:03 UTC

---

# Hugging Face 热门模型日报 · 2026-07-11

---

## 📰 今日速览

今日 Hub 由 **GLM-5.2（智谱）** 以近 4000 周点赞领跑，延续了 Z.ai 在中文开源 LLM 领域的强势号召力。**Qwen3.5/Qwen3.6 系列仍是社区微调的绝对底座**——榜单中超过 10 个模型基于该架构二次开发，覆盖 GGUF、NVFP4、LoRA 与视觉增强。**DeepSeek V4 家族正式登场**（DeepSeek-V4-Flash-GGUF、DeepSeek-V4-Pro-DSpark），配合腾讯 **Hunyuan V3 (Hy3)**、美团 **LongCat-2.0** 等新晋国产基础模型，开源大模型竞争明显加剧。NVIDIA 连续推出多款 NVFP4 量化版本（Nemotron-Labs、Qwen3.6-27B）以及面向定位的 **LocateAnything-3B**，硬件厂商下场做模型优化的趋势愈发清晰。

---

## 🧠 语言模型（LLM、对话、指令微调）

| 模型 | 作者/点赞/下载 |
|---|---|
| **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | zai-org · 👍 3,786 · ⬇ 392,655 |
| 智谱最新对话基模，采用 `glm_moe_dsa` MoE 架构，今日周榜冠军，国产开源 LLM 的当打旗舰。 | |
| **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** | tencent · 👍 666 · ⬇ 6,923 |
| 腾讯混元第三代（Hunyuan V3）文本生成模型，中文语境下与 GLM/Qwen 正面竞争。 | |
| **[meituan-longcat/LongCat-2.0](https://huggingface.co/meituan-longcat/LongCat-2.0)** | meituan-longcat · 👍 170 · ⬇ 1,308 |
| 美团 LongCat 系列二代，主打对话与长上下文，工程导向明显。 | |
| **[AliesTaha/fable-traces](https://huggingface.co/AliesTaha/fable-traces)** | AliesTaha · 👍 198 · ⬇ 4,875 |
| 基于 Qwen3 的指令微调作品，社区创作型小模型代表。 | |
| **[mistralai/Leanstral-1.5-119B-A6B](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B)** | mistralai · 👍 184 · ⬇ 315 |
| Mistral 的 Leanstral 系列迭代，119B/A6B 稀疏 MoE，vLLM 原生支持，关注代码与推理人群关注。 | |
| **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)** | deepseek-ai · 👍 463 · ⬇ 33,088 |
| DeepSeek V4 Pro 版本（“DSpark”变体），正式接续 V3 推理路线，强化深度思考能力。 | |
| **[nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4)** | nvidia · 👍 99 · ⬇ 23,404 |
| NVIDIA Nemotron-Labs Puzzle 75B/A9B，NVFP4 4-bit 量化，主打推理 Puzzle 任务。 | |
| **[nvidia/Nemotron-Labs-Audex-30B-A3B](https://huggingface.co/nvidia/Nemotron-Labs-Audex-30B-A3B)** | nvidia · 👍 95 · ⬇ 576 |
| Nemotron Audex 系列，主打音频理解的 MoE 模型（30B/A3B），文本侧已可载入。 | |

---

## 🎨 多模态与生成（图像、视频、音频、OCR）

| 模型 | 作者/点赞/下载 |
|---|---|
| **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** | InternScience · 👍 472 · ⬇ 25,772 |
| 基于 Qwen3.5 MoE 的 Agentic 多模态模型，定位智能体主线任务。 | |
| **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | baidu · 👍 1,921 · ⬇ 1,319,683 |
| 百度“无限制 OCR”——长文本、复杂版式文档抽取能力突出，已获百万级下载。 | |
| **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** | krea · 👍 576 · ⬇ 164,525 |
| Krea 团队第二代 Turbo 文生图，速度大幅提升、社区扩展活跃。 | |
| **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | nvidia · 👍 2,701 · ⬇ 1,456,269 |
| NVIDIA 出品的 3B 视觉定位模型，支持“零样本”目标指代与坐标输出，本周黑马。 | |
| **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** | OpenMOSS-Team · 👍 98 · ⬇ 5,919 |
| 端到端“转写+说话人分离”语音模型，单模型搞定 ASR 与 diarization。 | |
| **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | empero-ai · 👍 1,977 · ⬇ 1,909,705 |
| 基于 Qwen3.5 的 9B 多模态长上下文（1M）变体，GGUF 量化版，下载量惊人。 | |
| **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M)** | empero-ai · 👍 761 · ⬇ 184,315 |
| 同上模型的未量化原版，便于二次微调与学术研究。 | |
| **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** | Alissonerdx · 👍 84 · ⬇ 0 |
| LTX-Video 系列的角色一致性 LoRA，主打“参考图→视频”身份保持。 | |
| **[robbyant/lingbot-video-moe-30b-a3b](https://huggingface.co/robbyant/lingbot-video-moe-30b-a3b)** | robbyant · 👍 77 · ⬇ 317 |
| 基于 LingBotVideoPipeline 的视频 MoE（30B/A3B），Apache-2.0 开源。 | |
| **[open-gigaai/Giga-World-1](https://huggingface.co/open-gigaai/Giga-World-1)** | open-gigaai · 👍 118 · ⬇ 0 |
| 世界模型方向新作，Apache-2.0，关注生成式环境模拟的可以留意。 | |

---

## 🔧 专用模型（代码、表格、推理）

| 模型 | 作者/点赞/下载 |
|---|---|
| **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** | google · 👍 345 · ⬇ 18,626 |
| Google 首发的表格基础模型（TabFM），支持零样本分类与回归，将 LLM 范式带入结构化数据。 | |
| **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** | yuxinlu1 · 👍 1,134 · ⬇ 427,668 |
| 基于 Gemma 4 12B 的 Agentic 编码模型，针对终端/Tool-use（τ²-bench 类）优化。 | |
| **[SupraLabs/Supra-Router-51M](https://huggingface.co/SupraLabs/Supra-Router-51M)** | SupraLabs · 👍 86 · ⬇ 1,160 |
| 超轻量 51M 路由器模型，用来在多模型系统中做查询调度，MoE 推理栈必备组件。 | |

---

## 📦 微调与量化（社区 GGUF / NVFP4 / LoRA）

| 模型 | 作者/点赞/下载 |
|---|---|
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS · 👍 2,623 · ⬇ 2,660,170 |
| 基于 Qwen3.6 35B/A3B MoE 的去审查微调，GGUF 量化，下载量爆表，社区热度第一。 | |
| **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)** | bottlecapai · 👍 212 · ⬇ 3,699 |
| Qwen3.6 27B 的“思维链增强”微调，主打强推理 + 多模态。 | |
| **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | froggeric · 👍 836 · ⬇ 0 |
| 修复 Qwen 系列 Chat Template 的 MLX/Jinja 模板仓库，社区工具型热作。 | |
| **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** | conradlocke · 👍 161 · ⬇ 0 |
| 基于 Krea-2 的身份一致性编辑 LoRA，ComfyUI 友好。 | |
| **[unsloth/DeepSeek-V4-Flash-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF)** | unsloth · 👍 124 · ⬇ 31,895 |
| Unsloth 出品的 DeepSeek V4 Flash GGUF 量化

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*