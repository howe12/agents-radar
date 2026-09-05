# 具身智能开源动态日报 2026-09-05

> 数据来源: GitHub Search API (130 仓库) | ArXiv cs.RO (30 篇论文) | RSS 新闻 (40 条) | 生成时间: 2026-09-05 02:26 UTC

---

# 具身智能开源动态日报
*2026 年 1 月 · 第 X 期*

---

## 一、今日速览

**本日信号：** 资本市场继续重仓具身智能底层——Medtronic 以 **7 亿美元** 注资手术机器人公司 Cornerstone Robotics，Lyte 获 **1.65 亿美元** A 轮用于 4D 感知芯片；研究侧 **VLA 与基础模型** 进入"分层 + 世界模型引导"阶段（τ0-VLA、AdaRoboVLG），**端到端自动驾驶** 在离散-连续动作桥接上取得新进展；开源生态中 **Newton 物理引擎、mjlab（Isaac Lab API + MuJoCo-Warp）、OpenArm 开源人形臂** 形成新三角，具身 RL 基础设施（RLinf、ART）走向标准化。

---

## 二、行业脉搏

| # | 动态 | 意义 |
|---|------|------|
| 1 | [**Medtronic 投资 7 亿美元入股 Cornerstone Robotics**](https://www.therobotreport.com/medtronic-invests-700m-in-surgical-partner-cornerstone-robotics/) | 手术机器人赛道 2026 年开年最大单笔投资，验证"医疗+具身"商业化路径 |
| 2 | [**Lyte 完成 1.65 亿美元融资，押注机器人环境感知芯片**](https://www.therobotreport.com/lyte-raises-165m-help-robots-better-sense-their-surroundings/) | 4D 感知芯片成为机器人"感官升级"新热点，硬件-算法协同趋势明显 |
| 3 | [**FPGA 正在成为 Physical AI 的安全守门人**](https://www.therobotreport.com/how-fpgas-become-the-gatekeepers-of-physical-ai-security/) | 当机器人接入物理世界，硬件级安全（FPGA TrustZone 类方案）成为强制项 |
| 4 | [**Robot.com × Sodexo 部署更多人行道配送机器人**](https://www.therobotreport.com/robot-com-partners-sodexo-rolls-out-more-sidewalk-delivery-robots/) | 商用配送机器人从 PoC 走向规模化部署，B 端运营成为关键能力 |
| 5 | [**JAKA 反击 Teradyne 机器人专利诉讼**](https://www.therobotreport.com/jaka-hits-teradyne-robotics-back-over-patent-dispute/) | 中国协作机器人厂商首次正面回击海外专利诉讼，反映国产厂商技术自信提升 |

---

## 三、研究前沿（cs.RO）

| # | 论文 | 贡献 |
|---|------|------|
| 1 | [**GIFT：面向机器人操作的动作导向结构化监督中间特征训练**](http://arxiv.org/abs/2609.04193v1) | 把 VLP 与世界模型的"中间表征"用动作一致性显式约束，缓解 imitation learning 的语义-动力学耦合问题 |
| 2 | [**AdaRoboVLG：可组合基础先验的自适应视觉-语言抓取**](http://arxiv.org/abs/2609.04096v1) | 任务自适应 VLG 框架，支持跨任务、跨物体的可泛化抓取合成 |
| 3 | [**Continuous Actions from Discrete Minds：潜空间对齐规划用于端到端自动驾驶**](http://arxiv.org/abs/2609.04070v1) | 解决 VLM 离散推理 ↔ 物理连续控制之间的桥接难题，端到端规划关键一步 |
| 4 | [**MulDP：四足机器人复杂地形跑酷的多模态扩散策略**](http://arxiv.org/abs/2609.03984v1) | 扩散策略在腿式 locomotion 的多模态扩展，提升 parkour 场景鲁棒性 |
| 5 | [**Subspace Inference 加速主动偏好奖励学习**](http://arxiv.org/abs/2609.04066v1) | 让 RLHF 在机器人奖励建模上更省样本，对 human-in-the-loop 训练意义重大 |

补充亮点：[**Headland Coverage Path Planning**](http://arxiv.org/abs/2609.04103v1) 把自动驾驶 corner-case 研究扩展到农业场景；[**Automated Weld Seam Recognition**](http://arxiv.org/abs/2609.03970v1) 用摄影测量 + 语义分割打通"焊接 → 打磨"全流程。

---

## 四、重点项目（按分类整理）

### 🦾 机器人学习与控制

- ⭐ [**RLinf/RLinf**](https://github.com/RLinf/RLinf) · **4,732**
  面向"具身 + Agentic AI"的强化学习基础设施，提供从仿真到真实机器人的统一 RL 训练栈。

- ⭐ [**OpenPipe/ART**](https://github.com/OpenPipe/ART) · **10,696**
  Agent Reinforcement Trainer，支持 GRPO 对多步骤 Agent 进行"在岗训练"，是当前 Agentic RL 工程化最成熟的开源方案之一。

- ⭐ [**RoboTwin-Platform/RoboTwin**](https://github.com/RoboTwin-Platform/RoboTwin) · **2,811**
  ICML 2026 收录的双臂操作仿真基准，对 VLA / IL 评测尤为关键。

### 🤖 仿真与框架

- ⭐ [**isaac-sim/IsaacLab**](https://github.com/isaac-sim/IsaacLab) · **8,041**
  基于 NVIDIA Isaac Sim 的统一机器人学习框架，已成为 SOTA 论文事实标准。

- ⭐ [**google-deepmind/mujoco**](https://github.com/google-deepmind/mujoco) · **14,929**
  Multi-Joint dynamics with Contact，机器人研究的事实标准物理引擎。

- ⭐ [**mujocolab/mjlab**](https://github.com/mujocolab/mjlab) · **2,986**
  "Isaac Lab API + MuJoCo-Warp"，把 Isaac Lab 生态体验带到 MuJoCo/Warp 上，是 2026 年最值得关注的"新基础设施"。

- ⭐ [**newton-physics/newton**](https://github.com/newton-physics/newton) · **5,589**
  NVIDIA Warp 之上的 GPU 加速物理仿真引擎，与 MuJoCo-Warp 并列为下一代机器人仿真底座。

- ⭐ [**carla-simulator/carla**](https://github.com/carla-simulator/carla) · **14,366**
  自动驾驶研究的事实标准仿真器，端到端学习、VLA × AD 研究的必选项。

- ⭐ [**cyberbotics/webots**](https://github.com/cyberbotics/webots) · **4,598**
  开源机器人仿真经典工具，对教学与中等复杂度任务仍是首选。

### 🧠 VLA 与基础模型

- ⭐ [**sii-research/tau-0-vla**](https://github.com/sii-research/tau-0-vla) · **608**
  τ0-VLA：引入**世界模型引导的 Test-Time Computation** 的分层机器人基础模型，代表 VLA 2.0 路线。

- ⭐ [**FluxVLA/FluxVLA**](https://github.com/FluxVLA/FluxVLA) · **650**
  "Data → Real Robot Deployment" 一体化 VLA 工程平台，降低复现门槛。

- ⭐ [**allenai/vla-evaluation-harness**](https://github.com/allenai/vla-evaluation-harness) · **588**
  统一 VLA 评测框架：任意 VLA × 任意机器人仿真基准，对横向对比意义重大。

- ⭐ [**datawhalechina/every-embodied**](https://github.com/datawhalechina/every-embodied) · **3,533**
  从 0 构建 OpenVLA/SmolVLA/Pi0 的中文实战教程，中文社区具身学习首选入口。

### 🔧 硬件与驱动

- ⭐ [**ArduPilot/ardupilot**](https://github.com/ArduPilot/ardupilot) · **15,808**
  全球最大开源飞控社区，涵盖 ArduPlane/Copter/Rover/Sub。

- ⭐ [**PX4/PX4-Autopilot**](https://github.com/PX4/PX4-Autopilot) · **12,548**
  学术界与商业无人机首选飞控，与 ROS 2 / Gazebo 深度集成。

- ⭐ [**enactic/openarm**](https://github.com/enactic/openarm) · **2,924**
  **完全开源的人形机械臂**，面向接触丰富的物理 AI 研究与部署，是社区对"硬件封闭"问题的重要回应。

- ⭐ [**murobotics-ai/handumi-sw**](https://github.com/murobotics-ai/handumi-sw) · **69**
  HandUMI 软件栈：双臂同步数据采集 + 任意双臂机器人的 retargeting，喂给 VLA 训练的高质量数据源。

### 📊 数据集与基准

- ⭐ [**RoboVerseOrg/RoboVerse**](https://github.com/RoboVerseOrg/RoboVerse) · **1,854**
  统一平台 / 数据集 / 基准，目标是"可扩展、可泛化"的机器人学习。

- ⭐ [**StanfordVL/BEHAVIOR-1K**](https://github.com/StanfordVL/BEHAVIOR-1K) · **1,682**
  1000 个日常任务的具身 AI 研究平台，社区与 Discord 支持活跃。

- ⭐ [**Hebbian-Robotics/hflow**](https://github.com/Hebbian-Robotics/hflow) · **235**
  面向机器人团队的**数据质量验证 SDK**，从源头保障 imitation learning 数据质量。

---

## 五、生态趋势信号

**1. 仿真基础设施正在"双轨化"。** MuJoCo-Warp（mjlab）与 Newton 同时在 GPU 加速物理方向发力，NVIDIA Isaac Sim 仍是事实标准，但"轻量 + 可微 + Warp 加速"成为新共识；Webots、Gazebo 在教学/中等复杂度场景保持稳固。

**2. VLA 进入"分层 + 世界模型"阶段。** τ0-VLA 用世界模型引导 test-time computation，AdaRoboVLG 用组合式基础先验做自适应抓取，sii-research、allenai、FluxVLA 共同把 VLA 推上"工程化 + 评测标准化"轨道。

**3. 资本与产业开始押注"上游感官+下游手术"。** Lyte（感知芯片）、Medtronic × Cornerstone（手术机器人）合计接近 9 亿美元——意味着**价值链正从"通用人形"向"垂直具身（医疗 / 工业感知）"迁移**。

**4. 端到端自动驾驶与具身学习加速融合。** CARLA 持续高活跃，论文端出现"离散思维 + 连续动作"桥接方法（2609.04070v1），未来 VLA 与端到端 AD 边界将进一步模糊。

**5. 数据质量成为下一道护城河。** Hebbian 的 hflow、OpenArm、HandUMI 三者代表同一信号——**VLA 时代的瓶颈已从"模型架构"转向"数据采集 + 数据治理"**。

---

## 六、值得关注

1. 🥇 [**τ0-VLA：世界模型引导的分层机器人基础模型**](https://github.com/sii-research/tau-0-vla)
   **理由：** 第一次在 VLA 中显式引入"世界模型 + Test-Time Compute"，可能在 2026 年成为新一代基础模型的事实路线图，建议优先复现。

2. 🥈 [**Medtronic × Cornerstone 7 亿美元合作**](https://www.therobotreport.com/medtronic-invests-700m-in-surgical-partner-cornerstone-robotics/)
   **理由：** 手术机器人赛道史上最大单笔投资之一，且合作对象来自中国——**国产手术机器人有望复制"工业协作机器人逆袭"路径**，值得长期跟踪资本与监管节奏。

3. 🥉 [**Newton + mjlab 双引擎并行**](https://github.com/newton-physics/newton) / [**mujocolab/mjlab**](https://github.com/mujocolab/mjlab)
   **理由：** 物理仿真正在经历"GPU 化 + 可微化"

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*