# ArXiv AI 研究日报 2026-10-01

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-10-01 03:34 UTC

---

# 📑 ArXiv AI 研究日报 · 2026-10-01

---

## ⚡ 今日速览

今日 ArXiv 投稿呈现三大鲜明主线：**① "循环（Looping）架构复兴"** —— 多篇论文探索通过共享 Transformer 块的递归执行来提升计算深度，挑战"靠堆参数"的传统扩展路径；**② "Agent Harness 演化"成新热点** —— 围绕固定模型的"脚手架/编排层"自我进化出现 Turbo Harness、PhantomEnvironments、Lifelong Harness Evolution 等系列工作；**③ "数据真实性危机"被严肃审视** —— 一篇关于 27.5% 网页 token 已是 AI 生成的研究，配合另一篇揭示非侵入式脑机接口结果无需脑数据即可复现的可重复性拷问，标志着研究社区正从"能力军备竞赛"转向"基础设施审计"。

---

## 🧠 大语言模型（架构、训练、对齐、评估）

### 1. [Scaling Laws for Looped Mixture of Experts](http://arxiv.org/abs/2609.40316v1)
**作者：** Yanbei Chen, Anirudh Goyal, Raghuraman Krishnamoorthi
首次联合建模循环深度与 MoE 稀疏性两种扩展路径，建立 Looped MoE 的标度律，验证了"循环×稀疏"协同放缩的可行性，是今日架构层面的重要理论拼图。

### 2. [Looped Diffusion Transformer](http://arxiv.org/abs/2609.40305v1)
**作者：** Yong Xien Chng, Tianyi Chen, Wenwen Tong 等
在文生图扩散模型中于每个去噪步骤内重复运行共享 Transformer 块，用计算深度替代模型/步数扩张，为 T2I 模型的第三条缩放路径提供实证。

### 3. [Semifactual Credit-Augmented Policy Optimization](http://arxiv.org/abs/2609.40360v1)
**作者：** Junshu Pan, Zhizhang Fu, Shulin Huang 等
通过"半事实"prompt 干预揭示 RLVR 训练的 LLM 对任务无关特征仍敏感，并提出 SCAPO 在不改变底层答案的同时提升鲁棒性，值得关注。

### 4. [Distribution Matching Distillation for Continuous Diffusion Language Models](http://arxiv.org/abs/2609.40235v1)
**作者：** Paul Le Van Kiem, Dario Shariatian, Umut Simsekli 等
针对并行生成的连续扩散语言模型，提出统一分布蒸馏框架，将数百次网络评估压缩到极少步数，是扩散 LM 高效推理的关键一步。

### 5. [Linguistic Loopholes in LLM Unlearning: A 174-Language Benchmark](http://arxiv.org/abs/2609.40286v1)
**作者：** Tyler Skow, Shravan Chaudhari, Rama Chellappa 等
构建 174 语言遗忘基准，揭示跨语言遗忘"漏洞"：用其他语种查询即可重新唤起被遗忘知识，并提出 coverage-aware unlearning，对合规部署意义重大。

### 6. [From Spectra to Joint Schedules in LLM Pre-training: 3+3(+2) Scaling-Law Regimes](http://arxiv.org/abs/2609.40148v1)
**作者：** Yichen Wang, Fanghui Liu, Yudong Chen
基于 Volterra 方程严格刻画学习率-批量大小联合调度的标度律，识别出 3+3(+2) 种典型 regime，对训练策略选择具有直接指导价值。

---

## 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

### 7. [Cogentic: Multi-Agent Orchestration for Automated Proof Discovery](http://arxiv.org/abs/2609.40324v1)
**作者：** Yang Cai, Vineet Gupta, Yanchen Jiang 等
面向开放式研究问题的多智能体证明发现框架，通过多假设并行探索突破单次采样的能力上限，是 LLM 自动化数学研究的前沿。

### 8. [EvoDuet: Bilevel Co-Evolution of Web Searching and Task Solving](http://arxiv.org/abs/2609.40340v1)
**作者：** Young-Jun Lee, Jinheon Baek, Soyeong Jeong 等
双层优化同时演化"搜索策略"与"解题策略"，缓解 LLM 进化搜索在缺乏外部知识时易陷入局部停滞的问题，面向科学发现场景。

### 9. [Turbo Harness: Instance-Adaptive Harness Optimization](http://arxiv.org/abs/2609.40330v1)
**作者：** Tunyu Zhang, Hao Wang, Kai Xu 等
打破"全局统一 harness"假设，针对每个任务实例自适应生成 harness，是 agent 自我改进循环的关键基础设施。

### 10. [PhantomEnvironments: Training LLM Agents in Fictional Worlds](http://arxiv.org/abs/2609.40221v1)
**作者：** Anmol Kabra, Swathi Saravana Selvam, Albert Gong 等
用"虚构世界"作为 RL 训练场，绕过真人数据与 LLM 生成环境的幻觉/基准污染风险，是 agent RL 训练基础设施层面的有趣尝试。

### 11. [PivotOPD: Learning to Recover from Pivotal Mistakes in Multi-Turn Agents](http://arxiv.org/abs/2609.40285v1)
**作者：** Yinghui He, Yapei Chang, Khushi Bhardwaj 等
针对 on-policy 蒸馏在多轮交互中的误差累积，提出从"关键错误"恢复的训练机制，对长链路 agent 稳定性至关重要。

### 12. [ComputerSD: Online Self-Distillation from Real-Time Feedback for Computer-Use Agents](http://arxiv.org/abs/2609.40253v1)
**作者：** Yong Du, Tongbo Chen, Zhengxi Lu 等
将在线策略自蒸馏（OPSD）引入 CUA 训练，为中间动作提供 token 级监督信号，缓解稀疏结果奖励的局限。

### 13. [Learning from Research: Toward Lifelong Agent Harness Evolution](http://arxiv.org/abs/2609.40169v1)
**作者：** Jingbo Yang, Kwei-Herng Lai, Xiaowen Wang 等
提出"agent harness"在固定 LLM 之上的终身演化框架，与 #9、#23 共同构成本日"harness 演化"主题的代表工作。

---

## 🔧 方法与框架（新技术、基准测试、效率优化）

### 14. [WorldAuditBench: Interactive 3D World Auditing with Multimodal Agents](http://arxiv.org/abs/2609.40325v1)
**作者：** Ziyan Jiang, Jingbo Yang, Jiabao Ji 等
首个面向交互式 3D 世界异常检测的多模态 agent 基准（漂浮物体、可穿透墙体等），对仿真环境质量保证意义重大。

### 15. [cua-speedrun: Standardized Benchmarking of the Speed of Computer-Use Agents](http://arxiv.org/abs/2609.40284v1)
**作者：** Pranjal Aggarwal, Lawrence Keunho Jang, Sean Welleck 等
针对 CUA 速度提出标准化基准，揭示能力与效率 trade-off，为 agent 落地部署补齐关键评测维度。

### 16. [How Much Is an AI Token Worth? Scaling Laws for Wild AI-Generated Web Text](http://arxiv.org/abs/2609.40295v1)
**作者：** Jenna Russell, Ben Glickenhaus, Katherine Thai 等
**【强烈推荐】** 实证发现 2026 年 6–8 月 FineWeb 过滤后仍有 27.5%–31.1% 比例的网页 token 被判为 AI 生成，并给出对预训练质量影响的标度律估计，对数据管线设计影响深远。

### 17. [Cheap to Draw, Expensive to Trust: Certifying Test-Time Scaling Curves](http://arxiv.org/abs/2609.40190v1)
**作者：** Sohail, Sarkar, Shakuntala Baichoo
对测试时扩展（test-time scaling）曲线的统计置信度提出认证方法，提醒研究社区"画一条曲线"并不等于"据此分配预算"。

### 18. [Index-Translate: A Multilingual Translation Model Family](http://arxiv.org/abs/2609.40181v1)
**作者：** Tianjiao Li, Mengran Yu, Chenyu Shi 等
统一多语种翻译基础模型，涵盖文本、语音、受控配音、长文档翻译三种尺寸，是工程完整度较高的开源翻译栈。

---

## 📊 应用（垂直领域、多模态、代码生成）

### 19. [Removing Timing Shortcuts Improves Non-Invasive Brain-to-Text](http://arxiv.org/abs/2609.40359v1)
**作者：** Dulhan Jayalath, Oiwi Parker Jones
**【强烈推荐】** 通过"消融脑数据"实验揭示 d'Ascoli et al. (2025) 等有影响力的脑机接口结果可在完全不使用脑信号的情况下复现，是 BCI/NLP 交叉领域重要的可重复性警示。

### 20. [ViTeX-Bench: Benchmarking High-Fidelity Video Scene Text Editing](http://arxiv.org/abs/2609.40356v1)
**作者：** Xinghao Chen, Xiangbo Gao, Jiongze Yu 等
视频场景文本编辑的精细基准（店招、白板、产品包装），面向"保动力学+改文本"的实际编辑需求。

### 21. [MemLife: Curating and Reasoning over Long-Term Egocentric Video Memories](http://arxiv.org/abs/2609.40195v1)
**作者：** Guangzhi Xiong, Xinyuan Zhang, Xiao Yang 等
针对百小时级第一人称视频的"长记忆-压缩-查询"框架，是个性化 AI 助手的关键使能技术。

### 22. [DynaHarness: A Dynamic Physical Harness for Self-Evolving Robot Agents](http://arxiv.org/abs/2609.40306v1)
**作者：** Haoyuan Deng, Jiebin Liu, Tengxiao Zhang 等
桥接语义推理（粗时间尺度）与物理交互（细时间尺度）的机器人动态 harness，在长视野操作上展现自我演化能力。

---

## 🔭 研究趋势信号

今日投稿呈现出几条值得关注的"信号线"：

1. **"循环即缩放"正成为新共识** —— Looped MoE 与 Looped Diffusion Transformer 几乎同日出现，表明研究社区正系统化地探索"在固定参数下增加计算深度"作为替代参数扩张的第三条缩放路径。
2. **"Agent Harness"概念正式化** —— 围绕固定 LLM 之上的脚手架层自我演化（Turbo Harness / Lifelong Harness / DynaHarness），形成今日最密集的研究簇，预示 agent 工程范式从"换模型"转向"换脚手架"。
3. **基础设施级可重复性反思** —— 脑机接口"无脑数据复现"与"27.5% AI token 污染"两篇工作，将 AI 研究的可信度讨论从模型层下沉到数据/评测基础设施层。
4. **多智能体 × 形式化任务** —— EvoDuet（科学发现）、Cogentic（数学证明）显示多 agent 编排正与传统"难任务"结合，是未来 6–12 个月的热点。

---

## 📚 值得精读

1. **[How Much Is an AI Token Worth? Scaling Laws for Wild AI-Generated Web Text](http://arxiv.org/abs/2609.40295v1)** —— 用 Pangram 检测器量化了"野生网页"的 AI 污染比例，并给出对预训练数据价值的影响估计，对每个做数据管线、训练数据团队的人都是必读。

2. **[Cogentic: Multi-Agent Orchestration for Automated Proof Discovery](http://arxiv.org/abs/2609.40324v1)** —— 把多 agent 编排从工程 hack 推到"开放式数学发现"层面，代表了 agentic reasoning 的前沿方向，方法论与实验设计均值得借鉴。

3. **[Scaling Laws for Looped Mixture of Experts](http://arxiv.org/abs/2609.40316v1)** —— 联合建立

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*