# Hugging Face 热门模型日报 2026-09-10

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-10 02:36 UTC

---

# 🤗 Hugging Face 热门模型日报
**日期：2026-09-10**

---

## 📌 今日速览

Qwen 系列依然是绝对主角——`Qwen3.8-27B` 以 1.4 万周点赞独占榜首，其 GGUF 量化版（unsloth）和多种社区微调（DavidAU、HauhauCS）紧随其后，构成完整的"基础模型 + 量化 + 微调"生态。视频生成赛道持续升温，Lightricks 的 `LTX-2.5` 和 `MiniMaxAI/MiniMax-H3` 双双冲入前五。中文团队（Qwen、zai-org、deepseek-ai、openbmb）在榜单上表现活跃，闭源与开源模型并行推进，多模态、量化与领域专用模型同步爆发。

---

## 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|---|---|---|---|---|
| [**Qwen/Qwen3.8-27B**](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 14,529 | 6.71M | 本周最热模型，通义千问新一代旗舰，多模态图文对话，下载量破 670 万 |
| [**Qwen/Qwen3.8-Flash-Next**](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,047 | 503K | Qwen3.8 实验性 Flash-Next 变体，主打更快推理与多模态对话 |
| [**sentence-transformers/all-MiniLM-L6-v2**](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,722 | 253M | 久负盛名的轻量句子嵌入模型，下载量破 2.5 亿，长期霸榜 |
| [**openai-community/gpt2**](https://huggingface.co/openai-community/gpt2) | openai-community | 3,857 | 14.8M | GPT-2 经典文本生成模型，因教学与轻量部署场景持续热门 |
| [**google-bert/bert-base-uncased**](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 3,124 | 48.8M | BERT 基座模型，NLP 入门与生产环境的事实标准 |
| [**zai-org/GLM-5.3-Flash**](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,207 | 826K | 智谱 GLM-5.3 轻量版，主打速度与多模态对话 |
| [**zai-org/GLM-5.3**](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,790 | 474K | 智谱 GLM-5.3 旗舰 MoE 架构对话模型 |
| [**openai/clip-vit-base-patch32**](https://huggingface.co/openai/clip-vit-base-patch32) | openai | 1,346 | 20.8M | CLIP 视觉-文本对齐模型，零样本分类经典 |
| [**distilbert/distilbert-base-uncased**](https://huggingface.co/distilbert/distilbert-base-uncased) | distilbert | 1,286 | 7.18M | DistilBERT 轻量蒸馏版本，边缘部署首选 |
| [**XHToken/Spark-X2.5-4B**](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 1,009 | 10.6K | 国产 Spark 2.5 系列 4B 模型，性价比路线 |
| [**openbmb/MiniCPM5-2B**](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 938 | 2.88K | 面壁智能 MiniCPM5 端侧 2B 模型，主打高效推理 |
| [**IFM/K2-Horizon-MoVA-36B-A4B**](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B) | IFM | 261 | 3.2K | 36B 总参 / 4B 激活的 MoE 架构文本生成模型 |
| [**nex-agi/Nex-N2.5-Pro**](https://huggingface.co/nex-agi/Nex-N2.5-Pro) | nex-agi | 168 | 0 | Nex 新一代 Pro 模型，新发布尚处早期 |
| [**nex-agi/Nex-N2.5-mini**](https://huggingface.co/nex-agi/Nex-N2.5-mini) | nex-agi | 209 | 2 | Nex 轻量版，基于 Qwen3.5 MoE 的小型多模态模型 |

---

## 🎨 多模态与生成（图像 / 视频 / 音频 / TTS）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|---|---|---|---|---|
| [**MiniMaxAI/MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,090 | 4.99M | 图文到视频生成旗舰，下载量近 500 万，社区已围绕其展开大量微调 |
| [**Lightricks/LTX-2.5**](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 3,275 | 1.64M | LTX-Video 2.5，支持图生视频、文生视频、视频到视频的全能生成模型 |
| [**deepseek-ai/DeepSeek-V4-Flash-Vision-Exp**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 843 | 313K | DeepSeek-V4 Flash 视觉实验版，主打高效视觉理解 |
| [**BreezeBlue/Breeze-TTS-2**](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 522 | 7.2K | 新一代 TTS 模型，支持高质量语音合成 |
| [**facebook/mms-300m**](https://huggingface.co/facebook/mms-300m) | facebook | 366 | 12.2K | Meta 万语种语音基础模型 wav2vec2 预训练版本 |
| [**OpenVDN/vdn-minimax-h3**](https://huggingface.co/OpenVDN/vdn-minimax-h3) | OpenVDN | 277 | 0 | 基于 MiniMax-H3 的文生视频微调变体 |
| [**WarmBloodAban/Minimax-h3_Singularity**](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 232 | 58K | MiniMax-H3 的社区微调视频生成版本 |
| [**microsoft/VibeVoice-ASR-Streaming-7B**](https://huggingface.co/microsoft/VibeVoice-ASR-Streaming-7B) | microsoft | 179 | 1.4K | 微软流式语音识别 7B 模型，支持实时转写 |

---

## 🔧 专用模型（代码 / 数学 / 时间序列 / 嵌入）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|---|---|---|---|---|
| [**google/timesfm-3.0-pytorch**](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 692 | 444K | Google 时序预测基础模型 v3.0，下载量超 44 万 |
| [**dealignai/GLM-5.3-CYBERSECURITY-FP8**](https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8) | dealignai | 357 | 19.4K | 基于 GLM-5.3 的网络安全垂直领域模型，已移除拒答限制（abliterated） |

---

## 📦 微调与量化（社区微调 / GGUF / FP8 / NVFP4）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|---|---|---|---|---|
| [**unsloth/Qwen3.8-27B-GGUF**](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,785 | 10.7M | Qwen3.8-27B 的 unsloth GGUF 量化版，下载量超千万，本周最热量化模型 |
| [**HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF**](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 1,060 | 1.72M | Qwen3.8-27B 解除审查微调版，主打多模态与激进 MTP 推理 |
| [**ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF**](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 738 | 479K | 实验性 GSQ + RCO 混合精度量化技术 |
| [**DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF**](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 414 | 348K | Qwen3.8-27B 长名微调版本，针对编码与创意写作方向 |
| [**nvidia/Qwen3.8-Flash-Next-NVFP4**](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-NVFP4) | nvidia | 180 | 26.3K | NVIDIA ModelOpt 框架推出的 NVFP4 量化版本，主打 Hopper/Blackwell GPU |
| [**Jackrong/Qwopus3.8-27B-Flash-GGUF**](https://huggingface.co/Jackrong/Qwopus3.8-27B-Flash-GGUF) | Jackrong | 172 | 113K | Qwen3.8-27B Flash 视觉 GGUF 量化版，支持 llama.cpp |

---

## 📊 生态信号

本周榜单呈现出 **"中国主力 + 视频崛起 + 量化爆发"** 三大趋势。Qwen 系列占据榜单近三分之一，从旗舰（27B）、轻量（Flash-Next）到 GGUF 量化、社区微调（uncensored、Heretic、MTP）形成完整闭环，证明 Qwen 已成事实上的开源 LLM 基础设施。视频生成赛道首次出现 5000+ 点赞的旗舰（MiniMax-H3）与第二名 LTX-2.5 并立，标志视频生成进入"多极竞争"阶段。量化方面，unsloth GGUF 仍是绝对主流（千万级下载），NVIDIA 推出的 NVFP4 与 ISTA-DASLab 的 GSQ-RCO 混合精度则代表下一代硬件感知量化的探索方向。开源权重策略仍是绝对主流，闭源 API 模型极少出现在点赞榜前列——开发者更倾向可下载、可微调、可二次分发的开源权重。

---

## ⭐ 值得探索

1. [**Qwen/Qwen3.8-27B**](https://huggingface.co/Qwen/Qwen3.8-27B) — 周点赞破万、下载超 670 万，是当前多模态对话的最强开源基座，几乎所有主流微调/量化都基于它展开，研究和部署都值得首选。

2. [**MiniMaxAI/MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) — 视频生成新晋标杆，社区围绕其已有多个微调分支（vdn、Singularity），适合追踪视频生成生态演进。

3. [**nvidia/Qwen3.8-Flash-Next-NVFP4**](https://huggingface.co/nvidia/Qwen3.8-Flash

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*