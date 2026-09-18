# 具身智能开源动态日报 2026-09-18

> 数据来源: GitHub Search API (128 仓库) | ArXiv cs.RO (30 篇论文) | RSS 新闻 (48 条) | 生成时间: 2026-09-18 02:40 UTC

---

# 具身智能开源动态日报

**日期：2026 年 9 月 · 主理人视角**

---

## 一、今日速览

今日具身智能领域呈现"**安全先行、模型下沉、仿真整合**"三条主线。行业新闻侧，Agility Robotics 发布的 **Digit 5** 被视为首款真正可与人类协作安全的人形机器人，同期 IEEE Spectrum 与 The Robot Report 联合聚焦 AI 时代机器人网络安全与"Physical AI"开发框架。论文方面，**AnyViewDex**、**EliGSiR**、**DR-MPC** 分别在灵巧操作、持续建图与四足 MPC 上取得新进展。开源生态侧，**Newton** 物理引擎快速迭代、**Isaac Lab** 持续主导机器人学习框架；VLA 工程化项目（**FluxVLA**、**OpenTau**、**InternVLA-A1**）和 MCP/Agentic OS（**ros-mcp-server**、**robonix**、**rosclaw**）共同构成具身智能的"操作系统级"基础设施。

---

## 二、行业脉搏

**1. Digit 5 被定义为"首款真正安全的人形机器人工人"**
IEEE Spectrum 与 The Robot Report 同步报道 Agility Robotics 从 Cassie → Digit → Digit 5 的演进，明确指出 Digit 5 在力控阈值、碰撞检测与人共融策略上达到可在非结构化工厂环境部署的安全等级。
🔗 https://spectrum.ieee.org/humanoid-robot-safety
🔗 https://www.therobotreport.com/the-evolution-of-digit-agility-robotics-journey-from-cassie-to-digit-5/

**2. AI 时代机器人网络安全被重新定义**
Vicone 与 IEEE Spectrum 联合撰文，提出在 LLM/VLA 接入机器人后，传统功能安全已不足以覆盖 prompt injection、感知对抗与策略劫持等新型攻击面。
🔗 https://spectrum.ieee.org/physical-ai-robot-cybersecurity-vicone

**3. 2026 年 8 月机器人领域融资达 49 亿美元**
The Robot Report 公布月度融资数据，规模环比显著放大，主要流向人形机器人、Physical AI 与机器人开发者工具链。
🔗 https://www.therobotreport.com/robotics-investments-reach-4-9b-in-august-2026/

**4. Arm 推出 Total Design for Physical AI 生态**
80+ 开发者参与的 IP + 软件协同计划，目标是为具身智能提供统一芯片-算法接口，加速边缘端 VLA 部署。
🔗 https://www.therobotreport.com/arm-total-design-for-physical-ai-brings-more-than-80-developers-together/

**5. OLogic 将于 RoboBusiness 分享"人类示教学习"**
具身学习从远程操作向更轻量的示教范式收敛，与 LeRobot、UMI 等开源方向形成呼应。
🔗 https://www.therobotreport.com/ologic-to-share-how-robots-can-learn-from-human-demonstrations-at-robobusiness/

---

## 三、研究前沿

**1. AnyViewDex：基于 RGB 观测的视角不变灵巧操作**
针对多指灵巧操作策略对相机视角敏感的核心痛点，提出 view-invariant 表征，显著提升跨视角 sim2real 性能。
🔗 http://arxiv.org/abs/2609.20107v1

**2. EliGSiR：有限算力下的持续 RGB-D 高斯建图**
打破 3DGS 依赖长优化与闭合观测的假设，使机器人在持续运行中实时维护高质量地图。
🔗 http://arxiv.org/abs/2609.20348v1

**3. DR-MPC：用于四足行走的动力学松弛模型预测控制**
在传统 MPC 与真实动力学之间引入松弛量，兼顾求解速度与可行性，对足式机器人高动态运动控制有直接价值。
🔗 http://arxiv.org/abs/2609.20035v1

**4. Universal Navigation Interface：免机器人平台的导航数据采集**
通过通用接口在轮式机器人上采集大规模导航数据，绕开平台特定遥操依赖，是 Nav2 数据生态的重要补充。
🔗 http://arxiv.org/abs/2609.20114v1

**5. GPT-6-Astra 在零样本连续环境 VLN 中的行为分析**
系统评估 LLM 作为高层导航决策器在零样本场景下的失败模式，为 LLM-as-Planner 的工程部署提供诊断。
🔗 http://arxiv.org/abs/2609.20116v1

**6. RoboFind：为视障人士设计的多智能体个性化物品搜索**
将多智能体协作与人本需求结合，展示了具身智能在辅助场景的落地潜力。
🔗 http://arxiv.org/abs/2609.20330v1

---

## 四、重点项目

### 🦾 机器人学习与控制

**1. enactic/openarm** ⭐3,435
开源仿人臂硬件 + 控制栈，专为接触丰富场景下的物理 AI 研究设计，是社区难得的"硬件开源 + 可复现"项目。
🔗 https://github.com/enactic/openarm

**2. loco-3d/crocoddyl** ⭐1,303
基于 DDP 系列算法的最优控制库，专攻接触序列下的机器人控制，是四足/机械臂 MPC 研究的底层支柱。
🔗 https://github.com/loco-3d/crocoddyl

**3. iit-DLSLab/Quadruped-PyMPC** ⭐516
基于 SRBD 的四足 MPC，集成 acados（梯度）与 jax（采样）两套求解器，工程化程度高。
🔗 https://github.com/iit-DLSLab/Quadruped-PyMPC

**4. Tsinghua-MARS-Lab/OMG** ⭐117
"OMG: Omni-Modal Motion Generation for Generalist Humanoid Control"（arXiv 2606.10340）官方实现，迈向通用人形运动生成。
🔗 https://github.com/Tsinghua-MARS-Lab/OMG

### 🤖 仿真与框架

**5. google-deepmind/mujoco** ⭐15,203
通用多关节接触动力学仿真器，机器人学习事实标准之一。
🔗 https://github.com/google-deepmind/mujoco

**6. isaac-sim/IsaacLab** ⭐8,158
NVIDIA 统一机器人学习框架，支持多物理求解器与渲染后端，是当前 SOTA 训练基础设施。
🔗 https://github.com/isaac-sim/IsaacLab

**7. newton-physics/newton** ⭐5,649
基于 NVIDIA Warp 的 GPU 加速开源物理引擎，专为机器人学家与仿真研究设计，正快速成为 Isaac 系之外的替代选项。
🔗 https://github.com/newton-physics/newton

**8. mujocolab/mjlab** ⭐3,090
在 MuJoCo-Warp 之上提供 Isaac Lab 风格 API，降低 RL 研究者从 GPU 物理引擎切换的成本。
🔗 https://github.com/mujocolab/mjlab

**9. ros-navigation/navigation2** ⭐4,716
ROS 2 导航框架与系统，轮式移动机器人生产环境事实标准。
🔗 https://github.com/ros-navigation/navigation2

**10. gazebosim/gz-sim** ⭐1,504
Gazebo 最新开源仿真器，与 ROS 2 深度集成。
🔗 https://github.com/gazebosim/gz-sim

### 🧠 VLA 与基础模型

**11. harvard-edge/cs249r_book** ⭐28,260
哈佛 CS249r《机器学习系统》四卷本，覆盖 Agentic AI 与 Physical AI，是体系化理解 VLA 底层 ML Systems 的最佳教材。
🔗 https://github.com/harvard-edge/cs249r_book

**12. RLinf/RLinf** ⭐5,275
面向具身与 Agentic AI 的强化学习基础设施，对应 VLA-RL 后训练浪潮。
🔗 https://github.com/RLinf/RLinf

**13. dora-rs/dora** ⭐3,963
面向 AI 机器人应用的数据流中间件，主打低延迟、可组合与分布式 pipeline。
🔗 https://github.com/dora-rs/dora

**14. RoboTwin-Platform/RoboTwin** ⭐2,873
ICML 2026 收录的 RoboTwin 2.0 官方仓库，提供双臂操作仿真基准与数据生成管线。
🔗 https://github.com/RoboTwin-Platform/RoboTwin

**15. FluxVLA/FluxVLA** ⭐690
"从数据到真机部署"的 VLA 全流程工程平台，对中小团队尤为友好。
🔗 https://github.com/FluxVLA/FluxVLA

**16. allenai/vla-evaluation-harness** ⭐614
一套框架评估任意 VLA 模型在任意仿真基准上的表现，是 VLA 横向对比的公共基线。
🔗 https://github.com/allenai/vla-evaluation-harness

**17. TensorAuto/OpenTau** ⭐221
Tensor 推出的 PyTorch VLA 训练基础设施，面向真实机器人场景。
🔗 https://github.com/TensorAuto/OpenTau

**18. InternRobotics/InternVLA-A-series** ⭐554
InternVLA-A1：统一理解、生成与动作的机器人操作基础模型。
🔗 https://github.com/InternRobotics/InternVLA-A-series

### 🔧 硬件与驱动 / Agentic OS

**19. robotmcp/ros-mcp-server** ⭐1,458
通过 MCP 协议将 Claude/GPT 等大模型接入 ROS，是具身 Agent 接入真实机器人最关键的中介项目。
🔗 https://github.com/robotmcp/ros-mcp-server

**20. copper-project/copper-rs** ⭐1,492
Rust 写的机器人"操作系统"，支持确定性构建、运行与全量回放，对工业级部署意义重大。
🔗 https://github.com/copper-project/copper-rs

**21. syswonder/robonix** ⭐364
定位为"机器人的 Agentic 操作系统"，反映机器人中间件从 ROS 向 LLM-native 演进的趋势。
🔗 https://github.com/syswonder/robonix

**22. ros2-rust/ros2_rust** ⭐1,528
ROS 2 的 Rust 绑定，高性能与内存安全兼顾。
🔗 https://github.com/ros2-rust/ros2_rust

### 📊 数据集与基准

**23. StanfordVL/BEHAVIOR-1K** ⭐1,706
加速具身 AI 研究的标准平台，覆盖 1000+ 日常任务仿真，是学术界长期使用的事实基准。
🔗 https://github.com/StanfordVL/BEHAVIOR-1K

**24. Hebbian-Robotics/hflow** ⭐272
面向机器人团队的"数据质量" SDK，聚焦训练前数据验证，补齐"模型强、数据乱"的短板。
🔗 https://github.com/Hebbian-Robotics/hflow

**25. Calibra-Robotics/Calibra** ⭐26
模仿学习数据集的可观测性与 coreset 选择工具，强调"先看清数据，再训模型"。
🔗 https://github.com/Calibra-Robotics/Calibra

---

## 五、生态趋势信号

开源生态正在从"单一算法"向"**操作系统 + 评测 + 数据**"三层结构演化。其一，**Agentic OS for Robots** 成为新热点：ros-mcp-server、robonix、rosclaw 共同把 LLM/VLA 视作机器人原生"用户态进程"，暗示 ROS 将从分布式中间件升级为 Agent runtime。其二，**仿真底座进入"战国时代"**——Newton（Warp）、MuJoCo-Warp、Isaac Lab 并立，社区明显倾向于"GPU 加速 + 开源 + 可微"。其三，**VLA 工程化走向成熟**：评估 harness、训练 infra、数据 SDK 三个方向同时出现高质量项目，意味着 VLA 即将从论文时代进入产品化时代。其四，**安全与可验证性**成为下一阶段分水岭——从 Digit 5 的力控安全到 hflow/Calibra 的数据可观测性，再到 copeneer-rs 的确定性回放，"可靠性"正在取代"性能"成为具身智能落地的主导叙事。

---

## 六、值得关注

**1. Digit 5 的"真安全"标准** —— 行业首次给出可与人类共线作业的人形机器人安全基线，IEEE Spectrum 与 The Robot Report 同步背书，将成为后续人形产品准入的事实参考。其后续生态（SDK、URDF、安全认证）值得立刻追踪。

**2. Newton 物理引擎 + Isaac Lab + MuJoCo-Warp 三足鼎立** —— 仿真层"开源 GPU 化"已基本确定格局，建议从业者优先评估 Newton 与 mjlab 对自身训练 pipeline 的兼容性，避免后续迁移成本。

**3. Agentic OS for Robots 浪潮（ros-mcp-server → robonix → rosclaw）** —— 三个月内三个独立项目从不同方向攻入"机器人 LLM 操作系统"赛道，叠加 VLA 评测 harness 与数据 SDK 的同步成熟，2026 下半年极有可能出现一个被广泛采纳的事实标准，建议团队尽早布局 MCP 接入与

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*