# 具身智能开源动态日报 2026-07-13

> 数据来源: GitHub Search API (130 仓库) | ArXiv cs.RO (0 篇论文) | RSS 新闻 (44 条) | 生成时间: 2026-07-13 02:08 UTC

---

# 具身智能开源动态日报

> 数据来源：IEEE Spectrum、The Robot Report、ROS Discourse、ArXiv cs.RO、GitHub Trending

---

## 一、今日速览

今日具身智能生态呈现出"应用落地与基础设施并行"的格局：产业侧关注机器人安全标准更新、乌克兰地面无人装备实战、Path Robotics 用 AI 优化焊接等实战化进展；学术侧今日 ArXiv cs.RO 暂无新论文提交，但 GitHub 端 VLA、触觉策略、世界模型、RL 基础设施类仓库持续高密度更新。VLA 模型正在从"算法"走向"工程化平台"——FluxVLA、InternVLA-A1、Tencent Hunyuan 等中国团队集中发力全栈式 VLA 部署栈，与 NVIDIA Isaac Lab、MuJoCo-Warp 等仿真引擎形成上下游协同。

---

## 二、行业脉搏

- **【标准化】** [Are suppliers ready for new robot safety standards?](https://www.therobotreport.com/are-suppliers-ready-for-new-robot-safety-standards/) —— ISO 10218、ISO/TS 15066 等协作机器人安全标准迭代，供应商面临新一轮合规改造，反映工业机器人正从"孤岛自动化"迈向"人机共融"。

- **【具身 AI 工程化】** [Why robotics teams need virtual gyms before deployment](https://www.therobotreport.com/why-robotics-teams-need-virtual-gyms-before-deployment/) —— 提出"Sim-to-Real 训练场"概念，主张部署前的虚拟强化训练将成为具身智能团队的标配流程。

- **【工业 AI】** [How Path Robotics uses AI to optimize robotic welding](https://www.therobotreport.com/how-path-robotics-uses-ai-optimize-robotic-welding/) —— 焊接场景的 AI 自适应优化是制造业具身 AI 最早实现 ROI 的赛道，路径值得借鉴。

- **【军事/无人系统】** [Ground Robots Inherit the Kill Zone](https://spectrum.ieee.org/ukraine-ground-drones) —— 乌克兰战场上地面无人车进入实战反馈循环，揭示低成本、自主导航、容错硬件的迫切需求。

- **【IP 与导航】** [XTEND secures U.S. patent for autonomous navigation technology](https://www.therobotreport.com/xtend-secures-u-s-patent-autonomous-navigation-technology/) —— 自主导航专利布局加速，技术壁垒逐步形成。

- **【人物】** [IEEE Honors Robotics Pioneer Toshio Fukuda](https://spectrum.ieee.org/ieee-honors-toshio-fukuda) —— IEEE 表彰日本机器人学先驱福田敏男，致敬其在微纳机器人、生物医学机器人领域的奠基贡献。

---

## 三、研究前沿

> ⚠️ 今日 ArXiv cs.RO 暂未收录新论文。

---

## 四、重点项目

### 🦾 机器人学习与控制

| 仓库 | Star | 说明 |
|---|---|---|
| [**RLinf/RLinf**](https://github.com/RLinf/RLinf) | ⭐4,081 | 面向具身智能与 Agentic AI 的强化学习基础设施，专注于将 RL 训练流程标准化、规模化，是连接 Isaac Lab/MuJoCo 仿真与真实部署的关键中间层。 |
| [**isaac-sim/IsaacLab**](https://github.com/isaac-sim/IsaacLab) | ⭐7,661 | NVIDIA Isaac Sim 上构建的统一机器人学习框架，提供 GPU 并行仿真，支持 RL/IL/VR 训练，是当前机器人学习的事实标准之一。 |
| [**enactic/openarm**](https://github.com/enactic/openarm) | ⭐2,709 | 完全开源的人形机械臂，专为接触丰富环境下的物理 AI 研究与部署设计，硬件+软件一体化交付。 |
| [**michaelyuancb/ftp1-policy**](https://github.com/michaelyuancb/ftp1-policy) | ⭐81 | **FTP-1**：跨多种触觉传感器的通用基础触觉策略，推动"触觉-视觉"多模态策略学习。 |
| [**VIRENA (BuceaGeorgia)**](https://github.com/BuceaGeorgia/VIRENA) | ⭐5 | 极简 VLA 模型：冻结 CLIP + 轻量 Head，可在 Mac 上无 GPU 跑 ManiSkill PickCube，降低 VLA 学习门槛。 |

### 🤖 仿真与框架

| 仓库 | Star | 说明 |
|---|---|---|
| [**google-deepmind/mujoco**](https://github.com/google-deepmind/mujoco) | ⭐14,177 | 多关节接触动力学物理仿真器，机器人研究的事实标准底座。 |
| [**newton-physics/newton**](https://github.com/newton-physics/newton) | ⭐5,186 | 基于 NVIDIA Warp 的开源 GPU 加速物理引擎，专为机器人学家打造，与 Isaac Lab 生态互补。 |
| [**mujocolab/mjlab**](https://github.com/mujocolab/mjlab) | ⭐2,669 | 在 MuJoCo-Warp 上复现 Isaac Lab API，兼顾速度与可移植性。 |
| [**google-deepmind/dm_control**](https://github.com/google-deepmind/dm_control) | ⭐4,631 | DeepMind 基于 MuJoCo 的 RL 物理仿真 + 训练套件，论文复现基准。 |
| [**cyberbotics/webots**](https://github.com/cyberbotics/webots) | ⭐4,452 | 开源通用机器人仿真器，支持 ROS/ROS2 联动，适合教学与跨平台验证。 |
| [**RobotLocomotion/drake**](https://github.com/RobotLocomotion/drake) | ⭐4,103 | MIT 的机器人模型设计与形式化验证框架，符号推导与优化求解强项突出。 |

### 🧠 VLA 与基础模型

| 仓库 | Star | 说明 |
|---|---|---|
| [**FluxVLA/FluxVLA**](https://github.com/FluxVLA/FluxVLA) | ⭐525 | 一站式 VLA 工程平台：覆盖数据采集→训练→真机部署全链路，是 VLA 走向工业化的代表性工程栈。 |
| [**InternRobotics/InternVLA-A-series**](https://github.com/InternRobotics/InternVLA-A-series) | ⭐484 | InternVLA-A1：统一理解、生成与动作的机器人操控模型，体现"认知-行动"融合趋势。 |
| [**allenai/vla-evaluation-harness**](https://github.com/allenai/vla-evaluation-harness) | ⭐436 | VLA 模型通用评测框架，统一不同机器人仿真基准下的评估流程。 |
| [**Tencent-Hunyuan/Hy-Embodied-0.5-VLA**](https://github.com/Tencent-Hunyuan/Hy-Embodied-0.5-VLA) | ⭐206 | 腾讯混元：从 VLA 模型到真实机器人学习栈，强调端到端工程化。 |
| [**TensorAuto/OpenTau**](https://github.com/TensorAuto/OpenTau) | ⭐184 | 基于 PyTorch 的真实机器人 VLA 训练基础设施，配套 Tensor 体系生态。 |
| [**PKU-SEC-Lab/DYSL_VLA**](https://github.com/PKU-SEC-Lab/DYSL_VLA) | ⭐25 | DySL-VLA：动态-静态层跳跃实现 3.75× 推理加速、85.7× 训练成本压缩，VLA 推理轻量化前沿。 |
| [**ucla-mobility/TIC-VLA**](https://github.com/ucla-mobility/TIC-VLA) | ⭐129 | Think-in-Control VLA，把"思考链"机制引入机器人导航决策。 |

### 🔧 硬件与驱动

| 仓库 | Star | 说明 |
|---|---|---|
| [**ArduPilot/ardupilot**](https://github.com/ArduPilot/ardupilot) | ⭐15,448 | 全球最成熟的无人机/无人车开源自驾仪，覆盖 ArduPlane/Copter/Rover/Sub。 |
| [**PX4/PX4-Autopilot**](https://github.com/PX4/PX4-Autopilot) | ⭐12,128 | 学术界主流的无人机飞控，与 ROS 2 深度集成。 |
| [**robotmcp/ros-mcp-server**](https://github.com/robotmcp/ros-mcp-server) | ⭐1,342 | 通过 MCP 协议让 Claude/GPT 直接操控 ROS 机器人，**LLM × ROS 的桥接关键组件**。 |
| [**copper-project/copper-rs**](https://github.com/copper-project/copper-rs) | ⭐1,400 | Rust 编写的机器人操作系统，支持确定性回放，适合工业级实时控制。 |
| [**ASIG-X/manusGlove**](https://github.com/ASIG-X/manusGlove) | ⭐22 | Manus 数据手套的 Linux ROS 2 驱动，为遥操作与数据采集提供触觉输入。 |

### 📊 数据集与基准

| 仓库 | Star | 说明 |
|---|---|---|
| [**StanfordVL/BEHAVIOR-1K**](https://github.com/StanfordVL/BEHAVIOR-1K) | ⭐1,563 | 加速具身 AI 研究的标准平台，1000+ 日常任务基准，是 Open X-Embodiment 之后的代表性评测体系。 |
| [**RoboTwin-Platform/RoboTwin**](https://github.com/RoboTwin-Platform/RoboTwin) | ⭐2,562 | RoboTwin 2.0：双臂操作仿真平台，专注 Sim-to-Real 数据合成与基准评测。 |
| [**realsee-developer/RealSee3D**](https://github.com/realsee-developer/RealSee3D) | ⭐278 | 多视角 RGB-D 数据集（真实采集 + 程序生成场景），面向 3D 视觉研究。 |
| [**InternRobotics/InternScenes**](https://github.com/InternRobotics/InternScenes) | ⭐256 | NeurIPS 2025 收录的大规模可交互室内场景数据集，支持具身导航与操控。 |
| [**hku-mars/UMI-3D**](https://github.com/hku-mars/UMI-3D) | ⭐254 | UMI-3D SLAM + 数据处理流水线，配套手持设备泛化操控研究。 |
| [**zju3dv/habitat-gs**](https://github.com/zju3dv/habitat-gs) | ⭐246 | ECCV 2026 收录：基于动态高斯泼溅的高保真导航仿真器，3DGS × 具身导航前沿。 |

---

## 五、生态趋势信号

三个信号共同勾勒出"具身智能工业化元年"的轮廓。**第一，VLA 正从研究走向工程平台**——FluxVLA、InternVLA、Tencent Hy-Embodied、Tensor OpenTau 同步发力全栈式 VLA 部署栈，DySL-VLA 等推理加速工作让边缘部署成为可能；**第二，仿真器竞争进入"GPU 原生"阶段**——Newton Physics、MuJoCo-Warp、Isaac Lab、Gazebo 形成四角格局，物理真实感与并行规模成为新分水岭；**第三，"具身数据飞轮"开始成形**——机器人安全标准、虚拟训练场、焊接 AI、战场地面机器人等新闻显示，现实场景数据正以非传统方式回流，加速闭环。配套的 LLM×ROS 桥接（MCP Server）、触觉策略（FTP-1）、世界模型（Awesome-World-Models）共同构成下一波创新的"水电煤"。

---

## 六、值得关注

1. 🔥 [**FluxVLA/FluxVLA**](https://github.com/FluxVLA/FluxVLA) —— 一站式 VLA 工程平台的崛起意味着"训练-部署-数据回灌"闭环正在成型，建议关注其与主流真机（Franka、UR5e、SO-101）的兼容矩阵。

2. 🔥 [**robotmcp/ros-mcp-server**](https://github.com/robotmcp/ros-mcp-server) —— LLM 直接驱动 ROS 机器人的桥梁组件，是通用 Agent 走向具身的"最后一公里"，随着 MCP 协议生态扩张，极可能成为 2025–2026 年最关键的基础设施之一。

3. 🔥 [**Tencent-Hunyuan/Hy-Embodied-0.5-VLA**](https://github.com/Tencent-Hunyuan/Hy-Embodied-0.5-VLA) + [**newton-physics/newton**](https://github.com/newton-physics/newton) —— 头部厂商同时押注"模型 + 仿真底座"双线战略，国内具身 AI 堆栈成型速度超出预期，值得持续跟踪。

---

*日报由机器人 & 具身智能领域分析师整理 · 数据截至今日*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*