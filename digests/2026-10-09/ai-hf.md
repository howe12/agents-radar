# Hugging Face 热门模型日报 2026-10-09

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-09 04:04 UTC

---

# Hugging Face 热门模型日报
**日期：2026-10-09**

---

## 📌 今日速览

Qwen3.8 系列全面统治本周趋势榜，主干模型（27B / Flash-Next）与衍生 GGUF 量化变体同时霸榜。视频生成侧 **Lightricks/LTX-2.5** 以 6,957 周点赞登顶，反映扩散视频模型社区关注度持续走高。量化生态异常活跃：ISTA-DASLab 的 **GSQ-RCO 混合精度量化**与 prism-ml 的 **2-bit ternary** 方案双双获得百万级下载；社区 Uncensored / Abliterated 微调数量激增，"去对齐"变体已成 Qwen3.8 的标配派生线。

---

## 🔥 热门模型

### 🧠 语言模型

**1. DeepSeek-V4.1-Flash** — [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)
- 作者：deepseek-ai｜点赞 4,263｜下载 1,282,524
- DeepSeek 最新的 Flash 系列，主打轻量高效的多模态文本生成，是 DeepSeek-V4 系列生态的核心分发入口。

**2. Kolibri-1** — [Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1)
- 作者：Aleph-Alpha｜点赞 816｜下载 6,777
- Aleph-Alpha 推出的 MoE 架构推理模型，专为长链思维与结构化推理设计，欧洲阵营的旗舰开源推理模型。

**3. d1-3B** — [LiquidAI/d1-3B](https://huggingface.co/LiquidAI/d1-3B)
- 作者：LiquidAI｜点赞 198｜下载 5,370
- LiquidAI 推出的 3B 级别紧凑多模态模型，基于 LFM2-VL 架构，主打端侧部署场景。

---

### 🎨 多模态与生成

**4. LTX-2.5** — [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)
- 作者：Lightricks｜点赞 6,957｜下载 1,688,807
- 本周点赞冠军。支持 image-to-video、text-to-video、video-to-video、image-text-to-video 四合一的全功能视频扩散模型。

**5. Qwen3.8-27B** — [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)
- 作者：Qwen｜点赞 17,295｜下载 6,841,660
- 榜单绝对头部。Qwen3.5 架构的 27B 多模态对话模型，是当前开源生态最受欢迎的中尺寸基座。

**6. Qwen3.8-Flash-Next** — [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)
- 作者：Qwen｜点赞 6,045｜下载 1,640,938
- Qwen3.8 实验性"Next"版本，主打极速推理，是 Flash 系列的下一代旗舰。

**7. Cloudflare clef / clef-flash** — [Cloudflare/clef](https://huggingface.co/Cloudflare/clef) · [Cloudflare/clef-flash](https://huggingface.co/Cloudflare/clef-flash)
- 作者：Cloudflare｜点赞 1,897 / 695｜下载 10,874 / 17,587
- Cloudflare 推出的视觉语言模型，基于 Qwen3.5 架构，定位为 Workers AI 平台的多模态推理服务底座。

**8. Qwen-Image-2.1** — [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)
- 作者：Qwen｜点赞 3,129｜下载 116,957
- 通义实验室新一代文生图与图像编辑模型，支持生成 + 编辑一体化。

**9. JEV-27B-VL** — [autotrust/JEV-27B-VL](https://huggingface.co/autotrust/JEV-27B-VL)
- 作者：autotrust｜点赞 3,011｜下载 1,533,034
- 基于 Qwen3.5 的视觉语言模型，autotrust 团队自研的"Joint Embedding-Vision"多模态方案。

**10. BFS-Best-Face-Swap** — [Alissonerdx/BFS-Best-Face-Swap](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap)
- 作者：Alissonerdx｜点赞 1,322｜下载 243,910
- 基于 Qwen-Image-2.1 的 LoRA 人脸替换方案，社区图像编辑赛道热点。

**11. ema-lightning** — [canberkkkkkk/ema-lightning](https://huggingface.co/canberkkkkkk/ema-lightning)
- 作者：canberkkkkkk｜点赞 304｜下载 9,467
- 土耳其语 TTS 模型，填补了小语种语音合成生态空白。

**12. whistle** — [Cactus-Compute/whistle](https://huggingface.co/Cactus-Compute/whistle)
- 作者：Cactus-Compute｜点赞 196｜下载 2,594
- 端侧语音识别模型，定位 on-device ASR，主打低功耗场景。

---

### 🔧 专用模型

**13. EmbeddingGemma-2** — [google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2)
- 作者：Google｜点赞 1,215｜下载 21,148
- Google 推出的新一代多模态嵌入模型，专为 RAG、检索与向量数据库场景设计。

**14. Laya** — [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)
- 作者：convaiinnovations｜点赞 5,395｜下载 36,328
- "System-One" 风格的校准决策分类模型，主打可信、可解释的决策推理。

**15. GEV-26B-Decide** — [autotrust/GEV-26B-Decide](https://huggingface.co/autotrust/GEV-26B-Decide)
- 作者：autotrust｜点赞 1,878｜下载 903,866
- 基于 Gemma4 的 System-One 决策模型，强调结构化、可审计的判断输出。

---

### 📦 微调与量化

**16. ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF** — [链接](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)
- 作者：ISTA-DASLab｜点赞 2,071｜下载 1,517,150
- GSQ + RCO 混合精度量化的 Qwen3.8-27B，是本周最受关注的量化创新。

**17. ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF** — [链接](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)
- 作者：ISTA-DASLab｜点赞 725｜下载 3,405,442
- 同上方案的 Flash-Next 版本，下载量更大，说明 Flash-Next 在量化部署端更受欢迎。

**18. Ternary-Bonsai-2-27B** — [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)
- 作者：prism-ml｜点赞 2,551｜下载 4,345,410
- 2-bit ternary 三值量化方案，27B 模型压缩到极低体积，是极限低显存部署的实验性尝试。

**19. Qwen3.8-Flash-Next-Uncensored-GGUF** — [orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF)
- 作者：orcarouter｜点赞 681｜下载 492,022
- Flash-Next 的去对齐版本，社区对"无审查"轻量旗舰的需求旺盛。

**20. OrcaSAQ-2-Cyber-27B-Uncensored-GGUF** — [orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF)
- 作者：orcarouter｜点赞 472｜下载 20,613
- 面向网络安全场景的 Qwen3.8 微调，主打"无审查 + 攻防知识增强"。

**21. DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-...-GGUF** — [链接](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)
- 作者：DavidAU｜点赞 1,571｜下载 2,037,446
- DavidAU 老牌的长名"Uncensored / Heretic"系列，复合 MTP（Multi-Token Prediction）增强的编码微调。

**22. Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF** — [SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF](https://huggingface.co/SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF)
- 作者：SC117｜点赞 157｜下载 612,411
- GSQ-RCO 量化 + abliterated 处理 + Uncensored 标签，三重组合版本。

**23. Qwen-Image-2.1-Uncensored-GGUF** — [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF)
- 作者：abenzerps｜点赞 3,686｜下载 1,933,066
- Qwen-Image-2.1 的 ComfyUI GGUF 量化版本，文生图社区本周点赞第二高。

**24. Xing4.0-29B-A4B-GGUF** — [Venastine-Research/Xing4.0-29B-A4B-GGUF](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF)
- 作者：Venast

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*