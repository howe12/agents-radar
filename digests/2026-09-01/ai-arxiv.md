# ArXiv AI 研究日报 2026-09-01

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-09-01 03:02 UTC

---

# ArXiv AI 研究日报
**2026-09-01 · 共 50 篇新论文（cs.AI / cs.CL / cs.LG）**

---

## 📌 今日速览

今日投稿呈现出几条清晰的脉络：**Physical AI 与长上下文建模**强势回归（TuringLLM 等），**LLM 自我改进与外部验证机制**成为新焦点（WebWorld），**MoE 量化与张量分解**等效率研究持续走热，**多智能体编排与不确定性量化**也出现重要基准与新方法。值得注意的是，安全、对齐、可解释性方向的工作密度依然很高，反映出**"能力扩展"与"可靠部署"并行的研究态势**。

---

## 🔬 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**TuringLLM: Efficiently Scaling Foundation Models Toward Physical AI**
- 作者: Yuheng Zhang, Yizhao Wang, Da Zhu 等
- 链接: http://arxiv.org/abs/2608.30567v1
- 提出 20B 参数（每 token 激活 ~2B）的 MoE 语言模型，采用 Quantile Routing 与动态 top-k，专为长上下文、低延迟的 Physical AI 场景设计。

**Q-Strata: Hierarchical Bit Allocation for Mixed-Precision Quantization of Mixture-of-Experts LLMs**
- 作者: Deokjae Lee, Sihun Chu, Hyun Oh Song
- 链接: http://arxiv.org/abs/2608.30564v1
- 针对 MoE 模型每个专家层都需要量化的新挑战，提出层次化比特分配策略，显著降低量化开销。

**REER-PT: Reverse-Engineered Reasoning for Perplexity-Guided Pre-training Data Augmentation**
- 作者: Haoran Que, Jiajun Shi, Ting Huang 等
- 链接: http://arxiv.org/abs/2608.30627v1
- 通过反向工程为预训练数据补充显式推理链，缓解 next-token 预测对中间推理监督不足的问题。

**GMTS: Gradient Magnitude-based Token Selection Improves RLVR Training for LLM Reasoning**
- 作者: Outongyi Lv, Yuanwei Zhang, Xiaoqun Zhang
- 链接: http://arxiv.org/abs/2608.30632v1
- 提出基于梯度幅值的 token 选择方法，提升 RLVR 在推理任务上的训练效率与稳定性。

**PLC-DPO: Posterior Label Correction in Noisy and Ambiguous Preference Optimization**
- 作者: Boryeong Cho, Sumyeong Ahn, Se-Young Yun
- 链接: http://arxiv.org/abs/2608.30597v1
- 在 DPO 中引入后验标签修正机制，对噪声偏好与冲突标签进行软纠正。

**BiG-SURE: Bipartite Graph for Semantic Uncertainty and Reliability Estimation of LLMs**
- 作者: Debarpan Bhattacharya, Malay Phadke, Sriram Ganapathy
- 链接: http://arxiv.org/abs/2608.30646v1
- 基于交叉温度采样的二部图不确定性估计器，适用于黑盒 LLM/VLM 的安全敏感部署。

**Reading the News: Adapting LLMs to Swedish Journalism Through Continued Pre-Training**
- 作者: Lukas Borggren, Jenny Kunz, Marco Kuhlmann
- 链接: http://arxiv.org/abs/2608.30609v1
- 系统研究通过持续预训练将通用 LLM 适配到小语种领域语料的可行性与代价。

---

### 🤖 智能体与推理

**SwarmBench: Can Large Language Models Act as Agent Swarm Orchestrators?**
- 作者: Jinshan Gao, Zhuoran Jin, Tianyi Men 等
- 链接: http://arxiv.org/abs/2608.30661v1
- 首个专门评估 LLM 编排动态多智能体群（Agent Swarm）能力的基准。

**WebWorld: The Browser as a World Model for Self-Improving Web Code**
- 作者: Jiajun Wu, Jian Yang, Yaxin Du 等
- 链接: http://arxiv.org/abs/2608.30530v1
- 把浏览器作为 VLM 不可欺骗的外部世界模型，用于 web 代码自改进回路，缓解"自我评判"偏置。

**AdaPath: Query-Adaptive Path-Finding via Path-Bank for Multi-Hop Implicit Biomedical KGQA**
- 作者: Jun Hyeong Kim, Dongki Kim, Yinhua Piao 等
- 链接: http://arxiv.org/abs/2608.30556v1
- 提出查询自适应的 Path-Bank 路径发现机制，针对生物医学多跳隐式问答场景优化。

**PAC: Progress-Augmented Advantage Curriculum for Multi-Task RL of LLMs**
- 作者: Yuanqiang Yu, Yanzhao Zheng, Zhentao Zhang 等
- 链接: http://arxiv.org/abs/2608.30528v1
- 在 LLM 多任务强化学习中引入基于"进步度"的自适应课程，缓解固定任务混合的局限。

**Hidden Threat in Synthetic Data: Covert Targeted Bias Injection through Benign Text**
- 作者: Minkyung Cho, Jihyo Kim, SeungWoo Song 等
- 链接: http://arxiv.org/abs/2608.30619v1
- 揭示通过"良性"合成数据向 LLM 注入隐蔽定向偏见的攻击路径，扩展了 subliminal learning 的威胁面。

**The Safety Relay in Roleplay Jailbreaks: A Component-Resolved Causal Analysis**
- 作者: Md Mokarram Chowdhury, Ernie Chang, Yang Li
- 链接: http://arxiv.org/abs/2608.30585v1
- 对角色扮演越狱攻击进行组件级因果分析，定位模型"安全识别—拒绝"回路中的关键中继点。

---

### 🔧 方法与框架

**MURANO: Design, Run, and Reproduce Mechanistic Interpretability Experiments as Composable Pipelines**
- 作者: Alireza Bayat Makou, Emirhan Böge, Phu Gia Hoang 等
- 链接: http://arxiv.org/abs/2608.30662v1
- 开源机制可解释性实验框架，将加载、记录、归因、干预、评估模块化为可组合 pipeline。

**Tensor Methods for Language Models: From Token Representation to Training, Adaptation, Inference, Compression, and Interpretability**
- 作者: Matvei Tarasov, Salman Ahmadi-Asl, Andre L. F. de Almeida 等
- 链接: http://arxiv.org/abs/2608.30505v1
- 系统综述张量分解与张量网络在 LLM 各环节的应用，是该方向难得的统一视角。

**ScienceArena: Benchmarking LLMs on Latest Scientific Olympiad Competitions**
- 作者: Guangxiang Zhao, Qilong Shi, Xusen Xiao 等
- 链接: http://arxiv.org/abs/2608.30517v1
- 来自 13 项国际科学奥赛（含 IPhO/IChO 2025–2026）的新基准，用于评估前沿 LLM 真实科研推理能力。

**PyKEEN-NSX: A Modular Framework for Static, Dynamic and Schema-Aware Negative Sampling in PyKEEN**
- 作者: Ivan Diliso, Nicola Fanizzi, Claudia d'Amato
- 链接: http://arxiv.org/abs/2608.30652v1
- 扩展 PyKEEN，支持静态/动态/模式感知的负采样策略，提升 KG 嵌入质量。

**Where Identity Lives: Localized, Retain-Free Identity Unlearning in Multimodal LLMs**
- 作者: Kangwook Ko, Jaehyuk Jang, Wonjun Lee 等
- 链接: http://arxiv.org/abs/2608.30649v1
- 在 MLLM 中实现无需 retain set 的本地化身份遗忘，避免保留集重建带来的二次隐私暴露。

---

### 📊 应用

**Fine-Grained Multi-Image Object Hallucination Benchmark**
- 作者: Joonki Min, Chaeyun Kim, Hyungwook Choi 等
- 链接: http://arxiv.org/abs/2608.30653v1
- 针对多图像 MLLM 中的细粒度物体幻觉，构建更贴近复杂视觉推理的评测基准。

**UTILMEM: Benchmarking Evidence Utilization in Long-Term Conversational Memory**
- 作者: Peijun Qing, Fobo Shi, Soroush Vosoughi
- 链接: http://arxiv.org/abs/2608.30508v1
- 超越点状事实回忆，评估对话代理在长程记忆中"证据整合推理"的能力。

**GarmentWeaver: Schema-Aware Structured Synthesis for Multimodal Sewing Patterns**
- 作者: Yinwen Lu, Weihao Luo, Yueqi Zhong
- 链接: http://arxiv.org/abs/2608.30550v1
- 从草图与文本生成可执行的缝纫版型，融合 schema 约束与多模态生成。

**DiffPDE: Masked Diffusion Language Models as PDE Solver**
- 作者: Wenxuan Guo, Yuyang Hong, Lubin Fan 等
- 链接: http://arxiv.org/abs/2608.30532v1
- 用掩码扩散 LM 替代自回归 PDE 求解器，避免逐 token 串行解码的冗余。

---

## 📈 研究趋势信号

**"Physical AI" 成为新主战场**：从 TuringLLM 专为物理场景设计的 MoE，到 DiffPDE 用扩散模型求解 PDE，再到 Quantum-Grassmann 灾后损毁评估，物理世界的科学计算与具身智能正成为大模型落地的下一个聚焦点。**"闭环验证 + 自改进"** 范式兴起：WebWorld 引入浏览器作为不可欺骗的外部世界模型，标志 LLM 自训练开始引入"非模型自身"的环境反馈器。**MoE 时代的量化与张量视角**：Q-Strata、Tensor Methods for LMs 显示，研究者正以张量分解、混合精度等手段重构 MoE 架构的效率边界。**安全与对齐的纵深推进**：从 Roleplay Jailbreak 的组件因果分析、合成数据隐蔽偏见到无保留集身份遗忘，安全研究从"现象"走向"机制"。

---

## 📚 值得精读

1. **TuringLLM**（http://arxiv.org/abs/2608.30567v1）—— 系统展示了面向 Physical AI 的 MoE 设计取舍（Quantile Routing、动态 top-k、长上下文），是理解当下"基础模型 × 具身/物理场景"如何耦合的典型范例。

2. **WebWorld**（http://arxiv.org/abs/2608.30530v1）—— 提出"用浏览器当世界模型"的优雅方案，直击 VLM 自改进回路中自我评判的根本缺陷，方法论与工程意义都值得深读。

3. **ScienceArena**（http://arxiv.org/abs/2608.30517v1）—— 在基准污染与饱和问题日益严重的当下，来自最新奥赛题目的评估集对衡量真实科研推理能力极具参考价值。

---

*日报由 AI 研究分析师自动生成 · 数据来源：ArXiv（2026-09-01）*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*