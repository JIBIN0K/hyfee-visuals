import Link from "next/link";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-purple-600 text-white hover:bg-purple-700 shadow-lg shadow-purple-600/20"
      : "border border-purple-500 text-white hover:bg-purple-600";

  if (href) {
    return (
      <Link
        href={href}
        className={`inline-flex items-center justify-center rounded-xl px-8 py-3 font-semibold transition ${styles} ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`inline-flex items-center justify-center rounded-xl px-8 py-3 font-semibold transition ${styles} ${className}`}
    >
      {children}
    </button>
  );
}