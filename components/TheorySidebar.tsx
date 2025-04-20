// components/TheorySidebar.tsx
import Link from "next/link";
import { useRouter } from "next/router";

const theoryNav = [
  {
    number: "1",
    title: "신경망",
    href: "/theory/neural-networks",
    children: [
      { number: "1.1", title: "역전파", href: "/theory/neural-networks/backprop" },
      { number: "1.2", title: "활성화 함수", href: "/theory/neural-networks/activation" },
    ],
  },
  {
    number: "2",
    title: "최적화",
    href: "/theory/optimization",
    children: [
      { number: "2.1", title: "경사 하강법", href: "/theory/optimization/sgd" },
      { number: "2.2", title: "Adam", href: "/theory/optimization/adam" },
    ],
  },
];

export default function TheorySidebar() {
  const router = useRouter();

  return (
    <aside className="w-64 min-h-screen p-6 border-r border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-900">
      <h2 className="text-xl font-bold mb-6 text-blue-600 dark:text-blue-400">📘 이론 목차</h2>
      <ul className="space-y-3 text-sm">
        {theoryNav.map((section) => (
          <li key={section.href}>
            <Link
              href={section.href}
              className={`block px-2 py-1 rounded-md font-semibold ${
                router.pathname === section.href ? "bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-white" : "hover:bg-gray-100 dark:hover:bg-neutral-800 text-gray-800 dark:text-gray-200"
              }`}
            >
              {section.number}. {section.title}
            </Link>
            <ul className="mt-1 space-y-1">
              {section.children?.map((child) => (
                <li key={child.href}>
                  <Link
                    href={child.href}
                    className={`block pl-6 text-sm rounded-md ${
                      router.pathname === child.href ? "bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-white font-medium" : "hover:bg-gray-100 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {child.number} {child.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </aside>
  );
}
