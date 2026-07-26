# 具身智能开源动态日报 2026-07-26

> 数据来源: GitHub Search API (134 仓库) | ArXiv cs.RO (0 篇论文) | RSS 新闻 (46 条) | 生成时间: 2026-07-26 02:09 UTC

---

# 具身智能开源动态日报

**日期**：今日　|　**信源**：IEEE Spectrum、The Robot Report、ROS Discourse + GitHub Trending

---

## 一、今日速览

今日具身智能领域呈现"**资本+基础设施+基础模型**"三线并发态势：Uber 联合创始人携 17 亿美元押注新机器人公司 ATOMS、Holiday Robotics 获 1.05 亿美元加码轮式人形机器人 FRIDAY，资本市场对 Physical AI 的热度未减；基础设施层面，NEURA Robotics 与 RWTH Aachen 联合成立 NEURA Gym 训练物理 AI、AMD 发布面向机器人实时控制的 Kria 模块与统一内存方案；开源侧，RLinf、mjlab、RoboTwin、InternVLA-A 等热门仓库持续在 RL 基础设施、仿真引擎和 VLA 训练栈上推陈出新。今日 cs.RO 暂无新论文入选，但 arXiv 中 VLA、世界模型与类人机器人相关综述/工作集中爆发。

---

## 二、行业脉搏

- **🚗 Uber 联合创始人 17 亿美元创立 ATOMS**：原 Uber CEO Travis Kalanick 携 17 亿美元重返机器人赛道，新公司 ATOMS 聚焦物理 AI，再创 2025 年人形机器人赛道单笔融资新高（来源：[The Robot Report](https://www.therobotreport.com/uber-co-founder-raises-1-7b-for-new-robotics-startup-atoms/)）。
- **🦿 Holiday Robotics 完成 1.05 亿美元 A 轮**：硅谷新锐 Holiday Robotics 推出轮式人形机器人 FRIDAY，标志"轮+腿"混合构型正在成为低成本量产人形机器人的务实路径（来源：[The Robot Report](https://www.therobotreport.com/holiday-robotics-raises-105m-wheeled-humanoid-friday/)）。
- **🏋️ NEURA Robotics × RWTH Aachen 成立 NEURA Gym**：欧洲首个针对 Physical AI 的训练"健身房"落地，把工业机器人真机+仿真闭环训练能力下沉到高校生态（来源：[The Robot Report](https://www.therobotreport.com/neura-robotics-establishes-neura-gym-rwth-aachen-train-physical-ai/)）。
- **🔧 AMD 发布 Kria 机器人模块 + 统一内存**：在嵌入式侧提供实时控制+大模型推理的统一内存架构，对标 NVIDIA Jetson，为机器人侧端大模型推理打开新选项（来源：[The Robot Report](https://www.therobotreport.com/amd-unveils-kria-module-real-time-control-unified-memory-robots/)）。
- **🏥 强生 Ottava 手术机器人首度曝光**：医疗机器人旗舰产品回归，预示 2026 年手术机器人赛道竞争升级（来源：[The Robot Report](https://www.therobotreport.com/photos-first-look-at-jjs-ottava-surgical-robot/)）。
- **🧠 Generalist GEN-1 基础模型扩展末端执行器支持**：跨执行器泛化是 VLA 走向通用操作的基础，GEN-1 现已覆盖更广泛的末端工具（来源：[The Robot Report](https://www.therobotreport.com/generalists-gen-1-foundation-model-now-supports-a-range-of-robot-end-effectors/)）。

---

## 三、研究前沿

> ⚠️ 今日 GitHub Trending 自动抓取窗口内 **cs.RO 暂无新论文**。结合 GitHub 上的活跃研究仓库，今日最具研究价值的代表工作如下（与"论文级"贡献等价）：

- **VAGEN (⭐488)**：把世界模型推理式 RL 范式推广到多轮 VLM 智能体，是把"世界模型"从自动驾驶迁移到通用 Agent 的关键一步（[仓库](https://github.com/mll-lab-nu/VAGEN)）。
- **OMG: Omni-Modal Motion Generation for Generalist Humanoid Control (⭐96)**：清华 MARS Lab 提出统一多模态的人形全身运动生成框架，是类人通用控制方向近期的代表性工作（[仓库](https://github.com/Tsinghua-MARS-Lab/OMG)）。
- **Galahad: Instruction Blindness in VLA Policies (⭐50)**：系统诊断 VLA 策略"指令盲视"现象，并给出基于低秩数据的修复方案，对 VLA 评测与数据构造极具参考价值（[仓库](https://github.com/phi-monster/Galahad)）。
- **Anchor-Align: Generalizable VLA Finetuning (⭐15)**：通过表征锚定与语言-动作对齐提升 VLA 微调的跨域泛化能力，是 OpenVLA/π₀ 系列微调流程的有力补充（[仓库](https://github.com/dwipddalal/Anchor-Align)）。
- **TransDex: 3D Visuo-Tactile Fusion Motor Policy (⭐8)**：基于点云重建预训练的 3D 视觉-触觉融合策略，对接触丰富操作的策略学习具有方法论意义（[仓库](https://github.com/LFGfg/TransDex)）。

---

## 四、重点项目

### 🦾 机器人学习与控制（模仿学习 / 强化学习 / 策略学习）

- **[RLinf/RLinf](https://github.com/RLinf/RLinf)** · ⭐4,255
 面向 Embodied & Agentic AI 的强化学习基础设施，提供统一训练-部署栈，是当前 RL × 机器人方向最活跃的工程化项目之一。

- **[mll-lab-nu/VAGEN](https://github.com/mll-lab-nu/VAGEN)** · ⭐488
 把世界模型作为推理工具引入多轮 VLM Agent RL 训练，架起"世界模型 ↔ 智能体决策"的桥梁。

- **[DexForce/EmbodiChain](https://github.com/DexForce/EmbodiChain)** · ⭐200
 端到端、GPU 加速、模块化的通用具身智能平台，强调数据-训练-部署的可组合性。

- **[RobotControlStack/robot-control-stack](https://github.com/RobotControlStack/robot-control-stack)** · ⭐125
 轻量、ROS-free 的 Sim2Real 框架，原生集成 MuJoCo Gymnasium 包装器，覆盖 Franka / UR5e / xArm / SO101 等主流机械臂，对快速 VLA 实验尤其友好。

- **[Tsinghua-MARS-Lab/OMG](https://github.com/Tsinghua-MARS-Lab/OMG)** · ⭐96
 通用人形机器人全身运动生成统一框架，支持多模态条件输入。

- **[phi-monster/Galahad](https://github.com/phi-monster/Galahad)** · ⭐50
 首个系统量化 VLA 策略"指令盲视"问题并给出低秩修复方案的工作，对 VLA 评测标准建设意义重大。

- **[robonet-ai/handumi-sw](https://github.com/robonet-ai/handumi-sw)** · ⭐42
 基于 UMI 的开源双臂同步数据采集+重定向软件栈，配套硬件版 [handumi-hw](https://github.com/robonet-ai/handumi-hw) 提供无机器人介入的遥操作采集方案。

### 🤖 仿真与框架（MuJoCo / Isaac / Gazebo / ROS）

- **[google-deepmind/mujoco](https://github.com/google-deepmind/mujoco)** · ⭐14,325
 通用多关节接触动力学仿真器的事实标准，是 MuJoCo 系列工作的基座。

- **[isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab)** · ⭐7,764
 NVIDIA Isaac Sim 之上的统一机器人学习框架，规模化 RL + IL 训练的首选平台。

- **[newton-physics/newton](https://github.com/newton-physics/newton)** · ⭐5,241
 基于 NVIDIA Warp 的 GPU 加速开源物理引擎，专为机器人与仿真研究设计。

- **[google-deepmind/dm_control](https://github.com/google-deepmind/dm_control)** · ⭐4,647
 DeepMind 基于 MuJoCo 的"物理仿真 + RL 环境"软件栈，学术研究的事实参考实现。

- **[cyberbotics/webots](https://github.com/cyberbotics/webots)** · ⭐4,472
 开源机器人仿真器，跨平台、教育/研究友好，与 ROS 深度集成。

- **[dora-rs/dora](https://github.com/dora-rs/dora)** · ⭐3,852
 面向 AI 机器人应用的 Dataflow 中间件，以有向图建模低延迟、可组合、分布式 pipeline。

- **[mujocolab/mjlab](https://github.com/mujocolab/mjlab)** · ⭐2,721
 "Isaac Lab 风格 API × MuJoCo-Warp"——把 GPU 加速物理与类 Isaac Lab 体验带给开源社区。

- **[enactic/openarm](https://github.com/enactic/openarm)** · ⭐2,765
 完全开源的人形机械臂，面向接触丰富环境下的物理 AI 研究与部署。

- **[copper-project/copper-rs](https://github.com/copper-project/copper-rs)** · ⭐1,423
 Rust 写的机器人操作系统，强调确定性构建、运行与回放全流程。

- **[gazebosim/gz-sim](https://github.com/gazebosim/gz-sim)** · ⭐1,425
 Gazebo 家族新一代官方仿真器，是 ROS 2 默认仿真后端。

### 🧠 VLA 与基础模型（视觉-语言-动作 / 具身基础模型）

- **[datawhalechina/every-embodied](https://github.com/datawhalechina/every-embodied)** · ⭐2,860
 从 0 搭建 VLA / OpenVLA / SmolVLA / π₀ 的中文实战教程，是国内具身学习入门首选。

- **[RoboTwin-Platform/RoboTwin](https://github.com/RoboTwin-Platform/RoboTwin)** · ⭐2,629
 ICML 2026 收录的双臂操作仿真基准与平台，强调可扩展、真实物理与多任务。

- **[StanfordVL/BEHAVIOR-1K](https://github.com/StanfordVL/BEH

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*