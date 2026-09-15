# Hugging Face 热门模型日报 2026-09-15

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-15 02:54 UTC

---

#  Hugging Face 热门模型日报
**日期：2026-09-15**

---

## 一、今日速览

今日 Hugging Face 热门榜呈现 **"Qwen3.8 霸榜 + 视频生成爆发"** 的鲜明格局：阿里 Qwen 系列在 27B 与 Flash 两个量级同时霸榜，并以 1.5 万+ 点赞登顶周榜；MiniMax-H3 与 LTX-2.5 两款视频生成模型紧随其后，AI 视频赛道迎来现象级关注。同时，社区围绕 Qwen3.8 与 DeepSeek-V4.1 的量化、微调、Uncensored 派生版本密集涌现，开源生态的二次创作活跃度极高。

---

## 二、热门模型

###  语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | 点赞 / 下载 |
|------|------|------|
| [**Qwen/Qwen3.8-27B**](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 15,152 / 7,703,400 |
| [**meta-llama/Llama-3.1-8B-Instruct**](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct) | meta-llama | 7,605 / 5,620,539 |
| [**Qwen/Qwen3.8-Flash-Next**](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,230 / 645,881 |
| [**openai-community/gpt2**](https://huggingface.co/openai-community/gpt2) | openai-community | 4,077 / 15,182,177 |
| [**google-bert/bert-base-uncased**](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 3,337 / 46,435,111 |
| [**deepseek-ai/DeepSeek-V4.1-Flash**](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 2,466 / 288,414 |
| [**zai-org/GLM-5.3-Flash**](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,334 / 1,770,038 |
| [**Edge0/Edge0-35B-A3B-preview**](https://huggingface.co/Edge0/Edge0-35B-A3B-preview) | Edge0 | 2,083 / 8,109 |
| [**TokenRhythm/NeoHorse-1-4B**](https://huggingface.co/TokenRhythm/NeoHorse-1-4B) | TokenRhythm | 1,820 / 9,520 |
| [**distilbert/distilbert-base-uncased**](https://huggingface.co/distilbert/distilbert-base-uncased) | distilbert | 1,441 / 7,294,014 |
| [**openbmb/MiniCPM5-2B**](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 1,396 / 206,774 |
| [**XHToken/Spark-X2.5-4B**](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 1,176 / 24,084 |
| [**nex-agi/Nex-N2.5-mini**](https://huggingface.co/nex-agi/Nex-N2.5-mini) | nex-agi | 781 / 4,543 |
| [**nex-agi/Nex-N2.5-Pro**](https://huggingface.co/nex-agi/Nex-N2.5-Pro) | nex-agi | 633 / 30,489 |
| [**Agnes-AI/Agnes-3.0-Flash**](https://huggingface.co/Agnes-AI/Agnes-3.0-Flash) | Agnes-AI | 161 / 736 |

> **一句话点评：** Qwen3.8-27B 凭借接近 16K 周点赞登顶周榜，Flash-Next 是阿里主推的高速多模态版本；DeepSeek-V4.1-Flash、GLM-5.3-Flash、Edge0-35B-A3B 三个 MoE/Flash 变体同时入榜，反映 Flash + MoE 成为 2026 年主流架构。BERT、GPT-2、DistilBERT 等"老兵"仍因教学与生产管线刚需占据高下载量。

---

### 🎨 多模态与生成（图像 / 视频 / 音频 / 文本到 X）

| 模型 | 作者 | 点赞 / 下载 |
|------|------|------|
| [**MiniMaxAI/MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,293 / 4,827,156 |
| [**Lightricks/LTX-2.5**](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 3,876 / 1,559,653 |
| [**openai/clip-vit-base-patch32**](https://huggingface.co/openai/clip-vit-base-patch32) | openai | 1,529 / 21,349,787 |
| [**m-a-p/YuE2-3B**](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p | 478 / 5,186 |
| [**WarmBloodAban/Minimax-h3_Singularity**](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 397 / 141,057 |
| [**tencent/AuK**](https://huggingface.co/tencent/AuK) | tencent | 221 / 1,928 |

> **一句话点评：** 视频生成赛道双雄并立——MiniMax-H3 拿下 5K+ 周点赞与近 500 万次累计下载，LTX-2.5 在 Image/Text/Video-to-Video 全任务上一体化发布；音乐生成新星 **YuE2-3B** 以"符号规划 + Agentic 编辑"差异化定位入榜；Tencent **AuK** 提供零样本 TTS 与语音克隆，是中文语音克隆方向的代表。

---

###  专用模型（嵌入 / 时序 / 语音 / 检索）

| 模型 | 作者 | 点赞 / 下载 |
|------|------|------|
| [**sentence-transformers/all-MiniLM-L6-v2**](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,970 / 252,806,720 |
| [**google/timesfm-3.0-pytorch**](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 790 / 826,017 |
| [**facebook/mms-300m**](https://huggingface.co/facebook/mms-300m) | facebook | 536 / 19,486 |

> **一句话点评：** all-MiniLM-L6-v2 以 **2.5 亿次下载**坐稳"工业界默认嵌入模型"位置；Google **TimesFM-3.0** 是少有的时序基础模型，标志 Google 抢占时序预测赛道；Meta **MMS-300M** 覆盖 1000+ 语种的预训练语音表征。

---

### 📦 微调与量化（社区微调 / GGUF / AWQ / FP8）

| 模型 | 作者 | 点赞 / 下载 |
|------|------|------|
| [**unsloth/Qwen3.8-27B-GGUF**](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,105 / 10,077,938 |
| [**ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF**](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,051 / 819,784 |
| [**DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-...-GGUF**](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 684 / 875,703 |
| [**openbmb/MiniCPM5-2B-GGUF**](https://huggingface.co/openbmb/MiniCPM5-2B-GGUF) | openbmb | 226 / 108,471 |
| [**dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8**](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8) | dealignai | 174 / 3,868 |
| [**ukisai/Swift-Qwen3.8-27b**](https://huggingface.co/ukisai/Swift-Qwen3.8-27b) | ukisai | 159 / 459 |

> **一句话点评：** unsloth 的 Qwen3.8-27B-GGUF 单周斩获 4K+ 点赞、累计下载破千万，是消费级本地部署的事实标准；ISTA-DASLab 引入 **GSQ + RCO 混合精度**新算法，值得关注；DavidAU 的"Heretic / Uncensored / Turbo-Fable"组合微调延续了社区创作潮流；针对 DeepSeek 的 **FP8 Uncensored** 派生则体现了 FP8 量化在 4.1 Flash 上的快速落地。

---

## 三、生态信号

**Qwen 家族一家独大。** 今日榜单中 Qwen/Qwen3.8-27B（15K 点赞）、Qwen3.8-Flash-Next（5.2K）与其四款 GGUF/微调变体合计占据近 1/4 席位，体现出"基础模型 + 社区派生"双轮驱动模式。阿里通过同时发布 27B 旗舰与 Flash-Next 高速版，分别满足云端推理与边缘部署两种需求，巩固开源领导地位。

**开源权重全面胜出。** 30 款模型中仅个别为纯闭源 API 服务，绝大多数提供完整权重与 GGUF/FP8 量化包；榜单结构表明 2026 年开发者仍以**自托管、可微调、可量化**为首要选型标准。

**量化与微调创新加速。** 传统 GGUF/AWQ 之外，ISTA-DASLab 的 **GSQ-RCO 混合精度** 与 Unsloth 的高效 GGUF 流水线标志着量化技术进入"算法 + 工具链"双创新阶段；同时 DeepSeek-V4.1-Flash 的 FP8 Uncensored 派生、Qwen3.8 的 Heretic / Turbo-Fable / Swift 等垂直微调，反映出"一个底座、N 种人格"成为社区微调主流范式。

**视频与音频生成赛道崛起。** MiniMax-H3 与 LTX-2.5 合计贡献近 9K 周点赞，叠加社区 fork（Minimax-h3_Singularity）和 YuE2-3B 音乐生成模型入榜，多模态生成正式从"图像时代"迈入"视频/音频原生时代"。

---

## 四、值得探索

1. 🏆 **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*