/**
 * 自动化实验室列表页（/automation-lab）
 *
 * 展示所有分类为 "automation-lab" 的文章。
 * 每篇文章卡片额外显示「用到的工具」信息。
 */
import PostCard from "@/components/PostCard";
import { getPostsByCategory } from "@/lib/posts";

export default function AutomationLabPage() {
  /* 获取所有自动化实验室分类的文章 */
  const posts = getPostsByCategory("automation-lab");

  return (
    <div>
      {/* 页面标题区域 */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">自动化实验室</h1>
        <p className="text-gray-600">
          记录使用各种 AI 和自动化工具的实验过程，分享真实的使用体验和工作流搭建经验。
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
              tools={post.tools}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center py-12">
          暂无自动化实验室文章。请在 content/posts 目录中添加 category 为 &quot;automation-lab&quot; 的 Markdown 文件。
        </p>
      )}
    </div>
  );
}
