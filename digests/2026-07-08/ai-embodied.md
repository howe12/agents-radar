# 具身智能开源动态日报 2026-07-08

> 数据来源: GitHub Search API (119 仓库) | ArXiv cs.RO (30 篇论文) | RSS 新闻 (26 条) | 生成时间: 2026-07-08 06:22 UTC

---

# 具身智能开源动态日报
**日期：2026 年 7 月 · 综合 IEEE Spectrum / The Robot Report / ROS Discourse / ArXiv / GitHub**

---

## 1. 今日速览

今日开源机器人生态呈现"基础设施深化 + VLA 范式演进"双重主线。**Open Robotics 高管层变动**（Vicky Brasseur 出任 CPO）与 **ROSCon 2026 早鸟票截止**预示着 ROS 生态下一阶段治理与社区节奏调整；研究侧，**Lift3D-VLA、RynnWorld-4D/Teleop** 等工作将 3D 几何与世界模型深度注入 VLA 范式，反映"超越 2D 视觉的具身表征"成为新焦点。GitHub 端，**RLinf（4k+）、dora-rs、PhyAgentOS** 等新晋基础设施快速崛起，**mujocolab/mjlab** 与 **copper-rs** 则代表"GPU 加速仿真 + 确定性机器人 OS"两条新赛道。

---

## 2. 行业脉搏

| # | 动态 | 意义 |
|---|------|------|
| 🚩 | **[Vicky Brasseur 出任 Open Robotics 新任 CPO](https://discourse.openrobotics.org/t/announcement-welcoming-vicky-vm-brasseur-as-our-new-chief-program-officer/56259)** | 知名开源治理专家加入，领导层调整有望加速 ROS 生态的项目管理与多元化治理结构。 |
| 🧭 | **[BAGEL (BAG ExpLoration) 进展更新](https://discourse.openrobotics.org/t/update-on-bagel-bag-exploration-whats-new/56235)** | ROS 2 bag 文件探索工具持续完善，定位调试与回放工具链的工程痛点。 |
| 🇨🇳 | **[2026 ROS Summer School 杭州站开设 20 门平行课程](https://discourse.openrobotics.org/t/20-parallel-courses-available-for-2026-ros-summer-school-hangzhou-china/56233)** | 中文社区规模化人才培养进入快车道，ROS 2 教育生态向纵深拓展。 |
| 🎟️ | **[ROSCon Global 早鸟票 7 月 12 日截止](https://discourse.openrobotics.org/t/last-day-for-roscon-global-early-bird-tickets-is-sunday-july-12th/56226)** | 年度社区核心会议临近，议程与发布窗口期即将打开。 |
| 💼 | **[Senior Robotics Architect (ROS 2) 远程岗位招聘](https://discourse.openrobotics.org/t/senior-robotics-architect-ros-2-remote-us-15-travel/56234)** | 行业对 ROS 2 资深架构师需求旺盛，反映 ROS 2 在工业 / 服务机器人侧的落地加速。 |

---

## 3. 研究前沿

| # | 论文 | 贡献 |
|---|------|------|
| 🧊 | **[Lift3D-VLA: 将 VLA 提升至 3D 几何与动力学感知](http://arxiv.org/abs/2607.06564v1)** | 在 VLA 中显式注入 3D 几何与物体动力学先验，缓解 2D 视觉对遮挡与深度歧义的失效问题。 |
| 🌍 | **[RynnWorld-4D / RynnWorld-Teleop: 面向操作与遥操的 4D 世界模型](http://arxiv.org/abs/2607.06559v1)** *(双篇)* | 提出 4D 具身世界模型与动作条件化的"数字遥操"管线，旨在用生成式模型替代部分真实数据采集。 |
| 🧭 | **[UniLM-Nav: 零样本最后一公里导航统一框架](http://arxiv.org/abs/2607.06537v1)** | 面向移动操作的"导航 + 操作"端到端零样本迁移，统一长程移动与小范围操纵。 |
| 🛡️ | **[Neural-ESO: 可证明鲁棒的学习型控制双通路架构](http://arxiv.org/abs/2607.06535v1)** | 把扩展状态观测器（ESO）与学习模块耦合，为学习型控制提供鲁棒性理论保障。 |
| 📦 | **[SIEVE: 面向 VLA 模仿学习的结构感知数据选择](http://arxiv.org/abs/2607.06442v1)** | 在大规模机器人演示数据上进行结构感知筛选，提升 VLA 训练效率与泛化能力。 |

---

## 4. 重点项目

### 🦾 机器人学习与控制（模仿学习 / RL / 策略）
| 仓库 | ⭐ | 一句话说明 |
|------|----|------------|
| [RLinf/RLinf](https://github.com/RLinf/RLinf) | 4,038 | 面向具身与 Agentic AI 的强化学习基础设施，是当前 RL × Embodied 跨域训练的"操作系统级"项目。 |
| [enactic/openarm](https://github.com/enactic/openarm) | 2,701 | 完全开源的人形机械臂硬件方案，专为接触丰富操作的物理 AI 研究而生。 |
| [NJU-RLC/quadrupedal-agility](https://github.com/NJU-RLC/quadrupedal-agility) | 119 | 四足机器人敏捷行为学习官方实现，推动足式机器人自然运动策略落地。 |
| [ARISE-Initiative/robosuite](https://github.com/ARISE-Initiative/robosuite) | 2,502 | 模块化机器人学习仿真框架与基准，长期作为操作任务的事实标准测试场。 |
| [robocasa/robocasa](https://github.com/robocasa/robocasa) | 1,526 | 大规模日常家务仿真，推动通用机器人策略在家庭场景中的训练。 |

### 🤖 仿真与框架（MuJoCo / Isaac / Gazebo / ROS）
| 仓库 | ⭐ | 一句话说明 |
|------|----|------------|
| [google-deepmind/mujoco](https://github.com/google-deepmind/mujoco) | 14,122 | 高性能接触物理仿真引擎，机器人学习的事实标准底层。 |
| [mujocolab/mjlab](https://github.com/mujocolab/mjlab) | 2,652 | 基于 MuJoCo-Warp 的 Isaac Lab 风格 API，标志 GPU 加速 RL 仿真新阶段。 |
| [isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab) | 7,630 | NVIDIA 官方统一机器人学习框架，已与 MuJoCo-Warp 路线形成双轨竞争。 |
| [newton-physics/newton](https://github.com/newton-physics/newton) | 5,174 | 基于 NVIDIA Warp 的 GPU 加速物理引擎，瞄准机器人大规模并行仿真。 |
| [gazebosim/gz-sim](https://github.com/gazebosim/gz-sim) | 1,407 | Gazebo 最新版本仿真器，ROS 2 默认仿真后端持续演进。 |
| [ros-navigation/navigation2](https://github.com/ros-navigation/navigation2) | 4,441 | ROS 2 官方导航框架，移动机器人路径规划的事实标准。 |
| [NVIDIA-ISAAC-ROS/isaac_ros_visual_slam](https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_visual_slam) | 1,395 | 基于 cuVSLAM 的 GPU 加速视觉 SLAM，机器人感知栈的关键组件。 |
| [copper-project/copper-rs](https://github.com/copper-project/copper-rs) | 1,380 | 机器人"操作系统"：支持构建、回放、确定性执行的 Rust 运行时，是 ROS 之外的新一代候选。 |
| [dora-rs/dora](https://github.com/dora-rs/dora) | 3,832 | 数据流驱动的 AI 机器人中间件，低延迟可组合，AI 应用图形化编排的代表。 |

### 🧠 VLA 与基础模型
| 仓库 | ⭐ | 一句话说明 |
|------|----|------------|
| [FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA) | 512 | 一体化 VLA 工程平台：数据到真机部署的端到端工具链。 |
| [InternRobotics/InternVLA-A-series](https://github.com/InternRobotics/InternVLA-A-series) | 467 | 统一理解、生成与动作的 VLA 模型系列，代表国内通类具身基础模型路线。 |
| [OpenDriveLab/RISE](https://github.com/OpenDriveLab/RISE) | 313 | RSS 2026：基于组合世界模型的自我进化机器人策略，将世界模型引入策略改进闭环。 |
| [Tencent-Hunyuan/Hy-Embodied-0.5-VLA](https://github.com/Tencent-Hunyuan/Hy-Embodied-0.5-VLA) | 187 | 腾讯混元：VLA 到真机机器人学习栈的工业级尝试。 |
| [ucla-mobility/TIC-VLA](https://github.com/ucla-mobility/TIC-VLA) | 102 | ICML 2026：Think-in-Control VLA，把推理能力前移到导航控制阶段。 |
| [allenai/vla-evaluation-harness](https://github.com/allenai/vla-evaluation-harness) | 425 | 统一 VLA 模型在任意仿真基准上的评测框架，缓解"各自为政"的评估碎片化。 |
| [TensorAuto/OpenTau](https://github.com/TensorAuto/OpenTau) | 183 | 面向真实机器人 VLA 训练的 PyTorch 工程化基础设施。 |
| [RobotControlStack/robot-control-stack](https://github.com/RobotControlStack/robot-control-stack) | 121 | 无 ROS 的 sim-to-real 框架，原生 MuJoCo Gymnasium 封装，瞄准轻量化 VLA / RL 部署。 |

### 🔧 硬件与驱动
| 仓库 | ⭐ | 一句话说明 |
|------|----|------------|
| [ros-claw/rosclaw](https://github.com/ros-claw/rosclaw) | 156 | 面向 Physical AI 与具身 agent 的自演化运行时（e-URDF、沙箱安全、技能演化），代表"机器人中间件+大模型"融合新方向。 |
| [oliviazzzu/minimal-embodiment](https://github.com/oliviazzzu/minimal-embodiment) | 217 | 大语言模型闭环物理具身的最小硬件-软件架构，探索 LLM ↔ 身体感知的最简接口。 |

### 📊 数据集与基准
| 仓库 | ⭐ | 一句话说明 |
|------|----|------------|
| [StanfordVL/BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K) | 1,555 | 推动具身 AI 研究的标准化任务平台，已成为日常家务类 benchmark 的事实标准。 |
| [leofan90/Awesome-World-Models](https://github.com/leofan90/Awesome-World-Models) | 1,874 | 世界模型在具身 AI、自动驾驶、视频生成领域最完整的论文 / 代码清单。 |
| [hku-mars/UMI-3D](https://github.com/hku-mars/UMI-3D) | 254 | UMI-3D SLAM 与数据处理流水线，把便携式数据采集推到三维重建层级。 |
| [InternRobotics/InternScenes](https://github.com/InternRobotics/InternScenes) | 254 | NeurIPS 2025：大规模可交互室内场景数据集，复杂布局下的具身训练基础资源。 |
| [realsee-developer/RealSee3D](https://github.com/realsee-developer/RealSee3D) | 276 | 真实 + 程序生成结合的多视角 RGB-D 数据集，面向可扩展标注的 3D 视觉研究。 |
| [zju3dv/habitat-gs](https://github.com/zju3dv/habitat-gs) | 233 | ECCV 2026：动态高斯泼溅的高保真导航仿真器，把神经渲染与导航基准结合。 |

---

## 5. 生态趋势信号

本月信号高度收敛在三条主线：**其一，VLA 范式正从 2D 视觉-语言迈向 3D/4D 几何与动力学感知**——Lift3D-VLA、RynnWorld-4D、SIEVE 三篇同期论文均指向"更结构化的数据与表征"；**其二，仿真器正在被 GPU 加速物理引擎重写**——mujocolab/mjlab、newton-physics/newton、IsaacLab 三足鼎立，接触物理仿真进入"万级并行"时代；**其三，机器人中间件出现"ROS 之外"新选项**——dora-rs（数据流）、copper-rs（确定性执行）、ros-claw（自演化运行时）共同挑战 ROS 的中心地位。叠加 Open Robotics 高管调整与 ROSCon 临近，社区治理与基础设施两条线均处于关键节点。

---

## 6. 值得关注

1. **[Lift3D-VLA](http://arxiv.org/abs/2607.06564v1)** — 把 3D 几何先验注入 VLA 是当前最具落地价值的工程方向之一，将直接影响下一代真机操作策略的样本效率。
2. **[mujocolab/mjlab](https://github.com/mujocolab/mjlab) + [newton-physics/newton](https://github.com/newton-physics/newton)** — GPU 并行物理引擎与 Isaac Lab API 风格框架的融合，是机器人学习"工业化训练"的基础设施级机会。
3. **[Open Robotics 领导层调整 + ROSCon 2026 临近](https://discourse.openrobotics.org/t/announcement-welcoming-vicky-vm-brasseur-as-our-new-chief-program-officer/56259)** — 新任 CPO 上任与年度大会重叠，是观察 ROS 2 治理走向、Roadmap 公布与生态合作公告的关键窗口期。