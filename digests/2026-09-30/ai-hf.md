# Hugging Face 热门模型日报 2026-09-30

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-30 03:29 UTC

---

# 🤗 Hugging Face 热门模型日报 · 2026-09-30

---

## 📌 今日速览

今日 Hub 由 **Qwen3.8-27B** 系列强势主导，原生权重以 16,571 周点赞断层领跑，配套的 GGUF、GSQ-RCO 混合精度、TURBO 微调、OrcaSAQ 子变体等十数个衍生仓库同步霸榜，**Qwen-Image-2.1** 图像系列紧随其后，ComfyUI 工作流与 fp8 / Heretic / Uncensored 等社区魔改版形成完整生态。**DeepSeek-V4.1-Flash** 以 3,897 点赞成为最强原生多模态新势力；**Lightricks LTX-2.5** 以 158 万周下载蝉联"实用之王"。同时，**2-bit Ternary、GSQ-RCO** 等新型极低比特量化开始大规模落地，社区正在把"百亿参数跑消费级显卡"做成常态。

---

## 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话点评 |
|---|---|---|---|---|
| [XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B) | XingChen-AGI | 1,808 | 46,557 | 29B 体量、A4B 激活的稀疏 MoE 对话模型，主打中文场景的轻量化部署 |
| [XiaomiMiMo/MiMo-V2.6-Pro-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL) | XiaomiMiMo | 602 | 78,135 | 小米 MiMo 系列 Pro-RL 版本，强调强化学习后训练带来的硬性能力 |
| [Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1) | Altworld | 773 | 7,880 | 基于 Qwen3.5 架构的文学风格指令微调，主打长文本写作 |
| [orcarouter/OrcaSAQ-2-27B](https://huggingface.co/orcarouter/OrcaSAQ-2-27B) | orcarouter | 212 | 2,143 | Qwen3.5 底座 + vLLM 推理优化配置，定位"结构化问答"场景 |

> 注：[DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) 与 [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) 因原生支持图文，统一归入"多模态"分类。

---

## 🎨 多模态与生成（图像 / 视频 / 音频 / 文档理解）

| 模型 | 作者 | 点赞 | 下载 | 一句话点评 |
|---|---|---|---|---|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | **16,571** | 7,020,239 | 今日榜单冠军，多语言榜第 27B 级多模态基座，7M+ 周下载量 |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 2,661 | 64,362 | 官方原版文生图底座，diffusers + safetensors，社区二创源头 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 5,575 | 1,589,098 | 图生/文生/视频生视频三合一 diffusion，单文件部署本周最实用视频模型 |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 3,897 | 690,388 | DeepSeek-V4 系列的 Flash 多模态分支，主打低延迟多模态对话 |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 1,948 | 11,836 | 紫东太初 5.0-9B，主打空间推理与 VLM 任务 |
| [XingChen-AGI/TeleOCR](https://huggingface.co/XingChen-AGI/TeleOCR) | XingChen-AGI | 878 | 30,354 | 基于 Qwen2.5-VL 的电信/票据场景 OCR 专用模型 |
| [Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1) | Comfy-Org | 854 | 4,699,089 | ComfyUI 官方打包的单文件版本，469 万周下载的"装机必备" |
| [inclusionAI/Ming-Image-0.1-Design](https://huggingface.co/inclusionAI/Ming-Image-0.1-Design) | inclusionAI | 347 | 0 | 首个 Ming-Image 设计分支，专注平面/海报生成 |
| [XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B) | XiaomiMiMo | 572 | 11,131 | MiMo 系列从 Qwen-9B 蒸馏的多模态小模型 |
| [apple/LensVLM-9B](https://huggingface.co/apple/LensVLM-9B) | apple | 266 | 1,956 | Apple 出品的 9B Vision-Language 模型，走 Qwen3.5 兼容路线 |
| [nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization) | nvidia | 520 | 30,931 | NeMo 系第三代说话人分离模型，可输出音频帧级分类 |
| [Edge0/Audio8-ASR-Infinite](https://huggingface.co/Edge0/Audio8-ASR-Infinite) | Edge0 | 2,449 | 23,674 | 支持流式"无限时长"语音识别，社区对长音频转写的强需求信号 |

---

## 🔧 专用模型（代码 / 检索 / 决策 / 抽取）

| 模型 | 作者 | 点赞 | 下载 | 一句话点评 |
|---|---|---|---|---|
| [Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B) | Contrastive-LM | 531 | 1,910 | 用对比学习训练的 8B Verifier / Reranker，给 RAG 流水线当打分器 |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 4,526 | 0 | 标榜"System-One 校准决策"的文本分类模型，今日点赞王中王 |
| [fastino/GLiNER2.5-Decide](https://huggingface.co/fastino/GLiNER2.5-Decide) | fastino | 241 | 29,199 | GLiNER2.5 升级版，把 NER 与意图/文本分类统一成"抽取式决策"框架 |
| [SupersonicLabs/Julia-1](https://huggingface.co/SupersonicLabs/Julia-1) | SupersonicLabs | 295 | 1,725 | 多语言"决策模型"分类器，定位业务路由与意图分发 |
| [akhilaaa3/Jev-Omni](https://huggingface.co/akhilaaa3/Jev-Omni) | akhilaaa3 | 311 | 923 | 基于 Gemma4-Unified 的全能分类/多任务小模型 |
| [netease-youdao/Confucius4-R2T2](https://huggingface.co/netease-youdao/Confucius4-R2T2) | netease-youdao | 469 | 10,482 | 网易有道 Confucius4 第二代 R2T2 ASR，教育/字幕场景专攻 |

---

## 📦 微调与量化（GGUF / LoRA / 社区魔改）

| 模型 | 作者 | 点赞 | 下载 | 一句话点评 |
|---|---|---|---|---|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,733 | 6,425,606 | Qwen3.8-27B 全比特 GGUF，642 万下载，本周量化榜单头牌 |
| [unsloth/Qwen-Image-2.1-GGUF](https://huggingface.co/unsloth/Qwen-Image-2.1-GGUF) | unsloth | 300 | 251,937 | unsloth 出品的图像模型量化版，ComfyUI 友好 |
| [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 2,449 | 1,152,523 | Qwen-Image 的去安全过滤 GGUF，115 万下载是社区强需求 |
| [Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo) | Viggle | 426 | 190,649 | Viggle 的 turbo LoRA，专注角色动画一致性到极限 |
| [prism-ml/Ternary-Bonsai-

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*