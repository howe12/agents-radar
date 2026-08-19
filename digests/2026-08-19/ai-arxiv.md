# ArXiv AI 研究日报 2026-08-19

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-08-19 00:52 UTC

---

# 📡 ArXiv AI 研究日报
**日期：2026-08-19 | 收录论文：50 篇 | 来源：cs.AI / cs.CL / cs.LG**

---

## 一、今日速览

今日 ArXiv 投稿呈现出明显的"**Agent 安全与可信化**"主线：多篇论文集中探讨大模型与智能体系统的攻击面（催眠注入、状态注入、合规探测器审计）。同时，**具身智能与 VLA 模型**继续向长程任务和全身运动推进，**长上下文架构**（Proteus）与**RL 后训练方法创新**（Le Critique、PIHF、ClawGym II）也形成显著聚类。**AlphaEvolve 用于矩阵乘法指数优化**这类"AI for Science"的代表工作同样值得关注。

---

## 二、重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**1. [Proteus: Incremental Memory Activation for Long-Context Sequence Modeling](http://arxiv.org/abs/2608.16844v1)**
- 作者：Reza Bayat, Ali Behrouz, Vahab Mirrokni 等
- 针对现有记忆模型"静态记忆"的局限，提出增量激活机制，让早期 token 在需要时被重新唤醒，是长上下文架构的一次重要升级。

**2. [Model Hypnosis: Strong control of AI via additive subliminal effects](http://arxiv.org/abs/2608.16834v1)**
- 作者：Enric Boix-Adsera, Benedict Tessler
- 揭示"模型催眠"现象：单条看似无关的弱提示可系统性组合并强烈控制模型行为，跨模型家族与规模均成立，对模型部署安全有重要警示意义。

**3. [Le Critique: Privileged Value Functions for LLM Reinforcement Learning](http://arxiv.org/abs/2608.16739v1)**
- 作者：Siddarth Venkatraman, Matthieu Dinot, Laurence Aitchison
- 提出基于"特权价值函数"的 LLM 强化学习方法，弥补 GRPO 等组相对方法只提供序列级信用、训练被串行阻塞的不足，是 RL 后训练的重要方法论突破。

**4. [Policy Iteration with Human Feedback (PIHF): Bringing Post-Training RL to In-context Learning](http://arxiv.org/abs/2608.16831v1)**
- 作者：Minh-Ha Nguyen, Cathy Shyr
- 将策略迭代 + 人类反馈引入上下文学习，使固定模型能从指令与示范中持续适配行为，是 RL 与 ICL 融合的一次系统性尝试。

**5. [On the Principles Behind Neural Network Optimizers](http://arxiv.org/abs/2608.16760v1)**
- 作者：Yushun Zhang
- 博士论文级别的研究：批判性审视 Adam 的发散—收敛争论，并给出新的优化器设计原则，对所有 LLM 训练实践具有底层参考价值。

**6. [Semantic Bandits: In-Context Exploration-Exploitation is Biased by Semantic Priors](http://arxiv.org/abs/2608.16707v1)**
- 作者：David Eric Austin, Kaheer Suleman, Jackie Chi Kit Cheung
- 系统揭示 LLM 智能体在语义 bandit 任务中如何被语义先验系统性扭曲其探索—利用平衡，是 LLM-as-Agent 评估的关键工作。

---

### 🤖 智能体与推理

**7. [Don't Drop the BATON: Long-Horizon Robot Manipulation via Agentic Subtask Exploration and Transition-aware Memory](http://arxiv.org/abs/2608.16889v1)**
- 作者：Bingxin Xu, Yuzhang Shang, Emilio Ferrara
- 针对长程机器人操作中的误差累积与子任务隐式约束，提出基于代理式子任务探索 + 转移感知记忆的框架。

**8. [When State Becomes an Attack Surface: State-Semantic Injection in LLM-Driven Embodied Agents](http://arxiv.org/abs/2608.16806v1)**
- 作者：Jiawei Liu, Jiacheng Guo, Tian Zhang 等
- 把"状态本身"定义为一种新型攻击面，提出针对 LLM 具身智能体的状态—语义注入攻击，与 #15 形成"Agent 安全双子星"。

**9. [When Agents Coordinate: Measuring Coordination in Multi-Agent AI Coding](http://arxiv.org/abs/2608.16801v1)**
- 作者：Giuseppe Destefanis, Tomaso Aste
- 提出衡量多智能体编码协作质量的工具，弥补现有评测只看"是否完成 + 成本"的盲区。

**10. [ClawGym II: Exploring Black-Box RL on Agent Harness](http://arxiv.org/abs/2608.16798v1)**
- 作者：Huatong Song, Fei Bai, Ming Yang 等
- 在 Agent Harness 上探索黑盒强化学习，揭示长程智能体任务 RL 训练的可扩展性挑战。

**11. [Neurosymbolic Embodied Agents](http://arxiv.org/abs/2608.16794v1)**
- 作者：Mohammad Albinhassan, Yuming Feng, Alessandra Russo 等
- 用神经符号方法将长程家务任务分解为任务导向的视觉探索 + 符号约束执行，提升可执行性与接地性。

---

### 🔧 方法与框架

**12. [Improving the matrix multiplication exponent with modern optimization and AlphaEvolve](http://arxiv.org/abs/2608.16884v1)**
- 作者：Emilien Dupont, Marvin Eisenberger, Borislav Kozlovskii 等
- 用 AlphaEvolve + 现代优化改进矩阵乘法指数 ω 的核心组合损失分析，是"AI for Math"的标志性进展。

**13. [AutoSR: Automatic Symbolic Regression by Searching Research States](http://arxiv.org/abs/2608.16876v1)**
- 作者：Kejia Zhang, Youran Sun, Xinyu Ren 等
- 提出"搜索科研状态而非孤立方程"的符号回归系统 AutoSR，显著提升发现可解释物理表达式的成功率。

**14. [What Do Compliance Detectors Read? An Audit of Activation Probes and Guard Models](http://arxiv.org/abs/2608.16852v1)**
- 作者：Saisab Sadhu, Aadit Sengupta, Vinay Kumar Sankarapu 等
- 系统审计合规探测器与守卫模型的判读依据，是 AI 合规与部署可信化的关键工作。

**15. [Towards Computational Provenance: Carrying Causal-State Evidence in Generated Text](http://arxiv.org/abs/2608.16868v1)**
- 作者：Benjamin Belay
- 提出"计算溯源"概念：让生成文本携带可检测的内部因果状态证据，是模型可审计性的新方向。

**16. [CaliBench: Are the Stochastic Dynamics of Video World Models Physically Calibrated?](http://arxiv.org/abs/2608.16829v1)**
- 作者：Jonathan Sadeghi, Jenny Seidenschwarz, Jesse Allardice 等
- 评测视频世界模型在特定物理现象上的偶然不确定性是否真正校准，填补了细粒度评测空白。

---

### 📊 应用

**17. [HAF: Adapting Generalist VLAs to Humanoid Whole-Body Loco-manipulation via Hierarchical Action Flow and Spectral Latent RL](http://arxiv.org/abs/2608.16837v1)**
- 作者：Langzhe Gu, Chengkai Hou, Meng Li 等
- 通过分层动作流 + 谱潜在 RL 把通用 VLA 适配到人形机器人全身运动操作，具身基础模型落地的重要一步。

**18. [TDD-Agent: Test-Driven Reasoning for Code Generation](http://arxiv.org/abs/2608.16742v1)**
- 作者：Hongyue Yu, Kefan Li, Jiakun Li 等
- 把测试作为推理驱动器而非事后校验，提升仓库级复杂代码生成正确率。

**19. [UniDot: A Unified Network for Sequence Modeling and Feature Interaction in Large-scale Recommendation](http://arxiv.org/abs/2608.16797v1)**
- 作者：Rongcheng Lin, Yan Sun, Jamey Zhang 等
- 工业级推荐系统统一架构，打通特征交互模型与序列模型两条独立演进路线。

**20. [Learning to Unlearn: Machine Unlearning via Learning the Unlearning Behaviors](http://arxiv.org/abs/2608.16700v1)**
- 作者：Hang Zhang, Kaifeng Zhang, Yixiao Ma 等
- 通过学习"遗忘行为"本身来实现更鲁棒的机器遗忘，应对隐私法规需求。

---

## 三、研究趋势信号

今日投稿呈现四个明显信号：

1. **"Agent 攻击面"成为新热点**：#15 Model Hypnosis、#22 State-Semantic Injection、#12 Compliance Detector Audit 三篇集中关注同一议题——LLM/Agent 部署中那些**被忽视但可被系统性利用的弱点**，预示"红队视角的 Agent 可信化研究"将在下半年明显增多。
2. **VLA 与具身基础模型走向"全身运动 + 长程规划"**：#1 BATON、#14 HAF、#29 Neurosymbolic Embodied Agents 共同标志 VLA 从单技能走向多阶段、长时序、跨形态。
3. **RL for LLM 走向"特权信号 + 序列级信用"**：#17 PIHF、#26 ClawGym II、#39 Le Critique 三者思路各异但同属"如何让 RL 在 LLM 上更高效"的大方向。
4. **AI for Science/Engineering 持续走强**：#3 矩阵乘法、#5 符号回归、#12 合规审计、#16 船舶油耗、#28 科学问题发现，显示大模型正在加速渗透到严肃科学研究流程。

---

## 四、值得精读

- 📘 **[Model Hypnosis (2608.16834)](http://arxiv.org/abs/2608.16834v1)** — 揭示"个体弱、系统组合后强"的提示注入现象，是模型安全部署必读。
- 📘 **[Proteus (2608.16844)](http://arxiv.org/abs/2608.16844v1)** — 长上下文记忆架构的新解法，对所有做长文档/RAG 的工程师有直接借鉴价值。
- 📘 **[On the Principles Behind Neural Network Optimizers (2608.16760)](http://arxiv.org/abs/2608.16760v1)** — 对 Adam 的系统性反思与新优化器设计准则，是训练基础设施层面的"地基级"阅读。

---

*日报由 AI 研究分析师自动生成，基于 2026-08-19 ArXiv cs.AI / cs.CL / cs.LG 分类下的 50 篇最新论文。*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*