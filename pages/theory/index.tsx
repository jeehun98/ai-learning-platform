// pages/index.tsx
import RoundedButton from "@/components/RoundedButton";
import Head from "next/head";
import TheoryLayout from "@/components/TheoryLayout";

export default function TheoryIndex() {
  return (
    <TheoryLayout>
      <Head>
        <title>머신러닝 이론 | AI 학습 플랫폼</title>
      </Head>

      <div className="max-w-3xl px-6 py-10">
        <h1 className="text-3xl font-bold mb-6">📘 머신러닝 이론</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          이 섹션에서는 머신러닝의 핵심 개념들을<br className="md:hidden" />
          이론 중심으로 학습할 수 있습니다.
        </p>

        <div className="grid gap-4">
          <RoundedButton href="/theory/neural-networks" color="bg-purple-100 text-purple-800">
            🧠 신경망 이론
          </RoundedButton>
          <RoundedButton href="/theory/optimization" color="bg-orange-100 text-orange-800">
            📉 최적화 알고리즘
          </RoundedButton>
          <RoundedButton href="/theory/loss-functions" color="bg-red-100 text-red-800">
            📐 손실 함수 개요
          </RoundedButton>
        </div>
      </div>
    </TheoryLayout>
  );
}