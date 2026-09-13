# 具身智能开源动态日报 2026-09-13

> 数据来源: GitHub Search API (130 仓库) | ArXiv cs.RO (0 篇论文) | RSS 新闻 (48 条) | 生成时间: 2026-09-13 02:36 UTC

---

# 具身智能开源动态日报

**日期**：2025-XX-XX | **信息源**：IEEE Spectrum / The Robot Report / ROS Discourse / ArXiv cs.RO / GitHub

---

## 一、今日速览

今天的开源生态呈现出三大鲜明信号：**触觉感知正成为具身智能的下一个突破口**——IEEE Spectrum 与 The Robot Report 同时聚焦机器人"学会感觉"，超声触觉方案为 Physical AI 提供可扩展路径；**VLA 与世界模型加速融合**，从 GazeVLA、MobileVLA-R1 到多个 Awesome-World-Models 仓库，视觉-语言-动作与生成式世界模型正在重塑机器人学习范式；**机器人操作系统走向 Agentic 化**——RoboNix、ros-claw、rai、RobotecAI 等项目推动 ROS 2 与 LLM/MCP 深度集成，机器人中间件正经历 Agentic 化重构。论文板块今日无新增 cs.RO 论文，但开源仓库生态高度活跃。

---

## 二、行业脉搏

1. **人形机器人挑战灾难响应：Monkey Bars 登场** — [Video Friday](https://spectrum.ieee.org/video-friday-disaster-response-robots)
   IEEE Spectrum 视频专栏聚焦人形机器人在单杠、攀爬等复杂地形中的运动能力突破，标志着双足机器人正从"走稳"迈向"会攀"。

2. **机器人开始"学会感觉"** — [Robots Are Learning to Feel](https://spectrum.ieee.org/tactile-data-robots)
   触觉数据训练成为热点，对应 GitHub 上 `sun254667/awesome-touch` 等触觉资源库的活跃迭代。

3. **超声触觉：Physical AI 的可扩展路径** — [Ultrasound offers a scalable path to tactile intelligence](https://www.therobotreport.com/ultrasound-offers-scalable-path-tactile-intelligence-physical-ai/)
   相比视觉触觉方案，超声波触觉在成本与可制造性上具有显著优势，有望成为通用机器人灵巧手的标配传感方案。

4. **Vitestro Aletta：抽血机器人进入临床** — [This Robot Will Draw Your Blood Now](https://spectrum.ieee.org/blood-draw-robot-vitestro-aletta)
   医疗机器人从概念验证走向真实部署，体现"窄域高精度"机器人商业化路径的可行性。

5. **Monumental：用机器人砌墙** — [One brick at a time](https://www.therobotreport.com/one-brick-at-a-time-how-monumental-uses-robotics-to-build walls/)
   建筑机器人继续在结构化强、可重复的工种中渗透，是具身智能落地的典型代表场景。

6. **农业无人机穿越监管迷雾** — [Hylio drone regulatory landscape](https://www.therobotreport.com/how-hylio-drone-developers-navigate-changing-regulatory-landscape-help-farmers/)
   无人机开发者主动适应 FAA 监管变化，反映低空经济的政策合规正在成为关键瓶颈。

---

## 三、研究前沿

> 📭 **今日 ArXiv cs.RO 暂无新论文收录**。
> 建议关注昨日至本周内仓库生态中已反映出的研究热点：VLA 长期记忆（SimpleMemVLA）、Gaze 引导的人机意图对齐（GazeVLA, CoRL 2026）、移动机器人 VLA 的强化学习路径（MobileVLA-R1, ECCV 2026）、以及基于人类自我中心数据的 World Action Model（EgoWAM, CoRL 2026）。

---

## 四、重点项目

### 🦾 机器人学习与控制
| 仓库 | Star | 说明 |
|---|---|---|
| [RLinf/RLinf](https://github.com/RLinf/RLinf) | ⭐5,180 | 面向具身与 Agentic AI 的强化学习基础设施，提供端到端 RL 训练管线 |
| [isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab) | ⭐8,110 | 基于 NVIDIA Isaac Sim 的统一机器人学习框架，主流 Sim-to-Real 平台 |
| [dora-rs/dora](https://github.com/dora-rs/dora) | ⭐3,932 | Rust 编写的数据流机器人中间件，低延迟、可组合，适合 AI 机器人应用 |
| [RobotControlStack/robot-control-stack](https://github.com/RobotControlStack/robot-control-stack) | ⭐160 | 无 ROS、lean 的 Sim-to-Real 框架，原生 MuJoCo + Gymnasium 封装，支持 Franka/UR5e/xArm/SO101/YAM |
| [RobotControlStack/duobench](https://github.com/RobotControlStack/duobench) | ⭐18 | 双手操作的仿真+真机可复现基准，填补双手操作标准化评测空白 |
| [DLR-RM/stable-baselines3](https://github.com/DLR-RM/stable-baselines3) | ⭐13,787 | PyTorch 可靠 RL 算法实现，机器人研究的事实标准基线 |

### 🤖 仿真与框架
| 仓库 | Star | 说明 |
|---|---|---|
| [google-deepmind/mujoco](https://github.com/google-deepmind/mujoco) | ⭐15,086 | 通用多关节接触物理仿真器，具身学习研究的基石 |
| [carla-simulator/carla](https://github.com/carla-simulator/carla) | ⭐14,391 | 自动驾驶研究开源仿真器标杆 |
| [cyberbotics/webots](https://github.com/cyberbotics/webots) | ⭐4,622 | 开源机器人仿真器，多平台、教育与研究双友好 |
| [gazebosim/gz-sim](https://github.com/gazebosim/gz-sim) | ⭐1,498 | Gazebo 最新版本，ROS 2 默认仿真器 |
| [newton-physics/newton](https://github.com/newton-physics/newton) | ⭐5,613 | 基于 NVIDIA Warp 的 GPU 加速物理仿真引擎，专为机器人学家打造 |
| [mujocolab/mjlab](https://github.com/mujocolab/mjlab) | ⭐3,049 | Isaac Lab API + MuJoCo-Warp 引擎，RL 与机器人研究新基准 |
| [Farama-Foundation/Gymnasium-Robotics](https://github.com/Farama-Foundation/Gymnasium-Robotics) | ⭐1,955 | 面向 RL 的机器人仿真环境集合 |

### 🧠 VLA 与基础模型
| 仓库 | Star | 说明 |
|---|---|---|
| [FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA) | ⭐670 | 一体化 VLA 工程平台，覆盖数据到真机部署全流程 |
| [allenai/vla-evaluation-harness](https://github.com/allenai/vla-evaluation-harness) | ⭐601 | 任意 VLA 模型在任意机器人仿真基准的统一评测框架 |
| [TensorAuto/OpenTau](https://github.com/TensorAuto/OpenTau) | ⭐217 | 基于 PyTorch 的 VLA 训练基础设施，面向真实机器人场景 |
| [lichy2004/GazeVLA](https://github.com/lichy2004/GazeVLA) | ⭐40 | CoRL 2026：从人类视线推断意图，提升机器人操作自然度 |
| [AIGeeksGroup/MobileVLA-R1](https://github.com/AIGeeksGroup/MobileVLA-R1) | ⭐115 | ECCV 2026：用强化学习增强移动机器人 VLA |
| [wadeKeith/SimpleMemVLA](https://github.com/wadeKeith/SimpleMemVLA) | ⭐29 | 原生视频长期记忆机制，解决长时程操作的上下文难题 |
| [OpenMOSS/Awesome-WAM](https://github.com/OpenMOSS/Awesome-WAM) | ⭐1,404 | World Action Models for Embodied AI 论文资源汇编 |
| [knightnemo/Awesome-World-Models](https://github.com/knightnemo/Awesome-World-Models) | ⭐3,410 | 世界模型方向一站式资源，涵盖视频生成、具身与自动驾驶 |

### 🔧 硬件与驱动
| 仓库 | Star | 说明 |
|---|---|---|
| [ArduPilot/ardupilot](https://github.com/ArduPilot/ardupilot) | ⭐15,854 | 全球最成熟的开源飞控，覆盖固定翼/多旋翼/车/潜艇 |
| [PX4/PX4-Autopilot](https://github.com/PX4/PX4-Autopilot) | ⭐12,601 | 学术与工业双友好的开源飞控软件栈 |
| [enactic/openarm](https://github.com/enactic/openarm) | ⭐3,006 | 完全开源的人形机械臂，面向物理 AI 与接触丰富操作研究 |
| [stack-of-tasks/pinocchio](https://github.com/stack-of-tasks/pinocchio) | ⭐3,727 | 刚体动力学及解析导数的高速实现，现代机器人学控制核心库 |
| [ros2-rust/ros2_rust](https://github.com/ros2-rust/ros2_rust) | ⭐1,525 | ROS 2 的 Rust 绑定，机器人系统级语言现代化方向 |
| [copper-project/copper-rs](https://github.com/copper-project/copper-rs) | ⭐1,488 | 机器人操作系统级 Rust 框架，可确定性构建、运行与回放 |

### 📊 数据集与基准
| 仓库 | Star | 说明 |
|---|---|---|
| [StanfordVL/BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K) | ⭐1,689 | 加速具身 AI 研究的标准化平台与基准 |
| [RoboVerseOrg/RoboVerse](https://github.com/RoboVerseOrg/RoboVerse) | ⭐1,859 | 统一平台、数据集与基准，聚焦可扩展通用机器人学习 |
| [Farama-Foundation/Metaworld](https://github.com/Farama-Foundation/Metaworld) | ⭐1,880 | 多任务/元 RL 标准化机器人仿真基准 |
| [Hebbian-Robotics/hflow](https://github.com/Hebbian-Robotics/hflow) | ⭐263 | 机器人团队数据质量验证 SDK，AI 训练数据可观测性基础设施 |
| [Calibra-Robotics/Calibra](https://github.com/Calibra-Robotics/Calibra) | ⭐20 | 模仿学习数据集可观测性与 coreset 选择工具 |
| [AIDASLab/Awesome-VLA-Data-Collection-Synthesis-Curation](https://github.com/AIDASLab/Awesome-VLA-Data-Collection-Synthesis-Curation) | ⭐11 | VLA 数据引擎资源汇编，覆盖采集、合成、增广、清洗全链路 |

---

## 五、生态趋势信号

**触觉 × VLA × Agentic OS 三线并进。** 一方面，IEEE Spectrum 与 The Robot Report 同时将焦点放在触觉感知（血样采集、超声触觉、机器人"学会感觉"），与 `awesome-touch` 等资源型仓库形成上下游呼应，预示触觉即将从感知模块升级为 VLA 模型的关键输入；另一方面，GazeVLA、MobileVLA-R1、SimpleMemVLA 与多个 Awesome-World-Models 项目共同表明，"VLA + 长期记忆 + 强化学习 + 世界模型" 正在形成新一代具身智能基座范式。最具变革性的是 **Agentic OS** 趋势：`syswonder/robonix`（机器人 Agentic OS）、`ros-claw/rosclaw`（Physical AI 自演化运行时）、`RobotecAI/rai`（基于 ROS 2 的 Agentic 框架）、`NVIDIA/skills`（Physical AI 智能体技能）以及 `PhyAgentOS/PhyAgentOS-core`（递归自改进物理 Agent OS），共同标志机器人中间件正从"消息总线"演进为"AI 智能体宿主"，ROS 生态与 LLM/MCP 协议深度融合。

---

## 六、值得关注

1. **🩺 触觉智能走向规模化部署** — 从超声触觉到抽血机器人，触觉不再是研究 demo，而是开始进入真实医疗与工业场景。建议跟进 Vitestro 临床数据、`awesome-touch` 资源迭代，以及 MuJoCo/MJLab 中触觉仿真支持的进展。

2. **🧠 VLA × 世界模型 × 长期记忆** — SimpleMemVLA 用时间戳视频记忆解决长时程操作，EgoWAM 探索用人类自我中心数据训练 WAM，MobileVLA-R1 用 RL 强化 VLA。这一组合在 2026 年 CoRL/ECCV 上集中爆发，是具身基础模型的核心前沿。

3. **⚙️ Agentic OS for Robots** — `robonix`、`rosclaw`、`rai`、`PhyAgentOS` 等项目代表机器人中间件的下一代范式：将 ROS 2 能力路由、沙箱安全、技能进化、物理记忆等 Agentic 原生能力下沉到运行时，是具身智能"软件基础设施"层最值得持续追踪的方向。

---

*日报基于当日公开信息汇总，仅供参考，不构成投资或研究建议。*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*