# Hugging Face 热门模型日报 2026-08-28

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-28 08:29 UTC

---

# Hugging Face 热门模型日报
**日期：2026-08-28**

---

## 📌 今日速览

今日 Hugging Face 趋势榜被 **Qwen3.8-27B 生态**彻底占据——基础模型加上十余个 GGUF/MLX/FP8/abliterated 变体横扫榜单，反映出该权重发布后社区极快的响应速度与分发热度。视频生成领域 **MiniMax-H3** 持续霸榜（4.85M 下载），配合 LTX-2.5 与相关 LoRA/ControlNet 形成完整工作流生态。语言模型侧则呈现"四强格局"：Qwen、DeepSeek、Kimi、GLM 各自的新版本同时在榜，国产开源 LLM 已成为 Hub 主流。

---

## 🧠 语言模型（LLM / 对话 / 指令微调）

| # | 模型 | 作者 | 👍 | ⬇️ | 亮点 |
|---|------|------|----|----|------|
| 1 | [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 13,073 | 3.46M | 本周综合榜首，27B 旗舰级多模态基座，社区"套娃"源头 |
| 2 | [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 11,046 | 2.83M | 月之暗面最新一代多模态模型，长上下文与推理能力是看点 |
| 3 | [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,772 | 3.96M | DeepSeek V4 Flash 版本，高下载/点赞比说明实用性强 |
| 4 | [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 4,028 | 4.81K | 轻量级实验性多模态分支（qwen4_exp），代表 Qwen 下一代探索方向 |
| 5 | [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 1,388 | 34 | 智谱最新 Flash 版本，文字与图像输入兼备 |
| 6 | [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 470 | 88K | 35B-A3B MoE 架构（基于 qwen3_5_moe），小激活大总参数的代表 |
| 7 | [tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview) | tencent | 138 | 0 | 腾讯混元 4 预览版，文本生成新基线 |
| 8 | [thomsonreuters/Thomson-1.0-Small](https://huggingface.co/thomsonreuters/Thomson-1.0-Small) | thomsonreuters | 135 | 349 | 路透社发布的小型 MoE 法律/金融领域专用模型 |
| 9 | [sensenova/SenseNova-U1.5-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1.5-8B-MoT) | sensenova | 184 | 4.2K | 商汤"任意到任意"原生多模态，Mixture-of-Transformers 架构 |

---

## 🎨 多模态与生成（图像 / 视频 / 音频）

| # | 模型 | 作者 | 👍 | ⬇️ | 亮点 |
|---|------|------|----|----|------|
| 1 | [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,547 | 4.86M | 视频生成绝对主力，diffusers 原生支持，文/图生视频一站式 |
| 2 | [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,945 | 913K | LTX 系列迭代，支持图生视频、文生视频、视频生视频多任务 |
| 3 | [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,277 | 19.7K | 文本生成音乐，延续 H3 系列的扩散式生成范式 |
| 4 | [alibaba-pai/MiniMax-H3-Fun-Controlnet-Union](https://huggingface.co/alibaba-pai/MiniMax-H3-Fun-Controlnet-Union) | alibaba-pai | 149 | 3.3K | H3 的 ControlNet 联合控制扩展，结构化视频生成 |
| 5 | [alibaba-pai/MiniMax-H3-Acc-LoRAs](https://huggingface.co/alibaba-pai/MiniMax-H3-Acc-LoRAs) | alibaba-pai | 121 | 609 | H3 加速 LoRA 集合，推理效率优化 |
| 6 | [BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 136 | 240 | 微风 TTS 第二代，文本转语音 |
| 7 | [Audio8/Audio8-TTS-Preview-0.1b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.1b) | Audio8 | 183 | 4.5K | 极小（0.1B）TTS 预览模型，边缘部署友好 |

---

## 🔧 专用模型（代码 / 数学 / 医疗 / 嵌入等）

> 今日趋势榜中"经典"专用模型（纯代码、数学或医疗）相对缺席，更接近专用化的是基于 MoE 的领域微调与 any-to-any 模型。

| # | 模型 | 作者 | 👍 | ⬇️ | 亮点 |
|---|------|------|----|----|------|
| 1 | [sensenova/SenseNova-U1.5-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1.5-8B-MoT) | sensenova | 184 | 4.2K | MoT 架构下"原生多模态"，可视为统一表征模型 |
| 2 | [thomsonreuters/Thomson-1.0-Small](https://huggingface.co/thomsonreuters/Thomson-1.0-Small) | thomsonreuters | 135 | 349 | 法律/金融领域专用，机构型发布代表 |

---

## 📦 微调与量化（社区微调 / GGUF / AWQ / FP8 / MLX）

> **本类是今日最拥挤的赛道**：Qwen3.8-27B 衍生的社区版本占据 10 余席，体现"基础模型一发布，社区即套娃"的典型生态循环。

| # | 模型 | 作者 | 👍 | ⬇️ | 亮点 |
|---|------|------|----|----|------|
| 1 | [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,093 | 7.76M | unsloth GGUF 量化版，下载量最高，社区分发王者 |
| 2 | [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,505 | 0 | 修复 Qwen3.5 聊天模板的纯工程型仓库，引发广泛共鸣 |
| 3 | [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,213 | 274K | FP8 量化 + 去除审查 |
| 4 | [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 1,173 | 83K | Apple Silicon 友好的 MLX 版本 |
| 5 | [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 861 | 509K | 多格式（MLX/Safetensors/GGUF）"剔除"审查版 |
| 6 | [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 786 | 1.67M | llama.cpp 兼容 GGUF，附带 MTP 加速 |
| 7 | [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 695 | 938K | 激进 MTP（Multi-Token Prediction）优化 GGUF |
| 8 | [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 501 | 188K | 通用 GGUF 卸载审查版 |
| 9 | [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 476 | 4.4K | Flash-Next 的 GGUF 量化版 |
| 10 | [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 409 | 1.36M | huihui-ai 系列"abliterated"GGUF，成熟社区品牌 |
| 11 | [ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 327 | 1.47M | Ornith MoE 的 GGUF 版本 |
| 12 | [unsloth/GLM-5.3-Flash-GGUF](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF) | unsloth | 220 | 0 | GLM-5.3 Flash 的 GGUF 量化版 |
| 13 | [orcarouter/Qwen3.8-27B-Uncensored](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored) | orcarouter | 199 | 18.6K | 原始浮

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*