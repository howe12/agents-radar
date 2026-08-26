# 具身智能开源动态日报 2026-08-26

> 数据来源: GitHub Search API (132 仓库) | ArXiv cs.RO (26 篇论文) | RSS 新闻 (47 条) | 生成时间: 2026-08-26 00:55 UTC

---

# 具身智能开源动态日报

**日期**：2026年8月 · 编译自 IEEE Spectrum、The Robot Report、ArXiv cs.RO、GitHub Trending

---

## 一、今日速览

今日动态呈现"**资本回归硬件、模型回归场景、推理回归边缘**"三条主线：小鹏旗下人形机器人公司 Dogotix 完成 9 亿美元巨额融资，NVIDIA 发布 Jetson Orin Nano 2 把边缘推理性能翻倍，配套 GitHub 上 RLinf、dora-rs、newton-physics 等具身基础设施持续走高。论文端，VLA 蒸馏、World Action Model、空间机器人无奖励持续学习成为焦点；仓库端，从 SmolVLA 工业落地到 ROS-MCP 把大模型接入机器人，机器人操作系统正在被全面"Agent 化"。

---

## 二、行业脉搏

1. **小鹏机器人子公司 Dogotix 融资 9 亿美元** — 头部车企把人形机器人作为新增长曲线已进入"资本兑现"阶段，预示 2026 年人形机器人量产赛跑进一步白热化。  
   https://www.therobotreport.com/xpeng-motors-humanoid-robot-unit-dogotix-raises-900m/

2. **NVIDIA Jetson Orin Nano 2 边缘推理性能翻倍** — 端侧算力跃迁直接利好 VLA 模型、轻量世界模型和移动机器人本地决策，是具身智能"云-边-端"分层落地的关键拼图。  
   https://www.therobotreport.com/jetson-orin-nano-2-doubles-inference-performance-robotics-edge-says-nvidia/

3. **Guident：Robotaxi 安全仍需"人在回路"** — 在端到端模型与远程监管并行的过渡期，远程操作员/安全员架构是 L4 商用的现实路径，与 MomADv2 等长时序记忆论文方向呼应。  
   https://www.therobotreport.com/humans-loop-are-still-needed-robotaxi-fleet-safety-says-guident/

4. **The Next Big AI Play：不是 App，也不是人形，而是"大脑+肌肉"的机器** — 行业叙事正在从纯软件大模型转向"具身智能体"，强化 RLinf、RoboTwin、BEHAVIOR-1K 等开源基建的重要性。  
   https://www.therobotreport.com/the-next-big-ai-play-isnt-apps-or-humanoids-its-machines-with-brains-and-brawn/

5. **用数字孪生探索自动化以降低资本风险** — 在资本谨慎期，数字孪生 + Sim2Real 是制造业评估具身方案 ROI 的标准路径。  
   https://www.therobotreport.com/use-digital-twin-explore-automation-before-committing-capital/

---

## 三、研究前沿

1. **Act with Intent: Distilling Behavior Intent for VLA Models** — 直接针对 VLA 动作解码器泛化不足的痛点，将"行为意图"作为可蒸馏中间表征，提升跨任务、跨本体迁移能力，是 OpenVLA/SmolVLA 之后的关键技术演进。  
   http://arxiv.org/abs/2608.23478v1

2. **GeoWAM: Visual Geometry World Action Models for Autonomous Driving** — 把世界模型与动作生成统一到同一框架，并对几何结构显式建模，是"Driving VLA / WAM"路线的代表性进展。  
   http://arxiv.org/abs/2608.23486v1

3. **ROS2SmolVLA: Enabling Small VLA Models for Industrial-Grade Lightweight Robots** — 工业产线呼唤低成本、轻量级 VLA，本文给出 ROS 2 集成范式，与今日 Jetson Orin Nano 2 边缘算力形成完整闭环。  
   http://arxiv.org/abs/2608.23320v1

4. **Reward-Free Continual Adaptation for Resilient Space Robots** — 针对硬件退化场景提出无奖励持续自适应，对在轨服务、深空探测机器人的鲁棒性控制具有直接价值。  
   http://arxiv.org/abs/2608.23452v1

5. **Think Only When Needed: Prompt-Authority Control for Selective Slow-Path Intervention in VLA Manipulation** — 提出"按需慢思考"机制，让冻结的 VLA 在检索增强下选择性介入推理，兼顾效率与稳健性，适合工业部署。  
   http://arxiv.org/abs/2608.23224v1

6. **Design of a Biomimetic Joint-Covering Skin for Musculoskeletal Humanoid** — 用类组织结构皮肤增强本体感觉，为通用人形机器人的"软硬件协同感知"提供新思路。  
   http://arxiv.org/abs/2608.23304v1

---

## 四、重点项目

###  机器人学习与控制（模仿学习 / RL / 策略学习）

- **RLinf/RLinf** ⭐4,639 — 面向具身与 Agentic AI 的强化学习基础设施，统一训练-仿真-部署栈。  
  https://github.com/RLinf/RLinf

- **OpenPipe/ART** 10,662 — Agent Reinforcement Trainer，使用 GRPO 训练多步真实任务 Agent，是把通用 Agent RL 范式扩展到机器人/具身任务的关键开源工具。  
  https://github.com/OpenPipe/ART

- **mll-lab-nu/VAGEN** 493 — 世界模型强化学习框架，用于多轮 VLM Agent（NeurIPS 2025），把"世界模型 + VLM Agent RL"打通。  
  https://github.com/mll-lab-nu/VAGEN

- **Hebbian-Robotics/hflow** ⭐144 — 面向机器人与 Physical AI 的多模态数据质量、加工、清洗管线开源 SDK，解决具身数据"脏、杂、贵"的核心痛点。  
  https://github.com/Hebbian-Robotics/hflow

- **murobotics-ai/handumi-sw** ⭐48 — 开源 HandUMI 软件栈，支持双臂同步数据采集与重定向，是低成本 UMI 类数据收集路线的代表。  
  https://github.com/murobotics-ai/handumi-sw

### 🤖 仿真与框架（MuJoCo / Isaac / Gazebo / ROS）

- **NVIDIA IsaacLab** ⭐7,961 — 基于 Isaac Sim 的统一机器人学习框架，事实上的 Sim2Real 标准。  
  https://github.com/isaac-sim/IsaacLab

- **newton-physics/newton** ⭐5,529 — 基于 NVIDIA Warp 的 GPU 加速开源物理引擎，定位机器人与仿真研究，是 Isaac 生态的重要补充。  
  https://github.com/newton-physics/newton

- **dora-rs/dora** ⭐3,899 — 用 Rust 编写的 AI 机器人中间件，Dataflow 架构、低延迟可组合，为具身应用提供 ROS 之外的现代化选择。  
  https://github.com/dora-rs/dora

- **copper-project/copper-rs** ⭐1,465 — Rust 写的"机器人操作系统"，支持构建、运行与确定性回放，对调试和复现意义重大。  
  https://github.com/copper-project/copper-rs

- **ros-controls/mujoco_ros2_control** ⭐237 — 将 MuJoCo 物理接入 ROS 2 control 的官方包，降低 MuJoCo 在 ROS 体系中的部署门槛。  
  https://github.com/ros-controls/mujoco_ros2_control

- **robotmcp/ros-mcp-server** ⭐1,413 — 用 MCP 协议把 Claude / GPT 等大模型接到 ROS，是"LLM-as-Operator"趋势的关键桥梁。  
  https://github.com/robotmcp/ros-mcp-server

### 🧠 VLA 与基础模型

- **FluxVLA/FluxVLA** 629 — 一站式 VLA 工程平台，覆盖数据到真实机器人部署，适合工程团队快速落地。  
  https://github.com/FluxVLA/FluxVLA

- **allenai/vla-evaluation-harness** 563 — 统一评估任意 VLA 模型在任意机器人仿真基准上的表现，补齐 VLA 评测短板。  
  https://github.com/allenai/vla-evaluation-harness

- **TensorAuto/OpenTau** ⭐204 — 基于 PyTorch 的真实机器人 VLA 训练基础设施，面向工业级落地。  
  https://github.com/TensorAuto/OpenTau

- **lucidrains/mimic-video** ⭐122 — 复现 Mimic-Video，将视频-动作模型作为 VLA 之外的另一条通用控制路径。  
  https://github.com/lucidrains/mimic-video

- **Noietch/EVA-CLIENT** ⭐97 — 面向真实机器人的部署、评测、数据采集统一框架，降低 VLA 真实部署门槛。  
  https://github.com/Noietch/EVA-CLIENT

- **provael/provael** ⭐5 — 首个开源 VLA 政策红队仿真评测工具，关注安全与对抗鲁棒性。  
  https://github.com/provael/provael

### 🔧 硬件与驱动

- **ArduPilot/ardupilot** 15,742 — 全球最广泛使用的开源自驾仪，覆盖固定翼、多旋翼、ROV 等，是无人机/无人系统的事实标准。  
  https://github.com/ArduPilot/ardupilot

- **PX4/PX4-Autopilot** 12,491 — 主流开源飞控，与 ROS 2、NuttX 深度集成，学术与产业并用。  
  https://github.com/PX4/PX4-Autopilot

- **enactic/openarm** ⭐2,884 — 完全开源的仿人机械臂，面向接触丰富环境下的 Physical AI 研究与部署，是人形操作的重要硬件底座。  
  https://github.com/enactic/openarm

- **mavlink/mavros** ⭐1,213 — MAVLink ↔ ROS 网关，含 GCS 代理，是无人机+ROS 桥接的经典基础设施。  
  https://github.com/mavlink/mavros

- **leo-zhu-agibot/dual-so101-mobile-manipulator** ⭐41 — 移动底盘 + 双 SO-101 机械臂 + Isaac Sim 的参考栈，配套多模态感知与模仿学习，是低成本移动操作的样板。  
  https://github.com/leo-zhu-agibot/dual-so101-mobile-manipulator

###  数据集与基准

- **StanfordVL/BEHAVIOR-1K** ⭐1,658 — 具身 AI 研究的标志性平台，提供 1000+ 日常任务的仿真基准。  
  https://github.com/StanfordVL/BEHAVIOR-1K

- **RoboTwin-Platform/RoboTwin** ⭐2,768 — ICML 2026 收录的 RoboTwin 2.0 官方仓库，是双臂操作的代表性基准。  
  https://github.com/RoboTwin-Platform/RoboTwin

- **datawhalechina/every-embodied** ⭐3,345 — 从零构建 VLA/OpenVLA/SmolVLA/Pi0 的中文教学仓库，对国内具身教育意义重大。  
  https://github.com/datawhalechina/every-embodied

- **RealXiaoze/humanoid-motion-intelligence** ⭐420 — 人形机器人运动智能的论文、项目、产业与求职知识库。  
  https://github.com/RealXiaoze/humanoid-motion-intelligence

- **knightnemo/Awesome-World-Models** ⭐3,345 — 世界模型方向的一站式资源索引，配套 paper/code/网站。  
  https://github.com/knightnemo/Awesome-World-Models

---

## 五、生态趋势信号

综合今日新闻、论文与仓库活跃度，可观察到四个清晰信号：

**1. 资本 + 算力双向加码"具身本体"。** Dogotix 9 亿美元融资 + Jetson Orin Nano 2 边缘算力翻倍，标志着人形机器人 / 移动机器人正在获得独立于纯软件大模型的"硬件 + 芯片"基础设施红利。

**2. VLA 从"百亿参数走向场景化、轻量化、蒸馏化"。** SmolVLA、Act with Intent、Think Only When Needed 等论文与 ROS2SmolVLA、FluxVLA、OpenTau 等仓库同步发力，VLA 正在从"大模型即一切"过渡到"按任务、按算力、按本体"分层部署。

**3. 机器人操作系统正在被 Agent 化 / 数据流化。** dora-rs、copper-rs、ros-mcp-server、syswonder/robonix、ros-claw/rosclaw 等新兴中间件并行出现，传统的 ROS 节点模型正让位于"Dataflow + MCP + 自演化运行时"的新范式。

**4. 评测、安全、对齐成为具身 AI 的下一个分水岭。** Provael（VLA 红队）、inspect-robots（物理 AI 开源评测）、vla-evaluation-harness（VLA 评测统一框架）密集出现，预示 2026 年下半年"具身评测 / 安全 / 对齐"将形成独立子赛道。

---

## 六、值得关注

1. **小鹏 Dogotix 9 亿美元融资 + 全栈开源人形臂 OpenArm** — 资本与硬件开源正在形成"商用 + 开源"双轨，OpenArm 这类开源机械臂将直接受益于 Dogotix 这类玩家构建的开发者生态。  
   链接：https://www.therobotreport.com/xpeng-motors-humanoid-robot-unit-dogotix-raises-900m/ · https://github.com/enactic/openarm

2. **NVIDIA Jetson Orin Nano 2 + ROS2SmolVLA + 新一代 MuJoCo/Isaac 工具链** — 边缘算力、轻量 VLA、GPU 物理引擎三者首次在同一时间窗口集中突破，2026 下半年将出现"万元级机器人本体跑通 VLA 真机操作"的临界点。  
   链接：https://www.therobotreport.com/jetson-orin-nano-2-doubles-inference-performance-robotics-edge-says-nvidia/ · https://github.com/isaac-sim/IsaacLab · https://github.com/newton-physics/newton

3. **VLA 红队 / 物理 AI 评测基础设施起步** — Provael 与 inspect-robots 的出现提示：随着 VLA 模型快速走向真实部署，**安全、对齐与对抗鲁棒性** 将成为下一个开源热点方向，值得研究者与安全团队提前布局。  
   链接：https://github.com/provael/provael · https://github.com/robocurve/inspect-robots

---

*本日报由具身智能开源雷达自动生成，覆盖行业新闻、学术论文与开源仓库三大维度。*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*