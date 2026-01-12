export default function Home() {
  return (
    <div className="bg-white font-sans">
      {/* 主要内容 */}
      <main className="flex min-h-screen items-center justify-center py-16 px-6">
        <div className="max-w-3xl text-center">
        <h1 className="mb-12 text-5xl font-bold text-black md:text-6xl">
          我是DamienJ
        </h1>
        
        <div className="mb-16 space-y-8">
          <p className="text-xl text-black">
            我是DamienJ
          </p>
          <p className="text-xl text-black">
            我学 AI 编程是为了突破自我
          </p>
          <p className="text-xl text-black">
            我接下来想做一个微信小程序中老年人的健身记录项目
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            className="flex h-14 w-full items-center justify-center rounded border border-black bg-black px-8 text-lg font-medium text-white transition-colors hover:bg-white hover:text-black sm:w-auto"
            href="/projects"
          >
            我的项目
          </a>
          <a
            className="flex h-14 w-full items-center justify-center rounded border border-black px-8 text-lg font-medium text-black transition-colors hover:bg-black hover:text-white sm:w-auto"
            href="/contact"
          >
            联系我
          </a>
        </div>
        </div>
      </main>
    </div>
  );
}