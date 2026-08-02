# Hugging Face 热门模型日报 2026-08-02

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-02 02:08 UTC

---

# 🤗 Hugging Face 热门模型日报
**日期：2026-08-02 · 数据范围：本周点赞榜 Top 30**

---

## 一、今日速览

本周榜单呈现"中国系大厂主导、MoE 与量化并行爆发"的格局：Moonshot **Kimi-K3** 以 9,490 点赞稳居榜首，DeepSeek **V4-Flash** 系列凭双版本强势吸量；Zhipu **GLM-5.2** 与百度 **Unlimited-OCR** 在下载量上分别突破 168 万与 245 万。Qwen3.6 的社区"去审查 / Heretic"微调集群继续霸榜微调区，**Ternary Bonsai 27B** 则让 2-bit 三元量化成为本周最值得关注的技术事件。

---

## 二、热门模型分类

### 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 / 指标 | 一句话说明 |
|---|---|---|
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai · 9,490 ❤️ / 559,924 ⬇️ | 月之暗面新一代旗舰 MoE 多模态，特征提取与压缩张量优化双管齐下，本周榜首 |
| [GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org · 4,737 ❤️ / 1,683,442 ⬇️ | 智谱 GLM-5 系列最新 MoE-DSA 模型，对话与通用文本生成主力 |
| [DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai · 1,948 ❤️ / 2,814,414 ⬇️ | DeepSeek V4 Flash 主版本，下载量本周最高，企业落地首选 |
| [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai · 1,432 ❤️ / 15,366 ⬇️ | V4-Flash 7 月 31 日中间版，主打速度与质量平衡 |
| [Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside · 868 ❤️ / 77,021 ⬇️ | Poolside 代码生成 Laguna 系列再迭代，强调真实软件工程场景 |
| [Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B) | upstage · 717 ❤️ / 13,426 ⬇️ | Upstage 发布的 250B 级开放权重大模型，主打英文长文本 |
| [Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige · 611 ❤️ / 27,892 ⬇️ | 南北方联合实验室的小尺寸高效 LLM，边缘部署友好 |

### 🎨 多模态与生成（图像 / 视频 / 音频 / 文本到 X）

| 模型 | 作者 / 指标 | 一句话说明 |
|---|---|---|
| [Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu · 3,714 ❤️ / 2,457,387 ⬇️ | 百度不限长度 OCR 多模态模型，下载量本周第二，文档解析刚需 |
| [Inkling](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines · 1,672 ❤️ / 59,076 ⬇️ | Thinking Machines 自研多模态 Inkling 系列，旗舰版 |
| [Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines · 213 ❤️ / 3,998 ⬇️ | Inkling 的小尺寸蒸馏版本，便于本地部署 |
| [Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft · 172 ❤️ / 10,525 ⬇️ | 微软视觉-语言模型 Mage-VL，强项是图文理解与生成 |
| [Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong · 361 ❤️ / 1,565 ⬇️ | CPU / 边缘设备可跑的轻量 TTS，本地语音合成代表 |
| [Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 · 166 ❤️ / 3,254 ⬇️ | 0.6B 参数极小 TTS 预览版，专注低资源音色克隆 |
| [VibeVoice-ASR-BitNet](https://huggingface.co/microsoft/VibeVoice-ASR-BitNet) | microsoft · 141 ❤️ / 5,835 ⬇️ | 微软 BitNet 量化的语音识别模型，主打超低显存推理 |
| [Kroma](https://huggingface.co/lodestones/Kroma) | lodestones · 95 ❤️ / 0 ⬇️ | 基于 Krea2 的 LoRA 文本到图像插件，ComfyUI 工作流友好 |
| [LFM2.5-Encoder-350M](https://huggingface.co/LiquidAI/LFM2.5-Encoder-350M) | LiquidAI · 87 ❤️ / 6,190 ⬇️ | LiquidAI 第二代 Encoder，专为 fill-mask 与表征学习设计 |

### 🔧 专用模型（代码 / Agent / 嵌入）

| 模型 | 作者 / 指标 | 一句话说明 |
|---|---|---|
| [KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot · 391 ❤️ / 10,771 ⬇️ | 快手 Kwaipilot 代码专用模型 Dev 版，多模态 MoE 基座 |
| [Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft · 242 ❤️ / 2,775 ⬇️ | 基于 Qwen3.5 的微软电脑操作代理（computer-use）模型 |

### 📦 微调与量化（社区微调 / GGUF / AWQ / NVFP4 / Ternary）

| 模型 | 作者 / 指标 | 一句话说明 |
|---|---|---|
| [Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS · 3,226 ❤️ / 1,823,436 ⬇️ | Qwen3.6 MoE 激进去审查微调，社区下载量本周第三 |
| [Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-…-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU · 1,237 ❤️ / 1,173,001 ⬇️ | DavidAU 的 Qwen3.6 Heretic 系列 GGUF 融合微调 |
| [Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml · 1,135 ❤️ / 716,341 ⬇️ | **2-bit 三元量化** 27B 模型，llama.cpp 原生支持，里程碑意义 |
| [XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) | XYZAILab · 357 ❤️ / 650 ⬇️ | 基于 Qwen3.6 MoE 的轻量微调 mini 版 |
| [XYZ-Aquila-pro](https://huggingface.co/XYZAILab/XYZ-Aquila-pro) | XYZAILab · 330 ❤️ / 923 ⬇️ | 同系列 Pro 版，强化 Agentic-Search 能力 |
| [DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth · 289 ❤️ / 4,048 ⬇️ | Unsloth 提供的 V4-Flash 量化推理包 |
| [Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) | LuffyTheFox · 289 ❤️ / 228,610 ⬇️ | Hermes 系列去审查 MoE GGUF，社区活跃 |
| [Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth · 243 ❤️ / 41,337 ⬇️ | Kimi-K3 的 GGUF 量化版，Unsloth 标配 |
| [Kimi-K3 (Unsloth)](https://huggingface.co/unsloth/Kimi-K3) | unsloth · 221 ❤️ / 1,072 ⬇️ | Unsloth 二次封装的 Kimi-K3 推理镜像 |
| [Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-…-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU · 186 ❤️ / 267,572 ⬇️ | Qwen3.5 9B 紧凑版去审查 + NEO Imatrix 量化 |
| [Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4) | nota-ai · 151 ❤️ / 22,396 ⬇️ | Solar Open2 的 **NVFP4** 4-bit 浮点量化版，vLLM 适配 |
| [Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) | EschaLabs · 112 ❤️ / 875 ⬇️ | EschaLabs 出品的 Qwen3.6 MoE 第二轮微调 |

---

## 三、生态信号

**中国系大厂继续主导开源第一梯队**：Kimi-K3、DeepSeek-V4-Flash、GLM-5.2、Solar-Open2-250B 占据头部，且清一色采用 **MoE 架构**（GLM_moe_dsa、deepseek_v4、qwen3_5_moe、qwen3_6_moe），"激活参数 + 总参数"双指标已成新发布标配。

**去审查 / Heretic 微调形成独立子生态**：DavidAU、HauhauCS、LuffyTheFox 等社区作者围绕 Qwen3.5/3.6 35B-A3B 大量输出 GGUF 量化微调，单周点赞 3,000+、下载百万级，反映出**开源权重 + 量化 + 本地推理**三方协同的成熟链条。

**量化技术从 4-bit 迈向 2-bit 与 NVFP4**：Ternary-Bonsai-27B 验证 2-bit 三元量化的可用性，Nota-NVFP4 则把 NVIDIA FP4 路径引入 vLLM，标志低显存消费级推理进入新阶段。

---

## 四、值得探索

1. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — 周榜冠军，MoE + 压缩张量 + 多模态三合一，是当前评估国内旗舰水平的最佳样本。
2. **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** — 2-bit 三元量化的里程碑产物，想研究极限量化对生成质量影响的研究者不容错过。
3. **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** — Thinking Machines 自研多模态模型，下载增长快，是新兴非中美厂商里值得长期跟踪的系列。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*