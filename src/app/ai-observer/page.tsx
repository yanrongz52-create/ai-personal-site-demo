/**
 * AI 观察列表页（/ai-observer）
 *
 * 展示所有分类为 "ai-observer" 的文章。
 * 数据通过 getPostsByCategory 函数从 Markdown 文件中获取。
 */
import PostCard from "@/components/PostCard";
import { getPostsByCategory } from "@/lib/posts";

export default function AiObserverPage() {
  /* 获取所有 AI 观察分类的文章 */
  const posts = getPostsByCategory("ai-observer");

  return (
    <div>
      {/* 页面标题区域 */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">AI 观察</h1>
        <p className="text-gray-600">
          关注 AI 行业最新动态、产品发布、技术趋势，用非技术人的视角解读 AI 世界。
        </p>
      </div>

      {/* 文章列表 */}
      {posts.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
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
        <p className="text-gray-500 text-center py-12">
          暂无 AI 观察文章。请在 content/posts 目录中添加 category 为 &quot;ai-observer&quot; 的 Markdown 文件。
        </p>
      )}
    </div>
  );
}
