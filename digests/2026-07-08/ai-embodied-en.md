# Embodied AI Open Source Digest 2026-07-08

> Source: GitHub Search API (robotics, ROS, embodied-AI topics) | 119 repos | Generated: 2026-07-08 02:49 UTC

---

# 🤖 Embodied AI Open Source Digest

*Weekly robotics open-source landscape — 119 active repos analyzed*

---

## 🌟 Today's Highlights

This week signals a clear acceleration in **VLA (Vision-Language-Action) infrastructure maturity** and **GPU-accelerated simulation**. The release of `openpi-flash` brings real-time inference to the openpi ecosystem, while `mjlab` (MuJoCo-Warp backed, Isaac Lab-compatible) is rapidly emerging as a credible alternative to NVIDIA's Isaac Lab. Open-source humanoid hardware continues to mature, with `enactic/openarm` drawing major attention, and several new entries (RISE, TIC-VLA, InternVLA-A1) point to a clear pivot toward **compositional world models** and **inference-efficient VLA fine-tuning**. Curriculum tooling for VLA and dexterous manipulation (`Awesome-UMI`, `Awesome-Dexterous-Manipulation`, `VLA-Handbook`) further confirms an industry-wide push to onboard the next wave of embodied-AI practitioners.

---

## 🔑 Key Projects

### 🦾 Robot Learning & Control

- **[isaac-sim/IsaacLab](https://github.com/isaac-sim/IsaacLab)** ⭐7,630 — NVIDIA's unified framework for robot learning in Isaac Sim; remains the de-facto training ground for large-scale RL and imitation-learning pipelines.
- **[robocasa/robocasa](https://github.com/robocasa/robocasa)** ⭐1,524 — Large-scale simulation of everyday household tasks; the standard benchmark for generalist household robot policies.
- **[OpenDriveLab/RISE](https://github.com/OpenDriveLab/RISE)** ⭐311 — RSS 2026 paper on self-improving robot policies via compositional world models; a notable step toward autonomous policy self-refinement.
- **[NJU-RLC/quadrupedal-agility](https://github.com/NJU-RLC/quadrupedal-agility)** ⭐119 — Official implementation for learning diverse natural behaviors in quadrupedal robots; expands legged-locomotion skill libraries.
- **[tunglm2203/votp](https://github.com/tunglm2203/votp)** ⭐6 — ICML 2026 method using video-based optimal transport for feedback-efficient offline preference-based RL.
- **[BrikHMP18/HandUMI](https://github.com/BrikHMP18/HandUMI)** ⭐15 — Hand-worn bimanual data-collection variant of UMI; lowers the barrier to scalable in-the-wild teleop datasets.

### 🤖 Simulation & Frameworks

- **[newton-physics/newton](https://github.com/newton-physics/newton)** ⭐5,173 — Open-source, GPU-accelerated (NVIDIA Warp) physics engine purpose-built for roboticists; a strong cross-ecosystem alternative to Isaac PhysX.
- **[mujocolab/mjlab](https://github.com/mujocolab/mjlab)** ⭐2,651 — Isaac Lab API powered by MuJoCo-Warp; brings NVIDIA's training UX to MuJoCo at GPU speed.
- **[google-deepmind/mujoco](https://github.com/google-deepmind/mujoco)** ⭐14,121 — Foundational physics simulator; ongoing releases keep MuJoCo the default contact-rich dynamics engine.
- **[google-deepmind/dm_control](https://github.com/google-deepmind/dm_control)** ⭐4,626 — DeepMind's RL environment stack on MuJoCo, including the Suite and Locomotion tasks.
- **[carla-simulator/carla](https://github.com/carla-simulator/carla)** ⭐14,148 — Mainstream open-source autonomous-driving simulator with active perception/control integration.
- **[ros-navigation/navigation2](https://github.com/ros-navigation/navigation2)** ⭐4,439 — Production-grade ROS 2 navigation framework; the reference stack for mobile robot autonomy.
- **[dora-rs/dora](https://github.com/dora-rs/dora)** ⭐3,831 — Dataflow-oriented Rust middleware that simplifies composing low-latency AI-robot pipelines.
- **[ros-controls/mujoco_ros2_control](https://github.com/ros-controls/mujoco_ros2_control)** ⭐212 — First-class ROS 2 control hardware interface for MuJoCo, with sensors and RGB-D/LiDAR plugins.

### 🧠 VLA & Foundation Models

- **[FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA)** ⭐512 — End-to-end "data → real-robot" VLA engineering platform; bridges model training and deployment in one stack.
- **[InternRobotics/InternVLA-A-series](https://github.com/InternRobotics/InternVLA-A-series)** ⭐465 — InternVLA-A1: a unified VLA model combining understanding, generation, and action for manipulation.
- **[allenai/vla-evaluation-harness](https://github.com/allenai/vla-evaluation-harness)** ⭐424 — A single framework to benchmark any VLA model on any robot-simulation environment.
- **[Tencent-Hunyuan/Hy-Embodied-0.5-VLA](https://github.com/Tencent-Hunyuan/Hy-Embodied-0.5-VLA)** ⭐185 — From VLA research to a real-world robot-learning stack from Tencent Hunyuan.
- **[TensorAuto/OpenTau](https://github.com/TensorAuto/OpenTau)** ⭐183 — PyTorch VLA training infrastructure aimed at real-world robotics.
- **[ucla-mobility/TIC-VLA](https://github.com/ucla-mobility/TIC-VLA)** ⭐102 — ICML 2026 "Think-in-Control" VLA tailored for navigation; couples reasoning with low-level control.
- **[lucidrains/mimic-video](https://github.com/lucidrains/mimic-video)** ⭐116 — Implementation of Mimic-Video: video-action models that generalize beyond standard VLAs.
- **[Hebbian-Robotics/openpi-flash](https://github.com/Hebbian-Robotics/openpi-flash)** ⭐38 — Real-time inference engine for openpi; critical for deploying Pi-series policies at control-loop rates.
- **[cair-vinuni/CLP_VLA](https://github.com/cair-vuni/CLP_VLA)** ⭐4 — "Finetuning VLAs requires fewer layers than you think" — an efficiency-focused contribution to VLA adaptation.

### 🔧 Hardware & Drivers

- **[enactic/openarm](https://github.com/enactic/openarm)** ⭐2,700 — Fully open-source humanoid arm designed for contact-rich physical-AI research; one of the most consequential open-hardware drops this cycle.
- **[NVIDIA-ISAAC-ROS/isaac_ros_visual_slam](https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_visual_slam)** ⭐1,395 — GPU-accelerated cuVSLAM visual odometry/SLAM for ROS 2; production-grade Jetson-ready localization.
- **[koide3/glim](https://github.com/koide3/glim)** ⭐1,668 — Versatile, extensible 3D point-cloud localization/mapping framework; ideal for LIDAR-based autonomy research.
- **[copper-project/copper-rs](https://github.com/copper-project/copper-rs)** ⭐1,380 — Deterministic robotic runtime in Rust for build → run → replay of entire robot stacks.
- **[ZihaoLu001/flexiv_control](https://github.com/ZihaoLu001/flexiv_control)** ⭐3 — Unified teleop/MPC/RL/sim-to-real control layer for the Flexiv Rizon arm with MuJoCo simulation.
- **[Manas-arumalla/openarm-control](https://github.com/Manas-arumalla/openarm-control)** ⭐3 — Tested MuJoCo control/perception/learning platform for the Enactic OpenArm v2 (bimanual 7-DOF).
- **[fiveages-sim/arms_ros2_control](https://github.com/fiveages-sim/arms_ros2_control)** ⭐72 — ROS 2 control drivers spanning single-arm, dual-arm, and wheel-based humanoids.

### 📊 Datasets & Benchmarks

- **[StanfordVL/BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K)** ⭐1,555 — Large-scale embodied-AI platform with 1,000+ household activities; cornerstone benchmark for generalist manipulation.
- **[datawhalechina/every-embodied](https://github.com/datawhalechina/every-embodied)** ⭐2,568 — Chinese-language tutorial building VLA/OpenVLA/SmolVLA/Pi0 from scratch; the largest open curriculum in the VLA space.
- **[InternRobotics/InternScenes](https://github.com/InternRobotics/InternScenes)** ⭐254 — NeurIPS 2025 large-scale interactive indoor scene dataset with realistic layouts.
- **[hku-mars/UMI-3D](https://github.com/hku-mars/UMI-3D)** ⭐254 — 3D SLAM and data-processing pipeline that underpins the UMI ecosystem.
- **[zju3dv/habitat-gs](https://github.com/zju3dv/habitat-gs)** ⭐233 — ECCV 2026 high-fidelity navigation simulator with dynamic Gaussian Splatting; the next-gen Habitat.
- **[chang-xinhai/Awesome-UMI](https://github.com/chang-xinhai/Awesome-UMI)** ⭐13 & **[chang-xinhai/Awesome-Dexterous-Manipulation](https://github.com/chang-xinhai/Awesome-Dexterous-Manipulation)** ⭐11 — Curated taxonomies of papers, datasets, and policies for UMI and dexterous manipulation.

---

## 📈 Ecosystem Signal

Three converging trends dominate this week's activity. **First**, GPU-native simulation is consolidating: `newton` (NVIDIA Warp) and `mjlab` (MuJoCo-Warp) are both betting that roboticists will want fast, differentiable, Isaac-Lab-style APIs without vendor lock-in. **Second**, the VLA stack is being decomposed into modular layers — training (OpenTau, InternVLA-A1), evaluation (vla-evaluation-harness), inference (openpi-flash), and deployment (EVA-Client, FluxVLA) — mirroring the maturation arc of LLM infrastructure from 2022–2024. **Third**, the **open-hardware movement** is reaching an inflection point: fully open humanoid arms (`enactic/openarm`) and bimanual data-collection rigs (`HandUMI`) suggest a near-term future where small labs can replicate what previously required million-dollar platforms. Together, these signals describe a robotics ecosystem that is rapidly commoditizing the substrate (simulators, hardware, data collection) while concentrating value in policy and foundation-model innovation.

---

## 👀 Worth Watching

1. **[mujocolab/mjlab](https://github.com/mujocolab/mjlab)** ⭐2,651 — A credible open alternative to Isaac Lab, blessed with MuJoCo's accuracy and Warp's speed. If it reaches feature parity for VLA training, it could materially shift the simulation market.

2. **[enactic/openarm](https://github.com/enactic/openarm)** ⭐2,700 — Few open-hardware repos hit this velocity. Combined with `openarm-control`, it constitutes a turnkey bimanual research rig that could become the de-facto reference arm for contact-rich manipulation.

3. **[Hebbian-Robotics/openpi-flash](https://github.com/Hebbian-Robotics/openpi-flash)** ⭐38 — Latency is the final frontier for deploying Pi-style policies. Real-time openpi inference unblocks on-robot VLA rollouts and is the missing link for many academic labs lacking commercial inference stacks.