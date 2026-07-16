# Hugging Face 热门模型日报 2026-07-16

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-16 02:01 UTC

---

# Hugging Face 热门模型日报 · 2026-07-16

---

## 📰 今日速览

今日 Hugging Face 趋势榜由 **GLM-5.2** 强势登顶（4,000 点赞），这款来自 zai-org 的新一代 MoE-DSA 架构模型代表了国产基座模型的重大跃迁。**Qwen3.5/3.6 生态持续统治榜单**，社区衍生出大量微调、量化、视觉变体，"Claude 蒸馏 + Qwen 底座"成为主流配方。**极致量化技术集中爆发**——三元（2-bit）、二值（1-bit）、NVFP4、INT4 等前沿方案同台竞技。同时 **Agentic / Coding / OCR** 等垂类模型热度上升，Baidu Unlimited-OCR 创下 170 万次下载。

---

## 🧠 语言模型（LLM / 对话 / 指令）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|---|---|---|---|---|
| [GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,000 | 489,611 | 今日最热门基座模型，新一代 `glm_moe_dsa` 架构，定位通用对话与推理 |
| [Hy3](https://huggingface.co/tencent/Hy3) | tencent | 800 | 10,406 | 腾讯混元新一代文本生成模型，开源发布即登榜 |
| [Agents-A1](https://huggingface.co/InternScience/Agents-A1) | InternScience | 556 | 30,539 | 基于 Qwen3.5-MoE 的 Agent 专用模型，主打工具调用 |
| [Nemotron-Labs-Audex-30B-A3B](https://huggingface.co/nvidia/Nemotron-Labs-Audex-30B-A3B) | nvidia | 156 | 1,332 | NVIDIA 实验室 30B-A3B MoE 模型，融合多能力训练 |
| [needle](https://huggingface.co/Cactus-Compute/needle) | Cactus-Compute | 236 | 571 | 基于 JAX 的 function-calling 工具调用专用模型 |
| [MiniCPM5-1B-Claude-Opus-Fable5-Thinking](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking) | GnLOLot | 129 | 3,483 | MiniCPM5-1B 底座 + Claude Opus 蒸馏，主打思维链推理 |

---

## 🎨 多模态与生成（图像 / 视频 / 音频 / OCR）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|---|---|---|---|---|
| [Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 2,760 | 2,443,871 | 榜单下载量冠军，Qwen3.6 MoE 视觉模型 + "Uncensored" 微调 |
| [Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,216 | 2,006,265 | **1M 超长上下文** Qwen3.5 视觉模型 GGUF 量化版，社区现象级作品 |
| [Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 2,002 | 1,715,301 | 百度官方 OCR 模型，"无限制" 场景识别，下载量超百万 |
| [Inkling](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 371 | 0 | 同时支持 image-text + audio-text 的统一多模态模型，新锐发布 |
| [ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B) | bottlecapai | 366 | 6,208 | Qwen3.6-27B 视觉增强 + 思维链变体 |
| [krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit) | conradlocke | 307 | 0 | Krea-2 底座的 identity-preservation LoRA，ComfyUI 工作流 |
| [lingbot-world-v2-14b-causal-fast](https://huggingface.co/robbyant/lingbot-world-v2-14b-causal-fast) | robbyant | 99 | 0 | 14B 图生视频 World Model，强调 causal 推理速度 |
| [LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID) | Alissonerdx | 154 | 0 | LTX-Video 平台的 IPT2V 人脸保 LoRA |
| [M87](https://huggingface.co/mgwr/M87) | mgwr | 126 | 2,408 | Krea-2-Turbo 底座的 Diffusion LoRA |
| [Giga-World-1](https://huggingface.co/open-gigaai/Giga-World-1) | open-gigaai | 135 | 0 | 开放世界生成模型，Apache-2.0 |
| [lingbot-video-moe-30b-a3b](https://huggingface.co/robbyant/lingbot-video-moe-30b-a3b) | robbyant | 111 | 700 | 30B-A3B MoE 视频生成模型 |
| [OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 118 | 745 | Qwen3.5 底座 OCR 第二代，主打文档理解 |

---

## 🔧 专用模型（代码 / 推理 / 音频）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|---|---|---|---|---|
| [gemma-4-12B-agentic-fable5-composer2.5-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF) | yuxinlu1 | 1,198 | 468,629 | **agentic coding 专用**，Gemma-4 底座 + tau2 benchmark 调优 + Terminal 工具 |
| [Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF) | deepreinforce-ai | 894 | 1,533,354 | 35B 推理 / RL 增强模型，MIT 开源 |
| [MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize) | OpenMOSS-Team | 215 | 65,109 | 语音转写 + 说话人分离联合模型 |

---

## 📦 微调与量化（GGUF / AWQ / 极低比特）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|---|---|---|---|---|
| [Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 918 | 0 | 高赞 Jinja 模板集合，修复 Qwen 官方 chat-template 问题 |
| [Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 475 | 23 | **2-bit 三元量化** Bonsai-27B，前沿压缩实验 |
| [Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 270 | 513 | **1-bit 二值量化** 27B 模型，极限压缩代表 |
| [Qwen3.6-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4) | unsloth | 208 | 1,599,150 | unsloth 出品 NVFP4 量化版，Blackwell GPU 友好 |
| [GLM-5.2-colibri-int4](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4) | jlnsrk | 111 | 2,188 | GLM-5.2 的 INT4 + expert-streaming + CPU 优化版本 |
| [Hy3-GGUF](https://huggingface.co/AngelSlim/Hy3-GGUF) | AngelSlim | 109 | 0 | 腾讯 Hy3 官方 GGUF 量化版，Apache-2.0 |
| [Qwythos-9B-v2-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-v2-GGUF) | empero-ai | 144 | 70,260 | Qwythos 第二代 GGUF 版本 |
| [Qwythos-9B-v2](https://huggingface.co/empero-ai/Qwythos-9B-v2) | empero-ai | 123 | 3,959 | Qwythos 第二代原版 |

---

## 📡 生态信号

**Qwen3.5/3.6 已成为开源社区事实标准底座**——今日榜单上至少 9 个衍生模型以其为基础，覆盖视觉、Agent、OCR、Uncensored、量化、长上下文等几乎所有方向。**"Claude 蒸馏 + Qwen 底座"** 是当下最热门的社区配方（MiniCPM5-Fable5、Qwythos-Mythos、gemma-agentic-Fable5），反映出开源与闭源模型能力差的快速收敛。

**量化技术进入"亚比特时代"**：prism-ml 同时推出 2-bit 三元（Bonsai）和 1-bit 二值版本，标志着研究界对极限压缩的持续探索；与此同时，NVFP4（4-bit 浮点）和 INT4 已成为生产部署标准，unsloth 的 NVFP4 版本下载量突破 160 万，Blackwell 生态加速渗透。

**Agentic 与垂类模型异军突起**——gemma-4 agentic、InternScience Agents-A1、Cactus-Compute needle 共同构建了从底层 base 到专用 tool-use 的完整栈；OCR（百度、ATH）、视频（lingbot、LTX）、World Model（Giga-World, lingbot-world）三个垂类在今日榜单上密度显著上升。值得注意的是，**基座厂商发布与社区微调形成清晰分工**：GLM-5.2、Hy3 等由大厂主导权重首发，而下载量与话题度则被 HauhauCS、empero-ai、yuxinlu1 等社区作者接住。

---

## ⭐ 值得探索

1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — 今日榜首，新一代 `glm_moe_dsa` 架构首次曝光，490k 下载说明已经被大量项目集成测试，是观察下一代国产基座能力上限的最佳窗口。

2. **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** — 把 **1M token

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*