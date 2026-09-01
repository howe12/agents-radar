# Hugging Face 热门模型日报 2026-09-01

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-01 03:02 UTC

---

# 🤗 Hugging Face 热门模型日报
**日期：2026-09-01**

---

## 📌 今日速览

今天趋势榜被 **Qwen3.8 系列**牢牢占据，从原生模型到 GGUF/FP8/MLX/abliterated 全谱系霸榜；**视频生成领域**迎来新王者——MiniMaxAI 的 MiniMax-H3 单模型拿下超 5.3M 下载，成为当周最热生成模型；中国厂商（Qwen / DeepSeek / Kimi / GLM / 腾讯混元 / 阿里 PAI）继续主导开源生态，而 **orcarouter 等社区作者**围绕 Qwen3.8 推出的去审查（Uncensored / abliterated）变体异常活跃，反映出极强的本地化部署需求。

---

## 🧠 语言模型（LLM / 对话 / 指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**
  作者：Qwen｜👍 13,481｜⬇️ 4,720,763
  Qwen 3.8 代际旗舰多模态模型，单模型点赞数断层第一，是当下最强的开源对话基座之一。

- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**
  作者：moonshotai｜👍 11,119｜⬇️ 2,792,274
  Moonshot 下一代旗舰模型，使用 compressed-tensors 与 kimi_k3 架构，特征提取能力受关注。

- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)**
  作者：Qwen｜👍 4,530｜⬇️ 158,598
  标记为 `qwen4_exp` 的实验性下一代轻量模型，定位 Flash 极速推理，预示 Qwen4 路线。

- **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)**
  作者：deepseek-ai｜👍 3,843｜⬇️ 4,561,861
  DeepSeek V4 Flash 7 月定版，纯文本对话主力，下载量极高，已成开发者默认选项之一。

- **[zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)**
  作者：zai-org｜👍 1,816｜⬇️ 379,271
  智谱 GLM-5.3 的 Flash 轻量版，支持图像-文本对话，社区关注度持续上升。

- **[zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3)**
  作者：zai-org｜👍 1,420｜⬇️ 66,195
  智谱 5.3 主力模型，采用 `glm_moe_dsa`（MoE + DSA 注意力）新架构，纯文本生成。

- **[deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp)**
  作者：deepseek-ai｜👍 364｜️ 0
  DeepSeek 多模态实验版本，刚刚发布尚未被下载，是观察 V4 视觉能力的第一手材料。

- **[tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview)**
  作者：tencent｜👍 354｜⬇️ 2,589
  腾讯混元 4 的预览版，标记 `hy_v4`，代表混元下一代路线的早期信号。

- **[Qwen/Qwen3.8-Flash-Next-FP8](https://huggingface.co/Qwen/Qwen3.8-Flash-Next-FP8)**
  作者：Qwen｜👍 176｜⬇️ 84,954
  Flash-Next 的官方 FP8 量化版，显存友好的实验性部署选择。

- **[thomsonreuters/Thomson-1.0-Small](https://huggingface.co/thomsonreuters/Thomson-1.0-Small)**
  作者：thomsonreuters｜👍 176｜⬇️ 1,045
  汤森路透基于 Qwen3.5 MoE 微调的垂直领域模型，法律/金融场景值得关注。

- **[pipecat-ai/phonellm-alpha-1](https://huggingface.co/pipecat-ai/phonellm-alpha-1)**
  作者：pipecat-ai｜👍 175｜⬇️ 4,721
  基于 nemotron_h 的语音对话专用小模型，面向实时语音 Agent 场景。

---

## 🎨 多模态与生成（图像 / 视频 / 音频 / TTS）

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**
  作者：MiniMaxAI｜👍 4,711｜⬇️ 5,362,365
  本周最热视频生成模型，支持文生视频 / 图生视频 / 视频生视频，单模型下载量近 540 万。

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**
  作者：Lightricks｜👍 2,374｜⬇️ 1,182,585
  LTX-Video 系列的 2.5 版本，多功能视频生成底座，社区工作流集成度高。

- **[FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree)**
  作者：FastVideo｜👍 216｜⬇️ 0
  基于 MiniMax-H3 的 4 步蒸馏加速版（VSA / DataFree），刚发布，把推理成本进一步压低。

- **[Kijai/MiniMax-H3-experimental](https://huggingface.co/Kijai/MiniMax-H3-experimental)**
  作者：Kijai｜👍 376｜⬇️ 0
  ComfyUI 生态知名作者 Kijai 提供的 MiniMax-H3 实验封装，节点工作流用户的首选。

- **[alibaba-pai/MiniMax-H3-Acc-LoRAs](https://huggingface.co/alibaba-pai/MiniMax-H3-Acc-LoRAs)**
  作者：alibaba-pai｜👍 165｜⬇️ 27,009
  阿里 PAI 团队开源的 H3 加速 LoRA（基于 VideoX-Fun），论文 arXiv:2607.26004。

- **[BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2)**
  作者：BreezeBlue｜👍 263｜️ 2,236
  Breeze 系列第二代 TTS 模型，自回归语音合成，社区轻量语音方案选项之一。

---

## 🔧 专用模型（代码 / 垂直领域）

- **[ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B)**
  作者：ornith-ai｜👍 514｜⬇️ 172,695
  基于 Qwen3.5 MoE 35B-A3B 的中小型指令模型，活跃 3B 激活的 MoE 路线代表。

- **[peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF](https://huggingface.co/peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF)**
  作者：peculiar-ragdoll｜👍 164｜️ 105,974
  面向代码场景的 35B-A3B MoE 量化版，带 imatrix，适合本地代码补全/Agent。

- **[thomsonreuters/Thomson-1.0-Small](https://huggingface.co/thomsonreuters/Thomson-1.0-Small)**
  作者：thomsonreuters｜👍 176｜️ 1,045
  金融/法律垂类的 Qwen3.5 MoE 微调，行业模型代表。

---

##  微调与量化（社区 GGUF / FP8 / MLX / abliterated）

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)**
  作者：unsloth｜👍 3,289｜️ 9,059,937
  Qwen3.8-27B 的 llama.cpp GGUF 量化，下载量近千万，本地部署的事实标准。

- **[unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*