# Hugging Face 热门模型日报 2026-08-25

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-25 00:54 UTC

---

# 🤗 Hugging Face 热门模型日报

**日期：2026-08-25**

---

## 📌 今日速览

今天 Hugging Face 热度榜几乎被 **Qwen3.8-27B** 生态全面占领——原始权重、FP8、GGUF、MLX、abliterated 等十余种变体霸榜前 30，点赞与下载量级远超其他家族。**deepseek-ai/DeepSeek-V4-Flash-0731** 以 3,681 点赞紧随其后，是非 Qwen 系语言模型中的最大亮点。生成式领域则呈现**视频 / 音频双线齐发**：MiniMax-H3（视频）、LTX-2.5（视频）、MiniMax-Music3（音乐）三个原生多模态模型合计贡献了榜单的视觉焦点位。围绕新发布的 Qwen3.8 还在涌现大量**推测解码（DFlash2）、MTP、Cold-Fusion GAIN** 等推理加速与训练增强实验，社区微调方法论快速迭代。

---

## 🧠 语言模型（LLM / 对话 / 指令）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---:|---:|---|
| [**Qwen/Qwen3.8-27B**](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 12,514 | 2.6M | 本周绝对主角，Qwen3.8 系列旗舰多模态基座，是几乎所有榜单衍生版本的源头 |
| [**deepseek-ai/DeepSeek-V4-Flash-0731**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,681 | 3.3M | DeepSeek 新一代 Flash 轻量档，兼顾对话质量与部署效率，强势打入榜单第二梯队 |
| [**ornith-ai/Ornith-1.5-35B-A3B**](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 397 | 60K | 基于 qwen3_5_moe 架构的 35B-A3B 稀疏 MoE 模型，主打高吞吐文本生成 |
| [**ornith-ai/Ornith-1.5-9B**](https://huggingface.co/ornith-ai/Ornith-1.5-9B) | ornith-ai | 202 | 83K | Ornith 系列的轻量稠密版本，面向单卡 / 边缘部署 |
| [**superwhisper/s1-mini**](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 229 | 3K | 基于 Qwen3 的小尺寸 ASR 模型，主打开源语音识别基线 |

---

## 🎨 多模态与生成（图像 / 视频 / 音频 / TTS）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---:|---:|---|
| [**MiniMaxAI/MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,417 | 4.4M | 文生视频 + 图生视频统一架构，本周下载量第二高，是当前最热门的开源视频模型 |
| [**Lightricks/LTX-2.5**](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,723 | 790K | 支持 image-to-video / text-to-video / video-to-video 多任务扩散模型，单文件即可推理 |
| [**MiniMaxAI/MiniMax-Music3**](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,228 | 18K | 基于 diffusers 的 text-to-music 模型，主打高质量音乐生成 |
| [**LBH-123-AI/Minimax_h3_latent_Upscaler**](https://huggingface.co/LBH-123-AI/Minimax_h3_latent_Upscaler) | LBH-123-AI | 181 | 0 | 围绕 MiniMax-H3 衍生的 latent 空间上采样器，用于提升视频分辨率 |
| [**Audio8/Audio8-TTS-Preview-0.1b**](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.1b) | Audio8 | 145 | 3K | 基于 arktts 架构的 0.1B 参数 TTS 预览版，主打轻量级语音合成 |

---

## 🔧 专用 / 工具型模型

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---:|---:|---|
| [**froggeric/Qwen-Fixed-Chat-Templates**](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,447 | 0 | 修复后的 Qwen 系列 Jinja chat 模板合集，纯工程优化，零下载却有近 1500 点赞 |
| [**z-lab/Qwen3.8-27B-DFlash2**](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2) | z-lab | 214 | 51K | 为 Qwen3.8-27B 定制的 DFlash2 推测解码（draft model），推理加速实验 |
| [**incoai/Qwen3.8-27B-DFlash2**](https://huggingface.co/incoai/Qwen3.8-27B-DFlash2) | incoai | 173 | 85K | 同一 DFlash2 思路的独立复现，体现社区对该推理路径的浓厚兴趣 |
| [**peculiar-ragdoll/Qwen-Sharp-Chat-Templates**](https://huggingface.co/peculiar-ragdoll/Qwen-Sharp-Chat-Templates) | peculiar-ragdoll | 229 | 0 | 另一套针对 Qwen3.5/3.8 的精修 chat template，缓解工具调用与系统提示兼容问题 |

---

## 📦 微调与量化（GGUF / FP8 / MLX / Abliterated）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---:|---:|---|
| [**unsloth/Qwen3.8-27B-GGUF**](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,837 | 7.0M | 官方之外最受欢迎的消费级 GGUF 量化版本，本周下载量第一 |
| [**orcarouter/Qwen3.8-27B-Uncensored-FP8**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,099 | 224K | FP8 精度 Uncensored 微调版本，兼顾显存与“去对齐” |
| [**orcarouter/Qwen3.8-27B-Uncensored-MLX**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 1,028 | 58K | Apple Silicon MLX 专用版本，Mac 本地推理友好 |
| [**Qwen/Qwen3.8-27B-FP8**](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 681 | 3.0M | 官方 FP8 量化版，H100/4090 上显存减半的工业部署首选 |
| [**JonathanColetti/Qwen3.8-27B-Uncensored-GGUF**](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 690 | 1.5M | llama.cpp 生态下的 Uncensored GGUF，下载量级达到 GGUF 头部 |
| [**OBLITERATUS/Qwen3.8-27B-OBLITERATED**](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 695 | 313K | 同时提供 MLX / safetensors / GGUF 三种格式的 abliterated 派生 |
| [**HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF**](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 578 | 762K | 融合 Aggressive MTP 的多 token 预测 + Uncensored 训练 |
| [**orcarouter/Qwen3.8-27B-Uncensored-GGUF**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 423 | 143K | GGUF 版 Uncensored，多发行渠道并行扩散 |
| [**huihui-ai/Huihui-Qwen3.8-27B

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*