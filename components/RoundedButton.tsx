import Link from "next/link";
import { ReactNode } from "react";

type RoundedButtonProps = {
  href: string;
  children: ReactNode;
  color?: string;
};

export default function RoundedButton({ href, children, color }: RoundedButtonProps) {
  const baseColor = color ?? "bg-gray-100 text-gray-800";
  return (
    <Link
      href={href}
      className={`${baseColor} block text-center font-semibold py-3 px-6 rounded-2xl shadow hover:scale-105 transition`}
    >
      {children}
    </Link>
  );
}
