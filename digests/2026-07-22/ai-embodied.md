# 具身智能开源动态日报 2026-07-22

> 数据来源: GitHub Search API (130 仓库) | ArXiv cs.RO (0 篇论文) | RSS 新闻 (44 条) | 生成时间: 2026-07-22 02:02 UTC

---

# 🤖 具身智能开源动态日报

**日期**：2025年 | **来源**：IEEE Spectrum · The Robot Report · ROS Discourse · GitHub Trending

---

## 📌 今日速览

今日具身智能领域呈现"资本热度不减、技术分化加剧"的格局：英国人形机器人公司 Humanoid 斩获 **1.52 亿美元 A 轮融资**，与 Vicarious Surgical **正式关停**形成鲜明对比，行业洗牌信号明显；技术层面，**全身触觉感知人形机器人**与**摩擦力驱动的世界模型**成为研究焦点。开源生态方面，NVIDIA IsaacLab 持续领跑（7.7k ⭐），**VLA-Handbook**、**Anchor-Align** 等中文资源与 VLA 微调框架集中涌现，结合 ROS-MCP-Server、Copper-RS 等新型机器人中间件，反映出"具身基础模型 + 数据基础设施"正在成为新一轮开源竞赛的核心战场。

---

## 🩺 行业脉搏

1. **Humanoid 拿下 1.52 亿美元 A 轮融资** — 英国人形机器人初创公司 Humanoid 完成本年度欧洲人形赛道最大单笔融资，显示资本市场对通用人形机器人长期看好。
👉 [The Robot Report](https://www.therobotreport.com/uk-based-humanoid-secures-152m-in-series-a-funding/)

2. **Vicarious Surgical 正式关停** — 曾估值近 30 亿美元的手术机器人明星公司宣告倒闭，凸显医疗机器人商业化路径之险。
👉 [The Robot Report](https://www.therobotreport.com/vicarious-surgical-officially-shutting-down/)

3. **Generative Bionics 发布全身触觉人形机器人** — 标志着高密度触觉传感正从指尖延伸至全身，是灵巧操作与人机交互的重要里程碑。
👉 [The Robot Report](https://www.therobotreport.com/generative-bionics-unveils-humanoid-robot-with-full-body-tactile-sensing/)

4. **摩擦力是世界模型的关键** — The Robot Report 报道研究指出，物理仿真中精确建模摩擦对构建更好的机器人世界模型至关重要。
👉 [The Robot Report](https://www.therobotreport.com/friction-is-key-to-making-better-robot-world-models/)

5. **NASA 机器人装配技能再升级** — 研究生项目为 NASA 机器人赋予结构化装配能力，为太空在轨制造（ISAM）提供技术储备。
👉 [IEEE Spectrum](https://spectrum.ieee.org/graduate-student-nasas-robots-assembly)

6. **MISUMI 发布美国制造业回流报告** — 反映美国政策层面对"机器人 + 再工业化"的系统性扶持。
👉 [The Robot Report](https://www.therobotreport.com/misumi-americas-releases-reshoring-report-supports-manufacturing-training-bill/)

---

## 📚 研究前沿

> ⚠️ **今日 cs.RO 论文流暂无新增数据**。建议关注下列 GitHub 中已开源的相关研究成果作为研究风向补充：

虽然今日未抓取到 ArXiv cs.RO 新论文，但从活跃仓库与新闻报道中可观察到的研究热点包括：

- **具身全身触觉感知**（Generative Bionics 触觉人形）
- **基于摩擦力的物理世界模型**（The Robot Report 报道）
- **NASA 机器人装配学习**（IEEE Spectrum 报道）
- **VLA 表示锚定与对齐微调**（[Anchor-Align](https://github.com/dwipddalal/Anchor-Align)）
- **3D 视觉-触觉融合策略**（[TransDex](https://github.com/LFGfg/TransDex)）
- **通用人形运动生成**（[Tsinghua-MARS-Lab/OMG](https://github.com/Tsinghua-MARS-Lab/OMG)）

---

## 🚀 重点项目

### 🦾 机器人学习与控制

| 仓库 | ⭐ | 说明 |
|------|---|------|
| [DexForce/EmbodiChain](https://github.com/DexForce/EmbodiChain) | 197 | 端到端 GPU 加速模块化具身智能平台，为通用机器人学习提供流水线基础设施。 |
| [RLinf/RLinf](https://github.com/RLinf/RLinf) | 4,198 | 面向具身与 Agentic AI 的强化学习基础设施，统一 RL 训练栈。 |
| [OpenPipe/ART](https://github.com/OpenPipe/ART) | 10,514 | Agent RL Trainer，使用 GRPO 训练多步智能体，面向真实任务，与具身 Agent 直接相关。 |
| [Open-X-Humanoid/XR-1](https://github.com/Open-X-Humanoid/XR-1) | 186 | 统一视觉-运动表示的 VLA 模型，推动人形机器人通用动作学习。 |
| [PhyAgentOS/PhyAgentOS](https://github.com/PhyAgentOS/PhyAgentOS) | 839 | 自演化的具身 AI 操作系统，基于 agentic workflow 构建，是"具身 Agent OS"理念的早期实践。 |
| [dwipddalal/Anchor-Align](https://github.com/dwipddalal/Anchor-Align) | 11 | 通过表示锚定与语言-动作对齐实现可泛化的 VLA 微调。 |

### 🤖 仿真与框架

| 仓库 | ⭐ | 说明 |
|------|---|------|
| [isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab) | 7,722 | 基于 NVIDIA Isaac Sim 的统一机器人学习框架，是当前大规模机器人 RL/IL 的事实标准。 |
| [google-deepmind/mujoco](https://github.com/google-deepmind/mujoco) | 14,277 | MuJoCo 物理引擎本体，机器人仿真与控制研究的基础设施。 |
| [newton-physics/newton](https://github.com/newton-physics/newton) | 5,217 | 基于 NVIDIA Warp 的 GPU 加速物理引擎，面向机器人学家与仿真研究者。 |
| [mujocolab/mjlab](https://github.com/mujocolab/mjlab) | 2,707 | "Isaac Lab API + MuJoCo-Warp"，融合两大生态优势的 RL/机器人研究框架。 |
| [robotmcp/ros-mcp-server](https://github.com/robotmcp/ros-mcp-server) | 1,353 | 通过 MCP 将 Claude/GPT 等 LLM 与 ROS 连接，AI Agent 直接操控机器人的关键桥梁。 |
| [copper-project/copper-rs](https://github.com/copper-project/copper-rs) | 1,420 | 用 Rust 构建的机器人 OS，支持确定性构建、回放与运行，对实时性要求高的应用极具价值。 |
| [ros-navigation/navigation2](https://github.com/ros-navigation/navigation2) | 4,493 | ROS 2 导航框架，移动机器人 SLAM/路径规划的工业级标准实现。 |

### 🧠 VLA 与基础模型

| 仓库 | ⭐ | 说明 |
|------|---|------|
| [sou350121/VLA-Handbook](https://github.com/sou350121/VLA-Handbook) | 417 | 首份全中文、实战导向的 VLA 学习/面试手册，降低国内从业者入门门槛。 |
| [RobotControlStack/robot-control-stack](https://github.com/RobotControlStack/robot-control-stack) | 124 | 轻量、ROS-free 的 VLA/RL sim-to-real 框架，原生 MuJoCo Gymnasium 封装。 |
| [FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA) | 554 | 一站式 VLA 工程平台，覆盖数据、真机部署全链路。 |
| [InternRobotics/InternVLA-A-series](https://github.com/InternRobotics/InternVLA-A-series) | 507 | InternVLA-A1 统一理解、生成与动作，是国产 VLA 模型代表。 |
| [allenai/vla-evaluation-harness](https://github.com/allenai/vla-evaluation-harness) | 457 | 通用 VLA 模型评测框架，支持任意仿真基准，是推动 VLA 标准化评测的关键。 |
| [Tsinghua-MARS-Lab/OMG](https://github.com/Tsinghua-MARS-Lab/OMG) | 94 | 清华 MARS 实验室开源的"全模态运动生成"框架，面向通用人形控制。 |

### 🔧 硬件与驱动

| 仓库 | ⭐ | 说明 |
|------|---|------|
| [enactic/openarm](https://github.com/enactic/openarm) | 2,749 | 首个完全开源的人形机械臂，专为接触丰富环境下的物理 AI 部署。 |
| [mstoelzle/focodyn](https://github.com/mstoelzle/focodyn) | 6 | 可微分浮基动力学库，面向腿足机器人 CBF/CLF 与轨迹优化。 |
| [robonet-ai/handumi-sw](https://github.com/robonet-ai/handumi-sw) | 36 | 开源 HandUMI 软件栈，跨平台双手数据采集与重定向。 |

### 📊 数据集与基准

| 仓库 | ⭐ | 说明 |
|------|---|------|
| [StanfordVL/BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K) | 1,588 | 加速具身 AI 研究的标准化平台，包含 1000+ 日常任务仿真。 |
| [RoboVerseOrg/RoboVerse](https://github.com/RoboVerseOrg/RoboVerse) | 1,787 | 统一平台、数据集与基准，面向可扩展、可泛化的机器人学习。 |
| [hku-mars/UMI-3D](https://github.com/hku-mars/UMI-3D) | 258 | UMI-3D SLAM 与数据处理流水线，支持便携式数据采集生态。 |
| [chang-xinhai/Awesome-Dexterous-Manipulation](https://github.com/chang-xinhai/Awesome-Dexterous-Manipulation) | 11 | 灵巧操作、触觉感知、灵巧手、机器人学习的精选资源集合。 |

---

## 📈 生态趋势信号

从今日三方信息交叉看，具身智能正经历三股结构性转变：**(1) 资本向头部人形公司聚集** — Humanoid 1.52 亿美元融资 vs Vicarious Surgical 倒闭，标志行业从"百花齐放"转向"赢家通吃"；**(2) 物理真实性成为世界模型核心瓶颈** — 摩擦力建模、全身触觉感知、浮基可微动力学等开源项目集中爆发，反映"建模真实接触"是当前最关键的研究缺口；**(3) VLA 正在形成完整工具链生态** — 从 VLA-Handbook（入门）、Anchor-Align（微调）、vla-evaluation-harness（评测）到 EVA-Client（实机部署），一个端到端的 VLA 工程栈正在中文与英文社区并行成型，配合 ROS-MCP-Server、Copper-RS 等新型中间件，**"LLM × 机器人 OS × VLA × 触觉硬件"四层栈正在收敛为下一阶段的标准范式**。

---

## 🔭 值得关注

1. **NVIDIA Isaac Lab + MuJoCo-Warp 双轨并行**
   仿真侧出现明显"双雄并立"格局：IsaacLab（7.7k ⭐）继续主导大规模 GPU 仿真，而 newton 与 mjlab 则尝试在 MuJoCo 生态内复刻 Isaac Lab 体验。**关注点**：未来 6 个月谁会成为开源 RL 的事实标准，以及 MuJoCo-Warp 是否能挑战 Isaac Sim 的 GPU 仿真霸主地位。

2. **VLA 工具链的中国力量崛起**
   sou350121/VLA-Handbook（417 ⭐）、InternRobotics/InternVLA-A-series（507 ⭐）、FluxVLA（554 ⭐）等中文/中国团队主导的 VLA 项目密集出现，结合 [VLA-Handbook](https://github.com/sou350121/VLA-Handbook) 的爆发增长。**关注点**：国内 VLA 生态是否能在"数据 + 评测 + 部署"全栈上率先建立标准。

3. **机器人 OS 的两极分化：ROS MCP vs Copper-RS**
   [ros-mcp-server](https://github.com/robotmcp/ros-mcp-server)（1.3k ⭐）代表"LLM 接入 ROS"的渐进派，而 [copper-rs](https://github.com/copper-project/copper-rs)（1.4k ⭐）代表"用 Rust 重写机器人 OS"的颠覆派。**关注点**：当 Agentic AI 真正进入机器人控制栈时，传统 ROS 是否会被新型数据流中间件取代。

---

*📎 本日报由具身智能分析师自动生成，覆盖 IEEE Spectrum、The Robot Report、ROS Discourse 与 GitHub Trending 实时动态。*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*