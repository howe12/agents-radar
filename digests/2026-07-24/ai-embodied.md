# 具身智能开源动态日报 2026-07-24

> 数据来源: GitHub Search API (133 仓库) | ArXiv cs.RO (0 篇论文) | RSS 新闻 (47 条) | 生成时间: 2026-07-24 02:05 UTC

---

# 具身智能开源动态日报

**日期：2025 年 · 今日观察**

---

## 1. 今日速览

今日具身智能领域呈现"资本与硬件双轮驱动"的鲜明特征：Holiday Robotics 凭借轮式人形机器人 FRIDAY 拿下 **1.05 亿美元**，Uber 联合创始人携 **17 亿美元**杀入机器人赛道成立 ATOMS；芯片层面 AMD 推出面向实时控制的 **Kria 模块**，从底层为机器人提供统一内存支持。代码侧，Isaac Lab、MuJoCo-Warp、Newton 等仿真器持续迭代，VLA 方向涌现 FluxVLA、InternVLA-A1、OmTrackVLA 等工程化平台，具身智能正从"模型研究"进入"基础设施竞速"阶段。

---

## 2. 行业脉搏

| # | 事件 | 关键意义 |
|---|------|----------|
| 🦾 | **Holiday Robotics 完成 1.05 亿美元融资**（[The Robot Report](https://www.therobotreport.com/holiday-robotics-raises-105m-wheeled-humanoid-friday/)） | 轮式人形机器人 FRIDAY 验证了"低成本 + 移动平台"路线的商业可行性，对标 Figure / 1X 的双足方案形成差异化竞争。 |
| 💰 | **Uber 联合创始人新公司 ATOMS 融资 17 亿美元**（[The Robot Report](https://www.therobotreport.com/uber-co-founder-raises-1-7b-for-new-robotics-startup-atoms/)） | 出行场景的运营经验 + 巨额资本注入，标志着机器人创业进入"超级轮次"时代，硬件 + 数据 + 部署闭环成新壁垒。 |
| 🧠 | **AMD 发布 Kria 模块：实时控制 + 统一内存**（[The Robot Report](https://www.therobotreport.com/amd-unveils-kria-module-real-time-control-unified-memory-robots/)） | 端侧 AI 计算的"CPU + FPGA + GPU"统一寻址对机器人低延迟决策意义重大，是 NVIDIA Jetson 之外的重要替代栈。 |
| 🏥 | **Medtronic 推出手术室 AI 计算平台**（[The Robot Report](https://www.therobotreport.com/medtronic-launch-ai-compute-platform-operating-room/)） | 医疗机器人算力底座逐步标准化，呼应 IEEE Spectrum 关于"机器人外科医生"的视频专题，临床落地加速。 |
| 📊 | **Ropedia 获 2200 万美元用于扩展机器人数据采集**（[The Robot Report](https://www.therobotreport.com/ropedia-raises-22m-scale-data-collection-training-robots/)） | 数据飞轮的公司化运作成为 VLA 时代的"卖水人"模式，与学术界的 Open X-Embodiment 形成互补。 |
| 📑 | **Physical AI 与机器人产业现状报告**（[The Robot Report](https://www.therobotreport.com/physical-ai-and-robotics/)） | 系统梳理 humanoids、foundation models、sim-to-real 三大趋势，建议作为季度参考。 |

---

## 3. 研究前沿

⚠️ 今日 ArXiv cs.RO 抓取通道无新论文（0 篇）。但从 GitHub 与新闻可观察到以下研究热点：

- **基础模型 × 机器人**：InternVLA-A1（[GitHub](https://github.com/InternRobotics/InternVLA-A-series)）、FluxVLA（[GitHub](https://github.com/FluxVLA/FluxVLA)）等将"理解-生成-动作"统一表征作为阶段重点。
- **触觉/视觉多模态融合**：TransDex 在点云预训练支持下做 3D 视触策略学习（[GitHub](https://github.com/LFGfg/TransDex)），与 sim-to-real 数据集稀缺问题形成耦合。
- **通用人形运动生成**：清华 MARS Lab 的 OMG（Omni-Modal Motion Generation）给出"以语言/视觉/动作多模态输入驱动通用 humanoid 控制"的新范式（[GitHub](https://github.com/Tsinghua-MARS-Lab/OMG)）。

---

## 4. 重点项目

### 🦾 机器人学习与控制（模仿学习、RL、策略学习）

| 仓库 | ⭐ | 说明 |
|------|----|------|
| [OpenPipe/ART](https://github.com/OpenPipe/ART) | 10,527 | Agent Reinforcement Trainer，用 GRPO 让 Qwen3.6、GPT-OSS、Llama 等多步智能体在真实任务中"在职训练"，是连接 LLM 与 RL 训练栈的桥梁。 |
| [Unity-Technologies/ml-agents](https://github.com/Unity-Technologies/ml-agents) | 19,572 | 游戏引擎即训练场，深度 RL + 模仿学习的事实标准之一，对低成本 sim-to-real 极为友好。 |
| [DLR-RM/stable-baselines3](https://github.com/DLR-RM/stable-baselines3) | 13,601 | DLR 官方维护的 PyTorch RL 库，可靠实现几乎所有主流算法，是机器人策略基线的"标配"。 |
| [Farama-Foundation/Gymnasium](https://github.com/Farama-Foundation/Gymnasium) | 12,212 | RL 环境 API 事实标准（原 Gym），几乎所有机器人 RL 论文都依赖其接口。 |
| [enactic/openarm](https://github.com/enactic/openarm) | 2,753 | 全开源人形手臂，面向接触丰富场景的具身 AI 研究与部署，硬件开源社区罕见的高质量方案。 |
| [RobotControlStack/robot-control-stack](https://github.com/RobotControlStack/robot-control-stack) | 124 | ROS-free 的 sim-to-real 框架，MuJoCo Gymnasium 包装 + 同步执行，原生支持 Franka / UR5e / xArm / SO101。 |
| [robonet-ai/handumi-sw](https://github.com/robonet-ai/handumi-sw) | 42 | 开源 HandUMI 软件栈：双手机器人同步数据采集、校准、回放与遥操作。 |
| [LFGfg/TransDex](https://github.com/LFGfg/TransDex) | 8 | 基于点云重建预训练的 3D 视触融合电机策略，把触觉感知引入 VLA 框架。 |

### 🤖 仿真与框架（MuJoCo、Isaac、Gazebo、ROS）

| 仓库 | ⭐ | 说明 |
|------|----|------|
| [carla-simulator/carla](https://github.com/carla-simulator/carla) | 14,210 | 自动驾驶研究最常用的开源仿真器，ROS 生态直接对接。 |
| [google-deepmind/mujoco](https://github.com/google-deepmind/mujoco) | 14,301 | DeepMind 维护的高性能物理仿真器，机器人 RL 实验的事实引擎。 |
| [PX4/PX4-Autopilot](https://github.com/PX4/PX4-Autopilot) | 12,224 | 主流无人机自驾栈，常与 ROS 2 + Gazebo 组成空中具身研究闭环。 |
| [autowarefoundation/autoware](https://github.com/autowarefoundation/autoware) | 11,888 | 全球领先的开源自动驾驶软件项目，自动驾驶具身智能参考实现。 |
| [ArduPilot/ardupilot](https://github.com/ArduPilot/ardupilot) | 15,540 | ArduPilot 全系自驾源码，覆盖固定翼、多旋翼、车、潜艇。 |
| [isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab) | 7,748 | NVIDIA Isaac Sim 之上的统一机器人学习框架，GPU 并行 RL 与 VLA 训练首选。 |
| [PlotJuggler/PlotJuggler](https://github.com/PlotJuggler/PlotJuggler) | 6,067 | 时序数据可视化工具，机器人调试必备。 |
| [stack-of-tasks/pinocchio](https://github.com/stack-of-tasks/pinocchio) | 3,597 | 刚体动力学快速实现，提供解析导数，是 MPC / 轨迹优化的核心依赖。 |
| [newton-physics/newton](https://github.com/newton-physics/newton) | 5,232 | NVIDIA Warp 之上、面向机器人学家的 GPU 加速物理引擎。 |
| [gazebosim/gz-sim](https://github.com/gazebosim/gz-sim) | 1,422 | Gazebo 最新版，ROS 2 友好，机器人教学与竞赛标准环境。 |
| [mujocolab/mjlab](https://github.com/mujocolab/mjlab) | 2,718 | 基于 MuJoCo-Warp 的 Isaac Lab 风格 API，把 GPU RL 工作流迁移到 MuJoCo 生态。 |

### 🧠 VLA 与基础模型

| 仓库 | ⭐ | 说明 |
|------|----|------|
| [FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA) | 562 | 一站式 VLA 工程平台：从数据到真机部署打通，VLA 走向产品的"脚手架"。 |
| [InternRobotics/InternVLA-A-series](https://github.com/InternRobotics/InternVLA-A-series) | 508 | InternVLA-A1：统一理解、生成与动作的机械操作模型，国内 VLA 旗舰开源。 |
| [allenai/vla-evaluation-harness](https://github.com/allenai/vla-evaluation-harness) | 464 | 任意 VLA × 任意仿真基准的统一评测框架，解决"各说各话"的基准割裂。 |
| [om-ai-lab/OmTrackVLA](https://github.com/om-ai-lab/OmTrackVLA) | 263 | 开放可复现的 Tracking-VLA 研究代码，动态物体操作方向值得关注。 |
| [mll-lab-nu/VAGEN](https://github.com/mll-lab-nu/VAGEN) | 488 | 针对多轮 VLM 智能体的世界模型推理 RL 训练栈。 |
| [ozkannceylan/humanoid_vla](https://github.com/ozkannceylan/humanoid_vla) | 22 | Unitree G1 + ACT + ROS 2 NL 接口的端到端 VLA 人形机器人方案，sim 端 OOD 泛化研究。 |
| [dwipddalal/Anchor-Align](https://github.com/dwipddalal/Anchor-Align) | 14 | 通过表征锚定与语言-动作对齐提升 VLA 微调的泛化性。 |
| [Noietch/Awesome-Learning-for-Manipulation](https://github.com/Noietch/Awesome-Learning-for-Manipulation) | 12 | VLA、视动策略、世界模型、benchmark、产业报告的精选清单。 |

### 🔧 硬件与驱动

| 仓库 | ⭐ | 说明 |
|------|----|------|
| [nasa-jpl/open-source-rover](https://github.com/nasa-jpl/open-source-rover) | 9,535 | 自制 6 轮火星车，从教学到工程实践的桥梁。 |
| [dora-rs/dora](https://github.com/dora-rs/dora) | 3,853 | 数据流导向的机器人中间件，低延迟、可组合，为 ROS 之外的轻量化方案。 |
| [copper-project/copper-rs](https://github.com/copper-project/copper-rs) | 1,422 | Rust 编写的机器人操作系统——确定性构建、运行、回放整套机器人栈。 |
| [JacopoPan/aerial-autonomy-stack](https://github.com/JacopoPan/aerial-autonomy-stack) | 538 | 仿真 + 部署 PX4/ArduPilot 无人机集群的开源框架，集成 ROS 2 + YOLO + LiDAR + Jetson。 |

### 📊 数据集与基准

| 仓库 | ⭐ | 说明 |
|------|----|------|
| [StanfordVL/BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K) | 1,594 | 加速具身 AI 研究的标准平台，1K 日常任务规模。 |
| [RoboVerseOrg/RoboVerse](https://github.com/RoboVerseOrg/RoboVerse) | 1,789 | 统一平台、数据集与基准，推动可扩展可泛化的机器人学习。 |
| [Farama-Foundation/Gymnasium-Robotics](https://github.com/Farama-Foundation/Gymnasium-Robotics) | 944 | Farama 官方机器人 RL 仿真集合，与 Gymnasium 严格对齐。 |
| [haus工业大学-mars/UMI-3D](https://github.com/hku-mars/UMI-3D) | 259 | UMI-3D SLAM 与数据处理流水线，触觉数据采集的关键环节。 |
| [chang-xinhai/Awesome-UMI](https://github.com/chang-xinhai/Awesome-UMI) | 13 | UMI 生态论文、数据集、策略与分类法一体化清单。 |
| [chang-xinhai/Awesome-Dexterous-Manipulation](https://github.com/chang-xinhai/Awesome-Dexterous-Manipulation) | 11 | 灵巧操作、触觉感知、灵巧手、机器人学习与仿真器的精选集。 |
| [sou350121/VLA-Handbook](https://github.com/sou350121/VLA-Handbook) | 423 | 全中文、面向算法的 VLA 实战手册与面试指南。 |

---

## 5. 生态趋势信号

三条主线正在交汇：

1. **资本端"超级轮次"集中爆发**——

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*