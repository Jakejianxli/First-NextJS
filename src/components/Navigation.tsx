export default function Navigation() {
  return (
    <nav className="sticky top-0 z-10 border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <a href="/" className="text-lg font-bold text-black">DamienJ</a>
            <div className="hidden md:flex space-x-8">
              <a href="/about" className="text-gray-700 hover:text-black">关于我</a>
              <a href="/projects" className="text-gray-700 hover:text-black">项目</a>
              <a href="/contact" className="text-gray-700 hover:text-black">联系我</a>
            </div>
          </div>
          {/* 移动端菜单按钮 */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-black">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}