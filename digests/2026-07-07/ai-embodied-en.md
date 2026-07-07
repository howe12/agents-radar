# Embodied AI Open Source Digest 2026-07-07

> Source: GitHub Search API (robotics, ROS, embodied-AI topics) | 131 repos | Generated: 2026-07-07 10:14 UTC

---

Here is the structured Embodied AI Open Source Digest based on the provided repositories.

---

### Embodied AI Open Source Digest (May 25, 2025)

### 1. Today's Highlights

This week marks a significant consolidation of the **Vision-Language-Action (VLA)** stack, with major new infrastructure, evaluation, and training projects reaching critical mass. The release of **FluxVLA** and **OpenTau** provides robust engineering platforms for training and deploying VLAs, while **Allen AI's VLA Evaluation Harness** introduces the first standardized benchmarking framework for the field. On the simulation and dynamics side, **Newton Physics** and **FoCoDyn** highlight a growing demand for fully differentiable, GPU-accelerated physics engines to support gradient-based learning. The ecosystem is also seeing a practical push towards data collection with hardware-agnostic tools like **HandUMI** and comprehensive data pipelines like **UMI-3D**, indicating a maturation from purely academic research to deployable, developer-friendly toolchains.

### 2. Key Projects

#### 🦾 Robot Learning & Control (Imitation Learning, RL, Policy Learning)

- **RLinf/RLinf** ⭐4,029 | [GitHub](https://github.com/RLinf/RLinf)
  A dedicated reinforcement learning infrastructure for embodied and agentic AI, providing the critical training backbone for scaling policy learning.
- **zju3dv/habitat-gs** ⭐229 | [GitHub](https://github.com/zju3dv/habitat-gs)
  Introduces a high-fidelity navigation simulator leveraging dynamic Gaussian Splatting, enabling more realistic visual rendering for embodied agent training in complex environments.
- **NJU-RLC/quadrupedal-agility** ⭐119 | [GitHub](https://github.com/NJU-RLC/quadrupedal-agility)
  Official implementation of a method for learning diverse, natural behaviors to enhance the agility of quadrupedal robots, a key step towards more robust legged locomotion.
- **OpenDriveLab/RISE** ⭐311 | [GitHub](https://github.com/OpenDriveLab/RISE)
  Presents a self-improving robot policy framework using a compositional world model, a promising direction for reducing human feedback and enabling autonomous skill discovery.

#### 🤖 Simulation & Frameworks (MuJoCo, Isaac, Gazebo, ROS)

- **newton-physics/newton** ⭐5,171 | [GitHub](https://github.com/newton-physics/newton)
  An open-source, GPU-accelerated physics engine built on NVIDIA Warp, directly addressing the need for high-throughput, differentiable simulation for modern robot learning.
- **mujocolab/mjlab** ⭐2,650 | [GitHub](https://github.com/mujocolab/mjlab)
  A re-implementation of the Isaac Lab API on top of MuJoCo and Warp, offering a powerful and potentially more accessible alternative for GPU-accelerated reinforcement learning.
- **dora-rs/dora** ⭐3,833 | [GitHub](https://github.com/dora-rs/dora)
  A dataflow-oriented robotic architecture (DORA) written in Rust, providing a low-latency, composable middleware for building complex, distributed AI-based robotic applications.
- **abizovnuralem/go2_omniverse** ⭐1,035 | [GitHub](https://github.com/abizovnuralem/go2_omniverse)
  Provides critical support for popular legged robots (Unitree Go2, G1) within the NVIDIA Isaac Lab ecosystem, lowering the barrier for high-fidelity sim-to-real research.

#### 🧠 VLA & Foundation Models (Vision-Language-Action, Embodied Foundation Models)

- **FluxVLA/FluxVLA** ⭐512 | [GitHub](https://github.com/FluxVLA/FluxVLA)
  An all-in-one VLA engineering platform covering the entire lifecycle from data collection to real-robot deployment, a vital tool for the practical application of embodied AI.
- **allenai/vla-evaluation-harness** ⭐423 | [GitHub](https://github.com/allenai/vla-evaluation-harness)
  The first unified framework for evaluating any VLA model across multiple robot simulation benchmarks, crucial for standardizing performance metrics and driving fair comparisons.
- **InternRobotics/InternVLA-A-series** ⭐457 | [GitHub](https://github.com/InternRobotics/InternVLA-A-series)
  A foundational model that unifies visual understanding, scene generation, and action prediction for robotic manipulation, representing the state-of-the-art in comprehensive VLA design.
- **TensorAuto/OpenTau** ⭐183 | [GitHub](https://github.com/TensorAuto/OpenTau)
  Tensor's dedicated VLA training infrastructure for real-world robotics in PyTorch, providing an alternative, production-focused training pipeline for the community.
- **Tencent-Hunyuan/Hy-Embodied-0.5-VLA** ⭐184 | [GitHub](https://github.com/Tencent-Hunyuan/Hy-Embodied-0.5-VLA)
  A complete, compact 0.5B parameter VLA stack from Tencent, demonstrating that capable embodied intelligence can be achieved with significantly smaller, more deployable models.

#### 🔧 Hardware & Drivers (Robot Drivers, Hardware Interfaces, Embedded Systems)

- **enactic/openarm** ⭐2,697 | [GitHub](https://github.com/enactic/openarm)
  A fully open-source humanoid arm design for physical AI research, enabling reproducible research in contact-rich manipulation and dual-arm coordination.
- **hku-mars/UMI-3D** ⭐254 | [GitHub](https://github.com/hku-mars/UMI-3D)
  An enhanced SLAM and data processing pipeline for the Universal Manipulation Interface (UMI), improving the stability and accuracy of robot-free data collection for imitation learning.
- **Noietch/EVA-CLIENT** ⭐35 | [GitHub](https://github.com/Noietch/EVA-CLIENT)
  A unified framework for deploying, evaluating, and collecting data on real robots, connecting policy algorithms directly to hardware for faster testing loops.

#### 📊 Datasets & Benchmarks (Manipulation, Navigation, Embodied Benchmarks)

- **StanfordVL/BEHAVIOR-1K** ⭐1,555 | [GitHub](https://github.com/StanfordVL/BEHAVIOR-1K)
  A platform for accelerating embodied AI research with 1,000 diverse, simulation-ready activities, serving as a key benchmark for long-horizon task planning and manipulation.
- **InternRobotics/InternScenes** ⭐254 | [GitHub](https://github.com/InternRobotics/InternScenes)
  A large-scale, interactive indoor scene dataset with realistic layouts, providing high-quality environments for training and evaluating navigation and interaction agents.
- **realsee-developer/RealSee3D** ⭐276 | [GitHub](https://github.com/realsee-developer/RealSee3D)
  A multi-view RGB-D dataset combining real-world captures with procedurally generated scenes, bridging the sim-to-real data gap for 3D vision tasks.

### 3. Ecosystem Signal

The dominant signal this week is the **maturation of the VLA software stack**. The ecosystem is rapidly moving beyond isolated research papers to provide the infrastructure needed for practical development: **FluxVLA** for lifecycle management, **OpenTau** for training, and the **VLA Evaluation Harness** for standardized testing. This indicates a shift from proving concepts to building reliable, reproducible pipelines for embodied agents. Concurrently, there is a strong push towards **differentiable and GPU-accelerated physics** (Newton, FoCoDyn), enabling more powerful gradient-based optimization methods like reinforcement learning and trajectory optimization. This combination—robust high-level AI models + efficient, differentiable low-level physics—is the key formula for advancing embodied intelligence.

### 4. Worth Watching

- **philfung/awesome-reliable-robotics** ⭐154 | [GitHub](https://github.com/philfung/awesome-reliable-robotics)
  A continuously updated list of robotics research that specifically demonstrates real-world robustness. As the field moves from simulation to deployment, this curated repository will become an essential resource for identifying methods that actually work outside the lab.
- **Manas-arumalla/openarm-control** ⭐3 | [GitHub](https://github.com/Manas-arumalla/openarm-control)
  A tested and comprehensive control, planning, and learning platform for the Enactic OpenArm. It includes IK, compliant control, vision-based policies (ACT), and RL for insertion, making it a potential "one-stop-shop" software stack for anyone building with this popular open-source arm.
- **BrikHMP18/HandUMI** ⭐14 | [GitHub](https://github.com/BrikHMP18/HandUMI)
  An open-source, hand-worn version of the UMI for collecting bimanual manipulation data without a robot. By modularizing the data collection process for any parallel-jaw gripper, this project could significantly lower the cost and complexity of generating high-quality imitation learning datasets.