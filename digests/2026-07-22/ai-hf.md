# Hugging Face 热门模型日报 2026-07-22

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-22 02:02 UTC

---

# 🤗 Hugging Face 热门模型日报
**日期：2026-07-22 · 数据样本：周热门 30 个模型**

---

## 一、今日速览

本周 Hugging Face 热门榜单呈现出三个鲜明信号：**极低比特量化（1-bit / 2-bit ternary）已经从实验走向大规模分发**——prism-ml 的 Bonsai 系列以 27B 规模在 GGUF 和 MLX 双生态下拿下累计百万级下载；**Qwen3.5/3.6 正在成为社区微调的"基础设施底座"**，榜单中至少 6 个高赞衍生模型都建立在其之上；**OCR、机器人视觉-语言-动作（VLA）、流式 ASR 等垂直专用模型开始挤进主榜单**，说明通用聊天模型的红利期已过，场景化模型正在被关注。

---

## 二、热门模型

### 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | 👍 | ⬇️ | 一句话 |
|---|---|---|---|---|
| [**zai-org/GLM-5.2**](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,283 | 545,109 | 本周榜单冠军，采用 `glm_moe_dsa` MoE 架构，是国产开源旗舰新一代主力 |
| [**poolside/Laguna-S-2.1**](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 196 | 3,056 | poolside 编程导向模型的小型化新版本，专攻代码场景 |
| [**bottlecapai/ThinkingCap-Qwen3.6-27B**](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B) | bottlecapai | 491 | 12,002 | 基于 Qwen3.6-27B 的"思维链增强"微调，强调推理显式化 |
| [**Motif-Technologies/Motif-3-Beta**](https://huggingface.co/Motif-Technologies/Motif-3-Beta) | Motif-Technologies | 127 | 125 | 新晋厂商 Motif 的第三代测试版，定位企业级可控生成 |
| [**Nanbeige/Nanbeige4.2-3B**](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 78 | 0 | 南贝格最新轻量级 LLM，3B 参数主打小资源部署 |

### 🎨 多模态与生成（图像 / 视频 / 音频 / 文本到 X）

| 模型 | 作者 | 👍 | ⬇️ | 一句话 |
|---|---|---|---|---|
| [**google/gemma-4-31B-it**](https://huggingface.co/google/gemma-4-31B-it) | google | 3,314 | 12,113,203 | 谷歌第四代 Gemma 多模态版本，下载量已突破 1200 万，是本周商用多模态标杆 |
| [**thinkingmachines/Inkling**](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,366 | 16,441 | 新锐厂商 Thinking Machines 的多模态首发作，覆盖 image-text-to-text |
| [**unsloth/inkling-GGUF**](https://huggingface.co/unsloth/inkling-GGUF) | unsloth | 116 | 7,377 | Unsloth 第一时间为 Inkling 出的 GGUF 量化版，便于本地推理 |
| [**HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 2,971 | 1,997,690 | Qwen3.6 MoE 35B-A3B 的"去对齐"重制版，接近 200 万下载，社区现象级作品 |
| [**empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,389 | 2,133,420 | 9B 量化版"神话"角色扮演模型，主打超长上下文（1M token） |
| [**OpenMOSS-Team/MOSS-Transcribe-Diarize**](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize) | OpenMOSS-Team | 299 | 92,265 | 端到端语音转写 + 说话人分离（diarization），落地的音频多模态方案 |
| [**Alissonerdx/LTX-Best-Face-ID**](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID) | Alissonerdx | 222 | 0 | LTX-Video 平台的参考视频身份保持 LoRA，IP-preserving 视频生成 |

### 🔧 专用模型（代码 / OCR / 嵌入 / 机器人）

| 模型 | 作者 | 👍 | ⬇️ | 一句话 |
|---|---|---|---|---|
| [**baidu/Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 2,609 | 2,237,351 | 百度无限制 OCR 模型，下载量超 220 万，垂类文档抽取的工业级首选 |
| [**moonshotai/Kimi-K2.7-Code**](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 1,200 | 722,058 | 月之暗面 Kimi K2.7 的代码专用版，压缩权重重编程方向发力 |
| [**nvidia/nemotron-3.5-asr-streaming-0.6b**](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | nvidia | 903 | 590,230 | NVIDIA 流式 ASR，0.6B 即可上生产，实时语音场景利器 |
| [**ATH-MaaS/OvisOCR2**](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 237 | 17,162 | 基于 Qwen3.5 的 OCR 二代版本，多语言文档识别 |
| [**Cactus-Compute/needle**](https://huggingface.co/Cactus-Compute/needle) | Cactus-Compute | 298 | 1,068 | 专注 function-calling 与 tool-use 的小模型，Agent 工程友好 |
| [**nvidia/Nemotron-3-Embed-1B-BF16**](https://huggingface.co/nvidia/Nemotron-3-Embed-1B-BF16) | nvidia | 96 | 93,021 | NVIDIA Nemotron 系列新一代嵌入模型，1B BF16 精度 |
| [**openbmb/MiniCPM-RobotManip**](https://huggingface.co/openbmb/MiniCPM-RobotManip) | openbmb | 147 | 58 | 面壁智能 VLA 机械臂操控模型，"看-想-动"端到端 |
| [**openbmb/MiniCPM-RobotTrack**](https://huggingface.co/openbmb/MiniCPM-RobotTrack) | openbmb | 107 | 72 | VLA 跟踪版本，与 Manip 配套形成机器人感知双件套 |

### 📦 微调与量化（社区微调 / GGUF / AWQ / 极端压缩）

| 模型 | 作者 | 👍 | ⬇️ | 一句话 |
|---|---|---|---|---|
| [**prism-ml/Ternary-Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 899 | 432,196 | 27B 参数 **2-bit 三值化** GGUF，单卡即可推理，标志性极限压缩 |
| [**prism-ml/Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 571 | 1,404,962 | 同系列 **1-bit** GGUF，下载量破 140 万，证明极低比特仍可"可用" |
| [**prism-ml/Bonsai-27B-mlx-1bit**](https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit) | prism-ml | 161 | 25,273 | 1-bit 模型的 Apple MLX 端口，覆盖 M 系列芯片用户 |
| [**prism-ml/Ternary-Bonsai-27B-mlx-2bit**](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-mlx-2bit) | prism-ml | 135 | 20,445 | 2-bit ternary 的 MLX 端口，与 GGUF 版形成跨生态覆盖 |
| [**DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF**](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 249 | 62,842 | DavidAU 的"叙事熔炉"长名变体，融合多个微调主题的 GGUF |
| [**GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking**](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking) | GnLOLot | 166 | 6,165 | 基于 MiniCPM5-1B 蒸馏"Claude Opus 风格"的思考型模型 |
| [**GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF**](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF) | GnLOLot | 147 | 51,746 | 上述模型 V2 的 GGUF 量化版 |
| [**AngelSlim/Hy3-GGUF**](https://huggingface.co/AngelSlim/Hy3-GGUF) | AngelSlim | 157 | 145,102 | 腾讯混元 Hy3 的 GGUF 社区转量化版 |
| [**conradlocke/krea2-identity-edit**](https://huggingface.co/conradlocke/krea2-identity-edit) | conradlocke | 476 | 0 | 基于 Krea-2 的身份一致性编辑 LoRA，ComfyUI 工作流友好 |
| [**reteetzad/Kimi-K3**](https://huggingface.co/reteetzad/Kimi-K3) | reteetzad | 243 | 0 | Kimi K3 社区预发布，详情尚未公开 |

---

## 三、生态信号

本周榜单的"信号噪声比"很高：**Qwen3.5/Qwen3.6 系列几乎成为社区微调的"操作系统底层"**，从 OCR 到 uncensored、MoE 视觉到 GGUF 极限压缩，全部构建于其之上，这说明阿里通义系列的生态护城河已经形成；**开源权重整体仍然强势，闭源厂商仅 google 一家进入 Top5**，但其优势来自 Gemma 4 的多模态代差而非闭源本身；最值得关注的动向是 **prism-ml 的 Bonsai 系列——1-bit / 2-bit ternary 已经能承载 27B 模型且下载量达百万级**，意味着"比特即服务"的推理经济学正在被改写，未来 Agent 部署成本可能被压到当前的 1/8 甚至更低。此外，**NVIDIA 在 ASR 与 Embedding 两端同时上榜**，Nemotron 系列正在复制 Llama 当年的"全栈开源"打法。

---

## 四、值得探索

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*