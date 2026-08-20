# Hugging Face 热门模型日报 2026-08-20

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-20 00:52 UTC

---

# 📊 Hugging Face 热门模型日报
**日期：2026-08-20 共 30 个上榜模型**

---

## 1. 今日速览

今日趋势榜被 **Qwen3.8-27B 家族** 强势霸占：原生版本以 11,482 点赞稳居榜首，社区随后衍生出超过 10 个 GGUF/FP8/MLX/abliterated 微调分支。**DeepSeek-V4 系列**（Flash 与 Pro）维持高活跃度，**Moonshot Kimi-K3** 仍以 10,853 点赞排名第二。视频生成方面 **MiniMax-H3** 凭借 Comfy-Org 适配与 Turbe 蒸馏形成"模型+工具链"双爆款，累计下载已超 1500 万次。"Abliterated"（去审查）和 MTP（多 token 预测）成为本轮社区微调的两大关键词。

---

## 2. 热门模型分类

### 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | ❤ | ⬇ | 说明 |
|---|---|---|---|---|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 11,482 | 1,006,235 | 趋势榜 #1，27B 多模态基座，支持视觉理解与对话 |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,853 | 2,289,863 | Moonshot 新一代旗舰，长上下文 + 压缩张量，下载量已破 200 万 |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,548 | 2,330,940 | V4 轻量版，主打开源高效推理与高吞吐 |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,702 | 430,313 | 多模态 30B，主打创意写作与视觉对话 |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,100 | 12,699 | 2.4T 训练 tokens 的 MoE 大模型，Qwen3.5 旗舰 |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 633 | 37,583 | V4 完整版，定位推理与代码 |

### 🎨 多模态与生成（图像 / 视频 / 音频 / 文本到 X）

| 模型 | 作者 | ❤ | ⬇ | 说明 |
|---|---|---|---|---|
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,182 | 3,055,205 | 当红视频生成模型，支持文/图到视频，对标消费级创作 |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,442 | 15,213,225 | H3 的 ComfyUI 打包版，下载量比原模型高 5 倍，已成为部署事实标准 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,322 | 555,993 | 视频界的"轻量旗舰"，文本/图像/视频多输入生成 |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,037 | 13,138 | 文本到音乐生成，diffusers 架构，证明音乐生成赛道升温 |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 625 | 340,984 | H3 的蒸馏加速版，推理更便宜 |
| [TenStrip/10Eros-Max](https://huggingface.co/TenStrip/10Eros-Max) | TenStrip | 283 | 0 | 基于 H3 的 NSFW 风格微调，社区试验性创作 |
| [Gazingstars123/Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 269 | 26,566 | 新晋轻量文生图扩散模型，主打 2K/动漫风格 |
| [Comfy-Org/MiniMax-Music-3](https://huggingface.co/Comfy-Org/MiniMax-Music-3) | Comfy-Org | 193 | 325,083 | Music3 的 ComfyUI 节点版本 |

### 🔧 专用模型

| 模型 | 作者 | ❤ | ⬇ | 说明 |
|---|---|---|---|---|
| [dots-studio/dots3-note-prev](https://huggingface.co/dots-studio/dots3-note-prev) | dots-studio | 231 | 1,239 | 笔记结构化专用模型，dots3 系列的预览版 |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,289 | 0 | 纯 jinja 模板仓库，用于修正 Qwen 系列对话模板，零下载高点赞 = 工具型"补丁" |

### 📦 微调与量化（社区微调 / GGUF / FP8 / AWQ）

> *本类是今日上榜最多的，反映出 Qwen3.8-27B 已成为开放权重新一代"底座"*

| 模型 | 作者 | ❤ | ⬇ | 说明 |
|---|---|---|---|---|
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,165 | 3,033,363 | 融合 Uncensored/Heretic/MTP 的"超大杯"GGUF，作者 DavidAU 的招牌融合配方 |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,080 | 4,318,134 | unsloth 出品的多量化 GGUF 仓库，下载量爆表 |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 614 | 60,078 | FP8 精度去审查版 |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 600 | 1,063,646 | 官方 FP8 量化版本 |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 597 | 27 | Apple Silicon MLX 格式的本地运行版 |
| [Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 187 | 26,472 | 去审查 GGUF |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 467 | 766,812 | llama.cpp 量化，登录 76 万下载 |
| [unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 285 | 653,042 | NVIDIA FP4 超低比特量化，黑卡 GPU 友好 |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 286 | 131,113 | "激进 MTP" 解锁更多 token 预 |
| [empero-ai/Qwen3.8-27B-Ridge-GGUF](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | empero-ai | 197 | 32,454 | Ridge 风格微调 |
| [Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF](https://huggingface.co/Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF) | Blackfrost-AI | 170 | 164,263 | abliterated 标志社区 |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 171 | 94,234 | huihui 长期 abliterated 仓库 |
| [0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF) | 0bserverx | 160 | 245,266 | Heretic 算法去审查 + GGUF |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated) | huihui-ai | 166 | 7,207 | 同上但保留 fp16 原始精度 |

---

## 3. 生态信号

当前 HF 趋势榜呈现 **"三大单品 + 一种生态现象"** 的结构：

1. **Qwen3.8-27B 已成"开放权重新底座"**。今日 30 个上榜模型中有 12 个直接基于 Qwen3.8-27B 衍生，涵盖官方 FP8、unsloth GGUF/NVFP4、orcarouter/Blackfrost/Huihui 三大去审查派系、以及 DavidAU 的融合配方。Qwen 团队在 27B 这一甜蜜点做了"标准答案"。
2. **视频生成模型进入"双形态"部署阶段**：原模型 (MiniMax-H3) + ComfyUI 打包版 + 蒸馏加速版 (Turbo) 同步上榜，说明社区已从"模型发布"过渡到"工具链完善"；下游创作者驱动的 NSFW 微调（10Eros-Max）也进入榜单，值得关注。
3. **MTP 与 Abliterated 成为社区两大新风口**：MTP（Multi-Token Prediction） 通过多个 GGUF 模型试水，abliterated 路线则形成 huihui / Blackfrost / 0bserverx / HauhauCS 的"四大家族"，标志社区去审查已从单点实验走向工程化流水线。
4. **闭源缺席，开源加速**：DeepSeek、Moonshot、Qwen 全部开源权重；纯闭源 API 厂商在 HF 趋势榜集体隐身。

---

## 4. 值得探索

- 🔥 **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 同一时段单日点赞破 1.1 万的"现象级"开源模型，27B 尺寸兼顾推理深度与本地部署可行性，是研究当下通才模型的最佳样本。
- 🚀 **[Comfy-Org/Mini

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*