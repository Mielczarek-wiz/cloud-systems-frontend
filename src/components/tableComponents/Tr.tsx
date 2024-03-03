import { cn } from "@/utils/cn";

export default function Tr({
  className = "",
  children,
}: Readonly<{
  className?: string;
  children: React.ReactNode;
}>) {
  return (
    <tr className={cn("border border-primary text-primary", className)}>
      {children}
    </tr>
  );
}
