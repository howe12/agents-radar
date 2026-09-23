# Hugging Face 热门模型日报 2026-09-23

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-23 02:50 UTC

---

# 🤗 Hugging Face 热门模型日报
**日期：2026-09-23｜样本：本周点赞 Top 30**

---

## 一、今日速览

本周 Hugging Face 趋势榜呈现 **"Qwen 系全面统治 + 视频生成崛起 + 极限量化竞赛"** 三条主线。**Qwen/Qwen3.8-27B** 以 16,078 点赞与 7M+ 下载成为绝对头部，**Qwen3.8-Flash-Next**（5,608 赞）紧随其后；视频侧 **Lightricks/LTX-2.5**（4,804 赞）与 **MiniMax-H3**（3,766,997 下载）抢尽风头，**DeepSeek-V4.1-Flash**（3,616 赞）继续巩固多模态地位。值得关注的是 **prism-ml/Ternary-Bonsai-2-27B** 把 2-bit 三元量化带入 27B 级别，开源社区在推理效率上的"卷"已经白热化。

---

## 二、热门模型

### 🧠 语言模型（LLM / 对话 / 指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen ｜👍 16,078 ｜⬇️ 7,079,646
  本周当之无愧的"榜霸"，27B 旗舰多模态基座，已形成完整下游生态。

- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** — Qwen ｜👍 5,608 ｜⬇️ 787,525
  轻量高速分支，定位实时多模态对话，Flash 家族最新版本。

- **[XiaomiMiMo/MiMo-V2.6-Pro-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL)** — XiaomiMiMo ｜👍 388 ｜⬇️ 985
  小米 RL 强化版 Pro，发布即获得 RL 社区关注。

- **[XiaomiMiMo/MiMo-V2.6-Flash-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL)** — XiaomiMiMo ｜👍 387 ｜⬇️ 2,641
  与 Pro 配套的 Flash 版本，主打低延迟推理。

- **[XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B)** — XiaomiMiMo ｜👍 346 ｜⬇️ 804
  Qwen 教师蒸馏 9B 学生，把小米路线图拓展到轻量级。

- **[XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B)** — XingChen-AGI ｜👍 1,388 ｜⬇️ 30,627
  29B-A4B 的 MoE 架构，主打稀疏激活下的高质量对话。

- **[Yandex/AliceAI-Foundation-80B-A3B-Base](https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base)** — yandex ｜👍 277 ｜⬇️ 1,516
  俄罗斯阵营代表，80B 总参 / 3B 激活的 MoE 基础模型。

- **[Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1)** — Altworld ｜👍 502 ｜⬇️ 2,745
  基于 Qwen3.8 的文学风格微调，瞄准长篇创意写作。

- **[TokenRhythm/NeoHorse-1-9B](https://huggingface.co/TokenRhythm/NeoHorse-1-9B)** — TokenRhythm ｜👍 1,009 ｜⬇️ 12,574
  小尺寸 Agentic 微调，9B 也能承担工具调用型任务。

- **[ukisai/Swift-Qwen3.8-27b](https://huggingface.co/ukisai/Swift-Qwen3.8-27b)** — ukisai ｜👍 552 ｜⬇️ 17,256
  "高效思考"变体，主打推理时 token 节省。

- **[openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B)** — openbmb ｜👍 1,666 ｜⬇️ 508,950
  面壁 2B 系列第五代，端侧友好，半百万下载说明落地度高。

- **[Cactus-Compute/needle3](https://huggingface.co/Cactus-Compute/needle3)** — Cactus-Compute ｜👍 188 ｜⬇️ 54,528
  专为 on-device 工具调用 / Function-calling 设计的小模型。

---

### 🎨 多模态与生成（图像 / 视频 / 音频）

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks ｜👍 4,804 ｜⬇️ 1,630,125
  图生视频旗舰，支持 text-to-video / video-to-video，多榜单 Top 1。

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — MiniMaxAI ｜👍 5,604 ｜⬇️ 3,766,997
  图文生视频（image-text-to-video），下载量逼近 380 万，社区跑分极高。

- **[DeepSeek-V4.1

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*