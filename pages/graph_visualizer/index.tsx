import Head from "next/head";
import FrameworkLayout from "@/components/FrameworkLayout";
import ReactFlow, {
  Background,
  Controls,
  Node,
  Edge,
} from "reactflow";
import "reactflow/dist/style.css";

const nodes: Node[] = [
  {
    id: "1",
    type: "input",
    position: { x: 50, y: 100 },
    data: { label: "Input Tensor" },
  },
  {
    id: "2",
    position: { x: 250, y: 100 },
    data: { label: "MatMul (Linear)" },
  },
  {
    id: "3",
    position: { x: 450, y: 100 },
    data: { label: "Add Bias" },
  },
  {
    id: "4",
    position: { x: 650, y: 100 },
    data: { label: "ReLU Activation" },
  },
  {
    id: "5",
    type: "output",
    position: { x: 850, y: 100 },
    data: { label: "Output Tensor" },
  },
];

const edges: Edge[] = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e2-3", source: "2", target: "3", animated: true },
  { id: "e3-4", source: "3", target: "4", animated: true },
  { id: "e4-5", source: "4", target: "5", animated: true },
];

export default function GraphVisualizer() {
  return (
    <FrameworkLayout>
      <Head>
        <title>Graph Visualizer | 프레임워크 구조</title>
      </Head>

      <div className="px-6 py-10">
        <h1 className="text-2xl font-bold mb-4">📊 연산 그래프 시각화</h1>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          아래는 간단한 모델에서 생성된 연산 흐름 예시입니다. 각 노드는 E 행렬에서의 <code>OpStruct</code>를 시각화한 것입니다.
        </p>

        <div style={{ height: 400 }} className="border rounded">
          <ReactFlow nodes={nodes} edges={edges} fitView>
            <Background />
            <Controls />
          </ReactFlow>
        </div>
      </div>
    </FrameworkLayout>
  );
}
