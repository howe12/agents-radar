# 具身智能开源动态日报 2026-09-03

> 数据来源: GitHub Search API (131 仓库) | ArXiv cs.RO (30 篇论文) | RSS 新闻 (43 条) | 生成时间: 2026-09-03 02:31 UTC

---

# 具身智能开源动态日报

**日期：2026 年 9 月 2 日** | 涵盖：43 条行业新闻 · 30 篇 cs.RO 论文 · 131 个活跃 GitHub 仓库

---

## 1. 今日速览

今日信号高度集中于"Physical AI 走向真实工作"这一主题：IEEE Spectrum 与 The Robot Report 同步关注 RoboBusiness 大会对食品、农业等高难度真实场景的讨论，并直指机器人安全保证中的关键缺口；arXiv 上 VLA 跨具身迁移、World Action Model 几何潜空间扩散、人形机器人安全急停等论文集中爆发，反映出社区正从"能不能跑"转向"在不同本体间能否泛化、能否安全落地"；GitHub 侧 MuJoCo、IsaacLab、Newton 等仿真基建持续高星，VLA 工程化工具链（FluxVLA、VLA-Handbook、EVA-CLIENT）密集涌现，Physical AI 从研究走向部署的链路正在加速闭环。

---

## 2. 行业脉搏

- **NexCOBOT 剖析 Physical AI 市场阻碍与加速因素**：来自控制器厂商的一线视角，指出工业自动化向 Physical AI 转型的真实痛点与催化剂。👉 <https://www.therobotreport.com/nexcobot-discusses-physical-ai-market-hurdles-and-acceleration/>
- **"食品是 Physical AI 最难问题"在 RoboBusiness 引发讨论**：Chef Robotics 等厂商把柔性物体、非结构化厨房作为检验通用操作能力的试金石。👉 <https://www.therobotreport.com/learn-why-food-is-physical-ai-hardest-problem-chef-robotics-robobusiness/>
- **The Missing Layer in Robot Safety Assurance**：呼吁在传统功能安全之上补齐 AI 行为安全层，对人形机/具身智能部署至关重要。👉 <https://www.therobotreport.com/the-missing-layer-in-robot-safety-assurance/>
- **Visko 推出 Orbis 实时模型并完成 Pre-seed 融资**：实时生成式模型与早期资本动向值得关注。👉 <https://www.therobotreport.com/visko-launches-orbis-live-model-closes-pre-seed-funding-round/>
- **AIR 选用 Elmo 运动控制技术用于无人货运飞机**：高带宽伺服控制进入航空货运自主化场景。👉 <https://www.therobotreport.com/air-uses-elmo-motion-control-technology-in-uncrewed-cargo-aircraft/>

---

## 3. 研究前沿

- **ZETA: Zero-Shot Cross-Embodiment VLA Transfer for Tabletop Manipulation**（Mi Yan 等）—— 系统研究 VLA 在未见本体上的零样本迁移，是当前多机形态泛化的关键基准。👉 <http://arxiv.org/abs/2609.02546v1>
- **World-Model-Augmented Visual Locomotion for Humanoids on Foothold-Constrained Terrain**（Yuxi Liu 等）—— 用 World Model 增强人形机器人视觉运动规划，应对稀疏、离散落脚点地形。👉 <http://arxiv.org/abs/2609.02542v1>
- **Spatially Aware World Action Model via Geometric Latent Diffusion**（Lopetegui Gonzalez 等）—— 在 WAM 框架中引入几何潜在扩散，把空间结构显式注入视频扩散模型。👉 <http://arxiv.org/abs/2609.02531v1>
- **Humanoid Safe Stop via Learned Stoppability Value**（Junfeng Long、Pieter Abbeel 等）—— 用学习的"可停性"价值函数替代固定急停动作，让机器人根据状态选择最稳妥的停止方式。👉 <http://arxiv.org/abs/2609.02358v1>
- **A Physics-Consistent Benchmark for Contact-Rich Human-Robot Interaction in Assistive Care**（Chengxiao He 等）—— 提出物理一致的接触丰富 HRI 评测基准，弥补任务级指标漏掉的物理失败。👉 <http://arxiv.org/abs/2609.02402v1>

---

## 4. 重点项目

### 🦾 机器人学习与控制
- **[RLinf/RLinf](https://github.com/RLinf/RLinf)** ⭐ 4,706 — Reinforcement Learning Infrastructure for Embodied and Agentic AI，面向具身/Agentic AI 的 RL 训练基础设施。
- **[isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab)** ⭐ 8,027 — 基于 NVIDIA Isaac Sim 的统一机器人学习框架，已成为大规模 RL/IL 训练的事实标准之一。
- **[datawhalechina/every-embodied](https://github.com/datawhalechina/every-embodied)** ⭐ 3,494 — 从 0 构建 VLA/OpenVLA/SmolVLA/Pi0 的中文实战教程，对国内学习者门槛友好。
- **[RealXiaoze/humanoid-motion-intelligence](https://github.com/RealXiaoze/humanoid-motion-intelligence)** ⭐ 469 — 人形机器人运动智能论文、开源项目与求职知识库。
- **[Hebbian-Robotics/hflow](https://github.com/Hebbian-Robotics/hflow)** ⭐ 229 — 面向机器人团队的 AI 训练数据质量验证 SDK，回应"数据即模型"时代的关键缺口。

### 🤖 仿真与框架
- **[ArduPilot/ardupilot](https://github.com/ArduPilot/ardupilot)** ⭐ 15,792 — 覆盖无人机/无人车/无人艇的开源自动驾驶固件，本周仍处活跃维护。
- **[carla-simulator/carla](https://github.com/carla-simulator/carla)** ⭐ 14,352 — 自动驾驶研究主流开源仿真器，感知-决策-控制全链路支持。
- **[google-deepmind/mujoco](https://github.com/google-deepmind/mujoco)** ⭐ 14,883 — 高性能接触动力学物理仿真器，是当前机器人学习与控制研究的核心引擎。
- **[PX4/PX4-Autopilot](https://github.com/PX4/PX4-Autopilot)** ⭐ 12,534 — 与 ArduPilot 并驾齐驱的无人机飞控开源实现。
- **[autowarefoundation/autoware](https://github.com/autowarefoundation/autoware)** ⭐ 12,038 — 全球领先的开源自动驾驶软件栈（Autoware）。
- **[newton-physics/newton](https://github.com/newton-physics/newton)** ⭐ 5,578 — 基于 NVIDIA Warp 的 GPU 加速物理仿真引擎，瞄准机器人学家与仿真研究。
- **[cyberbotics/webots](https://github.com/cyberbotics/webots)** ⭐ 4,593 — 老牌开源机器人仿真器，跨平台、教育友好。
- **[mujocolab/mjlab](https://github.com/mujocolab/mjlab)** ⭐ 2,964 — Isaac Lab API、底层由 MuJoCo-Warp 驱动，专为 RL 与机器人研究打造。

### 🧠 VLA 与基础模型
- **[FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA)** ⭐ 649 — 一站式 VLA 工程平台，覆盖数据到真机部署的全链路。
- **[allenai/vla-evaluation-harness](https://github.com/allenai/vla-evaluation-harness)** ⭐ 582 — 在任意机器人仿真基准上评测任意 VLA 模型的统一框架。
- **[sou350121/VLA-Handbook](https://github.com/sou350121/VLA-Handbook)** ⭐ 582 — VLA 方向中文实战导向学习/面试手册，填补中文工程资源空白。
- **[dexmal/opendm](https://github.com/dexmal/opendm)** ⭐ 459 — 面向通用具身智能的开世界基础模型。
- **[syswonder/robonix](https://github.com/syswonder/robonix)** ⭐ 347 — 机器人 Agentic 操作系统，以 Rust 写就，强调低延迟与可组合性。

### 🔧 硬件与驱动
- **[enactic/openarm](https://github.com/enactic/openarm)** ⭐ 2,919 — 完全开源的人形机械臂，面向接触丰富环境的物理 AI 研究与部署。

### 📊 数据集与基准
- **[StanfordVL/BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K)** ⭐ 1,677 — 加速具身 AI 研究的标志性基准平台，覆盖 1000 类日常任务。
- **[RoboVerseOrg/RoboVerse](https://github.com/RoboVerseOrg/RoboVerse)** ⭐ 1,851 — 面向可扩展、可泛化机器人学习的统一平台、数据集与基准。
- **[murobotics-ai/handumi-sw](https://github.com/murobotics-ai/handumi-sw)** ⭐ 68 — 同步双手数据采集与任意双手机器人的重定向开源软件，填补 UMI 生态空白。

---

## 5. 生态趋势信号

三条主线在今日素材中高度共振：(1) **Physical AI 落地场景被进一步细分**——食品、农业、辅助护理、航空货运等非结构化场景成为检验通用模型能力的"硬骨头"；(2) **跨本体泛化与安全成为研究核心**——ZETA 类零样本跨具身 VLA、Humanoid Safe Stop、几何潜空间 WAM 等工作集中指向"一次训练、多机部署、行为可控"这一终极目标；(3) **开源工程化工具链全面铺开**——从 Newton/MuJoCo-Warp 的 GPU 仿真、IsaacLab/RLinf 的训练基础设施，到 FluxVLA/EVA-CLIENT/vla-evaluation-harness 的部署评测，再到 enactic/openarm 等开源硬件，Physical AI 的"研究—训练—部署"闭环正在被开源社区系统化拼齐。

---

## 6. 值得关注

1. **ZETA: 零样本跨具身 VLA 迁移（[arXiv:2609.02546](http://arxiv.org/abs/2609.02546v1)）**：跨本体泛化是 VLA 从 demo 走向产品的最大瓶颈之一，该工作提供的对照研究将直接影响后续模型设计与评测协议。
2. **Humanoid Safe Stop via Learned Stoppability Value（[arXiv:2609.02358](http://arxiv.org/abs/2609.02358v1)）**：把"能否安全停下"作为可学习价值函数，与 The Robot Report 当日讨论的"机器人安全保证缺失层"形成上下呼应，是具身 AI 走向工厂/家庭的必经关卡。
3. **[newton-physics/newton](https://github.com/newton-physics/newton)（⭐ 5,578）**：基于 NVIDIA Warp 的 GPU 物理引擎与 MuJoCo/Isaac 形成新的仿真三角，叠加本周 enactic/openarm 与 FluxVLA 等部署工具的活跃更新，是观察"Physical AI 全栈开源化"的关键节点。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*