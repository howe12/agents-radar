# 具身智能开源动态日报 2026-08-10

> 数据来源: GitHub Search API (130 仓库) | ArXiv cs.RO (0 篇论文) | RSS 新闻 (48 条) | 生成时间: 2026-08-10 01:14 UTC

---

# 具身智能开源动态日报
**日期：2025 年** · 涵盖 IEEE Spectrum、The Robot Report、ROS Discourse、ArXiv cs.RO、GitHub Trending

---

## 一、今日速览

今日具身智能生态呈现三条主线：**产业侧**继续向人形机器人和工业制造场景深耕——Walden Robotics 与丰田达成实用化人形机器人合作，Avatar Robotics 拿下 650 万美元种子轮聚焦工业劳动力短缺；**研究侧** ArXiv cs.RO 今日暂无新论文收录；**开源侧** 围绕"VLA 工程化平台"、"具身智能操作系统"和"GPU 加速仿真"形成密集涌现——腾讯混元、TensorAuto、FluxVLA 等集中推出面向真实机器人的 VLA 训练/部署栈，同时 PhyAgentOS、robonix、rosclaw 三套"机器人操作系统"概念新项目同日活跃，体现出"OS for Robots"正在成为新的开源竞争焦点。

---

## 二、行业脉搏

- **[Walden Robotics 联手丰田打造实用化人形机器人](https://spectrum.ieee.org/humanoid-robots-walden-robotics-toyota)** — IEEE Spectrum 报道 Walden 与丰田在人形机器人方向达成合作，目标从演示级（demo-grade）转向工厂级（practical）落地。意义：丰田的工业场景 + Walden 的运动控制能力，标志着人形机器人从炫技展示进入"真实工况可用性"竞赛阶段。

- **[Tacta Systems 推出 TactaBot 瞄准高技能制造任务](https://www.therobotreport.com/tacta-systems-takes-aim-high-skilled-manufacturing-work-tactabot/)** — 不同于传统工业机器人的点位示教，TactaBot 切入"高技能制造"（如柔性装配、精密操作）这一过去难以自动化的环节，反映了具身智能在工业上的真实价值洼地。

- **[Avatar Robotics 完成 650 万美元种子轮缓解工业劳动力约束](https://www.therobotreport.com/avatar-robotics-raises-6-5-m-seed-round-address-industrial-labor-constraints/)** — 资本持续押注"机器人替代工业劳动力缺口"叙事，验证该赛道估值逻辑。

- **[美国"受关注清单"对外资移动机器人的影响引发行业讨论](https://spectrum.ieee.org/fcc-covered-list-mobile-ots)** — FCC Covered List 扩展至移动机器人领域，意味着中国背景厂商在美部署 AGV/AMR 将面临监管壁垒，地缘政治正在重塑全球机器人供应链。

- **[Analog Devices 再度战略赞助 MassRobotics 创业加速器](https://www.therobotreport.com/analog-devices-returns-strategic-sponsor-aid-massrobotics-startups/)** — 芯片巨头持续以"基础设施赞助"方式押注早期机器人初创，反映传感器/模拟前端是下一代具身硬件的关键差异化点。

---

## 三、研究前沿

> **注**：今日 ArXiv cs.RO 分类下无新增论文收录（采集窗口内），故本节以**学术资源型开源项目**作为研究前沿的代理指标。

- **[StanfordVL/BEHAVIOR-1K ⭐1,624](https://github.com/StanfordVL/BEHAVIOR-1K)** — 1K 种日常任务的具身智能仿真基准，是当前家庭服务机器人最权威的大规模评测平台。
- **[Tencent-Hunyuan/Hy-Embodied-0.5-VLA ⭐262](https://github.com/Tencent-Hunyuan/Hy-Embodied-0.5-VLA)** — 腾讯混元将 VLA 模型扩展为完整的真实机器人学习栈（采集→训练→部署），是国内大厂少有的全栈开源。
- **[zju3dv/INTACT-JEPA ⭐135](https://github.com/zju3dv/INTACT-JEPA)** — "同构意图到动作"的世界模型，将 JEPA 表征引入机器人策略学习，绕开显式搜索。
- **[NJU-RLC/quadrupedal-agility ⭐122](https://github.com/NJU-RLC/quadrupedal-agility)** — 用自然行为多样性提升四足机器人敏捷性，是腿足 RL 的代表性工作。
- **[OpenDriveLab/RoboNaldo ⭐38](https://github.com/OpenDriveLab/RoboNaldo)** — 人形机器人足球射门任务，验证端到端策略在动态对抗场景中的稳定性。

---

## 四、重点项目

### 🦾 机器人学习与控制（模仿学习 / 强化学习 / 策略学习）

- **[RLinf/RLinf ⭐4,493](https://github.com/RLinf/RLinf)** — 面向具身与 Agentic AI 的强化学习基础设施，定位 RL "操作系统"，对需要大规模 RL 训练的研究团队意义重大。
- **[dora-rs/dora ⭐3,868](https://github.com/dora-rs/dora)** — Rust 编写的机器人 AI 数据流中间件，提供低延迟、可组合的分布式管道，是 ROS 之外的新一代候选。
- **[mani-skill/ManiSkill ⭐3,211](https://github.com/mani-skill/ManiSkill)** — GPU 并行化的机器人操作基准，是 SAPIEN 系操作仿真的事实标准之一。
- **[RobotControlStack/robot-control-stack ⭐131](https://github.com/RobotControlStack/robot-control-stack)** — 抛弃 ROS 的 Sim2Real 轻量框架，原生支持 MuJoCo + Gymnasium + 多种真实机械臂（Franka/UR5e/xArm/SO101），降低 VLA 研究门槛。
- **[enactic/openarm ⭐2,827](https://github.com/enactic/openarm)** — 完全开源的人形机械臂，专为接触丰富的物理 AI 研究设计。
- **[emNavi/AirGym ⭐169](https://github.com/emNavi/AirGym)** — 基于 IsaacGym 的高性能无人机深度强化学习平台。
- **[ROBOTIS-GIT/cyclo_lab ⭐138](https://github.com/ROBOTIS-GIT/cyclo_lab)** — ROBOTIS 机器人 RL + IL 教程，并支持 Sim2Real 部署。

### 🤖 仿真与框架（MuJoCo / Isaac / Gazebo / ROS）

- **[isaac-sim/IsaacLab ⭐7,865](https://github.com/isaac-sim/IsaacLab)** — NVIDIA Isaac Sim 之上的统一机器人学习框架，是 GPU RL 训练的工业标准。
- **[google-deepmind/mujoco ⭐14,496](https://github.com/google-deepmind/mujoco)** — MuJoCo 物理仿真器，机器人研究的事实标准引擎。
- **[mujocolab/mjlab ⭐2,778](https://github.com/mujocolab/mjlab)** — Isaac Lab API 风格 + MuJoCo-Warp 后端，定位为"Isaac Lab 的开源替代品"，意义在于降低 GPU RL 仿真对 NVIDIA 生态的依赖。
- **[newton-physics/newton ⭐5,304](https://github.com/newton-physics/newton)** — 基于 NVIDIA Warp 的开源 GPU 加速物理引擎，专为机器人研究者打造。
- **[carla-simulator/carla ⭐14,274](https://github.com/carla-simulator/carla)** — 自主驾驶研究事实标准开源仿真器。
- **[ros-navigation/navigation2 ⭐4,567](https://github.com/ros-navigation/navigation2)** — ROS 2 导航框架，机器人定位/路径规划的事实标准。
- **[copper-project/copper-rs ⭐1,444](https://github.com/copper-project/copper-rs)** — Rust 编写的机器人运行时，强调"确定性构建/运行/回放"，对生产级机器人软件极具吸引力。

### 🧠 VLA 与基础模型（视觉-语言-动作 / 具身基础模型）

- **[FluxVLA/FluxVLA ⭐598](https://github.com/FluxVLA/FluxVLA)** — VLA 一体化工程平台，覆盖"数据→训练→真机部署"全链路。
- **[Tencent-Hunyuan/Hy-Embodied-0.5-VLA ⭐262](https://github.com/Tencent-Hunyuan/Hy-Embodied-0.5-VLA)** — 腾讯混元 VLA 模型与真实机器人学习栈的端到端开源。
- **[TensorAuto/OpenTau ⭐196](https://github.com/TensorAuto/OpenTau)** — Tensor 推出的 VLA 训练基础设施，专注 PyTorch 中的真实机器人部署。
- **[ros-claw/rosclaw ⭐179](https://github.com/ros-claw/rosclaw)** — "自演化运行时"，把 AI Agent 落地为机器人动作（e-URDF、沙箱安全、技能演化），具身 Agent OS 方向代表。
- **[sou350121/VLA-Handbook ⭐486](https://github.com/sou350121/VLA-Handbook)** — 中文 VLA 实战手册，面向算法工程师求职/学习。
- **[dhkim-furiosa/daily-ai-robotics-papers ⭐24](https://github.com/dhkim-furiosa/daily-ai-robotics-papers)** — 每日 AI/机器人论文速报（VLA、World Model、Physical AI），节省文献追踪时间。
- **[dexmal/opendm ⭐224](https://github.com/dexmal/opendm)** — 面向通用具身智能的开世界基础模型。

### 🔧 硬件与驱动（驱动 / 硬件接口 / 嵌入式）

- **[PhyAgentOS-Dev/PhyAgentOS ⭐1,753](https://github.com/PhyAgentOS-Dev/PhyAgentOS)** — 基于 Agentic 工作流的自演化具身 AI 操作系统。
- **[syswonder/robonix ⭐315](https://github.com/syswonder/robonix)** — 具身 AI 操作系统（EAIOS），Rust 实现。
- **[JacopoPan/aerial-autonomy-stack ⭐559](https://github.com/JacopoPan/aerial-autonomy-stack)** — PX4/ArduPilot 无人机集群的感知仿真与部署框架（Jetson + ROS2 + YOLO + LiDAR）。
- **[manankharwar/fusioncore ⭐291](https://github.com/manankharwar/fusioncore)** — ROS 2 传感器融合 SDK，主打 UKF、3D 原生、零手动调参。
- **[Source-Robotics/PAR6-Collaborative-Robot-Arm ⭐33](https://github.com/Source-Robotics/PAR6-Collaborative-Robot-Arm)** — 开源协作机器人臂，聚焦教育、R&D 与 AI 应用。
- **[PetoiCamp/OpenCat-Quadruped-Robot ⭐5,075](https://github.com/PetoiCamp/OpenCat-Quadruped-Robot)** — 波士顿动力风格四足机器人开源框架，长期 STEM 教育与研究宠儿。

### 📊 数据集与基准（操作 / 导航 / 具身智能评测）

- **[RoboTwin-Platform/RoboTwin ⭐2,705](https://github.com/RoboTwin-Platform/RoboTwin)** — ICML 2026 双臂操作基准（RoboTwin 2.0），是双臂 VLA 研究必备基准。
- **[StanfordVL/BEHAVIOR-1K ⭐1,624](https://github.com/StanfordVL/BEHAVIOR-1K)** — 1K 种日常任务的大规模具身 AI 评测平台。
- **[zju3dv/habitat-gs ⭐268](https://github.com/zju3dv/habitat-gs)** — 基于 3D Gaussian Splatting 的高保真导航仿真器（ECCV 2026）。
- **[ray-yoh/Awesome-Robot-Learning ⭐206](https://github.com/RayYoh/Awesome-Robot-Learning)** — 机器人学习（操作方向）的精选资源汇总。
- **[NJU-RLC/quadrupedal-agility ⭐122](https://github.com/NJU-RLC/quadrupedal-agility)** — 四足机器人敏捷性基准与训练代码。
- **[AccelerationConsortium/Matterix ⭐52](https://github.com/AccelerationConsortium/Matterix)** — 机器人辅助化学实验室自动化的数字孪生。

---

## 五、生态趋势信号

今日 GitHub Trending 反映出三条清晰信号：**(1) VLA 进入"工程化竞速"阶段**——FluxVLA、TensorAuto/OpenTau、Tencent-Hunyuan 同步把"数据→训练→真机部署"全链路开源，竞赛焦点从模型本身转向工程基础设施；**(2) "机器人操作系统"成为新战场**——PhyAgentOS、syswonder/robonix、ros-claw、copper-rs、dora-rs 同日活跃，且清一色采用 Rust 或 Agentic 思路，意在打破 ROS 的"老旧包袱"；**(3) MuJoCo 阵营加速 NVIDIA 替代**——mjlab 用 MuJoCo-Warp 复刻 Isaac Lab API，OpenRCT2、newton-physics 等共同推动 GPU 物理仿真从 CUDA 锁定中走出来。叠加 Walden + 丰田的人形合作、以及 FCC 对外国机器人的监管收紧，可见**"硬件供应链脱钩 + 软件栈国产化"**正在成为中美具身生态并行的主线。

---

## 六、值得关注

1. **[Walden Robotics × 丰田](https://spectrum.ieee.org/humanoid-robots-walden-robotics-toyota)** — 这是少有的"老牌主机厂 × 新锐人形初创"的官方合作，意味着人形机器人 2026 年的竞争将从实验室炫技转入汽车工厂真实工况验证，对产业链上下游（减速器、力矩传感器、电池）的拉动效应值得跟踪。

2. **[Tencent-Hunyuan/Hy-Embodied-0.5-VLA](https://github.com/Tencent-Hunyuan/Hy-Embodied-0.5-VLA) 与 [FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA)** — 同一日两家中国团队开源 VLA 工程栈，标志着国内 VLA 已从"论文阶段"进入"工程基建阶段"，对希望快速落地 VLA 的中小团队极具价值，建议优先评估与社区适配性。

3. **[mujocolab/mjlab](https://github.com/mujocolab/mjlab)** — 用 MuJoCo-Warp 复刻 Isaac Lab API，是首次出现"开源可以平替 NVIDIA Isaac Lab"的可能性。若生态成熟，将大幅降低学术界对 NVIDIA GPU/许可的依赖，是一年来开源机器人最值得关注的基础设施级变化。

---

*日报由具身智能开源情报系统整理 · 数据源：IEEE Spectrum、The Robot Report、ROS Discourse、ArXiv cs.RO、GitHub Trending*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*