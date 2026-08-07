# 具身智能开源动态日报 2026-08-07

> 数据来源: GitHub Search API (128 仓库) | ArXiv cs.RO (30 篇论文) | RSS 新闻 (48 条) | 生成时间: 2026-08-07 02:21 UTC

---

# 具身智能开源动态日报

**日期：2025-XX-XX | 覆盖：行业新闻 · ArXiv cs.RO · GitHub Trending**

---

## 一、今日速览

今日具身智能领域呈现"产业落地加速、仿真基础设施深化、VLA生态扩张"三条主线：DeepMind 推出 Gemini Robotics 2、Walden Robotics 与丰田合作推进实用化人形机器人、HII 与 Path/GrayMatter 签署高达 9 亿美元的机器人制造协议，标志人形与工业机器人正向大规模商用迈进；研究侧，扩散策略与 VLA 后训练成为焦点，VIDP、Adaptive-WAM、Beyond Flat Policies 三篇论文从不同维度推动操作智能的可控性与泛化性；GitHub 端，MuJoCo-Warp 生态（Newton、mjlab、IsaacLab）持续主导具身学习基础设施，ros-mcp-server、ros-claw 等"LLM→机器人"中间件成为新一轮热点。

---

## 二、行业脉搏

1. **【政策】美国对外国机器人实施限制** — IEEE Spectrum 调查了 FCC 覆盖清单对移动机器人的潜在影响，反映出地缘政治正在重塑机器人供应链与采购策略，对依赖进口核心部件的中国机器人厂商提出合规挑战。
   → [What Robotics Companies Think About the U.S. Foreign Robot Ban](https://spectrum.ieee.org/fcc-covered-list-mobile-robots)

2. **【商业】Walden Robotics × 丰田联合开发实用人形机器人** — 双方将围绕"实用化"展开合作，意味着人形机器人正从 demo 阶段走向工厂/服务业落地场景，丰田的制造经验将与 Walden 的机器人技术形成互补。
   → [Walden Robotics Partners With Toyota on Practical Humanoids](https://spectrum.ieee.org/humanoid-robots-walden-robotics-toyota)

3. **【模型】Google DeepMind 发布 Gemini Robotics 2** — 继 RT-2 之后，DeepMind 再次升级视觉-语言-动作基础模型，进一步压实 VLA 在通用机器人控制中的地位。
   → [Video Friday: Meet Google DeepMind's Gemini Robotics 2](https://spectrum.ieee.org/video-robot-gemini2-ai-robot)

4. **【资本】HII 签下 9 亿美元机器人制造协议** — 海军工业巨头 HII 与 Path Robotics（焊接）、GrayMatter Robotics（表面处理）达成合作，国防/船舶制造成为机器人焊接与精加工的新增长极。
   → [HII signs up to $900M agreement with Path Robotics, GrayMatter Robotics](https://www.therobotreport.com/hii-signs-up-to-900m-agreement-with-path-robotics-graymatter-robotics/)

5. **【应用】Robin 机器人在医院陪伴中稳定患者情绪** — 医疗陪伴机器人从概念走向临床评估，提示社会服务机器人将成为继工业、家庭之后的第三大落地场景。
   → [How Robin, the robotic companion, keeps patients calm during hospital visits](https://www.therobotreport.com/how-robin-robotic-companion-keeps-patients-calm-during-hospital-visits/)

6. **【边缘 AI】Avnet 联合 Weston Robot 推出边缘 AI 检测方案** — 算力下沉到边缘设备是工业巡检的明确趋势，将加速"视觉模型 + 移动底盘"在能源/制造现场的部署。
   → [Avnet and Weston Robot partner to launch edge AI inspection platform](https://www.therobotreport.com/avnet-and-weston-robot-partner-to-launch-edge-ai-inspection-platform/)

---

## 三、研究前沿

1. **VIDP：可变阻抗扩散策略（Variable Impedance Diffusion Policy）** — Hisham Khalil 等
   将变阻抗控制融入扩散策略生成框架，针对接触丰富任务在跟踪精度与顺应性之间取得平衡，是 diffusion policy 从"位姿生成"走向"动力学感知"的重要一步。
   → [http://arxiv.org/abs/2608.06210v1](http://arxiv.org/abs/2608.06210v1)

2. **Beyond Flat Policies：具身智能体的层次化后训练** — He Kong 等
   针对 VLA 模型在长时序、复合任务上能力不足的问题，提出 hierarchical post-training 框架，为 OpenVLA、π₀ 等模型的二次微调提供了系统化路径。
   → [http://arxiv.org/abs/2608.05999v1](http://arxiv.org/abs/2608.05999v1)

3. **Adaptive-WAM：从视频扩散中间特征做质量引导的早退规划** — Sining Ang 等
   解决世界-动作模型（WAM）推理开销过大的痛点，借助中间特征早退机制，为自动驾驶/具身决策的实时部署开辟了路径。
   → [http://arxiv.org/abs/2608.06008v1](http://arxiv.org/abs/2608.06008v1)

4. **IcFuzz：基于语义阶段引导与多层变异的 Isaac Sim 模糊测试** — Zhixiang Chen 等
   首次将模糊测试引入 Isaac Sim 仿真器，揭示 sim2real gap 的根源可能不在算法而在仿真器本身，对社区建立可信仿真基准意义重大。
   → [http://arxiv.org/abs/2608.06088v1](http://arxiv.org/abs/2608.06088v1)

5. **ErgoSurf：面向未知曲面覆盖的遍历控制** — Stefan Schneyer 等
   把 ergodic control 应用于打磨/喷涂/检查等表面接触任务，为建筑、飞机、风电叶片等非结构化场景的机器人作业提供统一数学工具。
   → [http://arxiv.org/abs/2608.06208v1](http://arxiv.org/abs/2608.06208v1)

---

## 四、重点项目

### 🦾 机器人学习与控制

- **[NVIDIA IsaacLab](https://github.com/isaac-sim/IsaacLab)** ⭐7,848  
  基于 Isaac Sim 的 GPU 并行机器人学习统一框架，是目前 VLA/RL 训练事实标准，支撑 π₀、OpenVLA 等前沿模型发布。

- **[ManiSkill](https://github.com/mani-skill/ManiSkill)** ⭐3,205  
  GPU 并行化的机器人操作技能基准与仿真平台，提供数百个 manipulation 任务，是 SOTA 模仿学习策略的统一评测场。

- **[Newton Physics](https://github.com/newton-physics/newton)** ⭐5,293  
  基于 NVIDIA Warp 的开源 GPU 加速物理引擎，专门面向机器人学家与仿真研究者，与 MuJoCo-Warp、IsaacLab 形成新一代高速物理栈。

- **[DexForce/EmbodiChain](https://github.com/DexForce/EmbodiChain)** ⭐206  
  端到端 GPU 加速的通用具身智能构建平台，强调模块化与可组合性，适合快速集成自定义感知-决策-控制 pipeline。

- **[AirGym](https://github.com/emNavi/AirGym)** ⭐169  
  基于 IsaacGym 的高性能无人机深度强化学习平台，填补了 aerial RL 在 sim2real 上的开源空白。

- **[RobotControlStack](https://github.com/RobotControlStack/robot-control-stack)** ⭐127  
  无 ROS 依赖的轻量 sim2real 框架，原生支持 MuJoCo Gymnasium 与 Franka/UR5e/xArm/SO101，专注 VLA 与 RL 的快速部署。

### 🤖 仿真与框架

- **[MuJoCo](https://github.com/google-deepmind/mujoco)** ⭐14,471  
  Google DeepMind 的多关节接触动力学物理引擎，是机器人学习研究的事实标准底层。

- **[mjlab](https://github.com/mujocolab/mjlab)** ⭐2,773  
  基于 MuJoCo-Warp 重写的 Isaac Lab API，将 RL 与机器人研究的吞吐能力推到新量级。

- **[Carla](https://github.com/carla-simulator/carla)** ⭐14,263  
  开源自动驾驶仿真器，与 ROS 生态深度集成，是端到端驾驶策略训练的主战场。

- **[Webots](https://github.com/cyberbotics/webots)** ⭐4,537  
  开源机器人仿真器，跨平台、易上手，是教学与中等规模研究的标准工具。

- **[Gazebo Sim (gz-sim)](https://github.com/gazebosim/gz-sim)** ⭐1,442  
  Gazebo 全新一代开源仿真器，与 ROS 2 深度协同，是户外/工业机器人验证的事实平台。

- **[NVIDIA IsaacLab](https://github.com/isaac-sim/IsaacLab)** ⭐7,848  
  （亦归类于机器人学习）GPU 并行机器人学习框架，是 VLA 与 RL 的工业级基础设施。

### 🧠 VLA 与基础模型

- **[ros-mcp-server](https://github.com/robotmcp/ros-mcp-server)** ⭐1,379  
  把 Claude/GPT 等 LLM 通过 MCP 协议直连 ROS 节点，标志"对话式机器人"中间件范式正在形成。

- **[VLA-Handbook](https://github.com/sou350121/VLA-Handbook)** ⭐479  
  首份面向 VLA 算法工程师的中文实战手册/面试指南，反映社区对系统化知识沉淀的迫切需求。

- **[FluxVLA](https://github.com/FluxVLA/FluxVLA)** ⭐596  
  一站式 VLA 工程平台，覆盖数据采集到真机部署，对中小团队快速搭建 VLA 流水线极有价值。

- **[vla-evaluation-harness](https://github.com/allenai/vla-evaluation-harness)** ⭐514  
  AllenAI 推出的统一 VLA 评测框架，可对任意 VLA 模型在任意仿真基准上做对比，缓解目前 VLA 评测混乱局面。

- **[Hy-Embodied-0.5-VLA](https://github.com/Tencent-Hunyuan/Hy-Embodied-0.5-VLA)** ⭐247  
  腾讯混元从 VLA 模型到真实机器人学习栈的完整开源方案，包含模型权重与部署代码。

- **[OpenTau](https://github.com/TensorAuto/OpenTau)** ⭐196  
  Tensor 推出的 PyTorch VLA 训练基础设施，专注真实世界机器人数据规模化的工程痛点。

- **[BridgeVLA](https://github.com/BridgeVLA/BridgeVLA)** ⭐201  
  BridgeVLA 与 BridgeVLA++ 官方实现，面向跨 embodiment 迁移的视觉-语言-动作模型。

### 🔧 硬件与驱动

- **[openpilot](https://github.com/commaai/openpilot)** ⭐63,351  
  已为 300+ 车型提供辅助驾驶升级的机器人操作系统，是消费级自动驾驶最大规模开源项目。

- **[ArduPilot](https://github.com/ArduPilot/ardupilot)** ⭐15,631  
  ArduPlane/Copter/Rover/Sub 全栈开源飞控，覆盖无人机/无人车/无人船的最广泛硬件生态。

- **[PX4-Autopilot](https://github.com/PX4/PX4-Autopilot)** ⭐12,352  
  学术界与工业界主流的开源飞控软件栈，与 ROS/Gazebo 深度集成。

- **[Autoware](https://github.com/autowarefoundation/autoware)** ⭐11,948  
  全球领先的开源自动驾驶软件项目，已在 Robotaxi 与物流场景大量商用验证。

- **[OpenCat 四足机器人](

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*