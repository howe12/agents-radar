# 具身智能开源动态日报 2026-08-05

> 数据来源: GitHub Search API (127 仓库) | ArXiv cs.RO (30 篇论文) | RSS 新闻 (48 条) | 生成时间: 2026-08-05 01:55 UTC

---

# 具身智能开源动态日报

**日期**：2026 年 · 第 27 期
**出品**：具身智能开源情报站
**信源**：IEEE Spectrum · The Robot Report · ArXiv cs.RO · GitHub Trending

---

## 一、今日速览

今日动态呈现"三线并进"格局：商业层面，Google DeepMind 发布 Gemini Robotics 2、Zoox 推出量产版 Robotaxi、Walden Robotics 联手丰田推进实用化人形机器人，行业竞速明显加快；研究层面，VLA 与 World Model 的融合走向工程化（Track4Action、LiLa-WAM），同时出现针对 VLA 训练目标本身的重思（Unified Visuomotor Targets）；开源生态层面，VLA 工程栈、机器人 OS（MCP / Dora / Copper）、RL 基础设施与仿真器（Newton、mjlab、Isaac Lab）同步活跃，"具身智能操作系统"概念正在多个仓库中并行落地。

---

## 二、行业脉搏

1. **Gemini Robotics 2 登场** — Google DeepMind 发布新一代机器人基础模型，VLA 路线的旗舰再次升级，进一步拉高通用机器人策略的天花板。 [链接](https://spectrum.ieee.org/video-robot-gemini2-ai-robot)

2. **Zoox 量产 Robotaxi** — Zoox 公布可量产 Robotaxi 并启动美国扩张，自动驾驶商业化从试点走向规模部署阶段。 [链接](https://www.therobotreport.com/zoox-unveils-production-ready-robotaxi-for-u-s-expansion/)

3. **Walden Robotics × Toyota 实用化人形机器人** — 头部车企与新兴人形机器人公司结盟，目标是把人形机器人从 Demo 推向可被工厂接受的"实用形态"。 [链接](https://spectrum.ieee.org/humanoid-robots-walden-robotics-toyota)

4. **人形机器人量产卡在成本** — The Robot Report 明确指出工厂规模化部署的关键瓶颈是 BOM 成本，而非能力本身。 [链接](https://www.therobotreport.com/humanoids-wont-scale-on-factory-floors-until-costs-drop/)

5. **U.S. Navy 选定 Blue Water Autonomy** — 无人艇进入深海勘测的真实采购流程，海军成为自主系统的早期重磅客户。 [链接](https://www.therobotreport.com/u-s-navy-picks-blue-water-autonomy-to-use-autonomous-vessels-for-deep-ocean-surveys/)

6. **HEBI Robotics 获 NASA SBIR** — 微型化执行器获 NASA 资助，模块化执行器路线获官方背书。 [链接](https://www.therobotreport.com/hebi-robotics-earns-nasa-sbir-grant-fast-track-miniaturized-actuators/)

7. **igus 600° 旋转拖链** — 工业机器人末端线缆管理的小突破，对高自由度机械臂与协作机器人意义直接。 [链接](https://www.therobotreport.com/igus-launches-energy-chain-600-degree-rotation-industrial-robots/)

8. **美国"外籍机器人"禁令讨论** — FCC Covered List 可能外溢至移动机器人领域，供应链与开源硬件的合规成本上升。 [链接](https://spectrum.ieee.org/fcc-covered-list-mobile-robots)

---

## 三、研究前沿

1. **GORDON：基于图的对象中心奖励分解长程操作**
   长程操作 RL 的最大痛点是奖励稀疏；GORDON 用场景图提供对象级稠密奖励，是把"结构化表征 → RL"路线落地的代表。 [arXiv](http://arxiv.org/abs/2608.03753v1)

2. **Track4Action：把世界中心 3D Tracker 蒸馏进 VLA**
   VLA 只学动作标签，丢失了"动作如何改变世界"的信息；该工作把 3D 跟踪器作为额外监督，让策略具备更稳定的空间动态建模能力。 [arXiv](http://arxiv.org/abs/2608.03727v1)

3. **LiLa-WAM：轻量化潜在推理世界-动作模型**
   把 World Model 与 Action Model 统一到同一个潜在空间推理框架，主打"轻量"与"可推理"，是具身基础模型从大而全走向可部署的典型。 [arXiv](http://arxiv.org/abs/2608.03701v1)

4. **Unified Visuomotor Targets：让 VLA 不止监督动作**
   跳出"只预测关节/末端动作"的范式，提出更广义的可视化运动目标，挑战了当前主流 VLA 的训练目标选择，影响后续基础模型设计。 [arXiv](http://arxiv.org/abs/2608.03563v1)

5. **PhyAI：边缘实时推理 + 云端规模化 Rollout**
   把 Physical AI 的"训练-评估-部署"完整生命周期拆成边缘 + 云架构，回应了具身智能最现实的工程瓶颈——仿真-部署一致性。 [arXiv](http://arxiv.org/abs/2608.03682v1)

6. **Principles of Robot Autonomy（教科书定位工作）**
   系统梳理自主机器人从理论到部署的知识体系，是教学与工程参考意义大于单一方法的"基础设施型"论文。 [arXiv](http://arxiv.org/abs/2608.03496v1)

---

## 四、重点项目

### 🦾 机器人学习与控制
- **isaac-sim/IsaacLab** ⭐7,834 · Python · [GitHub](https://github.com/isaac-sim/IsaacLab)
  NVIDIA 推出的统一机器人学习框架，基于 Isaac Sim，是目前最主流的 GPU 并行机器人 RL / 模仿学习底座。

- **mani-skill/ManiSkill** ⭐3,201 · Python · [GitHub](https://github.com/mani-skill/ManiSkill)
  GPU 并行的操作技能基准与仿真器，操作研究的事实标准之一，覆盖 SAPIEN 等生态。

- **RLinf/RLinf** ⭐4,424 · Python · [GitHub](https://github.com/RLinf/RLinf)
  面向具身与 Agentic AI 的强化学习基础设施，体现"RL 基建化"趋势。

- **OpenPipe/ART** ⭐10,559 · Python · [GitHub](https://github.com/OpenPipe/ART)
  GRPO 多步 Agent 训练框架，将 Web/Agent RL 思路外溢到具身策略训练的潜力项目。

- **NJU-RLC/quadrupedal-agility** ⭐123 · Python · [GitHub](https://github.com/NJU-RLC/quadrupedal-agility)
  四足机器人"自然行为多样性 + 敏捷性"官方实现，腿足 RL 的高质量参考实现。

- **RobotControlStack/robot-control-stack** ⭐127 · Python · [GitHub](https://github.com/RobotControlStack/robot-control-stack)
  ROS-free 的 Sim2Real 框架，VLA / RL 一站式部署到 Franka、UR5e、xArm、SO101，是工程化导向的轻量栈。

### 🤖 仿真与框架
- **google-deepmind/mujoco** ⭐14,442 · C++ · [GitHub](https://github.com/google-deepmind/mujoco)
  物理仿真事实标准，DeepMind 维护，刚体接触动力学与连续控制研究首选。

- **newton-physics/newton** ⭐5,286 · Python · [GitHub](https://github.com/newton-physics/newton)
  基于 NVIDIA Warp 的 GPU 加速物理引擎，面向机器人与仿真研究，是新一代仿真底座候选。

- **mujocolab/mjlab** ⭐2,762 · Python · [GitHub](https://github.com/mujocolab/mjlab)
  Isaac Lab API × MuJoCo-Warp，等于把两条主流栈打通，趋势信号很强。

- **google-deepmind/dm_control** ⭐4,658 · Python · [GitHub](https://github.com/google-deepmind/dm_control)
  DeepMind 官方基于 MuJoCo 的 RL 仿真栈，continous control 基准标准实现。

- **cyberbotics/webots** ⭐4,529 · C++ · [GitHub](https://github.com/cyberbotics/webots)
  开源机器人仿真器老牌项目，教育与多机器人场景的主力选择。

- **gazebosim/gz-sim** ⭐1,437 · C++ · [GitHub](https://github.com/gazebosim/gz-sim)
  Gazebo 新一代仿真器，ROS 生态核心组件。

- **carla-simulator/carla** ⭐14,248 · C++ · [GitHub](https://github.com/carla-simulator/carla)
  自动驾驶研究事实标准仿真器，与 VLA / World Model 趋势相互强化。

- **dora-rs/dora** ⭐3,865 · Rust · [GitHub](https://github.com/dora-rs/dora)
  数据流导向的机器人中间件，低延迟、可组合，是 ROS 之外最具影响力的"机器人 OS 候选"。

- **ros-navigation/navigation2** ⭐4,551 · C++ · [GitHub](https://github.com/ros-navigation/navigation2)
  ROS 2 导航标准框架，移动机器人底盘必备。

- **robotmcp/ros-mcp-server** ⭐1,377 · Python · [GitHub](https://github.com/robotmcp/ros-mcp-server)
  把 MCP 协议接入 ROS，让 LLM / Agent 直接操控机器人，是"LLM × Robotics"接口层的关键工程。

### 🧠 VLA 与基础模型
- **FluxVLA/FluxVLA** ⭐591 · Python · [GitHub](https://github.com/FluxVLA/FluxVLA)
  一体化 VLA 工程平台，覆盖数据到真实机器人部署，对中小团队具备"开箱即用"价值。

- **Tencent-Hunyuan/Hy-Embodied-0.5-VLA** ⭐244 · Python · [GitHub](https://github.com/Tencent-Hunyuan/Hy-Embodied-0.5-VLA)
  混元推出的 VLA + 真实机器人学习栈，是国内厂商对标 π₀ / OpenVLA 的代表。

- **TensorAuto/OpenTau** ⭐194 · Python · [GitHub](https://github.com/TensorAuto/OpenTau)
  PyTorch 实现的 VLA 训练基础设施，关注真实世界机器人部署，工程导向明显。

- **allenai/vla-evaluation-harness** ⭐507 · Python · [GitHub](https://github.com/allenai/vla-evaluation-harness)
  跨模型 / 跨仿真基准的 VLA 统一评测框架，对"评估碎片化"问题直接回应。

- **lucidrains/mimic-video** ⭐120 · Python · [GitHub](https://github.com/lucidrains/mimic-video)
  Mimic-Video 实现，把 Video-Action Model 推到 SOTA，是 VLA 之后的下一代基础模型方向。

- **leofan90/Awesome-World-Models** ⭐1,944 · Python · [GitHub](https://github.com/leofan90/Awesome-World-Models)
  World Model 论文 / 代码综合索引，覆盖视频生成、具身与自动驾驶，是跟踪 World Model 趋势的高质量入口。

- **sou350121/VLA-Handbook** ⭐469 · HTML · [GitHub](https://github.com/sou350121/VLA-Handbook)
  中文 VLA 算法工程师手册，反映国内社区对 VLA 知识体系系统化的迫切需求。

### 🔧 硬件与驱动
- **ArduPilot/ardupilot** ⭐15,614 · C++ · [GitHub](https://github.com/ArduPilot/ardupilot)
  全球最大无人机自驾仪开源项目，覆盖固定翼、多旋翼、车、潜艇。

- **PX4/PX4-Autopilot** ⭐12,335 · C++ · [GitHub](https://github.com/PX4/PX4-Autopilot)
  学术界与工业界主流飞控系统，与 ROS 2 紧密集成。

- **mavlink/mavros** ⭐1,206 · C++ · [GitHub](https://github.com/mavlink/mavros)
  MAVLink ↔ ROS 网关，无人机生态的关键粘合层。

- **Source-Robotics/PAR6-Collaborative-Robot-Arm** ⭐32 · G-code · [GitHub](https://github.com/Source-Robotics/PAR6-Collaborative-Robot-Arm)
  面向教育与研发的开放协作机械臂硬件 + 控制栈，对降低研究门槛意义直接。

- **robonet-ai/handumi-sw** ⭐44 · Python · [GitHub](https://github.com/robonet-ai/handumi-sw)
  HandUMI 同步双手数据采集与重定向开源软件，UMI 生态关键软件。

### 📊 数据集与基准
- **RoboVerseOrg/RoboVerse** ⭐1,798 · Python · [GitHub](https://github.com/RoboVerseOrg/RoboVerse)
  面向规模化、可泛化机器人学习的统一平台 + 数据集 + 基准。

- **StanfordVL/BEHAVIOR-1K** ⭐1,615 · Python · [GitHub](https://github.com/

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*