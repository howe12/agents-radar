# Hugging Face 热门模型日报 2026-08-04

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-04 01:55 UTC

---

# 🤗 Hugging Face 热门模型日报
**日期：2026-08-04**

---

## 📰 今日速览

今日 Hugging Face 趋势榜呈现明显的"国产模型集中爆发"格局：**Moonshot 的 Kimi-K3 以近 10k 点赞遥遥领先**，成为本周绝对主角；**百度 Unlimited-OCR** 与 **Z.ai 的 GLM-5.2** 紧随其后，下载量均破 200 万，显示中文 AI 在长上下文与垂直 OCR 任务的强势渗透。视频生成侧，**MiniMaxAI/MiniMax-H3** 的 ComfyUI 工作流整合显著拉动了上下游生态；社区层面，**Qwen3.6-35B-A3B MoE 架构**仍是本周 GGUF/微调玩法的"基座模板"，NVFP4、INT8 等新量化方案开始进入主流视野。

---

## 🧠 语言模型（LLM、对话模型、指令微调）

- **moonshotai/Kimi-K3** — [HF 链接](https://huggingface.co/moonshotai/Kimi-K3)
  作者：moonshotai | ⭐ 9,854 | ⬇ 967,622
  > Moonshot 第三代旗舰，多模态特征提取与压缩张量支持；点赞数断层第一，是本周最具话题性的国产基础大模型。

- **zai-org/GLM-5.2** — [HF 链接](https://huggingface.co/zai-org/GLM-5.2)
  作者：zai-org | ⭐ 4,798 | ⬇ 2,180,509
  > 智谱 GLM 系列新一代 MoE-DSA 架构对话模型，200 万+ 下载量显示其在生产环境的广泛落地。

- **deepseek-ai/DeepSeek-V4-Flash** — [HF 链接](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)
  作者：deepseek-ai | ⭐ 1,991 | ⬇ 2,746,291
  > DeepSeek V4 的轻量版本，本周下载量榜首，专为高频推理场景设计的对话模型。

- **deepseek-ai/DeepSeek-V4-Flash-0731** — [HF 链接](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)
  作者：deepseek-ai | ⭐ 2,062 | ⬇ 236,076
  > V4-Flash 的 0731 checkpoint 更新版本，关注新版本能力差异的用户首选。

- **poolside/Laguna-S-2.1** — [HF 链接](https://huggingface.co/poolside/Laguna-S-2.1)
  作者：poolside | ⭐ 910 | ⬇ 81,584
  > Poolside 编码导向 LLM 的最新版本，专注软件工程与代码任务，与传统对话模型形成差异化定位。

- **Nanbeige/Nanbeige4.2-3B** — [HF 链接](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)
  作者：Nanbeige | ⭐ 652 | ⬇ 34,705
  > 南培 4.2 系列 3B 小型 LLM，主打极致性价比的本地部署场景。

- **amd/Instella-MoE-16B-A3B-Think** — [HF 链接](https://huggingface.co/amd/Instella-MoE-16B-A3B-Think)
  作者：amd | ⭐ 149 | ⬇ 2,078
  > AMD 推出的 16B-A3B 思考型 MoE 模型，采用 DeepSeek V3 架构思路，是硬件厂商下场做基座的典型案例。

---

## 🎨 多模态与生成（图像、视频、音频、文本到 X）

- **MiniMaxAI/MiniMax-H3** — [HF 链接](https://huggingface.co/MiniMaxAI/MiniMax-H3)
  作者：MiniMaxAI | ⭐ 1,473 | ⬇ 0
  > 全新文生视频/图生视频多模态视频生成模型，本周视频领域最热，本地化潜力引发社区期待。

- **Comfy-Org/MiniMax-H3** — [HF 链接](https://huggingface.co/Comfy-Org/MiniMax-H3)
  作者：Comfy-Org | ⭐ 448 | ⬇ 2
  > 官方 ComfyUI 工作流整合版本，让 MiniMax-H3 直接接入节点式生成管道，降低使用门槛。

- **baidu/Unlimited-OCR** — [HF 链接](https://huggingface.co/baidu/Unlimited-OCR)
  作者：baidu | ⭐ 3,847 | ⬇ 2,601,062
  > 百度推出的不限长度 OCR 多模态模型，下载量超 260 万，是企业文档数字化场景的当下首选。

- **microsoft/Mage-VL** — [HF 链接](https://huggingface.co/microsoft/Mage-VL)
  作者：microsoft | ⭐ 233 | ⬇ 431,487
  > 微软新一代视觉语言模型，强调通用多模态理解能力，企业级应用友好。

- **thinkingmachines/Inkling-Small** — [HF 链接](https://huggingface.co/thinkingmachines/Inkling-Small)
  作者：thinkingmachines | ⭐ 264 | ⬇ 8,504
  > 小型多模态对话模型，主打轻量级部署与边缘场景推理。

- **owensong/Inflect-Micro-v2** — [HF 链接](https://huggingface.co/owensong/Inflect-Micro-v2)
  作者：owensong | ⭐ 398 | ⬇ 1,944
  > 极致轻量的本地 TTS 模型，支持 CPU/边缘 AI 部署，是离线语音合成的代表性方案。

- **Audio8/Audio8-TTS-Preview-0.6b** — [HF 链接](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b)
  作者：Audio8 | ⭐ 212 | ⬇ 4,609
  > 0.6B 参数预览版 TTS 模型，主打高质量语音合成特性提取。

- **lodestones/Kroma** — [HF 链接](https://huggingface.co/lodestones/Kroma)
  作者：lodestones | ⭐ 159 | ⬇ 0
  > 基于 Krea2 的文生图 LoRA，配合 ComfyUI 工作流使用。

---

## 🔧 专用模型（代码、数学、医疗、嵌入）

- **Kwaipilot/KAT-Coder-V2.5-Dev** — [HF 链接](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)
  作者：Kwaipilot | ⭐ 445 | ⬇ 14,339
  > 基于 Qwen3.5-MoE 的代码专用 LLM，开发版定位，是编程 Agent 场景的有力候选。

- **microsoft/Fara1.5-27B** — [HF 链接](https://huggingface.co/microsoft/Fara1.5-27B)
  作者：microsoft | ⭐ 268 | ⬇ 2,988
  > 微软推出的计算机使用代理（Computer-use）多模态模型，27B 体量，桌面自动化方向值得关注。

- **baidu/Unlimited-OCR** — [HF 链接](https://huggingface.co/baidu/Unlimited-OCR)
  （同上，跨入"专用"领域的旗舰 OCR 模型）

---

## 📦 微调与量化（社区微调、GGUF、AWQ）

- **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive** — [HF 链接](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)
  作者：HauhauCS | ⭐ 3,270 | ⬇ 1,895,741
  > 本周微调类冠军：Qwen3.6-35B-A3B MoE 的"激进去审查"版本，190 万下载说明社区需求强烈。

- **DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF** — [HF 链接](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)
  作者：DavidAU | ⭐ 1,433 | ⬇ 1,550,034
  > DavidAU 又一长命名"反审查"MTP 风格融合微调，Heretic 工具链加持，下载量同样破百万。

- **LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF** — [HF 链接](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF)
  作者：LuffyTheFox | ⭐ 344 | ⬇ 287,745
  > 经典 Hermes 数据集驱动的 Qwen3.6 MoE 微调，社区持续验证其指令跟随能力。

- **EschaLabs/Qwen3.6-35B-A3B-Escha-W2** — [HF 链接](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2)
  作者：EschaLabs | ⭐ 156 | ⬇ 2,682
  > W2（弱监督/第二轮）训练策略的 MoE 微调，探索少量数据下的对齐效果。

- **DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF** — [HF 链接](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF)
  作者：DavidAU | ⭐ 237 | ⬇ 304,420
  > 9B 轻量级去审查方案，NEO iMatrix 与 MTP 双优化，适合低显存本地推理。

- **empero-ai/Qwythos-27B-v1** — [HF 链接](https://huggingface.co/empero-ai/Qwythos-27B-v1)
  作者：empero-ai | ⭐ 119 | ⬇ 1,736
  > 基于 Qwen3.5 的 27B 多模态微调新作，角色扮演与对话风格社区热衷。

- **nota-ai/Solar-Open2-250B-Nota-NVFP4** — [HF 链接](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4)
  作者：nota-ai | ⭐ 168 | ⬇ 68,778
  > 250B 体量超大模型的 **NVFP4 量化**版本，配合 vLLM 推理，是新量化格式的代表案例。

- **unsloth/DeepSeek-V4-Flash-0731-GGUF** — [HF 链接](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF)
  作者：unsloth | ⭐ 429 | ⬇ 69,656
- **unsloth/Kimi-K3-GGUF** — [HF 链接](https://huggingface.co/unsloth/Kimi-K3-GGUF)
  作者：unsloth | ⭐ 282 | ⬇ 128,215
- **unsloth/Kimi-K3** — [HF 链接](https://huggingface.co/unsloth/Kimi-K3)
  作者：unsloth | ⭐ 242 | ⬇ 1,324
  > Unsloth 对头部模型的快速 GGUF 量化复刻，体现社区"KOL 即时跟进"的工作流。

- **ethanfel/Qwen3-VL-32B-Ultra-Heretic-MiniMax-H3-ComfyUI-INT8-ConvRot** — [HF 链接](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-MiniMax-H3-ComfyUI-INT8-ConvRot)
  作者：ethanfel | ⭐

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*