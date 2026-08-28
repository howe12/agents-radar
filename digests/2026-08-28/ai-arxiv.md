# ArXiv AI 研究日报 2026-08-28

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-08-28 08:29 UTC

---

# 📬 ArXiv AI 研究日报
**日期：2026-08-28 | 共 50 篇新论文 | 覆盖 cs.AI / cs.CL / cs.LG**

---

## 一、今日速览

今日投稿呈现三大主线：**推理时（inference-time）方法去依赖化**（CritICL、TTPO 用小模型或无标签信号替代外部验证与 ground truth）、**Agent 能力沉淀与演化**（WikiSkill、RedEvoAgent、ACE 框架共同关注"经验→技能"的持久化机制）、以及 **RLVR 体系的整合与扩展**（弱模型引导、跨域融合、Evolution Strategies 与 GRPO 的对比研究）。此外，跨具身视频世界模型（CLAP）、低成本 LLM 预训练（Puro-2B）、隐式思维链的因果可测性（SCIT）也代表了值得关注的新方向。

---

## 二、重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

1. **[CritICL: Inference-Time Weak-to-Strong Generalization from Small LM Failure Modes](http://arxiv.org/abs/2608.27455v1)**
   作者：Yufan Wu, Yinghui He, Zhengyi Hu 等
   核心：提出"小模型失败模式→强模型修正"的推理时框架，避免重复采样或外部验证器；是推理时扩展方法去依赖化的重要一步。

2. **[TTPO: Test-Time Policy Optimization](http://arxiv.org/abs/2608.27448v1)**
   作者：Aozhe Wang, Zhengxi Lu, Jianze Wang 等
   核心：在没有 ground-truth 标签的情况下用 On-Policy Self-Distillation 替代 RLVR 中的真实奖励，把测试时训练真正推向无监督场景。

3. **[Puro-2B: Poor Lab's Qwen2-1.5B Trained on RTX 5090 within $5090](http://arxiv.org/abs/2608.27370v1)**
   作者：Kairong Luo, Jiarui Cui, Yaorui Yin 等
   核心：开源一套在单卡 RTX 5090 上、5000 美元预算内完成 2B 模型预训练的全部硬件友好型方案，挑战"大模型=高成本"的范式。

4. **[Boosting LLM Exploration via Weak-Model Guidance in RLVR](http://arxiv.org/abs/2608.27420v1)**
   作者：Xingyu Shen, Huishuai Zhang, Peng Li 等
   核心：用小模型作为"探索引导器"缓解 RLVR 训练中的熵坍缩问题，显著改善 pass@*k* 的覆盖度。

5. **[Consolidating RLVR Capabilities Across Domains: A Deep Dive into Fusion Paradigms](http://arxiv.org/abs/2608.27409v1)**
   作者：Siye Wu, Kai Yang, Yuchen Cai 等
   核心：系统性梳理 RLVR 跨域融合的三大范式（权重、模型、数据）为不同场景的能力整合提供"工具箱"。

6. **[How Language Models Organize and Structure Moral Knowledge](http://arxiv.org/abs/2608.27402v1)**
   作者：Orion Reblitz-Richardson
   核心：通过线性探针研究 LLM 是否将道德基础组织为可区分的几何结构，超越简单的道德检测。

7. **[Understanding Evolution Strategies for LLM Reasoning: Broader Reasoning Coverage than GRPO](http://arxiv.org/abs/2608.27351v1)**
   作者：Yunpeng Ba, Zhi Zheng, Yue Xie 等
   核心：经验性证明 ES 比 GRPO 拥有更广的推理覆盖度，为 RLVR 后训练路径选择提供决策依据。

---

### 🤖 智能体与推理

8. **[WikiSkill: Compiling Agent Experience into Persistent Knowledge for Skill Evolution](http://arxiv.org/abs/2608.27454v1)**
   作者：Liyan Tang, Cyrus Rashtchian, Chun-Sung Ferng 等
   核心：把 Agent 经验编译为"Wiki 式"可演化的持久技能库，解决当前自动技能发现缺乏长期整合机制的问题。

9. **[RedEvoAgent: Automatic Red-Teaming Agent with Experience-Driven Skill Evolution](http://arxiv.org/abs/2608.27439v1)**
   作者：Junjie Zhang, Hui Liu, Kecheng Chen 等
   核心：把 WikiSkill 式能力演化思路应用于红队 Agent，针对工具调用型 jailbreak 持续升级攻击技能。

10. **[LLMs Can Design Near-Optimal OR Algorithms](http://arxiv.org/abs/2608.27296v1)**
    作者：Jackie Baek
    核心：实证 LLM 在库存控制、排队网络、组合优化等运筹学经典问题中可设计出接近最优的算法；为 LLM 在决策科学中的角色打开新视角。

11. **[SCIT: Testing Causal Cache Carriers in Latent Chain-of-Thought Models](http://arxiv.org/abs/2608.27265v1)**
    作者：Yi Ding, Lijun Huang, Menglin Yang
    核心：提出 Suffix Cache Interchange Test，通过精确反事实交换来检验 latent CoT 模型中"缓存"是否真正承担因果推理功能。

12. **[Verify Smarter, Evolve Further: Efficient Harness Evolution through Behavior-Aware Verification](http://arxiv.org/abs/2608.27311v1)**
    作者：Jinghan Xu, Yikai Zhang, Aili Chen 等
    核心：用行为感知验证替代全任务打分，显著降低 Agent harness 演化的成本。

---

### 🔧 方法与框架

13. **[SWE-Prime: Fewer Trajectories, Better Performance](http://arxiv.org/abs/2608.27449v1)**
    作者：Dewu Zheng, Ruizhe Ye, Yanlin Wang 等
    核心：挑战"任务成功=高质量监督"的假设，提出以更少但更精准的轨迹提升 SWE 智能体 SFT 质量。

14. **[RATIO: A Benchmark for Retrieval Across Typed Ideation Operations in Scientific Literature](http://arxiv.org/abs/2608.27394v1)**
    作者：Maayan Sharon, Tom Hope
    核心：首次为科学文献检索引入"类型化启发操作"分类体系（直接/缩放/抽象），评估检索对科研灵感的真实贡献。

15. **[CorporateBench: Large-Scale Q&A Benchmarking with Temporal Knowledge Bases](http://arxiv.org/abs/2608.27391v1)**
    作者：Sil Hamilton, Albert Yu Sun, Oscar J. Romero 等
    核心：基于真实企业时序知识库的多任务问答基准，弥补现有企业 QA 评测过于简化的不足。

16. **[Token-Level Advertising: Latent Advertiser Mixture Auction (LAMA)](http://arxiv.org/abs/2608.27382v1)**
    作者：Hanbing Liu, Bowei Zhang, Changyuan Yu 等
    核心：把广告机制下沉到生成 token 层面，提出 Latent Advertiser Mixture Auction，为生成式 AI 设计原生广告范式。

17. **[KnockGS: Interaction-Grounded Calibration of Physical Gaussian Representations](http://arxiv.org/abs/2608.27365v1)**
    作者：Chenchen Ge, Hanwen Shen, Bowen Jing 等
    核心：无需已知材料参数，仅靠"敲击"交互即可反标 3D Gaussian 物理表示的材料属性。

---

### 📊 应用（垂直领域、多模态、代码生成）

18. **[MAELLE: Mechanistic Reaction Prediction via Discrete Flow Matching on Graph-Structured Electron Occupation](http://arxiv.org/abs/2608.27429v1)**
    作者：Nguyen Xuan-Vu, Octavian Susanu, Daniel Armstrong 等
    核心：从电子占据空间（而非分子拓扑）预测化学反应机理，是首个把 discrete flow matching 应用到电子空间的化学反应建模框架。

19. **[CLAP: Cross-Embodiment Video World Models are Zero-Shot Physical Simulators](http://arxiv.org/abs/2608.27406v1)**
    作者：Kechen Liu, Ola Shorinwa
    核心：把异构机器人视频统一训练为一个跨具身世界模型，零样本即做物理仿真；解决当前动作-conditioned 模型"单具身孤岛"问题。

20. **[LeVJEPA: Efficient & Scalable Video Pretraining without the Heuristics](http://arxiv.org/abs/2608.27395v1)**
    作者：Lukas Kuhn, Lucas Maes, Giuseppe Serra 等
    核心：去掉 JEPA 中常见的 EMA target encoder 与架构不对称等启发式技巧，更简洁且可扩展的视频自监督表征。

---

## 三、研究趋势信号

今日投稿释放出几个清晰的**新兴方向信号**：

- **推理时方法去依赖化**：CritICL（弱模型替代验证器）、TTPO（无标签做策略优化）共同指向"不依赖外部信号或 ground truth 的推理时扩展"。
- **Agent 经验的持久化与演化**：WikiSkill、RedEvoAgent、ACE 框架、Verify Smarter 等多篇集中爆发，反映业界正系统解决"短期交互经验无法沉淀为长期技能"的痛点。
- **RLVR 体系化研究**：从弱模型引导、跨域融合到 ES 与 GRPO 对比，RLVR 进入"工程化整合与理论分析"阶段。
- **因果可解释性的隐式推理**：SCIT 的提出意味着对 latent CoT 模型不能再以"输出好"为唯一评判标准，因果保真度成为新维度。
- **世界模型评测范式升级**：PAWBench、CLAP 共同强调"概率一致性"——单一轨迹已不够，需评估物理过程的多模态分布。

---

## 四、值得精读

📖 **[CritICL](http://arxiv.org/abs/2608.27455v1)** — 提出从小模型失败模式反推强模型修正的通用框架，结构简洁、思路新颖，是弱到强（weak-to-strong）范式在推理时阶段的一次优雅推广，值得完整阅读其方法论与实验。

📖 **[WikiSkill](http://arxiv.org/abs/2608.27454v1)** — 把"Wiki 式可演化知识库"思想落地到 Agent 技能管理，对构建长期自适应 Agent 基础设施具有方向性意义；论文机制和消融值得完整研读。

📖 **[CLAP](http://arxiv.org/abs/2608.27406v1)** — 跨具身视频世界模型是当前机器人/世界建模领域的核心难题，CLAP 的"异构数据→统一世界模型"路径与零样本物理仿真结果都值得深入剖析。

---

*日报由 AI 研究分析师自动整理生成 · 覆盖 2026-08-28 ArXiv cs.AI / cs.CL / cs.LG 投稿*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*