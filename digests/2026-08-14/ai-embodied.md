# 具身智能开源动态日报 2026-08-14

> 数据来源: GitHub Search API (129 仓库) | ArXiv cs.RO (0 篇论文) | RSS 新闻 (47 条) | 生成时间: 2026-08-14 01:21 UTC

---

# 📅 具身智能开源动态日报

> 日期：2026 年 · IEEE Spectrum / The Robot Report / ROS Discourse / ArXiv / GitHub 综合观察

---

## 1️⃣ 今日速览

今日开源生态呈现出三个清晰信号：**人形机器人正从 Demo 走向量产交付**（RoboBusiness 2026 议题聚焦、Q2 全球机器人需求回升）、**开源 VLA 与具身基础模型加速工程化**（RoboTwin 2.0 进 ICML、Isaac Lab、MuJoCo Warp、Newton 等高性能仿真栈迭代密集）、**"机器人操作系统层"竞争白热化**（Copper-RS、Robonix、PhyAgentOS、RAI、ROSC LAW 等多个 EAIOS/Robot OS 同周活跃）。底层仿真、硬件抽象与上层策略学习三端齐发力，具身智能正从单点突破进入"全栈拼齐"阶段。

---

## 2️⃣ 行业脉搏

- **🤖 人形机器人进入"量产前夜"** — [Experts to discuss the state of humanoid robots at RoboBusiness](https://www.therobotreport.com/experts-discuss-state-humanoid-robots-robobusiness-2026/) 行业头部齐聚 RoboBusiness 2026 讨论量产瓶颈与商业化路径，叠加 [Mobile manipulators and humanoids: The future of robotics](https://www.therobotreport.com/mobile-manipulators-and-humanoids/)，人形与移动操作融合趋势已无悬念。

- **📈 Q2 全球机器人需求全面回暖** — [Q2 2026 robotics demand increased across industries, reports A3](https://www.therobotreport.com/q2-2026-robotics-demand-increased-across-industries-reports-a3/) A3 数据显示订单、营收与出货同步增长，工业自动化先行、汽车与电子跟进，是观察 2026 下半年景气度的关键指标。

- **🦾 灵巧手继续"向人手靠拢"** — [BioflexBot robot hand aims to replicate key human hand motions](https://www.therobotreport.com/bioflexbot-robot-hand-aims-to-replicate-key-human-hand-motions/) 仿生柔性手重新成为投资热点，结合 GitHub 上的 OpenArm、HandUMI 等开源硬件/数据栈，灵巧操作的开源基础设施正在成型。

- **♻️ 机器人回收/再制造场景升温** — [Robot Recycler Salvages Parts From Broken Machines](https://spectrum.ieee.org/recycling-robot) 与 [ARM Institute calls for defense manufacturing technology projects](https://www.therobotreport.com/arm-institute-calls-for-defense-manufacturing-technology-project/) 表明机器人的"非典型落地场景"（拆解回收、军工制造）正获得政策与资本关注。

- **🚁 重载无人机与核心零部件国产化** — [Video Friday: Drones Go Heavy in DARPA Lift Challenge](https://spectrum.ieee.org/video-friday-heavy-lift-drone) 配合 [SEW-EURODRIVE adds economy series to its planetary servo gear unit portfolio](https://www.therobotreport.com/sew-eurodrive-adds-economy-series-planetary-servo-gear-unit-portfolio/)，谐波/行星伺服等核心零部件成本下行将直接降低整机 BOM。

---

## 3️⃣ 研究前沿

> ⚠️ 今日 ArXiv cs.RO 论文源数据为空，无新论文可解读。社区相关研究动态可通过下列论文同步仓库的活跃更新间接观察：**OMG（清华 MARS Lab 通用人形运动生成）**、**W2-VLA（World-to-Wrist 任务条件腕部未来建模）**、**Mimic-Video（视频-动作模型，超越 VLA）**、**SpeedTuning（ICRA 2025）**、**PRIMAL3（基于 RL+IL 的多智能体路径规划）**、**OSCAR（NVIDIA 数据驱动操作空间自适应控制）** 等代码均于本周更新，建议作为今日的"代理研究信号"持续跟进。

---

## 4️⃣ 重点项目

### 🦾 机器人学习与控制

- **[IsaacLab](https://github.com/isaac-sim/IsaacLab)** ⭐7,893 — NVIDIA Isaac Sim 之上的统一机器人学习框架，GPU 并行 + 大规模 sim-to-real，已成为 SOTA 策略学习的默认底座。
- **[RoboVerse](https://github.com/RoboVerseOrg/RoboVerse)** ⭐1,802 — 统一平台、跨具身数据集与基准，专注于可扩展、可泛化的机器人学习，"机器人 ImageNet" 雏形。
- **[OpenArm](https://github.com/enactic/openarm)** ⭐2,846 — 完全开源的人形机械臂，面向接触丰富操作的 Physical AI 研究，是少有的"硬件 + 软件"双开源方案。
- **[Tsinghua-MARS-Lab/OMG](https://github.com/Tsinghua-MARS-Lab/OMG)** ⭐106 — "Omni-Modal Motion Generation for Generalist Humanoid Control"，通用人形控制的多模态生成方案。
- **[ROBOTIS-GIT/cyclo_lab](https://github.com/ROBOTIS-GIT/cyclo_lab)** ⭐139 — 基于 ROBOTIS 真实机器人的 RL/IL 教程与 Sim2Real 部署，对高校与中小团队极友好。
- **[Calibra](https://github.com/omertt27/Calibra)** ⭐13 — 模仿学习的数据集可观测性与 coreset 选择工具，瞄准"数据质量"这一长期被忽视环节。

### 🤖 仿真与框架

- **[newton-physics/newton](https://github.com/newton-physics/newton)** ⭐5,338 — NVIDIA Warp 之上的 GPU 加速物理仿真，专为机器人学家定制，与 MuJoCo Warp、Isaac 并行生态形成互补。
- **[mujocolab/mjlab](https://github.com/mujocolab/mjlab)** ⭐2,793 — Isaac Lab 风格 API、MuJoCo-Warp 加速，把 MuJoCo 拉进 GPU 大规模 RL 时代。
- **[dora-rs/dora](https://github.com/dora-rs/dora)** ⭐3,870 — 数据流驱动的机器人中间件，低延迟、可组合、分布式，定位"AI-native ROS 替代品"。
- **[copper-project/copper-rs](https://github.com/copper-project/copper-rs)** ⭐1,450 — Rust 写的机器人 OS，可确定性回放整段机器人行为，对调试与离线训练非常关键。
- **[robotmcp/ros-mcp-server](https://github.com/robotmcp/ros-mcp-server)** ⭐1,391 — 把 Claude/GPT 经 MCP 接入 ROS，"LLM 操控机器人"的事实标准之一。
- **[ros-navigation/navigation2](https://github.com/ros-navigation/navigation2)** ⭐4,582 — ROS 2 导航框架，任何移动机器人底座绕不开的基建。

### 🧠 VLA 与基础模型

- **[RoboTwin-Platform/RoboTwin](https://github.com/RoboTwin-Platform/RoboTwin)** ⭐2,722 — ICML 2026 收录的 RoboTwin 2.0，VLA 训练最重要的双臂操作数据集/平台之一。
- **[FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA)** ⭐607 — "Data → Real-Robot" 一站式 VLA 工程平台，填补"论文到落地"之间的工具链空白。
- **[allenai/vla-evaluation-harness](https://github.com/allenai/vla-evaluation-harness)** ⭐529 — 一套统一接口评估任意 VLA 在任意机器人/仿真基准上的表现，意义类似 lm-eval-harness 对 LLM。
- **[InternRobotics/VLAC](https://github.com/InternRobotics/VLAC)** ⭐324 — VLA-Critic 模型，把 Critic 思想引入真实机器人 RL，提升策略学习的稳定性。
- **[TensorAuto/OpenTau](https://github.com/TensorAuto/OpenTau)** ⭐198 — PyTorch 下的 VLA 真实世界训练基础设施，反映 VLA 工业化趋势。
- **[lucidrains/mimic-video](https://github.com/lucidrains/mimic-video)** ⭐120 — "Video-Action Model"，尝试把 VLA 之外的视频生成路线用于通用机器人控制，是值得跟踪的方向性工作。

### 🔧 硬件与驱动

- **[ArduPilot/ardupilot](https://github.com/ArduPilot/ardupilot)** ⭐15,685 — 全球最大开源飞控，支持 ArduPlane/Copter/Rover/Sub，无人机生态基石。
- **[PX4/PX4-Autopilot](https://github.com/PX4/PX4-Autopilot)** ⭐12,413 — 与 ArduPilot 并列的工业/学术双主流飞控，ROS 原生集成。
- **[carla-simulator/carla](https://github.com/carla-simulator/carla)** ⭐14,294 — 自动驾驶研究事实标准仿真器，亦被广泛用于 VLA/具身智能数据生成。
- **[autowarefoundation/autoware](https://github.com/autowarefoundation/autoware)** ⭐11,983 — 全球首个自动驾驶开源软件项目，ROS 2 时代的标杆级集成栈。
- **[nasa-jpl/open-source-rover](https://github.com/nasa-jpl/open-source-rover)** ⭐9,575 — JPL 火星漫游车 DIY 复刻，硬件+软件+教程齐全的"教学级行星机器人"。
- **[stack-of-tasks/pinocchio](https://github.com/stack-of-tasks/pinocchio)** ⭐3,653 — 刚体动力学 + 解析导

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*