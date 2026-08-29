# ArXiv AI 研究日报 2026-08-29

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-08-29 05:09 UTC

---

# 📘 ArXiv AI 研究日报
**日期：2026-08-29 · 共 50 篇新论文（cs.AI / cs.CL / cs.LG）**

---

## 🔬 今日速览

今日投稿呈现三条主线：第一，**推理时扩展**持续火热，从 CritICL 的弱-强泛化到 TTPO 的无标签策略优化，研究者正试图摆脱对外部验证器与 ground-truth 的依赖；第二，**智能体工程化**走向成熟，从技能持久化（WikiSkill）、经验驱动红队（RedEvoAgent）到 agentic 数据质量的 ACE 视角，整套链路开始体系化；第三，**低成本与高效率**成为重要诉求，Puro-2B 在 RTX 5090 上完成 1.5B 预训练、LeVJEPA 抛弃启发式做高效视频预训练，标志着"高性价比 + 可复现"成为新的研究价值锚点。

---

## 🧠 大语言模型（架构 · 训练 · 对齐 · 评估）

### 1. CritICL: Inference-Time Weak-to-Strong Generalization from Small LM Failure Modes
🔗 http://arxiv.org/abs/2608.27455v1
**作者：** Yufan Wu, Yinghui He, Zhengyi Hu 等
**一句话：** 提出不依赖重复采样或外部验证器的推理时框架，让大模型从小模型的失败模式中学习，是 weak-to-strong 范式的一次实用化推进。

### 2. TTPO: Test-Time Policy Optimization
🔗 http://arxiv.org/abs/2608.27448v1
**作者：** Aozhe Wang, Zhengxi Lu, Jianze Wang 等
**一句话：** 用模型自身输出去替代 ground-truth label，首次把测试时训练（TTS）引入 RLVR/OPSD 流程，摆脱对监督信号的依赖。

### 3. Puro-2B: Poor Lab's Qwen2-1.5B Trained on RTX 5090 within $5090
🔗 http://arxiv.org/abs/2608.27370v1
**作者：** Kairong Luo, Jiarui Cui, Yaorui Yin 等
**一句话：** 在单卡 RTX 5090、$5090 预算内复现 Qwen2-1.5B 预训练，为预算受限的学术与开源社区提供了一份完整的硬件感知训练配方。

### 4. Boosting LLM Exploration via Weak-Model Guidance in RLVR
🔗 http://arxiv.org/abs/2608.27420v1
**作者：** Xingyu Shen, Huishuai Zhang, Peng Li 等
**一句话：** 通过弱模型信号引导 RLVR 训练中的策略熵，缓解 RL 后 reasoning coverage 退化问题，对 pass@k 提升尤为关键。

### 5. Understanding Evolution Strategies for LLM Reasoning
🔗 http://arxiv.org/abs/2608.27351v1
**作者：** Yunpeng Ba, Zhi Zheng, Yue Xie 等
**一句话：** 系统分析进化策略（ES）在 LLM 推理后训练中的优化行为，论证其相对 GRPO 在推理覆盖度上的优势及适用边界。

### 6. Consolidating RLVR Capabilities Across Domains
🔗 http://arxiv.org/abs/2608.27409v1
**作者：** Siye Wu, Kai Yang, Yuchen Cai 等
**一句话：** 提出三种跨领域 RLVR 能力融合范式，系统比较如何合并多个已训练领域专家，为多能力 LLM 提供复用工艺。

### 7. Stochastic Estimation of Transduced Language Models
🔗 http://arxiv.org/abs/2608.27428v1
**作者：** Vésteinn Snæbjarnarson 等
**一句话：** 用随机估计方法高效计算 transduced LM 的目标前缀概率，缓解了 TLM 概率计算中的求和爆炸问题。

---

## 🤖 智能体与推理（规划 · 工具使用 · CoT · 安全）

### 8. WikiSkill: Compiling Agent Experience into Persistent Knowledge for Skill Evolution
🔗 http://arxiv.org/abs/2608.27454v1
**作者：** Liyan Tang, Cyrus Rashtchian, Chun-Sung Ferng 等
**一句话：** 将智能体经验编译为持久化的"技能"知识，是 agent self-improvement 闭环中缺少的一块拼图。

### 9. RedEvoAgent: Automatic Red-Teaming Agent with Experience-Driven Skill Evolution
🔗 http://arxiv.org/abs/2608.27439v1
**作者：** Junjie Zhang, Hui Liu, Kecheng Chen 等
**一句话：** 把经验驱动技能进化思路用于红队攻击，使 jailbreak agent 在产品级执行环境中可持续生成新策略。

### 10. INTENT-AS-A-TOOL Makes it Easy to Track Agentic Misalignment
🔗 http://arxiv.org/abs/2608.27348v1
**作者：** Yutong Zhang, Jianshuo Dong, Peng Xu 等
**一句话：** 提供一种轻量级 chain-of-thought 监控手段追踪 agent mis-alignment，是 agentic safety 落地的基础工具。

### 11. SWE-Prime: Fewer Trajectories, Better Performance
🔗 http://arxiv.org/abs/2608.27449v1
**作者：** Dewu Zheng, Ruizhe Ye, Yanlin Wang 等
**一句话：** 证明任务成功不等于高质量监督，从轨迹质量而非数量入手提升真实软件 issue 修复能力。

### 12. MCR-Bench: Benchmarking Real-World Code Review
🔗 http://arxiv.org/abs/2608.27442v1
**作者：** Dewu Zheng, Yanlin Wang, Xiwen Wang 等
**一句话：** 把代码审查从单轮静态评估推进到多轮迭代场景，对 LLM 代码 agent 的实用化评估意义重大。

### 13. Persona-Execution Separation (PES)
🔗 http://arxiv.org/abs/2608.27427v1
**作者：** Yisen Xi
**一句话：** 提出"人格-执行分离"架构模式，让受监管组织中的 LLM agent 兼顾 persona 自由演化与执行可审计。

### 14. Verify Smarter, Evolve Further: Efficient Harness Evolution
🔗 http://arxiv.org/abs/2608.27311v1
**作者：** Jinghan Xu, Yikai Zhang, Aili Chen 等
**一句话：** 通过行为感知的验证机制对 agent harness 进化提效，避免在无关任务上浪费 rollout。

### 15. What Makes Good Agentic Data? An ACE Lens on Data Generation
🔗 http://arxiv.org/abs/2608.27260v1
**作者：** Xingshan Zeng, Zishan Xu, Boju Zhang 等
**一句话：** 用 ACE 视角系统分析"环境-任务-交互-成功信号"的一致性，给出 agentic 数据生成的方法论。

---

## 🔧 方法与框架（基准 · 效率 · 新范式）

### 16. CLAP: Cross-Embodiment Video World Models are Zero-Shot Physical Simulators
🔗 http://arxiv.org/abs/2608.27406v1
**作者：** Kechen Liu, Ola Shorinwa
**一句话：** 跨具身视频数据训练通用世界模型，零样本即可作为物理模拟器使用，是具身智能基础模型化的关键一步。

### 17. LeVJEPA: Efficient & Scalable Video Pretraining without the Heuristics
🔗 http://arxiv.org/abs/2608.27395v1
**作者：** Lukas Kuhn, Lucas Maes, Giuseppe Serra 等
**一句话：** 抛弃 EMA target encoder 等经典 JEPA 启发式，重新设计计算高效的视频自监督预训练路径。

### 18. PAWBench: How Far Are We from Probabilistically Aligned World Modeling?
🔗 http://arxiv.org/abs/2608.27345v1
**作者：** Yuandong Pu, Le Zhuo, Sayak Paul 等
**一句话：** 提出"概率对齐"的物理保真度衡量基准，把 video world model 从"轨迹合理"推进到"分布合理"。

### 19. SCIT: Testing Causal Cache Carriers in Latent Chain-of-Thought Models
🔗 http://arxiv.org/abs/2608.27265v1
**作者：** Yi Ding, Lijun Huang, Menglin Yang
**一句话：** 通过 Suffix Cache Interchange Test 对 latent CoT 模型做因果干预，揭示隐藏的"缓存载体"是否承担真正的因果角色。

### 20. Block Drafting: Information Floors and Model Gaps
🔗 http://arxiv.org/abs/2608.27339v1
**作者：** Xinwei Qiang, Xiang Fang, Chang Chen 等
**一句话：** 把 block drafter 的拒收损失拆成"路径信息缺失"与"观测建模误差"，给出更精细的并行解码改进方向。

### 21. CorporateBench: Large-Scale Q&A Benchmarking with Temporal Knowledge Bases
🔗 http://arxiv.org/abs/2608.27391v1
**作者：** Sil Hamilton, Albert Yu Sun, Oscar J. Romero 等
**一句话：** 基于真实企业文档集合、人类验证的多任务 QA 基准，专门解决企业场景 LLM 评估缺乏高质量数据的痛点。

---

## 📊 应用（多模态 · 代码 · 垂直领域）

### 22. MAELLE: Mechanistic Reaction Prediction via Discrete Flow Matching on Graph-Structured Electron Occupation
🔗 http://arxiv.org/abs/2608.27429v1
**作者：** Nguyen Xuan-Vu, Octavian Susanu, Daniel Armstrong 等
**一句话：** 用电子占据的离散流匹配直接建模反应机理，从"原子级启发式编辑"跃迁到"电子空间生成"。

### 23. CAST: Making Clinical Language Models Auditable
🔗 http://arxiv.org/abs/2608.27397v1
**作者：** Jin Mu, Guanhua Chen
**一句话：** 用稀疏自编码器（SAE）的概念引导微调抑制 note-specific 伪特征，让临床 LM 在部署偏移下仍稳健且可审计。

### 24. Learning a Continuous Sepsis Severity Score Without Hour-by-Hour Supervision
🔗 http://arxiv.org/abs/2608.27421v1
**作者：** Kevin Zhu, Ryan Zhang, Baraa Abed 等
**一句话：** 双中心回顾性研究，直接从患者轨迹学习连续脓毒症严重度评分，挑战了几十年前的固定权重指数。

### 25. MM-Spectrum: Multimodal Multi-spectral Molecular Structural Elucidation
🔗 http://arxiv.org/abs/2608.27286v1
**作者：** Hai-tao Yu, Nan Min, Zheng Fang 等
**一句话：** 用稳定 MoE 框架处理多模态多光谱分子结构解析，缓解朴素拼接带来的性能退化。

### 26. LLMs Can Design Near-Optimal OR Algorithms
🔗 http://arxiv.org/abs/2608.27296v1
**作者：** Jackie Baek
**一句话：** 在库存控制、排队网络和组合优化中实证 LLM 可设计近最优运筹算法，跨越了"LLM 仅能解题"的认知边界。

### 27. KnockGS: Interaction-Grounded Calibration of Physical Gaussian Representations
🔗 http://arxiv.org/abs/2608.27365v1
**作者：** Chenchen Ge, Hanwen Shen, Bowen Jing 等
**一句话：** 用真实物理交互替代先验设定，自动标定 3D Gaussian 可形变物体仿真中的材料参数。

### 28. Token-Level Advertising (LAMA)
🔗 http://arxiv.org/abs/2608.27382v1
**作者：** Hanbing Liu, Bowei Zhang, Changyuan Yu 等
**一句话：** 提出 token 级广告机制 LAMA，把广告嵌入生成内容本身，重构生成式 AI 时代的广告拍卖范式。

### 29. BrailleBench: Multi-Criteria Braille Comprehension in LLMs
🔗 http://arxiv.org/abs/2608.27268v1
**作者：** Jinghan Zhang, Fengran Mo, Zhiyu Chen 等
**一句话：** 系统评估 LLM 对盲文的多准则理解能力，推动无障碍信息无障碍（accessibility-inclusive AI）研究。

---

## 📈 研究趋势信号

1. **从"训练时强化"到"测试时进化"**：CritICL、TTPO、Verify Smarter 等共同表明，研究焦点正从昂贵的事后训练迁移到推理时 / Harness 层面的轻量进化。
2. **Agent 技能与数据的"可重用性"成为显学**：WikiSkill、SWE-Prime、RedEvoAgent 与 ACE 视角下的 agentic data 论文形成一条线索，标志 agent engineering 进入了"工程化"阶段。
3. **World Model / 物理一致性回归严肃科学尺度**：CLAP 走向跨具身通用物理模拟器，PAWBench 引入概率对齐基准，MAELLE/KnockGS 则把物理学基本对象（电子、交互）直接纳入建模。
4. **低成本与可复现性话语权扩大**：Puro-2B 与 LeVJEPA 代表"少硬件 / 少启发式"路线，可复现与开放配方成为新的研究价值。
5. **Audit & Safety 走向工具化**：PES、INTENT-AS-A-TOOL、SCIT、eval-awareness 论文显示，agentic 安全正从"列举风险"迈向"可部署监控手段"。

---

## ⭐ 值得精读

### 🔥 1. **CritICL**（http://arxiv.org/abs/2608.27455v1）
理由：把 weak-to-strong 从训练阶段搬到推理阶段，且不需要重复采样或外部 verifier，是降低对齐成本的最具实用价值的尝试之一，几乎可以直接接入现有 LLM serving 流水线。

### 🔥 2. **WikiSkill**（http://arxiv.org/abs/2608.27454v1）
理由：把 agent 经验系统地沉淀为可复用的"wiki 级"技能库，是构筑自我进化 agent 的工程关键环节；同日的 RedEvoAgent 也是这一思路的延续，一起阅读能形成完整拼图。

### 🔥 3. **PAWBench**（http://arxiv.org/abs/2608.27345v1）
理由：在 video world model 已被滥用的今天，提出"分布级"概率对齐基准，正在重新定义世界模型的评价标准，是研究者与建设者都需要对齐的"度量衡"工作。

---

*📅 报告由 AI 研究分析师自动整理 · 数据来源：ArXiv cs.AI / cs.CL / cs.LG*
*📧 关注每日更新，获取 AI 前沿动态*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*