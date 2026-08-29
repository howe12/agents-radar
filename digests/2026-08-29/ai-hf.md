# Hugging Face 热门模型日报 2026-08-29

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-29 05:09 UTC

---

# Hugging Face 热门模型日报
**日期：2026-08-29**

---

## 一、今日速览

今日 Hugging Face 趋势榜被 **Qwen3.8 系列** 强势主导，从原生 27B 模型到十余个社区衍生版本（GGUF、MLX、FP8、Abliterated 等）几乎占据榜单半壁江山。原生大模型层面，**Qwen3.8-27B（13.2k 赞）**、**Kimi-K3（11.1k 赞）**、**DeepSeek-V4-Flash（3.8k 赞）** 形成新一波旗舰对决；视频生成赛道继续升温，**MiniMax-H3** 与 **LTX-2.5** 双双登顶。多模态 Music、TTS、MoE 架构与"去审查（abliterated）"微调也成为本周社区关注焦点。

---

## 二、热门模型分类

### 🧠 语言模型（LLM、对话、指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** · Qwen · 👍 13,160 · ⬇️ 3.46M
  阿里新一代多模态旗舰 Qwen3.8 系列的 27B 主力模型，本周下载量逼近 350 万，是当前开源生态最热的基座之一。

- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** · moonshotai · 👍 11,066 · ⬇️ 2.68M
  月之暗面 Kimi 第三代主力模型，支持多模态理解与压缩张量推理，开源权重引发开发者热议。

- **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** · deepseek-ai · 👍 3,790 · ⬇️ 3.96M
  DeepSeek V4 的轻量 Flash 版本，主打高吞吐对话场景，下载量已超 390 万，是企业级部署首选之一。

- **[zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3)** · zai-org · 👍 1,165 · ⬇️ 0
  智谱 GLM-5.3 原生版本，采用 **glm_moe_dsa**（带 DSA 稀疏注意力的 MoE）架构，是榜单中首批开源的"实验性 MoE 大模型"代表。

- **[zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)** · zai-org · 👍 1,527 · ⬇️ 34
  GLM-5.3 的轻量 Flash 衍生版本，强调推理速度与端侧部署兼容性。

- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** · Qwen · 👍 4,179 · ⬇️ 4,810
  Qwen3.8 系列的下一代 Flash 实验版本，定位为高速多模态对话模型（qwen4_exp 标签暗示下一代架构预研）。

- **[tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview)** · tencent · 👍 251 · ⬇️ 0
  腾讯混元大模型 v4 预览版，纯文本生成，主打企业级应用。

- **[ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B)** · ornith-ai · 👍 486 · ⬇️ 88,102
  35B 总参 / 3B 激活的 MoE 多模态模型，基于 Qwen3.5 MoE 蒸馏路线，主打低算力高表现。

- **[thomsonreuters/Thomson-1.0-Small](https://huggingface.co/thomsonreuters/Thomson-1.0-Small)** · thomsonreuters · 👍 145 · ⬇️ 349
  汤森路透发布的法律 / 金融领域专精多模态模型（基于 Qwen3.5 MoE），是首批由主流财经数据商开源的领域 LLM。

- **[pipecat-ai/phonellm-alpha-1](https://huggingface.co/pipecat-ai/phonellm-alpha-1)** · pipecat-ai · 👍 120 · ⬇️ 64
  基于 Nemotron-H 的语音电话场景专用对话模型，聚焦客服与 IVR 端到端对话。

### 🎨 多模态与生成（图像、视频、音频）

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** · MiniMaxAI · 👍 4,588 · ⬇️ 4.85M
  MiniMax 视频生成模型 H3，支持文生视频、图生视频、视频续写，本周累计下载逼近 500 万，是开源视频生成的事实标杆。

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** · Lightricks · 👍 2,032 · ⬇️ 912,729
  LTX-Video 2.5 版本，集成 image-to-video / text-to-video / video-to-video 单文件扩散方案，开源社区口碑极高。

- **[MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3)** · MiniMaxAI · 👍 1,289 · ⬇️ 19,726
  MiniMax Music3 文生音乐系统，支持可控音乐生成，是本周最受欢迎的开源音频生成模型。

- **[alibaba-pai/MiniMax-H3-Fun-Controlnet-Union](https://huggingface.co/alibaba-pai/MiniMax-H3-Fun-Controlnet-Union)** · alibaba-pai · 👍 159 · ⬇️ 3,344
  基于 MiniMax-H3 的 ControlNet-Union 多条件控制适配器，可对视频生成施加姿态、深度、边缘等多重控制信号。

- **[alibaba-pai/MiniMax-H3-Acc-LoRAs](https://huggingface.co/alibaba-pai/MiniMax-H3-Acc-LoRAs)** · alibaba-pai · 👍 136 · ⬇️ 609
  MiniMax-H3 的加速 LoRA 集合，目标是显著降低视频生成推理步数与显存占用。

- **[BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2)** · BreezeBlue · 👍 168 · ⬇️ 240
  开源 TTS 模型第二代，主打高质量语音合成与情感控制能力。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- 本日榜单中"垂直专精"主要由 **thomsonreuters/Thomson-1.0-Small**（法律金融）、**pipecat-ai/phonellm-alpha-1**（电话语音对话）以及 **MiniMaxAI/MiniMax-Music3**（音乐生成）承担，暂无明显的代码 / 数学专用模型上榜。

### 📦 微调与量化（社区 GGUF、AWQ、MLX、abliterated）

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** · unsloth · 👍 3,152 · ⬇️ 7.76M
  unsloth 出品的 Qwen3.8-27B GGUF 量化版，下载量近 780 万，是消费级显卡本地部署 Qwen3.8 的首选。

- **[unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF)** · unsloth · 👍 529 · ⬇️ 4,354
  Qwen3.8-Flash-Next 的 GGUF 量化版本，定位端侧推理。

- **[OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED)** · OBLITERATUS · 👍 884 · ⬇️ 509,270
  Qwen3.8-27B 的"去审查（abliterated）"微调版，同时提供 MLX、safetensors 与 GGUF 三种格式。

- **[orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8)** · orcarouter · 👍 1,236 · ⬇️ 273,577
  Qwen3.8-27B 的 FP8 精度 Uncensored 版本，兼顾量化压缩与社区微调需求。

- **[orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX)** · orcarouter · 👍 1,191 · ⬇️ 83,352
  同一作者的 Apple Silicon MLX 格式对应版本，主打 Mac 本地推理。

- **[orcarouter/Qwen3.8-27B-Uncensored](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored)** · orcarouter · 👍 201 · ⬇️ 18,598
  原版 BF16 精度的 Uncensored 基线模型。

- **[orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF)** · orcarouter · 👍 530 · ⬇️ 188,460
  同作者的 GGUF 量化版本。

- **[JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF)** · JonathanColetti · 👍 806 · ⬇️ 1.67M
  llama.cpp 优化的 GGUF 版本，启用 **MTP（Multi-Token Prediction）** 加速，下载量已达 167 万。

- **[HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)** · HauhauCS · 👍 729 ·

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*