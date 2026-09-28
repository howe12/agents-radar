# Hugging Face 热门模型日报 2026-09-28

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-28 03:02 UTC

---

# Hugging Face 热门模型日报 · 2026-09-28

---

## 一、今日速览

今日 Hugging Face 趋势榜由 **Qwen3.8-27B**（16,431 点赞）强势领跑，**DeepSeek-V4.1-Flash** 与 **Lightricks/LTX-2.5** 紧随其后，分别代表多模态推理与视频生成两大方向。**Qwen-Image-2.1** 生态全面铺开，从官方版本到 Comfy-Org、unsloth、Viggle 等十余个衍生版本同时上榜，体现该图像模型在社区的统治力。与此同时，**2-bit 三元量化（ternary）** 与 **GSQ-RCO 混合精度** 等新型压缩方案走红，预示端侧推理的拐点即将到来。

---

## 二、热门模型分类

### 🧠 语言模型（LLM / 对话 / 指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen | 👍 16,431 | ⬇️ 6,727,629
  当之无愧的本周之星，Qwen3.8 系列多模态旗舰，单周点赞逼近全平台记录，下载量亦已突破 670 万。

- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)** — DeepSeek | 👍 3,815 | ⬇️ 651,078
  兼顾图文输入的轻量化版本，承接 V4 系列的推理能力，在 Agent 与长上下文场景表现亮眼。

- **[XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B)** — XingChen-AGI | 👍 1,784 | ⬇️ 45,028
  29B 总参 / 4B 激活的 MoE 架构对话模型，主打高吞吐对话场景。

- **[yandex/AliceAI-Foundation-80B-A3B-Base](https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base)** — Yandex | 👍 349 | ⬇️ 3,456
  俄罗斯首个 80B-A3B 基础模型，Yandex 的 AliceAI 开源底座，对多语言研究意义重大。

- **[Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1)** — Altworld | 👍 740 | ⬇️ 5,904
  基于 Qwen3.5 的文本生成模型，主打高质量创意写作与人文风格输出。

---

### 🎨 多模态与生成（图像 / 视频 / 音频 / 文本到 X）

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks | 👍 5,341 | ⬇️ 1,601,089
  图生视频 / 文生视频新一代旗舰，单文件发布版，社区部署门槛极低，下载已破 160 万。

- **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)** — Qwen | 👍 2,505 | ⬇️ 52,804
  阿里 Qwen 系列最新图像生成 + 编辑模型，扩散框架下的官方原版。

- **[XiaomiMiMo/MiMo-V2.6-Pro-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL)** — XiaomiMiMo | 👍 558 | ⬇️ 75,079
  小米 MiMo V2.6 Pro 强化学习版本，多模态旗舰，主打推理 + 视觉融合。

- **[XiaomiMiMo/MiMo-V2.6-Flash-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL)** — XiaomiMiMo | 👍 491 | ⬇️ 25,661
  MiMo 系列的轻量化 RL 版本。

- **[XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B)** — XiaomiMiMo | 👍 525 | ⬇️ 8,839
  以 Qwen3.5 为底座蒸馏得到的 9B 多模态模型，体量小但能力对齐大模型。

- **[XingChen-AGI/TeleOCR](https://huggingface.co/XingChen-AGI/TeleOCR)** — XingChen-AGI | 👍 608 | ⬇️ 27,837
  基于 Qwen2.5-VL 的远程 / 工业级 OCR 模型，专注复杂场景文字识别。

- **[apple/LensVLM-9B](https://huggingface.co/apple/LensVLM-9B)** — Apple | 👍 245 | ⬇️ 1,740
  Apple 推出的 9B 视觉-语言模型，基于 Qwen3.5 架构，针对屏幕理解与 UI 场景优化。

- **[inclusionAI/Ming-Image-0.1-Design](https://huggingface.co/inclusionAI/Ming-Image-0.1-Design)** — inclusionAI | 👍 302 | ⬇️ 0
  阿里旗下 inclusionAI 发布的图像生成设计专用模型，刚上线即冲入趋势榜。

- **[Edge0/Audio8-ASR-Infinite](https://huggingface.co/Edge0/Audio8-ASR-Infinite)** — Edge0 | 👍 1,142 | ⬇️ 19,434
  支持流式 / 超长音频的 ASR 模型，主打无限时长语音转写。

- **[netease-youdao/Confucius4-R2T2](https://huggingface.co/netease-youdao/Confucius4-R2T2)** — Netease Youdao | 👍 438 | ⬇️ 8,243
  网易有道基于 Qwen3-ASR 的"孔子 4 代"中文 ASR 模型。

- **[nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization)** — NVIDIA | 👍 411 | ⬇️ 22,514
  NVIDIA NeMo 体系的第三代说话人 diarization 模型，用于多人语音分离与时间戳识别。

- **[akhilaaa3/Jev-Omni](https://huggingface.co/akhilaaa3/Jev-Omni)** — akhilaaa3 | 👍 272 | ⬇️ 248
  基于 Gemma4 统一架构的 Omni 模型，覆盖图文与文本分类的多任务小型全能模型。

---

### 🔧 专用模型（代码 / 数学 / 嵌入 / 分类）

- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)** — convaiinnovations | 👍 4,112 | ⬇️ 0
  System-One 风格的"决策标定"文本分类模型，单周点赞破 4 千，但下载为零——典型"发布即爆款"预热型项目。

- **[AlexWortega/openjev](https://huggingface.co/AlexWortega/openjev)** — AlexWortega | 👍 611 | ⬇️ 0
  基于 Qwen3.5 的 NLI 跨编码器，主打零样本蕴含判断与开放域验证。

- **[Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B)** — Contrastive-LM | 👍 412 | ⬇️ 766
  对比学习范式的 8B 重排 / 验证器，专为 RAG 与 verifier 场景设计。

- **[fastino/GLiNER2.5-Decide](https://huggingface.co/fastino/GLiNER2.5-Decide)** — fastino | 👍 208 | ⬇️ 19,757
  GLiNER 2.5 抽取 + 意图分类模型，在 NER 与结构化决策任务中被广泛采用。

- **[convaiinnovations/laya-multilingual](https://huggingface.co/convaiinnovations/laya-multilingual)** — convaiinnovations | 👍 306 | ⬇️ 0
  Laya 系列的多语言扩展版，融合 mmbert 多语言表征。

---

### 📦 微调与量化（社区微调 / GGUF / AWQ / 量化压缩）

- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — prism-ml | 👍 2,195 | ⬇️ 3,343,748
  **2-bit 三元量化（ternary）** 27B 模型，单周点赞超 2 千，下载突破 330 万——极低比特量化的代表案例，端侧部署潜力极大。

- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — ISTA-DASLab | 👍 1,780 | ⬇️ 1,608,439
  使用 **GSQ + RCO 混合精度** 量化的 Qwen3.8-27B，学术派前沿压缩方案，下载已破 160 万。

- **[abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF)** — abenzerps | 👍 2,099 | ⬇️ 964,220
  Qwen-Image-2.1 的社区 GGUF 版本，针对 ComfyUI 工作流做了深度适配。

- **[Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1)** — Comfy-Org | 👍 809 | ⬇️ 3,987,373
  ComfyUI 官方的单文件版 Qwen-Image-2.1，下载接近 400 万，工作流友好度极高。

- **[Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo)** — Viggle | 👍 345 | ⬇️ 133,151
  Qwen-Image-2.1 的 Turbo LoRA 微调版，主打快速图生图。

- **[unsloth/Qwen-Image-2.1-GGUF](https://huggingface.co/unsloth/Qwen-Image-2.1-GGUF)** — unsloth | 👍 271 | ⬇️ 194,341
  unsloth 出品的官方 GGUF 量化版，专注于低显存推理。

- **[pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF](https://huggingface.co/pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF)** — pottokao | 👍 302 | ⬇️ 145,246
  针对 Qwen-Image-2.1 文本编码器的 Heretic FP8 GGUF 量化方案。

---

## 三、生态信号

**Qwen 家族全面统治**：从语言（Qwen3.8-27B）、图像（Qwen-Image-2.1）到 OCR、ASR、蒸馏变体，Qwen 生态几乎渗透了榜单的每一个分类，"通义系"已实质上成为 Hugging Face 的事实标准底座。

**小米 MiMo V2.6 系列三连登场**：Pro-RL、Flash-RL、Distill-Qwen-9B 同日上榜，覆盖旗舰 / 轻量 / 蒸馏三档，是国产厂商多模态基建的又一次集中输出。

**量化进入"亚 4-bit 时代"：Ternary-Bonsai 的 2-bit 三元量化** 与 **ISTA-DASLab 的 GSQ-RCO 混合精度** 共同把"低位宽 + 质量保留"的工程可能性向前推了一大步；Qwen-Image-2.1 系列更衍生出 6+ 个量化变体，反映出**"官方权重 → 社区压缩 → 工作流嵌入"**已成标准链路。

**闭源与开源的张力**：Apple LensVLM-9B、NVIDIA Nemotron-3-Diarization、Yandex AliceAI-Foundation 等头部厂商持续开源核心权重，而 convaiinnovations/laya 这类"高赞零下载"项目则提示榜单上"被关注 ≠ 被使用"的认知鸿沟。

---

## 四、值得探索

1. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — 27B 模型被压到 2-bit 三元精度且下载量级在 330 万以上，是检验"低位宽能否

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*