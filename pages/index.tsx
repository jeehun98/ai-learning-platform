// ✅ 프로젝트의 초기 템플릿 세팅: Next.js + TailwindCSS 기반

// 1. 홈(index) 페이지
// pages/index.tsx
import RoundedButton from "@/components/RoundedButton";

export default function Home() {
  return (
    <main className="p-8 max-w-3xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">🧠 AI 학습 플랫폼</h1>
      <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
        인공지능의 이론과 계산 과정을 시각적으로 탐색하고, 직접 실험할 수 있도록 설계된 플랫폼입니다.
      </p>
      <div className="grid gap-4">
        <RoundedButton href="/framework" color="bg-blue-100 text-blue-800">
          📊 프레임 워크 구조 확인하기
        </RoundedButton>
        
        <RoundedButton href="/theory" color="bg-yellow-100 text-yellow-800">
          📚 머신러닝 이론 학습하기
        </RoundedButton>
        
      </div>
    </main>
  );
}
