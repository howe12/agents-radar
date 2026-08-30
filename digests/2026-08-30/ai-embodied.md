# 具身智能开源动态日报 2026-08-30

> 数据来源: GitHub Search API (132 仓库) | ArXiv cs.RO (0 篇论文) | RSS 新闻 (47 条) | 生成时间: 2026-08-30 03:00 UTC

---

# 具身智能开源动态日报

**日期：2025 年 1 月 22 日 | 监测范围：行业新闻 · ArXiv 论文 · GitHub 仓库**

---

## 一、今日速览

今日具身智能生态呈现**"产业整合加速 + 开源工具下沉 + VLA 工程化成熟"**三条主线。产业端，EXL 收购 iMerit、Teradyne 再度起诉中国协作机器人厂商、Deere 与 Reservoir R&D 达成千万美元合作，标志着头部玩家正通过并购与专利战构建护城河；开源端，**RLinf**、**Dexmal/opendm**、**τ0-VLA** 等新锐项目集中涌现，强化学习基础设施与世界模型引导的 VLA 成为热点方向。值得注意的是，今日 ArXiv cs.RO 无新论文入选，但 VLA 工程化项目（FluxVLA、VLA-Handbook、VAGEN）继续主导仓库热度，说明研究社区正从理论探索转向系统级落地。

---

## 二、行业脉搏

| # | 动态 | 核心意义 |
|---|------|---------|
| 1 | **[EXL 收购物理 AI 模型开发商 iMerit](https://www.therobotreport.com/exl-acquires-physical-ai-model-developer-imerit/)** | 数据服务巨头整合物理 AI 能力，反映"具身数据标注 + 模型训练"一体化趋势正在形成 |
| 2 | **[Teradyne Robotics 再诉中国协作机器人厂商](https://www.therobotreport.com/teradyne-robotics-sues-another-chinese-cobot-maker/)** | 协作机器人专利战升级，预示行业从"价格战"走向"IP 战"，国产厂商需加速自研 |
| 3 | **[Deere Q3 承压并宣布与 Reservoir R&D 千万美元合作](https://www.therobotreport.com/deere-faces-headwinds-in-q3-update-and-announces-10m-reservoir-rd-partnership/)** | 农业机器人巨头加大 R&D 投入，自动驾驶级感知算法向农机场景下沉 |
| 4 | **[Locus Robotics 在抓取操作上的突破](https://www.therobotreport.com/locus-getting-grasp-one-robotics-biggest-challenges-manipulation/)** | 仓储机器人龙头攻克"灵巧操作"难题，AGV→Manipulator 的产品边界正在模糊 |
| 5 | **[从 Teach-and-Repeat 到 SelfPath AI](https://www.therobotreport.com/from-teach-repeat-to-selfpath-ai-next-robotics-leap/)** | 移动机器人导航范式从示教回放向自监督路径学习跃迁，是 SLAM 路线的重要补充 |

---

## 三、研究前沿

> ⚠️ **今日 ArXiv cs.RO 无新增论文推送**。研究热度集中体现在 GitHub 上的开源项目与工程化实现中，相关前沿成果请见下方"重点项目"VLA 与世界模型板块（τ0-VLA、VAGEN、Mimic-Video 等）。

---

## 四、重点项目

### 🦾 机器人学习与控制

| 项目 | Star | 说明 |
|------|------|------|
| **[RLinf/RLinf](https://github.com/RLinf/RLinf)** | ⭐4,674 | 面向具身与 Agentic AI 的强化学习基础设施，为机器人策略训练提供统一调度框架 |
| **[dexmal/opendm](https://github.com/dexmal/opendm)** | ⭐432 | 面向通用具身智能的开放世界基础模型，是少有的开源端到端 embodied foundation model |
| **[dwipddalal/Anchor-Align](https://github.com/dwipddalal/Anchor-Align)** | ⭐30 | 防止 VLA 微调中行为克隆"擦除"预训练 VLM 表征，解决灾难性遗忘问题（xArm7 + LIBERO-PRO 验证）|
| **[Hebbian-Robotics/hflow](https://github.com/Hebbian-Robotics/hflow)** | ⭐181 | 机器人数据质量验证 SDK，为 AI 模型训练保驾护航，是数据闭环的关键拼图 |
| **[murobotics-ai/handumi-sw](https://github.com/murobotics-ai/handumi-sw)** | ⭐63 | 双臂同步数据采集与重定向开源方案，覆盖校准、QA、回放与遥操作全流程 |

### 🤖 仿真与框架

| 项目 | Star | 说明 |
|------|------|------|
| **[isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab)** | ⭐7,998 | NVIDIA 官方机器人学习统一框架，构建于 Isaac Sim 之上，工业级 RL 训练首选 |
| **[google-deepmind/mujoco](https://github.com/google-deepmind/mujoco)** | ⭐14,783 | 通用多关节接触动力学仿真器，是当前学术研究的事实标准 |
| **[newton-physics/newton](https://github.com/newton-physics/newton)** | ⭐5,554 | 基于 NVIDIA Warp 的 GPU 加速物理引擎，专为机器人学家与仿真研究设计 |
| **[dora-rs/dora](https://github.com/dora-rs/dora)** | ⭐3,906 | Dataflow-Oriented 机器人中间件，低延迟、可组合、分布式数据流正在成为新范式 |
| **[ros-navigation/navigation2](https://github.com/ros-navigation/navigation2)** | ⭐4,641 | ROS 2 导航框架事实标准，移动机器人部署的基座 |
| **[copper-project/copper-rs](https://github.com/copper-project/copper-rs)** | ⭐1,475 | Rust 实现的机器人操作系统，支持确定性回放，关注实时性与可重现性 |

### 🧠 VLA 与基础模型

| 项目 | Star | 说明 |
|------|------|------|
| **[FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA)** | ⭐638 | 一体化 VLA 工程平台，覆盖"数据→训练→真机部署"全链路，降低 VLA 落地门槛 |
| **[sii-research/tau-0-vla](https://github.com/sii-research/tau-0-vla)** | ⭐589 | τ0-VLA：引入世界模型引导的 Test-Time Computation，分层机器人基础模型新范式 |
| **[allenai/vla-evaluation-harness](https://github.com/allenai/vla-evaluation-harness)** | ⭐572 | 通用 VLA 模型评测框架，"一个 Harness 评估所有 VLA"，推动评测标准化 |
| **[mll-lab-nu/VAGEN](https://github.com/mll-lab-nu/VAGEN)** | ⭐493 | 基于世界模型的多轮 VLM Agent RL 训练框架，NeurIPS 2025 入选 |
| **[lucidrains/mimic-video](https://github.com/lucidrains/mimic-video)** | ⭐122 | Mimic-Video：视频-动作模型，在 VLA 之外开辟"Video-Action"新路线 |
| **[sou350121/VLA-Handbook](https://github.com/sou350121/VLA-Handbook)** | ⭐561 | 全中文 VLA 算法工程师实战手册，国内具身社区的重要学习资源 |
| **[syswonder/robonix](https://github.com/syswonder/robonix)** | ⭐344 | Agentic OS for Robots：Rust 实现的机器人智能体操作系统 |

### 🔧 硬件与驱动

| 项目 | Star | 说明 |
|------|------|------|
| **[ArduPilot/ardupilot](https://github.com/ArduPilot/ardupilot)** | ⭐15,767 | 开源无人机/无人车/无人艇飞控生态最成熟方案，覆盖 Plane/Copter/Rover/Sub |
| **[PX4/PX4-Autopilot](https://github.com/PX4/PX4-Autopilot)** | ⭐12,511 | 学术界与工业界广泛采用的自动驾驶仪软件栈 |
| **[stack-of-tasks/pinocchio](https://github.com/stack-of-tasks/pinocchio)** | ⭐3,690 | 刚体动力学算法的快速灵活实现，是人形/机械臂控制的底层数学基础 |
| **[JacopoPan/aerial-autonomy-stack](https://github.com/JacopoPan/aerial-autonomy-stack)** | ⭐582 | PX4/ArduPilot 无人机集群仿真与部署框架，集成 ROS2 + YOLO + LiDAR + Jetson |

### 📊 数据集与基准

| 项目 | Star | 说明 |
|------|------|------|
| **[StanfordVL/BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K)** | ⭐1,669 | 加速具身 AI 研究的标准化平台，1000+ 日常任务仿真基准 |
| **[RoboVerseOrg/RoboVerse](https://github.com/RoboVerseOrg/RoboVerse)** | ⭐1,840 | 面向可扩展通用机器人学习的统一平台、数据集与基准 |
| **[PhyAgentOS/PhyAgentOS-core](https://github.com/PhyAgentOS/PhyAgentOS-core)** | ⭐1,894 | 基于 Agentic Workflow 的自演化具身 AI 操作系统 |

---

## 五、生态趋势信号

**VLA 工程化进入"全栈平台竞争"阶段**——FluxVLA、τ0-VLA、VLA-Handbook、vla-evaluation-harness 等项目从数据、训练、评估、部署四个维度同步推进，意味着 VLA 已从"论文指标比拼"过渡到"工程体验比拼"。

**世界模型（World Model）成为具身智能新枢纽**——Awesome-World-Models、VAGEN、τ0-VLA、newton-physics 等从不同维度汇流：前者是学术资源整合，中间是 RL 训练中的世界模型引导推理，后者是物理仿真引擎的精度跃迁。三者共同指向"以世界模型为底座"的下一代具身系统架构。

**Rust 正在重塑机器人软件栈**——dora-rs、copper-rs、ros2_rust、robonix 等关键中间件与 OS 项目不约而同选择 Rust，背后是对**实时性、内存安全、确定性回放**的共同追求。

**具身数据工程走向"质量化"**——Hebbian-Robotics/hflow、Anchor-Align、omertt27/Calibra 等项目从"数据采集"转向"数据验证、对齐与抗遗忘"，呼应了 iMerit 被收购所揭示的"具身数据服务"产业价值。

---

## 六、值得关注

1. **[dexmal/opendm](https://github.com/dexmal/opendm)** — 当前 GitHub 上罕见的**开放世界通用具身基础模型**开源实现，是跟踪 embodied foundation model 主线最直接的入口；其架构、训练数据与评测协议值得密切跟踪。

2. **[sii-research/tau-0-vla](https://github.com/sii-research/tau-0-vla)** — τ0-VLA 把"世界模型引导的 Test-Time Computation"显式引入 VLA，是**分层推理 + Test-Time Scaling**在机器人领域的早期落地，可能成为下一波 VLA 论文的范式参考。

3. **[EXL 收购 iMerit](https://www.therobotreport.com/exl-acquires-physical-ai-model-developer-imerit/)** — 数据服务商整合物理 AI 模型能力，是观察"**具身数据 → 模型 → 部署**"产业链如何整合的关键事件，预示着未来 12 个月内可能涌现更多类似并购，国产具身数据公司或将迎来估值重估。

---

*日报由具身智能开源情报系统自动生成，欢迎反馈与订阅。*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*