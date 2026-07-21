# Hugging Face 热门模型日报 2026-07-21

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-21 02:04 UTC

---

# Hugging Face 热门模型日报 · 2026-07-21

---

## 今日速览

今日 Hugging Face 榜单呈现**"Qwen 系生态全面爆发"**的格局：基于 Qwen3.5/3.6 的微调与量化模型占据榜单近三分之一席位，涵盖从对话、视觉到 MoE 的完整谱系。中国大厂（智谱 GLM-5.2、百度 Unlimited-OCR、腾讯 Hy3、月之暗面 Kimi K2.7、面壁 MiniCPM）集体亮相，**极低比特量化（1-bit / Ternary 2-bit）**首次进入主榜视野（prism-ml/Bonsai-27B）。OCR、视频生成、机器人 VLA 等专用模型持续升温。

---

## 热门模型

### 🧠 语言模型

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** · zai-org · 👍 4,226 · ⬇ 531,947
  智谱新一代 MoE 文本生成模型，采用 `glm_moe_dsa` 架构，本周点赞榜首，对话能力强。

- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** · tencent · 👍 847 · ⬇ 13,698
  腾讯混元 Hy3 文本生成模型，作为多款社区量化版的底座（Apache-2.0 开源）。

- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** · moonshotai · 👍 1,175 · ⬇ 713,992
  月之暗面 Kimi K2.7 代码专用版本，多模态特征提取 + 压缩张量支持，主打编程场景。

- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking)** · GnLOLot · 👍 159 · ⬇ 5,494
  基于 MiniCPM-5 的 1B 小型强推理模型，融合 Claude Opus 风格的思维链风格。

- **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** · Cactus-Compute · 👍 292 · ⬇ 950
  专注于 function-calling / tool-use 场景的轻量模型，JAX 实现，适合 Agent 工具调用研究。

### 🎨 多模态与生成

- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** · thinkingmachines · 👍 1,270 · ⬇ 13,462
  新一代多模态 MoE 模型，支持图像-文本-音频融合的对话交互，是本周最具创新性的旗舰模型之一。

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** · google · 👍 3,297 · ⬇ 11,987,240
  Gemma 4 指令微调版，下载量超千万，多模态对话基座模型，社区生态强劲。

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** · baidu · 👍 2,444 · ⬇ 2,122,848
  百度发布的"无限"长度 OCR 模型，支持超长文本识别，是当前 OCR 领域标杆。

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** · empero-ai · 👍 2,369 · ⬇ 2,117,323
  基于 Qwen3.5 的 1M 上下文推理模型，下载量超 200 万，长上下文场景的明星项目。

- **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)** · ATH-MaaS · 👍 217 · ⬇ 14,587
  面向实际文档场景的 OCR 模型，构建于 Qwen3.5 之上。

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** · HauhauCS · 👍 2,937 · ⬇ 2,007,025
  Qwen3.6 35B-A3B MoE 视觉多模态去审查微调版，本周点赞数仅次于 GLM-5.2 与 Gemma-4。

- **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)** · Wan-AI · 👍 145 · ⬇ 2,408
  14B 图生视频扩散模型，Diffusers 架构，专注舞蹈动作生成。

- **[OpenMOSS-Team/MOSS-VL-Realtime](https://huggingface.co/OpenMOSS-Team/MOSS-VL-Realtime)** · OpenMOSS-Team · 👍 89 · ⬇ 544
  实时视频-文本理解模型，面向流式视觉问答场景。

- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** · OpenMOSS-Team · 👍 292 · ⬇ 87,533
  端到端音频转写+说话人分离模型，融合 ASR 与 Speaker Diarization。

### 🔧 专用模型

- **[nvidia/Nemotron-3-Embed-1B-BF16](https://huggingface.co/nvidia/Nemotron-3-Embed-1B-BF16)** · nvidia · 👍 87 · ⬇ 61,708
  NVIDIA 嵌入模型系列 Nemotron 3 的 1B BF16 版本，主打句子相似度与检索增强。

- **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)** · openbmb · 👍 135 · ⬇ 0
  面壁 MiniCPM 机器人操控 VLA（Vision-Language-Action）模型。

- **[openbmb/MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack)** · openbmb · 👍 100 · ⬇ 0
  视觉-语言-动作跟踪模型，面向机器人轨迹预测。

### 📦 微调与量化

- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** · prism-ml · 👍 542 · ⬇ 1,262,894
  27B 模型的 1-bit 极致量化 GGUF，下载量破百万，是低比特部署的标志性项目。

- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** · prism-ml · 👍 855 · ⬇ 338,945
  27B 模型的三元（±1, 0）2-bit 量化版本，实验性质的极限压缩。

- **[prism-ml/Bonsai-27B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit)** · prism-ml · 👍 154 · ⬇ 21,690
  面向 Apple Silicon MLX 框架的 1-bit 版本，适合 Mac 本地推理。

- **[prism-ml/Ternary-Bonsai-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-mlx-2bit)** · prism-ml · 👍 130 · ⬇ 17,869
  MLX 框架的 Ternary 2-bit 版本。

- **[AngelSlim/Hy3-GGUF](https://huggingface.co/AngelSlim/Hy3-GGUF)** · AngelSlim · 👍 149 · ⬇ 109,749
  腾讯 Hy3 的社区量化版（Apache-2.0）。

- **[unsloth/inkling-GGUF](https://huggingface.co/unsloth/inkling-GGUF)** · unsloth · 👍 111 · ⬇ 6,771
  Unsloth 团队对 Inkling 多模态 MoE 的 GGUF 量化，支持图像/音频-文本对话。

- **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** · conradlocke · 👍 458 · ⬇ 0
  基于 Krea-2 底模的身份保持图像编辑 LoRA，面向 ComfyUI 工作流。

- **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** · Alissonerdx · 👍 214 · ⬇ 0
  LTX-Video 的身份保持参考生视频 LoRA（reference-to-video）。

---

## 生态信号

本周榜单呈现三大显著趋势：**第一，Qwen 系列成为社区微调与量化的"通用底座"**，至少有 9 款热门模型基于 Qwen3.5/3.6 衍生，覆盖 OCR、推理、对话、视觉等任务，体现出阿里通义开源生态的强辐射力。**第二，极端比特量化走向主流**——prism-ml 团队接连推出 1-bit 与 Ternary（2-bit）量化的 27B 模型，下载量合计近 170 万，标志着大模型在消费级硬件上的部署门槛被大幅拉低。**第三，中国大模型厂商集中爆发**：智谱、百度、腾讯、月之暗面、面壁等头部团队本周均有重磅更新，且全部采用开源权重策略，与 Google Gemma 4 形成中外开源竞争新格局。值得关注的是，去审查（uncensored）与 VLA 机器人模型成为社区微调的两条热门赛道。

---

## 值得探索

1. **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** — 罕见的同时支持图像+音频+文本的多模态 MoE 架构，是少有的原生多模态融合实验，适合多模态 Agent 研究者深入剖析。

2. **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** — 27B 级别模型的三元量化在消费级 GPU 上即可推理，是观察"模型压缩极限"与"质量-效率曲线"的最佳样本。

3. **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*