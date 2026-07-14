# Hugging Face 热门模型日报 2026-07-14

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-14 01:54 UTC

---

# 🤗 Hugging Face 热门模型日报
**日期：2026-07-14**

---

## 📰 今日速览

今日 Hugging Face 趋势榜呈现明显的"中国军团主导"格局：**Zhipu AI 的 GLM-5.2** 以 3,901 周点赞领跑，**Tencent Hunyuan (Hy3)** 与 **Baidu Unlimited-OCR** 紧随其后。Qwen 3.5/3.6 系列持续成为社区微调的"基座之王"，衍生出十余款 GGUF、NVFP4、int4 量化变体和 uncensored 改版。同时，**World Model**（世界模型）作为新兴类别首次集体亮相（lingbot、Giga-World-1），视频生成与 Agent 框架也保持高热度。

---

## 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---|---|---|
| [**zai-org/GLM-5.2**](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 3,901 | 464,914 | 智谱新一代 MoE-DSA 大模型，本周榜首，MoE 架构+DeepSeek 风格注意力，开源 SOTA 候选 |
| [**tencent/Hy3**](https://huggingface.co/tencent/Hy3) | tencent | 755 | 9,157 | 腾讯混元第三代（HY_V3），多模态文本生成版本，国产旗舰级闭源转开源 |
| [**InternScience/Agents-A1**](https://huggingface.co/InternScience/Agents-A1) | InternScience | 526 | 29,801 | 基于 Qwen3.5 MoE 的 Agent 专用模型，定位智能体调用与工具使用 |
| [**nvidia/Nemotron-Labs-Audex-30B-A3B**](https://huggingface.co/nvidia/Nemotron-Labs-Audex-30B-A3B) | nvidia | 143 | 1,058 | NVIDIA Nemotron 实验室新作，30B-A3B MoE，主打长上下文与音频理解 |
| [**deepreinforce-ai/Ornith-1.0-35B-GGUF**](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF) | deepreinforce-ai | 868 | 1,392,300 | MIT 协议的 35B 通用模型，下载量极高，适合本地端部署 |
| [**SupraLabs/Supra-Router-51M**](https://huggingface.co/SupraLabs/Supra-Router-51M) | SupraLabs | 114 | 1,573 | 51M 超轻量级 LLM 路由模型，用于多模型系统的请求分发 |
| [**jlnsrk/GLM-5.2-colibri-int4**](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4) | jlnsrk | 87 | 1,997 | GLM-5.2 的 int4 CPU 优化版，引入 expert-streaming 技术 |

---

## 🎨 多模态与生成（图像 / 视频 / 音频）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---|---|---|
| [**empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,084 | 1,985,221 | 9B 视觉+1M 上下文+GGUF 量化，长文档多模态推理利器，社区爆款 |
| [**baidu/Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 1,963 | 1,506,937 | 百度开源 OCR 新版，无长度限制，下载量破百万，工业落地首选 |
| [**bottlecapai/ThinkingCap-Qwen3.6-27B**](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B) | bottlecapai | 311 | 4,909 | Qwen3.6-27B 思维链增强版，主打多模态推理 |
| [**migtissera/Tess-4-27B**](https://huggingface.co/migtissera/Tess-4-27B) | migtissera | 104 | 1,105 | Tess 第四代 27B 视觉语言模型，融合 Qwen3.5 |
| [**OpenMOSS-Team/MOSS-Transcribe-Diarize**](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize) | OpenMOSS-Team | 162 | 39,509 | 语音转写+说话人分离，端到端音频处理 |
| [**CohereLabs/cohere-transcribe-arabic-07-2026**](https://huggingface.co/CohereLabs/cohere-transcribe-arabic-07-2026) | CohereLabs | 102 | 11,647 | Cohere 阿拉伯语专用 ASR，小语种垂直场景 |
| [**nineninesix/gepard-1.0**](https://huggingface.co/nineninesix/gepard-1.0) | nineninesix | 95 | 3,940 | 基于 Qwen3.5 的 TTS 模型，文本到语音生成 |
| [**empero-ai/Qwythos-9B-v2**](https://huggingface.co/empero-ai/Qwythos-9B-v2) / [**-GGUF**](https://huggingface.co/empero-ai/Qwythos-9B-v2-GGUF) | empero-ai | 97/105 | 2,476/45,189 | Qwythos 第二代，全精度+GGUF 双版本 |
| [**conradlocke/krea2-identity-edit**](https://huggingface.co/conradlocke/krea2-identity-edit) | conradlocke | 256 | 0 | Krea-2 底座的身份保持 LoRA，专攻人脸/角色一致性编辑 |
| [**Alissonerdx/LTX-Best-Face-ID**](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID) | Alissonerdx | 124 | 0 | LTX-Video 平台的最佳人脸 ID 保持 LoRA，IPT2V 场景 |
| [**open-gigaai/Giga-World-1**](https://huggingface.co/open-gigaai/Giga-World-1) | open-gigaai | 128 | 0 | Apache-2.0 世界模型（Diffusers 架构），世界模拟新方向 |
| [**robbyant/lingbot-video-moe-30b-a3b**](https://huggingface.co/robbyant/lingbot-video-moe-30b-a3b) | robbyant | 100 | 513 | 30B-A3B 视频生成 MoE，Apache-2.0 开源 |
| [**robbyant/lingbot-world-v2-14b-causal-fast**](https://huggingface.co/robbyant/lingbot-world-v2-14b-causal-fast) | robbyant | 93 | 0 | 因果式世界模型 v2，14B 快速版，I2V 生成 |

---

## 🔧 专用模型（代码 / Agent / 数据 / 思维链）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---|---|---|
| [**yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF**](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF) | yuxinlu1 | 1,178 | 452,627 | Gemma-4 12B 终端 Agent 微调版，3.5×tau2 强化训练，编程/CLI 任务专用 |
| [**google/tabfm-1.0.0-pytorch**](https://huggingface.co/google/tabfm-1.0.0-pytorch) | google | 362 | 21,590 | Google Tabular Foundation Model，零样本表格分类/回归 |
| [**GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF**](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF) | GnLOLot | 220 | 68,714 | 1B 极小尺寸思维链模型，端侧可跑 |
| [**unsloth/DeepSeek-V4-Flash-GGUF**](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF) | unsloth | 162 | 49,423 | DeepSeek-V4 Flash 量化版，强调推理速度 |
| [**nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4**](https://huggingface.co/nvidia/NVIDIA-Nem

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*