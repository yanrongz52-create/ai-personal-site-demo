/**
 * 文章卡片组件（PostCard）
 *
 * 用于在列表页中展示单篇文章的摘要信息。
 * 包含：标题、日期、摘要、分类标签、工具标签。
 *
 * Props 说明：
 * - title: 文章标题
 * - date: 发布日期
 * - summary: 文章摘要
 * - category: 文章分类
 * - tags: 标签数组
 * - tools: 工具数组（可选）
 */

/** 分类名称的中文映射 */
const categoryLabels: Record<string, string> = {
  "ai-observer": "AI 观察",
  "automation-lab": "自动化实验室",
  "growth-notes": "成长手记",
};

/** 分类对应的颜色样式 */
const categoryColors: Record<string, string> = {
  "ai-observer": "bg-blue-100 text-blue-700",
  "automation-lab": "bg-green-100 text-green-700",
  "growth-notes": "bg-purple-100 text-purple-700",
};

interface PostCardProps {
  title: string;
  date: string;
  summary: string;
  category: string;
  tags: string[];
  tools?: string[];
}

export default function PostCard({ title, date, summary, category, tags, tools }: PostCardProps) {
  return (
    <article className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
      {/* 分类标签和日期 */}
      <div className="flex items-center gap-3 mb-3">
        <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${categoryColors[category] || "bg-gray-100 text-gray-700"}`}>
          {categoryLabels[category] || category}
        </span>
        <time className="text-sm text-gray-500">{date}</time>
      </div>

      {/* 文章标题 */}
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>

      {/* 文章摘要 */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{summary}</p>

      {/* 标签列表 */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* 工具列表（仅自动化实验室文章显示） */}
      {tools && tools.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span key={tool} className="text-xs bg-yellow-50 text-yellow-700 px-2 py-1 rounded border border-yellow-200">
              🔧 {tool}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
