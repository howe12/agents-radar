# Hugging Face 热门模型日报 2026-08-16

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-16 00:55 UTC

---

# 📊 Hugging Face 热门模型日报
**日期：2026-08-16**

---

## 一、今日速览

今日 Hugging Face 趋势榜呈现"**三大巨头主导 + 视频生成爆发**"的格局：**Kimi K3** 以 10,725 点赞登顶，**MiniMax-H3** 系列在视频生成领域横扫榜单（7 个相关条目），**Qwen3.8** 家族则凭借密集的官方版本与社区微调/量化版本占据语言模型半壁江山。值得关注的趋势包括：NVFP4（NVIDIA 4-bit 浮点）成为新的量化标准，MoE 架构模型权重持续走低（2.4T 参数仅 6K 下载说明仍在研究阶段），社区"uncensored"微调卷土重来。

---

## 二、热门模型

### 🧠 语言模型（LLM / 对话 / 指令微调）

| # | 模型 | 作者 | 点赞 | 下载 | 一句话点评 |
|---|------|------|------|------|------------|
| 1 | [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,725 | 2.1M | 今日点赞冠军，Kimi 系列的第三代旗舰，主打多模态特征提取 + 极致压缩 |
| 2 | [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 9,796 | 92K | 通义千问 3.8 代中量级主力，多模态对话，开源周首选 |
| 3 | [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,421 | 1.8M | V4 闪速版，近 200 万下载，推理成本与性能新基准 |
| 4 | [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 967 | 6.4K | 2.4 万亿总参 / 95B 激活的巨型 MoE，研究价值极高 |
| 5 | [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 490 | 20K | V4 完整版 Pro，3 天前发布，企业级部署首选 |
| 6 | [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 627 | 135K | 2.6B 紧凑型 LFM2.5，边缘部署与端侧推理利器 |
| 7 | [inclusionAI/Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 258 | 4.8K | 灵思大模型 tiny 版，Bailing 混合架构，MIT 协议友好 |
| 8 | [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16) | nvidia | 150 | 63K | NVIDIA 自家 hybrid MoE，30B/A3B 配比 |
| 9 | [dots-studio/dots3-note-prev](https://huggingface.co/dots-studio/dots3-note-prev) | dots-studio | 162 | 240 | 小众实验项目，纯文本生成 |
| 10 | [LiquidAI/LFM2.5-VL-3B](https://huggingface.co/LiquidAI/LFM2.5-VL-3B) | LiquidAI | 143 | 4.6K | 视觉-语言双模 3B 小钢炮（也归类于多模态） |

### 🎨 多模态与生成（图像 / 视频 / 音频）

| # | 模型 | 作者 | 点赞 | 下载 | 一句话点评 |
|---|------|------|------|------|------------|
| 1 | [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,972 | 2.2M | 视频生成现象级模型，单一模型 220 万下载 |
| 2 | [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,577 | 246K | 30B 参图像-文本双模，Meta 系新底座 |
| 3 | [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 939 | 378K | LTX 视频系列 2.5，i2v/t2v/v2v 全能 |
| 4 | [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 766 | 5K | 文本生成音乐第三代，DiT 架构 |
| 5 | [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 514 | 212K | H3 加速蒸馏版，Turbo 推理飞快 |
| 6 | [Gazingstars123/Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 188 | 17K | 轻量文生图 diffusion，2.9B 参数 |

### 🔧 专用模型（代码 / 数学 / 医疗 / 嵌入）

> 今日榜单中专项领域模型缺位明显。值得标注的是 **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** 显式标注 `feature-extraction` 与 `compressed-tensors`，是少数能兼顾通用对话与高压缩特征提取的"通专融合"代表；此外 NVIDIA Nemotron 系列在 hybrid 架构下对长上下文检索与推理任务有特化倾向。

### 📦 微调与量化（社区微调 / GGUF / AWQ / NVFP4）

| # | 模型 | 作者 | 点赞 | 下载 | 一句话点评 |
|---|------|------|------|------|------------|
| 1 | [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,051 | 3.0M | 名字最长、下载最高，Qwen3.6 社区"全解锁"GGUF |
| 2 | [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,344 | 12.8M | ComfyUI 官方打包版，单模型近 1300 万下载，遥遥领先 |
| 3 | [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 1,231 | 868K | Qwen3.8 GGUF 量化标杆 |
| 4 | [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 514 | 212K | 蒸馏 Turbo 既是模型也是微调产物 |
| 5 | [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 435 | 682K | Muse-Glimmer 30B 的 GGUF |
| 6 | [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 427 | 123K | 官方 FP8 量化版 |
| 7 | [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 272 | 171K | NVFP4 新格式首登趋势榜，NVIDIA 硬件强绑定 |
| 8 | [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 756 | 0 | H3 音频视频联合 LoRA，实验性 |
| 9 | [Qwen/Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) | Qwen | 194 | 11K | 2.4T MoE 的 FP8 试水 |
| 10 | [fal/MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 193 | 13K | fal 平台发布的 H3 真人写实 LoRA |
| 11 | [unsloth/MiniMax-H3-GGUF](https://huggingface.co/unsloth/MiniMax-H3-GGUF) | unsloth | 164 | 174K | H3 视频模型 GGUF 量化 |
| 12 | [unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 166 | 91K | unsloth 紧跟 NVFP4 趋势 |
| 13 | [Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 352 | 0 | ComfyUI 节点专用格式 |
| 14 | [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 159 | 0 | 又一个 Qwen3.8 解除限制 FP8 版 |
| 15 | [meta-models/Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 277 | 321K | 官方自家 GGUF 版

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*