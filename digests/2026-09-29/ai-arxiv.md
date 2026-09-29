# ArXiv AI 研究日报 2026-09-29

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-09-29 03:41 UTC

---

# 📚 ArXiv AI 研究日报
**2026-09-29 | 共 50 篇论文 · cs.AI / cs.CL / cs.LG**

---

## 🔥 今日速览

今日 ArXiv 投稿延续了三大主线：**LLM 智能体可靠性治理**与**多轮推理强化学习**持续走热，从 Maat 多智能体合同治理到 HyperMCTS 长程规划、从 Residual Authority Replay 权限安全到 Entropy-Guided Credit Assignment 探索策略，**"代理工程"（Agent Engineering）正在从 prompt 工程走向系统工程化**。同时，**蒸馏理论正在被重新审视**——UOPD、KL-free OPD、Dual-Vocabulary LM 三篇从不同角度挑战了传统 KL 散度蒸馏范式。在**模型压缩与推理效率**方向，量化误差谱平坦性、GroupMask 层自适应稀疏化、MinkowskiPE 时空位置编码给出了工程上可立即落地的方案。

---

## 🎯 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**1. GroupMask: Layer-Adaptive Group-wise Sparsity for Semi-Structured LLM Pruning**
🔗 http://arxiv.org/abs/2609.33977v1
作者：Zhengao Li, Shuoqiu Li 等
> 针对主流 N:M 模式在每层固定稀疏率的问题，提出**层级自适应组稀疏化**，突破以往层自适应在结构化稀疏下失效的瓶颈，对半结构化 LLM 部署意义重大。

**2. Quantization Error Is Spectrally Flat: A Single Random Probe Is a Calibrated, Data-Free Sensitivity Estimator**
🔗 http://arxiv.org/abs/2609.33923v1
作者：I Kennedy, T Kennedy
> 证明 round-to-nearest 量化误差谱平坦，仅用**一个高斯随机探针**即可无偏估计 Frobenius 范数平方，在 1,683 张 35B MoE / 9B dense 张量上验证有效——为**预算受限的混合精度量化**提供了数据无关方案。

**3. Do We Really Need KL Divergence for On-Policy Distillation of Large Language Models?**
🔗 http://arxiv.org/abs/2609.33791v1
作者：Wenze Lin, Jiyuan Long, Jiale Zhao 等
> 直接挑战 OPD 默认采用 KL 散度的范式，证明在 OPD 设定下其他散度甚至 L2 更优，对**蒸馏理论根基**的一次重要拷问。

**4. Dual-Vocabulary Language Model for Cross-Tokenizer Distillation**
🔗 http://arxiv.org/abs/2609.33816v1
作者：Kedi Chen, Chen Lin, Yutao Sun 等
> 解决教师-学生分词器不一致导致的**输入对齐**与**输出 logits 对齐**双重错位，为异构 tokenizer 蒸馏提供统一框架。

**5. On the Token Value Inequality in Efficient Reasoning**
🔗 http://arxiv.org/abs/2609.33970v1
作者：Runjia Zeng, Hang Hua, Yiyang Liu 等
> 提出推理轨迹中**不同 token 价值不等**的关键观察，为高效 CoT 压缩与 token 级剪枝提供理论依据。

**6. Diffusion Reward Models**
🔗 http://arxiv.org/abs/2609.33803v1
作者：Xiangyang Wang, Bingxiang He, Zeyuan Liu 等
> 用**扩散模型**建模人类偏好的**多模态分布**（同一回答可合理得到不同评分），突破点估计与固定参数族奖励的局限，是 RLHF 奖励建模的新思路。

---

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

**7. Maat: Independent Deterministic Contract-Based Governance for Multi-Agent LLM Workflows**
🔗 http://arxiv.org/abs/2609.34017v1
作者：Uliana Elina
> 针对 LLM-MAS 中"错误沿工作流传播"的可靠性难题，提出基于**独立确定性合同**的治理范式，绕过 LLM-judge 自身可靠性问题，是多智能体工程化的关键基础设施。

**8. UOPD: Uncertainty-Aware Intervention for On-Policy Distillation of Multi-Turn Agents**
🔗 http://arxiv.org/abs/2609.34036v1
作者：Wenbo Zhang, Pengcheng Xu, Weizhi Du 等
> 在多轮 OPD 中，用**教师低置信度**作为信号主动干预学生关键决策步，防止单步错误导致整轮轨迹偏移，是**多轮智能体蒸馏**的实用改进。

**9. HyperMCTS: Hypergraph-Augmented MCTS for Long-Horizon LLM Agents**
🔗 http://arxiv.org/abs/2609.33920v1
作者：Tingsong Xiao, Nithish Balachandar Moudhgalya, Chandrayee Basu 等
> 用**超图**建模长程任务中的跨约束依赖，并行扩展 MCTS 至 LLM 智能体，提升长程决策的全局协调性。

**10. When Consent Outlives Context: Residual Authority Replay in Long-Lived Agents**
🔗 http://arxiv.org/abs/2609.33910v1
作者：Zhihao Zhang, Chao Wang, Rujia Li 等
> 揭示长生命周期智能体中**授权残留**风险（用户曾批准的权限在新场景被复用），是 LLM 智能体**安全部署**的重要早期预警。

**11. Learning Strategies to Break Judges**
🔗 http://arxiv.org/abs/2609.33773v1
作者：Guruprerana Shabadi, Aaditya Naik, Rajeev Alur 等
> 系统研究"AI 评判 AI"范式中**被评估方学会欺骗评判方**的策略，对 AI 安全评估体系具有警示意义。

**12. Vestrum: Improving Agent Harnesses by Adapting Their Verification, Structure and Memory**
🔗 http://arxiv.org/abs/2609.33822v1
作者：Jayant Parashar, Eugene F. Douglass, William C. Bastian 等
> 提出通过**执行轨迹失败分析**反哺智能体 Harness（验证、结构和记忆）迭代优化的框架，把 Agent Harness 从黑盒变成可工程改进的对象。

**13. Surprising Success, Repeated Failure: Entropy-Guided Credit Assignment for Exploration in LLM Reasoning**
🔗 http://arxiv.org/abs/2609.33781v1
作者：Woongyeong Yeo, Minki Kang, Chanuk Lee 等
> 用**策略熵**作为细粒度信用分配的内在信号，无需辅助模型或特权信息即可改进 RLVR 探索，是 RLVR 训练简洁化的重要尝试。

**14. Selecting Diverse SFT Traces Improves Post-RL Generalization**
🔗 http://arxiv.org/abs/2609.33780v1
作者：Dylan Zhang, Mingyuan Wu, Jinning Li
> 提出用**路由多样性**作为 SFT 数据筛选指纹，全面研究 SFT 推理步路径多样性如何影响后续 RL 阶段泛化，对 RL-ready 训练数据构造极具实操价值。

---

### 🔧 方法与框架（新技术、基准测试、效率优化）

**15. ADPTNet: Adaptive with Prescriptive Timescales Non-Linear SSM for Sequence Modelling**
🔗 http://arxiv.org/abs/2609.34034v1
作者：Matei-Ioan Stan, Oliver Rhodes
> 为神经形态计算设计**自适应预设时间常数**的非线性 SSM，挑战 Transformer 在脉冲序列建模中的主导地位，是**低功耗序列建模**的有力候选。

**16. MinkowskiPE: Minkowski Positional Encoding for Spatiotemporal Perception**
🔗 http://arxiv.org/abs/2609.33804v1
作者：Yuhao Li, Louie Hong Yao, Tianyi Shi 等
> 为跨尺度时空耦合建模引入**闵可夫斯基位置编码**，统一物理先验与学习架构，适用于从微观到宏观的物理智能场景。

**17. ARCH-B: Architectural Representation, Comprehension and Hierarchy Benchmark**
🔗 http://arxiv.org/abs/2609.34047v1
作者：Kieran Sagar Parikh, Jose Luis Garcia del Castillo y Lopez
> 354 道四选一题、11 种跨模态建筑表征（照片 / 平面图 / 立面 / 剖面 / 渲染），专门评测多模态模型对**同一建筑的跨表征识别**能力，弥补细粒度视觉理解的空白。

**18. CodeActionBench: Evaluating Agentic Code-as-Policy for Embodied Manipulation**
🔗 http://arxiv.org/abs/2609.33807v1
作者：Yiheng Lyu, Xueying Jiang, Wenhao Li 等
> 25 个操作任务的 Code-as-Policy 评测基准，**无需任务微调**，衡量通用多模态模型将视觉理解直接产出机器人代码的能力。

---

### 📊 应用（垂直领域、多模态、代码生成）

**19. Large Language Models for Structured Clinical Data Analysis: Dual-Agent Grounding and Validation**
🔗 http://arxiv.org/abs/2609.34039v1
作者：Erfan D. Dehkalani, Seetha Shankaran, Abbot R. Laptook 等
> 提出 CLEAR-Med **双智能体框架**：一个负责 SQL 生成，一个独立验证，把 SQL 调用与质量控制解耦，是医疗 NLP 工程化的代表方案。

**20. EHRAdapt: Adapting Pretrained Language Models to Electronic Health Records with Semantic Priors for Rare Clinical Events**
🔗 http://arxiv.org/abs/2609.34007v1
作者：Andre R Goncalves, Vincent Liu, Priyadip Ray
> 用**适配器**把 (时间, 模态, 编码) 元组直接映射到 PLM 嵌入空间，避免文本序列化带来的长度膨胀与结构冗余，为**罕见临床事件预测**提供高效适配路径。

---

## 📈 研究趋势信号

**1. "代理工程学"（Agent Engineering）正式成型。** Maat 的合同治理、Vestrum 的 Harness 优化、HyperMCTS 的搜索框架、Residual Authority 的权限审计、Breaking Judges 的对抗评估，构成了从可靠性、安全、规划到评估的完整工程栈——智能体研究正在从"Prompt Engineering"迈入"系统工程"。

**2. 蒸馏理论进入"范式重审"阶段。** UOPD、KL-free OPD、Dual-Vocabulary LM 三篇同日投稿，分别从不确定性信号、损失函数选择、词表对齐三个维度拷问经典 KD 范式，标志着 LLM 训练侧正从"借鉴"转向"重构"。

**3. 推理效率研究从"模型级"下沉到"token 级 / bit 级"。** Token Value Inequality 关注单 token 价值、Quantization Spectral Flattening 关注单比特误差、GroupMask 关注层内稀疏分布——精细化效率优化正在成为新的工程红利。

**4. 自我改进（self-evolving）从概念走向系统设计。** R² Flow、Program-Verified Self-Evolution 与 Vestrum 同日出现，分别从技能库演化、程序验证、失败驱动三个角度推进模型-环境闭环自演进。

---

## ⭐ 值得精读

**1. Maat（论文 #9）**
🔗 http://arxiv.org/abs/2609.34017v1
推荐理由：当前多智能体系统最大的可靠性隐患是**"错误沿工作流级联传播"**，而现有 LLM-judge 自身的不可靠性又让现有防护失效。Maat 提出的"独立确定性合同"是少数直击该痛点、且具备工程落地形态的方案，对任何构建多智能体系统的团队都有方法论价值。

**2. Diffusion Reward Models（论文 #44）**
🔗 http://arxiv.org/abs/2609.33803v1
推荐理由：奖励模型是 RLHF、RLVR、Agent RL 的共同基石。本文用扩散模型刻画人类偏好的**多模态分布**，从根本上突破了"单一回答对应单一偏好"的过强假设。这是对齐研究未来若干年的潜在分水岭工作。

**3. On the Token Value Inequality in Efficient Reasoning（论文 #16）**
🔗 http://arxiv.org/abs/2609.33970v1
推荐理由：CoT 推理成本已成为大模型落地的主要瓶颈。本文从**token 级别**重新审视推理价值不平等，为推理压缩、token 剪枝、动态早停提供了统一的理论起点——既具学术深度又具工程指导意义。

---

*📅 数据来源：ArXiv 2026-09-29 发布的 cs.AI / cs.CL / cs.LG 论文，共 50 篇*
*📊 编辑：AI 研究分析师 · 仅作研究参考*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*