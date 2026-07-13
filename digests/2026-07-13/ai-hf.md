# Hugging Face 热门模型日报 2026-07-13

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-13 02:08 UTC

---

# 🤗 Hugging Face 热门模型日报
**2026-07-13 · 精选 30 个本周热门模型**

---

## 📌 今日速览

今日趋势榜由 **Qwen3.5/3.6 系列衍生生态** 强势主导，从官方微调、GGUF 量化到 Uncensored 变体均有爆款；同时 **NVIDIA Labs 矩阵**（LocateAnything、Audex、Puzzle）展示出强大的垂直模型产出能力。值得关注的是，**MoE 架构**（GLM-5.2、DeepSeek-V4-Flash、LingBot-Video）正在成为大模型主流选择，而**世界模型**（Giga-World-1、LingBot-World-V2）和 **多模态定位**（LocateAnything）代表了新的能力前沿。中国厂商（腾讯混元、智谱 GLM、百度、美团）本周齐齐上榜，开源 LLM 生态竞争进一步白热化。

---

## 🧠 语言模型（LLM / 对话 / 指令微调）

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
  - 作者: zai-org · 👍 3,857 · ⬇️ 441,413
  - 智谱新一代 MoE 大模型，引入 `glm_moe_dsa`（DeepSeek Attention）架构，本周 LLM 类别点赞冠军。

- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)**
  - 作者: tencent · 👍 724 · ⬇️ 8,655
  - 腾讯混元第三代 Hy3 文本生成模型，代表中国大厂新一代旗舰基座。

- **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)**
  - 作者: InternScience · 👍 510 · ⬇️ 29,038
  - 基于 Qwen3.5 MoE 的智能体（Agent）专用模型，面向多步任务规划与工具调用。

- **[meituan-longcat/LongCat-2.0](https://huggingface.co/meituan-longcat/LongCat-2.0)**
  - 作者: meituan-longcat · 👍 182 · ⬇️ 1,767
  - 美团 LongCat 2.0 开源对话模型，从外卖场景迈向通用 LLM 基座的新一代尝试。

- **[SupraLabs/Supra-Router-51M](https://huggingface.co/SupraLabs/Supra-Router-51M)**
  - 作者: SupraLabs · 👍 107 · ⬇️ 1,434
  - 轻量级（51M）LLM 路由模型，专为多模型系统动态分发请求设计。

- **[migtissera/Tess-4-27B](https://huggingface.co/migtissera/Tess-4-27B)**
  - 作者: migtissera · 👍 94 · ⬇️ 971
  - 基于 Qwen3.5 的多模态创意写作/角色扮演模型，社区热门的「Tess」系列第四代。

---

## 🎨 多模态与生成（图像 / 视频 / 音频）

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
  - 作者: nvidia · 👍 2,717 · ⬇️ 1,501,653
  - NVIDIA 出品的视觉定位模型，给定文本描述即可在图中框出目标，下载量破百万，工业级实用价值极高。

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
  - 作者: baidu · 👍 1,943 · ⬇️ 1,430,656
  - 百度不限长度的 OCR 模型，专攻长文档、票据、表格等复杂场景的文字识别与特征提取。

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
  - 作者: empero-ai · 👍 2,047 · ⬇️ 1,967,677
  - 9B 多模态模型，支持 1M 超长上下文，量化版本适合本地部署。

- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)**
  - 作者: OpenMOSS-Team · 👍 131 · ⬇️ 14,491
  - 音频转录 + 说话人分离（diarization）一体化模型，会议记录与播客场景利器。

- **[CohereLabs/cohere-transcribe-arabic-07-2026](https://huggingface.co/CohereLabs/cohere-transcribe-arabic-07-2026)**
  - 作者: CohereLabs · 👍 95 · ⬇️ 9,860
  - Cohere 实验室发布的阿拉伯语专用 ASR 模型，针对多方言优化。

- **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)**
  - 作者: conradlocke · 👍 213 · ⬇️ 0
  - 基于 Krea-2-Raw 的 LoRA 图像编辑适配器，专攻人脸身份一致性编辑。

- **[open-gigaai/Giga-World-1](https://huggingface.co/open-gigaai/Giga-World-1)**
  - 作者: open-gigaai · 👍 123 · ⬇️ 0
  - 开源世界模型（World Model）首作，可生成可交互的虚拟环境帧序列。

- **[robbyant/lingbot-video-moe-30b-a3b](https://huggingface.co/robbyant/lingbot-video-moe-30b-a3b)**
  - 作者: robbyant · 👍 91 · ⬇️ 461
  - 30B 总参 / 3B 激活的 MoE 视频生成模型，Apache-2.0 协议。

- **[robbyant/lingbot-world-v2-14b-causal-fast](https://huggingface.co/robbyant/lingbot-world-v2-14b-causal-fast)**
  - 作者: robbyant · 👍 85 · ⬇️ 0
  - LingBot-World 第二代因果式世界模型，专为快速图生视频与游戏场景生成优化。

- **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)**
  - 作者: Alissonerdx · 👍 111 · ⬇️ 0
  - LTX-Video 框架下的 LoRA，专注人脸身份保持的视频生成。

- **[nineninesix/gepard-1.0](https://huggingface.co/nineninesix/gepard-1.0)**
  - 作者: nineninesix · 👍 85 · ⬇️ 2,263
  - 基于 Qwen3.5 文本特征空间的语音合成模型 TTS，统一语义与声学建模。

---

## 🔧 专用模型（代码 / 表格 / 智能体）

- **[nvidia/Nemotron-Labs-Audex-30B-A3B](https://huggingface.co/nvidia/Nemotron-Labs-Audex-30B-A3B)**
  - 作者: nvidia · 👍 131 · ⬇️ 901
  - NVIDIA Labs 30B-A3B MoE 模型，面向音频理解与推理任务。

- **[nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4)**
  - 作者: nvidia · 👍 113 · ⬇️ 34,796
  - NVIDIA Nemotron Puzzle 系列，75B 总参 / 9B 激活 MoE，NVFP4 量化发布。

- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**
  - 作者: yuxinlu1 · 👍 1,159 · ⬇️ 445,368
  - 基于 Gemma-4 12B 的 Agentic 编码模型，针对终端命令与工具调用强化训练。

- **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**
  - 作者: google · 👍 357 · ⬇️ 20,973
  - Google 表格基础模型（Tabular Foundation Model），支持零样本分类与回归。

- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**
  - 作者: froggeric · 👍 865 · ⬇️ 0
  - Qwen 系列 Jinja 聊天模板修复包（MLX 格式），解决推理时的 system/tool 标签对齐问题。

---

## 📦 微调与量化（社区微调 / GGUF / NVFP4）

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者: HauhauCS · 👍 2,677 · ⬇️ 2,596,384
  - Qwen3.6 35B-A3B 去审查 MoE 微调，下载量 260 万，社区角色扮演场景顶流。

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
  - 作者: unsloth · 👍 1,058 · ⬇️ 2,905,031
  - Unsloth 量化版 Qwen3.6-27B，集成 MTP（Multi-Token Prediction）加速，下载量近 300 万。

- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)**
  - 作者: deepreinforce-ai · 👍 855 · ⬇️ 1,347,036
  - 35B RLHF 微调模型 Ornith-1.0 的 GGUF 量化版，MIT 开源协议。

- **[unsloth/Qwen3.6-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4)**
  - 作者: unsloth · 👍 179 · ⬇️ 1,378,663
  - Unsloth 出品的 Qwen3.6-27B NVFP4 量化版，部署门槛进一步降低。

- **[unsloth/DeepSeek-V4-Flash-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF)**
  - 作者: unsloth · 👍 152 · ⬇️ 44,614
  - DeepSeek-V4-Flash 的 GGUF 量化版本，Flash 系列主打极致性价比推理。

- **[b

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*