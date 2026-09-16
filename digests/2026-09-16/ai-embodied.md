# 具身智能开源动态日报 2026-09-16

> 数据来源: GitHub Search API (130 仓库) | ArXiv cs.RO (30 篇论文) | RSS 新闻 (48 条) | 生成时间: 2026-09-16 02:50 UTC

---

# 具身智能开源动态日报

## 📌 今日速览

今天具身智能领域的核心信号是 **"World Model + VLA 协同演进"与"硬件开源化"** 两条主线交织。一方面，arXiv 涌现出多篇围绕世界-动作联合建模的论文（WAM、XPACE、SlotDiT），同时 InOrbit.AI 释出 ISO 21423 的 OpenRobOps 参考实现，标准化向"运维"延伸；另一方面，Digit 5 在安全与执行器层面完成关键迭代，OpenARM、Tron2-OpenPI 等开放硬件 / 部署栈持续活跃，行业正从"演示能力"向"可规模化部署的物理 AI"过渡。

---

## 🗞️ 行业脉搏

1. **[Digit 5 或成为首个真正安全的人形机器人劳动者](https://spectrum.ieee.org/humanoid-robot-safety)** — IEEE Spectrum 指出 Agility 在 Digit 5 上完成了关键的安全架构升级，是人形机器人走出"展示柜"进入工厂车间的必要条件。

2. **[Agility Digit 5 硬件全面升级：腿、电池、安全系统](https://www.therobotreport.com/agilitys-digit-5-humanoid-has-new-legs-batteries-safety-upgrades/)** — 与上一条呼应，新一代腿部结构与能源系统将"长时作业 + 与人共线"能力推到新基线。

3. **[InOrbit.AI 释出 OpenRobOps ISO 21423 参考实现](https://www.therobotreport.com/inorbit-ai-releases-openrobops-iso-21423-reference-implementation/)** — 首次给出符合 ISO 21423 的机器人运维参考实现，标志着机器人运维正像 IT 运维一样被标准化。

4. **[RaaS 不只是订阅模型](https://www.therobotreport.com/why-raas-robotics-needs-more-than-a-subscription-model/)** — 文章呼吁 RaaS 必须配套结果导向 SLA、数据闭环与维护生态，否则订阅模式难以撑起规模化部署。

5. **[Arm 将在 RoboBusiness 讨论 Physical AI 规模化](https://www.therobotreport.com/arm-to-discuss-scaling-physical-ai-at-robobusiness/)** — 算力底座厂商主动发声，提示"Physical AI"叙事正在从算法层下沉到芯片与边缘推理层。

---

## 🔬 研究前沿

1. **[Modality-Autoregressive World-Action Models (WAM)](http://arxiv.org/abs/2609.17524v1)** — 将"未来观测 + 动作"做联合自回归建模，避免传统 WAM 仅靠 RGB 预测带来的不确定性问题，对长视野机器人策略学习具有直接价值。

3. **[XPACE: Joint World and Action Modeling from Heterogeneous Experience](http://arxiv.org/abs/2609.17372v1)** — 面向"通用机器人"的异构经验融合框架，让世界模型真正能从多源、多形态数据中受益。

4. **[SlotDiT: Object-Centric Representations for Diffusion Transformers](http://arxiv.org/abs/2609.17414v1)** — 把对象中心表征注入 DiT，让视频生成模型天然适合"以物体为单位"的机器人任务规划与数据合成。

5. **[Hamilton-Jacobi Reachability for Hybrid Systems](http://arxiv.org/abs/2609.17430v1)** — 为接触丰富的混合动力学系统提供目标驱动 + 安全保证的统一控制框架，对腿足与操作臂都很关键。

6. **[Residual Fault Adaptation for Dexterous In-Hand Manipulation](http://arxiv.org/abs/2609.17404v1)** — 运行时关节故障下的灵巧手残差自适应，提升了在真实硬件上的可部署性。

---

## ⭐ 重点项目

### 🦾 机器人学习与控制
| 仓库 | Star | 一句话 |
|---|---|---|
| [OpenPipe/ART](https://github.com/OpenPipe/ART) | 10,722 | Agent Reinforcement Trainer：用 GRPO 对 Qwen3.6、Llama 等进行多步 agent 真实任务训练。 |
| [OpenRLHF/OpenRLHF](https://github.com/OpenRLHF/OpenRLHF) | 10,006 | 基于 Ray 的高性能 Agentic RL 框架，集成 PPO/DAPO/REINFORCE++/VLM/vLLM。 |
| [Tsinghua-MARS-Lab/OMG](https://github.com/Tsinghua-MARS-Lab/OMG) | 117 | "OMG"：面向通用人形机器人控制的 Omni-Modal Motion Generation（[arXiv:2606.10340](http://arxiv.org/abs/2606.10340)）。 |
| [MathFoundationRL/Book-Mathematical-Foundation-of-Reinforcement-Learning](https://github.com/MathFoundationRL/Book-Mathematical-Foundation-of-Reinforcement-Learning) | 17,799 | 《强化学习的数学基础》配套开源教材与代码。 |
| [Calibra-Robotics/Calibra](https://github.com/Calibra-Robotics/Calibra) | 23 | 机器人模仿学习的数据集可观测性与 coreset 选取工具，解决"数据不够好"的核心痛点。 |

### 🤖 仿真与框架
| 仓库 | Star | 一句话 |
|---|---|---|
| [isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab) | 8,138 | NVIDIA 官方机器人学习统一框架，支持多物理求解器与多渲染后端。 |
| [google-deepmind/mujoco](https://github.com/google-deepmind/mujoco) | 15,160 | 行业标杆多关节接触动力学物理引擎，是具身研究事实标准。 |
| [newton-physics/newton](https://github.com/newton-physics/newton) | 5,640 | 基于 NVIDIA Warp 的 GPU 加速开源物理引擎，专为机器人研究打造。 |
| [mujocolab/mjlab](https://github.com/mujocolab/mjlab) | 3,078 | 用 MuJoCo-Warp 提供与 Isaac Lab 一致的 API，对迁移与复现非常友好。 |
| [dora-rs/dora](https://github.com/dora-rs/dora) | 3,941 | 面向 AI 机器人应用的低延迟数据流中间件，用 Rust 实现，强调可组合与分布式。 |
| [RLinf/RLinf](https://github.com/RLinf/RLinf) | 5,240 | 面向具身与 Agentic AI 的强化学习基础设施，统一了训练-部署流水线。 |
| [robotmcp/ros-mcp-server](https://github.com/robotmcp/ros-mcp-server) | 1,457 | 用 MCP 协议把 Claude / GPT 等大模型直接接到 ROS，是 LLM-on-Robot 的最小可用桥梁。 |

### 🧠 VLA 与基础模型
| 仓库 | Star | 一句话 |
|---|---|---|
| [FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA) | 679 | 一站式 VLA 工程平台，覆盖数据 → 训练 → 真机部署全链路。 |
| [InternRobotics/InternVLA-A-series](https://github.com/InternRobotics/InternVLA-A-series) | 553 | InternVLA-A1：理解、生成、动作三者统一的机器人操作模型。 |
| [allenai/vla-evaluation-harness](https://github.com/allenai/vla-evaluation-harness) | 611 | 在任何仿真基准上评测任意 VLA 模型的统一框架。 |
| [robocurve/inspect-robots](https://github.com/robocurve/inspect-robots) | 491 | 开源物理 AI 评测：任意 LLM/VLA × 任意臂/人形 × 任意真机/仿真。 |
| [dexmal/opendm](https://github.com/dexmal/opendm) | 778 | 面向"通用具身智能"的开放世界基础模型。 |
| [syswonder/robonix](https://github.com/syswonder/robonix) | 358 | 用 Rust 编写的 Agentic 机器人操作系统。 |
| [PhyAgentOS/PhyAgentOS-core](https://github.com/PhyAgentOS/PhyAgentOS-core) | 2,317 | 递归自我改进的物理 Agent OS，让具身 Agent 能在工作流中持续自我增强。 |
| [OpenBMB/SimpleMemVLA](https://github.com/OpenBMB/SimpleMemVLA) | 35 | 用时间戳视频记忆 + 流式推理，让 VLA 模型在长视野任务上不掉链子。 |

### 🔧 硬件与驱动
| 仓库 | Star | 一句话 |
|---|---|---|
| [ArduPilot/ardupilot](https://github.com/ArduPilot/ardupilot) | 15,870 | 全球最广泛使用的开源飞控软件栈（ArduPlane/Copter/Rover/Sub）。 |
| [PX4/PX4-Autopilot](https://github.com/PX4/PX4-Autopilot) | 12,628 | 学术界与工业界事实标准的开源飞控，与 ROS 2 深度集成。 |
| [enactic/openarm](https://github.com/enactic/openarm) | 3,348 | 面向接触丰富任务的完全开源人形机械臂。 |
| [limxdynamics/tron2_openpi](https://github.com/limxdynamics/tron2_openpi) | 25 | OpenPI 在 LimX TRON2 操作臂上的部署 fork：pi0.5 服务化、微调、真实硬件 client 示例齐全。 |
| [XenseRobotics-AI/lerobot-xense](https://github.com/XenseRobotics-AI/lerobot-xense) | 19 | LeRobot v5.1 的 Xense 平台 fork，覆盖 Flexiv Rizon4 / Elite CS66 / ARX5 与触觉夹爪。 |

### 📊 数据集与基准
| 仓库 | Star | 一句话 |
|---|---|---|
| [StanfordVL/BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K) | 1,700 | 加速具身 AI 研究的标志性平台，含 1000 类日常任务仿真。 |
| [RoboTwin-Platform/RoboTwin](https://github.com/RoboTwin-Platform/RoboTwin) | 2,857 | ICML 2026 RoboTwin 2.0：双臂操作仿真与基准。 |
| [Farama-Foundation/Metaworld](https://github.com/Farama-Foundation/Metaworld) | 1,881 | 多任务 / 元强化学习的标准机器人操作环境集合。 |
| [knightnemo/Awesome-World-Models](https://github.com/knightnemo/Awesome-World-Models) | 3,415 | 世界模型方向一站式资源索引，覆盖机器人、视频生成与自动驾驶。 |
| [Phyz

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*