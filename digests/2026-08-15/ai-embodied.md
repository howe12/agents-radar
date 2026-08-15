# 具身智能开源动态日报 2026-08-15

> 数据来源: GitHub Search API (131 仓库) | ArXiv cs.RO (29 篇论文) | RSS 新闻 (47 条) | 生成时间: 2026-08-15 00:52 UTC

---

# 🗓️ 具身智能开源动态日报

> 覆盖范围：行业新闻（IEEE Spectrum、The Robot Report）、ArXiv cs.RO 最新论文、活跃 GitHub 仓库（最近 7 天）

---

## 一、今日速览

今日开源生态呈现两条鲜明主线：**VLA 与世界模型的工程化加速**，以及**机器人在资本市场和国防场景的双重升温**。ArXiv 上多篇论文聚焦 VLA 任务进度解码（Dairu Liu 等）、动作条件视频世界模型（DreamX-Phi 1.0）和预接触故障检测（ContactGuard），显示具身基础模型正从"能跑"走向"可监控、可推理"；GitHub 端 FluxVLA、RoboTwin 2.0、IsaacLab、Newton 物理引擎等项目持续刷星，强化"VLA 数据-训练-评测-仿真"全栈能力。与此同时，Neros Technologies 拿下 2.5 亿美元国防无人机融资、The Robot Report 探讨机器人企业非传统 IPO 路径，反映出机器人公司正大规模走出"实验室经济"。

---

## 二、行业脉搏

- **Neros Technologies 完成 2.5 亿美元融资，目标 2026 年底部署国防无人机**：[链接](https://www.therobotreport.com/neros-technologies-raises-250m-to-deploy-its-defense-drones-by-the-end-of-2026/)
  国防级无人机+大额融资组合，标志着军用机器人从样机阶段进入量产前夜，将带动低空自主、群体智能与ruggedized硬件供应链。

- **机器人企业上市路径多元化（非传统 IPO）**：[链接](https://www.therobotreport.com/robots-on-wall-street-non-traditional-paths-public-markets-robotics-companies/)
  SPAC、PIPE、并购等成为机器人企业走向公开市场的主流方式，意味着一级市场正在催熟人形/移动操作赛道。

- **移动机械臂 vs. 人形机器人：未来形态之争**：[链接](https://www.therobotreport.com/mobile-manipulators-and-humanoids/)
  行业焦点从"形态"转向"任务经济性"，人形机器人若不能在移动操作场景证明 TCO 优势，将面临结构性挑战。

- **ARM Institute 国防制造技术项目征集**：[链接](https://www.therobotreport.com/arm-institute-call-defense-manufacturing-technology-project/)
  政府-产业联盟开始系统化资助焊接、装配等国防场景的机器人化，利好工艺学习与 sim-to-real 数据集建设。

- **DARPA Heavy Lift Challenge 与机器人回收分拣 Demo**：[Video](https://spectrum.ieee.org/video-friday-darpa-heavy-lift-challenge) / [回收机器人](https://spectrum.ieee.org/recycling-robot)
  硬件极限挑战赛叠加细分的循环经济场景，提示关注**长尾工业自动化**的机会窗口。

---

## 三、研究前沿

- **HumanTracker：面向人形运动跟踪的综合且人类对齐基准** — [arXiv:2608.13555](http://arxiv.org/abs/2608.13555v1)
  为 teleoperation 与 whole-body imitation 提供与人类直觉一致的评测协议，弥补了"指标漂移"导致的策略学习偏差问题。

- **DreamX-Phi 1.0：动作条件视频世界模型用于机器人操作** — [arXiv:2608.13489](http://arxiv.org/abs/2608.13489v1)
  给定观测与动作即可生成高保真视频预测，将规划、奖励信号、数据增强统一在同一个生成式模型里，是具身世界模型路线的重要进展。

- **Decoding Task Progress from VLA Representations** — [arXiv:2608.13474](http://arxiv.org/abs/2608.13474v1)
  直接从 VLA 内部表征里解码任务进度，无需额外模块即可用于 fail-recovery 与 early-stopping，是 VLA 走向"可监控"的关键一步。

- **ContactGuard：预接触执行监控（动作条件潜变量世界模型）** — [arXiv:2608.13438](http://arxiv.org/abs/2608.13438v1)
  在接触发生前就识别风险动作，对装配、打磨等接触密集型任务的安全部署至关重要。

- **FIRE-VLA：面向自动驾驶的失败感知自进化 VLA** — [arXiv:2608.13395](http://arxiv.org/abs/2608.13395v1)
  利用强化学习在线评估轨迹样本并驱动 VLA 迭代，是车端 VLA 实现"边开边学"的代表性尝试。

---

## 四、重点项目

### 🦾 机器人学习与控制
- **[NVIDIA IsaacLab](https://github.com/isaac-sim/IsaacLab)** ⭐7,899
  基于 Isaac Sim 的统一机器人学习框架，已成为 Sim-to-Real RL/IL 实验的事实标准。

- **[vikashplus/robohive](https://github.com/vikashplus/robohive)** ⭐630
  跨机械手与灵巧操作的统一学习环境，强调模块化与硬件兼容性。

- **[RobotControlStack/robot-control-stack](https://github.com/RobotControlStack/robot-control-stack)** ⭐149
  **ROS-free、sim-to-real** 轻量框架，原生 MuJoCo Gymnasium 封装 + Franka/UR5e/xArm/SO101 同步执行，弥合了 VLA-RL 与真机部署之间的工程鸿沟。

- **[RLinf/RLinf](https://github.com/RLinf/RLinf)** ⭐4,536
  面向 Embodied/Agentic AI 的强化学习基础设施，提供从仿真到真机策略上线的统一调度。

- **[mujocolab/mjlab](https://github.com/mujocolab/mjlab)** ⭐2,801
  Isaac Lab API + MuJoCo-Warp 后端，GPU 加速机器人 RL 的替代栈。

- **[pollen-robotics/handumi-sw](https://github.com/robonet-ai/handumi-sw)** ⭐46
  开源 HandUMI 软件，提供同步双手数据采集、标定、回放与重定向，降低 UMI 系硬件的数据门槛。

### 🤖 仿真与框架
- **[google-deepmind/mujoco](https://github.com/google-deepmind/mujoco)** ⭐14,551
  多关节接触动力学通用物理引擎，是机器人 RL / VLA 训练的"地基"。

- **[newton-physics/newton](https://github.com/newton-physics/newton)** ⭐5,358
  基于 NVIDIA Warp 的 GPU 加速物理仿真引擎，面向机器人学家的高保真实时仿真。

- **[Autoware/Autoware](https://github.com/autowarefoundation/autoware)** ⭐11,988
  开源自动驾驶事实标准，多模态感知 + 规划栈，机器人物流的重要中间件。

- **[carla-simulator/carla](https://github.com/carla-simulator/carla)** ⭐14,296
  自动驾驶研究的开源仿真器，perception-to-policy 闭环最常用的闭环平台。

- **[ros-navigation/navigation2](https://github.com/ros-navigation/navigation2)** ⭐4,587
  ROS 2 导航栈，移动机器人与具身导航的事实标准。

- **[dora-rs/dora](https://github.com/dora-rs/dora)** ⭐3,872
  数据流驱动的机器人中间件，低延迟、可组合、分布式，便于把 ML 模型嵌入控制图。

- **[stack-of-tasks/pinocchio](https://github.com/stack-of-tasks/pinocchio)** ⭐3,654
  快速、灵活实现的刚体动力学库，带有分析导数，是人形/机械臂最优控制的核心依赖。

### 🧠 VLA 与基础模型
- **[FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA)** ⭐611
  一体化 VLA 工程平台，覆盖数据采集到真机部署，对 VLA 入门团队极友好。

- **[allenai/vla-evaluation-harness](https://github.com/allenai/vla-evaluation-harness)** ⭐533
  跨模型、跨仿真、跨机械臂的统一 VLA 评测框架，对 VLA 横向基准研究意义重大。

- **[InternRobotics/VLAC](https://github.com/InternRobotics/VLAC)** ⭐324
  VLA-Critic 模型，把评价器引入机器人真机 RL，加速 VLA 在真实世界的 fine-tuning。

- **[ros-claw/rosclaw](https://github.com/ros-claw/rosclaw)** ⭐179
  自进化的具身智能体运行时基础设施：e-URDF、沙箱安全、技能演化，把"会写代码的 agent"装进机器人身体。

- **[Humanoid-Motion-Intelligence](https://github.com/RealXiaoze/humanoid-motion-intelligence)** ⭐344
  人形机器人运动智能论文 / 开源项目 / 产业求职知识库，中文社区最完整的人形运动智能索引。

- **[Tsinghua-MARS-Lab/OMG](https://github.com/Tsinghua-MARS-Lab/OMG)** ⭐107
  "OMG: Omni-Modal Motion Generation for Generalist Humanoid Control" 官方仓库，论文配套开源。

- **[RoboTwin-Platform/RoboTwin](https://github.com/RoboTwin-Platform/RoboTwin)** ⭐2,726
  RoboTwin 2.0（ICML 2026）：双臂操作的统一平台、数据集与基准，是 sim-to-real 数据生态的核心。

### 🔧 硬件与驱动
- **[ArduPilot/ardupilot](https://github.com/ArduPilot/ardupilot)** ⭐15,688
  ArduPlane/Copter/Rover/Sub 全栈无人机自动驾驶软件。

- **[PX4/PX4-Autopilot](https://github.com/PX4/PX4-Autopilot)** ⭐12,421
  与 Ardupilot 并列的开源无人机飞控事实标准。

- **[enactic/openarm](https://github.com/enactic/openarm)** ⭐2,852
  完全开源的人形机械臂，目标"接触丰富场景"的物理 AI 研究，硬件复现门槛大幅降低。

- **[BehaviorTree/BehaviorTree.CPP](https://github.com/BehaviorTree/BehaviorTree.CPP)** ⭐4,160
  C++ 行为树库，"电池内置"，是 ROS 2 机器人任务编排最常见的状态机替代方案。

### 📊 数据集与基准
- **[StanfordVL/BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K)** ⭐1,636
  斯坦福主导的具身 AI 基准平台，已成为日常家务任务评测标准。

- **[RoboVerseOrg/RoboVerse](https://github.com/RoboVerseOrg/RoboVerse)** ⭐1,803
  统一平台、数据集与基准，支持可扩展、可泛化的机器人学习。

- **[charlotte-vexel/Awesome-World-Models](https://github.com/knightnemo/Awesome-World-Models)** ⭐3,307
  世界模型领域的 one-stop 资源集合，对 VLA/RL planning 团队必备。

- **[zchoi/Awesome-Embodied-Robotics-and-Agent](https://github.com/zchoi/Awesome-Embodied-Robotics-and-Agent)** ⭐1,849
  LLM × 机器人方向的持续维护清单，跟踪 embodied agent 文献最方便。

- **[Farama-Foundation/Metaworld](https://github.com/Farama-Foundation/Metaworld)** ⭐1,866
  多任务 / 元强化学习机器人基准，是 IL/RL benchmark 的"老大哥"。

- **[omertt27/Calibra](https://github.com/omertt27/Calibra)** ⭐14
  机器人模仿学习的数据集可观测性与 coreset 选择，帮助在海量 demo 数据中识别高质量样本。

---

## 五、生态趋势信号

**VLA 正在走向"工程闭环"**——从 FluxVLA、VLA-Evaluation-Harness 到 VLAC、ROS-Claw 这类基础设施，构建数据、训练、评测、真机部署完整管线的项目明显增多，对应论文侧"任务进度解码"、"failure-informed 自进化"的活跃度上升。**世界模型路线持续发酵**，DreamX-Phi、Awesome-World-Models 仓库与可视觉化的 VLA-RL 平台显示出"以预测换规划"的研究共识。**人形硬件开源化破壁**：Enactic OpenArm、Humanoid-Motion-Intelligence 等项目把昂贵的人形组件变成了可复现的研究装置，与新闻侧人形 vs 移动操作平台之争形成共振。**资本与国防**正在合力推动机器人走出实验室：2.5 亿美元级国防无人机融资、机器人企业非传统 IPO 路径，叠加 sim-to-real 框架成熟，2026 年起具身赛道将进入"数据—硬件—资本"三角共振期。

---

## 六、值得关注

1. **Neros Technologies 2.5 亿美元 + DARPA Heavy Lift** —— 国防机器人进入量产前夜，开源生态中 Ardupilot/PX4/aerial-autonomy-stack 的贡献者议价权会显著上升。

2. **DreamX-Phi 1.0 + ContactGuard** —— 同时押注"动作条件世界模型"和"接触前监控"两条路线，是具身操作走向长程、接触丰富场景最具落地性的组合。

3. **enactic/openarm + HandUMI-sw** —— 廉价开源人形臂 + UMI 数据采集栈的组合，把"硬件自由 + 数据自由"完整地交还给研究社区，很可能成为下一波人形/灵巧操作论文的共同底座。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*