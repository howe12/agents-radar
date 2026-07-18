# 具身智能开源动态日报 2026-07-18

> 数据来源: GitHub Search API (129 仓库) | ArXiv cs.RO (30 篇论文) | RSS 新闻 (41 条) | 生成时间: 2026-07-18 01:53 UTC

---

# 具身智能开源动态日报

**日期：2026 年 7 月 · 第 152 期**

---

## 一、今日速览

今日具身智能领域呈现"基础模型收敛、垂直场景爆发"的双线格局：研究侧，**世界-动作模型（WAM）安全性**和**机器人策略的测试时训练（TTA）**成为 arXiv 热点，标志通用机器人策略正在从"训练即定型"向"在线自适应"演进；产业侧，**建筑机器人赛道单日融资过 1.15 亿美元**（TerraFirma），叠加 Monumental 进军美国、Maximo 主攻光伏施工，传统重工业成为具身智能最确定的落地场景；项目侧，**ROS 生态正经历"解耦-替代"双重冲击**——LLM-MCP 直接对接 ROS 的 server、Copper-rs 这类 Rust 原生机器人 OS、以及 IsaacLab / MuJoCo-Warp 阵营的加速发展，正在重塑机器人的中间件格局。

---

## 二、行业脉搏

**1. TerraFirma 融资 1.15 亿美元，建建筑机器人基础设施**
[链接](https://www.therobotreport.com/terrafirma-raises-115m-build-robotic-infrastructure-construction/)
B 轮级别的资金体量押注建筑场景，反映"重劳动 + 长尾任务 + 高容错"反而成为具身智能初期商业化的最佳土壤——比室内家居更结构化、比工厂更非标。

**2. Monumental 携新资金进军美国市场**
[链接](https://www.therobotreport.com/with-new-funding-monumental-plans-bring-construction-robots-u-s/)
欧洲砌砖机器人公司跨大西洋扩张，预示建筑机器人从 PoC 进入区域化复制阶段，工程交付能力开始取代技术新颖性成为竞争壁垒。

**3. Weave Robotics 发布首款移动人形机器人 Isaac**
[链接](https://www.therobotreport.com/weave-robotics-launches-isaac-first-mobile-humanoid-robot/)
又一新进入者加入人形赛道，"移动 + 操作"复合形态正在成为标配，验证通用人形机器人向工业/物流场景渗透的产品路径。

**4. X-Square Robot 发布通用机器人基础栈**
[链接](https://spectrum.ieee.org/x-square-robot-embodied-ai-stack)
端到端的具身 AI 栈（感知-决策-控制）开始产品化，意味着机器人基础软件进入"操作系统级"的整合竞争，类似 ROS 当年的局面。

**5. Maximo：机器人加速光伏施工**
[链接](https://www.therobotreport.com/transforming-solar-construction-through-robotics-deise-yumi-asami-maximo/)
创始人访谈聚焦新能源施工垂直场景，机器人成为能源转型的物理基础设施，"碳中和 + 自动化"的故事线为具身智能提供长期需求支撑。

---

## 三、研究前沿

**1. RoboTTT：机器人策略的测试时训练扩展**
[arxiv.org/abs/2607.15275](http://arxiv.org/abs/2607.15275v1) · Yunfan Jiang, Yevgen Chebotar 等
提出 TTA（Test-Time Adaptation）机制扩展机器人策略的上下文窗口，应对部署时分布漂移。**贡献**：把大模型"在线学习"范式系统性地引入机器人策略学习，是 VLA/RT-X 系列之后的关键演进。

**2. BadWAM：世界-动作模型"想对做错"的安全悖论**
[arxiv.org/abs/2607.15207](http://arxiv.org/abs/2607.15207v1) · Qi Li, Xingyi Yang 等
首次系统揭示世界-动作模型（WAM）在视觉预测正确时仍可能输出危险动作的现象。**贡献**：为基于世界模型的具身控制提出关键安全评估基准，是 WAM 走向部署前必须解决的"对齐问题"。

**3. 人形机器人行为基础模型的规模化**
[arxiv.org/abs/2607.15163](http://arxiv.org/abs/2607.15163v1) · Weishuai Zeng, Kangning Yin 等
针对人形机器人"全身协调 + 实时响应 + 通用动作"三难问题，构造可扩展的行为基础模型训练范式。**贡献**：呼应 Figure / 1X 等行业趋势，学术界开始提供人形通用基础模型的开源配方。

**4. AHEAD：手部驱动遥操作的人类意图预测**
[arxiv.org/abs/2607.15172](http://arxiv.org/abs/2607.15172v1) · Seok Joon Kim 等
在直接手部遥操作中引入"预见性"控制环路，根据操作员意图预测提前映射末端动作。**贡献**：显著降低遥操作延迟感，为高质量演示数据采集（VLA 训练燃料）提供基础设施级改进。

**5. DriftWorld：基于漂移的快速世界建模**
[arxiv.org/abs/2607.15065](http://arxiv.org/abs/2607.15065v1) · Susie Lu 等
通过简化漂移式动力学大幅提升预测世界模型的推理速度。**贡献**：世界模型实时性瓶颈的关键工程突破，让"边想边动"在边缘设备上成为可能。

---

## 四、重点项目

### 🦾 机器人学习与控制

**RLinf/RLinf** ⭐4,149
[github.com/RLinf/RLinf](https://github.com/RLinf/RLinf) · Python
面向具身智能与 Agentic AI 的强化学习基础设施。把 RL 训练从算法库层面拉到"端到端框架"层面，是 RLinf/M3 等通用基座模型的关键训练底座。

**dora-rs/dora** ⭐3,846
[github.com/dora-rs/dora](https://github.com/dora-rs/dora) · Rust
数据流驱动的机器人中间件，低延迟、可组合、分布式。在 ROS 2 之外开辟"以数据流为中心"的机器人架构路线。

**enactic/openarm** ⭐2,733
[github.com/enactic/openarm](https://github.com/enactic/openarm) · MDX
完全开源的人形机械臂，专注接触丰富的物理 AI 研究。为学术界提供无 IP 风险的硬件参考设计，呼应 Aloha / UMI 等社区生态。

**RoboVerseOrg/RoboVerse** ⭐1,781
[github.com/RoboVerseOrg/RoboVerse](https://github.com/RoboVerseOrg/RoboVerse) · Python
统一平台 + 数据集 + 基准测试，瞄准"可扩展、可泛化"的机器人学习，类似机器人版的 HuggingFace Hub。

**Open-X-Humanoid/TienKung-Lab** ⭐819
[github.com/Open-X-Humanoid/TienKung-Lab](https://github.com/Open-X-Humanoid/TienKung-Lab) · Python
基于 IsaacLab 的腿足机器人直训工作流，把国家级人形机器人（天工）的能力向社区开源。

**PhyAgentOS/PhyAgentOS** ⭐705
[github.com/PhyAgentOS/PhyAgentOS](https://github.com/PhyAgentOS/PhyAgentOS) · Python
自进化的具身 AI 操作系统，基于智能体工作流构建。"OS" 命名野心大，是物理 AI 时代基础设施的关键卡位。

**michaelyuancb/ftp1-policy** ⭐85
[github.com/michaelyuancb/ftp1-policy](https://github.com/michaelyuancb/ftp1-policy) · Jupyter
跨触觉传感器的通用触觉基础策略（FTP-1），覆盖接触丰富操作。触觉 + VLA 是 2026 年最被低估的融合方向。

### 🤖 仿真与框架

**isaac-sim/IsaacLab** ⭐7,698
[github.com/isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab) · Python
基于 NVIDIA Isaac Sim 的统一机器人学习框架，目前 sim-to-real 标准基座。

**newton-physics/newton** ⭐5,203
[github.com/newton-physics/newton](https://github.com/newton-physics/newton) · Python
基于 NVIDIA Warp 的 GPU 加速物理引擎，Newton 作为新物理求解器正挑战 MuJoCo / Bullet 的传统地位。

**mujocolab/mjlab** ⭐2,696
[github.com/mujocolab/mjlab](https://github.com/mujocolab/mjlab) · Python
由 MuJoCo-Warp 驱动的 Isaac Lab API 替代方案，为不开 NVIDIA 生态的团队提供同等能力的 RL 训练底座。

**robotmcp/ros-mcp-server** ⭐1,345
[github.com/robotmcp/ros-mcp-server](https://github.com/robotmcp/ros-mcp-server) · Python
通过 MCP 协议把 Claude / GPT 等大模型直连 ROS，是"具身 Agent"的标志性基础设施。

**copper-project/copper-rs** ⭐1,413
[github.com/copper-project/copper-rs](https://github.com/copper-project/copper-rs) · Rust
Rust 写的机器人操作系统，主打确定性回放（replay）。面向工业级安全关键场景，挑战 ROS 在实时性上的传统短板。

### 🧠 VLA 与基础模型

**datawhalechina/every-embodied** ⭐2,728
[github.com/datawhalechina/every-embodied](https://github.com/datawhalechina/every-embodied) · Python
中文社区驱动的具身智能从 0 到 1 教程，覆盖 VLA/OpenVLA/SmolVLA/Pi0 完整栈，是国内具身教育的核心入口。

**FluxVLA/FluxVLA** ⭐542
[github.com/FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA) · Python
端到端 VLA 工程平台，从数据到真机部署全覆盖。工程化 VLA 的"全家桶"尝试。

**InternRobotics/InternVLA-A-series** ⭐505
[github.com/InternRobotics/InternVLA-A-series](https://github.com/InternRobotics/InternVLA-A-series) · Python
InternVLA-A1：统一理解、生成与动作的机器人操作模型。上海 AI Lab 在 VLA 上的旗舰开源。

**allenai/vla-evaluation-harness** ⭐450
[github.com/allenai/vla-evaluation-harness](https://github.com/allenai/vla-evaluation-harness) · Python
任意 VLA 模型 × 任意仿真基准的统一评测框架，对 VLA 领域的标准化至关重要。

**sou350121/VLA-Handbook** ⭐401
[github.com/sou350121/VLA-Handbook](https://github.com/sou350121/VLA-Handbook) · HTML
VLA 算法工程师中文实战手册 / 面试指南，反映 VLA 岗位在 2026 年已形成独立招聘市场。

### 🔧 硬件与驱动

**rerun-io/rerun** ⭐11,139
[github.com/rerun-io/rerun](https://github.com/rerun-io/rerun) · Rust
多模态机器人数据的可视化与流式查询工具，已成为 RLDS / OpenX 等数据集的事实标准可视化层。

**ros-navigation/navigation2** ⭐4,482
[github.com/ros-navigation/navigation2](https://github.com/ros-navigation/navigation2) · C++
ROS 2 官方导航框架，是任何移动机器人栈的默认起点。

### 📊 数据集与基准

**StanfordVL/BEHAVIOR-1K** ⭐1,579
[github.com/StanfordVL/BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K) · Python
斯坦福具身 AI 平台，包含 1000 种日常活动仿真基准，是家务与服务机器人研究的标准测试场。

**worldbench/awesome-3d-4d-world-models** ⭐949
[github.com/worldbench/awesome-3d-4d-world-models](https://github.com/worldbench/awesome-3d-4d-world-models) · HTML
TPAMI 2026 综述配套资源库：3D / 4D 世界建模领域的一站式索引。配合今日 DriftWorld 论文，是进入该领域的最佳入口。

**AIDASLab/Awesome-VLA-Data-Collection-Synthesis-Curation** ⭐11
[github.com/AIDASLab/Awesome-VLA-Data-Collection-Synthesis-Curation](https://github.com/AIDASLab/Awesome-VLA-Data-Collection-Synthesis-Curation)
VLA 数据引擎的全流程资源索引：采集、合成、增广、清洗、预处理、基准。"数据是 VLA 的真正护城河"已成行业共识。

---

## 五、生态趋势信号

综合今日新闻、论文与项目动态，三条主线正在加速汇聚：

**趋势一：具身基础模型进入"安全部署"阶段。** BadWAM 揭示世界-动作模型的行动风险、RoboTTT 引入在线自适应、DriftWorld 提升实时性——三者共同指向同一信号：通用机器人策略正在跨越"能不能做"的演示阶段，进入"敢不敢用"的安全部署期。

**趋势二：建筑 / 光伏 / 基础设施成为商业化最佳场景。** 单日 TerraFirma $115M + Monumental 美洲扩张 + Maximo 光伏施工，标志具身智能商业化重心正从"炫技演示"转向"替代蓝领重体力"。这一波红利将由具备施工工艺 know-how + 硬件成本控制能力的玩家收割。

**趋势三：机器人中间件层"解耦-替代

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*