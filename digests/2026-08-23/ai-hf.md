# Hugging Face 热门模型日报 2026-08-23

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-23 00:56 UTC

---

# 🤗 Hugging Face 热门模型日报
**日期：2026-08-23**

---

## 📌 今日速览

今日 Hugging Face 趋势榜被 **Qwen3.8-27B 生态**牢牢统治——官方原版以 12,135 点赞稳居榜首，Unsloth 的 GGUF 量化包下载量突破 632 万，围绕"去审查 / abliterated / Uncensored"的社区微调已衍生出十余个变体。**Moonshot Kimi-K3**（10,926 赞）和 **DeepSeek-V4-Flash**（3,630 赞）紧随其后形成"国产三强"格局。视频生成侧 **MiniMax-H3**（4,338 赞）与 **Lightricks LTX-2.5**（1,565 赞）持续放量，"Uncensored + 多模态"的组合正在成为社区最活跃的实验方向。

---

## 🧠 语言模型（LLM / 对话模型 / 指令微调）

### [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)
- 作者：**Qwen** ｜ 👍 12,135 ｜ ⬇️ 2,090,699
- 通义千问 Qwen3.8 主力多模态大模型（image-text-to-text），本周榜首，强势定义 27B 级别开源标杆。

### [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)
- 作者：**Moonshot AI** ｜ 👍 10,926 ｜ ⬇️ 2,612,739
- Kimi 系列第三代旗舰，支持 image-text-to-text 与压缩张量，月之暗面重回 Hugging Face 周榜头部。

### [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)
- 作者：**DeepSeek** ｜ 👍 3,630 ｜ ⬇️ 2,976,281
- DeepSeek V4 轻量版本，主打高吞吐与低成本部署，下载量逼近 300 万，闭源 LLM 之外的开源首选。

### [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813)
- 作者：**DeepSeek** ｜ 👍 718 ｜ ⬇️ 54,566
- DeepSeek V4 高阶版本，新发布不久关注度迅速攀升。

### [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)
- 作者：**Qwen** ｜ 👍 1,146 ｜ ⬇️ 17,386
- 2.4T 总参数 / 95B 激活的稀疏 MoE 模型，探索超大规模但低推理成本的混合架构。

### [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B)
- 作者：**ornith-ai** ｜ 👍 320 ｜ ⬇️ 12,611
- 基于 Qwen3.5 MoE 架构的 35B-A3B 文本/多模态模型，小团队的高效架构实验。

### [superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini)
- 作者：**superwhisper** ｜ 👍 202 ｜ ⬇️ 1,913
- 基于 Qwen3 的轻量 ASR 语音识别模型，主打本地化实时转写。

---

## 🎨 多模态与生成（图像 / 视频 / 音频）

### [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)
- 作者：**MiniMaxAI** ｜ 👍 4,338 ｜ ⬇️ 3,899,160
- 文本/图像到视频的扩散生成模型，下载近 400 万，本周多模态视频侧绝对主角。

### [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B)
- 作者：**meta-models** ｜ 👍 1,755 ｜ ⬇️ 517,564
- 30B 级 image-text-to-text 模型，主打长上下文对话与多模态推理。

### [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)
- 作者：**Lightricks** ｜ 👍 1,565 ｜ ⬇️ 694,670
- 集 image-to-video / text-to-video / video-to-video 于一体的开源视频扩散模型，专业创作者工具链。

### [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3)
- 作者：**MiniMaxAI** ｜ 👍 1,182 ｜ ⬇️ 16,644
- 文本到音乐生成模型，搭配 H3 视频模型形成"视频+配乐"的全栈生成套件。

### [TenStrip/10Eros-Max](https://huggingface.co/TenStrip/10Eros-Max)
- 作者：**TenStrip** ｜ 👍 316 ｜ ⬇️ 0
- 基于 MiniMax-H3 的图像/文本到视频社区微调，主打成人向创意视频生成。

### [LBH-123-AI/Minimax_h3_latent_Upscaler](https://huggingface.co/LBH-123-AI/Minimax_h3_latent_Upscaler)
- 作者：**LBH-123-AI** ｜ 👍 159 ｜ ⬇️ 0
- 面向 MiniMax-H3 的潜空间升频器，提升视频生成分辨率与细节。

---

## 🔧 专用模型（代码 / 嵌入 / 加速 / 工具）

### [z-lab/Qwen3.8-27B-DFlash2](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2)
- 作者：**z-lab** ｜ 👍 194 ｜ ⬇️ 29,705
- 基于 Qwen3 的 DFlash2 推测解码（Speculative Decoding）模型，可显著加速推理。

### [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)
- 作者：**froggeric** ｜ 👍 1,397 ｜ ⬇️ 0
- 修复 Qwen3.5 系列 Chat Template 的 Jinja 模板包，解决社区部署中的对话格式问题。

### [superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini)
- 作者：**superwhisper** ｜ 👍 202 ｜ ⬇️ 1,913
- 轻量 ASR 模型（已在语言模型栏目列出，亦可作为专用语音模型参考）。

---

## 📦 微调与量化（社区微调 / GGUF / FP8 / MLX）

### [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)
- 作者：**unsloth** ｜ 👍 2,625 ｜ ⬇️ 6,320,542
- Unsloth 出品的 Qwen3.8-27B GGUF 量化版，下载量全场最高，本地部署首选。

### [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8)
- 作者：**Qwen** ｜ 👍 664 ｜ ⬇️ 2,306,777
- 官方 FP8 精度版本，显存占用减半，适合中端 GPU 部署。

### [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8)
- 作者：**orcarouter** ｜ 👍 990 ｜ ⬇️ 142,846
- 去审查微调 + FP8 量化，热门"Uncensored"系列代表作。

### [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX)
- 作者：**orcarouter** ｜ 👍 886 ｜ ⬇️ 34,909
- 面向 Apple Silicon 的 MLX 版本 Uncensored 模型，Mac 用户友好。

### [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF)
- 作者：**orcarouter** ｜ 👍 336 ｜ ⬇️ 85,371
- Uncensored 系列的 GGUF 版本，跨平台部署选项。

### [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF)
- 作者：**JonathanColetti** ｜ 👍 623 ｜ ⬇️ 1,223,422
- llama.cpp 优化的 Uncensored GGUF 版，下载量过百万，社区口碑极佳。

### [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED)
- 作者：**OBLITERATUS** ｜ 👍 531 ｜ ⬇️ 164,950
- 使用 abliterated 权重移除技术生成的"洗版"Qwen3.8-27B，支持 MLX / Safetensors / GGUF。

### [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)
- 作者：**HauhauCS** ｜ 👍 485 ｜ ⬇️ 486,221
- Aggressive MTP（Multi-Token Prediction）调优 + 多模态视觉支持的 Uncensored GGUF。

### [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF)
- 作者：**huihui-ai** ｜ 👍 254 ｜ ⬇️ 635,416
- Huihui 经典的 abliter

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*