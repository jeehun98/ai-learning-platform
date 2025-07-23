export interface SectionContent {
    heading?: string;
    paragraphs?: string[];
    list?: string[];
    latex?: string;
  }
  
  export interface TheoryContent {
    title: string;
    subtitle?: string;
    sections: SectionContent[];
  }
  
  export const probabilityTheoryContent: TheoryContent = {
    title: "확률론 기초",
    subtitle: "Basics of Probability Theory",
    sections: [
      {
        heading: "확률론이란?",
        paragraphs: [
          "확률론은 불확실한 사건이 발생할 가능성을 수학적으로 다루는 학문입니다.",
          "일상 속 불확실성을 체계적으로 분석하고 예측하는 데 활용됩니다."
        ]
      },
      {
        heading: "합의 법칙 (Addition Rule)",
        paragraphs: [
          "두 사건 A 또는 B가 발생할 확률을 구할 때 사용하는 법칙입니다.",
          "서로 배반 사건인 경우와 일반적인 경우로 나눌 수 있습니다."
        ],
        latex: "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)",
        list: [
          "배반 사건: P(A ∩ B) = 0",
          "일반 사건: 교집합 확률을 빼줘야 함"
        ]
      },
      {
        heading: "곱의 법칙 (Multiplication Rule)",
        paragraphs: [
          "두 사건 A와 B가 동시에 발생할 확률을 구하는 법칙입니다.",
          "조건부 확률을 기반으로 계산합니다."
        ],
        latex: "P(A \\cap B) = P(A) \\times P(B|A)"
      },
      {
        heading: "결합확률 (Joint Probability)",
        paragraphs: [
          "두 사건이 동시에 발생할 확률로, 곱의 법칙을 통해 계산됩니다."
        ],
        latex: "P(A, B) = P(A) \\times P(B|A)"
      },
      {
        heading: "주변확률 (Marginal Probability)",
        paragraphs: [
          "결합확률로부터 특정 변수 하나에 대한 확률을 계산하는 방법입니다."
        ],
        latex: "P(A) = \\sum_{B} P(A, B)"
      },
      {
        heading: "조건부 확률 (Conditional Probability)",
        paragraphs: [
          "어떤 사건 B가 이미 발생했을 때, 사건 A가 발생할 확률입니다."
        ],
        latex: "P(A|B) = \\frac{P(A \\cap B)}{P(B)}"
      },
      {
        heading: "베이즈 정리 (Bayes' Theorem)",
        paragraphs: [
          "관찰된 정보를 바탕으로 사건의 확률을 갱신하는 방법입니다.",
          "사전 확률과 우도를 이용해 사후 확률을 계산합니다."
        ],
        latex: "P(A|B) = \\frac{P(B|A) \\times P(A)}{P(B)}"
      },
      {
        heading: "사전 확률과 사후 확률",
        paragraphs: [
          "사전 확률(Prior)은 관찰 이전의 기본 확률입니다.",
          "사후 확률(Posterior)은 데이터를 관찰한 이후 갱신된 확률입니다."
        ],
        list: [
          "사전 확률: P(A)",
          "사후 확률: P(A|B)",
          "우도(Likelihood): P(B|A)",
          "증거(Evidence): P(B)"
        ]
      },
      {
        heading: "독립 사건 (Independent Events)",
        paragraphs: [
          "두 사건이 서로 영향을 미치지 않는 경우를 독립 사건이라고 합니다.",
          "독립일 경우, 조건부 확률은 단순화됩니다."
        ],
        latex: "P(A \\cap B) = P(A) \\times P(B)"
      },
      {
        heading: "정리",
        paragraphs: [
          "확률론의 기본 개념들은 데이터 분석, 머신러닝, 인공지능 등 다양한 분야에서 핵심적인 역할을 합니다.",
          "특히 조건부 확률과 베이즈 정리는 의사결정과 추론에 널리 사용됩니다."
        ]
      }
    ]
  };
  