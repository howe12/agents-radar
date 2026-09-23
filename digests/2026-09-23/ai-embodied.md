# 具身智能开源动态日报 2026-09-23

> 数据来源: GitHub Search API (130 仓库) | ArXiv cs.RO (30 篇论文) | RSS 新闻 (42 条) | 生成时间: 2026-09-23 02:50 UTC

---

# 具身智能开源动态日报

---

## 今日速览

今日具身智能生态呈现"**底层平台开源 + 端到端仿真闭环 + VLA 工程化**"三股力量交汇态势：行业层，NVIDIA 发布 Isaac ROS 5.0 将 AI Agent 引入机器人开发，Intrinsic 开源平台核心组件，Physical AI 基础设施建设提速；研究层，3D Gaussian Splatting 与生成式仿真持续推动机器人交互环境与驾驶策略闭环评测；项目层，MuJoCo-Warp + IsaacLab + Newton 构成新一代 GPU 加速仿真基座，VLA 全栈工程化项目（FluxVLA、τ0-VLA、VLAC、HEX）密集涌现，具身 Agent 操作系统（Robonix、PhyAgentOS、ros-claw）开始打破传统 ROS 范式。

---

## 行业脉搏

- **[Isaac ROS 5.0 brings AI agents to robotics development, says NVIDIA](https://www.therobotreport.com/isaac-ros-5-0-brings-ai-agents-robotics-development-says-nvidia/)** — NVIDIA 官方将 AI Agent 概念直接嵌入 ROS 中间件，意味着机器人开发从"模块化组件"向"任务驱动的智能体"的范式转变，与 Physical AI 战略形成闭环。

- **[Intrinsic open sources key parts of its platform for easier development](https://www.therobotreport.com/intrinsic-open-sources-key-parts-platform-easier-development/)** — Alphabet 旗下 Intrinsic（曾收购 OSRF 部分资产）持续推进开放策略，将降低工业机器人应用开发门槛，对标 Universal Robots / ROS-Industrial 生态。

- **[Rethinking Robot Safety in the Age of AI](https://spectrum.ieee.org/physical-ai-robot-cybersecurity-vicone)** — 在 Physical AI 浪潮下，传统基于确定性的功能安全（ISO 13849）已不再足够，需建立面向学习式策略的新型安全范式。

- **[Intel to discuss the infrastructure needed to scale physical AI at RoboBusiness](https://www.therobotreport.com/intel-discusses-infrastructure-needed-to-scale-physical-ai-robobusiness/)** — Intel 将参与讨论 Physical AI 基础设施，反映芯片大厂开始正面竞争 NVIDIA 在机器人底层的生态位。

- **[Why outdoor robots fail (and how to build systems that survive)](https://www.therobotreport.com/why-outdoor-robots-fail-how-to-build-systems-that-survive/)** + **[IAC completes autonomous racing event at Laguna Seca](https://www.therobotreport.com/iac-completes-autonomous-racing-event-at-laguna-seca/)** — 室外机器人鲁棒性与高速自主竞赛同步推进，前者解决实际部署痛点，后者验证极限工况下的算法极限。

---

## 研究前沿

- **[φ-RIE: From Photorealistic Reconstruction to Interactive Environments](http://arxiv.org/abs/2609.26795v1)** — 将 3D Gaussian Splatting 从"静态重建"升级为"可交互仿真环境"，为机器人策略学习提供高保真闭环训练场，关联仓库 [rerun-io/rerun](https://github.com/rerun-io/rerun)。

- **[Imperfection for Precision: Upcycling Imperfect Data for High-Precision Robotic Manipulation](http://arxiv.org/abs/2609.26672v1)** — 提出利用"不完美"数据训练高精度 VLA 操作模型，直接回应行业数据稀缺痛点，与 [Hebbian-Robotics/hflow](https://github.com/Hebbian-Robotics/hflow)（数据质量验证 SDK）形成方法论呼应。

- **[NavSafe-∞: Benchmarking Closed-Loop Driving Safety in Photorealistic Environments](http://arxiv.org/abs/2609.26618v1)** — 首个面向"闭环驾驶安全"（而非开环评分）的高保真基准，弥补 E2E 自动驾驶在安全性验证上的关键空白。

- **[Beyond End-Task Success: How to Audit Visual Experience Retrieval in Robotics](http://arxiv.org/abs/2609.26567v1)** — 提出对机器人"经验检索"机制的审计方法，揭示视觉相似性检索在策略复用中可能引入的隐性偏差，对长期运行具身 Agent 至关重要。

- **[Wheel-loader V-Cycle Automation with Deep Koopman MPC](http://arxiv.org/abs/2609.26580v1)** — 将 Koopman 算子与模型预测控制结合，实现工程机械自主 V 形循环作业，展示经典控制方法在重载具身场景中的新生命力。

---

## 重点项目

### 🦾 机器人学习与控制

- **[Unity-Technologies/ml-agents](https://github.com/Unity-Technologies/ml-agents)** ⭐19,697 — Unity 官方开源 RL/IL 训练框架，是游戏化仿真与具身训练的事实标准之一。
- **[Microsoft/agent-lightning](https://github.com/microsoft/agent-lightning)** ⭐18,447 — 微软推出的 Agent 通用训练器，将 RL 流程高度抽象化，加速 Agent 应用迭代。
- **[OpenPipe/ART](https://github.com/OpenPipe/ART)** ⭐10,767 — 基于 GRPO 的多步 Agent 真实任务训练框架，让 RLAIF 思路落地具身/工具调用场景。
- **[OpenRLHF/OpenRLHF](https://github.com/OpenRLHF/OpenRLHF)** ⭐10,035 — 基于 Ray + vLLM 的高性能 Agentic RL 框架，支持 PPO/DAPO/REINFORCE++ 等主流算法。
- **[Isaac-Sim/IsaacLab](https://github.com/isaac-sim/IsaacLab)** ⭐8,200 — NVIDIA 官方机器人学习统一框架，多物理引擎/渲染器支持，是 VLA 训练的主流底座。
- **[DexForce/EmbodiChain](https://github.com/DexForce/EmbodiChain)** ⭐228 — GPU 加速、模块化的通用具身智能全流程平台，适合快速搭建定制化训练流水线。
- **[Motphys/UniLab](https://github.com/Motphys/UniLab)** ⭐942 — 提出"超越 GPU 主导范式"的异构架构机器人 RL 框架，关注国产硬件适配。

### 🤖 仿真与框架

- **[google-deepmind/mujoco](https://github.com/google-deepmind/mujoco)** ⭐15,288 — 通用多关节接触动力学仿真器，物理 AI 时代的"事实标准"。
- **[newton-physics/newton](https://github.com/newton-physics/newton)** ⭐5,677 — 基于 NVIDIA Warp 的开源 GPU 加速物理引擎，专为机器人研究设计。
- **[mujocolab/mjlab](https://github.com/mujocolab/mjlab)** ⭐3,120 — Isaac Lab 风格 API + MuJoCo-Warp 后端，代表新一代 GPU 仿真栈。
- **[rerun-io/rerun](https://github.com/rerun-io/rerun)** ⭐11,484 — 多模态机器人数据的可视化/查询/流式工具，是数据集与策略调试的关键组件。
- **[stack-of-tasks/pinocchio](https://github.com/stack-of-tasks/pinocchio)** ⭐3,752 — 高效刚体动力学库及其解析导数，几乎所有人形机器人 MPC 项目都会用到。
- **[omnilink-tech/omnisim](https://github.com/omnilink-tech/omnisim)** ⭐183 — 新一代面向 Coding Agent 的机器人仿真器，原生集成 MCP 控制 + Newton 物理 + ROS 2。
- **[dora-rs/dora](https://github.com/dora-rs/dora)** ⭐3,978 — Rust 编写的数据流中间件，主打低延迟与可组合分布式节点，正在与 ROS 范式形成竞争。

### 🧠 VLA 与具身基础模型

- **[FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA)** ⭐708 — VLA 全栈工程平台，涵盖数据、真机部署全链路。
- **[sii-research/tau-0-vla](https://github.com/sii-research/tau-0-vla)** ⭐627 — τ0-VLA 官方实现：引入世界模型引导的测试时计算，开创"分层次 + 推理时扩展"的机器人 Foundation Model 范式。
- **[allenai/vla-evaluation-harness](https://github.com/allenai/vla-evaluation-harness)** ⭐622 — 任意 VLA 模型 × 任意仿真基准的统评测框架，对齐 VLA 领域"标准化基准"目标。
- **[InternRobotics/VLAC](https://github.com/InternRobotics/VLAC)** ⭐331 — ICML 2026 提出的 VLA-Critic 模型，将"评论家"引入真机 RL，使 VLA 能在物理世界持续自进化。
- **[Open-X-Humanoid/HEX](https://github.com/Open-X-Humanoid/HEX)** ⭐333 — 面向全身人形机器人的 VLA 框架，向"通用人形"迈出关键一步。
- **[dexmal/opendm](https://github.com/dexmal/opendm)** ⭐2,217 — 开放世界通用具身智能基础模型，目标对齐"具身 GPT 时刻"。
- **[Tsinghua-MARS-Lab/OMG](https://github.com/Tsinghua-MARS-Lab/OMG)** ⭐118 — 清华 MARS Lab 的全模态运动生成，实现通用人形控制。

### 🔧 硬件与驱动

- **[lipengdong/hei-rebot-lift](https://github.com/lipengdong/hei-rebot-lift)** ⭐179 — LeRobot 双臂 + 升降平台 + 全向底盘，集成 VR/MuJoCo/Pinocchio IK 遥控与 VLA 一站式训练/部署。
- **[XenseRobotics-AI/lerobot-xense](https://github.com/XenseRobotics-AI/lerobot-xense)** ⭐20 — LeRobot v5.1 分支，新增 Flexiv Rizon4/Elite CS66/ARX5 + 触觉夹爪 + VR 遥操，硬件兼容性大幅扩展。
- **[murobotics-ai/handumi-sw](https://github.com/murobotics-ai/handumi-sw)** ⭐68 — HandUMI 同步双臂采集 + 重定向开源栈，是具身数据采集工具链的重要补充。
- **[FastCrest/tether](https://github.com/FastCrest/tether)** ⭐84 — 边缘到云端 AI 部署 CLI，覆盖 Jetson/RTX/Apple Silicon/AMD，是 Physical AI "最后一公里"利器。

### 📊 数据集与基准

- **[RoboVerseOrg/RoboVerse](https://github.com/RoboVerseOrg/RoboVerse)** ⭐1,862 — 统一机器人学习平台 + 数据集 + 基准，对标 RT-X 级别生态。
- **[RoboTwin-Platform/RoboTwin](https://github.com/RoboTwin-Platform/RoboTwin)** ⭐2,901 — ICML 2026 RoboTwin 2.0，双臂操作仿真基准的代表项目。
- **[StanfordVL/BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K)** ⭐1,715 — 加速具身 AI 研究的统一基准平台，覆盖 1000+ 日常家务任务。
- **[Calibra-Robotics/Calibra](https://github.com/Calibra-Robotics/Calibra)** ⭐28 — 模仿学习数据集可观测性与核心子集选择工具，直接服务于训练效率提升。
- **[nssmd/RoboRSI](https://github.com/nssmd/RoboRSI)** ⭐91 — 针对 LIBERO 等基准的机器人评测 harness，统一评估入口。

### 🌐 具身智能新范式

- **[syswonder/robonix](https://github.com/syswonder/robonix)** ⭐366 — 用 Rust 打造的"机器人 Agentic OS"，试图在 ROS 之外开辟新操作系统层。
- **[ros-claw/rosclaw](https://github.com/ros-claw/rosclaw)** ⭐203 — 自演化 Physical AI 运行时基础设施，提出 e-URDF、沙箱安全、能力路由等新原语。
- **[PhyAgentOS/PhyAgentOS-core](https://github.com/PhyAgentOS/PhyAgentOS-core)** ⭐2,479 — 递归自改进物理 Agent 操作系统，代表 "Agent 自我迭代 + 物理执行"的新趋势。
- **[RLinf/RLinf](https://github.com/RLinf/RLinf)** ⭐5,350 — 面向具身与 Agentic AI 的 RL 基础设施，正在成为学界共享底座。

---

## 生态趋势信号

三股结构性趋势正在交汇：**底层 GPU 仿真栈加速统一**（Newton + MuJoCo-Warp + IsaacLab），"端到端 VLA

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*