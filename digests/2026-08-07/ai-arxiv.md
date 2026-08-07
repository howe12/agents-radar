# ArXiv AI 研究日报 2026-08-07

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-08-07 02:21 UTC

---

# ArXiv AI 研究日报 | 2026-08-07

## 📌 今日速览

今日投稿呈现三条主线：(1) **智能体研究持续深化**——从技能库检索、长期自我演化到推理模型的自蒸馏，agentic RL 成为最受关注的方向；(2) **后训练技术走向体系化**——出现首个六维分类框架，并针对推理、表格、低资源语言、视觉控制提出针对性适配方案；(3) **"思维可视化"范式遭因果审计质疑**——crop/zoom 等视觉工具以高 token 代价换得微弱甚至负向收益。这些信号表明 AI 研究的关注点正从"能做什么"转向"如何做才真正有效"。

---

## 🔬 重点论文

### 🧠 大语言模型

**DASH: Divergence-Adaptive Supervision Horizons for On-Policy Self-Distillation of Reasoning Models**
🔗 http://arxiv.org/abs/2608.06243v1
👤 ZhiYan Hou, Xinyu Tang, Hongyan An 等
💡 针对 RLVR 奖励稀疏问题，提出基于"分歧度"自适应调整监督窗口的自我蒸馏方法，让推理模型在中间 token 即获得有效信号反馈。

**A Six-Dimensional Taxonomy of Post-Training Adaptation Techniques with Applications in AI Governance**
🔗 http://arxiv.org/abs/2608.06246v1
👤 Fardin Afdideh, Fernando Seoane, Farhad Abtahi
💡 系统梳理 9 类后训练方法（微调、PEFT、对齐、RAG、模型编辑、遗忘等），首次将六维分类与 AI 治理结合。

**SiPE: Syntax-Informed Positional Embeddings for Transformers**
🔗 http://arxiv.org/abs/2608.06111v1
👤 Haris Riaz, Hyungji Kim, Mihai Surdeanu
💡 将依存句法先验以轻量方式注入位置编码，让 Transformer 显式感知句法结构，而非仅建模距离信息。

**The Illusion of Visual Tool-Use: A Causal Audit of Thinking with Images**
🔗 http://arxiv.org/abs/2608.06270v1
👤 Zhiheng Wang, Bo Peng, Lai Wei 等
💡 对"思维可视化"范式进行因果审计，揭示 crop/zoom 操作多以高 token 成本换取微弱甚至负向收益，并伴随反复裁剪无关区域的失效模式。

**SAGA: Score-Weighted Adaptive Generation Alignment for Low-Resource Nordic Language Models**
🔗 http://arxiv.org/abs/2608.06179v1
👤 Hoda Fakharzadehjahromy, Emil Wiman, Andreas Bueff 等
💡 针对形态复杂的低资源北欧语系，提出基于分数加权的自适应生成对齐，免去昂贵的人工偏好标注。

---

### 🤖 智能体与推理

**EnvACE: Internalizing Environment Dynamics via World Rehearsal for Agentic RL**
🔗 http://arxiv.org/abs/2608.06197v1
👤 Zishan Xu, Zhiyuan Yao, Yuxin Chen 等
💡 通过"世界演练"让 LLM Agent 内部模拟环境动力学，避免对真实可执行环境的依赖，为长程工具使用训练大幅降本。

**Learning Globally Reusable Skills for Coding Agents**
🔗 http://arxiv.org/abs/2608.06153v1
👤 Chen Yang, Jiashuo Tian, Ziqi Wang 等
💡 突破现有"技能局部更新"思路，构建可跨任务复用的全局代码技能库，避免过拟合式的局部技能更新。

**FinEvo-Bench: A Longitudinal Benchmark for Self-Evolving Agents in Professional Financial Workflows**
🔗 http://arxiv.org/abs/2608.06144v1
👤 Bo Deng, Kang Zhou, Lifan Guo 等
💡 首个纵向评测自演化智能体在专业金融工作流中能力增长的基准，覆盖开放式交付与多维评估。

**Contextual Information Policy Optimization for Search Agents**
🔗 http://arxiv.org/abs/2608.06128v1
👤 Xingyu Guo, Wei Chen, Linlin Yang 等
💡 针对多步搜索推理，以情境感知策略优化提升外部证据利用的可靠性，面向知识密集型任务。

**Routing Is Least Learnable Where It Is Most Valuable: Bounds on Representation Routing for Web Agents**
🔗 http://arxiv.org/abs/2608.06171v1
👤 Jiaming Wei, Zekun Wu, Adriano Koshiyama 等
💡 通过 6 种观测模式 × 8 站点组合分析，揭示 Web 智能体按任务选择表征路由时，"学习难度"与"价值"呈反向关系。

**Mind the Gaps: Mixture-of-Minds for Human Simulation**
🔗 http://arxiv.org/abs/2608.06115v1
👤 Pranav Dahiya
💡 提出"思维混合"模拟器，恢复群体异质性而非仅中心趋势，弥补 LLM 模拟器在个体层面预测能力的缺

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*