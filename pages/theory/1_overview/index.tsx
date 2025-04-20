import TheorySidebar from "@/components/TheorySidebar";
import { overviewContent } from "../../../data/theory/overviewContent";

export default function OverviewPage() {
  return (
    <div className="flex">
      <TheorySidebar />
      <main className="flex-1 max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-6">📘 {overviewContent.title}</h1>

        {overviewContent.sections.map((section, idx) => (
          <section key={idx} className="mb-8">
            <h2 className="text-xl font-semibold mb-2">{section.heading}</h2>
            <p className="text-gray-700 whitespace-pre-line">{section.body}</p>
          </section>
        ))}
      </main>
    </div>
  );
}
