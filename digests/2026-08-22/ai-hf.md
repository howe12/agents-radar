# Hugging Face 热门模型日报 2026-08-22

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-22 00:52 UTC

---

# 📊 Hugging Face 热门模型日报
**日期：2026-08-22 ｜ 样本：本周点赞 Top 30**

---

## 🔥 今日速览

本周 Hugging Face 趋势榜被 **Qwen3.8-27B 生态** 强势霸榜——其官方版本、FP8 量化、GGUF 社区打包及十余种"abliterated/uncensored"微调几乎占据了榜单的一半，体现新一代多模态基座在开源社区的统治力。**DeepSeek-V4** 系列（Pro / Flash）持续走高，**Kimi-K3** 凭借接近 1.1 万周点赞冲入第二梯队。在视频与音频侧，**MiniMax-H3**（图生视频）和 **LTX-2.5** 仍是创作类工作流的首选基座。值得注意的是，"量化 + 去审查"已形成稳定供应链，从 FP8 / NVFP4 到 GGUF 一应俱全，反映出边缘部署与本地推理需求的规模化爆发。

---

## 🧠 语言模型（LLM / 对话 / 指令微调）

| # | 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---|---|---|---|
| 1 | [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 11,962 | 1.72M | 本周榜首，原生支持 image-text-to-text 的多模态稠密 LLM，是当下 27B 量级最强开源基座之一 |
| 26 | [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,913 | 2.45M | Moonshot 新一代旗舰，feature-extraction + compressed-tensors 路线，主打长上下文与多模态融合 |
| 28 | [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,610 | 2.83M | DeepSeek V4 轻量版，主打高吞吐低延迟推理，下载量已破 283 万 |
| 18 | [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,139 | 15.7K | 2.4T 总参 / 95B 激活的巨型稀疏 MoE 文本模型，对标超大规模闭源旗舰 |
| 16 | [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 709 | 49.6K | DeepSeek V4 高质量专业版本，擅长复杂推理与长链任务 |
| 12 | [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 288 | 9.2K | 基于 Qwen3.5 MoE 架构的 35B / 3B 激活小型 MoE，主打性价比 |
| 23 | [superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 190 | 1.1K | Qwen3 衍生的轻量 ASR/语音任务小模型 |

---

## 🎨 多模态与生成（图 / 视频 / 音频）

| # | 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---|---|---|---|
| 11 | [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,294 | 3.61M | 当前最热门开源图生视频/文生视频模型，已成为社区视频创作的事实基座 |
| 21 | [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,738 | 505K | 30B 级多模态对话模型，兼顾视觉理解与生成 |
| 7 | [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,490 | 654K | 支持 image-to-video / video-to-video 的扩散模型，对创作者工作流极其友好 |
| 6 | [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,163 | 15.7K | 文生音乐模型，对标商业音乐生成服务 |
| 20 | [TenStrip/10Eros-Max](https://huggingface.co/TenStrip/10Eros-Max) | TenStrip | 311 | 0 | 基于 MiniMax-H3 的社区微调视频模型，专注特定美学风格 |

---

## 🔧 专用模型（代码 / 推理 / 嵌入 / 加速）

| # | 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---|---|---|---|
| 29 | [z-lab/Qwen3.8-27B-DFlash2](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2) | z-lab | 174 | 21.1K | 基于 Qwen3.8-27B 的 speculative-decoding 加速模型，可显著降低推理延迟 |
| 13 | [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,370 | 0 | 修复 Qwen3.5 官方 chat template 缺陷的 jinja 模板集合，对部署至关重要 |

---

## 📦 微调与量化（社区版 / GGUF / AWQ / FP8 / NVFP4 / MLX）

> Qwen3.8-27B 的"abliterated/uncensored"社区微调已形成完整供应链，覆盖 **FP8、NVFP4、MLX、GGUF** 等所有主流推理后端。

| # | 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---|---|---|---|
| 2 | [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,506 | 5.80M | 本周下载量最高（580 万），Unsloth 出品的 llama.cpp 量化版本，本地部署首选 |
| 10 | [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 660 | 1.94M | 官方 FP8 量化版本，显存友好，部署简单 |
| 25 | [unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 328 | 1.01M | 针对 NVIDIA Blackwell 的 NVFP4 极致量化，体积更小、推理更快 |
| 5 | [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 569 | 1.13M | 移除审查的 GGUF 社区版本，下载量破百万 |
| 3 | [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 819 | 107K | orcarouter 系列去审查 FP8 版本，保留多模态能力 |
| 4 | [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 819 | 18.2K | 同一作者的 MLX（Apple Silicon）适配版本 |
| 8 | [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 440 | 124K | 多格式打包的"OBLITERATED"去审查版本 |
| 9 | [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 422 | 357K | 激进去审查 + MTP（多 token 预测）GGUF 版本 |
| 14 | [empero-ai/Qwen3.8-27B-Ridge-GGUF](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | empero-ai | 237 | 74K | Ridge 系列 llama.cpp 量化打包 |
| 15 | [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 293 | 68.3K | 同一作者 GGUF 版本 |
| 17 | [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 231 | 338K | huihui-ai 老牌去审查系列，社区认可度高 |
| 19 | [ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 206 | 123K | Ornith MoE 的 GGUF 量化版本 |
| 22 | [0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF) | 0bserverx | 212 | 422K | "Heretic" 去审查方法论的 GGUF 实现，下载量极高 |
| 24 | [huihui-ai/Huihui-Qwen3.8-27B-abliterated](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated) | huihui-ai | 229 | 17.5K | huihui-ai 的非量化原版 |
| 27 | [Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF](https://huggingface.co/Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF) | Blackfrost-AI | 201 | 198K | Blackfrost 的去审查 GGUF 打包 |
| 30 | [DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 169 | 155K | 实验性 "GAIN + COLD-FUSION" 训练方法 + MTP 的复合增强版本 |

---

## 🌐 生态信号

**Qwen 3.8 正在复刻"Qwen 2.5 当年的统治时刻"**：27B 稠密版本 + 2.4T-A95B 巨型 MoE 同时在线，覆盖了从消费级到数据中心级全部部署场景，社区围绕它构建了一整套量化与微调供应链。**DeepSeek-V4**（Flash / Pro 双线）和 **Kimi-K3** 的快速攀升显示中国一线实验室已形成"双月一旗舰"的发布节奏，开源权重与闭源 API 的边界进一步模糊。"abliterated / uncensored" 微调从早期亚文化演变为稳定产业现象——本周榜单至少有 12 个相关变体，由 orcarouter、huihui-ai、JonathanColetti、OBLITERATUS 等不同团队各自维护。**量化层面**，FP8 → GGUF → NVFP4 的三级梯度已成熟，Unsloth 仍是最关键的发行枢纽（单条 GGUF 包下载量近 580 万）。值得关注的是，**MiniMaxAI 在视频侧的 H3** 与音乐侧的 Music3 形成了与 Qwen3.8 在语言侧对标的"全栈基座"叙事，标志着头部开源团队正从单点模型向"模型家族"演进。

---

## ⭐ 值得探索

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** —— 27B 规模原生多模态（image-text-to-text），本周点赞与下载双高，是 2026 年下半年开源多模态 LLM 的事实基准，强烈建议作为任何新项目的默认基座进行评估。

2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** —— 当前最热的开源视频生成基座（点赞 4,294、下载 361 万），图生视频、文生视频、图生文生视频一体，且

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*