# 具身智能开源动态日报 2026-09-17

> 数据来源: GitHub Search API (131 仓库) | ArXiv cs.RO (30 篇论文) | RSS 新闻 (49 条) | 生成时间: 2026-09-17 02:54 UTC

---

# 具身智能开源动态日报

**日期：2026 年 · 编辑：具身智能领域分析师**

---

## 一、今日速览

今日机器人与具身智能社区呈现出"**安全落地 + 数据效率 + 标准化**"三条主线：Agility Robotics 发布 Digit 5 人形机器人，主打安全架构升级以适应工厂真实协作；InOrbit.AI 联合开放 OpenRobOps ISO 21423 参考实现，推动机器人运营层标准化；学术方面 FIERCE 提出了从通用策略向"快速专家模型"蒸馏的新范式，强调有限交互下的精细化能力。同时 IsaacLab、FluxVLA、RLinf、Newton 等开源项目持续高位迭代，VLA 工程化、机器人 RL 基础设施与 GPU 加速仿真仍是开发者投入最密集的方向。

---

## 二、行业脉搏

1. **Agility Robotics 发布 Digit 5** —— 全新腿足结构、电池系统与安全架构升级，被 IEEE Spectrum 称为"首款真正安全可工厂部署的人形机器人"，标志人形机器人从演示走向协作落地。
   - 链接：https://spectrum.ieee.org/humanoid-robot-safety
   - 链接：https://www.therobotreport.com/agilitys-digit-5-humanoid-has-new-legs-batteries-safety-upgrades/

2. **AI 时代重新思考机器人安全** —— IEEE Spectrum 聚焦"Physical AI + 网络安全"，强调随着大模型/具身模型上机，机器人攻击面已从控制层扩展到感知与决策层。
   - 链接：https://spectrum.ieee.org/physical-ai-robot-cybersecurity-vicone

3. **InOrbit.AI 发布 OpenRobOps ISO 21423 参考实现** —— 国际标准 ISO 21423（机器人运营）首次有了开源参考实现，对 RobOps（机器人 + DevOps）的工程化具有里程碑意义。
   - 链接：https://www.therobotreport.com/inorbit-ai-releases-openrobops-iso-21423-reference-implementation/

4. **OLogic 在 RoboBusiness 分享"人类示教学习"** —— 工业级遥操作 + 模仿学习正在成为人形/机械臂量产前数据采集的标准范式。
   - 链接：https://www.therobotreport.com/ologic-to-share-how-robots-can-learn-from-human-demonstrations-at-robobusiness/

5. **机器人正在学会"触觉"** —— IEEE Spectrum 综述触觉感知 + 学习闭环的最新进展，预示灵巧操作的下一块拼图正在补齐。
   - 链接：https://spectrum.ieee.org/tactile-data-robots

---

## 三、研究前沿

1. **FIERCE: From Generalist Robot Policies to Fast Specialists via Progress-Failure Feedback**
   http://arxiv.org/abs/2609.18651v1
   提出"进度-失败双反馈"机制，将通用大策略快速蒸馏为紧凑高效的专家策略，为 sim-to-real 与少量实机交互下的策略精修提供新路径。

2. **From Gameplay to Policy: Towards Scalable Robot Data Collection via Gamified Robot-Free Interaction**
   http://arxiv.org/abs/2609.18650v1
   利用"游戏化无机器人交互"方式大规模、低成本采集操作数据，是数据驱动具身智能"突破数据瓶颈"的有益探索。

3. **ActiveScale: Scaling Active Perception for Robots across Model, Data, and Hardware**
   http://arxiv.org/abs/2609.18514v1
   从模型、数据、硬件三个维度系统化扩展机器人主动感知，对遮挡/固定视角下的可操作性问题给出端到端方案。

4. **FIVE-VLA: Fast and EffectIVE Autonomous Driving with Recurrent Action Memory**
   http://arxiv.org/abs/2609.18623v1
   通过循环动作记忆机制显著降低 VLA 模型的参数与推理开销，为 VLA 在车载实时系统的部署提供工程范式。

5. **InterMASH: A Unified Geometric Representation for Grasp Synthesis**
   http://arxiv.org/abs/2609.18504v1
   提出统一的抓取几何表征，对灵巧手 + 物体的物理可行交互合成具有基础性价值。

---

## 四、重点项目

### 🦾 机器人学习与控制

- **[isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab)** ⭐8,145
  NVIDIA 主导的多物理/多渲染器统一机器人学习框架，是当前 RL + 具身策略训练的事实底座。

- **[RLinf/RLinf](https://github.com/RLinf/RLinf)** ⭐5,265
  面向具身智能与 Agentic AI 的强化学习基础设施，将大规模 RL 训练推向具身场景。

- **[Hebbian-Robotics/hflow](https://github.com/Hebbian-Robotics/hflow)** ⭐271
  面向机器人团队的 AI 训练数据质量验证 SDK，是"数据中台"思路在具身领域的体现。

- **[Motphys/UniLab](https://github.com/Motphys/UniLab)** ⭐937
  突破"GPU 唯一"的机器人 RL 训练架构，支持异构硬件，对国产算力生态友好。

- **[ray-project/ray](https://github.com/ray-project/ray)** ⭐43,836
  分布式 RL/Agent 训练的底层运行时，是 RLinf、OpenRLHF 等众多具身训练框架的依赖底座。

---

### 🤖 仿真与框架

- **[google-deepmind/mujoco](https://github.com/google-deepmind/mujoco)** ⭐15,179
  高性能接触动力学仿真器，长期是机器人控制与 RL 研究的标准环境。

- **[rerun-io/rerun](https://github.com/rerun-io/rerun)** ⭐11,460
  多模态机器人数据可视化与流式回放工具，已成为数据闭环/调试的事实标准之一。

- **[newton-physics/newton](https://github.com/newton-physics/newton)** ⭐5,643
  基于 NVIDIA Warp 的 GPU 加速开源物理引擎，面向机器人学与仿真研究的高吞吐场景。

- **[ros-navigation/navigation2](https://github.com/ros-navigation/navigation2)** ⭐4,712
  ROS 2 官方导航框架，移动机器人/具身导航的核心组件。

- **[gazebosim/gz-sim](https://github.com/gazebosim/gz-sim)** ⭐1,502
  Gazebo 最新一代开源仿真器，仍是 ROS 生态下最广泛使用的机器人仿真平台之一。

---

### 🧠 VLA 与基础模型

- **[FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA)** ⭐682
  端到端 VLA 工程平台，覆盖从数据采集到真机部署全链路，是中文社区 VLA 落地最快的工程框架之一。

- **[allenai/vla-evaluation-harness](https://github.com/allenai/vla-evaluation-harness)** ⭐612
  通用 VLA 模型 × 任意机器人仿真基准的统一评估框架，填补 VLA 标准化评测空白。

- **[InternRobotics/InternVLA-A-series](https://github.com/InternRobotics/InternVLA-A-series)** ⭐554
  InternVLA-A1：统一理解、生成与动作的机械臂操作模型，国内首个体系化 VLA 系列。

- **[syswonder/robonix](https://github.com/syswonder/robonix)** ⭐364
  "机器人上的 Agentic OS"，Rust 编写，定位为下一代机器人智能体操作系统。

- **[ros-claw/rosclaw](https://github.com/ros-claw/rosclaw)** ⭐198
  面向 Physical AI 的自演化运行时，集成 e-URDF、沙箱安全、技能演化等关键能力。

- **[dora-rs/dora](https://github.com/dora-rs/dora)** ⭐4,040
  基于数据流的 AI 机器人中间件，低延迟、可组合、分布式，正在成为 AI × Robotics 的"ROS 替代候选"。

- **[OpenBMB/SimpleMemVLA](https://github.com/OpenBMB/SimpleMemVLA)** ⭐37
  为 VLA 模型引入"原生视频记忆"机制，显著增强长时序操作的连续推理能力。

---

### 🔧 硬件与驱动

- **[enactic/openarm](https://github.com/enactic/openarm)** ⭐3,400
  完全开源的人形机械臂，面向接触丰富（contact-rich）场景的物理 AI 研究与部署。

- **[murobotics-ai/handumi-hw](https://github.com/murobotics-ai/handumi-hw)** ⭐87
  手持式 UMI 变体，脱离"机器人在环"即可采集双手操作数据，大幅降低数据成本。

- **[XenseRobotics-AI/lerobot-xense](https://github.com/XenseRobotics-AI/lerobot-xense)** ⭐20
  LeRobot v5.1 分支，集成 Flexiv Rizon4、Elite CS66、ARX5 及触觉夹爪，推动 VLA 在多品牌真机上的复用。

- **[limxdynamics/tron2_openpi](https://github.com/limxdynamics/tron2_openpi)** ⭐25
  OpenPI 部署向分支，针对 LimX TRON2 真机做 π₀.₅ 策略服务与微调，国产硬件 × 顶级 VLA 模型的范本。

---

### 📊 数据集与基准

- **[StanfordVL/BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K)** ⭐1,704
  加速具身 AI 研究的标志性基准平台，覆盖上千种日常家务任务。

- **[RoboTwin-Platform/RoboTwin](https://github.com/RoboTwin-Platform/RoboTwin)** ⭐2,861
  ICML 2026 RoboTwin 2.0 官方仓库，双臂操作数据生成与基准评测的代表性工作。

- **[knightnemo/Awesome-World-Models](https://github.com/knightnemo/Awesome-World-Models)** ⭐3,418
  世界模型方向一站式资源汇总，对 VLA 与具身策略学习具有重要参考价值。

- **[BaiShuanghao/Awesome-Robotics-Manipulation](https://github.com/BaiShuanghao/Awesome-Robotics-Manipulation)** ⭐1,141
  机器人操作论文与代码的全面清单，是入门/调研机械臂操作的高质量起点。

- **[Phyzicalorg/Phyzical_org](https://github.com/Phyzicalorg/Phyzical_org)** ⭐311
  浏览器遥操作数据 + 链上溯源，提出具身数据的"数据燃料站"概念。

- **[Calibra-Robotics/Calibra](https://github.com/Calibra-Robotics/Calibra)** ⭐24
  面向模仿学习的数据集可观测性与核心集（coreset）选择工具，直接影响训练效率与最终性能。

---

## 五、生态趋势信号

从今日新闻、论文与仓库三者交叉看，具身智能正在形成三条相互强化的趋势链：**第一，安全与标准化成为人形机器人真正进入工厂的"准入条件"** —— Digit 5 的安全架构、InOrbit 的 OpenRobOps ISO 21423、IEEE 关于 Physical AI 网络安全的讨论，都在为"具身规模化部署"铺路。**第二，数据效率取代数据规模成为新的研究焦点** —— FIERCE 强调"从通用到专家

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*