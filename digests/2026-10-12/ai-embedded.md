# 嵌入式开发/DIY 开源动态日报 2026-10-12

> 数据来源: GitHub Search API (0 仓库) | ArXiv cs.AR (0 篇论文) | RSS 新闻 (27 条) | 生成时间: 2026-10-12 03:46 UTC

---

# 《嵌入式开发/DIY 开源动态日报》
**2026 年 10 月 11 日 · 星期六**

---

## 1. 今日速览

今日素材以 Hackaday 与 Arduino Blog 为主，技术热点集中在**复古硬件挖掘与 PCB 设计工具革新**两条主线：Nokia 3310 Game Jam 把经典机型玩出新花样，Littelfuse EZ80 宣告退役标志着一个嵌入式时代的段落，神秘的 1980 年代开关电容滤波 IC 引发硬件考古热；与此同时，六边形网格自动布线器为 PCB 设计带来新的拓扑思路。Arduino 官方博客发布从 GIGA R1 移植气象站到 UNO R4 的实战案例，对资源受限场景下的代码移植具有借鉴意义。今日无新增 cs.AR 论文和活跃 GitHub 仓库，重点项目与研究前沿部分需延后关注。

---

## 2. 行业脉搏

- **Littelfuse 宣布 EZ80 退役** — [原文](https://hackaday.com/2026/10/11/littelfuse-announces-retirement-of-the-ez80/)
  eZ80 是 Zilog 在 Z80 基础上的增强型 8 位/16 位兼容 MCU，长期活跃于工业控制与爱好者项目。其退役意味着经典的 Z80 生态正在进一步收缩，依赖其的项目需要规划迁移路径，对复古计算爱好者是一次"时代的告别"。

- **六边形网格改进自动布线器** — [原文](https://hackaday.com/2026/10/11/improving-an-autorouter-with-a-hexagonal-grid/)
  传统 PCB 自动布线多基于 Manhattan 矩形网格，而六边形网格在等距性和角度多样性上更具优势。该项目展示了非正交布线拓扑的潜力，对高密度互连、RF 走线和异形板设计具有启发意义，值得 EDA 工具链开发者关注。

- **Nokia 3310 Game Jam 把经典机型玩到 N 阶** — [原文](https://hackaday.com/2026/10/11/taking-a-nokia-3310-game-jam-to-the-nth-degree/)
  围绕 Nokia 3310（ARM7 内核、84×48 单色屏）的 Game Jam 体现了嵌入式限制艺术（demoscene / bit-banging）的持续活力。这类项目对学习低资源 MCU 编程、显示驱动和输入处理是绝佳的练手场。

- **Arduino 官方博客：从 GIGA R1 移植气象站到 UNO R4** — [原文](https://blog.arduino.cc/2026/10/09/porting-a-weather-station-app-from-the-arduino-giga-r1-to-the-arduino-uno-r4-boards/)
  Arduino 给出从高性能板（GIGA R1，Renesas RA6M5）到主流板（UNO R4，Renesas RA4M1）的迁移范例，涉及外设抽象、内存优化与外设重映射，对实际产品从原型到量产的降本路径具有直接参考价值。

- **1980 年代神秘开关电容滤波 IC 拆解** — [原文](https://hackaday.com/2026/10/11/inside-a-mystery-1980s-filter-ic-featuring-switched-capacitors/)
  对未标识的老 IC 进行逆向工程与功能复现，本身就是硬件考古的典范。这类工作有助于理解经典模拟/混合信号设计思路，对教学与芯片替代方案研究都有价值。

---

## 3. 研究前沿

> ⚠️ **今日 cs.AR（硬件架构）无新增论文**，本节暂缺。明日/后续将恢复更新。

---

## 4. 重点项目

> ⚠️ **今日活跃 GitHub 仓库数据为空**（最近 7 天无符合筛选条件的推送）。以下为近期嵌入式领域持续关注的开源项目清单（基于往期日报沉淀，非今日新增），供持续追踪：

### 🔌 微控制器与开发板
- **arduino/Arduino** — Arduino 官方核心库与板级定义，嵌入式入门的事实标准。
- **esphome/esphome** — ESP32/ESP8266 物联网固件框架，简化 Home Assistant 集成。
- **platformio/platformio** — 跨平台嵌入式开发工具链，支持数百种开发板。

### 📟 固件与 RTOS
- **zephyrproject-rtos/zephyr** — Linux 基金会托管的 RTOS，针对资源受限设备。
- **FreeRTOS/FreeRTOS-Kernel** — 业界主流 RTOS 内核，AWS 维护版本用于物联网。

### 🛠️ 工具与工具链
- **openocd-org/openocd** — 开源片上调试器，支持 ARM/RISC-V 等众多架构。
- **raspberrypi/pico-sdk** — Raspberry Pi Pico（RP2040）官方 SDK 与示例。
- **cli/cli** — GitHub 官方命令行工具，虽非嵌入式，但代表 GitOps 在嵌入式中的延伸。

### 🌐 IoT 与连接
- **eclipse-mosquitto/mosquitto** — Eclipse 基金会维护的 MQTT broker，IoT 消息中枢。
- **mongoose-os/mongoose** — 嵌入式网络协议栈，支持 MQTT/HTTP/WebSocket。

### 🤖 机器人与无人机
- **PX4/PX4-Autopilot** — 开源无人机飞控，行业标杆。
- **ArduPilot/ardupilot** — 涵盖无人机、无人车、无人船的开源自动驾驶仪。

### 🎨 PCB 设计与硬件
- **KiCad/kicad-source-mirror** — 开源 EDA 工具套件，自带原理图、PCB、3D 查看器。
- **adafruit/Adafruit_Learning_System_GFX** — 图形库与教学资源集合。

> 建议读者关注 [GitHub Trending](https://github.com/trending?since=weekly) 与各项目 release 页以获取最新动态。

---

## 5. 生态趋势信号

今日新闻反映出几条值得追踪的信号：**其一，经典嵌入式平台正在加速退出历史舞台**——Littelfuse 退役 eZ80 是其中最新一例，提醒开发者在选型与维护长生命周期产品时，需要把"芯片停产/停产通知（PCN/EOL）"纳入风险评估；**其二，复古计算与硬件考古社区依然活跃**，从 Nokia 3310 Game Jam 到 1980 年代滤波 IC 拆解，说明对老硬件的逆向、再创作仍是嵌入式文化的重要组成；**其三，PCB 设计工具正在尝试新算法**——六边形网格自动布线器的探索，预示着 EDA 工具可能从单纯增加功能转向引入更丰富的几何拓扑；**其四，Arduino 官方在推动跨硬件抽象**——GIGA R1 → UNO R4 的实战案例，体现官方在引导用户建立"可移植代码"意识。

---

## 6. 值得关注

- **eZ80 退役事件的连锁影响**：建议对使用 Z80/eZ80 的存量项目进行清点，评估替代方案（如 Z180、现代 Cortex-M0/M3 或 RISC-V 替代品），尤其在工业与教育领域。链接：[原文](https://hackaday.com/2026/10/11/littelfuse-announces-retirement-of-the-ez80/)

- **六边形网格自动布线器的开源化进展**：该项目如果开源或被集成到主流 EDA（KiCad、EasyEDA 等），将对 PCB 工作流产生显著影响。链接：[原文](https://hackaday.com/2026/10/11/improving-an-autorouter-with-a-hexagonal-grid/)

- **Arduino 跨平台迁移案例**：作为官方权威迁移指南，建议开发者收藏其代码精简与外设适配策略，对任何资源受限 MCU 项目都有参考价值。链接：[原文](https://blog.arduino.cc/2026/10/09/porting-a-weather-station-app-from-the-arduino-giga-r1-to-the-arduino-uno-r4-boards/)

---

*日报基于 27 条行业新闻、0 篇 cs.AR 论文、0 个活跃 GitHub 仓库素材生成。*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*