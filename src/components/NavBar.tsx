/**
 * 导航栏组件（NavBar）
 *
 * 显示在每个页面顶部，包含网站名称和所有栏目链接。
 * 使用 Next.js 的 Link 组件实现客户端导航（不刷新页面）。
 *
 * 导航链接说明：
 * - 首页 /               → 网站首页，展示最新文章
 * - AI 观察 /ai-observer  → AI 行业观察文章列表
 * - 自动化实验室 /automation-lab → 自动化工具实验文章列表
 * - 工具导航 /tools        → AI/自动化工具推荐卡片页
 * - 成长手记 /growth-notes → 个人成长记录文章列表
 * - 关于我 /about          → 个人介绍静态页面
 */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

/** 导航链接的数据结构 */
interface NavLink {
  /** 显示的中文名称 */
  label: string;
  /** 对应的页面路由路径 */
  href: string;
}

/** 所有导航链接配置 */
const navLinks: NavLink[] = [
  { label: "首页", href: "/" },
  { label: "AI 观察", href: "/ai-observer" },
  { label: "自动化实验室", href: "/automation-lab" },
  { label: "工具导航", href: "/tools" },
  { label: "成长手记", href: "/growth-notes" },
  { label: "关于我", href: "/about" },
];

/**
 * NavBar 组件
 * 响应式设计：桌面端水平排列，移动端可折叠菜单
 */
export default function NavBar() {
  /* 当前页面路径，用于高亮当前导航项 */
  const pathname = usePathname();
  /* 移动端菜单的展开/收起状态 */
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* 网站标题/Logo */}
          <Link href="/" className="text-xl font-bold text-primary-600 hover:text-primary-700">
            AI 学习站
          </Link>

          {/* 桌面端导航链接 */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-primary-50 text-primary-700"
                    : "text-gray-600 hover:text-primary-600 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* 移动端汉堡菜单按钮 */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="切换菜单"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* 移动端展开的导航菜单 */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === link.href
                    ? "bg-primary-50 text-primary-700"
                    : "text-gray-600 hover:text-primary-600 hover:bg-gray-50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
