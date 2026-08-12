# 具身智能开源动态日报 2026-08-12

> 数据来源: GitHub Search API (128 仓库) | ArXiv cs.RO (0 篇论文) | RSS 新闻 (47 条) | 生成时间: 2026-08-12 01:20 UTC

---

# 具身智能开源动态日报

> 数据来源：IEEE Spectrum、The Robot Report、ROS Discourse、ArXiv cs.RO、GitHub Trending

---

## 📌 今日速览

今日具身智能领域呈现"**资本聚拢 + 工程化深耕**"的双线格局：产业端，Cambridge Aerospace 斩获 3 亿美元防务无人机融资、Hadrian 完成 13.7 亿美元国防制造融资，加之 The Robot Report 对 3700 亿美元人形机器人市场的专题分析，标志美方在战略级机器人赛道持续加码；工程端，GitHub 上 VLA 训练与评估栈（FluxVLA、OpenTau、inspect-robots）、物理 AI 运行时（ros-claw、PhyAgentOS、copper-rs）密集活跃。**值得注意的是，"具身 AI 操作系统"概念正从概念走向代码化**，LLM 闭环、物理记忆、运行时干预成为新焦点。

---

## 🏛️ 行业脉搏

- **[Cambridge Aerospace 完成 3 亿美元融资，加码防务无人机开发](https://www.therobotreport.com/defense-drone-developer-cambridge-aerospace-raises-300m/)** — DARPA Lift Challenge 同期进行，重型无人机赛道资本与技术同步升温，验证"国防即机器人最大单一客户"判断。
- **[Hadrian 融资 13.7 亿美元，加速美国国防与航空航天制造](https://www.therobotreport.com/hadrian-raises-1-37b-accelerate-u-s-manufacturing/)** — 自动化精密制造工厂获巨额资本背书，体现"机器人即基础设施"的国家级战略定位。
- **[The 3700 亿美元竞赛：集成设计如何助人形机器人厂商胜出](https://www.therobotreport.com/the-370-billion-dollar-race-how-integrated-design-can-help-humanoid-manufacturers-succeed-in-a-rapidly-growing-market/)** — 给出人形机器人总市场规模预测，强调从执行器到整机的"一体化设计"是胜出关键。
- **[PlusAI 在自动驾驶卡车启动前夕达成关键里程碑](https://www.therobotreport.com/plusai-reaches-key-milestones-ahead-launch-autonomous-trucks/)** — L4 商用车干线物流落地节奏加快，与 Waymo、Embark 等形成新一轮竞速。
- **[RoboStore 推出 Robo Inc.，帮助美国组织部署机器人](https://www.therobotreport.com/robostore-launches-robo-inc-to-help-u-s-organizations-deploy-robots/)** — "机器人即服务（RaaS）"模式进一步向美国市场渗透。

---

## 🔬 研究前沿

> ⚠️ 今日 ArXiv cs.RO 暂未抓取到新增论文，但 GitHub 活跃仓库中涌现出多个体现学术前沿的项目（见下文 VLA 板块与世界模型、sim-to-real 框架等）。建议关注相关项目对应的论文与 ICML/NeurIPS 投稿。

学术亮点项目：
- **[RoboTwin 2.0 (ICML 2026)](https://github.com/RoboTwin-Platform/RoboTwin)** — 双臂操作仿真基准与数据集。
- **[Tsinghua-MARS-Lab/OMG](https://github.com/Tsinghua-MARS-Lab/OMG)** — 人形机器人"全模态运动生成"通用控制（arXiv:2606.10340）。
- **[Habitat-GS (ECCV 2026)](https://github.com/zju3dv/habitat-gs)** — 引入动态高斯泼溅的高保真导航仿真器。
- **[INTACT-JEPA](https://github.com/zju3dv/INTACT-JEPA)** — 同构意图到动作的"无搜索世界模型"。

---

## ⭐ 重点项目

### 🦾 机器人学习与控制
| 仓库 | Star | 简介 |
|---|---|---|
| [Unity-Technologies/ml-agents](https://github.com/Unity-Technologies/ml-agents) | 19,619 | Unity 游戏/仿真环境下的深度 RL 与模仿学习工具包 |
| [OpenPipe/ART](https://github.com/OpenPipe/ART) | 10,577 | 基于 GRPO 的多步 Agent 强化训练框架，兼容 Qwen3.6/GPT-OSS |
| [kornia/kornia](https://github.com/kornia/kornia) | 11,313 | 面向 Spatial AI 的可微分几何计算机视觉库 |
| [dora-rs/dora](https://github.com/dora-rs/dora) | 3,866 | Rust 编写的数据流机器人中间件，低延迟可组合 |
| [RLinf/RLinf](https://github.com/RLinf/RLinf) | 4,512 | 面向具身与 Agentic AI 的强化学习基础设施 |
| [Tsinghua-MARS-Lab/OMG](https://github.com/Tsinghua-MARS-Lab/OMG) | 105 | 人形机器人通用控制的"全模态运动生成"框架 |
| [robotmcp/ros-mcp-server](https://github.com/robotmcp/ros-mcp-server) | 1,387 | 让 Claude/GPT 通过 MCP 协议直连 ROS 机器人 |
| [enactic/openarm](https://github.com/enactic/openarm) | 2,833 | 完全开源的人形机械臂，面向接触丰富物理 AI 研究 |

### 🤖 仿真与框架
| 仓库 | Star | 简介 |
|---|---|---|
| [google-deepmind/mujoco](https://github.com/google-deepmind/mujoco) | 14,522 | 通用多关节接触动力学物理仿真器，机器人研究事实标准 |
| [isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab) | 7,882 | 基于 NVIDIA Isaac Sim 的统一机器人学习框架 |
| [ros-navigation/navigation2](https://github.com/ros-navigation/navigation2) | 4,576 | ROS 2 官方导航框架，行为树 + 插件式架构 |
| [cyberbotics/webots](https://github.com/cyberbotics/webots) | 4,545 | 开源多机器人 3D 仿真器，教育/科研广泛使用 |
| [newton-physics/newton](https://github.com/newton-physics/newton) | 5,313 | 基于 NVIDIA Warp 的 GPU 加速物理引擎，专为机器人学家打造 |
| [mujocolab/mjlab](https://github.com/mujocolab/mjlab) | 2,784 | Isaac Lab API 风格、由 MuJoCo-Warp 驱动的 RL/机器人研究栈 |
| [gazebosim/gz-sim](https://github.com/gazebosim/gz-sim) | 1,447 | 新一代 Gazebo 开源机器人仿真器 |
| [kevinzakka/mink](https://github.com/kevinzakka/mink) | 1,491 | 基于 MuJoCo 的 Python 逆运动学库 |

### 🧠 VLA 与基础模型
| 仓库 | Star | 简介 |
|---|---|---|
| [FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA) | 603 | 一体化 VLA 工程平台，覆盖数据到真机部署 |
| [allenai/vla-evaluation-harness](https://github.com/allenai/vla-evaluation-harness) | 524 | "一个框架评估任意 VLA 模型 × 任意机器人仿真基准" |
| [TensorAuto/OpenTau](https://github.com/TensorAuto/OpenTau) | 197 | 面向真机机器人的 VLA 训练基础设施（PyTorch） |
| [ros-claw/rosclaw](https://github.com/ros-claw/rosclaw) | 179 | Physical AI 自进化运行时：e-URDF、沙箱、技能进化、物理记忆 |
| [robocurve/inspect-robots](https://github.com/robocurve/inspect-robots) | 135 | 物理 AI 开源评测：在任意臂/人形上跑任意 LLM/VLA |
| [PhyAgentOS-Dev/PhyAgentOS](https://github.com/PhyAgentOS-Dev/PhyAgentOS) | 1,722 | 基于 agentic workflow 的自进化具身 AI 操作系统 |
| [knightnemo/Awesome-World-Models](https://github.com/knightnemo/Awesome-World-Models) | 3,289 | 世界模型方向论文/项目一站式资源清单 |
| [sou350121/VLA-Handbook](https://github.com/sou350121/VLA-Handbook) | 499 | 全中文、实战导向的 VLA 算法工程师手册 |

### 🔧 硬件与驱动
| 仓库 | Star | 简介 |
|---|---|---|
| [commaai/openpilot](https://github.com/commaai/openpilot) | 63,385 | 支持 300+ 车型的开源 ADAS 操作系统 |
| [ArduPilot/ardupilot](https://github.com/ArduPilot/ardupilot) | 15,673 | 全球最成熟的开源自动驾驶仪（飞控/车/船/潜） |
| [PX4/PX4-Autopilot](https://github.com/PX4/PX4-Autopilot) | 12,394 | 工业级开源飞控，对应 IEEE Spectrum 中 DARPA Lift 挑战 |
| [PetoiCamp/OpenCat-Quadruped-Robot](https://github.com/PetoiCamp/OpenCat-Quadruped-Robot) | 5,083 | 仿波士顿动力四足机器人开源 STEM/DIY 平台 |
| [stack-of-tasks/pinocchio](https://github.com/stack-of-tasks/pinocchio) | 3,646 | 高性能刚体动力学库（含解析导数），控制/RL 必备 |
| [nasa-jpl/open-source-rover](https://github.com/nasa-jpl/open-source-rover) | 9,566 | NASA JPL 开源的 6 轮火星车 DIY 项目 |
| [copper-project/copper-rs](https://github.com/copper-project/copper-rs) | 1,447 | Rust 机器人 OS：构建、运行、重放全栈确定性 |

### 📊 数据集与基准
| 仓库 | Star | 简介 |
|---|---|---|
| [StanfordVL/BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K) | 1,630 | 推动具身 AI 研究的 1000 任务仿真平台 |
| [RoboTwin-Platform/RoboTwin](https://github.com/RoboTwin-Platform/RoboTwin) | 2,717 | ICML 2026 双臂操作基准与数据集 |
| [RoboVerseOrg/RoboVerse](https://github.com/RoboVerseOrg/RoboVerse) | 1,802 | 统一平台+数据集+基准的机器人学习基础设施 |
| [robocasa/robocasa](https://github.com/robocasa/robocasa) | 1,636 | 大规模日常家务仿真，面向通用机器人 |
| [Farama-Foundation/Metaworld](https://github.com/Farama-Foundation/Metaworld) | 1,865 | 元强化学习与多任务操作学习经典基准 |
| [omertt27/Calibra](https://github.com/omertt27/Calibra) | 10 | 机器人模仿学习的数据集可观测性与 coreset 筛选 |

---

## 🌱 生态趋势信号

**1. 国防成为机器人最大单一买家**：Cambridge Aerospace（$300M）+ Hadrian（$1.37B）两笔大额融资同时落地，结合 DARPA Lift Challenge 重型无人机演示，揭示美国正以国家级订单重塑机器人供应链。

**2. 具身 AI 操作系统（EAIOS）从概念走向代码**：ros-claw、PhyAgentOS、copper-rs、robonix 同期活跃，"e-URDF + 物理记忆 + 运行时干预 + 技能进化"成为新组件清单，对应"机器人 = 身体 + 操作系统 + 大脑"的三层架构。

**3. VLA 进入"工程化 + 评测化"双轮期**：FluxVLA（数据→部署）、OpenTau（真机训练）、vla-evaluation-harness（任意模型×任意基准）、inspect-robots（物理 AI 评测）形成完整工具带；伴随 World-to-Wrist（W2-VLA）、Mimic-Video 等模型创新，VLA 落地最后一公里正在被系统性打通。

**4. 仿真器格局"两极分化"**：经典 MuJoCo（14.5k）+ 新 mjlab（MuJoCo-Warp 驱动、Isaac Lab 风格 API）冲击 NVIDIA Isaac Sim 生态；Gazebo、Newton、Webots、Habitat-GS 各占一席，"一个仿真器打天下"的时代结束。

**5. LLM × 机器人的

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*