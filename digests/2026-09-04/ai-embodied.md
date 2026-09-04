# 具身智能开源动态日报 2026-09-04

> 数据来源: GitHub Search API (130 仓库) | ArXiv cs.RO (30 篇论文) | RSS 新闻 (44 条) | 生成时间: 2026-09-04 02:25 UTC

---

# 具身智能开源动态日报

## 今日速览

今日具身智能领域呈现"资本 + 基础设施 + 基础模型"三线并进的格局：NVIDIA 拟收购 Hugging Face 引发 AI 开放生态走向热议，Medtronic 以 7 亿美元加码手术机器人 Cornerstone Robotics；研究侧，VLA、世界模型与本体控制的统一框架持续涌现，FWBC-VLA 将力感知引入全身运动-操作；开源侧，Isaac Lab、MuJoCo/Newton 双物理引擎生态进一步巩固，τ0-VLA、FluxVLA 等基础模型项目加速走向真实机器人部署，整体趋势是"仿真 + 基础模型 + 开放硬件"协同推进具身智能规模化落地。

---

## 行业脉搏

1. **NVIDIA 计划收购 Hugging Face 并承诺保持开放**
   https://www.therobotreport.com/nvidia-to-acquire-hugging-face-and-keep-ai-develpment-platform-open/
   若交易达成，NVIDIA 将把全球最大的开源模型社区纳入版图，对机器人、VLA、世界模型等具身 AI 研发链路意义深远，"算力 + 模型 + 平台"一体化趋势加速。

2. **Medtronic 投资 7 亿美元加码手术机器人 Cornerstone Robotics**
   https://www.therobotreport.com/medtronic-invests-700m-in-surgical-partner-cornerstone-robotics/
   全球医械巨头押注手术机器人，说明临床级具身系统进入规模化部署前夜，资本与监管的双重门槛正推动行业整合。

3. **PlusAI 通过 SPAC 上市，自动驾驶卡车商业化提速**
   https://www.therobotreport.com/plusai-takes-autonomous-trucking-public-via-spac-deal/
   L4 级干线物流走向公开市场验证，物理 AI 在高价值商业场景率先兑现。

4. **JAKA 与 Teradyne Robotics 专利纠纷持续**
   https://www.therobotreport.com/jaka-hits-teradyne-robotics-back-over-patent-dispute/
   协作机器人专利战升级，反映中国厂商在核心关节、力控等模块正在正面挑战国际巨头。

5. **NexCOBOT 谈 Physical AI 落地的市场障碍与加速路径**
   https://www.therobotreport.com/nexcobot-discusses-physical-ai-market-hurdles-and-acceleration/
   来自控制器厂商的一线观察：当前主要瓶颈在数据闭环、实时性与成本控制，而非模型本身。

---

## 研究前沿

1. **Toward Unified Robot Learning: Bridging Representation, Vision-Language-Action, and World Models**
   http://arxiv.org/abs/2609.03927v1
   系统综述了"表征 + VLA + 世界模型"三条路线在统一机器人学习中的最新交叉，给出了可复现的整合思路，对解决 Sim2Real 与长程规划问题具有指导价值。

2. **FWBC-VLA: Force-Aware Whole-Body Compensation for Contact-Rich Loco-Manipulation**
   http://arxiv.org/abs/2609.03889v1
   针对足式机器人在接触富集场景下的全身运动-操作难题，将力感知补偿引入 VLA 框架，弥合了高层语义动作与底层物理交互的鸿沟。

3. **GraFT: A Training-Free Framework for Spatial Reasoning in MLLMs via 3D Scene Graphs**
   http://arxiv.org/abs/2609.03892v1
   提出无需训练的 3D 场景图增强方案，让现成多模态大模型直接获得可靠空间推理能力，为机器人操作中的几何理解提供轻量化方案。

4. **Rethinking World Models for Safety-Critical Embodied Systems**
   http://arxiv.org/abs/2609.03774v1
   重新审视世界模型在安全关键场景（自动驾驶、医疗、人机协作）中的可信生成与可控性问题，呼吁建立新的评估范式。

5. **Virtual Testing of Automated Driving Systems through Credible Simulations**
   http://arxiv.org/abs/2609.03760v1
   系统论证自动驾驶系统仿真可信度的判定方法，对安全认证流程具有直接工程价值。

---

## 重点项目

### 🦾 机器人学习与控制

- **isaac-sim/IsaacLab** ⭐8,036
  https://github.com/isaac-sim/IsaacLab
  基于 NVIDIA Isaac Sim 的统一机器人学习框架，已成为事实标准的 GPU 并行 RL/IL 训练底座。

- **RoboVerseOrg/RoboVerse** ⭐1,852
  https://github.com/RoboVerseOrg/RoboVerse
  面向可扩展、可泛化机器人学习的统一平台、数据集与基准，推动跨平台策略迁移。

- **robocasa/robocasa** ⭐1,701
  https://github.com/robocasa/robocasa
  大规模日常家务仿真任务，为通用机器人家政能力训练提供高保真场景。

- **RobotControlStack/robot-control-stack** ⭐155
  https://github.com/RobotControlStack/robot-control-stack
  无 ROS 的轻量级 sim-to-real 框架，原生集成 MuJoCo + Gymnasium，支持 Franka、UR5e、xArm、SO101 等机械臂快速训练与部署 VLA / RL 策略。

- **murobotics-ai/handumi-sw** ⭐68
  https://github.com/murobotics-ai/handumi-sw
  开源 HandUMI 软件栈，支持双手机器人同步数据采集与重定向，是低成本双手机器人 UMI 数据采集的代表性方案。

- **Calibra** ⭐17
  https://github.com/omertt27/Calibra
  面向模仿学习的数据可观测性与核心集选择工具，帮助团队从海量数据中挑出"最有价值"的样本，提升训练效率。

- **ViKi** ⭐4
  https://github.com/artyomzifir/ViKi
  通过 RGB-D 相机采集人类演示、将其重定向到机器人并输出 LeRobot 数据集的视频到运动学（Video-to-Kinematics）管线。

### 🤖 仿真与框架

- **google-deepmind/mujoco** ⭐14,913
  https://github.com/google-deepmind/mujoco
  接触动力学领域事实标准的物理仿真引擎，是机器人学习与控制研究的基石。

- **carla-simulator/carla** ⭐14,361
  https://github.com/carla-simulator/carla
  自动驾驶研究最广泛使用的开源模拟器，支持感知、规划、端到端学习全链路。

- **newton-physics/newton** ⭐5,579
  https://github.com/newton-physics/newton
  基于 NVIDIA Warp 构建的 GPU 加速开源物理引擎，专门面向机器人学家与仿真研究者。

- **mujocolab/mjlab** ⭐2,980
  https://github.com/mujocolab/mjlab
  通过 MuJoCo-Warp 提供 Isaac Lab 风格 API，为 RL 与机器人研究提供 GPU 原生工作流。

- **google-deepmind/dm_control** ⭐4,681
  https://github.com/google-deepmind/dm_control
  DeepMind 官方基于 MuJoCo 的 RL 环境栈，是连续控制基准的默认实现之一。

- **gazebosim/gz-sim** ⭐1,482
  https://github.com/gazebosim/gz-sim
  Gazebo 最新版本，开源机器人仿真领域长期核心项目之一。

- **dartsim/dart** ⭐1,201
  https://github.com/dartsim/dart
  现代 C++23 物理引擎，面向机器人、动画与机器学习研究，强调 Python 绑定与可控性。

- **cyberbotics/webots** ⭐4,596
  https://github.com/cyberbotics/webots
  跨平台开源机器人仿真器，与 ROS 生态深度集成，是教学与中等保真度研究的常用工具。

### 🧠 VLA 与基础模型

- **FluxVLA/FluxVLA** ⭐649
  https://github.com/FluxVLA/FluxVLA
  面向具身 AI 的 VLA 工程一体化平台，覆盖"数据 → 训练 → 真实机器人部署"全链路。

- **sii-research/tau-0-vla** ⭐603
  https://github.com/sii-research/tau-0-vla
  τ0-VLA 官方实现，提出"世界模型引导的测试时计算"层级化机器人基础模型。

- **allenai/vla-evaluation-harness** ⭐588
  https://github.com/allenai/vla-evaluation-harness
  统一评估任意 VLA 模型在任意机器人仿真基准上的表现，推动 VLA 的可复现评测。

- **TensorAuto/OpenTau** ⭐211
  https://github.com/TensorAuto/OpenTau
  基于 PyTorch 的真实世界机器人 VLA 训练基础设施，开箱即用。

- **PhyAgentOS/PhyAgentOS-core** ⭐2,024
  https://github.com/PhyAgentOS/PhyAgentOS-core
  递归自改进（RSI）的物理代理操作系统，探索具身 Agent 通过工作流实现自我迭代。

- **robocurve/inspect-robots** ⭐202
  https://github.com/robocurve/inspect-robots
  面向 Physical AI 的开源评测框架，支持任意 LLM/VLA 在任意机械臂/人形机器人、真实/仿真基准上的对比。

### 🔧 硬件与驱动

- **enactic/openarm** ⭐2,920
  https://github.com/enactic/openarm
  完全开源的人形机械臂，专为物理 AI 在接触富集环境中的研究与部署而设计，是当前开源双臂硬件的代表性项目。

- **PetoiCamp/OpenCat-Quadruped-Robot** ⭐5,252
  https://github.com/PetoiCamp/OpenCat-Quadruped-Robot
  波士顿动力学风格四足机器人宠物框架，STEM 教学与 AI 增强机器人服务的入门首选。

- **nasa-jpl/open-source-rover** ⭐9,627
  https://github.com/nasa-jpl/open-source-rover
  基于火星车结构的可 DIY 六轮 rover，是低成本机器人硬件学习的经典项目。

- **ClemensElflein/OpenMower** ⭐6,697
  https://github.com/ClemensElflein/OpenMower
  将廉价市售割草机器人升级为 RTK-GPS 智能机器人，机器人 + 实际应用的典范。

- **JacopoPan/aerial-autonomy-stack** ⭐593
  https://github.com/JacopoPan/aerial-autonomy-stack
  基于 ROS2 + PX4/ArduPilot 的无人机集群仿真与部署栈，支持 YOLO、LiDAR、Jetson 边缘端。

### 📊 数据集与基准

- **StanfordVL/BEHAVIOR-1K** ⭐1,679
  https://github.com/StanfordVL/BEHAVIOR-1K
  斯坦福发布的具身 AI 研究平台，包含 1000 种日常任务的标准化基准与仿真环境。

- **RoboTwin-Platform/RoboTwin** ⭐2,808
  https://github.com/RoboTwin-Platform/RoboTwin
  RoboTwin 2.0（ICML 2026）官方代码仓库，面向双臂机器人大规模仿真基准。

- **Octoday-Hub/Embodied-AI** ⭐2,426
  https://github.com/Octoday-Hub/Embodied-AI
  「星期八具身智能生态社区」，聚合论文、项目、课程、工具、数据集与招聘资源，连接全球开发者。

- **Hebbian-Robotics/hflow** ⭐230
  https://github.com/Hebbian-Robotics/hflow
  面向机器人团队的 SDK，用于对训练所用数据进行质量验证，是数据驱动时代的"数据可观测性"基础设施。

- **AccelerationConsortium/Matterix** ⭐55
  https://github.com/AccelerationConsortium/Matterix
  面向机器人辅助化学实验室自动化的数字孪生平台，推动具身 AI 进入科研自动化场景。

- **Vottivott/microduck-playground** ⭐18
  https://github.com/Vottivott/microduck-playground
  配套 IEEE Spectrum 今日 "Meet Microduck" 视频的可复现 RL 实验、策略与硬件外设，对教学与小型平台研究非常友好。

---

## 生态趋势信号

今日信息流汇聚出几条值得关注的信号：第一，**"模型 + 算力 + 平台"垂直整合**——NVIDIA 拟收购 Hugging Face 标志着头部厂商正在抢占具身 AI 全栈入口，未来开源机器人/VLA 项目可能更深度绑定单一平台；第二，**"VLA × 世界模型 × 力控"三向融合**——FWBC-VLA、τ0-VLA、安全关键世界模型等论文都表明，从高层语义到物理交互的"端到端可控"已成为下一阶段主线；第三，**物理引擎格局重塑**——MuJoCo 仍是事实标准（mjlab、Newton、dm_control 同步演进），但 GPU 原生、Newton 物理等新引擎正在挑战传统 CPU 物理仿真；第四，**数据可观测性与核心集选择**成为新热点，Calibra、hflow 等小项目聚焦"数据质量大于模型规模"的实践哲学。

---

## 值得关注

1. **NVIDIA 收购 Hugging Face 进展**
   https://www.therobotreport.com/nvidia-to-acquire-hugging-face-and-keep-ai-develpment-platform-open/
   若交易完成，将决定未来 3-5 年开源具身 AI 模型的"事实底座"归属——所有依赖 Hugging Face Hub 的开源 VLA、世界

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*