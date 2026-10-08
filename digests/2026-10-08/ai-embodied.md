# 具身智能开源动态日报 2026-10-08

> 数据来源: GitHub Search API (128 仓库) | ArXiv cs.RO (30 篇论文) | RSS 新闻 (45 条) | 生成时间: 2026-10-08 03:59 UTC

---

# 具身智能开源动态日报

**日期**：2026 年 1 月 · **覆盖范围**：IEEE Spectrum、The Robot Report、ArXiv cs.RO、GitHub 趋势仓库

---

## 1. 今日速览

- **行业层面**，Boston Dynamics 迎来前 Amazon 高管 Rohit Prasad 接任 CEO，工业自动化领域 PTC 被 Schneider Electric 收购、Teradyne 与 Elite Robots 达成和解，行业格局加速重塑。
- **研究层面**，VLA 模型的鲁棒性、可扩展世界-动作模型（World-Action Models）以及触觉 sim-to-real 成为今日论文的三大主线，多篇工作直指 VLA 的指令敏感、视觉历史长度等核心痛点。
- **开源生态层面**，MuJoCo 阵营持续扩张（`mjlab`、`mujoco_menagerie`），VLA 工具链从教程（`every-embodied`、`VLA-Handbook`）到端侧推理（`EagleVLA-Edge`）再到数据采集（`HandUMI`）逐步完整，机器人学习的"操作系统化"趋势明显。

---

## 2. 行业脉搏

- **【人事】Boston Dynamics 任命前 Amazon 高管 Rohit Prasad 为新任 CEO**——Prasad 此前领导 Amazon Alexa AI，向机器人公司注入消费级 AI 产品化经验，叠加 Atlas 新灵巧手发布，Boston Dynamics 战略重心或进一步向"AI 驱动的人形机器人商业化"倾斜。
  链接：<https://www.therobotreport.com/boston-dynamics-appoints-former-amazon-executive-rohit-prasad-new-ceo/>

- **【并购】PTC 被 Schneider Electric 收购，将挑战西门子**——工业软件巨头 PTC（CAD/PLM）并入 Schneider 的工业自动化栈，意味着数字主线（Digital Thread）与 OT 层加速融合，对机器人工程化平台格局影响深远。
  链接：<https://www.therobotreport.com/ptc-acquisition-positions-schneider-electric-challenge-siemens/>

- **【知识产权】Teradyne Robotics 与 Elite Robots 就协作机器人专利纠纷达成和解**——结束持续多年的法律战，Elite Robots 的 cobot 产品线风险解除，中端协作机器人市场或将迎来新一轮价格/性能竞争。
  链接：<https://www.therobotreport.com/terayne-robotics-elite-robots-settle-cobot-dispute/>

- **【硬件】Atlas 全新灵巧手或超越仿人手设计**——Boston Dynamics 弃用全拟人五指、转向工程化灵巧手路线，反映出"人形态 ≠ 性能最优"的工程取舍正在被头部玩家验证。
  链接：<https://spectrum.ieee.org/robust-robot-hand>

- **【基础模型】TwelveLabs 推出 Pegasus 1.6，将视频理解引入 Physical AI**——长上下文视频模型向机器人迁移，可为世界模型、轨迹预测提供更丰富的视觉推理基础。
  链接：<https://www.therobotreport.com/pegasus-1-6-brings-video-understanding-physical-ai-says-twelvelabs/>

---

## 3. 研究前沿

- **RoboPrompt: Intuitive Robot Policy Steering with Sparse Human Input**——用极少量人类反馈在线"微调"端到端策略方向，缓解模仿学习数据多样性受限问题，对低成本人机协作策略纠错意义重大。
  <http://arxiv.org/abs/2610.10534v1>

- **RoboJEPA: Scaling Robotic Latent World Models**——在隐空间训练 JEPA 风格的世界模型并扩展规模，为机器人提供可规划的潜在动力学表征，是当前世界模型路线的代表性工作。
  <http://arxiv.org/abs/2610.10515v1>

- **Rephrase Before You Act: Characterizing and Mitigating Language Sensitivity in VLA Models**——系统量化并缓解 VLA 对指令措辞的过度敏感性，是 VLA 走向真实部署（用户表达千变万化）的关键一步。
  <http://arxiv.org/abs/2610.10526v1>

- **Long-WAM: Scaling the Context of World-Action Models**——在长视频历史与实时控制之间取得平衡，把"世界-动作模型"上下文窗口规模化，直接呼应工业界对长时序任务的需求。
  <http://arxiv.org/abs/2610.10528v1>

- **Factorized Tactile Representation and Control for Sim-to-Real Manipulation**——提出分解式触觉表征，桥接触觉仿真与真实传感器响应之间的领域鸿沟，是触觉 sim-to-real 的实用方案。
  <http://arxiv.org/abs/2610.10510v1>

- **Never Look Back: 3D Object Memory from Egocentric Videos**——从自我中心视频中构建可长期保留的 3D 物体记忆，对"任务中再访问先前出现物体"类场景具有直接价值。
  <http://arxiv.org/abs/2610.10538v1>

---

## 4. 重点项目

### 🦾 机器人学习与控制（模仿学习 / 强化学习 / 策略学习）

- **[RLinf/RLinf](https://github.com/RLinf/RLinf)** ⭐5,457 — 面向具身与 Agentic AI 的强化学习基础设施，覆盖 PPO/GRPO 等主流算法并原生支持 VLM/Agent，是 RL 训练的事实底座之一。
- **[dora-rs/dora](https://github.com/dora-rs/dora)** ⭐3,995 — Rust 编写的"数据流机器人中间件"，以低延迟、组合式流水线为 AI 机器人应用提供编排能力。
- **[openpipe/ART](https://github.com/OpenPipe/ART)** ⭐10,788 — Agent Reinforcement Trainer，使用 GRPO 等算法对多步 Agent 进行在岗训练，把 RL 从仿真器推向真实业务。
- **[RobotControlStack/robot-control-stack](https://github.com/RobotControlStack/robot-control-stack)** ⭐163 — 无 ROS 的轻量 sim-to-real 框架，原生支持 VLA 与 RL 训练，覆盖 Franka、UR5e、xArm、SO101、YAM 等主流臂。
- **[black-forest-labs/flux-action](https://github.com/black-forest-labs/flux-action)** ⭐145 — Black Forest Labs 开放权重的 7B 世界-动作模型，支持 DROID、SO-101 等数据集训练与微调。
- **[OpenWAM/OpenWAM](https://github.com/OpenWAM/OpenWAM)** ⭐136 — 斯坦福开源的"可组合世界-动作模型"框架，把 WAM 范式工程化。
- **[amathislab/musclemimic](https://github.com/amathislab/musclemimic)** ⭐321 — 肌肉骨骼全身运动学习，推动具身 AI 从刚体到生物力学建模。

### 🤖 仿真与框架（MuJoCo / Isaac / Gazebo / ROS）

- **[google-deepmind/mujoco](https://github.com/google-deepmind/mujoco)** ⭐15,511 — 多关节接触动力学的标杆物理引擎，几乎所有现代机器人学习工作的事实标准。
- **[isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab)** ⭐8,293 — 统一的多物理/多渲染器机器人学习框架，NVIDIA 在规模化 sim-to-real 上的旗舰项目。
- **[newton-physics/newton](https://github.com/newton-physics/newton)** ⭐5,730 — 基于 NVIDIA Warp 的 GPU 加速物理引擎，瞄准机器人学家与仿真研究者。
- **[google-deepmind/mujoco_menagerie](https://github.com/google-deepmind/mujoco_menagerie)** ⭐4,156 — DeepMind 官方精选的高质量 MuJoCo 模型库，覆盖主流人形与机械臂。
- **[mujocolab/mjlab](https://github.com/mujocolab/mjlab)** ⭐3,182 — 基于 MuJoCo-Warp 的"Isaac Lab 风格 API"，为 RL 与机器人研究提供新基座。
- **[carla-simulator/carla](https://github.com/carla-simulator/carla)** ⭐14,465 — 自动驾驶研究的事实开源仿真器，与机器人决策研究互通。
- **[gazebosim/gz-sim](https://github.com/gazebosim/gz-sim)** ⭐1,531 — 新一代 Gazebo，与 ROS 2 生态深度整合。
- **[pinocchio](https://github.com/stack-of-tasks/pinocchio)** ⭐3,784 — 高速刚体动力学库及其解析导数，是人形/腿足机器人控制栈的常用底层。

### 🧠 VLA 与基础模型（视觉-语言-动作 / 具身基础模型）

- **[dexmal/opendm](https://github.com/dexmal/opendm)** ⭐2,207 — 面向通用具身智能的开放世界基础模型，类比 LLM 的"具身 GPT"思路。
- **[PhyAgentOS/PhyAgentOS-core](https://github.com/PhyAgentOS/PhyAgentOS-core)** ⭐2,756 — 递归自我改进的物理 Agent 操作系统，探索 Agentic Workflow 驱动的具身能力增长。
- **[datawhalechina/every-embodied](https://github.com/datawhalechina/every-embodied)** ⭐3,941 — 从零搭建 VLA/OpenVLA/SmolVLA/Pi0 的中文实战教程，对国内入门社区价值高。
- **[sou350121/VLA-Handbook](https://github.com/sou350121/VLA-Handbook)** ⭐680 — VLA 中文学习/面试手册，聚焦机器人特有的算法与工程问题。
- **[Open-X-Humanoid/HEX](https://github.com/Open-X-Humanoid/HEX)** ⭐338 — 全尺寸人形机器人的全身视觉-语言-动作框架。
- **[Noietch/EVA-CLIENT](https://github.com/Noietch/EVA-CLIENT)** ⭐305 — 真实机器人上 VLA 部署、评测与数据采集的统一框架。
- **[PKU-SEC-Lab/EagleVLA-Edge](https://github.com/PKU-SEC-Lab/EagleVLA-Edge)** ⭐48 — 面向机载实时控制的"前视对齐 + 异步推理"VLA 推理引擎，CoRL'26 Spotlight。
- **[ucla-mobility/TIC-VLA](https://github.com/ucla-mobility/TIC-VLA)** ⭐165 — Think-in-Control VLA，将"思考"嵌入导航控制循环（ICML 2026）。
- **[lucidrains/mimic-video](https://github.com/lucidrains/mimic-video)** ⭐125 — 视频-动作模型实现，指向"超越 VLA"的可泛化机器人控制。

### 🔧 硬件与驱动（驱动 / 接口 / 嵌入式）

- **[enactic/openarm](https://github.com/enactic/openarm)** ⭐3,581 — 面向接触丰富任务的完全开源人形臂，是物理 AI 研究的可复现硬件平台。
- **[ArduPilot/ardupilot](https://github.com/ArduPilot/ardupilot)** ⭐16,012 — 无人机/无人车/无人艇的成熟开源飞控，ROS 兼容。
- **[PX4/PX4-Autopilot](https://github.com/PX4/PX4-Autopilot)** ⭐12,756 — 学术界与产业界最常用的开源自驾仪。
- **[BehaviorTree/BehaviorTree.CPP](https://github.com/BehaviorTree/BehaviorTree.CPP)** ⭐4,237 — 任务级机器人行为树"开箱即用"库，是复杂任务编排的常用方案。
- **[murobotics-ai/handumi-sw](https://github.com/murobotics-ai/handumi-sw)** ⭐76 — 开源 HandUMI 软件：双臂数据采集、标定、QA、回放与遥操作。
- **[FastCrest/tether](https://github.com/FastCrest/tether)** ⭐85 — 跨 Jetson、RTX、Apple Silicon、AMD 的边-云 AI 部署 CLI，强调 parity 证书。

### 📊 数据集与基准（操作 / 导航 / 具身评测）

- **[RoboVerseOrg/RoboVerse](https://github.com/RoboVerseOrg/RoboVerse)** ⭐1,866 — 统一平台、数据集与基准，目标"可扩展、可泛化的机器人学习"。
- **[StanfordVL/BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K)** ⭐1,737 — 推动具身 AI 研究的标志性基准与仿真平台。
- **[robocurve/inspect-robots](https://github.com/robocurve/inspect-robots)** ⭐646 — 物理 AI 的开源评测，支持任意 LLM/VLA 在任意臂/人形与真机/仿真上对比。
- **[AetherLabsAI/Video2World](https://github.com/AetherLabsAI/Video2World)** ⭐69 — 用 Coding Agent 从具身视频重建交互式世界模型，重新审视 Real2Sim。
- **[Jaasssoooonnnnn/FirstLight_CR](https://github.com/Jaasssoooonnnnn/FirstLight_CR)** ⭐137 — 离线对局模拟 + 模仿学习/PPO 的可交互评测（跨域参考）。
- **HiPHI 基准**（来自今日新闻）—— 高精度人体运动与物体交互的大规模基准，可直接用于人形/灵巧手训练与评测。
  <https://content.knowledgehub.wiley.com/hiphi-a-large-scale-benchmark-for-high-precision-human-motion-and-object-interaction/>

---

## 5. 生态趋势信号

具身智能的开源生态正从"碎片化工具"向"分层操作系统"快速演进。**底层物理仿真**层面，MuJoCo 通过 `mujoco_menagerie`、`mjlab`、`mujoco_mpc` 不断巩固事实标准地位，Newton、IsaacLab、Warp 类 GPU 仿真与其并行扩张；**策略与模型层**出现明显的"VLA 工程化"转向——VLA 不再只是论文概念，而是被 `EagleVLA-Edge`（机载推理）、`EVA-CLIENT`（部署评测）、`OpenWAM` / `flux-action`（世界-动作模型）、`robot-control-stack`（无 ROS 训练栈）拆解为可量产的能力模块；**数据与评测**则从单一数据集迈向"平台 + 基准 + 在线评测"一体化（RoboVerse、BEHAVIOR-1K、inspect-robots、HiPHI）。与此同时，**真实落地**正在倒逼研究端：`Rephrase Before You Act` 直击 VLA 鲁棒性，`Agentic RSR` 推动 Real-to-Sim-to-Real 闭环，`Factorized Tactile Representation` 解决触觉 sim-to-real，Boston Dynamics 任命 Amazon 系 CEO 也印证"AI 产品化能力"已成为机器人公司核心竞争力。

---

## 6. 值得关注

1

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*