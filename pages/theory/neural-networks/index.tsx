import RoundedButton from "@/components/RoundedButton";
import Head from "next/head";

export default function NeuralNetworks() {
  return (
    <>
      <Head>
        <title>신경망 이론 | AI 학습 플랫폼</title>
      </Head>
      <main className="max-w-3xl mx-auto px-6 py-10 text-center">
        <h1 className="text-3xl font-bold mb-4">🧠 신경망 이론</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
          신경망은 인간의 뇌에서 영감을 받아 만들어진 계산 모델입니다. 이 대단원에서는 인공 신경망의 구조와 학습 방식에 대해 알아봅니다.
        </p>

        <div className="grid gap-4">
          <RoundedButton href="/theory/neural-networks/backprop" color="bg-blue-100 text-blue-800">
            🔁 역전파 알고리즘
          </RoundedButton>
          <RoundedButton href="/theory/neural-networks/activation" color="bg-green-100 text-green-800">
            🌱 활성화 함수
          </RoundedButton>
        </div>
      </main>
    </>
  );
}
