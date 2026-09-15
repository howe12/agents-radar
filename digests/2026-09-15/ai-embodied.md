# 具身智能开源动态日报 2026-09-15

> 数据来源: GitHub Search API (129 仓库) | ArXiv cs.RO (0 篇论文) | RSS 新闻 (47 条) | 生成时间: 2026-09-15 02:54 UTC

---

# 具身智能开源动态日报

**日期：2025 年 · 第 X 期** · 编译：机器人 & 具身智能领域分析师

---

## 一、今日速览

今日动态集中在**触觉感知工业化**与**VLA 落地工具链**两大主线：IEEE Spectrum 与 The Robot Report 同步报道"机器人学习感知"与"超声波触觉规模化路径"，呼应了 XenseRobotics、handumi 等开源触觉数据采集项目；GitHub 端 VLA 工程化生态加速分化，FluxVLA、OpenTau、EVA-CLIENT、rosclaw 形成"训练—评测—部署"完整闭环。值得注意的是，今日 **cs.RO 论文收录为零**，学术信号暂时让位于产业落地与开源工程迭代；同时，**NVIDIA/skills** 与 **ros-mcp-server** 等"LLM Agent + 机器人"基础设施持续走热，预示 Coding Agent 正在成为物理 AI 的新交互界面。

---

## 二、行业脉搏

1. **[Robots Are Learning to Feel](https://spectrum.ieee.org/tactile-data-robots)** — IEEE Spectrum 系统梳理触觉感知数据采集与建模进展，标志着机器人感知从"视觉主导"向"多模态接触感知"演进，是具身基础模型的关键缺失拼图。

2. **[Ultrasound offers a scalable path to tactile intelligence for physical AI](https://www.therobotreport.com/ultrasound-offers-scalable-path-tactile-intelligence-physical-ai/)** — 超声波触觉方案摆脱了高成本视触觉传感器的瓶颈，为大规模触觉数据集与基础模型训练提供了工业级可扩展路径。

3. **[Universal Robots launches its seventh generation robot platform at IMTS](https://www.therobotreport.com/universal-robots-launches-its-seventh-generation-robot-platform-at-imts/)** — UR 在 IMTS 发布第七代协作机器人平台，反映协作机器人从硬件参数竞争转向"软件/AI-ready"生态竞争。

4. **[Arm to discuss scaling physical AI at RoboBusiness](https://www.therobotreport.com/arm-to-discuss-scaling-physical-ai-at-robobusiness/)** — 芯片 IP 厂商入局"Physical AI"规模化议题，意味着算力底座正在为具身智能重构。

5. **[Video Friday: Humanoid Robot Takes On Monkey Bars](https://spectrum.ieee.org/video-friday-disaster-response-robots)** — 人形机器人在灾难响应场景中挑战高难度地形（攀爬），运动智能与接触式规划的鲁棒性正在快速收敛。

---

## 三、研究前沿

> ⚠️ 今日 **ArXiv cs.RO 论文收录为 0**，学术风向暂时沉寂。但仓库侧出现多个"论文 + 代码"同步发布的项目值得关注：

1. **[Tsinghua-MARS-Lab/OMG](https://github.com/Tsinghua-MARS-Lab/OMG)** — "OMG: Omni-Modal Motion Generation for Generalist Humanoid Control"，通用人形运动生成框架，arXiv:2606.10340。
2. **[kesai-labs/lead](https://github.com/kesai-labs/lead)** — CVPR'26 论文 "LEAD: Minimizing Learner–Expert Asymmetry in End-to-End Driving"，针对端到端驾驶中学习者—专家不对称问题。
3. **[AIGeeksGroup/MobileVLA-R1](https://github.com/AIGeeksGroup/MobileVLA-R1)** — ECCV'26 论文 "MobileVLA-R1: Reinforcing Vision-Language-Action for Mobile Robots"，RL 增强的移动机器人 VLA。
4. **[RoboTwin-Platform/RoboTwin](https://github.com/RoboTwin-Platform/RoboTwin)** — ICML'26 RoboTwin 2.0 官方仓库，双臂操作基准的重要更新。

---

## 四、重点项目（按分类整理）

### 🦾 机器人学习与控制

- **[enactic/openarm](https://github.com/enactic/openarm)** · ⭐3,085 · MDX
  全开源人形机械臂，面向接触丰富场景的 Physical AI 研究与部署，是少数把"硬件本体"完全开放的具身项目。

- **[OpenPipe/ART](https://github.com/OpenPipe/ART)** · ⭐10,718 · Python
  Agent Reinforcement Trainer，基于 GRPO 训练多步智能体，标志 RL 正从"游戏/仿真"转向"真实任务"。

- **[DLR-RM/stable-baselines3](https://github.com/DLR-RM/stable-baselines3)** · ⭐13,797 · Python
  PyTorch 版 Stable Baselines，机器人 RL 事实标准实现，可靠性与可复现性是社区基石。

- **[Farama-Foundation/Gymnasium](https://github.com/Farama-Foundation/Gymnasium)** · ⭐12,533 · Python
  标准化单智能体 RL 环境 API（前身 Gym），具身学习/控制的通用接口。

### 🤖 仿真与框架

- **[google-deepmind/mujoco](https://github.com/google-deepmind/mujoco)** · ⭐15,144 · C++
  多关节接触动力学通用物理仿真器，机器人学习与控制研究的事实基准。

- **[isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab)** · ⭐8,124 · Python
  NVIDIA Isaac Sim 之上的机器人学习统一框架，GPU 并行仿真 + 资产库。

- **[newton-physics/newton](https://github.com/newton-physics/newton)** · ⭐5,635 · Python
  基于 NVIDIA Warp 的开源 GPU 加速物理引擎，定位"机器人学家专用"，与 Isaac 形成互补。

- **[carla-simulator/carla](https://github.com/carla-simulator/carla)** · ⭐14,401 · C++
  自动驾驶研究开源仿真器标杆，城市级场景与传感器模型成熟。

- **[cyberbotics/webots](https://github.com/cyberbotics/webots)** · ⭐4,627 · C++
  开源机器人仿真器，跨平台、教学/科研友好。

### 🧠 VLA 与基础模型

- **[dexmal/opendm](https://github.com/dexmal/opendm)** · ⭐687 · Python
  面向通用具身智能的开世界基础模型，定位"具身 GPT 时刻"的早期尝试。

- **[FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA)** · ⭐674 · Python
  一体化 VLA 工程平台，覆盖"数据→训练→真机部署"全链路。

- **[TensorAuto/OpenTau](https://github.com/TensorAuto/OpenTau)** · ⭐218 · Python
  真实机器人 VLA 训练基础设施（PyTorch），聚焦工程落地。

- **[syswonder/robonix](https://github.com/syswonder/robonix)** · ⭐356 · Rust
  面向机器人的 Agentic OS，强调运行时可治理与技能组合，是 Physical AI 操作系统层新探索。

- **[Noietch/EVA-CLIENT](https://github.com/Noietch/EVA-CLIENT)** · ⭐216 · Python
  统一真机部署、评测与数据采集框架，VLA 落地的"最后一公里"工具。

- **[OpenBMB/SimpleMemVLA](https://github.com/OpenBMB/SimpleMemVLA)** · ⭐33 · Python
  原生视频记忆的 VLA 模型，时间戳化历史视觉 + 流式推理，针对长时域操作。

### 🔧 硬件与驱动

- **[ArduPilot/ardupilot](https://github.com/ArduPilot/ardupilot)** · ⭐15,862 · C++
  ArduPlane/Copter/Rover/Sub 飞控开源生态，社区最广泛使用的自动驾驶仪。

- **[PX4/PX4-Autopilot](https://github.com/PX4/PX4-Autopilot)** · ⭐12,618 · C++
  与 ArduPilot 并列的飞控双雄，研究与商业产品广泛采用。

- **[ros-controls/ros2_control](https://github.com/ros-controls/ros2_control)** · ⭐1,008 · C++
  ROS 2 通用控制框架，真机驱动抽象的事实标准。

- **[robotmcp/ros-mcp-server](https://github.com/robotmcp/ros-mcp-server)** · ⭐1,451 · Python
  把 Claude/GPT 等 LLM 通过 MCP 协议接入 ROS，**LLM-Agent 直接控机器人**的关键中间件。

- **[NVIDIA/skills](https://github.com/NVIDIA/skills)** · ⭐3,292 · Python
  为 Claude Code、Codex 等 Coding Agent 提供 Physical AI / Robotics / Simulation 工作流技能，行业首个"机器人 Agent Skills"集合。

### 📊 数据集与基准

- **[RoboTwin-Platform/RoboTwin](https://github.com/RoboTwin-Platform/RoboTwin)** · ⭐2,852 · Python
  [ICML 2026] RoboTwin 2.0 官方仓库，双臂操作基准的事实标准之一。

- **[Hebbian-Robotics/hflow](https://github.com/Hebbian-Robotics/hflow)** · ⭐269 · Python
  面向机器人团队的"数据质量验证 SDK"，直击 VLA/具身模型训练数据治理痛点。

- **[Calibra-Robotics/Calibra](https://github.com/Calibra-Robotics/Calibra)** · ⭐20 · Python
  模仿学习数据集可观测性与 coreset 选择工具，补齐"数据—模型"链路。

- **[XenseRobotics-AI/xense-openpi](https://github.com/XenseRobotics-AI/xense-openpi)** · ⭐16 · Python
  π₀ / π₀-FAST / π₀.₅ 在 Xense 平台（BiARX5、BiFlexiv、XTac-UMI）的微调与真机部署，体现 **π 系列生态**正在向硬件厂商扩散。

---

## 五、生态趋势信号

多条线索正汇聚为同一个方向：**Physical AI 正在从"模型中心"走向"运行时/操作系统中心"**。新闻侧 Universal Robots 第七代、Arm 谈 Physical AI 规模化，意味着硬件层在为 AI 重构；开源侧 `robonix`、`PhyAgentOS`、`NVIDIA/skills` 不约而同地把"Agentic OS for Robots / Skills for Robots"作为核心叙事，反映机器人社区正在借鉴 LLM Agent 范式（工具调用、技能库、自我改进）来构建运行时。与此同时，`ros-mcp-server` 把 MCP 协议带入 ROS，让 Coding Agent 直接驱动真机成为开箱即用的能力。**触觉侧**则形成"超声波工业化方案 ↔ 开源视触觉硬件（Xense、handumi）↔ 数据质量 SDK（hflow、Calibra）"的三层闭环，为 Physical AI 的"接触智能"补齐最后一块数据短板。

---

## 六、值得关注

1. **超声波触觉规模化路径**（[新闻](https://www.therobotreport.com/ultrasound-offers-scalable-path-tactile-intelligence-physical-ai/) + [Xense 视触觉硬件](https://github.com/XenseRobotics-AI/xense-openpi)）：低成本触觉方案 + 开源硬件 + 数据 SDK 正在形成新基础设施，建议长期跟踪。

2. **LLM Agent × ROS/真机**：从 [ros-mcp-server](https://github.com/robotmcp/ros-mcp-server) 到 [NVIDIA/skills](https://github.com/NVIDIA/skills)，Coding Agent 控机器人正在成为新范式，开发者体验将出现明显代际差异。

3. **VLA 工程化"全链路"**：今日同时出现 [FluxVLA](https://github.com/FluxVLA/FluxVLA)、[OpenTau](https://github.com/TensorAuto/OpenTau)、[EVA-CLIENT](https://github.com/Noietch/EVA-CLIENT)、[rosclaw](https://github.com/ros-claw/rosclaw) 等项目，说明 VLA 正从"论文 demo"加速走向"产线级"工具集，关注未来 3–6 个月的整合与收敛。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*