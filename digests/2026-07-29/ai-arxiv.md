# ArXiv AI 研究日报 2026-07-29

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-07-29 02:00 UTC

---

# 📘 ArXiv AI 研究日报
**日期：2026-07-29 | 论文总数：50 篇 | 来源：cs.AI / cs.CL / cs.LG**

---

## 一、今日速览

今日 ArXiv 投稿呈现出鲜明的"**落地化与可信化**"主线：一方面，LLM Agent 的可靠性、安全性与治理机制研究集中爆发（污点控制、类型化修订合约、循环≠可靠性等），标志着研究重心从"能不能做"转向"能不能可信地做"；另一方面，长上下文推理效率持续优化，KV 缓存压缩（LOCKS）、自推测解码（DraftExpert）、MXFP4 注意力量化（MXAttention）三路并进；同时，可解释性研究从语义层下沉到**隐状态几何**（D-Score、SAE 下游效应），幻觉检测与特征因果性获得新工具。垂直应用上，气象预警、网络安全 APT 防御、医学多模态诊断成为高产赛道。

---

## 二、重点论文（按主题分类）

### 🧠 大语言模型（架构、训练、对齐、评估）

1. **[DataOrchestra: Learning to Orchestrate Per-Example Curation of Pretraining Data](http://arxiv.org/abs/2607.24717v1)**
   - 作者：Zhen Huang, Yikun Wang, Shijie Xia 等
   - 要点：突破"整批数据用同一清洗策略"的粗放范式，提出**逐样本动态编排**的预训练数据策展框架，可能重塑大模型数据流水线的设计思路。

2. **[D-Score: A Spectral Hidden-State Signal for Hallucination Detection in Large Language Models](http://arxiv.org/abs/2607.24586v1)**
   - 作者：Bianca Raimondi, Davide Evangelista, Maurizio Gabbrielli 等
   - 要点：从**隐藏激活的几何结构**出发，用一个简单的谱信号就能识别幻觉，无需外部知识或对比模型——为内省式幻觉检测提供了轻量方案。

3. **[UNIFUSION: Adapting Autoregressive Language Models into Discrete Diffusion under a Unified Reverse-Rate Objective](http://arxiv.org/abs/2607.24507v1)**
   - 作者：Xiaoyi Jiang, Jingyuan Li, Yixuan Jiang 等
   - 要点：在统一反向率目标下，将预训练 AR 模型直接迁移到**均匀噪声扩散**（而非主流的掩码扩散），采样过程中所有 token 都可编辑，扩展了生成路径的灵活性。

4. **[Sparse Autoencoders Encode Both Concepts and Functions: The Downstream Geometry of Feature Effects](http://arxiv.org/abs/2607.24645v1)**
   - 作者：Phu Gia Hoang, Anwoy Chatterjee, Tanmoy Chakraborty 等
   - 要点：揭示 SAE 特征不仅编码概念，还编码**函数性效应**，从下游几何角度解释为什么"激活可解释 ≠ 行为可干预"，对机制可解释性具有重要方法论意义。

5. **[Hierarchical Group-Conditional Conformal Risk Control for Selective Prediction in Language Models](http://arxiv.org/abs/2607.24562v1)**
   - 作者：Murilo Salem, Luísa Böhm, Daniel Pontes 等
   - 要点：将保形风险控制从边际层面推进到**分层组条件**层面，使 LLM 在不同人群/领域/难度上的弃答策略具有严格的逐组风险保证。

---

### 🤖 智能体与推理

6. **[The Physics of Multi-Turn Long-Horizon Planning: From Pre-training to Post-training via Single- and Multi-Teacher On-Policy Agentic Distillation](http://arxiv.org/abs/2607.24720v1)**
   - 作者：Tianyi Men, Zhuoran Jin, Kang Liu 等
   - 要点：系统性解构**多轮长程规划能力**如何在预训练—后训练中被获得和整合，提出单/多教师在策略蒸馏框架，是 Agent 训练理论的深入工作。

7. **[Agentic Permissions Policy Algebra for Taint Confinement in LLM Agents](http://arxiv.org/abs/2607.24625v1)**
   - 作者：Arseny Kravchenko, Vadim Liventsev, Innokentii Konstantinov 等
   - 要点：针对 LLM Agent 处理混合机密数据时的提示注入风险，提出**基于策略代数的动态污点控制**，把信息流控制从"永久污染"解放为可条件回收。

8. **[Looping Is Not Reliability: State-Bound Evidence and Typed Revision Contracts for Agentic Code Repair](http://arxiv.org/abs/2607.24604v1)**
   - 作者：Xueping Gao, Jianwei Yang, Qiang Yang 等
   - 要点：通过 900 条轨迹的实证研究指出，**生成—测试—修订循环本身不构成可靠性**，并提出"状态绑定证据 + 类型化修订合约"，是 Agent 代码修复的形式化进展。

9. **[Eviction as Estimation: A Fixed-Lag Smoothing View of Test-Time Memory](http://arxiv.org/abs/2607.24667v1)**
   - 作者：Maruthi Vemula, Neeraj Praneeth Gajula
   - 要点：将 LLM 工作记忆中的**逐出策略**重写为对隐信号的固定滞后平滑估计问题，统一了 StreamingLLM、H2O、SnapKV 的视角，并给出"测量优于累积"的判断准则。

10. **[Efficiency Matters in Autonomous Research](http://arxiv.org/abs/2607.24647v1)**
    - 作者：Haiqian Yang, Yuan Cao
    - 要点：呼吁在自主科研（AR）系统中**解效率与终态质量同等重要**，提出应将"求解过程的效率"作为 AR 评估的新维度。

---

### 🔧 方法与框架

11. **[LOCKS: Page-Local Compact Key Summaries for Efficient Long-Context Decoding](http://arxiv.org/abs/2607.24555v1)**
    - 作者：Junsung Hwang
    - 要点：揭示注意力键"局部低秩、全局高秩"的特性，提出**页级紧凑键摘要**，在不丢失页特定方向的前提下压缩 KV 缓存读取，是长上下文解码的高效方案。

12. **[DraftExpert: Expansion-Aware Self-Speculative Decoding for End-Device MoE Inference](http://arxiv.org/abs/2607.24434v1)**
    - 作者：Dengke Han
    - 要点：面向终端设备 MoE 推理，提出**扩展感知的自推测解码**，在路由专家按需分阶段加载的设定下显著降低延迟，连接了大模型轻量化与终端部署。

13. **[MXAttention: Data-Free Optimal Scaling and Pre-Normalization Quantization for MXFP4 Attention](http://arxiv.org/abs/2607.24377v1)**
    - 作者：Jianlin Yu, Jing Lin, Linghui Kong 等
    - 要点：解决 MXFP4 注意力量化中"裁剪—下溢"的权衡问题，提出**无数据的最优缩放 + 预归一化**方案，在扩散视频生成中实现高质量低比特推理。

14. **[KANEx: Translating Kolmogorov-Arnold Networks' Interpretability to Medical Explainability](http://arxiv.org/abs/2607.24730v1)**
    - 作者：Krithi Shailya, Ananya Lakshmi Ravi, Venkatanathan K. V. 等
    - 要点：将 KAN 的可解释性转化为**医学影像诊断的临床可解释性**，与 VLM 协同生成自然语言解释，是连接数学结构与临床信任的桥梁工作。

15. **[DecoupleMix: Decoupled Ratio Search and Convex Allocation for Scalable VLM Data Recipes](http://arxiv.org/abs/2607.24516v1)**
    - 作者：Jiahao Xie, Zhongbin Guo, Qianle Wang 等
    - 要点：将 VLM 预训练数据配方的**比例搜索与凸分配解耦**，为多领域数据混合提供可归因、可扩展的原则性方法，告别"经验拼盘"。

---

### 📊 应用（垂直领域与多模态）

16. **[ClinFusion: A Vision-Centric Multimodal LLM System for Holistic Medical Understanding](http://arxiv.org/abs/2607.24743v1)**
    - 作者：Hangjie Yuan, Yichen Qian, Zhiwei Tang 等
    - 要点：以"视觉为中心"设计医学 MLLM 系统，统一处理 2D/3D 异质医学影像，并在评估协议上对齐临床实际，是医学大模型系统级工作的代表。

17. **[SIREN: Towards End-to-End Extreme-Weather Early Warning with Experience-Grounded LLM Agents](http://arxiv.org/abs/2607.24588v1)**
    - 作者：Hang Ni, Weijia Zhang, Fan Liu 等
    - 要点：用**经验驱动的 LLM Agent** 端到端串联极端天气预警全流程，替代昂贵的人工专家链路，将"预警到行动"链条自动化。

18. **[DeepFaith: Evidence-Grounded LLMs for Faithful Incident Reporting in Multi-Stage APT Defense](http://arxiv.org/abs/2607.24348v1)**
    - 作者：Trung V. Phan, Tri Gia Nguyen, Thomas Bauschert
    - 要点：将证据驱动的 LLM 报告生成嵌入**多阶段 APT 防御**流水线，让溯源图告警输出"人可读、证据可查"，提升 SOC 决策可信度。

19. **[LLM-SoccerArena: Benchmarking LLMs on Real-World Predictions in Sports](http://arxiv.org/abs/2607.24573v1)**
    - 作者：Jonas Schröder, Jonas Schweisthal, Oliver Müller 等
    - 要点：构建**实时、可更新**的体育赛事预测基准，测试 LLM 在动态信息整合下对未来事件的预测能力，弥补静态回顾性基准的不足。

---

## 三、研究趋势信号

> 本日投稿出现若干值得追踪的新兴方向：
> **① Agent 治理与形式化安全成为显学。** 从污点控制代数、类型化修订合约、到 AR 系统的过程效率评估，"Agent 工程化"的成熟度指标正在快速丰富。
> **② 长上下文/长视频推理走向"分层条件化"。** CADER 的置信度感知动态证据推理、LOCKS 的页级紧凑键、Eviction-as-Estimation 的滞后平滑视角，共同指向"按需、按难度、按结构"的自适应推理范式。
> **③ 隐状态几何成为可解释性新前沿。** D-Score 的谱信号、SAE 下游效应、Conformal Risk 的组条件化，均尝试从几何/统计角度对 LLM 内部表征做可证伪、可审计的分析，超越纯语义归因。
> **④ 垂直应用从"能做"走向"可信部署"。** 气象预警、APT 防御、医学影像、法语法律 KG 的投稿集中体现"操作日志—证据回溯—合规校验"的工业级诉求。

---

## 四、值得精读

1. **[Agentic Permissions Policy Algebra for Taint Confinement in LLM Agents](http://arxiv.org/abs/2607.24625v1)**
   - 推荐理由：在提示注入与混合机密数据威胁日益严重的当下，论文把经典 IFC 思想以**策略代数**的形式重塑为可工程落地的 Agent 权限系统，是构建可信 Agent 基础设施的关键拼图。

2. **[DataOrchestra: Learning to Orchestrate Per-Example Curation of Pretraining Data](http://arxiv.org/abs/2607.24717v1)**
   - 推荐理由：预训练数据的"逐样本策展"思路打破了过去按语料/域统一处理的范式，对所有关心 LLM scaling 性价比与数据效率的从业者都具有方法论级的启发意义。

3. **[Looping Is Not Reliability: State-Bound Evidence and Typed Revision Contracts for Agentic Code Repair](http://arxiv.org/abs/2607.24604v1)**
   - 推荐理由：900 条轨迹的实证 + 形式化合约的工程方案，清晰揭示了当前 Coding Agent 评测与部署中的盲点，兼具学术严谨与工程价值，适合做 Agent 可靠性研究的入门案例。

---

*📌 本日报由 AI 研究分析师自动整理。论文链接均指向 ArXiv 原文，建议结合个人研究方向选择性精读。*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*