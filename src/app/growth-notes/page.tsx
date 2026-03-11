/**
 * 成长手记列表页（/growth-notes）
 *
 * 展示所有分类为 "growth-notes" 的文章。
 * 记录个人成长、学习心得和转型经历。
 */
import PostCard from "@/components/PostCard";
import { getPostsByCategory } from "@/lib/posts";

export default function GrowthNotesPage() {
  /* 获取所有成长手记分类的文章 */
  const posts = getPostsByCategory("growth-notes");

  return (
    <div>
      {/* 页面标题区域 */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">成长手记</h1>
        <p className="text-gray-600">
          记录从零开始学习 AI 产品经理的心路历程，分享学习方法、思维转变和成长感悟。
        </p>
      </div>

      {/* 文章列表 */}
      {posts.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
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
          暂无成长手记文章。请在 content/posts 目录中添加 category 为 &quot;growth-notes&quot; 的 Markdown 文件。
        </p>
      )}
    </div>
  );
}
