import Head from "next/head";
import FrameworkLayout from "@/components/FrameworkLayout";

export default function DenseLayerPage() {
  return (
    <FrameworkLayout>
      <Head>
        <title>Dense 레이어 | 프레임워크 구조</title>
      </Head>

      <div className="max-w-3xl px-6 py-10 space-y-12">
        <h1 className="text-3xl font-bold">➕ Dense 레이어</h1>

        <section>
          <p className="text-gray-700 dark:text-gray-300">
            <code>Dense</code> 레이어는 입력과 가중치의 행렬곱을 수행하고,
            선택적으로 bias를 더한 후 활성화 함수를 적용하는 <strong>기본 fully-connected 레이어</strong>입니다.
            내부적으로는 Cupy 기반의 연산과 Pybind11을 통한 CUDA 커널 호출 구조를 포함합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">⚙️ 주요 속성 및 구조</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            <li><code>units</code>: 출력 뉴런 수</li>
            <li><code>activation</code>: 활성화 함수 (relu, sigmoid, tanh 등)</li>
            <li><code>weights / bias</code>: 학습 가능한 파라미터</li>
            <li><code>build(input_shape)</code>: 입력에 따라 가중치 초기화</li>
            <li><code>call(x)</code>: 순전파 연산 수행</li>
            <li><code>backward(grad_output)</code>: 역전파 그래디언트 계산</li>
            <li><code>to_e_matrix(input_id)</code>: CUDA 그래프용 연산 노드 변환</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">🧮 연산 흐름</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            <code>call()</code> 호출 시 다음과 같은 연산이 수행됩니다:
          </p>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-x-auto">
            <pre>
{`z = dot(x, weights) + bias
a = activation(z)`}
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">🔄 CUDA 그래프 변환</h2>
          <p className="text-gray-700 dark:text-gray-300">
            <code>to_e_matrix()</code> 함수는 해당 레이어를 CUDA 실행을 위한 연산 블록으로 변환합니다.
            내부 연산자는 다음과 같은 형태의 순서를 가집니다:
          </p>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-x-auto mt-2">
            <pre>
{`[
  MatMul(input, weights) → linear_out
  Add(linear_out, bias) → pre_activation
  Activation(pre_activation) → output
]`}
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">🎯 활성화 함수 처리</h2>
          <p className="text-gray-700 dark:text-gray-300">
            활성화 함수는 문자열 기반으로 구분되며, 아래와 같이 처리됩니다:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li><code>relu</code>: <code>z &gt; 0</code>일 때 유지, 아니면 0</li>
            <li><code>sigmoid</code>: 시그모이드 공식 기반 도함수</li>
            <li><code>tanh</code>: <code>1 - tanh²(z)</code></li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">📦 파라미터 초기화</h2>
          <p className="text-gray-700 dark:text-gray-300">
            기본적으로 He 초기화 (2 / input_dim 스케일)로 설정되며, <code>initializer='zeros'</code> 또는
            <code>'ones'</code> 옵션도 사용 가능합니다.
          </p>
        </section>
      </div>
    </FrameworkLayout>
  );
}
