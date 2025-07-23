import Head from "next/head";
import TheoryLayout from "@/components/TheoryLayout";
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
import { probabilityTheoryContent } from "@/data/theory/1_overview/probabilityTheoryContent";

export default function ProbabilityTheoryPage() {
  return (
    <>
      <Head>
        <title>확률론 기초 | AI 학습 플랫폼</title>
      </Head>
      <TheoryLayout>
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          {probabilityTheoryContent.title}{" "}
          <span className="text-sm text-gray-500">{probabilityTheoryContent.subtitle}</span>
        </h1>

        <section className="prose prose-lg dark:prose-invert max-w-3xl mx-auto">
          {probabilityTheoryContent.sections.map((sec, idx) => (
            <div key={idx} className="mb-10">
              {sec.heading && <h2 className="text-2xl font-semibold mb-4">{sec.heading}</h2>}

              {sec.paragraphs && sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="mb-2 leading-relaxed">{p}</p>
              ))}

              {sec.list && (
                <ul className="list-disc list-inside mb-4">
                  {sec.list.map((item, lIdx) => (
                    <li key={lIdx}>{item}</li>
                  ))}
                </ul>
              )}

              {sec.latex && (
                <div className="my-4">
                  <BlockMath math={sec.latex} />
                </div>
              )}
            </div>
          ))}
        </section>
      </TheoryLayout>
    </>
  );
}
