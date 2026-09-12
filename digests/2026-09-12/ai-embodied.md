# 具身智能开源动态日报 2026-09-12

> 数据来源: GitHub Search API (132 仓库) | ArXiv cs.RO (0 篇论文) | RSS 新闻 (49 条) | 生成时间: 2026-09-12 02:37 UTC

---

# 具身智能开源动态日报

**日期：2025 年 1 月 · 第 ___ 期**
**数据来源：IEEE Spectrum · The Robot Report · ROS Discourse · GitHub Trending**

---

## 📌 今日速览

今日机器人与具身智能领域呈现"硬件突破 + 基础设施完善"双线并进态势。IEEE Spectrum 集中报道了人形机器人在灾难响应场景中的运动能力突破、触觉感知从科研走向工程化、以及抽血机器人 Vitestro 的临床落地；The Robot Report 重点关注 Monumental 的砌墙机器人商用化与 RoboBusiness 的户外部署专题。开源侧，132 个活跃仓库中具身智能（embodied-ai）类目生态最为活跃，新一代开源基础设施如 **Newton 物理引擎**、**RLinf 强化学习框架**、**RoboVerse 通用平台**与 **BitVLA 1-bit VLA 模型**持续涌现，标志着实体 AI（Physical AI）正从算法演示迈向系统工程化阶段。

---

## 📰 行业脉搏

**1. 人形机器人挑战灾难救援任务** 🔥
[Video Friday: Humanoid Robot Takes On Monkey Bars](https://spectrum.ieee.org/video-friday-disaster-response-robots)
IEEE Spectrum 最新一期 Video Friday 重点展示了人形机器人在模拟灾难响应场景中的表现，包括攀爬单杠类障碍物，凸显了双足运动控制在非结构化环境中的最新进展。

**2. 触觉感知正在从实验室走向工程化**
[Robots Are Learning to Feel](https://spectrum.ieee.org/tactile-data-robots)
触觉数据采集与建模已成为机器人操作的关键缺口。本文梳理了视觉-触觉融合、触觉传感硬件与数据集生态的现状，对推动接触丰富操作任务意义重大。

**3. 医疗机器人进入临床落地阶段**
[This Robot Will Draw Your Blood Now](https://spectrum.ieee.org/blood-draw-robot-vitestro-aletta)
荷兰 Vitestro 的 Aletta 自动抽血机器人已开始临床部署，是医疗机器人从研发走向大规模商用化的标志性事件。

**4. 砌墙机器人开启建筑工业化**
[One brick at a time: How Monumental uses robotics to build walls](https://www.therobotreport.com/one-brick-at-a-time-how-monumental-uses-robotics-to-build-walls/)
Monumental 在砌砖施工领域部署移动机械臂，将传统建筑工人工作流自动化，是建筑机器人单点突破的代表案例。

**5. 户外部署成为行业新焦点**
[Learn how AVs and robotics are laying the groundwork for field deployments at RoboBusiness](https://www.therobotreport.com/learn-how-avs-robotics-are-laying-groundwork-field-deployments-robobusiness/)
自动驾驶与机器人技术正在加速向户外真实场景部署，RoboBusiness 专题讨论了从实验室到现场的工程化挑战。

---

## 🔬 研究前沿

> ⚠️ 今日 ArXiv cs.RO 暂无新论文抓取。不过，开源社区持续涌现的代码仓库已部分反映了当前研究热点：世界模型（World Models）、VLA 高效化（1-bit VLA）、第一人称视角数据采集（EgoWAM）、机器人数据引擎（Robot Data Engine）等方向活跃度高。后续日报将持续追踪 cs.RO 新论文动态。

---

## 🚀 重点项目

### 🦾 机器人学习与控制

| 项目 | ⭐ | 说明 |
|---|---|---|
| [**AtsushiSakai/PythonRobotics**](https://github.com/AtsushiSakai/PythonRobotics) | 30,485 | 机器人算法教科书级代码库，覆盖 SLAM、路径规划、定位等核心模块，是机器人学习入门的事实标准。 |
| [**DLR-RM/stable-baselines3**](https://github.com/DLR-RM/stable-baselines3) | 13,782 | PyTorch 版的 Stable Baselines，提供可靠且文档完善的强化学习算法实现，是机器人 RL 训练的主流基线。 |
| [**Farama-Foundation/Gymnasium**](https://github.com/Farama-Foundation/Gymnasium) | 12,523 | 强化学习环境标准 API（原 OpenAI Gym），单智能体 RL 事实标准，是机器人策略学习生态的基石。 |
| [**OpenPipe/ART**](https://github.com/OpenPipe/ART) | 10,712 | Agent Reinforcement Trainer，使用 GRPO 训练多步骤智能体，将 RL 引入真实任务代理训练。 |
| [**OpenRLHF/OpenRLHF**](https://github.com/OpenRLHF/OpenRLHF) | 9,994 | 基于 Ray 的高可扩展 Agentic RL 框架，支持 PPO / DAPO / VLM 等训练范式，是具身 Agent 强化学习的关键基础设施。 |
| [**RLinf/RLinf**](https://github.com/RLinf/RLinf) | 5,088 | 面向具身与 Agentic AI 的强化学习基础设施，重点支持 VLA 与智能体策略的分布式训练。 |
| [**StanfordVL/BEHAVIOR-1K**](https://github.com/StanfordVL/BEHAVIOR-1K) | 1,690 | 加速具身 AI 研究的标准平台，提供大规模日常任务仿真基准，是家务机器人的重要评测环境。 |
| [**enactic/openarm**](https://github.com/enactic/openarm) | 2,969 | 完全开源的人形机械臂，专为接触丰富环境的物理 AI 研究与部署设计，是硬件开源化的代表项目。 |
| [**RoboVerseOrg/RoboVerse**](https://github.com/RoboVerseOrg/RoboVerse) | 1,859 | 面向可扩展、可泛化机器人学习的统一平台、数据集与基准，目标打通 sim-to-real 全链路。 |

### 🤖 仿真与框架

| 项目 | ⭐ | 说明 |
|---|---|---|
| [**google-deepmind/mujoco**](https://github.com/google-deepmind/mujoco) | 15,065 | 多关节接触动力学通用物理仿真器，机器人研究的事实标准模拟器。 |
| [**PX4/PX4-Autopilot**](https://github.com/PX4/PX4-Autopilot) | 12,596 | 主流开源飞控软件，是空中机器人与无人机研究的工业级标准。 |
| [**autowarefoundation/autoware**](https://github.com/autowarefoundation/autoware) | 12,057 | 全球领先的开源自动驾驶软件项目，覆盖感知、规划、控制全栈。 |
| [**isaac-sim/IsaacLab**](https://github.com/isaac-sim/IsaacLab) | 8,104 | 基于 NVIDIA Isaac Sim 的统一机器人学习框架，是当前 GPU 加速 RL 训练的核心平台。 |
| [**newton-physics/newton**](https://github.com/newton-physics/newton) | 5,612 | 基于 NVIDIA Warp 的开源 GPU 加速物理仿真引擎，专为机器人学家与仿真研究者设计，代表新一代物理仿真基础设施。 |
| [**cyberbotics/webots**](https://github.com/cyberbotics/webots) | 4,618 | 开源机器人仿真器，跨平台、教育与科研广泛使用。 |
| [**stack-of-tasks/pinocchio**](https://github.com/stack-of-tasks/pinocchio) | 3,727 | 刚体动力学算法的高效实现，支持解析导数，是人形与腿足机器人控制的核心依赖。 |
| [**mujocolab/mjlab**](https://github.com/mujocolab/mjlab) | 3,041 | 基于 MuJoCo-Warp 的 Isaac Lab 风格 API，为 RL 与机器人研究提供 GPU 加速仿真。 |
| [**ros2-rust/ros2_rust**](https://github.com/ros2-rust/ros2_rust) | 1,524 | ROS 2 的 Rust 绑定，代表机器人中间件向内存安全语言扩展的趋势。 |
| [**gazebosim/gz-sim**](https://github.com/gazebosim/gz-sim) | 1,496 | Gazebo 最新版本，开源机器人仿真标杆。 |
| [**copper-project/copper-rs**](https://github.com/copper-project/copper-rs) | 1,488 | 机器人操作系统，支持机器人全流程确定性构建、运行与回放。 |

### 🧠 VLA 与基础模型

| 项目 | ⭐ | 说明 |
|---|---|---|
| [**FluxVLA/FluxVLA**](https://github.com/FluxVLA/FluxVLA) | 668 | 全栈 VLA 工程平台，覆盖从数据到真实机器人部署的完整链路，降低 VLA 落地门槛。 |
| [**allenai/vla-evaluation-harness**](https://github.com/allenai/vla-evaluation-harness) | 597 | 统一评估任意 VLA 模型在任意机器人仿真基准上的表现，标准化评测是关键基础设施。 |
| [**syswonder/robonix**](https://github.com/syswonder/robonix) | 354 | 面向机器人的 Agentic 操作系统，定义 VLA 与具身 Agent 的运行时规范。 |
| [**TensorAuto/OpenTau**](https://github.com/TensorAuto/OpenTau) | 215 | Tensor 开源的 VLA 训练基础设施，面向真实机器人 PyTorch 训练流程。 |
| [**ustcwhy/BitVLA**](https://github.com/ustcwhy/BitVLA) | 165 | 1-bit Vision-Language-Action 模型，针对机器人操作场景的极致量化，对边缘部署具有重要意义。 |
| [**AIGeeksGroup/MobileVLA-R1**](https://github.com/AIGeeksGroup/MobileVLA-R1) | 115 | ECCV 2026 论文，面向移动机器人的强化 VLA 模型，将 RL 引入移动导航决策。 |
| [**lichy2004/GazeVLA**](https://github.com/lichy2004/GazeVLA) | 40 | CoRL 2026 论文官方代码，学习人类意图用于机器人操作，融合注视（gaze）信号的 VLA 创新方向。 |
| [**wadeKeith/SimpleMemVLA**](https://github.com/wadeKeith/SimpleMemVLA) | 26 | 面向 VLA 的原生视频记忆机制，通过时间戳视觉历史支持长时程机器人操作。 |
| [**knightnemo/Awesome-World-Models**](https://github.com/knightnemo/Awesome-World-Models) | 3,409 | 世界模型精选资源列表，覆盖视频生成、具身 AI 与自动驾驶，是研究者的高效入口。 |
| [**OpenMOSS/Awesome-WAM**](https://github.com/OpenMOSS/Awesome-WAM) | 1,402 | 世界动作模型（World Action Models）论文与资源精选，指向下一代具身基础模型范式。 |

### 🔧 硬件与驱动

| 项目 | ⭐ | 说明 |
|---|---|---|
| [**commaai/openpilot**](https://github.com/commaai/openpilot) | 63,635 | 面向 300+ 车型的开源自动驾驶操作系统，是消费级机器人化汽车的事实标准。 |
| [**ArduPilot/ardupilot**](https://github.com/ArduPilot/ardupilot) | 15,847 | 涵盖 ArduPlane / ArduCopter / ArduRover / ArduSub 的开源飞控全家桶，无人机生态基石。 |
| [**rerun-io/rerun**](https://github.com/rerun-io/rerun) | 11,432 | 多模态机器人数据可视化、查询与流式传输工具，是机器人数据基础设施的关键组件。 |
| [**huangjunsen0406/py-xiaozhi**](https://github.com/huangjunsen0406/py-xiaozhi) | 3,466 | 开源 AI 助手生态，集成 MCP、多模态工作流、IoT 与跨平台语音交互，是软硬一体具身应用代表。 |
| [**PhyAgentOS/PhyAgentOS-core**](https://github.com/PhyAgentOS/PhyAgentOS-core) | 2,182 | 递归自我改进的物理智能体操作系统，代表具身 Agent OS 的前沿探索。 |
| [**ros-claw/rosclaw**](https://github.com/ros-claw/rosclaw) | 197 | 面向 Physical AI 与具身 Agent 的自演化运行时基础设施，集成 e-URDF、沙箱安全、技能演化等关键能力。 |

### 📊 数据集与基准

| 项目 | ⭐ | 说明 |
|---|---|---|
| [**Hebbian-Robotics/hflow**](https://github.com/Hebbian-Robotics/hflow) | 262 | 面向机器人团队的 SDK，用于验证 AI 训练数据质量，数据质量已成为 VLA 时代的关键瓶颈。 |
| [**GaTech-RL2/EgoWAM**](https://github.com/GaTech-RL2/EgoWAM) | 22 | CoRL 2026 论文代码，使用野外第一人称人类数据进行世界动作模型训练，开辟新数据范式。 |
| [**Calibra-Robotics/Calibra**](https://github.com/Calibra-Robotics/Calibra) | 19 | 机器人模仿学习的数据集可观测性与核心集选择工具，提升数据利用效率。 |
| [**RobotControlStack/duobench**](https://github.com/RobotControlStack/duobench) | 18 | 仿真与真实世界的双臂操作可复现基准，是具身操作研究的关键评测工具。 |
| [**kesai-labs/py123d_garage**](https://github.com/kesai-labs/py123d_garage) | 11 | 开环端到端驾驶策略训练的入门工具包，降低自动驾驶研究门槛。 |
| [**artyomzifir/ViKi**](https://github.com/artyomzifir/ViKi) | 8 | 通过 RGB-D 相机采集人类演示、动作重定向并生成 LeRobot 数据集，桥接人类数据与机器人数据。 |
| [**murobotics-ai/handumi-hw**](https://github.com/murobotics-ai/handumi-hw) | 86 | 开源手持式 UMI 变体，无需机器人即可采集双手操作数据，降低数据采集门槛。 |
| [**chang-xinhai/Awesome-Robot-Data-Engine**](https://github.com/chang-xinhai/Awesome-Robot-Data-Engine) | 3 | 机器人数据引擎精选资源，涵盖

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*