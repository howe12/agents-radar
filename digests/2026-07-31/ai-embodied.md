# 具身智能开源动态日报 2026-07-31

> 数据来源: GitHub Search API (127 仓库) | ArXiv cs.RO (30 篇论文) | RSS 新闻 (48 条) | 生成时间: 2026-07-31 02:09 UTC

---

# 🤖 具身智能开源动态日报

**日期**：2026 年 · 整理：机器人 & 具身智能分析师

---

## 一、今日速览

今日具身智能生态呈现**"产业落地与基础研究双线并进"**的态势：产业端，DoorDash 获 FAA 无人机配送认证、Teradyne Q2 机器人营收同比 +33%，人形机器人首次遭遇 FCC 进口监管，行业进入"放量+合规"并行阶段；研究端，cs.RO 论文高度集中在 **VLA 模型的鲁棒性与桥接**（RoboBRIDGE、RedFlow、UniCross），Flow-matching VLA 与灵巧操作的纠错机制成为焦点；开源端则显著呈现**"基础模型 + 物理 AI 基础设施"**两条主线——τ0-VLA、FluxVLA、Galahad 等 VLA 工程化项目快速演进，Newton 物理引擎、MuJoCo Warp、PhyAgentOS 等"机器人物理底座"密集落地。综合来看，2026 年的具身智能竞争正从"模型能力"向"系统可靠性与商业闭环"迁移。

---

## 二、行业脉搏

1. **[DoorDash 获 FAA 批准运营自有无人机配送项目](https://www.therobotreport.com/doordash-gains-faa-certification-to-operate-its-own-drone-delivery-program/)** — 外卖平台首次以自有主体获得 BVLOS 商用许可，标志着"最后一公里"物流机器人正式进入规模化商用阶段。

2. **[Teradyne Robotics Q2 营收同比 +33%](https://www.therobotreport.com/teradyne-robotics-revenue-rises-33-year-over-year-in-q2/)** — Universal Robots 与 MiR 双业务线高速增长，工业协作机器人需求维持高景气，是当前少数能给出可验证商业化指标的企业。

3. **[FCC 限制美进口新型人形与四足机器人](https://www.therobotreport.com/industry-reacts-fcc-ban-u-s-imports-new-humanoid-quadruped-robots/)** — 行业首例针对人形/四足机器人的国家级监管，行业反应激烈，揭示出海合规将成中国具身厂商关键风险点。

4. **[GMEX Robotics 拟收购 MediaMeta.ai](https://www.therobotreport.com/gmex-robotics-to-acquire-mediameta-ai-social-intelligence/)** — 服务机器人厂商向上游"社交智能"延伸，预示人形/陪伴机器人将从运动能力竞赛转向交互能力竞赛。

5. **[5 Physical AI Infrastructure Platforms Shaping Robotics in 2026](https://www.therobotreport.com/5-physical-ai-infrastructure-platforms-shaping-robotics-in-2026/)** — "物理 AI 基础设施"概念正式被产业媒体提炼为 2026 关键赛道，是 VLA/Sim/Embodied OS 的上游集合。

---

## 三、研究前沿

1. **[UniCross: Unified Cross-Skill Dexterous Manipulation Synthesis](http://arxiv.org/abs/2607.28198v1)** — 针对灵巧操作中"物体持续握持"的硬约束，提出跨技能统一合成框架，对长序列非抓取类操作（如旋拧、装配）意义重大。

2. **[RoboBRIDGE: A Modular Framework for Bridging Policies to Robust Real-World Robotic Agents](http://arxiv.org/abs/2607.27881v1)** — VLA 模型落地的关键瓶颈是 Sim-to-Real 鲁棒性，本文提出模块化桥接框架，区分了"策略层"与"现实适配层"，对工程实践有直接价值。

3. **[RedFlow: Redirect Failure into Action-Level Corrections for Flow-matching VLA Policy](http://arxiv.org/abs/2607.27782v1)** — Flow-matching 是当前 VLA 主流生成式策略，但其失败模式难诊断；本文将失败重定向到动作级校正，提供了一条"流式 VLA 自我纠错"的新路径。

4. **[Static In, Dynamic Out: Counterfactual Action Augmentation for Moving Object Manipulation](http://arxiv.org/abs/2607.27890v1)** — 静态物体策略在动态目标（移动抓取、避障抓取）上失效是普遍痛点，反事实数据增强为该问题提供了低成本解法。

5. **[Learning Social Robot Navigation By Sensing Human Legs](http://arxiv.org/abs/2607.27922v1)** — 用腿部视觉替代 2D LiDAR 的行人感知方案，更贴近人类行走空间直觉，是室内社交导航的低成本增量。

---

## 四、重点项目

### 🦾 机器人学习与控制

- **[DLR-RM/stable-baselines3](https://github.com/DLR-RM/stable-baselines3)** ⭐13,634 — PyTorch 时代的 RL 事实标准库，是所有机器人 RL 研究与 Sim-to-Real 的底座。
- **[OpenPipe/ART](https://github.com/OpenPipe/ART)** ⭐10,552 — GRPO 多步智能体训练框架，把 Agentic RL 从 NLP 推广到真实任务，是 Agent + 具身 RL 的关键工程栈。
- **[Unity-Technologies/ml-agents](https://github.com/Unity-Technologies/ml-agents)** ⭐19,594 — Unity 生态的 RL/IL 训练工具包，游戏化仿真仍然是低成本数据生成的主战场。
- **[vikashplus/robohive](https://github.com/vikashplus/robohive)** ⭐631 — 统一的机器人学习框架，覆盖 MuJoCo + 真实硬件，是 RL 学者进入机器人领域的"轻量入门包"。
- **[RobotControlStack/robot-control-stack](https://github.com/RobotControlStack/robot-control-stack)** ⭐125 — ROS-free 的 Sim-to-Real 框架，原生 MuJoCo Gymnasium + VLA/RL 部署，对 Franka/UR5e/xArm/SO101 开箱即用。

### 🤖 仿真与框架

- **[google-deepmind/mujoco](https://github.com/google-deepmind/mujoco)** ⭐14,390 — 行业标准物理引擎，配合 Warp 加速后正成为 VLA 训练主底座。
- **[ArduPilot/ardupilot](https://github.com/ArduPilot/ardupilot)** ⭐15,576 — 无人机/无人车自驾仪开源事实标准，DoorDash 等商用配送的底层依赖。
- **[PX4/PX4-Autopilot](https://github.com/PX4/PX4-Autopilot)** ⭐12,305 — 与 ArduPilot 并列的飞行控制开源双雄，学术研究首选。
- **[carla-simulator/carla](https://github.com/carla-simulator/carla)** ⭐14,233 — 自动驾驶仿真标杆，城市级具身场景生成不可替代。
- **[newton-physics/newton](https://github.com/newton-physics/newton)** ⭐5,267 — NVIDIA Warp 加速的 GPU 物理引擎，专为机器人学家设计，是 2026 最值得关注的新物理底座之一。
- **[mujocolab/mjlab](https://github.com/mujocolab/mjlab)** ⭐2,753 — Isaac Lab API + MuJoCo-Warp，为 RL 与机器人研究提供"无缝迁移"路径。
- **[cyberbotics/webots](https://github.com/cyberbotics/webots)** ⭐4,516 — 老牌开源机器人仿真器，多机器人/多传感器友好，工程教育首选。

### 🧠 VLA 与基础模型

- **[FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA)** ⭐578 — VLA 一体化工程平台，覆盖"数据→训练→真机部署"全链路，是中文社区 VLA 落地最实用的样板。
- **[allenai/vla-evaluation-harness](https://github.com/allenai/vla-evaluation-harness)** ⭐494 — VLA 通用评测框架，统一了"任何 VLA × 任何仿真基准"的评估范式，对学术对比意义重大。
- **[sii-research/tau-0-vla](https://github.com/sii-research/tau-0-vla)** ⭐217 — τ0-VLA：层级式机器人基础模型 + 世界模型引导的 Test-Time Compute，提出"思考型 VLA"新范式。
- **[TensorAuto/OpenTau](https://github.com/TensorAuto/OpenTau)** ⭐192 — 工业级 VLA 训练基础设施，专为真机部署优化，是 PyTorch 端 VLA 训练栈的成熟选项。
- **[Phi-Monster/Galahad](https://github.com/phi-monster/Galahad)** ⭐102 — 揭示 VLA 策略的"指令盲性"并提出低秩数据疗法，是当前 VLA 诊断学的重要进展。
- **[Hebbian-Robotics/openpi-flash](https://github.com/Hebbian-Robotics/openpi-flash)** ⭐39 — openpi 的实时推理引擎，关注真机 VLA 部署延迟问题的必看项目。

### 🔧 硬件与驱动

- **[enactic/openarm](https://github.com/enactic/openarm)** ⭐2,785 — 完全开源的人形机械臂，专为接触丰富场景的 Physical AI 设计，是具身研究中"买得起、改得动"的关键硬件。
- **[copper-project/copper-rs](https://github.com/copper-project/copper-rs)** ⭐1,430 — Rust 写的机器人操作系统，主打"确定性构建/运行/回放"，是 ROS 之外的轻量替代方案。
- **[robotmcp/ros-mcp-server](https://github.com/robotmcp/ros-mcp-server)** ⭐1,370 — 把 Claude/GPT 通过 MCP 接入 ROS，让大模型直接驱动机器人，是 LLM-Agent × Robotics 范式的关键桥梁。
- **[mavlink/mavros](https://github.com/mavlink/mavros)** ⭐1,204 — MAVLink ↔ ROS 网关，无人机 + ROS 栈标配。

### 📊 数据集与基准

- **[StanfordVL/BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K)** ⭐1,603 — 加速具身 AI 研究的标准化平台，1000+ 日常任务的仿真基准。
- **[mani-skill/ManiSkill](https://github.com/mani-skill/ManiSkill)** ⭐3,180 — GPU 并行机器人仿真与操作基准，是 SOTA 操作策略的主跑道。
- **[RoboTwin-Platform/RoboTwin](https://github.com/RoboTwin-Platform/RoboTwin)** ⭐2,659 — ICML 2026 双臂操作平台 RoboTwin 2.0，面向 Sim-to-Real 的双臂生成式基准。
- **[RoboVerseOrg/RoboVerse](https://github.com/RoboVerseOrg/RoboVerse)** ⭐1,793 — 统一平台/数据集/基准的机器人学习基础设施，可扩展性与泛化性是其核心卖点。
- **[Farama-Foundation/Gymnasium-Robotics](https://github.com/Farama-Foundation/Gymnasium-Robotics)** ⭐950 — Gymnasium 的机器人扩展集合，机器人 RL 研究的标准化环境层。

---

## 五、生态趋势信号

三个信号正在汇聚：第一，**VLA 进入"工程化深水区"**——Flow-matching VLA 的失败纠正（Galahad/RedFlow）、层级世界模型（τ0-VLA）、统一评测（vla-evaluation-harness）同时爆发，标志其从学术演示转向真机可靠性。第二，**"物理 AI 基础设施"独立成赛道**——Newton 物理引擎、MuJoCo Warp、PhyAgentOS、Copper 机器人 OS 共同指向"机器人也需要 OS 与底座"，这是 NVIDIA/Google 之外的新层。第三，**合规与商业化开始反向倒逼技术路线**——FCC 对人形/四足机器人进口限制、DoorDash 自有 FAA 牌照、Teradyne 高增长同步出现，意味着具身智能的胜负手正从模型层上移到"政策 + 渠道 + 工程交付"三角。

---

## 六、值得关注

1. **[τ0-VLA：层级式基础模型 + Test-Time Computation](https://github.com/sii-research/tau-0-vla)** — 当主流 VLA 还停留在"端到端生成动作"，τ0 把"世界模型引导的推理时计算"显式引入机器人，类比 LLM 的 o1 时刻，可能定义下一代 VLA 范式。

2. **[Physical AI Infrastructure 平台之争](https://www.therobotreport.com/5-physical-ai-infrastructure-platforms-shaping-robotics-in-2026/) × [Newton](https://github.com/newton-physics/newton) × [PhyAgentOS](https://github.com/PhyAgentOS/PhyAgentOS)** — 物理引擎、机器人 OS、Agent OS 三层同时开源加速，谁抢到"具身时代的 Linux"位置，谁就掌握下一代开发者生态。

3. **[FCC 对人形/四足机器人进口限制](https://www.therobotreport.com/industry-reacts-fcc-ban-u-s-imports-new-humanoid-quadruped-robots/)** — 这是具身智能首次遭遇国家级监管节点，将引发出海策略、合规架构、供应链本地化的连锁反应，值得所有关注中国具身厂商出海的研究者与投资人持续跟踪。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*