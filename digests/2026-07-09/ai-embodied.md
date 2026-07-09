# 具身智能开源动态日报 2026-07-09

> 数据来源: GitHub Search API (135 仓库) | ArXiv cs.RO (30 篇论文) | RSS 新闻 (39 条) | 生成时间: 2026-07-09 05:53 UTC

---

# 具身智能开源动态日报
**2026年1月22日 · 第 041 期**

---

## 📌 今日速览

今日动态呈现 **"硬件商业化、基础模型生态扩张、世界模型提速"** 三条主线：工业侧 Tesollo 凭灵巧手启动 IPO、ABB 将 vSLAM 注入自主叉车，标志灵巧操作与移动机器人在产业端的成熟度跃升；模型侧 NVIDIA × Hugging Face 联手为 LeRobot 引入新模型与框架，加速 VLA 走向标准化；研究侧 **Gaussian Splatting 与世界模型继续爆发**——GeoGS-SLAM 仅用几何信息实现稠密单目 SLAM、EmbodiedGen V2 推出"代理化、可执行"的 3D 世界引擎，预示具身智能仿真基础设施正在从"数据生成器"升级为"环境操作系统"。

---

## 🏛️ 行业脉搏

**1. Tesollo 启动 IPO 进程，深耕人形机器人灵巧手**
[链接](https://www.therobotreport.com/tesollo-initiates-ipo-process-developing-humanoid-hands/)
韩国灵巧手厂商 Tesollo 启动 IPO，与同期进入工业市场的韩国厂商（如 Clobot）共同印证了**灵巧末端执行器正成为人形机器人产业链中最早跑出商业模式的环节**。

**2. NVIDIA × Hugging Face：为 LeRobot 引入新模型与框架**
[链接](https://www.therobotreport.com/nvidia-hugging-face-bring-new-models-frameworks-lerobot/)
两大巨头联手补齐 LeRobot 的训练/推理栈，意味着 LeRobot 正从社区玩具进化为 **VLA 时代的"具身版 Hugging Face"**，将进一步降低机器人策略学习门槛。

**3. ABB 为 F712 自主叉车加入 vSLAM 导航**
[链接](https://www.therobotreport.com/abb-robotics-includes-vslam-navigation-f712-autonomous-forklift/)
传统工业巨头把 vSLAM 写进旗舰产品，**"无基础设施改造"成为仓储自动化的新卖点**；激光 SLAM 之外的视觉方案开始走向主流工业级部署。

**4. 日本 vs 中国：人形机器人的"美日同盟"焦虑**
[链接](https://spectrum.ieee.org/humanoid-robots-japan)
IEEE Spectrum 长文剖析日本在人形机器人领域的相对衰落，并探讨**美日产业合作**能否对抗中国规模化优势。政策与供应链博弈正在塑造下一代人形机器人格局。

**5. 加州 AV 监管：百万英里、地理围栏与罚单**
[链接](https://www.therobotreport.com/tickets-geofences-1m-miles-new-reality-california-av-compliance/)
美国最大州的合规要求趋于刚性，**"测试里程"已不能直接等同于能力证明**——监管侧推动行业从"跑得多"走向"跑得可解释、可审计"。

---

## 🔬 研究前沿

**1. ELEANOR：受象鼻启发的连续体软体臂**
[arxiv](http://arxiv.org/abs/2607.07622v1)
基于"软体架构"（architected materials）实现大尺度连续操作，突破了传统刚体机械臂在狭窄空间中的灵巧性瓶颈。**意义**：为医疗、农业、搜救等受限场景提供新形态硬件。

**2. VLA 模型的"双潜变量记忆"机制**
[arxiv](http://arxiv.org/abs/2607.07608v1)
针对主流 VLA 模型的 Markovian 假设局限，引入显式双潜变量记忆。**意义**：用最低侵入式改动提升长时序任务表现，是 **π0、OpenVLA 等 VLA 范式最容易落地的性能升级路径**。

**3. EmbodiedGen V2：代理化的 Sim-Ready 3D 世界引擎**
[arxiv](http://arxiv.org/abs/2607.07459v1)
提出"代理化、可执行"3D 世界生成。**意义**：将 3D 资产生成从"渲染素材"升级为"具身训练场"，与 Sora、Genie 共同推动 **World Model 走向具身操作系统**。

**4. GeoGS-SLAM：仅靠几何的稠密单目高斯泼溅 SLAM**
[arxiv](http://arxiv.org/abs/2607.07452v1)
抛弃颜色监督，纯几何 3DGS 重建稠密单目 SLAM。**意义**：在弱纹理、纹理重复等病态场景下大幅提升鲁棒性，对 **AR/VR 与移动机器人**意义重大。

**5. 上下文感知的形变工具力估计（少样本持续适应）**
[arxiv](http://arxiv.org/abs/2607.07574v1)
针对环境拭子采集等"接触式+异质表面"任务，提出少样本持续适应的力估计方案。**意义**：把 sim-to-real 难题从"感知"延伸到"接触物理"，填补具身操作在医疗/工业检测中的空白。

---

## ⭐ 重点项目

### 🦾 机器人学习与控制
- **[IsaacLab](https://github.com/isaac-sim/IsaacLab)** ⭐7,633 — NVIDIA Isaac Sim 之上的统一机器人学习框架，事实上的 GPU 仿真训练标准。
- **[RLinf](https://github.com/RLinf/RLinf)** ⭐4,048 — 面向具身智能与代理式 AI 的强化学习基础设施，**为大规模 VLA/RL 训练补齐底座**。
- **[OpenDriveLab/RISE](https://github.com/OpenDriveLab/RISE)** ⭐313 — RSS 2026 自改进机器人策略 + 组合世界模型，**让策略"自我进化"**。
- **[dora-rs/dora](https://github.com/dora-rs/dora)** ⭐3,834 — Rust 编写的数据流机器人中间件，主打低延迟、可组合，适合多模态实时编排。
- **[Hebbian-Robotics/openpi-flash](https://github.com/Hebbian-Robotics/openpi-flash)** ⭐38 — π0 模型的实时推理引擎，让 VLA 走向真实部署。
- **[OpenPipe/ART](https://github.com/OpenPipe/ART)** ⭐10,352 — Agent Reinforcement Trainer，GRPO 训练多步代理，**RL 与 Agent 的桥梁工具**。

### 🤖 仿真与框架
- **[MuJoCo](https://github.com/google-deepmind/mujoco)** ⭐14,135 — Google DeepMind 通用物理仿真器，机器人研究的事实标准。
- **[CARLA](https://github.com/carla-simulator/carla)** ⭐14,151 — 自动驾驶研究的开源仿真标杆。
- **[newton-physics/newton](https://github.com/newton-physics/newton)** ⭐5,177 — 基于 NVIDIA Warp 的 GPU 加速物理引擎，**面向机器人研究的下一代物理栈**。
- **[mujocolab/mjlab](https://github.com/mujocolab/mjlab)** ⭐2,660 — Isaac Lab API + MuJoCo-Warp，提供 RL 与机器人研究统一接口。
- **[Navigation2](https://github.com/ros-navigation/navigation2)** ⭐4,446 — ROS 2 导航框架，机器人定位导航的工业事实标准。
- **[NVIDIA cuVSLAM](https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_visual_slam)** ⭐1,397 — 基于 GPU 加速的视觉 SLAM/里程计，**vSLAM 落地的代表性工程实现**。
- **[robotmcp/ros-mcp-server](https://github.com/robotmcp/ros-mcp-server)** ⭐1,336 — 用 MCP 协议让 GPT/Claude 直接控制 ROS 机器人，**LLM 操控机器人的关键中间件**。

### 🧠 VLA 与基础模型
- **[VLA-Handbook](https://github.com/sou350121/VLA-Handbook)** ⭐365 — 中文 VLA 实战手册与面试指南，**国内 VLA 工程师的入门必读**。
- **[FluxVLA](https://github.com/FluxVLA/FluxVLA)** ⭐517 — VLA 一站式工程平台，从数据到真机部署的全链路方案。
- **[InternVLA-A-series](https://github.com/InternRobotics/InternVLA-A-series)** ⭐475 — 统一理解、生成与动作的 VLA 系列模型，**国内具身基础模型的代表**。
- **[allenai/vla-evaluation-harness](https://github.com/allenai/vla-evaluation-harness)** ⭐427 — VLA 模型在任意仿真基准的统一评测框架，**VLA 时代的"GLUE"雏形**。
- **[Tencent-Hy-Embodied-0.5-VLA](https://github.com/Tencent-Hunyuan/Hy-Embodied-0.5-VLA)** ⭐189 — 腾讯混元从 VLA 到真机学习栈的完整开源。
- **[TensorAuto/OpenTau](https://github.com/TensorAuto/OpenTau)** ⭐183 — 面向真机机器人的 PyTorch VLA 训练基础设施。
- **[ros-claw/rosclaw](https://github.com/ros-claw/rosclaw)** ⭐158 — 自演化具身代理运行时：e-URDF、沙箱安全、技能进化，**机器人"操作系统"层面的创新**。
- **[mimic-video](https://github.com/lucidrains/mimic-video)** ⭐116 — 视频动作模型（Video Action Model）实现，**继 VLA 之后的下一代策略表征**。
- **[TIC-VLA (ICML 2026)](https://github.com/ucla-mobility/TIC-VLA)** ⭐113 — Think-in-Control VLA，把"思考"嵌入导航控制。

### 🔧 硬件与驱动
- **[enactic/openarm](https://github.com/enactic/openarm)** ⭐2,704 — 完全开源的人形手臂，**面向接触丰富任务的"具身硬件开源标杆"**。
- **[ROBOTIS/open_manipulator](https://github.com/ROBOTIS-GIT/open_manipulator)** ⭐643 — Robotis 经典开源机械臂，AI 操作研究的常青树。
- **[mujoco_ros2_control](https://github.com/ros-controls/mujoco_ros2_control)** ⭐212 — MuJoCo 与 ROS 2 control 的硬件接口桥，**打通仿真到控制的关键一环**。
- **[Source-Robotics/PAR6](https://github.com/Source-Robotics/PAR6-Collaborative-Robot-Arm)** ⭐26 — 面向教育/研发的 6 轴协作开源机械臂。
- **[HandUMI](https://github.com/BrikHMP18/HandUMI)** ⭐22 — 手持式 UMI 变体，**无需机器人在环即可采集双手操作数据**。

### 📊 数据集与基准
- **[BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K)** ⭐1,560 — 斯坦福 1000 类日常任务具身智能基准，**大规模具身评测的标杆**。
- **[datawhalechina/every-embodied](https://github.com/datawhalechina/every-embodied)** ⭐2,589 — Datawhale 出品，0 基础用 Python 搭建 VLA 教程，**国内具身智能教育的现象级仓库**。
- **[RealSee3D](https://github.com/realsee-developer/RealSee3D)** ⭐277 — 真实采集 + 程序化生成的多视角 RGB-D 数据集。
- **[InternScenes (NeurIPS 2025)](https://github.com/InternRobotics/InternScenes)** ⭐254 — 大规模交互式室内场景数据集。
- **[hku-mars/UMI-3D](https://github.com/hku-mars/UMI-3D)** ⭐254 — 港大 MARS 实验室 UMI-3D SLAM 与数据处理流水线。

---

## 🌐 生态趋势信号

**"世界模型 × 代理化生成 × VLA 标准化"** 正在形成共振。新闻侧 NVIDIA 联手 Hugging Face 推动 LeRobot 成为 VLA 时代的 Hugging Face；论文侧 GeoGS-SLAM、EmbodiedGen V2、双潜变量 VLA 分别从 **3D 表示、仿真生成、策略记忆** 三个角度推进基础能力；仓库侧 IsaacLab、RLinf、newton、mjlab 共同把 GPU 物理仿真训练推上标配，而 OpenArm、PAR6、mujoco_ros2_control 则让"硬件 + 控制"链路全面开源。**机器人操作系统层（ROSClaw、copper-rs、dora-rs）** 的出现，标志着具身智能开始从"任务范式"走向真正的"软件栈分层"。

---

## 👀 值得关注

**1. NVIDIA × Hugging Face × LeRobot 合作进展**
[链接](https://www.therobotreport.com/nvidia-hugging-face-bring-new-models-frameworks-lerobot/)
三方合作若能在 LeRobot 中沉淀出标准化的"数据—训练—推理"流水线，**VLA 开源生态的护城河将被实质性重写**，直接影响所有 VLA 初创公司的技术路线选择。

**2. EmbodiedGen V2 + GeoGS-SLAM 的世界模型矩阵**
[EmbodiedGen V2](http://arxiv.org/abs/2607.07459v1) / [GeoGS-SLAM](http://arxiv.org/abs/2607.07452v1)
当 **3D 生成从"渲染素材"升级为"可执行训练场"**，与 Gaussian Splatting 重建的实时几何闭环，将共同决定具身智能能否跨越 sim-to-real gap，**值得每一个做策略学习的团队长期跟踪**。

**3. Tesollo 灵巧手 IPO + 日本产业反思**
[IPO 动态](https://www.therobotreport.com/tesollo-initiates-ipo-process-developing-humanoid-hands/) / [日本现状](https://spectrum.ieee.org/humanoid-robots-japan)
灵巧操作作为最早跑出商业模式的环节，其上市表现将为**整个具身智能估值逻辑**提供锚点；同期 IEEE 对日本产业的剖析也提示我们：**硬件供应链与政策协同**或将成为下一阶段的关键变量。

---

*本期编辑：具身智能开源动态观察 · 数据来源：IEEE Spectrum、The Robot Report、arXiv cs.RO、GitHub Trending*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*