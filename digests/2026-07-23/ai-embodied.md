# 具身智能开源动态日报 2026-07-23

> 数据来源: GitHub Search API (130 仓库) | ArXiv cs.RO (30 篇论文) | RSS 新闻 (48 条) | 生成时间: 2026-07-23 02:09 UTC

---

# 具身智能开源动态日报

## 📌 今日速览

今日具身智能领域呈现"资本与硬件共振"的鲜明特征：英国人形机器人公司 Humanoid 拿下 1.52 亿美元 A 轮融资，Generative Bionics 发布全身触觉感知人形机器人；研究端，ArXiv 上连续出现多篇聚焦人形机器人遥操作-运动-操控协同、通用 VLA 训练与持续学习的论文；开源生态方面，MuJoCo-Warp 生态（mjlab、openarm）正与 NVIDIA Isaac Lab 形成并行格局，VLA 领域出现 FluxVLA、InternVLA-A 等工程化平台与评估套件齐发的局面。

---

## 🌐 行业脉搏

| 动态 | 来源 | 意义 |
|---|---|---|
| 🇬🇧 **Humanoid 拿下 $152M A 轮融资** | [The Robot Report](https://www.therobotreport.com/uk-based-humanoid-secures-152m-in-series-a-funding/) | 继 Figure / 1X / Physical Intelligence 后，又一欧洲人形机器人公司跻身独角兽行列，资本持续押注通用人形机器人路线。 |
| 🦾 **Generative Bionics 发布全身触觉人形机器人** | [The Robot Report](https://www.therobotreport.com/generative-bionics-unveils-humanoid-robot-with-full-body-tactile-sensing/) | 全身触觉感知被首次系统化集成到人形机器人平台，与社区内 visuo-tactile 融合趋势（如 TransDex）形成呼应。 |
| 🏥 **Medtronic 推出手术室 AI 计算平台** | [The Robot Report](https://www.therobotreport.com/medtronic-launch-ai-compute-platform-operating-room/) | 医疗机器人头部企业转向"AI 算力底座"战略，手术室正在成为物理 AI 的下一个主战场。 |
| 📊 **《Physical AI 与机器人现状报告》发布** | [The Robot Report](https://www.therobotreport.com/physical-ai-and-robotics/) | 提供行业级基线数据，是判断人形机器人、VLA 与具身智能商业化阶段的关键参考。 |
| 🛠️ **NASA 机器人装配技能取得突破（研究生主导）** | [IEEE Spectrum](https://spectrum.ieee.org/graduate-student-nasas-robots-assembly) | 学术力量直接赋能太空机器人装配任务，对在轨建造与维护具有长期价值。 |
| ⚠️ **Vicarious Surgical 正式关闭** | [The Robot Report](https://www.therobotreport.com/vicarious-surgical-officially-shutting-down/) | 头部手术机器人公司倒闭，提醒赛道虽热，但商业化路径仍极其脆弱。 |

---

## 🔬 研究前沿

| 论文 | 链接 | 贡献 |
|---|---|---|
| **Robots Acquire Manipulation Skills in Seconds from a Single Human Video** | [arXiv 2607.20033](http://arxiv.org/abs/2607.20033v1) | 单条人类视频即可让机器人秒级习得操作技能，是"少样本/单样本模仿"路径的重要推进，对消费级机器人的家用部署具关键意义。 |
| **Extreme-RGMT: Continual Learning of Highly Dynamic Skills for Robust Generalist Humanoid Control** | [arXiv 2607.20110](http://arxiv.org/abs/2607.20110v1) | 让通用人形机器人在保留日常能力的同时持续习得高动态技能，是迈向"全才"人形控制的关键一步。 |
| **Towards Miniature Humanoid Tele-Loco-Manipulation Using Virtual Reality and RL** | [arXiv 2607.20399](http://arxiv.org/abs/2607.20399v1) | 用 VR + RL 在小型人形上完成"运动 + 操作"协同，对低成本研究平台扩散意义重大。 |
| **Closing the Lab-to-Store Gap: A Data-Efficient Post-Training VLA Framework for Retail Humanoids** | [arXiv 2607.20345](http://arxiv.org/abs/2607.20345v1) | 聚焦 VLA 模型从实验室到零售场景的落地最后一公里，提出数据高效的后训练框架。 |
| **Distributed Acoustic Localization Array Deployed Using a Soft Everting Vine Robot** | [arXiv 2607.20392](http://arxiv.org/abs/2607.20392v1) | 用软体生长式藤蔓机器人部署分布式声学定位阵列，软体机器人首次以"可部署传感平台"形态进入现场应用。 |

---

## 🦾 重点项目

### 🤖 仿真与框架（MuJoCo / Isaac / Gazebo / ROS）

- **[google-deepmind/mujoco](https://github.com/google-deepmind/mujoco)** ⭐14,288  
  多关节接触动力学通用物理仿真器，物理 AI 与机器人研究的事实标准。

- **[google-deepmind/dm_control](https://github.com/google-deepmind/dm_control)** ⭐4,643  
  DeepMind 基于 MuJoCo 的 RL 环境栈，物理仿真+强化学习组合的经典配套。

- **[mujocolab/mjlab](https://github.com/mujocolab/mjlab)** ⭐2,710  
  基于 MuJoCo-Warp 的 Isaac Lab API 替代方案，标志 MuJoCo-Warp 生态开始正面挑战 Isaac Sim。

- **[newton-physics/newton](https://github.com/newton-physics/newton)** ⭐5,221  
  NVIDIA Warp 上构建的 GPU 加速开源物理引擎，专为机器人与仿真研究打造。

- **[isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab)** ⭐7,736  
  基于 NVIDIA Isaac Sim 的统一机器人学习框架，目前 GPU 并行 RL 训练的主力平台。

- **[RobotLocomotion/drake](https://github.com/RobotLocomotion/drake)** ⭐4,119  
  基于模型的机器人设计与验证工具箱，模型预测控制/接触优化领域的工业级参考实现。

- **[cyberbotics/webots](https://github.com/cyberbotics/webots)** ⭐4,468  
  开源通用机器人仿真器，跨平台、多机器人支持，是教育与轻量研究首选。

- **[ros-navigation/navigation2](https://github.com/ros-navigation/navigation2)** ⭐4,498  
  ROS 2 官方导航框架，机器人落地部署的事实标准。

- **[AtsushiSakai/PythonRobotics](https://github.com/AtsushiSakai/PythonRobotics)** ⭐30,107  
  机器人算法 Python 示例与教材集合，是入门到进阶 SLAM/规划/控制的学习圣经。

- **[commaai/openpilot](https://github.com/commaai/openpilot)** ⭐63,193  
  适用于 300+ 车型的开源机器人操作系统，自动驾驶"机器人化"代表项目。

### 🧠 VLA 与具身基础模型

- **[datawhalechina/every-embodied](https://github.com/datawhalechina/every-embodied)** ⭐2,817  
  中文社区从 0 构建 VLA / OpenVLA / SmolVLA / π0 的完整教程，是国内具身智能入门首选。

- **[RLinf/RLinf](https://github.com/RLinf/RLinf)** ⭐4,221  
  面向具身与 Agentic AI 的强化学习基础设施，对 VLA 后训练阶段极具价值。

- **[FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA)** ⭐558  
  一站式 VLA 工程化平台，从数据采集到真机部署打通链路。

- **[InternRobotics/InternVLA-A-series](https://github.com/InternRobotics/InternVLA-A-series)** ⭐508  
  InternVLA-A1：统一理解、生成与操作的视觉-语言-动作模型，国产开源 VLA 代表。

- **[allenai/vla-evaluation-harness](https://github.com/allenai/vla-evaluation-harness)** ⭐460  
  任意 VLA 模型在任意仿真基准上统一评测，填补 VLA 评估碎片化空白。

- **[sou350121/VLA-Handbook](https://github.com/sou350121/VLA-Handbook)** ⭐419  
  中文 VLA 算法工程师实战手册，专注机器人特有的评估与部署问题。

### 🦾 机器人学习与控制

- **[robotlearning123/awesome-isaac-gym](https://github.com/robotlearning123/awesome-isaac-gym)** ⭐788  
  NVIDIA Isaac Gym 框架、论文与资源汇总，GPU 加速 RL 训练的事实索引。

- **[Tsinghua-MARS-Lab/OMG](https://github.com/Tsinghua-MARS-Lab/OMG)** ⭐94  
  通用人形控制的"全模态运动生成"官方仓库，面向跨模态运动策略。

- **[dwipddalal/Anchor-Align](https://github.com/dwipddalal/Anchor-Align)** ⭐11  
  通过表征锚定与语言-动作对齐实现可泛化 VLA 微调，代表 VLA 微调新方向。

- **[LFGfg/TransDex](https://github.com/LFGfg/TransDex)** ⭐8  
  基于点云预训练的 3D 视觉-触觉融合运动策略，是灵巧操作 + 多模态融合的代表。

### 📊 数据集与基准

- **[StanfordVL/BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K)** ⭐1,592  
  加速具身 AI 研究的标准化平台与基准，社区级评测基础设施。

- **[RoboVerseOrg/RoboVerse](https://github.com/RoboVerseOrg/RoboVerse)** ⭐1,788  
  统一平台、数据集与基准，面向可扩展可泛化的机器人学习。

- **[introlab/rtabmap](https://github.com/introlab/rtabmap)** ⭐3,898  
  RTAB-Map 实时外观建图库，SLAM 与导航评测的老牌参考实现。

- **[carla-simulator/carla](https://github.com/carla-simulator/carla)** ⭐14,204  
  自动驾驶研究的主流开源仿真器，亦被广泛用于具身智能数据生成。

### 🔧 硬件与驱动

- **[enactic/openarm](https://github.com/enactic/openarm)** ⭐2,751  
  完全开源的人形机械臂，专为接触丰富的物理 AI 研究设计，硬件开源 VLA 时代的标志。

- **[commaai/openpilot](https://github.com/commaai/openpilot)** ⭐63,193  
  同时具备硬件驱动与机器人 OS 双重身份，自动驾驶"具身化"的代表。

- **[hku-mars/UMI-3D](https://github.com/hku-mars/UMI-3D)** ⭐259  
  UMI-3D SLAM 与数据处理流程，推动通用操作接口的数据基础设施。

---

## 📈 生态趋势信号

当下具身智能开源生态正出现三条清晰主线：**其一，仿真底座竞争白热化**——MuJoCo-Warp 系（mjlab、openarm、newton）开始与 NVIDIA Isaac Lab 分庭抗礼，"GPU-native 物理引擎"成为新焦点；**其二，VLA 进入"工程化深水区"**，从模型架构论文转向数据工具（forge）、训练框架（OpenTau、RLinf）、评测套件（vla-evaluation-harness）、实机部署（ros-claw、EVA-CLIENT）的全栈竞争；**其三，软硬件双线开源同步推进**——OpenARM、HandUMI、UMI-3D 等硬件平台与 TransDex 这类触觉融合算法共同推动"低成本真机数据"成为突破闭源数据壁垒的关键路径。与此同时，资本市场对人形机器人的狂热（Humanoid $152M）与老牌手术机器人的倒闭（Vicarious Surgical）形成强对照，说明赛道虽热，但商业化落地窗口正在迅速收窄。

---

## 👀 值得关注

1. **MuJoCo-Warp 生态 vs NVIDIA Isaac Lab 的下一代仿真之争**  
   [mujocolab/mjlab](https://github.com/mujocolab/mjlab) 的爆发意味着开源社区不再接受单一仿真主导，未来 6–12 个月的硬件兼容性与生态扩展将决定具身研究的工程基线走向。

2. **全身触觉 + 通用人形：从 Generative Bionics 到 TransDex 的同频共振**  
   硬件层（[Generative Bionics](https://www.therobotreport.com/generative-bionics-unveils-humanoid-robot-with-full-body-tactile-sensing/)）与算法层（[TransDex](https://github.com/LFGfg/TransDex)）几乎同步聚焦 visuo-tactile 融合，标志着触觉感知正从"附加能力"升级为"通用操作基础设施"。

3. **单条人类视频即可秒级学习操作技能**  
   [arXiv 2607.20033](http://arxiv.org/abs/2607.20033v1) 一旦工程化落地，将彻底改变家庭服务机器人的数据采集范式，值得持续跟踪作者后续工作与可能的开源代码释放。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*