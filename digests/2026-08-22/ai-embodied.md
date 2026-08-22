# 具身智能开源动态日报 2026-08-22

> 数据来源: GitHub Search API (130 仓库) | ArXiv cs.RO (27 篇论文) | RSS 新闻 (47 条) | 生成时间: 2026-08-22 00:52 UTC

---

# 具身智能开源动态日报

---

## 📌 今日速览

今日机器人与具身智能领域呈现"硬件量产提速、模型范式收敛、生态工具成熟"三大主线。**Schaeffler 宣布 2027 年量产人形机器人齿轮箱**，标志着核心零部件供应链进入工业化前夕；**Amazon 计划 2026 年底将 Prime Air 无人机配送扩展至近 500 城**，商业级自主系统规模化部署再加码。研究侧，**World-Action Model 与 Whole-Body Control 正在融合**——DECOWAM、Surgical World-Action Modeling 等论文显示，世界模型正从生成式任务向"视觉-轨迹联合预测"演进。开源侧，**RLinf、IsaacLab、Newton Physics** 等基础设施同步推陈出新，具身智能从"实验室 Demo"走向"工程化平台"的拐点愈发清晰。

---

##  行业脉搏

1. **【核心零部件量产里程碑】Schaeffler 计划 2027 年量产人形机器人齿轮箱**
   — 德国汽车零部件巨头首次明确人形机器人核心传动部件量产时间表，预示人形机器人供应链正在从"原型定制"走向"汽车级标准化"，对 Figure、Apptronik、1X 等整机厂的 BOM 成本下降和交付周期缩短具有直接意义。
   🔗 [原文](https://www.therobotreport.com/schaeffler-plans-to-mass-manufacture-gearboxes-for-humanoids-in-2027/)

2. **【商业无人机规模化】Amazon 计划 2026 年底将 Prime Air 拓展至近 500 城**
   — 从 2013 年起步到 500 城规模，Amazon 用了 13 年验证物流级自主无人机的工程可靠性与监管框架，对全球最后一公里配送市场是强信号；同时也意味着 BVLOS、UTM、动态避障等核心技术开始进入大规模商用阶段。
   🔗 [原文](https://www.therobotreport.com/amazon-plans-expand-prime-air-nearly-500-cities-by-end-2026/)

3. **【人形机器人首份工作】Persona AI：船舶焊接是不是人形机器人的正确首岗？**
   — 与传统"工厂搬运/分拣"思路不同，Persona AI 选择高危、高精度且人力短缺的船厂焊接作为落地场景，反映人形机器人产业开始分化出**"高价值专用工种"**与"通用搬运"两条技术路径。
   🔗 [原文](https://spectrum.ieee.org/persona-ai-humanoid-robot-welding)

4. **【核心执行器供应商入场】Kollmorgen 将在 RoboBusiness 发布"关节级人形运动指南"**
   — 作为伺服电机老牌厂商，Kollmorgen 公开介入人形机器人关节选型与运动控制讨论，说明**电机/驱动器/减速器一体化关节**已从初创公司（Unitree、灵巧等）扩散至传统工控巨头，竞争格局进一步升级。
   🔗 [原文](https://www.therobotreport.com/kollmorgen-give-joint-by-joint-guide-humanoid-motion-robobusiness/)

5. **【具身 AI 落地新场景】ATDev 公布自动驾驶轮椅进展 + Agtonomy 发布多点掉头功能**
   — 辅助出行与农业机械两个被忽视的垂直领域持续推进，前者聚焦弱势群体出行自由，后者代表**低速越野自主化**在田间、果园场景的算法成熟。
   🔗 [ATDev](https://www.therobotreport.com/atdev-gives-update-journey-building-autonomous-wheelchairs/) ｜ [Agtonomy](https://www.therobotreport.com/agtonomy-releases-new-autonomous-multi-point-turning-features/)

---

## 🔬 研究前沿

1. **DECOWAM：面向腿足移动操作的解耦全身世界-动作模型**
   Siyuan Ma, Boshi Zhang 等
   提出将移动基座的运动预测与机械臂操作预测解耦的 Whole-Body World-Action Model，解决了腿足臂一体化机器人中视觉-轨迹联合建模的尺度难题，是世界模型在 Mobile Manipulation 任务上的重要里程碑。
   🔗 [arXiv:2608.20114](http://arxiv.org/abs/2608.20114v1)

2. **Towards Surgical World-Action Modeling：面向手术规划的视觉-轨迹联合预测**
   Weiliang Huang, Huanrong Liu 等
   首次将 World-Action Modeling 范式应用于手术机器人，提出联合视觉预测与器械轨迹预测的术前规划框架，对**数据稀缺但安全要求极高的医疗具身场景**具有范式价值。
   🔗 [arXiv:2608.20284](http://arxiv.org/abs/2608.20284v1)

3. **Towards Professional Tennis Styles for Humanoid Robots**
   Tao Huang, Ruofei Liu 等
   用自适应运动规划与跟踪让双足人形机器人学习职业网球风格，跨过"动作复现"到"风格化技能"的门槛，验证了**生成式策略 + 经典跟踪控制**在高速动态体育任务上的可行性。
   🔗 [arXiv:2608.20087](http://arxiv.org/abs/2608.20087v1)

4. **Learning Highly Dynamic Skills Transition for Quadruped Jumping Through Constrained Space**
   Zeren Luo, Jiahui Zhang 等
   聚焦四足机器人在狭窄空间内的高动态跳跃技能过渡问题，对搜救、侦察等复杂地形应用具有直接工程价值，并贡献了约束空间内的爆发动作学习新基准。
   🔗 [arXiv:2608.19977](http://arxiv.org/abs/2608.19977v1)

5. **Evidence-Gated Task and Motion Planning with Vision-Language Models**
   Tsunehiko Tanaka, Matthew Stephenson 等
   提出证据门控机制，让 VLM 在长时域 TAMP 中"知所不知"——基于证据置信度决定是否请求人类介入或调用规划器，是 VLM 走向可信赖具身智能的重要一步。
   🔗 [arXiv:2608.20084](http://arxiv.org/abs/2608.20084v1)

6. **DART-S：可达性审计的主动悬架预处理，用于越野跳跃**
   Yu Hu, Fangzhou Zhao 等
   在空中阶段通过可达性审计避免不可恢复的起飞姿态误差，为高速越野载具和机器人物理交互系统提供了**空中阶段可控性边界**的新方法。
   🔗 [arXiv:2608.20275](http://arxiv.org/abs/2608.20275v1)

---

## 🌟 重点项目

###  机器人学习与控制

| 仓库 | Star | 说明 |
|------|------|------|
| [**RLinf/RLinf**](https://github.com/RLinf/RLinf) | ⭐ 4,605 | "面向具身与 Agentic AI 的强化学习基础设施"，是国内社区最活跃的 RL + 机器人训练框架之一 |
| [**isaac-sim/IsaacLab**](https://github.com/isaac-sim/IsaacLab) | ⭐ 7,931 | 基于 NVIDIA Isaac Sim 的统一机器人学习框架，是当前 Sim-to-Real RL 与模仿学习的工业标准 |
| [**RoboTwin-Platform/RoboTwin**](https://github.com/RoboTwin-Platform/RoboTwin) | ⭐ 2,755 | ICML 2026 接收的双臂操作基准与平台，为双臂 VLA 训练提供高质量仿真环境 |
| [**Hebbian-Robotics/hflow**](https://github.com/Hebbian-Robotics/hflow) | ⭐ 101 | 开源的机器人数据质量处理、清洗、富化与策展 SDK，填补"Data-Centric Robotics"

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*