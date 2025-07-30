// pages/framework/layers/index.tsx
import Head from "next/head";
import FrameworkLayout from "@/components/FrameworkLayout";
import RoundedButton from "@/components/RoundedButton";

export default function DenseCallPage() {
  return (
    <FrameworkLayout>
      <Head>
        <title>Dense.call() 메서드 | 프레임워크 구조</title>
      </Head>
      <div className="max-w-3xl px-6 py-10 space-y-6">
        <h1 className="text-2xl font-bold">🧠 Dense.call(inputs)</h1>

        <p className="text-gray-700 dark:text-gray-300">
          <code>call()</code> 메서드는 레이어의 순전파(forward) 계산을 수행합니다.
          입력 <code>x</code>에 대해 가중치 곱셈, bias 추가, 활성화 적용까지 포함합니다.
        </p>

        <h2 className="text-lg font-semibold">📌 계산 흐름</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-x-auto">
          <pre>{`z = x @ W + b
a = activation(z)`}</pre>
        </div>

        <h2 className="text-lg font-semibold">📄 구현 코드</h2>
        <div className="bg-gray-900 text-white text-sm rounded p-4 overflow-x-auto">
          <pre>
{`def call(self, x):
    self.last_input = x
    self.last_z = cp.dot(x, self.weights) + self.bias
    return self.activation_fn(self.last_z)`}
          </pre>
        </div>

        <h2 className="text-lg font-semibold">🧠 설명</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          <li><code>self.last_input</code>: backward 계산을 위해 저장</li>
          <li><code>cp.dot</code>: Cupy 연산</li>
          <li><code>self.activation_fn</code>: 문자열 → 함수로 매핑된 활성화</li>
        </ul>
      </div>
    </FrameworkLayout>
  );
}
