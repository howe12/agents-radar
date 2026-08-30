# Hugging Face 热门模型日报 2026-08-30

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-30 03:00 UTC

---

# Hugging Face 热门模型日报
**📅 2026-08-30**

---

## 一、今日速览

- **Qwen3.8 系列霸榜**：原版 [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) 以 **13,263 点赞**登顶周榜，社区衍生变体（GGUF / FP8 / MLX / abliterated）多达十余款，生态势能最强。
- **视频生成持续爆发**：[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) 以 **5,018,833 次下载**成为本周最"跑量"的视频模型，[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) 紧随其后；4 步蒸馏版 [FastVideo-FastH3](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree) 预示加速扩散方向。
- **国产大模型集体上新**：[Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)（11,083 赞）、[DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)（3,810 赞）、[GLM-5.3 / 5.3-Flash](https://huggingface.co/zai-org/GLM-5.3) 形成头部集团。
- **"去审查"微调文化盛行**：仅 Qwen3.8-27B 的 abliterated/uncensored 变体就占据榜单近 1/3 席位，反映社区对开放权重的强烈需求。

---

## 二、热门模型分类

### 🧠 语言模型（LLM / 对话 / 指令）

| 模型 | 作者 | 点赞 | 下载 | 简介 |
|---|---|---|---|---|
| [**Qwen3.8-27B**](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 13,263 | 4,028,839 | 本周榜单冠军，多模态 Qwen3.8 中量级旗舰，社区生态根节点 |
| [**Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 11,083 | 2,701,014 | 月之暗面新一代多模态模型，feature-extraction 路线，下载/点赞双高 |
| [**Qwen3.8-Flash-Next**](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 4,294 | 52,341 | qwen4_exp 试验线，主打速度/效率的多模态 Flash 版 |
| [**DeepSeek-V4-Flash-0731**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,810 | 4,330,482 | DeepSeek V4 系列 Flash 版，下载量级达头部阵营 |
| [**GLM-5.3-Flash**](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 1,626 | 189,793 | 智谱 GLM-5.3 轻量 Flash 版，支持图像-文本输入 |
| [**GLM-5.3**](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,277 | 8,804 | 智谱全量 GLM-5.3，采用 glm_moe_dsa 稀疏架构，对话为主 |
| [**Ornith-1.5-35B-A3B**](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 497 | 106,562 | 基于 Qwen3.5 MoE 的 35B-A3B 多模态语言模型 |
| [**Hy4-preview**](https://huggingface.co/tencent/Hy4-preview) | tencent | 285 | 1,394 | 腾讯混元系列预览版 hy_v4，纯文本生成 |
| [**phonellm-alpha-1**](https://huggingface.co/pipecat-ai/phonellm-alpha-1) | pipecat-ai | 136 | 2,668 | 基于 Nemotron-H 的语音/音素相关语言模型 |

### 🎨 多模态与生成（图像 / 视频 / 音频）

| 模型 | 作者 | 点赞 | 下载 | 简介 |
|---|---|---|---|---|
| [**MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,623 | 5,018,833 | 本周最热门视频生成模型，支持 text-to-video / image-to-video |
| [**LTX-2.5**](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 2,140 | 1,044,661 | Lightricks 视频扩散模型升级版，多任务（I2V/T2V/V2V）一体 |
| [**Breeze-TTS-2**](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 192 | 1,017 | Breeze 系列语音合成第二代，长 TTS 场景 |
| [**MiniMax-H3-Fun-Controlnet-Union**](https://huggingface.co/alibaba-pai/MiniMax-H3-Fun-Controlnet-Union) | alibaba-pai | 162 | 4,250 | 基于 MiniMax-H3 的 ControlNet Union，可控视频生成 |
| [**FastVideo-FastH3-4-step-Preview**](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree) | FastVideo | 153 | 0 | 仅 4 步蒸馏 + VSA DataFree 训练的视频生成加速研究预览 |
| [**Thomson-1.0-Small**](https://huggingface.co/thomsonreuters/Thomson-1.0-Small) | thomsonreuters | 151 | 831 | 汤森路透基于 Qwen3.5 MoE 的领域多模态模型 |

### 🔧 专用模型（代码 / 领域）

| 模型 | 作者 | 点赞 | 下载 | 简介 |
|---|---|---|---|---|
| [**Tiel-Coder-35B-A3B-GGUF**](https://huggingface.co/peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF) | peculiar-ragdoll | 124 | 47,817 | 35B-A3B MoE 代码专用模型 GGUF 版，含 imatrix |

### 📦 微调与量化（社区微调 / GGUF / AWQ / FP8 / MLX）

| 模型 | 作者 | 点赞 | 下载 | 简介 |
|---|---|---|---|---|
| [**Qwen3.8-27B-GGUF**](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,187 | 8,363,481 | unsloth 出品的 Qwen3.8-27B GGUF 量化版，本周量化榜首 |
| [**Qwen-Fixed-Chat-Templates**](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,518 | 0 | 修复 Qwen3.5 chat-template 的 MLX/Jinja 模板项目 |
| [**Qwen3.8-27B-Uncensored-FP8**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,260 | 290,216 | Qwen3.8-27B 去审查 FP8 量化版 |
| [**Qwen3.8-27B-Uncensored-MLX**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 1,218 | 97,508 | 同一作者出品的 MLX 适配版（Apple Silicon） |
| [**OBLITERATUS/Qwen3.8-27B-OBLITERATED**](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 920 | 645,554 | 多格式（mlx/gguf/safetensors）abliterated 全家桶 |
| [**JonathanColetti/Qwen3.8-27B-Uncensored-GGUF**](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 823 | 1,843,237 | llama.cpp 优化 + MTP 的 GGUF 社区版 |
| [**HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF**](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 748 | 1,061,687 | 多模态版 + Aggressive MTP 推理增强 |
| [**Qwen3.8-Flash-Next-GGUF**](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 567 | 188,061 | Flash-Next 的 GGUF 量化版 |
| [**Qwen3.8-27B-Uncensored-GGUF**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 559 | 215,892 | orcarouter 出品的标准 GGUF 量化版 |
| [**Huihui-Qwen3.8-27B-abliterated-GGUF**](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 439 | 1,485,

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*