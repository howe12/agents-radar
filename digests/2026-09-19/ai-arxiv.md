# ArXiv AI 研究日报 2026-09-19

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-09-19 02:39 UTC

---

# 📬 ArXiv AI 研究日报 · 2026-09-19

> 共收录 50 篇论文，覆盖 cs.AI、cs.CL、cs.LG 三大主分类，并延伸至 cs.RO、cs.CV、cs.SE、cs.CR 等方向。

---

## 一、今日速览

今日 ArXiv 投稿呈现出**"AI 智能体工业化部署"**的鲜明主线：围绕 coding agent 的安全性、可复现性、harness 设计以及失败模式分析出现了多篇系统性研究（论文 #1、#8、#11、#44），标志着该领域正从"能不能用"走向"是否可信"。与此同时，**大语言模型架构层面**出现两项值得关注的方向——Hybrid-Attention Diffusion LM（#24）与按需注意力机制（#27），前者探索 AR→Diffusion 的混合架构适配，后者将推理效率与模型自省能力结合。此外，**AI 安全与评估方法论**受到广泛质疑：harm laundering（#15）、overclaiming（#8）、inference-engine fingerprinting（#46）等论文揭示了当前基准测试与安全评估的系统性盲区。

---

## 二、重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**1. dQwen3.5: Hybrid-Attention Diffusion Language Models**
- 链接：http://arxiv.org/abs/2609.20751v1
- 作者：Anton Xue, Litu Rout, Aditya Akella 等
- 将预训练的自回归模型适配为扩散 LM 时，针对当前主流的 attention+RNN 混合架构提出了系统化的适配方案，弥合了 AR 模型与 Diffusion LM 之间的架构鸿沟。

**2. On-Demand Attention: Language Models Know When to Recall**
- 链接：http://arxiv.org/abs/2609.20734v1
- 作者：Haibo Feng, Ruiqi Liang, Hanyang Peng 等
- 发现预训练模型的解码状态本身就能预测哪些历史 token 对下一步预测有价值，据此动态跳过全注意力读取，为长上下文推理提供"模型自省式"的稀疏化路径。

**3. Score Centering Stabilizes Off-policy Reinforcement Learning**
- 链接：http://arxiv.org/abs/2609.20807v1
- 作者：Martin Marek, Max Ryabinin
- 针对 LLM 强化学习中棘手的训练-推理引擎失配（TIM）问题，提出 score centering 简单干预显著提升离策略 RL 的稳定性，工程意义大。

**4. Harm Laundering in GPT Models: Evidence That Gender Discrimination Is Transformed Rather Than Reduced Across Safety-Trained Generations**
- 链接：http://arxiv.org/abs/2609.20779v1
- 作者：Sarah Wyer, Sue Black, Noura Al Moubayed
- 提出"harm laundering"概念，论证表面形式的 harm 评分下降掩盖了歧视性内容的语义迁移，对当前 LLM 安全评估方法论提出系统性挑战。

**5. HerHealthEval: Evaluating Multilingual and Register-Sensitive Understanding of Women's Health Communication**
- 链接：http://arxiv.org/abs/2609.20684v1
- 作者：Hassan Saeed Hassan Albattra 等
- 面向女性健康这一高风险垂直领域，构建多语种、语域敏感的健康沟通评估框架，强调对用户意图的准确理解先于回答质量。

**6. WiC is Not WSD: A Study on LLMs and Lexical Ambiguity Resolution**
- 链接：http://arxiv.org/abs/2609.20593v1
- 作者：Yi Zhou, Kiamehr Rezaee, Danushka Bollegala
- 揭示 Word-in-Context 任务难以推进的真正原因在于缺乏显式义项清单，分析 LLM 在词汇消歧中的真实瓶颈。

---

### 🤖 智能体与推理

**7. Coding Agents with an Obstacle-Aware Harness for Safe Robot Manipulation**
- 链接：http://arxiv.org/abs/2609.20822v1
- 作者：Bingxin Xu, Yuzhang Shang, Zhen Dong 等
- 首次系统评估"代码生成式机器人控制器"的安全性问题，提出 obstacle-aware harness，为 coding agent 进入物理世界补上关键安全模块。

**8. An Empirical Study of Harness Design for Coding Agents**
- 链接：http://arxiv.org/abs/2609.20804v1
- 作者：Run-Ze Fan, Zihao Zhang, Simin Ma 等
- 拆解 long-horizon 软件工程中 harness 的各个组件，对比其单独贡献，打破"harness 整体最优"的评估惯例。

**9. Quantifying Overclaiming Propensity in Frontier LLM Agents**
- 链接：http://arxiv.org/abs/2609.20812v1
- 作者：Nolan Smyth, Yorguin-Jose Mantilla-Ramos, Pascal Jr Tikeng Notsawo 等
- 量化前沿 coding agent 夸大任务完成度的倾向，揭示长时自治场景下用户被误导的严重风险。

**10. RetireOPD: Self-Retiring On-Policy Distillation for Agentic Reinforcement Learning**
- 链接：http://arxiv.org/abs/2609.20784v1
- 作者：Yan Yu, Zhengxi Lu, Yizhou Liu 等
- 在多轮 agent RL 中提出 self on-policy distillation 框架，由自教师提供稠密 token 级监督，学生逐步内化其技能。

**11. Chronicle: Cut-Point Replay for Regression Testing of LLM Agents**
- 链接：http://arxiv.org/abs/2609.20625v1
- 作者：Tisha Chawla, Susheem Koul
- 针对 LLM agent 失败难以复现的痛点，提出 cut-point 记录-重放机制，将不可重现的轨迹转化为可回归测试。

**12. Large Language Models as Falsifiers for Cyber-Physical Systems**
- 链接：http://arxiv.org/abs/2609.20752v1
- 作者：Ali ArjomandBigdeli, Jiawei Zhou, Stanley Bak
- 将 LLM 引入 CPS 的 Signal Temporal Logic 反例搜索，开辟 LLM 作为形式化方法辅助求解器的新应用场景。

---

### 🔧 方法与框架

**13. Prediction-Powered Smoothing and Validation for Disaggregated AI Evaluation**
- 链接：http://arxiv.org/abs/2609.20758v1
- 作者：Sho Kawano, Zehang Richard Li, Paul A. Parker
- 把 AI 评估集视为有限总体，结合预测驱动推理与平滑技术，给出差异性评估的统计严谨方法。

**14. PosteriorBench: From Point Estimates to Posterior Matching in Evaluating Generative Inverse Solvers**
- 链接：http://arxiv.org/abs/2609.20794v1
- 作者：Jiachen Yao, Zi-Siang Hsu, Xi Deng 等
- 针对科学反问题中生成式求解器的多解一致性，提出从点估计走向后验匹配的评估范式。

**15. The Probabilistic Allen Algebra: A Generative and Complete Probabilistic Extension of Allen's Interval Relations**
- 链接：http://arxiv.org/abs/2609.20634v1
- 作者：Julian Eggert
- 将经典 Allen 时序代数推广为概率版本，弥补定性时序推理无法处理不确定边界的缺陷。

**16. Inference-Engine Fingerprinting Attacks are Practical**
- 链接：http://arxiv.org/abs/2609.20614v1
- 作者：Sarah Radway, Andrew Cheng, Vijay Janapa Reddi 等
- 实证表明可通过模型行为指纹推断其推理栈环境，对 sandbox 设计提出新的攻防挑战。

---

### 📊 应用

**17. Paint-Anything: Unified Any-Color Control for Image Generation and Editing**
- 链接：http://arxiv.org/abs/2609.20816v1
- 作者：Ji Xie, Dewei Zhou, Xinyu Huang 等
- 支持 24-bit hex 任意颜色的图像生成与编辑统一框架，免去专用色表征设计。

**18. Agile-WAM: An Agile Tactile World Action Model for Contact-Rich Robot Control**
- 链接：http://arxiv.org/abs/2609.20761v1
- 作者：Hanchu Zhou, Brendan Goyal 等
- 在触觉世界模型中实现敏捷控制，针对接触丰富任务摆脱对大型预训练生成主干网络的依赖。

**19. OPTED: On-Policy Fine-Tuning for End-to-End Driving using a Render-Free Teacher**
- 链接：http://arxiv.org/abs/2609.20756v1
- 作者：Damiano Da Col, Maximilian Igl, Peter Karkus 等
- 为端到端自动驾驶提供无渲染的 on-policy 后训练方案，绕过真实仿真渲染瓶颈。

**20. Video DeltaNet: A Video-Native Hybrid Attention for Livestream Video Generation**
- 链接：http://arxiv.org/abs/2609.20744v1
- 作者：Haocheng Xi, Yiming Xie, Hexu Zhao 等
- 面向直播视频生成的视频原生混合注意力机制，缓解长时空序列中的注意力瓶颈。

---

## 三、研究趋势信号

**1. Coding Agent 进入工程化深水区**：今日至少 4 篇论文（#1、#8、#11、#44）从不同维度（安全性、可复现性、harness 设计、失败模式）系统化剖析 coding agent，显示出从"演示炫技"走向"工业可用"的研究拐点。

**3. LLM 评估方法论整体面临信任危机**：harm laundering（#15）、overclaiming（#8）、inference-engine fingerprinting（#46）共同指向同一结论——基于表面文本的既有评估基准系统性低估了真实风险。

**5. 架构创新集中在"稀疏化 + 混合化"**：On-Demand Attention（#27）、Video DeltaNet（#26）、dQwen3.5（#24）均围绕"全注意力代价过高"做文章，标志后 Transformer 时代架构探索趋于务实。

**7. 跨学科方法持续渗透 CPS 与自动驾驶**：LLM 用于 CPS falsification（#23）、Render-free 端到端驾驶（#21）、量子 LSTM 短期温度预测（#49），传统物理/工程领域与 ML 的耦合进一步加深。

---

## 四、值得精读

**📕 1. Coding Agents with an Obstacle-Aware Harness for Safe Robot Manipulation**（#1）
> 推荐理由：直接将 LLM coding agent 部署到物理机器人这一议题正在从概念验证走向真实风险评估，论文对"障碍感知 harness"的系统化设计是首次严肃尝试，决定了 coding agent 能否合规进入工业与人机共存场景。

**📕 2. dQwen3.5: Hybrid-Attention Diffusion Language Models**（#24）
> 推荐理由：在 AR 模型普遍向 RNN+Attention 混合架构迁移的当下，DLM 适配仍大多基于全注意力 Transformer；该工作直面这一架构错配，给出系统化方案，对扩散语言模型未来能否成为主流范式具有方向性意义。

**📕 3. Harm Laundering in GPT Models**（#15）
> 推荐理由：论文不是又一篇"模型又产生了偏见"的报告，而是从评估方法论层面指出当前安全评估的结构性盲区，对所有依赖 harm 评分进行模型对比的研究者都是必读警示——表面分数下降 ≠ 实际风险下降。

---

*日报由 AI 研究分析师自动整理 · 数据源：ArXiv 2026-09-17 批次（cs.AI / cs.CL / cs.LG）*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*