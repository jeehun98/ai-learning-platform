import { ReactNode } from "react";
import TheorySidebar from "./TheorySidebar";

type Props = {
  children: ReactNode;
};

export default function TheoryLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <TheorySidebar />
      <main className="flex-1 px-4 sm:px-6 md:px-10 py-8 flex justify-center">
        <div className="w-full max-w-8xl">
          {children}
        </div>
      </main>
    </div>
  );
}
