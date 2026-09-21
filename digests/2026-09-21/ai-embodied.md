# 具身智能开源动态日报 2026-09-21

> 数据来源: GitHub Search API (129 仓库) | ArXiv cs.RO (0 篇论文) | RSS 新闻 (45 条) | 生成时间: 2026-09-21 02:48 UTC

---

# 具身智能开源动态日报
**日期：2025 · 整理人：具身智能分析师**

---

## 一、今日速览

今日行业焦点集中在 **"安全 × 落地"** 的双重主题上：IEEE Spectrum 接连发布人型机器人 Digit 5 安全评测与"AI 时代机器人安全"深度报道，The Robot Report 则爆出 SoftBank 拟收购 Robotics and AI Institute 的重磅整合消息。开源侧，**VLA 方向继续分化**——τ0-VLA 以"世界模型引导的测试时计算"打开新范式，OpenBMB 的 SimpleMemVLA 探索长时序记忆机制；底层基础设施中，**NVIDIA Newton、MuJoCo-Warp、Copper-RS 等高性能/可重放仿真栈**持续受到关注，而 ROS-Gazebo、Mujoco_ros2_control 等"桥梁工程"项目活跃度不减。整体来看，行业正从"能不能做"过渡到"敢不敢用、怎么长期跑稳"。

---

## 二、行业脉搏

1. **SoftBank 拟收购 Robotics and AI Institute** —— 顶级资本继续向具身智能研究机构聚集，意味着软银在 AGI/具身战略上加速押注。
   [链接](https://www.therobotreport.com/softbank-agrees-to-acquire-robotics-and-ai-institute/)

2. **Digit 5 或为首个"真正安全"的人型机器人工人** —— Agility 的最新机型把安全从工程问题提升为产品定义核心，为人型机器人进入工厂扫清关键障碍。
   [链接](https://spectrum.ieee.org/humanoid-robot-safety)

3. **AI 时代机器人安全需要被重新思考** —— 物理 AI 的网络攻击面（视觉欺骗、对抗样本、模型后门）正成为新风险，IEEE Spectrum 报道揭示传统安全范式已不够。
   [链接](https://spectrum.ieee.org/physical-ai-robot-cybersecurity-vicone)

4. **F-Prime Capital 将在 RoboBusiness 解读机器人投资现状** —— 一线 VC 对当前估值、回报周期与"卖铲子"逻辑的最新研判。
   [链接](https://www.therobotreport.com/f-prime-capital-give-insights-state-robotics-investments-robobusiness/)

5. **人型机器人"坏了怎么办"——运维成为新议题** —— 维修、二次部署、生命周期管理正在成为继制造成本之后的下一道现实关卡。
   [链接](https://www.therobotreport.com/what-do-you-do-with-a-humanoid-robot-when-it-breaks-down/)

---

## 三、研究前沿

> 今日 ArXiv cs.RO 暂无新提交，论文速览暂停一期。可重点回顾近一周的 **τ0-VLA**（世界模型引导的测试时计算层级 VLA）与 **OMG**（清华 MARS Lab，通用人形全身运动生成）——两篇都直接对应当前 VLA 与人型运动智能的核心难点。

---

## 四、重点项目

### 🦾 机器人学习与控制

| 仓库 | Star | 说明 |
|---|---|---|
| [isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab) | ⭐8,178 | NVIDIA 官方机器人学习统一框架，多物理引擎/多渲染器支持，是当前 Sim-to-Real 训练的事实标准之一 |
| [Tsinghua-MARS-Lab/OMG](https://github.com/Tsinghua-MARS-Lab/OMG) | ⭐117 | 清华 MARS Lab 的通用人形全身运动生成官方实现，面向通用机器人控制 |
| [murobotics-ai/handumi-sw](https://github.com/murobotics-ai/handumi-sw) | ⭐68 | 开源 HandUMI 双臂同步数据采集与重定向软件，可适配多种型号机械臂 |
| [RoboCurve/inspect-robots](https://github.com/robocurve/inspect-robots) | ⭐570 | 物理 AI 评测利器：任意 LLM/VLA × 任意机械臂/人型 × 任意真实/仿真基准的开放评测框架 |
| [Open-X-Humanoid/HEX](https://github.com/Open-X-Humanoid/HEX) | ⭐333 | 全尺寸人型机器人全身 VLA 框架，覆盖视觉-语言-动作全身协同 |
| [3587jjh/HuRo](https://github.com/3587jjh/HuRo) | ⭐27 | 将人类视频"机器人化"用于可扩展 VLA 预训练（CoRL 2026） |

### 🤖 仿真与框架

| 仓库 | Star | 说明 |
|---|---|---|
| [google-deepmind/mujoco](https://github.com/google-deepmind/mujoco) | ⭐15,241 | DeepMind 维护的接触动力学物理仿真器，机器人强化学习的事实基准 |
| [newton-physics/newton](https://github.com/newton-physics/newton) | ⭐5,663 | NVIDIA Warp 上的 GPU 加速开源物理引擎，专为机器人与仿真研究设计 |
| [mujocolab/mjlab](https://github.com/mujocolab/mjlab) | ⭐3,106 | 基于 MuJoCo-Warp 的 Isaac Lab API 实现，GPU RL 训练栈新势力 |
| [google-deepmind/mujoco_menagerie](https://github.com/google-deepmind/mujoco_menagerie) | ⭐4,089 | DeepMind 官方 MuJoCo 高质量机器人模型库，是 Sim-to-Real 的重要资产 |
| [ros-controls/mujoco_ros2_control](https://github.com/ros-controls/mujoco_ros2_control) | ⭐250 | ROS 2 control 与 MuJoCo 的桥接，包含 RGB-D、LiDAR 等传感器插件 |
| [gazebosim/ros_gz](https://github.com/gazebosim/ros_gz) | ⭐538 | ROS（1/2）与新版 Gazebo 的官方集成包 |
| [ros2-rust/ros2_rust](https://github.com/ros2-rust/ros2_rust) | ⭐1,528 | ROS 2 的官方 Rust 客户端绑定，机器人基础设施语言向 Rust 迁移的代表 |
| [copper-project/copper-rs](https://github.com/copper-project/copper-rs) | ⭐1,495 | 用 Rust 写就的"机器人操作系统"，强调可确定性的构建、运行与回放 |
| [loco-3d/crocoddyl](https://github.com/loco-3d/crocoddyl) | ⭐1,307 | 接触序列下的最优控制库，基于 DDP 系列算法，腿足/四足规划常用 |

### 🧠 VLA 与基础模型

| 仓库 | Star | 说明 |
|---|---|---|
| [dexmal/opendm](https://github.com/dexmal/opendm) | ⭐2,055 | 面向通用具身智能的开世界基础模型，目标"一个模型跑多任务" |
| [sii-research/tau-0-vla](https://github.com/sii-research/tau-0-vla) | ⭐622 | τ0-VLA 官方实现：用世界模型引导测试时计算的层级机器人基础模型 |
| [FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA) | ⭐704 | 面向具身 AI 的 VLA 一站式工程平台，覆盖数据到真机部署 |
| [allenai/vla-evaluation-harness](https://github.com/allenai/vla-evaluation-harness) | ⭐617 | 任意 VLA × 任意仿真基准的统一评测框架 |
| [InternRobotics/VLAC](https://github.com/InternRobotics/VLAC) | ⭐331 | ICML 2026 收录的 Vision-Language-Action-Critic：把"评论家"引入真实世界机器人 RL |
| [OpenBMB/SimpleMemVLA](https://github.com/OpenBMB/SimpleMemVLA) | ⭐66 | 用时间戳视觉历史与流式推理为 VLA 注入"原生视频记忆"，针对长时序操作 |
| [syswonder/robonix](https://github.com/syswonder/robonix) | ⭐365 | "机器人的智能体操作系统"——为 VLA Agent 提供运行时底座 |
| [ros-claw/rosclaw](https://github.com/ros-claw/rosclaw) | ⭐202 | 面向 Physical AI 与具身 Agent 的自演化运行时基础设施 |
| [sou350121/VLA-Handbook](https://github.com/sou350121/VLA-Handbook) | ⭐634 | 全中文 VLA 实战手册，面向算法工程师的入门/面试指南 |

### 🔧 硬件与驱动

| 仓库 | Star | 说明 |
|---|---|---|
| [ArduPilot/ardupilot](https://github.com/ArduPilot/ardupilot) | ⭐15,906 | ArduPlane/Copter/Rover/Sub 飞控/车控开源基石 |
| [PX4/PX4-Autopilot](https://github.com/PX4/PX4-Autopilot) | ⭐12,665 | 学术界最广泛使用的开源飞控栈 |
| [JacopoPan/aerial-autonomy-stack](https://github.com/JacopoPan/aerial-autonomy-stack) | ⭐597 | PX4/ArduPilot + ROS2 + YOLO + LiDAR + Jetson 的无人机集群框架 |
| [manankharwar/fusioncore](https://github.com/manankharwar/fusioncore) | ⭐365 | 面向户外机器人的 23 状态 UKF 定位（IMU+轮速+GPS，100 Hz），自带传感器异常诊断 |
| [FastCrest/tether](https://github.com/FastCrest/tether) | ⭐84 | 边缘到云的 AI 部署 CLI，覆盖 Jetson / RTX / Apple Silicon / AMD，支持 parity 证书 |

### 📊 数据集与基准

| 仓库 | Star | 说明 |
|---|---|---|
| [StanfordVL/BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K) | ⭐1,708 | 加速具身 AI 研究的标准平台，1K 任务级日常活动仿真基准 |
| [BaiShuanghao/Awesome-Robotics-Manipulation](https://github.com/BaiShuanghao/Awesome-Robotics-Manipulation) | ⭐1,145 | 机器人操作领域论文/代码/网站的精选索引 |
| [robotlearning123/awesome-isaac-gym](https://github.com/robotlearning123/awesome-isaac-gym) | ⭐798 | NVIDIA Isaac Gym 框架/论文/资源汇总 |
| [Hebbian-Robotics/hflow](https://github.com/Hebbian-Robotics/hflow) | ⭐273 | 面向机器人团队的数据质量验证 SDK，保障模型训练数据可追溯 |
| [Calibra-Robotics/Calibra](https://github.com/Calibra-Robotics/Calibra) | ⭐28 | 机器人模仿学习数据集可观测性 + coreset 选择工具 |

---

## 五、生态趋势信号

三条信号在今日素材中高度共振：

1. **"世界模型"正在成为 VLA 的下一代承重墙**：从 [τ0-VLA](https://github.com/sii-research/tau-0-vla) 的层级世界模型、到 [knightnemo/Awesome-World-Models](https://github.com/knightnemo/Awesome-World-Models) 等社区精选列表的活跃维护，再到多个"具身世界模型"的综述与基准——VLA 正在从"看图说话"演化为"会预演的规划器"。
2. **基础设施语言向 Rust 迁移**：[copper-rs](https://github.com/copper-project/copper-rs)、[ros2_rust](https://github.com/ros2-rust/ros2_rust)、[dora-rs](https://github.com/dora-rs/dora) 同时高活跃度，反映出对**确定性、低延迟、可回放**运行时的强需求——这与 IEEE "Robotscript/AI 时代机器人安全"主题形成回应。
4. **仿真-评测-部署一体化流水线成型**：[FluxVLA](https://github.com/FluxVLA/FluxVLA)（数据→部署）、[vla-evaluation-harness](https://github.com/allenai/vla-evaluation-harness)（评测）、[hflow/Calibra](https://github.com/Calibra-Robotics/Calibra)（数据可观测性）、[tether](https://github.com/FastCrest/tether)（边缘部署）共同构成"工具链闭环"。

---

## 六、值得关注

1. **τ0-VLA：用世界模型重塑测试时推理**——若 VLA 真要在长时序任务中超越传统行为克隆，"先想象再执行"几乎是必经路径，建议跟踪其消融与 Sim2Real 报告。
   [仓库](https://github.com/sii-research/tau-0-vla) ｜ [同主题 IEEE Spectrum 论文走向](https://spectrum.ieee.org/)

2. **SoftBank × Robotics and AI Institute**——这笔收购一旦落地，将深刻影响北美具身研究的人才与算力流向；同时也意味着日本资本正把人形/具身 AI 推向"国家级基础设施"层级。
   [原文](https://www.therobotreport.com/softbank-agrees-to-acquire-robotics-and-ai-institute/)

3. **NVIDIA Newton 与 mjlab（MuJoCo-Warp）形成"新仿真双雄"**——Newton 偏通用 GPU 物理，mjlab 把 Isaac Lab API 复刻到 MuJoCo-Warp，意味着 **2025 下半年的 RL/VLA 训练栈很可能出现显著迁移**；建议尽早关注兼容性、性能对比与下游 VLA 仓库的适配动向。
   [Newton](https://github.com/newton-physics/newton) ｜ [mjlab](https://github.com/mujocolab/mjlab)

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*