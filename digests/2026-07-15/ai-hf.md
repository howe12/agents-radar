# Hugging Face 热门模型日报 2026-07-15

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-15 01:50 UTC

---

# 🗞️ Hugging Face 热门模型日报
**日期：2026-07-15 · 共收录 30 个热门仓库**

---

## 📌 今日速览

今日榜单由 **Qwen 3.5/3.6 家族与 GLM-5.2** 主导，二者合计占据了高下载量与高点赞的主要席位。**zai-org/GLM-5.2** 以 3,949 周点赞稳居榜首，国产大模型（智谱、腾讯 Hunyuan、百度、InternScience）在榜单中的存在感明显上升。**世界模型**（World Model）异军突起，open-gigaai 与 robbyant 的 LingBot 系列首次进入 Top 30；**亚比特量化**（1-bit / 2-bit ternary）逐步走出实验阶段，开始在 GGUF 仓库中出现可投产版本。OCR 方向依然长尾稳健——百度 Unlimited-OCR 与 OvisOCR2 同时在榜。

---

## 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | 👍 点赞 | ⬇️ 下载 | 一句话点评 |
|---|---|---|---|---|
| [**zai-org/GLM-5.2**](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 3,949 | 489,611 | 智谱新一代 MoE-DSA 旗舰，本周点赞王，对话与生成双优 |
| [**tencent/Hy3**](https://huggingface.co/tencent/Hy3) | tencent | 781 | 10,406 | 腾讯混元 v3，主打通用文本生成 |
| [**InternScience/Agents-A1**](https://huggingface.co/InternScience/Agents-A1) | InternScience | 538 | 30,539 | 基于 Qwen3.5 MoE 的智能体微调，强调工具调用与多轮任务 |
| [**empero-ai/Qwythos-9B-v2**](https://huggingface.co/empero-ai/Qwythos-9B-v2) | empero-ai | 115 | 3,959 | Qwen3.5 基座 + Claude 风格的指令微调版本 |
| [**migtissera/Tess-4-27B**](https://huggingface.co/migtissera/Tess-4-27B) | migtissera | 112 | 1,262 | Tess 家族迭代至 27B，图文双塔结构 |

## 🎨 多模态与生成（图像 / 视频 / 音频 / 文本到 X）

| 模型 | 作者 | 👍 点赞 | ⬇️ 下载 | 一句话点评 |
|---|---|---|---|---|
| [**HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 2,732 | 2,443,871 | Qwen3.6-35B 视觉 MoE 解锁版，下载量仅次于 GLM-5.2 |
| [**empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,156 | 2,006,265 | 1M 上下文图文模型 GGUF 版本，社区下载主力 |
| [**baidu/Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 1,983 | 1,715,301 | 百度无限制 OCR，工业级文档解析 |
| [**bottlecapai/ThinkingCap-Qwen3.6-27B**](https://huggingface.co/bottleapai/ThinkingCap-Qwen3.6-27B) | bottleapai | 341 | 6,208 | 具备显式"思考帽"的 Qwen3.6 多模态推理模型 |
| [**OpenMOSS-Team/MOSS-Transcribe-Diarize**](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize) | OpenMOSS-Team | 189 | 65,109 | 转写 + 说话人分离一体化音频模型 |
| [**open-gigaai/Giga-World-1**](https://huggingface.co/open-gigaai/Giga-World-1) | open-gigaai | 132 | 0 | Apache-2.0 世界模型首发，对标 Sora 类生成 |
| [**robbyant/lingbot-video-moe-30b-a3b**](https://huggingface.co/robbyant/lingbot-video-moe-30b-a3b) | robbyant | 104 | 700 | LingBot 视频 MoE，30B-A3B 参数激活结构 |
| [**robbyant/lingbot-world-v2-14b-causal-fast**](https://huggingface.co/robbyant/lingbot-world-v2-14b-causal-fast) | robbyant | 96 | 0 | 因果式 World Model，专为 i2v 实时推理设计 |
| [**Alissonerdx/LTX-Best-Face-ID**](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID) | Alissonerdx | 141 | 0 | LTX-Video 面部身份保持 LoRA |
| [**mgwr/M87**](https://huggingface.co/mgwr/M87) | mgwr | 107 | 2,408 | Krea-2-Turbo 底座扩散 LoRA |
| [**ATH-MaaS/OvisOCR2**](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 85 | 745 | Qwen3.5 增强的视觉 OCR 套装 |

## 🔧 专用模型（代码 / Agent / 嵌入 / 行业）

| 模型 | 作者 | 👍 点赞 | ⬇️ 下载 | 一句话点评 |
|---|---|---|---|---|
| [**yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF**](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF) | yuxinlu1 | 1,189 | 468,629 | 基于 Gemma-4 的 Agent 编码模型，主打终端工具调用 |
| [**nvidia/Nemotron-Labs-Audex-30B-A3B**](https://huggingface.co/nvidia/Nemotron-Labs-Audex-30B-A3B) | nvidia | 149 | 1,332 | NVIDIA 实验室音频-文本 MoE 实验体 |
| [**nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4**](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4) | nvidia | 117 | 41,755 | 75B-A9B 超大稀疏专家模型原生 NVFP4 |

## 📦 微调与量化（社区微调 / GGUF / AWQ）

| 模型 | 作者 | 👍 点赞 | ⬇️ 下载 | 一句话点评 |
|---|---|---|---|---|
| [**unsloth/Qwen3.6-27B-MTP-GGUF**](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF) | unsloth | 1,091 | 2,904,515 | 启用 MTP（多 token 预测）的 Qwen3.6，本周下载冠军 |
| [**froggeric/Qwen-Fixed-Chat-Templates**](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 903 | 0 | 修复 Qwen 多版本 Chat Template 的 Jinja 模板工程仓库 |
| [**deepreinforce-ai/Ornith-1.0-35B-GGUF**](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF) | deepreinforce-ai | 880 | 1,533,354 | MIT 许可的对话模型仓库，端点可部署 |
| [**GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF**](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF) | GnLOLot | 233 | 89,892 | 1B MiniCPM5 + Claude Opus 思维链蒸馏 GGUF |
| [**unsloth/Qwen3.6-27B-NVFP4**](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4) | unsloth | 204 | 1,599,150 | Qwen3.6 原生 NVFP4 格式，硬件友好 |
| [**unsloth/DeepSeek-V4-Flash-GGUF**](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF) | unsloth | 172 | 55,222 | DeepSeek V4 轻量版 GGUF |
| [**prism-ml/Ternary-Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 160 | 23 | 27B 模型压到 2-bit 三值，仍能保持对话能力 |
| [**empero-ai/Qwythos-9B-v2-GGUF**](https://huggingface.co/empero-ai/Qwythos-9B-v2-GGUF) | empero-ai | 129 | 70,260 | Qwythos v2 GGUF，对应原始仓库 |
| [**jlnsrk/GLM-5.2-colibri-int4**](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4) | jlnsrk | 102 | 2,188 | GLM-5.2 INT4 CPU 友好版，支持 expert-streaming |
| [**prism-ml/Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 97 |

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*