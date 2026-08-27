# Hugging Face 热门模型日报 2026-08-27

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-27 06:39 UTC

---

# Hugging Face 热门模型日报
**日期：2026-08-27**

---

## 📰 今日速览

今日 Hugging Face 趋势榜被 **Qwen 3.8 家族** 全面接管——`Qwen3.8-27B` 以 12,935 周点赞领跑，紧随其后的 `Kimi-K3`（11,024）、`MiniMax-H3`（4,506）和 `Qwen3.8-Flash-Next`（3,745）共同构成顶级梯队。**视频生成**赛道迎来新一轮爆发：`LTX-2.5` 与 `MiniMax-H3` 同台竞技。社区层面，**"Uncensored / Abliterated" 微调潮**异常活跃，Qwen3.8 衍生出 10+ 个去审查版本。同时，`DeepSeek-V4-Flash-0731` 与 `GLM-5.3-Flash` 的同日亮相，标志着主流国产基础模型进入"Flash 子版本常态化发布"阶段。

---

## 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | 点赞 | 下载 | 亮点 |
|---|---|---|---|---|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 12,935 | 3.29M | 本周冠军，多模态 27B 旗舰 |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 11,024 | 2.92M | Moonshot 下一代旗舰，长上下文/压缩张量 |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 3,745 | 2.55K | Qwen 实验性 `qwen4_exp` 架构预览 |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,744 | 3.86M | DeepSeek V4 轻量化分支，性价比突出 |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 1,060 | 0 | 智谱 GLM5 新一代 Flash 模型首日 |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 458 | 83K | 35B-A3B MoE 架构，基于 Qwen3.5 改造 |
| [ornith-ai/Ornith-1.5-9B](https://huggingface.co/ornith-ai/Ornith-1.5-9B) | ornith-ai | 230 | 119K | 小尺寸稠密版本，部署友好 |

---

## 🎨 多模态与生成（图像 / 视频 / 音频）

| 模型 | 作者 | 点赞 | 下载 | 亮点 |
|---|---|---|---|---|
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,506 | 4.79M | 图文生视频明星，已被生态广泛使用 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,879 | 894K | 图像→视频扩散模型，单文件可用 |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,265 | 19.5K | 文本生成音乐（diffusers 生态） |
| [superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 253 | 3.92K | 基于 Qwen3 的轻量 ASR/文本生成 |
| [Audio8/Audio8-TTS-Preview-0.1b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.1b) | Audio8 | 176 | 4.26K | 极小 TTS 预览模型，主打 ARK 架构 |
| [sensenova/SenseNova-U1.5-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1.5-8B-MoT) | sensenova | 174 | 3.26K | Any-to-Any 原生多模态 8B |
| [alibaba-pai/MiniMax-H3-Fun-Controlnet-Union](https://huggingface.co/alibaba-pai/MiniMax-H3-Fun-Controlnet-Union) | alibaba-pai | 141 | 3.15K | H3 的 ControlNet 视频控制适配 |

---

## 🔧 专用与工具型模型

| 模型 | 作者 | 点赞 | 下载 | 亮点 |
|---|---|---|---|---|
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,490 | 0 | 修复 Qwen3.5/3.8 Jinja 模板，工程刚需 |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 381 | 1.32M | Abliterated 系列长期口碑稳定 |

---

## 📦 微调与量化（GGUF / 社区衍生）

| 模型 | 作者 | 点赞 | 下载 | 亮点 |
|---|---|---|---|---|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,017 | 7.64M | 本周下载量冠军，事实标准 GGUF 量化 |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,183 | 270K | FP8 去审查微调 |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 1,146 | 79.4K | Apple Silicon MLX 优化版 |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 819 | 469K | MLX/GGUF 双格式 abliterated |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 760 | 1.62M | llama.cpp 主线，MTP 多 token 预测 |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 667 | 912K | "激进 MTP" 训练实验 |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 476 | 184K | 通用 GGUF 去审查版 |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 383 | 0 | Flash-Next 首日 GGUF 量化 |
| [unsloth/GLM-5.3-Flash-GGUF](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF) | unsloth | 138 | 0 | GLM-5.3-Flash GGUF 首日版 |
| [DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 255 | 233K | 复合 GAIN + Cold-Fusion 训练法 |
| [EschaLabs/Qwen3.8-27B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.8-27B-Escha-W2) | EschaLabs | 134 | 2.48K | 极限 **2-bit** 量化实验 |
| [orcarouter/Qwen3.8-27B-Uncensored](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored) | orcarouter | 193 | 17.6K | 原始 safetensors 去审查版 |

---

## 🌐 生态信号

**Qwen 3.8 成为新的"生态母体"**：30 个模型中超过半数（17 个）以 Qwen3.8 为底座，涵盖 27B、Flash-Next、MoE 等多个规格，证明 Qwen 系列已建立起类似"开源 Linux 内核"的衍生生态。**"Uncensored / Abliterated" 微调**形成稳定细分赛道——本周出现至少 6 个独立去审查 fork，反映出社区对基础模型行为可定制性的强需求。

**量化侧由 unsloth 主导**：Qwen3.8-27B-GGUF 单周下载 763 万，几乎是第二名的两倍；GGUF 格式继续巩固其在本地推理中的事实标准地位。**2-bit 量化（EschaLabs W2）和"激进 MTP"训练法**预示社区正把推理效率与生成吞吐推向更极端边界。

**多模态呈现"双星"格局**：[MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) 与 [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) 共同支撑视频生成热度；同时 [MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3)、[Audio8-TTS](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.1b) 表明**音乐/语音**正在成为下一个分战场。值得关注的是，主流厂商如 **DeepSeek、Moonshot、智谱**均采取"旗舰 + Flash"双线策略，**闭源权重模型在本榜单几乎缺席**，开源生态依然占据绝对主导。

---

## 🔍 值得探索

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 当之无愧的本周中心。27B 尺寸 + 多模态原生支持 + 12k+ 周点赞，是观察当前顶级开源模型能力上限的最佳样本，几乎所有衍生版本都可基于它做二次实验。

2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — 下载量破 479 万的视频生成模型，搭配 [alibaba-pai/MiniMax-H3-Fun-Controlnet-Union](https://huggingface.co/alibaba-pai/MiniMax-H3-Fun-Controlnet-Union) 可实现受控视频生成，是当前**生产级 T2V 工作流**最现实的选择。

3. **[HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)** — 融合"激进 MTP（多 token 预测）+ 去审查 + GGUF"三项前沿实验，**周下载量超 91 万**说明社区对其吞吐优化效果买账，适合研究推理加速与行为对齐的交叉

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*