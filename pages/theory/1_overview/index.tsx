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

        <div className="space-y-10 text-gray-800 dark:text-gray-200 leading-relaxed">
          {overviewContent.map((section, idx) => (
            <section key={idx} id={`section-${idx}`}>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 border-b pb-2">
                {section.title}
              </h2>
              {section.body.map((para, pIdx) => (
                <p key={pIdx} className="mb-4">
                  {para}
                </p>
              ))}
            </section>
          ))}
        </div>
      </TheoryLayout>
    </>
  );
}
