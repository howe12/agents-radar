# 具身智能开源动态日报 2026-09-14

> 数据来源: GitHub Search API (129 仓库) | ArXiv cs.RO (0 篇论文) | RSS 新闻 (48 条) | 生成时间: 2026-09-14 02:52 UTC

---

# 具身智能开源动态日报

**日期：2026 年 1 月 15 日** | 信息源：IEEE Spectrum、The Robot Report、ROS Discourse、ArXiv cs.RO、GitHub Trending

---

## 一、今日速览

今日机器人行业的焦点继续向**触觉感知**和**具身基础设施**两端延伸：IEEE Spectrum 与 The Robot Report 同步报道了超声触觉与机械臂触觉数据采集的新进展，而 GitHub 端则呈现出 VLA 生态进一步分层（手冊、训练基础设施、评测、数据引擎）的明显态势。`newton-physics/newton`、`mujocolab/mjlab` 与 `omnilink-tech/omnisim` 等多个新锐物理/仿真引擎近期活跃，叠加 `enactic/openarm`、`lipengdong/hei-rebot-lift` 等开源硬件项目，表明具身智能正在从"算法驱动"过渡到"数据—硬件—仿真—评测"四位一体的工程化阶段。

---

## 二、行业脉搏

- **[This Robot Will Draw Your Blood Now](https://spectrum.ieee.org/blood-draw-robot-vitestro-aletta)** — _IEEE Spectrum_
  Vitestro 的 Aletta 自动采血机器人已在欧洲多家医院进入临床评估，标志着医疗机器人从辅助走向**全自主操作**。

- **[Robots Are Learning to Feel](https://spectrum.ieee.org/tactile-data-robots)** — _IEEE Spectrum_
  大规模触觉数据集正在形成，触觉作为"第三模态"与视觉、语言并列，将直接推动接触富集型操作（接触式装配、柔性物体操作）的突破。

- **[Ultrasound offers a scalable path to tactile intelligence for physical AI](https://www.therobotreport.com/ultrasound-offers-scalable-path-tactile-intelligence-physical-ai/)** — _The Robot Report_
  超声传感被证明是低成本、可扩展的触觉方案，与视觉、IMU 融合后可形成"Physical AI"的多模态感知栈。

- **[One brick at a time: How Monumental uses robotics to build walls](https://www.therobotreport.com/one-brick-at-a-time-how-monumental-uses-robotics-to-build-walls/)** — _The Robot Report_
  Monumental 把建筑工地搬进移动机器人+机械臂单元，是户外非结构化环境下长时序自主作业的典型案例。

- **[Video Friday: Humanoid Robot Takes On Monkey Bars](https://spectrum.ieee.org/video-friday-disaster-response-robots)** — _IEEE Spectrum_
  人形机器人在动态、接触富集场景下的全身运动控制取得进展，强化学习/模仿学习驱动的 whole-body control 仍是研究热点。

---

## 三、研究前沿

> ⚠️ 今日 cs.RO 抓取到 0 篇新论文。建议关注昨日或近期高被引论文，本日报将以**项目侧的趋势性论文**作为补充观察：

- **[OMG: Omni-Modal Motion Generation for Generalist Humanoid Control](https://github.com/Tsinghua-MARS-Lab/OMG)**（清华 MARS Lab，arXiv:2606.10340）— 多模态信号驱动的通用人形运动生成，是近期 generalist humanoid control 的代表性工作。

- **[GazeVLA: Learning Human Intention for Robotic Manipulation](https://github.com/lichy2004/GazeVLA)**（CoRL 2026）— 将视线（gaze）作为先验引入 VLA，缩小人类示范与机器人执行之间的意图鸿沟。

- **[MobileVLA-R1: Reinforcing Vision-Language-Action for Mobile Robots](https://github.com/AIGeeksGroup/MobileVLA-R1)**（ECCV 2026）— 把 R1 风格的后训练 RL 应用到移动机器人 VLA，验证 RL 在具身决策中的可扩展性。

- **[INTACT-JEPA](https://github.com/zju3dv/INTACT-JEPA)** — "Isomorphic Intent-to-Action Learning for Search-Free World Models"，探索无搜索的世界模型用于决策，是世界模型赛道的代表项目。

---

## 四、重点项目

###  机器人学习与控制

| 仓库 | Star | 一句话说明 |
|---|---|---|
| [isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab) | ⭐8,115 | 基于 NVIDIA Isaac Sim 的统一机器人学习框架，物理仿真+RL+IL 一体化，已成为行业事实标准之一。 |
| [RLinf/RLinf](https://github.com/RLinf/RLinf) | ⭐5,218 | 面向具身/Agentic AI 的强化学习基础设施，与 RLinf-VLA 等工作配套，定位"机器人 RL 版的 PyTorch"。 |
| [DLR-RM/stable-baselines3](https://github.com/DLR-RM/stable-baselines3) | 13,792 | 可靠、可复现的 PyTorch RL 算法实现，几乎所有具身 RL baseline 的标配。 |
| [TianxingChen/Embodied-AI-Guide](https://github.com/TianxingChen/Embodied-AI-Guide) | ⭐15,956 | Lumina 社区的具身智能技术指南，覆盖从基础到 VLA/OpenVLA 的系统化学习路径。 |
| [datawhalechina/every-embodied](https://github.com/datawhalechina/every-embodied) | 3,677 | 从 0 到 1 动手复现 VLA/OpenVLA/SmolVLA/Pi0 的实战教程，降低具身智能入门门槛。 |
| [StanfordVL/BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K) | ⭐1,691 | 斯坦福 BEHAVIOR-1K 平台，提供 1000+ 日常任务仿真环境，是具身 AI 评测的事实基准之一。 |
| [AccelerationConsortium/Matterix](https://github.com/AccelerationConsortium/Matterix) | ⭐55 | 机器人辅助化学实验室的数字孪生，把具身智能推向"科研自动化"高价值场景。 |

### 🤖 仿真与框架

| 仓库 | Star | 一句话说明 |
|---|---|---|
| [google-deepmind/mujoco](https://github.com/google-deepmind/mujoco) | 15,110 | Multi-Joint dynamics with Contact 通用物理仿真器，机器人研究的事实标准。 |
| [newton-physics/newton](https://github.com/newton-physics/newton) | ⭐5,623 | 基于 NVIDIA Warp 的 GPU 加速开源物理引擎，定位机器人研究的高吞吐仿真。 |
| [mujocolab/mjlab](https://github.com/mujocolab/mjlab) | ⭐3,057 | 在 MuJoCo-Warp 之上提供 Isaac Lab API，对希望从 Isaac 迁出的研究团队极具吸引力。 |
| [cyberbotics/webots](https://github.com/cyberbotics/webots) | ⭐4,623 | 跨平台开源机器人仿真器，长尾教育/研究场景生态成熟。 |
| [gazebosim/gz-sim](https://github.com/gazebosim/gz-sim) | ⭐1,500 | 最新一代 Gazebo 仿真器，ROS 2 默认仿真后端。 |
| [omnilink-tech/omnisim](https://github.com/omnilink-tech/omnisim) | ⭐173 | 支持 HTTP/JSON + MCP 控制的开放机器人仿真器，原生集成 Newton 物理与 ROS 2。 |

### 🧠 VLA 与基础模型

| 仓库 | Star | 一句话说明 |
|---|---|---|
| [sou350121/VLA-Handbook](https://github.com/sou350121/VLA-Handbook) | ⭐610 | 全中文、实战导向的 VLA 学习与面试手册，弥合算法工程师进入 Robotics 的认知差。 |
| [FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA) | 671 | "一站式"VLA 工程平台，覆盖从数据到真机部署全流程，瞄准产业化落地。 |
| [allenai/vla-evaluation-harness](https://github.com/allenai/vla-evaluation-harness) | 603 | 统一在多种仿真基准上评测任意 VLA 模型，是 VLA 走向可比性的关键基础设施。 |
| [TensorAuto/OpenTau](https://github.com/TensorAuto/OpenTau) | 217 | 基于 PyTorch 的真机 VLA 训练基础设施，聚焦数据流、训练范式与真机回归。 |
| [Noietch/EVA-CLIENT](https://github.com/Noietch/EVA-CLIENT) | ⭐208 | 统一真机部署、评测与数据采集框架，是 VLA "最后一公里"工具链的代表。 |
| [AIGeeksGroup/MobileVLA-R1](https://github.com/AIGeeksGroup/MobileVLA-R1) | ⭐115 | 把 R1-style RL 后训练引入移动机器人 VLA，验证 RL 提升具身决策的潜力。 |
| [lichy2004/GazeVLA](https://github.com/lichy2004/GazeVLA) | ⭐41 | CoRL 2026，引入视线先验提升 VLA 对人类意图的建模。 |
| [wadeKeith/SimpleMemVLA](https://github.com/wadeKeith/SimpleMemVLA) | ⭐30 | 用时间戳化视觉记忆实现长时序 VLA，突破上下文窗口限制。 |
| [zju3dv/INTACT-JEPA](https://github.com/zju3dv/INTACT-JEPA) | ⭐186 | 无搜索世界模型 (search-free world model)，通向可预测的具身决策。 |

### 🔧 硬件与驱动

| 仓库 | Star | 一句话说明 |
|---|---|---|
| [enactic/openarm](https://github.com/enactic/openarm) | ⭐3,065 | 完全开源的人形机械臂，专注接触富集场景的物理 AI 研究与部署。 |
| [ArduPilot/ardupilot](https://github.com/ArduPilot/ardupilot) | 15,856 | 飞行/地面/水下机器人成熟开源飞控，机器人硬件抽象层标杆。 |
| [PX4/PX4-Autopilot](https://github.com/PX4/PX4-Autopilot) | ⭐12,608 | 学术界和工业界最广泛使用的开源自驾仪。 |
| [copper-project/copper-rs](https://github.com/copper-project/copper-rs) | ⭐1,488 | Rust 写的机器人 OS，强调确定性构建、运行与回放，对 RL/VLA 部署尤为重要。 |
| [lipengdong/hei-rebot-lift](https://github.com/lipengdong/hei-rebot-lift) | ⭐162 | 基于 LeRobot/ReBot 的双臂+升降+全向底盘移动机器人，整合 VR/MuJoCo/Pinocchio IK 遥操与 VLA 训练。 |
| [murobotics-ai/handumi-hw](https://github.com/murobotics-ai/handumi-hw) | ⭐86 | 戴在手上的 UMI 变体，可在无机器人回路下采集双手操作数据，降低数据门槛。 |
| [Phyzicalorg/Phyzical_org](https://github.com/Phyzicalorg/Phyzical_org) | ⭐277 | 浏览器遥操 + elizaOS-ready episodes + 链上 provenance，专为 Agent-Robot Stack 提供"数据燃料"。 |

### 📊 数据集与基准

| 仓库 | Star | 一句话说明 |
|---|---|---|
| [RoboVerseOrg/RoboVerse](https://github.com/RoboVerseOrg/RoboVerse) | ⭐1,861 | 面向可扩展、可泛化机器人学习的统一平台、数据集与基准。 |
| [Hebbian-Robotics/hflow](https://github.com/Hebbian-Robotics/hflow) | ⭐265 | 面向机器人 AI 训练的数据质量验证 SDK，回应"数据引擎"日益增长的可信度需求。 |
| [Calibra-Robotics/Calibra](https://github.com/Calibra-Robotics/Calibra) | 20 | 模仿学习数据集可观测性与 coreset 选择工具，解决"数据很多但不知道用哪条"的问题。 |
| [AIDASLab/Awesome-VLA-Data-Collection-Synthesis-Curation](https://github.com/AIDASLab/Awesome-VLA-Data-Collection-Synthesis-Curation) | 11 | VLA 数据引擎（采集/合成/增广/管理/预处理/基准）资源汇总，覆盖 robot-centric、UMI、egocentric 与仿真数据。 |
| [chang-xinhai/Awesome-Robot-Data-Engine](https://github.com/chang-xinhai/Awesome-Robot-Data-Engine) | ⭐3 | 跨多模态、多形态的机器人数据引擎论文与基准精选清单。 |

---

## 五、生态趋势信号

过去 7 天开源侧的活跃信号高度收敛：

1. **触觉/物理感知栈正在"标准化"**：新闻端 `Ultrasound offers a scalable path to tactile intelligence` 与 `

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*