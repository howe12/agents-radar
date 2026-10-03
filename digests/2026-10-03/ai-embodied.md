# 具身智能开源动态日报 2026-10-03

> 数据来源: GitHub Search API (129 仓库) | ArXiv cs.RO (30 篇论文) | RSS 新闻 (38 条) | 生成时间: 2026-10-03 03:18 UTC

---

# 具身智能开源动态日报
**日期：2026 年 10 月 · 编译自 IEEE Spectrum / The Robot Report / arXiv cs.RO / GitHub Trending**

---

## 1. 今日速览

今日信号集中爆发于"**世界-动作模型（WAM / World Action Model）**"这一新范式：The Robot Report 报道 Runway 发布 Praxis-1，arXiv 同期出现 SkeleWAM（骨架化表征）、UniWAM（统一 WAM）与 Black Forest Labs 开源的 FLUX-action 仓库，三股力量同步把"动作预测 + 未来状态预测"推上 VLA 之上的下一个台阶。硬件侧，Atlas 的新一代灵巧手被 IEEE Spectrum 评估为可能超越拟人形态，标志着末端执行器范式正在分化。GitHub 端，新一代 GPU 物理引擎 **Newton**（NVIDIA Warp 内核）冲上 5.7k stars，**IsaacLab** 仍以 8.2k stars 稳居榜首，OpenVLA/OpenXLM 周边评估栈（inspect-robots、vla-evaluation-harness）持续扩张，反映社区正在从"训得动"过渡到"评得准"。

---

## 2. 行业脉搏

- **🖐️ [Atlas Robot's New Hand May Outperform Humanlike Designs](https://spectrum.ieee.org/robust-robot-hand)** — _IEEE Spectrum_
  灵巧手正在脱离"拟人即最优"的假设，转向任务驱动的非仿生构型，对触觉传感器与欠驱动机构是直接利好。

- **🌐 [Runway introduces Praxis-1 world action model for robotics](https://www.therobotreport.com/runway-introduces-praxis-1-world-action-model-robotics/)** — _The Robot Report_
  文生视频巨头 Runway 跨界机器人赛道发布 WAM，预训练视频-动作链路正在被视频原生模型反向赋能。

- **🏭 [Inside Omron's next-generation LD mobile robots](https://www.therobotreport.com/inside-omrons-next-generation-ld-mobile-robots/)** — _The Robot Report_
  工业移动机器人头部厂商迭代 AMR 平台，关注车队调度与边缘智能的部署形态变化。

- **🤝 [Eli Lilly, Purdue to share field learnings on human robot interaction at RoboBusiness](https://www.therobotreport.com/eli-lilly-purdue-to-share-field-learnings-on-human-robot-interaction-at-robobusiness/)** — _The Robot Report_
  药企 + 高校联合披露 HRI 现场数据，具身智能正在从实验室向受监管行业（制药、医疗）渗透。

- **📋 [Top 10 robotics stories of September 2026](https://www.therobotreport.com/top-10-robotics-stories-of-september-2026/)** — _The Robot Report_
  季度回顾类条目，建议用作交叉校验本月主线事件。

---

## 3. 研究前沿

- **🦿 [InterEvolve: Test-Time Evolution of Reward Programs for Humanoid Loco-Manipulation](http://arxiv.org/abs/2610.02196v1)** — Zhuo Lin 等
  把"奖励程序演化"从训练期推到测试期，让从未训过的任务也能在机器人上自演化生成控制器，是 humanoid loco-manipulation 走向开放任务的关键一步。

- **🪟 [GlassGuard: Verified Glass Plane Mapping for Robot Navigation](http://arxiv.org/abs/2610.02110v1)** — Hanwen Guo 等
  针对 LiDAR 在透明 / 镜面表面失效这一长期痛点给出**可验证**的玻璃平面建图，对家庭、商超场景的 SLAM 安全性是刚需级贡献。

- **🦴 [SkeleWAM: Skeleton World-Action Modeling for Efficient Robotic Manipulation](http://arxiv.org/abs/2610.02120v1)** — Juyi Sheng 等
  用骨架表征压缩 WAM 的状态预测空间，把"动作 + 未来状态"联合模型的推理成本压下来，是 VLA-WAM 走向边缘部署的代表性工作。

- **🤝 [Watch, Infer, Coordinate: Inferring Robot Partner Constraints for Zero-Shot Coordination](http://arxiv.org/abs/2610.02170v1)** — Suyu Ye 等
  通过"观察 + 推断对方约束"实现零样本多机协作，对异构机器人共线 / 共享空间作业意义重大。

- **🧰 [HumanoidToolBench: Benchmarking Humanoid Tool Use from Selection to Mobile Execution](http://arxiv.org/abs/2610.02089v1)** — Kyochul Jang 等
  首个覆盖"选工具 → 移动 → 执行"全链路的 humanoid 工具使用基准，与 EagleVLA 等同构类边缘推理工作天然互补。

---

## 4. 重点项目

### 🦾 机器人学习与控制（模仿学习 / 强化学习 / 策略学习）

- **[isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab)** ⭐ 8,269 · Python
  NVIDIA 系机器人学习统一框架，多物理引擎 / 多渲染器后端，事实上的 GPU 仿真底座。

- **[RLinf/RLinf](https://github.com/RLinf/RLinf)** ⭐ 5,425 · Python
  面向 Embodied & Agentic AI 的强化学习基础设施，弥合大模型 RL 与机器人 RL 之间的工程 gap。

- **[simpler-env/SimplerEnv](https://github.com/simpler-env/SimplerEnv)** ⭐ 1,174 · Jupyter
  CoRL 2024 代表性 sim-to-real 评估协议，被 RT-1 / Octo / OpenVLA 等通用策略广泛采用。

- **[PhyAgentOS/PhyAgentOS-core](https://github.com/PhyAgentOS/PhyAgentOS-core)** ⭐ 2,667 · Python
  递归自改进（RSI）的物理 Agent OS，让具身智能体能通过 agentic workflow 持续自我升级。

- **[FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA)** ⭐ 721 · Python
  "数据 → 训练 → 真机部署"一站式 VLA 工程平台，降低 VLA 复现门槛。

- **[Calibra-Robotics/Calibra](https://github.com/Calibra-Robotics/Calibra)** ⭐ 34 · Python
  模仿学习数据集可观测性与 coreset 选择工具，从数据侧切入"少而精"训练。

### 🤖 仿真与框架（MuJoCo / Isaac / Gazebo / ROS）

- **[google-deepmind/mujoco](https://github.com/google-deepmind/mujoco)** ⭐ 15,439 · C++
  通用接触动力学物理仿真器，机器人学习时代的"通用语言"。

- **[newton-physics/newton](https://github.com/newton-physics/newton)** ⭐ 5,710 · Python
  基于 NVIDIA Warp 的 GPU 加速物理引擎，新一代机器人仿真底座候选。

- **[ros-navigation/navigation2](https://github.com/ros-navigation/navigation2)** ⭐ 4,758 · C++
  ROS 2 导航事实标准，移动机器人 Stack 的核心层。

- **[mujocolab/mjlab](https://github.com/mujocolab/mjlab)** ⭐ 3,160 · Python
  用 MuJoCo-Warp 复刻 Isaac Lab API，推动 RL / Robotics 研究脱离 GPU 厂商绑定。

- **[gazebosim/gz-sim](https://github.com/gazebosim/gz-sim)** ⭐ 1,527 · C++
  最新一代 Gazebo 仿真器，ROS 2 生态默认仿真前端。

- **[omnilink-tech/omnisim](https://github.com/omnilink-tech/omnisim)** ⭐ 186 · Python
  为 Coding Agent 而生的开源仿真器，原生 HTTP/JSON + MCP + ROS 2 接口，是 LLM-as-robot-controller 浪潮的基础设施。

### 🧠 VLA 与基础模型

- **[black-forest-labs/flux-action](https://github.com/black-forest-labs/flux-action)** ⭐ 122 · Python
  Black Forest Labs 开源 7B World Action Model，可针对 DROID / SO-101 微调，把"视频原生生成模型"反向用于机器人动作预测。

- **[robocurve/inspect-robots](https://github.com/robocurve/inspect-robots)** ⭐ 634 · Python
  物理 AI 开源评测框架：任意 LLM / VLA × 任意机械臂 / humanoid × 任意真机 / 仿真基准。

- **[allenai/vla-evaluation-harness](https://github.com/allenai/vla-evaluation-harness)** ⭐ 633 · Python
  AllenAI 推出的统一 VLA 评测 harness，覆盖主流机器人仿真基准。

- **[syswonder/robonix](https://github.com/syswonder/robonix)** ⭐ 366 · Rust
  机器人 Agentic OS，用 Rust 重写机器人中间件以追求低延迟与可组合性。

- **[PKU-SEC-Lab/EagleVLA-Edge](https://github.com/PKU-SEC-Lab/EagleVLA-Edge)** ⭐ 48 · C++ · CoRL'26 Spotlight
  EagleVLA 的边缘推理引擎，"预见-对齐-异步"推理范式的落地实现，面向 Jetson 等板端实时控制。

- **[lucidrains/mimic-video](https://github.com/lucidrains/mimic-video)** ⭐ 124 · Python
  Mimic-Video：超越 VLA 的视频-动作模型（SOTA 通用机器人控制）。

### 🔧 硬件与驱动

- **[enactic/openarm](https://github.com/enactic/openarm)** ⭐ 3,556 · MDX
  完全开源的人形机械臂，面向接触丰富操作的物理 AI 研究与部署。

- **[OpenDriveLab/RoboNaldo](https://github.com/OpenDriveLab/RoboNaldo)** ⭐ 54 · Python · CoRL 2026 Oral
  "RoboNaldo" 人形足球射门：稳定、强力、可复现，把 humanoid 全身控制推到动态对抗任务。

- **[arounamounchili/linkforge](https://github.com/arounamounchili/linkforge)** ⭐ 263 · Python
  "机器人描述的 LLVM"：可编程的 URDF/XACRO/SRDF 中间层，让机器人模型像编译器一样被组装 / 校验。

- **[manankharwar/fusioncore](https://github.com/manankharwar/fusioncore)** ⭐ 368 · C++
  户外 ROS 2 定位：IMU + 轮编码器 + GPS 在 23 态 UKF 下 100 Hz 融合，并在估计出错时主动报告"哪个传感器、为什么错"。

### 📊 数据集与基准

- **[StanfordVL/BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K)** ⭐ 1,732 · Python
  Stanford 推出的 1000 任务具身智能基准，是长 horizon 家用机器人研究的参考基线。

- **[AccelerationConsortium/Matterix](https://github.com/AccelerationConsortium/Matterix)** ⭐ 61 · Python
  机器人辅助化学实验的"数字孪生"，把具身智能推向受控实验室自动化。

---

## 5. 生态趋势信号

本月三条主线在同一天交汇：**① 视频原生模型反哺机器人**——Runway Praxis-1、BFL FLUX-action、Mimic-Video 与 SkeleWAM / UniWAM 同时登场，标志"World Action Model"正在取代纯 VLA 成为新基线；**② 仿真底座解耦与 GPU 化**——Newton、OmniSim、mjlab 各自从 NVIDIA Isaac 生态之外开辟 Warp / WebGPU / MuJoCo-Warp 替代路径，硬件中立性首次具备工程可行性；**③ 评测栈走向产品化**——inspect-robots、vla-evaluation-harness、EagleVLA-Edge、HumanoidToolBench 同期发力，"训-评-部署"三件套不再缺位，预示 2026 下半年具身智能的工程重心将从"能否跑通"切换为"能否被复现与上线"。

---

## 6. 值得关注

1. **🛰️ [SkeleWAM](http://arxiv.org/abs/2610.02120v1) + [flux-action](https://github.com/black-forest-labs/flux-action)** — WAM 范式刚刚完成"骨架化压缩 + 开源权重"两件大事，建议密切跟踪后续 4~8 周内是否出现"7B 级 WAM 击败 JOV / Pi0"的复现报告，这是判断 VLA 是否会被快速淘汰的关键信号。

2. **🤖 [enactic/openarm](https://github.com/enactic/openarm) + [EagleVLA-Edge](https://github.com/PKU-SEC-Lab/EagleVLA-Edge)** — 开源人形臂 + 边缘 VLA 推理引擎几乎同步成熟，意味着"自购硬件 + 本地训练 + 板端推理"的人形机器人全栈闭环第一次对学术界开放，值得作为开源 humanoid 项目的参考底座。

3. **🏥 Eli Lilly × Purdue HRI 现场反馈** ([新闻](https://www.therobotreport.com/eli-lilly-purdue-to-share-field-learnings-on-human-robot-interaction-at-robobusiness/)) — 制药 / 医疗等强监管行业开始披露 HRI 现场数据，意味着具身智能的下一个价值洼地从仓储 / 制造转向"受监管环境"，相关安全标准与人因工程规范预计将在 2027 年成形。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*