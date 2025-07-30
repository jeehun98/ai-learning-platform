// pages/framework/models/index.tsx
import Head from "next/head";
import FrameworkLayout from "@/components/FrameworkLayout";
import RoundedButton from "@/components/RoundedButton";

export default function ModelsIndex() {
  return (
    <FrameworkLayout>
      <Head>
        <title>모델 정의 | 프레임워크 구조</title>
      </Head>

      <div className="max-w-3xl px-6 py-10">
        <h1 className="text-3xl font-bold mb-6">🧠 모델 정의, Sequential 구조</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          Sequential 구조를 중심으로 모델이 어떻게 구성되고 실행되는지 살펴봅니다.
        </p>

        <div className="grid gap-4">
          <RoundedButton href="/framework/models/sequential" color="bg-blue-100 text-blue-800">
            ▶️ Sequential 모델 구조 보기
          </RoundedButton>
          <RoundedButton href="/framework/models/forward" color="bg-purple-100 text-purple-800">
            🔄 Forward 연산 흐름 보기
          </RoundedButton>
        </div>
      </div>
    </FrameworkLayout>
  );
}
