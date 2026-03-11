# AI 学习站 - 个人 AI 学习分享网站 Demo

一个基于 Next.js + Tailwind CSS 搭建的个人 AI 学习分享网站，包含 AI 观察、自动化实验室、工具导航、成长手记等栏目。

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **内容**: 本地 Markdown 文件 + gray-matter 解析
- **部署**: Vercel

## 本地开发

```bash
# 1. 克隆仓库
git clone <仓库地址>
cd ai-personal-site-demo

# 2. 安装依赖
npm install

# 3. 启动开发服务器
npm run dev

# 4. 打开浏览器访问
# http://localhost:3000
```

## 项目结构

```
ai-personal-site-demo/
├── content/posts/          # Markdown 文章文件（数据来源）
├── src/
│   ├── app/                # Next.js App Router 页面
│   │   ├── layout.tsx      # 根布局（导航栏 + 页脚）
│   │   ├── page.tsx        # 首页
│   │   ├── ai-observer/    # AI 观察列表页
│   │   ├── automation-lab/ # 自动化实验室列表页
│   │   ├── tools/          # 工具导航页
│   │   ├── growth-notes/   # 成长手记列表页
│   │   └── about/          # 关于我页面
│   ├── components/         # 可复用组件
│   │   ├── NavBar.tsx      # 导航栏
│   │   └── PostCard.tsx    # 文章卡片
│   └── lib/
│       └── posts.ts        # 文章数据加载与筛选逻辑
├── tailwind.config.ts      # Tailwind CSS 配置
├── tsconfig.json           # TypeScript 配置
└── package.json            # 项目依赖和脚本
```

## 添加新文章

在 `content/posts/` 目录下创建 `.md` 文件，frontmatter 格式：

```markdown
---
title: "文章标题"
date: "2024-12-15"
summary: "文章摘要"
category: "ai-observer"    # 可选值: ai-observer | automation-lab | growth-notes
tags: ["标签1", "标签2"]
tools: ["工具1", "工具2"]  # 可选，主要用于自动化实验室文章
---

正文内容...
```

## 常见报错 & 如何查看日志

- **本地开发**：查看终端（运行 `npm run dev` 的窗口）输出的错误信息
- **Vercel 部署出错**：登录 Vercel 后台 → 选择项目 → Deployments → 点击失败的部署 → 查看 Build Log
- **文章不显示**：检查 `content/posts/` 目录下是否有 `.md` 文件，以及 frontmatter 格式是否正确

## 部署到 Vercel

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入 GitHub 仓库
3. 保持默认构建设置，点击 Deploy
4. 后续推送到 main 分支将自动触发重新部署
