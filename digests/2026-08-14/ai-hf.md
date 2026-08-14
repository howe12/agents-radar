# Hugging Face 热门模型日报 2026-08-14

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-14 01:21 UTC

---

# Hugging Face 热门模型日报
**日期：2026-08-14**

---

## 📌 今日速览

本周 Hugging Face 榜单最显著的特征是 **视频生成模型 MiniMax-H3 的生态爆炸** —— 30 个上榜模型中有近 10 个围绕该模型展开，涵盖基础模型、Turbo 加速版、GGUF 量化、LoRA 微调、ComfyUI 封装等多种形态。同时，**MoE 架构持续主导大模型赛道**，Qwen3.8-2.4T-A95B、DeepSeek-V4 系列、NVIDIA Nemotron 3.5 等超大 MoE 集中亮相；Moonshot 的 **Kimi-K3** 以破万的周点赞数稳居榜首，标志多模态大模型进入新一轮竞争。

---

## 🧠 语言模型（LLM / 对话 / 指令微调）

- **[Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)**
  作者：Qwen｜点赞 784｜下载 1,012
  阿里 Qwen 系列最新 MoE 旗舰，总参数达 2.4T、激活 95B，体量惊人且刚发布即上榜。

- **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)**
  作者：deepseek-ai｜点赞 3,320｜下载 1,431,587
  DeepSeek V4 轻量版本，兼顾速度与质量，已是下载量过百万的主流选择。

- **[deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813)**
  作者：deepseek-ai｜点赞 295｜下载 0
  V4 系列的 8 月 13 日 Pro 版，**新发布即上榜**，代表 DeepSeek 当前最强旗舰。

- **[LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B)**
  作者：LiquidAI｜点赞 602｜下载 116,640
  仅 2.6B 参数的紧凑 LLM，主打端侧高效推理，社区反响良好。

- **[nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16)**
  作者：nvidia｜点赞 130｜下载 22,279
  NVIDIA 自家 MoE 架构（nemotron_h），30B-A3B 激活配置，与下方 NVFP4 量化版配套发布。

- **[endless-frontier/BigBang-v1](https://huggingface.co/endless-frontier/BigBang-v1)**
  作者：endless-frontier｜点赞 188｜下载 3,184
  基于 Qwen3.5 MoE 的多模态微调，强调"对话式"输出，定位社区创新实验。

- **[deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview)**
  作者：deepgrove｜点赞 353｜下载 3,868
  新晋文本生成 MoE 模型，preview 版本即获高度关注，值得长期追踪。

- **[inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash)**
  作者：inclusionAI｜点赞 323｜下载 10,052
  "Bailing" 混合架构的对话模型，自定义代码实现，针对对话场景做了专门优化。

---

## 🎨 多模态与生成（图像 / 视频 / 音频 / 文本到X）

- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**
  作者：moonshotai｜点赞 **10,620**｜下载 1,871,575
  本周榜单冠军，Kimi 系列第三代多模态模型，feature-extraction + compressed-tensors 标志其面向端侧部署。

- **[meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B)**
  作者：meta-models｜点赞 1,419｜下载 121,042
  30B 多模态对话模型，是当下 Muse-Glimmer 系列的主入口，衍生出多个 GGUF 量化版本。

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**
  作者：MiniMaxAI｜点赞 3,824｜下载 1,605,940
  **本周生态核心**：diffusers 架构下的图像/文本到视频模型，下载量已超 160 万，社区围绕它展开了 Turbo、LoRA、ComfyUI 封装等十余种衍生。

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**
  作者：Lightricks｜点赞 720｜下载 57,287
  diffusion-single-file 范式的图像到视频模型，支持 i2v / t2v / v2v 全链路生成。

- **[lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo)**
  作者：lightx2v｜点赞 462｜下载 91,455
  MiniMax-H3 的加速版本，强调推理速度和工程化部署。

- **[MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3)**
  作者：MiniMaxAI｜点赞 318｜下载 25
  文本到音频/音乐生成，配合 sglang-omni 推理框架，**新发布即上榜**。

- **[nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B)**
  作者：nvidia｜点赞 371｜下载 1,164
  11B 参数的语音对话模型，定位实时语音助手场景。

---

## 🔧 专用模型（代码 / 数学 / 医疗 / 嵌入）

- **[inclusionAI/Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny)**
  作者：inclusionAI｜点赞 216｜下载 1,292
  Ling 家族的"tiny"轻量版本，混合 bailing_hybrid 架构，适合嵌入式与低资源场景的实验性研究。

> 本周榜单中**专门的代码/数学/医疗模型缺席**，但通用 LLM 与多模态模型构成了绝大多数焦点。

---

## 📦 微调与量化（社区微调 / GGUF / AWQ / LoRA）

- **[unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF)**
  作者：unsloth｜点赞 390｜下载 352,023
  Muse-Glimmer-30B 的 GGUF 量化版，由 unsloth 出品，主打本地低显存推理。

- **[meta-models/Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF)**
  作者：meta-models｜点赞 257｜下载 136,783
  官方版 GGUF，与 unsloth 版本互补。

- **[Qwen/Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8)**
  作者：Qwen｜点赞 158｜下载 4,000
  2.4T MoE 的 FP8 量化版，体现顶级模型对推理优化的重视。

- **[nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4)**
  作者：nvidia｜点赞 229｜下载 44,859
  NVIDIA 自家 NVFP4 量化版本，专为 RTX 50 系及后续硬件优化。

- **[Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)**
  作者：Comfy-Org｜点赞 1,290｜下载 **10,365,210**
  下载量之王，MiniMax-H3 的 ComfyUI 单文件封装版，**下载量破千万**，说明 ComfyUI 工作流生态已成为视频生成主要分发渠道。

- **[Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy)**
  作者：Kijai｜点赞 304｜下载 0
  ComfyUI 圈的 Kijai 出品，专注于工作流友好封装。

- **[larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora)**
  作者：larryvrh｜点赞 726｜下载 0
  面向 MiniMax-H3 Turbo 的 LoRA 适配器，专注于风格与提示词增强。

- **[drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI)**
  作者：drbaph｜点赞 314｜下载 0
  上述 LoRA 的 ComfyUI 集成版。

- **[fal/MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA)**
  作者：fal｜点赞 159｜下载 4,692
  fal 出品的"真人写实"风格 LoRA，针对人物生成质量调优。

- **[lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA](https://huggingface.co/lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA)**
  作者：lightx2v｜点赞 149｜下载 652
  罕见但实用的"提示词改写" LoRA，自动优化用户输入以提升生成质量。

- **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)**
  作者：DavidAU｜点赞 1,987｜下载 2,793,115
  社区经典的"Heretic"取消审查风格 GGUF 模型，**下载量近 280 万**，长名命名风格延续，是 GGUF 生态的代表样本。

- **[SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3)**
  作者：SexGod1979｜点赞 297｜下载 324
  针对 MiniMax-H3 的特定风格微调，体现社区微调生态的多样性。

- **[ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot)**
  作者：ethanfel｜点赞 483｜下载 0
  Qwen3-VL 32B 视觉语言模型的 INT8 量化 + ComfyUI 适配 + ConvRot 旋转量化实验，针对边缘部署。

---

## 📊 生态信号

**MiniMax-H3 是本周绝对的"现象级"模型**，从官方基础版到社区 LoRA、ComfyUI 封装、Turbo 加速、提示词改写等多种形态共有 10 个衍生版本上榜，**下载总量累计已超过千万级**，标志着视频生成模型正式进入"基础模型 + 生态适配"的

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*