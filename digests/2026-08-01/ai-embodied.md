# 具身智能开源动态日报 2026-08-01

> 数据来源: GitHub Search API (126 仓库) | ArXiv cs.RO (0 篇论文) | RSS 新闻 (47 条) | 生成时间: 2026-08-01 02:11 UTC

---

# 具身智能开源动态日报

> 日期覆盖：行业新闻（IEEE Spectrum / The Robot Report） · ArXiv cs.RO · GitHub Trending（机器人/具身方向）

---

## 一、今日速览

今日信号集中在三个方向：**Physical AI 基础设施进入产品化阶段**（Teradyne Robotics Q2 营收同比 +33%，KUKA 落地北美车企自动化管理平台，The Robot Report 同期盘点"2026 塑造机器人的 5 大 Physical AI 基础设施"），**商用无人机加速规模化**（Procore 以 8.45 亿美元收购 DroneDeploy、DoorDash 获 FAA 运营认证），**机器人硬件侧持续向感知-决策一体化演进**（彩色触觉机器人手指、可在线更新 AI 的光学技术）。开源侧，MuJoCo-Warp 生态（Newton、mjlab）与 VLA 工程化平台（FluxVLA、OpenTau、τ0-VLA）仍是本周高活跃主线，**具身 AI 操作系统与中间件层**（PhyAgentOS、DORA、Copper、rosclaw）正在快速涌现。

---

## 二、行业脉搏

| # | 动态 | 意义 |
|---|------|------|
| 1 | **Teradyne Robotics Q2 营收同比 +33%** — [The Robot Report](https://www.therobotreport.com/teradyne-robotics-revenue-rises-33-year-over-year-in-q2/) | 工业自动化龙头（Universal Robots / MiR 母公司）业绩高增，是 2026 年 Physical AI 商业化拐点最直接的财务信号。 |
| 2 | **Procore 8.45 亿美元收购 DroneDeploy** — [The Robot Report](https://www.therobotreport.com/procore-technologies-acquires-dronedeploy-845m/) | 建筑科技巨头吞下建筑航拍龙头，标志着"无人机即数据采集节点"被 SaaS 主线正式收编，具身数据飞轮价值被重估。 |
| 3 | **DoorDash 获 FAA 无人机配送运营认证** — [The Robot Report](https://www.therobotreport.com/doordash-gains-faa-certification-to-operate-its-own-drone-delivery-program/) | 继 Wing、Zipline 之后，第三方平台首次独立持证，低空经济从"试点"走向"持续运营"。 |
| 4 | **5 大 Physical AI 基础设施平台盘点（2026）** — [The Robot Report](https://www.therobotreport.com/5-physical-ai-infrastructure-platforms-shaping-robotics-in-2026/) | 行业首次系统梳理 Physical AI 基础设施栈（仿真、数据、训练、推理、部署），为新进入者提供选型坐标。 |
| 5 | **KUKA 部署面向北美车企的自动化管理平台** — [The Robot Report](https://www.therobotreport.com/kuka-deploys-automation-management-platform-north-american-automoters/) | "机器人 + 工业软件"组合落地，传统四大机器人厂商正在向平台型公司转型。 |
| 6 | **FCC 机器人裁定引发美国政策讨论** — [The Robot Report](https://www.therobotreport.com/fcc-robot-ruling-shines-spotlight-on-u-s-policy-how-next-gen-ai-can-help-warehousing/) | 频谱/通信层规则将影响仓储、自主配送机器人的部署边界，值得国内出海团队同步关注。 |
| 7 | **机器人手指彩色触觉感知 / 在线更新 AI 的光学技术** — [IEEE Spectrum ①](https://spectrum.ieee.org/robot-finger) · [IEEE Spectrum ②](https://spectrum.ieee.org/ai-in-robotics) | 硬件层两个信号：触觉向多模态（颜色+力）演进；模型权重可通过光路"热更新"，降低 OTA 门槛。 |

---

## 三、研究前沿

> 📭 **今日 ArXiv cs.RO 无新增论文**，学术端暂无新发布。建议回看本周期内的代表工作（π0、OpenVLA-OFT、HiRT、3D/4D World Models Survey 等）。

如需补位，可重点关注仓库中沉淀的近期成果：
- `worldbench/awesome-3d-4d-world-models`（[链接](https://github.com/worldbench/awesome-3d-4d-world-models)）— **TPAMI 2026 综述**，3D/4D 世界模型系统盘点。
- `sii-research/tau-0-vla`（[链接](https://github.com/sii-research/tau-0-vla)）— τ0-VLA 官方实现，引入 World-Model-Guided Test-Time Computation。
- `lucidrains/mimic-video`（[链接](https://github.com/lucidrains/mimic-video)）— Mimic-Video：超越 VLA 的视频-动作模型。
- `zju3dv/INTACT-JEPA`（[链接](https://github.com/zju3dv/INTACT-JEPA)）— 同构意图-动作学习，Search-Free World Models。
- `dhkim-furiosa/daily-ai-robotics-papers`（[链接](https://github.com/dhkim-furiosa/daily-ai-robotics-papers)）— 每日 VLA / World Model / Physical AI 论文简报，可作为补盲渠道。

---

## 四、重点项目

### 🦾 机器人学习与控制

- **ManiSkill** · ⭐3,185 · [mani-skill/ManiSkill](https://github.com/mani-skill/ManiSkill)
  GPU 并行机器人仿真器与基准，已成为 SOTA 模仿/强化学习操作任务的事实标准之一。
- **RLinf** · ⭐4,363 · [RLinf/RLinf](https://github.com/RLinf/RLinf)
  面向具身与 Agentic AI 的强化学习基础设施，强调大规模分布式训练链路。
- **Gymnasium** · ⭐12,257 · [Farama-Foundation/Gymnasium](https://github.com/Farama-Foundation/Gymnasium)
  单智能体强化学习环境标准 API（前 Gym），机器人 RL 生态的"操作系统级"依赖。
- **BEHAVIOR-1K** · ⭐1,606 · [StanfordVL/BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K)
  1,000 种日常家务任务的大规模具身基准，长期作为长期任务与组合泛化的主战场。
- **UniLab** · ⭐858 · [unilabsim/UniLab](https://github.com/unilabsim/UniLab)
  异构架构机器人 RL 框架，挑战 GPU-Dominant 范式，对边缘/在环训练具参考价值。
- **OpenPipe/ART** · ⭐10,557 · [OpenPipe/ART](https://github.com/OpenPipe/ART)
  Agent Reinforcement Trainer：用 GRPO 训练多步真实任务 Agent，对 Qwen3.6/GPT-OSS/Llama 等开放模型即插即用。

### 🤖 仿真与框架

- **MuJoCo** · ⭐14,399 · [google-deepmind/mujoco](https://github.com/google-deepmind/mujoco)
  通用多刚体接触物理仿真器，机器人学习的事实底层。
- **Newton** · ⭐5,271 · [newton-physics/newton](https://github.com/newton-physics/newton)
  基于 NVIDIA Warp 的开源 GPU 加速物理引擎，专为机器人学家与仿真研究设计。
- **IsaacLab** · ⭐7,813 · [isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab)
  基于 Isaac Sim 的统一机器人学习框架，VLA/RL 训练链路最成熟的选择之一。
- **mjlab** · ⭐2,758 · [mujocolab/mjlab](https://github.com/mujocolab/mjlab)
  "Isaac Lab API × MuJoCo-Warp"，把 Isaac Lab 工程接口与新一代 GPU 物理结合，跨仿真器迁移成本降低。
- **Navigation2** · ⭐4,533 · [ros-navigation/navigation2](https://github.com/ros-navigation/navigation2)
  ROS 2 官方导航框架，移动机器人栈的事实标准。
- **Drake** · ⭐4,132 · [RobotLocomotion/drake](https://github.com/RobotLocomotion/drake)
  基于模型的机器人设计与验证工具链，覆盖建模→优化→控制全流程。
- **Webots** · ⭐4,519 · [cyberbotics/webots](https://github.com/cyberbotics/webots)
  开源机器人仿真器，机器人课程与多机器人场景长期首选。
- **dm_control** · ⭐4,653 · [google-deepmind/dm_control](https://github.com/google-deepmind/dm_control)
  DeepMind 基于 MuJoCo 的 RL 仿真栈，论文复现高频选项。
- **Gazebo (gz-sim)** · ⭐1,435 · [gazebosim/gz-sim](https://github.com/gazebosim/gz-sim)
  开源机器人仿真器，ROS 生态默认搭配。
- **GLIM** · ⭐1,712 · [koide3/glim](https://github.com/koide3/glim)
  基于点云的 3D 定位与建图框架，激光/视觉 SLAM 工程化优选。

### 🧠 VLA 与基础模型

- **FluxVLA** · ⭐583 · [FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA)
  "从数据到真机部署"的全流程 VLA 工程平台，团队级快速上手入口。
- **τ0-VLA** · ⭐241 · [sii-research/tau-0-vla](https://github.com/sii-research/tau-0-vla)
  分层机器人基础模型，以 World Model 引导 Test-Time Computation。
- **OpenTau** · ⭐192 · [TensorAuto/OpenTau](https://github.com/TensorAuto/OpenTau)
  PyTorch 真实机器人 VLA 训练基础设施，强调工程化与可扩展。
- **VLA Evaluation Harness** · ⭐499 · [allenai/vla-evaluation-harness](https://github.com/allenai/vla-evaluation-harness)
  统一框架评估任意 VLA 在任意仿真基准上的表现，跨模型公平对比的基础设施。
- **openpi-flash** · ⭐39 · [Hebbian-Robotics/openpi-flash](https://github.com/Hebbian-Robotics/openpi-flash)
  openpi 的实时推理引擎，面向低延迟部署。
- **VLA-Handbook（中文实战手册）** · ⭐459 · [sou350121/VLA-Handbook](https://github.com/sou350121/VLA-Handbook)
  面向 VLA 算法工程师的全中文实战手册，填补中文系统化学习资源空缺。

### 🔧 硬件与驱动

- **openpilot** · ⭐63,280 · [commaai/openpilot](https://github.com/commaai/openpilot)
  机器人操作系统级开源 ADAS，已覆盖 300+ 车型，是消费级自动驾驶的标杆项目。
- **PX4-Autopilot** · ⭐12,316 · [PX4/PX4-Autopilot](https://github.com/PX4/PX4-Autopilot)
  无人机飞控事实标准，与 DoorDash FAA 商用进程直接呼应。
- **Autoware** · ⭐11,924 · [autowarefoundation/autoware](https://github.com/autowarefoundation/autoware)
  全球领先的开源自动驾驶软件项目。
- **ArduPilot** · ⭐15,583 · [ArduPilot/ardupilot](https://github.com/ArduPilot/ardupilot)
  覆盖固定翼/多旋翼/无人车/潜航器的成熟飞控栈。
- **openarm** · ⭐2,788 · [enactic/openarm](https://github.com/enactic/openarm)
  全开源人形机械臂，面向接触丰富场景下的 Physical AI 研究与部署。

### 📊 数据集与基准

- **RoboVerse** · ⭐1,794 · [RoboVerseOrg/RoboVerse](https://github.com/RoboVerseOrg/RoboVerse)
  面向可扩展、可泛化机器人学习的统一平台/数据集/基准。
- **Awesome-UMI** · ⭐13 · [chang-xinhai/Awesome-UMI](https://github.com/chang-xinhai/A

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*