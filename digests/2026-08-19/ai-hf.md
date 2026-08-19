# Hugging Face 热门模型日报 2026-08-19

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-19 00:52 UTC

---

# 🤗 Hugging Face 热门模型日报
**日期：2026-08-19**

---

## 📰 今日速览

本周 Hugging Face 趋势榜被 **Qwen3.8-27B** 及其社区衍生版本强势刷榜，原生版本以 11,130 周点赞领跑全平台，配合 unsloth 的 GGUF / NVFP4 量化版本构成庞大衍生生态。**Kimi-K3**（10,826 点赞）与 **MiniMax-H3** 视频生成模型（4,143 点赞）紧随其后，形成多模态视觉生成与长上下文对话的双高峰。MiniMax-H3 在 ComfyUI 的封装版本累计下载已突破 **1460 万次**，Comfy-Org 生态正在成为视频生成模型的事实分发渠道。

---

## 🧠 语言模型（LLM / 对话 / 指令微调）

| # | 模型 | 作者 | 点赞 | 下载 | 一句话点评 |
|---|---|---|---|---|---|
| 1 | [**Qwen/Qwen3.8-27B**](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 11,130 | 665,513 | 本周冠军，通往原生 27B 多模态部署的事实标准，FP8/GGUF 全格式覆盖，社区衍生数十个变体。 |
| 17 | [**moonshotai/Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,826 | 2,226,898 | Moonshot 第三代旗舰，沿袭长上下文与"压缩张量"能力，下载量已达 220 万，是 Qwen 最有力的挑战者。 |
| 12 | [**deepseek-ai/DeepSeek-V4-Flash-0731**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,527 | 2,123,462 | V4 系列的轻量高速版本，主打低延迟推理场景，下载量也突破 200 万，社区部署首选。 |
| 3 | [**Qwen/Qwen3.8-2.4T-A95B**](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,066 | 11,212 | 罕见的 **2.4T 总参数 / 95B 激活** MoE 文本模型，对标超大规模稀疏架构研究价值的样本。 |
| 6 | [**deepseek-ai/DeepSeek-V4-Pro-0813**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 601 | 30,985 | V4 系列的"Pro"高规格版本，定位高质量推理，与 Flash 形成完整层级。 |
| 30 | [**inclusionAI/Ling-3.0-tiny**](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 319 | 9,990 | 蚂蚁集团 Bailing 混合架构小型版本，主打极致推理效率与中文友好型轻量部署。 |

---

## 🎨 多模态与生成（图像 / 视频 / 音频 / 文本到 X）

| # | 模型 | 作者 | 点赞 | 下载 | 一句话点评 |
|---|---|---|---|---|---|
| 9 | [**MiniMaxAI/MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,143 | 2,855,539 | 本周视频生成赛道王炸，支持 text-to-video / image-to-video / reference-to-video，是 LTX-2.5 的最强对手。 |
| 8 | [**meta-models/Muse-Glimmer-30B**](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,682 | 384,097 | Meta 风格的多模态对话模型，30B 体量主打"图文理解 + 对话"均衡。 |
| 5 | [**Lightricks/LTX-2.5**](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,223 | 503,632 | 老牌开源视频生成框架 LTX 系列升级版，覆盖 t2v / i2v / v2v 全场景。 |
| 4 | [**MiniMaxAI/MiniMax-Music3**](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 958 | 11,745 | 文本生成音乐/音频模型，Diffusers 生态加持，是本周音乐生成赛道的独苗。 |
| 15 | [**lightx2v/Minimax-h3-Turbo**](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 608 | 300,279 | 基于 MiniMax-H3 的加速蒸馏版本，主打"Turbo"实时或近实时视频生成。 |
| 16 | [**Gazingstars123/Anima-2.9B**](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 248 | 24,893 | 社区小型文生图模型，主打 ComfyUI 单文件易用性与审美风格化。 |
| 28 | [**TenStrip/10Eros-Max**](https://huggingface.co/TenStrip/10Eros-Max) | TenStrip | 265 | 0 | 基于 MiniMax-H3 的社区风格化微调，典型"作品型"二次衍生。 |
| 27 | [**LiquidAI/LFM2.5-VL-3B**](https://huggingface.co/LiquidAI/LFM2.5-VL-3B) | LiquidAI | 173 | 9,101 | 仅有 3B 参数的轻量视觉语言模型，关注边缘/移动端部署场景。 |

---

## 🔧 专用模型（代码 / 数学 / 嵌入 / 工具）

| # | 模型 | 作者 | 点赞 | 下载 | 一句话点评 |
|---|---|---|---|---|---|
| 20 | [**froggeric/Qwen-Fixed-Chat-Templates**](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,255 | 0 | 看似"小工具"却有千赞，专门修复 Qwen3.5 系列的 Chat Template 缺陷，是 Qwen 生态里典型的"补丁型"高价值工件。 |
| 18 | [**dots-studio/dots3-note-prev**](https://huggingface.co/dots-studio/dots3-note-prev) | dots-studio | 220 | 1,120 | Dots 家族的笔记/摘要专用模型预览版，主打结构化笔记生成。 |
| 7 | [**Qwen/Qwen3.8-27B-FP8**](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) *（多模态旗舰的 FP8 推理版）* | Qwen | 563 | 741,011 | 虽属 LLM 也支持图像输入，是榜单里常被忽略的高下载"主力选手"。 |

---

## 📦 微调与量化（GGUF / FP8 / MLX / 社区衍生）

| # | 模型 | 作者 | 点赞 | 下载 | 一句话点评 |
|---|---|---|---|---|---|
| 23 | [**Comfy-Org/MiniMax-H3**](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,426 | **14,641,908** | 单文件 ComfyUI 封装版，**全榜下载量第一**，堪称当前 AI 视频生成的事实分发渠道。 |
| 24 | [**Comfy-Org/MiniMax-Music-3**](https://huggingface.co/Comfy-Org/MiniMax-Music-3) | Comfy-Org | 178 | 285,444 | H3 的姐妹模型 Music-3 同样被 Comfy-Org 封装为单文件节奏。 |
| 21 | [**DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-…GGUF**](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,141 | 3,020,528 | "DavidAU 命名法"史诗级长名 GGUF，"Heretic 风格"角色扮演社区的集大成之作，下载量已破 300 万。 |
| 2 | [**unsloth/Qwen3.8-27B-GGUF**](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 1,818 | 3,561,466 | unsloth 牌 Qwen3.8-27B 的 GGUF 版本，**原生 llama.cpp 部署的最佳起点**。 |
| 10 | [**orcarouter/Qwen3.8-27B-Uncensored-FP8**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 528 | 45,465 | "Uncensored"系列 FP8 版，主打去除安全对齐约束，便于研究/创作。 |
| 29 | [**unsloth/Muse-Glimmer-30B-GGUF**](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 481 | 787,276 | Muse-Glimmer-30B 的 GGUF 量化版，是 Meta 风格多模态模型轻量化的关键中间件。 |
| 11 | [**JonathanColetti/Qwen3.8-27B-Uncensored-GGUF**](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 410 | 558,767 | Uncensored 系列的 GGUF 切线，叠加 MTP（Multi-Token Prediction）能力。 |
| 25 | [**nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4**](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 322 | 269,372 | NVIDIA 官方 Nemotron-Hybrid 30B / A3B 激活 + **NVFP4 量化**，Blackwell 硬件上的极致推理优化。 |
| 14 | [**orcarouter/Qwen3.8-27B-Uncensored-MLX**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 269 | 0 | Apple Silicon MLX 框架版本，Uncensored 跨平台矩阵的最后一块拼图。 |
| 13 | [**unsloth/Qwen3.8-27B-NVFP4**](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 262 | 523,919 | unsloth 出品的 NVFP4 低精度量化版，配合 NVIDIA Blackwell 可达成极致吞吐。 |
| 22 | [**HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF**](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 201 | 27,745 | "Aggressive" 风格化微调，强调攻击性人格与多 Token 预测加速。 |
| 26 | [**empero-ai/Qwen3.8-27B-Ridge-GGUF**](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | empero-ai | 172 | 12,854 | 社区较新的 GGUF 切线，提供差异化角色/指令调优。 |

---

## 📡 生态信号

Qwen 家族正处于"全栈霸权"状态：原生版 Qwen3.8-27B 拿下 11k+ 周点赞，叠加 GGUF / FP8 / NVFP4 / MLX / 多家 Uncensored 衍生，**一个基模型在 30 个热门位次中占据 10+ 席位**，社区已围绕其建立完整工具链。**Moonshot 的 Kimi-K3** 是榜单上唯一能与 Qwen 旗舰正面对位的中国系 LLM，10k+ 点赞显示多极格局正在形成。**DeepSeek V4 系列**通过 Pro + Flash 双线抢占推理与吞吐场景，但热度略逊于 Qwen。视频生成侧，**MiniMax-H3 的成功同时带动了原生版（4,143 赞）与 Comfy-Org 单文件版（14.6M 下载）**，证明 ComfyUI 封装已成为开源视频模型触达最终用户的关键节点。最后，社区 "**Uncensored / abliterated**" 类微调仍然活跃（榜单 5+ 条相关条目），但更多的兴奋点正向 **NVFP4 + Blackwell 硬件** 这类新一代低精度量化迁移。

---

## ✨ 值得探索

1. [**Qwen/Qwen3.8-2.4T-A95B**](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) — **2.4T 总参 / 95B 激活**的超大 MoE 是研究稀疏专家路由成本与推理优化难得的"开放样本"，对架构研究者极具价值。
2. [**MiniMaxAI/MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) — 当前最热视频生成基座，结合 [lightx2v 的

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*