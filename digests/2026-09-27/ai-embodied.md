# 具身智能开源动态日报 2026-09-27

> 数据来源: GitHub Search API (129 仓库) | ArXiv cs.RO (0 篇论文) | RSS 新闻 (38 条) | 生成时间: 2026-09-27 03:05 UTC

---

# 具身智能开源动态日报

**日期：2025 年** ｜ **数据来源**：IEEE Spectrum、The Robot Report、ArXiv cs.RO、GitHub Trending

---

## 一、今日速览

今日具身智能领域呈现出"商业化加速 + 架构多元化"的鲜明特征：Amazon 宣布投资 1 亿美元在印第安纳州新建制造工厂，Agility Robotics 正在探索 Digit 之外的新形态——轮式机器人；同时，仓库动态显示开发者正从"一个通用大脑"转向"模块化智能"与"端到端 VLA"的并行路径。Isaac Lab 仍稳居 8k+ Star 首位，Newton 物理引擎、tau-0-VLA 等新项目持续走红，反映 GPU 加速仿真与世界模型引导的 VLA 推理正在成为新热点。今日 ArXiv cs.RO 暂无新论文提交，可能与会议季窗口期有关，研究节奏转向代码与工程实现层。

---

## 二、行业脉搏

| # | 动态 | 意义 |
|---|------|------|
| 1 | **Amazon 投资 1 亿美元在印第安纳州新建制造工厂** | 进一步扩张仓储自动化与履约机器人的本土化产能，体现大型电商对具身硬件供应链的长期押注。<br>🔗 https://www.therobotreport.com/amazon-to-invest-100m-in-new-indiana-manufacturing-facility/ |
| 2 | **Agility Robotics 探索 Digit 之外的轮式机器人形态** | 人形机器人头部厂商主动打破"双足唯一"的范式，承认在工厂、仓储等结构化环境中轮式底盘 + 操作臂的混合形态更易落地。<br>🔗 https://www.therobotreport.com/agility-robotics-maker-of-digit-humanoid-exploring-wheeled-robots/ |
| 3 | **从 14 城到 1.5 万城：Robotaxi 规模化路径深度剖析** | 揭示 L4 自动驾驶商业化所需的算力、车队运营、监管与高精地图成本结构，为具身智能"大规模部署"提供参照。<br>🔗 https://www.therobotreport.com/from-14-cities-to-15000-what-it-will-take-to-scale-robotaxis/ |
| 4 | **General Robotics 押注"模块化智能"而非单一机器人大脑** | 区别于 end-to-end 路线，主张把感知/决策/控制解耦，与 VLA 主流形成对照；预示 2025 年架构之争白热化。<br>🔗 https://www.therobotreport.com/general-robotics-is-betting-on-modular-intelligence-not-one-robot-brain/ |
| 5 | **Barbara Mazzolai 倡议构建"可持续机器人学"新领域** | 呼吁面向环境监测、植物根茎探索等场景研发软体/仿生机器人，把"可持续性"上升为一级学科命题。<br>🔗 https://spectrum.ieee.org/sustainability-robotics-barbara-mazzolai |

---

## 三、研究前沿

> **📌 说明**：今日 ArXiv cs.RO 暂未抓取到新提交论文。可能原因为会议季窗口期（CoRL / NeurIPS 投稿截止前后）或抓取时点偏差。建议结合近 7 日缓存与会议 accepted papers（如 CoRL 2026 HuRo、ICML 2026 RoboTwin 2.0、NeurIPS 2026 VLA-Corrector）进行交叉跟踪，详见"重点项目"中的代码仓库。

---

## 四、重点项目

### 🦾 机器人学习与控制（模仿学习 / 强化学习）

1. **OpenPipe/ART** ⭐10,778 — GRPO 多步智能体强化学习训练框架，支持 Qwen3.6、GPT-OSS、Llama 等模型微调，把 RL 流水线推向生产级。<br>🔗 https://github.com/OpenPipe/ART
2. **RoboVerseOrg/RoboVerse** ⭐1,863 — 面向可扩展、可泛化机器人学习的统一平台、数据集与基准。<br>🔗 https://github.com/RoboVerseOrg/RoboVerse
3. **mujocolab/mjlab** ⭐3,134 — 基于 MuJoCo-Warp 重新实现的 Isaac Lab API，主打 GPU 加速 RL 训练，大幅提升吞吐量。<br>🔗 https://github.com/mujocolab/mjlab
4. **Motphys/UniLab** ⭐943 — 异构架构下的机器人 RL 框架，突破"GPU 唯一"范式，对边缘 / 嵌入式部署尤为关键。<br>🔗 https://github.com/Motphys/UniLab
5. **iit-DLSLab/Quadruped-PyMPC** ⭐522 — 四足机器人模型预测控制实现（acados 梯度法 + jax 采样法），单机 Python 可调。<br>🔗 https://github.com/iit-DLSLab/Quadruped-PyMPC

### 🤖 仿真与框架（MuJoCo / Isaac / Gazebo / ROS）

6. **isaac-sim/IsaacLab** ⭐8,229 — 统一机器人学习框架 + 多物理仿真 + 多渲染器后端，事实上的行业标准训练场。<br>🔗 https://github.com/isaac-sim/IsaacLab
7. **google-deepmind/mujoco** ⭐15,347 — 通用接触动力学仿真器 MuJoCo，机器人学习事实底座。<br>🔗 https://github.com/google-deepmind/mujoco
8. **newton-physics/newton** ⭐5,691 — 基于 NVIDIA Warp 的开源 GPU 加速物理引擎，面向机器人学家与仿真研究者。<br>🔗 https://github.com/newton-physics/newton
9. **gazebosim/gz-sim** ⭐1,518 — Gazebo 最新版开源机器人仿真器，与 ROS 2 深度集成。<br>🔗 https://github.com/gazebosim/gz-sim
10. **ros-navigation/navigation2** ⭐4,748 — ROS 2 官方导航框架与系统。<br>🔗 https://github.com/ros-navigation/navigation2

### 🧠 VLA 与具身基础模型

11. **FluxVLA/FluxVLA** ⭐714 — 一体化 VLA 工程平台，覆盖从数据采集到真机部署的全链路。<br>🔗 https://github.com/FluxVLA/FluxVLA
12. **sii-research/tau-0-vla** ⭐628 — τ0-VLA 官方实现：以世界模型引导的测试时计算为核心的分层机器人基础模型。<br>🔗 https://github.com/sii-research/tau-0-vla
13. **ZJU-OmniAI/vla-corrector** ⭐84 — *NeurIPS 2026*：轻量级"检测-纠错"推理，让 VLA 具备自适应动作时域。<br>🔗 https://github.com/ZJU-OmniAI/vla-corrector
14. **OpenBMB/SimpleMemVLA** ⭐76 — 用时间戳视觉历史 + 精确流式推理，为 VLA 引入"原生视频记忆"，解决长时序操作难题。<br>🔗 https://github.com/OpenBMB/SimpleMemVLA
15. **dexmal/opendm** ⭐2,173 — 面向通用具身智能的开放世界基础模型。<br>🔗 https://github.com/dexmal/opendm

### 🔧 硬件与驱动

16. **stack-of-tasks/pinocchio** ⭐3,760 — 刚体动力学及其解析导数的高性能实现，是 legged / manipulation 控制的标配底层。<br>🔗 https://github.com/stack-of-tasks/pinocchio
17. **ArduPilot/ardupilot** ⭐15,944 — ArduPlane / ArduCopter / ArduRover / ArduSub 飞行 / 地面 / 水下机器人开源飞控生态。<br>🔗 https://github.com/ArduPilot/ardupilot
18. **PX4/PX4-Autopilot** ⭐12,702 — PX4 自动驾驶仪软件，覆盖无人机全栈。<br>🔗 https://github.com/PX4/PX4-Autopilot
19. **enactic/openarm** ⭐3,514 — 完全开源的人形机械臂，专为接触密集型物理 AI 任务设计。<br>🔗 https://github.com/enactic/openarm

### 📊 数据集与基准

20. **StanfordVL/BEHAVIOR-1K** ⭐1,724 — 加速具身 AI 研究的标准化基准平台。<br>🔗 https://github.com/StanfordVL/BEHAVIOR-1K
21. **RoboTwin-Platform/RoboTwin** ⭐2,914 — *ICML 2026*：双臂同步仿真到真机的统一基准。<br>🔗 https://github.com/RoboTwin-Platform/RoboTwin
22. **Hebbian-Robotics/hflow** ⭐282 — 面向机器人团队的 AI 数据质量校验 SDK，把数据治理带入 VLA 训练闭环。<br>🔗 https://github.com/Hebbian-Robotics/hflow
23. **worldbench/awesome-3d-4d-world-models** ⭐990 — *TPAMI 2026* 3D/4D 世界模型综述项目。<br>🔗 https://github.com/worldbench/awesome-3d-4d-world-models

---

## 五、生态趋势信号

从今日素材可观察到三条清晰的演进信号：

**(1) 形态多样化**：Agility 转向轮式、CNH 押注农业机器人、OpenARM 等开源硬件涌现，说明产业已不再迷信"通用人形机器人"单一解，而是按"形态适配任务"分化。

**(2) VLA 走向工业化**：VLA-Corrector 解决动作时域、SimpleMemVLA 解决长时序、tau-0 用世界模型做测试时计算、EVA-Client/FluxVLA 搭建部署框架——基础模型研究正快速被工程化"封装"，从论文走向产线。

**(3) 仿真-数据-评测一体化**：Newton、mjlab、RoboVerse、RoboTwin、inspect-robots 在同一时间窗口齐头并进，反映"高效 GPU 仿真 + 大规模合成数据 + 可复现评测"已成为 VLA 闭环的基础设施三件套。

---

## 六、值得关注

1. **General Robotics 的"模块化智能"路线**：与 end-to-end VLA 形成正面对照，若其模块化架构在工业场景验证成功，将重塑 2025–2026 年具身基础模型的研发路线图。<br>🔗 https://www.therobotreport.com/general-robotics-is-betting-on-modular-intelligence-not-one-robot-brain/

2. **τ0-VLA 与 SimpleMemVLA**：前者把"世界模型 + 测试时计算"引入 VLA 推理阶段，后者为 VLA 引入"原生视频记忆"，二者若结合，有望突破长时序灵巧操作瓶颈，是 CoRL/NeurIPS 周期值得紧盯的工作。<br>🔗 https://github.com/sii-research/tau-0-vla ｜ https://github.com/OpenBMB/SimpleMemVLA

3. **Newton 物理引擎 × Isaac Lab 兼容层**：Newton 借助 NVIDIA Warp 提供 GPU 加速，结合 Isaac Lab 的 API 习惯，可能在 2026 年成为新一批高吞吐量 RL 训练的事实标准，建议提前在自有流水线中评估接入成本。<br>🔗 https://github.com/newton-physics/newton ｜ https://github.com/isaac-sim/IsaacLab

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*