# 具身智能开源动态日报 2026-08-19

> 数据来源: GitHub Search API (127 仓库) | ArXiv cs.RO (30 篇论文) | RSS 新闻 (48 条) | 生成时间: 2026-08-19 00:52 UTC

---

# 🤖 具身智能开源动态日报

> 数据来源：IEEE Spectrum · The Robot Report · ROS Discourse · ArXiv cs.RO · GitHub Trending

---

## 📌 今日速览

今日开源生态呈现"**VLA 持续深化 + 人形机器人产业链加速 + 长时序任务研究井喷**"三大主线。论文侧，多篇围绕 VLA 模型（τ₀-VLA、BATON、HAF）展开长时序操控研究；新闻侧，Unichem 收购 Loomia 进入人形机器人"皮肤"赛道、Persona AI 在造船厂部署焊接人形机器人，标志人形机器人正从演示走向工业刚需；开源侧，IsaacLab、Newton、MuJoCo Warp 三大仿真栈持续抢占通用机器人学习基础设施高地，IsaacLab 仓库近 8k Star 稳居榜首。

---

## 🏭 行业脉搏

- **[造船厂或将成为人形机器人的第一个"金主"](https://spectrum.ieee.org/persona-ai-humanoid-robot-welding)** — Persona AI 把焊接场景作为人形机器人首发任务，相比仓储搬运，结构化工业场景对精度和节拍要求更高，是衡量人形机器人商业可行性的关键试金石。
- **[Unichem 收购 Loomia 加速切入人形机器人"皮肤"市场](https://www.therobotreport.com/unichem-acquires-loomia-accelerate-entry-humanoid-skin-market/)** — 电子皮肤/柔性触觉正成为人形机器人差异化竞争点，Loomia 的织物电路技术被快速并购，反映供应链向"具身感知层"集中。
- **[FORT Robotics 通过 SPAC 上市，将机器人安全栈推向资本市场](https://www.therobotreport.com/fort-robotics-takes-safety-stack-public-via-spac-merger/)** — 工业机器人安全中间件正在被资本市场单独定价，随着协作机器人与人形机器人进入产线，安全栈将成为强制性基础设施。
- **[Diligent Robotics 五年落地经验催生 Moxi 2.0](https://www.therobotreport.com/five-years-operation-shape-diligent-robotics-rollout-moxi-2-0/)** — 医疗物流机器人在真实医院运营五年后的迭代思路，是少有的"长尾场景打磨"案例，对服务机器人落地节奏有借鉴意义。
- **[达芬奇手术机器人完成常规心脏手术](https://www.therobotreport.com/surgeons-use-da-vinci-surgical-robot-perform-common-cardiac-surgery/)** — 手术机器人从"辅助"向"常规术式"扩展，进一步打开医疗机器人商业化天花板。

---

## 🔬 研究前沿

- **[τ₀-VLA: 基于世界模型引导的层次化机器人基础模型](http://arxiv.org/abs/2608.16885v1)** — 提出"世界模型在测试时引导动作规划"的层次化推理框架，配合 [sii-research/tau-0-vla](https://github.com/sii-research/tau-0-vla) 开仓库，把长时序 VLA 推向"思考-执行"双阶段范式，是目前 VLA 基础模型方向最值得追踪的工作之一。
- **[Don't Drop the BATON: 基于智能体子任务探索的长时序操控](http://arxiv.org/abs/2608.16889v1)** — 用 Agentic 方式将长任务拆解为可迁移子技能，并以"转换感知记忆"避免错误累积，对接触密集型长时序任务（如装配、烹饪）尤其关键。
- **[HAF: 通过层次化动作流与谱潜在 RL 让通用 VLA 适配人形全身运动操控](http://arxiv.org/abs/2608.16837v1)** — 把通用 VLA 模型迁移到人形机器人全身 loco-manipulation 的工程路径，是连接"互联网级 VLA"与"具身硬件"的关键桥梁。
- **[具身智能体的安全性：攻击面、攻击、防御与评测](http://arxiv.org/abs/2608.16843v1) & [State-Semantic Injection in LLM-Driven Embodied Agents](http://arxiv.org/abs/2608.16806v1)** — 系统化梳理基础模型驱动的具身智能体安全威胁，特别是状态语义注入攻击；随着 VLA 进入工业，**安全鲁棒性将成为下一个核心议题**。
- **[FlexWorm: 用于多段可形变机器人的原始动作增强混合规划](http://arxiv.org/abs/2608.16853v1)** — 软体/可形变机器人面向狭小空间检测维护，混合接触-运动规划是该方向的代表性进展。

---

## 🦾 重点项目

### 🧠 VLA 与基础模型
| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA) | 622 | 一站式 VLA 工程平台，覆盖从数据到真机部署的全链路，是社区少有的端到端 VLA 工具链。 |
| [allenai/vla-evaluation-harness](https://github.com/allenai/vla-evaluation-harness) | 544 | 任意 VLA 模型 × 任意机器人仿真基准的统一评测框架，对推动 VLA 标准化至关重要。 |
| [sii-research/tau-0-vla](https://github.com/sii-research/tau-0-vla) | 469 | τ₀-VLA 官方实现，世界模型引导的层次化 VLA，可作为长时序任务基线。 |
| [InternRobotics/VLAC](https://github.com/InternRobotics/VLAC) | 325 | Vision-Language-Action-Critic，把 Critic 引入真实机器人 RL 训练闭环。 |
| [TensorAuto/OpenTau](https://github.com/TensorAuto/OpenTau) | 199 | 基于 PyTorch 的 VLA 训练基础设施，强调真实机器人场景。 |
| [sou350121/VLA-Handbook](https://github.com/sou350121/VLA-Handbook) | 520 | 中文 VLA 算法工程师实战手册，对国内社区入门友好。 |

### 🤖 仿真与框架
| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab) | 7,914 | 基于 NVIDIA Isaac Sim 的机器人学习统一框架，当今事实标准，Star 增速最快。 |
| [google-deepmind/mujoco](https://github.com/google-deepmind/mujoco) | 14,589 | 接触动力学物理仿真金标准，VLA 与 RL 研究几乎绕不开。 |
| [newton-physics/newton](https://github.com/newton-physics/newton) | 5,481 | 基于 NVIDIA Warp 的 GPU 加速物理引擎，新一代高性能机器人仿真候选者。 |
| [mujocolab/mjlab](https://github.com/mujocolab/mjlab) | 2,809 | "Isaac Lab API + MuJoCo-Warp 后端"，把 Isaac 范式移植到开源 MuJoCo 生态。 |
| [enactic/openarm](https://github.com/enactic/openarm) | 2,862 | 完全开源的人形机械臂硬件平台，面向接触密集型物理 AI 研究与部署，硬件开源浪潮代表。 |
| [gazebosim/gz-sim](https://github.com/gazebosim/gz-sim) | 1,451 | Gazebo 最新版本，ROS 生态机器人仿真主力。 |

### 🦾 机器人学习与控制
| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [RoboVerseOrg/RoboVerse](https://github.com/RoboVerseOrg/RoboVerse) | 1,806 | 面向可扩展、可泛化机器人学习的统一平台+数据集+基准，是 sim2real 走向"平台化"的代表。 |
| [RLinf/RLinf](https://github.com/RLinf/RLinf) | 4,569 | 专为具身智能与 Agentic AI 设计的强化学习基础设施，连接大模型 RL 与机器人训练。 |
| [OpenPipe/ART](https://github.com/OpenPipe/ART) | 10,602 | Agent Reinforcement Trainer，基于 GRPO 训练多步骤真实任务 Agent。 |
| [murobotics-ai/handumi-sw](https://github.com/murobotics-ai/handumi-sw) | 46 | 同步双手数据采集 + 重定向到任意双臂机器人，开源 HandUMI 软硬件协同范式。 |
| [dwipddalal/Anchor-Align](https://github.com/dwipddalal/Anchor-Align) | 23 | 通过表征锚定与语言-动作对齐实现可泛化 VLA 微调，小而精。 |

### 🔧 硬件与驱动
| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [commaai/openpilot](https://github.com/commaai/openpilot) | 63,447 | 面向 300+ 车型的开源驾驶辅助 OS，是机器人操作系统走向消费级产品的最大样本。 |
| [ArduPilot/ardupilot](https://github.com/ArduPilot/ardupilot) | 15,707 | 无人机/无人车飞控事实标准，长期维护的高质量硬件抽象层。 |
| [PX4/PX4-Autopilot](https://github.com/PX4/PX4-Autopilot) | 12,446 | 学术界与工业界无人机自动驾驶主流栈。 |
| [copper-project/copper-rs](https://github.com/copper-project/copper-rs) | 1,456 | Rust 实现的机器人操作系统，主打确定性执行与全流程回放。 |

### 📊 数据集与基准
| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [StanfordVL/BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K) | 1,640 | 加速具身智能研究的标准平台，覆盖 1000 种日常家务任务，是当前最权威的家庭场景基准之一。 |
| [open-h/open-h-embodiment](https://github.com/open-h/open-h-embodiment) | 134 | 面向医疗机器人的开源 VLA 数据集计划，填补医疗具身智能数据空白。 |

---

## 📈 生态趋势信号

**VLA 从"模型"演化为"系统"**：今天的论文（τ₀-VLA、BATON、HAF）几乎一致指向**层次化推理+世界模型+长时序记忆**——纯端到端 VLA 的瓶颈已被识别，社区正集体转向"思考-执行"双层架构。

**人形机器人从研究走向工业部署**：Persona AI 进船厂、Unichem 并购 Loomia、enactic 开源人形机械臂硬件，叠加 HAF 等"全身 loco-manipulation"论文，2025 的人形机器人正在围绕**焊接/搬运等结构化工业场景**完成第一波商业闭环。

**仿真栈之争进入"跨引擎抽象"阶段**：IsaacLab、Newton、MuJoCo-Warp、mjlab 同时活跃，社区不再押注单一引擎，而是希望**统一上层 API、下层可插拔**——这与机器人学习"实验可复现性"的强需求高度一致。

---

## 👀 值得关注

1. **τ₀-VLA 完整闭环** — 论文 + 官方仓库 [sii-research/tau-0-vla](https://github.com/sii-research/tau-0-vla) 同日出现，是长时序 VLA 第一个"系统级"开源方案，建议优先复现。
2. **[enactic/openarm](https://github.com/enactic/openarm) 人形臂开源硬件** — 2.8k Star 的完全开源人形机械臂，配合 IsaacLab/MuJoCo 生态，正在降低"硬件+算法"一体化研究的门槛。
3. **具身智能体安全主题** — [Foundation-Model-Powered Embodied Agents 安全综述](http://arxiv.org/abs/2608.16843v1) 与 [State-Semantic Injection](http://arxiv.org/abs/2608.16806v1) 两篇连发，预示 VLA 在工业部署前必须跨过"鲁棒+可验证"这道关卡，值得安全/具身交叉方向的研究者持续跟进。

---

*日报由机器人 & 具身智能领域分析师自动综合生成。如需调整侧重方向（如人形机器人、医疗、仿真、纯 VLA 等），可基于本框架定制化。*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*