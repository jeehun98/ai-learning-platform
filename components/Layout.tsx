// components/Layout.tsx
import Link from "next/link";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header className="px-8 py-4 shadow-sm border-b border-gray-300 dark:border-gray-700">
        <nav className="flex items-center justify-between max-w-5xl mx-auto">
          <Link href="/" className="text-2xl font-bold">
            🧠 AI 학습 플랫폼
          </Link>
          <ul className="flex space-x-4 text-sm font-medium">
            <li><Link href="/graph-visualizer">계산 그래프</Link></li>
            <li><Link href="/activations">활성화 함수</Link></li>
            <li><Link href="/theory/backprop">역전파 이론</Link></li>
          </ul>
        </nav>
      </header>

      <main className="px-6 py-10 max-w-4xl mx-auto">{children}</main>

      <footer className="px-6 py-4 text-center text-xs text-gray-500 border-t mt-16">
        &copy; {new Date().getFullYear()} 쩝쩝박사의 AI 학습 플랫폼
      </footer>
    </div>
  );
}
