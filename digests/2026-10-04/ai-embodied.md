# 具身智能开源动态日报 2026-10-04

> 数据来源: GitHub Search API (129 仓库) | ArXiv cs.RO (0 篇论文) | RSS 新闻 (40 条) | 生成时间: 2026-10-04 03:46 UTC

---

# 具身智能开源动态日报

**日期：2025-XX-XX ｜ 主编视角**

---

## 1. 今日速览

今日开源生态呈现出明显的"工程化落地"趋势：硬件侧，Atlas 新一代灵巧手提出非仿人化设计路径，为高负载抓取场景打开新思路；模型侧，Runway 发布 Praxis-1 世界动作模型，加上 Black Forest Labs 开源的 7B 参数 FLUX 3 Action，"世界动作模型（World Action Model）"阵营再添新玩家；平台侧，MuJoCo-Warp + Newton 等 GPU 加速物理引擎持续重构仿真栈底层，而 VLA 评估与工程化仓库（FluxVLA、vla-evaluation-harness、inspect-robots）的集中活跃，预示 VLA 正从"模型发布"走向"工程闭环"。cs.RO 今日无新增论文，建议关注明日 arXiv 刷新。

---

## 2. 行业脉搏

- **Atlas 机器人新灵巧手挑战仿人化设计路线** — [IEEE Spectrum](https://spectrum.ieee.org/robust-robot-hand) — Boston Dynamics 转向非五指仿人手方案，强调工业级可靠性与负载能力，是人形机器人末端执行器从"演示酷炫"走向"产线可用"的关键信号。

- **Runway 发布 Praxis-1 世界动作模型** — [The Robot Report](https://www.therobotreport.com/runway-introduces-praxis-1-world-action-model-robotics/) — 视频生成公司跨界机器人基础模型，体现"世界动作模型"正在成为继 VLA 之后的新一代跨模态控制抽象。

- **Physical AI 竞赛的胜负将在专利局见分晓** — [The Robot Report](https://www.therobotreport.com/physical-ai-race-will-be-won-in-patent-office/) — 提示业内关注具身智能不仅是模型与硬件竞争，更是专利与数据资产布局的长期博弈。

- **Omron 推出新一代 LD 移动机器人** — [The Robot Report](https://www.therobotreport.com/inside-omrons-next-generation-ld-mobile-robots/) — 工业 AMRG 头部厂商迭代，反映仓储自动化对更高负载、更长续航、更好协作安全性的持续需求。

- **Eli Lilly × Purdue 在 RoboBusiness 分享 HRI 现场经验** — [The Robot Report](https://www.therobotreport.com/eli-lilly-purdue-to-share-field-learnings-on-human-robot-interaction-at-robobusiness/) — 制药龙头与高校联合输出 HRI 一线数据，医疗/制药实验室成为具身智能的重要落地场景。

---

## 3. 研究前沿

> ⚠️ 今日 arXiv cs.RO 暂无新增提交。建议留意明日 arXiv 刷新窗口，并追踪近期已开放的高影响力项目（如 OpenDriveLab/RoboNaldo、UCLA TIC-VLA、PKU EagleVLA-Edge、Calibra 等）的论文配套 release。

---

## 4. 重点项目

### 🦾 机器人学习与控制
| 仓库 | ⭐ | 核心价值 |
|---|---|---|
| [RLinf/RLinf](https://github.com/RLinf/RLinf) | 5,429 | 面向具身与 Agentic AI 的强化学习基础设施，把大规模 RL 训练栈抽象成统一 API，是 RL on Embodiment 的"操作系统级"工程底座。 |
| [RoboVerseOrg/RoboVerse](https://github.com/RoboVerseOrg/RoboVerse) | 1,865 | 统一平台 + 数据集 + 基准三位一体，专注可扩展、可泛化的机器人学习评测。 |
| [StanfordVL/BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K) | 1,732 | 1,000 个日常任务的具身 AI 基准，是当前最被广泛采用的 household 操控基准之一。 |
| [simpler-env/SimplerEnv](https://github.com/simpler-env/SimplerEnv) | 1,174 | 可复现真实操控策略（RT-1、Octo 等）到仿真环境的迁移评测框架（CoRL 2024）。 |

### 🤖 仿真与框架
| 仓库 | ⭐ | 核心价值 |
|---|---|---|
| [google-deepmind/mujoco](https://github.com/google-deepmind/mujoco) | 15,450 | 机器人研究的事实标准物理仿真器，Warp GPU 后端持续强化大规模 RL 适配。 |
| [isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab) | 8,272 | NVIDIA 推出的统一机器人学习框架，整合多物理场与多渲染后端，是当下 industrial-academic RL 默认平台之一。 |
| [newton-physics/newton](https://github.com/newton-physics/newton) | 5,716 | 基于 NVIDIA Warp 的 GPU 加速物理引擎，专为机器人学家打造的可微分仿真基础设施。 |
| [mujocolab/mjlab](https://github.com/mujocolab/mjlab) | 3,163 | 基于 MuJoCo-Warp 重新实现的 Isaac Lab API，让研究者以更低门槛使用 GPU 并行 RL。 |
| [gazebosim/gz-sim](https://github.com/gazebosim/gz-sim) | 1,529 | Gazebo 下一代主版本，ROS 2 默认仿真器之一，生态绑定深厚。 |
| [dora-rs/dora](https://github.com/dora-rs/dora) | 3,992 | 面向 AI 机器人的 Dataflow-Oriented 中间件，Rust 实现，强调低延迟与可组合管线。 |

### 🧠 VLA 与基础模型
| 仓库 | ⭐ | 核心价值 |
|---|---|---|
| [FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA) | 722 | "数据 → 真机部署"端到端 VLA 工程平台，显著降低 VLA 上车门槛。 |
| [allenai/vla-evaluation-harness](https://github.com/allenai/vla-evaluation-harness) | 634 | 跨 VLA 模型、跨机器人、跨仿真基准的统一评测框架，是 VLA 走向"可比较"的关键。 |
| [black-forest-labs/flux-action](https://github.com/black-forest-labs/flux-action) | 123 | 开源 7B 参数 FLUX 3 Action 世界动作模型，支持 DROID / SO-101 等场景的微调与推理。 |
| [PhyAgentOS/PhyAgentOS-core](https://github.com/PhyAgentOS/PhyAgentOS-core) | 2,684 | 递归自改进的物理智能体操作系统，代表"agentic OS + 具身"的前沿融合探索。 |

### 🔧 硬件与驱动
| 仓库 | ⭐ | 核心价值 |
|---|---|---|
| [commaai/openpilot](https://github.com/commaai/openpilot) | 63,802 | 已部署于 300+ 车型的辅助驾驶操作系统，是机器人化软件栈最成熟的样本。 |
| [ArduPilot/ardupilot](https://github.com/ArduPilot/ardupilot) | 15,977 | 覆盖 ArduPlane/Copter/Rover/Sub 的开源飞控事实标准。 |
| [PX4/PX4-Autopilot](https://github.com/PX4/PX4-Autopilot) | 12,736 | 学术与工业无人机首选飞控软件栈。 |
| [enactic/openarm](https://github.com/enactic/openarm) | 3,559 | 全开源人形机械臂，面向物理 AI 在接触丰富环境下的研究部署，是社区罕见的"开源硬件 + 仿真"完整方案。 |

### 📊 数据集与基准
| 仓库 | ⭐ | 核心价值 |
|---|---|---|
| [robocurve/inspect-robots](https://github.com/robocurve/inspect-robots) | 636 | 物理 AI 开源评测：任意 LLM/VLA × 任意机械臂/人形 × 任意真机/仿真基准。 |
| [OpenDriveLab/RoboNaldo](https://github.com/OpenDriveLab/RoboNaldo) | 54 | CoRL 2026 Oral，人形机器人足球射门基准，关注精度与稳定性。 |
| [Calibra-Robotics/Calibra](https://github.com/Calibra-Robotics/Calibra) | 34 | 数据可观测性与 coreset 选择，面向机器人模仿学习的"数据质量"工具。 |

---

## 5. 生态趋势信号

本周开源信号呈现三条清晰主线：第一，**世界动作模型（World Action Model）正在成为 VLA 之后的新一代控制抽象**——Runway 的 Praxis-1 与 Black Forest Labs 的 FLUX 3 Action 同周亮相，加上 PhyAgentOS 这种"自改进物理 Agent OS"出现，意味着控制层正从"动作头"向"完整世界动力学"演化。第二，**仿真栈底座完成 GPU 化重构**——Newton、Warp、MuJoCo-Warp、mjlab、Isaac Lab 多点并进，传统 CPU 物理仿真正在被可微分 + GPU 并行的新一代引擎取代。第三，**VLA 进入"工程化闭环"阶段**——FluxVLA、vla-evaluation-harness、inspect-robots、EagleVLA-Edge 的协同活跃表明，社区关注点已从"模型 SOTA"转向"数据—训练—部署—评测"全链路质量。

---

## 6. 值得关注

1. **Black Forest Labs / FLUX 3 Action（[仓库](https://github.com/black-forest-labs/flux-action)）** — 首个真正开源权重（7B）的世界动作模型，且支持 DROID / SO-101 等真机场景微调。若后续评测验证其泛化性，可能成为具身基础模型社区的基线模型

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*