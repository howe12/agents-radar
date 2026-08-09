# Hugging Face 热门模型日报 2026-08-09

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-09 01:12 UTC

---

# Hugging Face 热门模型日报
**2026-08-09 · 第 30 期**

---

## 📌 今日速览

今日 Hugging Face 趋势榜呈现"视频生成爆发 + LLM 群雄逐鹿"的双主线格局：**MiniMax-H3** 系列一举占据 11 个席位，几乎承包所有视频生成热度；语言模型端则被 **Kimi-K3**、**DeepSeek-V4-Flash**、**GLM-5.2** 三家中国系开源力量瓜分头部位置。**FLUX.1-dev** 凭 14,037 点赞稳坐总榜首，**百度 Unlimited-OCR** 与 **Qwen3.x "Heretic"** 社区微调链路则成为两大现象级垂直热点。

---

## 🔥 热门模型

### 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | 点赞 | 下载 |
|---|---|---|---|
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,342 | 1,388,105 |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,902 | 2,480,368 |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 2,852 | 785,771 |
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 544 | 17,885 |
| [thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 346 | 28,178 |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 417 | 81,522 |
| [inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 222 | 4,189 |
| [deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 255 | 896 |

> **一句话点评**：Kimi-K3 以稀疏 + 压缩张量架构拿下本周 LLM 冠军；GLM-5.2 与 DeepSeek-V4-Flash 在中文/英文双线稳居第一梯队；Kwaipilot 的 KAT-Coder 是少见的代码专用大模型新势力。

### 🎨 多模态与生成（图像 / 视频 / 音频）

| 模型 | 作者 | 点赞 | 下载 |
|---|---|---|---|
| [black-forest-labs/FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev) | black-forest-labs | 14,037 | 502,330 |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,106 | 26,693 |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,006 | 3,943,176 |
| [Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 324 | 12,837 |
| [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 314 | 457,581 |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 485 | 0 |
| [drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 205 | 0 |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 198 | 0 |
| [Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 183 | 0 |
| [realrebelai/MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) | realrebelai | 175 | 128,265 |
| [SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 172 | 0 |
| [Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot) | Abiray | 143 | 471,519 |
| [Kijai/MiniMax-H3-experimental](https://huggingface.co/Kijai/MiniMax-H3-experimental) | Kijai | 140 | 0 |

> **一句话点评**：FLUX.1-dev 仍以"老兵"姿态霸榜；**MiniMax-H3** 是本周现象级发布——支持文/图/视频多模态输入，社区已围绕它孵化出 Turbo LoRA、GGUF、NVFP4、INT4/INT8、ConvRot 等全链路变体；Audio8 TTS 与 Microsoft Mage-VL 分别代表语音与视觉理解的最新进展。

### 🔧 专用模型（OCR / 代码 / 安全 / 语音）

| 模型 | 作者 | 点赞 | 下载 |
|---|---|---|---|
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,970 | 2,857,997 |
| [nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 246 | 458 |
| [mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 201 | 4,950 |

> **一句话点评**：百度 Unlimited-OCR 凭"无限字符、无限制场景"卖点拿下垂直赛道冠军；NVIDIA VoiceChat 与 Mistral Shieldstral 分别填补低延迟语音对话与轻量级安全分类的空白。

### 📦 微调与量化（社区版 / GGUF / AWQ）

| 模型 | 作者 | 点赞 | 下载 |
|---|---|---|---|
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,761 | 2,345,190 |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 608 | 175,093 |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF) | LuffyTheFox | 438 | 373,651 |
| [ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 403 | 0 |
| [sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4](https://huggingface.co/sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4) | sakamakismile | 133 | 0 |

> **一句话点评**：**"Heretic/Uncensored"** 风格已成为社区微调 Qwen3.x 的事实标准命名规范；GGUF 仍是本地推理的事实标准，NVFP4 / INT4-INT8 混合精度则是消费级 GPU 上的新热点。

---

## 🌐 生态信号

本周榜单最强烈的信号是 **"模型家族化运营"**：MiniMax-H3 在一周内被社区派生出 LoRA、GGUF、ComfyUI、ConvRot、NVFP4 等十余种变体，说明其架构开放性与可微调性获得了社区高度认可，正在重演 SDXL/Wan 时代的"基础模型即平台"路径。

**中国系开源 LLM 阵营进入"三足鼎立"**：Kimi-K3（MoE 架构 + 压缩张量）、GLM-5.2（GLM_MoE_DSA）、DeepSeek-V4-Flash 三者在榜单上集体高位亮相，覆盖长上下文、代码、中文对话与高吞吐推理。

**量化与微调生态向消费级硬件倾斜**：GGUF 仍为主流（DeepSeek、LFM、Qwen3 等），但 NVFP4、INT4-INT8-ConvRot 等新精度方案开始蚕食边缘部署场景；社区"Uncensored/Heretic"微调链路则反映出用户对**去对齐、强表达**模型的需求持续旺盛。

---

## 🎯 值得探索

1. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** —— 单模型点赞 1 万+，背后是 K3 架构（压缩张量 + 混合注意力），在长上下文与多模态特征提取两端同时发力，是观察下一代国产旗舰架构走向的最佳样本。
2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** —— 当前最强的开源图像/文本到视频基础模型，统一了 T2V/I2V/R2V/AV 四大任务，配合 ComfyUI 工作流可在消费级显卡上跑出可商用的视频质量。
3. **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** —— 名字虽长，却浓缩了过去半年社区微调的所有关键词；MTP 多 token 预测 + Hermes 融合 + GGUF，是研究"民间对齐"与"模型混合"技术的活体标本。

---

*数据口径：Hugging Face Hub 周点赞榜 Top 30 · 截止 2026-08-09*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*