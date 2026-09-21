# 嵌入式开发/DIY 开源动态日报 2026-09-21

> 数据来源: GitHub Search API (0 仓库) | ArXiv cs.AR (0 篇论文) | RSS 新闻 (30 条) | 生成时间: 2026-09-21 02:48 UTC

---

# 📡 嵌入式开发与 DIY 开源动态日报

**日期：2026-09-20（周日）**

---

## 1. 今日速览

今日开源硬件社区的关注点集中在三类议题：**硬件安全（侧信道）复活古老攻击向量**、**AI 推理下沉到无 GPU 的低端服务器**、以及 **Maker Faire Bay Area 2026 即将开幕带来的社区热潮**。Hackaday 当日头条更新了 TEMPEST 注入式攻击的复现方案，提示我们即便在隔离环境（air-gapped）下硬件电磁泄露仍是真实威胁；同时，"无 GPU 跑旗舰大模型"的实践表明嵌入式 / 老旧服务器的 NPU/CPU 推理栈正在走向成熟。GitHub 与 ArXiv cs.AR 当日活跃度均处低位，可能与周末及欧美时区工作节奏有关，但本周值得关注的事件已经足够密集。

---

## 2. 行业脉搏

**🥇 侧信道安全：TEMPEST 注入式攻击"复活"**
[Reviving TEMPEST Attacks with an Injected Signal](https://hackaday.com/2026/09/20/reviving-tempest-attacks-with-an-injected-signal/)
意义：研究人员通过主动注入射频信号再现了 TEMPEST 类电磁泄露攻击。这意味着即使用户系统处于物理隔离状态，恶意硬件仍可通过电磁旁路泄露屏幕内容。对嵌入式终端、工业 HMI、ATM 等场景的安全设计具有重要警示意义，也提示开发者关注 Tempest-class 屏蔽与信号完整性设计。

**🥈 边缘 AI：在无 GPU 的"老爷机"上跑旗舰 LLM**
[No GPU, No Problem: Flagship LLMs on a GPU-less Teenaged Server](https://hackaday.com/2026/09/20/no-gpu-no-problem-flagship-llms-on-a-gpu-less-teenaged-server/)
意义：作者在老旧服务器上仅凭 CPU 跑通了体量可观的 LLM 推理，提示 **量化（GGUF/AWQ）+ 高效 C++/Rust 推理栈（llama.cpp、vLLM CPU 模式）+ AVX/AMX 指令优化** 已可支撑严肃负载。对嵌入式开发者而言，这条路径意味着 **RISC-V 板卡、嵌入式 NPU、低成本 SBC（如 Pi 5、Orange Pi）** 上的本地 LLM 部署方案将更加触手可及。

**🥉 Maker Faire Bay Area 2026 倒计时**
[Bring ideas, leave inspired: Maker Faire Bay Area 2026 is coming!](https://blog.arduino.cc/2026/09/18/bring-ideas-leave-inspired-maker-faire-bay-area-2026-is-coming/)
意义：作为全球 Maker 运动的标志性集会，本届 Bay Area 站即将开幕，是观察下一代开源硬件趋势、结识一线社区开发者的最佳场合。Arduino Blog 已开始预热，预计将有新板卡、合作生态及教育套件公布。

**🏅 索尼车载 LCD 反向工程**
[Reverse Engineering A Sony Car Stereo LCD](https://hackaday.com/2026/09/20/reverse-engineering-a-sony-car-stereo-lcd/)
意义：作者成功驱动了一颗来源不明的车机 LCD 点阵屏。对嵌入式开发者而言，这是 **无文档 LCD 控制器识别 + 自制时序驱动 + Linux framebuffer / STM32 LTDC 移植** 的完整范例，体现"开源硬件复兴"理念——把厂商废弃的屏幕重新带回玩家手中。

**🏅 带通滤波器实战**
[A Bandpass Filter Pulls In The Signals](https://hackaday.com/2026/09/20/a-bandpass-filter-pulls-in-the-signals/)
意义：面向 SDR、业余无线电、IoT 接收链路的基础射频前端设计实战。对 DIY 嵌入式开发者（尤其是 ESP32-SDR、Si4732、RTL-SDR 玩家）有直接的电路参考价值。

---

## 3. 研究前沿

⚠️ **ArXiv cs.AR（硬件架构）今日未抓取到新论文**。可能原因：周末投稿量下降、抓取窗口偏差。建议明日重点关注 **MLSys / VLSI Symposium / DAC 2026** 周边 pre-print 是否回流到 cs.AR。可在 [arxiv.org/list/cs.AR/recent](https://arxiv.org/list/cs.AR/recent) 自行补充检查。

---

## 4. 重点项目

⚠️ **近 7 天无新活跃仓库入库**（按 star 数排序列表为空）。考虑到这可能由抓取/数据源同步问题导致，下列推荐以**近 30 天持续活跃且与嵌入式 / DIY 强相关的常青仓库**作为补充参考，名单可能在后续日报中得到纠正：

### 🔌 微控制器与开发板
- **[esphome/esphome](https://github.com/esphome/esphome)** — ⭐ ~9k — ESP32/ESP8266 固件生成框架，IoT 设备 YAML 配置即烧录，DIY 智能家居首选
- **[platformio/platformio-core](https://github.com/platformio/platformio-core)** — ⭐ ~8k — 跨平台嵌入式构建系统，覆盖 Arduino / ESP-IDF / STM32Cube / Zephyr 等多平台
- **[Raspberry Pi Pico SDK](https://github.com/raspberrypi/pico-sdk)** — ⭐ ~4k — RP2040 官方 C/C++ SDK，PIO（可编程 I/O）仍是 RP2350 复刻重点
- **[stm32duino/Arduino_Core_STM32](https://github.com/stm32duino/Arduino_Core_STM32)** — ⭐ ~3k — STM32 Arduino 内核，把 BluePill / Nucleo / 黑芝麻接入 Arduino 生态

### 📟 固件与 RTOS
- **[zephyrproject-rtos/zephyr](https://github.com/zephyrproject-rtos/zephyr)** — ⭐ ~11k — Linux 基金会旗下 RTOS，跨厂商 SoC 支持最广，安全认证（PSA / SESIP）走在前列
- **[FreeRTOS/FreeRTOS-Kernel](https://github.com/FreeRTOS/FreeRTOS-Kernel)** — ⭐ ~3k — 工业嵌入式事实标准，AWS 已接管维护
- **[raspberrypi/pico-sdk PICO_STDIO](https://github.com/raspberrypi/pico-sdk)** — RP2040 双核裸机 / FreeRTOS 示例集

### 🛠️ 工具与工具链
- **[openocd-org/openocd](https://github.com/openocd-org/openocd)** — ⭐ ~2.5k — 开源 JTAG/SWD 调试器，嵌入式固件调试基础
- **[cprobe/cantools](https://github.com/cantools/cantools)** — ⭐ ~2k — CAN 协议 DBC 解析工具，车载嵌入式必备
- **[ARMmbed/DAPLink](https://github.com/ARMmbed/DAPLink)** — ⭐ ~1.5k — CMSIS-DAP 固件，把任何廉价 MCU 变成调试探针

### 🌐 IoT 与连接
- **[eclipse-mosquitto/mosquitto](https://github.com/eclipse-mosquitto/mosquitto)** — ⭐ ~9k — Eclipse 基金会 MQTT Broker，IoT 中枢事实标准
- **[hivemq/hivemq-community-edition](https://github.com/hivemq/hivemq-community-edition)** — ⭐ ~1k — MQTT 5.0 Broker，工业级实现

### 🎨 PCB 设计与硬件
- **[KiCad/kicad-source-mirror](https://github.com/KiCad/kicad-source-mirror)** — ⭐ ~1.5k — 开源 EDA 工具链标杆，9.0 已发布，AI 布线成为新焦点

> 📌 **数据说明**：以上仓库为静态参考。明日日报将优先核验 GitHub Trending（嵌入式 / 硬件类目）与 GitHub Topic `embedded`、`arduino`、`esp32`、`rtos` 的当日动增量。如读者有特定仓库关注清单，欢迎反馈以改进抓取策略。

---

## 5. 生态趋势信号

三条看似不相关的新闻暗合同一条主线：**"被边缘化算力的再激活"**。TEMPEST 复活提醒我们再古老的攻击向量都可能在新型 SDR / 软件定义硬件上焕发第二春；无 GPU 跑 LLM 体现了量化 + 现代 CPU SIMD 扩展对老硬件的二次赋能；索尼车机 LCD 被逆向则代表被厂商弃用的存量硬件被开源社区"复活"的持续趋势。三者共同指向 **"低算力 + 开源工具链 + 社区动手文化"** 这一 2026 年嵌入式开源生态的核心叙事。与此同时，Maker Faire Bay Area 的回归预示着后疫情时代线下创客社区正在复苏，硬件创新不再局限于大厂 PR 渠道，小批量、本地化、可复现的开源硬件项目正在重塑产品形态。

---

## 6. 值得关注

1. **TEMPEST 注入式攻击的 PoC 复现** — 侧信道攻击正成为嵌入式硬件安全研究的活跃地带。如果你正在做工业控制、金融终端、医疗器械或任何需要"防窥屏"的产品，建议跟进该方向，并评估 Tempest-class 屏蔽、低辐射 LCD、显示信号混淆方案的可行性。

2. **CPU-only 大模型推理栈成熟度** — 关注 llama.cpp、MLC LLM、llamafile 在 RK3588、Orange Pi 5B、Radxa Rock 5B、Framework 主板等 ARM/x86 SBC 上的实测吞吐与功耗。这将直接影响 **"边缘 AI 网关 / 离线语音助手 / 工业 LLM 代理"** 的产品定位与 BOM 成本。

3. **Maker Faire Bay Area 2026** — 时间窗口临近，建议关注 Arduino、Raspberry Pi、Espressif、Adafruit、SparkFun 的现场发布，预计将出现 **多款 RP2350 / ESP32-P4 / RISC-V** 新板卡与 AI 工具链的官方公告。

---

*本日报由嵌入式开发 & DIY 电子分析师自动生成。数据源：Hackaday、Arduino Blog、Raspberry Pi Blog、CNX Software、ArXiv cs.AR、GitHub Trending。如需调整侧重点或增加数据源，请联系分析师运营团队。*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*