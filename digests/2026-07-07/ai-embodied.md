# 具身智能开源动态日报 2026-07-07

> 数据来源: GitHub Search API (robotics, ROS, embodied-AI 等话题) | 共 131 个仓库 | 生成时间: 2026-07-07 06:00 UTC

---

好的，作为机器人与具身智能领域分析师，以下是根据您提供的 GitHub 仓库列表生成的《具身智能开源动态日报》。

---

### **具身智能开源动态日报**

**报告日期：** 2025年7月  *(基于提供的7日内活动数据)*

#### **今日速览**

今日机器人开源社区活跃度极高，呈现出三大核心趋势：**强化学习（RL）** 在具身智能领域的应用正从工具链（`OpenRLHF`、`PufferLib`）走向直接驱动复杂行为的训练框架（`RLinf`）；**视觉-语言-动作（VLA）模型**进入工程化落地阶段，涌现出如 `FluxVLA`、`InternVLA-A-series` 等专注于从数据到真机部署的一体化平台；**仿真环境**持续进化，`Habitat-GS` 等结合高斯泼溅的新一代高保真度仿真器为策略迁移提供了更强大的训练场。

#### **重点项目**

##### 🦾 **机器人学习与控制（模仿学习、强化学习、策略学习）**

1.  **PufferAI/PufferLib** ⭐6,122
    [https://github.com/PufferAI/PufferLib](https://github.com/PufferAI/PufferLib)
    **通过RL优化数据吞吐量的通用加速库。** 它为复杂的RL训练提供了一套显著的性能优化，是社区中提升RL训练效率的关键基础设施。

2.  **RLinf/RLinf** ⭐4,019
    [https://github.com/RLinf/RLinf](https://github.com/RLinf/RLinf)
    **专为具身和智能体AI设计的强化学习基础设施。** 该项目填补了RL框架在具身场景中部署的空白，提供了从仿真到真机、从算法研究到系统工程的统一解决方案，是RL走向真实机器人应用的重要推动者。

3.  **NJU-RLC/quadrupedal-agility** ⭐119
    [https://github.com/NJU-RLC/quadrupedal-agility](https://github.com/NJU-RLC/quadrupedal-agility)
    **学习多样自然行为以增强四足机器人敏捷性的官方实现。** 该项目展示了如何通过模仿学习赋能机器人更复杂、更真实的运动技能，是机器人技能生成领域的前沿实践。

4.  **cair-vinuni/FOCA** ⭐27
    [https://github.com/cair-vinuni/FOCA](https://github.com/cair-vinuni/FOCA)
    **面向未来的数据高效VLA适应性调整方法。** 该工作被ICML 2026接收，提出了一种针对VLA模型高效微调的新范式，为解决数据稀缺场景下的机器人技能迁移提供了有价值的思路。

##### 🤖 **仿真与框架（MuJoCo、Isaac、Gazebo、ROS）**

1.  **isaac-sim/IsaacLab** ⭐7,621
    [https://github.com/isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab)
    **基于NVIDIA Isaac Sim构建的统一机器人学习框架。** 它已成为机器人RL研究的行业标准之一，提供了高度模块化、可扩展且性能卓越的仿真环境，极大地加速了从算法验证到政策部署的迭代周期。

2.  **zju3dv/habitat-gs** ⭐227
    [https://github.com/zju3dv/habitat-gs](https://github.com/zju3dv/habitat-gs)
    **[ECCV 2026] 使用动态高斯泼溅的高保真导航仿真器。** 该项目提出了将高斯泼溅技术融入仿真环境的新方法，有望显著提升视觉仿真内容的真实感和交互动态，对于在仿真中训练能够应对复杂视觉场景的策略至关重要。

3.  **mujocolab/mjlab** ⭐2,650
    [https://github.com/mujocolab/mjlab](https://github.com/mujocolab/mjlab)
    **由MuJoCo-Warp驱动的Isaac Lab API实现。** 它为偏好轻量、开源物理引擎的开发者提供了另一个高性能的选择。该项目证明了社区对更灵活仿真架构的需求。

4.  **dora-rs/dora** ⭐3,831
    [https://github.com/dora-rs/dora](https://github.com/dora-rs/dora)
    **面向AI机器人的数据流导向中间件。** 它使用Rust语言实现，专注于低延迟和分布式数据流，为构建复杂的、基于数据流的机器人AI应用提供了一个现代化的底层架构。

##### 🧠 **VLA 与基础模型（视觉-语言-动作、具身基础模型）**

1.  **OpenPipe/ART** ⭐10,337
    [https://github.com/OpenPipe/ART](https://github.com/OpenPipe/ART)
    **智能体强化训练器：使用GRPO对多步智能体进行实时任务训练。** 它代表了LLM赋能的智能体（Agent）与强化学习相结合的前沿方向，利用GRPO算法直接在真实任务上训练智能体，具有极高的工程实用价值。

2.  **FluxVLA/FluxVLA** ⭐512
    [https://github.com/FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA)
    **面向具身智能的全能VLA工程平台（从数据到真机部署）。** 项目名“all-in-one”恰如其分，旨在解决VLA模型从研究中走向真实机器人时面临的工程化难题，是简化VLA应用的关键工具。

3.  **InternRobotics/InternVLA-A-series** ⭐449
    [https://github.com/InternRobotics/InternVLA-A-series](https://github.com/InternRobotics/InternVLA-A-series)
    **InternVLA-A1：统一机器人操作中的理解、生成与动作。** 该项目展示了VLA模型的又一发展方向：将高层次的任务理解、场景生成与底层的动作控制统一在一个模型中，是迈向通用操作智能体的重要一步。

4.  **allenai/vla-evaluation-harness** ⭐421
    [https://github.com/allenai/vla-evaluation-harness](https://github.com/allenai/vla-evaluation-harness)
    **统一框架，可在任何机器人仿真基准上评估任何VLA模型。** 随着VLA模型爆发，标准化的评测体系显得尤为重要。该项目填补了这一空白，将为社区提供一个公平、可复现的模型比较平台。

##### 🔧 **硬件与驱动（机器人驱动、硬件接口、嵌入式系统）**

1.  **enactic/openarm** ⭐2,696
    [https://github.com/enactic/openarm](https://github.com/enactic/openarm)
    **用于物理AI研究和部署的全开源仿人臂。** 它为触觉丰富的机器人操作研究提供了一个完全开放、可定制的硬件平台，对推动低成本、可复现的灵巧操作研究具有重要意义。

2.  **BrikHMP18/HandUMI** ⭐14
    [https://github.com/BrikHMP18/HandUMI](https://github.com/BrikHMP18/HandUMI)
    **指环式、开源UMI变体，用于免机器人操作数据收集。** 该项目通过创新设计，极大地降低了数据采集的门槛，使得无需拥有完整的机器人平台即可收集高质量的抓取与操作数据，对数据驱动的策略学习意义重大。

##### 📊 **数据集与基准（操作、导航、具身智能评测）**

1.  **InternRobotics/InternScenes** ⭐254
    [https://github.com/InternRobotics/InternScenes](https://github.com/InternRobotics/InternScenes)
    **[NeurIPS 2025] 具有逼真布局的大规模交互式室内场景数据集。** 高质量的室内场景数据是训练通用家庭机器人操作和导航策略的关键。该数据集将为社区提供更强、更丰富的训练与测试环境。

2.  **datawhalechina/every-embodied** ⭐2,552
    [https://github.com/datawhalechina/every-embodied](https://github.com/datawhalechina/every-embodied)
    **仅需Python基础，从0构建自己的具身智能机器人。** 这对社区人才培养与知识普及做出了重要贡献。它系统性地引导学习者从零开始构建VLA等具身智能系统，极大地降低了入门门槛。

#### **生态趋势信号**

本周的仓库动态揭示了几个清晰的趋势：第一，**强化学习（RL）正在从算法库走向工业化应用**，如 `PufferLib` 和 `RLinf` 注重于性能、扩展性和与具身场景的深度集成。第二，**VLA模型工程化成熟度快速提升**，项目不再仅仅关注模型架构，而是转向了数据采集（`HandUMI`）、平台化部署（`FluxVLA`）和统一评估（`vla-evaluation-harness`），这表明社区正努力将VLA从研究论文推向可复用的生产工具。第三，**仿真技术正朝着更高保真度、更动态交互的方向发展**，`Habitat-GS` 等新仿真器预示着一个更接近真实物理世界的仿真时代的到来。

#### **值得关注**

1.  **RLinf/RLinf**：这是 **RL 与具身 AI 结合**领域最值得关注的项目之一。它为具身智能提供了一个端到端的RL基础设施层，有望成为该细分领域的标杆性工具。

2.  **FluxVLA/FluxVLA**：作为 **VLA 工程化**的集大成者，它的成熟度将直接影响VLA模型是否能被主流机器人开发者所采用。其后续社区发展和功能迭代值得密切关注。

3.  **BrikHMP18/HandUMI**：该项目的简洁创新性解决了数据瓶颈问题，是**数据驱动型操作学习**的潜在加速器。其精巧的设计思路值得所有致力于数据采集的团队学习参考。