# Hugging Face 热门模型日报 2026-07-30

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-30 01:51 UTC

---

# Hugging Face 热门模型日报 · 2026-07-30

---

## 📰 今日速览

今日 Hugging Face 热点由 **Moonshot AI 的 Kimi-K3** 强势领跑，单周点赞近 8.7k，远超第二位。**Qwen3.6-35B-A3B**、**GLM-5.2** 与 **GLM-5.2-Vision** 构成本周第二梯队，反映智谱 / 阿里阵营持续高产。社区层面，"**未审查版（uncensored）+ GGUF / NVFP4 / 三值量化**"的派生模型密集霸榜，unsloth、DavidAU、prism-ml 等量化与去对齐作者极为活跃；同时 OCR（百度、OvisOCR2）、边缘端 TTS（owensong）和 1-bit/2-bit 量化（prism-ml）等方向均有亮眼新发布。

---

## 🧠 语言模型（LLM / 对话模型 / 指令微调）

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — 智谱新一代 MoE + DSA 架构文本生成模型。点赞 **4,643**，下载 1.27M，标签含 `glm_moe_dsa / conversational`。
- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** — 阿里千问新一代 MoE（35B / 3B 激活），原生支持视觉-语言。点赞 **2,586**，下载 6.16M，是本周下载量最高的旗舰模型之一。
- **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)** — Upstage 开源 250B 级大模型，主打完全开放文本生成。点赞 **696**，下载 4.8k，仍处于早期扩散阶段。
- **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)** — Poolside 的 Laguna 系列 v2.1，主打软件工程场景的文本生成。点赞 **827**，下载 67k。
- **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)** — 南北方 3B 轻量级 LLM，主打高效率小模型。点赞 **555**，下载 18.9k。
- **[fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b)** — 基于 Granite MoE-Hybrid 的 1B 安全/合规专用 LLM。点赞 **233**，下载 7.7k。
- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** — Thinking Machines 的多模态对话模型（`inkling_mm_model`）。点赞 **1,640**，下载 39k。
- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** — Kimi 编程专版 (`kimi_k25`)。点赞 **1,335**，下载 681k，是代码方向的明星派生。

## 🎨 多模态与生成（图像 / 视频 / 音频 / TTS-OCR）

- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — Moonshot 第三代旗舰多模态模型，本周点赞冠军（**8,657**），下载 99k，标签含 `feature-extraction`。
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — 百度推出的"无限 OCR"，支持任意长度文档识别。点赞 **3,516**，下载 2.69M，OCR 赛道的现象级模型。
- **[microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B)** — 微软基于 Qwen3.5 的 27B 视觉-行动模型，专攻 **Computer-Use** 智能体场景。点赞 201，下载 1.5k。
- **[microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL)** — 微软新一代多模态 (`mage_vl`)。点赞 99，下载 702，较小众但代表微软内部研究线。
- **[microsoft/VibeVoice-ASR-BitNet](https://huggingface.co/microsoft/VibeVoice-ASR-BitNet)** — 微软 BitNet 化的语音识别模型，主打极致压缩 ASR。点赞 101，下载 1.7k。
- **[owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2)** — 边缘侧 TTS，主打 CPU 可用、低延迟本地语音合成。点赞 **290**。
- **[owensong/Inflect-Nano-v2](https://huggingface.co/owensong/Inflect-Nano-v2)** — 与 Micro 同源的更小型号，进一步压缩 CPU 部署门槛。点赞 111。
- **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)** — 基于 Qwen3.5 的 OCR 多模态模型。点赞 346，下载 47k，OCR 方向第二。
- **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** — Krea-2 图像编辑 LoRA，专攻身份/角色一致性编辑。点赞 577，下载 0（刚发布）。

## 🔧 专用模型（代码 / 数学 / 嵌入 / 安全）

- **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)** — 蚂蚁快手联合的 KAT-Coder 开发版，基于 Qwen3.5 MoE，主打编码 Agent。点赞 317，下载 6.3k。

## 📦 微调与量化（社区 fine-tune / GGUF / NVFP4 / 三值量化）

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — Qwen3.6-35B-A3B 的激进未审查版，GGUF + Vision + MoE。点赞 **3,171**，下载 1.86M，是本周最热门的社区派生。
- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** — 27B 模型的**三值（2-bit）量化**版本，主打极限压缩。点赞 **1,095**，下载 665k。
- **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** — DavidAU 风格的 Qwen3.6 多配方融合版，GGUF/Heretic/Uncensored。点赞 945，下载 736k。
- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** — 27B 的**1-bit 量化** llama.cpp 模型，点赞 688，下载 2.34M，是"极致低位"方向的代表。
- **[unsloth/Laguna-S-2.1-GGUF](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF)** — unsloth 的 Laguna-S-2.1 量化版本，支持 vLLM。点赞 246，下载 130k。
- **[unsloth/Kimi-K3](https://huggingface.co/unsloth/Kimi-K3)** 与 **[unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF)** — unsloth 紧随官方推出 safetensors 与 GGUF 双向快速派生（点赞 168 / 163），生态响应速度极快。
- **[LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermos-V6-GGUF)** — Qwen3.6 的 Hermes-V6 配方未审查版。点赞 215。
- **[nota-ai/Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4)** — Solar-Open2-250B 的 **NVFP4** 量化版（4-bit 浮点，专为 NVIDIA 新硬件）。点赞 140，下载 6.2k。
- **[baseten/GLM-5.2-Vision-NVFP4](https://huggingface.co/baseten/GLM-5.2-Vision-NVFP4)** — Baseten 推出的 GLM-5.2-Vision NVFP4 量化版（SGLang 推理框架）。点赞 136，下载 2.8k。
- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** — 基于 Qwen3.5 的 9B 推理模型，带 1M 上下文窗口。点赞 **2,516**，下载 1.26M。
- **[DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF)** — 9B 级别的 IMATRIX + MTP 配方未审查模型。点赞 133。

---

## 🌐 生态信号

本周榜单显示出几条非常清晰的生态信号：

**第一，MoE 已成为新发布旗舰的"默认架构"** —— Qwen3.6-35B-A3B、GLM-5.2（`glm_moe_dsa`）、KAT-Coder-V2.5（`qwen3_5_moe`）、Kimi-K3 等头部模型几乎全部走 MoE 路线，"小激活参数 + 大总参数"已成开源 LLM 的标准配方。

**第二，开源权重持续压倒闭源** —— 榜单前 30 中绝大部分是开源/开放权重模型，唯一"封闭血统"代表只有类似 Claude Mythos 等的派生。Solar-Open2-250B、GLM-5.2、Kimi-K3 等国产大模型的开放节奏越来越快。

**第三，社区的"量化与去对齐"两翼齐飞**：
- **量化侧**：unsloth 第一时间复刻官方模型（Kimi-K3 / Laguna-S-2.1），prism-ml 推动 1-bit / 2-bit 极端低位，nota-ai + baseten 则代表 NVFP4 这种"面向 NVIDIA 新硬件"的量产化路径。
- **去对齐侧**：DavidAU、HauhauCS、LuffyTheFox 等作者持续输出 Uncensored/Heretic/NEO 等未审查配方，使 Qwen3.6 一经发布就立刻出现多条社区派生态。

**第四，应用层差异化崛起** —— OCR（百度、OvisOCR）、Computer-Use（Fara1.5）、边缘 TTS（Inflect）、长上下文推理（Qwythos-1M）等**任务专用**模型开始占据独立生态位，而不再是大模型的简单派生。

---

## ⭐ 值得探索

1. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — 本周点赞断层第一的旗舰，建议先在 Hugging Face Spaces 体验其多模态能力，再尝试 unsloth 的 GGUF 版本做本地推理。

2. **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** — 27B 模型 2-bit 量化的实战可行性值得研究：能否在保持可用回答质量的前提下，把消费级显存门槛压到极限？

3. **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** — 9B 体量却标榜 1M 上下文，兼顾推理 + 长文 + GGUF 量化，是测试"中等尺寸 + 超长上下文"实际效用的优质样本。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*