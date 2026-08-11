# 具身智能开源动态日报 2026-08-11

> 数据来源: GitHub Search API (128 仓库) | ArXiv cs.RO (0 篇论文) | RSS 新闻 (47 条) | 生成时间: 2026-08-11 01:12 UTC

---

# 🤖 具身智能开源动态日报

**日期：** 2025年 · IEEE Spectrum / The Robot Report / GitHub 联合观察

---

## 一、今日速览

今日行业新闻呈现出"政策-资本-落地"三股力量交织的态势：美国 FCC 拟限制"外籍机器人"引发行业反弹；Hadrian 拿下 13.7 亿美元巨额融资加码国防制造自动化；Tate 大规模部署 58 台 Hirebotics 协作焊机器人标志着协作机器人（Cobot）在工业场景的规模化拐点已至。开源侧，Isaac Lab、MuJoCo、Gazebo、Autoware 等基础设施持续高活跃度，**robotics 与 embodied-ai 标签下的中文社区项目（VLA-Handbook、humanoid-motion-intelligence、Octoday-Hub 具身生态等）**呈现快速崛起迹象；值得注意的是，今日 cs.RO 暂无新论文。

---

## 二、行业脉搏

| # | 动态 | 意义 |
|---|------|------|
| 1 | **Hadrian 获 13.7 亿美元融资** — 用于扩大美国国防、航空航天精密制造产能 | https://www.therobotreport.com/hadrian-raises-1-37b-accelerate-u-s-manufacturing/ <br>具身智能在"硬科技自主可控"叙事中获得国家级资本背书，机器人制造赛道估值逻辑正在重构。 |
| 2 | **Tate 部署 58 台 Hirebotics 协作焊机器人** — 横跨多个生产基地 | https://www.therobotreport.com/tate-deploys-58-hirebotics-cobot-welders-across-multiple-facilities/ <br>单家企业大规模部署 Cobot 是"协作机器人临界点"的标志性事件，预示焊接等高危工种自动化全面提速。 |
| 3 | **VicOne 发布基于 DEF CON 34 研究的免费 NVIDIA Isaac Sim 网络安全扩展** | https://www.therobotreport.com/vicone-releases-free-nviida-isaac-sim-cybersecurity-extension-based-def-con-34-research/ <br>仿真平台的攻防安全正在成为新议题，机器人系统的"零信任"思维开始向开发侧延伸。 |
| 4 | **RoboStore 推出 Robo Inc. 服务** — 助力美国机构部署 | https://www.therobotreport.com/robostore-launches-robo-inc-to-help-u-s-organizations-deploy-robots/ <br>"机器人即服务 + 集成商"模式正在标准化，渠道与服务能力成为继硬件后的下一战场。 |
| 5 | **RoboBusiness 20 年前瞻：专家共议未来机器人路线图** | https://www.therobotreport.com/experts-look-ahead-at-the-next-20-years-of-robotics-at-robobusiness/ <br>行业进入"长周期战略叙事"阶段，从硬件本体走向通用智能+场景闭环。 |

---

## 三、研究前沿

> ⚠️ 今日 ArXiv cs.RO 暂无新论文，章节暂缺。补充两条**最具参考意义的近周开源代码/论文仓库**，作为替代观察：

- **RoboTwin 2.0**（ICML 2026）— https://github.com/RoboTwin-Platform/RoboTwin ⭐2,708  
  双臂机器人大规模仿真 benchmark 与训练框架，为操作任务 sim-to-real 提供高质量基线。
- **OMG: Omni-Modal Motion Generation for Generalist Humanoid Control** — https://github.com/Tsinghua-MARS-Lab/OMG ⭐105  
  清华 MARS Lab 通用人形机器人多模态运动生成官方实现，关注全模态（视觉+本体+语言）融合策略。
- **INTACT-JEPA**（ECCV 2026）— https://github.com/zju3dv/INTACT-JEPA ⭐138  
  浙大 ZJU-3DV 同构意图到动作的无搜索世界模型，将自监督表征引入具身决策。
- **Habitat-GS**（ECCV 2026）— https://github.com/zju3dv/habitat-gs ⭐269  
  结合 3D Gaussian Splatting 的高保真动态导航仿真器，打通视觉真实感与物理交互。

---

## 四、重点项目

### 🦾 机器人学习与控制（模仿/强化/策略学习）

| 仓库 | Star | 核心贡献 |
|------|------|----------|
| **[RLinf](https://github.com/RLinf/RLinf)** | ⭐4,501 | 面向具身智能与 Agentic AI 的强化学习基础设施，PyTorch 原生，支持大规模分布式训练。 |
| **[RoboTwin 2.0](https://github.com/RoboTwin-Platform/RoboTwin)** | ⭐2,708 | ICML 2026 收录，提供双臂操作任务大规模仿真基准，是 sim-to-real 的重要基座。 |
| **[IsaacLab](https://github.com/isaac-sim/IsaacLab)** | ⭐7,870 | NVIDIA 基于 Isaac Sim 的统一机器人学习框架，GPU 加速物理 + 视觉，事实上的行业标准。 |
| **[RoboCasa](https://github.com/robocasa/robocasa)** | ⭐1,635 | 日常家务任务的大规模仿真，专注训练"通用型"家用机器人策略。 |
| **[Robot-Control-Stack](https://github.com/RobotControlStack/robot-control-stack)** | ⭐138 | 轻量、ROS-free 的 sim-to-real 框架，原生 MuJoCo Gymnasium 接口，支持 Franka / UR5e / xArm / SO101 / YAM。 |
| **[EmbodiChain](https://github.com/DexForce/EmbodiChain)** | ⭐206 | 端到端、GPU 加速、模块化的具身智能平台，便于快速组合策略与硬件。 |
| **[OMG](https://github.com/Tsinghua-MARS-Lab/OMG)** | ⭐105 | 清华通用人形机器人多模态运动生成，实现全模态（视觉+本体+语言）控制。 |
| **[handumi-sw](https://github.com/robonet-ai/handumi-sw)** | ⭐46 | 开源 HandUMI 双臂同步数据采集 + 重定向工具，覆盖标定、QA、回放与遥操作全链路。 |

### 🤖 仿真与框架（MuJoCo / Isaac / Gazebo / ROS）

| 仓库 | Star | 核心贡献 |
|------|------|----------|
| **[MuJoCo](https://github.com/google-deepmind/mujoco)** | ⭐14,509 | DeepMind 通用物理仿真器，机器人研究的事实标准，速度与精度兼优。 |
| **[Autoware](https://github.com/autowarefoundation/autoware)** | ⭐11,957 | 全球领先的开源自动驾驶软件栈，ROS 2 生态核心。 |
| **[newton](https://github.com/newton-physics/newton)** | ⭐5,309 | 基于 NVIDIA Warp 的 GPU 加速物理引擎，专为机器人与仿真研究者设计。 |
| **[Webots](https://github.com/cyberbotics/webots)** | ⭐4,542 | 开源 3D 机器人仿真器，跨平台、教学与研究广泛使用。 |
| **[dm_control](https://github.com/google-deepmind/dm_control)** | ⭐4,662 | DeepMind 基于 MuJoCo 的 RL 仿真栈，与 Acme 等算法库深度协同。 |
| **[mujoco_menagerie](https://github.com/google-deepmind/mujoco_menagerie)** | ⭐3,800 | 高质量 MuJoCo 机器人模型集合，覆盖四足、人形、机械臂、移动底盘。 |
| **[mjlab](https://github.com/mujocolab/mjlab)** | ⭐2,780 | Isaac Lab API + MuJoCo-Warp 后端，RL 与机器人研究的高吞吐仿真。 |
| **[gz-sim](https://github.com/gazebosim/gz-sim)** | ⭐1,446 | 新一代 Gazebo，开源机器人仿真主干，ROS 2 深度集成。 |
| **[ros-mcp-server](https://github.com/robotmcp/ros-mcp-server)** | ⭐1,385 | 把 Claude / GPT 等 LLM 通过 MCP 协议接入 ROS，Agent × 机器人控制桥梁。 |
| **[copper-rs](https://github.com/copper-project/copper-rs)** | ⭐1,446 | Rust 实现的机器人操作系统，确定性构建、运行、回放整个机器人栈。 |

### 🧠 VLA 与基础模型（视觉-语言-动作 / 具身基础模型）

| 仓库 | Star | 核心贡献 |
|------|------|----------|
| **[BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K)** | ⭐1,627 | 斯坦福加速具身 AI 研究的统一平台，含 1000+ 日常任务仿真基准。 |
| **[PhyAgentOS](https://github.com/PhyAgentOS-Dev/PhyAgentOS)** | ⭐1,722 | 基于 Agentic workflow 的"自进化"具身 AI 操作系统。 |
| **[dora-rs](https://github.com/dora-rs/dora)** | ⭐3,866 | 数据流驱动的机器人中间件，低延迟、可组合、分布式，为 AI 机器人而生。 |
| **[vla-evaluation-harness](https://github.com/allenai/vla-evaluation-harness)** | ⭐523 | AllenAI 通用 VLA 评估框架，"任意 VLA × 任意仿真 × 任意机械臂" 一键评测。 |
| **[OpenTau](https://github.com/TensorAuto/OpenTau)** | ⭐197 | Tensor 开源的 PyTorch VLA 训练基础设施，面向真实机器人部署。 |
| **[mimic-video](https://github.com/lucidrains/mimic-video)** | ⭐120 | Mimic-Video：超越视觉语言动作模型的视频-动作通用机器人控制实现。 |
| **[opendm](https://github.com/dexmal/opendm)** | ⭐228 | 通向"通用具身智能"的开放世界基础模型。 |
| **[rosclaw](https://github.com/ros-claw/rosclaw)** | ⭐179 | 面向 Physical AI 与具身 Agent 的自进化运行时基础设施，e-URDF + 沙箱安全 + 技能进化。 |

### 🔧 硬件与驱动

| 仓库 | Star | 核心贡献 |
|------|------|----------|
| **[openpilot](https://github.com/commaai/openpilot)** | ⭐63,382 | 开源机器人操作系统，已在 300+ 车型上升级辅助驾驶；最大的真实部署机器人项目。 |
| **[ArduPilot](https://github.com/ArduPilot/ardupilot)** | ⭐15,659 | ArduPlane/Copter/Rover/Sub 全谱系开源飞控，行业基线。 |
| **[PX4-Autopilot](https://github.com/PX4/PX4-Autopilot)** | ⭐12,380 | PX4 飞控软件，研究与商业无人机的事实标准。 |
| **[openarm](https://github.com/enactic/openarm)** | ⭐2,830 | 全开源仿人机械臂，专注"接触丰富"环境下的物理 AI 研究与部署。 |
| **[OpenCat](https://github.com/PetoiCamp/OpenCat-Quadruped-Robot)** | ⭐5,078 | 波士顿动力风格的四足机器人宠物框架，教育与研究友好。 |
| **[navigation2](https://github.com/ros-navigation/navigation2)** | ⭐4,572 | ROS 2 导航框架与系统，机器人移动底盘标配。 |

### 📊 数据集与基准

| 仓库 | Star | 核心贡献 |
|------|------|----------|
| **[habitat-gs](https://github.com/zju3dv/habitat-gs)** | ⭐269 | ECCV 2026：3D Gaussian Splatting + 高保真导航仿真，提供动态场景基线。 |
| **[humanoid-motion-intelligence](https://github.com/RealXiaoze/humanoid-motion-intelligence)** | ⭐304 | 人形机器人运动智能论文/项目/产业/求职聚合知识库。 |
| **[Awesome-VLA-Papers](https://github.com/hanjianhua44/Awesome-VLA-Papers)** | ⭐23 | VLA 模型论文精选集，覆盖自动驾驶与机器人。 |
| **[VLA-Handbook](https://github.com/sou350121/VLA-Handbook)** | ⭐491 | 中文 VLA 实战手册，专注机器人专属挑战。 |
| **[Awesome

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*