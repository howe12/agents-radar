# Hugging Face 热门模型日报 2026-07-19

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-19 02:05 UTC

---

# 🤗 Hugging Face 热门模型日报
**2026-07-19**

---

## 一、今日速览

今日榜单呈现**"国产模型霸榜 + 极致量化爆发 + 多模态长上下文竞赛"**三大主线。智谱 [GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) 以 4,126 点赞登顶，新一代 MoE-DSA 架构引发关注；[Google Gemma 4-31B-it](https://huggingface.co/google/gemma-4-31B-it) 凭借 1,260 万次下载成为本月最广泛部署的多模态基座。极度激进的亚比特量化（1-bit、2-bit Ternary）正成为社区焦点，[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf) 系列周内合计下载量已破百万。OCR、视频生成、Agent 工具调用三个垂直赛道同步升温。

---

## 二、热门模型分类整理

### 🧠 语言模型（LLM / 对话 / 指令微调）

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
  作者：zai-org｜点赞 4,126｜下载 541,662
  智谱新一代旗舰，采用 `glm_moe_dsa` MoE 架构，今日榜单冠军，国产开源 LLM 顶流。

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
  作者：google｜点赞 3,263｜下载 12,608,008
  Google 第 4 代 Gemma 31B 指令微调版，原生支持图像-文本输入，本周下载量突破 1260 万，是当下最受欢迎的多模态开源权重基座之一。

- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)**
  作者：tencent｜点赞 829｜下载 13,571
  腾讯混元 Hy3 全新基座，使用自研 `hy_v3` 架构，是混元系列重大迭代，社区关注度迅速攀升。

- **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)**
  作者：InternScience｜点赞 579｜下载 35,575
  基于 Qwen3.5 MoE 的智能体专用模型，面向多步骤任务规划与工具调用场景。

- **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)**
  作者：Cactus-Compute｜点赞 268｜下载 935
  专注于 function-calling / tool-use 能力的轻量模型，采用 JAX 权重，是构建生产级 Agent 栈的潜力候选。

### 🎨 多模态与生成（图像 / 视频 / 音频 / OCR）

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
  作者：empero-ai｜点赞 2,315｜下载 2,112,869
  基于 Qwen3.5 的视觉-语言模型，**支持 1M 超长上下文**的 GGUF 量化版，下载量超 200 万，长文档/视频理解利器。

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
  作者：baidu｜点赞 2,025｜下载 2,088,470
  百度推出的"无限 OCR"模型，主打任意版面、任意长度的文字识别，已成中文 OCR 领域事实级开源基座。

- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)**
  作者：thinkingmachines｜点赞 1,064｜下载 12,456
  Thinking Machines 推出的全新 `inkling_mm_model` 多模态模型，原生支持图像与文本联合推理，是本周最值得关注的"新势力"模型之一。

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  作者：HauhauCS｜点赞 2,866｜下载 2,190,398
  Qwen3.6-35B-A3B 的去审查 GGUF 衍生版，MoE 架构 + 视觉能力 + 极强话题自由度，社区下载量 219 万。

- **[bottleapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottleapai/ThinkingCap-Qwen3.6-27B)**
  作者：bottleapai｜点赞 437｜下载 10,445
  Qwen3.6-27B 的"思考增强"微调，针对推理链路优化，是 thinking 系列在多模态方向的延伸。

- **[empero-ai/Qwythos-9B-v2](https://huggingface.co/empero-ai/Qwythos-9B-v2)**
  作者：empero-ai｜点赞 140｜下载 9,060
  Qwythos 第二代视觉-语言模型，配合 GGUF 版本一同部署，长文档/图表理解能力升级。

- **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)**
  作者：ATH-MaaS｜点赞 170｜下载 13,750
  基于 Qwen3.5 的新一代 OCR 模型，主打复杂场景与多语言文字识别。

- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)**
  作者：OpenMOSS-Team｜点赞 259｜下载 86,385
  端到端语音转写 + 说话人分离模型，音频-文本联合任务，已具备生产可用质量。

- **[OpenMOSS-Team/MOSS-VL-Realtime](https://huggingface.co/OpenMOSS-Team/MOSS-VL-Realtime)**
  作者：OpenMOSS-Team｜点赞 77｜下载 529
  实时视频理解模型，主打流式低延迟视觉问答，代表视频多模态的前沿方向。

- **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)**
  作者：Wan-AI｜点赞 114｜下载 2,328
  Wan 系列 14B 图生视频模型，专注人物动作迁移与舞蹈生成，是当前 I2V 创意内容的高人气选项。

### 🔧 专用模型（OCR / 视频生成 / Agent）

- **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)**
  作者：conradlocke｜点赞 395｜下载 0
  基于 Krea-2-Raw 的 LoRA，专门解决人像身份一致性编辑问题，是 ComfyUI 创意工作流常用插件。

- **[Cseti/LTX2.3-22B_IC-LoRA-CrossView-Prompt](https://huggingface.co/Cseti/LTX2.3-22B_IC-LoRA-CrossView-Prompt)**
  作者：Cseti｜点赞 91｜下载 0
  LTX-Video 2.3 的 IC-LoRA，专注跨视角/新视角合成，扩展开源视频生成的可用工具集。

- **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)**
  作者：Alissonerdx｜点赞 187｜下载 0
  面向 T2V 的 LoRA，强调人脸身份保持的参考到视频生成，配合 LTX-Video 流水线效果显著。

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** / **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)**
  OCR 双雄：百度走"无限长度 + 任意版面"路线，ATH-MaaS 走 Qwen3.5 + 多语言路线，分别覆盖不同落地需求。

### 📦 微调与量化（社区微调 / GGUF / AWQ / 亚比特）

- **[prism-ml/Tern

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*