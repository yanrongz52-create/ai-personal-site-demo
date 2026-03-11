---
title: "Make + Notion 自动化：自动整理收藏的文章到数据库"
date: "2024-12-08"
summary: "用 Make（原 Integromat）将微信收藏的文章自动同步到 Notion 数据库，告别手动整理。"
category: "automation-lab"
tags: ["Make", "Notion", "自动化", "知识管理"]
tools: ["Make", "Notion", "微信"]
---

## 痛点

我经常在微信里收藏文章，但收藏夹越来越乱，根本找不到之前看过的好文章。

## 解决方案

用 Make 搭建自动化流程：
1. 通过邮件转发触发 Make 场景
2. Make 自动提取文章标题、链接和关键词
3. 自动创建 Notion 数据库条目并分类

## 心得

自动化工具的学习曲线比想象中低很多，关键是先想清楚「我要自动化什么」。
