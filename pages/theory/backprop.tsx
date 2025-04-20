import Head from "next/head";

export default function Backprop() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Head>
        <title>역전파 알고리즘 | AI 학습 플랫폼</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">🔁 역전파 알고리즘</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
        역전파(Backpropagation)는 신경망에서 오차를 역으로 전파하여 가중치를 갱신하는 핵심 알고리즘입니다.
        주로 연쇄 법칙을 기반으로 각 층의 기울기를 계산하고, 이를 통해 경사 하강법 등의 최적화 기법과 결합하여 학습을 수행합니다.
      </p>

      <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-xl shadow text-sm text-yellow-900 dark:text-yellow-200">
        💡 Tip: 역전파는 자동미분(Autodiff)과도 밀접하게 관련되어 있으며, 현대 딥러닝 프레임워크의 핵심 기능 중 하나입니다.
      </div>
    </div>
  );
}
