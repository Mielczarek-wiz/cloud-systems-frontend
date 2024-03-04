import Link from "next/link";
import { getRoutes } from "@/routing/routes";
import { Route } from "@/types/Route";
import { cn } from "@/utils/cn";

type LinkButtonType = {
  route: Route["name"];
  text: string;
  toLeft: boolean;
  className?: string;
};

export default function LinkButton({
  route,
  text,
  toLeft = false,
  className = "",
}: LinkButtonType) {
  return (
    <Link
      href={getRoutes(route)}
      className={cn(
        "border rounded-s-sm px-4 py-2 bg-third rounded-e-lg border-primary hover:bg-primary hover:text-third text-primary hover:cursor-pointer transition duration-200",
        className
      )}
    >
      {toLeft ? <span>&lt;-- {text}</span> : <span>{text} --&gt;</span>}
    </Link>
  );
}
