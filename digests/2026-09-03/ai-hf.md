# Hugging Face 热门模型日报 2026-09-03

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-03 02:31 UTC

---

# 📊 Hugging Face 热门模型日报
**日期：2026-09-03**

---

## 🔥 今日速览

今日 Hugging Face 趋势榜由 **Qwen3.8 系列** 全面主导：旗舰 `Qwen3.8-27B` 以 13,697 周点赞与近 500 万下载量稳居榜首，`Flash-Next` 轻量版亦表现亮眼。**视频生成** 成为另一条主线，`MiniMaxAI/MiniMax-H3` 与 `Lightricks/LTX-2.5` 双双进入下载量百万级俱乐部。生态层面，**Unsloth 量化版与社区 "Uncensored/Abliterated" 微调** 大量涌现——Qwen3.8-27B 衍生出 6+ 个 GGUF/FP8 分支，反映社区正围绕热门基座进行高密度二次开发。

---

##  语言模型（LLM / 对话 / 指令微调）

| # | 模型 | 作者 | 点赞 | 下载 | 一句话点评 |
|---|------|------|------|------|-----------|
| 1 | [**Qwen/Qwen3.8-27B**](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 13,697 | 4,960,483 | 通义旗舰开源多模态模型，本周最强王者，几乎所有衍生版本的母本 |
| 2 | [**zai-org/GLM-5.3**](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,522 | 94,403 | 智谱 GLM 新一代 MoE（glm_moe_dsa 架构），主打对话与文本生成 |
| 3 | [**tencent/Hy4-preview**](https://huggingface.co/tencent/Hy4-preview) | tencent | 400 | 3,516 | 腾讯混元（Hunyuan）v4 预览版，hy_v4 新架构，尝鲜者居多 |
| 4 | [**pipecat-ai/phonellm-alpha-1**](https://huggingface.co/pipecat-ai/phonellm-alpha-1) | pipecat-ai | 200 | 6,813 | 基于 Nemotron-H 的语音对话专用 LLM，多模态语音管线新选手 |
| 5 | [**XHToken/Spark-X2.5-4B**](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 124 | 429 | 讯飞星火 2.5 系列 4B 轻量版，spark2_5 新架构，国内生态代表 |
| 6 | [**google-bert/bert-base-uncased**](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 2,863 | 63,694,017 | 经典常青树，2026 仍持续获赞，NLP 入门与基线首选 |
| 7 | [**distilbert/distilbert-base-uncased**](https://huggingface.co/distilbert/distilbert-base-uncased) | distilbert | 1,043 | 6,870,903 | BERT 蒸馏版，轻量推理场景仍广泛使用 |
| 8 | [**openai-community/gpt2**](https://huggingface.co/openai-community/gpt2) | openai-community | 3,538 | 14,290,101 | 元老级文本生成模型，教学与历史研究价值持续输出 |

---

## 🎨 多模态与生成（图像 / 视频 / 音频）

| # | 模型 | 作者 | 点赞 | 下载 | 一句话点评 |
|---|------|------|------|------|-----------|
| 1 | [**MiniMaxAI/MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,815 | 5,532,597 | 本周下载量仅次于 Qwen3.8-27B，图像+文本生成视频，扩散模型赛道顶流 |
| 2 | [**Qwen/Qwen3.8-Flash-Next**](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 4,740 | 207,941 | Qwen 轻量多模态版，qwen4_exp 实验架构，速度优先 |
| 3 | [**Lightricks/LTX-2.5**](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 2,580 | 1,232,274 | LTX 视频系列升级，支持图生视频、文生视频、视频编辑多任务 |
| 4 | [**zai-org/GLM-5.3-Flash**](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 1,969 | 441,348 | 智谱 Flash 版多模态模型，glm5_next 新架构，性价比路线 |
| 5 | [**deepseek-ai/DeepSeek-V4-Flash-Vision-Exp**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 509 | 17,893 | DeepSeek V4 视觉实验版，Flash 系列新增视觉能力 |
| 6 | [**FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree**](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree) | FastVideo | 250 | 0 | MiniMax-H3 的 4 步加速蒸馏预览版，视频生成推理加速值得关注 |
| 7 | [**BreezeBlue/Breeze-TTS-2**](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 357 | 3,086 | 新一代 TTS 模型，Breeze 语音家族迭代 |

---

## 🔧 专用模型（代码 / 时序 / 嵌入）

| # | 模型 | 作者 | 点赞 | 下载 | 一句话点评 |
|---|------|------|------|------|-----------|
| 1 | [**sentence-transformers/all-MiniLM-L6-v2**](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,395 | 250,280,836 | 周下载增量惊人，全平台累计 2.5 亿，嵌入任务事实标准 |
| 2 | [**google/timesfm-3.0-pytorch**](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 299 | 0 | Google 时序基础模型 PyTorch 版，3.0 大版本升级，潜力股 |

> 注：本周榜单中**代码专项模型**以衍生形态出现（如 `Tiel-Coder-35B-A3B-GGUF`），下设于"量化"区。

---

## 📦 微调与量化（社区 FT / GGUF / FP8）

| # | 模型 | 作者 | 点赞 | 下载 | 一句话点评 |
|---|------|------|------|------|-----------|
| 1 | [**unsloth/Qwen3.8-27B-GGUF**](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,394 | 9,354,057 | 榜单下载冠军（935 万+），Qwen3.8-27B GGUF 量化，社区首选本地部署方案 |
| 2 | [**unsloth/Qwen3.8-Flash-Next-GGUF**](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 728 | 431,339 | Flash-Next 的 GGUF 量化版 |
| 3 | [**unsloth/GLM-5.3-Flash-GGUF**](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF) | unsloth | 338 | 63,718 | GLM-5.3-Flash GGUF 版 |
| 4 | [**orcarouter/Qwen3.8-27B-Uncensored-FP8**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,372 | 316,128 | Qwen3.8-27B 解锁版 FP8，社区 abliteration 趋势代表 |
| 5 | [**OBLITERATUS/Qwen3.8-27B-OBLITERATED**](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 1,027 | 805,791 | 多格式（MLX/GGUF/SAFETENSORS）abliterated 分支 |
| 6 | [**JonathanColetti/Qwen3.8-27B-Uncensored-GGUF**](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 921 | 2,143,289 | llama.cpp 兼容版，MTP 多 token 预测保留 |
| 7 | [**HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF**](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 871 | 1,276,092 | 激进的 MTP 解锁变体 |
| 8 | [**orcarouter/Qwen3.8-27B-Uncensored-GGUF**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 659 | 254,529 | GGUF 版本 |
| 9 | [**ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF**](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 176 | 56,208 | 学术界 GSQ/RCO 混合精度量化研究 |
| 10 | [**orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF**](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF) | orcarouter | 194 | 64,325 | Flash-Next 解锁版 |
| 11 | [**orcarouter/GLM-5.3-Flash-Uncensored-FP8**](https://huggingface.co/orcarouter/GLM-5.3-Flash-Uncensored-FP8) | orcarouter | 152 | 2,576 | GLM-5.3-Flash 解锁版 FP8 |
| 12 | [**peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF**](https://huggingface.co/peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF) | peculiar-ragdoll | 194 | 130,086 | 基于 Qwen3.5 MoE（35B-A3B）的代码专项 GGUF，imatrix 校准 |
| 13 | [**Kijai/MiniMax-H3-experimental**](https://huggingface.co/Kijai/MiniMax-H3-experimental) | Kijai | 397 | 0 | 社区对 MiniMax-H3 的实验性封装（ComfyUI 友好） |

---

##  生态信号

**Qwen3.8 系列形成绝对统治**：榜单 30 个模型中，Qwen3.8 相关衍生品占据近 40%（含原生 2 个 + 衍生 10+ 个），且衍生品覆盖 GGUF、FP8、Uncensored、量化研究等多个维度。**Qwen3.8-27B 的周点赞 13,697 与周下载近 500 万**，是当下开源 LLM 生态的"母舰级"基座。

**"Uncensored / Abliterated" 微调已形成稳定亚文化**：orcarouter、OBLITERATUS、HauhauCS、JonathanColetti 等组织围绕 Qwen3.8 系列持续输出对齐绕过版本，且点赞与下载均表现良好（FP8 版本点赞 1,372，下载 31 万+），说明**社区对解除 RLHF 限制的本地部署需求真实存在且规模可观**。

**Unsloth 仍是量化生态的事实中心**：其三个 Qwen/GLM GGUF 版本累计下载接近 **1,000 万**，稳坐本地推理基础设施位。学术界（ISTA-DASLab 的 GSQ/RCO）也开始在前沿模型上试验新型混合精度量化方案，预示 2026 下半年低比特推理仍是热点。

**视频生成两强格局**：MiniMaxAI/MiniMax-H3（480+ 万累计下载）与 Lightricks/LTX-2.5（120+ 万）形成开源视频生成双子星，FastVideo 的 4 步蒸馏与 Kijai 的 ComfyUI 封装进一步丰富工具链——**文生视频赛道进入"模型 + 加速器 + 部署封装"三件套竞争阶段**。

---

## ⭐ 值得探索

1. 🏆 [**MiniMaxAI/MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3)
   当前视频生成领域最具人气的开源模型，下载量已达 550 万级且仍在快速攀升。结合 [FastVideo 的 4 步蒸馏预览版](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree) 和 [Kijai 的 ComfyUI 实验封装](https://huggingface.co/Kijai/MiniMax-H3-experimental) 进行组合测试，可以一站式体验"生成

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*