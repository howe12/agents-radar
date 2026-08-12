# ArXiv AI 研究日报 2026-08-12

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-08-12 01:20 UTC

---

# 📚 ArXiv AI 研究日报
**日期：2026-08-12** | **领域覆盖：cs.AI / cs.CL / cs.LG** | **今日新文：50 篇**

---

## 🚀 今日速览

今日 ArXiv 投稿呈现几条清晰的脉络：(1) **On-policy 自蒸馏**全面爆发，多篇论文从不同角度解决 RLVR 中"组内全对/全错"导致的信号稀疏问题，并诊断 token 级别匹配的退化模式；(2) **无验证器测试时缩放（VF-TTS）** 与 **递归潜变量推理** 正在挑战传统 chain-of-thought 范式；(3) **LLM 智能体安全** 从模型权重延伸到 harness、轨迹、IP 保护等多个新维度；(4) 多模态与垂直应用持续渗透医学影像、音频描述和科学视频生成领域。

---

## 🔬 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

1. **[BDH-CQ: In-Context Learning with Recurrent Latent Reasoning](http://arxiv.org/abs/2608.09888v1)**
   *B. Engdahl, A. Kosowski, J. Chorowski 等*
   核心贡献：提出融合 in-context learning 与递归潜变量推理的新架构 BDH-CQ，输入连续更新循环记忆后在高维潜空间迭代求解，**无需生成显式思维链**，为替代 CoT 提供了架构新范式。

2. **[Fusion Training for Mathematical Generalization in Large Language Models](http://arxiv.org/abs/2608.09893v1)**
   *C. Cao, P. Zhang, J. Bloem*
   核心贡献：系统研究 Thinking Mode Fusion (TMF) 的数据配比与训练调度动力学，**统一非思考与长思考模式**于单一模型，对数学泛化有重要实践指导意义。

3. **[Mismatch Matters: On-Policy Distillation Beyond Token Agreement](http://arxiv.org/abs/2608.09836v1)**
   *Z. Yu, C. Yu, S. Xu 等*
   核心贡献：揭示 on-policy distillation 中的"退化一致"陷阱——学生通过重复循环骗过 token 匹配指标却全局错误，**重新定义 OPD 训练目标**。

4. **[SKALD: Skill-Anchored Latent Distillation](http://arxiv.org/abs/2608.09826v1)**
   *Y. Jiang, F. Xie, Z. Jiang 等*
   核心贡献：针对 RLVR 中 63–68% rollout group 提供零信号的问题，将抽象技能作为特权信号注入 on-policy 自蒸馏，直接把"技能"写进权重而非提示。

5. **[SR-OPSD: Self-Referenced On-Policy Self-Distillation](http://arxiv.org/abs/2608.09745v1)**
   *Z. Sun, E. Li, Y. Zhao 等*
   核心贡献：改进传统 OPSD 中"stop-gradient 教师即旧策略"的设定，引入**自参考教师**机制，提供更稠密且与策略同步的 token 级监督。

6. **[Parameter Exploration for RLVR via Variational Learning](http://arxiv.org/abs/2608.09805v1)**
   *V. Venkatkrishna, N. Daheim, I. Gurevych*
   核心贡献：将 RL 中的探索思想引入 LLM RLVR 训练流程，**通过变分学习直接控制参数空间的探索行为**，影响下游性能。

7. **[Second-Order Muon Done Right: GO-MUON](http://arxiv.org/abs/2608.09763v1)**
   *T. Che*
   核心贡献：原始 Muon 更新对无加权谱几何精确，但忽略了数据相关结构。GO-MUON 引入**匹配的数据相关几何**并跨多步复用，为优化器设计提供二阶几何视角。

8. **[Decoding-Level Taboo: A Diagnostic Stress Test for LLM Robustness](http://arxiv.org/abs/2608.09900v1)**
   *T. Kamijo, O. Rottenstreich, J. Conde 等*
   核心贡献：揭示 LLM 在复杂系统提示与安全护栏下"沿狭窄走廊生成"的脆弱性，提出**解码层禁忌**作为鲁棒性诊断压力测试。

9. **[Stealing Reasoning Traces from Proprietary LLM APIs](http://arxiv.org/abs/2608.09867v1)**
   *A. Panfilov, D. Schmotz, I. Shumailov 等*
   核心贡献：揭示头部 LLM 服务商将加密 CoT 块返回给客户端的**推理痕迹 IP 泄露风险**，具备现实攻防意义。

---

### 🤖 智能体与推理

10. **[Consilience for Verifier-Free Test-Time Scaling](http://arxiv.org/abs/2608.09898v1)**
    *L. Kong, L. Hui, H. Mao 等*
    核心贡献：在编程、机器人等**无可用验证器**的场景下，提出基于"共识"的 TTS 框架，无需外部判官即可获得高质量 rollout。

11. **[SHE: Trajectory-driven Safety Harness Evolution for LLM Agents](http://arxiv.org/abs/2608.09885v1)**
    *W. Qu, Q. Mao, Y. Li 等*
    核心贡献：把智能体安全从"静态护栏"转向"轨迹驱动的 harness 进化"，对**上下文、记忆、工具、权限的运行时控制**进行自适应演化。

12. **[Agentic Auto-Research is Fuzz Testing](http://arxiv.org/abs/2608.09855v1)**
    *Y. He, J. Wang, Y. Zhao 等*
    核心贡献：指出自主研究智能体当下"生成-排序"范式未解决**稀疏反馈**问题，主张借鉴模糊测试思路构建新一代自动研究框架。

13. **[Macaron-V1: Open Continual Learning with Self-Improvement and Mixture-of-LoRA](http://arxiv.org/abs/2608.09819v1)**
    *Mind Lab, V. Bo 等*
    核心贡献：开源"马卡龙-V1"系列，聚焦部署后**持续学习 + 经验智能**，通过版本化模型-harness 对与 MoE-LoRA 实现递归自我改进。

14. **[SWE-Bench ProMax: Benchmarking Agents on Large-Scale Multilingual Code Refactoring](http://arxiv.org/abs/2608.09802v1)**
    *Y. Shi, J. Xu, K. Fu 等*
    核心贡献：在 SWE-bench Verified 中约 60% 未解实例测试存在缺陷的背景下，**提出大规模、多语言、长期任务的代码智能体新基准**。

15. **[Multi-Agent AI Safety as an Institutional Design Problem](http://arxiv.org/abs/2608.09828v1)**
    *A. X*
    核心贡献：将多智能体 AI 安全建模为**制度设计问题**，从委托、信息流、动作执行、资源共享四个维度分析治理机制如何产生安全行为。

---

### 🔧 方法与框架

16. **[Multimodal Model Diffing for Feature Discovery and Control](http://arxiv.org/abs/2608.09928v1)**
    *H. Batra, L. Naghashyar, A. Khakzar 等*
    核心贡献：针对多模态大模型内部特征难以审计/控制的难题，**借鉴"diffing"思路定位可解释特征方向**，支持后置检查与可控生成。

17. **[MoNo: Multiscale Optimal Transport Neural Operator for PDEs](http://arxiv.org/abs/2608.09764v1)**
    *Z. Yang, X. Wu, D. Fu*
    核心贡献：揭示现有 Transformer 神经算子中可学习投影机制的信息瓶颈，**引入多尺度最优传输**，在通用几何 PDE 求解上取得稳定提升。

18. **[Rethinking Factor Sharing in Federated LoRA: Rank-Aware Adaptive Approach](http://arxiv.org/abs/2608.09742v1)**
    *X. Xu, B. Xiao, S. Qin 等*
    核心贡献：基于 LoRA 因子 A/B 的**非对称角色**，提出 rank-aware 的因子共享策略，显著提升联邦 LoRA 微调效率与效果。

19. **[Sci-VBench: Knowledge- and Reasoning-Intensive Video Generation Benchmark](http://arxiv.org/abs/2608.09873v1)**
    *D. Zhang, T. Song, L. Fu 等*
    核心贡献：1,253 个专家标注样本、60 个学科、四大学科领域，**首次系统评估科学领域"知识密集 + 推理密集"视频生成**能力。

---

### 📊 应用

20. **[MedPixel: A Unified Pixel-Language Model for Medical Reasoning and Segmentation](http://arxiv.org/abs/2608.09818v1)**
    *H. Yang, M. Shi, Z. Chen 等*
    核心贡献：弥合**医学 VLM 缺定位能力、医学分割器依赖类别提示**的鸿沟，构建统一像素-语言模型支持推理与分割。

21. **[Towards Expert-level Medical AI for Real-time Video Consultations](http://arxiv.org/abs/2608.09861v1)**
    *M. Nagda, J. Lee, M. Thompson 等*
    核心贡献：把医疗 AI 从文本交互推进到**音视频实时会诊**，保留非语言线索，惠及难以文字描述症状的患者群体。

22. **[Cultivar: Contrastive and Locale-Oriented Translation Benchmark](http://arxiv.org/abs/2608.09766v1)**
    *P. Chen, K. Chowdhury, X. Xu 等*
    核心贡献：打破"英文为中心→翻译成其他语言"的污染陷阱，**倡导源语言对比式、多 locale 取向**的翻译评测设计。

---

## 📈 研究趋势信号

**On-policy 自蒸馏成为训练新主轴**：今日至少 3 篇相关论文（#25、#29、#49），分别从 token 一致性退化、技能锚定、自我参考教师三个角度切入，反映 RLVR 在稀疏奖励下寻求"免费监督"的共识；**递归潜变量推理正在挑战 CoT 范式**（#10 BDH-CQ），与传统链式推理形成方法论竞争；**智能体安全的研究对象从"模型"扩展到"harness + 制度 + IP"**，涵盖 #12、#15、#18 等多篇，构成新安全三角；此外，**联邦微调中的非对称 LoRA 因子处理**（#50）与**多模态模型特征可解释性 diffing**（#2）代表工程化落地和可解释性两条被低估的支线正在升温。

---

## 📖 值得精读

1. **[BDH-CQ](http://arxiv.org/abs/2608.09888v1)** —— 架构层面真正可能撼动 CoT 的候选设计，把推理从"显式语言"压回"潜空间迭代"，对追求高效/低延迟推理部署的研究者极具启发。

2. **[Stealing Reasoning Traces from Proprietary LLM APIs](http://arxiv.org/abs/2608.09867v1)** —— 揭示头部厂商 CoT 加密交付策略的真实泄露风险，**安全研究 + 行业最佳实践**双重价值，适合全面阅读。

3. **[SWE-Bench ProMax](http://arxiv.org/abs/2608.09802v1)** —— 对当前主流代码智能体基准的可信度问题给出系统反思，新基准覆盖**多语言、长周期、真实代码重构**，是代码 Agent 研究者必须了解的评测基础设施。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*