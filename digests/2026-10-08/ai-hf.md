# Hugging Face 热门模型日报 2026-10-08

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-08 03:59 UTC

---

# 🤗 Hugging Face 热门模型日报
**日期：2026-10-08**

---

## 📌 今日速览

Qwen 系列继续霸榜，**Qwen3.8-27B** 以 17,221 周点赞成为本周绝对主角，而 **Qwen3.8-Flash-Next** 与 Qwen-Image-2.1 也分别闯入前三；视频生成方面，**Lightricks/LTX-2.5** 单周狂揽 6,821 点赞，成为最受关注的视频模型。生态侧信号清晰：Qwen、Gemma4 与 DeepSeek V4.1 形成新一轮"开源三巨头"格局，社区围绕头部模型进行 GGUF 量化、abliteration（去审查）与多语言微调的热情持续高涨，**ISTA-DASLab 的 GSQ-RCO 混合精度量化** 与 **prism-ml 的 Ternary-Bonsai 2-bit 量化** 展示了极致压缩的工程前沿。

---

## 🧠 语言模型（LLM / 对话 / 指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen | ⭐ 17,221 | ⬇ 6.76M
  本周点赞之王，阿里通义千问 27B 量级多模态旗舰，conversational 通用底座，社区关注度与下载量双双登顶。

- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** — Qwen | ⭐ 6,023 | ⬇ 1.61M
  Flash-Next 路线主打极速推理与多模态兼容，是 27B 之外的轻量首选。

- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)** — deepseek-ai | ⭐ 4,237 | ⬇ 1.26M
  DeepSeek V4.1 Flash 版本，主打高质量文本+图像输入推理，是开源阵营对标 GPT/Claude 的核心选手。

- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)** — convaiinnovations | ⭐ 5,351 | ⬇ 28K
  标注为 "system-one / calibrated-decisions" 的分类/对话决策模型，本周点赞远超下载量，说明其在研究者中引发强烈兴趣。

- **[Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1)** — Aleph-Alpha | ⭐ 786 | ⬇ 5.8K
  欧洲玩家 Aleph-Alpha 推出的 MoE 推理模型，关注可解释与可控生成。

- **[Venastine-Research/Xing4.0-29B-A4B-GGUF](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF)** — Venastine-Research | ⭐ 634 | ⬇ 33.6K
  29B 总参数 / 4B 激活的 MoE 文本生成模型，命中当下"小激活大参数"的工程热点。

- **[jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer)** — jialinyyzz | ⭐ 491 | ⬇ 19.5K
  基于 Gemma4 的"文本人类化"模型，用于将机器文本改写得更自然，写作与 SEO 工作流关注度高。

---

## 🎨 多模态与生成（图像 / 视频 / 音频）

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks | ⭐ 6,821 | ⬇ 1.67M
  本周最强视频生成模型，支持 image-to-video / text-to-video / video-to-video，多任务统一架构。

- **[abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF)** — abenzerps | ⭐ 3,592 | ⬇ 1.82M
  Qwen-Image-2.1 的 GGUF ComfyUI 版本，本周图生成榜单冠军，社区消费级显卡即可跑。

- **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)** — Qwen | ⭐ 3,102 | ⬇ 109K
  阿里官方文本到图像及图像编辑底座，统一生成与编辑能力，diffusers 原生支持。

- **[TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B)** — TaichuAI | ⭐ 2,908 | ⬇ 13K
  中国电信"Taichu"系列 5.0 版本，9B 多模态 + 空间推理，强调轻量与场景理解。

- **[Alissonerdx/BFS-Best-Face-Swap](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap)** — Alissonerdx | ⭐ 1,301 | ⬇ 239K
  基于 Qwen-Image-2.1 的 LoRA 换脸模型，命中消费级图像编辑热门场景。

- **[Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo)** — Viggle | ⭐ 665 | ⬇ 327K
  Viggle 团队的 Turbo LoRA，主打更快出图速度，GGUF + diffusers 双格式分发。

- **[canberkkkkkk/ema-lightning](https://huggingface.co/canberkkkkkk/ema-lightning)** — canberkkkkkk | ⭐ 274 | ⬇ 2.7K
  土耳其语 TTS，关注多语言语音合成的垂类缺口。

- **[Cactus-Compute/whistle](https://huggingface.co/Cactus-Compute/whistle)** — Cactus-Compute | ⭐ 148 | ⬇ 2.2K
  端侧（on-device）语音识别模型，主打隐私与低资源部署。

---

## 🔧 专用模型（嵌入 / 检索 / 垂直任务）

- **[google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2)** — google | ⭐ 997 | ⬇ 7.6K
  Google 官方第二代 Gemma 嵌入模型，主打多语言与多模态嵌入（multimodal-embedding）。

- **[unsloth/embeddinggemma-2-GGUF](https://huggingface.co/unsloth/embeddinggemma-2-GGUF)** — unsloth | ⭐ 177 | ⬇ 11.5K
  embeddinggemma-2 的 GGUF 版本，CPU/低显存友好版本，是 RAG 工程师的高性价比选择。

- **[autotrust/GEV-26B-Decide](https://huggingface.co/autotrust/GEV-26B-Decide)** — autotrust | ⭐ 1,401 | ⬇ 896K
  基于 Gemma4 的"系统一（System-One）"决策模型，强调快速直觉式判断与可校准分类。

---

## 📦 微调与量化（社区 GGUF / AWQ / abliterated）

- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — prism-ml | ⭐ 2,532 | ⬇ 4.27M
  27B 模型的 **2-bit 三元（ternary）量化**，本周下载量超 420 万，量化极限的代表。

- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — ISTA-DASLab | ⭐ 2,043 | ⬇ 1.55M
  采用 **GSQ + RCO（混合精度）量化** 的 Qwen3.8-27B，主打"质量—体积"折中。

- **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)** — ISTA-DASLab | ⭐ 699 | ⬇ 3.08M
  Flash-Next 的 GSQ-RCO 量化版，下载量超 300 万，边缘部署热门。

- **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF)** — ISTA-DASLab | ⭐ 344 | ⬇ 554K
  同一技术路线的代码专用版本，叠加微调与剪枝，针对开发者。

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** — DavidAU | ⭐ 1,554 | ⬇ 2.09M
  "Heretic / Uncensored" abliterated 风格的极复杂多合一名，体现了社区微调文化的极致命名。

- **[orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF)** — orcarouter | ⭐ 648 | ⬇ 431K
  Flash-Next 的 abliterated 版本，去审查量化分支持续火热。

- **[orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF)** — orcarouter | ⭐ 462 | ⬇ 19K
  网络安全方向的去审查微调版，垂类微调的典型代表。

- **[Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw](https://huggingface.co/Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw)** — Infatoshi | ⭐ 292 | ⬇ 1.9K
  GLM-5.3 的 EXL3 3.0bpw 极低比特量化版本（ExLlamaV3），凸显 2026 年低比特推理栈的成熟。

- **[autotrust/GEV-26B-Decide-NVFP4](https://huggingface.co/autotrust/GEV-26B-Decide-NVFP4)** — autotrust | ⭐ 162 | ⬇ 15K
  使用 NVIDIA **NVFP4（4-bit 浮点）** 量化的决策模型，硬件友好型微调的新范式。

---

## 🌐 生态信号

**Qwen3.8 与 Gemma4 家族双线主导**：本周榜单中 Qwen3.8 相关模型占据近 10 席，Google 的 embeddinggemma-2 与 autotrust 的 GEV（基于 Gemma4）共同抬升了 Gemma 系列在"决策 / 嵌入 / 轻量化"侧的话语权。**DeepSeek V4.1-Flash** 延续 V4 系列的高质量开源口碑，依然是闭源模型的有力替代。开源权重全面占优：榜单几乎无闭源 API 独占模型，社区在权重、微调、量化层面的迭代速度仍快于商业方。

量化方向呈现两条清晰路线：**ISTA-DASLab 的 GSQ-RCO 混合精度** 与 **prism-ml 的 2-bit Ternary**，前者强调工程实用性，后者探索压缩极限；同时 **NVFP4、EXL3 3.0bpw** 表明低比特栈在 2026 年已走向"消费级显卡可跑 27B"的临界点。微调文化方面，"abliterated / uncensored" 已成为固定分支，**垂类化（代码、网络安全、写作、TTS）** 与**地区语言（土耳其语等）** 成为社区微调的新战场。

---

## ⭐ 值得探索

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 当前最值得关注的多模态开源底座，无论是从研究角度衡量 SOTA，还是作为下游微调的起点，都是 2026 下半年的"事实标准"。

2. **[Lightricks/LTX-2.5](https://

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*