# 具身智能开源动态日报 2026-08-16

> 数据来源: GitHub Search API (131 仓库) | ArXiv cs.RO (0 篇论文) | RSS 新闻 (47 条) | 生成时间: 2026-08-16 00:55 UTC

---

# 具身智能开源动态日报

**日期：2026 年 1 月 · 编译自 IEEE Spectrum / The Robot Report / ArXiv / GitHub**

---

## 1. 今日速览

今日具身智能生态呈现"资本+开源"双轮驱动特征：商业侧，**Neros Technologies 获 2.5 亿美元融资**计划 2026 年底前部署国防无人机，**DARPA 重载挑战赛**与**ARM Institute 国防制造项目**共同把机器人推向国防工业主线；开源侧，VLA、世界模型与具身操作系统三大方向持续放量——**RoboTwin 2.0**（ICML 2026）、**PhyAgentOS 自演化具身 OS**、**OpenArm 开源人形手臂**等活跃仓库在 7 日内获得显著关注，但 ArXiv cs.RO 今日无新提交，提示研究侧进入"消化期"。一个清晰信号：**自演化机器人操作系统（EAIOS）正在成为继 ROS 之后的新基础设施叙事**。

---

## 2. 行业脉搏

- **国防机器人资本潮**：[Neros Technologies 融资 2.5 亿美元](https://www.therobotreport.com/neros-technologies-raises-250m-to-deploy-its-defense-drones-by-the-end-of-2026/)，目标 2026 年底前部署国防无人机。配合 [ARM Institute 国防制造技术项目征集](https://www.therobotreport.com/arm-institute-calls-for-defense-manufacturing-technology-project/)，机器人在国防工业供应链中的角色正从研究走向规模化采购。

- **机器人 IPO 路径多元化**：[Robots on Wall Street](https://www.therobotreport.com/robots-on-wall-street-non-traditional-paths-public-markets-robotics-companies/) 一文梳理非传统上市路径（SPAC、股权重组等），说明资本退出机制正在适配硬件型机器人公司长周期、高研发投入的特性。

- **人形机器人与移动操作臂交汇**：[Mobile manipulators and humanoids](https://www.therobotreport.com/mobile-manipulators-and-humanoids/) 指出二者正在融合为同一形态——兼具移动底盘与双臂的通用平台，正成为产业共识的产品方向。

- **自然语言交互成为落地瓶颈**：[Why robots that can't communicate naturally won't be adopted](https://www.therobotreport.com/why-robots-that-cant-communicate-naturally-wont-be-adopted-says-treble/) 强调 LLM/Voice 通道是商业部署的关键门槛，与今日 GitHub 上 `telekinesis-examples`、`ros-claw`、`rai` 等具备语音/对话能力的机器人框架活跃相互印证。

- **快速制造与机器人回收**：DARPA 重载挑战赛 [Video Friday: Lift Happens](https://spectrum.ieee.org/video-friday-darpa-heavy-lift-challenge) 与 [Protolabs 24 小时 CAD-到-零件](https://www.therobotreport.com/how-protolabs-turns-cad-files-into-parts-under-24-hours/) 共同展示硬件迭代闭环正在缩短；同时 [Robot Recycler](https://spectrum.ieee.org/recycling-robot) 预示机器人应用于循环经济。

---

## 3. 研究前沿

> ⚠️ 今日 ArXiv cs.RO **无新提交**。建议持续关注昨日/本周已发布的世界模型、VLA 与 Sim2Real 相关成果（详见下方"值得关注"）。

---

## 4. 重点项目

### 🦾 机器人学习与控制（模仿学习 / RL / 策略）

- **[RoboTwin-Platform/RoboTwin](https://github.com/RoboTwin-Platform/RoboTwin)** ⭐2,726
  ICML 2026 接收的 RoboTwin 2.0 官方代码库，提供双臂机器人仿真基准与策略学习框架，是 Sim2Real + 模仿学习方向最具关注度的开源项目之一。

- **[enactic/openarm](https://github.com/enactic/openarm)** ⭐2,854
  完全开源的人形机械臂，专为接触丰富的物理 AI 研究与部署设计。补齐了"开源人形机器人"长期缺失的硬件入口。

- **[RoboVerseOrg/RoboVerse](https://github.com/RoboVerseOrg/RoboVerse)** ⭐1,803
  统一平台 + 数据集 + 基准，面向可扩展、可泛化的机器人学习，对标 RT-X/Robomimic 路线但强调规模与泛化性。

- **[mll-lab-nu/VAGEN](https://github.com/mll-lab-nu/VAGEN)** ⭐493
  世界模型推理强化学习用于多轮 VLM Agent，将世界模型与 RL/VLM 三者耦合，是 VLA 上层训练范式的重要探索。

- **[Humanoid Motion Intelligence](https://github.com/RealXiaoze/humanoid-motion-intelligence)** ⭐349
  人形机器人运动智能的论文、开源项目、产业与求职知识库，中文社区最系统的资源聚合。

- **[robonet-ai/handumi-sw](https://github.com/robonet-ai/handumi-sw)** ⭐46
  开源 HandUMI 软件，支持双手同步数据采集、重定向到任意双臂机器人，是当前具身数据采集成本痛点的有力解。

### 🤖 仿真与框架（MuJoCo / Isaac / Gazebo / ROS）

- **[dora-rs/dora](https://github.com/dora-rs/dora)** ⭐3,873
  数据流导向的机器人中间件（Rust 编写），以低延迟、可组合、分布式数据流建模 AI 机器人应用，是 ROS 之外的"现代替代叙事"代表。

- **[isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab)** ⭐7,905
  NVIDIA Isaac Sim 之上的统一机器人学习框架，事实上的 GPU RL 标准平台。

- **[mujocolab/mjlab](https://github.com/mujocolab/mjlab)** ⭐2,800
  Isaac Lab API + MuJoCo-Warp 后端，开源、轻量、GPU 加速，是 NVIDIA 闭源体系之外最重要的 MuJoCo 演进方向。

- **[newton-physics/newton](https://github.com/newton-physics/newton)** ⭐5,408
  基于 NVIDIA Warp 的开源 GPU 加速物理引擎，定位机器人研究者专用，是 MuJoCo / Isaac 之外的第三极候选。

- **[ros-controls/mujoco_ros2_control](https://github.com/ros-controls/mujoco_ros2_control)** ⭐232
  MuJoCo 与 ROS2 control 的桥接，把 RL 训练中常用的 MuJoCo 物理接入 ROS2 生态，对 Sim2Real 部署至关重要。

### 🧠 VLA 与具身基础模型

- **[RLinf/RLinf](https://github.com/RLinf/RLinf)** ⭐4,544
  面向具身与 Agentic AI 的强化学习基础设施，是 VLA + RL 训练栈里关注度最高的新项目。

- **[PhyAgentOS-dev/PhyAgentOS](https://github.com/PhyAgentOS-dev/PhyAgentOS)** ⭐1,705
  基于 Agentic workflow 构建的"自演化具身 AI 操作系统"，具身 OS 概念的最具体落地之一。

- **[syswonder/robonix](https://github.com/syswonder/robonix)** ⭐328
  另一款 EAIOS（Embodied AI Operating System），与 PhyAgentOS 共同推动"机器人操作系统"概念从 ROS 范式向 AI-native 范式迁移。

- **[RobotecAI/rai](https://github.com/RobotecAI/rai)** ⭐568
  基于 ROS 2 的厂商无关 Physical AI 代理框架，内置语音交互、复杂动作、日志摘要——VLA 落地到真实机器人的完整工程模板。

- **[FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA)** ⭐612
  VLA 一站式工程平台，从数据到真机部署，是当前最完整的 VLA "开箱即用"参考实现。

- **[sou350121/VLA-Handbook](https://github.com/sou350121/VLA-Handbook)** ⭐511
  全中文、实战导向的 VLA 算法工程师手册 / 面试资料，反映 VLA 在中文社区的爆发性需求。

### 🔧 硬件与驱动

- **[copper-project/copper-rs](https://github.com/copper-project/copper-rs)** ⭐1,451
  Rust 编写的机器人操作系统，主打"确定性构建-运行-回放"，面向需要可重复实验的机器人研究。

- **[leo-zhu-agibot/dual-so101-mobile-manipulator](https://github.com/leo-zhu-agibot/dual-so101-mobile-manipulator)** ⭐7
  ROS 2 + Isaac Sim 移动底盘 + 双 SO-101 臂参考栈，含多模态感知、数据 QC 与模仿学习，是低成本双臂 + 移动底盘的标杆实现。

- **[linkforge](https://github.com/arounamounchili/linkforge)** ⭐251
  机器人描述的"LLVM"——可编程 IR 引擎，从 Python/Blender 组合、验证、编译 URDF/XACRO/SRDF，解决机器人模型碎片化痛点。

### 📊 数据集与基准

- **[StanfordVL/BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K)** ⭐1,636
  加速具身 AI 研究的综合平台，长期运行的标杆基准。

- **[StanfordVL/Karpathy-style-BEHAVIOR](https://github.com/StanfordVL/BEHAVIOR-1K)** ⭐1,636（即上）
  配合 [open-h/open-h-embodiment](https://github.com/open-h/open-h-embodiment) ⭐134 推动医疗机器人的开放共享数据集。

- **[omertt27/Calibra](https://github.com/omertt27/Calibra)** ⭐14
  模仿学习数据集可观测性与 coreset 选择工具，对日益膨胀的机器人数据集实现"少而精"的训练数据筛选。

- **[dhkim-furiosa/daily-ai-robotics-papers](https://github.com/dhkim-furiosa/daily-ai-robotics-papers)** ⭐24
  每日 VLA / 世界模型 / Physical AI 论文简报，元资源类项目。

---

## 5. 生态趋势信号

三个跨源共振信号清晰浮现：**第一，"具身 AI 操作系统（EAIOS）"**成为新基础设施议题——PhyAgentOS、robonix、ros-claw、copper-rs 等多个项目并行涌现，意图在 ROS 之外构建 AI-native 的机器人运行时，并把"自演化、Agentic 工作流、确定可回放"作为差异化卖点。**第二，VLA 正在从模型层下沉到工程平台层**——FluxVLA、rai、EVA-CLIENT、OpenTau 等共同形成"数据→训练→部署→评测→真实机器人"完整工具链，标志 VLA 进入工程化落地阶段。**第三，仿真与硬件的耦合进一步收紧**——IsaacLab + mjlab + Newton + mujoco_ros2_control 暗示"GPU 物理 + ROS 部署"将成为 Sim2Real 默认组合，配合 DARPA 重载挑战赛和 ARM Institute 国防制造项目，**国防与工业制造**成为机器人技术兑现价值的优先场景。

---

## 6. 值得关注

1. **[PhyAgentOS-dev/PhyAgentOS](https://github.com/PhyAgentOS-dev/PhyAgentOS)** —— 自演化具身 AI 操作系统是 2026 年最值得追踪的新范式之一，若其 Agentic workflow + 物理执行回路被验证，将重塑机器人软件栈分层。

2. **[Neros Technologies 2.5 亿美元融资](https://www.therobotreport.com/neros-technologies-raises-250m-to-deploy-its-defense-drones-by-the-end-of-2026/)** —— 单笔融资 + 明确部署时间表（2026 底）是国防无人机走向量产的标志性事件，建议关注其后续技术栈披露。

3. **[mujocolab/mjlab](https://github.com/mujocolab/mjlab)** —— Isaac Lab API + 开源 MuJoCo-Warp 的组合若成熟，将打破 NVIDIA 对 GPU RL 仿真的事实垄断，是研究侧必须跟进的底层变化。

---

*日报基于公开信息综合整理，仅代表编译者视角。*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*