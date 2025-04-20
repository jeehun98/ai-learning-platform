import { ReactNode } from "react";
import TheorySidebar from "./TheorySidebar";

type Props = {
  children: ReactNode;
};

export default function TheoryLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <TheorySidebar />
      <main className="flex-1 p-10">{children}</main>
    </div>
  );
}
