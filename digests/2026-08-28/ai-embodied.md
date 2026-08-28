# 具身智能开源动态日报 2026-08-28

> 数据来源: GitHub Search API (131 仓库) | ArXiv cs.RO (0 篇论文) | RSS 新闻 (47 条) | 生成时间: 2026-08-28 08:29 UTC

---

# 具身智能开源动态日报
**日期**：2025 年 · 第 XX 期

---

## 一、今日速览

今日行业以**商业落地与资本动作**为主线：NSF 宣布 9000 万美元投资三大技术中心（其中之一聚焦机器人），Gatik 完成 2 亿美元融资加速自动驾驶卡车商业化，Teradyne 再度起诉中国协作机器人厂商以遏制"仿冒"。开源生态方面，MuJoCo 系（Warp/Newton/mjlab）持续主导仿真赛道，Rust 在机器人中间件层加速渗透（copper-rs、ros2_rust、dora、robonix），VLA 工程化套件（FluxVLA、τ0-VLA、VLA-Evaluation-Harness）形成"训练—评测—部署"闭环雏形。ArXiv cs.RO 今日无新增论文，建议关注下周的 NeurIPS 投稿高峰。

---

## 二、行业脉搏

- **NSF 投入 9000 万美元建三大技术中心，含机器人中心**
  [链接](https://www.therobotreport.com/nsf-invests-90m-three-new-technology-centers-including-one-focused-robotics/)
  美国国家科学基金会启动新一轮技术中心计划，机器人中心将聚焦具身智能与协同制造，体现国家级对"物理 AI"的战略加码。

- **Gatik 完成 2 亿美元融资，持续扩张自动驾驶卡车**
  [链接](https://www.therobotreport.com/gatik-brings-in-200m-to-continue-expanding-autonomous-trucking-operations/)
  中程无人货运赛道单笔最大融资之一，B2B 物流的 L4 路线在沃尔玛、必胜客等客户验证后进入规模化复制期。

- **Teradyne 再度起诉中国协作机器人厂商**
  [链接](https://www.therobotreport.com/teradyne-robotics-sues-another-chinese-cobot-maker/)
  优傲（UR）母公司持续推进专利诉讼，反映协作机器人赛道进入"技术壁垒 + 法律壁垒"双重建护阶段。

- **Bedrock Robotics 无人挖掘机首批部署落地**
  [链接](https://www.therobotreport.com/bedrock-robotics-first-operator-free-excavator-deployments-take-off/)
  建筑工地成为继仓储、公路之后又一个具身智能规模化场景，"去操作员化"重机械是 2026 年的核心叙事。

- **IEEE Spectrum：人形机器人是否需要"超人化"？AI 陪伴机器人正在重塑家庭连接**
  [链接1](https://spectrum.ieee.org/video-friday-unitree-superhuman) · [链接2](https://spectrum.ieee.org/ollobot-ai-companion-robot)
  宇树展示超人类运动性能，OlloBot 等陪伴机器人探索"非人形"形态，两条路线分化趋势明显。

---

## 三、研究前沿

> ⚠️ **今日 ArXiv cs.RO 无新论文**，建议持续关注 cs.RO/cs.AI/cs.CV 交叉领域。下一波论文高峰预计在 NeurIPS 2025 投稿截止日前后（11 月下旬）。

可作为今日研究风向标的，是 GitHub 上集中涌现的若干**世界模型 + VLA** 工程化项目（如 `VAGEN`、`tau-0-vla`、`mimic-video`），它们对应 NeurIPS 2025 投稿线上的"World Model for RL/VLA"主线。

---

## 四、重点项目

### 🦾 机器人学习与控制

| 仓库 | ⭐ | 核心价值 |
|------|---|----------|
| [**OpenPipe/ART**](https://github.com/OpenPipe/ART) | 10,672 | 基于 GRPO 的多步骤 Agent 强化学习框架，支持 Qwen3.6/GPT-OSS/Llama 等开源模型，已用于真实任务"在职训练" |
| [**Unity-Technologies/ml-agents**](https://github.com/Unity-Technologies/ml-agents) | 19,651 | 游戏引擎出身的通用 RL/IL 训练平台，社区事实标准之一 |
| [**microsoft/agent-lightning**](https://github.com/microsoft/agent-lightning) | 17,886 | 微软开源的"Agent 训练器"，打通多框架强化学习与真实任务链路 |
| [**RLinf/RLinf**](https://github.com/RLinf/RLinf) | 4,666 | 面向具身与 Agentic AI 的 RL 基础设施，专为 VLA/长任务设计 |
| [**RoboVerseOrg/RoboVerse**](https://github.com/RoboVerseOrg/RoboVerse) | 1,830 | 统一平台+数据集+基准的机器人学习底座，强调可扩展与可泛化 |
| [**leo-zhu-agibot/dual-so101-mobile-manipulator**](https://github.com/leo-zhu-agibot/dual-so101-mobile-manipulator) | 41 | 双 SO-101 移动操作参考栈，ROS 2 + Isaac Sim + 多模态数据 QC + 模仿学习一站式 |

### 🤖 仿真与框架

| 仓库 | ⭐ | 核心价值 |
|------|---|----------|
| [**google-deepmind/mujoco**](https://github.com/google-deepmind/mujoco) | 14,728 | 接触动力学事实标准，2025 起进入"Warp GPU 加速"新时代 |
| [**isaac-sim/IsaacLab**](https://github.com/isaac-sim/IsaacLab) | 7,985 | NVIDIA Isaac Sim 上的统一机器人学习框架，主流 Sim2Real 入口 |
| [**newton-physics/newton**](https://github.com/newton-physics/newton) | 5,551 | 基于 NVIDIA Warp 的 GPU 加速物理引擎，瞄准机器人学家与仿真研究者 |
| [**mujocolab/mjlab**](https://github.com/mujocolab/mjlab) | 2,855 | "Isaac Lab API，MuJoCo-Warp 内核"，打通两大主流仿真栈 |
| [**ros-navigation/navigation2**](https://github.com/ros-navigation/navigation2) | 4,635 | ROS 2 导航事实标准，Nav2 生态核心 |
| [**dora-rs/dora**](https://github.com/dora-rs/dora) | 3,904 | Rust 写的 AI 机器人中间件，数据流架构低延迟可组合 |
| [**cyberbotics/webots**](https://github.com/cyberbotics/webots) | 4,579 | 老牌开源机器人仿真器，教育与研究高频使用 |
| [**gazebosim/gz-sim**](https://github.com/gazebosim/gz-sim) | 1,469 | 新一代 Gazebo，ROS 2 时代官方仿真器 |

### 🧠 VLA 与基础模型

| 仓库 | ⭐ | 核心价值 |
|------|---|----------|
| [**PhyAgentOS/PhyAgentOS-core**](https://github.com/PhyAgentOS/PhyAgentOS-core) | 1,857 | 自演化的具身智能 OS，构建在 Agentic Workflow 之上 |
| [**FluxVLA/FluxVLA**](https://github.com/FluxVLA/FluxVLA) | 635 | 一站式 VLA 工程平台：数据—训练—真机部署全流程 |
| [**sii-research/tau-0-vla**](https://github.com/sii-research/tau-0-vla) | 584 | τ0-VLA：引入世界模型指导测试时计算的分层机器人基础模型 |
| [**allenai/vla-evaluation-harness**](https://github.com/allenai/vla-evaluation-harness) | 567 | 跨模型/跨机器人仿真基准的 VLA 评测统一框架 |
| [**dexmal/opendm**](https://github.com/dexmal/opendm) | 425 | 面向通用具身智能的开放世界基础模型 |
| [**syswonder/robonix**](https://github.com/syswonder/robonix) | 343 | Rust 实现的机器人 Agentic OS，强调系统级可演进性 |
| [**ros-claw/rosclaw**](https://github.com/ros-claw/rosclaw) | 191 | 自演化运行时：e-URDF、沙箱安全、技能进化，将 AI Agent 落地为物理智能体 |

### 🔧 硬件与驱动

| 仓库 | ⭐ | 核心价值 |
|------|---|----------|
| [**commaai/openpilot**](https://github.com/commaai/openpilot) | 63,526 | 已在 300+ 车型落地的开源 ADAS OS，自动驾驶"装机量"标杆 |
| [**ArduPilot/ardupilot**](https://github.com/ArduPilot/ardupilot) | 15,759 | 全球最成熟的无人机/无人车自驾飞控，硬件生态最广 |
| [**PX4/PX4-Autopilot**](https://github.com/PX4/PX4-Autopilot) | 12,505 | 学术界与工业无人机的事实标准，研究友好 |
| [**ros2-rust/ros2_rust**](https://github.com/ros2-rust/ros2_rust) | 1,521 | ROS 2 官方 Rust 绑定，机器人 Rust 化主力 |
| [**copper-project/copper-rs**](https://github.com/copper-project/copper-rs) | 1,469 | Rust 机器人操作系统：构建、运行、回放全确定性 |
| [**JacopoPan/aerial-autonomy-stack**](https://github.com/JacopoPan/aerial-autonomy-stack) | 581 | PX4/ArduPilot + ROS 2 + YOLO/LiDAR/Jetson 的无人机集群开箱栈 |

### 📊 数据集与基准

| 仓库 | ⭐ | 核心价值 |
|------|---|----------|
| [**StanfordVL/BEHAVIOR-1K**](https://github.com/StanfordVL/BEHAVIOR-1K) | 1,665 | 1000 个日常任务的具身研究平台，李飞飞团队出品 |
| [**sou350121/VLA-Handbook**](https://github.com/sou350121/VLA-Handbook) | 557 | 中文 VLA 实战手册，面向算法工程师的入门/面试指南 |
| [**mll-lab-nu/VAGEN**](https://github.com/mll-lab-nu/VAGEN) | 493 | 多轮 VLM Agent 的世界模型强化学习框架（NeurIPS 2025） |

---

## 五、生态趋势信号

三股力量正在重塑具身智能开源版图：

1. **资本与政策双向加码**：NSF 9000 万、Gatik 2 亿、Bedrock 工程落地，标志具身智能从 PoC 走向规模化部署，**美国国家级机器人中心**与**中程物流/工程机械**成为新重点赛道。
2. **MuJoCo-Warp 取代 Isaac 主导仿真堆栈**：Newton、mjLab 等项目用 Warp GPU 内核重写物理仿真，**API 兼容 Isaac Lab 但算力效率大幅提升**，预示 2026 年 Sim2Real 主流路径迁移。
3. **Rust 机器人中间件成共识**：copper-rs、dora、robonix、ros2_rust 同时活跃，配合 ros-claw、PhyAgentOS 这类"机器人 OS"项目涌现，**机器人软件栈正经历从 ROS Python/C++ 到 Rust + Agent 的范式迁移**。
4. **VLA 进入"标准化"阶段**：FluxVLA、tau-0-VLA、VLA-Evaluation-Harness、OpenTau 形成"模型—评测—部署"三件套，工程门槛快速下降。

---

## 六、值得关注

- 🔥 **Bedrock Robotics 无人挖掘机首批部署** —— 建筑工地是具身智能尚未被充分定价的万亿级场景，其工程化路径（无人重机械+远程监管）将直接复制到矿山、港口、农业。
  [链接](https://www.therobotreport.com/bedrock-robotics-first-operator-free-excavator-deployments-take-off/)

- 🔥 **Gatik 2 亿美元融资** —— 自动驾驶卡车首次进入"规模化复制"门槛，对 Autoware、openpilot 等开源 AD 栈是直接利好，建议关注后续与 Tier-1 的硬件合作披露。
  [链接](https://www.therobotreport.com/gatik-brings-in-200m-to-continue-expanding-autonomous-trucking-operations/)

- 🔥 **Newton + mjLab 组成的 MuJoCo-Warp 生态** —— 若年内 Newton 稳定，将引发"仿真器迁移潮"：现有 Isaac Lab 用户成本极低地切换，ROS/Gazebo 系用户则可能跨过中间层直达 MuJoCo-Warp。
  [链接1](https://github.com/newton-physics/newton) · [链接2](https://github.com/mujocolab/mjlab)

---

*日报由开源情报自动聚合生成，仅供研究参考。*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*