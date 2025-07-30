import Head from "next/head";
import FrameworkLayout from "@/components/FrameworkLayout";

export default function LayerClassPage() {
  return (
    <FrameworkLayout>
      <Head>
        <title>기본 Layer 클래스 | 프레임워크 구조</title>
      </Head>

      <div className="max-w-3xl px-6 py-10 space-y-12">
        <h1 className="text-3xl font-bold">🧱 기본 Layer 클래스</h1>

        <section>
          <p className="text-gray-700 dark:text-gray-300">
            <code>Layer</code> 클래스는 모든 레이어(Layer)의 공통 인터페이스를 정의하는 베이스 클래스입니다.
            <strong>입출력 shape 관리</strong>, <strong>빌드 여부 확인</strong>, <strong>정규화 적용</strong>, <strong>직렬화</strong> 등의 공통 기능을 제공합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">📦 주요 속성과 기능</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            <li><code>self.input_shape / output_shape</code>: 입력 및 출력 텐서의 shape</li>
            <li><code>self.built</code>: 레이어가 빌드되었는지 여부</li>
            <li><code>self.regularizer</code>: 선택적 정규화 함수</li>
            <li><code>build(input_shape)</code>: 레이어 초기화 및 출력 shape 계산</li>
            <li><code>call()</code>: forward 연산 정의 (하위 클래스에서 override)</li>
            <li><code>__call__()</code>: call 메서드 자동 호출</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">🛠️ 기본 사용 흐름</h2>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded text-sm overflow-x-auto">
            <pre>
{`layer = SomeLayer(input_dim=128)
layer.build((128,))
output = layer(input_tensor)  # call() 메서드 실행`}
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">🔄 직렬화 및 복원</h2>
          <p className="text-gray-700 dark:text-gray-300">
            레이어는 <code>get_config()</code>를 통해 직렬화할 수 있고,
            <code>from_config()</code>를 통해 다시 복원할 수 있습니다.
          </p>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-x-auto mt-2">
            <pre>
{`config = layer.get_config()
layer2 = Layer.from_config(config)`}
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">🚧 구현 필요 메서드</h2>
          <p className="text-gray-700 dark:text-gray-300">
            <code>Layer</code> 자체는 추상 베이스 클래스처럼 동작하므로, 실제 연산을 정의하는 <code>call()</code> 메서드는
            하위 클래스에서 구현해야 합니다. 구현하지 않고 호출 시 <code>NotImplementedError</code>가 발생합니다.
          </p>
        </section>
      </div>
    </FrameworkLayout>
  );
}
