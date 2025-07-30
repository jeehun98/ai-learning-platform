import { ReactNode } from "react";
import FrameworkSidebar from "./FrameworkSidebar";  // ✅ 이름 맞춤

type Props = {
  children: ReactNode;
};

export default function FrameworkLayout({ children }: Props) {
  return (
    <div className="flex w-full min-h-screen">
      <FrameworkSidebar />
      <main className="flex-1 px-6 py-10">
        <div className="w-full max-w-6xl mx-auto">{children}</div>
      </main>
    </div>

  );
}
