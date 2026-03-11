/**
 * 文章数据加载模块
 * 
 * 这个文件负责从 content/posts 目录读取 Markdown 文件，
 * 解析 frontmatter（文章元数据），并提供按分类筛选的功能。
 * 
 * 数据结构说明：
 * - title: 文章标题
 * - date: 发布日期（格式：YYYY-MM-DD）
 * - summary: 文章摘要
 * - category: 分类，取值为 'ai-observer' | 'automation-lab' | 'growth-notes'
 * - tags: 标签数组，用于更细粒度的分类
 * - tools: 用到的工具列表（可选，主要用于自动化实验室文章）
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";

/** 文章的分类类型 */
export type PostCategory = "ai-observer" | "automation-lab" | "growth-notes";

/** 单篇文章的数据结构 */
export interface Post {
  /** 文章唯一标识，来自文件名（去掉 .md 后缀） */
  slug: string;
  /** 文章标题 */
  title: string;
  /** 发布日期 */
  date: string;
  /** 文章摘要 */
  summary: string;
  /** 文章分类 */
  category: PostCategory;
  /** 标签列表 */
  tags: string[];
  /** 使用的工具（可选） */
  tools?: string[];
  /** Markdown 正文内容 */
  content: string;
}

/** content/posts 目录的绝对路径 */
const postsDirectory = path.join(process.cwd(), "content", "posts");

/**
 * 获取所有文章列表
 * 
 * 读取 content/posts 目录下所有 .md 文件，解析 frontmatter，
 * 按日期倒序排列返回。
 * 
 * 错误处理：
 * - 如果目录不存在或读取失败，会在控制台打印错误信息，返回空数组
 * - 如果某个文件解析失败，跳过该文件继续处理其他文件
 * 
 * @returns Post[] 文章数组，按日期从新到旧排序
 */
export function getAllPosts(): Post[] {
  try {
    // 检查目录是否存在
    if (!fs.existsSync(postsDirectory)) {
      console.error(
        `[错误] 文章目录不存在: ${postsDirectory}`,
        "\n请确保 content/posts 目录存在并包含 .md 文件"
      );
      return [];
    }

    // 读取目录中所有 .md 文件
    const fileNames = fs.readdirSync(postsDirectory).filter((name) => name.endsWith(".md"));

    if (fileNames.length === 0) {
      console.warn("[警告] content/posts 目录中没有找到 .md 文件");
      return [];
    }

    const posts: Post[] = [];

    for (const fileName of fileNames) {
      try {
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        // 使用 gray-matter 解析 frontmatter 和正文
        const { data, content } = matter(fileContents);

        const post: Post = {
          slug: fileName.replace(/\.md$/, ""),
          title: data.title || "无标题",
          date: data.date || "未知日期",
          summary: data.summary || "",
          category: data.category || "growth-notes",
          tags: data.tags || [],
          tools: data.tools || undefined,
          content: content,
        };

        posts.push(post);
      } catch (fileError) {
        // 单个文件解析失败时，打印错误但继续处理其他文件
        console.error(`[错误] 解析文件失败: ${fileName}`, fileError);
      }
    }

    // 按日期倒序排列（最新的文章排在前面）
    return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
  } catch (error) {
    // 整体读取失败时的兜底处理
    console.error(
      "[错误] 加载文章列表失败:",
      error,
      "\n排查步骤：",
      "\n1. 检查 content/posts 目录是否存在",
      "\n2. 检查文件权限",
      "\n3. 检查 Markdown 文件格式是否正确"
    );
    return [];
  }
}

/**
 * 按分类获取文章
 * 
 * @param category - 文章分类，如 'ai-observer'
 * @returns 该分类下的所有文章，按日期倒序
 */
export function getPostsByCategory(category: PostCategory): Post[] {
  try {
    return getAllPosts().filter((post) => post.category === category);
  } catch (error) {
    console.error(`[错误] 按分类 "${category}" 筛选文章失败:`, error);
    return [];
  }
}

/**
 * 获取最近的 N 篇文章
 * 
 * @param count - 要获取的文章数量
 * @returns 最近发布的 N 篇文章
 */
export function getRecentPosts(count: number): Post[] {
  try {
    return getAllPosts().slice(0, count);
  } catch (error) {
    console.error(`[错误] 获取最近 ${count} 篇文章失败:`, error);
    return [];
  }
}
