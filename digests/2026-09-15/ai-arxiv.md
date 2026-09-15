# ArXiv AI 研究日报 2026-09-15

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-09-15 02:54 UTC

---

# 📬 ArXiv AI 研究日报
**日期：2026-09-15 | 论文总数：50 篇 | 覆盖分类：cs.AI / cs.CL / cs.LG**

---

## 一、今日速览

今日投稿呈现出三个值得关注的信号：**递归自我改进（RSI）正式进入工程化阶段**，Dream-RSI、ModularRSI、RSIAgent 三篇论文同时出现，从环境生成、模块化 harness 到无训练多智能体框架，分别给出三条不同路径；**前沿模型的评估可信度正被系统性审计**，从 Turkish MMLU Pro、SALUTE 国防基准、MTAC-IFBench 到 BBQ 公平性基准，多篇论文指出当前基准存在被"单例通过"、"文档呈现偏差"等问题；**推理效率仍是 Agent 落地最大瓶颈**，AgentKV、MoME、Dynamic Semantic Compression 各自从 KV 缓存淘汰、稀疏记忆查找、潜空间推理切入同一痛点。

---

## 二、重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**1. When the Wrong Key Wins: Understanding and Detecting Hallucinations in LLMs**
🔗 http://arxiv.org/abs/2609.15106v1
作者：Xuhan Tong, Jiawei Zhang
> 提出"潜在键竞争"视角解释幻觉——答案选择由预训练阶段习得的关联之间的竞争决定，而非知识缺失；为幻觉检测提供了新的机制性框架。

**2. Forty Shades of Blue: Quality-Diversity Alignment via Mode-Conditioned Reinforcement Learning**
🔗 http://arxiv.org/abs/2609.14896v1
作者：Jiayi Yuan, Hangoo Kang, James Jihao Liu 等
> 针对对齐训练导致的多样性退化（mode collapse），提出模式条件强化学习，在不牺牲质量前提下保留表达的多元化。

**3. One Example Is Enough to Pass Fairness Benchmarks: Rethinking Fairness Evaluation for Aligned LLMs**
🔗 http://arxiv.org/abs/2609.14860v1
作者：Naihao Deng, Samee Arif, Shuaichen Chang 等
> 揭示 BBQ 等主流公平性基准"过于简单"——单条样本即可通过，呼吁重设公平评估协议。

---

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

**4. Dream-RSI: Recursive Self-Improvement through Evolving Worlds**
🔗 http://arxiv.org/abs/2609.14858v1
作者：Tong Zheng, Xidong Wu, Zheng Zhang 等
> 通过"演化环境"驱动探索，让智能体在变化的世界中递归自我改进，是 RSI 范式的代表性进展。

**5. ModularRSI: Modular and Generalizable Recursive Harness Self-Improvement**
🔗 http://arxiv.org/abs/2609.14857v1
作者：Siwei Wu, Jincheng Ren, Yizhi Li 等
> 提出模块化 harness RSI，避免 RSI 在评测集上过拟合，提升跨任务的可泛化性。

**6. MTAC-IFBench: Benchmarking Instruction-Following in Multi-Turn Agentic Coding**
🔗 http://arxiv.org/abs/2609.14992v1
作者：Bosi Wen, Cunxiang Wang, Jiayi Gui 等
> 首个面向多轮 Agent 编程场景的"指令遵循"基准，关注过程合规性而非仅最终正确性。

**7. EMR: Self-Evolving Medical Multi-Agent System via Experience Mining and Reuse**
🔗 http://arxiv.org/abs/2609.15161v1
作者：Dongsheng Shi, Yue Li, Xin Yi 等
> 临床推理多智能体系统具备"持久临床记忆"，从过往诊疗经验中自我演化，弥补现有方法策略静态的缺陷。

---

### 🔧 方法与框架（新技术、基准测试、效率优化）

**8. AgentKV: Phase-Aware KV Eviction for Agentic LLMs**
🔗 http://arxiv.org/abs/2609.14872v1
作者：Taowen Tony Liu, Jeffrey T. H. Wong, Can Xiao 等
> 针对 Agent 场景 KV 缓存爆炸问题，提出阶段感知淘汰策略；Agent 工作负载通常消耗的 token 比聊天多一个数量级。

**9. DA-DLM: Explicitly Modeling Token Dependencies in Diffusion Language Models**
🔗 http://arxiv.org/abs/2609.15070v1
作者：Pengyu Ji, Zichen Zhang, Xiang Hu 等
> 显式建模扩散语言模型中的 token 间依赖，缓解独立去噪导致的连贯性损失，对标 NAR 多模态问题。

**10. MoME: Mixture-of-Memory Embeddings for Context-Aware Sparse Lookup**
🔗 http://arxiv.org/abs/2609.15126v1
作者：Muchen Li, Leonid Sigal, Renjie Liao
> 以稀疏、上下文相关的记忆嵌入替代 MoE 中的专家网络，提供一种新的条件记忆参数化机制。

**11. Reason What Matters: Retrieval-Grounded Reasoning for Universal Multimodal Embeddings**
🔗 http://arxiv.org/abs/2609.15296v1
作者：Mingzhou Jiang, Peixi Wu, Hang Cheng 等
> 在生成统一多模态嵌入前引入 CoT 推理，让单一模型支持更复杂的多模态检索任务。

---

### 📊 应用（垂直领域、多模态、代码生成）

**12. Reducing the Output-Mode Gap in Speech Language Models via Joint-Output On-Policy Distillation**
🔗 http://arxiv.org/abs/2609.15313v1
作者：Daxin Tan, Dehua Tao, Chengxi Deng 等
> 解决语音 LLM 中自回归生成声学 token 导致的一致性退化，提出联合输出蒸馏的语音-文本对齐新方法。

**13. SALUTE: Benchmarking and Adapting LLMs for the Defense Domain**
🔗 http://arxiv.org/abs/2609.15022v1
作者：Hyeongcheol Park, Sumin In, Suyeon Myeong 等
> 构建国防领域首个综合基准，涵盖军事术语、条令概念、作战流程和动态事件。

**14. SlopShape: Identifying AI-Generated Commercial Web Content**
🔗 http://arxiv.org/abs/2609.15369v1
作者：Jochen Madler
> 跳出逐词检测的脆弱性陷阱，从"文本特征"层面识别商业网页中 AI 生成内容，并尝试反向溯源模型。

---

## 三、研究趋势信号

本日报观察到的三个新兴方向值得关注。其一，递归自我改进（RSI）从单点尝试走向体系化分工——Dream-RSI 关注环境生成、ModularRSI 关注 harness 模块化、RSIAgent 关注无训练多智能体协调，标志着该范式已不再是孤立概念。其二，"评估怀疑主义"正在形成共识：从 Turkish MMLU Pro 的选项膨胀实验、AGENTIC QA 的证据埋藏审计，到 BBQ 的单例通过现象，多篇论文共同指向"基准分数与真实能力脱钩"这一系统性问题。其三，Agent 工作负载下的推理效率研究从通用 KV 压缩转向"阶段感知"的细粒度策略，反映社区对 agentic serving 内存与带宽压力的重视。

---

## 四、值得精读

**📖 1. Dream-RSI**（http://arxiv.org/abs/2609.14858v1）
理由：RSI 是 2026 年自主智能体最关键的前沿问题之一，Dream-RSI 通过"演化世界"驱动探索，为 RSI 提供了一条可扩展的路径，且与同日的 ModularRSI 形成互补阅读。

**📖 2. AgentKV**（http://arxiv.org/abs/2609.14872v1）
理由：直接面向生产级 Agent 部署的 KV 缓存痛点，方法简洁、可立即落地，是论文"实用价值密度"较高的一篇。

**📖 3. When the Wrong Key Wins**（http://arxiv.org/abs/2609.15106v1）
理由：以"潜在键竞争"重新解释 LLM 幻觉，把现象级问题转化为机制级问题，是少见的、可能改变后续幻觉研究范式的工作。

---

*📮 报告生成完毕。如需对某一方向进行深度专题梳理，请告知。*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*