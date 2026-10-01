# 具身智能开源动态日报 2026-10-01

> 数据来源: GitHub Search API (130 仓库) | ArXiv cs.RO (0 篇论文) | RSS 新闻 (35 条) | 生成时间: 2026-10-01 03:34 UTC

---

# 具身智能开源动态日报

**报告日期：2025-XX-XX · 监测范围：行业新闻 × ArXiv cs.RO × GitHub 活跃仓库**

---

## 一、今日速览

今日具身智能生态呈现"硬件平民化 + 仿真工业化 + VLA 工程化"三重并行趋势。行业侧，Raspberry Pi 驱动的家用人形机器人 **Flourish One** 与 SoftBank × ASI 的建筑自主车队合作，标志着人形机器人从实验室走向 B/C 端真实场景；Innodata 开放动捕实验室则呼应了 sim-to-real 训练数据短缺这一长期痛点。开源侧，**newton-physics/newton**（基于 NVIDIA Warp 的 GPU 加速物理引擎）持续活跃，与 **IsaacLab、MuJoCo-Warp (mjlab)**、**JoltPhysics** 共同构成下一代机器人仿真的多元栈。VLA 工程化方向出现多个新工具：**FluxVLA、OpenTau、VLA-Corrector (NeurIPS'26)** 覆盖数据—训练—推理—部署全链路。值得注意的是，今日 **cs.RO 论文为 0**，学术研究侧进入短暂的消化期，但工程与产业节奏明显加速。

---

## 二、行业脉搏

| # | 动态 | 意义 |
|---|------|------|
| 1 | **[Arrowfly 推出 "AI for Engineers" 平台](https://www.therobotreport.com/robot-report-parent-arrowfly-launches-ai-for-engineers-platform-events-engineers-navigating-ai/)** | The Robot Report 母公司从行业媒体扩展为 AI 工程社区，机器人从业者的 AI 培训与活动资源将更集中。 |
| 2 | **[Innodata 开设动捕实验室赋能人形机器人](https://www.therobotreport.com/innodata-opens-motion-capture-lab-help-humanoids-move-more-like-people/)** | 数据基础设施层的关键补位——高质量人体/类人动作为模仿学习与 RL 策略提供稀缺数据源。 |
| 3 | **[ASI × SoftBank 合作部署建筑自主车队](https://www.therobotreport.com/tackling-construction-labor-shortages-asi-softbank-partner-autonomous-fleets/)** | 自主机器人率先突破建筑劳动力短缺的重资产场景，B 端商业化路径进一步验证。 |
| 4 | **[Flourish One：树莓派驱动的家用人形机器人](https://www.therobotreport.com/meet-flourish-one-raspberry-pi-powered-humanoid-built-busy-parents/)** | 极低硬件门槛（树莓派）的人形机器人走向 C 端家庭，与社区开源硬件生态形成强协同。 |
| 5 | **[ForceN 将在 RoboBusiness 2026 开设力矩传感速成课](https://www.therobotreport.com/forcen-gives-crash-course-force-torque-sensing-humanoids-robobusiness-2026/)** | 力/力矩传感是人形机器人接触富操作（contact-rich）的核心瓶颈，产业教育开始系统化。 |

---

## 三、研究前沿

> 📭 **今日 cs.RO 无新论文**（0 篇）。可能与会议投稿周期、节假日或采样窗口相关；建议关注 [ArXiv cs.RO 列表](https://arxiv.org/list/cs.RO/recent) 与 [RSS 2025 / CoRL 2025 / NeurIPS 2025] 接收名单以观察下一波研究动向。

---

## 四、重点项目

### 🦾 机器人学习与控制（模仿学习 / 强化学习 / 策略学习）

- **[RLinf/RLinf](https://github.com/RLinf/RLinf)** ⭐ 5,422 · Python
  面向具身与 Agentic AI 的强化学习基础设施（强化学习基建），为大规模机器人 RL 训练提供统一调度框架。

- **[RealXiaoze/humanoid-motion-intelligence](https://github.com/RealXiaoze/humanoid-motion-intelligence)** ⭐ 609
  人形机器人运动智能论文/开源项目/产业与求职知识库，是中文社区系统性梳理 humanoid 研究的入口。

- **[DexForce/EmbodiChain](https://github.com/DexForce/EmbodiChain)** ⭐ 228 · Python
  端到端、GPU 加速、模块化的通用具身智能平台，适合搭建从仿真到真实部署的完整训练链。

- **[omnilink-tech/omnisim](https://github.com/omnilink-tech/omnisim)** ⭐ 186 · Python
  面向编码 Agent 的开源机器人仿真器（HTTP/JSON + MCP 控制），将 LLM Agent 与物理仿真打通。

- **[phi-monster/Galahad](https://github.com/phi-monster/Galahad)** ⭐ 149 · Python
  VLA 指令跟随的反事实评测电池（counterfactual battery）：换一个词、保持场景、记录抓取对象，专用于诊断指令—行动因果对齐。

- **[ZJU-OmniAI/vla-corrector](https://github.com/ZJU-OmniAI/vla-corrector)** ⭐ 86 · Python · **NeurIPS 2026**
  轻量级"检测—修正"推理框架，自适应调整 VLA 动作预测步长，提升长 horizon 任务稳定性。

- **[OpenDriveLab/RoboNaldo](https://github.com/OpenDriveLab/RoboNaldo)** ⭐ 54 · Python · **CoRL 2026 Oral**
  人形机器人足球射门：精确、稳定、有力的全身控制方案，展示了高动态接触任务的可行性。

- **[lok-i/vibe](https://github.com/lok-i/vibe)** ⭐ 44 · Python
  人形机器人全身跟踪器（whole-body tracker）的感知控制后训练方案，专注 perceptive control。

- **[Hebbian-Robotics/hflow](https://github.com/Hebbian-Robotics/hflow)** ⭐ 284 · Python
  数据质量 SDK：帮助机器人团队验证用于模型训练的演示数据质量——数据治理层的关键工具。

### 🤖 仿真与框架（MuJoCo / Isaac / Gazebo / ROS）

- **[google-deepmind/mujoco](https://github.com/google-deepmind/mujoco)** ⭐ 15,417 · C++
  通用物理仿真器（接触动力学），机器人研究的事实标准之一，社区与生态最成熟。

- **[cyberbotics/webots](https://github.com/cyberbotics/webots)** ⭐ 4,679 · C++
  开源机器人仿真器，长期作为教育与中等规模研究的首选平台。

- **[isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab)** ⭐ 8,264 · Python
  NVIDIA 官方机器人学习统一框架，支持多物理后端与渲染，是当前大规模 GPU 仿真训练的主流。

- **[newton-physics/newton](https://github.com/newton-physics/newton)** ⭐ 5,711 · Python
  基于 NVIDIA Warp 的 GPU 加速物理引擎，专为机器人学家与仿真研究者设计的高吞吐新选项。

- **[mujocolab/mjlab](https://github.com/mujocolab/mjlab)** ⭐ 3,158 · Python
  以 Isaac Lab API 风格封装 MuJoCo-Warp，为 RL 与机器人研究提供熟悉的高吞吐接口。

- **[jrouwe/JoltPhysics](https://github.com/jrouwe/JoltPhysics)** ⭐ 11,637 · C++
  多核友好的刚体物理与碰撞检测库，已落地《地平线 西之绝境》《死亡搁浅 2》——游戏级精度可借鉴用于机器人。

- **[st-tech/ppf-contact-solver](https://github.com/st-tech/ppf-contact-solver)** ⭐ 4,513 · Python
  统一处理壳/固体/杆/刚体/沙等多种介质的接触求解器，物理保真度的边界扩展工具。

- **[gazebosim/gz-sim](https://github.com/gazebosim/gz-sim)** ⭐ 1,525 · C++
  新一代 Gazebo 仿真器，与 ROS 2 通过 `ros_gz` 深度集成。

- **[ros-navigation/navigation2](https://github.com/ros-navigation/navigation2)** ⭐ 4,758 · C++
  ROS 2 导航框架与系统，移动机器人行业标准。

- **[ProjectPhysX/FluidX3D](https://github.com/ProjectPhysX/FluidX3D)** ⭐ 5,297 · C++/OpenCL
  最快的格子 Boltzmann CFD 软件，覆盖所有 GPU/CPU，对水下/空中机器人的流体仿真有价值。

### 🧠 VLA 与基础模型

- **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** ⭐ 16,512 · Python
  为 Agent 提供 CAD 能力，把自然语言转化为可制造的机械结构，是具身制造的关键拼图。

- **[harvard-edge/cs249r_book](https://github.com/harvard-edge/cs249r_book)** ⭐ 28,758 · Python
  Harvard CS249r《机器学习系统》四卷本（基础、扩展、Agentic、物理 AI）——系统化理解 Physical AI 必读。

- **[PhyAgentOS/PhyAgentOS-core](https://github.com/PhyAgentOS/PhyAgentOS-core)** ⭐ 2,628 · Python
  递归自我改进（RSI）的物理 Agent 操作系统，让 Agent 通过工作流持续自进化。

- **[knightnemo/Awesome-World-Models](https://github.com/knightnemo/Awesome-World-Models)** ⭐ 3,458
  世界模型精选清单，作为研究人员与从业者的"一站式"参考。

- **[leofan90/Awesome-World-Models](https://github.com/leofan90/Awesome-World-Models)** ⭐ 2,029 · Python
  世界模型在通用视频生成、具身 AI 与自动驾驶的应用清单（含论文、代码、相关网站）。

- **[FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA)** ⭐ 720 · Python
  VLA 一体化工程平台：覆盖"数据—训练—真机部署"全链路，降低 VLA 落地门槛。

- **[allenai/vla-evaluation-harness](https://github.com/allenai/vla-evaluation-harness)** ⭐ 633 · Python
  统一评测任意 VLA 模型在任意机器人仿真基准上的表现，是 VLA 横向比较的基础设施。

- **[TensorAuto/OpenTau](https://github.com/TensorAuto/OpenTau)** ⭐ 224 · Python
  基于 PyTorch 的 VLA 训练基础设施，面向真实世界机器人部署。

- **[OpenMOSS/EasyWAM](https://github.com/OpenMOSS/EasyWAM)** ⭐ 390 · Python
  世界动作模型（World Action Models）训练—微调—评测的统一框架。

- **[syswonder/robonix](https://github.com/syswonder/robonix)** ⭐ 366 · Rust
  机器人的 Agentic 操作系统，强调高性能与可组合性。

### 🔧 硬件与驱动

- **[ArduPilot/ardupilot](https://github.com/ArduPilot/ardupilot)** ⭐ 15,963 · C++
  开源无人机/无人车飞控的事实标准（ArduPlane/Copter/Rover/Sub）。

- **[PX4/PX4-Autopilot](https://github.com/PX4/PX4-Autopilot)** ⭐ 12,718 · C++
  与 ArduPilot 并列的另一大开源飞控生态，学术研究更偏好 PX4。

- **[rerun-io/rerun](https://github.com/rerun-io/rerun)** ⭐ 11,522 · Rust
  多模态机器人数据的可视化、查询与流式传输工具——机器人"MLOps"的关键一环。

- **[kornia/kornia](https://github.com/kornia/kornia)** ⭐ 11,390 · Python
  面向空间 AI 的几何计算机视觉库，可微分视觉原语适合机器人感知栈。

- **[enactic/openarm](https://github.com/enactic/openarm)** ⭐ 3,550 · MDX
  完全开源的类人机械臂，专注接触富操作下的物理 AI 研究与部署。

- **[stack-of-tasks/pinocchio](https://github.com/stack-of-tasks/pinocchio)** ⭐ 3,772 · C++
  刚体动力学算法及其解析导数的快速灵活实现，机器人控制栈的"事实发动机"。

- **[autowarefoundation/autoware](https://github.com/autowarefoundation/autoware)** ⭐ 12,125 · Dockerfile
  全球领先的开源自动驾驶软件项目。

- **[introlab/rtabmap](https://github.com/introlab/rtabmap)** ⭐ 4,018 · C++
  RTAB-Map 库与独立应用，RGB-D SLAM 的经典方案。

- **[copper-project/copper-rs](https://github.com/copper-project/copper-rs)** ⭐ 1,506 · Rust
  机器人操作系统：可确定性构建、运行、重放整个机器人栈，强调可重现性。

- **[Source-Robotics/PAR6-Collaborative-Robot-Arm](https://github.com/Source-Robotics/PAR6-Collaborative-Robot-Arm)** ⭐ 36 · G-code
  面向教育与 R&D 的开源协作机械臂。

- **[JacopoPan/aerial-autonomy-stack](https://github.com/JacopoPan/aerial-autonomy-stack)** ⭐ 608 · C++
  PX4/ArduPilot 集群感知—决策—执行的统一栈（ROS 2 + YOLO + LiDAR + Jetson）。

- **[manankharwar/fusioncore](https://github.com/manankharwar/fusioncore)** ⭐ 368 · C++
  100 Hz 23 状态 UKF 户外定位，定位异常时可追溯到具体传感器——可观测、可调试的工程范本。

### 📊 数据集与基准

- **[StanfordVL/BEHAVIOR-1K](https://github.com/Stanford

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*