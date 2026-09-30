# 具身智能开源动态日报 2026-09-30

> 数据来源: GitHub Search API (130 仓库) | ArXiv cs.RO (30 篇论文) | RSS 新闻 (41 条) | 生成时间: 2026-09-30 03:29 UTC

---

# 具身智能开源动态日报

> 覆盖来源：IEEE Spectrum、The Robot Report（8 条）、arXiv cs.RO（30 篇）、GitHub 活跃推送仓库（130 个）

---

## 一、今日速览

今日动态呈现出"**世界动作模型（WAM）走向台前、人类工程起新一代消费级硬件、AI Agent 走进工业机器人内核**"三条主线。论文侧，反事实视频生成、Rho 通用 VLA 基座、WorldLine 动作驱动仿真齐头并进，正在重新定义机器人学习的数据与表示范式；产业侧，Gecko Robotics 与 NVIDIA 联手把"AI Agent 安全控制"嵌入工业巡检机器人，Flourish One 以 Raspberry Pi 把人形机器人推向家庭场景；开源侧，IsaacLab、RoboCasa、RoboTwin 等仿真—数据—基准基础设施持续刷榜，World Action Models 框架 EasyWAM、VLA 训练栈 OpenTau 与部署框架 EVA-Client 同步发力，具身智能的工程化闭环正在加速收敛。

---

## 二、行业脉搏

- **Gecko Robotics × NVIDIA：把 AI Agent 装进工业巡检机器人**
  [原文链接](https://www.therobotreport.com/gecko-robotics-works-with-nvidia-adds-ai-agent-security-and-control/)
  Gecko Robotics 与 NVIDIA 合作，将 AI Agent 的安全与控制能力引入爬墙检测机器人，标志工业机器人从"程序化巡检"向"具身 Agent 自主决策"过渡，对工业安全与运维市场具有风向意义。

- **Flourish One：基于 Raspberry Pi 的家用消费级人形机器人**
  [原文链接](https://www.therobotreport.com/meet-flourish-one-raspberry-pi-powered-humanoid-built-busy-parents/)
  面向"忙碌家长"的轻量级人形机器人强调低成本与可及性，与当年个人电脑路径相似——把开发板生态拉入人形机器人，是消费级具身硬件普及的重要信号。

- **ForceN 在 RoboBusiness 开设人形机器人力/力矩传感速成课**
  [原文链接](https://www.therobotreport.com/forcen-gives-crash-course-force-torque-sensing-humanoids-robobusiness-2026/)
  力控是具身操作"最后一公里"，行业把力/力矩传感作为人形机器人落地的必修课，反映出社区对接触丰富任务（contact-rich manipulation）的高度关注。

- **Robonomics：人类的经济自治与加密钱包**
  [原文链接](https://www.therobotreport.com/robotics-threshold-economic-autonomy-crypto-wallets-humanoids/)
  文章探讨人形机器人拥有独立加密钱包与经济身份的可能性，是"具身 AI × Web3"这一新兴交叉议题的代表性论述，值得长期跟踪其伦理与监管走向。

- **State of Robots in Manufacturing**
  [原文链接](https://www.therobotreport.com/state-of-robots-in-manufacturing/)
  系统盘点制造业机器人当前格局与未来趋势，对评估工业具身智能商业化窗口期极具价值。

---

## 三、研究前沿

- **Counterfactual Video Generation Enables Scalable Humanoid Loco-Manipulation**
  [论文](http://arxiv.org/abs/2609.38172v1) — 通过反事实视频生成扩展人形机器人"运动—操作"数据规模，为数据驱动的全身技能学习提供了新的数据增广范式，缓解真机演示采集瓶颈。

- **Rho: A Foundation for Efficiently Adaptable VLA Models**
  [论文](http://arxiv.org/abs/2609.38164v1) — 提出一种面向多机器人的通用 VLA 基座，强调"高效适配"，是 OpenVLA / π₀ 之后又一代表性通用 VLA 工作，对推动"基础模型 + 下游具身"路线具有重要价值。

- **WorldLine: Action-Driven Visual Simulation for Robotic Manipulation**
  [论文](http://arxiv.org/abs/2609.38059v1) — 让视觉仿真由动作驱动而非常结合，候选策略评估不再依赖物理引擎，是对"以视频世界模型作为策略评估器"路线的强有力背书。

- **FORM: Robot Manipulation through Direct Material Law Identification**
  [论文](http://arxiv.org/abs/2609.38105v1) — 让机器人在接触陌生可形变物体时直接从交互中辨识材料本构律，免去人工建模，对家庭与野外非结构化场景意义重大。

- **In-context Robot Learning Made Simple: A Democratized Recipe for Manipulation Tasks**
  [论文](http://arxiv.org/abs/2609.38173v1) — 提供"机器人上下文学习"操作任务的工程化模板，降低 VLA 在新任务上的部署门槛，对中小团队和机器人教育尤为重要。

- **CrossBFM: Distilling a Shared Latent Behavior Space Across Humanoid Embodiments**
  [论文](http://arxiv.org/abs/2609.38087v1) — 跨异构人形形态蒸馏共享行为潜空间，是"行为基础模型（BFM）"路线的重要拼图，有助于打通不同硬件间的策略互操作。

---

## 四、重点项目

### 🦾 机器人学习与控制（模仿学习 / RL / 策略）

- **[isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab)** ⭐ 8,252 — NVIDIA 官方机器人学习统一框架，多物理引擎/渲染器支持，是当前 RL 与模仿学习的事实标准之一。
- **[enactic/openarm](https://github.com/enactic/openarm)** ⭐ 3,542 — 完全开源的人形机械臂，专为接触丰富环境中的物理 AI 研究与部署而生，硬件+软件同步开源降低具身实验门槛。
- **[Unity-Technologies/ml-agents](https://github.com/Unity-Technologies/ml-agents)** ⭐ 19,714 — Unity 生态的 ML-Agents 工具包，长期服务于游戏/仿真场景的 RL 与模仿学习训练，是大规模并行环境的标准接口之一。
- **[RoboVerseOrg/RoboVerse](https://github.com/RoboVerseOrg/RoboVerse)** ⭐ 1,866 — 面向可扩展、可泛化机器人学习的统一平台、数据集与基准，对推动跨平台策略评测具有基础设施意义。
- **[OpenDriveLab/RoboNaldo](https://github.com/OpenDriveLab/RoboNaldo)** ⭐ 54 — 人形机器人足球射门官方代码，将"高精度全身动力射门"作为可复现 benchmark，推动类 RoboCup 风格的具身竞技研究。
- **[lok-i/vibe](https://github.com/lok-i/vibe)** ⭐ 43 — 面向感知控制任务的人形机器人全身跟踪器后训练框架，与运动智能库（humanoid-motion-intelligence）形成完整链路。
- **[Microsoft/agent-lightning](https://github.com/microsoft/agent-lightning)** ⭐ 18,534 — 微软开源的多步骤智能体训练框架，将 RL 思路用于真实世界 Agent，与具身 Agent 的"经验回放 + 在线训练"理念高度契合。

### 🤖 仿真与框架（MuJoCo / Isaac / Gazebo / ROS）

- **[newton-physics/newton](https://github.com/newton-physics/newton)** ⭐ 5,701 — 基于 NVIDIA Warp 的 GPU 加速开源物理引擎，专为机器人学家设计，是新一代具身仿真底座的有力竞争者。
- **[mujocolab/mjlab](https://github.com/mujocolab/mjlab)** ⭐ 3,152 — 由 MuJoCo-Warp 驱动的 Isaac Lab API 替代品，把 MuJoCo 的精度与 Warp 的速度结合，对大规模 RL 训练尤为关键。
- **[gazebosim/gz-sim](https://github.com/gazebosim/gz-sim)** ⭐ 1,521 — Gazebo 最新开源版本，ROS 生态默认仿真器，社区覆盖面最广。
- **[robin-shaun/XTDrone](https://github.com/robin-shaun/XTDrone)** ⭐ 1,726 — 基于 PX4+ROS+Gazebo 的 UAV 仿真平台，UAV/集群研究的事实参考实现。
- **[ros-navigation/navigation2](https://github.com/ros-navigation/navigation2)** ⭐ 4,755 — ROS 2 官方导航框架，移动机器人落地必备组件。

### 🧠 VLA 与基础模型（视觉-语言-动作 / 具身基础模型）

- **[PhyAgentOS/PhyAgentOS-core](https://github.com/PhyAgentOS/PhyAgentOS-core)** ⭐ 2,610 — 递归自我改进（RSI）的物理 Agent 操作系统，将"Agent 自演化"范式引入物理世界，是具身 Agent OS 方向的代表性探索。
- **[knightnemo/Awesome-World-Models](https://github.com/knightnemo/Awesome-World-Models)** ⭐ 3,454 — 世界模型领域最热门的精选资源列表，反映 WAM（World Action Model）正在快速成为新范式。
- **[FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA)** ⭐ 720 — 一站式 VLA 工程平台，覆盖从数据到真机部署全流程，对希望快速搭建 VLA 流水线的团队极具参考价值。
- **[OpenMOSS/EasyWAM](https://github.com/OpenMOSS/EasyWAM)** ⭐ 389 — 统一的"世界-动作模型"训练、微调与评测框架，把 WAM 概念工程化落地。
- **[TensorAuto/OpenTau](https://github.com/TensorAuto/OpenTau)** ⭐ 224 — 基于 PyTorch 的真实机器人 VLA 训练基础设施，为工业级 VLA 训练提供可复现栈。
- **[syswonder/robonix](https://github.com/syswonder/robonix)** ⭐ 366 — Rust 实现的机器人 Agent 操作系统，强调高性能与可组合性，是具身 AI 时代的"Linux 内核"式尝试。
- **[ros-claw/rosclaw](https://github.com/ros-claw/rosclaw)** ⭐ 214 — 面向具身 Agent 的 Physical AI 运行时，主打"受治理的动作、可验证的经验、物理记忆、技能演化"。

### 🔧 硬件与驱动

- **[JacopoPan/aerial-autonomy-stack](https://github.com/JacopoPan/aerial-autonomy-stack)** ⭐ 606 — 基于 PX4/ArduPilot + ROS 2 + YOLO + LiDAR + NVIDIA Jetson 的开源机载自主栈，感知-决策-控制一体化部署参考。
- **[ROBOTIS-GIT/open_manipulator](https://github.com/ROBOTIS-GIT/open_manipulator)** ⭐ 667 — AI 机械臂开源项目，硬件+ROS 生态成熟，是入门与教学的事实标准之一。
- **[linorobot/linorobot2](https://github.com/linorobot/linorobot2)** ⭐ 1,031 — 2WD/4WD/Mecanum 全向自主移动机器人参考实现，覆盖 ROS 2 移动机器人全栈。
- **[XenseRobotics-AI/lerobot-xense](https://github.com/XenseRobotics-AI/lerobot-xense)** ⭐ 20 — LeRobot v5.1 分支，集成视触觉夹爪、Flexiv Rizon4、Elite CS66、ARX5 与 VR/SpaceMouse 遥操作，是触觉+多硬件平台 LeRobot 化范例。
- **[Source-Robotics/PAR6-Collaborative-Robot-Arm](https://github.com/Source-Robotics/PAR6-Collaborative-Robot-Arm)** ⭐ 36 — 面向教育与研发的 6DOF 协作机械臂开源项目，硬件开放+教学友好，是低成本具身研究的入口。

### 📊 数据集与基准

- **[RoboTwin-Platform/RoboTwin](https://github.com/RoboTwin-Platform/RoboTwin)** ⭐ 2,926 — ICML 2026 RoboTwin 2.0 官方仓库，双臂操作任务的标准化仿真基准与数据集。
- **[StanfordVL/BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K)** ⭐ 1,729 — 加速具身 AI 研究的标准化平台，覆盖 1000 种日常任务，已成为具身基础模型评测的关键基础设施。
- **[robocasa/robocasa](https://github.com/robocasa/robocasa)** ⭐ 1,771 — 大规模日常任务仿真，面向"通用机器人"训练与评测，是 RoboCasa 系列工作的核心代码库。
- **[robocurve/inspect-robots](https://github.com/robocurve/inspect-robots)** ⭐ 627 — 物理 AI 评测框架，支持任意 LLM/VLA 在任意机械臂/人形与真实/仿真基准上运行，是"具身模型 OpenAI-Evals"式基础设施。
- **[Noietch/EVA-CLIENT](https://github.com/Noietch/EVA-CLIENT)** ⭐ 289 — 真实机器人统一部署、评测与数据采集框架，对小批量真机实验的数据闭环尤为关键。
- **[phi-monster/Galahad](https://github.com/phi-monster/Galahad)** ⭐ 149 — 面向 VLA 指令跟随的反事实评测电池，精细检测指令微调对动作选择的影响，是 VLA 行为解释性工具的代表。

---

## 五、生态趋势信号

从今日新闻、论文与仓库三方信息交叉可以读出三条明确趋势。**第一，World Action Model（WAM）正在从概念走向工程化**：论文侧出现 WorldLine、CrossBFM、MotorMind 等多篇以"动作—世界"联合建模为核心的工作；开源侧出现 EasyWAM、Awesome-World-Models 等系统化资源，VLA 之后的新范式正在快速形成。**第二，"AI Agent + 物理机器人"从概念走向工业部署**：Gecko Robotics × NVIDIA 把 Agent 安全控制嵌入工业巡检，PhyAgentOS 提出递归自我改进物理 Agent，OpenPipe/ART、Agent-Lightning 等通用 Agent 训练框架持续刷榜——智能体研究与具身研究的边界正在加速消融。**第三，反事实数据生成与可验证评测成为新基建**：从反事实视频生成人形 loco-manipulation，到 Galahad 反事实指令评测，再到 inspect-robots 通用评测框架，"可干预、可复现、可反事实"的具身数据与评测标准正在成为社区共识。

---

## 七、值得关注

- **Gecko Robotics + NVIDIA：工业机器人的 Agent 化拐点**
  [链接](https://

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*