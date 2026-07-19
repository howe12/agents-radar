# 具身智能开源动态日报 2026-07-19

> 数据来源: GitHub Search API (130 仓库) | ArXiv cs.RO (0 篇论文) | RSS 新闻 (41 条) | 生成时间: 2026-07-19 02:05 UTC

---

# 具身智能开源动态日报
**日期**：今日 | **覆盖范围**：行业新闻 · ArXiv cs.RO · GitHub Trending

---

## 📌 今日速览

今日具身智能生态呈现三大主线：**人形机器人商业化加速**——Weave Robotics 发布首款移动人形机器人 Isaac，X Square Robot 推出面向通用机器人的基础栈；**建筑场景机器人融资活跃**——Maximo、Monumental 两家专注太阳能与建筑施工的机器人公司分别披露进展与新融资；**开源 VLA 与世界模型热度持续**——GitHub 上 RLinf、IsaacLab、BEHAVIOR-1K、RoboVerse、InternVLA 等具身基础项目持续高活跃。世界模型与 VLA 学习手册类仓库涌现，标志着从「模型训练」向「全链路工程化与教学」的迁移。ArXiv cs.RO 今日无新增论文，但工程生态的前沿信号并未减弱。

---

## 🏭 行业脉搏

- **[X Square Robot 发布通用机器人基础栈](https://spectrum.ieee.org/x-square-robot-embodied-ai-stack)** —— IEEE Spectrum 报道 X Square Robot 构建面向通用机器人的端到端基础栈，强调从感知、规划到执行的统一抽象，是具身基础模型走向工程化的标志性进展。
- **[Weave Robotics 发布首款移动人形机器人 Isaac](https://www.therobotreport.com/weave-robotics-launches-isaac-first-mobile-humanoid-robot/)** —— Weave Robotics 推出其首款移动人形机器人，加入 Figure、1X、Apptronik 的人形机器人赛道竞争，反映人形机器人从概念验证向产品落地的提速。
- **[Monumental 获新融资，加速进入美国市场](https://www.therobotreport.com/with-new-funding-monumental-plans-bring-construction-robots-u-s/)** —— 专注建筑施工机器人的 Monumental 完成新一轮融资，计划将其砌砖机器人推向美国市场，是「机器人+垂直行业」商业化路径的典型案例。
- **[Maximo 创始人谈机器人在太阳能施工的加速作用](https://www.therobotreport.com/transforming-solar-construction-through-robotics-deise-yumi-asami-maximo/)** —— Maximo 创始人 Asami 分享机器人在太阳能场建设中的角色，体现机器人替代高强度户外劳动场景的真实需求。
- **[Palm Garden AI 发布 Coherence Guard 关系决策层](https://www.therobotreport.com/palm-garden-ai-develops-coherence-guard-relational-decision-layer-human-facing-robots/)** —— 面向人机交互机器人，Palm Garden AI 提出 Coherence Guard 关系决策层，强调机器人在多人、长时交互中的「一致性」治理，是社交机器人走向日常生活的关键技术。

---

## 🔬 研究前沿

> ⚠️ 今日 ArXiv cs.RO 暂无新增论文。建议关注仓库维度的研究动态（见下方「重点项目」中的 PhyAgentOS、InternVLA-A1、OMG 等），以及 Awesome-World-Models、Awesome-VLA-Papers 等清单对近期研究方向的整理。

可参考的研究线索包括：
- **PhyAgentOS**：自进化的具身智能操作系统，基于 Agentic Workflow 构建。
- **InternVLA-A1**：上海 AI Lab 等机构发布的统一理解、生成与动作的 VLA 模型。
- **OMG（Tsinghua-MARS-Lab）**：面向通用人形机器人控制的 Omni-Modal Motion Generation。

---

## ⭐ 重点项目

### 🦾 机器人学习与控制（模仿学习、强化学习、策略学习）

| 仓库 | Star | 一句话说明 |
|---|---|---|
| [**RLinf/RLinf**](https://github.com/RLinf/RLinf) | ⭐4,156 | 面向具身智能与 Agentic AI 的强化学习基础设施，强调可扩展 RL 训练栈 |
| [**enactic/openarm**](https://github.com/enactic/openarm) | ⭐2,738 | 全开源人形机械臂，面向接触丰富的物理 AI 研究与部署 |
| [**RoboTwin-Platform/RoboTwin**](https://github.com/RoboTwin-Platform/RoboTwin) | ⭐2,599 | RoboTwin 2.0：双臂机器人操作仿真平台，加速 sim-to-real |
| [**Open-X-Humanoid/TienKung-Lab**](https://github.com/Open-X-Humanoid/TienKung-Lab) | ⭐819 | 基于 Isaac Lab 的腿足机器人直训工作流 |
| [**Tsinghua-MARS-Lab/OMG**](https://github.com/Tsinghua-MARS-Lab/OMG) | ⭐92 | OMG：面向通用人形机器人控制的 Omni-Modal 动作生成 |
| [**DexForce/EmbodiChain**](https://github.com/DexForce/EmbodiChain) | ⭐195 | 端到端、GPU 加速、模块化的通用具身智能平台 |
| [**RobotControlStack/robot-control-stack**](https://github.com/RobotControlStack/robot-control-stack) | ⭐124 | 无 ROS 的轻量 sim-to-real 框架，原生支持 MuJoCo Gymnasium 与 VLA 模型 |
| [**SpesRobotics/teleop**](https://github.com/SpesRobotics/teleop) | ⭐251 | 利用 WebXR 把手机或 VR 头显变成机械臂遥操作设备 |
| [**michaelyuancb/ftp1-policy**](https://github.com/michaelyuancb/ftp1-policy) | ⭐86 | FTP-1：跨触觉传感器的通用基础触觉策略，面向接触丰富操作 |

### 🤖 仿真与框架（MuJoCo、Isaac、Gazebo、ROS）

| 仓库 | Star | 一句话说明 |
|---|---|---|
| [**google-deepmind/mujoco**](https://github.com/google-deepmind/mujoco) | ⭐14,254 | 高性能接触物理仿真器 MuJoCo，机器人学习的事实标准之一 |
| [**PX4/PX4-Autopilot**](https://github.com/PX4/PX4-Autopilot) | ⭐12,183 | 主流开源飞控软件 PX4，覆盖多旋翼、固定翼、垂起与潜航器 |
| [**isaac-sim/IsaacLab**](https://github.com/isaac-sim/IsaacLab) | ⭐7,700 | NVIDIA Isaac Lab：基于 Isaac Sim 的统一机器人学习框架 |
| [**newton-physics/newton**](https://github.com/newton-physics/newton) | ⭐5,208 | 基于 NVIDIA Warp 的开源 GPU 加速物理仿真引擎，面向机器人研究者 |
| [**google-deepmind/dm_control**](https://github.com/google-deepmind/dm_control) | ⭐4,639 | DeepMind 物理仿真+RL 环境软件栈，基于 MuJoCo |
| [**cyberbotics/webots**](https://github.com/cyberbotics/webots) | ⭐4,468 | 经典开源机器人仿真器 Webots，跨平台、教学与研究友好 |
| [**dora-rs/dora**](https://github.com/dora-rs/dora) | ⭐3,843 | 数据流驱动的机器人中间件，低延迟、可组合、分布式 |
| [**mujocolab/mjlab**](https://github.com/mujocolab/mjlab) | ⭐2,697 | 基于 MuJoCo-Warp 的 Isaac Lab 风格 API，RL 与机器人研究的新选择 |
| [**gazebosim/gz-sim**](https://github.com/gazebosim/gz-sim) | ⭐1,415 | 新一代 Gazebo 仿真器，开源机器人社区的核心基础设施 |
| [**copper-project/copper-rs**](https://github.com/copper-project/copper-rs) | ⭐1,416 | 机器人「操作系统」：可确定性构建、运行、回放整个机器人任务 |
| [**ros-navigation/navigation2**](https://github.com/ros-navigation/navigation2) | ⭐4,484 | ROS 2 导航框架与系统，机器人栈的经典基石 |

### 🧠 VLA 与基础模型（视觉-语言-动作、具身基础模型）

| 仓库 | Star | 一句话说明 |
|---|---|---|
| [**PhyAgentOS/PhyAgentOS**](https://github.com/PhyAgentOS/PhyAgentOS) | ⭐738 | 基于 Agentic Workflow 的自进化具身 AI 操作系统 |
| [**FluxVLA/FluxVLA**](https://github.com/FluxVLA/FluxVLA) | ⭐543 | 一体化 VLA 工程平台：从数据到真实机器人部署的全链路 |
| [**InternRobotics/InternVLA-A-series**](https://github.com/InternRobotics/InternVLA-A-series) | ⭐506 | InternVLA-A1：统一理解、生成与动作的机器人操作模型 |
| [**allenai/vla-evaluation-harness**](https://github.com/allenai/vla-evaluation-harness) | ⭐451 | 统一框架：在任意仿真基准上评估任意 VLA 模型 |
| [**sou350121/VLA-Handbook**](https://github.com/sou350121/VLA-Handbook) | ⭐403 | 全中文、实战导向的 VLA 学习与面试手册 |
| [**InternRobotics/VLAC**](https://github.com/InternRobotics/VLAC) | ⭐319 | VLAC：面向机器人真实世界强化学习的 VLA-Critic 模型 |
| [**TensorAuto/OpenTau**](https://github.com/TensorAuto/OpenTau) | ⭐188 | Tensor 的真实世界机器人 VLA 训练基础设施（PyTorch） |
| [**ros-claw/rosclaw**](https://github.com/ros-claw/rosclaw) | ⭐168 | 自进化 Physical AI / 具身 Agent 运行时基础设施（e-URDF、安全沙箱等） |
| [**BuceaGeorgia/VIRENA**](https://github.com/BuceaGeorgia/VIRENA) | ⭐7 | 极简可读的 VLA 模型：冻结 CLIP + 极小 head，Mac 即可运行 |

### 📊 数据集与基准（操作、导航、具身智能评测）

| 仓库 | Star | 一句话说明 |
|---|---|---|
| [**StanfordVL/BEHAVIOR-1K**](https://github.com/StanfordVL/BEHAVIOR-1K) | ⭐1,579 | 斯坦福 BEHAVIOR-1K 平台，加速具身 AI 研究的任务与基准 |
| [**RoboVerseOrg/RoboVerse**](https://github.com/RoboVerseOrg/RoboVerse) | ⭐1,781 | 统一平台、数据集与基准，面向可扩展、可泛化的机器人学习 |
| [**robotmcp/ros-mcp-server**](https://github.com/robotmcp/ros-mcp-server) | ⭐1,346 | 用 MCP 协议把 Claude / GPT 等大模型接入 ROS 机器人 |
| [**hku-mars/UMI-3D**](https://github.com/hku-mars/UMI-3D) | ⭐258 | UMI-3D SLAM 与数据处理流水线 |

### 🔧 硬件与驱动 / 生态工具

| 仓库 | Star | 一句话说明 |
|---|---|---|
| [**rerun-io/rerun**](https://github.com/rerun-io/rerun) | ⭐11,141 | 多模态机器人数据的可视化、查询与流式传输工具，已成为具身数据栈标配 |
| [**ArduPilot/ardupilot**](https://github.com/ArduPilot/ardupilot) | ⭐15,503 | 经典开源飞控固件：ArduPlane/Copter/Rover/Sub |
| [**JacopoPan/aerial-autonomy-stack**](https://github.com/JacopoPan/aerial-autonomy-stack) | ⭐527 | ROS2 + PX4/ArduPilot + YOLO/LiDAR + Jetson 的无人机集群栈 |
| [**FastCrest/tether**](https://github.com/FastCrest/tether) | ⭐73 | 端-云 AI 部署 CLI，跨 Jetson、RTX、Apple Silicon、AMD 的混合推理 |
| [**mstoelzle/focodyn**](https://github.com/mstoelzle/focodyn) | ⭐6 | 浮动接触动力学：为腿足机器人提供可微接触雅可比，服务 CBF/CLF 与轨迹优化 |

---

## 🌱 生态趋势信号

开源具身生态正在从「单点训练框架」向「全链路操作系统」演化：一方面，**PhyAgentOS、ros-claw、copper-rs、dora-rs** 等机器人 OS / Runtime 层项目密集出现，强调 Agent 化的自进化、确定性回放与安全沙箱；另一方面，**RLinf、IsaacLab、mjlab** 围绕强化学习与 sim-to-real 持续重构底层基础设施，把 MuJoCo-Warp 等新物理引擎推向主流。**VLA 阵营**（InternVLA、FluxVLA、VLAC、OpenTau、VIRENA）则在「理解—生成—动作」统一与世界模型驱动两条路径上并行探索，与 BEHAVIOR-1K、Rob

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*