# Hugging Face 热门模型日报 2026-09-06

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-06 02:23 UTC

---

# 🤗 Hugging Face 热门模型日报
**2026-09-06**

---

## 1️⃣ 今日速览

本周 Hugging Face 趋势榜呈现明显的 **Qwen 家族统治态势**：Qwen3.8-27B 以 14,040 周点赞稳居榜首，其 GGUF 量化版与社区"uncensored"微调合计占据榜单 11 席。**视频生成赛道**延续高热度，MiniMaxAI/MiniMax-H3 与 Lightricks/LTX-2.5 双双进入前列。值得注意的是，**时间序列预测**（google/timesfm-3.0）与**社区去审查微调**（obliterated/uncensored）成为本周期两大新兴增长极，前者将 LLM 范式延伸至金融/工业预测，后者则反映开源社区对模型对齐策略的持续博弈。

---

## 2️⃣ 热门模型

### 🧠 语言模型（LLM / 对话 / 指令微调）

| # | 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|------|------|------|------|-----------|
| 2 | [**Qwen/Qwen3.8-27B**](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 14,040 | 6.02M | 本周绝对主角，多模态旗舰，下载量一周破 600 万 |
| 3 | [**Qwen/Qwen3.8-Flash-Next**](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 4,914 | 401K | 轻量级 Flash 版本，定位低延迟推理 |
| 6 | [**zai-org/GLM-5.3-Flash**](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,079 | 727K | 智谱 Flash 高速版，挑战 Qwen Flash 系列 |
| 8 | [**zai-org/GLM-5.3**](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,719 | 370K | 国产 MoE 架构（glm_moe_dsa）主力 |
| 24 | [**tencent/Hy4-preview**](https://huggingface.co/tencent/Hy4-preview) | tencent | 443 | 6,195 | 腾讯混元 v4 预览版，开启新一轮国产大模型迭代 |
| 23 | [**IFM/K2-Horizon-MoVA-36B-A4B**](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B) | IFM | 174 | 1,333 | 36B MoE 架构，仅激活 4B 参数的稀疏设计 |

> **经典长尾模型**（依然霸榜下载）：[gpt2](https://huggingface.co/openai-community/gpt2)（3,701 点赞/14.7M 下载）、[bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased)（2,986 点赞/56M 下载）、[distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased)（1,156 点赞/7M 下载）——这些"老兵"证明经典架构仍是 NLP 入门与教学的基石。

---

### 🎨 多模态与生成（图像 / 视频 / 音频）

| # | 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|------|------|------|------|-----------|
| 14 | [**MiniMaxAI/MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,934 | 5.06M | 当前开源视频生成 SOTA，支持 image-to-video 与 text-to-video |
| 7 | [**Lightricks/LTX-2.5**](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 2,892 | 1.48M | 多合一视频生成：i2v/t2v/v2v 一站式解决方案 |
| 1 | [**deepseek-ai/DeepSeek-V4-Flash-Vision-Exp**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 680 | 184K | DeepSeek V4 多模态实验版本，视觉理解轻量化尝试 |
| 13 | [**BreezeBlue/Breeze-TTS-2**](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 448 | 5,962 | 文本转语音，填补开源 TTS 社区的活跃空白 |
| 21 | [**OpenVDN/vdn-minimax-h3**](https://huggingface.co/OpenVDN/vdn-minimax-h3) | OpenVDN | 187 | 0 | 社区针对 MiniMax-H3 的早期微调，尚未正式发布但已上榜 |
| 16 | [**facebook/mms-300m**](https://huggingface.co/facebook/mms-300m) | facebook | 263 | 12,961 | Meta 多语言语音基础模型，覆盖 1,000+ 语种 |
| 20 | [**openai/clip-vit-base-patch32**](https://huggingface.co/openai/clip-vit-base-patch32) | openai | 1,210 | 20.7M | 视觉-语言对齐经典之选，零样本分类长青树 |

---

### 🔧 专用模型（时序 / 嵌入 / 代码 / 检索）

| # | 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|------|------|------|------|-----------|
| 5 | [**google/timesfm-3.0-pytorch**](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 457 | 123K | Google 时序基础模型 v3，将 Transformer 范式推向工业预测 |
| 11 | [**sentence-transformers/all-MiniLM-L6-v2**](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,559 | 255M | 嵌入模型绝对王者，单模型累计 2.55 亿次下载 |
| 4 | [**XHToken/Spark-X2.5-4B**](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 544 | 4,755 | 轻量 4B 文本生成模型，适合端侧部署实验 |

---

### 📦 微调与量化（社区微调 / GGUF / AWQ / FP8）

> **核心观察**：本周 GGUF 量化与"uncensored/abliterated"社区微调已成绝对主力，11 个模型上榜，其中 7 个基于 Qwen3.8。

| # | 模型 | 作者 | 点赞 | 下载 | 亮点 |
|---|------|------|------|------|------|
| 10 | [**unsloth/Qwen3.8-27B-GGUF**](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,545 | **10.16M** | 本周下载冠军，unsloth 量化生态的旗舰 |
| 17 | [**unsloth/Qwen3.8-Flash-Next-GGUF**](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 799 | 780K | Flash 版本的官方量化版 |
| 9 | [**ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF**](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 410 | 297K | 学术机构出品，引入 GSQ+RCO 新型混合精度方案 |
| 22 | [**HauhauCS/Qwen3.8-27B-Uncensored...MTP-GGUF**](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 965 | 1.53M | "Aggressive"激进微调，社区争议热度高 |
| 25 | [**OBLITERATUS/Qwen3.8-27B-OBLITERATED**](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 1,096 | 968K | 提供 MLX/Safetensors/GGUF 三种格式 |
| 26 | [**JonathanColetti/Qwen3.8-27B-Uncensored-GGUF**](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 987 | 2.45M | llama.cpp 原生 GGUF，MTP 推理优化 |
| 28 | [**orcarouter/Qwen3.8-27B-Uncensored-GGUF**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 728 | 283K | orcarouter 三件套（Qwen / Flash / GLM）之一 |
| 29 | [**orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF**](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF) | orcarouter | 239 | 106K | — |
| 30 | [**orcarouter/GLM-5.3-Flash-Uncensored-FP8**](https://huggingface.co/orcarouter/GLM-5.3-Flash-Uncensored-FP8) | orcarouter | 186 | 8,338 | 罕见的 FP8 格式 + 去审查组合 |
| 18 | [**DavidAU/Qwen3.8-27B-TURBO-Fable...NEO-CODER-MAX-MTP-GGUF**](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 223 | 174K | DavidAU 风格化的"混合一切"实验体 |
| 27 | [**Jackrong/Qwopus3.8-27B-Flash-GGUF**](https://huggingface.co/Jackrong/Qwopus3.8-27B-Flash-GGUF) | Jackrong | 115 | 10,680 | Qwen + Octopus 思路混合体 |

---

## 3️⃣ 生态信号

本周 Hugging Face 趋势呈现**"双轨并行"**格局：

- **Qwen 家族一家独大**：Qwen3.8-27B 及其 Flash 版本不仅稳坐原生模型前两位，更通过 unsloth/ISTA-DASLab/orcarouter 等社区衍生出 9 个衍生模型，形成完整生态矩阵，反映阿里在该周期的发布节奏获得社区强烈共鸣。
- **量化与去审查成为新刚需**：GGUF 格式占据榜单约 40%，其中"uncensored/abliterated"微调独占 7 席。这一现象既说明 llama.cpp 生态的成熟，也折射出开源社区对安全对齐策略的持续反思与"绕过"探索。
- **视频生成进入实用化阶段**：MiniMax-H3 单周下载超 500 万、LTX-2.5 接近 150 万，标志着开源视频模型已从"演示 demo"迈向"可投产"；与此同时 [OpenVDN/vdn-minimax-h3](https://huggingface.co/OpenVDN/vdn-minimax-h3) 0 下载即上榜，预示社区微调窗口期开启。
- **垂直领域 LLM 范式扩张**：[google/timesfm-3.0](https://huggingface.co/google/timesfm-3.0-pytorch) 代表 Google 将 Transformer 架构推向时序预测的成功尝试，呼应 LLM-for-X 的工业落地浪潮。

---

## 4️⃣ 值得探索

1. 🏆 [**unsloth/Qwen3.8-27B-GGUF**](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)
   单周 10M+ 下载，是当下消费级硬件运行 27B 模型的**事实标准**。无论是研究推理优化还是工程落地，都是不容错过的基准线。

2. 🎬 [**MiniMaxAI/MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3)
   开源视频生成的当前标杆，覆盖 t2v/i2v 多任务且已稳定支持生产调用。对于做视频创作工具、AIGC 平台或内容自动化的团队，是优先级最高的调研对象。

3. 📈 [**google/timesfm-3.0-pytorch**](https://huggingface.co/google/timesfm-3.0-pytorch)
   时序预测的"GPT 时刻"候选者，背靠 Google 且已开源 PyTorch 权重。对金融、能源、供应链等垂直领域的从业者而言，是值得立即验证其 zero-shot 预测能力的新工具。

---

*📊 数据

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*