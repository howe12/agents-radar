# 具身智能开源动态日报 2026-09-11

> 数据来源: GitHub Search API (129 仓库) | ArXiv cs.RO (30 篇论文) | RSS 新闻 (49 条) | 生成时间: 2026-09-11 02:29 UTC

---

# 具身智能开源动态日报

**日期：2026 年** · **信息来源：IEEE Spectrum、The Robot Report、ArXiv cs.RO、GitHub**

---

## 一、今日速览

今日具身智能领域呈现三条清晰主线：① **专利与资本博弈加剧**——Teradyne 起诉 JAKA、Swarmer 拟以最高 2.24 亿美元收购乌克兰 UGV 厂商 Ratel Robotics，反映工业机器人和无人系统领域竞争白热化；② **触觉感知与人形机器人取得算法突破**——IEEE Spectrum 关注机器人触觉学习，ArXiv 同时涌现"读心失败信号"的 FARM 世界模型和"感知盲"人形运动 CAP 方法；③ **VLA 与具身 OS 生态迅速扩张**——GitHub 上机器人学习、仿真、VLA 三大类仓库在过去 7 天均出现显著更新，物理 AI Agent 操作系统（如 PhyAgentOS、robonix、rai）正成为新一轮开源热点。

---

## 二、行业脉搏

1. **Teradyne 起诉 JAKA 侵犯 3 项 Universal Robots 专利**：协作机器人专利战延续到中国厂商，凸显 UR 系生态的护城河价值，也将影响国产协作机器人的海外布局。 [链接](https://www.therobotreport.com/teradyne-robotics-sues-jaka-over-3-universal-robots-patents/)

2. **Swarmer 拟以最高 2.24 亿美元收购乌克兰 Ratel Robotics**：无人地面系统（UGS）在俄乌战场验证后获得资本青睐，地面无人作战/救援平台正快速产业化。 [链接](https://www.therobotreport.com/swarmer-to-acquire-ukrainian-ugv-maker-ratel-robotics-for-up-to-224m/)

3. **Monumental 公布砖砌机器人在建筑场景的工程教训**：真实建筑工地的高方差环境持续暴露移动机械臂的最后一公里难题，对 Sim-to-Real 迁移与具身部署流程极具参考价值。 [链接](https://www.therobotreport.com/what-bricklaying-has-taught-monumental-about-robots-construction/)

4. **Comau 为 Decathlon 自动化拣选、搬运与码垛**：欧洲零售物流再度落地大规模机器人部署，证明模块化工业机器人方案已具备规模化复制能力。 [链接](https://www.therobotreport.com/comau-automates-picking-handling-and-palletizing-for-decathlon/)

5. **Agility Robotics Digit 重新装饰展示** + **机器蟑螂救援机器人** + **Vitestro 自动采血机器人**：人形机器人在家庭服务、昆虫-机器人在搜救、医疗机器人临床化三条细分赛道并行推进。 [Digit](https://spectrum.ieee.org/video-friday-agility-robotics-digit) · [Cyborg Roach](https://spectrum.ieee.org/cyborg-rescue-roach) · [Vitestro](https://spectrum.ieee.org/blood-draw-robot-vitestro-aletta)

---

## 三、研究前沿

1. **FARM: Reading Failure Signals from the Internal Predictive States of a Frozen Robotic World Model** ([arxiv](http://arxiv.org/abs/2609.11445v1))
   提出无需训练的失败监测方法：从冻结世界模型的内部预测状态直接读取"失败信号"，为部署期在线风险评估提供轻量级方案，是世界模型走向部署的里程碑。

2. **CAP: Continuously Adaptive Perception-Blind Humanoid Locomotion via Learned Denoising** ([arxiv](http://arxiv.org/abs/2609.11553v1))
   针对人形机器人在复杂地形下因感知噪声导致的失效，通过学习去噪实现"感知盲"鲁棒运动，缓解对外感知模块的强依赖，对长距离野外部署意义重大。

3. **Memory as Plans: World-Action Modeling with Memory-Grounded Planning** ([arxiv](http://arxiv.org/abs/2609.11561v1))
   把"记忆"建模为可查询的计划，支持长程、非马尔可夫操控任务；与 OpenMOSS 的 Awesome-WAM 列表呼应，是 WAM 范式落地的重要尝试。

4. **SwarmNxt: Open-source Software-Hardware Platform for Fast and Agile Aerial Swarms** ([arxiv](http://arxiv.org/abs/2609.11382v1))
   开源软硬件协同的敏捷空中集群平台，覆盖安全、安防、搜救等时敏场景，为群体机器人研究提供可复现基础设施。

5. **GeoTrussRover: Morphological Computation with Contact-Semantic Control Primitives** ([arxiv](http://arxiv.org/abs/2609.11361v1))
   通过可重构桁架几何与"接触语义"控制基元实现形变计算，为复杂地形下的可重构机器人提供新的形态-控制协同设计范式。

---

## 四、重点项目

###  机器人学习与控制

- **[TianxingChen/Embodied-AI-Guide](https://github.com/TianxingChen/Embodied-AI-Guide)** ⭐ 15,908
  Lumina 社区维护的中文具身智能技术指南，整合 VLA、世界模型、人形机器人等全栈资源，是中文社区最具影响力的具身 AI 入门与进阶门户。

- **[RLinf/RLinf](https://github.com/RLinf/RLinf)** ⭐ 5,042
  面向具身与 Agentic AI 的强化学习基础设施，提供从仿真到真机一致的 RL 训练栈，是打通 Sim-to-Real RL 训练的关键底座。

- **[isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab)** ⭐ 8,097
  基于 NVIDIA Isaac Sim 的统一机器人学习框架，主流 Sim-to-Real RL 平台的标杆，几乎所有现代人形/机械臂策略训练都依赖其接口。

- **[RoboVerseOrg/RoboVerse](https://github.com/RoboVerseOrg/RoboVerse)** ⭐ 1,859
  统一平台、数据集与基准的可扩展机器人学习套件，目标是为通用机器人学习建立标准化评测协议。

- **[RobotControlStack/robot-control-stack](https://github.com/RobotControlStack/robot-control-stack)** ⭐ 158
  轻量、ROS-free 的 Sim-to-Real 框架，原生 MuJoCo Gymnasium 包装，支持 Franka/UR5e/xArm/SO101/YAM 等主流臂型部署 VLA 与 RL 策略。

- **[Hebbian-Robotics/hflow](https://github.com/Hebbian-Robotics/hflow)** ⭐ 261
  面向机器人团队的数据质量评估 SDK，针对 AI 模型训练数据做闭环质量验证，回应了"机器人数据引擎"日益重要的需求。

### 🤖 仿真与框架

- **[newton-physics/newton](https://github.com/newton-physics/newton)**  5,610
  基于 NVIDIA Warp 的开源 GPU 加速物理仿真引擎，专为机器人学家与仿真研究者打造，是 Isaac Sim 之外的新一代物理仿真选项。

- **[gazebosim/gz-sim](https://github.com/gazebosim/gz-sim)** ⭐ 1,495
  Gazebo 最新开源机器人仿真器，ROS 生态默认仿真后端之一，仍是入门与中等规模实验的首选平台。

- **[dartsim/dart](https://github.com/dartsim/dart)** ⭐ 1,204
  C++23 物理引擎，提供 Python 绑定，研究导向的多体动力学仿真器，在刚体动力学精度上具有优势。

- **[mujocolab/mjlab](https://github.com/mujocolab/mjlab)** ⭐ 3,035
  在 MuJoCo-Warp 之上实现 Isaac Lab API，为 RL 与机器人研究提供 GPU 加速、低门槛的 Isaac Lab 兼容替代。

- **[JacopoPan/aerial-autonomy-stack](https://github.com/JacopoPan/aerial-autonomy-stack)**  595
  PX4/ArduPilot 无人机集群的开源框架，集成 ROS 2、YOLO、LiDAR 与 Jetson，是空中具身智能的标准开发栈之一。

- **[omnilink-tech/omnisim](https://github.com/omnilink-tech/omnisim)** ⭐ 161
  面向 Coding Agent 的开源机器人仿真器，支持 HTTP/JSON + MCP 控制、Newton 物理、wgpu 渲染与 ROS 2，强调可复现基准。

### 🧠 VLA 与基础模型

- **[FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA)** ⭐ 664
  一站式 VLA 工程平台，覆盖从数据到真机部署的全链路，是国内开源 VLA 工程化最具代表性的项目之一。

- **[allenai/vla-evaluation-harness](https://github.com/allenai/vla-evaluation-harness)**  595
  AllenAI 推出的统一 VLA 评测框架，可将任意 VLA 模型在任意机器人仿真基准上评测，是 VLA 社区亟需的标准化评测工具。

- **[dora-rs/dora](https://github.com/dora-rs/dora)** ⭐ 3,930
  数据流驱动的机器人中间件，用 Rust 编写，主打低延迟、可组合、分布式，是 AI 机器人管线工程化的热门底座。

- **[PhyAgentOS/PhyAgentOS-core](https://github.com/PhyAgentOS/PhyAgentOS-core)** ⭐ 2,161
  递归自我改进的物理 Agent 操作系统，借助 Agentic 工作流让机器人策略持续自举，体现"具身 Agent OS"的新一代抽象。

- **[RobotecAI/rai](https://github.com/RobotecAI/rai)** ⭐ 588
  与厂商无关的 Physical AI 机器人 Agentic 框架，基于 ROS 2 实现复杂动作、场景化执行、日志与语音交互，是"ROS + LLM Agent"路线典型。

- **[syswonder/robonix](https://github.com/syswonder/robonix)** ⭐ 354
  Rust 编写的"机器人 Agentic 操作系统"，目标是统一机器人技能生命周期管理。

### 🔧 硬件与驱动

- **[enactic/openarm](https://github.com/enactic/openarm)** ⭐ 2,942
  全开源人形机械臂，面向接触丰富环境下的物理 AI 研究与部署，是具身研究社区最实用的开源硬件平台之一。

- **[murobotics-ai/handumi-sw](https://github.com/murobotics-ai/handumi-sw)** ⭐ 69
  同步双手数据采集与重定位的开源 HandUMI 软件，支持标定、QA、回放与遥操作，是双臂数据引擎的关键开源组件。

- **[ros-controls/mujoco_ros2_control](https://github.com/ros-controls/mujoco_ros2_control)**  246
  MuJoCo 与 ROS 2 control 的桥接包，提供多种传感器、RGB-D 与 LiDAR 插件，是 ROS 2 仿真栈与 MuJoCo 集成的标准接口。

- **[ros2-rust/ros2_rust](https://github.com/ros2-rust/ros2_rust)**  1,524
  ROS 2 的 Rust 绑定，反映 Rust 在机器人高性能运行时中的渗透趋势。

- **[arounamounchili/linkforge](https://github.com/arounamounchili/linkforge)**  256
  自称"机器人描述的 LLVM"，可编程地从 Python 或 Blender 组合、校验、编译 URDF/XACRO/SRDF 模型，URDF 工程化痛点的新解。

### 📊 数据集与基准

- **[StanfordVL/BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K)** ⭐ 1,689

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*