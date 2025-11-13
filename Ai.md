# Tampermonkey Scripts 项目文档

## 项目概述

这是一个个人常用的 Tampermonkey 脚本集合项目，包含多个实用的浏览器用户脚本，用于增强不同网站的功能和用户体验。

**仓库地址**: https://github.com/gaoyang/tampermonkey-scripts  
**作者**: gaoyang  
**许可证**: MIT License

## 项目结构

```
tampermonkey-scripts/
├── GitHub/          # GitHub 网站增强脚本
│   └── github.js
├── QingShu/         # 青书学堂相关脚本
│   └── auto.js
├── V2EX/            # V2EX 网站增强脚本
│   └── dark-toggle.js
├── README.md        # 项目说明文档
├── LICENSE          # MIT 开源许可证
└── .gitignore       # Git 忽略配置
```

## 脚本详解

### 1. GitHub Extension (github.js)

**位置**: `GitHub/github.js`  
**版本**: 0.1  
**功能**: GitHub 网站功能扩展

#### 主要功能
- **添加 Repositories 快捷入口**: 在 GitHub 全局导航栏中自动添加一个指向当前用户仓库列表的快捷链接
- 自动获取当前登录用户名
- 在全局导航栏中插入"Repositories"链接
- 支持页面动态更新（通过 history.replaceState）

#### 适用网站
- https://github.com/*

#### 技术特点
- 使用原生 JavaScript 实现
- 通过 DOM 操作动态添加导航元素
- 读取页面 meta 标签获取用户信息

### 2. 青书学堂自动刷课 (auto.js)

**位置**: `QingShu/auto.js`  
**版本**: 1.1  
**功能**: 青书学堂在线课程自动播放工具

#### 主要功能
- **自动播放视频课程**: 自动播放当前视频课程内容
- **自动切换下一节课**: 视频结束后自动跳转到下一节课程
- **静音播放**: 自动将视频设为静音模式
- **进度提示**: 显示当前状态和下一节课程信息
- **智能过滤**: 跳过非视频课程（如基本信息页面）

#### 适用网站
- https://*.qingshuxuetang.com/*/CourseShow*

#### 技术特点
- 使用 `CoursewarePlayer` API 控制视频播放
- 通过 URL 参数 `nodeId` 管理课程进度
- 监听视频 `ended` 事件实现自动切换
- 实时显示脚本状态信息

#### 使用限制
- 仅支持视频课程，不支持其他类型的课程内容
- 需要在课程页面加载完成后运行（document-end）

### 3. V2EX 夜间模式自动切换 (dark-toggle.js)

**位置**: `V2EX/dark-toggle.js`  
**版本**: 1.0  
**功能**: V2EX 网站夜间模式跟随系统主题自动切换

#### 主要功能
- **系统主题同步**: 自动检测操作系统的深色/浅色主题设置
- **自动切换**: 根据系统主题自动切换 V2EX 的夜间模式
- **实时监听**: 监听系统主题变化，动态调整网站显示模式

#### 适用网站
- https://www.v2ex.com/*

#### 使用前提
- 需要先登录 V2EX 账号（只有登录用户才能使用夜间模式功能）

#### 技术特点
- 使用 `window.matchMedia('(prefers-color-scheme: dark)')` API 检测系统主题
- 监听主题变化事件（兼容不同浏览器的 API）
- 模拟点击页面上的夜间模式切换按钮

## 浏览器兼容性说明

### CSP（内容安全策略）限制

由于浏览器的内容安全策略（Content Security Policy，CSP）限制，某些启用了 CSP 的网站可能无法正常使用油猴脚本。

#### 解决方案

**Safari 浏览器特别说明**：
目前仅 Safari 浏览器无法被脚本扩展自动绕过 CSP 限制。对于 Safari 用户，可以通过代理软件修改响应头来解除 CSP 限制。

**示例：使用 QuantumultX 解除 GitHub 的 CSP 限制**

在 QuantumultX 中添加以下重写规则：

```
^https?://github\.com($|/.*) url response-header (\r\n)Content-Security-Policy:.+(\r\n) response-header $1Content-Security-Policy:$2
```

这条规则会移除 GitHub 网站响应头中的 CSP 策略，从而允许油猴脚本正常运行。

## 安装和使用

### 前提条件
1. 安装 Tampermonkey 浏览器扩展
   - Chrome/Edge: [Tampermonkey - Chrome Web Store](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - Firefox: [Tampermonkey - Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
   - Safari: [Tampermonkey - App Store](https://apps.apple.com/app/tampermonkey/id1482490089)

### 安装脚本
1. 在 Tampermonkey 中创建新脚本
2. 复制对应脚本的代码
3. 保存并启用脚本
4. 访问对应网站即可自动运行

## 开发信息

### 代码规范
- 使用严格模式（'use strict'）
- 使用立即执行函数表达式（IIFE）封装代码
- 遵循 ES6+ JavaScript 标准

### UserScript 元数据标准
所有脚本都包含标准的 UserScript 元数据块：
- `@name`: 脚本名称
- `@namespace`: 命名空间（项目仓库地址）
- `@version`: 版本号
- `@description`: 功能描述
- `@author`: 作者信息
- `@match`: 匹配的网站 URL
- `@icon`: 脚本图标
- `@grant`: 所需权限
- `@license`: 开源许可证

## 贡献指南

本项目采用 MIT 开源许可证，欢迎贡献代码或提出改进建议。

### 如何贡献
1. Fork 本仓库
2. 创建特性分支
3. 提交变更
4. 推送到分支
5. 创建 Pull Request

## 许可证

MIT License - Copyright (c) 2022 gaoyang

允许自由使用、修改和分发，但需保留原作者版权声明。

## 注意事项

1. 这些脚本仅供个人学习和使用
2. 使用自动化脚本时请遵守网站的服务条款
3. 某些功能可能因网站更新而失效，需要及时更新脚本
4. 建议在使用前备份重要数据
5. 脚本运行不保证 100% 可靠，请谨慎使用

## 更新日志

### GitHub Extension
- v0.1: 初始版本，添加 Repositories 快捷入口功能

### 青书学堂自动刷课
- v1.1: 当前版本
- 功能完善，支持自动播放和课程切换

### V2EX 夜间模式切换
- v1.0: 初始版本，支持系统主题同步

## 联系方式

- GitHub: https://github.com/gaoyang/tampermonkey-scripts
- 项目 Issues: https://github.com/gaoyang/tampermonkey-scripts/issues
