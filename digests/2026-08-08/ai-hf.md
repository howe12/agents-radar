# Hugging Face 热门模型日报 2026-08-08

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-08 01:07 UTC

---

# Hugging Face 热门模型日报
**日期：2026-08-08 ｜ 样本：Top 30（按周点赞数排序）**

---

## 一、今日速览

今天的 Hugging Face 趋势榜呈现"**一超多强**"格局：**MiniMaxAI/MiniMax-H3** 横空出世并迅速在社区衍生出近 10 个二次创作版本（LoRA、GGUF、ComfyUI 整合、量化等），成为视频生成赛道的新爆点；同时中国系大模型继续霸榜——月之暗面 **Kimi-K3**、智谱 **GLM-5.2**、百度 **Unlimited-OCR** 和 **DeepSeek-V4-Flash** 集体跻身前列。值得关注的是新一波 **MoE 架构** 模型（maple-preview、GLM-5.2、Qwen3.6-35B-A3B）正在密集涌现，社区"去审查/Heretic"微调热度不减，**NVFP4 / INT4-INT8** 等低位宽量化在视频大模型上率先落地。

---

## 二、热门模型分类

### 🧠 语言模型（LLM / 对话 / 指令微调）

- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**
  作者：moonshotai ｜ 点赞：10,283 ｜ 下载：1,308,186
  月之暗面新一代多模态基座，是本次榜单中**点赞最高的对话模型**，集成 compressed-tensors 与文本特征提取能力。

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
  作者：zai-org ｜ 点赞：4,888 ｜ 下载：2,430,330
  智谱 GLM 系列最新版本，标签显示采用 **glm_moe_dsa** 架构（MoE + 新型注意力），下载量级惊人，国产开源 LLM 的中坚。

- **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)**
  作者：deepseek-ai ｜ 点赞：2,747 ｜ 下载：702,709
  DeepSeek V4 系列 7 月 31 日快照的轻量版，定位高吞吐对话；社区对其关注度持续走高。

- **[deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview)**
  作者：deepgrove ｜ 点赞：227 ｜ 下载：686
  新锐团队发布的 MoE 预览版，因明确标注 mixture-of-experts 引发技术圈关注。

- **[inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash)**
  作者：inclusionAI ｜ 点赞：203 ｜ 下载：3,065
  Ling 系列的 Flash 轻量版，使用自研 bailing_hybrid 架构。

### 🎨 多模态与生成（图像 / 视频 / 音频 / 文本到 X）

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**
  作者：MiniMaxAI ｜ 点赞：2,954 ｜ 下载：18,112
  **今日榜单最热门视频生成模型**，支持 image-text-to-video / image-to-video，是后续多个 LoRA、GGUF 的"上游基座"。

- **[Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)**
  作者：Comfy-Org ｜ 点赞：936 ｜ 下载：3,139,920
  ComfyUI 官方整合的 H3 单文件版，**下载量超过 313 万**，是真正被大规模部署的版本。

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
  作者：baidu ｜ 点赞：3,954 ｜ 下载：2,836,694
  百度推出的 OCR 专用大模型，下载与互动双高，承接垂类多模态文档理解需求。

- **[black-forest-labs/FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev)**
  作者：black-forest-labs ｜ 点赞：14,028 ｜ 下载：512,841
  史上点赞第一的图像生成模型，本周依然稳居榜首，但已无新鲜发布热度。

- **[lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo)**
  作者：lightx2v ｜ 点赞：129 ｜ 下载：0
  H3 的 Turbo 蒸馏版本，覆盖 t2v / i2v / r2v 全任务，主打高效推理。

- **[Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b)**
  作者：Audio8 ｜ 点赞：306 ｜ 下载：12,633
  基于 arktts 架构的 0.6B 参数 TTS 预览，是榜单中少见的开源语音合成新作。

- **[nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B)**
  作者：nvidia ｜ 点赞：228 ｜ 下载：359
  NVIDIA 推出的 11B 语音对话模型，是 Nemotron 系列的新分支。

- **[microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL)**
  作者：microsoft ｜ 点赞：302 ｜ 下载：456,140
  微软的多模态视觉语言模型 mage_vl 架构，下载量稳定。

- **[thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small)**
  作者：thinkingmachines ｜ 点赞：336 ｜ 下载：25,340
  小型 inkling_mm_model 多模态模型，强调对话能力。

- **[lodestones/Kroma](https://huggingface.co/lodestones/Kroma)**
  作者：lodestones ｜ 点赞：221 ｜ 下载：0
  基于 Krea 2 的高质量文生图 LoRA 新作品，社区尝鲜热度高。

### 🔧 专用模型（代码 / 数学 / OCR / 语音）

- **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)**
  作者：Kwaipilot ｜ 点赞：532 ｜ 下载：17,399
  快手推出的代码大模型，基于 qwen3_5_moe，专为开发者调优，是榜单中代码类代表。

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
  上文已列，可见 OCR/Doc AI 是当前多模态落地的最强垂直方向之一。

- **[Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b)**
  文本转语音专用，提供 arktts 架构备选。

- **[mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B)**
  作者：mistralai ｜ 点赞：184 ｜ 下载：2,480
  Mistral 推出的 3B 安全/护栏类小模型，mistral3 架构。

### 📦 微调与量化（社区 LoRA / GGUF / 量化）

- **[larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora)**
  作者：larryvrh ｜ 点赞：416 ｜ 下载：0
  H3 Turbo 的 LoRA 适配器，微调视频生成风格。

- **[drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI)**
  作者：drbaph ｜ 点赞：177
  上述 LoRA 的 ComfyUI 整合 + 剪枝版本。

- **[unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF)**
  作者：unsloth ｜ 点赞：587 ｜ 下载：161,253
  unsloth 团队的 DeepSeek-V4-Flash GGUF 量化版，老牌社区力量。

- **[LiquidAI/LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF)**
  作者：LiquidAI ｜ 点赞：144 ｜ 下载：31,489
  LFM2.5 系列的 llama.cpp 量化版，主打边缘/低显存场景。

- **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)**
  作者：DavidAU ｜ 点赞：1,709 ｜ 下载：2,217,339
  极长命名代表**社区"Heretic / Uncensored"微调流派**：基于 Qwen3.6 的去审查 + 多 LoRA 融合 + GGUF。

- **[LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF)**
  作者：LuffyTheFox ｜ 点赞：425 ｜ 下载：332,992
  同样为 Qwen

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*