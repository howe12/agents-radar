# 具身智能开源动态日报 2026-08-20

> 数据来源: GitHub Search API (127 仓库) | ArXiv cs.RO (30 篇论文) | RSS 新闻 (48 条) | 生成时间: 2026-08-20 00:52 UTC

---

# 具身智能开源动态日报

**日期：2025 年 1 月**

---

## 一、今日速览

今日具身智能生态呈现"产业资本与基础研究双轮加速"格局：宇树科技 IPO 引发人形机器人行业关注、商业配送机器人与工业叉车持续渗透落地场景；学术端，Hydra-0 等通用世界模型、PRISM 等真实工业数据集持续推进通用机器人能力边界；开源侧，RLinf、IsaacLab、MuJoCo、新一代物理引擎 Newton 共同夯实具身智能基础设施，VLA 生态从训练、评测到部署全链路工具日益齐备。整体信号显示，行业正从"演示阶段"向"可量化、可复制、可商用"的工程化阶段跃迁。

---

## 二、行业脉搏

1. **宇树科技 IPO 对人形机器人行业的意义**：作为人形机器人代表性企业的资本化进程，将重新定义行业估值锚点，加速上下游零部件、力矩传感器、运控芯片等供应链成熟，并催化竞争格局分化。
   链接：https://www.therobotreport.com/what-does-unitree-robotics-ipo-mean-for-humanoid-industry/

2. **Serve Robotics 与 Grubhub 部署自主配送机器人**：配送场景商业化再下一城，标志室外人行道级（sidewalk-level）机器人在北美餐饮外卖场景的可复制部署能力获得验证。
   链接：https://www.therobotreport.com/serve-robotics-deploys-autonomous-delivery-robots-grubhub/

3. **普渡科技推出 MP2000 自主叉车**：移动机器人在工业搬运领域的纵深拓展，从服务型机器人公司向"厂内物流"重型装备延伸，对标传统 AGV/AMR 市场。
   链接：https://www.therobotreport.com/pudu-robotics-launches-new-mp2000-autonomous-forklift/

4. **Persona AI 拟以船舶焊接作为人形机器人首个落地工种**：焊接作业具有高重复性、高危险性、结构化环境特征，是检验人形机器人"力控+视觉+长序列任务"组合能力的理想压测场景。
   链接：https://spectrum.ieee.org/persona-ai-humanoid-robot-welding

5. **Kollmorgen 在 RoboBusiness 详解人形机器人关节运动控制**：核心零部件厂商主动开源/公开技术参考，有助于打通"电机—关节—整机—动作生成"的产业链协同。
   链接：https://www.therobotreport.com/kollmorgen-give-joint-by-joint-guide-humanoid-motion-robobusiness/

---

## 三、研究前沿

1. **Hydra-0：以 Action Flow 为条件的通用世界模型与控制器**
   Li, Wen et al. — http://arxiv.org/abs/2608.18077v1
   将机器人动作建模为像素运动（pixel motion）的"动作流"，实现通用世界模型对异构机器人任务的统一表征，对通用策略学习、视频预测与控制一体化具有方法论意义。

2. **PRISM：面向接触丰富任务的真实工业多模态技能数据集**
   Tengbo Yu, Jiahao Wu et al. — http://arxiv.org/abs/2608.17962v1
   在真实工业场景中采集带多模态感知的接触丰富操作数据，弥补现有大规模数据集"日常化、轻接触"短板，是工业级机器人学习走向落地的关键拼图。

3. **CompCPZ：语言引导机器人操作中的多模态意图保持**
   Zhen Zhang, Ahmad Hafez et al. — http://arxiv.org/abs/2608.17717v1
   针对"放在红盘 *或* 蓝盘"等多模态歧义指令，提出意图保持型操作策略，避免智能体退化为质心解，显著提升 VLM/VLA 模型在指令理解鲁棒性。

4. **Jetson-ORB-SLAM3：面向边缘计算的高精度保持型 GPU 实现**
   Rajat Roy, Aditya Arun Kumar Yadav et al. — http://arxiv.org/abs/2608.17874v1
   在资源受限的边缘平台上保持视觉-惯性 SLAM 精度的同时实现 GPU 加速，对自主机器人、车载与无人系统的本地化部署具有现实价值。

5. **倾斜多旋翼的末端执行器中心 NMPC 与空中操作**
   Jinjie Li, Yicheng Chen et al. — http://arxiv.org/abs/2608.17819v1
   提出面向可倾斜多旋翼的效应器中心非线性模型预测控制，实现无偏移的全向空中操作，对接触式空中机器人在基础设施巡检、装配场景中的实用化具有贡献。

---

## 四、重点项目

### 🦾 机器人学习与控制

- **Tsinghua-MARS-Lab/OMG** ⭐109 — 清华 MARS 实验室开源的"OMG：通用人形机器人控制的统一多模态运动生成"，是当前开源人形全身运动生成少有的高质量参考实现。
  https://github.com/Tsinghua-MARS-Lab/OMG

- **RLinf/RLinf** ⭐4,579 — 面向具身与代理式 AI 的强化学习基础设施，统一 RL 训练栈有助于打通"策略学习—真实部署"通路。
  https://github.com/RLinf/RLinf

- **enactic/openarm** ⭐2,865 — 完全开源的人形机械臂，专为接触丰富环境下的物理 AI 研究与部署设计，降低实验室硬件门槛。
  https://github.com/enactic/openarm

- **murobotics-ai/handumi-sw** ⭐46 — 开源 HandUMI 软件栈，支持双臂同步数据采集与重定向到任意双臂机器人，是具身数据"统一接口"方向的重要工具。
  https://github.com/murobotics-ai/handumi-sw

### 🤖 仿真与框架

- **google-deepmind/mujoco** ⭐14,599 — MuJoCo 多关节接触动力学仿真器，作为机器人学习事实标准，新版本持续强化 GPU 加速与可微分能力。
  https://github.com/google-deepmind/mujoco

- **isaac-sim/IsaacLab** ⭐7,920 — 基于 NVIDIA Isaac Sim 的统一机器人学习框架，规模化 RL/IL 训练的事实工业级平台。
  https://github.com/isaac-sim/IsaacLab

- **newton-physics/newton** ⭐5,493 — 基于 NVIDIA Warp 构建的 GPU 加速开源物理仿真引擎，专为机器人学家与仿真研究设计，是下一代机器人"模拟即现实"基础设施候选。
  https://github.com/newton-physics/newton

- **dora-rs/dora** ⭐3,885 — 数据流驱动的机器人中间件，用有向图建模 AI 机器人应用，强调低延迟、可组合与分布式，是 ROS 之外一种"轻量化、面向 AI"的替代路线。
  https://github.com/dora-rs/dora

- **syswonder/robonix** ⭐335 — 面向具身 AI 的开源操作系统（EAIOS），探索"机器人原生 OS"在自演化、模块化层面的可能形态。
  https://github.com/syswonder/robonix

### 🧠 VLA 与具身基础模型

- **FluxVLA/FluxVLA** ⭐624 — 一体化 VLA 工程平台，覆盖从数据采集到真实机器人部署全链路，是中文社区少有的端到端 VLA 工程模板。
  https://github.com/FluxVLA/FluxVLA

- **allenai/vla-evaluation-harness** ⭐546 — AllenAI 开源的 VLA 模型统一评测框架，可在任意机器人仿真基准上评估任意 VLA 模型，对行业建立可比基准意义重大。
  https://github.com/allenai/vla-evaluation-harness

- **sii-research/tau-0-vla** ⭐490 — τ0-VLA 官方实现：具有世界模型引导的测试时计算的层级式机器人 FM，体现"世界模型 + VLA"融合的最新进展。
  https://github.com/sii-research/tau-0-vla

- **lucidrains/mimic-video** ⭐121 — Mimic-Video 视频-动作模型实现，验证视频生成范式在机器人控制中超越传统 VLA 的潜力。
  https://github.com/lucidrains/mimic-video

- **TensorAuto/OpenTau** ⭐201 — Tensor 开源的 VLA 训练基础设施，专注真实机器人 PyTorch 训练栈，便于工业场景快速微调。
  https://github.com/TensorAuto/OpenTau

### 🔧 硬件与驱动

- **ArduPilot/ardupilot** ⭐15,712 — 全球最广泛使用的开源飞控，支持固定翼、多旋翼、车辆、潜艇等多平台，是空中/无人系统的事实底层。
  https://github.com/ArduPilot/ardupilot

- **PX4/PX4-Autopilot** ⭐12,449 — 高品质开源飞控，与 ROS 2 生态深度集成，学术与工业无人机研发主流选择。
  https://github.com/PX4/PX4-Autopilot

- **Source-Robotics/PAR6-Collaborative-Robot-Arm** ⭐33 — 面向教育与研发的协作机械臂开源项目，降低高校实验室与中小企业进入机器人研发的硬件门槛。
  https://github.com/Source-Robotics/PAR6-Collaborative-Robot-Arm

### 📊 数据集与基准

- **StanfordVL/BEHAVIOR-1K** ⭐1,641 — 斯坦福开源的 1000 种日常任务具身基准，是当前"任务级"具身智能评测的代表性平台。
  https://github.com/StanfordVL/BEHAVIOR-1K

- **open-h/open-h-embodiment** ⭐134 — 面向医疗机器人的社区驱动开源 VLA 数据集倡议，为医疗这一高门槛具身场景提供稀缺训练资源。
  https://github.com/open-h/open-h-embodiment

- **Hebbian-Robotics/hflow** ⭐23 — 面向 Physical AI 的开源数据质量基础设施，呼应"数据质量 > 数据数量"的行业转向。
  https://github.com/Hebbian-Robotics/hflow

---

## 五、生态趋势信号

综合三方信号，可识别四条主线趋势：其一，**人形机器人产业化拐点临近**——宇树 IPO、Persona 焊接试点、Kollmorgen 关节级方案同时出现，意味着硬件、资本与场景验证首次形成闭环；其二，**世界模型成为下一代具身智能骨干**——Hydra-0（动作流世界模型）、τ0-VLA（世界模型引导测试时计算）、VAGEN（世界模型 RL）共同指向"用生成式视频/物理一致性模型统一感知、预测与决策"的新范式；其三，**VLA 工具链走向"端到端工程化"**——从 FluxVLA（部署）、OpenTau（训练）、vla-evaluation-harness（评测）到 EVA-Client（数据采集）形成完整闭环；其四，**物理 AI 基础设施层加速 GPU 化与开源 OS 化**——Newton、IsaacLab、mujoco-warp 与 robonix、ROSClaw、copper-rs 等"机器人操作系统"新势力并行崛起，预示底层栈正在被重新定义。

---

## 六、值得关注

1. **Hydra-0：Action Flow 通用世界模型**（http://arxiv.org/abs/2608.18077v1 ）
   将动作表示为像素级运动场的世界模型路线，是当前"统一具身

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*