# 具身智能开源动态日报 2026-07-21

> 数据来源: GitHub Search API (130 仓库) | ArXiv cs.RO (0 篇论文) | RSS 新闻 (40 条) | 生成时间: 2026-07-21 02:04 UTC

---

# 具身智能开源动态日报

**日期：2026年 | 整理：机器人 & 具身智能领域分析师**

---

## 📰 今日速览

今日行业新闻聚焦于具身智能产品化与人机交互前沿：AGIBOT 在 WAIC 推出四款具身 AI 产品，BrainCo 展示脑控机器人平台，波士顿动力探讨人机交互艺术。在工具链层面，"如何避免远程操控陷阱"成为产业共识。开源生态方面，MuJoCo/Isaac Lab/Gazebo 三大仿真栈持续活跃，VLA 模型与具身基础模型项目加速涌现（如 FluxVLA、InternVLA-A1、Open-X-Humanoid 系列），脑机接口 + 机器人、脑控具身 AI 正在成为新的研究交汇点。

---

## 🩺 行业脉搏

1. **[BrainCo 展示脑控机器人 AI 平台](https://www.therobotreport.com/brainco-demonstrates-brain-controlled-robot-ai-platform/)** — 强脑科技（BrainCo）将非侵入式脑机接口与机器人 AI 平台融合，意味着 BCI 不再止于医疗康复，开始向通用具身控制延伸，是脑机接口商业化的重要里程碑。

2. **[AGIBOT 在 WAIC 推出四款具身 AI 真实作业产品](https://www.therobotreport.com/agibot-unveils-four-embodied-ai-products-real-world-operations-waic/)** — 智元机器人集中发布四款面向真实场景作业的具身 AI 产品，标志国产具身智能从 Demo 走向产线落地阶段。

3. **[波士顿动力探讨人机交互艺术](https://www.therobotreport.com/boston-dynamics-discuss-art-behind-human-robot-hinteraction/)** — Boston Dynamics 公开讨论 HRI 的艺术化设计，反映头部厂商正将"亲和力、表演性"作为新一代机器人的差异化竞争维度。

4. **[避免机器人开发中的远程操控陷阱](https://www.therobotreport.com/how-to-avoid-teleoperation-trap-robotics-development/)** — 业界反思仅靠遥操作数据训练的局限，呼吁建立自主闭环的数据飞轮，对 VLA 策略的数据策略具有指导意义。

5. **[NASA 机器人装配技能研究](https://spectrum.ieee.org/graduate-student-nasas-robots-assembly)** — 研究生为 NASA 机器人装配复杂结构，在轨装配是未来太空基础设施的关键能力。

---

## 📚 研究前沿

> 今日 ArXiv cs.RO 暂无新增论文（0 篇）。
> 建议关注昨日或本周内其他分类（cs.AI / cs.CV）中具身智能相关论文作为补充。

---

## 🔬 重点项目

### 🦾 机器人学习与控制

- **[isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab)** ⭐7,715
  NVIDIA Isaac Sim 上的统一机器人学习框架，是当下 GPU 加速 Sim-to-Real 训练的事实标准。

- **[mujocolab/mjlab](https://github.com/mujocolab/mjlab)** ⭐2,700
  提供 Isaac Lab 风格的 API，但底层基于 MuJoCo-Warp，为研究者提供高性能、低门槛替代方案。

- **[DLR-RM/stable-baselines3](https://github.com/DLR-RM/stable-baselines3)** ⭐13,594
  PyTorch 实现的可靠 RL 算法库，机器人策略训练与基线对比的常用工具。

- **[Tsinghua-MARS-Lab/OMG](https://github.com/Tsinghua-MARS-Lab/OMG)** ⭐92
  清华 MARS Lab 开源的"通用人形机器人全模态运动生成"框架，对通用人形控制有重要贡献。

- **[robonet-ai/handumi-sw](https://github.com/robonet-ai/handumi-sw)** ⭐28
  开源双手同步数据采集与重定向软件，将 UMI 范式工程化，大幅降低遥操作数据门槛。

- **[RobotControlStack/robot-control-stack](https://github.com/RobotControlStack/robot-control-stack)** ⭐124
  面向 VLA 与 RL 的 ROS-free Sim-to-Real 框架，原生支持 MuJoCo Gymnasium 接口，部署链路极简。

### 🤖 仿真与框架

- **[google-deepmind/mujoco](https://github.com/google-deepmind/mujoco)** ⭐14,267
  高性能接触物理仿真引擎，是机器人学习、RL、控制研究的基础设施。

- **[autowarefoundation/autoware](https://github.com/autowarefoundation/autoware)** ⭐11,854
  全球领先的开源自动驾驶软件项目，是具身智能在移动机器人领域的标杆。

- **[ros-navigation/navigation2](https://github.com/ros-navigation/navigation2)** ⭐4,489
  ROS 2 官方导航框架，工业级 SLAM/规划/控制参考实现。

- **[gazebosim/gz-sim](https://github.com/gazebosim/gz-sim)** ⭐1,418
  Gazebo 最新版本，开源机器人仿真事实标准之一。

- **[cyberbotics/webots](https://github.com/cyberbotics/webots)** ⭐4,469
  跨平台开源机器人仿真器，教育与研究场景广泛使用。

### 🧠 VLA 与具身基础模型

- **[RLinf/RLinf](https://github.com/RLinf/RLinf)** ⭐4,183
  面向具身与 Agentic AI 的强化学习基础设施，是连接 RL 与 VLA 训练的关键中间件。

- **[dora-rs/dora](https://github.com/dora-rs/dora)** ⭐3,848
  基于 Rust 的数据流机器人中间件，专注 AI 机器人应用的低延迟、分布式数据流编排。

- **[StanfordVL/BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K)** ⭐1,583
  加速具身 AI 研究的统一平台，提供 1000 种日常任务的仿真基准。

- **[FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA)** ⭐551
  一体化 VLA 工程平台，覆盖从数据到真机部署全链路。

- **[InternRobotics/InternVLA-A-series](https://github.com/InternRobotics/InternVLA-A-series)** ⭐507
  上海 AI Lab InternVLA-A1：统一理解、生成与动作的机器人操作模型。

- **[Open-X-Humanoid/XR-1](https://github.com/Open-X-Humanoid/XR-1)** ⭐186
  通过统一视觉-运动表征学习多功能 VLA 模型，是人形机器人通用策略的有益探索。

- **[Open-X-Humanoid/TienKung-Lab](https://github.com/Open-X-Humanoid/TienKung-Lab)** ⭐819
  基于 IsaacLab 的腿式机器人直训工作流，对国内人形机器人开源生态贡献明显。

### 🔧 硬件与驱动

- **[commaai/openpilot](https://github.com/commaai/openpilot)** ⭐63,179
  已在 300+ 车型上运行的机器人操作系统，是消费级自动驾驶开源标杆。

- **[ArduPilot/ardupilot](https://github.com/ArduPilot/ardupilot)** ⭐15,518
  无人机与无人系统领域最成熟的自动驾驶开源栈（ArduPlane/Copter/Rover/Sub）。

- **[PX4/PX4-Autopilot](https://github.com/PX4/PX4-Autopilot)** ⭐12,198
  学术界与工业界广泛采用的无人机飞控开源项目。

- **[enactic/openarm](https://github.com/enactic/openarm)** ⭐2,742
  完全开源的人形机械臂，专注接触丰富环境中的物理 AI 研究与部署。

### 📊 数据集与基准

- **[RoboVerseOrg/RoboVerse](https://github.com/RoboVerseOrg/RoboVerse)** ⭐1,784
  面向可扩展、可泛化机器人学习的统一平台、数据集与基准。

- **[Farama-Foundation/Gymnasium-Robotics](https://github.com/Farama-Foundation/Gymnasium-Robotics)** ⭐941
  Gymnasium 官方机器人仿真环境合集，是机器人 RL 评测的事实标准之一。

- **[ros-controls/gz_ros2_control](https://github.com/ros-controls/gz_ros2_control)** ⭐254
  新版 Gazebo 与 ros2_control 的桥接，是 ROS 2 控制生态的关键组件。

- **[arpitg1304/forge](https://github.com/arpitg1304/forge)** ⭐157
  机器人数据集格式互转工具包（RLDS / LeRobot / Zarr / HDF5 / Rosbag），面向 OpenVLA、Octo、Diffusion Policy 工作流。

---

## 🌐 生态趋势信号

从今日信号可见三条主线正在合流：(1) **仿真栈收敛与分化**——MuJoCo（Warp 版）、Isaac Lab、Newton 引擎形成"GPU 加速物理"的新三角，传统 Gazebo 在被替代的同时，仍凭借 ROS 生态保持强大粘性；(2) **VLA 工程化加速**——从 InternVLA、FluxVLA 到 rosclaw、robot-control-stack，"训练-部署-评估"链路工具链密集涌现，VLA 正在从研究范式转向工程范式；(3) **非传统交互范式崛起**——BrainCo 脑控平台、波士顿动力 HRI 艺术化、AGIBOT 真实作业产品，提示具身智能的下一个增量市场可能来自医疗康复、人机协作与服务业，而非传统工业搬运。

---

## ⭐ 值得关注

1. **BrainCo 脑控机器人 AI 平台** ([链接](https://www.therobotreport.com/brainco-demonstrates-brain-controlled-robot-ai-platform/))：BCI × 具身 AI 的结合点正在打开，建议持续跟踪其硬件路线与开发者生态。

2. **[Open-X-Humanoid/TienKung-Lab](https://github.com/Open-X-Humanoid/TienKung-Lab)** 与 **[XR-1](https://github.com/Open-X-Humanoid/XR-1)**：国内人形机器人开源工作流的代表项目，提供了从 IsaacLab 训练到 VLA 统一表征的完整链路，是评估国内具身开源能力的关键样本。

3. **[FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA)** + **[allenai/vla-evaluation-harness](https://github.com/allenai/vla-evaluation-harness)**：VLA 平台与评测框架同步发力，意味着 VLA 正在进入"基础设施成熟期"，值得作为后续 VLA 工作的基座。

---

*本日报由自动采集与人工筛选结合整理，欢迎反馈与建议。*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*