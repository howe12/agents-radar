# 具身智能开源动态日报 2026-09-29

> 数据来源: GitHub Search API (131 仓库) | ArXiv cs.RO (30 篇论文) | RSS 新闻 (41 条) | 生成时间: 2026-09-29 03:41 UTC

---

# 具身智能开源动态日报

**日期：2025 年 · 行业分析师视角**

---

## 一、今日速览

今日三方信号高度收敛于"VLA 工程化与仿真器大一统"两条主线。行业侧，Gecko Robotics 联手 NVIDIA 切入工业巡检 AI Agent 安全，揭示具身智能正在从演示型 demo 走向产线级闭环；研究侧，多篇 VLA 论文不约而同聚焦"鲁棒性、可拒绝性、长时记忆"——即从"能跑"到"敢用"的工程临界点；仓库侧，Newton 物理引擎、mjlab（Isaac Lab API on MuJoCo-Warp）、IsaacLab 三大仿真栈并行迭代，叠加 DORA 数据流中间件，标志着一个由 GPU 加速物理 + 数据流架构 + 模块化机器人学习框架共同支撑的下一代具身开发栈正在收敛成型。

---

## 二、行业脉搏

**1. Gecko Robotics × NVIDIA：工业巡检 AI Agent 加持安全与控制**
🔗 https://www.therobotreport.com/gecko-robotics-works-with-nvidia-adds-ai-agent-security-and-control/
意义：首次将 NVIDIA 的 AI Agent 体系引入爬壁检测机器人，意味着工业具身智能的"边缘推理 + 安全护栏"模式开始标准化，远超传统视觉检测的范畴。

**2. Robonomics 临界点：人形机器人的加密钱包与经济自治**
🔗 https://www.therobotreport.com/robotics-threshold-economic-autonomy-crypto-wallets-humanoids/
意义：当人形机器人具备独立"经济身份"，其商业模型从卖机器转向"卖服务/卖劳动力"，是具身智能商业化路径的一次范式跃迁。

**3. 超越阿西莫夫：机器人与 AI 安全的新规则需求**
🔗 https://www.therobotreport.com/asimovs-laws-are-not-enough-keep-robotics-ai-safe/
意义：随着 VLA / Foundation Policy 上车，三定律已无法覆盖现实安全场景，监管/标准层动作有望加速，影响所有具身厂商。

**4. Raise Robotics 出席 RoboBusiness：田间机器人的规模化之道**
🔗 https://www.therobotreport.com/raise-robotics-discuss-scaling-field-robots-robobusiness/
意义：户外非结构环境具身的量产门槛被摆上台面，是从实验室走向农业/建筑场景的关键风向标。

**5. Barbara Mazzolai：呼吁建立"可持续机器人学"新学科**
🔗 https://spectrum.ieee.org/sustainability-robotics-barbara-mazzolai
意义：从仿生可持续材料到软体机器人长期演进路径，意味着具身智能的下一波创新将不仅来自算力，也来自材料与生态。

---

## 三、研究前沿

**1. EMPIRIC：通过实验学习残差世界模型用于机器人规划**
🔗 http://arxiv.org/abs/2609.35047v1
Yichao Liang, Amber Li 等。机器人通过实验主动建模未知物体的动力学，再用残差世界模型做决策，缩小了 world model 从"看"到"试"的鸿沟，对长时任务规划尤为关键。

**2. Do Not Cut When Uncertain：VLA 策略的可拒绝校准决策头**
🔗 http://arxiv.org/abs/2609.35039v1
Heng Zhang。首次为行为克隆/流匹配的 VLA 提供"不知道就说不知道"的机制——这对采摘、医疗等高风险具身场景的安全部署至关重要，是 VLA 从演示到产品化的关键补丁。

**3. ActionUNet：多尺度高效微调提升 VLA 鲁棒性**
🔗 http://arxiv.org/abs/2609.34982v1
Di Zhu, Ziheng Yan 等。以 U-Net 风格的多尺度融合机制轻量化微调 VLA，在不破坏基础能力的前提下增强对视觉扰动的鲁棒性，是 VLA 落地中"小成本大收益"的典型方案。

**4. QuadHand：紧凑型四旋翼空中机械臂 + MRC-SDF 全身运动规划**
🔗 http://arxiv.org/abs/2609.35094v1
Rui Jin, Ruiyang Liu 等。把"飞行 + 抓取"做成一个紧凑硬件平台，并给出基于有符号距离场的全身运动规划，对空中具身操作（空中装配、空中抓取）有直接工程价值。

**5. NavJev：以动作中心视觉压缩的高效零样本 VLN**
🔗 http://arxiv.org/abs/2609.34969v1
Kai Sheng, Liuyi Wang 等。提出"动作中心"视觉压缩 + 判别式动作-语义记忆，显著降低 MLLM 在 Vision-and-Language Navigation 中的视觉 token 开销，是把 MLLM 真正搬上机器人导航平台的实用方案。

---

## 四、重点项目

### 🦾 机器人学习与控制（模仿学习 / 强化学习 / 策略学习）

- **IsaacLab** · ⭐ 8,244
  https://github.com/isaac-sim/IsaacLab
  NVIDIA 主导的多物理/多渲染器统一机器人学习框架，是当下端到端机器人学习的事实标准底座。

- **RoboCasa** · ⭐ 1,767
  https://github.com/robocasa/robocasa
  大规模家庭日常任务仿真，专门服务通用机器人的模仿/RL 数据生成，已成为通用家用机器人训练标配环境。

- **RoboVerse** · ⭐ 1,866
  https://github.com/RoboVerseOrg/RoboVerse
  面向可扩展、可泛化机器人学习的统一平台 + 数据集 + 基准，定位"机器人界的 ImageNet"。

- **enactic/openarm** · ⭐ 3,526
  https://github.com/enactic/openarm
  面向接触丰富任务的完全开源仿人机械臂，对学术界的真实硬件 RL/IL 实验意义重大。

### 🤖 仿真与框架（MuJoCo / Isaac / Gazebo / ROS）

- **mujoco (DeepMind)** · ⭐ 15,374
  https://github.com/google-deepmind/mujoco
  通用接触动力学仿真器，长期占据机器人研究核心地位，Warp 化趋势正推动其 GPU 加速。

- **newton-physics/newton** · ⭐ 5,698
  https://github.com/newton-physics/newton
  基于 NVIDIA Warp 的 GPU 加速开源物理引擎，对大规模并行 RL 训练与具身仿真有显著加速效果。

- **mujocolab/mjlab** · ⭐ 3,142
  https://github.com/mujocolab/mjlab
  基于 MuJoCo-Warp 的 Isaac Lab API 兼容 RL 框架，意味着 Isaac 生态正在向 MuJoCo 体系迁移。

- **navigation2** · ⭐ 4,752
  https://github.com/ros-navigation/navigation2
  ROS 2 官方导航框架，仍是移动机器人产学两界最稳定的部署路径。

- **stack-of-tasks/pinocchio** · ⭐ 3,766
  https://github.com/stack-of-tasks/pinocchio
  刚体动力学与解析导数库，是众多 RL/最优控制栈的"动力学底层"。

- **dora-rs/dora** · ⭐ 3,983
  https://github.com/dora-rs/dora
  数据流驱动的机器人中间件，用图化流水线替代传统 ROS node 拼接，是 AI-native 机器人栈的关键拼图。

### 🧠 VLA 与具身基础模型

- **FluxVLA** · ⭐ 718
  https://github.com/FluxVLA/FluxVLA
  一体化 VLA 工程平台，覆盖数据、真机部署全链路。

- **dexmal/opendm** · ⭐ 2,184
  https://github.com/dexmal/opendm
  面向通用具身智能的开放世界基础模型，对标大模型路线的"具身 GPT 时刻"。

- **ros-claw/rosclaw** · ⭐ 210
  https://github.com/ros-claw/rosclaw
  具身 Agent 的物理 AI 运行时：受控治理、可验证经验、物理记忆、技能演化——是 ROS 时代向 Agentic OS 过渡的代表项目。

- **wadeKeith/Awesome-Embodied-AI** · ⭐ 248
  https://github.com/wadeKeith/Awesome-Embodied-AI
  综述、VLA、数据集、仿真器、人形机器人、学习与安全的精选资源列表，入门具身社区的最佳索引。

- **syswonder/robonix** · ⭐ 366
  https://github.com/syswonder/robonix
  "机器人的 Agentic 操作系统"，Rust 实现，体现新一代机器人 OS 的工程方向。

### 🔧 硬件与驱动

- **PX4-Autopilot** · ⭐ 12,709
  https://github.com/PX4/PX4-Autopilot
  开源无人机飞控事实标准，配合 ROS 2 + Gazebo SITL 主导无人机具身研究。

- **ArduPilot** · ⭐ 15,953
  https://github.com/ArduPilot/ardupilot
  历史最悠久的开源飞控，覆盖固定翼、多旋翼、无人车、潜航器等全平台。

- **linorobot/linorobot2** · ⭐ 1,030
  https://github.com/linorobot/linorobot2
  ROS 2 移动机器人（2WD/4WD/麦轮）参考平台，DIY 与教学首选。

### 📊 数据集与基准

- **BEHAVIOR-1K (StanfordVL)** · ⭐ 1,728
  https://github.com/StanfordVL/BEHAVIOR-1K
  加速具身 AI 研究的标志性基准平台，包含 1,000 个日常任务场景。

- **robocurve/inspect-robots** · ⭐ 617
  https://github.com/robocurve/inspect-robots
  开源物理 AI 评测框架，可在任意真机/仿真器上跑任意 LLM/VLA，推动"机器人版 MMLU"建设。

- **Hebbian-Robotics/hflow** · ⭐ 284
  https://github.com/Hebbian-Robotics/hflow
  机器人数据质量验证 SDK，切入"数据质量比模型更重要"的现实痛点。

- **Calibra-Robotics/Calibra** · ⭐ 33
  https://github.com/Calibra-Robotics/Calibra
  模仿学习数据可观测与 coreset 选择工具，呼应"少而精"训练数据的新趋势。

---

## 五、生态趋势信号

综合三方信息，今日最清晰的信号是**"VLA 走向工程化"**：研究侧出现"可拒绝决策头""多尺度微调""长时记忆"等补强型工作，行业侧 Gecko × NVIDIA 表明 Agent 安全护栏开始进入工业部署，仓库侧 FluxVLA / ros-claw / opendm / robonix 形成"VLA 平台 + Agentic OS + 基础模型 + 中间件"完整栈。**第二条主线是"仿真大一统"**：Newton 物理引擎、mjlab（Isaac Lab API on MuJoCo-Warp）、IsaacLab、DORA 数据流中间件并进，意味着过去割裂的 MuJoCo / Isaac / Gazebo / ROS 生态正在被 GPU 加速物理与数据流架构重写。第三条暗线则来自 Robonomics 与可持续机器人学——具身智能的商业模式与材料/伦理边界正同步被重新定义。

---

## 六、值得关注

**1. VLA 的"可拒绝校准"机制**（论文：Do Not Cut When Uncertain）
🔗 http://arxiv.org/abs/2609.35039v1
理由：VLA 走出实验室的最后一公里，往往不是能力问题而是"敢不敢在不确定时停手"。这一工作把不确定性显式建模进决策头，是高风险具身场景落地的关键工程补丁，值得关注其后续在真实机器人上的评测。

**2. ros-claw：具身 Agent 的物理 AI 运行时**（仓库）
🔗 https://github.com/ros-claw/rosclaw
理由：项目提出"governed action / verified experience / physical memory / skill evolution"四件套，把 ROS 时代的机器人中间件推进到 Agentic OS 时代。如果后续与 VLA/基础模型生态打通，可能成为下一代机器人"操作系统级"基础设施。

**3. Newton 物理引擎 + mjlab 框架组合**（仓库）
🔗 https://github.com/newton-physics/newton
🔗 https://github.com/mujocolab/mjlab
理由：Isaac Lab API 兼容 + MuJoCo-Warp GPU 加速的组合，是把具身 RL 训练吞吐推上新台阶的关键拼图。建议关注其与主流 VLA / World Model 训练流水线的耦合进度。

---

*本日报基于公开信息综合分析，仅供研究使用。*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*