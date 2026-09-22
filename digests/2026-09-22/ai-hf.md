# Hugging Face 热门模型日报 2026-09-22

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-22 02:49 UTC

---

# 🤗 Hugging Face 热门模型日报 · 2026-09-22

---

## 📌 今日速览

今日 Hub 上的热度几乎被 **Qwen3.8 系列**全面统治——原生权重（Qwen3.8-27B、Qwen3.8-Flash-Next）、社区微调（Hemmingway、NeoHorse、Swift-Xing）、以及 GGUF/ternary 量化版本共同占据榜单过半席位。视频生成赛道迎来两位重磅选手：**MiniMaxAI/MiniMax-H3**（5,573 赞、4M 下载）与 **Lightricks/LTX-2.5**（4,675 赞）正面交锋。值得关注的实验性方向：**prism-ml 推出的 Ternary-Bonsai 2-bit 量化**正在挑战"够用即可"的推理极限，而 DeepSeek-V4.1-Flash 继续延续 V4 系列的高性价比路线。

---

## 🔥 热门模型

### 🧠 语言模型（LLM / 对话 / 指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**
  作者：Qwen｜点赞 **15,974**｜下载 **7,153,238**
  今日绝对主角。原生多模态大模型，本周下载量突破 715 万，社区围绕它派生出海量下游版本。

- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)**
  作者：Qwen｜点赞 **5,552**｜下载 **774,778**
  标注为 `qwen4_exp`，是 Qwen 团队向 4 代架构探索的实验性 Flash 版本，主打高效推理。

- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)**
  作者：deepseek-ai｜点赞 **3,536**｜下载 **512,120**
  V4 系列的轻量级 Flash 变体，多模态输入，延续 DeepSeek 一贯的高性价比路线。

- **[openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B)**
  作者：openbmb｜点赞 **1,642**｜下载 **460,533**
  面壁智能新一代 2B 小钢炮，Llama 架构，主打端侧可用的高质量文本生成。

- **[yandex/AliceAI-Foundation-80B-A3B-Base](https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base)**
  作者：yandex｜点赞 **208**｜下载 **676**
  80B 总参 / 3B 激活的 MoE 基础模型，Yandex 首次在 HF 公开的大型权重。

- **[Cactus-Compute/needle3](https://huggingface.co/Cactus-Compute/needle3)**
  作者：Cactus-Compute｜点赞 **168**｜下载 **46,399**
  专注于 on-device 工具调用与函数调用的紧凑模型，定位明确的 agentic 基础设施。

### 🎨 多模态与生成（图像 / 视频 / 音频）

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**
  作者：MiniMaxAI｜点赞 **5,573**｜下载 **4,046,917**
  今日视频生成头牌，支持 text-to-video / image-to-video / video-to-video 一体化生成，下载量已破 400 万。

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**
  作者：Lightricks｜点赞 **4,675**｜下载 **1,626,742**
  资深视频生成系列 LTX 的 2.5 版本，主打高质量 I2V/T2V/V2V 多任务。

- **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)**
  作者：Qwen｜点赞 **1,474**｜下载 **6,523**
  通义系列图像生成模型的 2.1 升级，兼具文生图与图像编辑能力。

- **[m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B)**
  作者：m-a-p｜点赞 **949**｜下载 **18,759**
  文本到音乐的生成模型 2 代版本，强调符号化规划（symbolic-planning）与 agentic 编辑。

- **[WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity)**
  作者：WarmBloodAban｜点赞 **598**｜下载 **268,296**
  基于 MiniMax-H3 的社区微调变体，专注视频生成质量优化。

- **[TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B)**
  作者：TaichuAI｜点赞 **220**｜下载 **5,078**
  中科太初多模态模型，9B 规模，强调空间推理（spatial-reasoning）能力。

- **[netease-youdao/Confucius4-R2T2](https://huggingface.co/netease-youdao/Confucius4-R2T2)**
  作者：netease-youdao｜点赞 **232**｜下载 **1,864**
  网易有道 ASR 新作，基于 Qwen3 ASR 底座，主打 R2T2（Role-to-Text）能力。

### 🔧 专用模型（分类、检索、特殊任务）

- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)**
  作者：convaiinnovations｜点赞 **1,848**｜下载 **0**
  标榜 "system-one、calibrated-decisions" 的文本分类模型，点赞与下载量极端反差——纯展示型项目，关注度高但尚无可用权重。

- **[AlexWortega/openjev](https://huggingface.co/AlexWortega/openjev)**
  作者：AlexWortega｜点赞 **421**｜下载 **0**
  基于 Qwen3.5 的 NLI cross-encoder，用于自然语言推理任务。

- **[harshatheg/Qwen-2.5-1B-RLCD](https://huggingface.co/harshatheg/Qwen-2.5-1B-RLCD)**
  作者：harshatheg｜点赞 **520**｜下载 **0**
  探索并行解码（parallel-decoding）与约束解码（constrained-decoding）的实验性小模型，定位 Apple Silicon 端侧推理。

- **[XiaomiMiMo/MiMo-V2.6-Flash-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL)**
  作者：XiaomiMiMo｜点赞 **193**｜下载 **0**
  小米 MiMo 系列 V2.6 Flash 的 RL 强化训练版，瞄准推理能力提升。

### 📦 微调与量化

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)**
  作者：unsloth｜点赞 **4,475**｜下载 **7,039,006**
  今日下载量之王，unsloth 出品的 Qwen3.8-27B GGUF 量化版本，社区本地部署首选。

- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)**
  作者：prism-ml｜点赞 **1,745**｜下载 **2,227,879**
  极具实验性的 **2-bit ternary（三值）** 量化 GGUF，27B 模型被极致压缩，是观察极端量化可行性的窗口。

- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)**
  作者：ISTA-DASLab｜点赞 **1,539**｜下载 **1,292,471**
  使用 GSQ（Grouped Split Quantization）+ RCO 算法的混合精度量化方案，学术前沿。

- **[prism-ml/Ternary-Bonsai-2-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-mlx-2bit)**
  作者：prism-ml｜点赞 **318**｜下载 **36,744**
  同款 Ternary-Bonsai 的 **MLX** 版本，专为 Apple Silicon 优化。

- **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)**
  作者：ISTA-DASLab｜点赞 **218**｜下载 **53,094**
  将 GSQ-RCO 量化方案扩展到 Flash-Next 版本。

---

## 🌐 生态信号

**Qwen 家族统治力持续扩大**——榜单中超过 12 个模型直接以 Qwen3.5/Qwen3.8 为底座（原生、微调、量化全覆盖），Qwen 团队官方三个模型合计点赞近 2.3 万，单周下载突破 1400 万次，已形成事实上的"开源 LLM 基座"地位。视频生成赛道形成"双寡头"格局：MiniMaxAI/MiniMax-H3 与 Lightricks/LTX-2.5 在点赞与下载上交替领先，社区微调生态（WarmBloodAban）也已跟上。**量化领域出现新前沿**：prism-ml 的 ternary 2-bit 方案虽属实验，但单模型点赞破 1700、下载破 220 万，表明社区对极致压缩与端侧推理存在真实需求；ISTA-DASLab 的 GSQ-RCO 混合精度则代表了更稳妥的学术路线。开源权重依然是绝对主流——前 30 名中仅有零星作品存在"点赞高、下载为 0"的反常现象（如 convaiinnovations/laya、AlexWortega/openjev），多属概念验证阶段。

---

## ⭐ 值得探索

1. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — 三值 2-bit 量化能在 27B 模型上保住多少能力？这是当下最值得做"消融实验"的对象，对端侧部署研究者尤其有价值。

2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — 当前最受欢迎的开源视频生成模型之一，单周 4M+ 下载，社区已有微调版本，可以直接对比其与 LTX-2.5 在 I2V/T2V 任务上的实际表现差异。

3. **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** — 标注 `qwen4_exp`，是 Qwen 团队下一代架构的早期信号，建议关注其后续推理/编码 benchmark 表现，可能预示 Qwen4 路线图。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*