# Hugging Face 热门模型日报 2026-10-11

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-11 03:23 UTC

---

# 📊 Hugging Face 热门模型日报
**日期：2026-10-11** ｜ 数据范围：周点赞 TOP 30

---

## 🔥 今日速览

今日榜单被 **Qwen3.8 系列** 全面统治：`Qwen/Qwen3.8-27B` 以 **17,436 点赞、676 万下载** 登顶，而 `Qwen3.8-Flash-Next` 携带 `qwen4_exp` 标签登场，强烈暗示 Qwen 4 架构雏形。视频生成赛道 `Lightricks/LTX-2.5` 单周破 **7,192 点赞**，与 `Qwen-Image-2.1` 共同推动多模态内容创作热度。同时 **DeepSeek-V4.1-Flash**（4,333 点赞）持续走强，**2-bit ternary**（`Ternary-Bonsai-2`）与 **GSQ-RCO 混合精度量化**成为本周末调社区最热话题。

---

## 🧠 语言模型（LLM / 对话 / 指令）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---|---|---|
| **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** | Qwen | 17,436 | 6.77M | 本周榜一，27B 级 Qwen3.8 旗舰，多模态原生基座 |
| **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)** | deepseek-ai | 4,333 | 1.36M | DeepSeek V4.1 的 Flash 轻量版，主打推理性价比 |
| **[Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1)** | Aleph-Alpha | 871 | 10.5k | 欧洲主权 MoE 推理模型，主打合规与德语/英语能力 |
| **[LiquidAI/d1-3B](https://huggingface.co/LiquidAI/d1-3B)** | LiquidAI | 274 | 9.1k | Liquid AI 基于 LFM2-VL 的端侧多模态模型 |
| **[ConwayResearch/Underdog-Saluki-27B-1.0](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0)** | ConwayResearch | 283 | 59.2k | 2-bit 量化 + 工具调用微调，面向资源受限部署 |

---

## 🎨 多模态与生成

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---|---|---|
| **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** | Lightricks | 7,192 | 1.72M | 当前最热门视频生成模型，覆盖文/图生视频与视频编辑 |
| **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)** | convaiinnovations | 5,470 | 42.9k | "System-One" 校准决策分类器，受关注但分类较新颖 |
| **[Cloudflare/clef](https://huggingface.co/Cloudflare/clef)** | Cloudflare | 2,001 | 13.6k | Cloudflare 基于 Qwen3.5 的视觉语言模型，进军端侧 VLM |
| **[Alissonerdx/BFS-Best-Face-Swap](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap)** | Alissonerdx | 1,361 | 248k | 面向 Qwen-Image-2.1 的换脸 LoRA，社区极活跃 |
| **[Cloudflare/clef-flash](https://huggingface.co/Cloudflare/clef-flash)** | Cloudflare | 741 | 20.7k | clef 的轻量 Flash 版本 |
| **[Qwen/Qwen-Image-2.1-Turbo](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo)** | Qwen | 463 | 2.1k | 官方 Turbo 图像生成/编辑版，主打速度 |
| **[canberkkkkkk/ema-lightning](https://huggingface.co/canberkkkkkk/ema-lightning)** | canberkkkkkk | 345 | 15.7k | 土耳其语 TTS，"Lightning" 强调快速合成 |
| **[FrancisRing/Prism](https://huggingface.co/FrancisRing/Prism)** | FrancisRing | 155 | 0 | 新发布：联合视频+音频生成的 DiT 架构，首日上榜 |

---

## 🔧 专用模型（嵌入 / 语音 / 分类）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---|---|---|
| **[google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2)** | google | 1,529 | 45.6k | Google 新一代嵌入模型，多模态 Embedding 方向 |
| **[Cactus-Compute/whistle](https://huggingface.co/Cactus-Compute/whistle)** | Cactus-Compute | 316 | 12.8k | 端侧 ASR，主打 on-device 隐私语音识别 |
| **[jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer)** | jialinyyzz | 976 | 33.7k | 基于 gemma4 的"文本人类化"改写模型 |

---

## 📦 微调与量化（社区 GGUF / AWQ / LoRA）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---|---|---|
| **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** | unsloth | 5,010 | 6.45M | 官方生态最快 GGUF 量化，下载量碾压 |
| **[abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF)** | abenzerps | 3,890 | 2.10M | Qwen-Image-2.1 移除审查版本，ComfyUI 友好 |
| **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** | prism-ml | 2,605 | 4.46M | 2-bit 三值量化标杆，极致压缩大模型 |
| **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** | ISTA-DASLab | 2,122 | 1.48M | GSQ + RCO 混合精度量化，研究价值高 |
| **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-…-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** | DavidAU | 1,641 | 1.96M | 长名典范：多配方融合 + "Heretic" 训练范式 |
| **[unsloth/embeddinggemma-2-GGUF](https://huggingface.co/unsloth/embeddinggemma-2-GGUF)** | unsloth | 237 | 50.6k | 同步发布的 GGUF 版 EmbeddingGemma-2 |
| **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*