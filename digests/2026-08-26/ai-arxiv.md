# ArXiv AI 研究日报 2026-08-26

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-08-26 00:55 UTC

---

# 📑 ArXiv AI 研究日报 · 2026-08-26

> 共收录 50 篇当日投稿，覆盖 cs.AI、cs.CL、cs.LG 三大方向。本文精选其中最具影响力的研究进展，按主题分类解读。

---

## 一、今日速览

今日 ArXiv 投稿呈现出鲜明的「**长期任务 + 安全可信 + 自我改进**」三重主线。在长期任务维度，ReWorld 通过结构解耦控制与记忆突破了世界模型的"长程诅咒"，SWE Refactor Bench 和 SRPO 则分别从代码迁移与推理训练两端推进长视野智能体能力；在安全可信维度，针对推理诱导错位、记忆注入攻击、价值剖面稳定性等议题涌现出多篇代表性论文；自我改进范式也持续走热，Prime Agent、SkillAlchemy、MediSkill-Evo 分别在 LLM Harness、技能合成与临床决策领域给出可执行路线。架构侧，ProxyFormer、ConvergeFlow 等为超长上下文与连续扩散语言模型的可扩展性提供了新范式。

---

## 二、重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**1. How to Train a Critic Stably and Efficiently**
🔗 [2608.23566](http://arxiv.org/abs/2608.23566v1)
👥 Penghui Qi, Xiangxin Zhou, Wee Sun Lee（NUS）
📌 针对 GRPO 类无 critic 群组方法的局限，提出稳定的 token 级 critic 训练配方，使基于 critic 的优势估计可从单条响应中获取，有望替代昂贵的多采样基线。

**2. ConvergeFlow: Language Flow with Provable Convergence to Token Embeddings**
🔗 [2608.23551](http://arxiv.org/abs/2608.23551v1)
👥 Na Li, Yuchen Jiao, Changxiao Cai 等
📌 首次证明连续流/扩散语言模型的轨迹可在数学上保证收敛至合法 token 嵌入空间，从根本上摆脱了对交叉熵解码器的依赖。

**3. ProxyFormer: A Dual-Stream Proxy Architecture for Ultra-Long Context and High-Resolution Generation**
🔗 [2608.23463](http://arxiv.org/abs/2608.23463v1)
👥 Zhongpan Tang
📌 通过代理 token 解耦主序列与压缩上下文，将注意力复杂度降至亚二次方，为百万级 token 上下文与高分辨率生成提供了通用双流架构。

**4. Mitigating Reasoning-Induced Misalignment via Safety-Direction Penalty**
🔗 [2608.23497](http://arxiv.org/abs/2608.23497v1)
👥 Yipeng Zhao, Qishun Yang, Shenzhe Zhu 等
📌 提出"安全方向惩罚"机制，跨架构跨规模抑制推理微调诱发的有害行为，是数学/代码/CoT 安全训练的重要补丁。

**5. STONIC: A Layered Measurement Contract for LLM Value Profiling**
🔗 [2608.23411](http://arxiv.org/abs/2608.23411v1)
👥 Andrei Chetvergov, Stepan Ukolov, Timofei Sivoraksha 等
📌 通过 5,144 个情境测试三种 LLM 价值测量范式是否描述同一稳定偏好，揭示现有价值画像方法的可信度危机。

---

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

**6. ReWorld: An Interactive World Model with Long-Horizon Memory**
🔗 [2608.23565](http://arxiv.org/abs/2608.23565v1)
👥 Zhifei Chen, Luozhou Wang, Guibao Shen 等
📌 将控制与记忆在训练时分离、推理时显式约束上限，以混合 per-head 注意力同时实现实时流式响应与无界长期记忆。

**7. Prime Agent: A Self-Improving RLM Harness**
🔗 [2608.23552](http://arxiv.org/abs/2608.23552v1)
👥 Seth Karten, Alex L. Zhang, Kevin Thomas 等
📌 基于持久 IPython REPL 的开源 RLM 外壳，将 LLM 从静态序列处理器升级为可外部组合、长期递归的工具环境。

**8. SRPO: Self-Reflective Policy Optimization for Long-Horizon Reasoning**
🔗 [2608.23493](http://arxiv.org/abs/2608.23493v1)
👥 Jialong Liu, Yuling Shi, Ning Yang 等
📌 将"自我反思"作为信用分配机制，将稀疏结果反馈转化为可操作指导，弥补了长视野后训练中的探索盲区。

**9. SWE Refactor Bench**
🔗 [2608.23564](http://arxiv.org/abs/2608.23564v1)
👥 Deyao Hong, Yizhe Chi, Wenyi Li 等
📌 首个面向"整库、长视野、技术栈迁移"的编码智能体基准，填补现有 Bug-fix 评测无法衡量迁移能力的空白。

**10. The Interaction Tax: When Communication Erases Diversity in Multi-Agent Teams**
🔗 [2608.23541](http://arxiv.org/abs/2608.23541v1)
👥 Summer Eunhyung Ann, Haokun Liu, Chenhao Tan
📌 系统量化 LLM 多智能体在等预算条件下"交互税"对多样性的侵蚀，为辩论-合成派系提供冷静的反证依据。

**11. InjecMEM: Memory Injection Attack on LLM Agent Memory Systems**
🔗 [2608.23471](http://arxiv.org/abs/2608.23471v1)
👥 Hanling Tian, Gengyu Zhang, Zeyang Sha 等
📌 提出针对 LLM 智能体持久记忆系统的新型注入攻击范式，警示作为默认子系统的记忆所引入的新攻击面。

**12. MediSkill-Evo: Process-Constrained Self-Evolution for Evidence-Grounded Clinical Interaction**
🔗 [2608.23397](http://arxiv.org/abs/2608.23397v1)
👥 Ruoyu Wu, Shenfu Xie, Yinqian Sun 等
📌 提出在部分可观察下以证据与流程约束驱动自演化的临床智能体，强调"过程合规"而非单一最终诊断的评估范式。

---

### 🔧 方法与框架（新技术、基准测试、效率优化）

**13. StrategyBench: Evaluating Explicit Strategy Induction in Large Language Models**
🔗 [2608.23475](http://arxiv.org/abs/2608.23475v1)
👥 Jinghan Tan, Yuanzheng Wang, Lu Chen 等
📌 评估少样本 ICL 中"显式抽取任务策略"的稳健性，专门针对数据稀缺与任务演化场景。

**14. EarthVerse: Benchmarking Scientific Agents Across Dynamic Earth Systems and Natural Hazards**
🔗 [2608.23525](http://arxiv.org/abs/2608.23525v1)
👥 Zhiqing Cui, Xinxiang Yin, Yihong Tang 等
📌 首个面向地球系统多源多模态观测与自然灾害重建的"科学智能体"基准，强调不完整证据下的机理推理。

**15. ChebBooster: Training-Free Acceleration of Diffusion Transformers via Chebyshev-Inspired Extrapolation**
🔗 [2608.23429](http://arxiv.org/abs/2608.23429v1)
👥 Chengjie Lu, Tianchi Deng, Zhengqi He 等
📌 基于 Chebyshev 启发的免训练外推法改善 DiT 缓存复用，规避朴素 cache 的误差累积。

**16. Provably adaptive sampling with uniform and remasking discrete diffusion models**
🔗 [2608.23554](http://arxiv.org/abs/2608.23554v1)
👥 Daniil Dmitriev, Zhihan Huang, Yuting Wei
📌 为均匀与重掩码两类前向过程给出离散扩散采样的自适应复杂度下界与匹配算法。

---

### 📊 应用（垂直领域、多模态、代码生成）

**17. Act with Intent: Distilling Behavior Intent for Vision-Language-Action Models**
🔗 [2608.23478](http://arxiv.org/abs/2608.23478v1)
👥 Sangoh Lee, Sangwoo Mo, Wook-Shin Han
📌 将行为克隆从"动作监督"升级为"意图蒸馏"，让 VLA 学会指令下的局部目标而不仅是电机指令。

**18. Towards Comprehensive Basketball Understanding**
🔗 [2608.23435](http://arxiv.org/abs/2608.23435v1)
👥 Yirong Hu, Jiayuan Rao, Yu Zhang 等
📌 联合识别、定位、识别球员并关联结构化比赛知识，是首批"综合篮球理解"的多能力基准。

**19. Physics-Constrained Deep Learning Model for Contactless Blood Pressure Monitoring from BCG**
🔗 [2608.23562](http://arxiv.org/abs/2608.23562v1)
👥 Yuanyuan Zhang, Yida Zhang, Jiahui Li 等
📌 将物理约束融入心冲击信号的非接触血压估计，对床体交互漂移与个体血流变异具备鲁棒性。

---

## 三、研究趋势信号

今日投稿集中释放四条信号：**其一，「长视野 + 自演化」智能体范式加速成型**——ReWorld、Prime Agent、SRPO、SkillAlchemy、MediSkill-Evo 分别从世界模型、外壳、训练、技能生成、临床落地切入，构成一条完整的"长期自主"技术线。**其二，推理模型的安全问题从隐性变为显性议题**，出现至少 4 篇围绕推理过程的对齐攻击/价值剖面/记忆注入论文，提示「强化可解释、可审计推理链」将成为下一阶段的关键基础设施。**其三，架构侧回归数学可证明性**——ConvergeFlow 的轨迹收敛性证明、离散扩散自适应采样下界、IRM 的集合增长鲁棒性均属此类，理论派正在与扩展派正面同台。**其四，垂直领域的多模态与基础模型融合加深**，从道路安全审计、篮球理解、临床过程约束到非接触生理监测，呈现出"领域知识 + 基础模型 + 评估基准"的成熟三角。

---

## 四、值得精读

📖 **[How to Train a Critic Stably and Efficiently](http://arxiv.org/abs/2608.23566v1)** — 在 GRPO 范式之外探讨单响应 critic 的可恢复价值，是 RLAIF/RLHF 工程实践中绕不开的稳定性难题，一旦真正解决将大幅提升训练样本效率，强烈推荐精读全文。

📖 **[ReWorld](http://arxiv.org/abs/2608.23565v1)** — 对世界模型"控制要短、记忆要长"张力的解决方案既优雅又具结构美感，per-head 注意力混合与训练-推理分离策略对其他长序列生成任务同样具有方法论迁移价值。

📖 **[SRPO](http://arxiv.org/abs/2608.23493v1)** — 将"自我反思"引入策略优化的机制设计清晰，针对长视野信用分配的老问题给出新思路，值得作为后续思考"LLM 训练时 vs 推理时反思"分工的起点。

---

*日报由自动流程生成，所有内容均基于 ArXiv 公开摘要，研究结论请以原文为准。*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*