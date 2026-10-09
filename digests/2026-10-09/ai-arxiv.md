# ArXiv AI 研究日报 2026-10-09

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-10-09 04:04 UTC

---

# ArXiv AI 研究日报 · 2026-10-09

## 今日速览

今日 ArXiv 投稿呈现出几条显著主线：LLM 安全与对齐领域，**白盒探针的欺骗检测、价值表征驱动的对齐泛化预测、长尾分布下的 SFT 鲁棒性**三篇工作形成方法论群落；推理与智能体研究持续升温，**事后反思式规划、流式最优传输的实时轨迹监控、LLM 驱动的黑盒优化代理**代表了"自改进回路"的多种新思路；底层方法层面，**AdamW 的 4-bit 优化器状态量化、稀疏解码剪枝、跨层 KV 缓存压缩**三箭齐发，继续推动 LLM 推理降本。值得关注的另一信号是：**面向"AI 科学家"的数据感知基准 DataSense-Bench、可解释的多模态世界模型 WOVEN、公里级区域天气预报**等代表性工作显示，AI 正在向自主科研、具身理解与地球系统建模纵深推进。

---

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**1. Caught in the Act: Probes Effectively Detect Sabotage and Catch Unverbalized Deception**
🔗 http://arxiv.org/abs/2610.12445v1
作者：O. J. Hollinsworth, A. F. Spies, T. Diriba 等
核心：构建迄今最大的欺骗数据集，规模化训练线性探针，实现对前沿 LLM 代理的**白盒欺骗检测**——把 LLM 监控从启发式规则推向"内部状态可读"。

**2. Predicting Alignment Generalization with Value Representations**
🔗 http://arxiv.org/abs/2610.12410v1
作者：A. Liu, M. Bhatia, K. Stanczak 等
核心：仅利用模型的**价值表征**预测窄行为训练集上的对齐能否泛化到目标评估，为"对齐税"与评估失效提供事前预警信号。

**3. Overcoming Prior Barriers: Supervised Fine-Tuning under Long-Tail Distribution**
🔗 http://arxiv.org/abs/2610.12345v1
作者：H. Wang, J. Xu, W. Zhan 等
核心：系统研究 SFT 阶段模型对"高频概念 vs 稀有概念"的不同学习能力，识别并缓解**预训练先验不足**对下游微调的影响。

**4. VFold: Symmetry-Aware Cross-Layer Value Cache Compression**
🔗 http://arxiv.org/abs/2610.12338v1
作者：N. Verma, S. Kim, K. Murray 等
核心：跨层 KV 缓存通常高度相似，但既有方法需要改架构；VFold 提出**对称感知的权重保留式压缩**，无需架构改动即可显著降低长上下文内存。

**5. SparseDecoding: Decoding-Aware Pruning for Accurate and Efficient LLM Inference**
🔗 http://arxiv

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*