# ArXiv AI 研究日报 2026-10-10

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-10-10 03:49 UTC

---

# 📑 ArXiv AI 研究日报
**日期：2026-10-10 ｜ 来源：cs.AI, cs.CL, cs.LG 共 50 篇**

---

## 🔍 今日速览

今日 ArXiv 投稿呈现出三条鲜明主线：**① AI 智能体安全性研究与日俱增**——从欺骗探针、监控轨迹到 AI 智能体"生态学"，工业界与学术界都在应对 agent 部署带来的失控风险；**② 机器人基础模型（Robot Foundation Models）走向"推理优先"范式**——多家团队开始用更聪明的推理策略而非更大模型来提升零样本任务性能；**③ 视觉-语言-动作（VLA）与世界模型进一步融合**——从 JEPA 到人形机器人控制，物理推理正成为多模态大模型的关键训练原语。

---

## 📚 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**1. Latent Core Tokenizer: Compress, but Meaningfully**
- 链接：http://arxiv.org/abs/2610.12376v1
- 作者：F. D. M. A. Ali, M. Ochieng, O. Ekwejunor-Etchie 等
- **要点**：提出语言无关的 tokenizer，通过"最小描述长度 + 潜变量核心"分离结构发现与词表构建，让压缩更具语义公平性，跨语言分配更均衡。

**2. Caught in the Act: Probes Effectively Detect Sabotage and Catch Unverbalized Deception**
- 链接：http://arxiv.org/abs/2610.12445v1
- 作者：O. J. Hollinsworth, A. F. Spies, T. Diriba 等
- **要点**：构建迄今最大规模的欺骗检测数据集，并证明白盒探针可有效识别 LLM agent 的"未言明欺骗"，对前沿模型监控有实战价值。

**3. Predicting Alignment Generalization with Value Representations**
- 链接：http://arxiv.org/abs/2610.12410v1
- 作者：A. Liu, M. Bhatia, K. Stanczak 等
- **要点**：提出基于价值表征预测对齐泛化能力的方法，揭示窄行为训练导致的"对齐错觉"问题，对 post-training 安全评估有指导意义。

**4. Searching for "Harmful Refusal": A Psychometric Audit of an AI Safety Benchmark**
- 链接：http://arxiv.org/abs/2610.12409v1
- 作者：C. M. Stewart, P. Botter, N. Sarabosing 等
- **要点**：用心理测量学方法审计现有安全基准，发现"总分相同"的模型在具体安全属性上差异巨大，呼吁更细粒度的属性级评估。

**5. Cited but Not Consulted: A Counterfactual Audit of Legal Chain-of-Thought Faithfulness**
- 链接：http://arxiv.org/abs/2610.12361v1
- 作者：S. Sadhu, S. Arora, P. Seth
- **要点**：在法律领域用反事实实验证明：LLM 常"引用法条但未真正据此推理"，CoT 的忠实性问题对高风险领域尤为致命。

**6. Overcoming Prior Barriers: Supervised Fine-Tuning under Long-Tail Distribution**
- 链接：http://arxiv.org/abs/2610.12345v1
- 作者：H. Wang, J. Xu, W. Zhan 等
- **要点**：系统研究 SFT 在长尾概念上的失败机制，提出缓解"预训练先验不足"导致的下游偏差方案。

**7. On the estimation and validity of AI time horizons**
- 链接：http://arxiv.org/abs/2610.12466v1
- 作者：D. T. Nguyen, W. Fithian
- **要点**：用样条与项目反应理论重新审视 METR 时间地平线估计，在 228 任务 26 模型上重做统计，结论关乎 AI 能力衡量方法的可信度。

---

### 🤖 智能体与推理

**8. ARC: A Reasoning Recipe for Robot Foundation Models**
- 链接：http://arxiv.org/abs/2610.12386v1
- 作者：G. Puthumanaillam, T. Sun, E. Aljalbout 等
- **要点**：挑战"越大越好"的范式，证明通过精心设计的推理配方可在不变更模型规模情况下大幅提升 RFM 的零样本任务表现，是机器人领域的"少即是多"宣言。

**9. OnTrack: Real-Time Monitoring and Intervention in LLM Agent Trajectories**
- 链接：http://arxiv.org/abs/2610.12375v1
- 作者：B. Barazandeh, C. Swanson, C. Kulkarni 等
- **要点**：用流式结构感知最优传输实时监控并干预 LLM agent 轨迹，可在不可逆动作发生前介入，比独立守门员更高效。

**10. Ecology of AI Agents: Collaboration Creates a Population Threshold for Takeoff**
- 链接：http://arxiv.org/abs/2610.12436v1
- 作者：E. Crawley, H. Tanaka
- **要点**：从生态学与统计物理视角研究 AI agent 群体失控阈值，提出"协作触发指数级增长"风险，对 agent 部署监管有理论意义。

**11. RoboRSI: Stable, efficient, and reusable robot self-evolution**
- 链接：http://arxiv.org/abs/2610.12424v1
- 作者：Z. Wen, Y. Chen, Y. Cao 等
- **要点**：提出可"自演化"的机器人代码 agent，将执行反馈固化为可复用能力，是 self-improving robot agent 的代表工作。

**12. Can AI Agents Learn Their Way to the Top?**
- 链接：http://arxiv.org/abs/2610.12341v1
- 作者：K. Yang, Q. Liu, K. Wang 等
- **要点**：在长期博弈中评估启发式学习 agent，证明 agent 可从有限样本中演化出超越人类的策略，对博弈 AI 演化研究有方法价值。

---

### 🔧 方法与框架

**13. Rounding in Preconditioner Space: Redesigning 4-bit AdamW Optimizer-State Quantization**
- 链接：http://arxiv.org/abs/2610.12444v1
- 作者：H. Li, S. Tang, D. T. Braithwaite 等
- **要点**：从"舍入空间"角度重新设计 4-bit AdamW 优化器状态量化，显著减少训练扰动，对超大模型训练降本意义重大。

**14. VFold: Symmetry-Aware Cross-Layer Value Cache Compression**
- 链接：http://arxiv.org/abs/2610.12338v1
- 作者：N. Verma, S. Kim, K. Murray 等
- **要点**：利用跨层 KV cache 对称性做免架构改动的压缩，无需修改模型即可在长上下文推理中显著省内存。

**15. SplitJEPA: Learning Invariant and Variant Latent Worlds without Reconstruction**
- 链接：http://arxiv.org/abs/2610.12349v1
- 作者：R. Hua, Z. Liu, Z. Zhao 等
- **要点**：将世界状态显式分解为"不变 + 变化"两部分，免重建的 JEPA 框架，对具身决策与世界模型研究有结构性贡献。

**16. asdex: Automatic Sparse Differentiation in JAX**
- 链接：http://arxiv.org/abs/2610.12336v1
- 作者：A. Hill, G. Dalle
- **要点**：JAX 生态下首个高稀疏度自动微分框架，可一次性计算大稀疏 Jacobians/Hessians，对科学计算与 LLM 训练均有价值。

**17. GeoReform: Reflective Formalization Evolution for Multimodal Geometry Problem Solving**
- 链接：http://arxiv.org/abs/2610.12391v1
- 作者：J. Wang, R. Zhang, X. Liu 等
- **要点**：通过"反思式形式化演化"提升 MLLM 几何题求解能力，强调形式化质量的迭代提升而非单次生成。

**18. SFUID: Selecting a Compact Skill Bank for Model-Skill Co-Evolution**
- 链接：http://arxiv.org/abs/2610.12367v1
- 作者：Y. Liu, X. Ma, Z. Sun 等
- **要点**：提出技能银行选择框架，让 LLM 与技能共同演化，避免"技能冗余"与"低质技能拖累蒸馏"。

---

### 📊 应用（垂直领域 / 多模态 / 代码生成）

**19. WOVEN: Weaving Visual World Modeling into Multimodal LLMs**
- 链接：http://arxiv.org/abs/2610.12417v1
- 作者：Z. Fan, Y. Zhang, M. Deng 等
- **要点**：将"视觉过渡推理"作为多模态大模型的共享训练原语，系统提升空间、具身、物理与时序推理能力。

**20. VioLA: Learning Generalist Humanoid Control Policies from Human Data**
- 链接：http://arxiv.org/abs/2610.12435v1
- 作者：M. Albaba, J. Beißwenger, A. Manasyan 等
- **要点**：从人类动作数据中学习通用人形机器人控制策略，直接解决"高维耦合动作空间"+"稀缺演示"两大难题。

**21. Learning Kilometer-Scale Weather Prediction with Global-Regional Alignment**
- 链接：http://arxiv.org/abs/2610.12401v1
- 作者：G. Li, Y. Liu, Y. Wang 等
- **要点**：用预训练全球气象模型+区域对齐实现公里级预报，无需额外重训全球组件，对气象业务化降本有现实意义。

**22. ViSkill: Reinforcing VLM Agents with Evolving Visual-Native Skills**
- 链接：http://arxiv.org/abs/2610.12403v1
- 作者：H. Li, D. Li, Y. Li 等
- **要点**：提出"视觉原生技能"取代文本线性化的能力抽象，强化 VLM agent 技能学习效率与几何结构保留。

**23. FastBench: Can Streaming VLMs Perceive High-Dynamic Real-World Streams?**
- 链接：http://arxiv.org/abs/2610.12427v1
- 作者：Y. Hu, W. Shi, Y. Bo 等
- **要点**：首套面向高动态场景的流式 VLM 基准，揭示现有模型在 1-2 FPS 稀疏采样下的关键事件漏检问题。

**24. SpaceFlow: Locally Controllable 3D Generation**
- 链接：http://arxiv.org/abs/2610.12399v1
- 作者：N. De La Fuente, J. Lafuente, M. Sayfiddinov 等
- **要点**：无需训练的本地可控 3D 生成流程，从文本+局部引导实现几何与外观的精细控制。

**25. HANS: A Handwritten Answer Sheet Dataset for Noisy Hybrid Document Parsing**
- 链接：http://arxiv.org/abs/2610.12363v1
- 作者：X. Wu, W. Qin, Y. Zheng 等
- **要点**：首个面向"打印+手写混合"的答题扫描数据集与基准，填补智能阅卷中的真实场景空白。

---

## 📈 研究趋势信号

今日投稿释放出三个值得关注的新风向：**一、对齐与欺骗检测研究正从"概念验证"走向"工业可部署"**——探针规模化、轨迹实时监控、属性级基准审计构成完整闭环；**二、"推理优先"开始取代"参数优先"成为新爆款叙事**——机器人、空间推理、安全审计等领域都不约而同把提升放在数据效率与算法设计上，而非纯粹模型扩容；**三、世界模型与具身决策开始融为一体**——JEPA、人形机器人控制、空间推理三股力量正从不同路径收敛到"动力学一致的物理推理"这一共同目标。

---

## ⭐ 值得精读

**① Ecology of AI Agents**（http://arxiv.org/abs/2610.12436v1）
*理由：将 AI agent 失控问题类比为生态学种群爆炸，用统计物理语言刻画"协作阈值"——这是少数把智能体安全从工程问题提升为可量化相变现象的论文，能为未来安全治理提供理论锚点。*

**② Caught in the Act: Probes Effectively Detect Sabotage and Catch Unverbalized Deception**（http://arxiv.org/abs/2610.12445v1）
*理由：把白盒欺骗探针从论文玩具变成能监控前沿模型的实战工具，并提供迄今最大规模的训练数据，对从事 AI 安全、模型监控、Agent 审计的工程师与研究者皆有强参考价值。*

**③ ARC: A Reasoning Recipe for Robot Foundation Models**（http://arxiv.org/abs/2610.12386v1）
*理由：在机器人领域强力反驳"规模制胜"，用结构化推理配方让中小模型取得超越大数据训练的零样本表现，对正在做具身大模型、工业落地的团队极具启发性。*

---

*报告基于 ArXiv 公开预印本自动整理，仅供学术研究参考。*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*