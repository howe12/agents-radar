# 具身智能开源动态日报 2026-07-08

> 数据来源: GitHub Search API (133 仓库) | ArXiv cs.RO (30 篇论文) | RSS 新闻 (28 条) | 生成时间: 2026-07-08 05:53 UTC

---

# 具身智能开源动态日报

**日期：2026-07-XX　|　分析师视角：机器人 & 具身智能**

---

## 一、今日速览

今日动态呈现"VLA 模型 3D 化、世界模型井喷、开源人形硬件崛起"三大主线。学术端，Lift3D-VLA 将 VLA 升级为 3D 几何与动力学感知，RynnWorld 系列提出面向操作的 4D 世界模型；行业端，IEEE Spectrum 深度剖析日本能否在人形机器人领域追上中国；社区端，ROS 迎来新任首席项目官 Vicky Brasseur，2026 杭州 ROS Summer School 同步开放 20 门平行课程；工程端，OpenArm 等开源人形臂与 Newton、mjlab 等 MuJoCo 新生态加速融合，具身智能栈从"单一模型"走向"全栈开源"。

---

## 二、行业脉搏

**1. 日本 vs 中国：人形机器人霸主之争**
[IEEE Spectrum](https://spectrum.ieee.org/humanoid-robots-japan) 推出长篇分析，回顾日本本田 ASIMO 时代以来的先发优势，正视中国在宇树、智元、优必选等厂商驱动下的规模化追赶。对机器人社区的启示是：硬件供应链与制造规模正成为新一代人形机器人竞赛的关键变量。
🔗 https://spectrum.ieee.org/humanoid-robots-japan

**2. ROS 社区迎来新任首席项目官 Vicky (VM) Brasseur**
Open Robotics 宣布任命知名开源治理专家 Vicky Brasseur 担任 CPO。Vicky 在 Python 社区治理与《Forge Your Future with Open Source》一书中有深厚背景，被视为 ROS 在治理、合规与多元化生态建设方面的关键信号。
🔗 https://discourse.openrobotics.org/t/announcement-welcoming-vicky-vm-brasseur-as-our-new-chief-program-officer/56259

**3. 2026 ROS Summer School 杭州站启动，开放 20 门平行课程**
课程覆盖 ROS 2 基础、MoveIt 2、Nav2、Gazebo、ROS 2 Control 等内容，面向亚太地区开发者。这是 ROS 社区在中国规模化运营的标志性事件，反映亚太正成为 ROS 培训与项目落地的核心腹地。
🔗 https://discourse.openrobotics.org/t/20-parallel-courses-available-for-2026-ros-summer-school-hangzhou-china/56233

**4. NASA 月球车概念亮相 Video Friday**
[Video Friday](https://spectrum.ieee.org/video-friday-nasa-lunar-rover) 报道了为月球表面设计的"地球化"火星车改造版，体现 NASA 在低成本星球车方向上的工程探索，对腿式/轮式融合移动平台具有借鉴价值。
🔗 https://spectrum.ieee.org/video-friday-nasa-lunar-robot

**5. Gazebo PMC 例会与 BAGEL 更新**
[Gazebo PMC 2026-07-06 会议纪要](https://discourse.openrobotics.org/t/gazebo-pmc-meeting-minutes-2026-07-06/56229) 与 [BAGEL 更新](https://discourse.openrobotics.org/t/update-on-bagel-bag-exploration-whats-new/56235) 同步发布；前者涵盖新版本路线图，后者扩展 ROS bag 探索工具，是日常工程排障的重要补充。
🔗 https://discourse.openrobotics.org/t/gazebo-pmc-meeting-minutes-2026-07-06/56229
🔗 https://discourse.openrobotics.org/t/update-on-bagel-bag-exploration-whats-new/56235

---

## 三、研究前沿

**1. Lift3D-VLA：将 VLA 提升至 3D 几何与动力学感知操作**
Liu 等人提出 3D 几何 + 动力学感知的 VLA 框架，弥补了主流 VLA 在 2D 像素空间难以推理接触与物理动态的短板，是 OpenVLA / π0 之后的关键升级方向。
🔗 http://arxiv.org/abs/2607.06564v1

**2. RynnWorld-4D / RynnWorld-Teleop：面向操作与遥操作的 4D 世界模型**
Zhao 等团队同时发布两条线：RynnWorld-4D 构建 4D 具身世界模型用于预测场景演化；RynnWorld-Teleop 用动作条件世界模型实现"数字遥操作"，有望打破真机数据采集的物理瓶颈。
🔗 http://arxiv.org/abs/2607.06559v1
🔗 http://arxiv.org/abs/2607.06558v1

**3. UniLM-Nav：零样本最后一公里导航统一框架**
Zhang 等人提出融合导航与操作的统一框架，覆盖"导航到目标 → 操作目标物体"的最后一公里场景，是具身移动操作（mobile manipulation）的代表性工作。
🔗 http://arxiv.org/abs/2607.06537v1

**4. Neural-ESO：双通路可证明鲁棒学习型控制**
Zhang 等人提出基于 Neural Extended State Observer 的扰动抑制框架，从理论上保证闭环稳定性，为 RL/IL 控制落地提供"可证明安全"的工程范式。
🔗 http://arxiv.org/abs/2607.06535v1

**5. SIEVE：面向 VLA 模仿学习的结构感知数据选择**
Wu 等人针对 VLA 训练数据规模膨胀但有效样本稀缺的问题，提出结构感知筛选机制，可显著降低模仿学习的标注与算力开销，是 VLA 数据工程的重要补充。
🔗 http://arxiv.org/abs/2607.06442v1

---

## 四、重点项目

### 🦾 机器人学习与控制（模仿学习 / RL / 策略学习）

**RLinf** ⭐4,038
面向具身与 Agentic AI 的强化学习基础设施，支持大规模分布式 RL 训练。
🔗 https://github.com/RLinf/RLinf

**awesome-reliable-robotics** ⭐154
聚焦"真实世界可靠机器人"的论文/资源精选清单，强调可复现与稳健部署。
🔗 https://github.com/philfung/awesome-reliable-robotics

**quadrupedal-agility** ⭐119
NJU-RLC 出品，学习多样化自然行为以增强四足机器人敏捷性。
🔗 https://github.com/NJU-RLC/quadrupedal-agility

**mujoco_ros2_control** ⭐212
为 MuJoCo 物理仿真提供 ROS 2 control 硬件接口及相机/激光雷达插件，是 sim-to-real 链路的关键桥梁。
🔗 https://github.com/ros-controls/mujoco_ros2_control

**RoboticsAcademy** ⭐479
JdeRobot 推出的机器人学教学平台，覆盖 Gazebo + ROS 的端到端课程。
🔗 https://github.com/JdeRobot/RoboticsAcademy

### 🤖 仿真与框架（MuJoCo / Isaac / Gazebo / ROS）

**google-deepmind/mujoco** ⭐14,122
通用物理仿真器的事实标准，已成 VLA / RL 训练的底座。
🔗 https://github.com/google-deepmind/mujoco

**isaac-sim/IsaacLab** ⭐7,630
NVIDIA Isaac Sim 上的统一机器人学习框架，是大规模 GPU 并行 RL 的主流选择。
🔗 https://github.com/isaac-sim/IsaacLab

**newton-physics/newton** ⭐5,174
基于 NVIDIA Warp 的开源 GPU 加速物理引擎，专为机器人与仿真研究设计。
🔗 https://github.com/newton-physics/newton

**mujocolab/mjlab** ⭐2,651
在 MuJoCo-Warp 上提供 Isaac Lab 风格的 API，对标 Isaac Lab 但降低硬件门槛。
🔗 https://github.com/mujocolab/mjlab

**gazebosim/gz-sim** ⭐1,406
新一代 Gazebo 仿真器，是 ROS 2 官方推荐的物理仿真后端。
🔗 https://github.com/gazebosim/gz-sim

**ros-navigation/navigation2** ⭐4,440
ROS 2 官方导航框架，机器人落地的事实标准。
🔗 https://github.com/ros-navigation/navigation2

**copper-project/copper-rs** ⭐1,380
Rust 写的机器人 OS：可构建、可回放、确定性执行机器人全栈任务。
🔗 https://github.com/copper-project/copper-rs

### 🧠 VLA 与基础模型（视觉-语言-动作 / 具身基础模型）

**FluxVLA** ⭐512
一站式 VLA 工程平台，覆盖从数据到真机部署的全链路。
🔗 https://github.com/FluxVLA/FluxVLA

**InternRobotics/InternVLA-A-series** ⭐466
上海 AI Lab 出品，统一理解、生成与动作的机器人操作模型（InternVLA-A1）。
🔗 https://github.com/InternRobotics/InternVLA-A-series

**allenai/vla-evaluation-harness** ⭐425
一个框架评估任意 VLA 模型在任意仿真基准上的表现，是 VLA 横向对比的基础设施。
🔗 https://github.com/allenai/vla-evaluation-harness

**Tencent-Hunyuan/Hy-Embodied-0.5-VLA** ⭐187
腾讯混元从 VLA 模型到真机学习栈的全栈开源，工业级落地参考。
🔗 https://github.com/Tencent-Hunyuan/Hy-Embodied-0.5-VLA

**TensorAuto/OpenTau** ⭐183
真机机器学习的 VLA 训练基础设施，PyTorch 原生实现。
🔗 https://github.com/TensorAuto/OpenTau

**datawhalechina/every-embodied** ⭐2,570
从 0 构建 VLA/OpenVLA/SmolVLA/π0 的中文实战教程，是国内具身学习社区的核心入口。
🔗 https://github.com/datawhalechina/every-embodied

### 🔧 硬件与驱动（机器人驱动 / 硬件接口 / 嵌入式）

**enactic/openarm** ⭐2,701
完全开源的人形机械臂，面向"接触丰富"场景的物理 AI 研究与部署。
🔗 https://github.com/enactic/openarm

**NVIDIA-ISAAC-ROS/isaac_ros_visual_slam** ⭐1,395
基于 cuVSLAM 的 GPU 加速视觉 SLAM / 里程计，Isaac ROS 的旗舰包。
🔗 https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_visual_slam

**stack-of-tasks/pinocchio** ⭐3,551
高性能刚体动力学库及其解析导数，是控制 / MPC / 优化的底层基石。
🔗 https://github.com/stack-of
---
*Generated by agents-radar | MiniMax-M3*