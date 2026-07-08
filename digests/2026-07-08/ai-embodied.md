# 具身智能开源动态日报 2026-07-08

> 数据来源: GitHub Search API (robotics, ROS, embodied-AI 等话题) | 共 119 个仓库 | 生成时间: 2026-07-08 02:49 UTC

---

# 具身智能开源动态日报

## 📌 今日速览

今日具身智能开源生态呈现出 **VLA 全栈化、MuJoCo 生态扩张、开源硬件加速** 三大主线：InternRobotics 开源 InternVLA-A1 系列模型打通了"理解—生成—动作"的统一框架；MuJoCo-Warp 阵营新增 mjlab（Isaac Lab API）、mpx（JAX MPC）等多个项目，正在挑战 NVIDIA Isaac 的仿真霸权；enactic/openarm 凭 2.7k star 成为本周最受关注的开源人形臂硬件。值得关注的是，针对 VLA 模型的"红队评测"（provael）和"鲁棒性榜单"（awesome-reliable-robotics）开始出现，标志社区进入安全与可靠性建设阶段。

---

## 🦾 机器人学习与控制

| 仓库 | Star | 一句话说明 |
|------|------|-----------|
| [**RLinf/RLinf**](https://github.com/RLinf/RLinf) | ⭐4,032 | 面向具身/Agentic AI 的 RL 基础设施，统一支持 VLM、Agent 与机器人策略训练 |
| [**enactic/openarm**](https://github.com/enactic/openarm) | ⭐2,700 | 面向 Physical AI 的全开源仿人臂，针对接触丰富操作设计，是当前最热的开源硬件项目 |
| [**OpenDriveLab/RISE**](https://github.com/OpenDriveLab/RISE) | ⭐311 | RSS 2026：通过组合式世界模型实现机器人策略的自我改进（Self-Improving Policy） |
| [**NJU-RLC/quadrupedal-agility**](https://github.com/NJU-RLC/quadrupedal-agility) | ⭐119 | 通过学习多样化自然行为提升四足机器人敏捷性，扩宽足式机器人运动范式 |
| [**Hebbian-Robotics/openpi-flash**](https://github.com/Hebbian-Robotics/openpi-flash) | ⭐38 | openpi 的实时推理引擎，让 VLA 模型在真机上达到部署级延迟 |
| [**tunglm2203/votp**](https://github.com/tunglm2203/votp) | ⭐6 | ICML 2026：基于视频反馈的高效离线偏好强化学习，节省人类反馈成本 |
| [**cair-vinuni/CLP_VLA**](https://github.com/cair-vinuni/CLP_VLA) | ⭐4 | 提出 VLA 微调只需更少层即可保留泛化能力，挑战"全量微调"的范式 |
| [**provael/provael**](https://github.com/provael/provael) | ⭐3 | 首个开源 VLA 红队评测框架：模拟对抗下报告 Attack Success Rate，对具身 AI 安全具有开创意义 |
| [**philfung/awesome-reliable-robotics**](https://github.com/philfung/awesome-reliable-robotics) | ⭐154 | 收录真实世界部署中表现鲁棒可靠的机器人研究榜单，反对"仿真刷分" |

## 🤖 仿真与框架

| 仓库 | Star | 一句话说明 |
|------|------|-----------|
| [**google-deepmind/mujoco**](https://github.com/google-deepmind/mujoco) | ⭐14,121 | 通用接触动力学仿真器，具身/RL 研究的"水电煤"，本周持续更新 |
| [**newton-physics/newton**](https://github.com/newton-physics/newton) | ⭐5,173 | NVIDIA Warp 之上的 GPU 加速物理引擎，专为机器人学家打造 |
| [**mujocolab/mjlab**](https://github.com/mujocolab/mjlab) | ⭐2,651 | 提供 Isaac Lab 风格的 API，但底层跑在 MuJoCo-Warp，是 NVIDIA 生态之外的强势替代 |
| [**cyberbotics/webots**](https://github.com/cyberbotics/webots) | ⭐4,448 | 老牌开源机器人仿真器，跨平台、教育友好，仍持续活跃 |
| [**dora-rs/dora**](https://github.com/dora-rs/dora) | ⭐3,831 | 数据流驱动的机器人中间件，Rust 编写，主打低延迟、可组合的 AI 机器人管线 |
| [**rl-tools/rl-tools**](https://github.com/rl-tools/rl-tools) | ⭐1,007 | C++ 模板库的"最快深度强化学习库"，对延迟敏感的机器人 RL 极具吸引力 |
| [**iit-DLSLab/mpx**](https://github.com/iit-DLSLab/mpx) | ⭐245 | JAX 实现的模型预测控制库，方便在 GPU/TPU 上做并行 MPC |
| [**unilabsim/UniLab**](https://github.com/unilabsim/UniLab) | ⭐824 | 异构架构机器人 RL 框架，突破"GPU 主导"的算力范式 |

## 🧠 VLA 与基础模型

| 仓库 | Star | 一句话说明 |
|------|------|-----------|
| [**datawhalechina/every-embodied**](https://github.com/datawhalechina/every-embodied) | ⭐2,568 | 中文社区最系统的具身智能教程：从 0 构建 OpenVLA/SmolVLA/Pi0 |
| [**leofan90/Awesome-World-Models**](https://github.com/leofan90/Awesome-World-Models) | ⭐1,873 | 世界模型论文大列表，覆盖视频生成、具身 AI 与自动驾驶 |
| [**sou350121/VLA-Handbook**](https://github.com/sou350121/VLA-Handbook) | ⭐360 | 首份 VLA 中文实战手册，聚焦机器人特有的算法挑战与面试 |
| [**FluxVLA/FluxVLA**](https://github.com/FluxVLA/FluxVLA) | ⭐512 | 一站式 VLA 工程平台，串起"数据采集—训练—真机部署"全链路 |
| [**InternRobotics/InternVLA-A-series**](https://github.com/InternRobotics/InternVLA-A-series) | ⭐465 | InternVLA-A1：统一理解、生成与动作的机器人操控模型 |
| [**allenai/vla-evaluation-harness**](https://github.com/allenai/vla-evaluation-harness) | ⭐424 | 首个统一 VLA 评测框架，可对接任意模型 × 任意机器人仿真基准 |
| [**Tencent-Hunyuan/Hy-Embodied-0.5-VLA**](https://github.com/Tencent-Hunyuan/Hy-Embodied-0.5-VLA) | ⭐185 | 腾讯混元：从 VLA 模型到真机学习栈的完整开源方案 |
| [**TensorAuto/OpenTau**](https://github.com/TensorAuto/OpenTau) | ⭐183 | 张量自动化的 PyTorch VLA 训练基础设施，面向真实机器人训练 |
| [**ucla-mobility/TIC-VLA**](https://github.com/ucla-mobility/TIC-VLA) | ⭐102 | ICML 2026：Think-in-Control VLA，把链式思考引入机器人导航决策 |

## 🔧 硬件与驱动

| 仓库 | Star | 一句话说明 |
|------|------|-----------|
| [**commaai/openpilot**](https://github.com/commaai/openpilot) | ⭐63,040 | 已在 300+ 款车型上落地的机器人操作系统，是规模最大的开源机器人项目 |
| [**rerun-io/rerun**](https://github.com/rerun-io/rerun) | ⭐11,092 | 多模态机器人数据的可视化、查询与流式传输工具，已成为数据基建标配 |
| [**ArduPilot/ardupilot**](https://github.com/ArduPilot/ardupilot) | ⭐15,433 | 无人机/无人车/无人艇开源飞控，覆盖 Plane/Copter/Rover/Sub 全平台 |
| [**huangjunsen0406/py-xiaozhi**](https://github.com/huangjunsen0406/py-xiaozhi)