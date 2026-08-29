# 具身智能开源动态日报 2026-08-29

> 数据来源: GitHub Search API (133 仓库) | ArXiv cs.RO (30 篇论文) | RSS 新闻 (47 条) | 生成时间: 2026-08-29 05:09 UTC

---

# 具身智能开源动态日报

**日期：2026 年 8 月 27 日 · 第 ___ 期**

---

## 一、今日速览

今日动态呈现出"产业整合加速、基础模型走向实用、开源基础设施分层演进"三大主线。产业侧，EXL 收购物理 AI 模型开发商 iMerit、Teradyne 再度起诉中国协作机器人厂商、NSF 投入 9000 万美元新建机器人研究中心，三起事件共同标志着具身智能正从技术验证迈入规模化与规范化阶段。研究侧，CLAP 提出跨具身视频世界模型可零样本充当物理仿真器，FlashVLA 推进 VLA 模型流式异步推理落地，二者共同指向"基础模型 + 高效推理"这一工业落地关键路径。开源侧，机器人领域呈现明显的 Rust 化与"代理化操作系统"趋势，dora-rs、robonix、rosclaw、copper-rs 等项目从不同维度试图重塑机器人中间件栈，VLA 工程化平台（FluxVLA、OpenTau、τ0-VLA）密集涌现，提示生态重心正向"模型可部署、可评测、可复现"迁移。

---

## 二、行业脉搏

| # | 事件 | 意义 |
|---|------|------|
| 1 | [**EXL 收购物理 AI 模型开发商 iMerit**](https://www.therobotreport.com/exl-acquires-physical-ai-model-developer-imerit/) | 数据服务巨头加码 Physical AI，反映"具身基础模型"已成为头部服务商必争之地，行业资源加速向数据—模型一体化能力集中。 |
| 2 | [**Teradyne Robotics 再诉中国协作机器人厂商**](https://www.therobotreport.com/teradyne-robotics-sues-another-chinese-cobot-maker/) | 协作机器人知识产权竞争白热化，全球头部厂商正以专利诉讼构筑壁垒，中国厂商面临"出海合规"与"自主核心专利"双重压力。 |
| 3 | [**NSF 投资 9000 万美元新建三大技术中心，含机器人专项**](https://www.therobotreport.com/nsf-invests-90m-three-new-technology-centers-including-one-focused-robotics/) | 美国国家级科研体系持续加码具身智能，中心化布局有望打通"基础研究—平台—人才"链条，长期影响全球技术标准制定权。 |
| 4 | [**Locus 在机器人操作难题（manipulation）上取得突破**](https://www.therobotreport.com/locus-getting-grasp-one-robotics-biggest-challenges-manipulation/) | 仓储机器人头部企业聚焦"抓取"这一公认难题，标志行业从导航 / 移动向"复杂操作"攻坚，下一阶段竞争点在精细动作学习与多指灵巧手。 |
| 5 | [**From teach-and-repeat to SelfPath AI：机器人下一次跃迁**](https://www.therobotreport.com/from-teach-repeat-to-selfpath-ai-next-robotics-leap/) | 传统"示教-复现"范式正在被自监督路径学习替代，机器人有望摆脱对人工示教数据的强依赖，是商用部署成本曲线的关键拐点。 |

---

## 三、研究前沿

### 1. CLAP: Cross-Embodiment Video World Models are Zero-Shot Physical Simulators
- **作者**：Kechen Liu, Ola Shorinwa
- **链接**：<http://arxiv.org/abs/2608.27406v1>
- **贡献**：首次系统证明，跨具身的动作条件视频世界模型无需针对特定机器人形态微调，即可作为零样本物理仿真器使用。该工作将"世界模型"从单一具身的玩具范式，推向异构机器人平台共享的物理先验，对数据稀缺的具身形态（如双臂、人形）尤为关键。

### 2. FlashVLA: Streaming Action Decoding for Fast and Asynchronous VLA Inference
- **作者**：Zekai Li, Jiaming Tang 等
- **链接**：<http://arxiv.org/abs/2608.27384v1>
- **贡献**：针对 VLA 模型推理延迟高、无法实时闭环的痛点，提出流式动作解码与异步推理框架。直接面向真实机器人部署场景，是连接"学术排行榜"与"工厂 / 家庭落地"之间的桥梁性工作。

### 3. Embodied Scene Rearrangement Planning (ESRP)
- **作者**：Canzhi Chen, Zan Wang 等
- **链接**：<http://arxiv.org/abs/2608.27371v1>
- **贡献**：提出"具身场景重排规划"新任务，要求智能体在物理约束下将物体从初始配置重排到目标配置。该任务为长时序、多物体、强耦合的家庭服务机器人提供了统一评测基准，填补了导航与单一抓取之间的中间地带空白。

### 4. STEP: State-Aware Task Estimation and Planning with Multi-Modal LLMs for Human-Robot Collaboration
- **作者**：Maitrey Gramopadhye, Prakash Baskaran 等
- **链接**：<http://arxiv.org/abs/2608.27225v1>
- **贡献**：用多模态大语言模型同时建模"任务状态感知"与"协作规划"，让工业机器人在共享工作空间中理解人类意图并主动辅助，避免传统 HRC 系统对固定脚本的依赖。

### 5. Tensegrity Continuum Robots Enable Task-Adaptive Morphologies for Cooperative Behaviors
- **作者**：Mahmud Hasan Saikot, Sydney Spiegel 等
- **链接**：<http://arxiv.org/abs/2608.27221v1>
- **贡献**：将张拉整体（tensegrity）连续体机器人的形态可变性与多机协作行为结合，提出"形态—任务—行为"协同优化框架，为非结构化环境下的自适应机器人群体提供新设计思路。

---

## 四、重点项目

### 🦾 机器人学习与控制

| 仓库 | ⭐ | 简介 |
|------|----|------|
| [**RLinf/RLinf**](https://github.com/RLinf/RLinf) | 4,671 | 面向具身与代理式 AI 的强化学习基础设施，提供从策略训练到大规模分布式调度的一站式能力，是当前 RL + 机器人最活跃的中文开源 RL 框架之一。 |
| [**OpenPipe/ART**](https://github.com/OpenPipe/ART) | 10,678 | 基于 GRPO 的多步骤智能体强化学习训练器，主打"边干边学"的真实任务训练范式，把 Agentic RL 工程门槛大幅降低。 |
| [**Microsoft/agent-lightning**](https://github.com/microsoft/agent-lightning) | 17,896 | 微软开源的"智能体训练加速器"，通过强化学习为 AI Agent 添加持续学习能力，对接复杂业务场景下的迭代训练需求。 |
| [**StanfordVL/BEHAVIOR-1K**](https://github.com/StanfordVL/BEHAVIOR-1K) | 1,668 | 由斯坦福发布的具身 AI 加速平台，包含 1000 种日常家务任务与大规模仿真环境，是家庭服务机器人研究的事实标准基准之一。 |
| [**RoboVerseOrg/RoboVerse**](https://github.com/RoboVerseOrg/RoboVerse) | 1,839 | 面向可扩展、可泛化机器人学习的统一平台、数据集与基准，强调 sim-to-real 一致性，对策略学习与模仿学习研究价值显著。 |

### 🤖 仿真与框架

| 仓库 | ⭐ | 简介 |
|------|----|------|
| [**google-deepmind/mujoco**](https://github.com/google-deepmind/mujoco) | 14,759 | 通用多关节接触物理仿真器，机器人学习领域的"工业标准"之一，其 Warp 后端正在重塑 GPU 加速仿真生态。 |
| [**isaac-sim/IsaacLab**](https://github.com/isaac-sim/IsaacLab) | 7,988 | 基于 NVIDIA Isaac Sim 的统一机器人学习框架，覆盖从数据合成到大规模并行训练的全链路，是工业级 sim-to-real 的核心底座。 |
| [**newton-physics/newton**](https://github.com/newton-physics/newton) | 5,552 | 基于 NVIDIA Warp 构建的开源 GPU 加速物理引擎，专为机器人学家与仿真研究者设计，性能与易用性兼具。 |
| [**carla-simulator/carla**](https://github.com/carla-simulator/carla) | 14,335 | 自动驾驶领域最具影响力的开源仿真器，对具身智能中的"导航 / 城市交互"任务具有直接迁移价值。 |
| [**gazebosim/gz-sim**](https://github.com/gazebosim/gz-sim) | 1,472 | Gazebo 最新版仿真器，ROS 2 原生集成，是学术与工业机器人仿真的事实标准之一。 |
| [**mujocolab/mjlab**](https://github.com/mujocolab/mjlab) | 2,864 | Isaac Lab API 的 MuJoCo-Warp 实现，将成熟训练范式迁移到开源物理引擎，降低研究者的 GPU 算力门槛。 |

### 🧠 VLA 与基础模型

| 仓库 | ⭐ | 简介 |
|------|----|------|
| [**TianxingChen/Embodied-AI-Guide**](https://github.com/TianxingChen/Embodied-AI-Guide) | 15,666 | Lumina 社区维护的具身智能技术指南，汇总论文、课程、工具与开源项目，是中文世界进入具身 AI 领域的"门户级"资源。 |
| [**dora-rs/dora**](https://github.com/dora-rs/dora) | 3,904 | 基于 Rust 的数据流机器人中间件，主打低延迟、可组合、分布式，正成为 ROS 之外最具吸引力的替代架构。 |
| [**dexmal/opendm**](https://github.com/dexmal/opendm) | 430 | 面向通用具身智能的开世界基础模型，代表"开放世界 + 通用任务"这一前沿路线的工程化尝试。 |
| [**FluxVLA/FluxVLA**](https://github.com/FluxVLA/FluxVLA) | 636 | 一站式 VLA 工程平台，覆盖数据、真机部署全流程，是 VLA 从论文走向产线的关键基础设施。 |
| [**sii-research/tau-0-vla**](https://github.com/sii-research/tau-0-vla) | 586 | τ0-VLA 的官方实现，提出"世界模型引导的测试时计算"分层机器人基础模型，探索决策时推理对长时序任务的增益。 |
| [**syswonder/robonix**](https://github.com/syswonder/robonix) | 344 | 面向机器人的代理式操作系统（Agentic OS），将 AI Agent 与机器人控制深度融合，是"机器人为 Agent 平台"路线的代表项目。 |
| [**TensorAuto/OpenTau**](https://github.com/TensorAuto/OpenTau) | 204 | 基于 PyTorch 的 VLA 训练基础设施，专注真实机器人部署的工程问题，便于研究者快速复现与二次开发。 |

### 🔧 硬件与驱动

| 仓库 | ⭐ | 简介 |
|------|----|------|
| [**ArduPilot/ardupilot**](https://github.com/ArduPilot/ardupilot) | 15,762 | 全球最成熟的开源飞控 / 无人系统平台，覆盖 ArduPlane、Copter、Rover、Sub，是无人机与无人车硬件栈的事实标准。 |
| [**rerun-io/rerun**](https://github.com/rerun-io/rerun) | 11,369 | 多模态机器人数据的可视化、查询与流式处理工具，是构建机器人数据集与训练流水线的关键基础设施。 |
| [**ros-navigation/navigation2**](https://github.com/ros-navigation/navigation2) | 4,640 | ROS 2 官方导航框架，涵盖路径规划、定位、恢复行为全链路，是移动机器人落地的默认起点。 |
| [**copper-project/copper-rs**](https://github.com/copper-project/copper-rs) | 1,476 | 基于 Rust 的机器人"操作系统"，主打确定性、可回放的整机行为调度，对安全关键场景意义重大。 |

### 📊 数据集与基准

| 仓库 | ⭐ | 简介 |
|------|----|------|
| [**datawhalechina/every-embodied**](https://github.com/datawhalechina/every-embodied) | 3,394 | 从 0 到 1 构建具身智能机器人的全流程教程，逐步实现 VLA / OpenVLA / SmolVLA / Pi0，是中文世界最系统的入门级实战课程。 |
| [**knightnemo/Awesome-World-Models**](https://github.com/knightnemo/Awesome-World-Models) | 3,354 | 世界模型方向的精选资源索引，覆盖理论、应用与开源实现，是把握"世界模型 + 具身 AI"研究脉络的高质量入口。 |
| [**leofan90/Awesome-World-Models**](https://github.com/leofan90/Awesome-World-Models) | 1,990 | 同样聚焦世界模型，兼顾通用视频生成、具身 AI 与自动驾驶，是论文与代码并重的导航式清单。 |
| [**BaiShuanghao/Awesome-Robotics-Manipulation**](https://github.com/BaiShuanghao/Awesome-Robotics-Manipulation) | 1,110 | 机器人操作领域论文与代码合集，覆盖抓取、操作、技能学习等子方向，是操作任务研究者必备索引。 |
| [**allenai/vla-evaluation-harness**](https://github.com/allenai/vla-evaluation-harness) | 570 | 任意 VLA 模型在任意机器人仿真基准上的统一评测框架，回应了"VLA 百花齐放但难比较"的行业痛点。 |
| [**JiuTian-VL/Large-VLM-based-VLA-for-Robotic-Manipulation**](https://github.com/JiuTian-VL/Large-VLM-based-VLA-for-Robotic-Manipulation) | 441 | 聚焦"大 VLM + 操作"的 VLA 模型清单，系统梳理大视觉语言模型驱动机器人操作的研究进展。 |

---

## 五、生态趋势信号

本日报三方信息源共同指向五条值得高度关注的新兴趋势。**其一，Physical AI 走向并购时代**：EXL 收购 iMerit 表明"数据—模型一体化"成为头部服务商标配，预示 2026 下半年将有更多数据 / 仿真公司被并购或整合。**其二，VLA 从论文走向产线**：FlashVLA、τ0-VLA、FluxVLA、OpenTau 等项目密集出现，叠加 Anchor-Align 解决行为克隆灾难性遗忘问题，VLA 工程的"最后一公里"正在被系统化攻克。**

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*