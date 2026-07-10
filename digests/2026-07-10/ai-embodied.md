# 具身智能开源动态日报 2026-07-10

> 数据来源: GitHub Search API (131 仓库) | ArXiv cs.RO (0 篇论文) | RSS 新闻 (38 条) | 生成时间: 2026-07-10 02:25 UTC

---

# 具身智能开源动态日报
*日期：今日 | 数据源：IEEE Spectrum、The Robot Report、GitHub*

---

## 一、今日速览

今日具身智能领域呈现**三大主线**：手术机器人与类人机器人在医疗场景加速融合，IEEE 表彰日本机器人先驱 Fukuda 与"日本能否追赶中国"的产业讨论形成产业格局话题对冲；GitHub 端 VLA（视觉-语言-动作）模型生态持续爆发，单日出现 FluxVLA、InternVLA-A1、DySL-VLA、OptimusVLA 等多个新仓库，且国内机构（腾讯混元、Intern Robotics、北大、PKU）成为主力贡献者；底层仿真与基础设施层面，MuJoCo Warp + Newton 物理引擎与 Isaac Lab/mjlab 形成新格局，ROS 经典栈（Autoware、PX4、CARLA）依旧高活跃。ArXiv cs.RO 今日无新论文提交，可能为周末低谷。

---

## 二、行业脉搏

**1. [IEEE 表彰机器人先驱 Toshio Fukuda](https://spectrum.ieee.org/ieee-honors-toshio-fukuda)** — IEEE Spectrum Robotics
> 双臂机器人和微纳机器人领域奠基人 Fukuda 教授获 IEEE 荣誉，象征学术界对类人灵巧操作与生物医学机器人融合路径的持续认可。

**2. [Japan Pioneered Humanoid Robots—Can It Now Catch China?](https://spectrum.ieee.org/humanoid-robots-japan)** — IEEE Spectrum Robotics
> 深度剖析日本（Honda ASIMO、SoftBank Pepper）传统优势与中国（Unitree、Fourier、XPeng）量产能力的产业对比，揭示**量产成本与供应链**已成新分水岭。

**3. [ForSight Robotics 迈向全机器人白内障手术](https://www.therobotreport.com/forsight-robotics-road-to-performing-a-fully-robotic-cataracts-surgery/)** — The Robot Report
> 以色列手术机器人公司 ForSight 公布从眼科显微手术切入的临床路径，与传统 da Vinci 形成差异化定位。

**4. [Beyond da Vinci: 通用人形机器人是外科手术的下一个前沿](https://www.therobotreport.com/beyond-da-vinci-why-versatile-humanoid-robots-are-next-frontier-surgery/)** — The Robot Report
> 探讨**通用人形平台**在手术室替代专用器械的趋势，与 ForSight 路径形成"专用 vs 通用"两种产业哲学。

**5. [加州 AV 合规新现实：罚单、地理围栏与 100 万英里](https://www.therobotreport.com/tickets-geofences-1m-miles-new-reality-california-av-compliance/)** — The Robot Report
> 加州 DMV 对自动驾驶大规模测试引入**精细化合规框架**，预示 L4 落地前夜的监管收敛。

---

## 三、研究前沿

> ⚠️ **今日 ArXiv cs.RO 暂无可用论文（0 篇）**，推测为周末投稿低谷期。建议关注昨日 / 明日补发窗口。建议重点跟踪仓库中已开放源码的工作：
> - [OpenDriveLab/RISE](https://github.com/OpenDriveLab/RISE)（RSS 2026，组合世界模型自改进策略）
> - [URLab-Sim/UnrealRoboticsLab](https://github.com/URLab-Sim/UnrealRoboticsLab)（UE 渲染 + MuJoCo 物理融合）

---

## 四、重点项目

### 🦾 机器人学习与控制

- **[ARISE-Initiative/robosuite](https://github.com/ARISE-Initiative/robosuite)** ⭐2,506
  模块化机器人学习仿真框架与基准，操控任务的事实标准之一。

- **[RLinf/RLinf](https://github.com/RLinf/RLinf)** ⭐4,063
  面向具身与 Agentic AI 的强化学习基础设施，覆盖 VLA/RL 全链路训练。

- **[OpenPipe/ART](https://github.com/OpenPipe/ART)** ⭐10,358
  基于 GRPO 的多步 Agent 强化训练框架，支持 Qwen3.6、GPT-OSS、Llama 等开源模型。

- **[enactic/openarm](https://github.com/enactic/openarm)** ⭐2,706
  全开源人形机械臂，面向接触丰富环境的物理 AI 研究与部署。

- **[Om-ai-lab/VLM-R1](https://github.com/om-ai-lab/VLM-R1)** ⭐6,002
  用强化学习提升 VLM 视觉理解能力，可与 VLA 训练流程结合。

### 🤖 仿真与框架

- **[carla-simulator/carla](https://github.com/carla-simulator/carla)** ⭐14,156
  自动驾驶研究开源仿真器标杆，L4 算法训练与回放事实标准。

- **[AutowareFoundation/autoware](https://github.com/autowarefoundation/autoware)** ⭐11,821
  全球领先的自动驾驶开源软件项目，覆盖感知—规划—控制全栈。

- **[isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab)** ⭐7,645
  基于 NVIDIA Isaac Sim 的统一机器人学习框架，GPU 加速 sim-to-real 主流入口。

- **[newton-physics/newton](https://github.com/newton-physics/newton)** ⭐5,179
  基于 NVIDIA Warp 的开源 GPU 加速物理仿真引擎，专为机器人研究设计。

- **[cyberbotics/webots](https://github.com/cyberbotics/webots)** ⭐4,450
  跨平台开源机器人仿真器，ROS 原生集成，教学与科研常用入口。

- **[mujocolab/mjlab](https://github.com/mujocolab/mjlab)** ⭐2,663
  Isaac Lab API + MuJoCo-Warp 后端，标志 MuJoCo 与 Isaac 生态加速融合。

### 🧠 VLA 与基础模型

- **[InternRobotics/InternVLA-A-series](https://github.com/InternRobotics/InternVLA-A-series)** ⭐479
  上海 AI Lab 统一理解、生成与动作的 VLA 系列，覆盖操控任务全场景。

- **[FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA)** ⭐518
  VLA 工程化全流程平台——数据、真机部署一体化，端到端工程典范。

- **[Tencent-Hunyuan/Hy-Embodied-0.5-VLA](https://github.com/Tencent-Hunyuan/Hy-Embodied-0.5-VLA)** ⭐192
  腾讯混元从 VLA 模型到真机机器人学习栈的工业级实现。

- **[PKU-SEC-Lab/DYSL_VLA](https://github.com/PKU-SEC-Lab/DYSL_VLA)** ⭐24
  动态-静态层跳过实现 3.75× 推理加速、85.7× 训练压缩，VLA 高效推理关键进展。

- **[iLearn-Lab/CVPR26-OptimusVLA](https://github.com/iLearn-Lab/CVPR26-OptimusVLA)** ⭐23
  CVPR 2026，双记忆增强 VLA，融合全局先验与局部一致性。

### 🔧 硬件与驱动

- **[ArduPilot/ardupilot](https://github.com/ArduPilot/ardupilot)** ⭐15,440
  全球最广泛部署的开源飞控（ArduPlane/Copter/Rover/Sub），无人机与无人系统事实标准。

- **[PX4/PX4-Autopilot](https://github.com/PX4/PX4-Autopilot)** ⭐12,113
  学术界主流开源飞控，与 ROS 2 深度集成。

- **[kornia/kornia](https://github.com/kornia/kornia)** ⭐11,272
  几何计算机视觉库，空间 AI 可微分前端。

### 📊 数据集与基准

- **[StanfordVL/BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K)** ⭐1,560
  具身 AI 加速研究平台，1K 日常任务仿真基准。

- **[OpenDriveLab/RISE](https://github.com/OpenDriveLab/RISE)** ⭐314
  RSS 2026，自改进机器人策略 + 组合世界模型代码。

- **[hku-mars/UMI-3D](https://github.com/hku-mars/UMI-3D)** ⭐254
  港大 Mars 实验室 UMI-3D SLAM 与数据处理流水线，UMI 生态核心。

---

## 五、生态趋势信号

本日信号呈现**三层叠加**：(1) **VLA 工程化竞赛白热化**——5 个新仓库从不同维度切入（InternVLA 通用、FluxVLA 工程平台、Hy-Embodied 工业级、DySL 高效推理、OptimusVLA 全局-局部融合），国内厂商与高校抢占主导；(2) **底层仿真栈进入"战国时代"**——Newton（NVIDIA Warp）、mjlab（MuJoCo-Warp）、IsaacLab 形成 GPU 物理三方会战，Open 物理引擎（DART、Gazebo gz-physics）同步演进，sim-to-real 性能差距进一步拉大；(3) **手术机器人向通用化迁移**——从专用器械（ForSight）到人形平台（Beyond da Vinci）的叙事切换，反映具身 AI 对医疗自动化的渗透。结合日本—中国人形机器人产业对比与加州 AV 百万英里合规数据，可推断 2026 年具身智能正进入**"量产合规 + 通用平台 + 高效 VLA"**三轨并行的新阶段。

---

## 六、值得关注

**1. 中国机构 VLA 矩阵集中爆发**
今日 vla 类别下 InternRobotics、Tencent-Hunyuan、PKU-SEC-Lab、UCLA-Mobility、iLearn-Lab 多源集中更新，覆盖通用、工程化、高效推理、双记忆架构等全谱系，标志中国学界与工业界已在 VLA 赛道形成**系统性领先**。建议持续跟踪 [InternVLA-A-series](https://github.com/InternRobotics/InternVLA-A-series)、[Hy-Embodied-0.5-VLA](https://github.com/Tencent-Hunyuan/Hy-Embodied-0.5-VLA)、[DySL_VLA](https://github.com/PKU-SEC-Lab/DYSL_VLA) 三条主线。

**2. MuJoCo Warp × Newton × IsaacLab 物理仿真新三角**
[newton-physics/newton](https://github.com/newton-physics/newton) 与 [mujocolab/mjlab](https://github.com/mujocolab/mjlab) 同步活跃，结合 [google-deepmind/mujoco](https://github.com/google-deepmind/mujoco) 主仓库的更新节奏，**GPU 原生物理引擎**成为具身训练瓶颈突破的关键变量，是 sim-to-real 落地工程的核心依赖。

**3. 手术机器人双路径分化**
[ForSight 全机器人白内障手术](https://www.therobotreport.com/forsight-robotics-road-to-performing-a-fully-robotic-cataracts-surgery/) 与 [Beyond da Vinci 通用人形外科](https://www.therobotreport.com/beyond-da-vinci-why-versatile-humanoid-robots-are-next-frontier-surgery/) 同期报道，呈现**专用高精度 vs 通用通用化**两条医疗机器人路线，2026 年临床落地数据值得关注。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*