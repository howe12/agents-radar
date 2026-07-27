# Hugging Face 热门模型日报 2026-07-27

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-27 02:22 UTC

---

# 📊 Hugging Face 热门模型日报

**日期：2026-07-27**

---

## 🌟 今日速览

今日榜单呈现"中国军团 + 量化社区"双主线：**GLM-5.2** 以 4478 周点赞一骑绝尘，代表 MoE + 深度稀疏注意力路线的最新力作；**baidu/Unlimited-OCR** 凭借近 260 万次下载在 OCR 垂直赛道保持统治力。Qwen 3.6 生态持续爆发，多个社区微调/去审查版本同时霸榜。量化侧，**prism-ml** 的 1-bit / 2-bit Bonsai 系列与 NVIDIA NVFP4 路径并行发展，低比特推理成为核心议题。机器人与代码两条垂类赛道（MiniCPM-RobotManip、Kimi-K2.7-Code）首次进入前 30，反映任务专用模型正加速涌现。

---

## 🧠 语言模型（LLM、对话、指令微调）

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
  作者：zai-org ｜ 点赞 4,478 ｜ 下载 827,191
  智谱 GLM-5.2，本周绝对焦点：基于 `glm_moe_dsa` 架构（MoE + 深度稀疏注意力）的下一代对话模型，上线即夺榜。

- **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)**
  作者：poolside ｜ 点赞 702 ｜ 下载 56,445
  法国 AI 独角兽 poolside 的开源文本生成模型，已成为本周第二大独立 LLM 关注点。

- **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)**
  作者：upstage ｜ 点赞 596 ｜ 下载 3,305
  Solar Open2 系列 250B 版本，韩国 upstage 的开源旗舰，主打完全可商用条款。

- **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)**
  作者：Nanbeige ｜ 点赞 449 ｜ 下载 14,049
  南极星（Nanbeige）4.2 版本 3B 小尺寸模型，在小模型赛道延续高口碑。

- **[Motif-Technologies/Motif-3-Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta)**
  作者：Motif-Technologies ｜ 点赞 193 ｜ 下载 2,400
  新晋厂商 Motif 的第三代模型，主打特征提取与对话通用能力。

- **[fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b)**
  作者：fdtn-ai ｜ 点赞 187 ｜ 下载 5,978
  基于 `granitemoehybrid` 架构的 1B 小模型，定位安全/合规场景。

---

## 🎨 多模态与生成

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
  作者：baidu ｜ 点赞 3,210 ｜ 下载 2,593,460
  百度 "无限 OCR"，本周下载量冠军，多语言文档理解场景下的标杆模型，社区"特征提取"工作流首选。

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  作者：HauhauCS ｜ 点赞 3,112 ｜ 下载 1,927,138
  基于 Qwen3.6 35B-A3B MoE 的去审查 GGUF 多模态变体，下载近 200 万，社区角色扮演赛道现象级作品。

- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)**
  作者：thinkingmachines ｜ 点赞 1,579 ｜ 下载 34,511
  新锐厂商 thinkingmachines 的多模态对话模型（`inkling_mm_model`），单周点赞接近 1600。

- **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)**
  作者：DavidAU ｜ 点赞 639 ｜ 下载 552,026
  DavidAU 长命名风格的多模型融合 GGUF 版本，下载量 55 万+，是 Qwen3.6 创意/叙事微调的代表。

- **[microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow)**
  作者：microsoft ｜ 点赞 335 ｜ 下载 1,375
  微软推出的文生图 + 图像编辑统一 Flow Matching 模型，对标 SD / FLUX 系列。

- **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)**
  作者：ATH-MaaS ｜ 点赞 310 ｜ 下载 35,562
  基于 Qwen3.5 的多模态 OCR 模型，OCR 赛道第二极。

- **[owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2)**
  作者：owensong ｜ 点赞 180 ｜ 下载 298
  本地化、CPU 可跑的边缘侧 TTS 模型，主打离线语音合成。

- **[nvidia/Cosmos3-Edge](https://huggingface.co/nvidia/Cosmos3-Edge)**
  作者：nvidia ｜ 点赞 125 ｜ 下载 32,700
  NVIDIA Cosmos 世界模型的边缘端版本，面向具身智能 / 仿真场景。

- **[baseten/GLM-5.2-Vision-NVFP4](https://huggingface.co/baseten/GLM-5.2-Vision-NVFP4)**
  作者：baseten ｜ 点赞 113 ｜ 下载 2,033
  Baseten 部署的 GLM-5.2 视觉版 NVFP4 量化权重，sglang 推理优化。

- **[microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B)**
  作者：microsoft ｜ 点赞 110 ｜ 下载 1,225
  微软 27B 视觉-语言-动作模型，专攻"计算机使用"agent 任务。

- **[microsoft/Mage-Flow-Edit-Turbo](https://huggingface.co/microsoft/Mage-Flow-Edit-Turbo)**
  作者：microsoft ｜ 点赞 89 ｜ 下载 946
  微软 Mage-Flow 的指令式图像编辑 turbo 版本，主打低延迟编辑。

---

## 🔧 专用模型（代码、机器人、垂直任务）

- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
  作者：moonshotai ｜ 点赞 1,298 ｜ 下载 730,129
  月之暗面 K2.7 代码专项版，基于 `kimi_k25` 架构，是当前热门的中文代码模型之一。

- **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)**
  作者：Kwaipilot ｜ 点赞 198 ｜ 下载 3,764
  快手 Kwaipilot 的代码模型 V2.5 开发版，基于 Qwen3.5 MoE 改造，专注软件开发 agent。

- **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)**
  作者：openbmb ｜ 点赞 177 ｜ 下载 643
  面壁智能的"视觉-语言-动作"模型，面向机器人操作任务（VLA）。

- **[openbmb/MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack)**
  作者：openbmb ｜ 点赞 130 ｜ 下载 398
  同系列机器人视觉跟踪模型，搭配 Manip 模块可用于机器人感知-决策闭环。

---

## 📦 微调与量化

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
  作者：empero-ai ｜ 点赞 2,480 ｜ 下载 1,410,054
  基于 Qwen3.5 的 9B GGUF 量化模型，主打 1M 超长上下文与"Claude Mythos"风格推理，社区热度第二高。

- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
  作者：prism-ml ｜ 点赞 1,051 ｜ 下载 631,970
  27B 模型的三值（2-bit）量化 GGUF，验证了极低比特下大模型的可用

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*