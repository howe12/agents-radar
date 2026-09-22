# ArXiv AI 研究日报 2026-09-22

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-09-22 02:49 UTC

---

# ArXiv AI 研究日报
**日期：2026-09-22 | 论文总数：50 篇 | 来源：cs.AI / cs.CL / cs.LG**

---

## 一、今日速览

今日 ArXiv 投稿呈现几条清晰的演进主线：**模型合并（Model Merging）研究持续走热**，从任务向量的秩分配到与"涌现能力"的关系分析，标志着社区正系统化理解权重算术的本质；**LLM Agent 的安全治理与可观测性**成为新增量，多篇论文聚焦长时程智能体的执行约束、事件报告与司法合规；**RLVR（可验证奖励强化学习）正渗透到机器人、视觉-语言-动作（VLA）等领域**，推理时序不再局限于 token 级步进。同时，**稀疏自编码器（SAE）等机制可解释性工具被用于 SSM 与 Transformer 的概念形成对比研究**，显示出"理解模型内部"这条线正在超越纯 Transformer 范畴。

---

## 二、重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**1. [The Endless Exam: Mathematical Constructions from Today's Models toward Superintelligence](http://arxiv.org/abs/2609.24555v1)**
- 作者：Muhan Zhang
- 通过 14 个参数化构造族构建"无尽考试"，自动验证提交对象并给出相对质量分数，为评估模型迈向超智能的数学能力提供可扩展标尺。

**2. [Not All Task Vectors Need Equal Rank: Energy-Proportional Allocation for Model Merging](http://arxiv.org/abs/2609.24517v1)**
- 作者：Hyunjoong Cho, Jinhyeok Jang
- 提出能量比例的秩分配策略，纠正谱合并方法对所有任务向量统一分配秩的低效做法，在不增加联合训练成本的前提下提升多任务合并质量。

**3. [On Emergent Capabilities and Model Merging](http://arxiv.org/abs/2609.24504v1)**
- 作者：Luca Zhou, Emanuele Rodolà
- 系统分析模型合并（权重算术）对涌现能力的影响——回答了一个被业界广泛实践却鲜有理论支撑的问题：哪些能力在合并中存活、哪些被抹去？

**4. [LLJ Cards: Best practices for the Use of LLMs as Judges](http://arxiv.org/abs/2609.24516v1)**
- 作者：Khaoula Chehbouni 等
- 为"LLM 作为评判者"提供方法学标准化卡片，覆盖提示设计、偏差控制、可复现性等关键议题，是当前 LLM 评估流水线不可缺的工程参考。

**5. [1% of Tokens Can Be Enough: On Gradient Estimation in On-Policy Distillation](http://arxiv.org/abs/2609.24432v1)**
- 作者：Huanxin Sheng, Zhiling Ye, Haonan Wang 等
- 揭示稀疏 On-Policy Distillation 中仅 1% 的 token 即足够有效估计梯度，并分析基于采样下一 token 的梯度噪声机制，对蒸馏效率优化意义重大。

**6. [Information-Time Proximal Policy Optimization](http://arxiv.org/abs/2609.24380v1)**
- 作者：Yongcheng Zeng, Xinyu Cui, Yan Song 等
- 突破 RLVR 中将 MDP 时序参数化为逐 token 的范式，改用"信息时间"度量自回归轨迹上的非均匀信息流，是 PPO 在推理 RL 框架下的重要扩展。

### 🤖 智能体与推理

**7. [Beyond Predictable Paths: Redefining AI Security Incident Reporting for Agents](http://arxiv.org/abs/2609.24515v1)**
- 作者：Anastasia Pustozerova, Eugene Bagdasarian, Luca Beurer-Kellner 等
- 针对智能体时代特有的攻击面，重新设计 AI 安全事件报告框架，是合规、治理与可问责性的基础设施级工作。

**8. [ActGov: Governing LLM Agent Actions via Policy-Constrained Validation](http://arxiv.org/abs/2609.24446v1)**
- 作者：Kaiyuan Zhang, Yuke Peng, Ke Jiang 等
- 提出基于策略约束验证的智能体行动治理机制，防止长时程工具调用中的权限越界与提示注入滥用，是对当前静态防御的实质性改进。

**9. [VLM-in-Sandbox: Visual Workspaces for Agentic Visual Reasoning](http://arxiv.org/abs/2609.24362v1)**
- 作者：Hexiong Yang, Mingrui Chen, Jie Cao 等
- 把沙箱环境从纯文本扩展到视觉-语言模型的中间图像证据管理，解决 VLM 智能体在多步视觉推理中的状态管理难题。

**10. [AgentSTAR: Agentic Shape Tracking and Reconstruction from Monocular Videos](http://arxiv.org/abs/2609.24487v1)**
- 作者：Kirill Mazur, Nikita Karaev, Matthew Chang 等
- 用智能体式"分析-合成"替代传统稠密对应估计路径，从单目视频重建并跟踪结构化 3D 物体模型。

**11. [Few-Shot Demonstrations Elicit the Use of In-Context World Representations in LLMs](http://arxiv.org/abs/2609.24352v1)**
- 作者：Kohsei Matsutani, Gouki Minegishi, Core Francisco Park 等
- 揭示少样本示例可触发 LLM 使用上下文世界表征进行推断，为智能体行为背后的隐式状态推理提供机制层面证据。

### 🔧 方法与框架

**12. [FoldQuantVLA: Native Low-Bit Quantization of Vision-Language-Action Models via Consistent Folding](http://arxiv.org/abs/2609.24433v1)**
- 作者：Hung T. Ho, Khanh D. Nguyen, Quang D. Nguyen 等
- 在 VLA 模型上实现校准-舍入-原生整数执行全过程一致的折叠式低比特量化，是机器人部署低延迟模型的关键工程突破。

**13. [ARM: Attention with Routed-Memory for Learnable Sparse Control](http://arxiv.org/abs/2609.24417v1)**
- 作者：Qiuhao Zeng, Jerry Huang, Peng Lu 等
- 通过路由记忆机制实现可学习的稀疏注意力控制，避免 KV 缓存剪枝中关键上下文被丢弃的问题，长上下文推理价值显著。

**14. [MUSE: Dependency-Aware Adaptation of a Frozen Vision Backbone for Multivariate Time Series Forecasting](http://arxiv.org/abs/2609.24441v1)**
- 作者：Xinying Cai, Junkai Lu, Yuhan Zhu 等
- 在不微调视觉骨干的前提下，将其适配到多变量时序预测，并显式建模变量间依赖，平衡独立视觉先验与跨变量关系。

**15. [Dissecting Agentic Forensics: Triage, Prompting, and Evidence Arbitration in Open-World Fake Image Detection](http://arxiv.org/abs/2609.24359v1)**
- 作者：Xianlong Li, Pietro Bongini, Niccoló Pancino 等
- 对开放世界假图检测中的智能体工作流进行系统拆解，剖析分诊、提示与证据仲裁三个环节各自的贡献，是 agentic AI 在取证领域的里程碑式诊断。

### 📊 应用

**16. [QLoRA Fine-Tuning of Ministral LLM for Sequence-to-Function Protein Annotation](http://arxiv.org/abs/2609.24538v1)**
- 作者：Demian Pavlyshenko, Bohdan Pavlyshenko
- 用 QLoRA 微调 Ministral 完成蛋白质功能注释，突破传统多标签分类框架的固定本体瓶颈。

**17. [Fathom-Vaidya: Advancing Medical Reasoning with Rubric-Based Rewards](http://arxiv.org/abs/2609.24480v1)**
- 作者：Kalash Shah, Kunal Singh, Snehan J 等
- 以量规奖励（rubric-based）联合优化诊断推理与临床推理两条互补能力，为医疗 LLM 部署提供可解释奖励信号。

**18. [NAVIR: Neuromorphic Audio-Visual Speech Recognition for Robust Human-Robot Interaction on Edge Hardware](http://arxiv.org/abs/2609.24391v1)**
- 作者：Leonidas Delimpasis, Panagiota Moraiti, Antonis Porichis 等
- 神经形态 AVSR 在边缘硬件上实现工业噪声环境下的稳健人机语音交互，融合唇动与音频流。

**19. [URA-NER: A Unified Retrieval-Augmented Framework with Retrieval Alignment and Uncertainty Reduction for Low-Resource NER](http://arxiv.org/abs/2609.24372v1)**
- 作者：Jingyu Wang, Shijie Wu, Fusheng Jin
- 统一检索增强框架同时解决低资源 NER 中的检索失准与生成不确定问题，提升 ICL-based NER 的稳健性。

---

## 三、研究趋势信号

从今日 50 篇投稿可观察到的几个新兴方向：

1. **"权重算术"（Model Merging）走向理论化**——不再只是 LoRA 算术的经验把戏，开始从秩分配、涌现能力保留等角度建立系统性理解，预示着 Hugging Face 风格的开源模型生态将获得更强的组合能力。

2. **智能体治理与安全合规崛起**——incident reporting、policy-constrained validation、行动可审计性集中爆发，反映出 Agent 进入生产部署后，社区已从"能力增强"转向"风险与合规治理"。

3. **RLVR（可验证奖励 RL）跨域扩张**——从纯 LLM 推理延伸至机器人 VLA、时序预测、视觉智能体，"信息时间"等概念开始挑战 token-level MDP 假设。

4. **机制可解释性跨架构扩散**——SAE 等工具从 Transformer 扩展到 Mamba/SSM，对比概念形成差异，是理解 sub-quadratic 架构的关键路径。

5. **神经形态 + 多模态边缘部署成为落地热点**——音频-视觉、触觉、机器人控制等论文密集出现，暗示 2026 年下半年 AI 工程重心已向"低功耗边缘智能体"倾斜。

---

## 四、值得精读

**📖 [The Endless Exam](http://arxiv.org/abs/2609.24555v1)** — Muhan Zhang 提出的"无尽考试"概念优雅且可执行：14 个参数化构造族 + 自动验证 + 相对质量评分，构建了一个不会饱和的数学能力标尺。任何跟踪前沿模型数学推理能力的研究者都应优先阅读，因为它很可能成为下一个半年内的参考基准。

**📖 [On Emergent Capabilities and Model Merging](http://arxiv.org/abs/2609.24504v1)** — 模型合并已成为开源社区最常见的操作之一，但"涌现能力在合并中的命运"几乎从未被严格分析。这篇论文直面这一空白，对实际工程实践（何时合并、合并什么、合并如何失败）有直接指导意义。

**📖 [Information-Time Proximal Policy Optimization](http://arxiv.org/abs/2609.24380v1)** — 把 RLVR 的时间步进从 token 重新参数化为"信息量"，是当前 GRPO/PPO 类方法底层假设的一次重要挑战。如果其经验结果稳健，将影响未来几乎所有 LLM 推理 RL 方法的设计。

---

*日报基于 2026-09-22 ArXiv cs.AI / cs.CL / cs.LG 投稿整理*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*