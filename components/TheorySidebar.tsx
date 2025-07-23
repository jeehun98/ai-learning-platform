import Link from "next/link";

const sidebarItems = [
  {
    title: "1. 개요",
    children: [
      { title : "1. 소개", href: "/theory/1_overview" },
      { title : "1.1 다항식 곡선 피팅", href: "/theory/1_overview/PolynomialCurveFitting" },
      { title : "1.2 확률론", href: "/theory/1_overview/probability" },
    ],
  },
  {
    title: "2. 기본 개념",
    children: [
      { title: "2.1 데이터와 특징", href: "/theory/2_fundamentals/data" },
      { title: "2.2 모델과 학습", href: "/theory/2_fundamentals/model" },
      { title: "2.3 평가", href: "/theory/2_fundamentals/evaluation" },
    ],
  },
  {
    title: "3. 주요 알고리즘",
    children: [
      { title: "3.1 선형 모델", href: "/theory/3_algorithms/linear" },
      { title: "3.2 트리 기반 모델", href: "/theory/3_algorithms/tree" },
      { title: "3.3 SVM", href: "/theory/3_algorithms/svm" },
      { title: "3.4 신경망 기초", href: "/theory/3_algorithms/nn-basic" },
      { title: "3.5 비지도 학습", href: "/theory/3_algorithms/unsupervised" },
    ],
  },
  {
    title: "4. 신경망 이론",
    children: [
      { title: "4.1 구조", href: "/theory/4_neural/structure" },
      { title: "4.2 순전파와 역전파", href: "/theory/4_neural/backprop" },
      { title: "4.3 최적화", href: "/theory/4_neural/optimization" },
      { title: "4.4 과적합 방지", href: "/theory/4_neural/regularization" },
    ],
  },
  {
    title: "5. 실전 팁",
    href: "/theory/5_tips",
  },
];

export default function TheorySidebar() {
  return (
<aside className="w-56 md:w-64 p-4 border-r border-gray-200 dark:border-gray-700">
  <nav className="space-y-2 text-sm">
    {sidebarItems.map((item, i) => (
      <div key={i}>
        <Link href={item.href || "#"}>
          <span className="block font-semibold text-gray-800 dark:text-gray-200 hover:underline">
            {item.title}
          </span>
        </Link>
        {item.children && (
          <div className="ml-3 md:ml-4 mt-1 space-y-1">
            {item.children.map((sub, j) => (
              <Link href={sub.href} key={j}>
                <span className="block text-gray-600 dark:text-gray-400 hover:underline">
                  {sub.title}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    ))}
  </nav>
</aside>

  
  );
}
