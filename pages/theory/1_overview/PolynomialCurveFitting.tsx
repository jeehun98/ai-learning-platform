import Head from "next/head";
import TheoryLayout from "@/components/TheoryLayout";
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
import { polynomialContent } from "@/data/theory/polynomialCurveFittingContent";

export default function PolynomialFittingPage() {
  return (
    <>
      <Head>
        <title>1.1 다항식 곡선 피팅 | AI 학습 플랫폼</title>
      </Head>
      <TheoryLayout>
        <h1 className="text-3xl font-bold mb-6">
          {polynomialContent.title}{" "}
          <span className="text-sm text-gray-500">{polynomialContent.subtitle}</span>
        </h1>

        <section className="space-y-10 leading-relaxed">
          {polynomialContent.sections.map((sec, idx) => (
            <div key={idx}>
              {sec.heading && (
                <h2 className="text-2xl font-semibold mt-10">{sec.heading}</h2>
              )}
              {sec.paragraphs && sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}
              {sec.list && (
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  {sec.list.map((item, lIdx) => (
                    <li key={lIdx}>{item}</li>
                  ))}
                </ul>
              )}
              {sec.latex && (
                <BlockMath math={sec.latex} />
              )}
            </div>
          ))}
        </section>
      </TheoryLayout>
    </>
  );
}
