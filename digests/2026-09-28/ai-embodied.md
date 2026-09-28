# 具身智能开源动态日报 2026-09-28

> 数据来源: GitHub Search API (129 仓库) | ArXiv cs.RO (0 篇论文) | RSS 新闻 (39 条) | 生成时间: 2026-09-28 03:02 UTC

---

# 具身智能开源动态日报

> 覆盖日期：基于今日新闻、ArXiv cs.RO 与 GitHub Trending 数据综合生成

---

## 📌 今日速览

今日动态呈现"产业资本 + 架构范式 + 基础模型"三股力量交汇：Amazon 宣布在印第安纳州投资 1 亿美元建设新制造工厂，Agility Robotics 探索轮式人形机器人路线，General Robotics 押注模块化智能以替代单体大脑；GitHub 端具身智能生态继续井喷，**世界模型（World Models）** 与 **VLA 工程化平台** 成为最热主题，多个 Awesome World Models 资源榜冲入 Trending（最高 ⭐3.4k）；MuJoCo 生态持续扩张，NVIDIA Warp 加速的 Newton 物理引擎与 MuJoCo-Warp 驱动的 mjlab 同时活跃，反映**物理仿真向 GPU 原生迁移**的明确信号。cs.RO 今日无新增论文，建议读者结合昨日文献继续追踪。

---

## 🗞️ 行业脉搏

- **Amazon 投资 1 亿美元在印第安纳建新制造工厂** —— [The Robot Report](https://www.therobotreport.com/amazon-to-invest-100m-in-new-indiana-manufacturing-facility/)。机器人仓储赛道的资本加码将进一步巩固 Amazon Robotics 的供应链壁垒，并带动美国中部机器人制造岗位增长。

- **Agility Robotics 探索轮式机器人，人形路线或转向混合形态** —— [The Robot Report](https://www.therobotreport.com/agility-robotics-maker-of-digit-humanoid-exploring-wheeled-robots/)。Digit 团队开始评估轮式底盘，意味着行业开始正视"全人形并非最优解"，移动底盘+双臂的混合架构正成为务实路线。

- **General Robotics 押注模块化智能而非单体大脑** —— [The Robot Report](https://www.therobotreport.com/general-robotics-is-betting-on-modular-intelligence-not-one-robot-brain/)。呼应学术界对 VLA 与 World Model 解耦的讨论，"小模型分工"思路可能在工业落地中比"一个大 VLA"更易部署与诊断。

- **Barbara Mazzolai：构建机器人的新学科方向** —— [IEEE Spectrum](https://spectrum.ieee.org/sustainability-robotics-barbara-mazzolai)。IIT 软体机器人方向负责人倡导"可持续机器人学"，关注环境适应性与生物启发式设计，是少数关注长周期生态影响的声音。

- **阿西莫夫三定律不足以保障机器人与 AI 安全** —— [The Robot Report](https://www.therobotreport.com/asimovs-laws-are-not-enough-keep-robotics-ai-safe/)。学界呼吁超越虚构规则，建立可验证的、可工程化的安全标准，与今日多个"fail-closed"、"evidence-first"框架（rosclaw、workbench-mobile-home-robot）遥相呼应。

- **Robotaxi 从 14 城扩展到 15,000 城的挑战** —— [The Robot Report](https://www.therobotreport.com/from-14-cities-to-15000-what-it-will-take-to-scale-robotaxis/)。规模化部署的工程、成本与监管瓶颈被系统化拆解，对 ROS 导航栈与仿真基准社区有重要参考价值。

---

## 📚 研究前沿

> ⚠️ 今日 **cs.RO 无新增论文**。建议读者回溯近一周的趋势：
> - **World Models** 仍是最大热点，多个 Trending 仓库围绕 3D/4D 世界模型展开综述与代码库建设
> - **VLA 长程记忆** 成为新焦点（SimpleMemVLA、OpenBMB；NeurIPS 2026 工作 vla-corrector）
> - **反事实基准**（counterfactual eval）开始进入主流，Galahad、Phi-Monster 提出"改一句话、测一致性"的指令遵循评估

---

## 🔥 重点项目

### 🦾 机器人学习与控制（模仿学习 / 强化学习 / 策略学习）

- **[RLinf/RLinf](https://github.com/RLinf/RLinf)** ⭐5,381  
  Embodied 与 Agentic AI 的 RL 训练基础设施，关注大规模并行化与小模型路线。

- **[OpenPipe/ART](https://github.com/OpenPipe/ART)** ⭐10,779  
  Agent Reinforcement Trainer（GRPO），面向 Qwen3、GPT-OSS、Llama 等的多步真实任务训练工具。

- **[RoboVerseOrg/RoboVerse](https://github.com/RoboVerseOrg/RoboVerse)** ⭐1,865  
  统一平台、数据集与基准，目标是把通用机器人学习规模化与可泛化。

- **[phi-monster/Galahad](https://github.com/phi-monster/Galahad)** ⭐149  
  VLA 指令遵循的反事实评测电池：改一个词、保持场景，记录机械臂抓取对象变化，配套生成去混杂演示数据集。

- **[OpenBMB/SimpleMemVLA](https://github.com/OpenBMB/SimpleMemVLA)** ⭐76  
  为 VLA 引入"原生视频记忆"，用时间戳视觉历史 + 流式精确推理做长程机械臂操作。

- **[ZJU-OmniAI/vla-corrector](https://github.com/ZJU-OmniAI/vla-corrector)** ⭐84  
  NeurIPS 2026 工作；VLA 的轻量 Detect-and-Correct 推理机制，自适应动作视野。

- **[Hebbian-Robotics/hflow](https://github.com/Hebbian-Robotics/hflow)** ⭐283  
  面向机器人团队的"数据质量验证 SDK"，专治 VLA 训练数据脏、漏、对不齐三大顽疾。

- **[RobotControlStack/robot-control-stack](https://github.com/RobotControlStack/robot-control-stack)** ⭐162  
  去掉 ROS 的轻量级 sim-to-real 框架，原生支持 MuJoCo Gymnasium 包装器，覆盖 Franka/UR5e/xArm/SO101/YAM。

---

### 🤖 仿真与框架（MuJoCo / Isaac / Gazebo / ROS）

- **[google-deepmind/mujoco](https://github.com/google-deepmind/mujoco)** ⭐15,361  
  关节-接触物理仿真的事实标准，社区根基不可动摇。

- **[newton-physics/newton](https://github.com/newton-physics/newton)** ⭐5,695  
  NVIDIA Warp 加速的 GPU 物理引擎，专为机器人学家与仿真研究者设计，与 Isaac Sim 深度协同。

- **[mujocolab/mjlab](https://github.com/mujocolab/mjlab)** ⭐3,135  
  "Isaac Lab API + MuJoCo-Warp"组合拳，把 Isaac Lab 的接口与 MuJoCo 的速度合二为一。

- **[Motphys/UniLab](https://github.com/Motphys/UniLab)** ⭐944  
  异构架构下的机器人 RL 训练框架，挑战 GPU 单极化范式。

- **[omnilink-tech/omnisim](https://github.com/omnilink-tech/omnisim)** ⭐185  
  为编码代理设计的开源机器人仿真器：HTTP/JSON + MCP 控制、Newton 物理、wgpu 渲染、ROS 2 接口。

- **[dora-rs/dora](https://github.com/dora-rs/dora)** ⭐3,982  
  数据流驱动的机器人中间件，把 AI 应用建模为 DAG，低延迟、可组合、分布式。

- **[copper-project/copper-rs](https://github.com/copper-project/copper-rs)** ⭐1,505  
  "机器人操作系统"——可确定性构建、运行、重放整个机器人行为链。

- **[ros-navigation/navigation2](https://github.com/ros-navigation/navigation2)** ⭐4,750  
  ROS 2 导航的事实标准栈，移动机器人社区基石。

---

### 🧠 VLA 与基础模型（视觉-语言-动作 / 具身基础模型）

- **[harvard-edge/cs249r_book](https://github.com/harvard-edge/cs249r_book)** ⭐28,602  
  Harvard CS249r《机器学习系统》教材 I–IV 卷，首次系统覆盖 Agentic AI 与 Physical AI。

- **[dexmal/opendm](https://github.com/dexmal/opendm)** ⭐2,177  
  面向通用具身智能的开放世界基础模型。

- **[PhyAgentOS/PhyAgentOS-core](https://github.com/PhyAgentOS/PhyAgentOS-core)** ⭐2,562  
  递归自我改进的物理代理操作系统，借助 Agentic Workflow 让机器人 agent 自我升级。

- **[FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA)** ⭐715  
  VLA 全流程工程平台：从数据采集到真实机器人部署一站式打通。

- **[syswonder/robonix](https://github.com/syswonder/robonix)** ⭐366  
  Rust 写的"机器人 Agentic 操作系统"。

- **[Noietch/EVA-CLIENT](https://github.com/Noietch/EVA-CLIENT)** ⭐285  
  真实机器人的统一部署、评测与数据采集框架。

- **[datawhalechina/every-embodied](https://github.com/datawhalechina/every-embodied)** ⭐3,862  
  仅需 Python 基础从 0 构建自己的具身智能机器人，深入 VLA/OpenVLA/SmolVLA/Pi0。

- **[sou350121/VLA-Handbook](https://github.com/sou350121/VLA-Handbook)** ⭐656  
  全中文、实战导向的 VLA 学习/面试手册，聚焦机器人特有挑战。

- **[knightnemo/Awesome-World-Models](https://github.com/knightnemo/Awesome-World-Models)** ⭐3,448  
  世界模型最全资源榜，研究者/从业者/爱好者的"一站式"门户。

---

### 🔧 硬件与驱动

- **[enactic/openarm](https://github.com/enactic/openarm)** ⭐3,517  
  全开源人形臂，专为接触丰富的物理 AI 研究与部署打造。

- **[Source-Robotics/PAR6-Collaborative-Robot-Arm](https://github.com/Source-Robotics/PAR6-Collaborative-Robot-Arm)** ⭐36  
  面向教育、R&D 与 AI 的开源协作机器人臂。

- **[linorobot/linorobot2](https://github.com/linorobot/linorobot2)** ⭐1,030  
  开源自主移动机器人套件（2WD/4WD/Mecanum），ROS 2 原生支持。

- **[ArduPilot/ardupilot](https://github.com/ArduPilot/ardupilot)** ⭐15,951  
  无人机自动驾驶栈的行业事实标准（ArduPlane/Copter/Rover/Sub）。

---

### 📊 数据集与基准

- **[RoboTwin-Platform/RoboTwin](https://github.com/RoboTwin-Platform/RoboTwin)** ⭐2,916  
  ICML 2026 双臂机器人 benchmark，2.0 官方代码库。

- **[StanfordVL/BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K)** ⭐1,727  
  加速具身 AI 研究的开放平台与 1000 个日常任务基准。

- **[robocurve/inspect-robots](https://github.com/robocurve/inspect-robots)** ⭐611  
  物理 AI 评测开源框架：任意 LLM/VLA × 任意机械臂/人形 × 任意真/仿基准。

- **[Calibra-Robotics/Calibra](https://github.com/Calibra-Robotics/Calibra)** ⭐31  
  模仿学习数据集可观测性与 coreset 选择工具。

- **[RobotControlStack/duobench](https://github.com/RobotControlStack/duobench)**

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*