import Head from "next/head";
import FrameworkLayout from "@/components/FrameworkLayout";

export default function SequentialModelPage() {
  return (
    <FrameworkLayout>
      <Head>
        <title>Sequential 모델 | 프레임워크 구조</title>
      </Head>

      <div className="max-w-3xl px-6 py-10 space-y-12">
        <h1 className="text-3xl font-bold">🧠 Sequential 모델</h1>

        <p className="text-gray-700 dark:text-gray-300">
          이 프레임워크에서의 <strong>Sequential</strong> 클래스는 레이어들을 순차적으로 연결하고,
          CUDA 백엔드와 Pybind11을 활용하여 forward 및 backward 연산을 실행하는 핵심 모델 구조입니다.
        </p>

        <section>
          <h2 className="text-xl font-semibold mb-2">✅ 주요 속성과 구조</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            <li><code>add(layer)</code>: 레이어를 순차적으로 추가</li>
            <li><code>compile()</code>: 옵티마이저, 손실 함수, 메트릭 등록 및 연산 그래프 준비</li>
            <li><code>run_forward()</code>: CUDA 백엔드를 통해 순전파 실행</li>
            <li><code>run_backward()</code>: 역전파 그래디언트 계산 및 전파</li>
            <li><code>fit(x, y)</code>: 미니배치 학습</li>
            <li><code>predict(x)</code>: 추론</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">⚙️ 연산 흐름 구조</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            컴파일 이후 각 레이어는 다음과 같은 구조로 CUDA 그래프 연산 노드로 변환됩니다:
          </p>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-x-auto">
            <pre>
{`Layer → to_e_matrix() → OpStruct 목록 → run_graph_cuda()`}
            </pre>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            이 과정은 <code>self.E_raw</code> → <code>self.E</code>로 저장되며,
            추후 <code>run_forward()</code> 및 <code>run_backward()</code>에서 사용됩니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">📦 내부 텐서 관리</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            <li><code>self.tensor_map</code>: Cupy 텐서 캐시</li>
            <li><code>self.weights / biases</code>: 파라미터 저장</li>
            <li><code>self.shapes</code>: 모든 변수 shape 정보 (OpStruct와 연결)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">🧪 예시: 모델 정의 및 학습</h2>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded text-sm overflow-x-auto">
            <pre>
{`model = Sequential(input_shape=(784, 1))
model.add(Linear(784, 128))
model.add(ReLU())
model.add(Linear(128, 10))
model.compile(optimizer="sgd", loss="mse")

model.fit(x_train, y_train, epochs=10)
preds = model.predict(x_test)`}
            </pre>
          </div>
        </section>
      </div>
    </FrameworkLayout>
  );
}
