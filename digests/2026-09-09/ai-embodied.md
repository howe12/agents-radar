# 具身智能开源动态日报 2026-09-09

> 数据来源: GitHub Search API (131 仓库) | ArXiv cs.RO (0 篇论文) | RSS 新闻 (46 条) | 生成时间: 2026-09-09 02:34 UTC

---

# 具身智能开源动态日报

**日期：2025 年 1 月 · 第 X 期**
覆盖范围：IEEE Spectrum、The Robot Report、ArXiv cs.RO、GitHub Trending

---

## 一、今日速览

今日机器人硬件瓶颈论持续发酵，The Robot Report 发表深度评论指出 **"AI 跑不过人形机器人的硬件"**，点出当前人形机器人产业被模型能力光环掩盖的机电极限。与此同时，IEEE Spectrum 报道 **Cyborg 蟑螂救援机器人** 与 **Vitestro 抽血机器人** 走向实际部署；**Boston Dynamics 资深团队**则创立 Dynamic Creatures，将机器人技术推向娱乐角色领域。开源侧呈现明显趋势：VLA（视觉-语言-动作）模型持续高密度迭代，世界模型与具身基础模型相关仓库快速扩张，**1-bit VLA（BitVLA）、EGO 视角世界动作模型（EgoWAM）等新工作涌现**；硬件侧则出现 **murobotics-ai/handumi-sw 双手机器人数据采集软件** 等工程化导向的工具集。

---

## 二、行业脉搏

1. **"AI can't outrun a humanoids hardware"**（The Robot Report）
   深度评论指出，当前人形机器人演示过度依赖 VLA 模型的"软件光环"，但执行器、减速器、电池、热管理等机电系统仍是不可逾越的工程瓶颈。意义：把行业关注点从"模型多强"拉回"硬件多稳"，预示 2025 年产业竞争焦点将向机电一体化与可靠性倾斜。

2. **Boston Dynamics veterans launch Dynamic Creatures**（The Robot Report）
   前 Boston Dynamics 资深成员创立 Dynamic Creatures，专注用机器人技术打造娱乐角色。意义：具身智能从工业/物流走向消费娱乐场景，机器人"角色化"成为新增长曲线。

3. **Cyborg Roaches Can Stab You With Needles**（IEEE Spectrum）
   半机械蟑螂救援机器人装载微型穿刺针，可在灾难现场执行探测任务。意义：生物混合机器人（biohybrid robotics）从实验室走向工程化，救援机器人形态库再添新物种。

4. **This Robot Will Draw Your Blood Now**（IEEE Spectrum）
   荷兰 Vitestro 公司的 Aletta 抽血机器人进入临床部署阶段。意义：医疗机器人从"辅助"走向"主操作"，标志着医疗具身智能的商业拐点。

5. **Vision AI is the safety backbone of the automated job site**（The Robot Report）
   阐述视觉 AI 在自动化建筑工地中作为安全基础设施的角色。意义：与传统工业机器人"笼内作业"不同，开放工地的视觉感知成为具身智能的"安全护栏"。

---

## 三、研究前沿

> ⚠️ **今日 ArXiv cs.RO 无新增论文**。
> 学术侧暂时进入"沉淀期"，产业与开源侧仍持续活跃，下一波论文潮预计出现在本月后续会议截稿前后。

---

## 四、重点项目

### 🦾 机器人学习与控制

- **[MathFoundationRL/Book-Mathematical-Foundation-of-Reinforcement-Learning](https://github.com/MathFoundationRL/Book-Mathematical-Foundation-of-Reinforcement-Learning)** ⭐17,717
  《Mathematical Foundations of Reinforcement Learning》开源教材主页，为具身 RL 入门提供系统化数学基础。

- **[DLR-RM/stable-baselines3](https://github.com/DLR-RM/stable-baselines3)** ⭐13,778
  DRL 实验室出品的可靠 RL 算法 PyTorch 实现，是机器人策略学习的工业基准工具。

- **[Farama-Foundation/Gymnasium](https://github.com/Farama-Foundation/Gymnasium)** ⭐12,501
  单智能体强化学习环境标准 API（原 Gym），机器人 RL 训练的事实接口。

- **[OpenPipe/ART](https://github.com/OpenPipe/ART)** ⭐10,705
  Agent Reinforcement Trainer，使用 GRPO 训练多步真实任务智能体，覆盖 Qwen3.6、GPT-OSS、Llama 等模型。

- **[enactic/openarm](https://github.com/enactic/openarm)** ⭐2,937
  面向 Physical AI 研究的全开源人形机械臂，专注接触丰富环境下的真实部署。

- **[RoboVerseOrg/RoboVerse](https://github.com/RoboVerseOrg/RoboVerse)** ⭐1,858
  面向可扩展、可泛化机器人学习的统一平台、数据集与基准。

- **[RealXiaoze/humanoid-motion-intelligence](https://github.com/RealXiaoze/humanoid-motion-intelligence)** ⭐509
  人形机器人运动智能论文、开源项目、产业与求职知识库。

### 🤖 仿真与框架

- **[google-deepmind/mujoco](https://github.com/google-deepmind/mujoco)** ⭐15,000
  多关节接触动力学通用物理仿真器，具身学习的事实标准。

- **[carla-simulator/carla](https://github.com/carla-simulator/carla)** ⭐14,372
  自动驾驶研究的开源仿真器，具身导航与跨域迁移研究的重要测试床。

- **[PX4/PX4-Autopilot](https://github.com/PX4/PX4-Autopilot)** ⭐12,573
  开源无人机飞控软件，空中具身智能的核心基础设施。

- **[autowarefoundation/autoware](https://github.com/autowarefoundation/autoware)** ⭐12,050
  全球领先的自动驾驶开源软件项目。

- **[isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab)** ⭐8,081
  基于 NVIDIA Isaac Sim 的机器人学习统一框架。

- **[cyberbotics/webots](https://github.com/cyberbotics/webots)** ⭐4,603
  开源机器人仿真器，支持多机种、多传感器。

- **[gazebosim/gz-sim](https://github.com/gazebosim/gz-sim)** ⭐1,494
  Gazebo 最新版开源机器人仿真器。

- **[mujocolab/mjlab](https://github.com/mujocolab/mjlab)** ⭐3,016
  基于 MuJoCo-Warp 的 Isaac Lab API，为 RL 与机器人研究提供 GPU 加速仿真。

### 🧠 VLA 与基础模型

- **[TianxingChen/Embodied-AI-Guide](https://github.com/TianxingChen/Embodied-AI-Guide)** ⭐15,873
  Lumina 社区发布的具身智能技术指南，集成论文、模型与实战教程。

- **[datawhalechina/every-embodied](https://github.com/datawhalechina/every-embodied)** ⭐3,603
  零基础从 0 构建具身智能机器人，并手写实现 VLA/OpenVLA/SmolVLA/Pi0。

- **[FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA)** ⭐655
  一站式 VLA 工程平台，覆盖从数据采集到真实机器人部署全链路。

- **[sii-research/tau-0-vla](https://github.com/sii-research/tau-0-vla)** ⭐612
  τ0-VLA 官方实现：基于世界模型引导测试时计算的分层机器人基础模型。

- **[sou350121/VLA-Handbook](https://github.com/sou350121/VLA-Handbook)** ⭐601
  VLA 中文实战手册，面向算法工程师求职与项目落地。

- **[allenai/vla-evaluation-harness](https://github.com/allenai/vla-evaluation-harness)** ⭐591
  统一评估任意 VLA 模型在任何机器人仿真基准上的性能。

- **[syswonder/robonix](https://github.com/syswonder/robonix)** ⭐352
  机器人代理操作系统（Agentic OS for Robots），强调智能体编排能力。

- **[TensorAuto/OpenTau](https://github.com/TensorAuto/OpenTau)** ⭐215
  Tensor 出品的 VLA 训练基础设施，支持真实机器人 PyTorch 训练。

- **[ustcwhy/BitVLA](https://github.com/ustcwhy/BitVLA)** ⭐165
  BitVLA 官方实现：面向机器人操作的 1-bit VLA 模型，显著降低推理资源。

- **[Noietch/EVA-CLIENT](https://github.com/Noietch/EVA-CLIENT)** ⭐169
  EVA-Client：面向真实机器人的统一部署、评估与数据采集框架。

### 📊 数据集与基准

- **[StanfordVL/BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K)** ⭐1,689
  斯坦福 BEHAVIOR-1K 平台，加速具身 AI 在家庭任务上的研究。

- **[RoboTwin-Platform/RoboTwin](https://github.com/RoboTwin-Platform/RoboTwin)** ⭐2,827
  [ICML 2026] RoboTwin 2.0 官方代码库，面向双臂操作的仿真基准。

- **[PhyAgentOS/PhyAgentOS-core](https://github.com/PhyAgentOS/PhyAgentOS-core)** ⭐2,118
  递归自我改进的物理代理操作系统，支持具身智能体持续自我进化。

- **[knightnemo/Awesome-World-Models](https://github.com/knightnemo/Awesome-World-Models)** ⭐3,406
  世界建模领域一站式资源汇总，覆盖视频生成、具身 AI、自动驾驶。

- **[leofan90/Awesome-World-Models](https://github.com/leofan90/Awesome-World-Models)** ⭐2,003
  世界模型论文清单，覆盖具身 AI 与通用视频生成。

- **[murobotics-ai/handumi-sw](https://github.com/murobotics-ai/handumi-sw)** ⭐69
  开源 HandUMI 软件，提供同步双臂数据采集与重定位全流程工具链，是低门槛 UMI 方案的代表。

- **[GaTech-RL2/EgoWAM](https://github.com/GaTech-RL2/EgoWAM)** ⭐16
  [CoRL 2026] EgoWAM：超越像素的、世界动作模型 + 野外第一人称人类数据。

### 🔧 硬件与驱动

- **[ArduPilot/ardupilot](https://github.com/ArduPilot/ardupilot)** ⭐15,827
  涵盖 ArduPlane/Copter/Rover/Sub 的开源飞控生态，长期稳定维护。

- **[nasa-jpl/open-source-rover](https://github.com/nasa-jpl/open-source-rover)** ⭐9,634
  NASA JPL 发布的"自己动手造火星车"项目，六轮 DIY 方案。

- **[PetoiCamp/OpenCat-Quadruped-Robot](https://github.com/PetoiCamp/OpenCat-Quadruped-Robot)** ⭐5,287
  开源四足机器人框架，复现 Boston Dynamics 风格四足平台。

- **[introlab/rtabmap](https://github.com/introlab/rtabmap)** ⭐3,991
  RTAB-Map 开源 SLAM 库与独立应用，支持 RGB-D + LiDAR 多传感器。

- **[stack-of-tasks/pinocchio](https://github.com/stack-of-tasks/pinocchio)** ⭐3,719
  刚体动力学算法及其解析导

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*