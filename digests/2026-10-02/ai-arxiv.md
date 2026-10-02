# ArXiv AI 研究日报 2026-10-02

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-10-02 03:34 UTC

---

# 📬 ArXiv AI 研究日报
**日期：2026-10-02｜本期收录：50 篇｜领域：cs.AI / cs.CL / cs.LG**

---

## 1. 今日速览

今日 ArXiv 投稿聚焦三大主线：**LLM 后训练优化的"轻量化革命"**——TACO、ZFO、SoftServe 三种新型优化器正面应对全参数微调显存瓶颈；**智能体评估走向"真实业务"**——KaliBench、Argo-Bench、HumanoidToolBench 等基准把工具使用、数据分析、机器人协作等真实场景纳入考核；**扩散语言模型继续突破**——Hierarchical Continuous Diffusion 与 NEPA 等工作正从范式层面重新审视语言生成。机器人与具身智能（多机协作、人形工具使用、Self-Improvement）依旧是高频投稿方向。

---

## 2. 重点论文（按主题分类）

### 🧠 大语言模型（架构、训练、对齐、评估）

1. **[TACO: Ternary Absolute-max Column-wise One-sparse Optimizer for LLM Fine-Tuning](http://arxiv.org/abs/2610.02199v1)** — Jiang, McGee, Bergou 等
   将 LLM 微调优化器状态压缩至三值稀疏表示，显著降低显存开销，使更大模型可在同等 GPU 上完成全参数微调。

2. **[Trust the Direction, Search the Step: Zero-and-First-Order Methods for LLM Fine-Tuning](http://arxiv.org/abs/2610.02190v1)** — McGee, Bergou, Dutta
   提出 ZFO 框架解耦方向估计（零阶）与步长搜索（利用零阶控制），在保证收敛的同时降低每轮步的算力需求。

3. **[Finetuning with Sampling: SFT Learns Better Than You Think](http://arxiv.org/abs/2610.02140v1)** — Karan, Chen, Du
   挑战"SFT 弱于 RL"的传统观点，证明带采样的 SFT 在新能力引入上具有比预期更强的泛化能力。

4. **[Local Support Learning](http://arxiv.org/abs/2610.02126v1)** — Ben-Kish, Kumar, Glass 等
   从几何视角重新审视灾难性遗忘，提出基于权重矩阵输入空间局部支撑的优化方法，能更自然地保留预训练知识。

5. **[LLM2Jev: LLMs Are Already Jev-Style Decision Models](http://arxiv.org/abs/2610.02076v1)** — Li, Wagle
   研究通用 LLM 在不生成自由内容前显式提供分类概率输出的潜力，为 LLM 作为结构化决策引擎落地提供新路径。

6. **[From Knowledge Access to Source Learning: Developing Source-Specific Competence](http://arxiv.org/abs/2610.02150v1)** — Fu, Xia, Wang 等
   提出"源特定能力"概念，让 LLM Agent 学会判断何时信任哪个外部知识源，而不只是访问与检索内容。

---

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

7. **[AutoCompact: Learning When to Compact Context in Long-Horizon Coding Agents](http://arxiv.org/abs/2610.02163v1)** — Zhang, Zheng, Du 等
   让编码 Agent 自学何时、何处压缩上下文，将上下文管理从静态策略升级为决策能力，对长链仓库级编程任务尤为关键。

8. **[KaliBench: A Fine-Grained Benchmark for Cybersecurity Tool Use on Kali Linux](http://arxiv.org/abs/2610.02206v1)** — Li, Suryanto, Zhang 等
   首个细粒度对系统安全工具使用的评估方法，采用 verifiable rewards 对应命令链在 Kali Linux 的可执行性评测。

10. **[Argo-Bench: Evaluating Data Agents on Enterprise-Scale Workflows](http://arxiv.org/abs/2610.02122v1)** — Tomitsuka, Raayatsanati, Xing 等
    超越 Text-to-SQL，面向企业级数十张表、统计分析与决策闭环的真实数据科学工作流，是 Agent 评估走向"真实业务"的代表。

11. **[VISTA: A Visual Harness for Reasoning in an Interactive World](http://arxiv.org/abs/2610.02200v1)** — Han, Hu, Qiu 等
    用一个视觉"外壳"让通用多模态模型获得长视野视觉推理能力，可在多种交互环境中完成规划与推理。

12. **[The Missing Primitive: Diagnosing and Repairing Mathematical Reasoning in LLMs](http://arxiv.org/abs/2610.02191v1)** — Xing, Dai, Qian 等
    从结构性原语缺失的视角诊断 LLM 的数学推理能力，提供了系统化的修复方向，揭示当前模型"高分但非真懂"的现象。

13. **[Causal Memory Policy: Making Memory Utility Identifiable by Intervening on Retrieval](http://arxiv.org/abs/2610.02070v1)** — Behnam, Wang
    引入因果推断思路解决记忆效用不可识别问题——从未被检索的记忆因 store-level 干预同果导致效用被误估，干预检索从内存插入挽救这一漏洞。

14. **[Watch, Infer, Coordinate: Inferring Robot Partner Constraints for Zero-Shot Coordination](http://arxiv.org/abs/2610.02170v1)** — Ye, Zhang, Tadiparthi 等
    机器人仅通过"观察"就能推断合作伙伴的硬件限制，实现零样本协作，对多机器人搬运场景尤为重要。

---

### 🔧 方法与框架（新技术、基准测试、效率优化）

15. **[Hierarchical Continuous Diffusion Language Models](http://arxiv.org/abs/2610.02193v1)** — Ren, Li, Liu 等
    用层次化潜变量突破离散扩散语言模型的独立采样瓶颈，让并行解码能保持全局约束与双向一致性。

16. **[DMAD: Distribution Matching as Adversarial Distillation for Fast Visual Generation](http://arxiv.org/abs/2610.02188v1)** — Yu, Yuan, Yang 等
    抛弃 DMD 中对辅助扩散模型的依赖，通过对抗损失直接对齐分布，加速视觉生成蒸馏训练。

18. **[FERPO: Forward Entropy-Regularized Policy Optimization](http://arxiv.org/abs/2610.02198v1)** — Sanokowski, Sarmadi, Khadiv
    重新审视 critic 对动作梯度准确性的必要性，用前向 KL 风格在连续控制中直接优化策略，避免 critic 对动作区分度不准确的问题。

20. **[SoftServe: A Scalable Quasi-Newton Method for Deep Learning](http://arxiv.org/abs/2610.02182v1)** — Ko, Parshakova, Cai 等
    将准牛顿法重新设计为适配非凸、超大规模场景的深度学习优化器，融合多年经验，性能与可扩展性兼备。

22. **[Decoding Looped Transformers Better for (Almost) Free](http://arxiv.org/abs/2610.02185v1)** — Liu, Zheng, Chen 等
    发现 Loop Transformer 中早期循环的中间表示已可被解码，几乎无额外开销提升参数效率。

---

### 📊 应用（垂直领域、多模态、代码生成）

23. **[Generative Cinematographer: Composing Camera and Object Motion in 3D](http://arxiv.org/abs/2610.02180v1)** — Zhang, Yang, Guruprasad 等
    在 3D 中联合控制相机与物体运动，解决了"同一 2D 轨迹对应不同 3D 运动"的歧义问题，让可控视频生成更精准。

24. **[One Basis to Animate Them All: Gaussian Blendshape Distillation for Real-Time Avatars](http://arxiv.org/abs/2610.02207v1)** — Fazylov, Lefkimmiatis, Laptev
    用身份无关的 blendshape 线性组合近似预训练 3D Gaussian Avatar 的动画神经推理，实现实时驱动。

25. **[DuoMind: Enabling Distributed Multi-Robot Coordination with Semantic Communication](http://arxiv.org/abs/2610.02161v1)** — Zhou, Gao, Wang 等
    用语义通信将 VLM/VLA 拓展到多机器人场景，让机器人间用高层意图而非孤对点位交换信息。

26. **[HumanoidToolBench: Benchmarking Humanoid Tool Use from Selection to Mobile Execution](http://arxiv.org/abs/2610.02089v1)** — Jang, Park, Kwon 等
    首个联合评估人形机器人工具选择 + 操作 + 移动的基准，对具身智能走向"工具系统"至关重要。

27. **[ScholarCatalyst: A Benchmark for Retrieving Papers That Inspire New Research](http://arxiv.org/abs/2610.02202v1)** — Kim, Lee, Liu 等
    捕捉科学家"灵感检索"能力——从海量文献中找到能启发新研究的那篇，而非只检索最相关的那篇。

---

## 3. 研究趋势信号

今日投稿呈现出三个清晰信号：

**① LLM 后训练进入"精细化分工"阶段。** 优化器（TACO / ZFO / SoftServe）、微调范式（SFT+采样、Karo-Bench）、知识管理（源特定能力、记忆因果推断）各自独立形成专门子方向，说明该领域的核心矛盾已从"能不能训"转为"怎样训得更准、更省、更稳"。

**② Agent 评估全面对标真实业务。** KaliBench（安全运维）、Argo-Bench（企业数据科学）、HumanoidToolBench（具身工具使用）三件事均位于"真实业务闭环"而非"刷榜式 Benchmark"，标志着 Agent 研究从"能力演示"过渡到"能用应用"。

**③ 扩散语言模型 + 具身多模态二者成主线。** 层次化连续扩散、NEPA、Karo-Bench 等工作将扩散范式向语言、视觉、生成领域全面推进；多机器人、人形、Self-Improvement 等具身投稿占本日机器人类论文近六成，预计将成为下一季度热点。

---

## 4. 值得精读

> **① [Hierarchical Continuous Diffusion Language Models](http://arxiv.org/abs/2610.02193v1)** — Ren, Li, Liu 等
> 如果你对"超越自回归的下一代语言模型范式"感兴趣，这是当前少数几个从根本上重新思考离散扩散采样独立性瓶颈的工作，结构与思路都值得细读。

> **② [AutoCompact: Learning When to Compact Context in Long-Horizon Coding Agents](http://arxiv.org/abs/2610.02163v1)** — Zhang, Zheng, Du 等
> 编码 Agent 的上下文管理是工业界最痛的问题之一。该文将"何时压缩"从静态启发式变为可学习决策，并讨论了压缩什么工作记忆，对工程实践直接有启发。

> **③ [Local Support Learning](http://arxiv.org/abs/2610.02126v1)** — Ben-Kish, Kumar, Glass 等
> 用几何视角重新审视灾难性遗忘，论证梯度优化器更新点在局部支撑下是次优的，是一份既有理论深度又能指导实践的论文，适合连续微调场景的团队。

---

*📌 完整论文列表请参见 [ArXiv cs.AI](https://arxiv.org/list/cs.AI/recent) / [cs.CL](https://arxiv.org/list/cs.CL/recent) / [cs.LG](https://arxiv.org/list/cs.LG/recent)*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*