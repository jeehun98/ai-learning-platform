import Head from "next/head";
import FrameworkLayout from "@/components/FrameworkLayout";

export default function OperatorStructurePage() {
  return (
    <FrameworkLayout>
      <Head>
        <title>연산자 구조 보기 | 프레임워크 구조</title>
      </Head>

      <div className="max-w-3xl px-6 py-10 space-y-12">
        <h1 className="text-3xl font-bold">➕ 연산자 구조 보기</h1>

        <section>
          <p className="text-gray-700 dark:text-gray-300">
            프레임워크의 각 연산은 <code>OpStruct</code>라는 데이터 구조로 표현되며,
            이는 CUDA에서 실행 가능한 연산 그래프를 구성하는 최소 단위입니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">📦 OpStruct 구조</h2>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-x-auto">
            <pre>
{`struct OpStruct {
  int op_type;
  std::string input_id;
  std::string param_id;
  std::string output_id;
  OpExtraParams extra_params;
};`}
            </pre>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            각 연산자는 고유의 <code>op_type</code>을 가지며, 입력/출력 텐서와 파라미터를 <code>id</code>로 연결합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">🔢 지원되는 op_type 목록</h2>
          <table className="w-full text-sm text-left border border-gray-300 dark:border-gray-600">
            <thead className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100">
              <tr>
                <th className="p-2 border">op_type</th>
                <th className="p-2 border">연산 이름</th>
                <th className="p-2 border">설명</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300">
              <tr><td className="p-2 border">0</td><td className="p-2 border">MatMul</td><td className="p-2 border">행렬 곱</td></tr>
              <tr><td className="p-2 border">1</td><td className="p-2 border">Add</td><td className="p-2 border">텐서 덧셈</td></tr>
              <tr><td className="p-2 border">2</td><td className="p-2 border">ReLU</td><td className="p-2 border">ReLU 활성화 함수</td></tr>
              <tr><td className="p-2 border">3</td><td className="p-2 border">Sigmoid</td><td className="p-2 border">시그모이드 함수</td></tr>
              <tr><td className="p-2 border">4</td><td className="p-2 border">Tanh</td><td className="p-2 border">하이퍼볼릭 탄젠트</td></tr>
              <tr><td className="p-2 border">5</td><td className="p-2 border">MSE Loss</td><td className="p-2 border">평균 제곱 오차</td></tr>
              <tr><td className="p-2 border">6</td><td className="p-2 border">CrossEntropy</td><td className="p-2 border">교차 엔트로피</td></tr>
              <tr><td className="p-2 border">...</td><td className="p-2 border">Custom</td><td className="p-2 border">사용자 정의 연산</td></tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">🔗 연산 연결 흐름 예시</h2>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-x-auto">
            <pre>
{`[
  { op_type: 0, input_id: "x", param_id: "W", output_id: "z" },
  { op_type: 1, input_id: "z", param_id: "b", output_id: "z2" },
  { op_type: 2, input_id: "z2", param_id: "", output_id: "a" }
]`}
            </pre>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            위 구조는 Dense 레이어에서 입력 → 선형 변환 → 바이어스 추가 → 활성화로 연결되는 전형적인 흐름입니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">🚀 CUDA 실행과의 연결</h2>
          <p className="text-gray-700 dark:text-gray-300">
            모든 OpStruct 리스트는 실행 전에 Python → C++로 변환되며,
            다음 함수로 넘겨져 GPU에서 연산됩니다:
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded text-sm overflow-x-auto mt-2">
            <pre>
{`ge.run_graph_cuda(
  E,               // OpStruct 리스트
  tensor_ptrs,     // 텐서 포인터 (input, weights 등)
  shape_map,       // 각 변수의 Shape 정보
  out_host,        // 출력 결과를 받을 호스트 메모리
  final_output_id, // 출력 노드 ID
  batch_size       // 배치 크기
)`}
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">📌 확장성</h2>
          <p className="text-gray-700 dark:text-gray-300">
            새로운 연산을 추가하고 싶을 경우, 다음과 같은 작업이 필요합니다:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1">
            <li>CUDA 커널 작성 (예: `exp.cu`, `softmax.cu` 등)</li>
            <li>Pybind11에 연산 바인딩 추가</li>
            <li>op_type에 새로운 ID 매핑</li>
            <li><code>to_e_matrix()</code>에서 새로운 연산자로 노드 구성</li>
          </ul>
        </section>
      </div>
    </FrameworkLayout>
  );
}
