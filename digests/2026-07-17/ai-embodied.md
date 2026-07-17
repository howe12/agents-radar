# 具身智能开源动态日报 2026-07-17

> 数据来源: GitHub Search API (130 仓库) | ArXiv cs.RO (30 篇论文) | RSS 新闻 (44 条) | 生成时间: 2026-07-17 02:05 UTC

---

# 具身智能开源动态日报

**日期：2025 年 11 月 14 日**　|　数据来源：IEEE Spectrum · The Robot Report · arXiv cs.RO · GitHub Trending

---

## 一、今日速览

今日具身智能生态呈现 **"资本 + 基础模型 + 物理仿真"** 三线并进的格局。资本端，**Walden Robotics 以 11 亿美元估值横空出世**，与同日 TerraFirma 拿下 1.15 亿美元融资遥相呼应，标志通用机器人赛道正式进入"独角兽量产"阶段；研究端，**World-Action Model 与 DriftWorld 两篇论文同时回应同一核心命题——生成式世界模型能否真正提升具身控制**，反映出学界正在从"能想象"走向"会行动"的关键拐点；工程端，**MuJoCo-Warp 与 IsaacLab API 加速融合**（mujocolab/mjlab、Newton、IsaacLab），GPU 物理仿真栈的标准化战争已然打响。

---

## 二、行业脉搏

| # | 动态 | 链接 | 意义 |
|---|---|---|---|
| 1 | **Walden Robotics 以 11 亿美元估值发布通用机器人** | [The Robot Report](https://www.therobotreport.com/walden-robotics-launches-1-1b-valuation-general-purpose-robots/) | 继 Figure、Physical Intelligence 之后，又一家"通用机器人"公司以独角兽姿态登场，验证了"基础模型 + 通用本体"路线的资本市场认可度 |
| 2 | **TerraFirma 完成 1.15 亿美元融资，专注建筑机器人基础设施** | [The Robot Report](https://www.therobotreport.com/terrafirma-raises-115m-build-robotic-infrastructure-construction/) | 建筑机器人首次获得单笔过亿美元融资，弥补了过去十年具身智能在"非结构化重工业"场景的空白 |
| 3 | **Lockheed Martin 采用 Machina 机器人生产导弹关键部件** | [The Robot Report](https://www.therobotreport.com/lockheed-martin-taps-machinas-robots-for-mission-critical-missile-parts/) | 国防供应链成为高端制造的下一个落地场景，对机器人精度、可靠性与可追溯性提出极高要求 |
| 4 | **Xpanner 推出 X1 Panel Lift 自动光伏板安装系统** | [The Robot Report](https://www.therobotreport.com/xpanner-rolls-out-x1-panel-lift-automated-solar-panel-installation/) | 机器人正在进入能源基建场景，"专用本体 + 单一任务"的快速商业化路径愈发成熟 |
| 5 | **X-Square Robot 发布通用机器人基础栈** | [IEEE Spectrum](https://spectrum.ieee.org/x-square-robot-embodied-ai-stack) | 与 Walden 形成对照——前者强调"上层软件栈"，后者强调"本体平台"，预示未来具身产业链将出现 OS / Hardware 双层分工 |

---

## 三、研究前沿

### 1. **BadWAM: When World-Action Models Dream Right but Act Wrong**
[arXiv:2607.15207](http://arxiv.org/abs/2607.15207v1) — Qi Li, Xingyi Yang 等
首次系统揭示 **WAM（World-Action Model）在视觉预测与动作执行之间的"鸿沟"**——模型能准确想象未来，但据此选择的动作未必最优。该工作为 VLA 与世界模型联合训练提供了重要的诊断工具与失败模式分类。

### 2. **DriftWorld: Fast World Modeling through Drifting**
[arXiv:2607.15065](http://arxiv.org/abs/2607.15065v1) — Susie Lu, Haonan Chen 等
提出 **基于"漂移"机制的轻量世界模型**，牺牲部分生成质量换取推理速度，适合 MPC 与实时控制内循环。对边缘部署和在线规划具有工程价值。

### 3. **Scaling Behavior Foundation Model for Humanoid Robots**
[arXiv:2607.15163](http://arxiv.org/abs/2607.15163v1) — Weishuai Zeng, Kangning Yin 等
针对 **人形机器人的全身协调与实时响应需求**，探索行为基础模型的 Scaling Law，是 Sim-to-Real 与通用人形策略学习的关键一步。

### 4. **Stigmergic Graph Memory: Multi-Agent Pickup and Delivery**
[arXiv:2607.15182](http://arxiv.org/abs/2607.15182v1) — Aditya Dutta, Joon-Seok Kim 等
把 **信息素机制（Stigmergy）引入多智能体仓储调度**，无需全局协调即可在大量并发任务下避免拥堵，对真实履约中心部署极具参考意义。

### 5. **Learning Agile Navigation in Crowded Environments for Quadruped Robots**
[arXiv:2607.15036](http://arxiv.org/abs/2607.15036v1) — Shuyu Wu, Zeyu Liu 等
聚焦 **四足机器人在密集人群中的敏捷导航**，正面应对严重传感器遮挡与动态障碍，是四足机器人走出实验室进入公共空间的关键能力。

---

## 四、重点项目

### 🦾 机器人学习与控制

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [**OpenPipe/ART**](https://github.com/OpenPipe/ART) | 10,480 | Agent Reinforcement Trainer，使用 GRPO 训练多步真实任务代理——把 RL 推向 Agent 时代的关键基础设施 |
| [**OpenRLHF/OpenRLHF**](https://github.com/OpenRLHF/OpenRLHF) | 9,807 | 基于 Ray 的高性能 Agentic RL 框架，支持 PPO/DAPO/REINFORCE++，是 VLA 与大模型对齐训练的主流底座 |
| [**PufferAI/PufferLib**](https://github.com/PufferAI/PufferLib) | 6,153 | "Puffing up RL"，为高吞吐 RL 训练而生的精简核心，适合大规模并行机器人策略学习 |
| [**Tsinghua-MARS-Lab/OMG**](https://github.com/Tsinghua-MARS-Lab/OMG) | 92 | [CVPR 26] 通用人形机器人的 Omni-Modal Motion Generation，全模态生成打通运动控制 |
| [**Soltanilara/giava**](https://github.com/Soltanilara/giava) | 33 | 人类注视 + 视觉 Transformer 的高效强健机器人模仿学习，验证"以人为中心"的感知融合思路 |

### 🤖 仿真与框架

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [**google-deepmind/mujoco**](https://github.com/google-deepmind/mujoco) | 14,236 | 通用物理仿真事实标准，社区生态最广、研究复现最稳 |
| [**isaac-sim/IsaacLab**](https://github.com/isaac-sim/IsaacLab) | 7,691 | NVIDIA 官方机器人学习统一框架，GPU 并行训练的事实工业标准 |
| [**newton-physics/newton**](https://github.com/newton-physics/newton) | 5,200 | 基于 NVIDIA Warp 的开源 GPU 物理引擎，专为机器人学家打造，是 GPU 仿真栈的"新变量" |
| [**mujocolab/mjlab**](https://github.com/mujocolab/mjlab) | 2,691 | 用 MuJoCo-Warp 实现 IsaacLab API，**MuJoCo 与 IsaacLab 体验趋同**的关键工程尝试 |
| [**ARISE-Initiative/robosuite**](https://github.com/ARISE-Initiative/robosuite) | 2,515 | 模块化机器人仿真框架与基准，长期作为操作学习研究的事实基准 |
| [**gazebosim/gz-sim**](https://github.com/gazebosim/gz-sim) | 1,411 | Gazebo 最新一代，ROS 2 生态默认仿真器 |

### 🧠 VLA 与基础模型

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [**RLinf/RLinf**](https://github.com/RLinf/RLinf) | 4,137 | 面向具身与 Agentic AI 的强化学习基础设施，是 VLA 后训练阶段的核心底座 |
| [**dora-rs/dora**](https://github.com/dora-rs/dora) | 3,845 | Rust 编写的数据流机器人中间件，低延迟、可组合、分布式，专为 AI 机器人应用而生 |
| [**PhyAgentOS/PhyAgentOS**](https://github.com/PhyAgentOS/PhyAgentOS) | 667 | 自进化的具身智能操作系统，基于 Agentic Workflow 构建，是"具身 OS"概念的先行者 |
| [**FluxVLA/FluxVLA**](https://github.com/FluxVLA/FluxVLA) | 539 | 一站式 VLA 工程平台，覆盖数据采集到真机部署的完整链路 |
| [**InternRobotics/InternVLA-A-series**](https://github.com/InternRobotics/InternVLA-A-series) | 498 | InternVLA-A1：统一理解、生成与动作的机器人操作模型 |
| [**allenai/vla-evaluation-harness**](https://github.com/allenai/vla-evaluation-harness) | 448 | 一个框架评估任意 VLA 模型在任意仿真基准上的表现，是 VLA 走向可比较的关键工具 |
| [**ros-claw/rosclaw**](https://github.com/ros-claw/rosclaw) | 164 | 面向 Physical AI 的自进化运行时，e-URDF、sandbox 安全、能力路由——"具身智能底座 OS"的新尝试 |

### 🔧 硬件与驱动

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [**enactic/openarm**](https://github.com/enactic/openarm) | 2,729 | 完全开源的人形机械臂，专注接触丰富的物理 AI 研究与部署 |
| [**hku-mars/UMI-3D**](https://github.com/hku-mars/UMI-3D) | 257 | UMI 的 3D SLAM 与数据处理流水线，让便携式数据采集更精准 |
| [**Source-Robotics/PAR6-Collaborative-Robot-Arm**](https://github.com/Source-Robotics/PAR6-Collaborative-Robot-Arm) | 27 | 面向教育与 R&D 的开源协作机械臂，把"机器人本体可获得性"下沉到学校与个人 |

### 📊 数据集与基准

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [**RoboTwin-Platform/RoboTwin**](https://github.com/RoboTwin-Platform/RoboTwin) | 2,592 | RoboTwin 2.0 官方仓库，双臂操作任务自动化生成与基准 |
| [**StanfordVL/BEHAVIOR-1K**](https://github.com/StanfordVL/BEHAVIOR-1K) | 1,578 | 1K 个日常家务任务的具身 AI 基准，是"长时序、复杂语义"任务的标杆 |
| [**RoboVerseOrg/RoboVerse**](https://github.com/RoboVerseOrg/RoboVerse) | 1,781 | 统一的机器人学习平台、数据集与基准，瞄准可扩展、可泛化策略 |

---

## 五、生态趋势信号

把今天三方信息合并起来读，可以清晰看到几条加速形成的趋势：

**① World Models 从"概念热"走向"工程实"**。DriftWorld 强调实时性、BadWAM 强调失败诊断、Awesome-World-Models / 3D-4D-World-Models 综述涌现——社区已普遍承认世界模型是 VLA 之外的第二条主线，且开始严肃讨论"想象 ≠ 行动"的现实落差。

**② 通用人形机器人从 Demo 走向资本与产业链**。Walden Robotics 的 11 亿美元估值、Tien Kung-Lab 与 OMG 等开源人形栈、TienKung/IsaacLab 直通工作流——头部资本、学术研究、工程工具首次在同一周期内同步。

**③ GPU 仿真栈进入"战国时代"**。IsaacLab 仍是工业事实标准，但 MuJoCo-Warp + mjlab 让 MuJoCo 重新具备 GPU 竞争力，Newton 作为 NVIDIA Warp 之上的开源新军加入战局，"用谁跑仿真"的争论将在 2026 年初见分晓。

**④ "具身 OS / Physical AI Runtime"概念成型**。PhyAgentOS、ros-claw、copper-rs、dora-rs 从不同角度切入——有人在做自进化、有人在做沙箱安全、有人在做确定性回放，意味着具身智能即将从"模型 + 数据"升级为"模型 + 数据 + 运行时"三位一体。

**⑤ 专用场景加速变现**。TerraFirma（建筑）、Machina（国防）、Xpanner（光伏）、Lockheed Martin（导弹）——非结构化、极端场景正成为高价值具身落地的"前沿阵地"。

---

## 六、值得关注

### 🔥 1. Walden Robotics — 通用机器人赛道的"估值锚"事件
[walden-robotics-launches](https://www.therobotreport.com/walden-robotics-launches-1-1b-valuation-general-purpose-robots/)
11 亿美元估值不是孤立事件——它与 Figure AI、Physical Intelligence、1X、Skild AI 共同构成"基础模型机器人俱乐部"。建议持续

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*