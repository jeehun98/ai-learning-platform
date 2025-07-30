// pages/framework/layers/index.tsx
import Head from "next/head";
import FrameworkLayout from "@/components/FrameworkLayout";
import RoundedButton from "@/components/RoundedButton";

export default function LayersIndex() {
  return (
    <FrameworkLayout>
      <Head>
        <title>레이어 시스템 | 프레임워크 구조</title>
      </Head>

      <div className="max-w-3xl px-6 py-10">
        <h1 className="text-3xl font-bold mb-6">🧩 레이어 시스템</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          이 섹션에서는 Linear, ReLU 등 다양한 연산 레이어의 구조와 기능을 설명합니다.
        </p>

        <div className="grid gap-4">
          <RoundedButton href="/framework/layers/layer_class" color="bg-green-100 text-green-800">
            ⚡ 기본 레이어 구조
          </RoundedButton>
          <RoundedButton href="/framework/layers/dense" color="bg-yellow-100 text-yellow-800">
            ➕ dense 레이어 구조
          </RoundedButton>
          
        </div>
      </div>
    </FrameworkLayout>
  );
}
