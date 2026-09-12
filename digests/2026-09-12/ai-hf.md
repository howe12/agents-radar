# Hugging Face 热门模型日报 2026-09-12

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-12 02:37 UTC

---

# 🤗 Hugging Face 热门模型日报
**日期：2026-09-12**

---

## 📌 今日速览

Qwen 生态持续主导 HF 趋势榜，**Qwen3.8-27B** 本周在原始权重（14.7K 点赞）和社区 GGUF 衍生版本两端都占据榜首，反映出 27B 级别"中型强模型"已成为开源 LLM 的甜点档位。**DeepSeek-V4.1-Flash** 与 **GLM-5.3-Flash** 同步冲榜，标志着头部团队已把"Flash / 轻量级旗舰"作为主流发布策略；视频生成侧 **MiniMax-H3**、**LTX-2.5**、**Viggle-Animate** 形成第一梯队，AI 视频赛道进入"卷时长、卷一致性"阶段。值得关注的是 NVIDIA 推动的 **NVFP4** 4-bit 量化格式首次进入趋势榜，可能预示推理部署格式竞争升级。

---

## 🧠 语言模型（LLM / 对话 / 指令微调）

| # | 模型 | 作者 | 👍 | 📥 | 简介 |
|---|---|---|---|---|---|
| 2 | [MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 1,197 | 67.5K | 面壁 2B 级第五代小钢炮，主打端侧部署的低成本基座 |
| 3 | [Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 1,107 | 17.7K | 讯飞星火 X2.5 系列的 4B 衍生版本，主打中文对话 |
| 5 | [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | **14,765** | 7.56M | 本周绝对榜首，多模态原生 27B，是当前社区微调的事实基座 |
| 16 | [Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,106 | 586K | Qwen3.8 实验线 "Next"，主打更快推理的多模态对话模型 |
| 19 | [GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,252 | 1.17M | 智谱 GLM-5.3 轻量旗舰，多模态对话，单卡可跑 |
| 27 | [K2-Horizon-MoVA-36B-A4B](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B) | IFM | 282 | 5.2K | K2 团队的 36B / 4B-active MoE 架构，尝试混合视觉-语言稀疏激活 |
| 24 | [gpt2](https://huggingface.co/openai-community/gpt2) | openai-community | 3,942 | 15M | 长青基线，常被教学/回归测试引用 |

---

## 🎨 多模态与生成（图像 / 视频 / 音频）

| # | 模型 | 作者 | 👍 | 📥 | 简介 |
|---|---|---|---|---|---|
| 1 | [DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 1,806 | 75.8K | DeepSeek V4 系列的轻量多模态分支，兼顾图文对话与推理速度 |
| 8 | [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 3,503 | 1.67M | 视频生成扩散模型，单文件 checkpoint，支持文生视频 / 图生视频 / 视频变换 |
| 11 | [Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 298 | 103K | 社区在 MiniMax-H3 基础上做的"奇点"特化微调版本 |
| 15 | [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,156 | 4.97M | 当前最强开源视频生成系列，支持 text-to-video / image-to-video |
| 17 | [DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 864 | 444K | DeepSeek V4 Flash 的视觉实验分支，主打纯视觉理解 + 文本生成 |
| 22 | [Viggle-Animate](https://huggingface.co/Viggle/Animate) | Viggle | 181 | 0 | 角色驱动视频生成 / 替换工具，首日上架 |
| 23 | [VibeVoice-ASR-Streaming-7B](https://huggingface.co/microsoft/VibeVoice-ASR-Streaming-7B) | microsoft | 201 | 2.3K | 微软流式语音识别 7B，主打低延迟转写 |
| 14 | [YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p | 230 | 971 | 3B 音乐生成模型，支持 agentic 编辑与符号化规划 |

---

## 🔧 专用模型（代码 / 时间序列 / 嵌入 / 行业）

| # | 模型 | 作者 | 👍 | 📥 | 简介 |
|---|---|---|---|---|---|
| 13 | [timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 732 | 633K | Google 时序基础模型第三代 PyTorch 版，零样本预测表现稳健 |
| 21 | [all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,825 | **254M** | 史上下载量最高的嵌入模型之一，RAG 默认基线 |
| 25 | [Qwen-Drive-1.0-4B](https://huggingface.co/Qwen/Qwen-Drive-1.0-4B) | Qwen | 169 | 3.3K | Qwen 首个自动驾驶专用模型，4B 做运动规划 + 场景问答 |
| 29 | [facebook/mms-300m](https://huggingface.co/facebook/mms-300m) | facebook | 455 | 12K | Meta 多语言语音大规模预训练模型，覆盖 1000+ 语言 |

---

## 📦 微调与量化（社区 GGUF / AWQ / Uncensored）

| # | 模型 | 作者 | 👍 | 📥 | 简介 |
|---|---|---|---|---|---|
| 6 | [Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 838 | 682K | 学术派量化：GSQ + RCO 混合精度 GGUF，主打低显存保精度 |
| 9 | [Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,898 | **11.3M** | Unsloth 官方量化版，社区 llama.cpp 部署首选 |
| 12 | [Qwen3.8-27B-TURBO-…NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 483 | 606K | 长名号"Heretic Uncensored"系列，MTP 多 token 预测微调 |
| 18 | [Qwen3.8-Flash-Next-NVFP4](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-NVFP4) | nvidia | 203 | 78.7K | NVIDIA NVFP4 4-bit 量化首作，可能推动新推理格式标准 |
| 20 | [MiniCPM5-2B-GGUF](https://huggingface.co/openbmb/MiniCPM5-2B-GGUF) | openbmb | 168 | 70.8K | MiniCPM5-2B 的官方 GGUF，边缘设备友好 |
| 26 | [Qwopus3.8-27B-Flash-GGUF](https://huggingface.co/Jackrong/Qwopus3.8-27B-Flash-GGUF) | Jackrong | 205 | 232K | Qwen3.8 Flash 的社区 GGUF，主打多模态视觉任务 |
| 28 | [Qwen3.8-27B-Uncensored-HauhauCS-…-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 1,103 | 2.00M | 高下载量 Uncensored + MTP 微调，反映社区对去对齐/极限速率的真实需求 |
| 30 | [Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 899 | 321K | 又一款 Qwen3.8 Uncensored GGUF，abliterated 处理 |

---

## 🌐 生态信号

- **Qwen3.8-27B 已成"开源时代 Llama"**：原模型加 5 款衍生 GGUF / 量化 / Uncensored 同时进榜，覆盖学术（GSQ-RCO）、工业（Unsloth）、极客（Uncensored）三类用户，意味着开发者把 27B 这一档当作默认起跑线。
- **"Flash / Mini / Next" 三件套**：DeepSeek（V4.1-Flash、V4-Flash-Vision-Exp）、GLM（5.3-Flash）、Qwen（3.8-Flash-Next）几乎同时押注轻量级旗舰，说明"小而强多模态"已替代"越大越好"成为新发布范式。
- **量化格式暗战升级**：传统 GGUF（Q4/Q8）仍占多数，但 NVIDIA 的 **NVFP4** 首次登榜，暗示 Hopper/Blackwell 之后硬件原生 4-bit 路径可能挤压社区量化生态。
- **Uncensored / abliterated / MTP 微调泛滥**：上榜 30 个模型中近 1/4 属于此类，反映社区对去对齐、极限生成速率的强劲刚需，也对"安全微调"的可复现性提出挑战。
- **闭源 vs 开源**：本周趋势榜几乎被权重公开的模型包揽，仅有 Microsoft、Google、DeepSeek 等少数走"开源基座 + 闭源 API"双轨策略的厂商形成正循环。

---

## ⭐ 值得探索

1. **[MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** —— 当前下载量与点赞综合最强的视频生成开源模型，支持 text-to-video 与 image-to-video 一体化，是研究视频扩散架构 / 时间一致性的最佳参照之一。
2. **[google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch)** —— 时间序列预测的"基础模型范式"代表，零样本能力已逼近专用模型，是把 LLM 思路迁出 NLP 边界的成功案例，适合做企业级预测 PoC。
3. **[nvidia/Qwen3.8-Flash-Next-NVFP4](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-NVFP4)** —— NVFP4 的早期落地实验，如果你手上有 Blackwell 显卡，值得对比它与 GGUF Q4 在吞吐、显存与生成质量上的差异，提前卡位下一代推理栈。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*