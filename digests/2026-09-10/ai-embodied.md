# 具身智能开源动态日报 2026-09-10

> 数据来源: GitHub Search API (130 仓库) | ArXiv cs.RO (30 篇论文) | RSS 新闻 (50 条) | 生成时间: 2026-09-10 02:36 UTC

---

# 具身智能开源动态日报
**日期：2026 年 9 月 · 编排：具身智能分析师**

---

## 一、今日速览

今日三大信号交织——**人形机器人资本市场降温、开源仿真基础设施加速分层、VLA 与世界模型生态持续扩张**。商业侧 Unitree 股价较 IPO 跌 53%，与 AGIBOT 即将在 RoboBusiness 公开"实验室走向真实世界"的规模化路径形成鲜明对照；研究侧 Cs.RO 集中涌现可形变物体操控、人形机器人地形适应与多模态融合的工作；开源侧 MuJoCo / Newton / IsaacLab 三套仿真栈并立，VLA 训练与评测工程化（FluxVLA、OpenTau、vla-evaluation-harness）成为新焦点。整体看，2026 年下半年具身智能正从"演示惊艳"转向"基础设施与商业兑现"双线推进。

---

## 二、行业脉搏

- **Unitree 股价较 IPO 高点回撤 53%** — 人形机器人商业化路径尚未跑通，资本市场对量产与盈利能力存疑，是行业最重要的风向标事件。🔗 https://www.therobotreport.com/unitree-shares-down-53-from-ipo-debut/

- **AGIBOT 将在 RoboBusiness 分享"实验室到真实世界"的人形机器人规模化方法** — 头部中国玩家首次系统披露量产、部署与迭代节奏，对全球具身创业公司具方法论意义。🔗 https://www.therobotreport.com/agibot-share-plans-scale-humanoids-from-lab-to-real-world-at-robobusiness/

- **Monumental：从砌砖场景学到的"机器人施工"经验** — 真实建筑工地揭示了感知不确定性、协作流与节拍匹配等核心痛点，对所有在非结构化场景落地的具身方案都有借鉴价值。🔗 https://www.therobotreport.com/what-bricklaying-has-taught-monumental-about-robots-construction/

- **Vitestro Aletta：抽血机器人进入临床** — 医疗具身 AI 进入"细分高价值场景 + 监管路径清晰"的新阶段，是医疗自动化里程碑。🔗 https://spectrum.ieee.org/blood-draw-robot-vitestro-aletta

- **Digit "重新装饰"家庭环境** — Agility 的人形机器人首次展示长时间家居作业能力，体现双足机器人在非结构化生活场景的可用性跃升。🔗 https://spectrum.ieee.org/video-friday-agility-robotics-digit

---

## 三、研究前沿

1. **CAMF：面向工业人机协作的置信度感知多模态融合框架**
   Xinyu Liu, Qiqi Dong 等
   工业 HRC 中人类意图预测长期受传感器噪声与遮挡影响，论文提出置信度驱动的多模态融合机制，让系统能"知道自己不知道什么"，对协作机器人安全部署意义重大。
   🔗 http://arxiv.org/abs/2609.10339v1

2. **部分可观测下可形变物体操控的实时全形状估计**
   Kosar Behnia, Ville Kyrki 等
   针对线缆、布料等高维状态、欠驱动动力学的可形变物体，提出实时全形状状态估计，是把 DOTS 任务从演示级推向产品级的关键模块。
   🔗 http://arxiv.org/abs/2609.10308v1

3. **颗粒地形上的人形机器人地形自适应运动**
   Junnosuke Kamohara, Feiyang Wu 等
   沙地、碎石等颗粒介质上足-地相互作用极难建模，论文给出从仿真到真机的迁移方案，是 Unitree / Figure 类人形机器人户外作业的底层能力。
   🔗 http://arxiv.org/abs/2609.10286v1

4. **SwingBot：人形机器人的全身摆荡运动学习**
   Yujie Xiong, Peng Zhai 等
   把灵长类"臂跃"行为迁移到人形机器人，给出了一种全新的无地面路径移动模态，对复杂三维环境（灾后、丛林、工厂多层）极具价值。
   🔗 http://arxiv.org/abs/2609.10283v1

5. **FolDeX：可形变物体长程操控的物理世界基准**
   Chenhuan Liu, Yi Xu 等
   首个面向物理世界长程可形变物体操控的基准，弥合了 VLA / 世界-动作模型在"实验室演示"与"工业真实场景"之间的评测鸿沟。
   🔗 http://arxiv.org/abs/2609.10243v1

---

## 四、重点项目

### 🦾 机器人学习与控制

- **TianxingChen/Embodied-AI-Guide** ⭐15,889
  Lumina 社区出品的具身智能技术全景指南，涵盖 VLA、World Model、硬件与论文清单，是中文社区最具影响力的入门与索引资源。
  🔗 https://github.com/TianxingChen/Embodied-AI-Guide

- **RLinf/RLinf** ⭐5,005
  面向具身与 Agentic AI 的强化学习基础设施，把 RL 训练栈与机器人 / Agent 任务统一抽象，是大规模 RL-for-Robotics 时代的工程底座。
  🔗 https://github.com/RLinf/RLinf

- **datawhalechina/every-embodied** ⭐3,624
  从 Python 基础出发，逐步构建 VLA / OpenVLA / SmolVLA / Pi0，是中文世界最系统的"从零学具身"实战教程。
  🔗 https://github.com/datawhalechina/every-embodied

- **StanfordVL/BEHAVIOR-1K** ⭐1,689
  1K 任务规模的家用具身仿真平台，配套完整数据集与基准，是 VLA / 世界模型训练与评测的事实标准之一。
  🔗 https://github.com/StanfordVL/BEHAVIOR-1K

- **DexForce/EmbodiChain** ⭐223
  端到端、GPU 加速、模块化的通用具身智能平台，支持快速复用与定制，适合作为二次开发底座。
  🔗 https://github.com/DexForce/EmbodiChain

- **RobotControlStack/robot-control-stack** ⭐158
  无 ROS、Sim-to-Real 的轻量级 VLA / RL 训练框架，原生支持 Franka / UR5e / xArm / SO101 / YAM，是研究员快速迭代策略的利器。
  🔗 https://github.com/RobotControlStack/robot-control-stack

### 🤖 仿真与框架

- **google-deepmind/mujoco** ⭐15,023
  通用多关节接触物理仿真引擎，是具身研究的事实标准底层之一，生态完整、性能稳健。
  🔗 https://github.com/google-deepmind/mujoco

- **isaac-sim/IsaacLab** ⭐8,086
  基于 NVIDIA Isaac Sim 的统一机器人学习框架，支持大规模 GPU 并行 RL 与 IL，已成为人形 / 机械臂研究的主流实验场。
  🔗 https://github.com/isaac-sim/IsaacLab

- **newton-physics/newton** ⭐5,604
  基于 NVIDIA Warp、面向机器人学与仿真研究的开源 GPU 加速物理引擎，是 MuJoCo / Isaac 之外的新一代开源仿真选项。
  🔗 https://github.com/newton-physics/newton

- **dora-rs/dora** ⭐3,929
  面向 AI 机器人的 Dataflow-Oriented 中间件，强调低延迟、可组合、分布式，是 ROS 之外机器人数据流编排的现代 Rust 候选。
  🔗 https://github.com/dora-rs/dora

- **mujocolab/mjlab** ⭐3,025
  基于 MuJoCo-Warp 的 Isaac Lab 风格 API，为 RL 与机器人研究提供新一代仿真接口，衔接两套主流生态。
  🔗 https://github.com/mujocolab/mjlab

- **Farama-Foundation/Gymnasium-Robotics** ⭐1,953
  Gymnasium 之上的机器人仿真环境合集，是 RL 算法基准测试的事实标准。
  🔗 https://github.com/Farama-Foundation/Gymnasium-Robotics

- **google-deepmind/dm_control** ⭐4,688
  DeepMind 基于 MuJoCo 的物理仿真 + RL 环境栈，控制类研究必看。
  🔗 https://github.com/google-deepmind/dm_control

- **gazebosim/gz-sim** ⭐1,495
  Gazebo 的最新一代开源机器人仿真器，ROS 生态默认仿真器。
  🔗 https://github.com/gazebosim/gz-sim

### 🧠 VLA 与基础模型

- **RoboTwin-Platform/RoboTwin** ⭐2,834
  ICML 2026 收录的 RoboTwin 2.0 官方仓库，提供双臂操控的合成数据生成与基准，是 VLA 训练最重要的开源数据引擎之一。
  🔗 https://github.com/RoboTwin-Platform/RoboTwin

- **PhyAgentOS/PhyAgentOS-core** ⭐2,143
  递归自我改进（RSI）的物理 Agent 操作系统，把"自我进化"概念落地到机器人本体，代表 Agentic Robotics 方向。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*