# Hugging Face 热门模型日报 2026-07-09

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-09 02:36 UTC

---

# 🤗 Hugging Face 热门模型日报
**日期：2026-07-09**

---

## 📌 今日速览

今日榜单中，**智谱 GLM-5.2** 以 3,669 点赞登顶，延续了国产 MoE 大模型的强势节奏；**NVIDIA LocateAnything-3B** 与 **Krea-2-Turbo** 共同表明视觉定位与文生图正在加速商品化。同时，**yuxinlu1 的 Gemma-4 12B coder/agentic 系列**（合计点赞近 3,800）说明基于 Gemma-4 的代码智能体已成为社区微调新热点。**Qwen3.5/3.6 家族**继续占据榜单近三分之一席位，衍生出 NVFP4、GGUF、MTP 推测解码等多种下游形态。整体来看，"MoE + 量化 + 场景化微调"已成为开源生态的主旋律。

---

## 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | 点赞 | 下载 |
|---|---|---|---|
| [**zai-org/GLM-5.2**](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 3,669 | 281,584 |
| [**deepseek-ai/DeepSeek-V4-Pro-DSpark**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark) | deepseek-ai | 439 | 15,538 |
| [**tencent/Hy3**](https://huggingface.co/tencent/Hy3) | tencent | 565 | 121 |
| [**mistralai/Leanstral-1.5-119B-A6B**](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B) | mistralai | 167 | 157 |
| [**meituan-longcat/LongCat-2.0**](https://huggingface.co/meituan-longcat/LongCat-2.0) | meituan-longcat | 152 | 385 |
| [**poolside/Laguna-XS-2.1**](https://huggingface.co/poolside/Laguna-XS-2.1) | poolside | 79 | 3,385 |
| [**AliesTaha/fable-traces**](https://huggingface.co/AliesTaha/fable-traces) | AliesTaha | 187 | 3,886 |

> **GLM-5.2** 是今日榜眼级 MoE-DSA 架构，主打长上下文对话；**DeepSeek-V4-Pro-DSpark** 沿用 arxiv:2606.19348 路线，进一步推进稀疏注意力；**Tencent Hy3** 隶属混元 V3 体系，关注度与日俱增；**Mistral Leanstral** 是 119B-A6B 规模的 Mistral 微调变体，强调推理能力。

---

## 🎨 多模态与生成（图像 / 视频 / 音频 / VLM）

| 模型 | 作者 | 点赞 | 下载 |
|---|---|---|---|
| [**nvidia/LocateAnything-3B**](https://huggingface.co/nvidia/LocateAnything-3B) | nvidia | 2,667 | 1,424,958 |
| [**HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 2,574 | 2,823,988 |
| [**baidu/Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 1,874 | 1,084,945 |
| [**krea/Krea-2-Turbo**](https://huggingface.co/krea/Krea-2-Turbo) | krea | 555 | 123,729 |
| [**empero-ai/Qwythos-9B-Claude-Mythos-5-1M**](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M) | empero-ai | 737 | 152,516 |
| [**deepreinforce-ai/Ornith-1.0-9B**](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B) | deepreinforce-ai | 411 | 136,037 |
| [**deepreinforce-ai/Ornith-1.0-35B**](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B) | deepreinforce-ai | 366 | 280,236 |
| [**bottlecapai/ThinkingCap-Qwen3.6-27B**](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B) | bottlecapai | 143 | 46 |
| [**conradlocke/krea2-identity-edit**](https://huggingface.co/conradlocke/krea2-identity-edit) | conradlocke | 100 | 0 |
| [**eric-venti-seeds/Sun-Direction-Lora-Flux2Klein9B**](https://huggingface.co/eric-venti-seeds/Sun-Direction-Lora-Flux2Klein9B) | eric-venti-seeds | 107 | 0 |
| [**Patil/Krea-2-depth-controlnet**](https://huggingface.co/Patil/Krea-2-depth-controlnet) | Patil | 73 | 0 |

> **LocateAnything-3B** 是 NVIDIA 推出的视觉定位（visual grounding）小钢炮，下载量破百万；**Krea-2-Turbo** 及其衍生的 identity-edit LoRA、depth-controlnet 共同构建了 Krea-2 生态；**Ornith-1.0** 系列基于 Qwen3.5 MoE，主打图文多模态；社区还在围绕 **Flux2Klein** 探索光照/方向控制 LoRA。

---

## 🔧 专用模型（代码 / 数学 / 表格 / 嵌入）

| 模型 | 作者 | 点赞 | 下载 |
|---|---|---|---|
| [**yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF**](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF) | yuxinlu1 | 2,653 | 674,977 |
| [**yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF**](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF) | yuxinlu1 | 1,099 | 384,383 |
| [**google/tabfm-1.0.0-pytorch**](https://huggingface.co/google/tabfm-1.0.0-pytorch) | google | 314 | 9,458 |

> yuxinlu1 的 **Gemma-4 12B** 双胞胎是今日榜单代码类绝对主角：coder 版面向代码生成，agentic 版面向终端代理（tau2 benchmark 训练），下载量合计逾百万；**Google TabFM** 则是少见的零样本表格基础模型。

---

## 📦 微调与量化（GGUF / NVFP4 / AWQ / LoRA）

| 模型 | 作者 | 点赞 | 下载 |
|---|---|---|---|
| [**empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 1,859 | 1,683,711 |
| [**unsloth/Qwen3.6-27B-MTP-GGUF**](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF) | unsloth | 1,013 | 2,842,118 |
| [**deepreinforce-ai/Ornith-1.0-35B-GGUF**](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF) | deepreinforce-ai | 802 | 502,663 |
| [**froggeric/Qwen-Fixed-Chat-Templates**](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 783 | 0 |
| [**deepreinforce-ai/Orn

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*