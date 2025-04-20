// pages/dev-log.tsx
import Head from "next/head";

export default function DevLog() {
  return (
    <>
      <Head>
        <title>개발 로그 | AI 학습 플랫폼</title>
      </Head>
      <main className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-6">🛠️ 개발 로그</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          이 페이지는 AI 학습 플랫폼의 개발 과정을 기록한 공간입니다.
        </p>

        <ul className="space-y-6 text-sm text-gray-800 dark:text-gray-300">
          <li>
            <span className="font-bold text-blue-600">2025-04-20</span><br />
            - 프로젝트 초기 세팅 (Next.js + TailwindCSS)<br />
            - 공통 레이아웃 및 둥글둥글한 메인 페이지 구성<br />
            - RoundedButton 컴포넌트 분리<br />
            - TheoryLayout / TheorySidebar 구축 (이론 전용 레이아웃)<br />
            - 이론 목차 계층화 (1. 대단원, 1.1 중단원, 1.1.1 소단원 적용)
          </li>

          <li>
            <span className="font-bold text-blue-600">✅ 진행 예정</span><br />
            - 각 이론 페이지 본문 내용 작성 (역전파, 최적화, 손실함수 등)<br />
            - 이론 진도율 시각화, 다크모드 전환 UI<br />
            - 계산 그래프 시각화 기능 구현 및 실시간 연산 결과 연동
          </li>
        </ul>
      </main>
    </>
  );
}