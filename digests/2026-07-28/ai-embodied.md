# 具身智能开源动态日报 2026-07-28

> 数据来源: GitHub Search API (131 仓库) | ArXiv cs.RO (12 篇论文) | RSS 新闻 (47 条) | 生成时间: 2026-07-28 01:57 UTC

---

# 具身智能开源动态日报

> 覆盖范围：IEEE Spectrum、The Robot Report、ROS Discourse 行业新闻；arXiv cs.RO 最新论文；近 7 天活跃 GitHub 仓库

---

## 📌 今日速览

今日机器人与具身智能领域呈现出**"基础模型下沉 + 仿真底座重写 + 通用硬件开源"**三条主线。Generalist 发布支持多末端执行器的 GEN-1 基础模型，光学技术为机器人 AI 在线更新打开新路径；arXiv 上关于世界模型与近邻动作空间、长时序稀疏奖励分层 SAC、自驾驶实验室失效分析的论文集中涌现。GitHub 端，**MuJoCo 生态**（Newton、mjlab、mujoco_ros2_control）与**VLA 工程化**（FluxVLA、τ⁰-VLA、OpenTau）形成两大活跃象限，**enactic/openarm** 等全开源人形臂硬件进一步降低具身研究门槛。

---

## 🟢 行业脉搏

- **Generalist GEN-1 基础模型扩展末端执行器支持** [The Robot Report](https://www.therobotreport.com/generalists-gen-1-foundation-model-now-supports-a-range-of-robot-end-effectors/)：通用机器人大模型从单一抓手走向多执行器兼容，是具身基础模型走向"一脑多形"的关键一步。
- **光学技术让机器人 AI 在线更新** [IEEE Spectrum](https://spectrum.ieee.org/ai-in-robotics)：摆脱云端重训依赖，为现场部署机器人的持续学习打开工程化窗口。
- **强生 Ottava 手术机器人首度曝光** [The Robot Report](https://www.therobotreport.com/photos-first-look-at-jjs-ottava-surgical-robot/)：商业医疗机器人阵营再添重磅玩家，加速腹腔镜手术自动化竞争。
- **Kraken Technology 获 B 轮融资发展自主无人艇** [The Robot Report](https://www.therobotreport.com/kraken-technology-raises-series-b-funding-autonomous-vessels/)：水面自主航行器赛道资本关注度抬升。
- **时序数据库为机器人实时数据解锁** [The Robot Report](https://www.therobotreport.com/how-time-series-databases-unlock-real-time-data-for-robotics/)：机器人遥操作 / 数字孪生所需的高频传感器流处理基础设施趋于成熟。

---

## 🔬 研究前沿

- **Hierarchical Soft Actor-Critic for Sparse-Reward Long-Horizon RL** [2607.23726](http://arxiv.org/abs/2607.23726v1)：用分层 SAC 解决稀疏奖励下的长时序探索难题，对机器人学习长期任务规划具有直接借鉴价值。
- **Action from Adjacent Set in Physical Space Outperforms the Best Prediction in World Models** [2607.23602](http://arxiv.org/abs/2607.23602v1)：实证表明在物理空间邻域采样的控制策略优于潜在世界模型预测，对当前 world-model-for-control 路径提出重要反思。
- **Towards Ultrafast Depth Sensing Via Active Event-based Stereo Vision** [2607.23684](http://arxiv.org/abs/2607.23684v1)：将事件相机引入主动立体视觉，为高速运动场景的深度感知提供新方案，服务于无人机、敏捷操作等场景。
- **LabRobFail: Robotic Failure Analysis Benchmark in Self-driving Labs** [2607.23704](http://arxiv.org/abs/2607.23704v1)：首个面向自驾驶化学实验室的机器人失效分析基准，呼应"具身 AI + 科学发现"的最新交叉点。
- **Mission-Level Runtime Assurance for LLM-Assisted ISR Swarms** [2607.23532](http://arxiv.org/abs/2607.23532v1)：在 LLM 驱动的 ISR 蜂群上引入任务级运行时安全保证，是 LLM-Agent + 多机器人安全落地的重要工作。

---

## 🚀 重点项目

### 🦾 机器人学习与控制

- **[enactic/openarm](https://github.com/enactic/openarm)** ⭐2,772  
  全开源人形机械臂，面向接触丰富的物理 AI 研究与部署。意义：为缺乏人形硬件的研究者提供低成本复现平台，加速 Sim-to-Real 验证闭环。

- **[OpenPipe/ART](https://github.com/OpenPipe/ART)** ⭐10,537  
  基于 GRPO 的多步智能体强化学习训练器，支持 Qwen3.6、GPT-OSS 等模型。意义：把 Agent RL 从"单轮回答"推进到"多步真实任务"，是具身 Agent 在职训练的关键工具链。

- **[DLR-RM/stable-baselines3](https://github.com/DLR-RM/stable-baselines3)** ⭐13,622  
  PyTorch 实现的可靠强化学习算法集合。意义：机器人 RL 实验的事实基线，几乎所有 sim-to-real 论文的对照实现。

### 🤖 仿真与框架

- **[google-deepmind/mujoco](https://github.com/google-deepmind/mujoco)** ⭐14,350  
  通用物理仿真引擎 MuJoCo 主仓库。意义：机器人动力学仿真的事实标准，正在通过 Warp 后端向 GPU 加速迁移。

- **[isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab)** ⭐7,786  
  基于 NVIDIA Isaac Sim 的统一机器人学习框架。意义：大规模并行 GPU 仿真推动 VLA / RL 训练走向工业级吞吐。

- **[newton-physics/newton](https://github.com/newton-physics/newton)** ⭐5,255  
  基于 NVIDIA Warp 的开源 GPU 加速物理仿真引擎。意义：与 MuJoCo、Isaac 共同形成新一代 GPU-native 仿真三角。

- **[mujocolab/mjlab](https://github.com/mujocolab/mjlab)** ⭐2,732  
  基于 MuJoCo-Warp 的 Isaac Lab API 兼容实现。意义：打通"Isaac 生态 API × MuJoCo 物理精度"，为研究者提供免 NVIDIA 闭源依赖的替代路径。

- **[PX4/PX4-Autopilot](https://github.com/PX4/PX4-Autopilot)** ⭐12,279  
  开源无人机飞控软件。意义：具身空中机器人研究的事实飞控，连接 ROS 2 与 MAVLink 生态。

- **[gazebosim/gz-sim](https://github.com/gazebosim/gz-sim)** ⭐1,428  
  Gazebo 最新一代开源机器人仿真器。意义：ROS 2 时代默认仿真环境，覆盖传感器、物理、可视化全栈。

- **[stack-of-tasks/pinocchio](https://github.com/stack-of-tasks/pinocchio)** ⭐3,606  
  刚体动力学算法及其解析导数的高性能实现。意义：人形 / 四足机器人控制与优化的核心数学库。

- **[copper-project/copper-rs](https://github.com/copper-project/copper-rs)** ⭐1,425  
  Rust 实现的机器人操作系统，支持确定性构建、回放与运行。意义：面向实时性、可重现性要求的新型机器人中间件，区别于传统 ROS 范式。

### 🧠 VLA 与基础模型

- **[FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA)** ⭐570  
  一体化 VLA 工程平台，覆盖数据采集到真机部署。意义：降低 VLA 模型从研究到落地的工程门槛。

- **[sii-research/tau-0-vla](https://github.com/sii-research/tau-0-vla)** ⭐95  
  τ⁰-VLA：引入世界模型引导的测试时计算的分层机器人基础模型。意义：VLA × 世界模型路线的代表性进展。

- **[TensorAuto/OpenTau](https://github.com/TensorAuto/OpenTau)** ⭐192  
  面向真实机器人的 VLA 训练基础设施（PyTorch）。意义：为社区提供开源 VLA 训练流水线，呼应"通用机器人 GPT 时刻"。

- **[phi-monster/Galahad](https://github.com/phi-monster/Galahad)** ⭐70  
  针对 VLA 策略"指令盲视"问题的诊断工具、低秩数据疗法与评测套件。意义：把 VLA 失败模式分析系统化，是评测驱动进步的代表工作。

### 📊 数据

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*