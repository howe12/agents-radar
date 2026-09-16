# Hugging Face 热门模型日报 2026-09-16

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-16 02:50 UTC

---

# 📊 Hugging Face 热门模型日报
**日期：2026-09-16**

---

## 1. 今日速览

今日榜单呈现**"Qwen3.8 系列霸榜"**的格局：阿里通义千问的 Qwen3.8-27B 及其 GGUF 量化版本合计占据点赞前三中的两席，单周获赞超 1.9 万。视频生成领域持续升温，**MiniMaxAI/Minimax-H3** 与 **Lightricks/LTX-2.5** 同步登顶，社区衍生 ComfyUI/LoRA 生态快速扩张。值得注意的是，本周榜单首次出现 "minimax-h3" 这类神秘命名模型，引发开发者社区热议；DeepSeek-V4.1-Flash 与 zai-org/GLM-5.3-Flash 紧随其后，构成中国系开源大模型的强势矩阵。

---

## 2. 热门模型

### 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---|---|---|
| [meta-llama/Llama-3.1-8B-Instruct](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct) | meta-llama | 7,638 | 5.71M | 经典开源指令微调 8B 模型，长尾下载量惊人 |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 15,281 | 7.70M | **本周冠军**，原生多模态 MoE，主流通用底座 |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,276 | 0.67M | 轻量"Flash"变体，定位低延迟推理 |
| [Edge0/Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-A3B-preview) | Edge0 | 2,821 | 17.8K | 35B-A3B MoE 预览版，主打边缘推理 |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 2,710 | 0.33M | DeepSeek V4 Flash，主打高性价比 |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,371 | 1.99M | 智谱 GLM-5.3 轻量级，对话性能强 |
| [TokenRhythm/NeoHorse-1-4B](https://huggingface.co/TokenRhythm/NeoHorse-1-4B) | TokenRhythm | 2,057 | 11.9K | 4B agentic 小模型，押注智能体方向 |
| [openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 1,464 | 0.27M | 面壁 MiniCPM 第五代，端侧友好 |
| [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 1,209 | 25.7K | 讯飞星火 2.5 开源线，4B 尺寸 |
| [nex-agi/Nex-N2.5-Pro](https://huggingface.co/nex-agi/Nex-N2.5-Pro) / [mini](https://huggingface.co/nex-agi/Nex-N2.5-mini) | nex-agi | 652/810 | 31K/5K | Pro+Mini 双规格，基于 Qwen3.5 MoE |
| [Agnes-AI/Agnes-3.0-Flash](https://huggingface.co/Agnes-AI/Agnes-3.0-Flash) | Agnes-AI | 183 | 0.9K | 新晋小厂 Flash 模型 |
| [openai-community/gpt2](https://huggingface.co/openai-community/gpt2) | openai-community | 4,106 | 15.3M | "古典之神"，教学与基线常青树 |

### 🎨 多模态与生成（图像 / 视频 / 音频 / 文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---|---|---|
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,351 | 4.91M | 命名"minimax-h3"的神秘视频模型，扩散式图生视频 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 4,006 | 1.58M | LTX-Video 升级版，支持图/文/视频到视频 |
| [m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p | 574 | 6.7K | 音乐生成新星，强调符号化规划与 agentic 编辑 |
| [WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 431 | 0.15M | 基于 minimax-h3 的社区再发布版本 |
| [ukisai/Swift-Qwen3.8-27b](https://huggingface.co/ukisai/Swift-Qwen3.8-27b) | ukisai | 271 | 1.4K | Qwen3.8 社区微调分支，扩展多模态 |
| [tencent/AuK](https://huggingface.co/tencent/AuK) | tencent | 259 | 2.4K | 腾讯零样本 TTS，支持声音克隆 |

### 🔧 专用模型（代码 / 数学 / 嵌入 / 时序）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---|---|---|
| [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 6,003 | 254M | **下载量之王**，嵌入式检索事实标准 |
| [google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 3,351 | 46.7M | 经典 fill-mask 基座 |
| [openai/clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32) | openai | 1,543 | 21.5M | 零样本图像分类常青树 |
| [distilbert/distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased) | distilbert | 1,455 | 7.31M | 轻量化 BERT 蒸馏版 |
| [google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 815 | 0.87M | Google 时序基础模型 3.0 |
| [facebook/mms-300m](https://huggingface.co/facebook/mms-300m) | facebook | 550 | 22.2K | 多语种语音预训练底座 |

### 📦 微调与量化（社区微调 / GGUF / FP8 / AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---|---|---|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,166 | 9.46M | **GGUF 之王**，Qwen3.8 消费级部署首选 |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,143 | 0.88M | 实验性 GSQ+RCO 混合精度量化 |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 749 | 0.95M | "Heretic" 去审查多配方融合微调 |
| [dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8) | dealignai | 212 | 5.8K | DeepSeek V4.1 Flash 的 FP8 去审查变体 |
| [Alissonerdx/Minimax-H3-ComfyUI](https://huggingface.co/Alissonerdx/Minimax-H3-ComfyUI) | Alissonerdx | 190 | 14.5K | minimax-h3 的 ComfyUI LoRA 适配器 |

---

## 3. 生态信号

本周榜单显示，**"Qwen 宇宙"**已实质性接管 Hugging Face：Qwen3.8-27B 原生版与 unsloth GGUF 版双双破 4K 点赞，叠加多个社区微调分支（DavidAU、ukisai、ISTA-DASLab），形成"底座 + 量化 + 垂直微调"的三层生态。**中国系模型**（Qwen、DeepSeek、GLM、MiniCPM、YuE、Spark、AUK）合计占据榜单近一半席位，开源权重发布节奏明显快于西方阵营。**视频生成**是另一条主线——MiniMaxAI 的 "minimax-h3" 与 Lightricks LTX-2.5 共同催生 ComfyUI/LoRA 衍生模型，标志视频模型进入"底座开源 + 社区微调"的可复用阶段。量化层面，**GGUF 仍是绝对主流**（约 950 万下载量级），FP8 与新型 GSQ/RCO 混合精度开始试水，预示 4-bit 以下的极致压缩实验正在前沿机构落地。

---

## 4. 值得探索

1. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — 命名神秘但下载量逼近 500 万，扩散式图生视频能力值得实测；可结合 [Alissonerdx/Minimax-H3-ComfyUI](https://huggingface.co/Alissonerdx/Minimax-H3-ComfyUI) 在本地 ComfyUI 流程中快速验证。

2. **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — 单周 4,166 点赞 + 9.46M 下载，是当前消费级硬件（Mac/单卡 4090）部署 27B 多模态模型最成熟的入口，建议配合 llama.cpp 实测量化质量。

3. **[m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B)** — 罕见的 **"符号化规划 + agentic 编辑"** 音乐生成模型，将 LLM 范式迁移到音频领域，对关注生成式音乐可控性的研究者具有方向性参考价值。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*