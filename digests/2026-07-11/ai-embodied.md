# 具身智能开源动态日报 2026-07-11

> 数据来源: GitHub Search API (131 仓库) | ArXiv cs.RO (24 篇论文) | RSS 新闻 (45 条) | 生成时间: 2026-07-11 02:03 UTC

---

# 具身智能开源动态日报

**日期：2026 年 7 月** ｜ 数据来源：IEEE Spectrum、The Robot Report、ROS Discourse、ArXiv cs.RO、GitHub Trending

---

## 一、今日速览

今天具身智能领域呈现出"资本、政策、学术、开源"四线并进的格局。资本端，**AI² Robotics 以 7.35 亿美元融资、30 亿美元估值**押注轮式人形机器人，成为本年度最受瞩目事件；学术端，**DexVerse 多具身灵巧操作基准**与 **Native Video-Action 预训练框架** 为通用操作策略提供了新的基础设施；开源生态则在 **VLA 高效化（DYSL_VLA、OptimusVLA）、物理仿真多元化（Newton GPU、Habitat-GS）、硬件开源（OpenArm）** 三个方向上明显加速。整体来看，行业正从"大模型驱动"迈向"轻量化、可部署、真机落地"的下一阶段。

---

## 二、行业脉搏

| # | 动态 | 意义 |
|---|------|------|
| 1 | **[AI² Robotics 完成 7.35 亿美元融资，估值 30 亿美元](https://www.therobotreport.com/ai%c2%b2-robotics-raises-735m-3b-valuation-wheeled-humanoid-robots/)**，专注轮式人形机器人 | 轮式构型在工业与商用场景中的"成本/实用主义"路线获顶级资本背书，可能挑战双足人形机器人在短中期商业化中的主导地位。 |
| 2 | **[日本：曾开创人形机器人，能否追上中国？](https://spectrum.ieee.org/humanoid-robots-japan)** | 暴露出 Honda/ASIMO 路线在生成式 AI 时代的技术代差，预示未来 3 年亚太人形机器人格局将加速重构。 |
| 3 | **[ForSight Robotics 推进全自动白内障手术](https://www.therobotreport.com/forsight-robotics-road-to-performing-a-fully-robotic-cataracts-surgery/)** | 医疗机器人从"辅助"向"全自主手术"演进，监管路径与亚毫米级视觉伺服能力成关键。 |
| 4 | **[乌克兰地面机器人进入"杀伤区"](https://spectrum.ieee.org/ukraine-ground-drones)** | 实战战场反哺 UGV 自主导航与多机协同算法，**XTEND 美专利授权**同步说明民用技术正在双向流动。 |
| 5 | **[IEEE 表彰机器人先驱 Toshio Fukuda](https://spectrum.ieee.org/ieee-honors-toshio-fukuda)** | 微纳米机器人与生物医学机器人传承脉络获认可，预示仿生与医疗交叉领域将持续升温。 |

---

## 三、研究前沿

### 1. [DexVerse — 多任务、多具身灵巧操作模块化基准](http://arxiv.org/abs/2607.08751v1)
提出了支持多种灵巧手（Allegro、Shadow Hand、LEAP 等）跨任务的统一评估协议，弥补了现有基准在"硬件异构性"和"任务系统性"上的空白，将成为后续通用操作策略的"试金石"。

### 2. [Native Video-Action Pretraining for Generalizable Robot Control](http://arxiv.org/abs/2607.08639v1)
批判性指出当前把"视频生成模型直接改造为机器人策略"的做法的局限，提出**原生视频-动作预训练**范式，对 VLA 模型的零样本泛化具有方向性意义。

### 3. [ContactMimic — 基于接触控制的类人对象交互](http://arxiv.org/abs/2607.08742v1)
突破"仅靠关键点追踪"在坐椅、擦板、推动等接触密集型任务中的瓶颈，将接触动力学引入模仿学习框架，是人形机器人家用场景落地的关键技术拼图。

### 4. [FabriVLA — 面向多任务精确操作的轻量 VLA 模型](http://arxiv.org/abs/2607.08575v1)
在保持精度的同时显著降低 VLA 模型参数与算力门槛，对**边缘部署与中小厂商**极具吸引力。

### 5. [Harness VLA — 冻结 VLA + 记忆引导智能体](http://arxiv.org/abs/2607.08448v1)
提出"冻结大模型 + 外部记忆控制器"架构，让预训练 VLA 可作为可靠的操作原语被上层 Agent 调用，是 VLA 与高层任务规划融合的代表性方案。

---

## 四、重点项目

### 🦾 机器人学习与控制

| 仓库 | Star | 简介 |
|------|------|------|
| [isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab) | ⭐ 7,651 | NVIDIA 官方机器人学习统一框架，GPU 并行仿真+真机迁移事实标准 |
| [RLinf/RLinf](https://github.com/RLinf/RLinf) | ⭐ 4,074 | 面向具身/Agentic AI 的强化学习基础设施，覆盖 PPO/GRPO 等主流算法 |
| [ARISE-Initiative/robosuite](https://github.com/ARISE-Initiative/robosuite) | ⭐ 2,510 | 模块化机器人学习仿真基准，机械臂操作研究的事实标准 |
| [robocasa/robocasa](https://github.com/robocasa/robocasa) | ⭐ 1,530 | 大规模日常家务任务仿真，是通用家庭机器人的核心训练场 |
| [OpenDriveLab/RISE](https://github.com/OpenDriveLab/RISE) | ⭐ 316 | RSS 2026，自改进机器人策略 + 组合世界模型 |
| [michaelyuancb/ftp1-policy](https://github.com/michaelyuancb/ftp1-policy) | ⭐ 81 | 跨触觉传感器的通用基础触觉策略，接触密集操作关键 |
| [BrikHMP18/HandUMI](https://github.com/BrikHMP18/HandUMI) | ⭐ 23 | 戴在手上即可收集双手操作数据的 UMI 变体，数据采集平民化 |

### 🤖 仿真与框架

| 仓库 | Star | 简介 |
|------|------|------|
| [google-deepmind/mujoco](https://github.com/google-deepmind/mujoco) | ⭐ 14,158 | 高性能接触物理仿真器，机器人研究的事实标准 |
| [newton-physics/newton](https://github.com/newton-physics/newton) | ⭐ 5,183 | 基于 NVIDIA Warp 的 GPU 加速物理引擎，专为机器人研究者设计 |
| [dora-rs/dora](https://github.com/dora-rs/dora) | ⭐ 3,837 | Rust 编写的数据流机器人中间件，低延迟、可组合、分布式 |
| [cyberbotics/webots](https://github.com/cyberbotics/webots) | ⭐ 4,451 | 开源通用机器人仿真器，教育与科研广泛使用 |
| [mujocolab/mjlab](https://github.com/mujocolab/mjlab) | ⭐ 2,668 | Isaac Lab API + MuJoCo-Warp，提供 RL 与机器人研究的现代接口 |
| [zju3dv/habitat-gs](https://github.com/zju3dv/habitat-gs) | ⭐ 244 | ECCV 2026，将动态高斯泼溅引入导航仿真，提升视觉真实度 |
| [URLab-Sim/UnrealRoboticsLab](https://github.com/URLab-Sim/UnrealRoboticsLab) | ⭐ 474 | UE 渲染 + MuJoCo 物理的视觉-物理双优仿真栈 |

### 🧠 VLA 与基础模型

| 仓库 | Star | 简介 |
|------|------|------|
| [datawhalechina/every-embodied](https://github.com/datawhalechina/every-embodied) | ⭐ 2,610 | 中文社区 VLA/OpenVLA/π₀ 全流程实战教程 |
| [FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA) | ⭐ 520 | 从数据到真机部署的 VLA 一体化工程平台 |
| [InternRobotics/InternVLA-A-series](https://github.com/InternRobotics/InternVLA-A-series) | ⭐ 482 | 上海 AI Lab 统一理解-生成-动作的 VLA 系列 |
| [allenai/vla-evaluation-harness](https://github.com/allenai/vla-evaluation-harness) | ⭐ 433 | Any-VLA × Any-Sim 的统一评测框架 |
| [sou350121/VLA-Handbook](https://github.com/sou350121/VLA-Handbook) | ⭐ 372 | 中文 VLA 学习与面试手册 |
| [Tencent-Hunyuan/Hy-Embodied-0.5-VLA](https://github.com/Tencent-Hunyuan/Hy-Embodied-0.5-VLA) | ⭐ 201 | 混元：从 VLA 模型到真实机器人学习栈 |
| [TensorAuto/OpenTau](https://github.com/TensorAuto/OpenTau) | ⭐ 183 | PyTorch 真实机器人 VLA 训练基础设施 |
| [ucla-mobility/TIC-VLA](https://github.com/ucla-mobility/TIC-VLA) | ⭐ 123 | ICML 2026 Think-in-Control 导航 VLA |
| [PKU-SEC-Lab/DYSL_VLA](https://github.com/PKU-SEC-Lab/DYSL_VLA) | ⭐ 24 | 动态-静态层跳过，**推理加速 3.75×、训练减少 85.7×** |
| [iLearn-Lab/CVPR26-OptimusVLA](https://github.com/iLearn-Lab/CVPR26-OptimusVLA) | ⭐ 23 | CVPR 2026 双记忆增强 VLA，兼顾全局先验与局部一致性 |
| [BuceaGeorgia/VIRENA](https://github.com/BuceaGeorgia/VIRENA) | ⭐ 4 | 极简可读 VLA：冻结 CLIP + 极小头部，Mac 即可运行 |

### 🔧 硬件与驱动

| 仓库 | Star | 简介 |
|------|------|------|
| [enactic/openarm](https://github.com/enactic/openarm) | ⭐ 2,707 | 完全开源的类人手臂，面向接触密集型物理 AI 研发 |
| [ASIG-X/manusGlove](https://github.com/ASIG-X/manusGlove) | ⭐ 22 | Linux ROS 2 Manus 数据手套驱动，遥操作数据采集基础设施 |
| [Source-Robotics/PAR6-Collaborative-Robot-Arm](https://github.com/Source-Robotics/PAR6-Collaborative-Robot-Arm) | ⭐ 26 | 面向教育与 AI 研发的协作机械臂 |

### 📊 数据集与基准

| 仓库 | Star | 简介 |
|------|------|------|
| [StanfordVL/BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K) | ⭐ 1,561 | 具身 AI 标杆平台，1000+ 日常家务任务基准 |
| [realsee-developer/RealSee3D](https://github.com/realsee-developer/RealSee3D) | ⭐ 278 | 真采+合成的多视角 RGB-D 数据集 |
| [InternRobotics/InternScenes](https://github.com/InternRobotics/InternScenes) | ⭐ 256 | NeurIPS 2025，大规模交互式室内场景数据集 |
| [hku-mars/UMI-3D](https://github.com/hku-mars/UMI-3D) | ⭐ 254 | UMI-3D SLAM 与数据处理流水线 |
| [philfung/awesome-reliable-robotics](https://github.com/philfung/awesome-reliable-robotics) | ⭐ 155 | 强调真实世界可靠性与鲁棒性的机器人研究精选列表 |
| [chang-xinhai/Awesome-UMI](https://github.com/chang-xinhai/Awesome-UMI) | ⭐ 13 | UMI 生态（论文/数据集/策略）分类清单 |
| [CyanHaze/Awesome-Dexterous-Hands](https://github.com/CyanHaze/Awesome-Dexterous-Hands) | ⭐ 5 | 灵巧手、触觉、操作与仿真资源一站式清单 |

---

## 五、生态趋势信号

今天的素材集中呈现三条交叉趋势线：

**第一，VLA 从"做大"走向"做精"**。FabriVLA、DYSL_VLA、OptimusVLA 等项目都把重点放在推理加速、层跳过、双记忆结构上，反映出社区共识——通用机器人模型难以靠单纯堆参数解决真机部署问题，**工程化与高效化**成为下一阶段核心战场。

**第二，仿真栈"多元化分层"加速**。MuJoCo-Warp 系的 mjlab、GPU 原生 Newton、视觉系 Habitat-GS、UE+MuJoCo 混合栈 UnrealRoboticsLab 并行演进，**单一仿真器统一天下的格局

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*