# Hugging Face 热门模型日报 2026-10-07

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-07 03:45 UTC

---

# Hugging Face 热门模型日报 · 2026-10-07

---

## 📰 今日速览

Qwen 系列本周全面霸榜，**Qwen3.8-27B 以 17,133 周点赞**稳居榜首，Qwen3.8-Flash-Next、Qwen-Image-2.1 与 DeepSeek-V4.1-Flash 紧随其后，多模态推理与文生视频/图像赛道依然是流量主力。社区层面极致压缩持续突破——ISTA-DASLab 在 Qwen3.8 系列上推出多款 **GSQ-RCO 混合精度量化**，prism-ml 的 **2-bit Ternary Bonsai** 进一步压低部署门槛，本地化推理生态空前活跃。

---

## 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 · 下载 | 入选理由 |
|---|---|---|
| **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** | Qwen · 👍17,133 · ⬇6.77M | 本周断层第一，Qwen3.8 家族旗舰多模态基座，对标一线闭源 |
| **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** | Qwen · 👍5,991 · ⬇1.59M | 实验性 qwen4_exp 架构，多模态对话，强调低延迟 |
| **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)** | deepseek-ai · 👍4,190 · ⬇1.16M | DeepSeek V4.1 轻量版，多模态 + 文本生成，社区关注度高 |
| **[Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1)** | Aleph-Alpha · 👍724 · ⬇4,138 | 欧洲厂商首款 reasoning MoE，主打推理任务 |
| **[Venastine-Research/Xing4.0-29B-A4B-GGUF](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF)** | Venastine-Research · 👍521 · ⬇30,585 | 29B-A4B 激活参数 MoE 模型 GGUF 量化版 |
| **[orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF)** | orcarouter · 👍434 · ⬇18,114 | 基于 Qwen3.8 的网络安全领域去审查微调 |
| **[jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer)** | jialinyyzz · 👍406 · ⬇15,134 | 文本"人化"重写器，把 AI 痕迹文本改写为自然人类风格 |
| **[Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw](https://huggingface.co/Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw)** | Infatoshi · 👍272 · ⬇1,660 | 智谱 GLM-5.3 去审查 EXL3 3.0bpw 极低比特量化 |

---

## 🎨 多模态与生成（图像 / 视频 / 音频 / 文本到 X）

| 模型 | 作者 · 下载 | 入选理由 |
|---|---|---|
| **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** | Lightricks · 👍6,688 · ⬇1.68M | 图生视频/文生视频/视频生视频三合一扩散模型，单文件分发 |
| **[abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF)** | abenzerps · 👍3,450 · ⬇1.72M | Qwen-Image-2.1 去审查 GGUF，ComfyUI 工作流直连 |
| **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)** | Qwen · 👍3,049 · ⬇102,510 | 阿里官方文生图基座，支持图像编辑，diffusers 原生 |
| **[TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B)** | TaichuAI · 👍2,894 · ⬇12,889 | 中国移动"智岛"系列，多模态空间推理模型 |
| **[Cloudflare/clef](https://huggingface.co/Cloudflare/clef)** | Cloudflare · 👍1,705 · ⬇7,255 | Cloudflare 首款多模态 VLM，基于 Qwen3.5 二次预训练 |
| **[Alissonerdx/BFS-Best-Face-Swap](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap)** | Alissonerdx · 👍1,255 · ⬇219,575 | Qwen-Image-2.1 的 LoRA 换脸插件，ComfyUI 即用 |
| **[autotrust/JEV-27B-VL](https://huggingface.co/autotrust/JEV-27B-VL)** | autotrust · 👍1,003 · ⬇1.53M | 27B 视觉-语言模型，已被 150 万次下载，社区反馈成熟 |
| **[autotrust/GEV-26B-Decide](https://huggingface.co/autotrust/GEV-26B-Decide)** | autotrust · 👍749 · ⬇854,574 | 基于 Gemma4 的"系统一"决策分类多模态模型 |
| **[nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization)** | NVIDIA · 👍730 · ⬇58,703 | 英伟达第三代说话人 diarization 模型，NeMo 框架 |
| **[Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo)** | Viggle · 👍640 · ▮903,902 | Qwen-Image-2.1 加速 LoRA，30 万下载，社区微调标杆 |
| **[Cloudflare/clef-flash](https://huggingface.co/Cloudflare/clef-flash)** | Cloudflare · 👍610 · ⬇10,638 | clef 模型的低延迟版本，吞吐优化 |
| **[FermionResearch/Phonon-2](https://huggingface.co/FermionResearch/Phonon-2)** | FermionResearch · 👍262 · ⬇3,339 | Apple Silicon MLX 原生的 Parakeet TDT ASR 模型 |
| **[pablodawson/MiniMax-H3-360-Orbit-LoRA](https://huggingface.co/pablodawson/MiniMax-H3-360-Orbit-LoRA)** | pablodawson · 👍231 · ⬇8,745 | 360° 首末帧视频生成的 LoRA 适配 |

---

## 🔧 专用模型（代码 / 数学 / 嵌入 / 检索）

| 模型 | 作者 · 下载 | 入选理由 |
|---|---|---|
| **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)** | convaiinnovations · 👍5,294 · ⬇20,386 | "校准决策"文本分类模型，周点赞第四，热度异常突出 |
| **[Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B)** | Contrastive-LM · 👍744 · ⬇3,904 | 对比学习驱动的 8B verifier/reranker，用作 LLM 评判 |
| **[google/

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*