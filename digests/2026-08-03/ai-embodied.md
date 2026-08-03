# 具身智能开源动态日报 2026-08-03

> 数据来源: GitHub Search API (127 仓库) | ArXiv cs.RO (0 篇论文) | RSS 新闻 (46 条) | 生成时间: 2026-08-03 02:10 UTC

---

# 具身智能开源动态日报

**日期：2026 年 8 月 1 日** | 信息源：IEEE Spectrum · The Robot Report · ROS Discourse · GitHub Trending

---

## 一、今日速览

今日具身智能领域由 **Google DeepMind 的 Gemini Robotics 2** 领衔，该模型首次实现机器人全身控制，标志着 VLA 模型从"操作"迈向"全身协调"。产业侧，DoorDash 获 FAA 无人机配送认证、Procore 以 8.45 亿美元收购 DroneDeploy，资本与监管同步向 Physical AI 倾斜。开源生态方面，**IsaacLab (⭐7.8k)、mjlab、Newton 物理引擎、VLA 工程化套件（FluxVLA/OpenTau/VLA-Handbook）** 持续高活跃度，仿真、基础模型与 Sim2Real 工具链形成清晰的"三件套"格局。需要注意的是，今日 ArXiv cs.RO 暂无新论文，学术端的更新主要集中在代码仓库与综述类项目。

---

## 二、行业脉搏

1. **Google DeepMind 发布 Gemini Robotics 2** — 引入全身控制（full-body control）能力，机器人可同时协调手臂、躯干与底盘完成移动操作任务，是 VLA 模型"长程任务 + 全身协调"方向的关键里程碑。 [链接](https://www.therobotreport.com/google-deepmind-says-gemini-robotics-2-enables-full-body-control/)

2. **DoorDash 获 FAA 认证，自营无人机配送落地** — DoorDash 成为首批获得 Part 135 无人机运营资质的科技公司，意味着城市低空物流的网络效应开始向平台型公司集中。 [链接](https://www.therobotreport.com/doordash-gains-faa-certification-to-operate-its-own-drone-delivery-program/)

3. **Procore 8.45 亿美元收购 DroneDeploy** — 建筑科技巨头收购工地无人机建图龙头，反映"物理 AI + 垂直行业 SaaS"的整合趋势，建筑机器人 / 数字孪生赛道迎来头部集中。 [链接](https://www.therobotreport.com/procore-technologies-acquires-dronedeploy-845m/)

4. **FCC 机器人裁决引发美国政策讨论** — FCC 对机器人的频谱/通信裁决将直接影响机器人蜂群、低延迟遥操作与 5G-A 控制架构的合规设计。 [链接](https://www.therobotreport.com/fcc-robot-ruling-shines-spotlight-on-u-s-policy-how-next-gen-ai-can-help-warehousing/)

5. **KUKA 推出面向北美车企的 Automation Management Platform** — 工业机器人从"单设备自动化"走向"工厂级 AI 编排"，工业具身 AI 基础设施层开始成型。 [链接](https://www.therobotreport.com/kuka-deploys-automation-management-platform-north-american-automakers/)

> 此外，IEEE Spectrum 报道的[彩色触觉感知机器人手指](https://spectrum.ieee.org/robot-finger)代表了触觉传感 + 多模态融合的新方向；The Robot Report 的[5 大 Physical AI 基础设施平台盘点](https://www.therobotreport.com/5-physical-ai-infrastructure-platforms-shaping-robotics-in-2026/)也值得关注。

---

## 三、研究前沿

> ⚠️ 今日 ArXiv cs.RO 抓取到 **0 篇新论文**，可能为抓取窗口或上游源问题。建议读者直接前往 [arxiv.org/list/cs.RO/recent](https://arxiv.org/list/cs.RO/recent) 获取实时更新。
>
> 作为补充，本期研究前沿信号更多体现在 **GitHub 上的开源论文配套代码与综述项目** 中，例如 [TPAMI 2026 · 3D/4D World Modeling Survey](https://github.com/worldbench/awesome-3d-4d-world-models)、[Awesome-World-Models](https://github.com/knightnemo/Awesome-World-Models)、[VLA-Handbook](https://github.com/sou350121/VLA-Handbook) 等均反映当前学界共识：**World Model + VLA + Sim2Real** 是未来 12 个月的三大主轴。

---

## 四、重点项目

### 🦾 机器人学习与控制

| 仓库 | ⭐ | 说明 |
|---|---|---|
| [RLinf/RLinf](https://github.com/RLinf/RLinf) | 4,379 | 面向具身与 Agentic AI 的强化学习基础设施，统一 RL 训练栈；为 Sim2Real 提供标准化训练底座。 |
| [isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab) | 7,819 | 基于 NVIDIA Isaac Sim 的统一机器人学习框架，GPU 并行仿真 + RL/IL 接口的事实标准。 |
| [OpenPipe/ART](https://github.com/OpenPipe/ART) | 10,558 | Agent Reinforcement Trainer，基于 GRPO 的多步智能体训练框架，可用于具身策略后训练。 |
| [Hebbian-Robotics/openpi-flash](https://github.com/Hebbian-Robotics/openpi-flash) | 39 | openpi 的实时推理引擎，专为真实机器人部署优化延迟与吞吐。 |
| [AccelerationConsortium/Matterix](https://github.com/AccelerationConsortium/Matterix) | 51 | 面向机器人辅助化学实验的数字孪生，把具身 AI 推进到"科学自动化"垂直场景。 |

### 🤖 仿真与框架（MuJoCo / Isaac / Gazebo / ROS）

| 仓库 | ⭐ | 说明 |
|---|---|---|
| [google-deepmind/mujoco](https://github.com/google-deepmind/mujoco) | 14,417 | 通用多体动力学物理仿真器，机器人研究的事实标准底层。 |
| [google-deepmind/dm_control](https://github.com/google-deepmind/dm_control) | 4,656 | DeepMind 基于 MuJoCo 的 RL 环境栈，强化学习基准核心组件。 |
| [newton-physics/newton](https://github.com/newton-physics/newton) | 5,275 | 基于 NVIDIA Warp 的 GPU 加速物理引擎，面向机器人学家与仿真研究者。 |
| [mujocolab/mjlab](https://github.com/mujocolab/mjlab) | 2,760 | "Isaac Lab API, powered by MuJoCo-Warp"，把 Isaac Lab 接口范式移植到开源 MuJoCo 生态。 |
| [dora-rs/dora](https://github.com/dora-rs/dora) | 3,858 | Dataflow-Oriented Robotic Architecture，低延迟、可组合的 AI 机器人中间件，ROS 之外的轻量化候选。 |
| [copper-project/copper-rs](https://github.com/copper-project/copper-rs) | 1,432 | 面向机器人的 Rust 操作系统，支持确定性构建、回放与重运行，对安全关键任务友好。 |
| [robotmcp/ros-mcp-server](https://github.com/robotmcp/ros-mcp-server) | 1,371 | 通过 MCP 协议让 Claude/GPT 直接控制 ROS 机器人，是 LLM × ROS 集成的代表性工程实践。 |
| [gazebosim/gz-sim](https://github.com/gazebosim/gz-sim) | 1,437 | Gazebo 最新版本，开源机器人仿真的事实标准之一。 |

### 🧠 VLA 与基础模型

| 仓库 | ⭐ | 说明 |
|---|---|---|
| [TianxingChen/Embodied-AI-Guide](https://github.com/TianxingChen/Embodied-AI-Guide) | 15,198 | 中文社区最活跃的具身智能技术指南，整合 VLA/世界模型/硬件/数据集全景。 |
| [FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA) | 584 | 一站式 VLA 工程平台，覆盖从数据采集到真机部署的完整链路。 |
| [allenai/vla-evaluation-harness](https://github.com/allenai/vla-evaluation-harness) | 503 | 任意 VLA 模型 × 任意机器人仿真基准的统一评测框架，补齐 VLA 领域的评估短板。 |
| [TensorAuto/OpenTau](https://github.com/TensorAuto/OpenTau) | 192 | 基于 PyTorch 的 VLA 训练基础设施，专为真机机器人设计。 |
| [lucidrains/mimic-video](https://github.com/lucidrains/mimic-video) | 120 | Video-Action Models 实现，超越 VLA 的下一代通用机器人控制方案。 |
| [Noietch/EVA-CLIENT](https://github.com/Noietch/EVA-CLIENT) | 82 | 真机机器人统一部署、评测与数据采集框架。 |
| [ExistentialRobotics/SERF-VLA](https://github.com/ExistentialRobotics/SERF-VLA) | 14 | 长程移动操作的时空环境-机器人特征地图，针对 Mobile Manipulation 难题。 |

### 🔧 硬件与驱动

| 仓库 | ⭐ | 说明 |
|---|---|---|
| [commaai/openpilot](https://github.com/commaai/openpilot) | 63,297 | 已在 300+ 款车型上落地的开源自动驾驶操作系统，是"机器人化 OS"理念的最佳样板。 |
| [ArduPilot/ardupilot](https://github.com/ArduPilot/ardupilot) | 15,601 | 全球最大规模的开源飞控项目，覆盖固定翼/多旋翼/无人车/无人艇。 |
| [PX4/PX4-Autopilot](https://github.com/PX4/PX4-Autopilot) | 12,322 | 学术与工业界最常用的开源飞控，与 ROS 2 深度集成。 |
| [robonet-ai/handumi-sw](https://github.com/robonet-ai/handumi-sw) | 44 | 通用双手机械臂数据采集与重定向软件，是 UMI 生态的重要实现。 |
| [Source-Robotics/PAR6-Collaborative-Robot-Arm](https://github.com/Source-Robotics/PAR6-Collaborative-Robot-Arm) | 30 | 面向教育与研发的 6 轴开源协作机械臂硬件平台。 |

### 📊 数据集与基准

| 仓库 | ⭐ | 说明 |
|---|---|---|
| [mani-skill/ManiSkill](https://github.com/mani-skill/ManiSkill) | 3,196 | GPU 并行机器人操作仿真 + 基准，操作学习的事实标准 benchmark 之一。 |
| [StanfordVL/BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K) | 1,610 | 1000 个家务任务的具身 AI 基准，长程任务评测的代表性平台。 |
| [Farama-Foundation/Metaworld](https://github.com/Farama-Foundation/Metaworld) | 1,863 | 元强化学习与多任务机器人操作的经典基准。 |
| [Farama-Foundation/Gymnasium-Robotics](https://github.com/Farama-Foundation/Gymnasium-Robotics) | 950 | Gymnasium 体系下的官方机器人仿真环境集合。 |
| [chang-xinhai/Awesome-Dexterous-Manipulation](https://github.com/chang-xinhai/Awesome-Dexterous-Manipulation) | 11 | 灵巧操作、触觉感知、机械手方向的论文/数据集/硬件资源索引。 |

---

## 五、生态趋势信号

从今日三方信息看，具身智能生态正在沿三条主线加速收敛：**① 模型层**——VLA 正从"单臂操作"扩展到全身控制与移动操作（Gemini Robotics 2、SERF-VLA、mimic-video），世界模型成为下一代基础架构候选；**② 工程层**——mjlab + Newton + IsaacLab 形成"开源 vs 商业"两套 GPU 仿真栈，dora / copper-rs / ros-mcp-server 各自探索 ROS 之外的中间件形态，标准化战争已经打响；**③ 产业层**——资本（DroneDeploy 收购）、监管（FAA 认证、FCC 裁决）、硬件（PAR6、HandUMI）三条线同步推进，Physical AI 正从演示阶段进入合规与规模化的攻坚期。

---

## 六、值得关注

1. **Gemini Robotics 2 + VLA 工程化仓库联动** — DeepMind 全身控制发布后，OpenTau / FluxVLA / SERF-VLA / openpi-flash 等开源项目能否在 4–8 周内复现或追赶相关能力，将决定 VLA 赛道下一阶段的竞争格局。强烈建议跟踪 [openpi-flash](https://github.com/Hebbian-Robotics/openpi-flash) 和 [vla-evaluation-harness](https://github.com/allenai/vla-evaluation-harness)。

2. **mjlab vs IsaacLab 的开源/闭源仿真对决** — mujocolab/mjlab 把 Isaac Lab API 平移到 MuJoCo-Warp，叠加 Newton 物理引擎，开源阵营首次具备 GPU 并行 + 现代 API 的完整能力。若生态顺利迁移，将直接动摇 NVIDIA 在机器人学习训练侧的垄断地位，值得长期跟踪。

3. **ros-mcp-server

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*