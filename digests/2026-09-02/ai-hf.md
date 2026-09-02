# Hugging Face 热门模型日报 2026-09-02

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-02 02:23 UTC

---

# Hugging Face 热门模型日报 · 2026-09-02

## 📌 今日速览

Qwen3.8 系列今日继续主导榜单，27B 版本以 **13,588 点赞、496 万下载**稳居榜首；新版 Flash-Next 实验模型与 Kimi-K3 紧随其后，引发广泛试用。视频生成领域，**MiniMax-H3** 仍是最受欢迎的多模态视频模型，Lightricks LTX-2.5 与 FastVideo 的少步蒸馏方案也获得显著关注。值得警惕的是，社区出现大量 **Uncensored / Obliterated** 的去审查权重，反映出本地化部署与权重再分发的活跃生态。

---

## 🧠 语言模型（LLM / 对话）

| 模型 | 作者 | 👍 点赞 | ⬇ 下载 | 说明 |
|---|---|---:|---:|---|
| [**Qwen/Qwen3.8-27B**](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 13,588 | 4.96M | 榜单常青树，Qwen3.8 系列的旗舰文本-图像对话模型，社区部署首选 |
| [**moonshotai/Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 11,130 | 2.78M | 月之暗面新一代主力模型，多模态 + 压缩张量支持，国产顶级开放权重 |
| [**Qwen/Qwen3.8-Flash-Next**](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 4,650 | 207K | Qwen3.8 实验性 Flash 版本，主打极速推理的多模态对话 |
| [**zai-org/GLM-5.3-Flash**](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 1,884 | 441K | 智谱 GLM-5.3 轻量级多模态版本，主打对话与图文理解 |
| [**zai-org/GLM-5.3**](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,468 | 94K | 智谱 GLM-5.3 完整版，MoE + DSA 架构的纯文本旗舰 |
| [**tencent/Hy4-preview**](https://huggingface.co/tencent/Hy4-preview) | tencent | 385 | 3.5K | 腾讯混元 Hy4 预览版，企业级文本生成新动作 |
| [**thomsonreuters/Thomson-1.0-Small**](https://huggingface.co/thomsonreuters/Thomson-1.0-Small) | thomsonreuters | 181 | 1.1K | 汤森路透基于 Qwen3.5 MoE 改造的法律/金融领域多模态模型 |
| [**pipecat-ai/phonellm-alpha-1**](https://huggingface.co/pipecat-ai/phonellm-alpha-1) | pipecat-ai | 186 | 6.8K | 基于 Nemotron-H 的电话/语音对话专用 LLM |

---

## 🎨 多模态与生成

| 模型 | 作者 | 👍 点赞 | ⬇ 下载 | 说明 |
|---|---|---:|---:|---|
| [**MiniMaxAI/MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,757 | 5.53M | 当前最火的开源视频生成模型，支持文生视频、图生视频、文图生视频 |
| [**Lightricks/LTX-2.5**](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 2,469 | 1.23M | LTX-Video 2.5，单文件扩散模型，支持多向视频生成任务 |
| [**FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree**](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree) | FastVideo | 236 | 0 | 基于 MiniMax-H3 的 4 步蒸馏实验版本，无数据训练加速方案 |
| [**alibaba-pai/MiniMax-H3-Acc-LoRAs**](https://huggingface.co/alibaba-pai/MiniMax-H3-Acc-LoRAs) | alibaba-pai | 177 | 32K | 阿里 PAI 团队提供的 MiniMax-H3 加速 LoRA 集合 |
| [**Kijai/MiniMax-H3-experimental**](https://huggingface.co/Kijai/MiniMax-H3-experimental) | Kijai | 389 | 0 | 社区 ComfyUI 适配版 MiniMax-H3 实验分支 |
| [**BreezeBlue/Breeze-TTS-2**](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 310 | 3.1K | 全新开源 TTS 模型，专注语音合成的轻量化方案 |
| [**deepseek-ai/DeepSeek-V4-Flash-Vision-Exp**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 451 | 17K | DeepSeek V4 实验性视觉增强版本，文图双输入 |

---

## 🔧 专用模型

| 模型 | 作者 | 👍 点赞 | ⬇ 下载 | 说明 |
|---|---|---:|---:|---|
| [**google/timesfm-3.0-pytorch**](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 223 | 0 | Google TimesFM 3.0 时序预测 PyTorch 版，零样本时间序列预测标杆 |
| [**peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF**](https://huggingface.co/peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF) | peculiar-ragdoll | 183 | 130K | 基于 Qwen3.5 MoE 的 35B-A3B 编码模型，专注代码生成 |
| [**deepseek-ai/DeepSeek-V4-Flash-Vision-Exp**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 451 | 17K | DeepSeek 实验性视觉语言模型（兼具专用视觉模型属性） |

---

## 📦 微调与量化（社区生态）

| 模型 | 作者 | 👍 点赞 | ⬇ 下载 | 说明 |
|---|---|---:|---:|---|
| [**unsloth/Qwen3.8-27B-GGUF**](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,338 | 9.35M | Qwen3.8-27B 的 llama.cpp GGUF 量化版，下载量全场最高 |
| [**unsloth/Qwen3.8-Flash-Next-GGUF**](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 674 | 431K | Flash-Next 的 GGUF 量化版本，本地部署友好 |
| [**unsloth/GLM-5.3-Flash-GGUF**](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF) | unsloth | 326 | 63K | GLM-5.3-Flash GGUF 量化版本 |
| [**Qwen/Qwen3.8-Flash-Next-FP8**](https://huggingface.co/Qwen/Qwen3.8-Flash-Next-FP8) | Qwen | 179 | 130K | 官方 FP8 量化版本，显存占用更低 |
| [**OBLITERATUS/Qwen3.8-27B-OBLITERATED**](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 1,003 | 805K | 去除安全对齐的"解审查"版本，提供 MLX/GGUF/SafeTensors |
| [**HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF**](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 840 | 1.27M | 激进 MTP 调优的 Uncensored 多模态 GGUF 版本 |
| [**JonathanColetti/Qwen3.8-27B-Uncensored-GGUF**](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 892 | 2.14M | llama.cpp 友好的 Uncensored 量化版本 |
| [**orcarouter/Qwen3.8-27B-Uncensored-FP8**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,350 | 316K | FP8 精度的解审查多模态版本 |
| [**orcarouter/Qwen3.8-27B-Uncensored-MLX**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 1,261 | 121K | Apple Silicon MLX 优化的 Uncensored 版本 |
| [**orcarouter/Qwen3.8-27B-Uncensored-GGUF**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 634 | 254K | GGUF 格式的解审查版本 |
| [**orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF**](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF) | orcarouter | 169 | 64K | Flash-Next 的解审查 GGUF 版本 |
| [**orcarouter/GLM-5.3-Flash-Uncensored-FP8**](https://huggingface.co/orcarouter/GLM-5.3-Flash-Uncensored-FP8) | orcarouter | 144 | 2.5K | GLM-5.3-Flash 的解审查 FP8 版本 |
| [**ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF**](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 127 | 56K | GSQ + RCO 混合精度量化研究版本 |

---

## 🌐 生态信号

**Qwen3.8 生态已形成"基础模型 + 多格式分发"完整闭环**：从原始 27B 权重到 FP8、GGUF、MLX，再到各种 Uncensored / Obliterated 衍生品，单一基座模型在榜单中占据约 40% 的席位，反映出**国产开源模型在工程化分发与社区再创作上的统治力**。

**视频生成方面，MiniMax-H3 已成为事实标准**：超过 553 万下载量背后，是阿里 PAI、FastVideo、Kijai 等多个团队的加速 LoRA、蒸馏方案、ComfyUI 适配等围绕其展开的密集工程活动，**形成了类似 Stable Diffusion 时代的"基础模型 + 社区优化"生态结构**。

**值得关注的是"解审查"（Uncensored/Obliterated/Abliterated）浪潮**：orcarouter、OBLITERATUS、HauhauCS 等社区作者批量产出解审查权重，单模型点赞可达 1,000+，说明**本地化部署需求强烈且合规边界模糊**。闭源 vs 开源的二元对立正在被"开源但去对齐"的第三极打破。

---

## ✨ 值得探索

1. [**MiniMaxAI/MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) — 当前最值得投入工程资源的开源视频生成基座，围绕它的蒸馏（FastVideo）、LoRA（阿里 PAI）、格式适配（Kijai）方案最为完整，适合作为研究/产品落地的起点。

2. [**moonshotai/Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3) — 11,130 点赞、278 万下载的国产多模态新标杆，使用 compressed-tensors 格式，是探索**稀疏化/压缩感知推理**前沿技术的理想目标。

3. [**google/timesfm-3.0-pytorch**](https://huggingface.co/google/timesfm-3.0-pytorch) — Google 官方时序预测模型的 PyTorch 复现版本，零样本预测表现优异，适合作为垂直领域（金融、能源、物流）应用的研究底座。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*