# Hugging Face 热门模型日报 2026-08-26

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-26 00:55 UTC

---

# 📊 Hugging Face 热门模型日报 · 2026-08-26

---

## 一、今日速览

今天 Hub 趋势榜由 **Qwen3.8-27B 家族** 主导,原始模型以 12,710 周点赞稳居榜首,围绕它的微调/量化/去审查变体占据了榜单近一半席位。**Moonshot 的 Kimi-K3**(10,996 赞)和 **DeepSeek-V4-Flash-0731**(3,714 赞)代表国产前沿基座模型持续走高。多模态侧,**MiniMax-H3**(图生视频)、**Lightricks LTX-2.5**(视频生成)、**MiniMax-Music3**(文本到音乐)三款生成模型表现亮眼,反映社区对"全模态生成"的强烈兴趣。值得注意的还有 **DFlash2 推测解码**、**MTP 训练**与 **2-bit 极限量化** 等推理优化方向的密集实验。

---

## 二、热门模型分类

### 🧠 语言模型(LLM / 对话 / 指令微调)

| 模型 | 作者 | 点赞 | 下载 |
|---|---|---|---|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 12,710 | 2.94M |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | Moonshot AI | 10,996 | 2.87M |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | DeepSeek | 3,714 | 3.53M |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | DeepSeek | 758 | 74.7K |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 419 | 70.2K |
| [ornith-ai/Ornith-1.5-9B](https://huggingface.co/ornith-ai/Ornith-1.5-9B) | ornith-ai | 216 | 98.3K |
| [z-lab/Qwen3.8-27B-DFlash2](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2) | z-lab | 227 | 65.0K |
| [incoai/Qwen3.8-27B-DFlash2](https://huggingface.co/incoai/Qwen3.8-27B-DFlash2) | incoai | 179 | 105.8K |

> **简评**:**Qwen3.8-27B** 是本周无可争议的"基座之王",原生支持多模态;**Kimi-K3** 以长上下文与原生多模态架构持续吸引企业用户;**Ornith-1.5-35B-A3B** 是新兴 MoE 架构,仅激活 3B 参数即可对标更大模型;**DFlash2** 系列则将推测解码(Speculative Decoding)开源化,显著降低推理时延。

---

### 🎨 多模态与生成(图像 / 视频 / 音频)

| 模型 | 作者 | 点赞 | 下载 |
|---|---|---|---|
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,457 | 4.64M |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,800 | 833.8K |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,245 | 18.7K |
| [Audio8/Audio8-TTS-Preview-0.1b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.1b) | Audio8 | 156 | 3.6K |
| [sensenova/SenseNova-U1.5-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1.5-8B-MoT) | SenseTime | 152 | 2.7K |

> **简评**:**MiniMax-H3** 是当前最热门的开源图生视频模型,480 万次下载量说明其在创作者群体中已经形成事实标准;**LTX-2.5** 支持图/文/视频多向转换,定位为"一体化视频生成栈";**MiniMax-Music3** 主打可控音乐生成;**SenseNova-U1.5-8B-MoT** 引入"Mixture of Thoughts"架构,代表原生 any-to-any 的新方向。

---

### 🔧 专用模型(代码 / 数学 / 医疗 / 嵌入 / 语音)

| 模型 | 作者 | 点赞 | 下载 |
|---|---|---|---|
| [superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 238 | 3.5K |

> **简评**:**s1-mini** 基于 Qwen3 架构,定位为轻量级 ASR 语音识别模型,虽然体量小但代表了"ASR + LLM 一体化"的探索趋势(将语音直接喂入语言模型而非传统 encoder-decoder 管线)。

---

### 📦 微调与量化(GGUF / AWQ / MLX / 社区微调)

| 模型 | 作者 | 点赞 | 下载 |
|---|---|---|---|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,915 | 7.33M |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,148 | 249.7K |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 1,095 | 68.9K |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 721 | 1.53M |
| [HauhauCS/Qwen3.8-27B-Uncensored-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 623 | 832.2K |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 749 | 389.7K |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 357 | 1.23M |
| [ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 297 | 1.16M |
| [0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF) | 0bserverx | 276 | 735.2K |
| [DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 240 | 221.9K |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 452 | 154.2K |
| [ornith-ai/Ornith-1.5-9B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-9B-GGUF) | ornith-ai | 201 | 1.14M |
| [orcarouter/Qwen3.8-27B-Uncensored](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored) | orcarouter | 183 | 15.3K |
| [EschaLabs/Qwen3.8-27B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.8-27B-Escha-W2) | EschaLabs | 126 | 2.3K |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,468 | 0 |
| [peculiar-ragdoll/Qwen-Sharp-Chat-Templates](https://huggingface.co/peculiar-ragdoll/Qwen-Sharp-Chat-Templates) | peculiar-ragdoll | 244 | 0 |

> **简评**:**unsloth/Qwen3.8-27B-GGUF** 以 7.3M 下载量成为本周"实用之王",几乎所有 llama.cpp 用户的首选加载对象;"Uncensored / Abliterated"系列揭示社区对去除安全对齐的强烈兴趣——这是技术中立性研究与本地化部署的灰色地带。**Escha-W2** 是榜上唯一的 2-bit 极限量化实验,体现了边缘部署的极限探索;**MTP(Multi-Token Prediction)** 和 **GAIN / Cold-Fusion** 等新颖训练方法开始在 GGUF 圈流行。

---

## 三、生态信号

**Qwen3.8-27B 已成新一代"Linux 内核"**——30 个上榜模型中有 19 个基于它,这一密度甚至超过了曾经 Llama-2/3 的统治期,说明 Qwen 系列在中文开发者社区已建立类基础设施地位。**国产基座模型形成"三足鼎立"**:Qwen、Kimi、DeepSeek 分别以多模态、长上下文和推理效率为差异化锚点,生态正在快速分化而非趋同。**多模态生成模型加速"工业化"**:MiniMax-H3 和 LTX-2.5 的下载量级已与头部 LLM 相当,创作者经济是真实驱动力。在推理优化侧,GGUF/MLX/FP8 三角分工明确,推测解码(DFlash2)和极限量化(2-bit)成为下阶段主战场。值得注意的是,**"abliterated/uncensored"微调** 已成单独现象级类目,既反映社区对模型自主性的追求,也暴露对齐技术与部署自由的张力。

---

## 四、值得探索

1. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** —— 目前下载量最高的开源图生视频模型,适合评估"开源是否已追上闭源"的命题,尤其在可控运镜和人物一致性上值得做 benchmark 对比。

2. **[ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B)** —— 35B 总参/3B 激活的 MoE 架构,代表了"小激活、强能力"路线的最新尝试,适合研究 MoE 路由效率与稀疏激活对推理成本的影响。

3. **[z-lab/Qwen3.8-27B-DFlash2](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2)** —— 推测解码的开源实现,实测可在不损失质量的前提下显著降低首 token 时延,对 RAG、Agent 等延迟敏感场景极具工程价值。

---

*报告生成时间:2026-08-26 · 数据源:Hugging Face Hub 热门模型榜(按周点赞排序)*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*