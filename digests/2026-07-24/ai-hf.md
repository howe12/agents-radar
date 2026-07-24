# Hugging Face 热门模型日报 2026-07-24

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-24 02:05 UTC

---

# 🤗 Hugging Face 热门模型日报
**日期：2026-07-24**

---

## 📰 今日速览

今日 Hub 延续了 7 月下旬的多模态与量化主线：**GLM-5.2** 与 **gemma-4-31B-it** 抢占点赞榜前两位，国产主力模型在大规模权重开放上保持强势。多模态侧 **Unlimited-OCR**、**OvisOCR2**、**ThinkingCap-Qwen3.6-27B** 等"视觉-文本"任务模型密集上榜，OCR 仍是企业落地最高频场景。量化与社区微调侧异常活跃：**Prism-ML** 系列把 1-bit / ternary（2-bit）压缩推到 27B 级别，**Qwen3.6-35B-A3B** 的多种"解封版"MOE GGUF 同步涌现，反映出边缘推理与本地化部署需求的高速增长。

---

## 🧠 语言模型（LLM / 对话）

| 模型 | 作者 · 点赞 · 下载 | 一句话定位 |
|---|---|---|
| [**zai-org/GLM-5.2**](https://huggingface.co/zai-org/GLM-5.2) | zai-org · 4,371 · 596,442 | 今日榜首，MoE + DSA 架构的下一代对话基座，国产开源旗舰 |
| [**google/gemma-4-31B-it**](https://huggingface.co/google/gemma-4-31B-it) | google · 3,347 · 12,666,488 | 谷歌新一代指令微调视觉-文本模型，下载量断层第一 |
| [**poolside/Laguna-S-2.1**](https://huggingface.co/poolside/Laguna-S-2.1) | poolside · 517 · 13,285 | 软件工程导向的代码/对话基座，主版本 + GGUF/NVFP4 多形态分发 |
| [**upstage/Solar-Open2-250B**](https://huggingface.co/upstage/Solar-Open2-250B) | upstage · 453 · 362 | 250B 规模开放权重，参数大但下载尚未爆发，关注度正在起量 |
| [**Nanbeige/Nanbeige4.2-3B**](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige · 322 · 4,532 | 南北方阵营的轻量 LLM，主打小参数高效对话 |
| [**thinkingmachines/Inkling**](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines · 1,508 · 24,669 | 自研多模态 Inkling-mm 架构，付费研究机构的开源尝试 |

---

## 🎨 多模态与生成（图像 / 视频 / 音频 / TTS）

| 模型 | 作者 · 点赞 · 下载 | 一句话定位 |
|---|---|---|
| [**baidu/Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) | baidu · 2,891 · 2,414,259 | 百度无限场景 OCR，文档/票证/截图识别，覆盖长度无上限 |
| [**moonshotai/Kimi-K2.7-Code**](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai · 1,249 · 766,522 | 月之暗面代码专用版本，图文输入 + 压缩权重，工程向 |
| [**microsoft/Mage-Flow**](https://huggingface.co/microsoft/Mage-Flow) | microsoft · 185 · 411 | 微软新一代 Flow-matching 图像生成/编辑，可控性强 |
| [**conradlocke/krea2-identity-edit**](https://huggingface.co/conradlocke/krea2-identity-edit) | conradlocke · 517 · 0 | 基于 Krea-2-Raw 的身份一致性 LoRA，刚发布的新鲜货 |
| [**nvidia/Cosmos3-Edge**](https://huggingface.co/nvidia/Cosmos3-Edge) | nvidia · 100 · 28,493 | 英伟达 Cosmos 系列边缘侧视频/世界模型 |
| [**nvidia/nemotron-3.5-asr-streaming-0.6b**](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | nvidia · 926 · 750,118 | 仅 0.6B 的流式 ASR，主打实时语音转写 |
| [**OpenMOSS-Team/MOSS-Transcribe-Diarize**](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize) | OpenMOSS-Team · 320 · 111,598 | 转写 + 说话人分离一体化音频模型 |
| [**Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice**](https://huggingface.co/Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice) | Qwen · 1,799 · 2,497,020 | 通义 1.7B 自定义语音 TTS，下载量爆炸，可商用 |
| [**openbmb/MiniCPM-RobotManip**](https://huggingface.co/openbmb/MiniCPM-RobotManip) / [MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack) | openbmb · 165/117 · 408/306 | 面壁"小钢炮"进军具身，VLA 操控 + 视觉跟踪双件套 |
| [**google/gemma-4-31B-it**](https://huggingface.co/google/gemma-4-31B-it) | 见上 | 兼具视觉理解的对话模型 |

---

## 🔧 专用模型（OCR / 代码 / 安全）

| 模型 | 作者 · 点赞 · 下载 | 一句话定位 |
|---|---|---|
| [**ATH-MaaS/OvisOCR2**](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS · 257 · 26,919 | 阿里通义 + 文档智能：Ovis 团队第二代 OCR，结构化输出 |
| [**fdtn-ai/antares-1b**](https://huggingface.co/fdtn-ai/antares-1b) | fdtn-ai · 121 · 2,747 | Granite MoE-Hybrid 改写，1B 安全/审查专用模型 |
| [**Motif-Technologies/Motif-3-Beta**](https://huggingface.co/Motif-Technologies/Motif-3-Beta) | Motif-Technologies · 173 · 1,856 | 特征提取 / 嵌入方向的小模型新尝试 |

---

## 📦 微调与量化（GGUF / AWQ / 三值 / 社区微调）

| 模型 | 作者 · 点赞 · 下载 | 一句话定位 |
|---|---|---|
| [**prism-ml/Ternary-Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml · 984 · 576,083 | 27B 模型 2-bit 三值量化，低显存玩大模型 |
| [**prism-ml/Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml · 620 · 1,910,116 | 27B 1-bit 极压缩 GGUF，下载量级逆天 |
| [**prism-ml/Bonsai-27B-mlx-1bit**](https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit) | prism-ml · 172 · 34,270 | Apple Silicon MLX 框架 1-bit 版，面向 Mac/边缘 |
| [**HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS · 3,033 · 2,027,080 | Qwen3.6 MoE A3B 的"激进解封版"GGUF，GGUF 类榜首 |
| [**LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF**](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF) | LuffyTheFox · 117 · 24,982 | 同基座 + Hermes 套娃路线的另一解封微调 |
| [**DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF**](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU · 399 · 334,847 | Unsloth 训练的 27B 极繁后缀整合 GGUF |
| [**empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai · 2,439 · 2,126,755 | 基于 Qwen3.5 + 1M 上下文 + "Mythos 故事化"微调 GGUF |
| [**bottlecapai/ThinkingCap-Qwen3.6-27B**](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B) | bottlecapai · 528 · 25,231 | 图文-文本方向，强化思维链的 27B 微调 |
| [**unsloth/Laguna-S-2.1-GGUF**](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF) | unsloth · 150 · 28,542 | Unsloth 出品的 Laguna GGUF，标注可跑 vLLM |
| [**poolside/Laguna-S-2.1-GGUF**](https://huggingface.co/poolside/Laguna-S-2.1-GGUF) | poolside · 112 · 25,360 | Laguna 官方的 GGUF 镜像，多 region 端点 |
| [**poolside/Laguna-S-2.1-NVFP4**](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4) | poolside · 117 · 52,235 | NVFP4 黑科技权重量化，主打 NVIDIA 推理栈 |

---

## 🛰 生态信号

- **Qwen3.5 / Qwen3.6 系列继续成为社区微调的"底座之王"**：榜单上"uncensored / heretic / mythos / aggressive"等长后缀模型几乎全部基于 Qwen3.5~3.6 + MoE（35B-A3B），暗示通义模型在 30–35B 量级已建立事实标准。
- **极低比特量化进入 27B 实用区间**：Prism-ML 把 27B 模型压到 1-bit / ternary 仍能跑通社区，下载量百万级，证明本地推理门槛正快速下移到消费级硬件。
- **闭源 vs 开源**：几乎所有上榜模型均以"权重 + 多量化"形式开放，包括 GLM-5.2、gemma-4-31B-it、Kimi-K2.7、Solar-Open2，仅 Cosmos、Mage-Flow、OpenMOSS 等更接近"可用但受限"。**重权重开源依然是吸引社区点赞和衍生版的最强杠杆**。
- **垂直方向：小而专** —— Nemotron-3.5-ASR-Streaming-0.6B、Qwen3-TTS-1.7B、MOSS-Transcribe-Diarize 共同说明"小模型 + 强场景"在企业落地中比超大基座更受关注。
- **具身智能起势**：MiniCPM-RobotManip / RobotTrack 同日上榜，面壁首次把 VLA 拉到 Hugging Face 视野中心。

---

## ⭐ 值得探索

1. [**zai-org/GLM-5.2**](https://huggingface.co/zai-org/GLM-5.2) — 今日点赞冠军，MoE + DSA 的国产旗舰，参数规模可能比 4.x 大幅扩张，适合作为下半年基座对比测试的标杆。
2. [**prism-ml/Bonsai-27B-gguf**（1-bit）](https://huggingface.co/prism-ml/Bonsai-27B-gguf) — 百万级下载说明"用 24GB 显存跑 27B"已经不再是宣传话术，做端侧/边缘部署的研究者必看。
3. [**nvidia/nemotron-3.5-asr-streaming-0.6b**](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) — 0.6B 跑流式 ASR、75w+ 下载，是少有的能直接用于实时会议/客服场景的"小而美"代表，值得拿来评估私有化部署成本。

---

*📌 数据来源：Hugging Face Hub Trending（按周点赞排序），采集于 2026-07-24。*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*