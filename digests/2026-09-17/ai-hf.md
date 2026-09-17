# Hugging Face 热门模型日报 2026-09-17

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-17 02:54 UTC

---

# Hugging Face 热门模型日报
**日期：2026-09-17**

---

## 📰 今日速览

今日 Hugging Face 热门榜单呈现出 **Qwen3.8 系列一家独大** 的格局——基础模型 `Qwen3.8-27B` 以 15,411 周点赞稳居榜首，并衍生出 5+ 个 GGUF/微调/量化变体。多模态视频生成赛道持续火热，`MiniMax-H3` 与 `LTX-2.5` 双双突破 4000 点赞。`Edge0-35B-A3B-preview` 等 MoE 架构在边缘推理场景下崭露头角。值得注意的是，**GSQ/RCO 等新型混合精度量化技术**开始进入主流社区视野（ISTA-DASLab 上榜）。

---

##  语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---|---|---|
| [**Qwen3.8-27B**](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 15,411 | 7.67M | 本周当之无愧的"模型之王"，原生支持图文多模态，下载量已逼近 800 万 |
| [**Llama-3.1-8B-Instruct**](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct) | meta-llama | 7,659 | 5.86M | 经典 8B 指令微调标杆，工业部署首选基座 |
| [**Qwen3.8-Flash-Next**](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,314 | 689K | Qwen 系列的"极速版"，主打低延迟推理 |
| [**Edge0-35B-A3B-preview**](https://huggingface.co/Edge0/Edge0-35B-A3B-preview) | Edge0 | 3,120 | 27.8K | 35B 参数量仅激活 3B 的 MoE，专为边缘设备优化 |
| [**DeepSeek-V4.1-Flash**](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 2,867 | 366K | DeepSeek 新一代轻量级 Flash 版本，多模态输入 |
| [**MiniCPM5-2B**](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 1,507 | 324K | 面壁智能小钢炮，2B 级别本地部署利器 |
| [**NeoHorse-1-4B**](https://huggingface.co/TokenRhythm/NeoHorse-1-4B) | TokenRhythm | 2,121 | 16.2K | 4B 小模型，强调 Agentic 能力 |
| [**GLM-5.3-Flash**](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,394 | 2.24M | 智谱新一代 Flash 模型，多模态对话 |
| [**Spark-X2.5-4B**](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 1,235 | 27.2K | 4B 体量 LLM，主打通用任务 |
| [**Nex-N2.5-mini**](https://huggingface.co/nex-agi/Nex-N2.5-mini) | nex-agi | 820 | 6.8K | Qwen3.5 MoE 架构的 mini 版，试探小尺寸 MoE 路线 |
| [**Agnes-3.0-Flash**](https://huggingface.co/Agnes-AI/Agnes-3.0-Flash) | Agnes-AI | 199 | 1.1K | 新晋小模型，下载量低但有探索价值 |

---

## 🎨 多模态与生成（图像 / 视频 / 音频）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---|---|---|
| [**MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,381 | 4.69M | 文本/图像到视频生成，当前视频赛道的现象级模型 |
| [**LTX-2.5**](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 4,119 | 1.62M | 支持 image-to-video、video-to-video 的全流程视频扩散模型 |
| [**YuE2-3B**](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p | 648 | 9.4K | 3B 参数的端到端音乐生成模型，支持符号规划与 Agentic 编辑 |
| [**mms-300m**](https://huggingface.co/facebook/mms-300m) | facebook | 554 | 22.1K | Meta 多语言语音预训练基座，覆盖 1000+ 语言 |
| [**Minimax-h3_Singularity**](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 452 | 164K | 基于 MiniMax-H3 的社区衍生视频生成变体 |
| [**AuK**](https://huggingface.co/tencent/AuK) | tencent | 272 | 2.8K | 腾讯零样本 TTS，支持语音克隆 |
| [**Comfy-Org/YuE2**](https://huggingface.co/Comfy-Org/YuE2) | Comfy-Org | 152 | 59.2K | YuE2 的 ComfyUI 友好型分发版 |

---

## 🔧 专用模型（嵌入 / 分类 / 经典基座）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---|---|---|
| [**all-MiniLM-L6-v2**](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 6,024 | 256M | 史上下载量最高的句向量模型之一，RAG 与检索标配 |
| [**gpt2**](https://huggingface.co/openai-community/gpt2) | openai-community | 4,119 | 15.6M | 教科书级生成模型，至今仍是入门首选 |
| [**bert-base-uncased**](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 3,354 | 47.7M | NLP 经典基座，工业界填槽任务的事实标准 |
| [**clip-vit-base-patch32**](https://huggingface.co/openai/clip-vit-base-patch32) | openai | 1,547 | 21.8M | 跨模态检索与零样本分类的祖师爷 |
| [**distilbert-base-uncased**](https://huggingface.co/distilbert/distilbert-base-uncased) | distilbert | 1,459 | 7.41M | BERT 的蒸馏版，低资源部署的常青树 |

---

## 📦 微调与量化（社区 GGUF / 量化 / 去审查）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---|---|---|
| [**Qwen3.8-27B-GGUF**](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,224 | 8.86M | Unsloth 的 GGUF 量化分发，几乎成 Qwen3.8 默认本地格式 |
| [**Qwen3.8-27B-GSQ-RCO-GGUF**](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,196 | 957K | 引入 **GSQ（分组平方量化）+ RCO** 的混合精度新方案 |
| [**Qwen3.8-27B-TURBO-Fable-...-GGUF**](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 798 | 1.05M | 长名号"缝合怪"——多微调 + 去审查 + MTP 预测 |
| [**Swift-Qwen3.8-27b**](https://huggingface.co/ukisai/Swift-Qwen3.8-27b) | ukisai | 334 | 2.8K | 强调"快速思维"切换的微调版 |
| [**DeepSeek-V4.1-Flash-UNCENSORED-FP8**](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8) | dealignai | 232 | 6.8K | DeepSeek 的 FP8 去审查变体 |
| [**Swift-Qwen3.8-27B-GGUF**](https://huggingface.co/ukisai/Swift-Qwen3.8-27B-GGUF) | ukisai | 188 | 55.3K | 上述微调的 GGUF 量化版，主打 llama.cpp 高效推理 |

---

## 📡 生态信号

- **Qwen3.8 正在重演"Llama 时刻"**：原模型 + Unsloth GGUF + ISTA-DASLab 实验量化 + DavidAU 去审查 + ukisai 微调，构成了一个完整生态飞轮，单一基座贡献了榜单近 20% 席位。
- **MoE 走向边缘**：Edge0-35B-A3B-preview（仅激活 3B）和 Nex-N2.5-mini 表明，"大参数低激活"正成为端侧部署的新范式。
- **视频生成双雄格局**：MiniMax-H3 与 LTX-2.5 几乎包揽视频类热度，预示 2026 下半年 video-to-video 与可控生成将成为竞争焦点。
- **量化技术多元化**：除传统 GGUF/AWQ 外，ISTA-DASLab 提出的 **GSQ + RCO 混合精度**值得跟踪，可能代表下一阶段量化研究方向。
- **经典模型长青**：gpt2、BERT、CLIP、DistilBERT、all-MiniLM 仍稳居榜单，说明生产环境对稳定基座的需求并未被新模型完全替代。

---

##  值得探索

1. [**Qwen3.8-27B-GSQ-RCO-GGUF**](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) — ISTA-DASLab 提出的 GSQ/RCO 混合精度量化是榜单上少见的研究型产物，对关注高效推理与量化极限的研究者极具参考价值。

2. [**Edge0-35B-A3B-preview**](https://huggingface.co/Edge0/Edge0-35B-A3B-preview) — 仅激活 3B 参数即在边缘设备上跑出 35B 级别表现，是 MoE 在端侧落地的代表性实验，值得配合 MLX 框架进行本地实测。

3. [**MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) — 当前视频生成赛道的标杆，4.69M 下载量与 Diffusers 生态完整集成，是研究/产品验证 text-to-video 的首选起点。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*