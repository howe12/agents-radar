# 具身智能开源动态日报 2026-07-30

> 数据来源: GitHub Search API (126 仓库) | ArXiv cs.RO (30 篇论文) | RSS 新闻 (48 条) | 生成时间: 2026-07-30 01:51 UTC

---

# 具身智能开源动态日报

> 数据采集：行业新闻（IEEE Spectrum、The Robot Report、ROS Discourse）× ArXiv cs.RO × GitHub Trending Robotics
> 覆盖时间：最近 24 小时

---

## 一、今日速览

今日具身智能领域呈现出"硬件监管收紧 + VLA 与世界模型加速演进"的双重信号。一方面，美国 FCC 对进口人形机器人和四足机器人出台新限制，引发业界对供应链与开源生态合规化的关注；另一方面，ArXiv 多篇论文聚焦 Vision-Language-Action（VLA）的自适应推理、潜空间世界模型的物理参数可辨识性、以及机器人在本体上的对称化并行学习。GitHub 上，RLinf、RoboTwin 2.0、openarm、mjlab 等围绕"基础设施 + 平台 + 数据"的项目持续获得高关注度，MuJoCo-Warp 与 IsaacLab 风格的工作流正在成为机器人学习的新底座。

---

## 二、行业脉搏

1. **FCC 限制进口人形/四足机器人，行业反响强烈**
[Experts react to FCC limits](https://www.therobotreport.com/industry-reacts-fcc-ban-u-s-imports-new-humanoid-quadruped-robots/)
FCC 新规影响新型人形机器人与移动机器人的进口，多位行业专家表达关切。此举可能重塑北美具身智能硬件供应链，并间接利好本土机器人与开源替代方案。

2. **意大利人形机器人登场，物理 AI 视频持续火热**
[Video Friday: An Italian Humanoid](https://spectrum.ieee.org/video-friday-physical-ai-robotics)
欧洲新一代人形机器人亮相，延续 2025 年人形机器人赛道高歌猛进的态势，与此同时 Physical AI / 触觉感知方向持续涌现新内容。

3. **GMEX Robotics 收购 MediaMeta.ai，强化社交智能**
[GMEX acquires MediaMeta.ai](https://www.therobotreport.com/gmex-robotics-to-acquire-mediameta-ai-social-intelligence/)
并购显示具身智能厂商正在向"社交理解 + 多模态交互"延展，机器人不再仅是操作执行者，也需要类人沟通能力。

4. **ENvue Medical 推进机器人辅助喂食管放置**
[ENvue Medical feeding tube system](https://www.therobotreport.com/envue-medical-develops-robotic-feeding-tube-placement-system/)
医疗机器人在精准介入方向持续突破，验证了机器人在临床手术级精度上的工程化潜力。

5. **Agency Tool Company 简化 OTA 升级，RoboBusiness 2026 开放注册**
[Agency Tool Company OTA](https://www.therobotreport.com/agency-tool-company-wants-to-make-ota-software-updates-easier/) ｜ [RoboBusiness 2026](https://www.therobotreport.com/registration-is-open-for-robobusiness-2026/)
机器人软件 OTA（Over-The-Air）维护工具的成熟，是大规模部署机器人的关键拼图；行业大会 Robobusiness 2026 已开启注册，预计将聚焦 Physical AI 与商业化落地。

6. **触觉与光学 AI 更新方向**
[Robot Finger Feels in Color](https://spectrum.ieee.org/robot-finger) ｜ [Optical Tech Updates AI on the Fly](https://spectrum.ieee.org/ai-in-robotics)
新型触觉传感"彩色感知"与光学可重构 AI 推理硬件，预示机器人在边缘端实时学习与多模态感知融合的新路径。

---

## 三、研究前沿

1. **RL²-VLA：面向 VLA 模型的自适应 RL 潜空间组合引导与测试时扩展**
[arXiv:2607.26991](http://arxiv.org/abs/2607.26991v1)
针对现有 VLA 模型在分布外任务上鲁棒性不足的问题，提出测试时计算扩展与潜在组合引导机制，将强化学习推理能力注入 VLA，是"自适应的机器人基础模型"方向的重要一步。

2. **潜变量世界模型的物理参数可辨识性**
[arXiv:2607.27017](http://arxiv.org/abs/2607.27017v1)
探究世界模型在多模态预测中是否真正"学到"了物理参数，是世界模型理论分析的关键论文，对评估 latent world model 的可信度与可解释性具有方法论贡献。

3. **SymmGrid：在机器人本体上对称化并行扩展的视觉-运动学习**
[arXiv:2607.26985](http://arxiv.org/abs/2607.26985v1)
通过机器人本体对称性并行化和自我中心/外部中心视觉融合，加速 on-robot 强化学习，目标是打破"仿真训练慢、实机训练贵"的瓶颈。

4. **从被动视频到可编辑具身经验：物理一致的经验合成**
[arXiv:2607.26903](http://arxiv.org/abs/2607.26903v1)
利用海量人类操作视频合成物理一致的"可编辑经验"，直接服务于具身智能的数据稀缺问题，是 embodied data engine 方向的代表性工作。

5. **LeWorldModel 与时序居中 SIGReg：稳定多任务学习**
[arXiv:2607.26924](http://arxiv.org/abs/2607.26924v1)
提出时间居中的正则化方法，提升 LeWorldModel 在多任务场景下的稳定性，对世界模型在大规模具身预训练中的可扩展性有直接贡献。

> 备选：BioVLN 生物实验室视觉语言导航平台（[arXiv:2607.26914](http://arxiv.org/abs/2607.26914v1)）、StructureGS 关节物体高斯泼溅重建（[arXiv:2607.26889](http://arxiv.org/abs/2607.26889v1)）也具有显著价值。

---

## 四、重点项目

### 🦾 机器人学习与控制（模仿学习 / 强化学习）

| 项目 | ⭐ | 简介 |
|---|---|---|
| [RLinf/RLinf](https://github.com/RLinf/RLinf) | 4,320 | 面向具身智能与 Agentic AI 的强化学习基础设施，提供端到端 RL 训练栈 |
| [RoboTwin-Platform/RoboTwin](https://github.com/RoboTwin-Platform/RoboTwin) | 2,657 | RoboTwin 2.0（ICML 2026），双臂操作仿真平台与基准 |
| [mani-skill/ManiSkill](https://github.com/mani-skill/ManiSkill) | 3,172 | GPU 并行的机器人操作仿真与基准，标准化 manipulation 评估 |
| [StanfordVL/BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K) | 1,604 | 1,000 种日常任务的具身 AI 研究平台，推动通用家庭服务机器人基准 |
| [PhyAgentOS/PhyAgentOS](https://github.com/PhyAgentOS/PhyAgentOS) | 1,268 | 基于 agentic workflow 的自演化具身 AI 操作系统 |
| [DLR-RM/stable-baselines3](https://github.com/DLR-RM/stable-baselines3) | 13,629 | PyTorch 强化学习可靠实现，是 RL 算法事实标准之一 |
| [vikashplus/robohive](https://github.com/vikashplus/robohive) | 631 | 统一的机器人学习框架，覆盖仿真到真实硬件 |

### 🤖 仿真与框架（MuJoCo / Isaac / Gazebo / ROS）

| 项目 | ⭐ | 简介 |
|---|---|---|
| [google-deepmind/mujoco](https://github.com/google-deepmind/mujoco) | 14,375 | 通用接触动力学物理仿真器，机器人研究的事实底座 |
| [isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab) | 7,800 | 基于 NVIDIA Isaac Sim 的统一机器人学习框架 |
| [newton-physics/newton](https://github.com/newton-physics/newton) | 5,263 | 基于 NVIDIA Warp 的开源 GPU 加速物理仿真引擎 |
| [gazebosim/gz-sim](https://github.com/gazebosim/gz-sim) | 1,433 | 最新一代 Gazebo，开源机器人仿真器 |
| [dartsim/dart](https://github.com/dartsim/dart) | 1,163 | C++23 研究导向物理引擎，含 Python 绑定 |
| [mujocolab/mjlab](https://github.com/mujocolab/mjlab) | 2,746 | 基于 MuJoCo-Warp 的 Isaac Lab 风格 RL/机器人研究 API |
| [ros-navigation/navigation2](https://github.com/ros-navigation/navigation2) | 4,527 | ROS 2 导航框架，机器人产业部署标配 |
| [ros-controls/mujoco_ros2_control](https://github.com/ros-controls/mujoco_ros2_control) | 222 | MuJoCo 与 ROS 2 control 的桥接，sim-to-real 必备 |

### 🧠 VLA 与基础模型

| 项目 | ⭐ | 简介 |
|---|---|---|
| [FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA) | 577 | 一体化 VLA 工程平台，覆盖数据到实机部署 |
| [allenai/vla-evaluation-harness](https://github.com/allenai/vla-evaluation-harness) | 493 | 统一 VLA 模型在任意仿真基准上的评估框架 |
| [sii-research/tau-0-vla](https://github.com/sii-research/tau-0-vla) | 202 | τ⁰-VLA：带世界模型引导测试时推理的分层机器人基础模型 |
| [TensorAuto/OpenTau](https://github.com/TensorAuto/OpenTau) | 192 | PyTorch 实现的真实世界机器人 VLA 训练基础设施 |
| [open-h/open-h-embodiment](https://github.com/open-h/open-h-embodiment) | 131 | 社区驱动的医疗 VLA 数据集倡议 |
| [knightnemo/Awesome-World-Models](https://github.com/knightnemo/Awesome-World-Models) | 3,244 | 世界模型领域最系统的精选资源列表 |
| [sou350121/VLA-Handbook](https://github.com/sou350121/VLA-Handbook) | 453 | 中文 VLA 实战手册，面向国内机器人算法工程师 |

### 🔧 硬件与驱动

| 项目 | ⭐ | 简介 |
|---|---|---|
| [enactic/openarm](https://github.com/enactic/openarm) | 2,781 | 完全开源的人形机械臂，面向接触丰富场景的物理 AI |
| [ArduPilot/ardupilot](https://github.com/ArduPilot/ardupilot) | 15,572 | ArduPlane/Copter/Rover/Sub 全球最广泛使用的开源飞控 |
| [dora-rs/dora](https://github.com/dora-rs/dora) | 3,855 | 数据流导向的机器人中间件，低延迟、可组合、分布式 |
| [copper-project/copper-rs](https://github.com/copper-project/copper-rs) | 1,428 | Rust 机器人操作系统，支持确定性回放 |
| [ros-claw/rosclaw](https://github.com/ros-claw/rosclaw) | 173 | 物理 AI 与具身 agent 自演化运行时，e-URDF + 沙箱安全 + 技能演化 |
| [PX4/PX4-Autopilot](https://github.com/PX4/PX4-Autopilot) | 12,294 | 主流开源无人机自驾仪 |

### 📊 数据集与基准

| 项目 | ⭐ | 简介 |
|---|---|---|
| [datawhalechina/every-embodied](https://github.com/datawhalechina/every-embodied) | 2,925 | 中文教程：从 0 构建具身智能机器人，覆盖 VLA/OpenVLA/SmolVLA/Pi0 |
| [RoboVerseOrg/RoboVerse](https://github.com/RoboVerseOrg/RoboVerse) | 1,792 | 统一平台、数据集与基准，面向可扩展通用机器人学习 |
| [russal/awesome-3d-4d-world-models](https://github.com/worldbench/awesome-3d-4d-world-models) | 954 | TPAMI 2026 3D/4D 世界模型综述配套资源 |
| [robonet-ai/handumi-sw](https://github.com/robonet-ai/handumi-sw) | 42 | 开源 HandUMI：双臂同步数据采集与重定向 |
| [open-h/open-h-embodiment](https://github.com/open-h/open-h-embodiment) | 131 | 开放共享的医疗 VLA 数据集 |
| [rerun-io/rerun](https://github.com/rerun-io/rerun) | 11,211 | 多模态机器人数据可视化、流式传输与训练支持 |

---

## 五、生态趋势信号

从今日素材看，具身智能生态正在沿"**硬件开源化 + 基础设施统一化 + 模型 VLA 化**"三条主线加速收敛。一方面，openarm 这类完全开源的人形臂、HandUMI 这类数据采集硬件持续涌现，意味着机器人硬件栈正从闭源工业品转向"开源可复现"路径，与之配套的 Copper-rs、ros-claw 等自演化运行时共同支撑了分布式部署需求。另一方面，MuJoCo-Warp + Isaac Lab 风格（mjlab）正在挑战 NVIDIA Isaac 的事实标准，"GPU 加速 + 统一 API"成为仿真器竞争焦点。VLA 方向上，测试时计算扩展、世界模型引导推理、跨硬件 VLA 部署（FluxVLA、tau-0-vla、OpenTau）三股力量同步推进，预示 2026 年具身基础模型将进入"推理 + 数据 + 部署"全栈竞争阶段。同时，FCC 进口限制等政策事件也在提醒社区：开源具身生态必须提前考虑合规与本土化路径。

---

## 六、值得关注

1. **τ⁰-VLA 与世界模型引导的测试时推理**
[sii-research/tau-0-vla](https://github.com/sii-research/tau-0-vla) ｜ [arXiv:2607.26991](http://arxiv.org/abs/2607.26991v1)
世界模型被用于 VLA 的推理阶段，意味着机器人不再只是"快速反应"系统，而是开始具备对长期任务的前瞻推演能力。该路线很可能在 2026 年成为具身基础模型的主流架构之一。

2. **openarm + Copper-rs + ros-claw：开源具身硬件栈雏形**
[enactic/openarm](https://github.com/enactic/openarm) ｜ [copper-project/copper-rs](https://github.com/copper-project/copper-rs) ｜ [ros-claw/rosclaw](https://github.com/ros-claw/rosclaw)
硬件、操作系统、运行时三层首次以完全开源方式联动，加上 Rerun 多模态数据可视化工具，构成"具身智能版 ROS"的潜在候选栈，对应着 Physical AI 走向科研与中小企业可复现的关键基础设施。

3. **mjlab：用 MuJoCo-Warp 复制 Isaac Lab 工作流**
[mujocolab/mjlab](https://github.com

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*