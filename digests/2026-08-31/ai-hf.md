# Hugging Face 热门模型日报 2026-08-31

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-31 02:55 UTC

---

# 📊 Hugging Face 热门模型日报
**2026-08-31**

---

## 🔥 今日速览

今日榜单呈现**中国厂商全面主导**的局面——Qwen3.8-27B 以 **13,355** 点赞稳居榜首，Kimi-K3 与 MiniMax-H3 分列二三；榜单中 11 个 Qwen3.8 衍生版本（包含 6 个社区 "Uncensored/Abliterated" 变体）说明该系列正成为新的社区微调母体。**视频生成**依旧是最大增量赛道，MiniMax-H3 及其 FastVideo/ControlNet/LoRA 工具链形成完整生态。同时，DeepSeek-V4-Flash 与 zai-org/GLM-5.3 的强势上榜，标志着头部开源 LLM 进入"周更级"军备竞赛。

---

## 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | 点赞 | 下载 |
|------|------|------|------|
| **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** | Qwen | 13,355 | 4.51M |
| **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** | moonshotai | 11,102 | 2.79M |
| **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** | deepseek-ai | 3,825 | 4.58M |
| **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** | Qwen | 4,395 | 122K |
| **[zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)** | zai-org | 1,725 | 347K |
| **[zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3)** | zai-org | 1,350 | 50K |
| **[tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview)** | tencent | 320 | 2.1K |
| **[ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B)** | ornith-ai | 507 | 147K |
| **[thomsonreuters/Thomson-1.0-Small](https://huggingface.co/thomsonreuters/Thomson-1.0-Small)** | thomsonreuters | 159 | 1.0K |
| **[pipecat-ai/phonellm-alpha-1](https://huggingface.co/pipecat-ai/phonellm-alpha-1)** | pipecat-ai | 151 | 4.0K |

**亮点解读：**
- **Qwen3.8-27B** 是本周绝对王者，多模态 + 高点赞/下载比说明它已成为社区事实基座模型。
- **Kimi-K3** 凭借 11k+ 点赞重返榜单，feature-extraction + compressed-tensors 标签暗示其在推理架构上的新尝试。
- **DeepSeek-V4-Flash** 4.58M 下载量级说明 Flash 版本已成为生产部署首选。

---

## 🎨 多模态与生成（图像 / 视频 / 音频）

| 模型 | 作者 | 点赞 | 下载 |
|------|------|------|------|
| **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** | MiniMaxAI | 4,661 | 5.26M |
| **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** | Lightricks | 2,270 | 1.14M |
| **[FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree)** | FastVideo | 195 | 0 |
| **[alibaba-pai/MiniMax-H3-Fun-Controlnet-Union](https://huggingface.co/alibaba-pai/MiniMax-H3-Fun-Controlnet-Union)** | alibaba-pai | 163 | 5.5K |
| **[alibaba-pai/MiniMax-H3-Acc-LoRAs](https://huggingface.co/alibaba-pai/MiniMax-H3-Acc-LoRAs)** | alibaba-pai | 152 | 23.7K |
| **[Kijai/MiniMax-H3-experimental](https://huggingface.co/Kijai/MiniMax-H3-experimental)** | Kijai | 364 | 0 |
| **[BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2)** | BreezeBlue | 214 | 1.8K |

**亮点解读：**
- **MiniMax-H3** 已形成"基座 + 加速器 + ControlNet + LoRA + 实验分支"的完整视频生成生态，是目前最成熟的开放视频模型栈。
- **LTX-2.5** 是榜单上唯一的非中国厂商视频模型，4 种任务标签（i2v/t2v/v2v/it2v）覆盖面广。
- **FastVideo** 的 4-step 蒸馏预览值得关注——若落地意味着视频生成实时化的可能性。

---

## 🔧 专用模型（代码 / 数学 / 垂直领域）

| 模型 | 作者 | 点赞 | 下载 |
|------|------|------|------|
| **[peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF](https://huggingface.co/peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF)** | peculiar-ragdoll | 144 | 87.8K |

**亮点解读：**
- 榜单中代码类模型仅此一家，基于 qwen35moe 架构 + A3B 激活参数 + imatrix 校准，主打低显存部署编程任务。

---

## 📦 微调与量化（社区微调 / GGUF / AWQ）

| 模型 | 作者 | 点赞 | 下载 |
|------|------|------|------|
| **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** | unsloth | 3,246 | **8.84M** |
| **[orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8)** | orcarouter | 1,288 | 302K |
| **[orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX)** | orcarouter | 1,236 | 109K |
| **[OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED)** | OBLITERATUS | 949 | 726K |
| **[JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF)** | JonathanColetti | 853 | 1.99M |
| **[HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)** | HauhauCS | 787 | 1.16M |
| **[unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF)** | unsloth | 604 | 328K |
| **[orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF)** | orcarouter | 582 | 238K |
| **[huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF)** | huihui-ai | 458 | 1.62M |
| **[unsloth/GLM-5.3-Flash-GGUF](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF)** | unsloth | 291 | 46K |
| **[Qwen/Qwen3.8-Flash-Next-FP8](https://huggingface.co/Qwen/Qwen3.8-Flash-Next-FP8)** | Qwen | 161 | 77K |
| **[orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF)** | orcarouter | 123 | 43K |

**亮点解读：**
- **unsloth** 的 Qwen3.8-27B-GGUF 下载量高达 **884 万次**，是全榜单下载第一，确立其作为开源 LLM 量化分发中心的地位。
- Qwen3.8-27B 的 "Uncensored/Abliterated" 变体出现 **6 次**（覆盖 MLX/FP8/GGUF），反映社区在权重可访问模型上做安全约束去除的高度活跃。

---

## 🌐 生态信号

**Qwen3.8 系列统治力惊人**——前 30 名中至少 11 个与其相关，从 Qwen 官方到 unsloth/orcarouter/huihui 等十余家社区共同构建衍生栈。**中国厂商整体占榜 80%+**，包括 Qwen、MiniMax、Kimi、DeepSeek、GLM、Hunyuan、阿里 PAI、腾讯，呈现"模型-加速器-微调-分发"完整闭环。**开源权重继续碾压闭源**——所有上榜模型均开放权重，可下载部署。**量化与微调高度集中于单一母模**（Qwen3.8-27B），说明社区已形成"以一款旗舰模型为中心进行格式分叉"的成熟工作流；FP8/MLX/GGUF 三种格式同步繁荣，对应 Apple Silicon 与消费级 GPU 两类部署场景。值得警惕的是 "Abliterated/Uncensored" 类变体激增，反映出对中文开源 LLM 的安全约束去除需求旺盛。

---

## ✨ 值得探索

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 本周最值得下载体验的旗舰基座，多模态 + 4.5M 下载验证稳定性，是构建本地 RAG/Agent 的首选基模。

2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — 视频生成赛道当之无愧的标杆，配合 [alibaba-pai/MiniMax-H3-Acc-LoRAs](https://huggingface.co/alibaba-pai/MiniMax-H3-Acc-LoRAs) 可快速实现可控视频生成。

3. **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** — 下载量级（4.58M）证明其生产可用性，"Flash" 定位为低成本推理，研究性价比优化的必看对象。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*