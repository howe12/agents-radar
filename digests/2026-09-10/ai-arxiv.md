# ArXiv AI 研究日报 2026-09-10

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-09-10 02:36 UTC

---

# 📡 ArXiv AI 研究日报 · 2026-09-10

## 一、今日速览

今日 ArXiv 投稿呈现 **效率优先、安全可靠、跨域推理** 三大主线。一方面，**KV 缓存跨上下文复用**、**测地线解码小模型**、**图结构 RAG** 等工作直击 LLM 部署成本痛点；另一方面，**对抗微调防御**、**私有可验证推理**、**多模态联邦诊断**反映了在高风险场景中构建可信 AI 的强烈需求。此外，将 RLVR 范式推广到诊断推理、几何推理、研究代理等"无唯一答案"领域的研究正密集出现，标志着 agent 化训练方法学的扩展。

---

## 二、重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

- **RiLM: Parameter-Efficient Language Modeling via Geodesic Decoding**
  [arXiv:2609.10305](http://arxiv.org/abs/2609.10305) · Fang Li
  提出基于黎曼流形的测地线解码，用流形上的"最短路径"搜索替代标准 softmax 输出，把 <1M 参数小模型在边端部署时的能力损失降到最低。

- **KVShareArena: KV-Cache Reuse Across Contexts and Model Checkpoints**
  [arXiv:2609.10266](http://arxiv.org/abs/2609.10266) · Xi Shi, Qian Lou
  将 KV 缓存复用从"前缀"扩展到 RAG 检索块拼接、多智能体协作等任意上下文位置，并支持跨 checkpoint 复用，显著降低 LLM 服务端算力开销。

- **Maverick: Private and Verifiable LLM Inference Made Practical**
  [arXiv:2609.10264](http://arxiv.org/abs/2609.10264) · Merbaum, Raeisi, Wang et al.
  通过委托矩阵-向量乘法实现既保护用户输入隐私、又可验证计算正确性的 LLM 推理，为本地算力受限但仍想用开放模型的场景提供了新路径。

- **Active Adaptation, Not Static Defense: Temporal Dynamics of Preventative Steering**
  [arXiv:2609.10142](http://arxiv.org/abs/2609.10142) · Guan, Yang, Liu et al.
  首次系统研究"防御性引导向量"在恶意微调过程中的时间动态，揭示为什么静态防御不够、需要主动自适应机制。

- **ProbPlug: A Plugin Uncertainty Network for Reliable Confidence in LLM Classification**
  [arXiv:2609.10122](http://arxiv.org/abs/2609.10122) · Wang, Liu, Zhao et al.
  以可插拔方式为 LLM 二分类提供置信度校准，模块化设计使其无需重训即可接入既有 LLM 分类系统。

- **DiSCo: A Distribution-First Framework for Cultural Preference Bias in LLMs**
  [arXiv:2609.10253](http://arxiv.org/abs/2609.10253) · Arora, Saraogi, Varada et al.
  从分布角度（而非聚合准确率）衡量 LLM 在文化情境中的默认偏好偏差，更细粒度地揭示模型偏置。

---

### 🤖 智能体与推理

- **TRACE: Training Reasoning Agents for Causal Exploration with Synthesized Rewards**
  [arXiv:2609.10315](http://arxiv.org/abs/2609.10315) · Rui Sun, Zhan Shi, Bing He
  把 RLVR（可验证奖励强化学习）从数学/代码延伸到诊断因果推理，核心创新是"合成奖励信号"——在没有 ground-truth 因果标签时仍可训练。

- **RAP: Research Attention Prediction Reveals Target-Conditioned Evidence Acquisition Biases**
  [arXiv:2609.10092](http://arxiv.org/abs/2609.10092) · Wu, Liang, Wang et al.
  推出覆盖 278 个主题的滚动基准 RAP，用于评估 LLM 跟踪"研究热点迁移"的能力，揭示出 LLM 研究代理存在证据获取偏置。

- **From Symbolic Perception to Logical Deduction: Geometric Reasoning with Pure LLMs**
  [arXiv:2609.10335](http://arxiv.org/abs/2609.10335) · Dai, Cabral, Shou et al.
  证明在显式符号感知 + 形式逻辑引导下，纯 LLM 也能在平面几何任务上匹敌多模态大模型，且更轻量、可解释。

- **Kernel-Managed Shared Memory for System-Wide Personalization**
  [arXiv:2609.10144](http://arxiv.org/abs/2609.10144) · Ryan Lum, Yongfeng Zhang
  在 OS 内核层为多智能体系统引入共享带标签记忆，打破"单 agent 学习成果对其他 agent 不可见"的孤岛。

- **Agent-Based ML-LLM Fusion for Plateau Weather Alerts**
  [arXiv:2609.10135](http://arxiv.org/abs/2609.10135) · Shuai Yan, Yang Xu, Shan He
  三阶段意图识别 + 灾害预测 + 推理增强生成的旅游气象智能体，展示了 rule-ML-LLM 融合在垂直领域的实用模板。

---

### 🔧 方法与框架

- **View-Structured Conformal Prediction for 3D Gaussian Splatting**
  [arXiv:2609.10307](http://arxiv.org/abs/2609.10307) · Junzheng Chu, Bin Pan, Zhenwei Shi
  首次把共形预测（conformal prediction）引入 3DGS 新视角合成，为渲染输出提供有限样本保证的覆盖率区间。

- **Why Is Video Still So Expensive? A Survey of Inference-Efficiency Mechanisms in Video/Audiovisual LLMs**
  [arXiv:2609.10355](http://arxiv.org/abs/2609.10355) · Steunou, Tevissen, El Yacoubi
  系统梳理 VideoLLM 推理效率机制（token 压缩、缓存、蒸馏、稀疏注意力等），并指出"贵"的根本不在模型规模而在 token 复杂度。

- **LiteRAG: Cost-Efficient Graph-Based Retrieval-Augmented Generation**
  [arXiv:2609.10239](http://arxiv.org/abs/2609.10239) · Coll Tejeda, García López, Barcelona-Pons
  用图检索取代检索时的重型 LLM 控制流，并通过上下文精简降低生成成本，适合多跳问答落地。

- **Training Trajectories Determine Circuit Removability in Annealable Soft-Prior Transformers**
  [arXiv:2609.10287](http://arxiv.org/abs/2609.10287) · Yang, Zhao, Tang et al.
  揭示"软位置先验"在小 Transformer 中形成的检索回路是否可移除，取决于训练轨迹而非权重本身——为可解释性研究提供新视角。

- **Φ-Bench: Can LLMs Engineer the Infrastructure That Powers Them?**
  [arXiv:2609.10226](http://arxiv.org/abs/2609.10226) · Ding, Wang, Huang et al.
  新基准直接评估 LLM 优化训练/推理基础设施的能力，比传统 kernel 级评测更贴近实际工程链路。

- **From Retrieval to Weights: Parametric Individualization of Small LMs**
  [arXiv:2609.10155](http://arxiv.org/abs/2609.10155) · Wigbels, Abusaleh, Jansen et al.
  把 515 名用户的搜索历史同时用于 RAG 与 DoRA 微调，模拟个体化情景/语义记忆，是认知启发的语言建模新尝试。

---

### 📊 应用（垂直领域、多模态、代码生成）

- **OmniMed-FL: A Robust Multimodal Federated Learning Framework for Clinical Diagnosis**
  [arXiv:2609.10364](http://arxiv.org/abs/2609.10364) · Debnath, Saha, Misra
  在 HIPAA/GDPR 约束下联合学习医学影像 + 患者记录的多模态联邦诊断框架，直接面向真实临床落地痛点。

- **OntologyAligner: Ontology-Aligned Retrieval and Reranking for Biomedical Normalization**
  [arXiv:2609.10055](http://arxiv.org/abs/2609.10055) · Jie Song, Zhichuan Xu, Ziyu Lu et al.
  利用生物医学本体层次结构做检索 + LLM 重排，专攻"近义概念易混淆"这一本体归一难题。

- **Maverick 重复条目见上**
  （隐私推理见 🧠 板块）

---

## 三、研究趋势信号

今天稿件呈现三条值得关注的趋势：

1. **从"标准 RLVR"走向"无唯一答案领域 RLVR"** — TRACE（因果诊断）、几何推理 RAP（研究热点预测）三篇都尝试在缺乏可验证 ground-truth 的场景里合成或代理奖励信号，预示 RL 训练范式将进一步泛化。

2. **"可信 + 高效"双重压力成为 LLM 系统研究主流** — KV 缓存复用、小模型测地解码、私有可验证推理、防御性引导向量几乎都同时回应了这两个诉求，反映行业对"既快又可信"的强烈需求。

3. **多模态 + 垂直领域 + 本体知识深度耦合** — 联邦医学诊断、本体归一、生物医学 RAG、音乐标注工作站等论文共同说明，纯语言建模的红利期已过，知识与领域结构开始成为下一步竞争点。

---

## 四、值得精读

1. **[TRACE: Training Reasoning Agents for Causal Exploration with Synthesized Rewards](http://arxiv.org/abs/2609.10315)**
   理由：把 RLVR 从数学/代码迁移到诊断因果推理，并设计合成奖励，是 agent 训练方法学的重要扩展；写作清晰，奖励设计有可复用性，对任何想在"开放性领域"做 RL 微调的团队都具参考价值。

2. **[Maverick: Private and Verifiable LLM Inference Made Practical via Matrix-Vector Multiplication Delegation](http://arxiv.org/abs/2609.10264)**
   理由：隐私 + 可验证性往往是安全 LLM 服务的两难，本文通过委托矩阵-向量乘法给出可落地的方案，兼顾开源模型透明性与云端推理算力，对企业部署尤其重要。

3. **[View-Structured Conformal Prediction for 3D Gaussian Splatting](http://arxiv.org/abs/2609.10307)**
   理由：把统计学习中的有限样本覆盖保证（conformal prediction）首次应用于 3DGS 这种非传统回归问题，方法优雅且易于迁移到其他生成模型，对建立"可声明误差界"的神经渲染系统是关键一步。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*