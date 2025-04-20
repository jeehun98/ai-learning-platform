import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">홈</h1>
      <p className="mb-4">
        이 플랫폼은 인공지능의 작동 원리와 계산 과정을 시각적으로 보여주는 인터랙티브 학습 도구입니다.
      </p>
      <ul className="list-disc pl-5 space-y-1 text-blue-600">
        <li><Link href="/graph-visualizer">계산 그래프 시각화</Link></li>
        <li><Link href="/activations">활성화 함수 시뮬레이터</Link></li>
        <li><Link href="/theory/backprop">역전파 이론</Link></li>
      </ul>
    </>
  );
}
