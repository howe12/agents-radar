# 具身智能开源动态日报 2026-08-21

> 数据来源: GitHub Search API (128 仓库) | ArXiv cs.RO (25 篇论文) | RSS 新闻 (48 条) | 生成时间: 2026-08-21 00:55 UTC

---

# 具身智能开源动态日报

> 覆盖范围：IEEE Spectrum、The Robot Report、ROS Discourse、ArXiv cs.RO、GitHub Trending（具身智能相关）

---

## 一、今日速览

今日具身智能生态呈现"商业化加速 + 学术与开源同步推进"的双重信号：商业端，**Unitree Robotics IPO** 与 **Amazon Prime Air 扩城至 500 城** 两则消息分别验证了人形机器人与无人机配送两条商业化主线的资本与落地进展；研究端，**ADEPT**（灵巧操作 RL 框架）与 **PartialBiGrasp**（双臂抓取）展现了从仿真到真实世界的灵巧操作新范式；开源生态则继续围绕 VLA、World Model 与具身操作系统三大方向扩张，**RLinf**、**dora-rs**、**IsaacLab**、**RoboTwin 2.0**、**τ0-VLA** 等高 star 项目持续活跃，**MuJoCo-Warp** 与 **Isaac Lab API** 的融合（mjlab）值得关注。

---

## 二、行业脉搏

- **Unitree Robotics 启动 IPO** — 人形机器人赛道资本市场里程碑，将重塑产业格局与上下游定价权。👉 [The Robot Report](https://www.therobotreport.com/what-does-unitree-robotics-ipo-mean-for-humanoid-industry/)
- **Amazon Prime Air 2026 年底前扩展至近 500 个城市** — 城市级无人机物流规模化验证，商用自主飞行器进入主流配送场景。👉 [The Robot Report](https://www.therobotreport.com/amazon-plans-expand-prime-air-nearly-500-cities-by-end-2026/)
- **DARPA Heavy Lift Challenge 与"船厂焊接"成为人形机器人首个岗位争论** — 揭示人形机器人商业落地正从表演性 Demo 转向高价值工业场景。👉 [IEEE Spectrum（船厂焊接）](https://spectrum.ieee.org/persona-ai-humanoid-robot-welding) ｜ [IEEE Spectrum（DARPA Heavy Lift）](https://spectrum.ieee.org/video-friday-darpa-heavy-lift-challenge)
- **Kollmorgen 在 RoboBusiness 发布"逐关节"人形运动指南** — 关节模组供应商正式为人形机器人本体厂商提供标准化设计参考。👉 [The Robot Report](https://www.therobotreport.com/kollmorgen-give-joint-by-joint-guide-humanoid-motion-robobusiness/)
- **北极冰山"带爪无人机"与 ATDev 自主轮椅进展** — 极端环境与无障碍场景体现具身智能应用的多元化纵深。👉 [IEEE Spectrum（北极无人机）](https://spectrum.ieee.org/arctic-iceberg-drones) ｜ [The Robot Report（ATDev）](https://www.therobotreport.com/atdev-gives-update-journey-building-autonomous-wheelchairs/) ｜ [Agtonomy 多点掉头](https://www.therobotreport.com/agtonomy-releases-new-autonomous-multi-point-turning-features/)

---

## 三、研究前沿

- **ADEPT: Accelerating Dexterity via Pre-Training and Post-Training using RL**
  大规模 RL 框架用于灵巧操作，预训练 + 后训练范式提升 sample efficiency。
  👉 [https://arxiv.org/abs/2608.19182v1](http://arxiv.org/abs/2608.19182v1)

- **PartialBiGrasp: Inferring Hidden Local Geometry for Bimanual Grasping from Partial Views**
  针对大尺寸/几何复杂物体的双臂抓取，从局部观测推断隐藏几何。
  👉 [https://arxiv.org/abs/2608.19188v1](http://arxiv.org/abs/2608.19188v1)

- **DA-WAM: Decision-Aligned Future Latents for Driving World Models**
  决策对齐的未来潜变量，提升自动驾驶世界模型对自车动作的可控预测能力。
  👉 [https://arxiv.org/abs/2608.19085v1](http://arxiv.org/abs/2608.19085v1)

- **RoboEdit: Turning Human Manipulation Videos into Scalable Robot Experience**
  将人类操作视频转化为机器人可复用经验，缓解具身数据稀缺与跨本体迁移难题。
  👉 [https://arxiv.org/abs/2608.18948v1](http://arxiv.org/abs/2608.18948v1)

- **Dream2Reward: Transition-Alignment Reward Models from Positive Demonstrations**
  从成功演示出发学习稠密奖励，缓解行为偏离后奖励信号稀疏的关键瓶颈。
  👉 [https://arxiv.org/abs/2608.18787v1](http://arxiv.org/abs/2608.18787v1)

- **LT-Mem: Volatility-Aware Spatio-Temporal Memory for Lifelong Scene Understanding**
  长周期机器人部署下的对象级持续理解，解决反复访问场景中的记忆稳定性问题。
  👉 [https://arxiv.org/abs/2608.19059v1](http://arxiv.org/abs/2608.19059v1)

---

## 四、重点项目

### 🦾 机器人学习与控制（模仿学习 / RL / 策略学习）

- **isaac-sim/IsaacLab** ⭐ 7,924
  基于 NVIDIA Isaac Sim 的统一机器人学习框架，是当前 Sim-to-Real 研究的事实标准之一。
  👉 [https://github.com/isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab)

- **RLinf/RLinf** ⭐ 4,588
  面向具身与 Agentic AI 的强化学习基础设施，覆盖大规模 RL 训练栈，是具身 RL 工程化代表项目。
  👉 [https://github.com/RLinf/RLinf](https://github.com/RLinf/RLinf)

- **DLR-RM/stable-baselines3** ⭐ 13,712
  PyTorch 版 Stable Baselines，社区最广泛使用的可靠 RL 实现之一，为机器人策略学习提供基础算法。
  👉 [https://github.com/DLR-RM/stable-baselines3](https://github.com/DLR-RM/stable-baselines3)

- **Tsinghua-MARS-Lab/OMG** ⭐ 109
  "OMG" 通用人形运动生成官方仓库，覆盖多模态人形全身控制，对通用人形策略学习具备研究价值。
  👉 [https://github.com/Tsinghua-MARS-Lab/OMG](https://github.com/Tsinghua-MARS-Lab/OMG)

- **RobotControlStack/robot-control-stack** ⭐ 150
  无 ROS 的轻量 Sim-to-Real 框架，原生支持 MuJoCo Gymnasium 与多臂 VLA/RL 部署。
  👉 [https://github.com/RobotControlStack/robot-control-stack](https://github.com/RobotControlStack/robot-control-stack)

- **Hebbian-Robotics/hflow** ⭐ 90
  数据质量、加工与治理流水线 SDK，为机器人/物理 AI 提供数据层基础设施。
  👉 [https://github.com/Hebbian-Robotics/hflow](https://github.com/Hebbian-Robotics/hflow)

### 🤖 仿真与框架（MuJoCo / Isaac / Gazebo / ROS）

- **google-deepmind/mujoco** ⭐ 14,618
  通用多关节接触动力学仿真器，是具身 RL 与控制研究的物理引擎事实标准。
  👉 [https://github.com/google-deepmind/mujoco](https://github.com/google-deepmind/mujoco)

- **newton-physics/newton** ⭐ 5,502
  基于 NVIDIA Warp 的 GPU 加速开源物理引擎，专为机器人学家与仿真研究设计。
  👉 [https://github.com/newton-physics/newton](https://github.com/newton-physics/newton)

- **mujocolab/mjlab** ⭐ 2,814
  基于 MuJoCo-Warp 的 Isaac Lab API 实现，融合两条主流仿真路线的优势。
  👉 [https://github.com/mujocolab/mjlab](https://github.com/mujocolab/mjlab)

- **carla-simulator/carla** ⭐ 14,307
  自动驾驶研究开源仿真器，是世界模型与端到端驾驶算法的核心训练平台。
  👉 [https://github.com/carla-simulator/carla](https://github.com/carla-simulator/carla)

- **ros-navigation/navigation2** ⭐ 4,601
  ROS 2 官方导航框架，机器人定位与路径规划生产的标准栈。
  👉 [https://github.com/ros-navigation/navigation2](https://github.com/ros-navigation/navigation2)

- **gazebosim/gz-sim** ⭐ 1,452
  新一代 Gazebo 开源机器人仿真器，物理与传感器建模持续完善。
  👉 [https://github.com/gazebosim/gz-sim](https://github.com/gazebosim/gz-sim)

### 🧠 VLA 与基础模型（视觉-语言-动作 / 具身基础模型）

- **sii-research/tau-0-vla** ⭐ 503
  τ0-VLA 官方实现，提出"世界模型引导的测试时计算"分层机器人基础模型新范式。
  👉 [https://github.com/sii-research/tau-0-vla](https://github.com/sii-research/tau-0-vla)

- **FluxVLA/FluxVLA** ⭐ 624
  一站式 VLA 工程平台，覆盖数据到真机部署，具身 VLA 落地基础设施。
  👉 [https://github.com/FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA)

- **allenai/vla-evaluation-harness** ⭐ 550
  统一 VLA 模型评估框架，支持任意 VLA 在任意机器人仿真基准上的评测。
  👉 [https://github.com/allenai/vla-evaluation-harness](https://github.com/allenai/vla-evaluation-harness)

- **TensorAuto/OpenTau** ⭐ 202
  Tensor 的 VLA 训练基础设施（PyTorch），面向真实机器人场景的 VLA 训练工程化。
  👉 [https://github.com/TensorAuto/OpenTau](https://github.com/TensorAuto/OpenTau)

- **ros-claw/rosclaw** ⭐ 183
  面向物理 AI 与具身 Agent 的自演化运行基础设施，含 e-URDF、沙箱安全、技能演化等运行时能力。
  👉 [https://github.com/ros-claw/rosclaw](https://github.com/ros-claw/rosclaw)

- **lucidrains/mimic-video** ⭐ 122
  Mimic-Video 实现：超越 VLA 的可泛化视频-动作模型 SOTA 路线。
  👉 [https://github.com/lucidrains/mimic-video](https://github.com/lucidrains/mimic-video)

### 🔧 硬件与驱动（机器人硬件接口 / 嵌入式系统）

- **dora-rs/dora** ⭐ 3,887
  数据流驱动的机器人中间件，低延迟、可组合、分布式，AI 机器人应用编排基础设施。
  👉 [https://github.com/dora-rs/dora](https://github.com/dora-rs/dora)

- **copper-project/copper-rs** ⭐ 1,457
  Rust 实现的机器人操作系统，支持构建、运行与确定性回放整个机器人栈。
  👉 [https://github.com/copper-project/copper-rs](https://github.com/copper-project/copper-rs)

- **enactic/openarm** ⭐ 2,868
  全开源人形机械臂，面向接触丰富场景的物理 AI 研究与部署。
  👉 [https://github.com/enactic/openarm](https://github.com/enactic/openarm)

- **NVIDIA-ISAAC-ROS/isaac_ros

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*