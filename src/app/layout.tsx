/**
 * 根布局组件（Root Layout）
 *
 * 这是整个网站的最外层布局，所有页面都会被包裹在这个组件中。
 * 包含：
 * - <html> 和 <body> 标签
 * - 全局样式导入
 * - 导航栏（NavBar）
 * - 页脚（Footer）
 *
 * Next.js App Router 要求每个应用必须有一个根 layout.tsx。
 */
import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";

/** 网站的 SEO 元数据（标题和描述） */
export const metadata: Metadata = {
  title: "AI 学习站 - 个人 AI 学习分享",
  description: "一个非技术背景大学生的 AI 学习、观察与实践记录站点",
};

/**
 * RootLayout 组件
 * @param children - 当前页面的内容，由 Next.js 自动注入
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">
        {/* 顶部导航栏 - 所有页面共享 */}
        <NavBar />

        {/* 页面主体内容区域 */}
        <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-8">
          {children}
        </main>

        {/* 页脚 */}
        <footer className="border-t border-gray-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 text-center text-sm text-gray-500">
            © 2024 AI 学习站 | 使用 Next.js + Tailwind CSS 构建 | 部署于 Vercel
          </div>
        </footer>
      </body>
    </html>
  );
}
