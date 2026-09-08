# Hugging Face 热门模型日报 2026-09-08

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-08 02:32 UTC

---

# 🤗 Hugging Face 热门模型日报
**日期：2026-09-08**

---

## 📌 今日速览

Qwen 家族继续主导榜单，**Qwen3.8-27B** 以 14,278 点赞稳居榜首，其多模态版本与 Flash-Next 变体同步霸榜。视频生成方向迎来新一轮爆发，**MiniMaxAI/MiniMax-H3**（5,011 点赞）与 **Lightricks/LTX-2.5**（3,086 点赞）推动 image-to-video 成为趋势焦点。社区层面，**unsloth**、**ISTA-DASLab**、**nvidia** 等团队围绕 Qwen3.8 推出一系列 GGUF/NVFP4 量化版本，量化生态异常活跃。此外，DeepSeek-V4-Flash-Vision、GLM-5.3、Spark-X2.5 等新模型密集亮相，标志着头部厂商正以"小尺寸 + 多模态 + 高频迭代"路线抢占开发者心智。

---

## 🧠 语言模型（LLM、对话模型、指令微调）

- **[XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B)**
  作者：XHToken ｜ 点赞 739 ｜ 下载 7,216
  紧凑型 4B 文本生成模型，依托 spark2_5 架构，适合边缘设备部署与对话场景。

- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)**
  作者：Qwen ｜ 点赞 4,980 ｜ 下载 474,693
  通义千问"下一代 Flash"实验版本，主打极致推理速度，是 Qwen 家族近期最受关注的轻量旗舰。

- **[zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)**
  作者：zai-org ｜ 点赞 2,134 ｜ 下载 784,005
  智谱 GLM-5.3 系列的轻量多模态分支，平衡性能与成本，对标 Qwen Flash。

- **[zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3)**
  作者：zai-org ｜ 点赞 1,753 ｜ 下载 442,064
  智谱新一代对话基座，采用 glm_moe_dsa 架构，混合专家设计带来更强推理效率。

- **[openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B)**
  作者：openbmb ｜ 点赞 268 ｜ 下载 13
  面壁智能新一代端侧小模型，刚刚发布即冲榜，社区关注度高。

- **[IFM/K2-Horizon-MoVA-36B-A4B](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B)**
  作者：IFM ｜ 点赞 209 ｜ 下载 2,226
  36B 总参数 / 4B 激活的 MoE 架构新秀，专注长上下文与高效激活。

---

## 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**
  作者：Qwen ｜ 点赞 14,278 ｜ 下载 6,416,358
  本周现象级多模态旗舰，融合视觉理解与对话能力，是榜单当之无愧的"流量王"。

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**
  作者：MiniMaxAI ｜ 点赞 5,011 ｜ 下载 4,990,034
  视频生成领域当下最热门模型之一，支持 text-to-video / image-to-video / image-text-to-video，已被多个社区二次微调。

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**
  作者：Lightricks ｜ 点赞 3,086 ｜ 下载 1,584,382
  老牌开源视频生成框架 LTX 系列迭代，扩散单文件方案，兼顾速度与画质。

- **[openai-community/gpt2](https://huggingface.co/openai-community/gpt2)**
  作者：openai-community ｜ 点赞 3,715 ｜ 下载 14,629,637
  经典文本生成基座，凭借教学与微调价值持续保持高活跃度。

- **[openai/clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32)**
  作者：openai ｜ 点赞 1,212 ｜ 下载 20,496,047
  零样本图像分类的事实标准，作为多模态检索与对比学习的"基础设施"长盛不衰。

- **[deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp)**
  作者：deepseek-ai ｜ 点赞 800 ｜ 下载 251,611
  DeepSeek V4 Flash 的视觉实验版，主打"轻量 + 多模态"，对标 Qwen-Flash 系列。

- **[google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch)**
  作者：google ｜ 点赞 578 ｜ 下载 271,713
  Google 时序基础模型 PyTorch 版，专为时间序列预测设计，是少数登榜的纯时序模型。

- **[BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2)**
  作者：BreezeBlue ｜ 点赞 478 ｜ 下载 6,754
  社区开源 TTS 新作，自然度与可控性较前代提升明显。

- **[facebook/mms-300m](https://huggingface.co/facebook/mms-300m)**
  作者：facebook ｜ 点赞 265 ｜ 下载 12,213
  Meta 多语言语音预训练基座，覆盖 1,000+ 语言。

- **[OpenVDN/vdn-minimax-h3](https://huggingface.co/OpenVDN/vdn-minimax-h3)**
  作者：OpenVDN ｜ 点赞 226 ｜ 下载 0
  基于 MiniMax-H3 的早期视频微调，尚未正式发布即上榜，社区关注度极高。

- **[WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity)**
  作者：WarmBloodAban ｜ 点赞 143 ｜ 下载 26,731
  MiniMax-H3 风格变体微调，主打奇异风格视频生成。

- **[microsoft/VibeVoice-ASR-Streaming-7B](https://huggingface.co/microsoft/VibeVoice-ASR-Streaming-7B)**
  作者：microsoft ｜ 点赞 139 ｜ 下载 1,144
  微软流式语音识别模型，专为实时转写场景优化。

---

## 🔧 专用模型（代码、数学、医疗、嵌入）

- **[sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2)**
  作者：sentence-transformers ｜ 点赞 5,577 ｜ 下载 251,367,312
  嵌入模型"常青树"，超 2.5 亿次下载，是 RAG 与语义检索的事实标准基线。

- **[google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased)**
  作者：google-bert ｜ 点赞 2,992 ｜ 下载 50,747,373
  经典 NLP 基座，累计下载量惊人，依然是各类下游任务的默认起点。

- **[distilbert/distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased)**
  作者：distilbert ｜ 点赞 1,156 ｜ 下载 7,041,011
  BERT 的轻量化蒸馏版，移动端与低延迟场景首选。

- **[dealignai/GLM-5.3-CYBERSECURITY-FP8](https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8)**
  作者：dealignai ｜ 点赞 275 ｜ 下载 18,602
  基于 GLM-5.3 的网络安全领域微调，并去除安全限制，定位垂直行业安全研究。

---

## 📦 微调与量化（社区微调、GGUF、AWQ）

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)**
  作者：unsloth ｜ 点赞 3,643 ｜ 下载 10,479,045
  本周最热 GGUF 量化包，下载量破千万，是消费级显卡本地部署 Qwen3.8 的首选。

- **[HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)**
  作者：HauhauCS ｜ 点赞 996 ｜ 下载 1,629,754
  "去审查 + 激进 MTP"风格的社区微调，多模态 + GGUF 双标签，下载量惊人。

- **[unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF)**
  作者：unsloth ｜ 点赞 829 ｜ 下载 868,243
  Qwen3.8 Flash-Next 的官方量化版本，延续 unsloth 高质量 GGUF 传统。

- **[orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF)**
  作者：orcarouter ｜ 点赞 792 ｜ 下载 292,633
  另一款 Qwen3.8 社区"解封"版本，标注 abliterated。

- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)**
  作者：ISTA-DASLab ｜ 点赞 562 ｜ 下载 403,292
  采用 GSQ + RCO（Group Sensitive Quantization + RCO）混合精度方案，是量化研究的前沿实验。

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)**
  作者：DavidAU ｜ 点赞 303 ｜ 下载 258,896
  DavidAU 一贯的"长命名 + 多融合"风格变体，主打代码与创意写作。

- **[Jackrong/Qwopus3.8-27B-Flash-GGUF](https://huggingface.co/Jackrong/Qwopus3.8-27B-Flash-GGUF)**
  作者：Jackrong ｜ 点赞 142 ｜ 下载 60,343
  基于 Qwen3.8-27B 的 llama.cpp 量化变体，定位轻量部署。

- **[nvidia/Qwen3.8-Flash-Next-NVFP4](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-NVFP4)**
  作者：nvidia ｜ 点赞 139 ｜ 下载 18,068
  NVIDIA ModelOpt 团队出品的 NVFP4 量化版，针对 Blackwell GPU 优化，硬件厂商首次直接介入前沿模型量化。

---

## 📊 生态信号

Qwen 家族是当前 HF 生态毫无争议的核心增长极：30 个热门模型中有 **8 个** 围绕 Qwen3.8 展开衍生，覆盖基座、Flash-Next、多模态视觉、GGUF 量化、去审查微调、NVFP4 优化等多种形态。**开源权重明显占优**——榜单中仅有少量社区封装的闭源衍生，绝大多数为可下载、可微调的开放权重，体现出"开源即流量"的网络效应。

**量化生态呈现多元化分层**：GGUF（unsloth/DavidAU/HauhauCS）继续主导消费级本地部署；NVIDIA 则以 NVFP4 直击数据中心/HPC 场景；ISTA-DASLab 的 GSQ+RCO 则代表学术前研。值得警惕的是，**"Uncensored / abliterated" 类微调**已形成稳定需求侧，多次上榜并贡献可观下载量，反映出社区对内容自由度的高度关注。

视频生成方面，**MiniMax-H3 与 LTX-2.5 双雄并立**，加上多个早期微调（如 vdn-minimax-h3、Minimax-h3_Singularity），标志着开源视频赛道进入"基座竞争 + 风格化微调"双轨阶段。整体看，2026 年下半年 HF 生态的主线是：**头部基座 + 小尺寸变体 + 多模态/视频爆发 + 量化分层精细化**。

---

## ⭐ 值得探索

1. **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** — 通义千问下一代 Flash 实验版本，几乎所有量化团队都第一时间跟进

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*