# CAD/机械结构开源动态日报 2026-07-07

> 数据来源: GitHub Search API (CAD, FreeCAD, 3D-printing, generative-design 等话题) | 共 96 个仓库 | 生成时间: 2026-07-07 10:14 UTC

---

好的，作为CAD与机械设计领域分析师，以下是根据您提供的仓库列表生成的《CAD/机械结构开源动态日报》。

---

### CAD/机械结构开源动态日报 (2024-05-24)

#### 1. 今日速览

今日开源CAD领域最显著的趋势是**AI与CAD的深度融合**。一方面，专注于FreeCAD的AI助手(ghbalf/freecad-ai)和MCP服务器(neka-nat/freecad-mcp)项目活跃度极高，预示着自然语言驱动建模正逐步走向实用。另一方面，基于大语言模型的“文本转CAD”工具(earthtojake/text-to-cad)和AI原生CAX工作台(cad-cae-copilot)标志着设计自动化进入新阶段。此外，针对3D打印的AI闭环控制系统(JarvisNano)虽然小众，但展示了从设计到制造全流程智能化的潜力。传统强项如Web端CAD查看器(f3d-app/f3d, Share)和纯几何内核开发(CADability, cadcore)依然保持稳定的技术演进。

#### 2. 重点项目

##### 🖥️ CAD 平台与编辑器

*   **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** ⭐31,960
    *   开源参数化3D建模器的官方源码，是社区生态的核心，其插件（工作台）生态直接影响着机械设计、建筑和电气领域的应用广度。

*   **[openscad/openscad](https://github.com/openscad/openscad)** ⭐9,703
    *   程序员式3D CAD建模器。对于需要精确、脚本化、版本可控的机械零件设计至关重要，特别是对于生成参数化设计库。

*   **[f3d-app/f3d](https://github.com/f3d-app/f3d)** ⭐4,523
    *   快速且极简的3D模型查看器。对机械设计师意味着可以快速预览STEP、IGES等工程文件而无需打开庞大的CAD软件，极大提升审阅效率。

*   **[jupytercad/JupyterCAD](https://github.com/jupytercad/JupyterCAD)** ⭐229
    *   JupyterLab的协作3D几何建模扩展。将CAD设计与数据科学工作流结合，适合需要协同设计并进行仿真分析的团队。

##### 📐 计算几何与内核

*   **[CGAL/cgal](https://github.com/CGAL/cgal)** ⭐5,969
    *   **计算几何算法库**。这是许多高级CAD算法（如布尔运算、网格生成、碰撞检测）的基石，对开发可靠、高性能的几何处理工具必不可少。

*   **[fougue/mayo](https://github.com/fougue/mayo)** ⭐2,092
    *   基于Qt和OpenCascade的3D CAD查看器和转换器。对于需要处理异构CAD数据格式（STEP, IGES, BREP）的工程团队，它是个高效可靠的互操作工具。

*   **[YATSKOVSKYI/cadcore](https://github.com/YATSKOVSKYI/cadcore)** ⭐27
    *   纯Rust编写的CAD几何内核。作为OCCT的潜在替代方案，其性能和安全特性对下一代Web和嵌入式CAD应用意义重大。

##### 🧬 创成式与参数化设计

*   **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** ⭐7,760
    *   一个用于CAD、机器人和硬件设计的智能体技能集合。它展示了如何利用LLM能力实现从自然语言到几何模型的转化，是“AI辅助设计”概念的具体实现。

*   **[armpro24-blip/cad-cae-copilot](https://github.com/armpro24-blip/cad-cae-copilot)** ⭐36
    *   一个AI原生的CAD/CAE/CAX工作台。提供“文本转CAD”、“文本转CAE”功能，并带有可编辑参数和确定性评估，是构建未来AI设计助手蓝图。

*   **[ghbalf/freecad-ai](https://github.com/ghbalf/freecad-ai)** ⭐359
    *   FreeCAD的AI助手工作台。它直接为最流行的开源CAD平台提供了自然语言生成3D模型的能力，其实际效果将极大影响AI在CAD社区的普及。

##### 🖨️ 3D 打印与制造

*   **[Sienci-Labs/gsender](https://github.com/Sienci-Labs/gsender)** ⭐355
    *   连接和控制grbl/grblHAL这类CNC的软件。对DIY数控机床和桌面级CNC用户至关重要，是连接数字设计和物理制造的桥梁。

*   **[codeofaxel/Kiln](https://github.com/codeofaxel/Kiln)** ⭐31
    *   一个用于3D打印的开源MCP服务器。AI智能体可以通过它直接完成设计、切片并发送到打印机，简化了从创意到实物的自动化流程。

##### 🔗 文件格式与互操作

*   **[bldrs-ai/Share](https://github.com/bldrs-ai/Share)** ⭐177
    *   基于浏览器的BIM和CAD查看器及协作平台。支持IFC、STEP、STL等核心格式，无需安装任何软件即可实现跨团队、跨平台的设计评审。

##### 🐍 Code-CAD 与脚本化

*   **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** ⭐5,423
    *   Python参数化CAD脚本框架。它在机械设计中已广泛应用，其核心价值在于能用代码精确、可复用、可测试地定义复杂几何形状。

*   **[metaember/loupe](https://github.com/metaember/loupe)** ⭐0
    *   一个针对3D打印的代码-CAD审阅流水线。它集成了渲染、验证、预览和切片功能，为代码化设计提供了完整的“编译-检查-运行”工作流，对工程师来说是极佳的自动化工具。

#### 3. 生态趋势信号

本周的仓库列表清晰地揭示了CAD开源的几个核心趋势：**1) AI 的全面渗透**: 不仅限于“文本转CAD”等前端交互，更深入到工作台插件(freecad-ai)和MCP协议服务器(freecad-mcp)等基础设施层面，AI正在被模块化地集成到CAD工作流中。**2) 互操作与Web化**: 基于浏览器的3D查看和协作工具(F3D, Share)日趋成熟，它们作为“轻量级”前端，能处理STEP、IFC等复杂格式，预示着“云端审阅、本地设计”的模式。**3) 新语言的挑战**: 使用Rust (cadcore, occt-wasm)和C# (CADability)开发全新几何内核的项目增多，它们旨在解决传统C++核心在安全、Web部署和易用性上的痛点，有望重塑下一代CAD工具栈。**4) 设计制造一体化**: 出现了将设计(Code-CAD)与制造(切片、G-code控制)无缝衔接的工具链(Kiln, loupe)，朝着“一键从代码到实物”的目标迈进。

#### 4. 值得关注

*   **[neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp)** ⭐1,253
    *   **理由**: MCP服务器是当前AI与工具交互的最前沿标准。该项目为FreeCAD提供MCP接口，意味着任何支持MCP的AI客户端（如Claude、Copilot）都可以直接与FreeCAD交互，这可能是开启FreeCAD生态爆发式增长的钥匙。值得跟踪其API成熟度和社区采用情况。

*   **[ghbalf/freecad-ai](https://github.com/ghbalf/freecad-ai)** ⭐359
    *   **理由**: 作为FreeCAD的AI助手，它直接将最热门的AI能力注入到最大体量的开源CAD平台中。其“自然语言生成模型”的能力若达到可用水平，将极大降低CAD学习门槛，并改变专业设计师的交互范式。它的每一次更新都值得关注。

*   **[YATSKOVSKYI/cadcore](https://github.com/YATSKOVSKYI/cadcore)** ⭐27
    *   **理由**: 纯Rust几何内核是一个高风险、高回报的前沿项目。它完全摆脱了OpenCASCADE的束缚，旨在提供更现代、安全、高性能的API。若它能成功验证其核心算法（如布尔运算、STEP导出）的稳定性和效率，将向世界证明Rust完全可以胜任核心工业软件的任务，潜力巨大。