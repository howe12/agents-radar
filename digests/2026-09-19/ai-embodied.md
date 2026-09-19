# 具身智能开源动态日报 2026-09-19

> 数据来源: GitHub Search API (127 仓库) | ArXiv cs.RO (30 篇论文) | RSS 新闻 (48 条) | 生成时间: 2026-09-19 02:39 UTC

---

# 具身智能开源动态日报

**日期**：2025-11 | **覆盖范围**：行业新闻 8 条 · cs.RO 论文 10 篇 · GitHub 活跃仓库 127 个

---

## 一、今日速览

今天具身智能领域释放出三组强烈信号：**资本层面**，SoftBank 宣布收购 Robotics and AI Institute，体现头部巨头对"物理 AI 顶层研究"的整合诉求；**安全层面**，IEEE Spectrum 连续推出 Digit 5 安全性与 AI 时代机器人网络安全两篇深度报道，显示行业从"能不能跑"转向"敢不敢部署"；**基础设施层面**，MuJoCo 官方推出由 Warp 加速的 mjlab，NVIDIA Isaac Lab、Newton 物理引擎、VLA 评测 harness 等围绕"端到端工程化"的项目同步活跃，机器人学习正进入"全栈拼基础设施"的阶段。

---

## 二、行业脉搏

| # | 动态 | 意义 |
|---|------|------|
| 1 | **SoftBank 收购 Robotics and AI Institute** | [The Robot Report](https://www.therobotreport.com/softbank-agrees-to-acquire-robotics-and-ai-institute/) 软银将曾经由 Pieter Abbeel 等人领导、聚焦具身基础模型的研究所纳入麾下，强化其在 Physical AI 顶层的卡位。 |
| 2 | **Digit 5 被定位为首个真正安全的人形机器人** | [IEEE Spectrum](https://spectrum.ieee.org/humanoid-robot-safety) Agility Robotics 通过冗余执行器、低阻抗关节与认证安全架构回应工厂合规诉求，标志人形机进入"可部署"门槛。 |
| 3 | **Rethinking Robot Safety in the Age of AI** | [IEEE Spectrum](https://spectrum.ieee.org/physical-ai-robot-cybersecurity-vicone) Vicone 团队指出端到端神经策略带来的新型攻击面，呼吁建立 Physical AI 网络安全标准。 |
| 4 | **机器人热潮中的"铲子"战略** | [The Robot Report](https://www.therobotreport.com/the-picks-and-shovels-strategy-behind-the-robotics-boom/) 投资重心从整机转向仿真、数据、传感、夹爪等"卖铲子"环节，基础设施层估值加速。 |
| 5 | **Neptune Medical Triton 1 获 FDA 批准 + Icarus 太空机器人微重力飞行** | [The Robot Report (Neptune)](https://www.therobotreport.com/neptune-medical-earns-fda-clearance-triton-1-robotic-system/) · [The Robot Report (Icarus)](https://www.therobotreport.com/icarus-robotics-flies-iss-bound-robot-in-microgravity-for-the-first-time/) 医疗与在轨机器人同步突破监管/极端环境关口。 |

---

## 三、研究前沿

| # | 论文 | 贡献 |
|---|------|------|
| 1 | **Coding Agents with an Obstacle-Aware Harness for Safe Robot Manipulation** ([arXiv](http://arxiv.org/abs/2609.20822v1)) | 提出"障碍感知 harness"约束 LLM 写代码控制器时的物理不可行动作，是 Code-as-Policy 走向安全部署的关键补丁。 |
| 2 | **Workspace Models: Lightweight Robotic Memory via Saliency-Driven Supervision** ([arXiv](http://arxiv.org/abs/2609.20820v1)) | 用显著性驱动监督构建轻量级工作区记忆，为长时程操作任务提供无需大模型的"外挂海马体"。 |
| 3 | **StageGuard: Stage Transitions for Long-Horizon Tasks via Agentic Distillation** ([arXiv](http://arxiv.org/abs/2609.20791v1)) | 通过 agentic 蒸馏学习层级阶段转移，将多策略分层规划的可解释性与端到端训练的优势结合。 |
| 4 | **GeoAAC: Geometry-Based Adaptive Action Chunking in VLA Policies** ([arXiv](http://arxiv.org/abs/2609.20776v1)) | 在 VLA 中引入基于几何的自适应动作分块，缓解现有固定分块在精度与稳定性之间的权衡。 |
| 5 | **Agile-WAM & MoWAM：World Action Models 的两条优化路径** ([Agile-WAM](http://arxiv.org/abs/2609.20761v1)) · ([MoWAM](http://arxiv.org/abs/2609.20709v1)) | 一个用触觉联合预测世界状态与动作提升接触丰富任务；另一个显式预测未来运动以加速 WAM 推理，共同推动"世界模型即策略"范式走向实用。 |

---

## 四、重点项目

### 🦾 机器人学习与控制（模仿/强化/策略学习）

- **[RLinf/RLinf](https://github.com/RLinf/RLinf)** ⭐5,288 · 面向具身与 Agentic AI 的强化学习基础设施，统一调度环境与策略。
- **[OpenPipe/ART](https://github.com/OpenPipe/ART)** ⭐10,751 · Agent Reinforcement Trainer，用 GRPO 让多步智能体在真实任务中"在岗训练"。
- **[OpenRLHF/OpenRLHF](https://github.com/OpenRLHF/OpenRLHF)** ⭐10,016 · 基于 Ray 的高性能 Agentic RL 框架（PPO/DAPO/REINFORCE++），是当前 VLM/VLA 后训练的事实底座。
- **[Tsinghua-MARS-Lab/OMG](https://github.com/Tsinghua-MARS-Lab/OMG)** ⭐117 · 清华 MARS 实验室"全模态运动生成"通用人形控制项目，对应 OMG 论文。
- **[murobotics-ai/handumi-sw](https://github.com/murobotics-ai/handumi-sw)** ⭐68 · 同步双手 UMI 数据采集与重定向工具，直接喂 LeRobot 训练栈。

### 🤖 仿真与框架（MuJoCo / Isaac / Gazebo / ROS）

- **[isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab)** ⭐8,164 · NVIDIA 官方机器人学习统一框架，多物理/多渲染器，是当前主流 Sim2Real 实验场。
- **[mujocolab/mjlab](https://github.com/mujocolab/mjlab)** ⭐3,097 · 由 Google DeepMind 发布，Isaac Lab API + MuJoCo-Warp 后端，是社区"逃离 Isaac Lab 许可"的关键替代。
- **[newton-physics/newton](https://github.com/newton-physics/newton)** ⭐5,650 · 基于 NVIDIA Warp 的开源 GPU 物理引擎，专为机器人学家与仿真研究设计。
- **[google-deepmind/mujoco](https://github.com/google-deepmind/mujoco)** ⭐15,215 · MuJoCo 主仓库，最稳的接触动力学基线。
- **[gazebosim/gz-sim](https://github.com/gazebosim/gz-sim)** ⭐1,505 · Gazebo 新一代仿真器，ROS 生态默认户外/多机器人平台。
- **[robotmcp/ros-mcp-server](https://github.com/robotmcp/ros-mcp-server)** ⭐1,461 · 把 Claude/GPT 等 LLM 通过 MCP 接入 ROS，是"Agent 控机器人"最直接的开源桥梁。
- **[copper-project/copper-rs](https://github.com/copper-project/copper-rs)** ⭐1,492 · 用 Rust 写确定性机器人 OS，关注回放/可追溯，呼应行业对可靠性的需求。

### 🧠 VLA 与具身基础模型

- **[InternRobotics/InternVLA-A-series](https://github.com/InternRobotics/InternVLA-A-series)** ⭐556 · 上海 AI Lab InternVLA-A1：统一理解、生成与动作的机器人操作模型。
- **[InternRobotics/VLAC](https://github.com/InternRobotics/VLAC)** ⭐331 · ICML 2026 VLA-Critic：将 Critic 引入 VLA 闭环，专攻真实世界 RL。
- **[FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA)** ⭐695 · VLA 一站式工程平台：数据 → 训练 → 真机部署。
- **[allenai/vla-evaluation-harness](https://github.com/allenai/vla-evaluation-harness)** ⭐614 · 任意 VLA × 任意机器臂 × 任意仿真基准的统一评测框架，是 VLA 走向可比较的关键。
- **[Open-X-Humanoid/HEX](https://github.com/Open-X-Humanoid/HEX)** ⭐333 · 全身 VLA 框架，针对全尺寸人形机器人。
- **[dexmal/opendm](https://github.com/dexmal/opendm)** ⭐1,615 · 通用具身智能的开放世界基础模型。
- **[EarthtoJake/text-to-cad](https://github.com/earthtojake/text-to-cad)** ⭐16,087 · CAD/CAE/CAM 的 Agent Skills，让文本生成可直接驱动制造。

### 🔧 硬件与驱动

- **[enactic/openarm](https://github.com/enactic/openarm)** ⭐3,462 · 完全开源的人形手臂，专门面向接触丰富场景的 Physical AI 研究。
- **[ROBOTIS-GIT/open_manipulator](https://github.com/ROBOTIS-GIT/open_manipulator)** ⭐665 · ROBOTIS 开源机械臂 + AI Manipulator 平台。
- **[JacopoPan/aerial-autonomy-stack](https://github.com/JacopoPan/aerial-autonomy-stack)** ⭐596 · PX4/ArduPilot 集群感知自主栈，ROS2 + YOLO + LiDAR + Jetson 一体。
- **[FastCrest/tether](https://github.com/FastCrest/tether)** ⭐84 · 边缘到云 AI 部署 CLI，覆盖 Jetson/RTX/Apple Silicon/AMD，VLA 真机落地的工程拼图。

### 📊 数据集与基准

- **[StanfordVL/BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K)** ⭐1,706 · 斯坦福李飞飞组 1000 任务具身 AI 基准，长期主导学术评测。
- **[RoboTwin-Platform/RoboTwin](https://github.com/RoboTwin-Platform/RoboTwin)** ⭐2,878 · ICML 2026 双臂仿真基准 2.0。
- **[Hebbian-Robotics/hflow](https://github.com/Hebbian-Robotics/hflow)** ⭐272 · 面向机器人团队的数据质量验证 SDK。
- **[Calibra-Robotics/Calibra](https://github.com/Calibra-Robotics/Calibra)** ⭐26 · 模仿学习数据集可观测性与 coreset 选择。
- **[Phyzicalorg/Phyzical_org](https://github.com/Phyzicalorg/Phyzical_org)** ⭐292 · 浏览器遥操数据 + 链上溯源，给 VLA/Agent 提供"即用燃料"。

---

## 五、生态趋势信号

**具身智能正在从"模型中心"走向"工程全栈"**。新闻侧 SoftBank 整合顶级研究所、Digit 5 主打安全认证、资本向"铲子层"倾斜，传递出行业已不再满足于"会动就行"；论文侧 Coding Agents + Harness、Workspace Models、StageGuard 等工作均围绕"让神经策略在真实长时程任务中可控可部署"展开；仓库侧则出现清晰的工程化分工——MuJoCo/Newton/mjLab/IsaacLab 形成新一代 GPU 物理仿真矩阵，VLA 评测 harness、Critic 模型、On-Policy 后训练框架同步成熟，rust 编写的确定性机器人 OS（Copper）与边缘-云部署 CLI（Tether）补齐最后一公里。可以预见，未来 6–12 个月"具身基础设施层"将成为竞争最激烈、估值最坚挺的赛道。

---

## 六、值得关注

1. **[InternVLA-A1 + VLAC 双发布](https://github.com/InternRobotics/InternVLA-A-series) + [InternVLA-Critic](https://github.com/InternRobotics/VLAC)**：上海 AI Lab 同时押注"统一 VLA"与"VLA-Critic 真实世界 RL"，前者补齐生成/理解/动作的端到端闭环，后者用 Critic 模型让 VLA 在真机上可持续自我改进——若任一方向跑通，将重塑通用操作策略的训练范式。

2. **SoftBank 收购 Robotics and AI Institute**：[新闻](https://www.therobotreport.com/softbank-agrees-to-acquire-robotics-and-ai-institute/) 不仅是商业事件，更意味着 Physical AI 顶级研究资源开始向单一大厂集中，可能影响后续开源节奏与人才流向，建议持续观察其成果转化路径。

3. **IEEE Spectrum 两篇安全文章（[Digit 5](https://spectrum.ieee.org/humanoid-robot-safety) + [网络安全](https://spectrum.ieee.org/physical-ai-robot-cybersecurity-vicone)）**：将"人形机器人能否进厂"的讨论从运动性能拉回到功能安全 + 网络安全层面，预示着 ISO 10218/ISO/TS 15066 之外的 Physical AI 安全标准可能在 2026 年加速成形，是产业政策与合规方向的重要风向标。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*