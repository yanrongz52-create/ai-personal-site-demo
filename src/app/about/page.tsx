/**
 * 关于我页面（/about）
 *
 * 静态页面，展示站长的个人介绍。
 * 内容为 Demo 示例，可根据实际情况修改。
 */
export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto">
      {/* 页面标题 */}
      <h1 className="text-3xl font-bold text-gray-900 mb-6">关于我</h1>

      {/* 个人介绍内容 */}
      <div className="bg-white rounded-lg border border-gray-200 p-8 space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">👋 你好！</h2>
          <p className="text-gray-600 leading-relaxed">
            我是一名非技术背景的大学生，目前正在探索从传统专业转型为 AI 产品经理的道路。
            虽然我不会写代码（这个网站是用 AI 工具帮忙搭建的！），但我对 AI 技术的应用场景和产品设计充满热情。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">🎯 这个网站是做什么的？</h2>
          <p className="text-gray-600 leading-relaxed">
            这个网站是我的个人学习记录站，主要用来：
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
            <li><strong>AI 观察</strong> — 记录我对 AI 行业动态、新产品、新技术的观察和思考</li>
            <li><strong>自动化实验室</strong> — 分享我使用各种 AI 和自动化工具的实验过程</li>
            <li><strong>成长手记</strong> — 记录从零开始学习 AI 产品经理的心路历程</li>
            <li><strong>工具导航</strong> — 整理我用过的好用工具，方便大家参考</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">🌱 我的学习理念</h2>
          <p className="text-gray-600 leading-relaxed">
            我相信在 AI 时代，非技术背景的人也能通过持续学习和动手实践，
            找到属于自己的位置。与其只是阅读和观望，不如亲手去试一试——
            哪怕是搭建这样一个小网站，也是一次宝贵的学习经历。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">📬 联系我</h2>
          <p className="text-gray-600 leading-relaxed">
            如果你也在学习 AI 相关知识，或者对我的内容有任何建议，欢迎通过以下方式联系我：
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
            <li>Email: demo@example.com（示例邮箱，请替换为真实邮箱）</li>
            <li>GitHub: github.com/your-username（示例，请替换为真实链接）</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
