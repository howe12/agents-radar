# 具身智能开源动态日报 2026-10-05

> 数据来源: GitHub Search API (129 仓库) | ArXiv cs.RO (0 篇论文) | RSS 新闻 (44 条) | 生成时间: 2026-10-05 03:31 UTC

---

# 具身智能开源动态日报

**日期：2025 年 · 第 X 期**

---

## 1. 今日速览

今日具身智能领域动态聚焦"Physical AI"落地：Boston Dynamics 为 Atlas 引入可能超越拟人手设计的新灵巧手，The Robot Report 连发两篇深度报道呼吁关注 Physical AI 的物理安全与专利战略；开源侧，NVIDIA IsaacLab 持续领跑机器人学习框架，黑森林实验室（Black Forest Labs）推出开源 7B 世界动作模型 **FLUX 3 Action**，与 Runway 同期发布的 **Praxis-1** 共同预示世界动作模型（World Action Model）成为 VLA 之后的新前沿。今日无 cs.RO 新论文，但仓库端涌现出大量 VLA 工程化、人形足球（RoboNaldo）、肌肉骨骼仿真（MuscleMimic）等高质量新作。

---

## 2. 行业脉搏

- **Atlas 灵巧手迭代** —— Boston Dynamics 为 Atlas 引入非拟人化设计的灵巧手，IEEE Spectrum 报道其抓取鲁棒性可能优于传统仿人手方案，反映业界对"类人 ≠ 最优"这一工程哲学的反思。
  https://spectrum.ieee.org/robust-robot-hand

- **Physical AI 的专利战号角** —— The Robot Report 评论指出，下一轮 Physical AI 竞争的主战场将在专利局，知识产权布局将成为中美厂商的关键护城河。
  https://www.therobotreport.com/physical-ai-race-will-be-won-in-patent-office/

- **Omron 新一代 LD 移动机器人** —— 老牌移动机器人厂商 Omron 公布 LD 系列升级，强化仓储物流场景下的自主导航与协作能力，体现 AMR 厂商向"软硬一体 + 智能调度"的纵深推进。
  https://www.therobotreport.com/inside-omrons-next-generation-ld-mobile-robots/

- **物理 AI 与物理安全** —— The Robot Report 探讨机器人与 Physical AI 如何负责任地应对关键物理安全挑战，为行业落地提供治理框架思考。
  https://www.therobotreport.com/how-robotics-physical-ai-can-responsibly-tackle-key-physical-security-challenges/

- **Runway 发布 Praxis-1 世界动作模型** —— Runway 推出面向机器人的 Praxis-1 World Action Model，与黑森林实验室的 FLUX 3 Action 同期登场，标志着"世界模型 + 动作生成"成为新的产业押注方向。
  https://www.therobotreport.com/runway-introduces-praxis-1-world-action-model-robotics/

---

## 3. 研究前沿

> 📭 今日 ArXiv cs.RO 暂无新论文纳入。以下为仓库与新闻侧反映出的研究热点（视为本期"研究风向"）：

- **世界动作模型（World Action Model）兴起** —— Runway Praxis-1 与黑森林实验室 FLUX 3 Action 同步问世，将"视频生成式世界模型"扩展至"动作预测"，为机器人策略学习提供新的预训练范式。

- **人形足球全身控制** —— OpenDriveLab 的 **RoboNaldo**（CoRL 2026 Oral）实现高精度、稳定的人形机器人足球射门，将全身 VLA 推向高动态任务。
  https://github.com/OpenDriveLab/RoboNaldo

- **肌肉骨骼全身运动学习** —— amathislab 的 **MuscleMimic** 推动"以肌肉为执行器"的可扩展运动学习，向生物真实性更进一步。
  https://github.com/amathislab/musclemimic

- **人形全身视觉-语言-动作框架** —— Open-X-Humanoid 的 **HEX** 提出面向全尺寸人形机器人的全身 VLA 框架，与 RoboNaldo 共同构成人形具身智能的两条主线（全身控制 vs. 全身 VLA）。
  https://github.com/Open-X-Humanoid/HEX

- **边端 VLA 实时推理** —— 北大 PKU-SEC-Lab 的 **EagleVLA-Edge**（CoRL'26 Spotlight，原 Jetson-PI-Edge）针对 Jetson 平台实现 VLA 异步前视推理，是 VLA 走向"板上实时"的关键工程突破。
  https://github.com/PKU-SEC-Lab/EagleVLA-Edge

---

## 4. 重点项目

### 🦾 机器人学习与控制（模仿学习 / 强化学习 / 策略学习）

- **isaac-sim/IsaacLab** ⭐8,281  
  NVIDIA 官方统一机器人学习框架，多物理仿真 + 多渲染器后端，已成为机器人 RL/IL 研究的事实标准。  
  https://github.com/isaac-sim/IsaacLab

- **enactic/openarm** ⭐3,568  
  完全开源的人形机械臂，面向接触丰富场景的物理 AI 研究与部署。  
  https://github.com/enactic/openarm

- **RLinf/RLinf** ⭐5,435  
  面向具身智能与 Agentic AI 的强化学习基础设施，覆盖从 sim 到 real 的训练管线。  
  https://github.com/RLinf/RLinf

- **Microsoft/MoCapAct** ⭐224  
  仿真人形控制的多任务 MoCap 数据集，为模仿学习提供大规模人类动作参考。  
  https://github.com/microsoft/MoCapAct

- **Hebbian-Robotics/hflow** ⭐286  
  面向机器人团队的 AI 训练数据质量验证 SDK，解决具身数据"脏数据"痛点。  
  https://github.com/Hebbian-Robotics/hflow

### 🤖 仿真与框架（MuJoCo / Isaac / Gazebo / ROS）

- **google-deepmind/mujoco** ⭐15,465  
  DeepMind 维护的高性能接触物理仿真器，机器人研究的基石。  
  https://github.com/google-deepmind/mujoco

- **newton-physics/newton** ⭐5,719  
  基于 NVIDIA Warp 的开源 GPU 加速物理仿真引擎，专为机器人学家打造。  
  https://github.com/newton-physics/newton

- **mujocolab/mjlab** ⭐3,167  
  提供 Isaac Lab API、由 MuJoCo-Warp 驱动的 RL 与机器人研究框架。  
  https://github.com/mujocolab/mjlab

- **ros-navigation/navigation2** ⭐4,763  
  ROS 2 官方导航框架，移动机器人栈的"标配"。  
  https://github.com/ros-navigation/navigation2

- **gazebosim/gz-sim** ⭐1,529  
  Gazebo 最新版本，开源机器人仿真器的事实标准之一。  
  https://github.com/gazebosim/gz-sim

- **cyberbotics/webots** ⭐4,692  
  跨平台开源机器人仿真器，机器人教育与研究常用工具。  
  https://github.com/cyberbotics/webots

- **omnilink-tech/omnisim** ⭐186  
  面向编程智能体的开源机器人仿真器：HTTP/JSON + MCP 控制、Newton 物理、wgpu 渲染、ROS 2 集成、可复现基准。  
  https://github.com/omnilink-tech/omnisim

### 🧠 VLA 与基础模型（视觉-语言-动作 / 具身基础模型）

- **FluxVLA/FluxVLA** ⭐722  
  一站式 VLA 工程平台，覆盖从数据到真机部署的全链路。  
  https://github.com/FluxVLA/FluxVLA

- **allenai/vla-evaluation-harness** ⭐636  
  通用 VLA 评测框架，可对任意 VLA 模型在任意机器人仿真基准上进行测试。  
  https://github.com/allenai/vla-evaluation-harness

- **syswonder/robonix** ⭐366  
  面向机器人的智能体操作系统（Agentic OS for Robots）。  
  https://github.com/syswonder/robonix

- **TensorAuto/OpenTau** ⭐225  
  Tensor 面向真机机器人的 PyTorch VLA 训练基础设施。  
  https://github.com/TensorAuto/OpenTau

- **black-forest-labs/flux-action** ⭐131  
  黑森林实验室开源 7B 世界动作模型，可在 DROID、SO-101 等数据集上训练/微调动作预测。  
  https://github.com/black-forest-labs/flux-action

- **ucla-mobility/TIC-VLA** ⭐165  
  ICML 2026 论文 Think-in-Control (TIC)-VLA，面向机器人导航的 VLA 方案。  
  https://github.com/ucla-mobility/TIC-VLA

- **PKU-SEC-Lab/EagleVLA-Edge** ⭐48  
  CoRL'26 Spotlight，VLA 在 Jetson 上的板上实时推理引擎。  
  https://github.com/PKU-SEC-Lab/EagleVLA-Edge

- **Open-X-Humanoid/HEX** ⭐336  
  全尺寸人形机器人的全身 VLA 框架。  
  https://github.com/Open-X-Humanoid/HEX

### 🔧 硬件与驱动

- **ArduPilot/ardupilot** ⭐15,982  
  无人机/无人车/无人艇飞控开源标杆，覆盖 ArduPlane/Copter/Rover/Sub。  
  https://github.com/ArduPilot/ardupilot

- **PX4/PX4-Autopilot** ⭐12,740  
  业界主流开源飞控，与 ROS 2 深度集成。  
  https://github.com/PX4/PX4-Autopilot

- **commaai/openpilot** ⭐63,805  
  300+ 车型适配的开源驾驶辅助操作系统，"机器人操作系统"理念在乘用车的落地。  
  https://github.com/commaai/openpilot

- **ROBOTIS-GIT/open_manipulator** ⭐668  
  开源机械臂，软硬件一体的 AI Manipulator 平台。  
  https://github.com/ROBOTIS-GIT/open_manipulator

- **murobotics-ai/handumi-sw** ⭐75  
  开源 HandUMI 软件，支持双手同步数据采集与重定向到任意双臂机器人。  
  https://github.com/murobotics-ai/handumi-sw

- **XenseRobotics-AI/lerobot-xense** ⭐20  
  LeRobot v5.1 分支，集成 Flexiv Rizon4、Elite CS66、ARX5 与触觉夹爪，支持 VR/SpaceMouse/手柄遥操。  
  https://github.com/XenseRobotics-AI/lerobot-xense

### 📊 数据集与基准

- **simpler-env/SimplerEnv** ⭐1,174  
  CoRL 2024 接收，用于评估与复现真实机器人操作策略（RT-1、Octo 等）的仿真环境。  
  https://github.com/simpler-env/SimplerEnv

- **StanfordVL/BEHAVIOR-1K** ⭐1,735  
  加速具身 AI 研究的标准化任务平台，1000 个日常家务任务。  
  https://github.com/StanfordVL/BEHAVIOR-1K

- **AccelerationConsortium/Matterix** ⭐62  
  面向机器人辅助化学实验室自动化的数字孪生平台。  
  https://github.com/AccelerationConsortium/Matterix

- **robocurve/inspect-robots** ⭐638  
  面向 Physical AI 的开源评测工具：任意 LLM/VLA × 任意机械臂/人形 × 任意真机/仿真基准。  
  https://github.com/robocurve/inspect-robots

- **Vottivott/microduck-playground** ⭐62  
  可复现的 Microduck RL 实验、策略与仿真资产。  
  https://github.com/Vottivott/microduck-playground

- **Calibra-Robotics/Calibra** ⭐34  
  机器人模仿学习的数据集可观测性与 coreset 选择工具。  
  https://github.com/Calibra-Robotics/Calibra

---

## 5. 生态趋势信号

**World Action Model（世界动作模型）正取代纯 VLA 成为新焦点**：Runway Praxis-1 与黑森林实验室 FLUX 3 Action 同期问世，配合 EagleVLA-Edge 等边端推理项目，意味着产业已从"视觉语言动作三模态对齐"走向"视频/世界模型驱动的动作预测"路径。**人形机器人向高动态任务延伸**：CoRL 2026 同期诞生 RoboNaldo（足球射门）与 HEX（全身 VLA），叠加开放硬件 openarm、肌肉骨骼 MuscleMimic，可见人形具身智能正从"行走/抓取"迈向"高动态 + 全身协同"。**仿真基础设施加速分化**：Newton、MuJoCo-Warp 系（mjlab、musclemimic）逐步挑战 Isaac Lab 的算力垄断；omnisim 等新兴框架开始强调 MCP 控制与可复现基准。**VLA 工程化进入"评测 + 边端 + 数据治理"三件套时代**：vla-evaluation-harness、inspect-robots、hflow 等工具让 VLA 从"论文指标"走向"真机可靠性"。

---

## 6. 值得关注

- **🥇 黑森林实验室 FLUX 3 Action** —— 真正开源（Open Weights）的 7B 世界动作模型，可直接训练/微调 DROID/SO-101 等数据集，是 VLA 之外"视频→动作"路径的关键开源基座。  
  https://github.com/black-forest-labs/flux-action

- **🥈 EagleVLA-Edge（CoRL'26 Spotlight）** —— VLA 在 Jetson 上的板上实时推理方案，是 VLA 从云端走向真机部署的核心瓶颈突破。  
  https://github.com/PKU-SEC-Lab/EagleVLA-Edge

- **🥉 RoboNaldo（CoRL 2026 Oral）+ HEX** —— 两者分别代表"高动态全身控制"与"全身 VLA"两条人形路线，是观察人形机器人从运动走向操作+竞技的关键样本。  
  https://github.com/OpenDriveLab/RoboNaldo  ·  https://github.com/Open-X-Humanoid/HEX

---

*📮 提示：cs.RO 论文数据为空属正常现象（每日抓取窗口差异），可结合 weekly 列表补充阅读。*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*