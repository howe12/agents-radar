# Embodied AI Open Source Digest 2026-07-08

> Sources: GitHub Search API (119 repos) | ArXiv cs.RO (30 papers) | RSS News (26 items) | Generated: 2026-07-08 06:22 UTC

---

# 🤖 Embodied AI Open Source Digest

## 📌 Today's Highlights

Today's signal paints a vivid picture of an ecosystem accelerating along three vectors: **VLA maturation, world-model emergence, and open-hardware democratization**. On the research side, the *RynnWorld* duo (4D world models + digital teleoperation) and *Lift3D-VLA* represent a clear shift from flat 2D perception to geometry- and dynamics-aware policies, while *Open Robotics* lands a major governance upgrade with Vicky Brasseur as its first Chief Program Officer — a strong sign that ROS is professionalizing its open-source operations. Simultaneously, the *openarm* humanoid arm, *Newton* GPU physics engine, and a wave of MuJoCo-Warp–based stacks (mjlab, robot-control-stack) signal that **sim-to-real infrastructure is consolidating around a few high-leverage cores**. China's grassroots training ecosystem (datawhalechina/every-embodied, huangjunsen0406/py-xiaozhi) is also reaching escape velocity.

---

## 📰 Industry Pulse

- **[Welcoming Vicky (VM) Brasseur as Our New Chief Program Officer](https://discourse.openrobotics.org/t/announcement-welcoming-vicky-vm-brasseur-as-our-new-chief-program-officer/56259)** — A landmark hire for Open Robotics. Brasseur is a respected OSS strategist; her presence signals that ROS/Gazebo is investing in governance, community health, and sustainability beyond pure code.
- **[Update on BAGEL (BAG ExpLoration): What's New](https://discourse.openrobotics.org/t/update-on-bagel-bag-exploration-whats-new/56235)** — Continued investment in rosbag tooling is critical given that VLA training pipelines increasingly depend on efficient, queryable rosbag datasets.
- **[20 parallel courses available for 2026 ROS Summer School-Hangzhou, China](https://discourse.openrobotics.org/t/20-parallel-courses-available-for-2026-ros-summer-school-hangzhou-china/56233)** — Reflects ROS's accelerating global (and especially Chinese) ecosystem reach.
- **[AI for Industry Challenge - Phase 1](https://discourse.openrobotics.org/t/ai-for-industry-challenge-phase-1/56227)** — Industry-academic engagement is intensifying as embodied AI moves from lab demos to factory floors.
- **[ROS documentation revision notice](https://discourse.openrobotics.org/t/ros-documentation-revision-notice/56246)** & **[Gazebo PMC Meeting Minutes 2026-07-06](https://discourse.openrobotics.org/t/gazebo-pmc-meeting-minutes-2026-07-06/56229)** — Quiet but vital maintenance rhythm; transparency on the dev process keeps the foundation trustworthy.
- **[Last Day for ROSCon Global Early Bird Tickets — July 12th](https://discourse.openrobotics.org/t/last-day-for-roscon-global-early-bird-tickets-is-sunday-july-12th/56226)** — The annual community touchpoint is approaching.

---

## 🔬 Research Frontier

- **[Lift3D-VLA](http://arxiv.org/abs/2607.06564v1)** — Lifts 2D Vision-Language-Action models into 3D geometry- and dynamics-aware manipulation, addressing a known weakness of current VLAs (lack of physical reasoning).
- **[RynnWorld-4D](http://arxiv.org/abs/2607.06559v1)** + **[RynnWorld-Teleop](http://arxiv.org/abs/2607.06558v1)** — A coherent pair: a 4D embodied world model for manipulation *plus* an action-conditioned world model for digital teleoperation. Together they attack the data-collection bottleneck by enabling training from synthetic rollouts.
- **[UniLM-Nav](http://arxiv.org/abs/2607.06537v1)** — A unified zero-shot framework for last-mile mobile manipulation (navigate → manipulate), a hot operational topic for service and logistics robots.
- **[SIEVE: Structure-Aware Data Selection for Imitation Learning with VLA Models](http://arxiv.org/abs/2607.06442v1)** — Tackles VLA *training* efficiency by curating demonstrations, recognizing that data quality now matters more than quantity.
- **[Neural-ESO: A Dual-Pathway Architecture for Provably Robust Learning-Based Control](http://arxiv.org/abs/2607.06535v1)** — Combines neural extended state observers with formal robustness, a step toward safe learned controllers for industrial deployment.
- **[Hilti-Trimble-Oxford Dataset](http://arxiv.org/abs/2607.06464v1)** — A 360° visual-inertial benchmark with floor-plan priors for construction-site SLAM — production-grade real-world data is finally arriving for that vertical.

---

## 🚀 Key Projects

### 🦾 Robot Learning & Control
- **[enactic/openarm](https://github.com/enactic/openarm)** ⭐2,701 — *Fully open-source humanoid arm for contact-rich physical AI* — a major step toward **democratized bimanual hardware** that pairs with VLA research.
- **[ARISE-Initiative/robosuite](https://github.com/ARISE-Initiative/robosuite)** ⭐2,502 — *Modular simulation framework and benchmark for robot learning* — the de facto standard for manipulation RL research, still actively maintained.
- **[amathislab/musclemimic](https://github.com/amathislab/musclemimic)** ⭐188 — *Full-body musculoskeletal motor learning at scale* — pushes embodied AI beyond rigid bodies toward biologically faithful control.
- **[RobotControlStack/robot-control-stack](https://github.com/RobotControlStack/robot-control-stack)** ⭐121 — *Lean, ROS-free sim-to-real framework using MuJoCo Gymnasium wrappers for Franka/UR5e/xArm/SO101* — a pragmatic answer to ROS-heavy pipelines that slow iteration.
- **[philfung/awesome-reliable-robotics](https://github.com/philfung/awesome-reliable-robotics)** ⭐154 — *Curated list of robotics research that actually works in the real world* — increasingly valuable as the field drowns in simulation-only SOTA claims.

### 🤖 Simulation & Frameworks
- **[carla-simulator/carla](https://github.com/carla-simulator/carla)** ⭐14,148 — *Open-source autonomous-driving simulator* — still the most cited driving sim in academic papers.
- **[google-deepmind/mujoco](https://github.com/google-deepmind/mujoco)** ⭐14,122 — *General-purpose physics simulator* — the foundation powering much of the new wave of VLA/RL stacks.
- **[newton-physics/newton](https://github.com/newton-physics/newton)** ⭐5,174 — *GPU-accelerated physics on NVIDIA Warp for robotics* — a credible new entrant challenging Isaac Sim/MuJoCo for differentiable, large-scale contact.
- **[cyberbotics/webots](https://github.com/cyberbotics/webots)** ⭐4,448 — *Long-standing open-source robot simulator with first-class ROS integration* — education and industry standard.
- **[dora-rs/dora](https://github.com/dora-rs/dora)** ⭐3,832 — *Low-latency, composable, distributed dataflow middleware for AI robotics* — Rust-based and gaining traction as a ROS-alternative for ML pipelines.
- **[mujocolab/mjlab](https://github.com/mujocolab/mjlab)** ⭐2,652 — *Isaac Lab API powered by MuJoCo-Warp for RL/robotics* — strategically bridges NVIDIA's API to the open MuJoCo ecosystem.
- **[google-deepmind/dm_control](https://github.com/google-deepmind/dm_control)** ⭐4,626 — *DeepMind's physics + RL stack on MuJoCo* — the canonical continuous-control benchmark.

### 🧠 VLA & Foundation Models
- **[RLinf/RLinf](https://github.com/RLinf/RLinf)** ⭐4,038 — *Reinforcement learning infrastructure for embodied and agentic AI* — purpose-built for the post-VLA training era.
- **[leofan90/Awesome-World-Models](https://github.com/leofan90/Awesome-World-Models)** ⭐1,874 — *Comprehensive paper list for world models in embodied AI, video generation, and AD* — the right reading list for the current paradigm shift.
- **[FluxVLA/FluxVLA](https://github.com/FluxVLA/FluxVLA)** ⭐512 — *All-in-one VLA engineering platform: data → real-robot deployment* — reduces friction for practitioners.
- **[InternRobotics/InternVLA-A-series](https://github.com/InternRobotics/InternVLA-A-series)** ⭐467 — *InternVLA-M1: unifying understanding, generation, and action* — a strong open entry from the Shanghai AI Lab lineage.
- **[allenai/vla-evaluation-harness](https://github.com/allenai/vla-evaluation-harness)** ⭐425 — *One framework to evaluate any VLA on any robot sim benchmark* — much-needed standardization.
- **[OpenDriveLab/RISE](https://github.com/OpenDriveLab/RISE)** ⭐313 — *Self-improving robot policy with compositional world model* (RSS 2026) — points at