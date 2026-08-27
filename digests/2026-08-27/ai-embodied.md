# 具身智能开源动态日报 2026-08-27

> 数据来源: GitHub Search API (131 仓库) | ArXiv cs.RO (30 篇论文) | RSS 新闻 (47 条) | 生成时间: 2026-08-27 06:39 UTC

---

# 具身智能开源动态日报

**📅 2026 年 · 第 X 期**

---

## 1️⃣ 今日速览

今天具身智能领域呈现出**"产业资本 + 边缘推理 + 仿真工具链"**三股力量交织的格局：Gatik 获 2 亿美元融资加码无人卡车，NVIDIA 推出 Jetson Orin Nano 2 将机器人边缘推理性能翻倍，学术圈则涌现出 Zero-WAM（人类视频驱动的零样本任务泛化）、One Policy Many Embodiments（小米发布的异构硬件 VLA 预训练）等重磅工作。开源生态方面，Isaac Lab、MuJoCo、Newton 等仿真/物理引擎持续高活跃，VLA 工程化项目（FluxVLA、τ0-VLA、EVA-CLIENT）密集发布，配合 ROS-MCP-Server 这类"AI Agent × 机器人"基础设施快速兴起。

---

## 2️⃣ 行业脉搏

- **Gatik 获 2 亿美元融资扩大无人卡车运营** — 干线物流 L4 商业化进入加速期，资金将用于扩展 B2B 短途自动驾驶运输网络。🔗 [The Robot Report](https://www.therobotreport.com/gatik-brings-in-200m-to-continue-expanding-autonomous-trucking-operations/)

- **Bedrock Robotics 首次实现无人挖掘机部署** — 建筑工地自动化里程碑，去操作员的挖掘机已落地真实场景，对野外移动机器人具身作业意义重大。🔗 [The Robot Report](https://www.therobotreport.com/bedrock-robotics-first-operator-free-excavator-deployments-take-off/)

- **NVIDIA Jetson Orin Nano 2 发布：边缘推理性能翻倍** — 对人形机器人、四足等算力受限的边缘部署平台是关键利好，意味着同等功耗下可运行更大 VLA/世界模型。🔗 [The Robot Report](https://www.therobotreport.com/jetson-orin-nano-2-doubles-inference-performance-robotics-edge-says-nvidia/)

- **Guident：Robotaxi 安全仍需"人在回路"** — 提醒业界无人化载具运营责任链条远未成熟，远程监控与人机协同短期内不可缺席。🔗 [The Robot Report](https://www.therobotreport.com/humans-loop-are-still-needed-robotaxi-fleet-safety-says-guident/)

- **IDS Imaging 引入 Nion ToF 深度相机** — 补齐中距 3D 感知硬件版图，为低成本机器人避障与抓取方案提供新选项。 [The Robot Report](https://www.therobotreport.com/ids-imaging-adds-nion-tof-camera-portfolio-3d-cameras/)

---

## 3️⃣ 研究前沿

- **Zero-WAM: In-Context World-Action Modeling from Human Videos for Open-Ended Task Generalization**
  Jiaming Zhou, Qihang Zhang et al. — 通过人类视频在上下文中同时学习世界模型与动作模型，实现零样本跨任务泛化，是"用互联网视频替代遥操数据"路线的代表性进展。
  🔗 [arxiv.org/abs/2608.26103](http://arxiv.org/abs/2608.26103v1)

- **One Policy, Many Embodiments: Unified Camera-Centric Action Geometry Pre-training for Heterogeneous Embodied Manipulation**
  Xiaomi Embodied Intelligence Team & University of Macau — 面向异构硬件形态（不同机械臂/底座）统一预训练 VLA 策略，直接攻击"跨形态泛化"这一 VLA 最大瓶颈。
  🔗 [arxiv.org/abs/2608.26058](http://arxiv.org/abs/2608.26058v1)

- **R³: Training Robots to Reason in Natural Language via Reinforcement Learning**
  Lehong Wu, Yuxiao Qu et al. — 用自然语言作为推理媒介，让机器人通过 RL 学会"思考后再行动"，延续 OpenVLA-O、π0 的 test-time scaling 思路。
  🔗 [arxiv.org/abs/2608.26053](http://arxiv.org/abs/2608.26053v1)

- **Fast Generative Grasping via Lie Group-Constrained MeanFlow**
  S. Talha Bukha 等 — 用 Lie 群约束生成抓取位姿，把生成式抓取推理提速到工业可用水准，连接几何与生成模型。
   [arxiv.org/abs/2608.26076](http://arxiv.org/abs/2608.26076v1)

- **VirTooS: A ROS 2 – Unity Virtualization Toolkit for Fleet Management of AMRs**
  Andrea Drudi, Lorenzo Pichierri et al. — 把 ROS 2 车队管理与 Unity 高保真渲染串成一体，给 AMR 集群仿真到部署提供低门槛入口。
  🔗 [arxiv.org/abs/2608.26066](http://arxiv.org/abs/2608.26066v1)

---

## 4️⃣ 重点项目

### 🤖 仿真与框架
- **[google-deepmind/mujoco](https://github.com/google-deepmind/mujoco)** ⭐ 14,683 — Multi-Joint dynamics with Contact. 事实标准的高性能物理仿真器，具身/RL 研究的基础设施底座。

- **[carla-simulator/carla](https://github.com/carla-simulator/carla)** ⭐ 14,327 — 开源自动驾驶仿真平台，AD 与具身驾驶研究的标准测试场。

- **[isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab)** ⭐ 7,968 — 基于 Isaac Sim 的统一机器人学习框架，NVIDIA 当前主推的 GPU 并行 RL/VLA 训练底座。

- **[newton-physics/newton](https://github.com/newton-physics/newton)** ⭐ 5,542 — 基于 NVIDIA Warp 的 GPU 加速物理引擎，专为机器人/仿真研究者设计，是 Isaac Lab/MuJoCo-Warp 之后的"第三极"。

- **[cyberbotics/webots](https://github.com/cyberbotics/webots)** ⭐ 4,577 — 跨平台开源机器人仿真器，教育与中小型项目首选。

- **[gazebosim/gz-sim](https://github.com/gazebosim/gz-sim)** ⭐ 1,468 — 新一代 Gazebo 仿真器，ROS 生态默认物理仿真后端。

- **[mujocolab/mjlab](https://github.com/mujocolab/mjlab)** ⭐ 2,837 — "Isaac Lab API × MuJoCo-Warp"，用 MuJoCo 内核复刻 Isaac Lab 体验，免 NVIDIA 闭源依赖。

###  VLA 与基础模型
- **[FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA)** ⭐ 633 — 一站式 VLA 工程平台，覆盖数据、训练到真机部署，对快速复现基线极友好。

- **[sii-research/tau-0-vla](https://github.com/sii-research/tau-0-vla)**  571 — τ0-VLA 官方实现：层次化机器人基础模型 + 世界模型引导的 test-time compute。

- **[allenai/vla-evaluation-harness](https://github.com/allenai/vla-evaluation-harness)**  565 — 任意 VLA 模型在任意仿真基准上的统一评测框架，是推动 VLA 可复现研究的关键基建。

- **[lucidrains/mimic-video](https://github.com/lucidrains/mimic-video)** ⭐ 122 — Mimic-Video（Video-Action Models）实现，走出 VLA 范式、迈向通用视频-动作模型的探索。

- **[Noietch/EVA-CLIENT](https://github.com/Noietch/EVA-CLIENT)** ⭐ 98 — 真机部署、评测、数据采集三合一框架，工程化 VLA 落地的轻量化入口。

###  机器人学习与控制
- **[RLinf/RLinf](https://github.com/RLinf/RLinf)** ⭐ 4,662 — 面向具身/Agentic AI 的强化学习基础设施，定位 LLM/VLA 后训练与在线 RL 的中间件。

- **[mll-lab-nu/VAGEN](https://github.com/mll-lab-nu/VAGEN)** ⭐ 493 — 多轮 VLM Agent 的世界模型 RL 框架（NeurIPS 2025），把 RL 真正带入多模态智能体训练。

- **[Tsinghua-MARS-Lab/OMG](https://github.com/Tsinghua-MARS-Lab/OMG)** ⭐ 114 — 清华 MARS 实验室通用人形运动生成官方实现（"OMG: Omni-Modal Motion Generation"）。

- **[OpenPipe/ART](https://github.com/OpenPipe/ART)**  10,667 — Agent Reinforcement Trainer (GRPO 多步 Agent 训练)，把 RLHF/GRPO 工作流普及化，是机器人 + Agent 范式的潜在拼图。

### 🔧 硬件与驱动 / 中间件
- **[dora-rs/dora](https://github.com/dora-rs/dora)** ⭐ 3,902 — 数据流驱动的机器人中间件（Rust 实现），低延迟、可组合，为 AI 机器人应用提供 ROS 之外的现代替代。

- **[ros2-rust/ros2_rust](https://github.com/ros2-rust/ros2_rust)** ⭐ 1,521 — ROS 2 的官方 Rust 绑定，为追求内存安全/高并发栈的机器人项目铺路。

- **[copper-project/copper-rs](https://github.com/copper-project/copper-rs)** ⭐ 1,468 — 机器人操作系统：确定性构建、回放与运行整个机器人流水线，适合做大规模数据回灌。

- **[robotmcp/ros-mcp-server](https://github.com/robotmcp/ros-mcp-server)** ⭐ 1,414 — 把 Claude / GPT 通过 MCP 直接接入 ROS，让 LLM Agent 能"长出手脚"操控机器人——近期增速最快的"AI Agent × Robot"项目之一。

- **[RobotControlStack/robot-control-stack](https://github.com/RobotControlStack/robot-control-stack)** ⭐ 150 — 轻量、ROS-free 的 sim-to-real 框架，原生支持 Franka/UR5e/xArm/SO101/YAM，定位"开箱即用 VLA 训练栈"。

- **[syswonder/robonix](https://github.com/syswonder/robonix)** ⭐ 343 — 面向机器人的 Agentic 操作系统（Rust），把 e-URDF、Skill 库、运行时干预等抽象统一起来。

### 📊 数据集与基准
- **[StanfordVL/BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K)** ⭐ 1,661 — 加速具身 AI 研究的标志性基准平台（日常任务仿真），与 iGibson、SAPIEN 并列。

- **[BaiShuanghao/Awesome-Robotics-Manipulation](https://github.com/BaiShuanghao/Awesome-Robotics-Manipulation)** ⭐ 1,101 — 机器人操作论文/代码/资源大全，快速把握 Manipulation 全景。

- **[murobotics-ai/handumi-hw](https://github.com/murobotics-ai/handumi-hw)** ⭐ 75 + **[murobotics-ai/handumi-sw](https://github.com/murobotics-ai/handumi-sw)** ⭐ 60 — HandUMI 软硬件全家桶：无机器人遥操采集双手机数据并 retarget 到任意夹爪，弥补双手操作数据稀缺痛点。

- **[RobotControlStack/duobench](https://github.com/RobotControlStack/duobench)** ⭐ 16 — 双手操作仿真+真机可复现基准，填补 dual-arm benchmark 空白。

---

## 5️⃣ 生态趋势信号

"**通用基础模型 + 异构硬件**"与"**AI Agent 直接操控机器人**"两条主线正在合流：一方面，One Policy Many Embodiments、Zero-WAM、R³ 等论文标志着 VLA 正从单一硬件的示范走向跨形态、跨任务的通用策略；而 FLuxVLA、τ0-VLA、robot-control-stack、EVA-CLIENT 等开源工程栈的密集发布说明"用 VLA 跑真机"正被产品化抽象。与此同时，**dora-rs / copper-rs / robonix 等 Rust 系中间件**与 **ros-mcp-server** 共同暗示：下一代机器人软件栈将以"数据流 + 确定性 + Agent 友好"为核心，而 ROS-MCP 这类桥接工具则预示 LLM Agent 作为机器人"上层大脑"的范式正在快速成型。仿真侧 Isaac Lab、MuJoCo、Newton"三足鼎立"格局已定，NVIDIA 硬件生态与 Warp 加速继续向研究侧渗透。

---

## 6️⃣ 值得关注

1. **Zero-WAM：用人类视频训练可零样本泛化的世界-动作模型**
   代表"脱离遥操数据、用互联网视频直接训具身策略"的最新进展，若能在更复杂任务上复现，将极大降低通用机器人数据门槛。👉 [arxiv.org/abs/2608.26103](http://arxiv.org/abs/2608.26103v1)

2. **robotmcp/ros-mcp-server (⭐1,414) — LLM Agent 直连 ROS 的桥梁**
   增长速度肉眼可见，是 Agentic Robotics 的"infrastructure moment"：当 Claude/GPT 能直接发 ROS Topic，机器人开发范式将被重新定义。👉 [github.com/robotmcp/ros-mcp-server](https://github.com/robotmcp/ros-mcp-server)

3. **NVIDIA Jetson Orin Nano 2 + 新版 Isaac Lab 同步发力**
   硬件性能翻倍 + 仿真训练框架升级，意味着在边缘部署更大 VLA/世界模型的窗口正在打开，对人形机器人创业公司是确定性利好。👉 [The Robot Report](https://www.therobotreport.com/jetson-orin-nano-2-doubles-inference-performance-robotics-edge-says-nvidia/)

---

*本日报由具身智能分析师整理，覆盖行业新闻、cs.RO 论文与 GitHub 活跃仓库三大信息源。*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*