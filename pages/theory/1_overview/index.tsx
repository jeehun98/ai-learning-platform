import Head from "next/head";
import TheoryLayout from "@/components/TheoryLayout";
import { overviewContent } from "../../../data/theory/overviewContent";

export default function OverviewPage() {
  return (
    <>
      <Head>
        <title>1. 개요 | AI 학습 플랫폼</title>
      </Head>
      <TheoryLayout>
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          📘 1. 패턴 인식 개요
        </h1>

        <section className="prose prose-lg dark:prose-invert max-w-3xl mx-auto">
          {overviewContent.map((section, idx) => (
            <div key={idx} id={`section-${idx}`}>
              <h2>{section.title}</h2>
              {section.body.map((para, pIdx) => (
                <p key={pIdx}>{para}</p>
              ))}
            </div>
          ))}
        </section>
      </TheoryLayout>
    </>
  );
}
