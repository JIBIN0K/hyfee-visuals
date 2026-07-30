interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({
  children,
  className = "",
}: BadgeProps) {
  return (
    <div
      className={`inline-flex items-center rounded-full border border-green-500/40 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-300 ${className}`}
    >
      {children}
    </div>
  );
}