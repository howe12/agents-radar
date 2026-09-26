# 具身智能开源动态日报 2026-09-26

> 数据来源: GitHub Search API (128 仓库) | ArXiv cs.RO (30 篇论文) | RSS 新闻 (37 条) | 生成时间: 2026-09-26 03:00 UTC

---

# 具身智能开源动态日报

**日期：2026 年 · 编辑视角综合 IEEE Spectrum / The Robot Report / ArXiv cs.RO / GitHub Trending**

---

## 一、今日速览

今日具身智能领域的动态呈现"**工业落地加码、学术重心转向 World Model 与 Agentic Programming、开源生态 VLA 持续细分**"三股主线并进的格局。产业端，Amazon 宣布在印第安纳投资 1 亿美元建设新制造工厂，IFR 报告全球工厂机器人保有量突破 500 万台，规模化落地明显加速；学术端，cs.RO 新一批论文围绕 Action-Discriminative World Model、RAPID（基于演示的 Agentic 编程）等展开，世界模型与代码 Agent 正成为新一轮研究焦点；开源端，VLA 与 World Model 相关仓库保持高活跃度，RoboTwin 2.0、Isaac Lab、Newton 等仿真/数据项目同步推进。

---

## 二、行业脉搏

1. **【规模化】Amazon 投资 1 亿美元在印第安纳建新工厂**
   [The Robot Report](https://www.therobotreport.com/amazon-to-invest-100m-in-new-indiana-manufacturing-facility/) — 头部电商持续把机器人/自动化产能内化，凸显仓储自动化仍是人形与移动机器人的确定性需求池。

2. **【产业拐点】Agility Robotics 探索轮式机器人**
   [The Robot Report](https://www.therobotreport.com/agility-robotics-maker-of-digit-humanoid-exploring-wheeled-robots/) — Digit 厂商公开讨论轮式形态，意味着人形路线并非唯一答案，"形态按任务分化"将成为产业共识。

3. **【架构信号】General Robotics 力推"模块化智能"而非"单一机器大脑"**
   [The Robot Report](https://www.therobotreport.com/general-robotics-is-betting-on-modular-intelligence-not-one-robot-brain/) — 对"通用大模型大脑"的反向押注，反映行业对端到端 VLA 一统天下仍存疑虑。

4. **【宏观数据】IFR：全球工厂机器人保有量达 500 万台**
   [The Robot Report](https://www.therobotreport.com/5-million-robots-now-working-factories-worldwide-ifr-reports/) — 工业机器人存量已具规模红利，下一波增长空间正从结构化工厂向非结构化具身场景迁移。

5. **【学科建设】Barbara Mazzolai 倡议建立新的机器人学分支**
   [IEEE Spectrum](https://spectrum.ieee.org/sustainability-robotics-barbara-mazzolai) — 呼吁融合可持续性与仿生学，推动机器人从"功能机器"走向"环境共生体"。

---

## 三、研究前沿

1. **AD-WM: Action-Discriminative World Models for Counterfactual MPC**
   [arXiv](http://arxiv.org/abs/2609.30264v1) — 针对 MPC 需求训练具备"动作判别性"的潜空间世界模型，把反事实推理显式引入预测环节，对模型化控制具重要价值。

2. **RAPID: Robot Agentic Programming from Demonstrations**
   [arXiv](http://arxiv.org/abs/2609.30249v1) — 把 LLM Coding Agent 的能力迁移到机器人任务，通过示教生成可执行策略，是"Agentic Robotics"的关键一环。

3. **Rolling-WAM: World Action Models with Rolling Imagination**
   [arXiv](http://arxiv.org/abs/2609.30247v1) — 在 WAM 框架中引入"滚动想象"机制，将动作生成与未来视觉推演解耦再耦合，对长视域操作规划意义显著。

4. **Underwater C³-JEPA: Object-Centric Cross-View World Model for ROV Salvage**
   [arXiv](http://arxiv.org/abs/2609.30214v1) — 把 JEPA 式世界模型拓展到水下 ROV 打捞场景，验证了对象中心 + 多视角预训练在极端环境的可迁移性。

5. **Training-free Behavior Cloning**
   [arXiv](http://arxiv.org/abs/2609.30134v1) — 不依赖大规模神经网络的训练式行为克隆，强调行为可追溯与策略可解释，对工业级安全部署具现实意义。

---

## 四、重点项目

### 🦾 机器人学习与控制（模仿学习 / 强化学习 / 策略学习）

- **OpenPipe/ART** ⭐10,772 — [GitHub](https://github.com/OpenPipe/ART)
  Agent Reinforcement Trainer，基于 GRPO 训练多步 Agent；为机器人/VLA 引入工业级 RL 后训练范式。
- **StanfordVL/BEHAVIOR-1K** ⭐1,722 — [GitHub](https://github.com/StanfordVL/BEHAVIOR-1K)
  上千日常任务的具身基准平台，是"通用机器人"事实标准的评测场。
- **Farama-Foundation/Gymnasium** ⭐12,578 — [GitHub](https://github.com/Farama-Foundation/Gymnasium)
  RL 统一 API 的事实标准，几乎所有机器人 RL 框架的底层依赖。
- **MathFoundationRL/Book-Mathematical-Foundation-of-Reinforcement-Learning** ⭐17,890 — [GitHub](https://github.com/MathFoundationRL/Book-Mathematical-Foundation-of-Reinforcement-Learning)
  系统化的 RL 数学基础教材，对机器人策略学习者尤为友好。
- **Tsinghua-MARS-Lab/OMG** ⭐118 — [GitHub](https://github.com/Tsinghua-MARS-Lab/OMG)
  清华 MARS-Lab 通用人形运动生成 OMG 模型官方实现，是人形运动智能的最新代表。

### 🤖 仿真与框架（MuJoCo / Isaac / Gazebo / ROS）

- **harvard-edge/cs249r_book** ⭐28,449 — [GitHub](https://github.com/harvard-edge/cs249r_book)
  Harvard CS249r《Machine Learning Systems》四卷本，含 Physical AI 卷，是具身/物理 AI 系统的教科书级别开源。
- **RLinf/RLinf** ⭐5,372 — [GitHub](https://github.com/RLinf/RLinf)
  面向具身与 Agentic AI 的强化学习基础设施，补齐"从 RL 算法到具身部署"的中间层。
- **isaac-sim/IsaacLab** ⭐8,222 — [GitHub](https://github.com/isaac-sim/IsaacLab)
  NVIDIA 统一机器人学习框架，多物理/多渲染器支持，是当前 VLA 与人形 RL 训练的事实平台。
- **newton-physics/newton** ⭐5,689 — [GitHub](https://github.com/newton-physics/newton)
  基于 NVIDIA Warp 的 GPU 加速开源物理引擎，定位"机器人仿真新底座"，与 MuJoCo-Warp 路线并行。
- **google-deepmind/mujoco** ⭐15,337 — [GitHub](https://github.com/google-deepmind/mujoco)
  MuJoCo 物理引擎本体，机器人接触动力学的事实标准；近一年生态（menagerie、mjlab）扩展迅速。
- **mujocolab/mjlab** ⭐3,133 — [GitHub](https://github.com/mujocolab/mjlab)
  Isaac Lab API + MuJoCo-Warp 后端，把 Isaac 生态体验带到 MuJoCo，跨平台复用价值高。
- **dora-rs/dora** ⭐3,978 — [GitHub](https://github.com/dora-rs/dora)
  Rust 编写的数据流机器人中间件，主打低延迟与可组合 pipeline，正成为 ROS 之外的轻量替代。
- **gazebosim/gz-sim** ⭐1,517 — [GitHub](https://github.com/gazebosim/gz-sim)
  Gazebo 最新版本，是 ROS 2 体系内最广泛使用的仿真器之一。
- **ArduPilot/ardupilot** ⭐15,939 — [GitHub](https://github.com/ArduPilot/ardupilot)
  全球最成熟的无人机自驾仪开源项目，硬件驱动与控制闭环的范式标杆。
- **PX4/PX4-Autopilot** ⭐12,701 — [GitHub](https://github.com/PX4/PX4-Autopilot)
  主流开源飞控，与 ROS 2、ROS Discourse 讨论区紧密协同。
- **autowarefoundation/autoware** ⭐12,093 — [GitHub](https://github.com/autowarefoundation/autoware)
  自动驾驶领域最知名的开源全栈方案，机器人→自动驾驶算法迁移的代表项目。

### 🧠 VLA 与基础模型（视觉-语言-动作 / 具身基础模型）

- **datawhalechina/every-embodied** ⭐3,850 — [GitHub](https://github.com/datawhalechina/every-embodied)
  从零搭建具身智能机器人，覆盖 VLA/OpenVLA/SmolVLA/Pi0 中文实战教程。
- **RoboTwin-Platform/RoboTwin** ⭐2,913 — [GitHub](https://github.com/RoboTwin-Platform/RoboTwin)
  ICML 2026 RoboTwin 2.0 代码库，双臂仿真基准 + 数据集的核心设施。
- **dexmal/opendm** ⭐2,172 — [GitHub](https://github.com/dexmal/opendm)
  面向"通用具身智能"的开世界基础模型，是 OpenVLA 类路线的开源代表。
- **knightnemo/Awesome-World-Models** ⭐3,446 — [GitHub](https://github.com/knightnemo/Awesome-World-Models)
  World Model 方向的精选清单，含论文、代码与博客，研究者的"一站式导航"。
- **leofan90/Awesome-World-Models** ⭐2,025 — [GitHub](https://github.com/leofan90/Awesome-World-Models)
  覆盖 World Model 与视频生成、具身 AI、自动驾驶交叉领域的论文索引。
- **PhyAgentOS/PhyAgentOS-core** ⭐2,524 — [GitHub](https://github.com/PhyAgentOS/PhyAgentOS-core)
  物理 Agent 操作系统，支持递归自我改进，是"Agentic + 物理 AI"融合的代表。
- **FluxVLA/FluxVLA** ⭐712 — [GitHub](https://github.com/FluxVLA/FluxVLA)
  一体化 VLA 工程平台，覆盖从数据采集到真机部署全流程。
- **sii-research/tau-0-vla** ⭐627 — [GitHub](https://github.com/sii-research/tau-0-vla)
  τ0-VLA 官方实现，融合世界模型引导的 test-time computation。
- **OpenBMB/SimpleMemVLA** ⭐75 — [GitHub](https://github.com/OpenBMB/SimpleMemVLA)
  给 VLA 加"原生视频记忆"，面向长视域操作的扩展性方案。
- **ZJU-OmniAI/vla-corrector** ⭐84 — [GitHub](https://github.com/ZJU-OmniAI/vla-corrector)
  NeurIPS 2026 VLA-Corrector，推理时"检测—纠正"以自适应动作时域。

### 🔧 硬件与驱动

- **enactic/openarm** ⭐3,512 — [GitHub](https://github.com/enactic/openarm)
  完全开源的人形机械臂，主打接触丰富操作任务，是具身硬件开源的代表。

### 📊 数据集与基准

- **robocasa/robocasa** ⭐1,758 — [GitHub](https://github.com/robocasa/robocasa)
  日常任务的大规模仿真 + 真机数据集，是通用机器人学习的关键基础设施。
- **robocurve/inspect-robots** ⭐606 — [GitHub](https://github.com/robocurve/inspect-robots)
  开源评测平台，把任意 LLM/VLA 跑在任意机械臂/人形上，统一评估流程。
- **Hebbian-Robotics/hflow** ⭐279 — [GitHub](https://github.com/Hebbian-Robotics/hflow)
  机器人 AI 训练数据质量 SDK，是数据 → 模型链路中被低估的"质量门"。
- **RoboVerseOrg/RoboVerse** ⭐1,863 — [GitHub](https://github.com/RoboVerseOrg/RoboVerse)
  统一平台 + 数据集 + 基准三位一体，目标"可扩展、可泛化"的机器人学习。

---

## 五、生态趋势信号

**从今天三类素材的横向交叉看，具身智能正出现三条清晰的趋势汇聚：**①"**World Model × Agentic Coding**"成为新的学术双核——cs.RO 当日多篇论文围绕"具备动作判别性的世界模型"和"基于示教的 Agentic 编程"展开，与 GitHub 上 `Awesome-World-Models`、`PhyAgentOS`、`RAPID` 等仓库热度呼应，预示 2026 具身研究从"端到端 VLA"向"模型化推理 + Agent 编程"分流；②"**模块化智能 vs. 通用大脑**"路线分化——General Robotics 的"模块化"主张与 `dexmal/opendm`、`tau-0-vla`、`SimpleMemVLA` 等基础模型并行推进，说明产业与学界都在为"单一模型 vs. 模块堆叠"投票；③"**仿真—数据—硬件三栈并行开源化**"——`IsaacLab`/`Newton`/`MuJoCo-Warp`、`RoboTwin 2.0`/`RoboVerse`、`enactic/openarm`、`OpenArm` 等项目同步活跃，仿真、基准与硬件开源生态正在被打通，具身 AI 第一次接近具备"完整开源堆栈"。

---

## 六、值得关注

1. **RAPID：从示教到 Agentic 编程**（[arXiv](http://arxiv.org/abs/2609.30249v1)）
   一旦"用演示驱动 Coding Agent 生成策略"这条路线跑通，将把机器人任务编程的成本曲线拉低一个数量级，是机器人走向"非专家可编程"的关键拐点。

2. **VLA 记忆化与自适应时域**：[SimpleMemVLA](https://github.com/OpenBMB/SimpleMemVLA) + [vla-corrector](https://github.com/ZJU-OmniAI/vla-corrector)
   长视域操作和动作时域自适应，是 VLA 走向复杂长任务的两个尚未解决的卡点；两者若在真机上互相结合，将极大扩展现有 π0/OpenVLA 体系的可用范围。

3. **General Robotics 的"模块化智能"赌注**（[The Robot Report](https://www.therobotreport.com/general-robotics-is-betting-on-modular-intelligence-not-one-robot-brain/)）
   若模块化路线在工程上比端到端 VLA 更稳健，将直接重塑"基础模型公司 vs. 系统集成公司"的产业格局，建议持续跟踪其后续产品与论文。

---

*本日报由行业新闻、cs.RO 论文与 GitHub 活跃仓库三源融合生成，欢迎用于团队同步与趋势追踪。*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*