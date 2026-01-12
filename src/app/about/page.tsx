export default function About() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-sans">
      <main className="flex w-full max-w-3xl flex-col items-center justify-center py-32 px-6 text-center">
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
            我接下来想做一个微信小程序中老年人健身记录项目
          </p>
        </div>
      </main>
    </div>
  );
}