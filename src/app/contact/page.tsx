export default function Contact() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black">
        <div className="flex flex-col items-center gap-8 text-center">
          <h1 className="text-4xl font-bold leading-10 tracking-tight text-black dark:text-white">
            联系我
          </h1>
          <div className="w-full max-w-md">
            <div className="mb-8 space-y-4">
              <div className="flex items-center justify-center gap-3">
                <span className="text-zinc-600 dark:text-zinc-400">邮箱：</span>
                <a 
                  href="mailto:zhangsan@example.com" 
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  zhangsan@example.com
                </a>
              </div>
              <div className="flex items-center justify-center gap-3">
                <span className="text-zinc-600 dark:text-zinc-400">电话：</span>
                <a 
                  href="tel:+8613800138000" 
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  138-0013-8000
                </a>
              </div>
            </div>
            
            <a
              className="inline-flex h-12 items-center justify-center rounded-full bg-blue-600 px-8 text-white transition-colors hover:bg-blue-700"
              href="/"
            >
              返回首页
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}