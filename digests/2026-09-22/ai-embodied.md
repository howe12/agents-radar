# 具身智能开源动态日报 2026-09-22

> 数据来源: GitHub Search API (129 仓库) | ArXiv cs.RO (30 篇论文) | RSS 新闻 (45 条) | 生成时间: 2026-09-22 02:49 UTC

---

# 具身智能开源动态日报

**日期：2026 年** | **信息源：IEEE Spectrum、The Robot Report、ArXiv cs.RO、GitHub**

---

## 一、今日速览

今日具身智能领域呈现"**安全落地 + 3D 感知 + VLA 部署**"三大主线：波士顿动力开放 Metaplant 应用中心以训练 Atlas 人形机，Digit 5 提出真正工人级安全标准，凸显人形机从演示走向规模化的拐点；论文侧 Bridge3D 让 VLA 模型原生理解 3D 空间、InsertAnything 与 FoldQuantVLA 分别瞄准接触式装配和端侧低比特部署，反映 VLA 从"看得见"到"看得懂、跑得起"的进化。仓库方面 Isaac Lab、RLinf、Newton 等 GPU 加速仿真与具身 RL 基础设施持续走热，FluxVLA、VLAC 等工程化 VLA 平台兴起，说明具身智能正进入"模型—数据—部署"全栈开源协同阶段。

---

## 二、行业脉搏

| # | 新闻 | 意义 |
|---|------|------|
| 1 | [Digit 5 May Be the First Humanoid Robot Worker That's Truly Safe](https://spectrum.ieee.org/humanoid-robot-safety) | 人形机器人从"能动"走向"可商用"，安全标准成为规模化部署的前置条件 |
| 2 | [Boston Dynamics opens Metaplant Application Center to train Atlas humanoids](https://www.therobotreport.com/boston-dynamics-opens-metaplant-application-center-train-atlas-humanoid-robots/) | 头部厂商押注"工厂即训练场"，推动 sim-to-real 与真实数据闭环 |
| 3 | [IAC completes autonomous racing event at Laguna Seca](https://www.therobotreport.com/iac-completes-autonomous-racing-event-at-laguna-seca/) | 自动驾驶赛车成为极限场景算法试金石，端到端规划与控制竞争加剧 |
| 4 | [Rethinking Robot Safety in the Age of AI](https://spectrum.ieee.org/physical-ai-robot-cybersecurity-vicone) | AI 时代机器人网络安全首次被系统讨论，Physical AI 治理议题兴起 |
| 5 | [What do you do with a humanoid robot when it breaks down?](https://www.therobotreport.com/what-do-you-do-with-a-humanoid-robot-when-it-breaks-down/) | 后勤运维（O&M）成为人形机器人商业化的隐性壁垒 |

---

## 三、研究前沿

### 1. [Smoothness as a Constraint for Stable Humanoid Locomotion](http://arxiv.org/abs/2609.24552v1)
Panchal & Kleyko 等人提出将**运动平滑性作为显式约束**融入人形机全身控制策略，缓解真实部署中的抖动与不稳定问题，对线下 Sim-to-Real 迁移尤为关键。

### 2. [Bridge3D: Enabling Vision-Language-Action Models to See and Act in 3D](http://arxiv.org/abs/2609.24525v1)
李浩宣、严思宇等人让 VLA 模型**原生消费 3D 表征**，克服主流 2D VLA 在空间推理上的瓶颈，是 OpenVLA/π₀ 系列之后的关键升级方向。

### 3. [InsertAnything: Generalizable Contact-Rich Precision Insertion from Simulation to Reality](http://arxiv.org/abs/2609.24511v1)
马正华、孟欣潘等人针对工业装配核心难点——**紧公差插轴**，实现 sim-to-real 的泛化策略，连接学术演示与产线落地。

### 4. [TACIT: Tactile Contact Supervision for Spatial Attention in Dexterous Manipulation](http://arxiv.org/abs/2609.24507v1)
赖燕候、朱福财等提出用**触觉接触信号监督空间注意力**，解决少样本演示下视觉策略"形似神不似"的问题，推动灵巧操作的多模态学习。

### 5. [FoldQuantVLA: Native Low-Bit Quantization of VLA Models via Consistent Folding](http://arxiv.org/abs/2609.24433v1)
何洪德、Khanh Nguyen 等通过**一致性折叠实现 VLA 原生低比特量化**，显著压缩观测到动作的延迟，是 VLA 走向端侧实时部署的重要基石。

---

## 四、重点项目

### 🦾 机器人学习与控制

- **[isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab)** ⭐ 8,189
  NVIDIA 统一机器人学习框架，支持多物理后端与渲染，是 GPU 加速 RL/IL 训练的事实标准。

- **[RLinf/RLinf](https://github.com/RLinf/RLinf)** ⭐ 5,336
  面向具身与 Agentic AI 的强化学习基础设施，提供从仿真到真机的高吞吐训练链路。

- **[Tsinghua-MARS-Lab/OMG](https://github.com/Tsinghua-MARS-Lab/OMG)** ⭐ 118
  清华 MARS Lab 开源的通用人形全身运动生成（Omni-Modal Motion Generation），探索多模态输入下的全身控制。

- **[Open-X-Humanoid/HEX](https://github.com/Open-X-Humanoid/HEX)** ⭐ 333
  全尺寸人形机器人的 whole-body VLA 框架，把语言指令直接映射到全身动作。

### 🤖 仿真与框架

- **[google-deepmind/mujoco](https://github.com/google-deepmind/mujoco)** ⭐ 15,261
  接触动力学标杆物理引擎，机器人研究底层基座。

- **[newton-physics/newton](https://github.com/newton-physics/newton)** ⭐ 5,670
  基于 NVIDIA Warp 的 GPU 加速物理仿真，专为机器人学家设计。

- **[NVIDIA-ISAAC-ROS/isaac_ros_visual_slam](https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_visual_slam)** ⭐ 1,469
  基于 cuVSLAM 的 ROS 2 视觉 SLAM/里程计算法包，Jetson 端高度优化。

- **[ros-navigation/navigation2](https://github.com/ros-navigation/navigation2)** ⭐ 4,732
  ROS 2 官方导航框架，机器人移动的工业级参考实现。

### 🧠 VLA 与基础模型

- **[FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA)** ⭐ 705
  VLA 一体化工程平台，覆盖"数据采集—训练—真机部署"全链路。

- **[sii-research/tau-0-vla](https://github.com/sii-research/tau-0-vla)** ⭐ 624
  τ0-VLA：引入**世界模型引导的测试时计算**的分层机器人基础模型。

- **[allenai/vla-evaluation-harness](https://github.com/allenai/vla-evaluation-harness)** ⭐ 618
  统一 VLA 模型在多机器人、多仿真基准下的评估框架，类比 LLM 的 OpenCompass。

- **[InternRobotics/VLAC](https://github.com/InternRobotics/VLAC)** ⭐ 331
  上海 AI Lab ICML2026 工作：VLA-Critic，让真实世界机器人在线 RL 成为可能。

- **[syswonder/robonix](https://github.com/syswonder/robonix)** ⭐ 365
  基于 Rust 的机器人 Agentic OS，强调低延迟与可组合性。

### 📊 数据集与基准

- **[RoboVerseOrg/RoboVerse](https://github.com/RoboVerseOrg/RoboVerse)** ⭐ 1,862
  面向可扩展、可泛化机器人学习的统一平台、数据集与基准。

- **[StanfordVL/BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K)** ⭐ 1,709
  斯坦福 BEHAVIOR-1K：加速具身 AI 研究的家务场景基准平台。

- **[3587jjh/HuRo](https://github.com/3587jjh/HuRo)** ⭐ 29
  CoRL 2026：把人类视频"机器人化"，用于 VLA 大规模预训练。

- **[Calibra-Robotics/Calibra](https://github.com/Calibra-Robotics/Calibra)** ⭐ 28
  模仿学习中数据集可观测性与 coreset 选择工具，直击"数据质量"痛点。

---

## 五、生态趋势信号

当前具身智能开源生态正出现几条清晰信号：**第一，VLA 工程化进入"全栈开源"阶段**——从数据采集（HuRo、HandUMI、XTac-UMI）、训练框架（FluxVLA、VLAC）到评测基准（vla-evaluation-harness、RoboVerse）形成完整工具链，意味着 VLA 正从论文走向工程交付。**第二，GPU 物理仿真成为新一代基础设施竞赛焦点**，Newton、Isaac Lab、mjlab（MuJoCo-Warp）三足鼎立，性能边界持续上探。**第三，安全、运维与可观测性进入视野**——从 Digit 5 的物理安全到 Calibra 的数据可观测性，再到 rosclaw、robonix 的运行时护栏，提示行业意识到"模型之外"的系统能力才是落地分水岭。**第四，中文社区与学术机构主导力量增强**，Datawhale、清华 MARS Lab、上海 AI Lab、字节豆包团队等正成为不可忽视的开源贡献极。

---

## 六、值得关注

1. **Boston Dynamics Metaplant + Atlas 训练中心**：[新闻链接](https://www.therobotreport.com/boston-dynamics-opens-metaplant-application-center-train-atlas-humanoid-robots/)
   头部厂商把"真实工厂"作为人形机迭代主战场，可能催生 sim-to-real 数据闭环的新范式，值得长期跟踪其与 Figure、Agility 的差异化路径。

2. **Bridge3D + FoldQuantVLA 双论文组合**：[Bridge3D](http://arxiv.org/abs/2609.24525v1) / [FoldQuantVLA](http://arxiv.org/abs/2609.24433v1)
   一篇把 VLA 推向 3D，一篇把 VLA 压进低比特部署，恰好对应"看得更清 + 跑得更快"两条 VLA 工程化的关键瓶颈，建议关注作者团队后续工作。

3. **Newton + IsaacLab + mjlab 的"GPU 仿真三角"**：[Newton](https://github.com/newton-physics/newton) / [IsaacLab](https://github.com/isaac-sim/IsaacLab) / [mjlab](https://github.com/mujocolab/mjlab)
   三大 GPU 加速物理仿真框架同年活跃，预示 2026 年机器人 RL 训练成本将出现数量级下降，是基础设施级别的拐点信号。

---

*本日报由多源信息自动综合生成，链接均保留原始出处，建议读者按需深读。*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*