export default function Projects() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="mb-12 text-center text-3xl font-bold text-black md:text-4xl">
          我的项目
        </h1>
        
        <div className="space-y-8">
          {/* 第一个项目 */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-2 text-xl font-semibold text-black">
              第一个网页
            </h2>
            <p className="text-gray-700">
              用 AI 生成的静态页面
            </p>
          </div>
          
          {/* 第二个项目 */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-2 text-xl font-semibold text-black">
              个人主页
            </h2>
            <p className="text-gray-700">
              现在这个站
            </p>
          </div>
          
          {/* 第三个项目 */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-2 text-xl font-semibold text-black">
              未来想做的产品
            </h2>
            <p className="text-gray-700">
              先留一个空位
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a
            className="inline-block rounded border border-black bg-black px-6 py-3 text-lg font-medium text-white transition-colors hover:bg-white hover:text-black"
            href="/"
          >
            返回首页
          </a>
        </div>
      </main>
    </div>
  );
}