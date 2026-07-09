# 具身智能开源动态日报 2026-07-09

> 数据来源: GitHub Search API (135 仓库) | ArXiv cs.RO (30 篇论文) | RSS 新闻 (40 条) | 生成时间: 2026-07-09 02:36 UTC

---

# 具身智能开源动态日报

**日期：2026年1月 · 今日共追踪：40 条行业新闻 · 30 篇 cs.RO 论文 · 135 个活跃仓库**

---

## 一、今日速览

今日开源生态呈"软硬协同、基础模型加速渗透"双线推进：研究端，**Dual Latent Memory VLA** 与 **ELEANOR 软体象鼻臂** 直面 VLA 模型的马尔可夫假设局限与高灵巧度操作难题；产品端，**NVIDIA × Hugging Face 联手升级 LeRobot**，将主流 VLA 框架门槛进一步降低；产业端，**Tesollo 启动 IPO 并押注人形机器人手**，**ABB 把 vSLAM 装进 F712 自主叉车**，人形与工业两条赛道同时进入工程兑现期。

---

## 二、行业脉搏

- **NVIDIA 与 Hugging Face 深化 LeRobot 合作**——引入新模型与框架，硬件-数据-算法栈进一步贯通，对开源具身学习社区是显著利好。
  👉 https://www.therobotreport.com/nvidia-hugging-face-bring-new-models-frameworks-lerobot/

- **日本具身机器人产业能否赶超中国？**——IEEE Spectrum 深度报道日企在传统优势领域（谐波减速器、伺服）之外寻求差异化，提示全球化竞争格局重塑。
  👉 https://spectrum.ieee.org/humanoid-robots-japan

- **Tesollo 启动 IPO 并开发人形机器人手**——韩国灵巧手厂商进入资本化阶段，是人形机器人核心部件国产化与商业化的重要信号。
  👉 https://www.therobotreport.com/tesollo-initiates-ipo-process-developing-humanoid-hands/

- **ABB 为 F712 自主叉车集成 vSLAM 导航**——无需改造环境即可部署，标志自主移动机器人在工业物流场景进入"开箱即用"阶段。
  👉 https://www.therobotreport.com/abb-robotics-includes-vslam-navigation-f712-autonomous-forklift/

- **加州 AV 监管新规：罚单、电子围栏与百万英里门槛**——Robot Report 报道显示监管正在收紧，自动驾驶合规成本上升。
  👉 https://www.therobotreport.com/tickets-geofences-1m-miles-new-reality-california-av-compliance/

---

## 三、研究前沿

- **Dual Latent Memory in VLA Models for Robotic Manipulation**
  打破主流 VLA 的马尔可夫假设，引入双潜空间记忆模块，提升长程操作任务稳定性。
  👉 http://arxiv.org/abs/2607.07608v1

- **ELEANOR: 仿象鼻软体连续臂**
  从生物结构出发的连续体软臂设计，兼具高灵巧度与可扩展性，对医疗、农业等非结构化场景意义重大。
  👉 http://arxiv.org/abs/2607.07622v1

- **EmbodiedGen V2: 面向具身 AI 的智能体化 3D 世界引擎**
  生成式 3D 世界 + 物理仿真一体化，显著降低具身智能训练环境构建成本。
  👉 http://arxiv.org/abs/2607.07459v1

- **GeoGS-SLAM: 仅几何的 Gaussian Splatting 稠密单目 SLAM**
  摆脱对 RGB 纹理的依赖，纯几何驱动的高保真稠密建图，对光照鲁棒性显著提升。
  👉 http://arxiv.org/abs/2607.07452v1

- **SonoRank: 基于前臂超声的实时手指屈曲检测**
  无需标定即可驱动动力假肢手，有望缓解动力假肢高弃用率问题。
  👉 http://arxiv.org/abs/2607.07542v1

---

## 四、重点项目

### 🦾 机器人学习与控制

- **[isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab)** ⭐7,632
  基于 NVIDIA Isaac Sim 的统一机器人学习框架，已成为大规模 RL/IL 训练的事实标准。

- **[RLinf/RLinf](https://github.com/RLinf/RLinf)** ⭐4,045
  面向具身智能与 Agentic AI 的强化学习基础设施，覆盖从仿真到真机的端到端流程。

- **[ARISE-Initiative/robosuite](https://github.com/ARISE-Initiative/robosuite)** ⭐2,503
  模块化机器人学习仿真与基准框架，机器人操作研究的核心实验平台之一。

- **[robocasa/robocasa](https://github.com/robocasa/robocasa)** ⭐1,527
  大规模日常任务仿真，面向通用机器人策略学习的厨房场景基准。

- **[OpenDriveLab/RISE](https://github.com/OpenDriveLab/RISE)** ⭐313
  [RSS 2026] 基于组合式世界模型的自改进机器人策略，代表"策略自进化"前沿方向。

- **[RobotControlStack/robot-control-stack](https://github.com/RobotControlStack/robot-control-stack)** ⭐122
  轻量级 ROS-free 的 Sim-to-Real 框架，原生支持 Franka、UR5e、xArm、SO101 上的 VLA 与 RL 训练。

### 🤖 仿真与框架

- **[carla-simulator/carla](https://github.com/carla-simulator/carla)** ⭐14,150
  自动驾驶研究的主流开源仿真器，CARLA-GS 等新工作持续扩展其能力边界。

- **[google-deepmind/mujoco](https://github.com/google-deepmind/mujoco)** ⭐14,135
  通用接触物理仿真引擎，机器人研究与 RL 训练的事实标准之一。

- **[newton-physics/newton](https://github.com/newton-physics/newton)** ⭐5,176
  基于 NVIDIA Warp 的 GPU 加速开源物理引擎，专为机器人研究者设计。

- **[mujocolab/mjlab](https://github.com/mujocolab/mjlab)** ⭐2,659
  Isaac Lab API + MuJoCo-Warp 后端，为 RL 与机器人研究提供新选择。

- **[ros-navigation/navigation2](https://github.com/ros-navigation/navigation2)** ⭐4,444
  ROS 2 官方导航框架，移动机器人产业部署的基石。

- **[gazebosim/gz-sim](https://github.com/gazebosim/gz-sim)** ⭐1,407
  Gazebo 新一代开源机器人仿真器，多物理后端可插拔。

### 🧠 VLA 与基础模型

- **[FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA)** ⭐515
  一体化 VLA 工程平台，覆盖从数据采集到真机部署全链路。

- **[InternRobotics/InternVLA-A-series](https://github.com/InternRobotics/InternVLA-A-series)** ⭐473
  InternVLA-A1：统一理解、生成与动作的机器人操作基础模型。

- **[allenai/vla-evaluation-harness](https://github.com/allenai/vla-evaluation-harness)** ⭐427
  在任意仿真基准上一键评测任意 VLA 模型，推动领域标准化评测。

- **[Tencent-Hunyuan/Hy-Embodied-0.5-VLA](https://github.com/Tencent-Hunyuan/Hy-Embodied-0.5-VLA)** ⭐189
  腾讯混元：从 VLA 模型到真实机器人学习栈的端到端开源实现。

- **[TensorAuto/OpenTau](https://github.com/TensorAuto/OpenTau)** ⭐183
  基于 PyTorch 的真实机器人 VLA 训练基础设施。

- **[lucidrains/mimic-video](https://github.com/lucidrains/mimic-video)** ⭐116
  Mimic-Video：视频动作模型，实现超越 VLA 的泛化机器人控制。

### 🔧 硬件与驱动

- **[ArduPilot/ardupilot](https://github.com/ArduPilot/ardupilot)** ⭐15,437
  ArduPlane / ArduCopter / ArduRover / ArduSub 全系列开源飞控。

- **[PX4/PX4-Autopilot](https://github.com/PX4/PX4-Autopilot)** ⭐12,105
  学术界与工业界广泛采用的 PX4 开源自驾仪。

- **[enactic/openarm](https://github.com/enactic/openarm)** ⭐2,704
  完全开源的人形机器人臂，专为接触丰富的物理 AI 部署设计。

- **[Source-Robotics/PAR6-Collaborative-Robot-Arm](https://github.com/Source-Robotics/PAR6-Collaborative-Robot-Arm)** ⭐26
  面向教育与研发的 SOTA 开源协作机器人臂。

### 📊 数据集与基准

- **[StanfordVL/BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K)** ⭐1,558
  加速具身 AI 研究的标杆平台，1K 日常任务仿真基准。

- **[realsee-developer/RealSee3D](https://github.com/realsee-developer/RealSee3D)** ⭐277
  多视角 RGB-D 数据集，融合真实采集与程序化生成场景。

- **[InternRobotics/InternScenes](https://github.com/InternRobotics/InternScenes)** ⭐254
  [NeurIPS 2025] 大规模交互式室内场景数据集。

- **[hku-mars/UMI-3D](https://github.com/hku-mars/UMI-3D)** ⭐254
  UMI-3D SLAM 与数据处理管线，面向通用操作接口的数据采集方案。

---

## 五、生态趋势信号

VLA 正在从"单步预测"走向"记忆增强"：Dual Latent Memory VLA 等工作表明，长程任务下的非马尔可夫建模已成为下一阶段主战场。硬件层面，软体（ELEANOR 象鼻臂）、假肢（SonoRank）、人形手（Tesollo）三条原本割裂的赛道因灵巧操作需求重新聚拢。仿真侧呈现"分层替代"格局——MuJoCo-Warp（mjlab）、Newton、Isaac Lab 形成对 Isaac Sim + Isaac Lab 的多极挑战，而 VLA 评测工具（allenai/vla-evaluation-harness）的出现预示着评测标准化正在加速。

---

## 六、值得关注

1. **NVIDIA × Hugging Face 升级 LeRobot** —— 头部芯片厂商与最大开源模型社区直接绑定，VLA 训练/部署成本结构将快速重构，所有具身团队都需重新评估技术栈。
   👉 https://www.therobotreport.com/nvidia-hugging-face-bring-new-models-frameworks-lerobot/

2. **EmbodiedGen V2 + RISE 自进化策略** —— 生成式 3D 世界与组合式世界模型并进，意味着"仿真器即策略生成器"范式正在成形，将深刻影响 sim-to-real 研究方向。
   👉 http://arxiv.org/abs/2607.07459v1

3. **Tesla-style 软体象鼻臂 ELEANOR** —— 突破了刚体机械臂的形态边界，为医疗、农业、灾后救援等非结构化场景打开新应用入口，建议持续跟踪其后续工程化进展。
   👉 http://arxiv.org/abs/2607.07622v1

---

*📮 反馈与投稿：欢迎提交 PR 补充你关注的项目。日报由具身智能开源观察小组整理。*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*