# 具身智能开源动态日报 2026-10-09

> 数据来源: GitHub Search API (132 仓库) | ArXiv cs.RO (30 篇论文) | RSS 新闻 (48 条) | 生成时间: 2026-10-09 04:04 UTC

---

# 具身智能开源动态日报

> 覆盖范围：行业新闻 · arXiv cs.RO 论文 · GitHub 活跃项目
> 信息来源：IEEE Spectrum、The Robot Report、ROS Discourse、ArXiv、GitHub Trending

---

## 一、今日速览

今日的具身智能领域呈现"产业落地加速 + 研究范式分化"两条主线。产业侧，AWS 开源 Physical AI Toolchain、Helm.ai 拿下 7000 万美元基础模型合同、Jabil 披露人形机器人量产节奏，三件事共同印证 Physical AI 正从 PoC 走向规模化部署。研究侧，arXiv 上"安全"主题集中爆发——CSF 提出场景感知的运动生成安全过滤、FAITH 将安全与任务性能解耦、SafeWorld 隐身登场专注机器人安全仿真；与此同时，VLA 路线持续向"任务专用化"和"硬件友好"两端分化。GitHub 生态中，开源人形手臂（OpenArm）、边缘 VLA 推理引擎（EagleVLA-Edge）和可微/可配置 VLA 策略（VersaCamVLA、TIC-VLA）成为新的关注焦点。

---

## 二、行业脉搏

**1. SafeWorld 隐身登场，专注机器人安全仿真基础设施**
SafeWorld 出隐身模式，定位为机器人安全仿真技术平台，回应了具身智能从"能不能做"向"安不安全"过渡的紧迫诉求。CSF、FAITH 等论文同期出现并非偶然——安全正在从附加项变为产品准入门槛。
🔗 https://www.therobotreport.com/safeworld-emerges-stealth-build-deploy-robot-safety-simulation-technologies/

**2. Helm.ai 签订 7000 万美元基础模型商业合同**
Helm.ai 在自动驾驶之外的基础模型商业化取得实质突破，证明基础模型路线在机器人/车端开始具备付费客户。该数字对正处于估值调整期的 Physical AI 赛道是重要信号。
🔗 https://www.therobotreport.com/helm-ai-reaches-70m-signed-commercial-contracts-foundation-models/

**3. Jabil 披露人形机器人开发与生产节奏**
作为全球最大 EMS 厂商之一，Jabil 主动讨论人形机器人量产话题，意味着硬件供应链已经从"概念验证供应商"转向"产能规划阶段"，人形机器人的 BOM 成本与可制造性问题进入实质解决期。
🔗 https://www.therobotreport.com/jabil-discusses-pace-humanoid-robot-development-production/

**4. AWS 开源 Physical AI Toolchain**
云厂商首次以整套工具链方式切入 Physical AI，将模型、数据、训练、部署整合在开源框架内，与 NVIDIA Omniverse/Isaac 形成对垒，进一步降低中小团队进入门槛。
🔗 https://www.therobotreport.com/aws-launches-open-source-physical-ai-toolchain-for-robotics/

**5. Schneider 收购 PTC，工业自动化格局生变**
工业软件巨头 Schneider 拿下 PTC，剑指西门子。这一并购侧面验证了"具身 AI + 工业控制"融合趋势——未来工厂的硬件、自动化与具身智能将被同一栈厂商整合。
🔗 https://www.therobotreport.com/ptc-acquisition-positions-schneider-electric-challenge-siemens/

---

## 三、研究前沿

**1. Dex-One2Many：单条人类演示即可学会灵巧操作**
Jusuk Lee 等人提出仅从一条人类视频中学习灵巧操作的方法，绕开了昂贵的大规模遥操演示采集流程。对模仿学习社区意义重大——直接打破"灵巧操作必须千次演示"的隐性假设。
🔗 http://arxiv.org/abs/2610.12470v1

**2. VioLA：从人类视频中训练通用人形控制策略**
Mert Albaba 等人直面人形机器人"动作空间大、奖励稀疏"两大瓶颈，将人类数据转化为可泛化的全身控制策略。是 Humanoid 通用策略路线的重要数据效率突破。
🔗 http://arxiv.org/abs/2610.12435v1

**3. DreamTrue：动作忠实型机器人世界模型**
Junyan Li 等人提出多视角、跨构型的机器人世界模型，通过反事实后训练保证生成视频与真实动作一致。世界模型正在从"看起来像"走向"动起来对"，对 Model Predictive Control 与策略 RL 都有直接价值。
🔗 http://arxiv.org/abs/2610.12468v1

**4. CSF：面向运动生成器的上下文安全过滤**
Lizhi Yang 等人针对文本条件运动生成器缺乏场景感知的问题，提出上下文安全过滤器，为 LLM 驱动的全身运动规划补齐安全闭环。是 LLM-motion planner 走向部署的关键组件。
🔗 http://arxiv.org/abs/2610.12467v1

**5. VersaCamVLA：相机配置可变的 VLA 策略**
Boyao Han 等人关注 VLA 模型对相机位姿过拟合的痛点，提出相机可配置策略。直接回应了真实部署中"摄像头一旦偏移策略就崩"的工程问题。
🔗 http://arxiv.org/abs/2610.12451v1

---

## 四、重点项目

### 🦾 机器人学习与控制

**enactic/openarm** ⭐3,584
完全开源的人形机械臂，专为接触丰富的物理 AI 研究与部署设计。意义：把硬件开源做到全栈级别（MDX），填补了"开源硬件 + 开源策略"链路的最后空白。
🔗 https://github.com/enactic/openarm

**RoboVerseOrg/RoboVerse** ⭐1,865
面向可扩展、可泛化机器人学习的统一平台、数据集与基准。是少数同时打通 sim-to-real 多平台接口的中文/国际共建项目。
🔗 https://github.com/RoboVerseOrg/RoboVerse

**OpenPipe/ART** ⭐10,788
GRPO 多步智能体强化训练框架，已支持 Qwen3.6、GPT-OSS 等开源模型。意义：把 Agentic RL 的训练门槛从大厂实验室拉到中小团队。
🔗 https://github.com/OpenPipe/ART

**Human-Agent-Society/reef** ⭐7,511
面向持续自我改进智能体所必需的基础设施。呼应"agent 终身学习"这一新兴方向。
🔗 https://github.com/Human-Agent-Society/reef

**Open-X-Humanoid/HEX** ⭐338
面向全尺寸人形机器人的全身视觉-语言-动作框架。在 HEX 出现之前，开源社区几乎没有真正的全尺寸人形 VLA 实现。
🔗 https://github.com/Open-X-Humanoid/HEX

### 🤖 仿真与框架

**google-deepmind/mujoco** ⭐15,532
通用多关节接触动力学物理仿真器，长期是机器人研究的事实标准。今日与 IsaacLab、Newton 等共同构成生态中枢。
🔗 https://github.com/google-deepmind/mujoco

**isaac-sim/IsaacLab** ⭐8,300
NVIDIA Isaac Sim 旗下的统一机器人学习框架，支持多物理求解器与多渲染器。GPU 大规模并行 RL 训练的事实标准之一。
🔗 https://github.com/isaac-sim/IsaacLab

**newton-physics/newton** ⭐5,735
基于 NVIDIA Warp 的开源 GPU 加速物理仿真引擎，专门面向机器人学家与仿真研究。是 Newton Physics（多家机构共建联盟）的核心仓库。
🔗 https://github.com/newton-physics/newton

**mujocolab/mjlab** ⭐3,187
用 MuJoCo-Warp 实现的 Isaac Lab API，把 Isaac 的工程抽象带到 MuJoCo 生态，降低了对 NVIDIA 商业栈的依赖。
🔗 https://github.com/mujocolab/mjlab

**omnilink-tech/omnisim** ⭐187
面向 coding agent 的开源机器人仿真器，支持 HTTP/JSON + MCP 控制、Newton 物理、wgpu 渲染、ROS 2 与可复现基准。是"agent 自己仿真自己训练"趋势的代表性项目。
🔗 https://github.com/omnilink-tech/omnisim

### 🧠 VLA 与基础模型

**dexmal/opendm** ⭐2,209
面向通用具身智能的开世界基础模型。意义：开源社区少有的、可与 π0、OpenVLA 同台对标的通用具身 VLA 路线。
🔗 https://github.com/dexmal/opendm

**TensorAuto/OpenTau** ⭐228
基于 PyTorch 的真实世界 VLA 训练基础设施。补齐"开源 VLA 模型虽多，但训练栈封闭"的缺口。
🔗 https://github.com/TensorAuto/OpenTau

**ucla-mobility/TIC-VLA** ⭐167（ICML 2026）
面向机器人导航的 Think-in-Control VLA。把"思考"显式建模进控制回路，为导航任务提供可解释的决策链。
🔗 https://github.com/ucla-mobility/TIC-VLA

**PKU-SEC-Lab/EagleVLA-Edge** ⭐48（CoRL'26 Spotlight）
面向边缘实时机器人控制的异步推理引擎（前身 Jetson-PI-Edge）。把 VLA 真正推向 Jetson 级板端部署。
🔗 https://github.com/PKU-SEC-Lab/EagleVLA-Edge

**syswonder/robonix** ⭐367
面向机器人的 Agentic 操作系统。把"OS for Robots"概念与 LLM agent 范式结合，是少数以 Rust 实现的高性能机器人中间件。
🔗 https://github.com/syswonder/robonix

### 📊 数据集与基准

**StanfordVL/BEHAVIOR-1K** ⭐1,739
加速具身智能研究的标志性平台，集成 1000 类家庭任务。是该领域引用最广的开源基准之一。
🔗 https://github.com/StanfordVL/BEHAVIOR-1K

**AndrejOrsula/space_robotics_bench** ⭐198
"机器人学习超越地球"——把具身学习拓展到空间机器人场景，是少数覆盖太空域的开源基准。
🔗 https://github.com/AndrejOrsula/space_robotics_bench

---

## 五、生态趋势信号

**1. 安全成为具身智能的"一级议题"。** SafeWorld 出隐身、CSF 把上下文安全过滤做成运动生成器的标配组件、FAITH 将安全性从任务目标中解耦——三件事在同一窗口出现，说明机器人社区已普遍承认：安全不是后处理补丁，而是模型架构必须内嵌的能力。

**2. VLA 进入"专业化分工"阶段。** VersaCamVLA（相机鲁棒）、TIC-VLA（导航专用）、EagleVLA-Edge（边缘推理）、HEX（全尺寸人形）——通用 VLA 论文正快速裂解为针对特定硬件、任务、部署环境的"垂直 VLA"。开源仓库 OpenTau、Robonix、EVA-Client 同时在补齐工程化最后一公里。

**3. 硬件开源与基础模型开源进入共振期。** OpenArm 提供全开源人形臂硬件，RoboVerse、OmniSim 提供仿真栈，OpenDM/OpenTau 提供模型训练栈——机器人第一次在开源世界拥有了"完整 Lego"。这与产业侧 Jabil、Helm.ai、AWS 的同步推进互为镜像，意味着具身智能的"iPhone 时刻"可能率先在开源生态中触发。

**4. Agentic RL 与机器人 RL 走向融合。** ART、OpenRLHF、RLinf 等原本服务于 LLM agent 的 RL 基础设施开始被机器人项目复用（如 mjlab 用 MuJoCo-Warp 重写 Isaac API、OpenPipe ART 强调"real-world tasks"），RL 不再有"机器人 RL"和"LLM RL"的人为边界。

---

## 六、值得关注

**① 跟踪 CSF + FAITH + SafeWorld 的"安全三角"成熟度**
今日单日内同时出现三件安全相关的事并不常见。CSF 解决"生成时安全"、FAITH 解决"训练时安全"、SafeWorld 解决"测试时安全"——如果三者后续开始互相引用、形成事实标准，将直接重塑明年具身模型论文的 baseline 设定。
🔗 https://arxiv.org/abs/2610.12467v1 · https://arxiv.org/abs/2610.12432v1 · https://www.therobotreport.com/safeworld-emerges-stealth-build

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*