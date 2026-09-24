# 具身智能开源动态日报 2026-09-24

> 数据来源: GitHub Search API (130 仓库) | ArXiv cs.RO (30 篇论文) | RSS 新闻 (44 条) | 生成时间: 2026-09-24 02:40 UTC

---

# 具身智能开源动态日报

---

## 1. 今日速览

今日具身智能生态呈现"产业整合 + 学术深耕 + 基础设施下沉"三重信号。产业端，高通宣布收购 MoveIt 开源核心维护方 **PickNik Robotics**，并承诺继续维护开源生态，这是头部芯片厂商对机器人中间件层罕见的关键卡位；学术界，**LiMA**、**PointCast**、**Frozen Flows Forget** 三篇论文分别从异步扩散世界模型、统一刚体/铰接/可变形物体预测、潜空间流记忆衰退三个角度推动"长时想象 + 实时反应"的边界；工程端，Arduino 发布面向机器人开发的 **VENTUNO Q** 开发板，反映"具身智能下沉至边缘端硬件"的明确趋势。

---

## 2. 行业脉搏

- **[Qualcomm 收购 PickNik Robotics，并承诺 MoveIt 持续开源](https://www.therobotreport.com/qualcomm-acquires-picknik-robotics-keep-moveit-open-source/)** — 继 ROS 2 之后，机器人运动规划领域最具影响力的开源项目 MoveIt 的母公司被高通收购，对机器人开发者社区具有里程碑式意义：芯片大厂正在将"中间件 + 规划算法 + 边缘算力"整合为一体化方案。
- **[State of Humanoids 主题演讲齐聚 RoboBusiness 行业领袖](https://www.therobotreport.com/state-of-humanoids-keynote-brings-industry-leaders-robobusiness/)** — 人形机器人从概念热走向产业协同讨论阶段，行业正在收敛共识：哪些任务真正可商业化、硬件路线如何分化。
- **[Arduino 发布 VENTUNO Q 板，简化机器人开发](https://www.therobotreport.com/new-ventuno-q-board-arduino-hopes-make-robotics-development-easier/)** — 主流嵌入式厂商主动拥抱机器人场景，标志着教育/原型开发板与机器人主控的边界正在融合。
- **[Intel 在 RoboBusiness 讨论 Physical AI 规模化所需的基础设施](https://www.therobotreport.com/intel-discusses-infrastructure-needed-to-scale-physical-ai-robobusiness/)** — 基础设施层（仿真、数据、训练、部署）成为 Physical AI 下一个瓶颈，而非模型本身。
- **[Barbara Mazzolai 呼吁建立可持续机器人学新领域](https://spectrum.ieee.org/sustainability-robotics-barbara-mazzolai)** — 仿生 + 可持续（材料、能源、生命周期）正在成为机器人学的新维度，而非单纯追逐性能。

---

## 3. 研究前沿

- **[LiMA: 通过异步扩散桥接长期想象与实时灵巧操控](http://arxiv.org/abs/2609.28431v1)** — 提出长期规划与高频反应解耦的异步架构，为 VLA 模型在高速灵巧操作任务上的落地提供新路径。
- **[PointCast: 面向刚体 / 铰接 / 可变形物体操控的统一世界模型](http://arxiv.org/abs/2609.28393v1)** — 用一个世界模型覆盖多类物体动力学，显著降低多任务策略迁移的工程复杂度。
- **[Watch, Recall, Act: Always-On 机器人在并发具身流中的运行](http://arxiv.org/abs/2609.28429v1)** — 直面"长开机器人"在不停顿流式输入下的持续记忆与决策问题，是家用服务机器人的关键使能技术。
- **[Frozen Flows Forget: 诊断并恢复潜空间流世界模型中的运动遗忘](http://arxiv.org/abs/2609.28414v1)** — 系统揭示了"冻结自监督潜空间 + 流预测"组合的隐藏缺陷并给出修复方案，对世界模型训练稳定性具有方法论价值。
- **[ForgetMimic: 人形机器人 RL 控制的运动遗忘](http://arxiv.org/abs/2609.28378v1)** — 借鉴机器学习中"unlearning"思路，让人形机器人可控地去除演示中冗余/有害动作，提升模仿-强化混合训练的可控性。

---

## 4. 重点项目

### 🦾 机器人学习与控制

| 项目 | ⭐ | 简介 |
|---|---|---|
| **[isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab)** | 8,211 | NVIDIA 主导、面向机器人学习的多物理+多渲染统一框架，是当前 Sim2Real 训练的事实标准入口之一。 |
| **[RLinf/RLinf](https://github.com/RLinf/RLinf)** | 5,364 | 面向具身智能与 Agentic AI 的强化学习基础设施，把大规模 RL 训练工程化推向下一阶段。 |
| **[newton-physics/newton](https://github.com/newton-physics/newton)** | 5,682 | 基于 GPU 加速的物理仿真引擎，瞄准机器人物理保真度与吞吐量的下一代基线。 |
| **[dora-rs/dora](https://github.com/dora-rs/dora)** | 3,980 | 数据流驱动的机器人中间件，低延迟、可组合，特别适合 AI 化机器人应用的快速编排。 |
| **[PhyAgentOS/PhyAgentOS-core](https://github.com/PhyAgentOS/PhyAgentOS-core)** | 2,484 | 递归自我改进的物理 Agent 操作系统雏形，探索"会自己进化的具身 Agent"基础设施。 |
| **[Tsinghua-MARS-Lab/OMG](https://github.com/Tsinghua-MARS-Lab/OMG)** | 118 | 通用人形机器人控制的全模态运动生成官方实现（CoRL 路线）。 |

### 🤖 仿真与框架

| 项目 | ⭐ | 简介 |
|---|---|---|
| **[google-deepmind/mujoco](https://github.com/google-deepmind/mujoco)** | 15,310 | 接触动力学的事实标准物理仿真器，几乎所有现代 RL/操控论文都依赖它。 |
| **[ArduPilot/ardupilot](https://github.com/ArduPilot/ardupilot)** | 15,922 | 全球最广泛部署的开源飞控，覆盖无人机/无人车/无人艇，是户外机器人平台的基线。 |
| **[PX4/PX4-Autopilot](https://github.com/PX4/PX4-Autopilot)** | 12,683 | 学术与工业级飞控生态核心，与 ROS 2 深度集成。 |
| **[carla-simulator/carla](https://github.com/carla-simulator/carla)** | 14,424 | 自动驾驶研究的开源仿真事实标准之一。 |
| **[cyberbotics/webots](https://github.com/cyberbotics/webots)** | 4,653 | 老牌开源机器人仿真器，跨平台、教学友好。 |
| **[gazebosim/gz-sim](https://github.com/gazebosim/gz-sim)** | 1,511 | Gazebo 新一代仿真器，ROS 生态的官方仿真基座。 |

### 🧠 VLA 与基础模型

| 项目 | ⭐ | 简介 |
|---|---|---|
| **[harvard-edge/cs249r_book](https://github.com/harvard-edge/cs249r_book)** | 28,428 | 哈佛《机器学习系统》系列教材新增"Physical AI"卷，构建从芯片到具身的系统化知识地图。 |
| **[dexmal/opendm](https://github.com/dexmal/opendm)** | 2,220 | 面向通用具身智能的开放世界基础模型，探索"一个大脑多种身体"路线。 |
| **[RoboTwin-Platform/RoboTwin](https://github.com/RoboTwin-Platform/RoboTwin)** | 2,908 | RoboTwin 2.0（ICML 2026），大规模双臂操控基准与数据生成器。 |
| **[FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA)** | 710 | 一体化 VLA 工程平台，覆盖从数据采集到真机部署全流程。 |
| **[sii-research/tau-0-vla](https://github.com/sii-research/tau-0-vla)** | 627 | τ0-VLA：分层机器人基础模型，引入世界模型引导的测试时计算。 |
| **[InternRobotics/VLAC](https://github.com/InternRobotics/VLAC)** | 331 | ICML 2026：VLA-Critic，将 Critic 机制引入真机强化学习闭环。 |
| **[Open-X-Humanoid/HEX](https://github.com/Open-X-Humanoid/HEX)** | 333 | 全尺寸人形机器人的全身 VLA 框架，把视觉-语言-动作延伸到全身协同。 |

### 🔧 硬件与驱动

| 项目 | ⭐ | 简介 |
|---|---|---|
| **[stack-of-tasks/pinocchio](https://github.com/stack-of-tasks/pinocchio)** | 3,755 | 刚体动力学与解析导数的高速实现，是 MPC/优化的关键底层。 |
| **[ros2-rust/ros2_rust](https://github.com/ros2-rust/ros2_rust)** | 1,529 | Rust 绑定 ROS 2，推动高安全/高性能机器人节点现代化。 |
| **[ArduPilot/MissionPlanner](https://github.com/ArduPilot/MissionPlanner)** | 2,377 | ArduPilot 配套地面站，是无人机/无人车工程化的标配工具。 |

### 📊 数据集与基准

| 项目 | ⭐ | 简介 |
|---|---|---|
| **[StanfordVL/BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K)** | 1,720 | 加速具身 AI 研究的开放平台与基准，覆盖大规模日常任务。 |
| **[RoboVerseOrg/RoboVerse](https://github.com/RoboVerseOrg/RoboVerse)** | 1,862 | 统一平台、数据集与基准，推动机器人学习的规模化与泛化评测。 |
| **[Datawhalechina/every-embodied](https://github.com/datawhalechina/every-embodied)** | 3,829 | 中文社区从 0 搭建具身智能机器人的实战教程，含 VLA/OpenVLA/SmolVLA/Pi0 完整链路。 |
| **[inspect-robots](https://github.com/robocurve/inspect-robots)** | 596 | 物理 AI 开源评测：任意 LLM/VLA × 任意机械臂/人形 × 任意真机/仿真。 |
| **[sou350121/VLA-Handbook](https://github.com/sou350121/VLA-Handbook)** | 650 | 中文 VLA 全栈手册，面向算法工程师的实战/面试指南。 |

---

## 5. 生态趋势信号

从今日三条信息流叠加看，具身智能生态正在从"模型为中心"快速过渡到"基础设施为中心"。**高通收购 PickNik、Intel 谈 Physical AI 基础设施、Arduino 做机器人开发板**，三件事共同指向一个判断：决定具身智能能否大规模落地的，不再是 VLA 模型架构，而是"中间件 + 边缘算力 + 仿真数据 + 部署工具链"这条全栈。与此同时，学术端 **LiMA、PointCast、Watch-Recall-Act** 等论文表明，长时规划与实时反应、多种物体动力学统一建模、持续在线学习等"系统级难题"正取代"单任务 SOTA"成为主流方向；GitHub 端 **dora、RLinf、PhyAgentOS、mujocolab** 等新一代中间件/训练栈的活跃，则预示着机器人版的"操作系统之争"已悄然开启。

---

## 6. 值得关注

1. **高通 × PickNik（MoveIt）整合进展** — 头部芯片厂商罕见地直接持有机器人运动规划核心开源资产，未来 MoveIt 与高通 RB 系列平台的深度协同，可能重塑机器人开发的算力 + 规划栈分层，值得所有 ROS/ROS 2 用户持续关注：[Qualcomm 收购公告](https://www.therobotreport.com/qualcomm-acquires-picknik-robotics-keep-moveit-open-source/)。

2. **LiMA 的异步扩散架构** — 它首次明确把"长期想象"与"高频灵巧操控"放到一个可训练框架内对齐，是 VLA 模型迈向"既快又远"的关键一步，相关异步 + 世界模型范式大概率会被后续人形机器人论文广泛跟进：[arXiv 2609.28431](http://arxiv.org/abs/2609.28431v1)。

3. **PhyAgentOS-core 与 PhyAgentOS 提出的"递归自我改进物理 Agent"** — 一旦成熟，意味着机器人不再依赖外部大规模再训练即可在部署端持续进化，这是具身 AI 从"工具"走向"自主体"的潜在临界点：[GitHub 链接](https://github.com/PhyAgentOS/PhyAgentOS-core)。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*