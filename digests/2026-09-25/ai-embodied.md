# 具身智能开源动态日报 2026-09-25

> 数据来源: GitHub Search API (128 仓库) | ArXiv cs.RO (30 篇论文) | RSS 新闻 (41 条) | 生成时间: 2026-09-25 02:57 UTC

---

# 具身智能开源动态日报

**日期：2026 年** ｜ **覆盖范围：行业新闻 · cs.RO 论文 · GitHub 活跃仓库**

---

## 一、今日速览

今日最具标志性的信号来自 IFR（国际机器人联合会）发布的统计——全球工厂在役机器人数量突破 **500 万台**，工业自动化进入"大规模常态化"阶段。与此同时，**ANYbotics** 正式将四足机器人 ANYmal 推向工业巡检市场，**Epson** 发布免编程协作机器人 AX6，硬件普惠化与场景落地的双线推进愈发明朗。研究侧，**PolyUMI** 把视觉-触觉-音频三模态数据采集平民化，**RACaP** 将 LLM 风格的 Code-as-Policies 引入机器人策略蒸馏，反映出"具身智能 Agent 化"的加速。代码生态上，MuJoCo、IsaacLab、Newton 三大仿真器持续互操作（mjlab 出现 Isaac Lab API + MuJoCo-Warp），而 τ0-VLA、FluxVLA、EVA-Client、robonix 等 VLA 工程化项目同时涌入，具身基础模型正在从论文走向产品级部署。

---

## 二、行业脉搏

**1. 全球工厂机器人保有量突破 500 万台（IFR）**
🔗 https://www.therobotreport.com/5-million-robots-now-working-factories-worldwide-ifr-reports/
IFR 最新报告显示中国、日本、美国、韩国、德国为前五大市场，密度持续攀升。这一里程碑意味着机器人不再是"前沿技术"而是制造业基础生产资料，对具身智能下游需求形成长周期支撑。

**2. Barbara Mazzolai 推动"可持续机器人"新学科**
🔗 https://spectrum.ieee.org/sustainability-robotics-barbara-mazzolai
意大利 IIT 研究所 Mazzolai 团队提出以"根植型"软体机器人为代表的可持续机器人范式，将生物启发与环保材料结合，呼吁建立独立学科体系，是具身智能研究边界的扩张信号。

**3. ANYbotics 推出 ANYmal 工业巡检方案**
🔗 https://www.therobotreport.com/anybotics-opens-the-door-for-inspections-with-anymal-robots/
四足机器人厂商从"研发演示"迈向"开放商用巡检"，配套开放接口与软件栈，对移动操作（Mobile Manipulation）真实场景数据回流具有强示范效应。

**4. Epson 发布 AX6 协作机器人，主打免编程**
🔗 https://www.therobotreport.com/epson-introduces-ax6-cobot-compact-design-no-code-programming/
紧凑型 cobot + 无代码编程直指中小企业产线，降低自动化门槛，对应软件层 VLA/Code-as-Policies 趋势，硬件与软件两端都在"去专业化"。

**5. Arduino VENTUNO Q 板让机器人开发更易上手**
🔗 https://www.therobotreport.com/new-ventuno-q-board-arduino-hopes-make-robotics-development-easier/
硬件门槛进一步下沉，配合"选择运动架构不应只看规格表"等方法论文章（🔗 https://www.therobotreport.com/why-you-should-look-beyond-spec-sheet-when-choosing-motion-architecture/ ），表明社区对系统级工程的反思正在加强。

---

## 三、研究前沿

**1. PolyUMI：视觉-触觉-音频多模态数据采集平民化**
🔗 http://arxiv.org/abs/2609.29760v1
作者用一套便携式装置同时采集物体操作过程中的视、触、声信号与本体感觉，大幅降低多模态具身数据采集门槛，对模仿学习与表征学习社区意义重大。

**2. RACaP：把 Agent 推理-行动-编程统一为可进化机器人策略**
🔗 http://arxiv.org/abs/2609.29394v1
在 Code-as-Policies 之上引入经验回放、任务迁移与自我演进，将 LLM Agent 的"推理/调用/编码"三段式能力直接下沉为机器人控制策略，是具身 Agent 范式的代表性工作。

**3. 基于学习的连续自主挖掘框架（From Target Selection to Digging）**
🔗 http://arxiv.org/abs/2609.29750v1
面向工程机械自主化的全栈学习方案，针对重复挖掘过程物料形态变化自适应选择下一挖掘点，将强化学习落地于重型装备，拓宽具身智能场景边界。

**4. Temperament Engineering：机器人集群行为多样性设计**
🔗 http://arxiv.org/abs/2609.29423v1
将机器人集群中不可避免的硬件/电池/漂移差异显式建模为"性格分布"，并工程化设计多样性，从故障容忍视角重新定义群体智能，对真实部署具重要意义。

**5. UCON：动态环境下历史重关联的不确定感知导航**
🔗 http://arxiv.org/abs/2609.29419v1
解决动态环境中感知不稳定与不确定性传播问题，在 SLAM 与决策之间引入历史重关联机制，是服务机器人/巡检机器人实用化的关键拼图。

**（其他值得关注的论文）**
- Markerless Multi-Modal Inspection of Large Space Structures：🔗 http://arxiv.org/abs/2609.29644v1 （轨道基础设施无标记巡检）
- Coupled State-Space Modelling for Hybrid Rigid-Pneumatic Manipulators：🔗 http://arxiv.org/abs/2609.29424v1 （刚-气耦合灵巧操作）
- WRAP: 无夹具的多机器人装配规划：🔗 http://arxiv.org/abs/2609.29407v1

---

## 四、重点项目

### 🦾 机器人学习与控制
- **[OpenPipe/ART](https://github.com/OpenPipe/ART)** ⭐10,770 — Agent Reinforcement Trainer，使用 GRPO 在真实任务上对多步 Agent 进行 RL 微调，是把 GRPO 落地到生产级 Agent 工作流的关键开源栈。
- **[RLinf/RLinf](https://github.com/RLinf/RLinf)** ⭐5,366 — 面向具身与 Agentic AI 的强化学习基础设施，定位为"具身 RL 的 Ray + CUDA"，补齐大规模策略训练底座。
- **[MathFoundationRL/Book-Mathematical-Foundation-of-Reinforcement-Learning](https://github.com/MathFoundationRL/Book-Mathematical-Foundation-of-Reinforcement-Learning)** ⭐17,883 — 系统化的强化学习数学基础教材，配套 MATLAB 代码，是 RL 进入机器人社区的标准学习入口。
- **[robocasa/robocasa](https://github.com/robocasa/robocasa)** ⭐1,758 — 面向通用机器人的大规模日常任务仿真，是模仿学习与 VLA 微调的事实基准之一。

### 🧪 仿真与框架
- **[google-deepmind/mujoco](https://github.com/google-deepmind/mujoco)** ⭐15,327 — 接触动力学标杆物理引擎，几乎所有主流具身学习栈的底层。
- **[isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab)** ⭐8,220 — NVIDIA 推出的统一机器人学习框架，支持多物理引擎/渲染器，是产业级 sim-to-real 的核心。
- **[newton-physics/newton](https://github.com/newton-physics/newton)** ⭐5,686 — 基于 NVIDIA Warp 的 GPU 加速物理引擎，专为机器人学家设计，是 Newton 联盟推动的下一代仿真栈。
- **[mujocolab/mjlab](https://github.com/mujocolab/mjlab)** ⭐3,131 — 复刻 Isaac Lab API，由 MuJoCo-Warp 驱动，象征 IsaacLab 与 MuJoCo 生态的互操作加速。
- **[dora-rs/dora](https://github.com/dora-rs/dora)** ⭐3,982 — 面向 AI 机器人应用的数据流中间件，以低延迟、可组合的 pipeline 抽象挑战 ROS 范式。
- **[gazebosim/gz-sim](https://github.com/gazebosim/gz-sim)** ⭐1,515 — Gazebo 新一代开源仿真器，ROS 2 时代的官方级基座。
- **[ros-navigation/navigation2](https://github.com/ros-navigation/navigation2)** ⭐4,742 — ROS 2 导航栈的事实标准，覆盖规划、恢复、行为树。

### 🧠 VLA 与基础模型
- **[FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA)** ⭐710 — 一体化 VLA 工程平台，覆盖"数据→训练→真机部署"全链路，是 VLA 工程化代表性项目。
- **[sii-research/tau-0-vla](https://github.com/sii-research/tau-0-vla)** ⭐627 — τ0-VLA 官方实现，引入世界模型引导的 Test-Time Computation，是分层机器人基础模型的代表。
- **[allenai/vla-evaluation-harness](https://github.com/allenai/vla-evaluation-harness)** ⭐625 — 任意 VLA × 任意仿真基准的统一评测框架，对 VLA 社区形成"可复现、可比较"基础设施。
- **[dexmal/opendm](https://github.com/dexmal/opendm)** ⭐2,222 — 面向通用具身智能的开放世界基础模型，定位类比于 NLP 中的开源大模型。
- **[PhyAgentOS/PhyAgentOS-core](https://github.com/PhyAgentOS/PhyAgentOS-core)** ⭐2,511 — 递归自我改进的物理 Agent OS，探索 Agent 在物理世界中自我演化。
- **[syswonder/robonix](https://github.com/syswonder/robonix)** ⭐366 — Rust 实现的"机器人 Agentic OS"，强调治理、可验证经验、物理记忆与技能演化。

### 🔧 硬件与驱动
- **[enactic/openarm](https://github.com/enactic/openarm)** ⭐3,508 — 完全开源的人形机械臂，面向接触丰富的物理 AI 研究与部署，是具身硬件开源化的标志性项目。
- **[ArduPilot/ardupilot](https://github.com/ArduPilot/ardupilot)** ⭐15,934 — 全球最成熟的开源飞控（ArduPlane/Copter/Rover/Sub），无人机与无人系统的事实标准。
- **[PX4/PX4-Autopilot](https://github.com/PX4/PX4-Autopilot)** ⭐12,695 — 学术与工业界广泛使用的开源自驾仪，与 ROS 2 生态深度耦合。

### 📊 数据集与基准
- **[StanfordVL/BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K)** ⭐1,721 — 1,000 种日常任务的具身 AI 研究平台，是任务级评测的事实标杆。
- **[RoboVerseOrg/RoboVerse](https://github.com/RoboVerseOrg/RoboVerse)** ⭐1,863 — 统一平台、数据集与基准，聚焦可扩展与可泛化的机器人学习。
- **[RoboTwin-Platform/RoboTwin](https://github.com/RoboTwin-Platform/RoboTwin)** ⭐2,911 — ICML 2026 接收的 RoboTwin 2.0 官方仓库，强调双臂/多机器人协作仿真基准。

---

## 五、生态趋势信号

三条主线正在汇聚：第一，**VLA 与具身基础模型的"工程化竞赛"**，τ0-VLA、FluxVLA、opendm、EVA-Client、SimpleMemVLA 等项目同期涌现，从论文 demo 走向真机部署平台，配合 vla-evaluation-harness 与 inspect-robots 等评测工具，VLA 社区正进入"标准化 + 可复现"阶段；第二，**仿真器加速融合**，Newton、mjlab 在 Isaac Lab API 与 MuJoCo-Warp 之间的双向兼容，意味着 GPU 物理仿真的标准接口趋于收敛，sim-to-real 的工程阻力下降；第三，**硬件门槛下沉与开源硬件成熟**，从 Arduino VENTUNO Q 到 enactic/openarm 人形臂，从 ANYmal 巡检方案到 Epson AX6 cobot，硬件从"专用研究设备"过渡为"普及型科研基础设施"，与 PolyUMI 这类便携多模态数据采集方案结合，正在催生"家庭/桌面级具身实验室"。

---

## 六、值得关注

**1. ANYbotics 开放 ANYmal 巡检（🔗 https://www.therobotreport.com/anybotics-opens-the-door-for-inspections-with-anymal-robots/ ）**
四足机器人在真实工业场景的大规模部署，配合开放接口，将产生高质量真实世界数据，对移动操作与故障预测社区是关键基础设施事件。

**2. PolyUMI 多模态数据采集（🔗 http://arxiv.org/abs/2609.29760v1 ）**
视觉-触觉-音频三模态的便携采集方案，是推动模仿学习、VLA、世界模型研究走出"数据瓶颈"的代表性工作，建议持续跟进后续数据集与基准。

**3. enactic/openarm + robonix 组合（🔗 https://github.com/enactic/openarm / 🔗 https://github.com/syswonder/robonix ）**
开源人形臂硬件 + Rust 写就的 Agentic OS 代表着"开源具身全栈"的成熟雏形——硬件、运行时、策略框架三层都进入可复现阶段，值得作为个人/小团队具身研究的基线配置。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*