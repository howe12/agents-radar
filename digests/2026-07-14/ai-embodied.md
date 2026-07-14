# 具身智能开源动态日报 2026-07-14

> 数据来源: GitHub Search API (131 仓库) | ArXiv cs.RO (18 篇论文) | RSS 新闻 (34 条) | 生成时间: 2026-07-14 01:54 UTC

---

# 🤖 具身智能开源动态日报

> 覆盖：IEEE Spectrum、The Robot Report、ROS Discourse、ArXiv cs.RO、GitHub 趋势仓库

---

## 1. 今日速览

今日三条主线值得重点关注：**其一，国防机器人赛道加速整合** —— Ondas 以 8.76 亿美元收购无人机企业 DZYNE，与乌克兰地面机器人进入实战"杀伤区"形成共振，标志具身智能在防务领域进入资本+战场双轮验证期。**其二，类人机器人能力边界再次外推**，基于对抗运动先验的人形机器人轮滑研究让全协调+滚动接触+速度跟踪成为可学习任务。**三，VLA 与 GPU 物理仿真基础设施继续分层细化** —— 评测、训练、部署、加速等"工程化"仓库集中涌现，AllenAI VLA Evaluation Harness、PKU DYSL-VLA 动态跳层、Newton / MuJoCo-Warp / mjlab 三套 GPU 物理栈同台竞技，社区正从"模型能否跑通"转向"工程化交付"。

---

## 2. 行业脉搏

- **Ondas 8.758 亿美元收购 DZYNE** — Ondas 旗下已拥有 American Robotics 与 Ardenna，本次整合 DZYNE（专注无人系统设计）显著扩展其在防务无人系统上的能力组合，具身平台厂商正通过并购构建"感知+平台+决策"全栈。🔗 [链接](https://www.therobotreport.com/ondas-acquires-dzyne-875-8m-expanding-its-defense-capabilities/)
- **乌克兰地面机器人进入"杀伤区"** — IEEE Spectrum 报道，乌军已规模化部署无人地面车辆执行侦察、弹药投送与自杀式攻击，地面具身平台首次被纳入主流战争叙事。🔗 [链接](https://spectrum.ieee.org/ukraine-ground-drones)
- **新机器人安全标准对供应商的挑战** — 新版 ISO/ANSI 安全规范对人机协作、力限制、风险评估提出更严要求，对中小型集成商意味着合规成本上升。🔗 [链接](https://www.therobotreport.com/are-suppliers-ready-for-new-robot-safety-standards/)
- **IEEE 表彰机器人先驱 Toshio Fukuda** — Fukuda 教授在微纳机器人、生物细胞操作领域贡献卓著，其工作折射具身智能向微观尺度延展的可能性。🔗 [链接](https://spectrum.ieee.org/ieee-honors-toshio-fukuda)
- **The Robot Report 母公司 WTWH Media 品牌升级为 Arrowfly** — 媒体层整合，机器人垂直内容生态进入新阶段。🔗 [链接](https://www.therobotreport.com/the-robot-report-parent-company-wtwh-media-rebrands-as-arrowfly/)

---

## 3. 研究前沿

- **Learning Roller-Skating Motions of Humanoid Robots Based on Adversarial Motion Priors**（[arXiv 2607.10815](http://arxiv.org/abs/2607.10815v1)）
  让类人机器人学会轮滑：必须同时协调全身平衡、滚动接触与速度跟踪。AMP 把人类轮滑先验蒸馏到策略，使"动态不稳定接触+长程速度"这一传统控制难题成为可学习问题，对双足/类人动态运动具里程碑意义。

- **A Single Diffusion-Policy Controller for Multi-Task Block Pushing with Zero-Shot Sim-to-Real Transfer**（[arXiv 2607.10892](http://arxiv.org/abs/2607.10892v1)）
  单一扩散策略控制器即可处理多任务块推送并实现零样本 Sim2Real。扩散策略在多模态动作分布上的优势被进一步验证，简化了多任务部署链路。

- **D-SafeMPC: Diffusion-Driven Safe Model Predictive Control with Discrete-Time Control Barrier Functions**（[arXiv 2607.10842](http://arxiv.org/abs/2607.10842v1)）
  把控制屏障函数（CBF）显式嵌入扩散模型驱动的 MPC，弥补了扩散规划"难以硬约束"的根本短板。安全 + 生成式规划，是扩散模型走向真实世界部署的关键补丁。

- **Action Map Policy: Learning 3D Closed-loop Manipulation via Pixel Classification**（[arXiv 2607.10706](http://arxiv.org/abs/2607.10706v1)）
  把动作空间从连续高维回归重定义为"像素分类"，再借助现代视觉基础模型完成 3D 闭环操作。降低策略学习维度并复用视觉预训练红利，对低算力平台尤为友好。

- **TOLiD: Bridging the Architecture Gap in Vision Foundation Model to LiDAR Pretraining via Token Lifting for Distillation**（[arXiv 2607.10762](http://arxiv.org/abs/2607.10762v1)）
  通过 Token Lifting 把 VFM 的语义能力蒸馏到 LiDAR 主干，跨模态自监督预训练新范式，提升室外 3D 感知的数据效率。

---

## 4. 重点项目

### 🦾 机器人学习与控制

- **[ARISE-Initiative/robosuite](https://github.com/ARISE-Initiative/robosuite)** ⭐2,511
  模块化机器人学习仿真框架与基准，长期作为模仿/RL 操作研究的事实标准之一。

- **[OpenPipe/ART](https://github.com/OpenPipe/ART)** ⭐10,469
  Agent Reinforcement Trainer，基于 GRPO 的多步智能体训练框架，让 Qwen3.6 / Llama 等开源模型获得"在职训练"能力。

- **[rllm-org/rllm](https://github.com/rllm-org/rllm)** ⭐5,692
  "Democratizing RL for LLMs"，把面向智能体的强化学习门槛大幅降低。

- **[OpenRLHF/OpenRLHF](https://github.com/OpenRLHF/OpenRLHF)** ⭐9,785
  基于 Ray 的高吞吐 Agentic RL 框架（PPO/DAPO/REINFORCE++/VLM），是 RLHF 工程化的代表性仓库。

- **[FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA)** ⭐528
  端到端 VLA 工程平台，覆盖"数据→训练→真机部署"全链路，体现 VLA 工具链分工细化的趋势。

### 🤖 仿真与框架

- **[google-deepmind/mujoco](https://github.com/google-deepmind/mujoco)** ⭐14,194
  接触动力学物理仿真事实标准，机器人研究基础设施底座。

- **[isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab)** ⭐7,668
  NVIDIA Isaac Sim 之上的统一机器人学习框架，主流 GPU 大规模 RL/IL 训练平台。

- **[newton-physics/newton](https://github.com/newton-physics/newton)** ⭐5,190
  基于 NVIDIA Warp 的开源 GPU 加速物理引擎，专为机器人学家与仿真研究设计。

- **[mujocolab/mjlab](https://github.com/mujocolab/mjlab)** ⭐2,672
  Isaac Lab 风格 API + MuJoCo-Warp 后端，把"易用上层 + GPU 后端"组合推向社区。

- **[ros-navigation/navigation2](https://github.com/ros-navigation/navigation2)** ⭐4,459
  ROS 2 官方导航框架，移动机器人产线最常用方案。

- **[gazebosim/gz-sim](https://github.com/gazebosim/gz-sim)** ⭐1,411
  Gazebo 最新版本，机器人仿真生态核心。

- **[carla-simulator/carla](https://github.com/carla-simulator/carla)** ⭐14,167
  自动驾驶研究开源仿真器，城市级场景与传感器建模标杆。

### 🧠 VLA 与基础模型

- **[allenai/vla-evaluation-harness](https://github.com/allenai/vla-evaluation-harness)** ⭐439
  首个通用 VLA 模型 × 任意机器人仿真基准的统一评测框架，可能成为 VLA 领域的"LM Evaluation Harness"。

- **[PKU-SEC-Lab/DYSL_VLA](https://github.com/PKU-SEC-Lab/DYSL_VLA)** ⭐25
  动态-静态层跳跃把 VLA 推理加速 3.75×、训练开销降低 85.7×，破解 VLA 实时性瓶颈。

- **[ucla-mobility/TIC-VLA](https://github.com/ucla-mobility/TIC-VLA)** ⭐130
  ICML 2026 Think-in-Control VLA，把"显式思考"引入导航决策。

- **[InternRobotics/VLAC](https://github.com/InternRobotics

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*