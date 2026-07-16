# 具身智能开源动态日报 2026-07-16

> 数据来源: GitHub Search API (131 仓库) | ArXiv cs.RO (30 篇论文) | RSS 新闻 (41 条) | 生成时间: 2026-07-16 02:01 UTC

---

# 🤖 具身智能开源动态日报

**日期：2025-XX-XX** | 数据来源：IEEE Spectrum、The Robot Report、ArXiv cs.RO、GitHub Trending

---

## 📌 今日速览

今日具身智能领域呈现"**模型融合 + 工程深化**"双线推进态势。学术界涌现出 PhysClaw-0（语言修正驱动的智能体系统）、GigaWorld-Policy-0.5（World Action Model + AutoResearch）以及 S²-VLA（解耦语义-空间流的自动驾驶 VLA）等代表性工作，标志着 **World Model 与 VLA 范式加速融合**；工业端 Walden Robotics 以 11 亿美元估值高调入局通用机器人、Agility Robotics 发布人形机器人政策建议，能源管理（"Key to Humanoid Progress"）成为落地关键瓶颈；GitHub 端则出现 RLinf、dora-rs、copper-rs 等面向具身/机器人 Agent 的新一代基础设施，**Rust 化与 MCP（Model Context Protocol）正在重塑机器人中间件生态**。

---

## 🏭 行业脉搏

**1. Walden Robotics 以 11 亿美元估值亮相，剑指通用机器人**
[新闻链接](https://www.therobotreport.com/walden-robotics-launches-1-1b-valuation-general-purpose-robots/)
继 Physical Intelligence、Skild AI 后，又一家押注"通用机器人基础模型"的公司获得资本背书。通用机器人赛道融资密度提升，但商业模式与差异化路径仍是关键问题。

**2. Agility Robotics 提交六项美国人形机器人政策建议**
[新闻链接](https://www.therobotreport.com/agility-outlines-six-recommendations-for-u-s-humanoid-robot-policies/)
行业头部企业开始系统性介入监管与政策制定，预示人形机器人正进入"**政策窗口期**"，未来几年的合规与标准之争可能重塑竞争格局。

**3. X-Square Robot 发布通用机器人"基础栈"**
[新闻链接](https://spectrum.ieee.org/x-square-robot-embodied-ai-stack)
强调从底层 OS、数据、模型到上层应用的端到端架构，反映"**Foundation Stack**" 正在取代单一模型成为衡量具身智能公司能力的尺度。

**4. Vicarious Surgical 董事会申请解散公司**
[新闻链接](https://www.therobotreport.com/vicarious-surgical-board-seeks-to-dissolve-company/)
曾经的明星手术机器人公司走向终局，提示医疗机器人商业化路径依然艰难，与通用人形机器人的热度形成鲜明对比。

**5. 人形机器人能源管理成为"卡脖子"问题**
[新闻链接](https://www.therobotreport.com/key-to-humanoid-progress-managing-the-power-behind-the-robots/)
电池、电源管理与热设计正成为制约人形机器人续航与负载能力的核心瓶颈，相关供应链公司（如 KULR）开始受到关注。

**6. 乌克兰战场地面机器人进入"杀戮区"**
[新闻链接](https://spectrum.ieee.org/ukraine-ground-drones)
地面无人系统在实战中被大规模部署，反过来反哺自主导航、感知与多机协同算法的快速迭代。

---

## 🔬 研究前沿

**1. PhysClaw-0：通过语言修正实现机器人自主的共生智能体系统**
[论文链接](http://arxiv.org/abs/2607.14047v1)
提出"**共生智能体（Symbiotic Agentic）+ 语言修正**" 框架，将人类语言反馈直接整合到自主数据采集与策略学习闭环中，对提升真实环境策略鲁棒性具有方法论价值。

**2. Industrial Dexterity Benchmark：工业灵巧操作的硬软件基准平台**
[论文链接](http://arxiv.org/abs/2607.14021v1)
针对线缆布线、连接器插接等高难度工业任务建立统一基准，弥补当前 VLA/模仿学习评测过于"实验室化"的缺陷，是推动技术落地的关键基础设施。

**3. S²-VLA：解耦语义与空间流的自动驾驶 VLA 模型**
[论文链接](http://arxiv.org/abs/2607.13926v1)
将 VLM 的高层语义推理与空间感知显式解耦，缓解端到端驾驶模型在长尾场景下的失败率，对**具身 VLA 架构设计**具有跨域启发意义。

**4. GigaWorld-Policy-0.5：基于 AutoResearch 加速的 World Action Model**
[论文链接](http://arxiv.org/abs/2607.13960v1)
WAM 联合建模动作与未来视觉观测，并通过 AutoResearch 自动化实验流程，是"**世界模型 + 策略学习 + 自动化研究**" 三者结合的代表性尝试。

**5. AeroMap3D：单目 UAV 6-DoF 定位锚定视觉-几何-语义地图先验**
[论文链接](http://arxiv.org/abs/2607.14009v1)
面向无人机在城市/复杂环境下的鲁棒定位需求，无需依赖 GNSS，融合语义先验，是 UAV-具身融合方向的有力补充。

---

## 🌟 重点项目

### 🦾 机器人学习与控制（模仿学习 / 强化学习 / 策略学习）

- **[RLinf/RLinf](https://github.com/RLinf/RLinf)** ⭐ 4,124
  *面向具身与 Agentic AI 的强化学习基础设施，专为 VLA 与多步 Agent 设计，是当前少有的"具身 RL 原生"框架。*

- **[OpenPipe/ART](https://github.com/OpenPipe/ART)** ⭐ 10,475
  *Agent Reinforcement Trainer，支持 GRPO 多步真实任务训练，为具身 Agent 提供 on-the-job RL 能力。*

- **[OpenRLHF/OpenRLHF](https://github.com/OpenRLHF/OpenRLHF)** ⭐ 9,799
  *基于 Ray 的高扩展 Agentic RL 框架，原生集成 VLM、vLLM 与异步 RL，是具身大模型对齐的事实标准之一。*

- **[ARISE-Initiative/robosuite](https://github.com/ARISE-Initiative/robosuite)** ⭐ 2,516
  *模块化机器人学习仿真框架与基准，长期作为模仿学习与 RL 研究的"试验田"。*

### 🤖 仿真与框架（MuJoCo / Isaac / Gazebo / ROS）

- **[google-deepmind/mujoco](https://github.com/google-deepmind/mujoco)** ⭐ 14,219
  *通用接触物理仿真器，具身学习的事实标准底层，新一代 MuJoCo-XLA（Warp GPU 后端）正在扩展大规模 RL 能力。*

- **[isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab)** ⭐ 7,684
  *基于 NVIDIA Isaac Sim 的统一机器人学习框架，是当前 GPU 并行 RL/Sim-to-Real 的标杆平台。*

- **[newton-physics/newton](https://github.com/newton-physics/newton)** ⭐ 5,194
  *基于 NVIDIA Warp 的开源 GPU 加速物理引擎，专为机器人与仿真研究设计，正在挑战 MuJoCo/Isaac 的边界。*

- **[mujocolab/mjlab](https://github.com/mujocolab/mjlab)** ⭐ 2,683
  *Isaac Lab API × MuJoCo-Warp，提供熟悉 API 的开源 RL 替代方案，降低对 NVIDIA 闭源栈的依赖。*

- **[dora-rs/dora](https://github.com/dora-rs/dora)** ⭐ 3,843
  *Rust 编写的数据流机器人中间件，主打低延迟、可组合、分布式，是 ROS 之外具身 AI 应用的新型"胶水层"。*

- **[copper-project/copper-rs](https://github.com/copper-project/copper-rs)** ⭐ 1,410
  *Rust 编写的"机器人操作系统"，支持完整机器人栈的确定性构建、回放与运行，定位 ROS 的现代替代品。*

- **[ros-navigation/navigation2](https://github.com/ros-navigation/navigation2)** ⭐ 4,468
  *ROS 2 官方导航框架，仍是移动机器人量产部署的事实标准。*

- **[autowarefoundation/autoware](https://github.com/autowarefoundation/autoware)** ⭐ 11,835
  *全球领先的开源自动驾驶软件项目，从机器人到车端的桥梁级存在。*

- **[carla-simulator/carla](https://github.com/carla-simulator/carla)** ⭐ 14,172
  *自动驾驶研究的开源仿真标杆，与具身驾驶决策研究高度耦合。*

- **[robotmcp/ros-mcp-server](https://github.com/robotmcp/ros-mcp-server)** ⭐ 1,345
  *首个将 MCP（Model Context Protocol）协议引入 ROS 的桥接服务，让 Claude/GPT 等 LLM 直接操控真实机器人。*

### 🧠 VLA 与基础模型

- **[FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA)** ⭐ 537
  *一站式 VLA 工程平台，覆盖数据采集到真实机器人部署，是国内具身 VLA 落地实践的代表。*

- **[InternRobotics/InternVLA-A-series](https://github.com/InternRobotics/InternVLA-A-series)** ⭐ 497
  *InternVLA-A1 统一理解、生成与动作的机器人操作模型，国内 VLA 体系的重要开源资产。*

- **[InternRobotics/VLAC](https://github.com/InternRobotics/VLAC)** ⭐ 319
  *面向真实机器人 RL 的 VLA-Critic 模型，连接 VLA 与在线强化学习。*

- **[allenai/vla-evaluation-harness](https://github.com/allenai/vla-evaluation-harness)** ⭐ 444
  *统一评测任意 VLA 模型在任意机器人仿真基准上的框架，是建立"具身 GPT-4 时刻"前的基础设施。*

- **[datawhalechina/every-embodied](https://github.com/datawhalechina/every-embodied)** ⭐ 2,690
  *从零构建 VLA / OpenVLA / SmolVLA / π₀ 的中文实战教程，对国内具身社区的入门与培训极具价值。*

### 🔧 硬件与驱动

- **[enactic/openarm](https://github.com/enactic/openarm)** ⭐ 2,725
  *完全开源的人形机械臂，专为接触丰富的物理 AI 研究与部署设计，硬件层开源的关键进展。*

- **[koide3/glim](https://github.com/koide3/glim)** ⭐ 1,682
  *基于点云的 3D 定位与建图框架，通用、可扩展，是移动机器人/UAV 导航栈的关键模块。*

- **[hku-mars/UMI-3D](https://github.com/hku-mars/UMI-3D)** ⭐ 255
  *港大 MARS 实验室开源的 UMI-3D SLAM 与数据处理流水线，面向通用操作接口的数据采集。*

### 📊 数据集与基准

- **[StanfordVL/BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K)** ⭐ 1,577
  *推动具身 AI 研究的标志性平台，1K 任务级仿真基准，是"家务具身 GPT"的事实评测场。*

- **[RoboTwin-Platform/RoboTwin](https://github.com/RoboTwin-Platform/RoboTwin)** ⭐ 2,587
  *RoboTwin 2.0 官方仓库，提供双臂操作仿真与基准数据，是国内具身操作数据生态的核心。*

- **[RoboTwin-Platform/RMBench](https://github.com/RoboTwin-Platform/RMBench)** ⭐ 167
  *基于 RoboTwin 的"记忆依赖"操作基准，考察长时序任务中策略的连续性与抗遗忘能力。*

---

## 📈 生态趋势信号

从今天的信号可以清晰看到三条主线正在交汇：① **World Model × VLA 范式融合**，GigaWorld-Policy、S²-VLA、M⁴World 等工作普遍将"未来帧预测"与"动作生成"嵌入同一框架，反映具身基础模型正在从"纯反应式策略"走向"可推

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*