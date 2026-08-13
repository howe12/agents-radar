# 具身智能开源动态日报 2026-08-13

> 数据来源: GitHub Search API (130 仓库) | ArXiv cs.RO (0 篇论文) | RSS 新闻 (47 条) | 生成时间: 2026-08-13 01:22 UTC

---

# 具身智能开源动态日报

**日期：2026 Q2｜出品：机器人 & 具身智能领域分析师**

---

## 📌 今日速览

今日三方信号高度收敛于"Physical AI 走向规模化工程化"这一主线：行业端 A3 报告 Q2 2026 机器人需求跨行业回暖、Celona 推出专为 Physical AI 设计的 Orion 代理无线平台、Cambridge Aerospace 拿下 3 亿美元国防无人机大单；开源端以 **Newton**、**mjlab** 为代表的 GPU 加速物理仿真引擎相继崛起，正打破 NVIDIA Isaac Sim 在仿真基础设施层的近垄断；VLA 方向则从研究 Demo 加速向工程平台演进，**FluxVLA**、**OpenTau**、**vla-evaluation-harness**、**tron2_openpi** 等部署/评测/训练基础设施集中涌现。ArXiv cs.RO 今日零收录，节奏转向工程生态沉淀。

---

## 🌐 行业脉搏

1. **[Q2 2026 robotics demand increased across industries, reports A3](https://www.therobotreport.com/q2-2026-robotics-demand-increased-across-industries-reports-a3/)**
   A3 协会数据显示 Q2 2026 机器人订单跨行业普涨，标志行业走出 2024-2025 的需求低谷，进入新一轮上行周期，是判断厂商资本开支与硬件供应链弹性的关键先行指标。

2. **[Celona launches Orion agentic wireless platform built for physical AI and robotics](https://www.therobotreport.com/celona-launches-orion-agentic-wireless-platform-built-for-physical-ai-robotics/)**
   Celona 把 5G 私有网切成"代理化"网络原语，专为机器人 / Physical AI 车队提供确定性低时延通信，意味着机器人云-边-端协同正补齐最后一块"工业网络"短板。

3. **[Defense drone developer Cambridge Aerospace raises $300M](https://www.therobotreport.com/defense-drone-developer-cambridge-aerospace-raises-300m/)**
   3 亿美元大额融资印证军用自主无人机仍是 2026 年具身智能落地最快、毛利最高的细分赛道之一，将持续吸引顶级具身基础模型团队流入。

4. **[DAF Trucks to integrate Einride Driver to scale autonomous electric freight](https://www.therobotreport.com/daf-trucks-integrates-einride-driver-scale-autonomous-electric-freight/)**
   传统卡车 OEM 与无人驾驶软件栈深度绑定，标志干线物流 L4 进入"主流车企标配"阶段，是 L4 商业化最具参考价值的样板。

5. **[Strengthening U.S. Army sustainment: TALUS to deliver autonomous distribution](https://www.therobotreport.com/strengthening-u-s-army-sustainment-talus-to-deliver-autonomous-distribution/)**
   美军后勤体系大规模部署自主配送，与 Cambridge Aerospace 同期动作叠加，反映"国防自主化"在美国已形成跨军种协同的稳定订单流。

---

## 🔬 研究前沿

> **今日 ArXiv cs.RO 收录为 0 篇**。研究产出空窗期反而让位于工程化沉淀，建议关注以下由开源仓库承载的、在 ICML 2026 / ECCV 2026 截稿节点前后集中爆发的前沿方向：

1. **[OMG: Omni-Modal Motion Generation for Generalist Humanoid Control](https://github.com/Tsinghua-MARS-Lab/OMG)** — 清华 MARS Lab 提出"全模态"统一人形运动生成，融合文本/音频/视频多源信号，是通用人形基础控制的有力候选基线。
2. **[Habitat-GS: A High-Fidelity Navigation Simulator with Dynamic Gaussian Splatting](https://github.com/zju3dv/habitat-gs)** — 浙大 ZJU-3DV 把 3DGS 引入导航仿真，融合静态场景高保真与动态物体编辑，ECCV 2026 接收。
3. **[RoboTwin 2.0 (ICML 2026)](https://github.com/RoboTwin-Platform/RoboTwin)** — 双臂操作仿真基准的 2.0 版本，主打大规模场景生成与 sim-to-real gap 缩小，是 ICML 2026 重要投稿。
4. **[LEAD

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*