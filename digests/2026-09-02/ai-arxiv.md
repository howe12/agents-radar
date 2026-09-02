# ArXiv AI 研究日报 2026-09-02

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-09-02 02:23 UTC

---

# 📡 ArXiv AI 研究日报 · 2026-09-02

---

## 📌 今日速览

今日投稿呈现出三个清晰的聚焦点：**智能体系统的安全治理与自动化构建**成为最显著的主题，多篇论文围绕递归智能体的风险授权（#39）、LLM 守卫模型（#33）、高风险 ML 的因果证据治理（#37）展开；同时，**MoE 架构与多模态效率**的工程优化持续深入，从对比路由（#16）、路径组合（#43）到视觉 token 剪枝（#47）形成完整链条；此外，**机制可解释性**开始从现象描述走向代数化框架（#6、#31），为理解大模型内部表征提供更严格的形式语言。

---

## 🔬 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**1. [Scaled Idempotence in Transformer Attention](http://arxiv.org/abs/2609.01129v1)**
- 作者：Jiming Feng, Junliang Li
- 要点：在 2.8B–235B 六个预训练模型中发现约 4–8% 的注意力头满足 OV 算子的近幂等性（$T^2 \approx \alpha T$），为注意力机制提供了代数化解释。

**2. [Beyond Magnitude: Contrastive Routing for Modular Mixture-of-Experts](http://arxiv.org/abs/2609.01100v1)**
- 作者：Nikolaos Xiros, Dimitrios Damianos 等
- 要点：提出将路由信号从"当前隐藏状态"改为与层 EMA 的对比，显著提升 MoE 中专家的特化程度。

**3. [Subliminal Learning as Trait-Direction Drift](http://arxiv.org/abs/2609.01091v1)**
- 作者：Zhixuan Liu, Zhichen Dong, Yuyu Fan 等
- 要点：揭示 SFT 蒸馏下"潜意识学习"——教师在语义干净数据中传递隐藏偏好的机制，并提出针对性干预手段。

**4. [Post-hoc Alignment of LLM-judges to Human Judgment Distribution](http://arxiv.org/abs/2609.01073v1)**
- 作者：Sebastian Steindl 等
- 要点：将 LLM 评判对齐到人类标签分布而非聚合 ground-truth，显著提升对 Human Label Variation 的捕获能力。

**5. [PCoMoE: Shifting MoE Inference from Monolithic Expert Selection to Fine-Grained Path Composition](http://arxiv.org/abs/2609.01024v1)**
- 作者：Ziyan Gan, Fangxin Liu, Chenyang Guan 等
- 要点：打破"整专家激活"的刚性抽象，将 MoE 推理转为细粒度路径组合，提升推理吞吐与可调度性。

**6. [Latent Recurrent Thoughts: Recurrent Refinement of Proposed Latents for Reasoning](http://arxiv.org/abs/2609.01117v1)**
- 作者：Zhaoliang Chen, Jie Fu
- 要点：在冻结 LLM 的连续表征空间中递归优化潜变量，跳出离散 token 思维链的误差累积陷阱。

---

### 🤖 智能体与推理

**7. [ARISE-RL: Agentic Rubric-Grounded Iterative Self-Evolution with RL](http://arxiv.org/abs/2609.01058v1)**
- 作者：Fanrui Zhang, Ruixue Ding, Qiang Zhang 等
- 要点：用 rubric 锚定的自演化机制缓解开放式智能体任务中奖励噪声问题，推动开放式 RL 训练可扩展性。

**8. [AgentFactory: Towards Automated Agentic System Design and Optimization](http://arxiv.org/abs/2609.01045v1)**
- 作者：Enci Zhang, Haofeng Wang, Yuesheng Zhu 等
- 要点：将智能体系统的设计本身自动化，从"手工搭建 pipeline"迈向"自动化搜索 agentic 系统"。

**9. [Spawn Freely, Act Sparingly: Progressive Risk Vesting for Recursive LLM-Agent Trees](http://arxiv.org/abs/2609.01035v1)**
- 作者：Molly Wang
- 要点：区分"sandbox 生成"与"能力激活"，提出递归智能体树的渐进式风险授权策略。

**10. [WorldBench: Culturally Grounded Benchmark for Multilingual Agents](http://arxiv.org/abs/2609.01056v1)**
- 作者：Leonardo Ranaldi, Sherrie Shen, Jushi Kai 等
- 要点：在文化真实场景中衡量多语言智能体的状态保持与跨语言性能，填补现有基准的文化空白。

---

### 🔧 方法与框架

**11. [On the Design Fundamentals of Pixel Text Representation Learning](http://arxiv.org/abs/2609.01147v1)**
- 作者：Chaohao Yuan, Ruifeng Yuan, Zhuoxu Huang 等
- 要点：系统分析了像素文本表征学习的四大基础问题（固定分辨率预训练、视觉捷径、视觉锚定、多语种理解），提出统一改进路径。

**12. [Let Confidence Change, Not the Prediction: Prediction-Preserving Calibration](http://arxiv.org/abs/2609.01072v1)**
- 作者：Daehwan Kim, Haejun Chung, Ikbeom Jang
- 要点：提出预测保持的后置校准方法与 TPCR 指标，避免校准过程改变 top-1 预测的不必要扰动。

**13. [ViTAMINS: Synthetic Hard Negatives for Self-Supervised Vision Transformers](http://arxiv.org/abs/2609.01041v1)**
- 作者：Nikos Giakoumoglou, Andreas Floros 等
- 要点：将合成难负例引入 ViT 自监督预训练，在检索、分割、视频任务上系统提升迁移质量。

**14. [SinkPruner: Sink-Free Visual Token Pruning for MLLMs](http://arxiv.org/abs/2609.01004v1)**
- 作者：Shiyu Li, Zi-Yuan Hu, Shijia Huang 等
- 要点：识别并剪除 MLLM 视觉 token 中的"sink token"，无需重训即可降低长视觉序列的推理开销。

---

### 📊 应用

**15. [ClinTraceBench: Source-Verifiable Longitudinal Clinical Reasoning](http://arxiv.org/abs/2609.01111v1)**
- 作者：Huimin Wang, Zhengyi Zhao, Yutian Zhao
- 要点：基于 EHR 多轮就诊轨迹构建可溯源的临床推理基准，系统衡量不同历史压缩方案的纵向信号保留能力。

**16. [HiveTraceGuard-Pro: Generative Guardrail for Russian Prompt Injection](http://arxiv.org/abs/2609.01046v1)**
- 作者：Nikita Oblakov, Sabrina Sadiekh, Evgeniy Kokuykin
- 要点：面向俄语场景的紧凑生成式守卫模型，针对提示注入、越狱与俄语表面混淆提供统一防御。

---

## 📈 研究趋势信号

**机制可解释性走向代数化**。今日投稿中两篇（Pythia 全套探测 #31、Transformer 幂等性 #6）从线性探针层面推进到代数框架，标志着对大模型内部表征的研究正在从经验观察过渡到形式化理论。

**智能体治理与风险控制成为热点**。递归智能体的渐进式风险授权（#39）、生成式守卫模型（#33）、高风险 ML 的因果证据治理（#37）、开放式智能体的 rubric RL（#27）——多篇论文从不同侧面构建 agent 时代的"安全基础设施"。

**MoE 与多模态效率工程化加速**。从路由机制（#16）、推理框架（#43）到视觉 token 剪枝（#47），形成 MoE-MLLM 全栈优化图谱，反映工业界对部署效率的迫切需求。

**跨文化与多语言能力评测兴起**。WorldBench（#29）、阿拉伯方言阅读（#10）、伊斯兰金融规范多样性（#48）、历史语言 WSD（#49）共同指向一个方向：大模型评测从"英语中心"走向"文化真实"。

---

## 📚 值得精读

1. **[Subliminal Learning as Trait-Direction Drift](http://arxiv.org/abs/2609.01091v1)** — 揭示 SFT 蒸馏中语义干净数据可传递隐藏偏好，对模型供应链安全与对齐研究有重要警示意义，建议完整阅读以理解 trait-direction drift 的形式化定义与干预策略。

2. **[Latent Recurrent Thoughts](http://arxiv.org/abs/2609.01117v1)** — 提出在连续潜空间进行递归推理的全新范式，跳出 CoT 离散 token 的范式束缚，对未来 reasoning 模型架构设计具有方向性启发。

3. **[AgentFactory: Automated Agentic System Design](http://arxiv.org/abs/2609.01045v1)** — 将"智能体设计"本身作为优化对象，是 Agentic AI 从手工程走向自动化搜索的关键一步，值得关注其搜索空间定义与评估方法。

---

*日报基于 ArXiv 2026-09-01 发布的 50 篇 cs.AI / cs.CL / cs.LG 论文整理*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*