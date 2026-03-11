/**
 * 工具导航页（/tools）
 *
 * 静态页面，展示推荐的 AI 和自动化工具卡片。
 * 数据直接写在页面中（不从文件读取），方便快速修改。
 *
 * 每个工具包含：
 * - name: 工具名称
 * - type: 工具类型（如「写作」「自动化」「搜索」等）
 * - description: 一句话评价
 * - url: 官网链接
 */

/** 工具数据结构 */
interface Tool {
  name: string;
  type: string;
  description: string;
  url: string;
}

/** 推荐工具列表（可在此处添加或修改） */
const tools: Tool[] = [
  {
    name: "ChatGPT",
    type: "对话 / 写作",
    description: "OpenAI 出品的 AI 对话助手，支持写作、编程、翻译等多种场景。",
    url: "https://chat.openai.com",
  },
  {
    name: "Claude",
    type: "对话 / 分析",
    description: "Anthropic 出品，擅长长文分析和严谨推理，适合学术和专业写作。",
    url: "https://claude.ai",
  },
  {
    name: "Midjourney",
    type: "AI 绘画",
    description: "顶级 AI 图像生成工具，输入文字描述即可生成精美图片。",
    url: "https://www.midjourney.com",
  },
  {
    name: "Notion AI",
    type: "笔记 / 写作",
    description: "集成在 Notion 中的 AI 助手，帮助整理笔记、生成摘要和头脑风暴。",
    url: "https://www.notion.so",
  },
  {
    name: "Zapier",
    type: "自动化",
    description: "无代码自动化平台，连接数千款应用，自动完成重复性工作流。",
    url: "https://zapier.com",
  },
  {
    name: "Make (Integromat)",
    type: "自动化",
    description: "可视化自动化工具，比 Zapier 更灵活，适合复杂工作流搭建。",
    url: "https://www.make.com",
  },
  {
    name: "Perplexity AI",
    type: "AI 搜索",
    description: "AI 驱动的搜索引擎，直接给出带引用来源的答案，替代传统搜索。",
    url: "https://www.perplexity.ai",
  },
  {
    name: "Cursor",
    type: "AI 编程",
    description: "AI 驱动的代码编辑器，即使不会编程也能用自然语言生成代码。",
    url: "https://cursor.sh",
  },
];

export default function ToolsPage() {
  return (
    <div>
      {/* 页面标题 */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">工具导航</h1>
        <p className="text-gray-600">
          精选好用的 AI 和自动化工具，帮你提升学习和工作效率。
        </p>
      </div>

      {/* 工具卡片网格 */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {tools.map((tool) => (
          <a
            key={tool.name}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md hover:border-primary-300 transition-all group"
          >
            {/* 工具类型标签 */}
            <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded">
              {tool.type}
            </span>

            {/* 工具名称 */}
            <h3 className="text-lg font-semibold text-gray-900 mt-3 mb-2 group-hover:text-primary-600 transition-colors">
              {tool.name}
            </h3>

            {/* 一句话评价 */}
            <p className="text-sm text-gray-600">{tool.description}</p>

            {/* 链接提示 */}
            <span className="inline-block mt-3 text-xs text-primary-500 group-hover:text-primary-700">
              访问官网 →
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
