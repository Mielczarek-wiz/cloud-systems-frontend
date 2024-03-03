import Link from "next/link";
import { getRoutes } from "@/routing/routes";
import { Route } from "@/types/Route";

export default function LinkButton(props: {route: Route["name"], text: string}) {
    return (
        <Link
        href={getRoutes(props.route)}
        className="border rounded-s-sm px-4 py-2 bg-third rounded-e-lg border-primary hover:bg-primary hover:text-third text-primary hover:cursor-pointer transition duration-200"
      >
        {props.text} --&gt;
      </Link>
    )
}