import { cn } from "@/utils/cn";

export default function Td({
  text = "",
  className = "",
  children,
}: {
  text?: String;
  className?: string;

  children?: React.ReactNode;
}) {
  return (
    <td
      className={cn(
        "px-2 py-2 text-center font-medium text-primary whitespace-nowrap border border-primary",
        className
      )}
    >
      {text !== "" ? text : children}
    </td>
  );
}
