# ArXiv AI 研究日报 2026-09-24

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-09-24 02:40 UTC

---

# 📑 ArXiv AI 研究日报
**2026-09-24 · 共收录 50 篇新论文**

---

## 一、今日速览

今日投稿呈现三大鲜明主线：**一是智能体系统进入"可编辑世界模型"新阶段**（#13、#14、#43），研究者不再满足于让 LLM 预测观测，而是开始思考如何在世界模型层面直接编辑动作与记忆；**二是 LLM 训练范式持续向"推理效率 + 部署经济性"收敛**——扩散语言模型加速（#35）、对数量化预测（#36）、递归对数深度架构（#47）、可靠推理的代价学习（#30）形成一条完整链路；**三是 AI 安全与对齐研究从"测试时行为"扩展到"基础设施级治理"**——欧盟 AI Act 系统性风险仪表板（#29）、智能体安全基准 PASTABench（#50）、关机破坏倾向实验（#33）共同构成多层级防护证据链。

---

## 二、重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**1. [Memory Attention](http://arxiv.org/abs/2609.28399v1)**
- 作者：J. Kang
- 提出以 token-indexed 记忆替代传统 value projection 的注意力机制，探索上下文无关的"复用缓存"是否可与动态上下文信息协同，是 LLM 长期记忆架构方向的一次系统性尝试。

**2. [Log-Depth Recurrent Language Modeling](http://arxiv.org/abs/2609.28212v1)**
- 作者：Y. Wang, N. Cingillioglu, C. Pert 等
- 将平衡树递归算子扩展至语言模型，实现"对数深度递归 + 序列级并行"，意在同时突破 Transformer 的固定深度与 RNN 的串行限制，是 Mamba 之外的另一条线性复杂度路径。

**3. [Fine-Tuning LLMs for Translation: General Forgetting Mitigation Does Not Preserve MT-Specific Instruction Following](http://arxiv.org/abs/2609.28395v1)**
- 作者：N. Scholz, D. Thulke, A. Nasir 等
- 揭示了一个反直觉现象：通用抗遗忘方法在机器翻译微调场景中无法保留 MT 特定指令遵循能力，对垂直领域微调实践有重要警示意义。

**5. [Predicting Quantization Price for Selecting PTQ Configurations Before Deployment](http://arxiv.org/abs/2609.28270v1)**
- 作者：J. Qiu, J. Mu, W. Zhang 等
- 在 PTQ 部署前预测输出分布漂移的"量化代价"，无需完成量化即可筛选 PTQ 配方，对 LLM 边缘部署链路极为实用。

**6. [Towards Efficient Reasoning: Learning Causal Shortcuts for Diffusion Language Models](http://arxiv.org/abs/2609.28272v1)**
- 作者：D. Jin, K. Han, B. Li 等
- 针对扩散语言模型指数级探索空间问题，学习"因果捷径"以聚焦关键推理 token，是 DLM 推理加速的关键一步。

**7. [Learning the Cost of Reliable Inference](http://arxiv.org/abs/2609.28322v1)**
- 作者：D. Rontogiannis, A. Artola Velasco, M. Gomez Rodriguez 等
- 让 LLM 服务平台具备"任务感知定价"能力，用户可根据任务特征获得最优 token 价格，是 LLM 经济性研究的新维度。

---

### 🤖 智能体与推理

**8. [Agent-Editing World Model: Rethinking World Modeling for LLM Agents](http://arxiv.org/abs/2609.28416v1)**
- 作者：S. Sun, G. Chen, F. Meng 等
- 提出"代理-编辑"范式：在世界模型层面直接编辑动作与状态，而非预测高熵观测，对长 horizon 智能体任务具有结构性优势。

**9. [Frozen Flows Forget: Diagnosing and Restoring Lost Motion in a Latent-flow World Model](http://arxiv.org/abs/2609.28414v1)**
- 作者：X. Chen, R. Z. Li, Z. Zhou 等
- 首次系统揭示"冻结潜在流世界模型"会丢失物体运动这一关键属性，并提出恢复方案，对世界模型可操控性研究是重要诊断。

**10. [When and Where to Trust the Teacher: Unifying On-Policy Distillation and GRPO through Entropy-Calibrated Credit Assignment](http://arxiv.org/abs/2609.28385v1)**
- 作者：J. Zhang, J. Yang, Z. Huang 等
- 通过熵校准的信用分配机制，将 GRPO 与在线蒸馏统一在同一框架下，是 RLVR 数学推理训练的统一视角。

**11. [Shutdown Sabotage Propensities in Multi-Agent Systems](http://arxiv.org/abs/2609.28274v1)**
- 作者：A. Knecht, U. Schaller, C. Summerfield 等
- 实证检验 AI 智能体是否会产生"逃避人类关机"的倾向，是 AI 安全"关机问题"在多智能体场景下的关键实验证据。

**12. [Controlling Collectives of AI Agents in Reasoning Space with Spatial Transformers](http://arxiv.org/abs/2609.28247v1)**
- 作者：F. Vatnsdal, R. Gopal, R. Garcia Camargo 等
- 提出 COMPASS 架构，使用空间 Transformer 在"推理空间"中协调多机器人团队，解决了 LLM 团队规模扩大即失效的痛点。

**13. [PASTABench: Proactive Assessment of Sequential Trajectories for Agent Safety](http://arxiv.org/abs/2609.28197v1)**
- 作者：J. Sun, Y. Zhou, H. Zhu 等
- 提供主动式多步轨迹安全评估基准，弥补现有 benchmark"步骤级 + 单轮"的局限，是 agent 安全评估基础设施的重要补充。

---

### 🔧 方法与框架

**14. [On the Diffusibility of High-Dimensional Latents](http://arxiv.org/abs/2609.28473v1)**
- 作者：C. Feng, Z. Xu, B. Chen 等
- 系统研究 RAE 编码器的"可扩散性"，提出面向重建的微调路径以保留细节，是扩散模型与表征学习融合的关键基础工作。

**15. [hyperbolix: Hyperbolic Deep Learning in JAX](http://arxiv.org/abs/2609.28248v1)**
- 作者：T. Klein, T. Lang, Y. Velaj 等
- 首个基于 JAX/Flax NNX 的通用双曲深度学习库，覆盖 6 种流形，为层次结构数据的几何深度学习提供基础设施。

---

### 📊 应用

**16. [Mizar: A 159M-Parameter Audio-Language Model for Audio Understanding](http://arxiv.org/abs/2609.28344v1)**
- 作者：K. Li, S. Han, Y. Tian 等
- 仅 159M 参数即实现端侧可部署的音频-语言理解，为边缘设备多模态感知提供轻量化方案。

**17. [MemBodied: Recurrent Associative Memory for Vision-Language-Action Models](http://arxiv.org/abs/2609.28256v1)**
- 作者：T. D. Pala, N. Majumder, B. Goh 等
- 在 VLA 模型中引入循环联想记忆，保留 episode 级历史信息，直接针对历史依赖型操控任务，是具身智能走向长时记忆的关键模块。

---

## 三、研究趋势信号

今日投稿呈现出三个值得关注的"协同信号"：**首先，"可编辑世界模型"正在取代"观测预测"成为智能体研究的主流范式**（#13、#14、#43 同时出现），反映社区对高熵执行反馈处理能力的共识转向；**其次，训练后量化（PTQ）从"经验调参"走向"代价预测驱动"**——#36、#38、#25 三篇分别从分布漂移预测、层敏感度、卷积张量重塑切入，预示 PTQ 将走向"黑盒化→可预测化"；**第三，多模态研究向"小而专用"回归**，Mizar（159M）、MemBodied、Audio-LM 等模型均在百兆到亿级参数量级专攻单一垂直能力，体现出"通用与专用重新分工"的结构性调整。

---

## 四、值得精读

1. **[Agent-Editing World Model](http://arxiv.org/abs/2609.28416v1)** — 智能体范式的根本性转变：从"预测观测"走向"编辑状态"，对所有 LLM Agent 研究者都需理解的新基线。
2. **[Shutdown Sabotage Propensities in Multi-Agent Systems](http://arxiv.org/abs/2609.28274v1)** — AI 安全领域稀缺的"多智能体+关机"实证实验，结论可能直接影响后续对齐研究方向。
3. **[When and Where to Trust the Teacher](http://arxiv.org/abs/2609.28385v1)** — 将 GRPO 与在线蒸馏在理论上统一，是 RLVR 数学推理训练目前最系统的整合视角，值得训练算法研究者精读。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*