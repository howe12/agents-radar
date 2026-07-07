# 具身智能开源动态日报 2026-07-07

> 数据来源: GitHub Search API (robotics, ROS, embodied-AI 等话题) | 共 131 个仓库 | 生成时间: 2026-07-07 10:14 UTC

---

好的，这是为您生成的《具身智能开源动态日报》。

---

### **具身智能开源动态日报** | 2024年5月23日

#### **1. 今日速览**

今日机器人开源生态中，**强化学习与数据基础设施**成为两大焦点。`RLinf` 和 `dora-rs` 分别从RL训练框架和中间件层面，为具身智能研究提供了关键的基础设施。在数据集方面，`BEHAVIOR-1K` 和 `InternScenes` 代表了从通用任务到大规模交互场景的演进趋势。此外，VLA（Vision-Language-Action）领域依旧火热，`FluxVLA` 和 `InternVLA-A-series` 标志着技术栈正在向工程化、平台化方向整合，而 `VLA-Handbook` 的出现则反映出社区对实战经验分享的迫切需求。

#### **2. 重点项目**

##### 🦾 机器人学习与控制

- **[RLinf/RLinf](https://github.com/RLinf/RLinf)** ⭐4,029
  - **一句话说明**：专为具身智能和Agentic AI设计的强化学习基础设施，旨在提供高性能、易扩展的RL训练平台。
- **[dora-rs/dora](https://github.com/dora-rs/dora)** ⭐3,833
  - **一句话说明**：基于数据流的机器人中间件，以其低延迟、可组合和分布式特性，简化了AI驱动机器人应用的构建，是连接感知与控制的“神经中枢”。
- **[datawhalechina/every-embodied](https://github.com/datawhalechina/every-embodied)** ⭐2,557
  - **一句话说明**：一本从零构建具身智能机器人的“实战手册”，系统地引导学习者从基础实现VLA模型，对教育和普及意义重大。
- **[sou350121/VLA-Handbook](https://github.com/sou350121/VLA-Handbook)** ⭐358
  - **一句话说明**：面向算法工程师的全中文VLA学习/面试手册，聚焦机器人领域的独特挑战，是VLA领域求职和入门的宝贵资源。
- **[NJU-RLC/quadrupedal-agility](https://github.com/NJU-RLC/quadrupedal-agility)** ⭐119
  - **一句话说明**：学习多样化自然行为来增强四足机器人敏捷性的研究，代表了从单一技能到多模态技能迁移的学习范式。

##### 🤖 仿真与框架

- **[google-deepmind/mujoco](https://github.com/google-deepmind/mujoco)** ⭐14,108
  - **一句话说明**：物理仿真领域的标杆，为机器人研究、强化学习和生物力学提供了高效、精准的仿真环境。
- **[isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab)** ⭐7,625
  - **一句话说明**：基于NVIDIA Isaac Sim的统一机器人学习框架，为策略训练、域随机化等提供了强大的工业级工具链。
- **[newton-physics/newton](https://github.com/newton-physics/newton)** ⭐5,171
  - **一句话说明**：基于NVIDIA Warp的GPU加速物理引擎，为需要大规模并行计算的机器人学和仿真研究提供了新的选择。
- **[cyberbotics/webots](https://github.com/cyberbotics/webots)** ⭐4,445
  - **一句话说明**：一款成熟的开源机器人仿真器，支持多种机器人平台，是教学和快速原型开发的理想选择。
- **[carla-simulator/carla](https://github.com/carla-simulator/carla)** ⭐14,144
  - **一句话说明**：专门为自动驾驶研究设计的开源仿真器，提供了丰富的传感器、场景和评估指标，是自动驾驶研究的基石。
- **[autowarefoundation/autoware](https://github.com/autowarefoundation/autoware)** ⭐11,809
  - **一句话说明**：全球领先的自动驾驶开源软件项目，提供了从感知到规划、控制的完整技术栈，是学术界和工业界的重要参考。

##### 🧠 VLA 与基础模型

- **[FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA)** ⭐512
  - **一句话说明**：一个“一站式”VLA工程平台，覆盖从数据处理到真实机器人部署的全流程，标志着VLA技术正从研究走向工程化。
- **[InternRobotics/InternVLA-A-series](https://github.com/InternRobotics/InternVLA-A-series)** ⭐457
  - **一句话说明**：致力于统一理解、生成和行动的VLA模型，代表了下一代具身基础模型的探索方向。
- **[allenai/vla-evaluation-harness](https://github.com/allenai/vla-evaluation-harness)** ⭐423
  - **一句话说明**：一个通用的VLA模型评估框架，旨在解决不同模型间性能对比困难的问题，对推动VLA标准化发展至关重要。

##### 🔧 硬件与驱动

- **(本期无突出面向开源的硬件项目，但 `enactic/openarm` ⭐2,697 值得关注，其本身就是为AI研究设计的开源人形手臂。)**

##### 📊 数据集与基准

- **[StanfordVL/BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K)** ⭐1,555
  - **一句话说明**：为加速具身AI研究而设计的平台，包含1000个日常任务，为大规模通用技能学习提供了丰富的基准。
- **[InternRobotics/InternScenes](https://github.com/InternRobotics/InternScenes)** ⭐254
  - **一句话说明**：一个大规模、可交互的室内场景数据集，具有逼真的布局，为导航、物体检索等任务提供了更真实的训练环境。
- **[realsee-developer/RealSee3D](https://github.com/realsee-developer/RealSee3D)** ⭐276
  - **一句话说明**：融合真实采集与程序化生成的多视图RGB-D数据集，为3D视觉和具身导航研究提供了更丰富的视角。

#### **3. 生态趋势信号**

今日动态清晰揭示了几个关键趋势：**第一**，基础设施层（如 `RLinf`、`dora-rs`）受到社区追捧，表明具身智能研究正在从“拼模型”转向“拼系统”，更高效的数据流和训练加速成为下一个瓶颈。**第二**，“开源数据”和“可复现基准”的重要性日益凸显，`BEHAVIOR-1K` 和 `InternScenes` 等大规模、高质量的数据集正在成为推动通用策略发展的新引擎。**第三**，VLA领域呈现出明显的“两极分化”：一方面顶尖团队致力于探索统一模型（如 `InternVLA-A-series`），另一方面社区开始注重工程化、平台化解决方案（如 `FluxVLA`）和知识沉淀（如 `VLA-Handbook`），标志着该领域正在走向成熟。

#### **4. 值得关注**

- **`RLinf/RLinf`**：该项目精准地切中了具身智能研究中对高性能训练基础设施的强烈需求。其star数的快速攀升反映了社区对更高效RL训练工具的渴望，有望成为下一个“具身智能领域的PyTorch Lightning”。**持续关注其架构设计和与主流仿真器（Isaac Lab, MuJoCo）的集成情况。**

- **`dora-rs/dora`**：作为中间件，它解决了机器人系统中数据流编排和异构组件通信的痛点。其低延迟、分布式的特性使其非常适合构建复杂的、多模态的AI机器人应用。**重点关注其是否能够成为ROS 2之外的另一套主流选择，特别是在高性能AI机器人场景下的表现。**

- **`FluxVLA/FluxVLA`**：这个项目将VLA从“论文中的算法”转变为“可落地的工具”。它提供了一个端到端的工程解决方案，大大降低了研究人员和开发者进行真机部署的门槛。**建议关注其易用性、对新型VLA架构的支持速度以及其社区生态的构建情况。**