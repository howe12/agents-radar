# 具身智能开源动态日报 2026-10-10

> 数据来源: GitHub Search API (131 仓库) | ArXiv cs.RO (30 篇论文) | RSS 新闻 (48 条) | 生成时间: 2026-10-10 03:49 UTC

---

# 具身智能开源动态日报

## 📌 今日速览

今日行业、论文与开源社区形成三股共振：**人形机器人**正从演示迈向量产与硬件标准化（Boston Dynamics 公布新一代灵巧手、Jabil 披露生产节奏、IEEE Spectrum 报道「行走式灵巧手」），而研究端则在 **dexterous manipulation from a single human demo**、**action-faithful world model**、**VLA 多相机配置** 方向同步推进；与此同时，以 **SafeWorld** 隐身出场、**CSF/FAITH** 等安全 RL 工作为代表的 *safety-first* 趋势开始规模化，安全仿真正从方法论走向基础设施。

---

## 📰 行业脉搏

- **Boston Dynamics 公布新一代人形灵巧手设计细节**  
  [链接](https://www.therobotreport.com/boston-dynamics-gives-more-insight-into-its-redesigned-humanoid-hand/)  
  强调高自由度触觉/驱动融合，是 2026 年「硬件成熟度评估」的重要参照。  

- **人形机器人 demo 仍难通过泛化测试**（The Robot Report 评论）  
  [链接](https://www.therobotreport.com/why-humanoid-robot-demos-still-fail-the-generalization-test/)  
  揭示 sim2real、distribution shift、长尾任务仍是产业化最大短板，与今日 4 篇 cs.RO 论文主题完全呼应。  

- **Jabil 谈人形机器人开发与量产节奏**  
  [链接](https://www.therobotreport.com/jabil-discusses-pace-humanoid-robot-development-production/)  
  头部 EMS 厂入局，2026 被视为「量产前夜」。  

- **Groceryshop 2026：零售机器人借助 AI 进入规模化阶段**  
  [链接](https://www.therobotreport.com/groceryshop-2026-shows-retail-robots-ready-scale-use-ai/)  
  零售成为继仓储之后第二个具身 AI 商业落地场景。  

- **SafeWorld 隐身登场，主攻机器人安全仿真**  
  [链接](https://www.therobotreport.com/safeworld-emerges-stealth-build-deploy-robot-safety-simulation-technologies/)  
  安全仿真赛道出现独立玩家，与今日研究端的 CSF/FAITH 安全过滤趋势相辅相成。

---

## 🔬 研究前沿

- **Dex-One2Many：从单条人类视频学习灵巧操作**（Lee, Kim et al.）  
  [arxiv.org/abs/2610.12470v1](http://arxiv.org/abs/2610.12470v1)  
  把单人 demo → 大量 robot trajectory 的「跨具身 one-to-many」范式落地，对低成本 imitation learning 社区意义重大。  

- **DreamTrue：动作忠实（action-faithful）的跨具身世界模型**（Li, Li et al.）  
  [arxiv.org/abs/2610.12468v1](http://arxiv.org/abs/2610.12468v1)  
  多视角 + counterfactual 后训练，是把 world model 当作 policy backbone 的代表性工作，与 OpenWAM、opendm 等开源仓库形成方法-代码协同。  

- **VioLA：从人类数据学习通用人形全身控制**（Albaba, Beißwenger et al.）  
  [arxiv.org/abs/2610.12435v1](http://arxiv.org/abs/2610.12435v1)  
  直面人形高维 action space 与长尾任务两大瓶颈，对应 Open-X-Humanoid/HEX 等开源框架。  

- **CSF：面向文本条件运动生成器的上下文安全过滤**（Yang, Hou et al.）  
  [arxiv.org/abs/2610.12467v1](http://arxiv.org/abs/2610.12467v1)  
  引入「场景依赖」的安全意识，填补 LLM/VLM-based motion generator 在 physical safety 上的缺口。  

- **SpatialHarness：测试时空间脚手架用于精细操作**（Wang, Yu et al.）  
  [arxiv.org/abs/2610.12457v1](http://arxiv.org/abs/2610.12457v1)  
  通过 test-time scaffold 把 frontier multimodal foundation models 直接用于机器人控制，呼应 VersaCamVLA 的「相机即变量」思路。

---

## 🌟 重点项目

### 🦾 机器人学习与控制

- **[RoboVerseOrg/RoboVerse](https://github.com/RoboVerseOrg/RoboVerse)** ⭐1,865  
  面向可扩展、可泛化机器人学习的统一平台 / 数据集 / 基准。

- **[Open-X-Humanoid/HEX](https://github.com/Open-X-Humanoid/HEX)** ⭐338  
  全尺寸人形机器人的 whole-body VLA 框架，与 VioLA 论文互补，适合 humanoid policy 学习研究者。

- **[Calibra-Robotics/Calibra](https://github.com/Calibra-Robotics/Calibra)** ⭐38  
  imitation learning 数据集可观测性与 coreset 选择工具，回应「高质量数据 > 大量数据」趋势。

### 🤖 仿真与框架

- **[isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab)** ⭐8,312  
  NVIDIA 统一机器人学习框架，多物理 + 多渲染器，已成为主流机器人 RL / IL 训练底座。

- **[google-deepmind/mujoco](https://github.com/google-deepmind/mujoco)** ⭐15,563  
  通用关节接触动力学的事实标准物理引擎；与 mjlab、Newton 等形成 GPU 加速新生态。

- **[newton-physics/newton](https://github.com/newton-physics/newton)** ⭐5,740  
  基于 NVIDIA Warp 的 GPU 加速物理仿真，专为机器人研究者设计，OmniSim 等多个新仓库已默认对接。

- **[mujocolab/mjlab](https://github.com/mujocolab/mjlab)** ⭐3,193  
  Isaac Lab API + MuJoCo-Warp 后端，给「不绑定 NVIDIA 闭源栈」的研究团队提供了 RL 替代方案。

### 🧠 VLA 与基础模型

- **[InternRobotics/InternVLA-M1](https://github.com/InternRobotics/InternVLA-M1)** ⭐433  
  空间引导的 Vision-Language-Action 框架，面向通用机器人策略。

- **[dexmal/opendm](https://github.com/dexmal/opendm)** ⭐2,209  
  面向「开放世界」的具身智能基础模型，定位通用 foundation policy。

- **[OpenWAM/OpenWAM](https://github.com/OpenWAM/OpenWAM)** ⭐171  
  斯坦福《OpenWAM: Composable World-Action Models》官方代码，把世界模型与动作模型合并为同一可组合模块。

### 🔧 硬件与驱动

- **[enactic/openarm](https://github.com/enactic/openarm)** ⭐3,594  
  全开源人形机械臂，面向 contact-rich 任务的 Physical AI 研究与部署；与 Boston Dynamics 新手发布形成民间/官方对照。

- **[murobotics-ai/handumi-sw](https://github.com/murobotics-ai/handumi-sw)** ⭐76  
  HandUMI 开源软件，双臂同步数据采集 + 任意双臂机器人 retargeting；与 Dex-One2Many 的「单条人类视频 → 大量 robot demo」研究趋势紧密呼应。

### 📊 数据集与基准

- **[Hebbian-Robotics/hflow](https://github.com/Hebbian-Robotics/hflow)** ⭐292  
  机器人团队用于 AI 训练的数据质量验证 SDK，呼应「Balanced Data Diet」「Calibra」等数据治理方向。

- **[AndrejOrsula/space_robotics_bench](https://github.com/AndrejOrsula/space_robotics_bench)** ⭐199  
  「Robot Learning Beyond Earth」基准，推动具身智能走出地面应用、向空间探索拓展。

---

## 📈 生态趋势信号

**World Model × Action Model 的融合**是今日最显著信号：DreamTrue、OpenWAM 与 opendm 同时出现，把世界模型作为策略骨干来训练，实现从「生成视频」到「action-faithful 控制」的跨越。**Dexterous manipulation 的人源数据化**同步升温：Boston Dynamics 新手、Dex-One2Many、HandUMI、Open-X-Humanoid HEX 在数据、硬件与策略三端形成闭环。**安全成为独立一级主题**：SafeWorld 隐身出道、CSF/FAITH 控制生成器安全过滤，意味着 safety/safe-RL 正在从论文走向基础设施。**仿真栈分化**：Newton、mjlab、OmniSim 在 MuJoCo-Warp / wgpu / MCP 旁路开放解耦式路线，与 IsaacLab 形成「开源替代 + 协议化（MCP/HTTP/JSON）」的新分层。

---

## 👀 值得关注

1. **[OpenWAM/OpenWAM](https://github.com/OpenWAM/OpenWAM)** — 斯坦福把 world model 与 action model 同栈组合，正好接住 DreamTrue 类研究的代码缺口，建议跟进其 composability 设计。  
2. **[enactic/openarm](https://github.com/enactic/openarm)** — 全开源人形臂是 Boston Dynamics 之外少有的可复现硬件 + MuJoCo 模型，对接触丰富操作研究极具价值。  
3. **Boston Dynamics 新一代手 + Dex-One2Many + HandUMI** — 三方在「硬件—人类示范—仿真 retargeting」链路形成新闭环，将定义 2026 年 dexterous manipulation 落地节奏。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*