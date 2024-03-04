import { cn } from "@/utils/cn";

type Th = {
  scope: string;
  value: string;
  className?: string;
};

export default function Th({ scope = "row", value = "", className = "" }: Th) {
  return (
    <th
      scope={scope}
      className={cn(
        "px-2 text-center  text-primary whitespace-nowrap border border-primary",
        className
      )}
    >
      {value}
    </th>
  );
}
