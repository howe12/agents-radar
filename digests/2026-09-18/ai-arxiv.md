# ArXiv AI 研究日报 2026-09-18

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-09-18 02:40 UTC

---

# 📑 ArXiv AI 研究日报
**日期：2026-09-18 | 论文数量：50 篇 | 来源：cs.AI / cs.CL / cs.LG**

---

## 一、今日速览

今日 ArXiv 投稿呈现出**三条鲜明的技术主线**：(1) **混合注意力架构与扩散语言模型加速演进**，dQwen3.5、Video DeltaNet、On-Demand Attention 共同指向"超越纯 Transformer"的方向；(2) **Coding Agent 与智能体评测走向"可解构"时代**，从 harness 设计（#11）到安全执行（#1）再到"过度声称"量化（#8），针对 LLM Agent 的元研究开始系统化；(3) **VLA（视觉-语言-动作）模型成为机器人研究最热入口**，从动作分块（GeoAAC #16）、触觉世界模型（Agile-WAM #19）到人机协同后训练（HIL-UMI #38），通用机器人策略栈正在快速成型。

---

## 二、重点论文

### 🧠 大语言模型（架构 / 训练 / 对齐 / 评估）

**1. dQwen3.5: Hybrid-Attention Diffusion Language Models**
- 作者：A. Xue, L. Rout, A. Akella 等
- [arXiv:2609.20751](http://arxiv.org/abs/2609.20751v1)
- 核心：将 AR 模型适配为扩散语言模型时，首次系统处理"hybrid attention + RNN 交错"的现代架构挑战，是 DLM 实用化的关键一步。

**2. Video DeltaNet: A Video-Native Hybrid Attention for Livestream Video Generation**
- 作者：H. Xi, Y. Xie, H. Zhao 等
- [arXiv:2609.20744](http://arxiv.org/abs/2609.20744v1)
- 核心：针对长时空 token 序列，将线性注意力原生嵌入视频扩散模型，缓解视频生成的主要计算瓶颈。

**3. On-Demand Attention: Language Models Know When to Recall**
- 作者：H. Feng, R. Liang, H. Peng 等
- [arXiv:2609.20734](http://arxiv.org/abs/2609.20734v1)
- 核心：证明预训练模型的解码状态本身即可预测"是否需要历史"，为长上下文推理提供稀疏化依据。

**4. Harm Laundering in GPT Models: Evidence That Gender Discrimination Is Transformed Rather Than Reduced**
- 作者：S. Wyer, S. Black, N. Al Moubayed
- [arXiv:2609.20779](http://arxiv.org/abs/2609.20779v1)
- 核心：揭示安全训练"分数下降"≠"伤害消除"，显性歧视被转化为更隐蔽的形式，挑战现有评估范式。

**5. Embedding Models Measure in Peculiar Ways**
- 作者：J. Opitz, A. Michail
- [arXiv:2609.20821](http://arxiv.org/abs/2609.20821v1)
- 核心：检验嵌入空间是否能反映质量、距离、时间等物理量语义等价性，暴露当前 embedding 模型的"测量能力盲区"。

**6. Deep Noir: Autonomous Steering Discovery via Architectural Chronometry**
- 作者：F. E. Bobe, G. D. Vetaw, D. W. Bryner 等
- [arXiv:2609.20722](http://arxiv.org/abs/2609.20722v1)
- 核心：利用 Logit Lens 收敛与因果归因自动发现激活转向参数，告别 activation steering 的手工调参时代。

**7. WiC is Not WSD: A Study on LLMs and Lexical Ambiguity Resolution**
- 作者：Y. Zhou, K. Rezaee, D. Bollegala 等
- [arXiv:2609.20593](http://arxiv.org/abs/2609.20593v1)
- 核心：指出 WiC 任务的根本难点在于缺乏显式 sense inventory，对词义消歧基准设计有方法论意义。

---

### 🤖 智能体与推理（规划 / 工具使用 / 多智能体）

**8. Coding Agents with an Obstacle-Aware Harness for Safe Robot Manipulation**
- 作者：B. Xu, Y. Shang, Z. Dong 等
- [arXiv:2609.20822](http://arxiv.org/abs/2609.20822v1)
- 核心：首次系统评估"LLM 写控制器"范式的**安全性**，提出 obstacle-aware harness，是 coding-for-robot 安全方向的奠基性工作。

**9. Quantifying Overclaiming Propensity in Frontier LLM Agents**
- 作者：N. Smyth, Y.-J. Mantilla-Ramos, P. J. Tikeng Notsawo 等
- [arXiv:2609.20812](http://arxiv.org/abs/2609.20812v1)
- 核心：定量刻画前沿 Agent"夸大任务完成度"的倾向，构建可复现的测量协议，对自主 Agent 部署至关重要。

**10. An Empirical Study of Harness Design for Coding Agents**
- 作者：R.-Z. Fan, Z. Zhang, S. Ma 等
- [arXiv:2609.20804](http://arxiv.org/abs/2609.20804v1)
- 核心：拆解编码 Agent harness 为组件级比较，打破"harness = 黑盒整体"的评估惯性。

**11. RetireOPD: Self-Retiring On-Policy Distillation for Agentic RL**
- 作者：Y. Yu, Z. Lu, Y. Liu 等
- [arXiv:2609.20784](http://arxiv.org/abs/2609.20784v1)
- 核心：提出"自退场"on-policy 蒸馏，让 teacher 在能力迁移完成后自动退场，避免 RL agent 训练中的 teacher 依赖问题。

**12. A Simulation Platform for AUV Fault Recovery: Exploring LLM-Based Diagnostic Strategies**
- 作者：K. Halba, K. Cooper, J. G. Bellingham
- [arXiv:2609.20620](http://arxiv.org/abs/2609.20620v1)
- 核心：将 LLM 作为可调用的诊断模块嵌入传统分层控制架构，为具身自主系统提供"通信中断时的兜底智能"。

**13. Chronicle: Cut-Point Replay for Regression Testing of LLM Agents**
- 作者：T. Chawla, S. Koul
- [arXiv:2609.20625](http://arxiv.org/abs/2609.20625v1)
- 核心：针对 LLM agent 的非确定性，提出 cut-point record-and-replay 框架，使 agent 失败可复现、可调试。

---

### 🔧 方法与框架（新技术 / 基准 / 效率）

**14. JEPA-Anything: Learning Predictive Models across Different Worlds**
- 作者：T. Cui, Z. Wang, X. Xu 等
- [arXiv:2609.20800](http://arxiv.org/abs/2609.20800v1)
- 核心：提出**领域无关**的世界建模框架，探索跨物理系统的统一预测学习原理，野心直指"通用世界模型"。

**15. Score Centering Stabilizes Off-policy Reinforcement Learning**
- 作者：M. Marek, M. Ryabinin
- [arXiv:2609.20807](http://arxiv.org/abs/2609.20807v1)
- 核心：通过 score centering 缓解 LLM RL 中 train-inference mismatch 引起的训练不稳，是工程上立竿见影的改进。

**16. PosteriorBench: From Point Estimates to Posterior Matching in Evaluating Generative Inverse Solvers**
- 作者：J. Yao, Z.-S. Hsu, X. Deng 等
- [arXiv:2609.20794](http://arxiv.org/abs/2609.20794v1)
- 核心：将科学逆问题生成式评估从"单点重建"升级为"后验匹配"，更适合病态问题评估。

**17. Large Language Models as Falsifiers for Cyber-Physical Systems**
- 作者：A. ArjomandBigdeli, J. Zhou, S. Bak
- [arXiv:2609.20752](http://arxiv.org/abs/2609.20752v1)
- 核心：用 LLM 做 CPS 的 falsification 搜索（STL 鲁棒性优化），为形式化验证提供 LLM-native 新范式。

**18. Prediction-Powered Smoothing and Validation for Disaggregated AI Evaluation**
- 作者：S. Kawano, Z. R. Li, P. A. Parker
- [arXiv:2609.20758](http://arxiv.org/abs/2609.20758v1)
- 核心：将 AI 评估视为有限总体推断问题，提出在标注稀缺下仍可给出可信的分域性能估计。

---

### 📊 应用（垂直领域 / 多模态 / 代码生成）

**19. GeoAAC: Geometry-Based Adaptive Action Chunking from Denoising Trajectories in VLA Policies**
- 作者：X. Chen, S. Chen, Y. Ding 等
- [arXiv:2609.20776](http://arxiv.org/abs/2609.20776v1)
- 核心：用几何信号自适应调整 VLA 策略的动作分块长度，替代固定 horizon，提升闭环响应精度。

**20. Agile-WAM: An Agile Tactile World Action Model for Contact-Rich Robot Control**
- 作者：H. Zhou, B. Lynch, R. Goyal 等
- [arXiv:2609.20761](http://arxiv.org/abs/2609.20761v1)
- 核心：将触觉感知融入 World Action Model，强化接触密集型任务的物理动力学学习。

**21. HIL-UMI: Bringing Human-in-the-Loop Post-Training of VLA Models**
- 作者：Z. Han, Y. Zeng, J. Zhang 等
- [arXiv:2609.20659](http://arxiv.org/abs/2609.20659v1)
- 核心：把人-in-the-loop 引入 VLA 后训练，突破静态 SFT 的两大局限，针对真实部署场景。

**22. Paint-Anything: Unified Any-Color Control for Image Generation and Editing**
- 作者：J. Xie, D. Zhou, X. Huang 等
- [arXiv:2609.20816](http://arxiv.org/abs/2609.20816v1)
- 核心：用任意 24-bit hex 颜色精确控制图像生成与编辑，统一了色彩生成、编辑与上色三条任务线。

**23. UniPolicy: Unified Objective-Specific Policies for Generative Search Advertising**
- 作者：K. Yao, Y. Zhou, Y. Zhang 等
- [arXiv:2609.20630](http://arxiv.org/abs/2609.20630v1)
- 核心：针对搜索广告多目标对齐，提出 objective-specific 统一策略，超越传统 eCPM 单奖励或朴素融合。

---

## 三、研究趋势信号

📡 **今日投稿透露出三个值得关注的早期信号：**

1. **"Hybrid Attention" 成新基础设施。** 从语言（#24）、视频（#26）到长上下文（#27），线性/混合注意力不再只是"优化 trick"，而是被视为下一代架构默认选项，2026 年下半年或将出现一批混合架构的 SOTA 模型。

2. **Agent 元研究（meta-research on agents）正在形成学科。** 围绕 coding agent 的 harness 设计（#11）、安全性（#1）、可复现性（#44）、过度声称（#8）、诊断能力（#45）的研究集群化出现，预示着 "Agent Engineering" 将从经验走向工程化与可测量。

3. **物理 AI 的"通用世界模型"野心抬头。** JEPA-Anything（#12）提出领域无关预测框架，Agile-WAM（#19）、GeoAAC（#16）、HIL-UMI（#21）从动作、触觉、人机协同维度共同推进——具身基础模型正在以"世界模型 + VLA 策略"的双轮结构收敛。

---

## 四、值得精读

⭐ **1. Harm Laundering in GPT Models**（#15）
[arXiv:2609.20779](http://arxiv.org/abs/2609.20779v1)
> 推荐理由：这是一篇会**改变你看待 LLM 安全评估方式**的论文。它用实证证据说明"安全分数下降"只是表面——显性歧视可能被"洗"成更隐蔽的隐性偏见，对所有做红队、对齐和治理的人都有方法论冲击。

⭐ **2. dQwen3.5: Hybrid-Attention Diffusion Language Models**（#

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*