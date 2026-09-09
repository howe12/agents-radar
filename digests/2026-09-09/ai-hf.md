# Hugging Face 热门模型日报 2026-09-09

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-09 02:34 UTC

---

# Hugging Face 热门模型日报 · 2026-09-09

---

## 📌 今日速览

- **Qwen3.8 系列全面登顶**：阿里 Qwen3.8-27B 以 14,396 点赞成为本周无可争议的"周冠军"，Qwen3.8-Flash-Next 紧随其后（5,009 点赞），形成从旗舰到轻量的完整产品矩阵。
- **视频生成赛道持续火爆**：MiniMaxAI/MiniMax-H3（5,048 点赞，下载近 500 万）、Lightricks/LTX-2.5（3,182 点赞）共同撑起图像到视频方向的关注度。
- **"Uncensored/去审查"微调成现象**：榜单上至少 3 个 Qwen3.8 的去审查 GGUF 变体上榜，DavidAU 的 "Heretic" 微调也颇具代表性，反映出社区对内容限制绕开方案的兴趣上升。
- **量化与本地部署生态极其活跃**：Unsloth（3,707 点赞）、ISTA-DASLab（GSQ-RCO 混合精度）、NVIDIA（NVFP4）三家分别贡献了 Qwen3.8 的不同压缩方案，凸显边缘推理与本地化部署的需求。
- **"长青经典"依然在榜**：GPT-2、BERT-base、all-MiniLM-L6-v2 凭借数千万级下载量持续出现在热门榜，证明 HF 既是前沿发布平台，也是 ML 基础设施的"长尾仓库"。

---

## 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---|---|---|
| [zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,766 | 474,141 | 智谱 GLM-5.3 旗舰文本生成模型，作为国产开源代表继续扩张生态 |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,172 | 826,875 | GLM-5.3 轻量对话分支，主打高效推理 |
| [openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 693 | 2,879 | 面壁 MiniCPM5 端侧 LLM，主打端侧 / 移动端部署 |
| [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 855 | 10,661 | 基于 Spark2.5 架构的 4B 文本生成模型，社区微调活跃 |
| [IFM/K2-Horizon-MoVA-36B-A4B](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B) | IFM | 235 | 3,205 | K2-Horizon 系列 MoVA 架构（36B 总参数 / 4B 激活）混合专家模型 |
| [distilbert/distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased) | distilbert | 1,199 | 7,138,152 | 蒸馏版 BERT 经典模型，长尾基础设施 |
| [openai-community/gpt2](https://huggingface.co/openai-community/gpt2) | openai-community | 3,757 | 14,748,356 | GPT-2 官方存档，HF 上最古老的"长青"模型之一 |

## 🎨 多模态与生成（图像 / 视频 / 音频 / 文本到 X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---|---|---|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 14,396 | 6,712,160 | 阿里 Qwen3.8 多模态旗舰，本周绝对主角，已衍生数十个社区变体 |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,009 | 503,263 | Qwen3.8 的 Flash 轻量版，主打速度与成本 |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,048 | 4,994,268 | 视频生成基础模型，文/图到视频全功能，已成多模态领域基础设施级模型 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 3,182 | 1,644,796 | LTX-Video 2.5，单文件 diffusion，支持图生视频、文生视频、视频编辑全流程 |
| [deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 819 | 313,547 | DeepSeek V4 Flash 视觉实验版，低延迟多模态推理 |
| [OpenVDN/vdn-minimax-h3](https://huggingface.co/OpenVDN/vdn-minimax-h3) | OpenVDN | 248 | 0 | 基于 MiniMax-H3 的社区微调变体，主打文生视频 |
| [WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 174 | 58,060 | MiniMax-H3 的"Singularity"风格化微调，覆盖图/文/视频全模态 |
| [BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 488 | 7,243 | Breeze-TTS 第二代文本转语音模型 |
| [microsoft/VibeVoice-ASR-Streaming-7B](https://huggingface.co/microsoft/VibeVoice-ASR-Streaming-7B) | microsoft | 156 | 1,449 | 微软 7B 流式语音识别模型，主打实时转写 |
| [openai/clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32) | openai | 1,258 | 20,702,763 | OpenAI CLIP 经典视觉-语言模型，零样本图像分类的"标杆" |

## 🔧 专用模型（时间序列 / 嵌入 / 安全 / 经典 NLP）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---|---|---|
| [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,628 | 253,331,994 | 嵌入式语义相似度的事实标准，累计下载超 2.5 亿次 |
| [google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 3,040 | 50,396,517 | BERT 原始版本，下载量超 5000 万，NLP 任务长尾基础设施 |
| [google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 640 | 444,052 | Google 时间序列基础模型 TimesFM 3.0，主打通用预测 |
| [dealignai/GLM-5.3-CYBERSECURITY-FP8](https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8) | dealignai | 317 | 19,433 | 基于 GLM-5.3 的网络安全垂直领域微调 + FP8 量化 |
| [facebook/mms-300m](https://huggingface.co/facebook/mms-300m) | facebook | 301 | 12,388 | Meta 跨语言语音基础模型，支持 1000+ 语言 |

## 📦 微调与量化（社区微调 / GGUF / 混合精度）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---|---|---|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,707 | 10,675,683 | Unsloth 出品的 Qwen3.8-27B GGUF 量化版，本地部署首选 |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 1,025 | 1,715,824 | Qwen3.8 去审查 + Aggressive MTP 推理优化 GGUF |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*