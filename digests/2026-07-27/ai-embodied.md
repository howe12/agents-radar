# 具身智能开源动态日报 2026-07-27

> 数据来源: GitHub Search API (129 仓库) | ArXiv cs.RO (0 篇论文) | RSS 新闻 (47 条) | 生成时间: 2026-07-27 02:22 UTC

---

# 具身智能开源动态日报

**日期：2026 年 1 月 · 第 X 期**

---

## 1. 今日速览

今日具身智能领域呈现出 **"Physical AI 基础设施加速完善"** 的鲜明特征：商业侧，Holiday Robotics 完成 1.05 亿美元融资、NEURA Robotics 与 RWTH Aachen 联合建立物理 AI 训练场、Generalist 推出支持多末端执行器的 GEN-1 基础模型；学术侧今日 ArXiv cs.RO 暂无更新，但开源代码层面迎来密集推送——RLinf（强化学习基础设施）、RoboTwin 2.0（双臂操作基准）、Newton（GPU 物理仿真）等关键项目持续活跃，ICML 2026 投稿生态初步成型。整体看，"**世界模型 + VLA + GPU 仿真 + 数据平台**" 四件套正成为具身智能下一阶段的基础设施共识。

---

## 2. 行业脉搏

| 动态 | 意义 |
|------|------|
| **[Holiday Robotics 完成 $105M 融资，发布轮式人形机器人 FRIDAY](https://www.therobotreport.com/holiday-robotics-raises-105m-wheeled-humanoid-friday/)** | 继 Figure / 1X / Apptronik 之后，又一家人形机器人公司进入资本加速期；"轮式 + 人形"复合形态成为差异化路径。 |
| **[Generalist GEN-1 基础模型支持多种末端执行器](https://www.therobotreport.com/generalists-gen-1-foundation-model-now-supports-a-range-of-robot-end-effectors/)** | 通用具身基础模型开始打破"末端绑定"——同一模型可适配夹爪、灵巧手、吸盘等，是 VLA 走向"真正通用"的关键一步。 |
| **[NEURA Robotics 在 RWTH Aachen 设立 NEURA Gym 训练 Physical AI](https://www.therobotreport.com/neura-robotics-establishes-neura-gym-rwth-aachen-train-physical-ai/)** | 欧洲版"数据飞轮"成形：高校联合 + 厂商提供硬件 + 数据回流，是 EU 抢占 Physical AI 人才与数据的关键布局。 |
| **[强生 Ottava 手术机器人首秀](https://www.therobotreport.com/photos-first-look-at-jjs-ottava-surgical-robot/)** | 手术机器人赛道进入新阶段：J&J 与 Intuitive Surgical、Medtronic 形成新一代竞争格局，临床级具身 AI 的合规路径值得长期跟踪。 |
| **[光学技术可在运行中更新机器人 AI](https://spectrum.ieee.org/ai-in-robotics)** | 暗示"光子计算 / 存内计算 / 硬件级 OTA"正在成为机器人边缘部署的潜在解——长期看将颠覆"云-端分离"的 AI 升级范式。 |

---

## 3. 研究前沿

> 📭 今日 ArXiv cs.RO 无新论文收录，论文模块改以「近期高关注仓库所对应的研究方向」替代。

| 方向 | 代表性项目 | 贡献 |
|------|------------|------|
| **世界模型 + VLM Agent 推理 RL** | [VAGEN (mll-lab-nu)](https://github.com/mll-lab-nu/VAGEN) ⭐488 | 在多轮视觉-语言任务上对世界模型进行 RL 微调，填补"世界模型用于 Agent 决策"的训练闭环。 |
| **物理 AI 自演化操作系统** | [PhyAgentOS](https://github.com/PhyAgentOS/PhyAgentOS) ⭐1,111 | 把 Agent 工作流引入机器人本体 OS，使机器人在长生命周期中持续自演化。 |
| **双臂操作 Sim2Real 基准** | [RoboTwin 2.0](https://github.com/RoboTwin-Platform/RoboTwin) ⭐2,631（ICML 2026 投稿） | 提供双臂操作基准 + 仿真 + 数据 pipeline，是 VLA 与策略学习事实标准测试床。 |
| **VLA 评测统一框架** | [allenai/vla-evaluation-harness](https://github.com/allenai/vla-evaluation-harness) ⭐472 | "一次定义基准、任意策略 / 仿真器评测"，解决 VLA 论文复现性差的痛点。 |
| **机器人数据格式互转** | [forge (arpitg1304)](https://github.com/arpitg1304/forge) ⭐157 | 支持 RLDS / LeRobot v2/v3 / Zarr / HDF5 / Rosbag 互转，是 OpenVLA、Octo、Diffusion Policy 工作流的关键工具。 |

---

## 4. 重点项目

### 🧠 VLA 与基础模型

- **[RLinf/RLinf](https://github.com/RLinf/RLinf)** ⭐4,263 — 面向 Embodied & Agentic AI 的强化学习基础设施，提供端到端训练栈，是目前最活跃的具身 RL 框架。
- **[RoboTwin-Platform/RoboTwin](https://github.com/RoboTwin-Platform/RoboTwin)** ⭐2,631 — ICML 2026 投稿的双臂操作基准平台，覆盖仿真到真机的完整 pipeline。
- **[Generalist GEN-1 基础模型](https://www.therobotreport.com/generalists-gen-1-foundation-model-now-supports-a-range-of-robot-end-effectors/)** — 通用具身基础模型，可支持多类末端执行器。
- **[FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA)** ⭐567 — VLA 一站式工程平台，涵盖数据采集到真机部署。
- **[om-ai-lab/OmTrackVLA](https://github.com/om-ai-lab/OmTrackVLA)** ⭐264 — 面向跟踪任务的 VLA 开放复现研究。
- **[TensorAuto/OpenTau](https://github.com/TensorAuto/OpenTau)** ⭐190 — 基于 PyTorch 的 VLA 训练基础设施，专注真实场景。

### 🤖 仿真与框架

- **[google-deepmind/mujoco](https://github.com/google-deepmind/mujoco)** ⭐14,335 — 通用物理仿真器的事实标准。
- **[isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab)** ⭐7,777 — 基于 NVIDIA Isaac Sim 的统一机器人学习框架。
- **[newton-physics/newton](https://github.com/newton-physics/newton)** ⭐5,247 — 基于 Warp 的 GPU 加速物理引擎，专为机器人研究者设计。
- **[mujocolab/mjlab](https://github.com/mujocolab/mjlab)** ⭐2,725 — 用 MuJoCo-Warp 实现 Isaac Lab API，GPU 友好的 RL 仿真栈。
- **[robotmcp/ros-mcp-server](https://github.com/robotmcp/ros-mcp-server)** ⭐1,359 — 通过 MCP 协议把 Claude / GPT 等大模型接入 ROS，是 LLM × 机器人最被关注的中间件。
- **[copper-project/copper-rs](https://github.com/copper-project/copper-rs)** ⭐1,424 — Rust 写的机器人操作系统，强调可确定性回放与重建。
- **[BehaviorTree/BehaviorTree.CPP](https://github.com/BehaviorTree/BehaviorTree.CPP)** ⭐4,123 — C++ 行为树库，机器人任务规划的标准组件。

### 🦾 机器人学习与控制

- **[DLR-RM/stable-baselines3](https://github.com/DLR-RM/stable-baselines3)** ⭐13,616 — 工业级 RL 算法实现，几乎所有具身 RL 论文的事实基线。
- **[RobotLocomotion/drake](https://github.com/RobotLocomotion/drake)** ⭐4,121 — 基于模型的机器人设计与验证框架，含优化、控制、感知模块。
- **[mll-lab-nu/VAGEN](https://github.com/mll-lab-nu/VAGEN)** ⭐488 — 世界模型推理 RL，推动 Agent 决策可解释性。
- **[enactic/openarm](https://github.com/enactic/openarm)** ⭐2,768 — 完全开源的人形机械臂，面向接触丰富的物理 AI 研究。
- **[robonet-ai/handumi-sw](https://github.com/robonet-ai/handumi-sw)** ⭐42 — 基于 UMI 的双手同步数据采集与重定向软件。
- **[vikashplus/robohive](https://github.com/vikashplus/robohive)** ⭐630 — 统一机器人学习框架，覆盖 MuJoCo 与真实硬件。

### 🔧 硬件与驱动

- **[ArduPilot/ardupilot](https://github.com/ArduPilot/ardupilot)** ⭐15,559 — 无人机 / 无人车开源飞控的代名词。
- **[PX4/PX4-Autopilot](https://github.com/PX4/PX4-Autopilot)** ⭐12,269 — 主流开源自驾仪，学术与工业界最广泛使用。
- **[ROBOTIS-GIT/open_manipulator](https://github.com/ROBOTIS-GIT/open_manipulator)** ⭐646 — AI 兼容的开源机械臂平台。
- **[JacopoPan/aerial-autonomy-stack](https://github.com/JacopoPan/aerial-autonomy-stack)** ⭐543 — ROS 2 + PX4/ArduPilot + YOLO + LiDAR + Jetson 的无人机集群部署栈。

### 📊 数据集与基准

- **[StanfordVL/BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K)** ⭐1,596 — 加速具身 AI 研究的开放平台，含 1000+ 日常任务仿真。
- **[datawhalechina/every-embodied](https://github.com/datawhalechina/every-embodied)** ⭐2,875 — 中文社区最系统的具身智能教程：VLA / OpenVLA / SmolVLA / Pi0 全覆盖。
- **[allenai/vla-evaluation-harness](https://github.com/allenai/vla-evaluation-harness)** ⭐472 — VLA 统一评测框架，定义基准一次即可运行任何策略。
- **[open-h/open-h-embodiment](https://github.com/open-h/open-h-embodiment)** ⭐131 — 医疗机器人的开放 VLA 数据集倡议。
- **[Awesome-World-Models (knightnemo)](https://github.com/knightnemo/Awesome-World-Models)** ⭐3,227 — 世界模型研究最完整的资源汇总。
- **[Noietch/Awesome-Learning-for-Manipulation](https://github.com/Noietch/Awesome-Learning-for-Manipulation)** ⭐12 — 学习型机器人操作论文精选。

---

## 5. 生态趋势信号

近一周的代码活跃度集中在四股潮流：

**(1) VLA 与世界模型深度耦合。** GEN-1 开始支持多种末端执行器、VAGEN 用 RL 微调世界模型、Awesome-World-Models 成为 star 增速最快的"清单类"仓库——预示"基础模型 = VLA × World Model × 多末端"将成为下一代通用具身模型的标准范式。

**(2) Physical AI 进入"基础设施军备竞赛"。** Holiday Robotics $105M 融资、NEURA 联合 RWTH 建训练场、RLinf 与 Newton 持续高活跃度，反映行业重心从"造机器人"转向"造数据 + 训练场 + 仿真引擎"。

**(3) MCP / LLM-Agent 接管机器人中间件。** ros-mcp-server、PhyAgentOS、RobotecAI/rai 等项目把 MCP / Agent 工作流与 ROS / ROS 2 桥接，意味着机器人正在被 LLM 生态"反向整合"，而非机器人主动拥抱 LLM。

**(4) Sim-to-Real 与基准走向标准化。** RoboTwin 2.0 入选 ICML 2026、vla-evaluation-harness、forge 数据格式互转器陆续登场，说明社区已经厌倦"每篇论文一套评测"，开始追求像 ImageNet / GLUE 那样的统一基准。

---

## 6. 值得关注

1. **[Generalist GEN-1 多末端执行器支持](https://www.therobotreport.com/generalists-gen-1-foundation-model-now-supports-a-range-of-robot-end-effectors/)** —— 如果 VLA 真正实现"模型与执行器解耦"，将打破现有具身模型"硬件绑定"的壁垒，可能引发新一代通用机器人的快速生态扩张。

2. **[Holiday Robotics $105M 轮式人形机器人 FRIDAY](https://www.therobotreport.com/holiday-robotics-raises-105m-wheeled-humanoid-friday/)** —— "轮式 + 双臂 + 移动底盘"的产品形态若被市场验证，将极大降低人形机器人在工业 / 服务场景的部署成本，是 2026 年最值得追踪的产品路线。

3. **[Newton 物理仿真引擎 + mjlab (MuJoCo-Warp)](https://github.com/newton-physics/newton)** —— GPU 原生物理引擎正在替代 CPU 仿真，Isaac Lab 用 MuJoCo-Warp 复刻只是开始；下一代具身 RL 训练速度可能进入 10× 跃迁窗口期。

---

*本日报由"具身智能开源动态观察"自动生成。素材来源：IEEE Spectrum、The Robot Report、ROS Discourse、ArXiv cs.RO、GitHub Trending。*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*