# 具身智能开源动态日报 2026-08-25

> 数据来源: GitHub Search API (133 仓库) | ArXiv cs.RO (0 篇论文) | RSS 新闻 (47 条) | 生成时间: 2026-08-25 00:54 UTC

---

# 具身智能开源动态日报

**日期：2025-XX-XX** · 数据来源：IEEE Spectrum、The Robot Report、ArXiv cs.RO、GitHub Trending

---

## 一、今日速览

今日具身智能领域最大资本信号来自**小鹏汽车旗下人形机器人公司 Dogotix 完成 9 亿美元融资**，标志着中国头部车厂正式将人形机器人作为"第二增长曲线"押注。产业叙事层面，"brains and brawn"（具身大脑 + 强健本体）取代纯应用或纯仿人成为新主流，开源侧迎来同步共振——RLinf、PhyAgentOS、mjlab、Newton Physics 等具身 RL 基础设施与自演化操作系统密集推进，而 VLA-Handbook、Anchor-Align、RoboTwin 2.0 等则持续夯实"数据–评测–部署"闭环。整体来看，**Physical AI 正从单点模型竞争，迈向"基础设施 + 操作系统 + 应用生态"的全栈式军备竞赛**。

---

## 二、行业脉搏

1. **【重磅融资】XPeng Motors 人形机器人单元 Dogotix 完成 9 亿美元融资**
   https://www.therobotreport.com/xpeng-motors-humanoid-robot-unit-dogotix-raises-900m/
   中国新能源车企再度大规模跨界具身智能，量产制造、供应链与车规级安全标准将向人形机器人外溢，可能成为 Unitree 之后国内第二大具身独角兽。

2. **【产业范式】The Robot Report：下一个 AI 大机会不是 App 也不是人形机器人，而是"有大脑也有肌肉"的机器**
   https://www.therobotreport.com/the-next-big-ai-play-isnt-apps-or-humanoids-its-machines-with-brains-and-brawn/
   文章强调 Physical AI 需要将认知智能与物理执行能力耦合，工业机械臂、移动底座、专用机器人形态将被重新评估为更优 ROI 路径。

3. **【劳动力议题】机器人不会自己运转：支撑 Physical AI 的人力队伍**
   https://www.therobotreport.com/robots-dont-run-themselves-workforce-powering-physical-ai/
   揭示意图–示范–评测–运维全链路对数据标注、遥操作、Sim2Real 工程师的需求正在指数级增长。

4. **【数字孪生】用数字孪生在资本投入前探索自动化**
   https://www.therobotreport.com/use-digital-twin-explore-automation-before-committing-capital/)
   Digital Twin 与 NVIDIA Isaac Sim/Mujoco 等仿真栈在制造业前评估阶段持续渗透。

5. **【端侧应用】割草机器人技术可能覆盖全美一半草坪**
   https://www.therobotreport.com/technology-could-bring-robot-mowers-one-half-american-lawns/)
   低成本户外 SLAM、视觉避障与无线边界方案正在把消费级机器人推向临界规模。

> 附两条 IEEE Spectrum 视频专题：宇树（Unitree）"超人化人形机器人"是否必要之辩（https://spectrum.ieee.org/video-friday-unitree-superhuman ），以及带爪无人机栖落北极冰山（https://spectrum.ieee.org/arctic-iceberg-drones ）。

---

## 三、研究前沿

> **今日 cs.RO 无新增论文。** 以下为近期该领域最具方向性意义的研究线索（结合今日仓库活跃度推荐追踪）：

1. **Tsinghua-MARS-Lab/OMG — "Omni-Modal Motion Generation for Generalist Humanoid Control"** (arXiv:2606.10340)
   https://github.com/Tsinghua-MARS-Lab/OMG
   清华 MARS Lab 提出的"全模态运动生成"将语言、视觉、音乐多模态信号统一为通用人形运动策略，是通用人形控制的重要里程碑。

2. **VAGEN — World Model Reinforcement Learning for Multi-turn VLM Agents** (NeurIPS 2025)
   https://github.com/mll-lab-nu/VAGEN
   把世界模型作为 VLM Agent 的推理与 RL 训练底座，连接了具身世界模型与多轮决策 Agent 两大前沿。

3. **Anchor-Align — Generalizable VLA Finetuning via Representation Anchoring**
   https://github.com/dwipddalal/Anchor-Align
   通过表征锚定 + 语言–动作对齐，解决 VLA 跨域微调灾难性遗忘问题，对 Pi0/OpenVLA 等开源 VLA 落地有直接价值。

4. **RoboTwin 2.0 (ICML 2026)** — 双手操作仿真与基准
   https://github.com/RoboTwin-Platform/RoboTwin
   双手机器人任务的大规模仿真平台，已成为双臂操作研究的事实标准之一。

5. **Fibottention — Inceptive Visual Representation Learning with Diverse Attention**
   https://github.com/Charlotte-CharMLab/Fibottention
   一种面向机器人/具身的全新注意力机制（菲波那契多头差异注意力），可作为 VLA backbone 的即插即用模块。

---

## 四、重点项目

### 🦾 机器人学习与控制（模仿学习 / 强化学习 / 策略学习）

- **RLinf/RLinf** ⭐4,626 — https://github.com/RLinf/RLinf
  面向具身与 Agentic AI 的 RL 基础设施，定位 Physical AI 时代的"算子调度层"。

- **OpenPipe/ART** ⭐10,659 — https://github.com/OpenPipe/ART
  基于 GRPO 的多步 Agent 强化训练框架，支持 Qwen3.6 / GPT-OSS / Llama 等开源模型，是具身策略的 on-the-job training 关键工具。

- **rllm-org/rllm** ⭐5,798 — https://github.com/rllm-org/rllm
  "Democratizing RL for LLMs"，把大模型 RL 平民化，与 ART 形成生态互补。

- **RoboTwin-Platform/RoboTwin** ⭐2,763 — https://github.com/RoboTwin-Platform/RoboTwin
  ICML 2026 收录的双手机器人仿真与基准，覆盖大规模双手操作任务。

- **Anchor-Align** ⭐25 — https://github.com/dwipddalal/Anchor-Align
  通用化 VLA 微调方案，解决跨域/跨任务的灾难性遗忘问题。

- **Tsinghua-MARS-Lab/OMG** ⭐112 — https://github.com/Tsinghua-MARS-Lab/OMG
  全模态驱动的通用人形运动生成，是类人运动控制的代表性开源工作。

- **Hebbian-Robotics/hflow** ⭐138 — https://github.com/Hebbian-Robotics/hflow
  面向机器人与 Physical AI 的多模态数据质量、加工、增广与筛选 SDK，是数据飞轮的关键组件。

- **DexForce/EmbodiChain** ⭐212 — https://github.com/DexForce/EmbodiChain
  端到端、GPU 加速、模块化的通用具身智能构建平台。

- **RobotControlStack/robot-control-stack** ⭐150 — https://github.com/RobotControlStack/robot-control-stack
  ROS-free、轻量化、面向 VLA 与 RL Agent 的 Sim2Real 框架，原生 MuJoCo Gymnasium 封装 Franka/UR5e/xArm/SO101/YAM。

- **murobotics-ai/handumi-sw** ⭐47 — https://github.com/murobotics-ai/handumi-sw
  同步双手数据采集与重定向开源软件，可重定向到任意双臂机器人，含标定/QA/回放/遥操作。

### 🤖 仿真与框架（MuJoCo / Isaac / Gazebo / ROS）

- **google-deepmind/mujoco** ⭐14,653 — https://github.com/google-deepmind/mujoco
  通用接触动力学仿真器的事实标准，Physical AI 时代的"物理引擎底座"。

- **isaac-sim/IsaacLab** ⭐7,950 — https://github.com/isaac-sim/IsaacLab
  基于 NVIDIA Isaac Sim 的统一机器人学习框架，规模化 RL/VLA 训练首选。

- **newton-physics/newton** ⭐5,524 — https://github.com/newton-physics/newton
  基于 NVIDIA Warp 的 GPU 加速开源物理引擎，专为机器人学家与仿真研究者打造。

- **mujocolab/mjlab** ⭐2,829 — https://github.com/mujocolab/mjlab
  Isaac Lab 风格 API + MuJoCo-Warp 内核，提供 RL 与机器人研究的高吞吐替代栈。

- **RobotLocomotion/drake** ⭐4,159 — https://github.com/RobotLocomotion/drake
  基于模型的机器人设计与验证 C++ 框架，最优控制/接触/感知一体化。

- **dora-rs/dora** ⭐3,896 — https://github.com/dora-rs/dora
  数据流导向的机器人中间件，低延迟、可组合、分布式，是 ROS 之外的新选择。

- **ros-navigation/navigation2** ⭐4,620 — https://github.com/ros-navigation/navigation2
  ROS 2 导航系统事实标准，移动机器人开发者必读。

- **carla-simulator/carla** ⭐14,319 — https://github.com/carla-simulator/carla
  自动驾驶研究主流开源仿真器。

- **PX4/PX4-Autopilot** ⭐12,485 — https://github.com/PX4/PX4-Autopilot
  无人机飞控开源标杆，与 ROS/Gazebo 生态深度集成。

- **URLab-Sim/UnrealRoboticsLab** ⭐515 — https://github.com/URLab-Sim/UnrealRoboticsLab
  Unreal 高保真渲染 + MuJoCo 精确物理，开源高保真机器人仿真新范式。

### 🧠 VLA 与基础模型（视觉-语言-动作 / 具身基础模型）

- **FluxVLA/FluxVLA** ⭐628 — https://github.com/FluxVLA/FluxVLA
  从数据到真机部署的全链路 VLA 工程平台，是国内团队主导的代表性项目。

- **allenai/vla-evaluation-harness** ⭐561 — https://github.com/allenai/vla-evaluation-harness
  统一评测任何 VLA 模型在任何机器人仿真基准上的框架，利好 VLA 横向比较。

- **syswonder/robonix** ⭐339 — https://github.com/syswonder/robonix
  Rust 写的"机器人版 Agentic OS"，是机器人操作系统赛道的新尝试。

- **ros-claw/rosclaw** ⭐186 — https://github.com/ros-claw/rosclaw
  自演化运行时基础设施，e-URDF + 安全沙箱 + 能力路由 + 技能进化，连接 AI Agent 与机器人本体。

- **TensorAuto/OpenTau** ⭐204 — https://github.com/TensorAuto/OpenTau
  真机机器人的 PyTorch VLA 训练基础设施。

- **lucidrains/mimic-video** ⭐122 — https://github.com/lucidrains/mimic-video
  Mimic-Video 实现——SOTA 可泛化机器人控制超越传统 VLA 的"视频–动作"模型。

- **Noietch/EVA-CLIENT** ⭐93 — https://github.com/Noietch/EVA-CLIENT
  统一真机部署、评测、数据采集的客户端框架。

- **RealXiaoze/humanoid-motion-intelligence** ⭐409 — https://github.com/RealXiaoze/humanoid-motion-intelligence
  人形机器人运动智能论文/开源/产业/求职知识库汇总。

- **datawhalechina/every-embodied** ⭐3,335 — https://github.com/datawhalechina/every-embodied
  Datawhale 出品的从 0 构建 VLA/OpenVLA/SmolVLA/Pi0 的中文实战教程，具身智能入门首选。

- **sou350121/VLA-Handbook** ⭐537 — https://github.com/sou350121/VLA-Handbook
  VLA 方向中文实战导向学习与面试手册，聚焦机器人特有挑战。

### 🔧 硬件与驱动

- **enactic/openarm** ⭐2,877 — https://github.com/enactic/openarm
  全开源人形手臂，面向接触丰富物理 AI 研究与部署，是 LeRobot/OpenArm 阵营重要硬件。

- **commaai/openpilot** ⭐63,482 — https://github.com/commaai/openpilot
  已在 300+ 车型落地的开源驾驶辅助操作系统，是"机器人操作系统"标杆。

- **ArduPilot/ardupilot** ⭐15,735 — https://github.com/ArduPilot/ardupilot
  ArduPlane/Copter/Rover/Sub 全系列无人机/无人车飞控开源代码。

- **murobotics-ai/handumi-hw** ⭐57 — https://github.com/murobotics-ai/handumi-hw
  手腕佩戴式 UMI 变体，无需机器人在环即可采集双手操作数据。

- **manankharwar/fusioncore** ⭐316 — https://github.com/manankharwar/fusioncore
  ROS 2 传感器融合 SDK（UKF/3D/原生 GNSS），零手工调参，Apache 2.0。

### 📊 数据集与基准

- **StanfordVL/BEHAVIOR-1K** ⭐1,650 — https://github.com/StanfordVL/BEHAVIOR-1K
  斯坦福 BEHAVIOR-1K：加速具身 AI 研究的事实平台，包含 1000+ 日常任务基准。

- **mll-lab-nu/VAGEN** ⭐493 — https://github.com/mll-lab-nu/VAGEN
  世界模型 + 多轮 VLM Agent RL 训练框架（NeurIPS 2025），世界模型与 Agent 评测一手数据。

- **worldbench/awesome-3d-4d-world-models** ⭐967 — https://github.com/worldbench/awesome-3d-4d-world-models
  TPAMI 2026 收录的 3D/4D 世界模型综述，是世界模型方向的必备索引。

- **robotmcp/ros-mcp-server** ⭐1,412 — https://github.com/robotmcp/ros-mcp-server
  通过 MCP 协议将 Claude/GPT 等大模型连接 ROS 控制机器人，是"LLM × 机器人"的接口标准。

- **NVIDIA/skills** ⭐3,089 — https://github.com/NVIDIA/skills
  NVIDIA 物理 AI / 机器人 / 仿真 / CUDA / RAG 的 Agent Skills 集合，可被 Claude Code/Codex 等编程 Agent 直接调用。

- **NVIDIA-ISAAC-ROS/isaac_ros_visual_slam** ⭐1,446

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*