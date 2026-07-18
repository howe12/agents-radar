# ArXiv AI 研究日报 2026-07-18

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-07-18 01:53 UTC

---

# 📘 ArXiv AI 研究日报 · 2026-07-18

---

## ⚡ 今日速览

今日投稿呈现几条清晰主线：**测试时训练（TTT）正成为下一代长上下文智能体的核心范式**（RoboTTT 将机器人策略上下文扩至 8K 时步；Online NSTM 同样采用 TTT 机制处理流式视频）；**强化学习与扩散/流模型的深度结合**持续推进（MeanFlowNFT、Mask-Aware Policy Gradients 分别在平均速度生成器与掩码扩散语言模型上解锁 RL 微调）；**多模态安全与对齐从文本延伸到物理/感知层**（BadWAM、Physical Danger Probing、MedFailBench 同时审视"语言无害但行动危险"的边界）。整体上，**"超长记忆 + 多步推理 + 跨模态安全"** 是今天最具冲击力的研究走向。

---

## 🧠 大语言模型（架构、训练、对齐、评估）

**1. T²MLR: Transformer with Temporal Middle-Layer Recurrence**
[arXiv:2607.15178](http://arxiv.org/abs/2607.15178v1) · Ziyang Cai, Xingyu Zhu, Yihe Dong 等
👉 在 Transformer 中引入中层时间维度循环，让中间推理状态可跨 token 持续存在，突破了自回归解码的信息瓶颈。

**2. Mask-Aware Policy Gradients for Diffusion Language Models**
[arXiv:2607.15200](http://arxiv.org/abs/2607.15200v1) · Haran Raajesh, Kulin Shah, Adam Klivans 等
👉 针对掩码扩散语言模型提出可处理的策略梯度方法，将 RL 推理能力扩展到 MDLMs，是该方向首个可扩展方案。

**3. On-Policy Delta Distillation**
[arXiv:2607.15161](http://arxiv.org/abs/2607.15161v1) · Byeongho Heo, Jaehui Hwang, Sangdoo Yun 等
👉 重审 On-Policy 蒸馏的理论根基，提出 Delta 蒸馏新范式，为后训练提供绕开奖励模型限制的新路径。

**4. In-Place Tokenizer Expansion for Pre-trained LLMs**
[arXiv:2607.15232](http://arxiv.org/abs/2607.15232v1) · Jimmy T. H. Smith, Tarek Dakhran, Alberto Cabrera 等
👉 原位扩展预训练 LLM 的词表以纳入新语言/任务，避免低资源语言被过度碎片化，直接改善延迟与能耗。

**5. Rubrics on Trial: Evolving Rubrics from a Single Query via Synthetic Pairwise Evidence**
[arXiv:2607.15092](http://arxiv.org/abs/2607.15092v1) · Haocheng Yang, Licheng Pan, Xiaoxi Li 等
👉 从单一查询出发合成成对证据并演化评分标准，为 LLM 训练/评测提供更细粒度的自动 rubric 构建方法。

**6. Can We Trust Item Response Theory for AI Evaluation?**
[arXiv:2607.15190](http://arxiv.org/abs/2607.15190v1) · Han Jiang, Sunbeom Kwon, Jinwen Luo 等
👉 首次系统质疑 IRT 用于 AI 基准评测的可靠性，对当前以 IRT 排名 LLM 的做法提出方法论警告。

**7. Linear Representations of Grammaticality in Neural Language Models**
[arXiv:2607.15175](http://arxiv.org/abs/2607.15175v1) · Jane Li, Najoung Kim
👉 通过表征几何证明 NLM 内部确实存在可线性解码的"语法性"方向，为可解释性研究提供新证据。

---

## 🤖 智能体与推理

**8. RoboTTT: Context Scaling for Robot Policies**
[arXiv:2607.15275](http://arxiv.org/abs/2607.15275v1) · Yunfan Jiang, Yevgen Chebotar, Ruijie Zheng 等
👉 通过测试时训练将机器人视觉运动上下文扩至 8K 时步（提升三个数量级），首次让通用机器人策略拥有"长时记忆"。

**9. SearchOS-V1: Towards Robust Open-Domain Information-Seeking Agent Collaboration**
[arXiv:2607.15257](http://arxiv.org/abs/2607.15257v1) · Yuyao Zhang, Junjie Gao, Zhengxian Wu 等
👉 针对长交互历史下智能体易"迷失"的问题，提出多智能体协作的开放域搜索系统 OS-V1。

**10. Plover: Steering GUI Agents through Plan-Centric Interaction**
[arXiv:2607.15193](http://arxiv.org/abs/2607.15193v1) · Madhumitha Venkatesan, Shicheng Wen, Jiajing Guo 等
👉 以"计划为中心"的交互方式引导 GUI 智能体，缓解动态界面下的意图漂移问题。

**11. AutoSynthesis: An Agentic System for Automated Meta-Analysis**
[arXiv:2607.15247](http://arxiv.org/abs/2607.15247v1) · Moein Taherinezhad, Sebastian Maier, Gerardo Vitagliano 等
👉 端到端多智能体系统自动完成元分析全流程，有望将循证医学的证据合成从手工转为工业化。

**12. BrainPilot: Automating Brain Discovery with Agentic Research**
[arXiv:2607.15079](http://arxiv.org/abs/2607.15079v1) · Haoxuan Li, Tianci Gao, Jianhe Li 等
👉 用 Agentic 框架把"综述→分析→解释"组装成研究流水线，应用于跨尺度神经科学研究。

**13. BadWAM: When World-Action Models Dream Right but Act Wrong**
[arXiv:2607.15207](http://arxiv.org/abs/2607.15207v1) · Qi Li, Xingyi Yang, Xinchao Wang
👉 揭示世界-动作模型（WAMs）中"预测正确但决策错误"的安全悖论，对具身基础模型安全性至关重要。

**14. Bridge Evidence: Static Retrieval Utility Does Not Predict Causal Utility in Multi-Step Agentic Search**
[arXiv:2607.15253](http://arxiv.org/abs/2607.15253v1) · Debayan Mukhopadhyay, Utshab Kumar Ghosh, Shubham Chatterjee
👉 证明静态检索效用无法预测多步搜索中的因果效用，颠覆当前检索器训练范式。

---

## 🔧 方法与框架

**15. MeanFlowNFT: Bringing Forward-Process RL to Average-Velocity Generators**
[arXiv:2607.15273](http://arxiv.org/abs/2607.15273v1) · Yushi Huang, Xiangxin Zhou, Jun Zhang 等
👉 在平均速度生成器上引入前向过程 RL，首次让少步采样扩散模型也能通过人类偏好对齐。

**16. Online Neural Space Time Memory for Dynamic Novel View Synthesis**
[arXiv:2607.15271](http://arxiv.org/abs/2607.15271v1) · Baback Elmieh, Lynn Tsai, Zeman Li 等
👉 用 TTT 在流式多视图视频上做实时新视角合成，在长时记忆与实时性间取得平衡。

**17. SceneBind: Binding What and Where Across Vision, Audio and Language**
[arXiv:2607.15265](http://arxiv.org/abs/2607.15265v1) · Mingfei Chen, Zijun Cui, Ruoke Zhang 等
👉 首个联合语义与 3D 空间的全模态场景表征，让"何物在何处"真正统一。

**18. Long-Context Fine-Tuning with Limited VRAM**
[arXiv:2607.15105](http://arxiv.org/abs/2607.15105v1) · Vladimir Fedosov, Aleksandr Sazhin, Artemiy Grinenko 等
👉 分层全局注意力 + 分段反向传播 + 分层 KV 存储，让消费级 GPU 也能微调长上下文 LLM。

**19. AlphaWiSE: Adaptive Weight Interpolation for Continual Multimodal Representation Learning**
[arXiv:2607.15094](http://arxiv.org/abs/2607.15094v1) · Sarthak Jain, Qiran Hu, Zhen Zhu 等
👉 用自适应权重插值在持续学习中保留 CLIP 类模型的跨模态对齐，避免单 checkpoint 灾难性遗忘。

---

## 📊 应用（垂直领域与多模态）

**20. Cost-Aware Evaluation of Offensive and Defensive Security Agents**
[arXiv:2607.15263](http://arxiv.org/abs/2607.15263v1) · Paul Kassianik, Blaine Nelson, Yaron Singer
👉 把推理成本纳入安全智能体评测，纠正"只看成功率不看花费"的工业级盲点。

**21. MedFailBench: A Clinician-Built Open-Source Benchmark for Medical AI Safety Boundary Inspection**
[arXiv:2607.15166](http://arxiv.org/abs/2607.15166v1) · Goktug Ozkan
👉 临床医生构建的医疗 AI 安全边界基准，按严重程度（1–5）+安全门类型对失败模式分类。

**22. SciDiagramEdit: Learning to Edit Scientific Diagrams from Paper Revisions**
[arXiv:2607.15272](http://arxiv.org/abs/2607.15272v1) · Yasheng Sun, Zezi Zeng, Yifan Yang 等
👉 从论文修订轨迹中学习科学图表编辑，开辟"科研副驾"新场景。

**23. When Words Are Safe But Actions Kill: Probing Physical Danger Beyond Text Safety**
[arXiv:2607.15218](http://arxiv.org/abs/2607.15218v1) · Weimeng Wang, Ziqiang Wang, Zihang Zhan 等
👉 在隐藏状态风险空间中探测 LLM 物理执行层危险，把具身智能的安全评估从文本拓展到行动。

**24. Pretraining Data Can Be Poisoned through Computational Propaganda**
[arXiv:2607.15267](http://arxiv.org/abs/2607.15267v1) · Victoria Graf, Hannaneh Hajishirzi, Noah A. Smith 等
👉 证明预训练数据可通过"计算宣传"被投毒，且难以被现有方法检测，警示数据供应链风险。

**25. Scaling Behavior Foundation Model for Humanoid Robots**
[arXiv:2607.15163](http://arxiv.org/abs/2607.15163v1) · Weishuai Zeng, Kangning Yin, Xiaojie Niu 等
👉 行为基础模型（BFM）在人形机器人上的规模化探索，为通用具身智能体提供新底座。

---

## 📈 研究趋势信号

今日投稿释放出三股新趋势信号。**第一，"测试时训练"（TTT）正在从理论走向系统级应用**——RoboTTT 把它用在机器人策略，Online Neural Space Time Memory 用在新视角合成，预示 TTT 将与 Transformer 形成互补的"长时记忆层"。**第二，RL 在生成模型上的渗透已从传统扩散扩散蔓延到平均速度生成器（MeanFlowNFT）、掩码扩散语言模型（Mask-Aware PG），构成 2026 下半年的关键技术竞赛场**。**第三，"安全"边界正被重新定义**——从文本内容安全（MedFailBench）跨到物理行动安全（BadWAM、Physical Danger），再到数据供应链安全（Poisoning Propaganda），多层次威胁模型正在取代单一文本审核范式。综合来看，**"长记忆 × 多步推理 × 跨模态安全"**正成为下一阶段基础模型的共同设计语言。

---

## 📖 值得精读

**🥇 RoboTTT** [arXiv:2607.15275](http://arxiv.org/abs/2607.15275v1)
将机器人视觉运动上下文扩至 8K 时步，是首个真正意义上让通用机器人策略"看见历史"的方案，对具身智能意义深远；同时其方法论（TTT for long context）可推广到任意流式多模态任务。

**🥈 Mask-Aware Policy Gradients for Diffusion LMs** [arXiv:2607.15200](http://arxiv.org/abs/2607.15200v1)
首次打通"RL × 掩码扩散 LM"的工程路径，若扩散 LM 成为下一代推理底座，这篇论文将是被反复引用的奠基工作。

**🥉 Pretraining Data Can Be Poisoned through Computational Propaganda** [arXiv:2607.15267](http://arxiv.org/abs/2607.15267v1)
视角独特：跳出"模型层红队"，直击数据供应链上游的可被操纵性，是 AI Safety 领域被长期低估的研究方向。

---

*📅 数据来源：ArXiv 2026-07-16 批次（cs.AI / cs.CL / cs.LG）*
*📊 共收录 50 篇，本文精选 25 篇*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*