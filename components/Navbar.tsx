import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-white dark:bg-neutral-900 shadow-sm border-b border-gray-200 dark:border-neutral-800">
      <nav className="flex items-center justify-between px-6 py-3 max-w-5xl mx-auto">
        <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
          🧠 AI 학습 플랫폼
        </Link>
        <ul className="flex space-x-4 text-sm font-medium text-gray-600 dark:text-gray-300">
          <li><Link href="/theory">📘 이론</Link></li>
          <li><Link href="/graph-visualizer">📊 그래프</Link></li>
          <li><Link href="/activations">🌱 활성화</Link></li>
        </ul>
      </nav>
    </header>
  );
}
