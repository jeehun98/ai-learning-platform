import Head from "next/head";
import FrameworkLayout from "@/components/FrameworkLayout";
import RoundedButton from "@/components/RoundedButton";

export default function BackendIndex() {
  return (
    <FrameworkLayout>
      <Head>
        <title>연산 백엔드 | 프레임워크 구조</title>
      </Head>

      <div className="max-w-3xl px-6 py-10 space-y-12">
        <h1 className="text-3xl font-bold">⚙️ 백엔드 연산</h1>

        <section>
          <p className="text-gray-700 dark:text-gray-300">
            백엔드 모듈은 프레임워크 내부에서 모든 수치 연산과 텐서 조작을 처리하는 핵심 엔진입니다.
            Pybind11로 연결된 CUDA 연산자와 함께, <strong>E 행렬</strong> 기반의 연산 그래프 실행을 통해
            forward / backward 계산을 수행합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">📦 주요 구성 요소</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            <li><strong>Operators:</strong> Add, MatMul, ReLU 등 기본 수치 연산</li>
            <li><strong>Tensor:</strong> Cupy 기반 텐서와 메모리 포인터 관리</li>
            <li><strong>CUDA 연동:</strong> Pybind11을 통해 C++/CUDA 커널 호출</li>
            <li><strong>Graph Executor:</strong> 연산 노드 실행 및 역전파 처리</li>
            <li><strong>E 행렬:</strong> 각 연산을 OpStruct 리스트로 표현한 실행 순서 배열</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">🔄 CUDA 그래프 실행 흐름</h2>
          <p className="text-gray-700 dark:text-gray-300">
            각 레이어는 <code>to_e_matrix()</code>를 통해 하나 이상의 연산 노드를 정의하며,
            이들은 <strong>E 행렬</strong>이라는 리스트로 누적됩니다. 해당 리스트는 다음 단계에서 사용됩니다:
          </p>

          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-x-auto mt-2">
            <pre>
{`1. E_raw: 연산 노드 원본 목록 생성
2. E: OpStruct 리스트로 변환
3. run_graph_cuda(E, ptrs, shapes) 호출로 실행`}
            </pre>
          </div>

          <p className="text-gray-700 dark:text-gray-300 mt-2">
            이 구조는 GPU 메모리 상의 텐서 포인터와 함께 <code>OpStruct</code>에 정의된 연산 타입, 입력/출력 ID, 추가 파라미터를 기반으로
            순차적 실행됩니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">🧭 탐색</h2>
          <div className="grid gap-4">
            <RoundedButton href="/framework/backend/operators" color="bg-blue-100 text-blue-800">
              ➕ 연산자 구조 보기
            </RoundedButton>
            <RoundedButton href="/framework/backend/tensor" color="bg-yellow-100 text-yellow-800">
              📦 텐서 및 메모리 관리
            </RoundedButton>
            <RoundedButton href="/framework/backend/pybind" color="bg-purple-100 text-purple-800">
              ⚡ CUDA 및 Pybind 연동
            </RoundedButton>
          </div>
        </section>
      </div>
    </FrameworkLayout>
  );
}
