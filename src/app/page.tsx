/**
 * 首页（Home Page）
 *
 * 网站的入口页面，展示：
 * 1. Hero 区域 - 网站介绍文案
 * 2. 最新文章列表 - 最近发布的 6 篇文章
 * 3. 分类推荐 - 「最新 AI 观察」和「最新自动化实验室」各 3 篇
 *
 * 数据来源：通过 src/lib/posts.ts 读取 content/posts 目录下的 Markdown 文件
 */
import PostCard from "@/components/PostCard";
import { getAllPosts, getPostsByCategory } from "@/lib/posts";
import Link from "next/link";

export default function HomePage() {
  /* 获取所有文章（按日期倒序） */
  const allPosts = getAllPosts();

  /* 获取最近 6 篇文章 */
  const recentPosts = allPosts.slice(0, 6);

  /* 分别获取两个分类的最新 3 篇文章 */
  const aiObserverPosts = getPostsByCategory("ai-observer").slice(0, 3);
  const automationLabPosts = getPostsByCategory("automation-lab").slice(0, 3);

  return (
    <div className="space-y-12">
      {/* ===== Hero 区域：网站介绍 ===== */}
      <section className="text-center py-12 bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          AI 学习站
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          一个非技术背景大学生的 AI 学习与实践记录。
          <br />
          在这里分享 AI 行业观察、自动化工具实验和个人成长故事。
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/ai-observer"
            className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            AI 观察
          </Link>
          <Link
            href="/automation-lab"
            className="px-6 py-2 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
          >
            自动化实验室
          </Link>
        </div>
      </section>

      {/* ===== 最新文章列表 ===== */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">最新文章</h2>
        {recentPosts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <PostCard
                key={post.slug}
                title={post.title}
                date={post.date}
                summary={post.summary}
                category={post.category}
                tags={post.tags}
                tools={post.tools}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">暂无文章，请在 content/posts 目录中添加 Markdown 文件。</p>
        )}
      </section>

      {/* ===== 最新 AI 观察 ===== */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">最新 AI 观察</h2>
          <Link href="/ai-observer" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
            查看全部 →
          </Link>
        </div>
        {aiObserverPosts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-3">
            {aiObserverPosts.map((post) => (
              <PostCard
                key={post.slug}
                title={post.title}
                date={post.date}
                summary={post.summary}
                category={post.category}
                tags={post.tags}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">暂无 AI 观察文章。</p>
        )}
      </section>

      {/* ===== 最新自动化实验室 ===== */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">最新自动化实验室</h2>
          <Link href="/automation-lab" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
            查看全部 →
          </Link>
        </div>
        {automationLabPosts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-3">
            {automationLabPosts.map((post) => (
              <PostCard
                key={post.slug}
                title={post.title}
                date={post.date}
                summary={post.summary}
                category={post.category}
                tags={post.tags}
                tools={post.tools}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">暂无自动化实验室文章。</p>
        )}
      </section>
    </div>
  );
}
