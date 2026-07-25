# 具身智能开源动态日报 2026-07-25

> 数据来源: GitHub Search API (133 仓库) | ArXiv cs.RO (22 篇论文) | RSS 新闻 (46 条) | 生成时间: 2026-07-25 02:04 UTC

---

# 🤖 具身智能开源动态日报

> 今日综合报道：行业新闻 46 条｜ArXiv cs.RO 论文 22 篇｜活跃 GitHub 仓库 133 个

---

## 📌 今日速览

今日具身智能与机器人领域的两大主旋律是**资本的密集流入**与**基础模型的工程化落地**。Uber 联合创始人携 17 亿美元下场创立 ATOMS、Holiday Robotics 完成 1.05 亿美元轮式人形机器人融资，标志着人形机器人赛道进入"超大型玩家"时代；与此同时，Generalist 的 GEN-1 扩展末端执行器支持、AMD 推出面向实时控制的 Kria 模块，则显示基础模型与边缘硬件的协同正在加速。在研究侧，**面向数据引擎、可组合泛化与生成式 4D 世界**的工作密集涌现，社区对"可扩展性"与"长时序记忆"的关注度显著提升。

---

## 🏛️ 行业脉搏

1. **Uber 联合创始人 Travis Kalanick 携 17 亿美元创立 ATOMS**  
   [链接](https://www.therobotreport.com/uber-co-founder-raises-1-7b-for-new-robotics-startup-atoms/)  
   继 Physical Intelligence、Skild AI 之后，又一重量级人形/具身机器人公司诞生。Kalanick 的回归与超大额融资说明顶级人才与资本正在以前所未有的速度向 Physical AI 汇聚。

2. **Holiday Robotics 完成 1.05 亿美元融资，推出轮式人形机器人 FRIDAY**  
   [链接](https://www.therobotreport.com/holiday-robotics-raises-105m-wheeled-humanoid-friday/)  
   轮式 + 双足的折中设计降低了量产成本与摔倒风险，反映"商业化优先"思路正在影响人形机器人的形态选择。

3. **AMD 发布面向机器人实时控制的 Kria 模块 + 统一内存架构**  
   [链接](https://www.therobotreport.com/amd-unveils-kria-module-real-time-control-unified-memory-robots/)  
   统一内存可显著降低 VLA 模型与底层控制回路之间的数据搬运延迟，被视为对标 NVIDIA Jetson/Isaac 的关键硬件补位。

4. **NEURA Robotics 在 RWTH Aachen 建立 NEURA Gym，专注 Physical AI 训练**  
   [链接](https://www.therobotreport.com/neura-robotics-establishes-neura-gym-rwth-aachen-train-physical-ai/)  
   "训练场 + 数据采集"模式进一步工业化，欧洲人形机器人阵营正在形成产学闭环。

5. **Generalist GEN-1 基础模型扩展多末端执行器支持；Ropedia 融资 2200 万美元做机器人训练数据规模化采集**  
   [链接 1](https://www.therobotreport.com/generalists-gen-1-foundation-model-now-supports-a-range-of-robot-end-effectors/) ｜ [链接 2](https://www.therobotreport.com/ropedia-raises-22m-scale-data-collection-training-robots/)  
   "基础模型 + 数据引擎"正在成为具身智能的最核心两件套，硬件泛化能力与数据规模化能力同步推进。

---

## 📚 研究前沿

1. **AXIS: A Growable Community-Driven Data Engine for Scalable Robot Manipulation**  
   [arXiv:2607.21588](http://arxiv.org/abs/2607.21588v1)  
   提出可生长、社区驱动的操控数据引擎，强调数据多样性与质量可扩展性，直面 VLA 训练的最大瓶颈。

2. **Scale Up Strategically: Compositional Generalization via Bias-Aware Evaluation and Data Collection**  
   [arXiv:2607.21582](http://arxiv.org/abs/2607.21582v1)  
   关注机器人指令级可组合泛化，提出"偏置感知"的评估与数据收集方法，弥补了预训练策略在新指令组合上失效的核心痛点。

3. **Beyond Episodic Evaluation: Memory Architectural Bottlenecks in Sequential Embodied Question Answering**  
   [arXiv:2607.21571](http://arxiv.org/abs/2607.21571v1)  
   系统性分析 EQA 中长期记忆架构瓶颈，挑战"逐回合评估"的旧范式，对长时序具身推理具重要启示。

4. **GS-Agent: Creating 4D Physical Worlds With Generative Simulation**  
   [arXiv:2607.21522](http://arxiv.org/abs/2607.21522v1)  
   从自然语言生成物理一致的 4D 动态世界，为生成式世界模型与 Sim2Real 数据合成提供新路径。

5. **VoLN: Vision-Only Long-Horizon Navigation—Paradigm, Benchmark, and Method**  
   [arXiv:2607.21400](http://arxiv.org/abs/2607.21400v1)  
   摆脱语言指令依赖的纯视觉长程导航，重新定义了 VLN 的研究范式，对家用服务机器人意义重大。

---

## 🦾 重点项目

### 🧠 VLA 与基础模型

| 项目 | ⭐ | 说明 |
|------|----|------|
| [datawhalechina/every-embodied](https://github.com/datawhalechina/every-embodied) | 2,851 | 中文社区从 0 构建 VLA / OpenVLA / SmolVLA / π0 的实战教程，对国内具身教育极有价值 |
| [PhyAgentOS/PhyAgentOS](https://github.com/PhyAgentOS/PhyAgentOS) | 1,046 | 基于 agentic workflow 的自演化具身 AI 操作系统，尝试 OS 级抽象 Physical AI |
| [FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA) | 563 | 从数据到真机部署的一体化 VLA 工程平台，降低端到端落地门槛 |
| [InternRobotics/InternVLA-A-series](https://github.com/InternRobotics/InternVLA-A-series) | 511 | 统一理解、生成与动作的 InternVLA-A1，体现 VLA 多模态融合新趋势 |
| [om-ai-lab/OmTrackVLA](https://github.com/om-ai-lab/OmTrackVLA) | 263 | 跟踪型 VLA 开源可复现研究，补齐 VLA 在目标追踪上的能力空白 |
| [TensorAuto/OpenTau](https://github.com/TensorAuto/OpenTau) | 190 | 基于 PyTorch 的真机 VLA 训练基础设施，面向工业级落地 |

### 🤖 仿真与框架

| 项目 | ⭐ | 说明 |
|------|----|------|
| [google-deepmind/mujoco](https://github.com/google-deepmind/mujoco) | 14,315 | 通用多关节接触动力学仿真器，是具身 RL/Sim2Real 的事实标准 |
| [isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab) | 7,759 | 基于 Isaac Sim 的统一机器人学习框架，大规模 GPU 并行训练首选 |
| [newton-physics/newton](https://github.com/newton-physics/newton) | 5,236 | 基于 NVIDIA Warp 的开源 GPU 加速物理引擎，瞄准机器人与仿真研究 |
| [carla-simulator/carla](https://github.com/carla-simulator/carla) | 14,215 | 自动驾驶领域主流开源仿真器，仍是具身/导航研究的重要基建 |
| [robotmcp/ros-mcp-server](https://github.com/robotmcp/ros-mcp-server) | 1,358 | 通过 MCP 协议让 Claude/GPT 直连 ROS，LLM-VLA 落地基础设施 |
| [copper-project/copper-rs](https://github.com/copper-project/copper-rs) | 1,423 | Rust 写的"机器人操作系统"，支持整系统确定性回放，对安全关键场景价值显著 |
| [dartsim/dart](https://github.com/dartsim/dart) | 1,162 | C++23 现代物理引擎，主打机器人与动画研究 |
| [gazebosim/gz-sim](https://github.com/gazebosim/gz-sim) | 1,423 | 下一代 Gazebo 仿真器，ROS 生态核心组件 |

### 🦾 机器人学习与控制

| 项目 | ⭐ | 说明 |
|------|----|------|
| [RLinf/RLinf](https://github.com/RLinf/RLinf) | 4,244 | 面向具身与 Agentic AI 的强化学习基础设施，连接 RL 与 robot learning |
| [dora-rs/dora](https://github.com/dora-rs/dora) | 3,853 | Rust 写的数据流机器人中间件，低延迟、可组合、分布式，重塑机器人应用架构 |
| [VAGEN/mll-lab-nu](https://github.com/mll-lab-nu/VAGEN) | 488 | 世界模型推理 + RL，专攻多轮 VLM 智能体 |
| [RobotControlStack/robot-control-stack](https://github.com/RobotControlStack/robot-control-stack) | 124 | 去 ROS、轻量的 Sim2Real 框架，专注 VLA 与 RL 落地，原生支持 MuJoCo Gymnasium |

### 🔧 硬件与驱动

| 项目 | ⭐ | 说明 |
|------|----|------|
| [enactic/openarm](https://github.com/enactic/openarm) | 2,763 | 完全开源的人形机械臂，专为接触丰富的 Physical AI 研究与部署设计 |
| [RobotecAI/rai](https://github.com/RobotecAI/rai) | 556 | 基于 ROS 2 的厂商无关 Physical AI 代理框架，支持语音/场景/接口执行 |
| [DexForce/EmbodiChain](https://github.com/DexForce/EmbodiChain) | 200 | GPU 加速的端到端模块化通用具身智能平台 |
| [robonet-ai/handumi-sw](https://github.com/robonet-ai/handumi-sw) | 42 | 双手 UMI 开源软件，支持同步数据采集、标定、回放与遥操作 |
| [robonet-ai/handumi-hw](https://github.com/robonet-ai/handumi-hw) | 42 | UMI 硬件变体，无需机器人在环即可采集双手操作数据 |

### 📊 数据集与基准

| 项目 | ⭐ | 说明 |
|------|----|------|
| [RoboVerseOrg/RoboVerse](https://github.com/RoboVerseOrg/RoboVerse) | 1,789 | 统一平台、跨数据集与基准的可扩展机器人学习底座 |
| [StanfordVL/BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K) | 1,596 | 经典具身 AI 研究平台与基准，长期维护持续活跃 |
| [open-h/open-h-embodiment](https://github.com/open-h/open-h-embodiment) | 131 | 医疗机器人的开放共享 VLA 数据集倡议，垂直领域尝试 |
| [philfung/awesome-reliable-robotics](https://github.com/philfung/awesome-reliable-robotics) | 159 | 强调真实世界可靠性与鲁棒性的机器人研究清单 |

---

## 📈 生态趋势信号

从今日三方信息源可以读出几个明显的信号叠加：**资本侧**——超大规模融资集中投向通用 Physical AI 与人形机器人，意味着赛道头部已现"赢家通吃"苗头；**模型侧**——GEN-1 扩展末端执行器、BEHAVIOR-1K 等持续迭代，社区正在从"单任务模仿"向"通用基础模型 + 可组合数据引擎"升级；**硬件侧**——AMD Kria 模块、Newton 物理引擎、OpenArm 开源硬件共同推动"算力/物理/本体"三元栈的去 NVIDIA 化探索；**评估侧**——可组合泛化、长期记忆、视觉长程导航等论文选题折射出研究者对"评测范式跟不上模型能力"的普遍焦虑，evaluator-driven development 正在回到舞台中央。

---

## ⭐ 值得关注

1. **[Uber 创始人 17 亿美元创立 ATOMS](https://www.therobotreport.com/uber-co-founder-raises-1-7b-for-new-robotics-startup-atoms/)** ——超大额融资 + 顶级运营人才回流，往往意味着产业形态将发生阶跃式变化，建议密切跟踪其首批产品与团队方向。

2. **[AMD Kria 实时控制模块 + 统一内存](https://www.therobotreport.com/amd-unveils-kria-module-real-time-control-unified-memory-robots/)** ——边缘 AI 硬件市场首次出现可对标 Jetson 的成熟方案，并配套 MuJoCo-Warp 等软件栈，CPU/GPU/NPU 三元融合趋势下值得提前布局。

3. **[GS-Agent：用生成式仿真构建 4D 物理世界](http://arxiv.org/abs/2607.21522v1)** ——若生成式世界模型可在物理一致性上突破，将彻底改变 Sim2Real 与数据合成的范式，是下一代具身基础模型的关键基础设施候选。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*