# Hugging Face 热门模型日报 2026-08-21

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-21 00:55 UTC

---

# Hugging Face 热门模型日报 · 2026-08-21

---

## 📰 今日速览

今日 Hugging Face 趋势榜呈现"两大巨头领跑、视频模型强势突围"的格局：**Qwen3.8-27B** 以 11,745 周点赞登顶，紧随其后的是 **Kimi-K3**（10,883 赞），国产旗舰多模态大模型继续主导社区关注度。**DeepSeek-V4-Flash-0731** 单周获 3,575 赞，验证了 V4 系列在开发者中的渗透率。视频生成侧，**MiniMax-H3**（4,240 赞）与 **LTX-2.5**（1,416 赞）双双进入前列，标志 Video Diffusion 进入主流消费级应用阶段。值得警惕的是，**Qwen3.8-27B 的去审查/abliterated 衍生权重**（GGUF / FP8 / MLX / NVFP4）已占据榜单 9 席，社区分发生态出现明显的"权重集市化"倾向。

---

## 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|---|---|---|---|---|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 11,745 | 1.37M | 旗舰原生多模态稠密模型，本周趋势榜首，下载破百万 |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,883 | 2.35M | 月之暗面 K3，主打压缩表征与多模态融合，下载量仅次于头部 |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,575 | 2.55M | V4 轻量版，推理速度优化，社区部署首选 |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,718 | 479K | 多模态稠密模型，竞品聚焦"小而强"路线 |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,121 | 14.6K | 2.4T 总参 / 95B 激活的 MoE，Qwen 旗舰稀疏架构 |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 679 | 43.3K | V4 Pro 新版本，强调复杂推理与长上下文 |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 217 | 1.7K | 35B 总参 / 3B 激活的极小激活 MoE，社区实验性项目 |
| [dots-studio/dots3-note-prev](https://huggingface.co/dots-studio/dots3-note-prev) | dots-studio | 242 | 1.4K | dots3 笔记模型预览版，专注文本/多模态笔记场景 |
| [superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 154 | 348 | 基于 Qwen3 的语音识别（ASR）小模型 |

---

## 🎨 多模态与生成（图像 / 视频 / 音频）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|---|---|---|---|---|
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,240 | 3.31M | 文本/图像生成视频扩散模型，下载量最高的视频生成器 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,416 | 612K | LTX 系列视频生成升级版，支持 T2V / I2V / V2V 多任务 |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,105 | 14.5K | Music3 文本到音乐生成模型，主打长时长结构化作曲 |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 652 | 380K | 基于 H3 的蒸馏 Turbo 版本，推理速度提升数倍 |
| [TenStrip/10Eros-Max](https://huggingface.co/TenStrip/10Eros-Max) | TenStrip | 298 | 0 | H3 的社区风格化微调，专攻特定艺术风格视频生成 |

---

## 🔧 专用模型（代码 / 数学 / 嵌入 / 工具）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|---|---|---|---|---|
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,338 | 0 | 修复 Qwen3.5/3.8 系列对话模板的 Jinja 模板库，开发者刚需工具 |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | — | — | 同上，亦支持 `feature-extraction` 路径，可作稠密嵌入使用 |

---

## 📦 微调与量化（社区微调 / GGUF / AWQ / FP8 / NVFP4）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|---|---|---|---|---|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,358 | 5.13M | 下载量冠军，多档位 GGUF 量化，本地部署首选 |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 713 | 2.6K | Apple Silicon MLX 格式的去审查版本 |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 676 | 76.1K | FP8 量化版，平衡显存占用与推理质量 |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 513 | 980K | llama.cpp 优化的 GGUF 版，主打 MTP（Multi-Token Prediction） |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 366 | 268K | 激进 MTP 设置的 GGUF 实验分支 |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 633 | 1.52M | 官方 FP8 量化版，推理框架兼容性最佳 |
| [unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 308 | 831K | NVIDIA FP4 量化前沿实验，Blackwell 架构适配 |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 270 | 4.4K | 权重剔除对齐（weight ablation）实验，多格式分发 |
| [empero-ai/Qwen3.8-27B-Ridge-GGUF](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | empero-ai | 223 | 55.1K | llama.cpp GGUF 二次调优版本 |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 239 | 52.4K | GGUF 格式去审查版，低门槛本地运行 |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated) | huihui-ai | 201 | 10.5K | 权重剔除对齐系列 |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 201 | 187K | 上述模型的 GGUF 版，社区分发广泛 |
| [0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF) | 0bserverx | 189 | 327K | Heretic 方法的去审查实验 |
| [Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF](https://huggingface.co/Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF) | Blackfrost-AI | 183 | 186K | 27B 稠密架构 GGUF 部署版 |
| [ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 161 | 53.7K | MoE 架构 GGUF 量化，MIT 许可证友好 |

---

## 📡 生态信号

**Qwen3.8-27B 已确立为本周生态"母体权重"**：榜单中 15 个条目（含官方与社区）源自同一基座，覆盖 GGUF、FP8、MLX、

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*