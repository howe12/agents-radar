# 具身智能开源动态日报 2026-10-07

> 数据来源: GitHub Search API (129 仓库) | ArXiv cs.RO (30 篇论文) | RSS 新闻 (42 条) | 生成时间: 2026-10-07 03:45 UTC

---

# 具身智能开源动态日报

**日期：2026 年 1 月 · 第 17 周**

---

## 📰 今日速览

今日具身智能生态呈现"硬件迭代 + 基础设施加速"双重信号：Boston Dynamics 任命前 Amazon 高管 Rohit Prasad 为新 CEO，Atlas 机器人同步发布非仿人构型的新机械手，标志其从"高难度演示"向"商业化产品"路径收敛；研究端，第一人称人类视频学习（EgoLAP）、3D 操作世界模型（DepthWorld）与低成本开源人形（PhoneBot）三篇论文共同指向"数据规模化 + 硬件民主化"的双引擎；开源仓库方面，Black Forest Labs 发布首个 7B 开源世界动作模型 FLUX-Action、RLinf/Isaac Lab 持续主导具身 RL 基础设施、Newton/MuJoCo-Warp 推动 GPU 物理仿真规模化。

---

## 🏭 行业脉搏

1. **Boston Dynamics 迎来新 CEO**：任命前 Amazon Alexa AI 负责人 Rohit Prasad 接任，标志着这家老牌人形机器人公司从"技术展示"转向"消费级产品与商业化落地"阶段。
   链接：https://www.therobotreport.com/boston-dynamics-appoints-former-amazon-executive-rohit-prasad-new-ceo/

2. **Atlas 新机械手放弃仿人构型**：新设计在工业任务负载下可能超越人类手型，意味着"类人 ≠ 最优"的设计哲学正在被一线厂商实证。
   链接：https://spectrum.ieee.org/robust-robot-hand

3. **TwelveLabs 发布 Pegasus 1.6**：将长视频理解能力引入 Physical AI，让机器人能基于历史视觉信息做物理推理，是 VLM/VLA 与 Physical AI 融合的标志性节点。
   链接：https://www.therobotreport.com/pegasus-1-6-brings-video-understanding-physical-ai-says-twelvelabs/

4. **FireDome 推出野火防御自主"火炮"**：将机器人自治能力扩展到应急救援/灾害对抗场景，是 physical AI 应用边界进一步外延的体现。
   链接：https://www.therobotreport.com/firedome-builds-autonomous-artillery-for-wildfire-defense/

5. **Teradyne 战略投资 Bright Machines**：把机器人引入 AI 基础设施（服务器/数据中心）制造环节，"机器人造机器人/AI 设备"的飞轮正在成型。
   链接：https://www.therobotreport.com/teradyne-invests-ibright-machines-brings-robotics-ai-infrastructure-manufacturing/

---

## 🔬 研究前沿

1. **PhoneBot — 用手机做主控的极简开源人形机器人**
   论文 http://arxiv.org/abs/2610.08737v1
   把智能手机作为"自带 IMU/计算/电池"的主控模块，最大限度压低硬件门槛，为高校和初学者提供真正可复现的低成本人形平台。

2. **EgoLAP — 通过语言-动作推理从第一人称人类数据学习**
   论文 http://arxiv.org/abs/2610.08726v1
   利用人类 egocentric 视频绕过昂贵机器人示教，缓解 embodiment gap，是"用互联网人类视频数据喂养机器人"路径的关键探索。

3. **DepthWorld — 面向机器人操作的 3D 世界模型**
   论文 http://arxiv.org/abs/2610.08780v1
   提供数据驱动的 3D 操作世界模型，作为传统仿真器的补充，对 sim-to-real 与策略评估意义重大。

4. **QF3 — 带滤波 Q 梯度的快速 Flow RL**
   论文 http://arxiv.org/abs/2610.08789v1
   针对 Flow Policy + RL 训练稳定性与效率问题，对将 RL 引入扩散/流式机器人策略训练具有方法论贡献。

5. **VeriFine — 具身自我改进推理的可扩展验证**
   论文 http://arxiv.org/abs/2610.08761v1
   研究 self-improving 策略的验证问题，是具身 agent 长期自主学习的关键拼图。

---

## ⭐ 重点项目

### 🦾 机器人学习与控制（模仿 / 强化 / 策略学习）

- **RLinf/RLinf** ⭐5,446 — 面向具身与 Agentic AI 的强化学习训练框架，是当前具身 RL 基础设施的核心项目。
  https://github.com/RLinf/RLinf

- **Farama-Foundation/Gymnasium** ⭐12,628 — RL 环境 API 标准（前 OpenAI Gym），几乎所有机器人 RL 研究的基座。
  https://github.com/Farama-Foundation/Gymnasium

- **OpenPipe/ART** ⭐10,786 — 多步 Agent GRPO 训练框架，已被广泛用于真实世界任务 agent 的"在职训练"。
  https://github.com/OpenPipe/ART

- **Hebbian-Robotics/hflow** ⭐286 — 面向机器人团队的 AI 训练数据质量验证 SDK，关注"数据质量 > 数据数量"趋势。
  https://github.com/Hebbian-Robotics/hflow

- **StanfordVL/BEHAVIOR-1K** ⭐1,737 — 加速具身 AI 研究的统一任务平台与基准（家务场景为主）。
  https://github.com/StanfordVL/BEHAVIOR-1K

### 🤖 仿真与框架（MuJoCo / Isaac / Gazebo / ROS）

- **google-deepmind/mujoco** ⭐15,494 — MuJoCo 物理仿真器，机器人研究事实标准之一。
  https://github.com/google-deepmind/mujoco

- **isaac-sim/IsaacLab** ⭐8,289 — NVIDIA Isaac Lab，多物理/多渲染器统一的机器人学习框架。
  https://github.com/isaac-sim/IsaacLab

- **newton-physics/newton** ⭐5,726 — 基于 NVIDIA Warp 的 GPU 加速开源物理引擎，专为机器人与仿真研究设计。
  https://github.com/newton-physics/newton

- **mujocolab/mjlab** ⭐3,175 — MuJoCo-Warp 驱动的 Isaac Lab API，向 MuJoCo 生态注入 GPU 仿真能力。
  https://github.com/mujocolab/mjlab

- **dora-rs/dora** ⭐3,993 — 基于 Rust 的低延迟 AI 机器人中间件，AI 机器人应用的数据流式编程范式代表。
  https://github.com/dora-rs/dora

### 🧠 VLA 与基础模型（视觉-语言-动作 / 具身基础模型）

- **dexmal/opendm** ⭐2,206 — 面向通用具身智能的开世界基础模型，VLA 类工作的开源重要入口。
  https://github.com/dexmal/opendm

- **black-forest-labs/flux-action** ⭐138 — Black Forest Labs 发布的 7B 开源"世界动作模型"，支持 DROID、SO-101 等机器人动作预测。
  https://github.com/black-forest-labs/flux-action

- **Open-X-Humanoid/HEX** ⭐337 — 面向全尺寸人形机器人的 whole-body VLA 框架。
  https://github.com/Open-X-Humanoid/HEX

- **allenai/vla-evaluation-harness** ⭐638 — 任何 VLA 模型在任意机器人仿真基准上的统一评测框架。
  https://github.com/allenai/vla-evaluation-harness

### 🔧 硬件与驱动

- **enactic/openarm** ⭐3,579 — 面向接触丰富物理 AI 研究的开源人形手臂平台。
  https://github.com/enactic/openarm

- **murobotics-ai/handumi-sw** ⭐75 — 开源 HandUMI 软件，支持双手同步数据采集与 retargeting 到任意双臂平台。
  https://github.com/murobotics-ai/handumi-sw

### 📊 数据集与基准

- **RoboVerseOrg/RoboVerse** ⭐1,866 — 可扩展、可泛化机器人学习的统一平台、数据集与基准。
  https://github.com/RoboVerseOrg/RoboVerse

---

## 🌐 生态趋势信号

具身智能正在沿三条主线快速演进：**其一，"视频/世界模型 + 机器人"加速融合**——TwelveLabs Pegasus 1.6、DepthWorld 3D 操作世界模型、FLUX-Action 世界动作模型三件事同日发生，标志视频理解已成为 Physical AI 的"前置基础设施"；**其二，数据来源从机器人示教向人类 egocentric 视频扩散**，EgoLAP 与 handumi-sw 共同指向"用便宜的人类数据替代昂贵遥操作"；**其三，仿真硬件 GPU 化**——Newton、mjlab、MuJoCo-Warp 同步推进，配合 Isaac Lab、RLinf 等 RL 训练栈，"大规模 GPU 端到端具身训练"已成新范式。三股力量叠加，意味着具身智能正在脱离"演示视频时代"，进入可规模化训练与商业化交付阶段。

---

## 👀 值得关注

1. **Boston Dynamics 管理层更替 + Atlas 新机械手**（行业）：CEO 由 Amazon 出身的 Rohit Prasad 接任，配合非仿人构型机械手，可能预示 BD 将加速走向工业/商业场景，而非继续追求"技术演示天花板"，建议持续跟踪其后续商业化路线与产品定价。

2. **FLUX-Action（Black Forest Labs 7B 开源世界动作模型）+ EgoLAP 论文**（研究/开源）：开源世界动作模型与"用人类 egocentric 视频学机器人策略"在同一周期出现，意味着"可复现、零遥操作"的 VLA 训练路径正在快速打通，是研究者和小型团队入局的最佳窗口期。

3. **Newton 物理引擎 + mjlab + IsaacLab**（生态）：Newton（NVIDIA Warp）+ mjlab（MuJoCo-Warp）+ IsaacLab 三套 GPU 物理仿真并进，长期可能重写"sim-to-real"成本结构，建议优先关注 RLinf/Newton 集成进展。

---

*日报基于 IEEE Spectrum、The Robot Report、ArXiv cs.RO、GitHub Trending 等公开信息整理。*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*