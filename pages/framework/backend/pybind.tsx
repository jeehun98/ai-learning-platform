import Head from "next/head";
import FrameworkLayout from "@/components/FrameworkLayout";

export default function PybindIntegrationPage() {
  return (
    <FrameworkLayout>
      <Head>
        <title>CUDA & Pybind 연동 | 프레임워크 구조</title>
      </Head>

      <div className="max-w-3xl px-6 py-10 space-y-12">
        <h1 className="text-3xl font-bold">⚡ CUDA & Pybind 연동</h1>

        <section>
          <p className="text-gray-700 dark:text-gray-300">
            본 프레임워크에서는 Pybind11을 통해 C++ 및 CUDA로 구현된 고성능 연산을 Python 코드에서 직접 호출합니다.
            Pybind는 CMake로 빌드된 C++ 모듈을 Python 모듈처럼 불러올 수 있도록 해주는 강력한 바인딩 도구입니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">🔗 연동 구조 요약</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            <li><code>graph_executor.cpp / .cu</code>: CUDA 연산 구현</li>
            <li><code>pybind11</code>: C++ 함수를 Python에서 사용할 수 있도록 노출</li>
            <li><code>graph_executor.so / .pyd</code>: 빌드된 바인딩 모듈</li>
            <li><code>import graph_executor</code>: Python 코드에서 직접 import</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">🛠️ Pybind11 바인딩 예시</h2>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-x-auto">
            <pre>
{`PYBIND11_MODULE(graph_executor, m) {
  py::class_<Shape>(m, "Shape")
    .def(py::init<int, int>())
    .def_readwrite("rows", &Shape::rows)
    .def_readwrite("cols", &Shape::cols);

  py::class_<OpStruct>(m, "OpStruct")
    .def(py::init<int, std::string, std::string, std::string, OpExtraParams>())
    .def_readwrite("op_type", &OpStruct::op_type)
    .def_readwrite("input_id", &OpStruct::input_id)
    .def_readwrite("param_id", &OpStruct::param_id)
    .def_readwrite("output_id", &OpStruct::output_id)
    .def_readwrite("extra_params", &OpStruct::extra_params);

  m.def("run_graph_cuda", &run_graph_cuda, "Forward 연산 실행");
  m.def("run_graph_backward", &run_graph_backward, "Backward 연산 실행");
}`}
            </pre>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            위와 같은 구조를 통해 Python에서는 <code>Shape</code>, <code>OpStruct</code>를 객체로 생성하고,
            <code>run_graph_cuda()</code> 같은 함수를 직접 호출할 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">⚙️ 빌드 및 사용 예시</h2>
          <p className="text-gray-700 dark:text-gray-300">
            바인딩 코드는 일반적으로 CMake를 통해 빌드되며, 결과물은 Python에서 `.so` 또는 `.pyd` 확장자로 import됩니다.
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded text-sm overflow-x-auto mt-2">
            <pre>
{`# Python 코드에서 사용 예시
import graph_executor as ge

op = ge.OpStruct(...)
ge.run_graph_cuda([op], tensor_ptrs, shapes, out, final_output_id, batch_size)`}
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">📌 주의사항 및 확장</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            <li><strong>동일한 이름으로 모듈을 여러 번 빌드하면 충돌 발생 가능</strong></li>
            <li>모든 CUDA 함수는 <code>__global__</code> 또는 <code>extern "C"</code> 방식으로 선언</li>
            <li>Pybind에서 반환하는 객체는 반드시 포인터 해제 관리가 필요</li>
            <li>추가 연산자를 바인딩하려면 <code>m.def(...)</code>에 등록 필요</li>
          </ul>
        </section>
      </div>
    </FrameworkLayout>
  );
}
