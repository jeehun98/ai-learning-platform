// pages/framework/index.tsx
import RoundedButton from "@/components/RoundedButton";
import Head from "next/head";
import FrameworkLayout from "@/components/FrameworkLayout";

export default function FrameworkIndex() {
  return (
    <FrameworkLayout>
      <Head>
        <title>프레임워크 구조 | AI 학습 플랫폼</title>
      </Head>

      <div className="max-w-3xl px-6 py-10">
        <h1 className="text-3xl font-bold mb-6">📊 프레임워크 구조</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          이 섹션에서는 직접 구현한 AI 프레임워크의 구조와 실행 흐름을 시각적으로 탐색하고,
          각 구성 요소의 역할과 작동 방식을 단계별로 확인할 수 있습니다.
        </p>

        <div className="grid gap-4">
          <RoundedButton href="/framework/models" color="bg-blue-100 text-blue-800">
            🧠 모델 구조 확인
          </RoundedButton>
          <RoundedButton href="/framework/layers" color="bg-green-100 text-green-800">
            🔁 layer 종류 확인
          </RoundedButton>
          <RoundedButton href="/framework/backend" color="bg-green-100 text-green-800">
            ⚙️ 백엔드 연산 구조 보기
          </RoundedButton>
        </div>
      </div>
    </FrameworkLayout>
  );
}
