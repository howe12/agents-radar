# Hugging Face 热门模型日报 2026-08-07

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-07 02:21 UTC

---

# 🤗 Hugging Face 热门模型日报
**日期：2026-08-07**

---

## 一、今日速览

本周 Hugging Face 热度榜呈现 **"中国开源系集体爆发"** 的局面：月之暗面 Kimi-K3、智谱 GLM-5.2、DeepSeek V4-Flash 三大国产旗舰 LLM 同台竞技；MiniMax-H3 视频生成模型掀起全平台二创浪潮，衍生出 LoRA、GGUF、NVFP4、ComfyUI 等十余种社区变体。同时，Qwen3.6 仍是社区微调的"国民底座"，DavidAU、LuffyTheFox、EschaLabs 等多个社区基于其进行角色扮演与"Heretic"反审查实验。FLUX.1-dev 凭借 1.4 万点赞仍居榜首，经典图像生成模型的影响力可见一斑。

---

## 二、热门模型分类

### 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|------|
| [**moonshotai/Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,204 | 1,258,043 | 月之暗面最新旗舰 K3，多模态对话 + 特征抽取双能力加持，登顶本周 LLM 热度榜 |
| [**zai-org/GLM-5.2**](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,875 | 2,391,730 | 智谱 GLM 5 代 2 版本，基于 GLM-MoE-DSA 架构，下载量已突破 230 万 |
| [**deepseek-ai/DeepSeek-V4-Flash-0731**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 2,651 | 617,900 | DeepSeek V4 Flash 7 月 31 日快照版，主打轻量高速推理 |
| [**deepseek-ai/DeepSeek-V4-Flash**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 2,045 | 2,639,756 | DeepSeek V4 Flash 主版本，下载量超 260 万，社区部署首选 |
| [**LiquidAI/LFM2.5-2.6B**](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 336 | 73,573 | Liquid AI 的 2.6B 紧凑模型，主打边缘设备部署 |
| [**inclusionAI/Ling-3.0-flash**](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 190 | 1,196 | 包含灵（InclusionAI）Ling 3.0 Flash 版，混合架构（Bailing Hybrid） |
| [**thinkingmachines/Inkling-Small**](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 326 | 22,223 | Thinking Machines 推出的多模态对话小模型 |

### 🎨 多模态与生成（图像 / 视频 / 音频）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|------|
| [**black-forest-labs/FLUX.1-dev**](https://huggingface.co/black-forest-labs/FLUX.1-dev) | black-forest-labs | 14,013 | 523,234 | 经典图像生成模型，本周累计点赞 1.4 万，仍居全站榜首 |
| [**baidu/Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,933 | 2,791,862 | 百度"无限 OCR"，多语种文档识别 + 特征抽取，下载近 280 万 |
| [**MiniMaxAI/MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 2,762 | 12,102 | MiniMax 视频生成模型，本周最强新发布，掀起 ComfyUI 创作浪潮 |
| [**Comfy-Org/MiniMax-H3**](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 854 | 2,295,577 | MiniMax-H3 的 ComfyUI 单文件版，下载量超 229 万，社区首选部署形态 |
| [**Audio8/Audio8-TTS-Preview-0.6b**](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 297 | 12,211 | 基于 ArkTTS 架构的 0.6B 轻量 TTS 预览版 |
| [**larryvrh/MiniMax-H3-Turbo-Lora**](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 307 | 0 | MiniMax-H3 的 Turbo 加速 LoRA，针对视频生成优化 |
| [**lodestones/Kroma**](https://huggingface.co/lodestones/Kroma) | lodestones | 208 | 0 | 基于 Krea2 的文生图 LoRA，主打风格化创作 |
| [**drbaph/MiniMax-H3-Turbo-Lora-ComfyUI**](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 124 | 0 | 另一版本的 MiniMax-H3 Turbo LoRA，ComfyUI 剪枝优化 |

### 🔧 专用模型（代码 / OCR / VL）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|------|
| [**Kwaipilot/KAT-Coder-V2.5-Dev**](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 522 | 16,961 | 快手 Kwaipilot 出品，基于 Qwen3.5 MoE 的代码专精模型 |
| [**ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot**](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 341 | 0 | Qwen3-VL 32B 的 INT8+ConvRot 量化实验，H3 风格微调 |
| [**microsoft/Mage-VL**](https://huggingface.co/microsoft/Mage-VL) | microsoft | 289 | 440,176 | 微软 Mage 多模态视觉语言模型，下载量超 44 万 |
| [**nvidia/NVIDIA-NemotronLabs-VoiceChat-11B**](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 182 | 206 | 英伟达 Nemotron 语音对话模型，主打实时语音交互 |

### 📦 微调与量化（社区微调 / GGUF / AWQ / NVFP4）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|------|
| [**DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-...-GGUF**](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,654 | 2,087,189 | 基于 Qwen3.6-27B 的"Heretic"反审查 GGUF 微调，下载超 208 万 |
| [**unsloth/DeepSeek-V4-Flash-0731-GGUF**](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 549 | 145,105 | Unsloth 团队出品的 DeepSeek V4 Flash GGUF 量化版，llama.cpp 友好 |
| [**LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF**](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF) | LuffyTheFox | 411 | 309,149 | Qwen3.6-35B-A3B MoE 的 Hermes 反审查 GGUF 微调，下载 30 万+ |
| [**XYZAILab/XYZ-Aquila-mini**](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) | XYZAILab | 427 | 1,570 | 基于 Qwen3.5/Qwen3.6 MoE 的轻量多模态微调模型 |
| [**EschaLabs/Qwen3.6-35B-A3B-Escha-W2**](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) | EschaLabs | 226 | 3,394 | Qwen3.6-35B-A3B MoE 社区微调版本 |
| [**realrebelai/MiniMax-H3_GGUFs**](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) | realrebelai | 157 | 65,679 | MiniMax-H3 官方 ComfyUI 版本的 GGUF 量化分发 |
| [**LiquidAI/LFM2.5-2.6B-GGUF**](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF) | LiquidAI | 128 | 12,790 | LFM2.5-2.6B 的 llama.cpp GGUF 量化版 |
| [**Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot**](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot) | Abiray | 112 | 272,963 | MiniMax-H3 的 NVFP4/INT4/INT8 ConvRot 多格式量化 |
| [**sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4**](https://huggingface.co/sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4) | sakamakismile | 111 | 0 | Qwen3-VL + MiniMax-H3 概念融合的 NVFP4 量化实验 |

---

## 三、生态信号 📡

本周榜单最具诊断价值的信号是 **"中国厂商开源旗舰 + 西方社区微调"的二元结构**：

- **国产旗舰同台**：月之暗面 Kimi-K3、智谱 GLM-5.2、DeepSeek V4-Flash、百度 Unlimited-OCR、MiniMax-H3 五款中国厂商模型同时进入热度榜 Top10，且全部开放权重，说明中文 AI 生态的开放策略已形成规模效应。
- **MiniMax-H3 复刻 DeepSeek 现象**：短短一周内就出现 ComfyUI 单文件版、Turbo LoRA、GGUF、NVFP4 等 6+ 种社区变体，呈现"基础模型→工作流集成→量化分发"的典型开源扩散链。
- **Qwen3.6 成为新的"社区底座"**：本周榜单中至少 5 个变体（DavidAU、LuffyTheFox、EschaLabs、XYZ-Aquila、Qwen3-VL-Heretic）都基于 Qwen3.6 微调，"Heretic"反审查微调潮流延续，MoE 架构（35B-A3B）尤其受社区青睐。
- **量化生态成熟**：GGUF（llama.cpp）、NVFP4（Blackwell GPU）、INT8+ConvRot 多格式并存，表明推理硬件多样化（消费 GPU、苹果 Silicon、专业卡）正倒逼发布多形态权重。
- **闭源模型的缺席**：本周 Top30 中无任何纯 API-only 模型上榜，开源权重的可见性优势进一步放大。

---

## 四、值得探索

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*