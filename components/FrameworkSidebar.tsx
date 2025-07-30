import Link from "next/link";

const sidebarItems = [
  {
    title: "1. 프레임워크 개요", href: "/framework",
  },
  {
    title: "2. 모델 구조 (Sequential)", href: "/framework/models",
    children: [
      { title: "2.1 Sequential 구조", href: "/framework/models/sequential" },
    ],
  },
  {
    title: "3. 레이어 시스템", href: "/framework/layers",
    children: [
      { title: "3.1 기본 레이어 구조", href: "/framework/layers/layer_class" },
      { title: "3.2 dense", href: "/framework/layers/dense" },
    ],
  },
  {
    title: "4. 백엔드 연산", href: "/framework/backend",
    children: [
      { title: "4.1 연산자 구조", href: "/framework/backend/operators" },
      { title: "4.2 텐서 & 메모리", href: "/framework/backend/tensor" },
      { title: "4.3 CUDA & Pybind11 연동", href: "/framework/backend/pybind" },
    ],
  },

];

export default function FrameworkSidebar() {
  return (
    <aside className="hidden md:block w-64 min-w-[16rem] p-4 border-r border-gray-200 dark:border-gray-700 h-full overflow-y-auto">
      <nav className="space-y-2 text-sm">
        {sidebarItems.map((item, i) => (
          <div key={i}>
            {item.href ? (
              <Link
                href={item.href}
                className="block font-semibold text-gray-800 dark:text-gray-200 hover:underline"
              >
                {item.title}
              </Link>
            ) : (
              <span className="block font-semibold text-gray-800 dark:text-gray-200">
                {item.title}
              </span>
            )}

            {item.children && (
              <div className="ml-3 md:ml-4 mt-1 space-y-1">
                {item.children.map((sub, j) => (
                  <Link
                    href={sub.href}
                    key={j}
                    className="block text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    {sub.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
