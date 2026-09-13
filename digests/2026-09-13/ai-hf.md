# Hugging Face 热门模型日报 2026-09-13

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-13 02:36 UTC

---

# 🤗 Hugging Face 热门模型日报 · 2026-09-13

---

## 📌 今日速览

今日 Hugging Face 趋势榜呈现明显的 **"Qwen 一统江湖"** 格局：`Qwen/Qwen3.8-27B` 以近 1.5 万周点赞稳居榜首，配套的 GGUF 量化版与社区微调版同时霸榜前 30 中的多个席位。多模态视频生成继续高热（`LTX-2.5`、`MiniMax-H3`、`Viggle-Animate`），时间序列、自驾、ASR 等垂类专用模型正在补齐大模型的能力版图。值得注意的是，**经典模型（BERT、GPT-2、CLIP、all-MiniLM）下载量依旧惊人**，说明 Hugging Face 的"长尾生态"依然是衡量真实落地需求的重要标尺。

---

## 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---:|---:|---|
| [**Qwen/Qwen3.8-27B**](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 14,870 | 7,726,687 | 本周最强全能选手，多模态对话能力 + 27B 参数，下载量已达 770 万级 |
| [**Qwen/Qwen3.8-Flash-Next**](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,139 | 604,992 | 走极致性价比的 Flash-Next 版本，主打低延迟推理场景 |
| [**zai-org/GLM-5.3-Flash**](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,279 | 1,333,574 | GLM 5.3 家族的 Flash 轻量分支，多模态对话 |
| [**deepseek-ai/DeepSeek-V4.1-Flash**](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 2,020 | 140,636 | DeepSeek-V4 系列的 Flash 版本，主打性价比 + 多模态 |
| [**openbmb/MiniCPM5-2B**](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 1,262 | 102,334 | 端侧友好 2B 小模型，Llama 架构改写，移动端部署热门 |
| [**nex-agi/Nex-N2.5-Pro**](https://huggingface.co/nex-agi/Nex-N2.5-Pro) | nex-agi | 617 | 30,081 | 基于 Qwen3.5 MoE 改写的 Pro 级多模态对话模型 |
| [**nex-agi/Nex-N2.5-mini**](https://huggingface.co/nex-agi/Nex-N2.5-mini) | nex-agi | 738 | 3,581 | 同系列的 mini 版，刚上线即冲榜 |
| [**XHToken/Spark-X2.5-4B**](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 1,135 | 19,733 | 4B 体量 LLM，新晋国产生力军 |
| [**Edge0/Edge0-35B-A3B-preview**](https://huggingface.co/Edge0/Edge0-35B-A3B-preview) | Edge0 | 538 | 1,596 | 35B-A3B 激活参数的 MoE 模型，专注边缘推理 |
| [**deepseek-ai/DeepSeek-V4-Flash-Vision-Exp**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 881 | 484,422 | DeepSeek-V4 的视觉实验分支，多模态理解能力强 |
| [**openai-community/gpt2**](https://huggingface.co/openai-community/gpt2) | openai-community | 3,980 | 15,150,566 | 元老级生成模型，仍是教学/基准的"国民底座" |

---

## 🎨 多模态与生成（图像 / 视频 / 音频）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---:|---:|---|
| [**MiniMaxAI/MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,201 | 4,860,709 | 当周视频生成头牌，支持文生视频/图生视频，480 万下载量 |
| [**Lightricks/LTX-2.5**](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 3,610 | 1,601,007 | 业界成熟的视频扩散模型，LTX 系列最新版，多功能合一 |
| [**WarmBloodAban/Minimax-h3_Singularity**](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 347 | 114,141 | 基于 H3 的社区微调视频生成变体（Singularity 主题） |
| [**Viggle/Viggle-Animate**](https://huggingface.co/Viggle/Viggle-Animate) | Viggle | 200 | 0 | 角色动画驱动视频编辑，新上线即冲榜 |
| [**m-a-p/YuE2-3B**](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p | 325 | 2,304 | 3B 音乐生成模型，支持符号化规划与 agent 式编辑 |
| [**openai/clip-vit-base-patch32**](https://huggingface.co/openai/clip-vit-base-patch32) | openai | 1,457 | 21,323,978 | 零样本图像分类经典，2 千万级下载，多模态"标配" |

---

## 🔧 专用模型（代码 / 数学 / 时间序列 / 自驾 / 嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---:|---:|---|
| [**sentence-transformers/all-MiniLM-L6-v2**](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,863 | 253,739,900 | 全球下载量最高的句向量模型（2.5 亿+），RAG 标配 |
| [**google-bert/bert-base-uncased**](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 3,246 | 47,340,648 | NLP 经典 fill-mask 底座，工业界 NLP 流水线的事实标准 |
| [**distilbert/distilbert-base-uncased**](https://huggingface.co/distilbert/distilbert-base-uncased) | distilbert | 1,392 | 7,369,104 | BERT 的蒸馏版，轻量首选 |
| [**google/timesfm-3.0-pytorch**](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 757 | 784,262 | Google 时序预测基础模型 3.0，零样本时间序列预测 |
| [**microsoft/VibeVoice-ASR-Streaming-7B**](https://huggingface.co/microsoft/VibeVoice-ASR-Streaming-7B) | microsoft | 215 | 2,494 | 7B 流式语音识别模型，适合实时转写 |
| [**Qwen/Qwen-Drive-1.0-4B**](https://huggingface.co/Qwen/Qwen-Drive-1.0-4B) | Qwen | 183 | 3,761 | Qwen 专为自动驾驶场景打造的 4B 模型，含轨迹规划能力 |
| [**facebook/mms-300m**](https://huggingface.co/facebook/mms-300m) | facebook | 488 | 12,122 | Meta 多语言多任务语音基础模型，覆盖上千种语言 |
| [**dealignai/GLM-5.3-CYBERSECURITY-FP8**](https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8) | dealignai | 406 | 30,068 | GLM 5.3 的网络安全垂直微调 + FP8 量化，移除安全拒绝 |

---

## 📦 微调与量化（社区 GGUF / Uncensored / FP8）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---:|---:|---|
| [**unsloth/Qwen3.8-27B-GGUF**](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,951 | 11,529,203 | Qwen3.8-27B 的官方 GGUF 量化版，下载量破 1100 万，社区首选底座 |
| [**HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF**](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 1,133 | 2,078,044 | 27B 的去审查 + 多 token 预测（MTP）GGUF 微调，下载量超 200 万 |
| [**ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF**](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 894 | 729,683 | 学术派 GSQ + RCO 混合精度量化实验，量化新范式值得关注 |
| [**DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF**](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 545 | 665,911 | 命名狂魔 DavidAU 的"全特性叠加"实验版，主打代码 + 写作 |
| [**openbmb/MiniCPM5-2B-GGUF**](https://huggingface.co/openbmb/MiniCPM5-2B-GGUF) | openbmb | 194 | 87,316 | MiniCPM5-2B 的官方 GGUF 量化版本 |

---

## 🌐 生态信号

本周

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*