import Head from "next/head";
import TheoryLayout from "@/components/TheoryLayout";
import PolynomialGraph from "@/components/1_1/PolynomialGraph";
import 'katex/dist/katex.min.css';
import { polynomialContent } from "@/data/theory/polynomialCurveFittingContent";



export default function PolynomialFittingPage() {
  return (
    <>
      <Head>
        <title>1.1 다항식 곡선 피팅 | AI 학습 플랫폼</title>
      </Head>
      <TheoryLayout>
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          {polynomialContent.title}{" "}
          <span className="text-sm text-gray-500">{polynomialContent.subtitle}</span>
        </h1>

        <section className="prose prose-lg dark:prose-invert max-w-3xl mx-auto">
          {polynomialContent.sections.map((sec, idx) => (
            <div key={idx}>
              {sec.heading && <h2>{sec.heading}</h2>}
              {sec.paragraphs && sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}
              {sec.list && (
                <ul>
                  {sec.list.map((item, lIdx) => (
                    <li key={lIdx}>{item}</li>
                  ))}
                </ul>
              )}
              
            </div>
          ))}
        </section>
        <PolynomialGraph />
      </TheoryLayout>
    </>
  );
}
