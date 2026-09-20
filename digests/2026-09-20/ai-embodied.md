# 具身智能开源动态日报 2026-09-20

> 数据来源: GitHub Search API (127 仓库) | ArXiv cs.RO (0 篇论文) | RSS 新闻 (48 条) | 生成时间: 2026-09-20 02:51 UTC

---

# 具身智能开源动态日报

**报告日期：基于今日 IEEE Spectrum / The Robot Report / ROS Discourse + GitHub Trending 综合整理**

---

## 1. 今日速览

- **产业整合**：SoftBank 宣布收购 Robotics and AI Institute，叠加 F-Prime Capital 将分享机器人投资观察，行业头部资本正加速向基础研究端集中。
- **安全成为分水岭**：IEEE Spectrum 连续关注"AI 时代机器人安全"与 Digit 5"真正安全的人形机器人"——物理 AI 的安全标准正在从概念走向工程化。
- **VLA 工程化提速**：RoboTwin 2.0（ICML 2026）、InternVLA-A1、OpenBMB/SimpleMemVLA、Open-X-Humanoid/HEX 等多个 VLA 项目活跃，模型—训练—评测—部署全链路工具开始成形。
- **仿真后端多元化**：除 NVIDIA Isaac Lab 外，Newton（基于 Warp）、MuJoCo-Warp 系（mjlab）、DeepMind MuJoCo / Menagerie 持续迭代，物理仿真进入"多极"时代。
- **论文端安静**：今日 cs.RO 无新增论文。

---

## 2. 行业脉搏

| # | 动态 | 来源 | 意义 |
|---|------|------|------|
| 1 | **SoftBank 同意收购 Robotics and AI Institute** | [The Robot Report](https://www.therobotreport.com/softbank-agrees-to-acquire-robotics-and-ai-institute/) | 头部资本整合具身基础研究资源，可能进一步推动通用机器人的人才与算法集中 |
| 2 | **Digit 5 或为首款"真正安全"的人形机器人工人** | [IEEE Spectrum](https://spectrum.ieee.org/humanoid-robot-safety) | 物理 AI 落地最大的瓶颈从能力转向安全，工程级安全标准开始成型 |
| 3 | **Vicone：AI 时代重新思考机器人安全** | [IEEE Spectrum](https://spectrum.ieee.org/physical-ai-robot-cybersecurity-vicone) | 引入"physical AI cybersecurity"概念，强调 VLA/策略层面临的新型攻击面 |
| 4 | **Neptune Medical Triton 1 获 FDA 批准** | [The Robot Report](https://www.therobotreport.com/neptune-medical-earns-fda-clearance-triton-1-robotic-system/) | 医疗机器人商业化路径清晰，监管通过案例值得跟踪 |
| 5 | **F-Prime Capital + 机器人"picks and shovels"投资策略** | [The Robot Report (F-Prime)](https://www.therobotreport.com/f-prime-capital-give-insights-state-robotics-investments-robobusiness/) / [The Robot Report (Strategy)](https://www.therobotreport.com/the-picks-and-shovels-strategy-behind-the-robotics-boom/) | 投资视角从整机转向基础工具链/中间件，与开源生态"卖铲子"逻辑一致 |

补充关注：[Hirebotics 为协作机器人增加线跟踪与直线导轨](https://www.therobotreport.com/hirebotics-adds-line-tracking-linear-rail-capabilities-cobots/) 显示 cobot 正在向更大工作空间扩展。

---

## 3. 研究前沿

> ⚠️ 今日 ArXiv cs.RO 暂无新增论文。建议关注昨日或本周已收录的 Open-X-Humanoid/HEX（全尺寸人形 VLA）、InternVLA-A1、HuRo（CoRL 2026，机器人化人类视频）等开源配套论文。

---

## 4. 重点项目

### 🦾 机器人学习与控制

- **[harvard-edge/cs249r_book](https://github.com/harvard-edge/cs249r_book)** ⭐28,364 — Harvard CS249r《机器学习系统》四卷开源教材，Vol IV 专章覆盖 Physical AI，是目前最系统的具身基础教材。
- **[RLinf/RLinf](https://github.com/RLinf/RLinf)** ⭐5,295 — 面向具身与 Agentic AI 的强化学习基础设施，统一训练/仿真/部署栈。
- **[RoboTwin-Platform/RoboTwin](https://github.com/RoboTwin-Platform/RoboTwin)** ⭐2,881 — RoboTwin 2.0（ICML 2026）官方仓库，双手操作仿真基准。
- **[OpenPipe/ART](https://github.com/OpenPipe/ART)** ⭐10,758 — Agent Reinforcement Trainer，用 GRPO 训练多步真实任务 Agent，连接 LLM RL 与机器人策略 RL。
- **[OpenRLHF/OpenRLHF](https://github.com/OpenRLHF/OpenRLHF)** ⭐10,018 — 基于 Ray 的高可扩展 Agentic RL 框架（PPO/DAPO/REINFORCE++/VLM）。
- **[3587jjh/HuRo](https://github.com/3587jjh/HuRo)** ⭐27 — CoRL 2026，将人类视频"机器人化"用于可扩展 VLA 预训练。

### 🤖 仿真与框架

- **[isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab)** ⭐8,172 — NVIDIA 官方统一机器人学习框架，多物理/多渲染器支持。
- **[newton-physics/newton](https://github.com/newton-physics/newton)** ⭐5,657 — 基于 NVIDIA Warp 的 GPU 加速物理引擎，专为机器人学家与仿真研究设计。
- **[google-deepmind/mujoco](https://github.com/google-deepmind/mujoco)** ⭐15,232 — 物理仿真事实标准之一。
- **[google-deepmind/mujoco_menagerie](https://github.com/google-deepmind/mujoco_menagerie)** ⭐4,087 — DeepMind 维护的高质量 MuJoCo 模型集合。
- **[mujocolab/mjlab](https://github.com/mujocolab/mjlab)** ⭐3,100 — "Isaac Lab API + MuJoCo-Warp 后端"，为不愿绑定 Isaac 生态的研究者提供替代。
- **[dora-rs/dora](https://github.com/dora-rs/dora)** ⭐3,968 — 数据流驱动的机器人中间件，低延迟、可组合、分布式，正在成为 ROS 之外的轻量替代。
- **[robotmcp/ros-mcp-server](https://github.com/robotmcp/ros-mcp-server)** ⭐1,463 — 用 MCP 协议把 Claude/GPT 等 LLM 接入 ROS，是"Agent 控制机器人"的关键桥梁。
- **[copper-project/copper-rs](https://github.com/copper-project/copper-rs)** ⭐1,493 — 用 Rust 写机器人 OS，强调确定性执行与回放。
- **[ros2-rust/ros2_rust](https://github.com/ros2-rust/ros2_rust)** ⭐1,528 — ROS 2 的官方 Rust 绑定。

### 🧠 VLA 与基础模型

- **[dexmal/opendm](https://github.com/dexmal/opendm)** ⭐2,048 — 面向通用具身智能的开放世界基础模型。
- **[FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA)** ⭐695 — 一站式 VLA 工程平台，覆盖数据→训练→真机部署。
- **[allenai/vla-evaluation-harness](https://github.com/allenai/vla-evaluation-harness)** ⭐616 — 统一 VLA 评测框架，可在任意仿真基准上评估任意 VLA。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*