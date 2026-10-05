# Hugging Face 热门模型日报 2026-10-05

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-05 03:31 UTC

---

# Hugging Face 热门模型日报
**日期：2026-10-05**

---

## 📌 今日速览

今日 Hugging Face 趋势榜呈现明显的**"Qwen 生态主导"**特征：通义千问系列的 Qwen3.8-27B（16,940 赞）、Qwen3.8-Flash-Next（5,900 赞）、Qwen-Image-2.1（2,952 赞）三箭齐发，霸占前三梯队。多模态生成继续高歌猛进，Lightricks/LTX-2.5（视频生成）与 Cloudflare/clef（图文理解）成为各自赛道的焦点。**量化社区异常活跃**，ISTA-DASLab、prism-ml、DavidAU 等团队围绕 Qwen3.8 推出大量 GGUF/2-bit 变体，凸显消费级显存运行百亿参数模型的强烈需求。同时，多个**专精小模型**（决策分类、重排序、意图抽取）正在挑战"越大越好"的叙事。

---

## 🧠 语言模型（LLM / 对话 / 指令微调）

- **[Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1)**
  作者：Aleph-Alpha | 👍 409 | ⬇️ 1,135
  欧洲系 MoE 推理模型，主打高效率推理；点赞量适中但作为欧洲厂商在大模型赛道的代表值得追踪。

- **[Venastine-Research/Xing4.0-29B-A4B-GGUF](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF)**
  作者：Venastine-Research | 👍 295 | ⬇️ 14,361
  29B 总参 / 4B 激活的 MoE 模型，社区对 Xing 系列持续迭代。

- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)**
  作者：deepseek-ai | 👍 4,097 | ⬇️ 798,422
  DeepSeek V4.1 的轻量版（Flash），主打高吞吐多模态，点赞/下载双高，是榜单上最强的"非 Qwen"主力。

- **[orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF)**
  作者：orcarouter | 👍 365 | ⬇️ 14,195
  面向网络安全场景的 Qwen3.8 衍生品，反映垂直领域 uncensored 模型的稳定需求。

- **[Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw](https://huggingface.co/Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw)**
  作者：Infatoshi | 👍 215 | ⬇️ 946
  智谱 GLM-5.3 的 ExL3 极低比特（3.0bpw）量化版本，展现 EXL3 量化生态的成熟。

---

## 🎨 多模态与生成（图像 / 视频 / 音频 / 文本到X）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** ⭐
  作者：Qwen | 👍 16,940 | ⬇️ 6,821,761
  今日榜首，通义千问多模态主力 27B 模型；基于 qwen3_5 架构，覆盖图文对话，下载量断层第一。

- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)**
  作者：Qwen | 👍 5,900 | ⬇️ 1,480,842
  Flash 系列下一代，主打极致性价比的多模态对话模型，社区关注度极高。

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**
  作者：Lightricks | 👍 6,322 | ⬇️ 1,626,951
  视频生成领域本周最强新发布，支持文生视频、图生视频、视频风格化等多任务一体化。

- **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)**
  作者：Qwen | 👍 2,952 | ⬇️ 90,003
  通义千问原生图像生成/编辑模型，是社区图像生成 LoRA 衍生品（如 AnyAngle、viggle-turbo、Best-Face-Swap）的基底。

- **[Cloudflare/clef](https://huggingface.co/Cloudflare/clef)**
  作者：Cloudflare | 👍 1,230 | ⬇️ 4,214
  Cloudflare 推出的图文理解模型，基于 Qwen3.5，标志着 CDN 厂商正式进入基础模型赛道。

- **[Cloudflare/clef-flash](https://huggingface.co/Cloudflare/clef-flash)**
  作者：Cloudflare | 👍 435 | ⬇️ 6,372
  clef 的轻量化版本，下载/点赞比更优，适合边缘部署。

- **[TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B)**
  作者：TaichuAI | 👍 2,860 | ⬇️ 12,638
  智谱旗下 ZD 系列的 5.0 版本，9B 规模主打**空间推理**的多模态模型，国内厂商追赶势头明显。

- **[PSRben/VisionHOPE](https://huggingface.co/PSRben/VisionHOPE)**
  作者：PSRben | 👍 403 | ⬇️ 1,516
  图像分类新视角（Vision HOPE 架构），附 arXiv 论文 2609.33325，体现学术界对视觉骨干的持续探索。

- **[Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo)**
  作者：Viggle | 👍 588 | ⬇️ 272,896
  基于 Qwen-Image-2.1 的 turbo 蒸馏版，主打快速生成；社区下载量极高。

- **[nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization)**
  作者：NVIDIA | 👍 674 | ⬇️ 53,014
  NVIDIA 第三代说话人 diarization 模型，语音处理领域的标杆更新。

- **[FermionResearch/Phonon-2](https://huggingface.co/FermionResearch/Phonon-2)**
  作者：FermionResearch | 👍 202 | ⬇️ 2,635
  基于 Parakeet TDT 的 Apple Silicon MLX 优化 ASR 模型，针对 Mac 用户。

- **[Alissonerdx/BFS-Best-Face-Swap](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap)**
  作者：Alissonerdx | 👍 1,185 | ⬇️ 203,086
  基于 Qwen-Image-2.1 的 LoRA 换脸模型，社区下载量超过 20 万，娱乐向需求旺盛。

- **[akatz-ai/MiniMax-H3-Character-Swap-LoRA](https://huggingface.co/akatz-ai/MiniMax-H3-Character-Swap-LoRA)**
  作者：akatz-ai | 👍 292 | ⬇️ 15,800
  针对 MiniMax-H3 的角色替换 LoRA，视频级编辑。

- **[pablodawson/MiniMax-H3-360-Orbit-LoRA](https://huggingface.co/pablodawson/MiniMax-H3-360-Orbit-LoRA)**
  作者：pablodawson | 👍 187 | ⬇️ 5,742
  实现首末帧 360 度环绕镜头生成的 LoRA，专注 FLF2V 场景。

- **[lilylilith/QI_2.1_AnyAngle](https://huggingface.co/lilylilith/QI_2.1_AnyAngle)**
  作者：lilylilith | 👍 127 | ⬇️ 0
  基于 Qwen-Image-2.1 的任意角度生成 LoRA，新发布且下载量为 0，处于早期验证期。

---

## 🔧 专用模型（代码 / 排序 / 抽取 / 决策）

- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)**
  作者：convaiinnovations | 👍 5,166 | ⬇️ 3,752
  "系统一"风格的**校准决策**分类模型，点赞量极高（5,166）但下载较少，体现"专精小模型也能引爆"的趋势。

- **[Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B)**
  作者：Contrastive-LM | 👍 717 | ⬇️ 3,445
  对比学习的**重排序 / 验证器**模型，可与 LLM 组合实现 self-verification 推理增强。

- **[fastino/GLiNER2.5-Decide](https://huggingface.co/fastino/GLiNER2.5-Decide)**
  作者：fastino | 👍 366 | ⬇️ 53,625
  GLiNER 系列最新版本，专注 zero-shot 抽取与意图分类，下载/点赞比表现亮眼。

- **[SupersonicLabs/Julia-1](https://huggingface.co/SupersonicLabs/Julia-1)**
  作者：SupersonicLabs | 👍 416 | ⬇️ 3,657
  多语言"决策模型"，对标 laya 等专用分类器。

---

## 📦 微调与量化（社区微调 / GGUF / 极低比特）

- **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)**
  作者：ISTA-DASLab | 👍 559 | ⬇️ 1,886,975
  Flash-Next 的 GSQ + RCO 混合精度量化版，下载近 190 万，消费级硬件福音。

- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)**
  作者：ISTA-DASLab | 👍 1,960 | ⬇️ 1,636,747
  27B 主力的 GSQ 量化版本，点赞近 2000，是量化榜单的明星。

- **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF)**
  作者：ISTA-DASLab | 👍 260 | ⬇️ 351,230
  上述的代码特化版本，主打编程任务。

- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)**
  作者：prism-ml | 👍 2,418 | ⬇️ 4,045,810
  **2-bit 三元量化**的 27B 模型，下载量突破 400 万，是"极限压缩"的代表。

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)**
  作者：DavidAU | 👍 1,425 | ⬇️ 2,164,213
  DavidAU 标志性的"超长命名合并"作品，融合 uncensored + heretic + MTP 多重微调，下载超 200 万。

---

## 🌐 生态信号

Qwen 家族在 30 个趋势席位中占据约 **10 席**，覆盖原生模型、图像基底、量化变体与代码特化四个层级，已形成完整生态闭环。**闭源/开放权重分化加剧**：Cloudflare、Aleph-Alpha、NVIDIA 持续以闭源权重发布基础模型，而社区则围绕 Qwen/DeepSeek/GLM 进行大规模二次创作。**量化方向尤为激进**——2-bit（ternary）、3.0bpw（EXL3）、GSQ+RCO 混合精度百花齐放，显示"在 4090/苹果统一内存上跑 27B"已成为现实标准。**LoRA 文化盛行**：Qwen-Image-2.1 与 MiniMax-H3 在一周内分别催生换脸、

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*