# 具身智能开源动态日报 2026-08-06

> 数据来源: GitHub Search API (128 仓库) | ArXiv cs.RO (30 篇论文) | RSS 新闻 (48 条) | 生成时间: 2026-08-06 01:58 UTC

---

# 具身智能开源动态日报
*2026 年 · 综合 IEEE Spectrum / The Robot Report / ArXiv cs.RO / GitHub*

---

## 一、今日速览

今日最具风向标意义的动态集中在三件事：**Google DeepMind 发布 Gemini Robotics 2**（VLA 基础模型持续迭代），**DeepMind 系物理仿真栈加速 GPU 化**（Newton 5.3k star、mjlab 2.8k star、dm_control 4.7k star 同步活跃），以及**人形机器人商业化首次由车企（Toyota）深度切入**。学术侧，ETA 提出"具身智能 Agentic 范式"，呼应开源生态中 PhyAgentOS、ros-claw、copper-rs 等"具身 OS"的密集涌现；边缘侧，8GB Jetson 上的零拷贝双手机器人策略与 PhyAI 的"边缘推理+云端 RL rollout"框架共同指向**低资源部署**这一工程化主战场。

---

## 二、行业脉搏

- **Walden Robotics 与 Toyota 合作打造实用化人形机器人** — [链接](https://spectrum.ieee.org/humanoid-robots-walden-robotics-toyota)
  主机厂介入意味着人形机器人从 demo 走向量产工艺与产线集成，对国内车厂 + 人形初创的合资模式具有参照意义。

- **Google DeepMind 发布 Gemini Robotics 2** — [链接](https://spectrum.ieee.org/video-robot-gemini2-ai-robot)
  VLA 模型持续迭代，强化基础模型在具身决策中的"操作系统级"位置，下游 Pi0 / OpenVLA / Hy-Embodied 等生态将进一步加速对齐。

- **Moove 融资 $250M 建设自动驾驶基础设施** — [链接](https://www.therobotreport.com/moove-raises-250m-to-build-infrastructure-for-autonomous-vehicles/)
  资金不再押注算法本身，而是押注 **AV 基础设施层**——这与机器人领域 RLinf、PhyAgentOS 等"基础设施层"开源项目井喷形成共振。

- **Avnet × Weston Robot 推出边缘 AI 巡检平台** — [链接](https://www.therobotreport.com/avnet-and-weston-robot-partner-to-launch-edge-ai-inspection-platform/)
  边缘 AI + 移动巡检的组合验证了"低算力 + 高价值场景"的产业落地路径，与 arXiv 上 8GB Jetson 双手机器人策略方向一致。

- **美国"外国机器人"禁令：行业意见分歧** — [链接](https://spectrum.ieee.org/fcc-covered-list-mobile-robots)
  FCC Covered List 扩展至移动机器人将影响跨境供应链与开源硬件采购，短期内对中国背景机器人厂商在美部署产生不确定性。

---

## 三、研究前沿

- **ETA: A New Agentic Paradigm for Embodied Tasks** — [arXiv:2608.03924](http://arxiv.org/abs/2608.03924v1)
  提出机器人"ChatGPT 时刻"的 agentic 范式，将任务分解、工具调用与物理执行统一建模，为通用机器人提供新的架构蓝图，与今日开源生态中的 PhyAgentOS、ros-claw 形成理论-工程对照。

- **Bimanual Manipulation Within an 8 GB Budget: Zero-Copy Sensing and Quantized ACT on an Entry-Level Jetson** — [arXiv:2608.03938](http://arxiv.org/abs/2608.03938v1)
  在入门级 Jetson 上跑通零拷贝传感 + 量化 ACT 双手机器人策略，验证 **<200 美元硬件**即可部署的家用机器人方案，对社区意义巨大。

- **LiLa-WAM: Lightweight Latent Reasoning World-Action Model for Robotic Manipulation** — [arXiv:2608.03701](http://arxiv.org/abs/2608.03701v1)
  在 World-Action Model 中引入轻量级潜在推理，平衡反应式控制与长程规划，是 World Models 在具身操作中的实用化样本。

- **GORDON: Graph-based Object-centric Rewards for Decomposition of Long-Horizon Manipulation** — [arXiv:2608.03753](http://arxiv.org/abs/2608.03753v1)
  以图结构对长程任务奖励进行对象级分解，缓解 RL 中稀疏奖励问题；与 RoboTwin 2.0、BEHAVIOR-1K 等长程基准互为支撑。

- **PhyAI: Real-Time Physical AI at the Edge, Scalable Rollouts in the Cloud** — [arXiv:2608.03682](http://arxiv.org/abs/2608.03682v1)
  提出"边缘实时推理 + 云端大规模 rollout"的物理 AI 全生命周期部署框架，是工业级 Physical AI 基础设施的早期范本。

---

## 四、重点项目

### 🦾 机器人学习与控制（模仿/强化/策略学习）

- **[RLinf/RLinf](https://github.com/RLinf/RLinf)** ⭐4,446 · Python
  面向具身与 Agentic AI 的强化学习基础设施；统一训练-部署流水线，是社区补齐"RL 中间件"缺口的关键项目。

- **[isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab)** ⭐7,843 · Python
  基于 NVIDIA Isaac Sim 的统一机器人学习框架，主流 sim-to-real 流水线的事实标准之一。

- **[mani-skill/ManiSkill](https://github.com/mani-skill/ManiSkill)** ⭐3,204 · Python
  GPU 并行的机器人操作基准与仿真器，兼顾并行训练与公平评测，对学术 benchmark 极具价值。

- **[RoboTwin-Platform/RoboTwin](https://github.com/RoboTwin-Platform/RoboTwin)** ⭐2,682 · Python
  ICML 2026 接收的双臂基准 RoboTwin 2.0 官方代码，是双手机器人学习的核心评测场。

- **[enactic/openarm](https://github.com/enactic/openarm)** ⭐2,814 · MDX
  完全开源的人形机械臂，专为接触丰富环境设计，弥合"硬件开源 vs 算法开源"鸿沟。

- **[RoboVerseOrg/RoboVerse](https://github.com/RoboVerseOrg/RoboVerse)** ⭐1,798 · Python
  统一平台 + 数据集 + 基准的可扩展机器人学习栈，对通用机器人策略迁移研究意义重大。

- **[dora-rs/dora](https://github.com/dora-rs/dora)** ⭐3,867 · Rust
  数据流驱动的机器人中间件，低延迟、可组合、分布式，是 ROS 之外的现代替代选项。

### 🤖 仿真与框架

- **[google-deepmind/mujoco](https://github.com/google-deepmind/mujoco)** ⭐14,460 · C++
  通用接触物理仿真器的事实标准，具身与 RL 研究的底座。

- **[newton-physics/newton](https://github.com/newton-physics/newton)** ⭐5,292 · Python
  基于 NVIDIA Warp 的 GPU 加速开源物理引擎，专为机器人研究者设计，与 mjlab 共同推动仿真 GPU 化。

- **[mujocolab/mjlab](https://github.com/mujocolab/mjlab)** ⭐2,767 · Python
  提供 Isaac Lab 风格 API、由 MuJoCo-Warp 驱动的 RL/机器人研究框架，对算力敏感研究者极具吸引力。

- **[google-deepmind/dm_control](https://github.com/google-deepmind/dm_control)** ⭐4,659 · Python
  DeepMind 基于 MuJoCo 的物理 RL 工具栈，连续控制任务的标准环境来源。

- **[gazebosim/gz-sim](https://github.com/gazebosim/gz-sim)** ⭐1,439 · C++
  最新一代 Gazebo 仿真器，ROS 2 生态默认物理仿真后端。

- **[gazebosim/gz-sim](https://github.com/gazebosim/gz-sim)** ⭐1,439 · C++  
  *(同上加注)* 同时关注 **[gazebosim/gz-sim](https://github.com/gazebosim/gz-sim)** 配合 **ros-controls/gz_ros2_control** ⭐254，可构建完整的 ROS 2 + Gazebo 闭环。

### 🧠 VLA 与基础模型

- **[FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA)** ⭐593 · Python
  "数据到真机部署"全链路 VLA 工程平台，降低 VLA 模型从训练到落地的工程门槛。

- **[allenai/vla-evaluation-harness](https://github.com/allenai/vla-evaluation-harness)** ⭐513 · Python
  统一框架评估任意 VLA 模型在任意仿真基准上的表现，是 VLA 走向成熟的"试金石"。

- **[Tencent-Hunyuan/Hy-Embodied-0.5-VLA](https://github.com/Tencent-Hunyuan/Hy-Embodied-0.5-VLA)** ⭐247 · Python
  腾讯混元从 VLA 模型到真实机器人学习栈的工程闭环代表，反映国内大厂的具身路线。

- **[TensorAuto/OpenTau](https://github.com/TensorAuto/OpenTau)** ⭐195 · Python
  Tensor 推出的 VLA 训练基础设施，专注真实机器人 PyTorch 流水线。

- **[ros-claw/rosclaw](https://github.com/ros-claw/rosclaw)** ⭐178 · Python
  面向 Physical AI 的自演化运行时基础设施，提供 e-URDF、沙箱安全、技能演化等"机器人 OS"能力。

### 🔧 硬件与驱动

- **[enactic/openarm](https://github.com/enactic/openarm)** ⭐2,814 · MDX *(见上)*  
  同时也是开源机械臂硬件的代表项目，覆盖硬件 + 控制 + 仿真。

- **[PhyAgentOS-Dev/PhyAgentOS](https://github.com/PhyAgentOS-Dev/PhyAgentOS)** ⭐1,609 · Python
  基于 Agentic 工作流的自演化具身 AI 操作系统，定位为"机器人的 OS 层"。

- **[syswonder/robonix](https://github.com/syswonder/robonix)** ⭐299 · Rust
  具身 AI 操作系统（EAIOS），使用 Rust 保障实时性与可靠性，定位下一代机器人基础软件。

### 📊 数据集与基准

- **[StanfordVL/BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K)** ⭐1,618 · Python
  加速具身 AI 研究的标准平台，覆盖 1k 日常活动，长期作为通用机器人的"试炼场"。

- **[RoboVerseOrg/RoboVerse](https://github.com/RoboVerseOrg/RoboVerse)** ⭐1,798 · Python *(见上)*
  兼具平台 + 数据集 + 基准三重属性。

- **[Farama-Foundation/Metaworld](https://github.com/Farama-Foundation/Metaworld)** ⭐1,865 · Python
  多任务/元 RL 经典基准，仍是 ML 论文的常用评测场。

- **[Farama-Foundation/Gymnasium-Robotics](https://github.com/Farama-Foundation/Gymnasium-Robotics)** ⭐950 · Python
  Gymnasium 旗下的机器人环境集合，标准化 RL 接口的事实基础。

---

## 五、生态趋势信号

行业新闻中 **Walden×Toyota 推动人形机器人主机厂化**、**Moove 重金投入 AV 基础设施**、**Avnet×Weston

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*