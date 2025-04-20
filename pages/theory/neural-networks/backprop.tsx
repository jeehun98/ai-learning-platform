import Head from "next/head";

export default function BackpropPage() {
  return (
    <>
      <Head>
        <title>역전파 알고리즘 | AI 학습 플랫폼</title>
      </Head>
      <main className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-4">🔁 역전파 알고리즘</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">개요</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            역전파는 신경망에서 오차를 역방향으로 전파하여 가중치를 갱신하는 핵심 학습 알고리즘입니다.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">작동 원리</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            연쇄 법칙을 이용하여 각 층의 기울기를 계산하고, 이를 바탕으로 가중치를 업데이트합니다.
          </p>
        </section>

        <section className="mb-6 bg-yellow-50 dark:bg-yellow-900 p-4 rounded-xl shadow text-sm text-yellow-900 dark:text-yellow-200">
          💡 팁: 역전파는 자동 미분(autodiff)과도 밀접한 관련이 있습니다.
        </section>
      </main>
    </>
  );
}
