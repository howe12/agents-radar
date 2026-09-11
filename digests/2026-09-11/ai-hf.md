# Hugging Face 热门模型日报 2026-09-11

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-11 02:29 UTC

---

# Hugging Face 热门模型日报
**日期：2026-09-11**

---

## 一、今日速览

Qwen3.8 系列（27B 与 Flash-Next）成为今日绝对主角，原生版本合计占据榜单前部，社区围绕其衍生的 GGUF / NVFP4 量化版与 "Uncensored" 微调版则进一步巩固了它的生态影响力。视频生成领域呈双雄格局——**MiniMax-H3** 与 **Lightricks/LTX-2.5** 在下载量与点赞量上遥遥领先。本周值得关注的新面孔包括 **DeepSeek-V4.1-Flash**、**GLM-5.3 系列**、**Google TimesFM 3.0** 时序预测模型，以及微软推出的流式 ASR **VibeVoice**。

---

## 二、热门模型

###  语言模型

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**
  作者：Qwen｜👍 14,652｜⬇️ 7,322,476
  通义千问 Qwen3.8 旗舰多模态模型，本周冠军，下载量近 740 万，引领整个 Qwen 生态。

- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)**
  作者：Qwen｜👍 5,083｜⬇️ 564,079
  Qwen3.8 的轻量高速版本，针对推理延迟优化，是 Flash 系列的下一代实验性架构（qwen4_exp）。

- **[zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)**
  作者：zai-org｜👍 2,228｜⬇️ 1,023,103
  智谱 GLM-5.3 的轻量多模态 Flash 版，采用新一代 glm5_next 架构。

- **[zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3)**
  作者：zai-org｜👍 1,800｜⬇️ 552,019
  智谱 GLM 5.3 全量版本，基于 MoE + DSA 架构，纯文本主力模型。

- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)**
  作者：deepseek-ai｜👍 1,402｜⬇️ 6
  DeepSeek V4.1 的 Flash 极速版本，刚刚发布即冲上榜首，极受关注。

- **[openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B)**
  作者：openbmb｜👍 1,117｜⬇️ 42,289
  面壁智能 MiniCPM 第五代 2B 小模型，端侧部署友好，已下载超 4 万次。

- **[XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B)**
  作者：XHToken｜👍 1,068｜⬇️ 15,930
  基于 Spark 2.5 架构的 4B 中量级 LLM，新一代高效文本生成方案。

- **[deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp)**
  作者：deepseek-ai｜👍 859｜⬇️ 400,892
  DeepSeek V4 Flash 的视觉实验分支，主打轻量多模态推理。

- **[nex-agi/Nex-N2.5-mini](https://huggingface.co/nex-agi/Nex-N2.5-mini)**
  作者：nex-agi｜👍 657｜️ 2,444
  基于 qwen3_5_moe 架构的 mini 多模态模型，轻量多任务兼顾。

- **[IFM/K2-Horizon-MoVA-36B-A4B](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B)**
  作者：IFM｜👍 275｜⬇️ 4,488
  36B 总参 / 4B 激活的 MoE 模型，K2-Horizon 新架构代表。

---

### 🎨 多模态与生成

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**
  作者：MiniMaxAI｜👍 5,129｜⬇️ 5,080,204
  当前最热的开源视频生成模型，支持文生视频 / 图生视频 / 视频生视频，下载量破 500 万。

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**
  作者：Lightricks｜👍 3,392｜⬇️ 1,740,572
  LTX 系列最新视频扩散模型，单文件部署，I2V/T2V/V2V 全场景覆盖。

- **[BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2)**
  作者：BreezeBlue｜👍 529｜⬇️ 8,227
  新一代 TTS 模型，将语音合成与文本生成能力整合在同一 Transformer 内。

- **[WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity)**
  作者：WarmBloodAban｜👍 262｜⬇️ 96,682
  基于 MiniMax-H3 的微调视频生成变体，强调奇异风格化能力。

- **[OpenVDN/vdn-minimax-h3](https://huggingface.co/OpenVDN/vdn-minimax-h3)**
  作者：OpenVDN｜👍 286｜⬇️ 39
  同样基于 MiniMax-H3 的社区微调分支，聚焦视频去噪（VDN）能力。

- **[Viggle/Viggle-Animate](https://huggingface.co/Viggle/Viggle-Animate)**
  作者：Viggle｜👍 157｜⬇️ 0
  角色替换 / 视频动画化模型，视频二次创作的热门新工具。

---

###  专用模型

- **[google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch)**
  作者：google｜👍 718｜⬇️ 483,787
  Google 时序基础模型 TimesFM 3.0 的 PyTorch 端口，时序预测 SOTA。

- **[dealignai/GLM-5.3-CYBERSECURITY-FP8](https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8)**
  作者：dealignai｜👍 368｜⬇️ 24,303
  基于 GLM 5.3 定向微调的网络安全专用模型，去对齐、移除拒绝，FP8 精度。

- **[microsoft/VibeVoice-ASR-Streaming-7B](https://huggingface.co/microsoft/VibeVoice-ASR-Streaming-7B)**
  作者：microsoft｜👍 189｜⬇️ 2,065
  微软推出的流式语音识别模型，面向实时转录场景。

- **[Qwen/Qwen-Drive-1.0-4B](https://huggingface.co/Qwen/Qwen-Drive-1.0-4B)**
  作者：Qwen｜👍 155｜⬇️ 2,759
  通义千问首个自动驾驶专用模型，端到端运动规划 + 视觉问答。

---

### 📦 微调与量化

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)**
  作者：unsloth｜👍 3,851｜️ 11,127,203
  本周下载量冠军（超 1100 万），Qwen3.8-27B 的 GGUF 量化版，ollama / llama.cpp 首选。

- **[HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)**
  作者：HauhauCS｜👍 1,076｜⬇️ 1,908,917
  "激进 MTP 去审查"微调 Qwen3.8 多模态版，社区下载近 200 万。

- **[unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF)**
  作者：unsloth｜👍 879｜️ 1,053,823
  Qwen3.8 Flash-Next 的 GGUF 量化版，兼顾速度与体积。

- **[orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF)**
  作者：orcarouter｜👍 868｜⬇️ 314,894
  Qwen3.8-27B 的 abliterated 去对齐 GGUF 版本，强调无审查输出。

- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)**
  作者：ISTA-DASLab｜👍 798｜⬇️ 614,850
  采用 GSQ + RCO（Groupwise Scaling Quantization + 率约束优化）的混合精度量化实验。

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)**
  作者：DavidAU｜👍 452｜⬇️ 517,644
  DavidAU 的"超长命名"特色微调，融合代码、故事与去审查能力。

- **[nvidia/Qwen3.8-Flash-Next-NVFP4](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-NVFP4)**
  作者：nvidia｜👍 192｜⬇️ 62,813
  NVIDIA ModelOpt 工具产出的 NVFP4 4-bit 量化版本，专为 Blackwell 架构优化。

- **[Jackrong/Qwopus3.8-27B-Flash-GGUF](https://huggingface.co/Jackrong/Qwopus3.8-27B-Flash-GGUF)**
  作者：Jackrong｜👍 188｜⬇️ 192,107
  27B + Flash 混合形态的 GGUF 视觉语言模型。

- **[openbmb/MiniCPM5-2B-GGUF](https://huggingface.co/openbmb/MiniCPM5-2B-GGUF)**
  作者：

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*