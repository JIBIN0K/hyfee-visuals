import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-[#17171b]
        transition-all
        duration-300
        hover:border-purple-500/40
        hover:-translate-y-1
        hover:shadow-[0_20px_60px_rgba(139,92,246,0.12)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}