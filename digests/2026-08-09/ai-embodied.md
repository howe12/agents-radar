# 具身智能开源动态日报 2026-08-09

> 数据来源: GitHub Search API (129 仓库) | ArXiv cs.RO (0 篇论文) | RSS 新闻 (48 条) | 生成时间: 2026-08-09 01:12 UTC

---

# 📅 具身智能开源动态日报

**日期**：2026 年 1 月 · 第 X 期
**覆盖范围**：行业新闻 × ArXiv cs.RO × GitHub 活跃仓库

---

## 1. 今日速览

今日具身智能领域的最大信号来自**人形机器人产业的实际落地加速**：Walden Robotics 与丰田在"实用人形机器人"方向的合作，以及 Avatar Robotics 完成 650 万美元种子轮、Tacta Systems 推出面向高技能制造的 TactaBot，标志着具身智能正从 Demo 走向工厂现场。与此同时，**美国对外国机器人的潜在禁令**引发业界广泛讨论，与 HII 与 Path Robotics/GrayMatter 签订的 9 亿美元框架协议形成鲜明对照——一边是地缘风险，一边是供应链本土化加速。开源侧，VLA（视觉-语言-动作）相关仓库持续涌现，MuJoCo-Warp 与 NVIDIA Newton 等新一代 GPU 加速物理引擎生态趋于成熟。

---

## 2. 行业脉搏

| # | 动态 | 意义 |
|---|------|------|
| 🏭 | **HII 与 Path Robotics、GrayMatter Robotics 签署最高 9 亿美元协议** — [链接](https://www.therobotreport.com/hii-signs-up-to-900m-agreement-with-path-robotics-graymatter-robotics/) | 船舶/重型制造巨头大规模采用机器人焊接与表面处理，标志工业自动化进入"超大型单一买方"时代，对中小型机器人厂商的供应链与渠道策略影响深远。 |
| 🤝 | **Walden Robotics 与丰田合作开发实用人形机器人** — [链接](https://spectrum.ieee.org/humanoid-robots-walden-robotics-toyota) | 人形机器人首次进入传统车企的真实产线应用清单（而非概念展示），意味着双足/双手机器人进入"任务级"商用阶段。 |
| 🦾 | **Tacta Systems 推出 TactaBot，瞄准高技能制造** — [链接](https://www.therobotreport.com/tacta-systems-takes-aim-high-skilled-manufacturing-work-tactabot/) | 力控/灵巧操作机器人从传统汽车与 3C 装配向更高工艺要求的精密制造渗透。 |
| � | **Avatar Robotics 完成 650 万美元种子轮** — [链接](https://www.therobotreport.com/avatar-robotics-raises-6-5-m-seed-round-address-industrial-labor-constraints/) | 资本继续押注"工业劳动力短缺"这一人形机器人最强叙事，2025–2026 年仍处于早期布局阶段。 |
| ⚖️ | **美国可能禁止外国机器人，行业反馈不一** — [链接](https://spectrum.ieee.org/fcc-covered-list-mobile-robots) | FCC 覆盖名单若扩展到移动机器人，将重塑仓储 AMR、人形机器人产业链的全球分工。 |

---

## 3. 研究前沿

> 今日 cs.RO 暂无可推荐论文（数据源未抓取到当日新论文）。
> 建议关注仓库中的"研究型项目"作为论文索引：例如 [INTACT-JEPA](https://github.com/zju3dv/INTACT-JEPA)（可学习世界模型）、[BridgeVLA](https://github.com/BridgeVLA/BridgeVLA)（桥接 VLA 架构）、[RoboNaldo](https://github.com/OpenDriveLab/RoboNaldo)（人形足球射门）等。

---

## 4. 重点项目

### 🤖 仿真与框架

| 仓库 | � | 一句话说明 |
|------|---|------------|
| [google-deepmind/mujoco](https://github.com/google-deepmind/mujoco) | 14,489 | 业界事实标准的多关节接触物理仿真器，是 RL/具身研究的基础底座。 |
| [carla-simulator/carla](https://github.com/carla-simulator/carla) | 14,272 | 自动驾驶研究最主流的开源仿真平台，ROS/ROS2 集成完善。 |
| [autowarefoundation/autoware](https://github.com/autowarefoundation/autoware) | 11,950 | 全球领先的开源自动驾驶软件栈（基于 ROS 2）。 |
| [isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab) | 7,861 | NVIDIA Isaac Sim 之上的统一机器人学习框架，GPU 并行仿真标杆。 |
| [newton-physics/newton](https://github.com/newton-physics/newton) | 5,303 | 基于 NVIDIA Warp 的 GPU 加速物理引擎，专为机器人研究者打造。 |
| [cyberbotics/webots](https://github.com/cyberbotics/webots) | 4,538 | 老牌开源机器人仿真器，对教学与多机器人场景友好。 |
| [gazebosim/gz-sim](https://github.com/gazebosim/gz-sim) | 1,443 | Gazebo 的最新代版本，Ignition/Garden 架构的代表。 |
| [mujocolab/mjlab](https://github.com/mujocolab/mjlab) | 2,776 | 提供 Isaac Lab 同款 API，由 MuJoCo-Warp 驱动，弥合两大生态。 |

### 🦾 机器人学习与控制

| 仓库 | � | 一句话说明 |
|------|---|------------|
| [Unity-Technologies/ml-agents](https://github.com/Unity-Technologies/ml-agents) | 19,613 | Unity 官方 RL 工具包，游戏/仿真环境训练的入门与研究首选。 |
| [Farama-Foundation/Gymnasium](https://github.com/Farama-Foundation/Gymnasium) | 12,301 | RL 环境 API 事实标准（Gym 继任者），几乎所有机器人 RL 仓库都依赖它。 |
| [OpenPipe/ART](https://github.com/OpenPipe/ART) | 10,568 | Agent Reinforcement Trainer，多步代理真实任务 GRPO 训练框架。 |
| [RLinf/RLinf](https://github.com/RLinf/RLinf) | 4,483 | 面向具身与 Agentic AI 的强化学习基础设施，统一调度训练与推理。 |
| [mani-skill/ManiSkill](https://github.com/mani-skill/ManiSkill) | 3,209 | GPU 并行的机器人操作基准，支持大规模并行训练与评估。 |
| [RoboTwin-Platform/RoboTwin](https://github.com/RoboTwin-Platform/RoboTwin) | 2,702 | ICML 2026 双臂操作仿真平台，规模化日常任务生成。 |
| [NJU-RLC/quadrupedal-agility](https://github.com/NJU-RLC/quadrupedal-agility) | 122 | 四足机器人敏捷行为多样性学习的官方实现。 |

### 🧠 VLA 与基础模型

| 仓库 | ⭐ | 一句话说明 |
|------|---|------------|
| [FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA) | 598 | 一站式 VLA 工程平台，覆盖数据采集到真机部署全链路。 |
| [Tencent-Hunyuan/Hy-Embodied-0.5-VLA](https://github.com/Tencent-Hunyuan/Hy-Embodied-0.5-VLA) | 255 | 腾讯混元：从 VLA 模型到真实机器人学习栈的完整开源方案。 |
| [BridgeVLA/BridgeVLA](https://github.com/BridgeVLA/BridgeVLA) | 211 | BridgeVLA 与 BridgeVLA++ 的官方实现，桥接式 VLA 架构的代表工作。 |
| [dexmal/opendm](https://github.com/dexmal/opendm) | 205 | 面向通用具身智能的开世界基础模型。 |
| [TensorAuto/OpenTau](https://github.com/TensorAuto/OpenTau) | 196 | Tensor 出品的 VLA 训练基础设施，PyTorch 原生、聚焦真实机器人部署。 |
| [zju3dv/INTACT-JEPA](https://github.com/zju3dv/INTACT-JEPA) | 134 | 同构意图到动作的学习框架，用于无搜索世界模型。 |

### 🔧 硬件与驱动

| 仓库 | ⭐ | 一句话说明 |
|------|---|------------|
| [ArduPilot/ardupilot](https://github.com/ArduPilot/ardupilot) | 15,647 | 全球最大的开源无人机自驾仪（Plane/Copter/Rover/Sub），ROS 生态基石。 |
| [kornia/kornia](https://github.com/kornia/kornia) | 11,311 | 可微几何视觉库，Spatial AI 的 PyTorch 风格工具箱。 |
| [nasa-jpl/open-source-rover](https://github.com/nasa-jpl/open-source-rover) | 9,560 | NASA JPL 6 轮火星漫游车 DIY 复刻版，硬件+控制完整开源。 |
| [PetoiCamp/OpenCat-Quadruped-Robot](https://github.com/PetoiCamp/OpenCat-Quadruped-Robot) | 5,071 | 波士顿动力风格的桌面级四足机器人开源框架，STEM 与二次开发的绝佳入口。 |
| [enactic/openarm](https://github.com/enactic/openarm) | 2,825 | 完全开源的人形机械臂，面向接触丰富的物理 AI 研究与部署。 |
| [ros-navigation/navigation2](https://github.com/ros-navigation/navigation2) | 4,562 | ROS 2 标准导航框架，移动机器人最常用的开源 Nav Stack。 |

### � 数据集与基准

| 仓库 | ⭐ | 一句话说明 |
|------|---|------------|
| [StanfordVL/BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K) | 1,624 | 1K 日常任务的具身智能基准与仿真平台，加速具身 AI 通用研究。 |
| [RoboVerseOrg/RoboVerse](https://github.com/RoboVerseOrg/RoboVerse) | 1,800 | 统一平台、数据集与基准，面向可扩展、可泛化的机器人学习。 |
| [robocasa/robocasa](https://github.com/robocasa/robocasa) | 1,633 | 大规模仿真日常任务，用于训练通用机器人家居策略。 |
| [Octoday-Hub/Embodied-AI](https://github.com/Octoday-Hub/Embodied-AI) | 2,272 | 中文具身智能生态社区，聚合论文、项目、课程、工具、数据集与招聘。 |
| [RayYoh/Awesome-Robot-Learning](https://github.com/RayYoh/Awesome-Robot-Learning) | 206 | 精心整理的机器人学习（以操作任务为主）资源清单。 |
| [chang-xinhai/Awesome-UMI](https://github.com/chang-xinhai/Awesome-UMI) | 14 | UMI（通用操作接口）生态系统的论文、数据集与策略精选索引。 |

---

## 5. 生态趋势信号

**人形机器人走向"任务级"实用化**——新闻侧 Walden×Toyota、Avatar Robotics 融资、TactaBot 切入高技能制造，与开源侧 [enactic/openarm](https://github.com/enactic/openarm)、[OpenDriveLab/RoboNaldo](https://github.com/OpenDriveLab/RoboNaldo)、[ozkannceylan/humanoid_vla](https://github.com/ozkannceylan/humanoid_vla) 形成呼应，"人形"已从概念验证转为产业落地主题。

**GPU 加速物理引擎成为新底座**——[newton-physics/newton](https://github.com/newton-physics/newton)、[mujocolab/mjlab](https://github.com/mujocolab/mjlab) 等基于 Warp / MuJoCo-Warp 的项目加速分化仿真生态；Isaac Lab 与 MuJoCo 双向打通，可微分仿真门槛进一步降低。

**VLA 工程化与数据闭环加速**——[FluxVLA](https://github.com/FluxVLA/FluxVLA)、[OpenTau](https://github.com/TensorAuto/OpenTau)、[Hy-Embodied-0.5-VLA](https://github.com/Tencent-Hunyuan/Hy-Embodied-0.5-VLA) 等仓库共同指向"VLA 不再只是论文，而是工程产品"；同时 [ros-mcp-server](https://github.com/robotmcp/ros-mcp-server) 把 LLM/MCP 与 ROS 桥接，标志 Agent 化机器人栈正在成型。

---

## 6. 值得关注

1. **[HII × Path Robotics / GrayMatter Robotics 9 亿美元协议](https://www.therobotreport.com/hii-signs-up-to-900m-agreement-with-path-robotics-graymatter-robotics/)** ——超大型单一买方主导的工业自动化采购模式一旦成为范式，将快速挤压中小集成商空间，需关注中国/欧洲厂商的对标动作。

2. **[Walden Robotics 与丰田合作](https://spectrum.ieee.org/humanoid-robots-walden-robotics-toyota)** ——传统车企（流水线之王）与人形机器人初创的联合，是观察"通用人形机器人是否真能进入产线"的最佳窗口。

3. **[newton-physics/newton](https://github.com/newton-physics/newton) + [mujocolab/mjlab](https://github.com/mujocolab/mjlab)** ——两条 GPU 物理引擎路线并行推进，意味着 2026 年具身 RL/VLA 训练效率将出现数量级提升，建议密切跟踪其与主流 VLA 框架的集成进度。

---

*日报由机器人 & 具身智能分析师自动生成 · 数据来源：IEEE Spectrum、The Robot Report、ROS Discourse、ArXiv cs.RO、GitHub Trending*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*