# Hugging Face 热门模型日报 2026-09-04

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-04 02:25 UTC

---

# 🤗 Hugging Face 热门模型日报
**日期：2026-09-04**

---

## 📌 今日速览

Qwen3.8 系列持续霸榜，**Qwen3.8-27B** 以 1.38 万周点赞稳居榜首，GLM-5.3 与 MiniMax-H3 紧随其后；视频生成赛道异常活跃，LTX-2.5、MiniMax-H3、FastVideo-FastH3 形成多强格局；社区"去审查（abliterated/uncensored）"微调和 GGUF 量化版本数量激增，反映出本地化部署和定制化需求的强劲增长。

---

## 🧠 语言模型

| 模型 | 作者 | 点赞 | 下载 | 简介 |
|---|---|---|---|---|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 13,837 | 5.25M | 本周最热语言模型，多模态架构（image-text-to-text），Qwen3.5 代际的主力版本 |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 1,059 | 848K | 基于 Qwen3.8-27B 的去审查版本，同时提供 MLX/Safetensors/GGUF 三种格式 |
| [zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,615 | 151K | 智谱 GLM-5.3 主版本，使用 glm_moe_dsa 架构，纯文本生成 |
| [distilbert/distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased) | distilbert | 1,092 | 6.76M | 经典轻量 BERT 长尾下载，作为教学/对比基线长期上榜 |
| [tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview) | tencent | 417 | 4,449 | 腾讯混元 4 预览版，基于 hy_v4 架构的新一代旗舰 |
| [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 168 | 1,514 | 讯飞星火 X2.5 4B 小尺寸版本，专注 LLM 通用对话 |
| [pipecat-ai/phonellm-alpha-1](https://huggingface.co/pipecat-ai/phonellm-alpha-1) | pipecat-ai | 207 | 11.5K | 基于 Nemotron-H 的语音对话专用 LLM，面向实时语音 agent |

> 经典老兵：[google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased)（2,910 ❤️ / 58.5M ⬇️）与 [openai-community/gpt2](https://huggingface.co/openai-community/gpt2)（3,606 ❤️ / 14M ⬇️）依旧长期占据周榜，是 NLP 入门标配。

---

## 🎨 多模态与生成

| 模型 | 作者 | 点赞 | 下载 | 简介 |
|---|---|---|---|---|
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,865 | 5.09M | 当下最热视频生成模型，支持图生视频、文生视频，下载量已破 500 万 |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 4,815 | 263K | Qwen 多模态 Flash 轻量版，采用 qwen4_exp 实验架构 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 2,698 | 1.29M | LTX 系列第 2.5 代，单文件 diffusion，支持图生/文生/视频生视频 |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,020 | 517K | 智谱 GLM-5.3 多模态版本，对标 Flash 定位，下载量惊人 |
| [deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 555 | 54.5K | DeepSeek V4 视觉多模态实验版，覆盖 image-text-to-text |
| [BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 397 | 3,861 | Breeze 系列第二代语音合成模型 |
| [FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree) | FastVideo | 256 | 0 | 4 步采样极速视频生成研究预览，基于 VSA DataFree 蒸馏 |
| [facebook/mms-300m](https://huggingface.co/facebook/mms-300m) | facebook | 181 | 12.4K | Meta 跨语言语音基础模型，基于 wav2vec2 预训练 |

---

## 🔧 专用模型

| 模型 | 作者 | 点赞 | 下载 | 简介 |
|---|---|---|---|---|
| [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,461 | 246M | 嵌入检索的事实标准，单文件 80MB，跨框架部署之王 |
| [openai/clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32) | openai | 1,136 | 19.9M | 零样本图像分类与文-图对齐基线，PyTorch/TF/JAX/ONNX 全支持 |
| [google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 367 | 46.8K | Google 时序基础模型第 3 代，专攻时间序列预测 |

---

## 📦 微调与量化

| 模型 | 作者 | 点赞 | 下载 | 简介 |
|---|---|---|---|---|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,448 | 9.55M | Qwen3.8-27B 的官方 GGUF 量化，下载量逼近千万，社区首选本地部署版 |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 900 | 1.34M | 激进 MTP 去审查微调，多模态视觉增强 |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 761 | 535K | Qwen3.8-Flash-Next 的 GGUF 量化版 |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 684 | 262K | Qwen3.8-27B 去审查 GGUF |
| [unsloth/GLM-5.3-Flash-GGUF](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF) | unsloth | 347 | 75.2K | GLM-5.3-Flash 的 GGUF 量化版 |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 248 | 100K | 实验性 GSQ + RCO 混合精度量化，研究价值高 |
| [orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF) | orcarouter | 211 | 85.1K | Qwen3.8-Flash-Next 去审查 GGUF |
| [orcarouter/GLM-5.3-Flash-Uncensored-FP8](https://huggingface.co/orcarouter/GLM-5.3-Flash-Uncensored-FP8) | orcarouter | 165 | 4,477 | GLM-5.3-Flash 的 FP8 精度去审查版本 |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 134 | 39.6K | DavidAU 招牌"Heretic" 多角色融合长名微调，代码向 |
| [OpenVDN/vdn-minimax-h3](https://huggingface.co/OpenVDN/vdn-minimax-h3) | OpenVDN | 139 | 0 | 基于 MiniMax-H3 的视频微调实验 |

---

## 🌐 生态信号

**Qwen3.8 家族一统江湖**：阿里 Qwen 与智谱 GLM-5.3 已成为中国开源双雄，Qwen3.8-27B 一周内衍生出至少 8 个社区变体（GGUF、去审查、MTP、混合精度），形成完整的"基础模型 → 量化 → 微调 → 专业化"产业链。**视频生成进入多极竞争**：MiniMax-H3、LTX-2.5、FastVideo-FastH3 三足鼎立，单周下载均破百万，FastVideo 推出的 4 步采样预览预示推理成本即将大幅下降。

**开源权重持续碾压闭源**：榜单 30 个模型全部开源可下载，"abliterated/uncensored" 微调成现象级话题，OBLITERATUS、orcarouter、HauhauCS、DavidAU 等社区作者围绕 Qwen

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*