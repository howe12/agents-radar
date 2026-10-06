# 具身智能开源动态日报 2026-10-06

> 数据来源: GitHub Search API (129 仓库) | ArXiv cs.RO (30 篇论文) | RSS 新闻 (40 条) | 生成时间: 2026-10-06 04:19 UTC

---

# 具身智能开源动态日报

## 1. 今日速览

波士顿动力的 Atlas 推出新一代灵巧手设计，向"超越拟人"的工程化路线靠拢；与此同时，FCC 对机器人无线电的限制或将加速边缘本地 AI 的部署节奏。学术侧，**InterMimicGen** 通过自演化运动模仿大幅扩展了人形机器人 loco-manipulation 数据规模，**RealtimeWAM** 与 **H-JEPA** 则分别从"一步异步动作生成"和"分层视觉规划"两个方向推进世界动作模型（WAM）范式。生态方面，MuJoCo / Isaac Lab / Newton 的多物理后端竞争加剧，**FluxVLA**、**Flux-Action**、**EVA-CLIENT** 等 VLA 工程化项目快速涌现，物理 AI 正在从"模型路线之争"转入"部署与评测之争"。

---

## 2. 行业脉搏

- **波士顿动力 Atlas 新手：超越拟人化路线** — [IEEE Spectrum](https://spectrum.ieee.org/robust-robot-hand) 报道 Atlas 放弃了纯拟人结构，采用工程化灵巧手设计追求鲁棒性与负载能力，对人形机器人硬件形态选择具有风向标意义。
- **Teradyne 投资 Bright Machines：机器人为 AI 基础设施造"硬件"** — [The Robot Report](https://www.therobotreport.com/teradyne-invests-ibright-machines-brings-robotics-ai-infrastructure-manufacturing/) 揭示机器人产业开始反向赋能 AI 数据中心制造，自动化赛道边界正在模糊。
- **FCC 机器人无线电限制或推动本地 AI 加速** — [The Robot Report](https://www.therobotreport.com/fcc-robot-restrictions-could-accelerate-shift-to-local-ai/) 政策风险下，云端 VLA 路径成本上升，端侧小模型 + 世界模型成为更稳妥选择。
- **物理 AI 专利战：下一个十年的主战场** — [The Robot Report](https://www.therobotreport.com/physical-ai-race-will-be-won-in-patent-office/) 提出 Physical AI 的胜负将在专利与标准层面决出，呼应今年具身 IP 申请的爆发。
- **Omron 发布下一代 LD 移动平台 + RoboBusiness 分享 HRI 实战** — [Omron LD](https://www.therobotreport.com/inside-omrons-next-generation-ld-mobile-robots/) / [Eli Lilly × Purdue](https://www.therobotreport.com/eli-lilly-purdue-to-share-field-learnings-on-human-robot-interaction-at-robobusiness/) 显示商用移动机器人与人机共融在工业一线持续落地。

---

## 3. 研究前沿

- **InterMimicGen：人形 loco-manipulation 的自演化数据扩展** ([arXiv 2610.06850](http://arxiv.org/abs/2610.06850v1)) — 通过自演化方式将稀疏、异构的人-物交互示范扩展为大规模训练数据，是解决人形机器人全身操作数据稀缺的关键一步。
- **RealtimeWAM：一步异步世界动作模型** ([arXiv 2610.06617](http://arxiv.org/abs/2610.06617v1)) — 在保留视频生成主干表征能力的同时，将 WAM 推理延迟压缩至单步异步可调用，向实时机器人控制迈进。
- **H-JEPA：端到端分层世界模型用于视觉规划** ([arXiv 2610.06805](http://arxiv.org/abs/2610.06805v1)) — 在潜在空间中跨时间尺度推理，把"规划"从低层动作生成提升到分层抽象，是长视野任务规划的新基座。
- **AffordCraft：从单图构建任务级仿真资产** ([arXiv 2610.06643](http://arxiv.org/abs/2610.06643v1)) — 让仿真器拥有可交互、可拆解的任务资产，大幅降低 sim-to-real 任务搭建门槛。
- **ArtifactArena：用物理世界中"建造出来的东西"评估模型** ([arXiv 2610.06511](http://arxiv.org/abs/2610.06511v1)) — 把评测从

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*