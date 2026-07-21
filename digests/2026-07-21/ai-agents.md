# OpenClaw 生态日报 2026-07-21

> Issues: 354 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-21 02:04 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告



---

## 横向生态对比

# 2026-07-21 AI 智能体与个人 AI 助手开源生态横向对比分析

---

## 1. 生态全景

当前 AI 智能体与个人 AI 助手开源生态呈现**"高速迭代 + 安全债集中暴露 + 多 Agent 架构酝酿"**的复合态势：Hermes Agent v0.19.0（Quicksilver）与 IronClaw 1.0.0-rc.1 同步进入发布窗口，CoPaw、ZeroClaw、NanoClaw 维持高位 PR 流转（均 ≥ 20），而 TinyClaw、Moltis、ZeptoClaw、NullClaw 已进入静默期。社区共识正从"功能广度"转向"架构收敛 + 评测体系 + 安全硬化"，多 Agent 协作、跨平台会话桥接、A2A 协议互通成为下一阶段竞争焦点。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PRs 更新 | 今日 Release | 健康度 | 阶段定位 |
|------|------------|---------|--------------|--------|---------|
| **OpenClaw**（参照） | — | — | — | — | 核心参照基线 |
| **Hermes Agent** | 50（43 活跃/7 关闭） | 50（42 待合并/8 合并） | ✅ v0.19.0 重大版本 | ⭐⭐⭐ | 大版本发布 + 回归排查 |
| **IronClaw** | 43（40 活跃/3 关闭） | 50（22 待合并/28 合并） | 🚧 1.0.0-rc.1 待发 | ⭐⭐⭐⭐ | 架构收官 + 发布冲刺 |
| **CoPaw (QwenPaw)** | 30 | 42（10 合并） | ❌ | ⭐⭐⭐ | 高速迭代，2.0 缺陷暴露 |
| **ZeroClaw** | 39 | 50（11 合并） | ❌（0.9.0 队列） | ⭐⭐⭐⭐ | 安全硬化 + 评测成熟 |
| **NanoBot** | 7 | 30（11 合并） | ❌ | ⭐⭐⭐⭐ | 基础设施加固 + 多 Agent 酝酿 |
| **NanoClaw** | 6 | 20（6 合并） | ❌ | ⭐⭐⭐⭐ | 安全硬化 + 频道扩展 |
| **LobsterAI** | 0 | 15（10 合并） | ❌ | ⭐⭐⭐ | 批量收尾，依赖积压 |
| **PicoClaw** | 11（4 关闭） | 10（5 合并） | ❌ | ⭐⭐ | 回归风险 + 高质量贡献 |
| **NullClaw** | 0 | 1（Dependabot） | ❌ | ⭐⭐ | 维护性静默，依赖积压 |
| **TinyClaw** | 0 | 0 | ❌ | ⭐ | 停滞 |
| **Moltis** | 0 | 0 | ❌ | ⭐ | 停滞 |
| **ZeptoClaw** | 0 | 0 | ❌ | ⭐ | 停滞 |

**数据洞察**：13 个项目中仅 8 个有实质性开发活动；PR/Issue 流入比显示 Hermes、IronClaw、CoPaw 进入"高负荷 review"窗口，需关注合并吞吐。

---

## 3. OpenClaw 在生态中的定位

⚠️ **说明**：今日数据中 OpenClaw（核心参照项目）未提供具体动态摘要。基于其他 12 个项目的横向对比，可作如下推断式定位：

- **规模参照**：从 Hermes Agent v0.19.0 合并 PR ~1,065、IronClaw 1.0 RC 涉及 28 个 PR、CoPaw 单日 42 个 PR 等数据看，头部项目的合并吞吐已稳定在日均 10–20 量级。OpenClaw 作为"核心参照"，其工程体量与生态辐射面应在 Hermes/IronClaw 同一量级。
- **技术路线差异**：
  - vs. **Hermes Agent**：Hermes 走"Plugin 平台 + 多 surface 桥接"路线（#4335 跨平台会话、#68322 plugin protocol）；OpenClaw 的 OpenClaw prompt 协议（被 LobsterAI 引用）更偏向"标准化上下文传递"。
  - vs. **IronClaw**：IronClaw 是 Rust 原生 + Tier-B 重构 + Workspace 重新设计（#6324）；OpenClaw 倾向多语言/多场景适配。
  - vs. **ZeroClaw**：ZeroClaw 强调"A2A 协议互通 + 持久化记忆 + Eval harness"，与 OpenClaw 的"轻量集成"路线形成互补。
- **社区规模**：450+ 贡献者（Hermes v0.19.0 节点）已是开源智能体项目头部量级；OpenClaw 的实际贡献者规模需根据其历史数据评估，但从被 LobsterAI、ZeroClaw 等多个项目引用来看，处于"事实标准"位置。
- **差异化护城河**：跨项目被引用作为 prompt 上下文协议（见 LobsterAI #2366），这是 OpenClaw 最显著的生态位优势——其他项目多在构建"自有协议"，而 OpenClaw 已成为"互通层"。

---

## 4. 共同关注的技术方向

### 🔥 方向一：多 Agent 协作架构
| 项目 | 诉求 | 信号强度 |
|------|------|---------|
| NanoBot | [#5000](https://github.com/HKUDS/nanobot/issues/5000) 真正多 Agent 系统 vs 后台任务委托 | 🔥🔥🔥（turn 生命周期重构 #4993 已合入铺垫） |
| Hermes Agent | [#4335](https://github.com/nousresearch/hermes-agent/issues/4335) 跨平台会话桥接（CLI ↔ Telegram）+ [#68301](https://github.com/nousresearch/hermes-agent/issues/68301) | 🔥🔥🔥（已被维护者标记 canonical） |
| CoPaw | [#4873](https://github.com/agentscope-ai/QwenPaw/issues/4873) 多 subagent 并发调度缺陷 | 🔥🔥（暴露飞书侧不可中断问题） |

**共识**：从"任务委派"走向"持久身份 + 共享状态 + Agent 间通信"。

### 🔥 方向二：本地模型性能优化（Ollama/小显存场景）
| 项目 | 诉求 | 信号强度 |
|------|------|---------|
| NanoBot | [#4867](https://github.com/HKUDS/nanobot/issues/4867) 32GB 显存每轮多 60s | 🔥🔥🔥（15 评论，单日最高讨论度） |
| PicoClaw | [#3230](https://github.com/sipeed/picoclaw/issues/3230) Gemini thought_signature 兼容 | 🔥🔥（多 Provider 兼容暗病） |

**共识**：OpenAI 兼容协议 ≠ 原生协议优化，社区呼唤"Provider-aware prompt 调度"。

### 🔥 方向三：插件/扩展协议标准化
| 项目 | 诉求 | 信号强度 |
|------|------|---------|
| Hermes Agent | [#64900](https://github.com/nousresearch/hermes-agent/issues/64900) + [#68322](https://github.com/nousresearch/hermes-agent/pull/68322) + [#64231](https://github.com/nousresearch/hermes-agent/issues/64231) 三 Issue 联动 | 🔥🔥🔥（正在收敛） |
| IronClaw | [#6320](https://github.com/nearai/ironclaw/issues/6320) IronHub 扩展 + [#6325](https://github.com/nearai/ironclaw/issues/6325) 线程级 MCP 会话 | 🔥🔥🔥 |
| NanoBot | [#5006](https://github.com/HKUDS/nanobot/pull/5006) 渠道 Tool Gateway 协议（opt-in） | 🔥🔥（闭环 #4911） |

**共识**：插件协议从"随意 hook"走向"声明式能力 + 显式授权"。

### 🔥 方向四：安全硬化
| 项目 | 诉求 | 信号强度 |
|------|------|---------|
| NanoClaw | [#3097](https://github.com/nanocoai/nanoclaw/issues/3097)–[#3100](https://github.com/nanocoai/nanoclaw/issues/3100) RBAC/审批 4 项设计性缺陷 | 🔥🔥🔥（k-fls 单日 4 Issue + 4 PR） |
| NanoBot | [#4803](https://github.com/HKUDS/nanobot/issues/4803) API Key 明文存储 | 🔥🔥（P1 安全议题，13 天未修） |
| IronClaw | [#6348](https://github.com/nearai/ironclaw/issues/6348) Gmail 重装跳过 OAuth | 🔥🔥🔥（P1，下一 RC 前必修） |
| ZeroClaw | [#9206](https://github.com/zeroclaw-labs/zeroclaw/issues/9206) Cron workspace 路径回退到 `/`（S0） | 🔥🔥🔥（无 PR，24h 内 hotfix） |
| PicoClaw | [#3278](https://github.com/sipeed/picoclaw/issues/3278) Antigravity OAuth 被 Google 拒绝 | 🔥🔥（外部政策依赖） |

**共识**：从"功能可用"走向"权限最小化 + 凭据保护 + 审批可追溯"。

### 🔥 方向五：跨表面（Surface）会话连续性
| 项目 | 诉求 |
|------|------|
| Hermes Agent | [#4335](https://github.com/nousresearch/hermes-agent/issues/4335) Desktop ↔ Telegram 桥接 |
| IronClaw | [#6325](https://github.com/nearai/ironclaw/issues/6325) 线程级 MCP 会话 |
| ZeroClaw | [#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891) 持久化记忆跟踪器 |

### 🔥 方向六：评估/测试基础设施
| 项目 | 诉求 |
|------|------|
| ZeroClaw | [#7065](https://github.com/zeroclaw-labs/zeroclaw/issues/7065) + #9223/#9227/#9228（eval harness + 趋势仪表板 + LLM-judge 校准） |
| Hermes | v0.19.0 sdist 缺 conftest.py 暴露的 #68311（打包测试事故） |

### 🔥 方向七：亚洲市场本地化
| 项目 | 诉求 |
|------|------|
| NanoClaw | [#3096](https://github.com/nanocoai/nanoclaw/issues/3096) + [#2918](https://github.com/nanocoai/nanoclaw/pull/2918) LINE 适配器（日/台/泰） |
| PicoClaw | [#3273](https://github.com/sipeed/picoclaw/pull/3273) 日文 i18n（968 行完整翻译） |
| PicoClaw | [#3270](https://github.com/sipeed/picoclaw/pull/3270) DashScope TTS + 微信音频 |
| NanoClaw | [#2950](https://github.com/nanocoai/nanoclaw/pull/2950) 繁体中文 README |

---

## 5. 差异化定位分析

| 维度 | Hermes Agent | IronClaw | CoPaw | ZeroClaw | NanoBot | NanoClaw | PicoClaw | LobsterAI |
|------|---|---|---|---|---|---|---|---|
| **核心定位** | 多 surface Agent 平台 | 1.0 重写 + Workspace | AgentScope 2.0 适配 | A2A + Eval + 持久记忆 | 多 Agent 协作 + 多渠道 | 安全优先 + RBAC | 轻量自托管 | 桌面端企业协作 |
| **目标用户** | 高级用户/开发者 | 企业 + 终端开发者 | 国内 Qwen 生态用户 | 平台集成方 + 评测工程师 | 多渠道聊天机器人运营者 | 团队/企业（审批流） | 极客自托管 | 企业桌面用户 |
| **技术架构** | Python + Plugin 总线 | Rust Tier-B 模块化 | Python + AgentScope | Rust 工具链 + Eval harness | Python + Provider 适配层 | Node + CLI 审批 | Rust 单体 + MCP | Electron + 浏览器协作 |
| **亮点能力** | 450+ 贡献者、Plugin 平台 | Reborn 架构、1.0 RC | PawApp SDK、ReAct 重构 | A2A 协议、SOP 控制平面 | Ollama 优化、Dokploy/Render 部署 | RBAC 矩阵、CalDAV MCP | i18n 完整、Antigravity 支持 | Cowork 多注释、Windows 静默更新 |
| **当前瓶颈** | Plugin handler 回归（#68318） | Gmail OAuth 跳授权（#6348） | doom loop、多 subagent 失控 | Cron workspace S0（#9206） | Ollama 性能、API Key 明文 | WhatsApp 升级静默失败 | antigravity 三连 P0 | 4 个 React 19/electron 升级 PR 积压 3.5 月 |

---

## 6. 社区热度与成熟度分层

### 🔥 第一梯队：高速迭代 + 重大发布
- **Hermes Agent**：v0.19.0 单版本 ~2,245 commits、~300K 新增行、3,300 关闭 Issue，处于"功能爆发 + 兼容性债"窗口，**未来 72 小时 regression 风险持续走高**。
- **IronClaw**：1.0 RC 收尾，v1 legacy monolith 已物理删除（#6375），但 Bug Bash 集中暴露 8+ P1/P2，发布与稳定性博弈激烈。
- **CoPaw (QwenPaw)**：30 Issues / 42 PRs 净增长为正，2.0.x 在生产环境的缺陷明显增加，"功能扩张 vs 稳定性"失衡。

### 🟠 第二梯队：质量巩固 + 路线图推进
- **ZeroClaw**：从"特性扩张"过渡到"安全硬化 + 评测体系成熟 + 0.9.0 收口"，本日更多是缺陷收敛（11 PR 合并覆盖历史静默截断、串口去同步等）。
- **NanoBot**：基础设施加固 + 渠道稳定性 + 部署易用性三主线，无新版本但节奏健康。
- **NanoClaw**：安全债正在被主动清理（k-fls 4 Issue + 4 PR），社区健康度 B+。

### 🟡 第三梯队：批量收尾 / 局部活跃
- **LobsterAI**：典型批量收尾日，10/15 PR 当日合并，依赖升级积压（React 19、electron 43）成为主要瓶颈。
- **PicoClaw**：单日高质量社区贡献（honbou 4 Issue + 1 PR），但同日爆出 antigravity 三连 P0 回归，维护响应滞后于社区产出速度。

### ⚫ 第四梯队：静默/停滞
- **NullClaw**：仅 1 个 36 天前的 Dependabot PR，社区完全失声。
- **TinyClaw / Moltis / ZeptoClaw**：零活动，需关注项目存续状态。

**关键结论**：生态呈"哑铃型"——头部 3 个项目（Hermes/IronClaw/CoPaw）占据绝大多数开发活动，第二梯队（ZeroClaw/NanoBot/NanoClaw）保持健康节奏，腰部以下（LobsterAI/PicoClaw）与停滞区（NullClaw/TinyClaw/Moltis/ZeptoClaw）出现断层。

---

## 7. 值得关注的趋势信号

### 📈 趋势一：从"功能广度竞赛"转向"架构收敛 + 评测闭环"
**信号**：Hermes v0.19.0

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报

**报告日期：** 2026-07-21
**数据来源：** [HKUDS/nanobot](https://github.com/HKUDS/nanobot) GitHub 仓库

---

## 1. 今日速览

NanoBot 今日呈现**高活跃度**的开发态势：过去 24 小时共触发 30 次 PR 更新和 7 次 Issue 更新，PR 流入/合并比为 19:11，说明仓库对外部贡献的吸纳效率较高。议题与 PR 集中在三个方向——**多 Agent 协作架构演进**、**多渠道（Feishu/Telegram/QQ）稳定性与功能增强**、**一键部署生态扩展（Dokploy/Render）**。无新版本发布，但有 6 个 P1 级修复处于待合并状态，安全相关的明文 API Key 议题和 Ollama 提示缓存议题均已闭环。项目整体健康度良好，维护响应迅速。

---

## 2. 版本发布

**无新版本发布。**

虽然今日 PR 流转密集，但尚未触发版本发布动作。从近两周节奏看，PR 合并到发版之间通常存在 2-5 天的窗口期，建议关注 [Releases 页面](https://github.com/HKUDS/nanobot/releases) 的下次更新。

---

## 3. 项目进展

今日**已合并/关闭 11 个 PR**，体现项目在以下方向取得实质推进：

| 主题 | PR | 关键价值 |
|------|------|----------|
| **Agent 核心重构** | [#4993](https://github.com/HKUDS/nanobot/pull/4993) | 统一内部 turn 生命周期，消除 `_process_system_message` 重复逻辑，为后续多 Agent 协作铺路 |
| **多模态 Provider 修复** | [#5008](https://github.com/HKUDS/nanobot/pull/5008) | 修复 OpenAI 兼容协议的 role alternation 在多图合并时丢图问题 |
| **渠道稳定性** | [#4768](https://github.com/HKUDS/nanobot/pull/4768)、[#4981](https://github.com/HKUDS/nanobot/pull/4981)、[#4982](https://github.com/HKUDS/nanobot/pull/4982) | QQ 渠道指数退避、Telegram/Feishu 渠道 split 函数无限循环 bug |
| **一键部署** | [#4937](https://github.com/HKUDS/nanobot/pull/4937) | 新增 Render 一键部署模板（非技术人员自助部署能力增强）|
| **文档** | [#4998](https://github.com/HKUDS/nanobot/pull/4998) | 补充 Ollama 工具提示缓存诊断指南，闭环 [#4867](https://github.com/HKUDS/nanobot/issues/4867) |

**整体评估：** 项目在"基础设施加固 + 渠道稳定性 + 部署易用性"三条主线上稳步推进，为下一轮多 Agent 架构升级奠定基础。

---

## 4. 社区热点

按评论数与讨论热度排序：

| 排名 | 议题/ PR | 讨论度 | 核心诉求 |
|------|----------|--------|----------|
| 🥇 | [#4867](https://github.com/HKUDS/nanobot/issues/4867) - Ollama 提示前缀缓存 | **15 条评论** | 用户在 32GB 显存本地部署时，每轮增加 60 秒延迟的"完全不可用"痛点，催生精确前缀保留诉求 |
| 🥈 | [#4864](https://github.com/HKUDS/nanobot/issues/4864) - complete_goal 工具死循环 | **4 条评论 / 1 👍** | 反映网关工具参数序列化回归 bug，触达生产用户 |
| 🥉 | [#4988](https://github.com/HKUDS/nanobot/pull/4988) - 后台 turn 空响应静默化 | P1 修复 | 涉及 cron/local trigger 在模型空输出时不当展示"重试"占位符的 UX 问题 |
| 4 | [#5000](https://github.com/HKUDS/nanobot/issues/5000) / [#4999](https://github.com/HKUDS/nanobot/issues/4999) - 多 Agent 协作架构提案 | 新提案 | 反映用户对"真正多 Agent 系统 vs 后台任务委托"的期待分歧 |
| 5 | [#4803](https://github.com/HKUDS/nanobot/issues/4803) - API Key 明文存储 | 安全议题 | 涉及 `ProviderConfig.api_key` 字段序列化策略，需 `exclude=True` |

**诉求分析：** 社区当前最强烈的声音集中在两点——**本地模型性能优化**（Ollama 缓存）和**架构层演进**（多 Agent 协作）。安全相关的 API Key 议题虽关注度低，但严重程度高。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | 编号 | 描述 | 是否有 Fix PR |
|--------|------|------|---------------|
| 🔴 P1 / 安全 | [#4803](https://github.com/HKUDS/nanobot/issues/4803) | API Key 明文存储在 `~/.nanobot/config.json`，`repr=False` 但未 `exclude=True` | ❌ 无，但有 [#5010](https://github.com/HKUDS/nanobot/pull/5010) 文档层应对 |
| 🔴 P1 / 回归 | [#4864](https://github.com/HKUDS/nanobot/issues/4864) | `complete_goal` 工具因网关参数序列化变更陷入死循环 | ❌ 无明确 Fix PR |
| 🟠 P1 / 性能 | [#4867](https://github.com/HKUDS/nanobot/issues/4867) | Ollama 每次 turn 多 60 秒（已 CLOSED） | ✅ 通过 [#4998](https://github.com/HKUDS/nanobot/pull/4998) 文档修复 |
| 🟠 P1 / 稳定性 | [#5004](https://github.com/HKUDS/nanobot/pull/5004) | 共享文件系统下目录 fsync 返回 `EINVAL` | ✅ PR 待合并 |
| 🟡 P2 | [#4767](https://github.com/HKUDS/nanobot/issues/4767) | QQ 渠道 WS 重连无退避，刷错误日志（已 CLOSED） | ✅ [#4768](https://github.com/HKUDS/nanobot/pull/4768) |
| 🟡 P2 | 已合并 | Feishu/Telegram split 函数无限循环（`max_len <= 0`） | ✅ [#4981](https://github.com/HKUDS/nanobot/pull/4981), [#4982](https://github.com/HKUDS/nanobot/pull/4982) |

**观察：** 4 个 P1 修复 PR 仍处于 OPEN 状态（[#4988](https://github.com/HKUDS/nanobot/pull/4988)、[#4945](https://github.com/HKUDS/nanobot/pull/4945)、[#5006](https://github.com/HKUDS/nanobot/pull/5006)、[#4954](https://github.com/HKUDS/nanobot/pull/4954)），合并速度需关注。

---

## 6. 功能请求与路线图信号

**1. 多 Agent 协作架构演进** — [#5000](https://github.com/HKUDS/nanobot/issues/5000)
提案指出当前 subagent 实质为"后台任务委托"，缺乏持久身份、共享任务状态和 Agent 间通信。鉴于 [#4993](https://github.com/HKUDS/nanobot/pull/4993) 已合并 turn 生命周期重构，该提案**极可能成为下个版本的核心路线图**。

**2. Dokploy 一键部署** — [#1503](https://github.com/HKUDS/nanobot/issues/1503) → [#5007](https://github.com/HKUDS/nanobot/pull/5007)
已有 PR 提交，**预计将很快纳入**，与 Render 模板形成"非技术用户部署"双轨。

**3. Feishu 群聊 `listen` 模式** — [#5009](https://github.com/HKUDS/nanobot/pull/5009)
允许群聊上下文累积但仅在 @mention 时回复，符合企业场景的"低噪声监听"需求。

**4. Telegram 自托管 Bot API** — [#4919](https://github.com/HKUDS/nanobot/pull/4919)
响应 #4702 的企业自托管/合规网关需求，处于待合并状态。

**5. 渠道 Tool Gateway 协议** — [#5006](https://github.com/HKUDS/nanobot/pull/5006)
引入 opt-in `ToolGateway` 协议，让渠道插件可声明是否需要工具调用能力，闭环 #4911。**架构层面意义较大**。

---

## 7. 用户反馈摘要

| 来源 | 痛点/反馈 |
|------|----------|
| [#4867](https://github.com/HKUDS/nanobot/issues/4867) | **"Ollama 32GB 显存下完全不可用"** — 用户对本地模型部署有强烈诉求，提示前缀不稳定导致每轮多 60 秒 |
| [#4867](https://github.com/HKUDS/nanobot/issues/4867) | 同一 Ollama 模型通过 OpenAI 兼容协议"运行流畅"，对比突显原生协议 prompt 设计的不足 |
| [#4864](https://github.com/HKUDS/nanobot/issues/4864) | 工具参数从 JSON 对象被解析为"裸字符串"，用户对**网关回归**敏感且具体 |
| [#4803](https://github.com/HKUDS/nanobot/issues/4803) | 安全细节披露精准（`repr=False` vs `exclude=True`），用户具备 Pydantic 内部知识 |
| [#1503](https://github.com/HKUDS/nanobot/issues/1503) | "非技术用户希望更快安装"，反映**部署体验仍是入门门槛** |
| [#5000](https://github.com/HKUDS/nanobot/issues/5000) | 期待"真正多 Agent 系统"而非"任务委派"，反映**架构愿景与现实的落差** |

**整体满意度信号：** 用户的吐槽集中在**性能（Ollama）、稳定性（渠道 split 死循环）、安全（明文 Key）** 三类硬伤，对功能广度的满意度较高（多渠道、一键部署等扩展能力强）。

---

## 8. 待处理积压

**⚠️ 需维护者重点关注：**

1. **[#4803](https://github.com/HKUDS/nanobot/issues/4803) - API Key 明文存储** *(2026-07-06 创建)*
安全议题优先级应高于功能 PR，建议纳入下个 patch 版本。

2. **[#4864](https://github.com/HKUDS/nanobot/issues/4864) - complete_goal 死循环** *(2026-07-09 创建)*
已 12 天无明确 Fix PR 关联，属生产可用性问题。

3. **[#4945](https://github.com/HKUDS/nanobot/pull/4945) - AGENTS.md 作用域与默认 prompt 精简** *(2026-07-15 创建)*
P1 性能与安全相关 PR，跨多个子系统，复杂度高，需维护者深度 review。

4. **[#4928](https://github.com/HKUDS/nanobot/pull/4928) - unified session 路由** *(2026-07-14 创建)*
P1 + conflict 标记，合并冲突可能阻碍后续 WebUI 修复（[#4954](https://github.com/HKUDS/nanobot/pull/4954) 依赖相关改动）。

5. **[#1503](https://github.com/HKUDS/nanobot/issues/1503) - Dokploy 模板** *(2026-03-04 创建)*
已 4 个多月，目前 [#5007](https://github.com/HKUDS/nanobot/pull/5007) 已提交，建议加速 review。

6. **P1 待合并 PR 积压：** 至少 6 个 P1 修复（[#4988](https://github.com/HKUDS/nanobot/pull/4988)、[#4945](https://github.com/HKUDS/nanobot/pull/4945)、[#5006](https://github.com/HKUDS/nanobot/pull/5006)、[#4954](https://github.com/HKUDS/nanobot/pull/4954)、[#4992](https://github.com/HKUDS/nanobot/pull/4992)、[#5005](https://github.com/HKUDS/nanobot/pull/5005)）处于 OPEN，建议批量 review。

---

## 附录：今日数据快照

- 📊 Issues 更新：7（4 活跃 / 3 已关闭）
- 📊 PRs 更新：30（19 待合并 / 11 已合并或关闭）
- 🏷️ P1 优先级待合并 PR：≥ 6
- 🔒 公开安全议题：1（[#4803](https://github.com/HKUDS/nanobot/issues/4803)）
- 🚀 新版本发布：0
- 💬 最高讨论度：15 条评论（[#4867](https://github.com/HKUDS/nanobot/issues/4867)）

---

*报告生成时间：2026-07-21 | 数据口径：GitHub 过去 24 小时活动*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报

**报告日期**: 2026-07-21
**数据来源**: github.com/nousresearch/hermes-agent
**分析维度**: Issues / PRs / Releases / 社区动态

---

## 一、今日速览

Hermes Agent 今日发布 v0.19.0「Quicksilver Release」重大版本，是过去 6 周以来的首次稳定版迭代。过去 24 小时内仓库整体活跃度处于**较高水位**：50 条 Issues 更新（43 新开/活跃，7 关闭）与 50 条 PRs 更新（42 待合并，8 已合并/关闭）同步推进，反映出新版发布引发的回归排查与集中合入高峰。从待办积压看，超过 25 个 Issue 已存在 3 个月以上未被关闭，社区对**会话/Profile/状态路由**、**Cron 调度**、**平台网关（Slack/Telegram/WhatsApp/BlueBubbles）** 三条主线的稳定诉求仍未被彻底消化，整体项目仍处于「快速迭代 + 兼容债」并存的状态。

---

## 二、版本发布

### 🚀 Hermes Agent v0.19.0 — The Quicksilver Release（2026-07-20）

这是自 v0.18.0 以来的首个稳定大版本，迭代跨度大、规模显著：

| 维度 | 数值 |
|---|---|
| 提交数 | ~2,245 |
| 合并 PR | ~1,065 |
| 变更文件 | ~2,465 |
| 新增行 | ~300,000 |
| 删除行 | ~36,000 |
| 已关闭 Issue | ~3,300 |
| 贡献者 | **450+**（社区贡献者首次突破 450 人） |

**关键观察**：
- **Plugin 体系重构**：v0.19.0 的插件注册总线在传播 `task_id` kwargs 时与「单参数」handler 签名不兼容（[#68318](https://github.com/nousresearch/hermes-agent/issues/68318)），多个第三方插件（`kasio-notion` 等）出现 `TypeError` 崩溃。这是发布日 0 号位回归，建议使用 plugin 的用户暂缓升级或在 fork 中打补丁。
- **测试打包事故**：每个 sdist（0.13.0–0.19.0）打包了 `tests/test_live_system_guard_self_test.py` 但**未打包 `tests/conftest.py`**，导致运行打包测试时 `os.kill(-1, SIGTERM)` 实际生效，可能杀掉用户整个会话进程组（[#68311](https://github.com/nousresearch/hermes-agent/issues/68311)，P1）。**fix PR [#68317](https://github.com/nousresearch/hermes-agent/pull/68317) 已同日提交**。
- **Desktop / TUI 会话模型变更**：v0.19.0 引入 session bridging（[#68301](https://github.com/nousresearch/hermes-agent/issues/68301)）的同时，伴随出现 sidebar arc-border 渲染越界（[#68323](https://github.com/nousresearch/hermes-agent/pull/68323)）、default profile 会话列表为空（[#67600](https://github.com/nousresearch/hermes-agent/issues/67600)）、TUI skill 凭据提示串会话（[#68261](https://github.com/nousresearch/hermes-agent/issues/68261)）等多项 UI/会话回归。

**迁移注意事项**：
1. 使用 plugin 平台的部署需检查 `register_function` 是否使用了「单参数 + kwargs」模式，建议升级前在 staging 环境跑回归。
2. Homebrew 用户在 `brew upgrade` 后若出现 `cacert.pem missing`，请按 [#29866](https://github.com/nousresearch/hermes-agent/issues/29866) 重新安装 `certifi`。
3. 不要在生产 venv 中直接 `pytest tests/test_live_system_guard_self_test.py`，等 0.19.1 hotfix 发布。

---

## 三、项目进展（已合并/关闭的重要 PR）

| PR | 标题 | 影响 | 链接 |
|---|---|---|---|
| [#54895](https://github.com/nousresearch/hermes-agent/pull/54895) | feat(webui): sidebar 显示运行时模型与 fallback 指示 | WebUI 现在能在 fallback 链触发时显示真实生成模型，关闭 [#54509](https://github.com/nousresearch/hermes-agent/issues/54509) | 已关闭 |
| [#57642](https://github.com/nousresearch/hermes-agent/pull/57642) | 检测 OpenRouter curated 模型下架 | 在 curated 目录与 live `/v1/models` 交叉对比时打印明确告警，避免静默使用失效模型 | 已关闭 |

**整体推进评估**：今日 PR 合并/关闭数量（8 条）相对过去一周平均水平偏低，主要原因是 **v0.19.0 发布当日 review 资源被新发 Issue 抢占**。从议题分布看，今日推进主要落在「**观测性增强（fallback 指示、模型下架告警）**」类，尚未触及更深的架构债（cron 401、profile session 隔离）。

---

## 四、社区热点

### 🔥 评论数最高的 Issues（Top 5）

1. **[#67600](https://github.com/nousresearch/hermes-agent/issues/67600) — Desktop sidebar 为 `default` profile 显示空（9 评论）**
   P2 bug，仅影响 `default` profile，named profiles 正常。后端已确认数据正确送达，问题在前端渲染。属于 v0.19.0 引入 session model 后的典型回归。

2. **[#4335](https://github.com/nousresearch/hermes-agent/issues/4335) — 跨平台会话上下文共享（CLI ↔ Telegram，8 评论，👍 2）**
   自 2026-03-31 开放至今已 3.7 个月仍未关闭，反映用户对**「同一用户的多端上下文连续性」**的强烈诉求。今天关闭的 [#68301](https://github.com/nousresearch/hermes-agent/issues/68301)（native session bridging，duplicate）暗示维护者将 [#4335](https://github.com/nousresearch/hermes-agent/issues/4335) 视为同一类需求的 canonical 跟踪项。

3. **[#2788](https://github.com/nousresearch/hermes-agent/issues/2788) — Cron jobs 从不执行 / 失败无信息（6 评论）**
   长期未修复的 cron 体验问题。今日相关 [#66868](https://github.com/nousresearch/hermes-agent/issues/66868)（cron 主模型 401）与 [#46511](https://github.com/nousresearch/hermes-agent/issues/46511)（cron OAuth fallback，已关闭，sweeper:implemented-on-main）显示 cron 调度线正在分批修复。

4. **[#64900](https://github.com/nousresearch/hermes-agent/issues/64900) — 插件扩展 send_message（5 评论）**
   与 [#68322](https://github.com/nousresearch/hermes-agent/pull/68322)（plugin target verbatim fallback）和 [#64231](https://github.com/nousresearch/hermes-agent/issues/64231)（lifecycle-event 目录批量整理）共同指向「**plugin 平台协议需要正式化**」的共识。

5. **[#34372](https://github.com/nousresearch/hermes-agent/issues/34372) — BlueBubbles 重复处理 iMessage（5 评论）**
   已存在 2 个月，今日 [#45317](https://github.com/nousresearch/hermes-agent/pull/45317) 仍为 OPEN。属于 v0.19.0 的已知未修复项。

### 🔥 👍 反应最高的 Issue

- **[#4256](https://github.com/nousresearch/hermes-agent/issues/4256) — 可配置 keybindings（👍 6）** 自 2026-03-31 开放，是本期反应数最高的 Issue，反映 TUI/CLI 用户对**终端复用器（tmux/screen）快捷键冲突**的强烈不满。今日无 PR 进展，仍处积压状态。

---

## 五、Bug 与稳定性

### 🔴 P1（严重，建议立即处理）

| Issue | 标题 | 是否有 fix PR | 链接 |
|---|---|---|---|
| [#68311](https://github.com/nousresearch/hermes-agent/issues/68311) | 打包 sdist 包含危险 canary 测试，缺 `conftest.py` 会真触发 `os.kill(-1, SIGTERM)` | ✅ [PR #68317](https://github.com/nousresearch/hermes-agent/pull/68317)（同日报） | 严重 |
| [#29866](https://github.com/nousresearch/hermes-agent/issues/29866) | `brew upgrade` 后 venv 缺 `cacert.pem`，飞书/Telegram/微信全挂 | ❌ | P1 |

### 🟠 P2（重要）

| Issue | 标题 | fix PR 状态 | 链接 |
|---|---|---|---|
| [#67600](https://github.com/nousresearch/hermes-agent/issues/67600) | Desktop sidebar default profile 空 | ❌ | — |
| [#2788](https://github.com/nousresearch/hermes-agent/issues/2788) | Cron 永不执行且无失败日志 | ❌ | — |
| [#3944](https://github.com/nousresearch/hermes-agent/issues/3944) | Slack 集成网关失败（slack-bolt 未安装） | ❌ | — |
| [#66868](https://github.com/nousresearch/hermes-agent/issues/66868) | Cron 主模型 401（非辅助客户端路径） | ❌ | — |
| [#68244](https://github.com/nousresearch/hermes-agent/issues/68244) | `hermes update` 选「不恢复本地改动」后 dashboard 不启动 | ❌ | — |
| [#68261](https://github.com/nousresearch/hermes-agent/issues/68261) | TUI skill 凭据提示串会话 | ❌ | — |
| [#57626](https://github.com/nousresearch/hermes-agent/issues/57626) | "Skill library update" 注入到 delegate 子会话 | ❌ | — |
| [#55369](https://github.com/nousresearch/hermes-agent/issues/55369) | Union[int,str] 工具参数吃掉前导零 | ❌ | — |
| [#55551](https://github.com/nousresearch/hermes-agent/issues/55551) | Groq STT 不传 `language`，希伯来语识别错 | ❌ | — |
| [#61573](https://github.com/nousresearch/hermes-agent/issues/61573) | Desktop 消息被投递到不相关 idle 会话 | ❌ | — |
| [#68318](https://github.com/nousresearch/hermes-agent/issues/68318) | v0.19.0 plugin handler crash（unexpected task_id） | ❌ | — |

### ✅ 今日关闭的 Bug

| Issue | 标题 | 链接 |
|---|---|---|
| [#46511](https://github.com/nousresearch/hermes-agent/issues/46511) | Cron OAuth 凭证池耗尽时不回退（sweeper:implemented-on-main） | 已修复 |
| [#67817](https://github.com/nousresearch/hermes-agent/issues/67817) | Telegram HTTPXRequest read-only（兼容性问题） | 已修复 |
| [#66611](https://github.com/nousresearch/hermes-agent/issues/66611) | Desktop "Already up to date" 浮层关闭按钮无响应 | 已修复 |
| [#67194](https://github.com/nousresearch/hermes-agent/issues/67194) | Windows Hermes App 安装失败（duplicate） | 合并到主跟踪项 |

**稳定性结论**：今日「修复 4 个、报告 11+ 个新 P1/P2」，净增 bug 7 条。考虑到 v0.19.0 发布当日的涟漪效应，**预计未来 72 小时内 regression 数量将继续走高**，建议维护者在 0.19.1 hotfix 前对 plugin 子系统、TUI/Desktop 会话路由、Cron 三条主线做集中 triage。

---

## 六、功能请求与路线图信号

### 大概率进入下个版本的强信号

| Issue / PR | 诉求 | 信号强度 |
|---|---|---|
| [#4335](https://github.com/nousresearch/hermes-agent/issues/4335) + [#68301](https://github.com/nousresearch/hermes-agent/issues/68301) | 跨表面会话桥接（Desktop ↔ Telegram） | 🔥🔥🔥 **已被维护者标记为 canonical**，v0.19.0 注释中已提到方向 |
| [#690](https://github.com/nousresearch/hermes-agent/issues/690) | MCP Server 管理 CLI（发现 / 选择性加载 / `hermes mcp`） | 🔥🔥🔥 长期高优，由核心维护者 [teknium1](https://github.com/teknium1) 自提 |
| [#64900](https://github.com/nousresearch/hermes-agent/issues/64900) + [#68322](https://github.com/nousresearch/hermes-agent/pull/68322) + [#64231](https://github.com/nousresearch/hermes-agent/issues/64231) | Plugin 协议正式化（hook 目录、target 回退、send_message 扩展） | 🔥🔥🔥 三 Issue 联动，正在收敛 |
| [#4256](https://github.com/nousresearch/hermes-agent/issues/4256) | 可配置 keybindings | 🔥🔥 👍 6，长期社区呼声 |
| [#68222](https://github.com/nousresearch/hermes-agent/pull/68222) | ACP 客户端通用化（驱动 Claude Code / Codex / Gemini / Qwen） | 🔥🔥 影响「agent-of-agents」架构 |
| [#68306](https://github.com/nousresearch/hermes-agent/pull/68306) | TUI widget-app SDK（state + reducer + render） | 🔥🔥 Desktop ↔ TUI 组件模型统一 |
| [#27601](https://github.com/nousresearch/hermes-agent/pull/27601) | Webhook bearer token 鉴权 | 🔥🔥 多 provider 接入刚需 |
| [#47122](https://github.com/nousresearch/hermes-agent/pull/47122) | `ssh_pwsh` 后端（Windows PowerShell 远端） | 🔥 跨平台 SSH 控制 |
| [#68325

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 · 2026-07-21

> 数据来源：GitHub `sipeed/picoclaw` ｜ 统计周期：过去 24 小时

---

## 1. 今日速览

PicoClaw 过去 24 小时整体处于**中等活跃**状态，提交/关闭节奏健康。共产生 11 条 Issue 更新（7 新开/活跃、4 已关闭）和 10 条 PR 更新（5 待合并、5 已关闭），无新版本发布。今日社区讨论**高度集中在 antigravity provider 的回归问题上**，单日由同一位用户 `honbou` 贡献了 4 条高质量 Issue（#3272/#3274/#3275/#3276/#3278）+ 1 条 PR（#3273），提示维护者需重点关注。维护团队同时清理了一批长期 stale 的 Issue/PR（#3191、#3192、#276、#277、#3229、#3230、#3231、#3275、#3277），仓库健康度得到改善。

---

## 2. 版本发布

⚠️ **今日无新版本发布。** 最近的版本节奏未在数据中体现，请关注 [Releases 页面](https://github.com/sipeed/picoclaw/releases) 获取最新动态。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 标题 | 状态 | 意义 |
|---|---|---|---|
| [#3277](https://github.com/sipeed/picoclaw/pull/3277) | `fix(tools): deferred-tool visibility heal + sliding TTL + SSE tool-call index fix` | **已关闭**（但状态需关注，未明确合入 main） | 解决 MCP 延迟工具在进程重启/TTL 过期后从请求中消失的"幽灵工具"问题，并修复 SSE tool-call 索引 bug。**对 agent 工具调用稳定性有重大提升** |
| [#3192](https://github.com/sipeed/picoclaw/pull/3192) | `chore(docker): bump goreleaser base images from alpine:3.21 to 3.23` | 已关闭（stale） | 依赖维护，统一 Docker 基础镜像 |
| [#3191](https://github.com/sipeed/picoclaw/pull/3191) | `chore: remove duplicate build/ entry in .gitignore` | 已关闭（stale） | 配置清理 |
| [#276](https://github.com/sipeed/picoclaw/pull/276) | `Docs/improve readme` | 已关闭（stale，2026-02 提交） | README 排版与品牌一致性打磨 |
| [#277](https://github.com/sipeed/picoclaw/pull/277) | `feat: update the make deps logic` | 已关闭（stale，2026-02 提交） | 防止依赖频繁更新 |

> 📌 **进展判断**：今日净合并产出有限，主要为**依赖/Doc 清理**。最值得期待的工具稳定性修复 PR #3277 状态为"已关闭"但原因未明，建议维护者澄清是否真正合入。

---

## 4. 社区热点

按评论数与互动度排序：

| 排名 | 编号 | 标题 | 互动 | 分析 |
|---|---|---|---|---|
| 🥇 | [#3182](https://github.com/sipeed/picoclaw/issues/3182) | [BUG] Android version - 无法启动服务 | 4 评论 / 0 👍 | **长期未解决**（开于 6/26，已更新到 7/20），用户反映 Android 端服务无法启动且无法在设置中更改路径。属于**平台可用性硬伤**，影响移动端用户基础 |
| 🥈 | [#3203](https://github.com/sipeed/picoclaw/issues/3203) | Matrix sync loop 断连后静默死亡 | 3 评论 / 1 👍 | **架构层可靠性问题**：Matrix channel 缺乏重连机制，且因主进程不退出，systemd `Restart=on-failure` 不触发，**实际表现为生产环境静默故障** |
| 🥉 | [#3231](https://github.com/sipeed/picoclaw/issues/3231) | SearXNG basic auth 支持 | 2 评论 / 0 👍 | 已关闭（stale），用户诉求：通过请求头而非 URL 拼接传递认证 |
| 4 | [#3230](https://github.com/sipeed/picoclaw/issues/3230) | Gemini via OpenAI compat 缺 thought_signature | 2 评论 / 0 👍 | 已关闭（stale），0.2.9→0.3.1 期间问题 |
| 5 | [#3229](https://github.com/sipeed/picoclaw/issues/3229) | Anthropic 滚动缓存断点提案 | 2 评论 / 0 👍 | 已关闭（stale），高质量**架构提案**，与 #3228/#2191 关联 |

**热点诉求归纳**：
- 📱 **移动端可用性**：Android 用户长期受阻
- 🔌 **Channel 可靠性**：Matrix 等长连接缺乏重连是生产隐患
- 🤖 **多 Provider 兼容**：Gemini、Anthropic、Antigravity 的兼容细节

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 问题 | 是否有 Fix PR | 备注 |
|---|---|---|---|---|
| 🔴 P0 | [#3278](https://github.com/sipeed/picoclaw/issues/3278) | Antigravity OAuth 登录被 Google 拒绝（违反 OAuth 2.0 策略） | ❌ 无 | **登录链路完全不可用**，影响所有 antigravity 用户 |
| 🔴 P0 | [#3274](https://github.com/sipeed/picoclaw/issues/3274) | Antigravity provider INVALID_ARGUMENT（main 85dcfcc）—— 相对 v0.3.1 回归 | ❌ 无 | `tool_schema_transform=simple` 不再足够；build 自带 tags `goolm,stdjson` |
| 🟠 P1 | [#3275](https://github.com/sipeed/picoclaw/issues/3275) | `model_list` 条目经 Launcher WebUI/auth login 重写后丢失 `api_keys` 等字段 | ❌ 无（已关闭） | **配置数据丢失**，但单次报告，建议复现验证 |
| 🟠 P1 | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP server 连接失败 → agent loop hang → 聊天界面无响应 | ❌ 无 | **类似 #3277 修复方向**，但 #3277 状态存疑，需要确认是否覆盖此场景 |
| 🟡 P2 | [#3203](https://github.com/sipeed/picoclaw/issues/3203) | Matrix sync loop 断连后无重连 | ❌ 无 | 长期问题，影响生产部署 |
| 🟡 P2 | [#3182](https://github.com/sipeed/picoclaw/issues/3182) | Android 服务无法启动、无法更改路径 | ❌ 无 | 已 24 天未修复 |

> ⚠️ **重要告警**：今日报告的 3 个 antigravity 相关问题（#3274/#3275/#3278）**均集中在 main 分支 commit 85dcfcc**，高度疑似该次提交引入了 provider 重构回归。强烈建议维护者回滚或在该 commit 上做集中修复。

---

## 6. 功能请求与路线图信号

| Issue/PR | 标题 | 状态 | 信号 |
|---|---|---|---|
| [#3273](https://github.com/sipeed/picoclaw/pull/3273) + [#3272](https://github.com/sipeed/picoclaw/issues/3272) | **日文 i18n 本地化** | PR 已开 | PR 完整翻译 968 行 `en.json` → `ja.json`，**合入门槛极低**，应纳入下个补丁版本 |
| [#3270](https://github.com/sipeed/picoclaw/pull/3270) | **DashScope TTS + 微信音频文件发送** | PR 待审 | 中文生态关键功能，对国内用户有强吸引力；改动涉及新 provider + 微信 channel 增强 |
| [#3271](https://github.com/sipeed/picoclaw/pull/3271) | **默认模型名称刷新至 2026-07**（OpenAI/Anthropic 等 9 家） | PR 待审 | 常规维护，**应当合入**；涉及 `gpt-5.6-terra/luna/sol` 等新模型 |
| [#3251](https://github.com/sipeed/picoclaw/pull/3251) | **捕获 Anthropic prompt cache 令牌用量** | PR 待审（开于 7/12） | 用户与运维迫切需求，目前 Anthropic 双 provider 均丢弃了缓存指标，**影响成本可观测性** |
| [#3254](https://github.com/sipeed/picoclaw/pull/3254) | `fix(agent): prefer verbatim model matches` | PR 待审（stale） | 模型解析优先级修复 |
| [#3276](https://github.com/sipeed/picoclaw/issues/3276) | Launcher 支持外部托管 gateway（systemd）+ 未知 channel 不再硬失败 | Issue | 体现**从单进程到 systemd 化部署的演进需求**，对生产化是重要信号 |

**下个版本可能包含（按可能性排序）**：
1. ✅ 日文 i18n（[#3273](https://github.com/sipeed/picoclaw/pull/3273)）—— 已 ready
2. ✅ 默认模型名刷新（[#3271](https://github.com/sipeed/picoclaw/pull/3271)）—— 风险低
3. 🔜 Anthropic prompt cache 指标捕获（[#3251](https://github.com/sipeed/picoclaw/pull/3251)）—— 社区关注度高
4. 🔜 DashScope TTS + 微信音频（[#3270](https://github.com/sipeed/picoclaw/pull/3270)）—— 需 review 充分

---

## 7. 用户反馈摘要

从 Issues 评论中提炼：

- **😟 痛点 1：生产部署断链无声死亡**
  > #3203：Matrix `/sync` long-polling 在网络/服务器重启后**永久死亡**，且因主进程不退出，systemd 不会触发重启。
  → 真实场景：**自托管用户依赖 systemd 做兜底，但代码层断链使兜底失效**，这是企业级可用性隐患。

- **😟 痛点 2：主分支回归破坏现有功能**
  > #3274：antigravity provider 在 main `85dcfcc` 出现 `INVALID_ARGUMENT`，对比 v0.3.1 是回归，原因是 `tool_schema_transform: "simple"` 不足。
  → 真实场景：**自编译用户从 stable 切到 main 后立即踩坑**，反映 CI 缺乏 provider 级回归测试。

- **😟 痛点 3：OAuth 策略合规**
  > #3278：Google 拒绝 antigravity OAuth 登录，提示"doesn't comply with Google's OAuth 2.0 policy for keeping apps secure"。
  → 真实场景：**所有 antigravity 用户 100% 不可登录**，且是 Google 侧策略变化导致的不可抗力，需走"verified app"或迁移到支持的工作流。

- **😊 正面信号**：#3273 PR 的日文翻译完整且工程化（包含 dayjs locale 联动），表明社区愿意为非英语用户投入高质量贡献。

- **🤔 隐性诉求**：#3276 揭示了**从桌面/容器单进程模式向 systemd 化、headless、多组件分工**部署演进的用户需求。

---

## 8. 待处理积压（提醒维护者关注）

### 🟥 长期未解决的关键 Issue
- **[#3182](https://github.com/sipeed/picoclaw/issues/3182)** Android 服务无法启动（开于 2026-06-26，**已 25 天**）—— 平台可用性硬伤，建议分派移动端负责人
- **[#3203](https://github.com/sipeed/picoclaw/issues/3203)** Matrix sync loop 无重连（开于 2026-07-02，**已 19 天**）—— 已在更新但仍 OPEN

### 🟧 长期未合并的 PR
- **[#3251](https://github.com/sipeed/picoclaw/pull/3251)** Anthropic prompt cache 指标捕获（开于 2026-07-12，**已 9 天**）—— 用户需求明确，建议优先 review
- **[#3254](https://github.com/sipeed/picoclaw/pull/3254)** 修复 agent 模型引用解析（**已被标 stale**）—— 需维护者判断是否仍有效

### 🟨 今日报告但 0 评论/0 👍 的新 Issue（可能沉底）
- [#3269](https://github.com/sipeed/picoclaw/issues/3269) MCP 连接失败导致 agent hang —— **严重 BUG，建议置顶**
- [#3272](https://github.com/sipeed/picoclaw/issues/3272) 日文 i18n 需求
- [#3274](https://github.com/sipeed/picoclaw/issues/3274) Antigravity 回归
- [#3275](https://github.com/sipeed/picoclaw/issues/3275) config 字段丢失
- [#3276](https://github.com/sipeed/picoclaw/issues/3276) 外部托管 gateway 支持
- [#3278](https://github.com/sipeed/picoclaw/issues/3278) Antigravity OAuth 被 Google 拒绝

### 🟦 待澄清：#3277 关闭原因
[PR #3277](https://github.com/sipeed/picoclaw/pull/3277)（MCP 工具可见性 + 滑动 TTL + SSE 索引修复）今日已关闭但**摘要中提到的关键 bug 仍出现在 #3269**。建议维护者在 issue 评论区明确该 PR 是否已合入 main，或将被新 PR 替代。

---

## 📊 项目健康度评分

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐⭐⭐ | Issue/PR 双活跃，单日 21 条更新 |
| 响应及时性 | ⭐⭐⭐ | 新 Issue 多为 0 评论，需主动 triage |
| 稳定性 | ⭐⭐ | **同日爆出 antigravity 多项 P0 回归** |
| 社区贡献质量 | ⭐⭐⭐⭐⭐ | honbou 单日高质量 4 Issue + 1 PR；日文翻译完整 |
| 发布节奏 | ⭐⭐ | 今日无版本，回归未通过 release 流程拦截 |

> **维护者今日 Top 3 行动建议**：
> 1. 🔥 优先回滚或修复 commit `85dcfcc` 的 antigravity 回归（#3274/#3275/#3278）
> 2. 🔥 明确 PR #3277 的归宿，并跟进 #3269 MCP hang
> 3. ✅ 快速合入 #3271（模型名刷新）+ #3273（日文 i18n），零风险且信号好

---

*报告生成时间：2026-07-21 ｜ 数据源：sipeed/picoclaw GitHub API*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报
**报告日期：2026-07-21**

---

## 1. 今日速览

NanoClaw 今日社区活跃度处于**高位运行**状态：24 小时内新开 6 个 Issues、20 个 PR 流转（合并/关闭 6 个，待审 14 个）。当日工作围绕**三大主题**展开——由贡献者 `k-fls` 推动的 RBAC/审批链路安全硬化系列（4 个 Issue + 4 个 PR 同步推进）、`glifocat` 主导的 WhatsApp Cloud 桥接回归修复，以及由 `cfis`、`mashkovtsevlx` 主导的 chat-sdk 桥接入站附件丢失问题的修复闭环。无新版本发布，但代码合入节奏稳定，项目健康度评估为 **B+**（安全债正在被主动清理，但开放 PR 积压已达 14 个，需关注审阅吞吐）。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 标题 | 影响 |
|----|------|------|
| [#3110](https://github.com/nanocoai/nanoclaw/pull/3110) | feat(container): bake caldav-mcp into the agent image | **关闭** — 将 `caldav-mcp@0.8.0` 通过 `pnpm install -g` 内置进基础镜像，复用既有供应链策略，无需额外凭证 |
| [#3108](https://github.com/nanocoai/nanoclaw/pull/3108) | fix(chat-sdk-bridge): rehydrate inbound attachments when adapters carry no fetchData | **关闭** — 修复 Chat SDK 序列化时丢 `fetchData` 的核心问题，是 #3109、iMessage 入站附件修复的前置条件 |
| [#3107](https://github.com/nanocoai/nanoclaw/pull/3107) | fix(add-whatsapp-cloud): copy the adoption module and document the row re-key | **关闭**（Draft）— 与 #3106 配对的迁移文档模块，依赖合并顺序 |
| [#3087](https://github.com/nanocoai/nanoclaw/pull/3087) | fix(whatsapp): engage mention-mode wirings on typed @-mentions in groups | **关闭** — 修复 WhatsApp 群组中显式 `@` 提及未触发 mention-mode 的问题（core-team 标签） |
| [#2642](https://github.com/nanocoai/nanoclaw/pull/2642) | fix(add-telegram): pin chat-adapter to 4.26.0 to match installed chat | **关闭** — 将 `/add-telegram` 的 `@chat-adapter/telegram` 固定为 `4.27.0` → 改为安装已验证的 `4.26.0`，规避与根 `chat@4.24.0` 的 peer 依赖冲突 |
| [#1110](https://github.com/nanocoai/nanoclaw/pull/1110) | fix: update container-runtime tests to match implementation | **关闭** — 历史遗留的测试-实现同步 PR（自 2026-03-15 起积压 4 个月），清理挂起 |

**项目推进评估**：附件数据流这条长期"看不见"的暗病（chat-sdk 序列化丢 `fetchData` → 各 adapter 表现为文件名占位符）今日完成了**核心层修复 + iMessage 分支修复**双闭环，叠加 WhatsApp mention-mode、容器僵尸进程（#3060 待合并）等横切面，**入站消息路径的整体可靠性上了一个台阶**。

---

## 4. 社区热点

今日**讨论密度最高的主题是 RBAC 与审批安全**，由同一位贡献者 `k-fls` 在 12 小时内连续抛出 4 个相互关联的 Issue 与 4 个对应 PR，形成完整的"问题—修复"矩阵：

- **Issue [#3100](https://github.com/nanocoai/nanoclaw/issues/3100)** — Revoking the sole remaining owner is not prevented (no root of trust)
- **Issue [#3099](https://github.com/nanocoai/nanoclaw/issues/3099)** — Approval routing ignores privilege and can route a role-change to its own target
- **Issue [#3098](https://github.com/nanocoai/nanoclaw/issues/3098)** — Approval cards for ncl commands echo the raw command line, not the effect
- **Issue [#3097](https://github.com/nanocoai/nanoclaw/issues/3097)** — Role grant silently confers GLOBAL admin when --group is omitted

对应的修复 PR：[#3104](https://github.com/nanocoai/nanoclaw/pull/3104)、[#3103](https://github.com/nanocoai/nanoclaw/pull/3103)、[#3102](https://github.com/nanocoai/nanoclaw/pull/3102)、[#3101](https://github.com/nanocoai/nanoclaw/pull/3101)。

**诉求分析**：这组 Issue 集中暴露了 NanoClaw 在 CLI 角色管理（`ncl roles grant/revoke`）与审批工作流（`pickApprover`）中的**设计性缺陷**——缺乏"最后一位 owner 不可撤销"的安全护栏、审批路由可能落到被变更对象本人（自我审批）、权限级别校验倒挂、UI 只显示原始命令而非影响面。k-fls 通过 Issue + PR 同步提交的策略显然是在推动一个**结构性的安全加固版本**，这种"修一个问题连带发现一串"的模式，是高活跃安全审计者常见的协作风格。

另一条**热点线索**是 LINE 频道适配器：[Issue #3096](https://github.com/nanocoai/nanoclaw/issues/3096)（`/add-line` skill 提议，joshm1230212）+ [PR #2918](https://github.com/nanocoai/nanoclaw/pull/2918)（自 2026-07-03 起的原生适配器实现），反映**亚洲市场（日/台/泰）对 LINE 作为消息入口的明确需求**。

---

## 5. Bug 与稳定性

| 严重度 | 位置 | 问题 | 修复 PR |
|--------|------|------|---------|
| 🔴 高 | [Issue #3105](https://github.com/nanocoai/nanoclaw/issues/3105) — whatsapp-cloud | 升级后 #2913 的 instance 重键导致 `messaging_groups` 行悬空，**WhatsApp 静默失声**（Meta 仍 POST 到 webhook，但无人应答） | [#3106](https://github.com/nanocoai/nanoclaw/pull/3106) OPEN + [#3107](https://github.com/nanocoai/nanoclaw/pull/3107) 已关闭（draft 文档模块）|
| 🔴 高 | RBAC/审批链路 4 项问题（[#3100](https://github.com/nanocoai/nanoclaw/issues/3100)、[#3099](https://github.com/nanocoai/nanoclaw/issues/3099)、[#3098](https://github.com/nanocoai/nanoclaw/issues/3098)、[#3097](https://github.com/nanocoai/nanoclaw/issues/3097)） | 见上文：自我审批、权限倒挂、全局 admin 隐式授予、无 owner 防线 | [#3101](https://github.com/nanocoai/nanoclaw/pull/3101) – [#3104](https://github.com/nanocoai/nanoclaw/pull/3104) 全部 OPEN |
| 🟡 中 | [PR #3109](https://github.com/nanocoai/nanoclaw/pull/3109) — imessage | 本地模式下入站 iMessage 附件只拿到文件名，HEIC 未转码；字节留在宿主 Messages 存储 | #3109 OPEN |
| 🟡 中 | [PR #3044](https://github.com/nanocoai/nanoclaw/pull/3044) — Telegram voice | 语音/音频笔记消息的 `audio/ogg` 字节从未到达 agent（关联 [#2888](https://github.com/nanocoai/nanoclaw/issues/2888)） | OPEN |
| 🟢 低 | [PR #3060](https://github.com/nanocoai/nanoclaw/pull/3060) — container | 容器 PID 1 未启用 init，无法回收僵尸进程（`bun run` 覆盖了 `tini`/`dumb-init`） | OPEN |

**总结**：今日无崩溃/数据丢失级别的 P0，但 RBAC 与 WhatsApp 升级两个高严重度问题均已有对应修复 PR 在审，**预计可在下一个 minor 版本合并**。

---

## 6. 功能请求与路线图信号

| 提议 | 来源 | 实现进度 | 纳入可能性 |
|------|------|----------|-----------|
| **LINE 官方账号频道适配器** | [Issue #3096](https://github.com/nanocoai/nanoclaw/issues/3096)（请求） + [PR #2918](https://github.com/nanocoai/nanoclaw/pull/2918)（原生适配器，自 2026-07-03） | 实现已就绪，仅待合并 | **高** — 适配器 PR 已就位，且填补 README RFS 流程中的空白 |
| **CalDAV MCP 内置** | [PR #3110](https://github.com/nanocoai/nanoclaw/pull/3110) | 已合并 | **极高** — 闭合适配器已闭 |
| **Dial 频道（SMS + AI 语音通话）** | [PR #3050](https://github.com/nanocoai/nanoclaw/pull/3050)（wizard 集成） + [PR #3041](https://github.com/nanocoai/nanoclaw/pull/3041)（适配器） | 双 PR 在审 | **中** — 需看核心团队对第三方语音/SMS 供应商策略 |
| **本地 whisper.cpp 语音转写**（Discord/全 chat-sdk 频道） | [PR #2459](https://github.com/nanocoai/nanoclaw/pull/2459) — 自 **2026-05-13** 起挂起 | 长期未合并 | **中** — 已被另一 PR（#2317）部分覆盖 |
| **传统中文 README** | [PR #2950](https://github.com/nanocoai/nanoclaw/pull/2950)（自 2026-07-04） | 待审 | **高** — 低风险国际化工作 |

**路线图信号**：从 PR 流向看，下一版本（可能是 `0.x.y` 补丁或 `0.x+1` 小版本）很可能集中发布 **RBAC 安全加固 + 附件流修复 + LINE/Dial 新频道**这三类变更。

---

## 7. 用户反馈摘要

由于今日 6 个新 Issue 全部为今日创建且 0 评论（[#3096](https://github.com/nanocoai/nanoclaw/issues/3096) 仅 1 评论），**直接用户声音较少**，可提炼的痛点主要来自 Issue 摘要本身：

- **运维痛点**：WhatsApp Cloud 升级静默失败（[#3105](https://github.com/nanocoai/nanoclaw/issues/3105)）—— 用户在 `/update-skills` 后才发现 IM 渠道"哑了"，缺乏**升级前后自检或告警**。
- **UX 痛点**：审批卡片只回显原始 `ncl roles-revoke --user slack:U0…` 而非 "你将撤销 Alice 的 admin 角色"（[#3098](https://github.com/nanocoai/nanoclaw/issues/3098)）—— **管理员被迫盲审**，违反最小惊讶原则。
- **心智负担**：用户忘记 `--group` 时被默认授予 GLOBAL admin（[#3097](https://github.com/nanocoai/nanoclaw/issues/3097)）—— `ncl` CLI 在危险操作上**缺少 `--scope` 必选校验**，是潜在的安全陷阱。
- **市场缺口**：日本/台湾/泰国用户对 LINE 适配器有明确诉求（[#3096](https://github.com/nanocoai/nanoclaw/issues/3096)）—— README RFS 流程正在被实际使用，证明流程设计有效。

---

## 8. 待处理积压提醒

| 类型 | ID | 标题 | 挂起天数 | 备注 |
|------|-----|------|----------|------|
| ⚠️ 长期 PR | [#2459](https://github.com/nanocoai/nanoclaw/pull/2459) | feat(skill): add /add-voice-transcription-chat-sdk | **69 天**（2026-05-13） | 本地 whisper.cpp 语音转写；功能与 #2317 有重叠，需维护者明确路线图归属 |
| ⚠️ 长期 PR | [#2950](https://github.com/nanocoai/nanoclaw/pull/2950) | docs: add Traditional Chinese README | 17 天 | 低风险国际化工作，建议 fast-track |
| ⚠️ 长期 PR | [#2918](https://github.com/nanocoai/nanoclaw/pull/2918) | feat(channels): add LINE Official Account channel | 18 天 | 与今日新 Issue #3096 配套，建议同日合并 |
| 📋 审阅负荷 | 14 个 OPEN PR | — | — | 当日吞吐 6 closed，建议核心团队集中评审 RBAC 系列（4 个相互关联的 PR） |

**维护者关注建议**：建议优先评审 `k-fls` 的 4 个 RBAC PR 矩阵（[#3101](https://github.com/nanocoai/nanoclaw/pull/3101)–[#3104](https://github.com/nanocoai/nanoclaw/pull/3104)），它们形成内聚的安全特性，若单独合并可能引入相互不一致；一并合并可降低 review 负担并保证一致性。LINE PR #2918 与今日新 Issue #3096 配套，是产品差异化的重要入口，建议加速。

---

*报告基于 GitHub 公开数据生成，数据时间窗为 2026-07-20 当日更新。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报

**日期：2026-07-21**
**仓库：[nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)**

---

## 1. 今日速览

NullClaw 项目今日呈现**低活跃度静默状态**。过去 24 小时内，Issues 板块无任何新开、活跃或关闭条目，Pull Requests 板块仅有 1 条来自 Dependabot 的依赖更新请求处于待合并状态，无新版本发布。整体来看，项目处于依赖维护的常规节奏中，**无功能性开发活动**，社区互动也处于低谷期。项目健康度评估：**维护正常，但需关注是否有积压未处理的用户反馈**。

---

## 2. 版本发布

无新版本发布。本期不展开。

---

## 3. 项目进展

今日**无重要 PR 合并或关闭**。唯一的 PR #956 为 Dependabot 自动发起的 Docker 基础镜像依赖更新，目前仍处于 Open 状态（创建于 2026-06-15，距今已超过一个月），尚未被维护者审查或合并。

**项目推进进度：约 0 步**。今日未向任何新功能、Bug 修复或重构方向推进。

---

## 4. 社区热点

今日社区讨论度极低，无高互动条目。

| 排名 | 条目 | 评论数 | 👍 反应数 | 状态 |
|------|------|--------|-----------|------|
| - | - | - | - | 今日无热点 |

**分析**：唯一在线的 PR [#956](https://github.com/nullclaw/nullclaw/pull/956) 是机器自动化生成，零评论、零反应，反映出社区成员目前对该仓库的关注度非常有限。

---

## 5. Bug 与稳定性

今日**未报告任何新的 Bug、崩溃或回归问题**。

从现有数据看，无法评估项目当前稳定性状况。鉴于 Issues 板块持续无活动，建议关注以下几点：
- 是否存在长期未关闭的 Bug Issue 未被纳入本次数据快照
- 项目 CI/CD 流水线运行状态是否健康（无相关数据可供参考）
- 历史版本中是否仍存在未修复的高危问题

⚠️ **注意**：本期数据不包含完整的 Issue 历史列表，若需全面 Bug 排查，建议直接访问 [Issues 列表](https://github.com/nullclaw/nullclaw/issues) 进行人工审查。

---

## 6. 功能请求与路线图信号

今日**无新功能请求**。

由于缺乏 Issues 和 PR 数据，本期无法提供有意义的路线图信号分析。建议读者关注以下渠道获取项目方向：
- 项目的 [README 与官方文档](https://github.com/nullclaw/nullclaw)
- 维护者在 Discussion 中的发言（若有）
- 历史 PR 的合并模式与标签趋势

---

## 7. 用户反馈摘要

今日**无新的用户反馈**可供提炼。

Issues 板块在过去 24 小时内完全无活动，无法反映用户痛点、满意度或使用场景。建议维护者主动发起社区调研（如 Discussions 投票、用户访谈），以补充静默期的反馈真空。

---

## 8. 待处理积压

### 🔴 高优先级提醒

| 条目 | 类型 | 标题 | 创建日期 | 等待时长 | 链接 |
|------|------|------|----------|----------|------|
| #956 | PR | ci(deps): bump alpine from 3.23 to 3.24 | 2026-06-15 | **36 天** | [查看](https://github.com/nullclaw/nullclaw/pull/956) |

### 分析

PR #956 是一例典型的**依赖积压**案例：
- **等待时长异常**：该 PR 已开放超过一个月，远超 Dependabot 类 PR 通常的处理周期（数小时至数天）
- **影响范围**：涉及 Docker 基础镜像版本升级，可能影响所有使用 Docker 部署的用户
- **风险评估**：Alpine 3.23 → 3.24 通常为安全补丁与小版本升级，积压可能使项目错过上游安全修复
- **建议行动**：
  1. 维护者应在 48 小时内审查并合并该 PR，或明确说明保留旧版本的理由
  2. 配置 Dependabot 自动合并策略（auto-merge）对 minor/patch 级别依赖更新
  3. 检查是否存在其他未被本次数据捕获的长期未响应 Issue

---

## 📊 总结指标

| 指标 | 数值 | 趋势评估 |
|------|------|----------|
| Issues 新开/活跃 | 0 | 📉 静默 |
| Issues 已关闭 | 0 | ➖ 无变化 |
| PR 待合并 | 1 | ⚠️ 积压超 30 天 |
| PR 已合并 | 0 | 📉 静默 |
| 新版本发布 | 0 | ➖ 持平 |
| 社区互动（评论/反应） | 0 | 📉 极低 |

**综合健康度**：⚠️ **需要关注**——项目本身维持运转，但依赖更新积压与社区活跃度下降是值得警惕的信号。

---

*本日报由 AI 分析师基于 GitHub 公开数据自动生成。如需更深入分析，建议结合项目历史趋势与代码提交记录综合判断。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
**日期：2026-07-21** · **仓库：nearai/ironclaw**

---

## 1. 今日速览

今日 IronClaw 仓库呈现**高强度工程推进 + 发布冲刺**的双线态势：过去 24 小时共更新 **43 个 Issue（40 活跃 / 3 关闭）** 与 **50 个 PR（22 待合并 / 28 合并或关闭）**，活跃度处于历史高位。最具标志性的进展是 **PR #6375 合并完成**，v1 遗留单体 `src/` 被彻底删除、Railway/GCP/Docker 部署配置全部切至 Reborn 栈；同时 **1.0.0-rc.1 发布说明（#6370）** 已就位、MSI 安装阻断 bug 的修复（#6383）正在 review 通道，项目正处在 Reborn 架构全面接管、首个公开 RC 即将面世的关键节点。安全侧值得高度关注：Bug Bash 报告了一条 **P1 级安全问题——Gmail 扩展重装后跳过 OAuth 直接授权**（#6348），建议维护者优先响应。

---

## 2. 版本发布

**今日无新版本发布**，但发布列车正在行进中：

- 🚧 **1.0.0-rc.1 候选发布**（基于 40ae7200 分支，非 main tip）：
  - [PR #6370](https://github.com/nearai/ironclaw/pull/6370) — 1.0.0-rc.1 发布说明 + 同步 `reborn-binary.md`（已关闭/合并）
  - [PR #6383](https://github.com/nearai/ironclaw/pull/6383) — 移除 "Reborn" 代号 + 修复 MSI 阻断问题（OPEN，待合并）
- 🚨 **计划中的 API 破坏性变更**（由机器人 PR [#5598](https://github.com/nearai/ironclaw/pull/5598) 预告）：
  - `ironclaw_common`: 0.4.2 → 0.5.0（⚠ API 破坏）
  - `ironclaw_safety`: 0.2.2 → 0.2.3（兼容）
  - `ironclaw_skills`: 0.3.0 → 0.4.0（⚠ API 破坏）

> 迁移提示：升级到 `ironclaw_common 0.5.0` / `ironclaw_skills 0.4.0` 时需关注 `copy_impl_added` 等 trait 实现差异。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 标题 | 规模 / 风险 | 影响 |
|---|---|---|---|
| [#6375](https://github.com/nearai/ironclaw/pull/6375) | **refactor(tier-b): 删除 v1 遗留单体 `src/` 并将部署切至 Reborn** | XL / 高 | **里程碑级**：v1 legacy monolith 永久下线，部署配置全面 Reborn 化 |
| [#6374](https://github.com/nearai/ironclaw/pull/6374) | **消除 `local_trigger_access` 模块（§4.4）** | XL / 低 | 移除 ~1,464 LOC 影子存储，统一触发器权限为 config + identity |
| [#6378](https://github.com/nearai/ironclaw/pull/6378) | 移除 `libsql-secrets` 与 `filesystem-goal-store` 死特性 | L / 低 | runner 特性由 3 减至 1 |
| [#6379](https://github.com/nearai/ironclaw/pull/6379) | 修复 Tier-B 合并后 main 变红（release-plz + replay-gate 遗留引用） | M / 中 | 恢复 main 分支 CI 绿色 |
| [#6337](https://github.com/nearai/ironclaw/pull/6337) | 保持聊天流活跃 + 无需重放即可恢复 | XL / 低 | 修复长模型流超时误杀、删除语义续传变通方案 |
| [#6370](https://github.com/nearai/ironclaw/pull/6370) | 1.0.0-rc.1 发布说明 | XS / 低 | 为首个 RC 提供安装指引 |
| [#6178](https://github.com/nearai/ironclaw/issues/6178) | 自动化错误横幅无法关闭且暴露原始 API 错误 | Issue 已关闭 | UI 错误体验修复 |
| [#6179](https://github.com/nearai/ironclaw/issues/6179) | Settings 导入在无内容时仍报成功 | Issue 已关闭 | 导入语义修复 |
| [#6377](https://github.com/nearai/ironclaw/pull/6377) | 移除 `libsql-secrets` 特性与模块 | M / 低 | 死代码清理 |
| [#6288](https://github.com/nearai/ironclaw/pull/6288), [#6186](https://github.com/nearai/ironclaw/pull/6186), [#6381](https://github.com/nearai/ironclaw/pull/6381) | dependabot 批量依赖升级 | XL / 低 | rustls、tokio、futures、ACP-SDK 等关键依赖更新 |

**项目整体推进评估**：今日属于 Reborn 架构收尾 + 1.0 发布的"双收官"窗口。Tier-B v1 主体已物理删除，但仍遗留 [#6369](https://github.com/nearai/ironclaw/issues/6369)（v1 退役后的 Tier B 缺口跟踪）需要跟进。

---

## 4. 社区热点（评论最多 / 最受关注）

1. 🥇 **[Issue #6263](https://github.com/nearai/ironclaw/issues/6263)（9 条评论）** — `InMemoryTurnStateStore` 终极退役
   - 继 A1–A8 slices、checkpoint 集群、Slack 测试替身、secrets 集群之后的最后一项 DEBT 条目；需要 Slice 0 oracle + 无活锁证据
   - **信号**：架构师 ilblackdragon 主导的长尾技术债清理进入最后阶段

2. 🥈 **[Issue #6274](https://github.com/nearai/ironclaw/issues/6274)（4 条评论）** — 完善 `DeploymentConfig` 作为主组合配置（§4.4/§5.6/§5.11）
   - `DeploymentConfig` 已作为 Slice B 产物落地，但完成度不足；[PR #6387](https://github.com/nearai/ironclaw/pull/6387) 跟进 Track 1

3. 🥉 **[Issue #6190](https://github.com/nearai/ironclaw/issues/6190)（4 条评论）** — 单次失败请求显示多条冲突错误信息（P2 bug）
   - 用户体验痛点：流式错误与上下文限制错误同时出现，根因难辨

4. **[Issue #6189](https://github.com/nearai/ironclaw/issues/6189)（4 条评论）** — 可重试流错误让已完成响应处于失败态（P2 bug）

5. **[Issue #6369](https://github.com/nearai/ironclaw/issues/6369)（3 条评论）** — v1（src/）退役后的 Tier B 缺口
   - 紧随 [#6375](https://github.com/nearai/ironclaw/pull/6375) 合并而浮现的清理任务

**诉求分析**：社区讨论高度集中在**架构收敛**（Reborn 简化、DeploymentConfig 统一）与**UI 错误体验**（错误横幅聚合、状态一致性）两个方向，反映出用户在长期 v1/v2 并存期积累的可用性抱怨正在被系统化处理。

---

## 5. Bug 与稳定性

### 🔴 P1（高严重，建议 48 小时内响应）

| Issue | 描述 | 状态 |
|---|---|---|
| [#6348](https://github.com/nearai/ironclaw/issues/6348) | **Gmail 扩展卸载重装后自动授权，无需用户同意** | OPEN，**无 fix PR，强烈建议优先处理** |
| [#6360](https://github.com/nearai/ironclaw/issues/6360) | Provider 接入向导无法回退 | OPEN |

### 🟠 P2（中严重，建议本周内响应）

| Issue | 描述 | 是否有 fix |
|---|---|---|
| [#6190](https://github.com/nearai/ironclaw/issues/6190) | 单次请求显示多条冲突错误信息 | 无 fix PR |
| [#6189](https://github.com/nearai/ironclaw/issues/6189) | 可重试流错误致已完成响应显示失败 | [#6337](https://github.com/nearai/ironclaw/pull/6337) 已合并修复 |
| [#6350](https://github.com/nearai/ironclaw/issues/6350) | 助手意外切换回应语言（英语提问返回乌克兰语） | 无 fix PR |
| [#6351](https://github.com/nearai/ironclaw/issues/6351) | 多工具请求 checkpoint 不可达错误 | 无 fix PR |
| [#6353](https://github.com/nearai/ironclaw/issues/6353) | 长助手消息被截断且无展开选项 | 无 fix PR |
| [#6352](https://github.com/nearai/ironclaw/issues/6352) | 离开页面后流式响应循环回放 | 无 fix PR |
| [#6349](https://github.com/nearai/ironclaw/issues/6349) | Telegram 聊天记录在 WebUI 渲染错乱 | 无 fix PR |
| [#6362](https://github.com/nearai/ironclaw/issues/6362) | "Test connection" 与 "Fetch models" 重复流程 | 无 fix PR |

### 🟡 质量/可测试性

| Issue | 描述 | 风险 |
|---|---|---|
| [#6359](https://github.com/nearai/ironclaw/issues/6359) | `reborn_trace_first_party_tool_coverage` 读取真实 `$HOME` 状态（CI 绿、本地红） | 隐藏环境污染 |
| [#6347](https://github.com/nearai/ironclaw/issues/6347) | Slack 实例就绪性无 caller 级测试覆盖 | 回归风险 |
| [#6335](https://github.com/nearai/ironclaw/issues/6335) | 自 #6309 起 host-authored 能力修复被静默占位 | **已关闭**（疑似已修复） |

**稳定性评估**：Bug Bash 集中暴露出**聊天流时序、错误呈现一致性、多语言处理**三大类问题，与今日合并的 [#6337](https://github.com/nearai/ironclaw/pull/6337) 直接呼应；安全相关 P1（#6348）必须在下一次 RC 前修复。

---

## 6. 功能请求与路线图信号

今日有多个 Reborn 原生功能 issue 集中开张，表明路线图正在向"Reborn-native 体验"收敛：

| Issue / PR | 功能 | 关联依赖 | 进入下一版本概率 |
|---|---|---|---|
| [#6320](https://github.com/nearai/ironclaw/issues/6320) | **IronHub 扩展安装流程**（Reborn 原生） | 关联 #4479 | 🟢 高（已有专项跟踪） |
| [#6325](https://github.com/nearai/ironclaw/issues/6325) | **线程级 MCP 会话与编程式 MCP 配置** | 关联 #6244 | 🟢 高 |
| [#6324](https://github.com/nearai/ironclaw/issues/6324) | **WebUI Workspace 重设计 + chat-first 入门** | 关联 #6162/#6163 | 🟢 高 |
| [#2277](https://github.com/nearai/ironclaw/issues/2277) | ACP 后端子线程后端（Codex/Droid/OpenCode 委派） | — | 🟡 中（v2 scope，跨度大） |
| [#6384](https://github.com/nearai/ironclaw/issues/6384) | in-chat 命令覆盖优先级 backlog（feeds #3286） | 关联 #3286 | 🟡 中（规划用途） |
| [#6371](https://github.com/nearai/ironclaw/issues/6371) | 讨论：将 Reborn hooks 收敛至"调用授权策略" | 关联架构简化文档 | 🟡 中（设计讨论阶段） |

**信号**：ilblackdragon 主导的"Reborn 原生化"主题（#6320、#6325、#6324）几乎同步开张，意味着产品团队正在系统化规划 1.0 之后的扩展/MCP/WebUI 三条主线。

---

## 7. 用户反馈摘要

从今日 Issue 评论与摘要中提炼的真实用户痛点：

- **😣 错误信息可信度**："流式错误 + 模型上下文限制"双横幅并存（#6190）、"已完成却显示红错误"（#6189）—— 用户无法判断请求是否真的失败，反映出**错误呈现层缺乏 single source of truth**。
- **😣 Provider 接入体验**：选择 Provider 后无法回退（#6360）、"Test connection" 与 "Fetch models" 重复（#6362）—— 新用户 onboarding 流程存在摩擦点。
- **😣 扩展安全预期落差**：Gmail 重装后跳过 OAuth（#6348）—— 用户明确"从未批准访问"，但系统已直接连接，这是**信任层面的硬伤**。
- **😣 内容呈现稳定性**：长消息无展开按钮（#6353）、Telegram/WebUI 消息错乱（#6349）、离开页面后流循环回放（#6352）—— 跨通道一致性不足。
- **😐 语言行为不可预测**：英语提问收到乌克兰语回复（#6350）—— 模型语言对齐策略未显式化。
- **😊 工程反馈**：Checkpoint 不可达（#6351）触发可读性较强的 remediation 提示（"contact support if persists"），说明错误文案设计在进步。

**使用场景**：从 Gmail 扩展、Provider onboarding、Telegram 桥接、Workspace

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报

**报告日期**：2026-07-21
**数据来源**：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

LobsterAI 今日呈现**典型的"批量收尾日"形态**：24 小时内共有 15 个 PR 更新，无 Issues 变动，无新版本发布。其中 10 个 PR 已被合并/关闭，5 个仍保持 OPEN 状态。今日贡献者集中度高（fisherdaddy、liugang519、liuzhq1986 等 4 位核心开发者推动全部推进项），合并主题以 **Cowork 协作能力增强、Windows 平台分发与更新链路、UI 稳定性修复** 为主线。整体推进节奏健康，bug 修复占比偏高（约 60%），反映出团队在向功能扩张的同时正在打磨稳定性。

---

## 2. 版本发布

**今日无新版本发布**。

需要关注的是，仍有 4 个长期悬挂的 dependabot 升级 PR（react 18→19、headlessui 1→2、electron 40→43、react-syntax-highlighter 15→16）等待合并，这些升级的合并将构成下一版本的重要前置条件。

---

## 3. 项目进展

今日共有 **10 个 PR 成功合并/关闭**，项目在以下方向取得明确进展：

### 3.1 Cowork 协作核心能力（最大亮点）
- **[#2366](https://github.com/netease-youdao/LobsterAI/pull/2366)** — 支持浏览器多注释附件（liugang519）
  - 新增浏览器注释协议、WebView preload、截图资产存储 IPC
  - 支持在浏览器中批量创建注释并保存裁剪截图
  - Cowork 消息 metadata 与 OpenClaw prompt 中传递结构化注释上下文
  - 补充多注释设计文档、资产存储、Redux 与运行时适配测试
  - **意义**：Cowork 跨上下文协作能力的关键里程碑，从单附件迈入多模态批注时代
- **[#2359](https://github.com/netease-youdao/LobsterAI/pull/2359)** — 保持预览面板和输入区布局稳定（liugang519）
  - 为 artifact 面板拖拽柄与内容区设置稳定 key，避免预览子树被重建
  - 同步更新输入区高度，减少展开/收起时的闪动

### 3.2 Windows 平台分发与更新链路
- **[#2367](https://github.com/netease-youdao/LobsterAI/pull/2367)** — Windows dist builds 显式 channel 入口（fisherdaddy）
  - 新增 `scripts/dist-win-channel.cjs` 与 `scripts/dist-win-web.cjs`
  - 显式传递 keyfrom 与 web-installer 环境变量，避免跨构建环境污染
- **[#2368](https://github.com/netease-youdao/LobsterAI/pull/2368)** — Windows 静默更新（fisherdaddy，**OPEN**）
  - 通过 PowerShell `Start-Process` 以 `/S` 静默模式启动 NSIS 安装器
  - 拒绝 UAC 时返回 exit 1223，转为本地化错误提示
  - 完成后自动重启应用

### 3.3 OpenClaw / 运行时配置
- **[#2365](https://github.com/netease-youdao/LobsterAI/pull/2365)** — openclaw 配置热重载改用 RPC ack 而非文件（fisherdaddy）

### 3.4 AI Skin（外观）体验
- **[#2361](https://github.com/netease-youdao/LobsterAI/pull/2361)** — AI 皮肤创建流程优化（btc69m979y-dotcom）
  - 在"外观"设置中新增持久化 AI 皮肤创建入口（含首次使用引导）
  - 将 AI Skin Designer kit 流程放置于"Try Asking"首位

### 3.5 稳定性 Bug 修复
- **[#2364](https://github.com/netease-youdao/LobsterAI/pull/2364)** — 修复会话刷新时滚动跳变
- **[#2363](https://github.com/netease-youdao/LobsterAI/pull/2363)** — 修复周期性 IM 消息闪烁
- **[#2362](https://github.com/netease-youdao/LobsterAI/pull/2362)** — 修复 Cron UI bug
- **[#2360](https://github.com/netease-youdao/LobsterAI/pull/2360)** — 登录重试期间保留本地 callback
- **[#1349](https://github.com/netease-youdao/LobsterAI/pull/1349)** — POPO 连接性测试加入真实 API 校验（修复长期 bug #1287）

**整体评估**：今日合并的功能性 PR（#2366、#2367、#2361、#2365）覆盖了协作、构建、AI 外观、运行时配置四大方向；修复类 PR（#2364、#2363、#2362、#2360、#1349、#2359）显著降低用户在登录、IM、cron、artifacts、IM 闪烁等高频场景的体验摩擦。**项目整体向前迈进了稳健的一步**。

---

## 4. 社区热点

由于 **0 条 Issues 互动**，今日无 Issues 维度上的社区热点。PR 维度上反应与互动数据均显示评论与点赞为 0（GitHub 限制未抓取完整），需从 PR 内容本身识别关注点：

| 关注热度 | PR | 主题 | 链接 |
|---|---|---|---|
| 🔥 高 | #2366 | 浏览器多注释附件（功能最大型） | [link](https://github.com/netease-youdao/LobsterAI/pull/2366) |
| 🔥 高 | #2368 | Windows 静默更新（运维痛点） | [link](https://github.com/netease-youdao/LobsterAI/pull/2368) |
| 🔥 中 | #2367 | Windows 显式 channel 入口（构建系统） | [link](https://github.com/netease-youdao/LobsterAI/pull/2367) |
| 🔥 中 | #2361 | AI 皮肤创建流程 | [link](https://github.com/netease-youdao/LobsterAI/pull/2361) |

**诉求分析**：
- **企业内/桌面端运维** 高度关注静默更新能力（#2368），反映 LobsterAI 已在企业部署场景落地。
- **AI 协作场景** 推动多模态交互（#2366）需求，注释+截图让 AI 能"看见"并参与工作流。
- **构建系统可复现性**（#2367）反映团队对发行版质量的工程化要求。

---

## 5. Bug 与稳定性

今日 10 个已关闭 PR 中，**6 个为纯 Bug 修复**：

| 严重程度 | 编号 | 描述 | 状态 | 链接 |
|---|---|---|---|---|
| 🟡 中 | #2364 | 会话刷新时滚动位置跳变 | ✅ 已修复 | [PR](https://github.com/netease-youdao/LobsterAI/pull/2364) |
| 🟡 中 | #2363 | 周期性 IM 消息闪烁 | ✅ 已修复 | [PR](https://github.com/netease-youdao/LobsterAI/pull/2363) |
| 🟡 中 | #2362 | Cron UI 显示异常 | ✅ 已修复 | [PR](https://github.com/netease-youdao/LobsterAI/pull/2362) |
| 🟠 高 | #2360 | 登录重试丢失本地 callback | ✅ 已修复 | [PR](https://github.com/netease-youdao/LobsterAI/pull/2360) |
| 🟠 高 | #1349 | POPO 连通性测试无论凭据是否正确都显示"通过"（#1287） | ✅ 已修复 | [PR](https://github.com/netease-youdao/LobsterAI/pull/1349) |
| 🟢 低 | #2359 | 展开预览/输入区时布局闪动 | ✅ 已修复 | [PR](https://github.com/netease-youdao/LobsterAI/pull/2359) |

**严重 Bug 说明**：
- **#1349** 暴露的是**安全/可用性双重风险**：POPO 凭据未做真实校验，意味着用户/企业配置错误时无任何提示，依赖该校验的自动化流程可能误判连通性。该 fix 应作为优先回溯测试项。
- **#2360** 涉及登录认证流程，影响所有反复登录用户。

**今日未报告新的崩溃/回归类 Issue**。

---

## 6. 功能请求与路线图信号

由于 Issues 0 条更新，直接功能请求信号缺失。但从今日 PR 队列可推断路线图走向：

| 方向 | 信号 PR | 可能的下一阶段 |
|---|---|---|
| Cowork 多模态协作 | [#2366](https://github.com/netease-youdao/LobsterAI/pull/2366) | 注释可能扩展到 PDF、视频帧、代码 diff |
| Windows 企业级部署 | [#2367](https://github.com/netease-youdao/LobsterAI/pull/2368) | 静默更新、MSI 通道、组策略分发 |
| AI 视觉个性化 | [#2361](https://github.com/netease-youdao/LobsterAI/pull/2361) | AI 皮肤库/分享/导入 |
| 前端大版本迁移 | #1277、#1282、#1283、#1284 | 待合并后将解锁新版本 React 19 + headlessui 2 的 UI 重写基础 |

> ⚠️ **注意**：React 19 与 headlessui 2 的 API breaking 较大，合并后预计会带来新一轮 UI 调整，组件 API 兼容性需要关注。

---

## 7. 用户反馈摘要

**今日 Issues 无新增互动，无直接用户反馈可提炼。**

可从 PR 描述中侧面推断用户痛点（仅供参考）：
- **登录可靠性**（#2360）→ 用户在多端/重试场景下丢失回调问题曾长期存在
- **POPO 凭据配置**（#1349）→ "无论填什么凭据都显示成功"是典型给生产环境埋雷
- **滚动/闪烁/闪动**（#2364、#2363、#2359）→ 长时间使用会话、IM 列表、Artifact 面板的视觉稳定性是核心痛点
- **会话刷新滚动** → 用户在长会话中频繁切换/刷新时定位困难

建议在后续日报中持续追踪用户复现率与 PR 修复的覆盖广度。

---

## 8. 待处理积压

### 8.1 长期未关闭的 PR（需关注）

| PR | 创建日期 | 主题 | 状态 | 链接 |
|---|---|---|---|---|
| #1277 | 2026-04-02 | 升级 electron 40→43 / electron-builder | 🟡 OPEN，今日有更新 | [link](https://github.com/netease-youdao/LobsterAI/pull/1277) |
| #1282 | 2026-04-02 | 升级 @headlessui/react 1.7→2.2 | 🟡 OPEN，标记 stale | [link](https://github.com/netease-youdao/LobsterAI/pull/1282) |
| #1283 | 2026-04-02 | 升级 react 18→19 | 🟡 OPEN，标记 stale | [link](https://github.com/netease-youdao/LobsterAI/pull/1283) |
| #1284 | 2026-04-02 | 升级 react-syntax-highlighter 15→16 | 🟡 OPEN，标记 stale | [link](https://github.com/netease-youdao/LobsterAI/pull/1284) |
| #2368 | 2026-07-20 | Windows 静默更新 | 🟡 OPEN | [link](https://github.com/netease-youdao/LobsterAI/pull/2368) |

### 8.2 维护者建议

1. **优先审视 4 个 dependabot 升级 PR**（已悬挂约 3.5 个月）：其中 React 19 与 headlessui 2 为**主版本升级**，涉及大量组件级改动。建议拆分为可独立合并的小批次或建立迁移 epic，否则将持续阻塞前端现代化进程。
2. **#2368 Windows 静默更新**作为企业部署关键能力，建议优先 review 与测试覆盖。
3. **Issues 0 互动**的现象需进一步观察：是仓库健康度极高，还是 Issues 渠道未被有效使用？建议关注 Issues 渠道的可达性（如模板、标签分配）。

---

## 附录：项目健康度评估

| 维度 | 评分 | 说明 |
|---|---|---|
| 提交活跃度 | ⭐⭐⭐⭐ | 15 个 PR 更新，覆盖 4 位核心贡献者 |
| 修复及时性 | ⭐⭐⭐⭐ | 10/15 PR 当日合并，bug 修复率高 |
| Issue 响应 | ⭐ | 0 互动，渠道活跃度待确认 |
| 版本发布 | ⭐⭐ | 今日无新版本，依赖升级积压 |
| 路线图清晰度 | ⭐⭐⭐ | 从 PR 队列可推测方向但缺少公开 roadmap |
| 整体健康度 | ⭐⭐⭐☆ | 维护活跃，技术债（依赖升级）需关注 |

---

*报告基于 2026-07-21 公开 GitHub 数据生成，所有链接均为 PR 直链。如需对比历史趋势或深挖特定方向，请提供更细颗粒度数据。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报
**日期：2026-07-21**

---

## 1. 今日速览

CoPaw（QwenPaw）今日继续保持高活跃度：过去 24 小时共产生 30 条 Issue 更新与 42 条 PR 更新，关闭/合并了 8 个 Issue 与 10 个 PR，但同时新增/激活了 22 个 Issue 和 32 个待合并 PR，净增长为正，整体呈"高速迭代 + 持续积压"态势。当日无版本发布，但社区集中爆发出多个与 **AgentScope 2.0 适配、ReAct 循环稳定性、Desktop/Tauri 跨平台兼容性** 相关的关键 Bug，2.0.x 版本在生产环境暴露的缺陷明显增加。值得关注的是，`feat/unified_browser` 浏览器架构重构与多个内存/记忆系统增强 PR 已进入评审末期，距离合并只差临门一脚。

---

## 2. 版本发布

⚠️ 今日无新版本发布。最新稳定版仍为 `2.0.0.post3`，开发者分支已演进至 `2.0.1b1`（commit `52a369d9` / `8c2cceff`），多个修复 PR 尚未合入 release 分支。

---

## 3. 项目进展

### ✅ 今日合并/关闭的重要 PR

| PR | 标题 | 影响范围 | 价值 |
|---|---|---|---|
| [#6210](https://github.com/agentscope-ai/QwenPaw/pull/6210) | refactor: make the default loop an agent mode | Agent 核心 | 将默认 ReAct 循环提升为一等 `DefaultMode`，理清 `StopHandler` 与生命周期归属，是 agent mode 体系重构的基石 |
| [#6235](https://github.com/agentscope-ai/QwenPaw/pull/6235) | feat(memory): enhance ReMe Light index maintenance stability | 长期记忆 | 升级 `reme-ai` 至 0.4.1.3，索引重建从"启动自动执行"改为显式维护，补齐控制台/API 入口；引入并发落盘保护与 Markdown 分块优化 |
| [#5922](https://github.com/agentscope-ai/QwenPaw/pull/5922) | feat(observability): track user/session/version on langfuse traces | 可观测性 | 将 `user_id`、`session_id`、包版本传播到 Langfuse trace，修正 root span 父子关系与 UUID 格式 |
| [#6150](https://github.com/agentscope-ai/QwenPaw/pull/6150) | feat(pawapp): add pawapp sdk and kanban app | 插件体系 | 引入 PawApp SDK 与 Kanban 应用示例，奠定后续 `qwenpaw-creator`（#6284）等插件的形态 |
| [#6101](https://github.com/agentscope-ai/QwenPaw/pull/6101) | [Refactor] Inconsistent conversation reset lifecycle across agent modes | Agent 模式 | 清理 `StopGate.reset()` 与 mode reset 的边界，闭环已存在但语义不清的重置链路 |

> 📊 **推进度评估**：今日合入/关闭的 10 个 PR 中有 4 个涉及 agent mode 与任务生命周期重构（#6210、#6101、#6273 预备、#6270 预备），是项目向"插件化、模式化"演进的关键一步；记忆系统与可观测性两条线也取得阶段性成果。

### 🟡 评审末期的高价值 PR（暂未合入）

- [#6151](https://github.com/agentscope-ai/QwenPaw/pull/6151) **refactor(tool_calls): background tool call offload mechanism** — 引入 `offload_deadline + kill_deadline` 双截止时间架构，修复 #6056 中 offload 误触发 cancel 与 hint 注入时序问题
- [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) **per-session model overrides** — 单 agent 多会话使用不同 LLM，补齐 Settings > Models 管理面板
- [#6238](https://github.com/agentscope-ai/QwenPaw/pull/6238) **perf(drivers): initialize handlers concurrently** — 启动期驱动并发初始化（8 路并发），解决多 MCP 配置下串行连接慢的问题
- [#6041](https://github.com/agentscope-ai/QwenPaw/pull/6041) **fix(loop): exempt read-only tools from doom loop detection** — 让只读工具（如 `memory_search`）不再被误判为 doom loop，解决 #5906 报告的连续读取被警告/终止问题

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issue

1. **[#6257](https://github.com/agentscope-ai/QwenPaw/issues/6257) - Multiple tool calls produce identical thinking output**（13 条评论，OPEN）
   - 用户反馈当 Agent 在单轮内执行多个 tool call 时，每个调用的 thinking block 内容完全相同，未做独立推理。已由 [PR #6280](https://github.com/agentscope-ai/QwenPaw/pull/6280) 提供修复（`align reasoning with tool segments`），正等待合入。
   - **诉求**：用户期待每个 tool call 携带独立、上下文相关的思考过程，避免重复 thinking 浪费 token 与混淆模型决策。

2. **[#5961](https://github.com/agentscope-ai/QwenPaw/issues/5961) - v2.0.0版本循环执行的问题**（8 条评论，CLOSED）
   - 搭配 `qwen3.7-plus` 模型时，Agent 反反复复"写入-删除-写入-删除"无法完成简单任务。**已关闭**，与 #6241、#4873、#6041 共同指向 doom loop 体系缺陷。

3. **[#4873](https://github.com/agentscope-ai/QwenPaw/issues/4873) - 同时开两个 subagent 会导致主 agent 无限快速轮询**（5 条评论，OPEN）
   - 多 subagent 并发场景下 `check_agent_task` 高频调用，Dashboard 可中断但飞书侧无法中断，暴露飞书通道与后台任务生命周期的兼容性问题。

4. **[#6242](https://github.com/agentscope-ai/QwenPaw/issues/6242) - Console embedding dimensions setting is not sent to OpenAI-compatible APIs**（3 条评论，OPEN）
   - Console 暴露的 `Embedding dimensions` 字段未传 `use_dimensions` 标志，导致与 OpenAI 兼容 API（如硅基流动、DeepSeek）协商维度失败。

### 🔍 跨 Issue 共识话题

- **AgentScope 2.0 兼容性问题**集中爆发：#6257、#6282、#4873 都涉及 AgentScope 2 ReAct 迭代在 QwenPaw 内的 replay 与格式化异常
- **2.0.0 升级路径**：#5959（脚本升级失败仍停留在 1.1.12.post3）凸显升级体验断点
- **MEMORY.md vs Dream digest 定位**（#6222）：用户对双轨记忆体系困惑，急需官方文档澄清

---

## 5. Bug 与稳定性

按严重程度排列（**P0** = 主流程崩溃/数据丢失；**P1** = 核心功能不可用；**P2** = 边缘场景/UX 退化）：

### 🔴 P0 - 严重缺陷

| Issue | 现象 | 版本 | 修复 PR |
|---|---|---|---|
| [#6255](https://github.com/agentscope-ai/QwenPaw/issues/6255) | 聊天中随机抛 `openai.BadRequestError: 400 invalid_parameter_error` 致任务中断 | 2.0.0.post3 | ❌ 无 |
| [#6246](https://github.com/agentscope-ai/QwenPaw/issues/6246) | `recall_history` 在大 tool_result 上 `OSError: [Errno 36] File name too long` 崩溃 | — | ✅ 已关闭（合并入主干） |
| [#6197](https://github.com/agentscope-ai/QwenPaw/issues/6197) | Desktop 启动时 `nvidia-smi` 卡死导致 Tauri 进程挂起 | 2.0.0.post2 | ❌ 无 |

### 🟠 P1 - 核心功能异常

| Issue | 现象 | 修复 PR |
|---|---|---|
| [#6257](https://github.com/agentscope-ai/QwenPaw/issues/6257) / [#6282](https://github.com/agentscope-ai/QwenPaw/issues/6282) | 多 tool call 共享同一 thinking block | ✅ [#6280](https://github.com/agentscope-ai/QwenPaw/pull/6280) 待合入 |
| [#4873](https://github.com/agentscope-ai/QwenPaw/issues/4873) | 多 subagent 引发主 agent 无限轮询，飞书侧无法中断 | 🟡 [#6041](https://github.com/agentscope-ai/QwenPaw/pull/6041) 缓解 doom loop |
| [#6241](https://github.com/agentscope-ai/QwenPaw/issues/6241) | Agent 连续多轮重复输出 + `memory_search` 死循环 | 🟡 [#6041](https://github.com/agentscope-ai/QwenPaw/pull/6041) 缓解 |
| [#6258](https://github.com/agentscope-ai/QwenPaw/issues/6258) | OpenAI 模型 `max_output_tokens` 不生效 | ❌ 无 |
| [#6242](https://github.com/agentscope-ai/QwenPaw/issues/6242) | Embedding dimensions 未透传 | ❌ 无 |
| [#6250](https://github.com/agentscope-ai/QwenPaw/issues/6250) | `SANDBOX_FALLBACK` 硬编码弹审批，`approval_level: NONE` 绕过过粗 | ✅ 已关闭（提供 `allow_unsandboxed` 配置） |

### 🟡 P2 - 边缘场景

| Issue | 现象 | 修复 PR |
|---|---|---|
| [#6252](https://github.com/agentscope-ai/QwenPaw/issues/6252) | Linux Tauri 模式下 `Ctrl +/-`/`Ctrl + wheel` 缩放失效 | ❌ 无 |
| [#6239](https://github.com/agentscope-ai/QwenPaw/issues/6239) | Windows 拼接 User/Machine PATH 时丢失 `;`，子进程丢失 npm 全局 | 🟡 [#6203](https://github.com/agentscope-ai/QwenPaw/pull/6203) 修复 `tasklist` 同类隐患 |
| [#6261](https://github.com/agentscope-ai/QwenPaw/issues/6261) | 离线环境 code 模式无法预览文件，依赖在线资源 | ❌ 无 |
| [#5688](https://github.com/agentscope-ai/QwenPaw/issues/5688) | `App.tsx` 配置 `prefixCls="qwenpaw"` 与 `layout.css` 中 `ant-` 前缀不匹配 | ❌ 无 |
| [#6249](https://github.com/agentscope-ai/QwenPaw/issues/6249) | 源码 `uv pip install -e .` 启动 TUI 卡在 warming | ❌ 无 |

> 📈 **稳定性趋势**：今日新增 Bug 报告集中在 2.0.0.post3，主题从"功能缺失"转向"运行时崩溃/数据损坏"（`OSError 36`、Tauri 挂起、400 invalid_parameter），建议维护者优先发布 2.0.0.post4

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报
**报告日期：2026-07-21**

---

## 1. 今日速览

ZeroClaw 今日保持高强度迭代节奏，过去 24 小时内共有 39 个 Issue 更新、50 个 PR 更新，整体活跃度处于年内高位。项目以**内存子系统、记忆（Memory）安全、SOP 控制平面、Eval 评测体系**四条主线并进，标志性节点 #8891（持久化记忆跟踪器）和 #8288（SOP 5/5 路线图）均处于 in-progress 状态。安全相关议题（SSRF、Landlock 沙箱、技能供应链）密集涌现，反映 v0.9.0 临近的"安全强化冲刺"已经启动。CI/CD 层面出现 #9216 阻塞性回归（注释卫生门控失败），需维护者重点关注。

---

## 2. 版本发布

**无新版本发布。** 距离当前 0.8.3 已有较长时间，按 #6808 RFC 描述的轨迹，0.8.4 之后下一次稳定版本将进入 0.9.0 队列（认证、安全、网关、破坏性变更），详见 #7432。

---

## 3. 项目进展

今日共有 11 个 PR 合并/关闭，9 个 Issue 关闭，主要推进方向如下：

**安全与稳定性修复（已关闭）**
- 历史静默截断（#8837）、串口传输去同步（#9078）、OpenRouter 格式校验（#8675）等高优先级 Bug 已落地修复。
- ZeroCode TUI 体验问题集中收敛：复制包含 Markdown 围栏（#8664）、Code turn 无可见输出（#8644）、队列覆盖层背景继承（#8765）、transcript 鼠标选中拦截（#8944）四项 TUI 缺陷关闭。
- 共享固件协议 CI 覆盖（#9079）落地，固化 `#9157` 之后固件质量门控。

**Eval 评测体系（新增 PR）**
- #9223 新增 JUnit XML 报告格式，CI 报告生态进一步完善。
- #9228、#9227、#9226 三项 follow-up 跟踪卡（趋势仪表板 / LLM-judge 校准 / 内存种子与副作用评分）开立，明确 #7065 后续路径。

**SOP 与网关（在途）**
- #9203（SOP 鉴权 HTTP fan-in）、#9205（fan-in ingress 适配器）均已开放评审，对应 #6685 文档-实现不一致的修复路径。
- #9229 修复 REPL 的 Ctrl+C 状态机解析，替换每轮一监听器的临时方案。

**整体评估**：项目从"特性扩张"阶段过渡到"安全硬化 + 评测体系成熟 + 0.9.0 收口"阶段，本日推进的更多是质量门控与缺陷收敛，而非新功能铺设。

---

## 4. 社区热点

| 排名 | Issue | 标题 | 评论 | 👍 | 状态 |
|---|---|---|---|---|---|
| 1 | [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | RFC: Work Lanes, Board Automation, Label Cleanup | 14 | 0 | Accepted / 21 修订 |
| 2 | [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | Windows 74 个测试失败 | 10 | 0 | Accepted |
| 3 | [#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566) | A2A 协议互操作支持 | 9 | **7** | Accepted |
| 4 | [#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891) | 持久化记忆跟踪器 | 6 | 0 | In progress |
| 5 | [#7065](https://github.com/zeroclaw-labs/zeroclaw/issues/7065) | Agent 评估 harness | 4 | 0 | Accepted |

**诉求分析：**
- **#6808** 是治理层 RFC，已修订 21 次，是社区"工作流自动化"路线图的核心；其子议题涉及看板自动化与标签清理。
- **#3566** 是高赞提案（👍7），要求 ZeroClaw 接入 Linux 基金会 A2A 协议 0.3.0+；与外部代理（NanoClaw、OpenClaw、第三方 A2A 代理）互联是行业级刚需。
- **#7462** 反映 Windows + 中文环境的 CI 缺失，CI 仅跑 Linux 让 74 个平台相关测试无声失败，影响桌面用户。
- **#7065** + #9223/#9227/#9228 形成"评测闭环"链，已被 #7432 纳入 v0.9.0 队列。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 S0（数据丢失 / 安全风险）
- **[#9206](https://github.com/zeroclaw-labs/zeroclaw/issues/9206)** Cron `job_type="agent"` 工作空间路径间歇性被解析为 `/`，S0 级安全风险。尚无对应 PR，需优先响应。

### 🟠 S1（工作流阻塞）
- **[#9204](https://github.com/zeroclaw-labs/zeroclaw/issues/9204)** Landlock 沙箱将 zeroclaw 自身锁入 landlock，影响 SQLite 记忆访问。**继承自 #5153。**
- **[#9207](https://github.com/zeroclaw-labs/zeroclaw/issues/9207)** `web_fetch` 对 gzip/brotli/deflate 压缩响应返回乱码。工具层直接破坏。
- **[#9192](https://github.com/zeroclaw-labs/zeroclaw/issues/9192)** `shared_budget` TOCTOU 竞争 + `SopEngine::finish_run` mutex unwrap panic。运行时健壮性双坑。
- **[#9216](https://github.com/zeroclaw-labs/zeroclaw/issues/9216)** 注释卫生门控在 master 上失败，#8675 引用泄漏；**已阻塞合并流。**
- ~~#8675 OpenRouter 工具调用参数未校验 → 400~~（已关闭，修复已落地）

### 🟡 S2（功能降级）
- **[#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)** Windows 74 个测试失败（与 #9204 / #9207 / #9216 一并构成"Windows 故事"问题群）。
- ~~#8837 历史静默截断~~、~~#9078 串口去同步~~、~~#8644 Code turn 无输出~~、~~#8664 Copy 含围栏~~（均已关闭）

### 🟢 S3（小问题）
- **[#9202](https://github.com/zeroclaw-labs/zeroclaw/issues/9202)** `zeroclaw desktop` 链接失效且不识别已装 AppImage。
- **[#9198](https://github.com/zeroclaw-labs/zeroclaw/issues/9198)** Discord typing 指示器在 web 重载后卡死。
- ~~#9117 ZeroCode 启动需 ZEROCLAW_SOCKET（已关闭）~~、~~#8765 队列背景~~、~~#8944 transcript 鼠标复制~~（均已关闭）

---

## 6. 功能请求与路线图信号

**已纳入 v0.9.0 / 路线图的需求：**
- **[#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566) A2A 协议**（v0.9.0 tracker #7432 范围内）
- **[#7065](https://github.com/zeroclaw-labs/zeroclaw/issues/7065) `zeroclaw eval`**（replay + live 双模式 + 评分器 + LLM-as-judge）
- **[#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891) 持久化记忆**（策展/相关性/可操作性三面到对等）
- **[#8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288) SOP 5/5 里程碑**
- **[#9178](https://github.com/zeroclaw-labs/zeroclaw/issues/9178) ACP embedded resource blob + deliver_file**
- **[#8691](https://github.com/zeroclaw-labs/zeroclaw/issues/8691) ADR 基础线恢复**

**新出现的需求（评估纳入）：**
- **[#9228](https://github.com/zeroclaw-labs/zeroclaw/issues/9228)** 评测趋势仪表板 —— 与 #7065 同源，预计作为 0.10 候选。
- **[#9227](https://github.com/zeroclaw-labs/zeroclaw/issues/9227)** LLM-judge 校准工具 —— 影响评测可信度，建议尽快落地。
- **[#9226](https://github.com/zeroclaw-labs/zeroclaw/issues/9226)** 内存种子与副作用评分器 —— 评测覆盖度短板。

**PR 配套：**
- [#8900](https://github.com/zeroclaw-labs/zeroclaw/pull/8900)、[#8897](https://github.com/zeroclaw-labs/zeroclaw/pull/8897)、[#8984](https://github.com/zeroclaw-labs/zeroclaw/pull/8984) 三项 memory 主题 PR 构成记忆子系统的"分类/缓存/扫描"完整闭环。
- [#8979](https://github.com/zeroclaw-labs/zeroclaw/pull/8979) SOP channel gate + checkpoint（XL 规模、高风险、stacked）。
- [#9084](https://github.com/zeroclaw-labs/zeroclaw/pull/9084) 技能安装的供应链门控（筛查、回执、验证、沙箱）—— 直接应对第三方技能安全。

---

## 7. 用户反馈摘要

- **Windows 平台体验**成为今日最一致痛点：#7462 报告 74 个测试在 Win11 简体中文下失败；#9202 AppImage 检测失效；#9117（已关）反映 ZeroCode 需手动设 ZEROCLAW_SOCKET。用户对"Linux 优先 + Windows 二等公民"的不满正在累积。
- **AI 输出可信度**：#9207 反馈 `web_fetch` 返回乱码二进制，agent 无法解析；#8837 反馈上下文被静默截断且无提示，用户被迫主动询问最早上下文边界 —— 反映了"黑盒性"挫败感。
- **安全预期**：#9206 的 cron workspace 路径在 S0 严重度下"间歇性"工作空间回退到根目录，被标记为安全风险。社区对 silent fallback 类问题的容忍度降低。
- **生态互联期望**：#3566 的 7 票赞同 + A2A 协议背景，透露出用户希望 ZeroClaw 接入开放智能体生态（OpenClaw / NanoClaw / 第三方 A2A 节点），而不是孤立网关。
- **质量门控摩擦**：#9216 注释卫生门控在 master 上失败，社区开发者对 CI 红绿频繁翻转感到疲态。

---

## 8. 待处理积压

| 编号 | 标题 | 风险 | 备注 |
|---|---|---|---|
| [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | Windows 74 个测试失败 | high | 自 2026-06-10 持续更新，CI 未覆盖；与 #9216 形成"CI 失守"组合 |
| [#9206](https://github.com/zeroclaw-labs/zeroclaw/issues/9206) | Cron workspace 路径回退到 `/` | **S0** | 新开 S0 安全议题，**无对应 PR**，需 24 小时内 hotfix |
| [#9204](https://github.com/zeroclaw-labs/zeroclaw/issues/9204) | Landlock 自锁 | S1 | 继承 #5153 已数月未根治；建议作为 0.9.0 blocker |
| [#6685](https://github.com/zeroclaw-labs/zeroclaw/issues/6685) | SOP HTTP fan-in 文档-实现不一致 | high | 文档宣称已支持，代码未接；#9203 正在修复但仍未合并 |
| [#9192](https://github.com/zeroclaw-labs/zeroclaw/issues/9192) | shared_budget TOCTOU / unwrap panic | S1 | 运行时 panic 风险，**无对应 PR** |
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | v0.9.0 安全/网关/破坏性变更队列 | high | 0.9.0 发布需此 tracker 内全部清零；进度未公开报告 |
| [#8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288) | SOP 5/5 路线图 | high | 13 项能力中尚余多项未达 acceptance bar |
| [#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891) | 持久化记忆路线图 | high | 18 项开放中 15 为 PR，合并/审查负荷重 |

**维护者建议关注顺序：**
1. 🚨 **#9206**（S0 安全）→ 立即修复
2. 🚨 **#9216**（CI 阻塞 master）→ 已影响所有 PR 合并
3. ⚠️ **#9204 / #9192**（S1 阻塞性）→ 进入 0.9.0 blocker 列表
4. 📋 集中评审 [#8900](https://github.com/zeroclaw-labs/zeroclaw/pull/8900) / [#8897](https://github.com/zeroclaw-labs/zeroclaw/pull/8897) / [#8984](https://github.com/zeroclaw-labs/zeroclaw/pull/8984) memory 三件套，推进 #8891 收口
5. 📋 评审 [#9203](https://github.com/zeroclaw-labs/zeroclaw/pull/9203) / [#9205](https://github.com/zeroclaw-labs/zeroclaw/pull/9205) 关闭 #6685
6. 📋 推进 [#8979](https://github.com/zeroclaw-labs/zeroclaw/pull/8979) / [#9030](https://github.com/zeroclaw-labs/zeroclaw/pull/9030) SOP 控制平面拼图
7. 🔍 评估 [#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566) A2A 协议纳入 0.9.0 的可行性（社区呼声最高）

---

*报告基于 2026-07-21 GitHub 公开数据生成。共统计 39 条 Issue 更新、50 条 PR 更新，0 个新发布。*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*