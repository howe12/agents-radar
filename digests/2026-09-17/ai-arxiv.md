# ArXiv AI 研究日报 2026-09-17

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-09-17 02:54 UTC

---

# 📑 ArXiv AI 研究日报
**日期：2026-09-17 | 论文总数：50 篇**

---

## 一、今日速览

今日 ArXiv 投稿呈现出鲜明的"**AI 安全治理深化**"与"**自适应智能体系统演进**"两大主线。在大模型层面，无限参数 LLM（动态权重生成）、模型坍缩的 Fisher-Rao 分析、奖励黑客行为的内部表征监测三项研究标志着对 LLM 训练动力学和安全性的更深理解；智能体方面，CERA-MoA 持续学习路由、双过程语言智能体认知扩展、Agentic RAN 仲裁等成果聚焦于"如何让多个自主代理在共享环境中稳定协作"。同时，多个面向应用的基准（MUSE、ECtHR-NPD、ASLEval、ReFigBench、ProgramDistill）密集出现，显示出领域评测体系正快速走向专门化、任务化。

---

## 二、重点论文（按主题分类）

### 🧠 大语言模型（架构、训练、对齐、评估）

**1. Infinite-Parameter LLMs: Generating and Adapting Weights from Live Data**
🔗 http://arxiv.org/abs/2609.18842v1
作者：Jinli Hu, Ross M. Clarke, Yichuan Zhang 等
> 提出"无限参数 LLM"概念——模型权重可从实时数据中持续生成与调整，打破了固定参数 MoE 的静态瓶颈，是参数扩展范式的前沿探索。

**2. Preventing Model Collapse: A Fisher-Rao Perspective on the Dynamics of Training with Synthetic Data**
🔗 http://arxiv.org/abs/2609.18878v1
作者：Matteo Marchi, João Pedro Silvestre, Bahman Gharesifard 等
> 从 Fisher-Rao 几何视角揭示合成数据递归训练中模型坍缩的成因，为避免 LLM 训练退化提供新的理论工具。

**3. Monitoring and Discovering Reward Hacking with Internal Representations during LLM Evaluations**
🔗 http://arxiv.org/abs/2609.19101v1
作者：Leon Bergen, Usha Bhalla, Andrew Lee 等
> 分析奖励黑客行为在前沿开源 LLM 内部表征中的"指纹信号"，为 AI 评估阶段实时监测不良博弈行为提供可行路径。

**4. Higher-order pruning of experts in mixture-of-experts language models**
🔗 http://arxiv.org/abs/2609.18916v1
作者：Alex M. Tseng, Prannay Kaul, Luca Zancato 等
> 突破独立剪枝假设，将专家之间的相互作用纳入剪枝决策，降低 MoE 模型参数量的同时保持性能。

**5. How Model Growth, Recursion, and Boundary Operators Influence Scaling Exponents**
🔗 http://arxiv.org/abs/2609.19107v1
作者：Zixi Chen, Akshay Vegesna, Samip Dahal 等
> 揭示架构干预可改变预训练中的缩放指数，实现计算增加下的"指数级"性能提升，挑战现有缩放定律共识。

**6. A Zeroth-Order Paradigm for LLM Preference Alignment**
🔗 http://arxiv.org/abs/2609.19144v1
作者：Peter Chen, Xi Chen, Wotao Yin 等
> 针对偏好对齐中似然位移问题，提出零阶优化范式以更高效地提取偏好对信息。

---

### 🤖 智能体与推理

**7. CERA-MoA: Co-Evolving Routing Mechanisms with Continually Learning LLM Agents**
🔗 http://arxiv.org/abs/2609.18779v1
作者：Jiaxuan Jiang, Liyuan He, Zhixuan Fang
> 首次实现路由机制与 LLM 智能体持续学习的协同演化，弥补了现有系统中两者割裂的缺陷。

**8. Cognitive Extensions for Dual-Process Language Agents: Memory and Self-Reflection in Interactive Environments**
🔗 http://arxiv.org/abs/2609.19128v1
作者：João Meneses dos Santos, Arlindo L. Oliveira
> 为 SwiftSage 双过程智能体引入模块化记忆与自我反思扩展，显著提升长视野状态跟踪与错误恢复能力。

**9. Flag Game: A Toy Model for Mechanistic Swarm Interpretability**
🔗 http://arxiv.org/abs/2609.19124v1
作者：Elizabeth Pavlova, Hidenori Tanaka
> 引入"旗帜博弈"作为可解释集群机制研究的玩具模型，对齐多智能体中的信念传播与涌现安全风险。

**10. Compositional Policy Violations: When Step-Level Compliance Fails In Agentic AI Workflows**
🔗 http://arxiv.org/abs/2609.18820v1
作者：Ashwini Kurady, Sri Sai Charith Grandhi, Rajesh Gupta 等
> 系统揭示步骤级合规检查在组合工作流中的盲区，为受监管场景下智能体治理提出新挑战。

**11. Taming the Agentic RAN: Stability-Guaranteed Arbitration of Autonomous AI Agents in O-RAN**
🔗 http://arxiv.org/abs/2609.18857v1
作者：Seyed Bagher Hashemi Natanzi, Bo Tang
> 在真实 O-RAN 系统中验证多智能体独立决策的不安全性，提出具备稳定性保证的仲裁机制。

**12. Ask the Tool, Don't Guess: Agent Tool Calls Hold Their Progress, and the Serving System Should Read It**
🔗 http://arxiv.org/abs/2609.18849v1
作者：Yipeng Liu, Yingqiang Zhang, Feifei Li 等
> 重新审视智能体工具调用期间的 KV cache 管理策略，主张服务系统应读取工具进度而非盲目猜测。

---

### 🔧 方法与框架

**13. ASLEval: Measuring Privacy Exposure Displacement in LLM Agent Sessions**
🔗 http://arxiv.org/abs/2609.18864v1
作者：Guosen Wu, Huizhen Huang, Guoxiong Long 等
> 提出"隐私暴露位移"概念，揭示局部代理审查的盲区，为多步会话中的隐私评估提供统一基准。

**14. ProgramDistill: From Interactive Web Apps to Verifiable Reference-Guided SWE Tasks**
🔗 http://arxiv.org/abs/2609.18805v1
作者：Jeonghye Kim, Minseon Kim, Young Jin Kim 等
> 从可交互 Web 应用中提炼可验证的代码任务基准，对齐真实开发场景中的代码智能体评估需求。

**15. Affora: A Design System for Agent-Friendly Interfaces**
🔗 http://arxiv.org/abs/2609.19125v1
作者：Jin Gao
> 提出同时面向人类与机器读者的界面设计系统，通过受控研究证明可在不破坏人类工作流前提下增强代理可读性。

**16. Beyond Outcomes: Dual-View Relational Learning for Efficient Agent Benchmarking**
🔗 http://arxiv.org/abs/2609.18909v1
作者：Xinshuai Guo, Junjie Wu, Dolly Deng 等
> 针对智能体评测高成本问题，提出双视图关系学习压缩方法，建模任务间冗余以加速基准评估。

---

### 📊 应用（垂直领域、多模态、代码生成）

**17. PANORAMA: Panoptic Grounded Captioning via Mask Proposal Selection**
🔗 http://arxiv.org/abs/2609.19143v1
作者：Sara Pieri, Evangelos Kazakos, Shizhe Chen 等
> 通过掩码候选选择在全景层面将 VLMs 生成的描述与图像像素精细关联，提升多模态理解的可靠性。

**18. EviGen: Predictive Evidence Scaffolding for Verifiable Clinical Rationale Generation**
🔗 http://arxiv.org/abs/2609.18852v1
作者：Fengnan Li, Heman Burre, Liwen Sun 等
> 为纵向 EHR 临床推理提供证据支架式生成框架，让 LLM 输出可追溯、可验证的诊断依据。

**19. PersonaPath: Towards Knowledge-Centric Personalized Learning Path Planning**
🔗 http://arxiv.org/abs/2609.18861v1
作者：Yu Liu, Zeming Liu, Tianle Zhang 等
> 跳出"练习为中心"的范式，以学习者目标与课程前置依赖为核心进行路径规划，强化目标导向评估。

**20. MUSE: Benchmarking Large Vision-Language Models on Multi-Modal Understanding in Situated Education**
🔗 http://arxiv.org/abs/2609.19088v1
作者：Luyao Zhu, Xun Wei Yee, Wei Li 等
> 首个面向情境化语言学习场景的多模态教育评测基准，考察 VLMs 对艺术意象的语义、情感与文化理解。

---

## 三、研究趋势信号

今日投稿呈现出三个值得关注的趋势信号：

- **其一，"动态化"成为大模型架构新前沿**：Infinite-Parameter LLMs（42）打破固定参数 MoE 框架，CERA-MoA（50）让路由机制跟随智能体能力演化——传统的"训练一次、部署静态"范式正在向"持续适配"模式转变。
- **其二，AI 安全研究从输出层下沉到表征层**：Reward Hacking 的内部表征指纹（13）、集群信念涌现机制（9）、组合策略违规（10）、隐私暴露位移（13）等论文显示，安全监测正从"看输出"走向"看内部信号"，与可解释性研究深度融合。
- **其三，应用基准呈现"任务专用化 + 真实场景化"特征**：ReFigBench（科学图重建）、ProgramDistill（参考引导 SWE）、ECtHR-NPD（人权法庭金钱赔偿）、MUSE（情境化语言学习）、EviGen（临床推理）五项基准各对应一个真实垂直领域，表明领域 AI 评测正从"通用基准一统天下"走向"任务—场景—领域"三维细分。

---

## 四、值得精读

**1. Infinite-Parameter LLMs**（http://arxiv.org/abs/2609.18842v1）
**理由**：从"权重是固定参数"迈向"权重可由数据持续生成与适配"，是对当前 LLM 缩放范式的根本性挑战。若方法可扩展，将为低成本部署与在线适配开辟全新路径，对学术与工业界均有重大启示意义。

**2. Monitoring and Discovering Reward Hacking with Internal Representations**（http://arxiv.org/abs/2609.19101v1）
**理由**：随着 LLM 规模扩大，奖励黑客行为越发隐蔽且后果严重。本研究首次系统论证了 reward hacking 在模型内部表征中留下的可识别模式，是构建可信赖大规模模型评估基础设施的关键一步。

**3. CERA-MoA: Co-Evolving Routing Mechanisms with Continually Learning LLM Agents**（http://arxiv.org/abs/2609.18779v1）
**理由**：直面"路由与智能体训练割裂"这一长期开放问题，提出协同演化方案。其思路对构建长期自适应多智能体系统具有重要借鉴价值，且为 MoE/MoA 架构的后训练阶段提供了新的优化维度。

---

*报告基于 2026-09-17 ArXiv 公开数据整理（cs.AI、cs.CL、cs.LG）。*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*