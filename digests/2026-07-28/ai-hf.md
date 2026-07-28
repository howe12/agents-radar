# Hugging Face 热门模型日报 2026-07-28

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-28 01:57 UTC

---

# 📊 Hugging Face 热门模型日报 · 2026-07-28

---

## 🔥 今日速览

今日榜单由 **Moonshot Kimi-K3** 以 6,298 周点赞强势登顶，继续巩固其多模态旗舰地位；**Qwen3.6-35B-A3B** 作为基座模型衍生出大量社区微调（Uncensored / Heretic / Mythos 等），形成本周最热的"模型家族"。**极低比特量化**成为新看点——`prism-ml` 推出 1-bit Bonsai 与 2-bit Ternary-Bonsai，探索 LLAMA.cpp 的极限压缩边界。中国机构（Moonshot、百度、智谱、阿里、南北方）继续主导发布端，而欧美社区在 Uncensored 微调和超低比特 GGUF 上保持极高活跃度。

---

## 🧠 语言模型

| 模型 | 作者 | 👍 点赞 | ⬇️ 下载 | 说明 |
|---|---|---:|---:|---|
| [**Laguna-S-2.1**](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 758 | 63,605 | Poolside 新一代代码导向 LLM，定位 Copilot 替代 |
| [**Solar-Open2-250B**](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 629 | 3,761 | Upstage 250B 级开源 MoE，主打高性价比长上下文 |
| [**Nanbeige4.2-3B**](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 493 | 16,518 | 南北方 3B 小型 LLM，强调边缘部署友好 |
| [**KAT-Coder-V2.5-Dev**](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 242 | 5,312 | 蚂蚁快手代码专用模型，Qwen3.5 MoE 基座 |
| [**antares-1b**](https://huggingface.co/fdtn-ai/antares-1b) | fdtn-ai | 207 | 6,421 | 1B 安全/防护导向 LLM，Granite MoE Hybrid 架构 |
| [**Motif-3-Beta**](https://huggingface.co/Motif-Technologies/Motif-3-Beta) | Motif | 199 | 2,532 | 新型 MoE 架构实验模型 |

## 🎨 多模态与生成

| 模型 | 作者 | 👍 点赞 | ⬇️ 下载 | 说明 |
|---|---|---:|---:|---|
| [**Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | **6,298** | 2,850 | 本周榜首，Moonshot 旗舰多模态旗舰 |
| [**Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,332 | 2.65M | 百度不限场景 OCR，下载量极高，文档理解刚需 |
| [**Inkling**](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,604 | 36,196 | 思考机器公司多模态对话模型，MM-Native 架构 |
| [**Kimi-K2.7-Code**](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 1,323 | 695,744 | Kimi 系列代码专精多模态变体 |
| [**Mage-Flow**](https://huggingface.co/microsoft/Mage-Flow) | microsoft | 388 | 1,691 | 微软 Flow-Matching 文生图模型 |
| [**OvisOCR2**](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 327 | 42,152 | 阿里 Ovis 团队 OCR 2.0，Qwen3.5 基座 |
| [**GLM-5.2-Vision-NVFP4**](https://huggingface.co/baseten/GLM-5.2-Vision-NVFP4) | baseten | 124 | 2,276 | 智谱 GLM-5.2 视觉版，Baseten 4-bit FP 量化部署 |
| [**Fara1.5-27B**](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 150 | 1,406 | 微软 Computer-Use 代理模型 |
| [**Mage-Flow-Edit-Turbo**](https://huggingface.co/microsoft/Mage-Flow-Edit-Turbo) | microsoft | 102 | 1,115 | Mage-Flow 图像编辑蒸馏加速版 |
| [**krea2-identity-edit**](https://huggingface.co/conradlocke/krea2-identity-edit) | conradlocke | 556 | 0 | Krea-2 身份保持 LoRA，ComfyUI 生态 |
| [**Cosmos3-Edge**](https://huggingface.co/nvidia/Cosmos3-Edge) | nvidia | 133 | 33,127 | NVIDIA Cosmos 3 边缘端世界模型 |
| [**Inflect-Micro-v2**](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 223 | 483 | 边缘/CPU TTS 语音合成 |

## 🔧 专用模型

- [**KAT-Coder-V2.5-Dev**](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) — 代码领域（Kwaipilot，Qwen3.5 MoE 底座）
- [**Kimi-K2.7-Code**](https://huggingface.co/moonshotai/Kimi-K2.7-Code) — 视觉+代码联合（Moonshot）
- [**Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) / [**OvisOCR2**](https://huggingface.co/ATH-MaaS/OvisOCR2) — 文档理解 OCR 双雄

## 📦 微调与量化

| 模型 | 作者 | 👍 点赞 | ⬇️ 下载 | 说明 |
|---|---|---:|---:|---|
| [**Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,133 | 1.89M | Qwen3.6 MoE 解锁版，社区爆款 |
| [**Qwen3.6-35B-A3B**](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Qwen | 2,546 | **6.19M** | 阿里官方 MoE 基座，下载量冠军 |
| [**Qwythos-9B-Claude-Mythos-5-1M-GGUF**](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,490 | 1.34M | 1M 上下文推理模型，Claude Mythos 蒸馏 |
| [**Ternary-Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 1,069 | 648,938 | 2-bit Ternary 量化实验 |
| [**Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-GGUF**](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 754 | 634,146 | 复杂融合微调，Unsloth 后端 |
| [**Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 659 | 2.26M | **1-bit 极限量化**模型，下载量惊人 |
| [**Laguna-S-2.1-GGUF**](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF) | unsloth | 218 | 117,456 | Unsloth 量化版 Laguna |
| [**Laguna-S-2.1-NVFP4**](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4) | poolside | 148 | 158,308 | NVFP4 量化，面向 Blackwell GPU |
| [**Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF**](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF) | LuffyTheFox | 187 | 83,658 | Hermes 架构 + Qwen3.6 融合 |
| [**Kimi-K3 (Unsloth)**](https://huggingface.co/unsloth/Kimi-K3) | unsloth | 99 | 0 | Unsloth 优化版 Kimi-K3 镜像 |

---

## 🌐 生态信号

**Qwen3.6-35B-A3B 已成事实标准底座**：榜单上至少 4 个高分条目（HauhauCS、DavidAU、LuffyTheFox、empero-ai）均基于 Qwen3.6 MoE 派生，下载量超过 6M，证明其"基座引力"——社区在 MoE 之上做出的 Uncensored、Heretic、Mythos 等命名游戏，实质是同一架构的不同 RLHF / DPO 风格分歧。

**极低比特量化正在破圈**：`prism-ml` 推出的 **1-bit Bonsai**（下载 2.26M）与 **2-bit Ternary-Bonsai** 显示 llama.cpp 社区已不满足 4-bit，正在挑战量化极限。叠加 **NVFP4**（Blackwell 原生 FP4）出现，2026 下半年的本地 LLM 部署正进入"比特战"阶段。

**"Uncensored" 生态规模化**：榜单中 3 个 Uncensored 变体累计下载近 400 万，反映出社区对默认 RLHF 限制的明确回避需求，已成为独立细分市场。Microsoft 同期在多模态（Mage-Flow / Fara / Cosmos Edge）密集下注，平台级投入明显。

---

## 💡 值得探索

1. **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** — 1-bit 量化下仍能跑出可用对话，下载 2.26M 验证了用户对"极致压缩"的好奇心，是研究低位量化边界的最佳样本。
2. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — 智谱 4,551 点赞 + 100 万下载，MoE + DSA 架构在中文任务上具备竞争力，建议作为国产多模态对比基线。
3. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — 本周榜首，纯周点赞 6,298 远超第二名近一倍，值得跟踪其 multimodal 推理能力与生态扩散速度。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*