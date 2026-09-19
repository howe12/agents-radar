# Hugging Face 热门模型日报 2026-09-19

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-19 02:39 UTC

---

# 🤗 Hugging Face 热门模型日报
**日期：2026-09-19**

---

## 一、今日速览

今日 Hub 呈现"**Qwen3.8 系列霸榜 + 视频生成爆发 + 2-bit 量化普及**"三重格局。Qwen 团队发布的 Qwen3.8-27B 以 15,657 周点赞稳居榜首，叠加 Flash-Next 版本与数十个社区微调/量化分支，构成最强开源家族；同时 DeepSeek-V4.1-Flash 与 GLM-5.3-Flash 继续巩固国产基础模型双雄地位。生成侧，LTX-2.5、MiniMaxAI/MiniMax-H3 推动视频模型进入"周级百万下载"量级；量化领域 prism-ml 的 2-bit 三元量化（ternary）首登趋势榜，标志极低比特推理走向实用化。

---

## 二、热门模型分类

### 🧠 语言模型

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|---|---|---|---|---|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 15,657 | 7.36M | 本周榜首，多语言图像-文本双模态旗舰，Qwen3.8 家族基座 |
| [meta-llama/Llama-3.1-8B-Instruct](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct) | meta-llama | 7,719 | 5.93M | 经典 8B 指令模型，长尾热度依旧，是边缘部署的事实标准 |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,404 | 724K | Qwen 下一代轻量多模态预览版，对标 Flash 系列的低延迟路线 |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 3,184 | 430K | DeepSeek V4.1 快速版，图文双模态，主打性价比 |
| [Edge0/Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-A3B-preview) | Edge0 | 3,407 | 52.5K | 35B-A3B 激活 MoE，主打边缘推理（Edge-Inference），MLX 格式 |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,449 | 2.67M | 智谱 GLM-5.3 轻量分支，下载量极高，社区渗透快 |
| [openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 1,561 | 357K | 面壁 2B 端侧小钢炮，Llama 架构兼容性强 |
| [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 1,275 | 29.7K | 讯飞星火 4B 开源版，国产中量级选手 |
| [TokenRhythm/NeoHorse-1-9B](https://huggingface.co/TokenRhythm/NeoHorse-1-9B) | TokenRhythm | 888 | 10.7K | 基于 Qwen3.5 文本底座的 9B Agent 增强模型 |
| [XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B) | XingChen-AGI | 462 | 3.07K | 29B 总参 / 4B 激活 MoE，国产新架构探索 |
| [ukisai/Swift-Qwen3.8-27b](https://huggingface.co/ukisai/Swift-Qwen3.8-27b) | ukisai | 444 | 6.29K | Qwen3.8 社区微调，强调推理速度 |
| [internlm/Atria-Dawn-Preview](https://huggingface.co/internlm/Atria-Dawn-Preview) | internlm | 168 | 711 | InternLM 新一代预览，采用 GLM-MoE-DSA 注意力变体 |

### 🎨 多模态与生成

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|---|---|---|---|---|
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,458 | 4.45M | 视频生成旗舰，图/文/图像-视频全模态，当前最强开源视频基座之一 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 4,340 | 1.59M | LTX-Video 2.5，支持图生视频、文生视频、视频生视频的全能扩散模型 |
| [WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 496 | 218K | 基于 MiniMax-H3 的社区微调，押注视频生成细分支 |
| [m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p | 811 | 13.7K | 3B 音乐生成模型，支持符号规划与 Agentic 编辑，罕见的高赞音频模型 |
| [Comfy-Org/YuE2](https://huggingface.co/Comfy-Org/YuE2) | Comfy-Org | 187 | 102K | YuE2 在 ComfyUI 工作流中的官方分发版 |
| [tencent/AuK](https://huggingface.co/tencent/AuK) | tencent | 306 | 3.18K | 腾讯零样本 TTS + 声音克隆，覆盖多语种 |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 182 | 1.80K | 中科院系 9B 多模态模型，强调空间推理（VLM 能力） |

### 🔧 专用模型

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|---|---|---|---|---|
| [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 6,061 | **255M** | 历史级经典嵌入模型，单周再获 6 千点赞，下载量稳居全站第一 |
| [Agnes-AI/Agnes-3.0-Flash](https://huggingface.co/Agnes-AI/Agnes-3.0-Flash) | Agnes-AI | 226 | 1.36K | 文本生成领域新锐模型 |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 150 | 0 | 强化学习 Agent 模型，提出"System-One" 推理概念 |

### 📦 微调与量化

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|---|---|---|---|---|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,321 | 7.63M | Qwen3.8 官方 GGUF 量化，下载量与原模型持平，社区分发事实标准 |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,342 | 1.08M | GSQ（Grouped Sparse Quantization）+ RCO（Row-Column Optimization）混合精度 |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 947 | 406K | **2-bit 三元量化**，在 27B 模型上首次实现，内存占用极低 |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 906 | 1.20M | 社区长名"实验性"微调，主打 uncensored + Turbo 推理 |
| [prism-ml/Ternary-Bonsai-2-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-mlx-2bit) | prism-ml | 179 | 5.06K | 同系列 MLX 版，面向 Apple Silicon |
| [ukisai/Swift-Qwen3.8-27B-GGUF](https://huggingface.co/ukisai/Swift-Qwen3.8-27B-GGUF) | ukisai | 282 | 100K | Swift 系列 Qwen3.8 GGUF 量化版，主打 efficient-thinking |
| [dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8) | dealignai | 282 | 33.1K | DeepSeek V4.1 Flash 的 FP8 去审查版本 |
| [harshatheg/Qwen-2.5-1B-RLCD](https://huggingface.co/harshatheg/Qwen-2.5-1B-RLCD) | harshatheg | 378 | 0 | 1B RLCD（强化学习约束解码）+ MLX，主打结构化生成 |

---

## 三、生态信号

**Qwen 家族占据绝对主导**：本期 Top30 中 Qwen 系（Qwen3.8-27B、Qwen3.8-Flash-Next、unsloth/ukisai/DavidAU 等微调量化分支、TokenRhythm、harshatheg 等）合计占 12 席以上，单周点赞超过 2.7 万，社区围绕一个底座形成"基座 + Flash + GGUF + Swift + Uncensored"完整生态链。**国产模型**呈现"双超多强"：Qwen 与 DeepSeek 占据榜首，GLM-5.3-Flash、MiniCPM5、InternLM、XingChen、Taichu、Spark、Agnes 等持续供给差异化路线。

**量化技术进入 2-bit 实用阶段**：prism-ml 的 Ternary Bonsai 2-27B 把三元权重（ternary, {-1,0,1}）带入 27B 级别，IST-DASLab 的 GSQ+RCO 混合精度方案也被广泛复制——这意味着 8GB 显存的消费级显卡跑 27B 模型正在成为现实。**MLX 格式**同步升温（Edge0、prism-ml、harshatheg 均采用），Apple Silicon 成为端侧 LLM 推理的重要战场。

**视频生成成新流量中心**：MiniMaxAI/MiniMax-H3 单周 4.45M 下载，LTX-2.5 紧随其后（1.59M），加上 WarmBloodAban 等微调，视频赛道已具备独立生态规模。**音乐/语音**侧则由 m-a-p 的 YuE2 系列（3B 音乐 + ComfyUI 工作流版）和腾讯 AuK 撑起。

---

## 四、值得探索

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 当前最强开源多模态基座，15K+ 周点赞 + 7M 下载的统治级数据说明一切。其衍生的 GGUF、Swift、Uncensored 等十几个分支尚未充分探索，是研究"一个底座如何驱动整个社区生态"的最佳样本。

2. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — 27B 模型在 2-bit 三元量化下的实际表现是 2026 年端侧 AI 的关键问题。如果质量损失可控，意味着 8GB 显存跑顶级模型成为可能；其配套 MLX 版可直接在 MacBook 上验证。

3. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — 4.45M 周下载的视频生成模型，配合 LTX-2.5 与社区微调（如 Singularity），适合作为"视频生成技术现状"的研究基准，对应 diffusers、ComfyUI 等下游生态也值得关注。

---

*报告基于 2026-09-19 Hugging Face Hub 周度趋势榜单生成。*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*