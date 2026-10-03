# Hugging Face 热门模型日报 2026-10-03

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-03 03:18 UTC

---

# 🤗 Hugging Face 热门模型日报
**2026-10-03 · 每日精选 Top 30**

---

## 📌 今日速览

今日 Hugging Face 热度榜呈现明显的"两大巨头 + 量化爆发"格局：**Qwen3.8-27B** 以 16,808 点赞登顶，成为本周最受关注的开源基座模型；**Lightricks/LTX-2.5** 凭借 6,001 点赞在视频生成领域独占鳌头。值得关注的是，**ISTA-DASLab 的 GSQ-RCO 量化方案**在榜单中占据 4 席，混合精度与稀疏化正成为社区降低推理成本的主流选择；同时 **Qwen-Image-2.1** 系列衍生出 ComfyUI、viggle-turbo、face-swap 等多种微调形态，显示出 2026 年图像生成模型"基座 + 工作流适配"的成熟生态。

---

## 🔥 热门模型分类整理

### 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | 点赞 | 下载 |
|------|------|------|------|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | **16,808** | 6,934,867 |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 4,016 | 767,871 |
| [NaiveAI/Naive-N0.5-Flash](https://huggingface.co/NaiveAI/Naive-N0.5-Flash) | NaiveAI | 134 | 1,365 |

- **Qwen/Qwen3.8-27B**：阿里通义最新旗舰开源 27B 模型，支持图文多模态与对话，本周新增近 700 万次下载，是当前热度最高的中文基座 LLM。
- **deepseek-ai/DeepSeek-V4.1-Flash**：DeepSeek 系列的轻量多模态版本，主打高吞吐推理，在保持 Flash 极低延迟的同时引入图文能力。
- **NaiveAI/Naive-N0.5-Flash**：新兴 MoE 架构，主打超长上下文与代码生成，是 AI 研究社区关注的新晋玩家。

---

### 🎨 多模态与生成（图像 / 视频 / 音频）

| 模型 | 作者 | 点赞 | 下载 |
|------|------|------|------|
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | **6,001** | 1,584,129 |
| [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 2,851 | 1,376,248 |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 2,845 | 81,738 |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 2,661 | 12,395 |
| [Edge0/Audio8-ASR-Infinite](https://huggingface.co/Edge0/Audio8-ASR-Infinite) | Edge0 | 2,351 | 36,832 |
| [Alissonerdx/BFS-Best-Face-Swap](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap) | Alissonerdx | 1,097 | 187,625 |
| [Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1) | Comfy-Org | 915 | 5,674,460 |
| [Cloudflare/clef](https://huggingface.co/Cloudflare/clef) | Cloudflare | 801 | 824 |
| [Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo) | Viggle | 542 | 240,660 |
| [Cloudflare/clef-flash](https://huggingface.co/Cloudflare/clef-flash) | Cloudflare | 270 | 1,303 |
| [akatz-ai/MiniMax-H3-Character-Swap-LoRA](https://huggingface.co/akatz-ai/MiniMax-H3-Character-Swap-LoRA) | akatz-ai | 242 | 11,563 |
| [pablodawson/MiniMax-H3-360-Orbit-LoRA](https://huggingface.co/pablodawson/MiniMax-H3-360-Orbit-LoRA) | pablodawson | 141 | 3,534 |

- **Lightricks/LTX-2.5**：本周视频生成之王，单文件 Diffusion 架构同时支持文生视频、图生视频、视频转换，已突破 158 万次下载。
- **Qwen/Qwen-Image-2.1**：阿里开源文生图基座，与 ComfyUI 工作流深度适配，是当前图像生成生态的事实标准之一。
- **TaichuAI/ZDTaichu5.0-9B**：中科院自动化所孵化团队 TaichuAI 推出的多模态空间推理模型，强调视觉-语言联合推理能力。
- **Edge0/Audio8-ASR-Infinite**：主打"无限时长"流式语音识别的 ASR 模型，是会议、直播等长音频场景的新选择。
- **Cloudflare/clef** & **clef-flash**：Cloudflare 进军多模态，基于 Qwen3.5 架构推出 VLM，主打低延迟推理（clef-flash）。
- **Alissonerdx/BFS-Best-Face-Swap**：基于 Qwen-Image 的 LoRA，专攻人脸替换，社区使用热度极高。

---

### 🔧 专用模型（分类 / 检索 / 语音 / 视觉）

| 模型 | 作者 | 点赞 | 下载 |
|------|------|------|------|
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | **5,007** | 0 |
| [Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B) | Contrastive-LM | 671 | 2,951 |
| [nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization) | nvidia | 625 | 44,350 |
| [PSRben/VisionHOPE](https://huggingface.co/PSRben/VisionHOPE) | PSRben | 376 | 1,279 |
| [SupersonicLabs/Julia-1](https://huggingface.co/SupersonicLabs/Julia-1) | SupersonicLabs | 371 | 2,909 |
| [fastino/GLiNER2.5-Decide](https://huggingface.co/fastino/GLiNER2.5-Decide) | fastino | 328 | 43,826 |
| [FermionResearch/Phonon-2](https://huggingface.co/FermionResearch/Phonon-2) | FermionResearch | 153 | 2,126 |

- **convaiinnovations/laya**：主打"系统一"决策与校准决策的文本分类模型，虽然下载为 0 却斩获 5,007 点赞，体现出社区对"可信 AI 决策"主题的高度关注。
- **nvidia/Nemotron-3-Diarization**：NVIDIA 最新一代说话人日志模型，基于 NeMo 框架，可精准分离多人语音。
- **fastino/GLiNER2.5-Decide**：GLiNER 系列的最新升级版，结合抽取式 NER 与意图/文本分类，专为零样本工业部署设计。
- **FermionResearch/Phonon-2**：基于 Parakeet TDT 的 Apple Silicon 原生 ASR 模型（MLX 框架），Mac 用户本地语音识别的利器。

---

### 📦 微调与量化（GGUF / AWQ / LoRA / 社区微调）

| 模型 | 作者 | 点赞 | 下载 |
|------|------|------|------|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,813 | 6,237,305 |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,906 | 1,678,428 |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 2,359 | 3,869,715 |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA-DASLab | 465 | 1,141,018 |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF) | ISTA-DASLab | 205 | 261,136 |
| [ukisai/Swift-1.5-Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ukisai/Swift-1.5-Qwen3.8-27B-GSQ-RCO-GGUF) | ukisai | 209 | 284,203 |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,364 | 2,035,504 |

- **unsloth/Qwen3.8-27B-GGUF**：unsloth 团队的官方 GGUF 量化版本，下载量超 623 万，是本地 LLM 部署的事实标配。
- **ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF**：来自苏黎世联邦理工（ISTA-DASLab）推出的 GSQ（Grouped Symmetric Quantization）+ RCO（Robust Channel Order）混合精度量化方案，兼顾精度与推理速度。
- **prism-ml/Ternary-Bonsai-2-27B-gguf**：激进的三元（

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*