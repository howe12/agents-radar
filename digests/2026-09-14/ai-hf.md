# Hugging Face 热门模型日报 2026-09-14

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-14 02:52 UTC

---

# 🤗 Hugging Face 热门模型日报
**2026-09-14 · 周热度榜 TOP 30**

---

## 📌 今日速览

今天 Hugging Face 热搜榜呈现明显的 **"Qwen 生态霸榜 + 视频生成爆发"** 双主线：阿里 **Qwen3.8-27B** 以 14,995 点赞稳居榜首，其衍生 GGUF 量化版在 unsloth 仓库的下载量突破 1100 万次，显示出极强的开发者粘性。与此同时，**Lightricks/LTX-2.5** 与 **MiniMaxAI/MiniMax-H3** 两款视频生成模型分别斩获 3,753 和 5,244 点赞，标志视频生成赛道进入新一轮军备竞赛。值得注意的是，多个采用 MoE 架构（混合专家）的 Qwen3.5 变体集中上榜，MoE 正在成为主流 LLM 的标配结构。

---

## 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---|---|---|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 14,995 | 7,768,964 | 🔥 今日榜一，Qwen 家族当打旗舰，支持图文多模态对话 |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,308 | 1,576,209 | 智谱 GLM 新一代 Flash 版本，主打高性价比推理 |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 2,231 | 244,457 | DeepSeek V4 系列轻量版，多模态能力下沉到 Flash 层级 |
| [openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 1,346 | 150,110 | 面壁智能第五代小钢炮，2B 参数主打端侧部署 |
| [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 1,155 | 21,336 | 4B 参数紧凑型 LLM，新一代 Spark 架构 |
| [Edge0/Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-A3B-preview) | Edge0 | 1,094 | 3,552 | 预览版 MoE 模型，35B 总参/3B 激活，主打边缘推理 |
| [nex-agi/Nex-N2.5-Pro](https://huggingface.co/nex-agi/Nex-N2.5-Pro) | nex-agi | 624 | 30,289 | Nex N2.5 系列 Pro 版，基于 Qwen3.5 MoE 改造 |
| [nex-agi/Nex-N2.5-mini](https://huggingface.co/nex-agi/Nex-N2.5-mini) | nex-agi | 759 | 3,970 | Nex N2.5 mini 版，更轻量级多模态方案 |

---

## 🎨 多模态与生成（图像 / 视频 / 音频 / TTS）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---|---|---|
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,244 | 4,819,845 | 🎬 视频生成现象级作品，480 万下载，diffusers 原生支持 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 3,753 | 1,548,442 | 图生视频主流开源方案，I2V/T2V/V2V 全场景覆盖 |
| [m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p | 420 | 3,707 | 🎵 音乐生成新星，支持符号规划与智能体式编辑 |
| [WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 376 | 123,491 | 基于 MiniMax-H3 的社区再发行版 |
| [tencent/AuK](https://huggingface.co/tencent/AuK) | tencent | 196 | 1,202 | 🎙️ 腾讯零样本 TTS + 声音克隆模型 |
| [Qwen/Qwen-Drive-1.0-4B](https://huggingface.co/Qwen/Qwen-Drive-1.0-4B) | Qwen | 196 | 4,119 | 🚗 Qwen 首个自动驾驶专用模型，主打运动规划 |

---

## 🔧 专用模型（嵌入 / 时序 / 经典基座）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---|---|---|
| [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,935 | **252,928,721** | 🏆 嵌入式工作马，累计下载 2.5 亿次，全网 RAG 首选 |
| [openai-community/gpt2](https://huggingface.co/openai-community/gpt2) | openai-community | 4,047 | 15,158,496 | 老牌经典基座，教学与微调起点 |
| [google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 3,306 | 46,513,338 | NLP 入门不可绕过的"祖师爷" |
| [openai/clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32) | openai | 1,508 | 21,331,361 | 视觉-语言对齐经典，零样本分类标配 |
| [distilbert/distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased) | distilbert | 1,438 | 7,325,282 | BERT 的蒸馏版本，轻量高效 |
| [google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 777 | 797,832 | 📈 Google 时序预测基础模型 3.0 版 |
| [facebook/mms-300m](https://huggingface.co/facebook/mms-300m) | facebook | 535 | 12,880 | Meta 多语言语音预训练模型 |

---

## 📦 微调与量化（社区 GGUF / 量化 / 特色微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---|---|---|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,018 | 11,005,880 | 🏅 Qwen3.8-27B 官方量化版，下载量爆表，本地部署首选 |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 972 | 769,557 | 实验性 GSQ+RCO 混合精度量化方案 |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 640 | 750,591 | "Heretic" 社区解封微调，多任务融合 |
| [openbmb/MiniCPM5-2B-GGUF](https://huggingface.co/openbmb/MiniCPM5-2B-GGUF) | openbmb | 218 | 99,716 | MiniCPM5 2B 的 GGUF 量化版 |
| [dealignai/GLM-5.3-CYBERSECURITY-FP8](https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8) | dealignai | 433 | 30,310 | 🔓 基于 GLM-5.3 的网络安全方向解封微调（abliterated） |
| [TokenRhythm/NeoHorse-1-4B](https://huggingface.co/TokenRhythm/NeoHorse-1-4B) | TokenRhythm | 1,740 | 7,979 | 基于 Qwen3.5 text 的智能体微调模型 |
| [Alissonerdx/Minimax-H3-ComfyUI](https://huggingface.co/Alissonerdx/Minimax-H3-ComfyUI) | Alissonerdx | 144 | 11,860 | MiniMax-H3 的 ComfyUI LoRA 适配 |
| [Agnes-AI/Agnes-3.0-Flash](https://huggingface.co/Agnes-AI/Agnes-3.0-Flash) | Agnes-AI | 139 | 474 | 🆕 新晋小众 Flash 模型，初露头角 |

---

## 📊 生态信号

**Qwen 生态全面接管热搜榜**：阿里 Qwen 系列（含原版 + 3 个衍生 GGUF/微调）合计拿下榜单前 12 名中至少 4 席，Qwen3.8-27B 原生模型点赞近 1.5 万，下载量逼近 780 万，**"Qwen 即开源基座"** 的格局已完全成型。

**MoE 成为新主流**：上榜的 Nex-N2.5 系列、Edge0-35B-A3B-preview 均采用 MoE 架构，35B 总参数/仅 3B 激活的设计正在重塑"小模型大能力"的标准

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*