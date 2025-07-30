import Head from "next/head";
import FrameworkLayout from "@/components/FrameworkLayout";

export default function TensorMemoryPage() {
  return (
    <FrameworkLayout>
      <Head>
        <title>텐서 및 메모리 관리 | 프레임워크 구조</title>
      </Head>

      <div className="max-w-3xl px-6 py-10 space-y-12">
        <h1 className="text-3xl font-bold">📦 텐서 및 메모리 관리</h1>

        <section>
          <p className="text-gray-700 dark:text-gray-300">
            프레임워크는 <code>cupy</code> 기반의 GPU 텐서를 사용하여 연산 성능을 확보하며,
            CUDA 연산에 적합하도록 <strong>포인터 기반 메모리 관리</strong>를 수행합니다.
            모든 텐서는 <code>Shape</code> 정보를 기반으로 생성 및 할당되며,
            forward / backward 연산 시 <strong>메모리 맵</strong>을 통해 GPU에 연결됩니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">📐 Shape 객체 구조</h2>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-x-auto">
            <pre>
{`struct Shape {
  int rows;
  int cols;
};`}
            </pre>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            각 텐서의 shape은 CUDA에서 메모리를 할당하기 위해 <code>Shape</code> 객체로 변환되어
            <code>shape_map[var_id] = Shape(rows, cols)</code> 형태로 전달됩니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">🧠 tensor_ptrs 구조</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            실제 CUDA 실행 시 각 텐서(Cupy 배열)의 <strong>포인터 주소</strong>를
            문자열 ID에 매핑하여 전달합니다:
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded text-sm overflow-x-auto">
            <pre>
{`tensor_ptrs = {
  "input": cp_input.data.ptr,
  "dense_1_W": cp_arr.data.ptr,
  "dense_1_b": cp_arr.data.ptr,
  ...
}`}
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">🔁 gradient buffer 및 grad_map</h2>
          <p className="text-gray-700 dark:text-gray-300">
            역전파 시 <code>grad_ptrs</code>와 <code>grad_map</code>이 생성되어
            각 연산자의 파라미터에 대한 gradient를 포인터 형태로 저장합니다.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Cupy는 <code>UnownedMemory</code>와 <code>MemoryPointer</code>를 통해
            외부 포인터 메모리를 관리할 수 있으며, 이를 통해 C++에서 계산된 gradient를
            Python으로 안전하게 복사할 수 있습니다.
          </p>

          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-x-auto mt-2">
            <pre>
{`mem = UnownedMemory(ptr, size_bytes, owner=None)
memptr = MemoryPointer(mem, 0)
grad_tensor = cp.ndarray(shape, dtype=cp.float32, memptr=memptr).copy()`}
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">🧾 예시 흐름 요약</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            <li><code>self.tensor_map</code>: 텐서 ID → Cupy 배열 캐시</li>
            <li><code>tensor_ptrs</code>: 텐서 ID → CUDA 연산용 포인터</li>
            <li><code>shape_map</code>: 텐서 ID → Shape(rows, cols)</li>
            <li><code>grad_ptrs / grad_map</code>: 역전파 그래디언트 포인터 관리</li>
          </ul>
        </section>
      </div>
    </FrameworkLayout>
  );
}
