import Link from "next/link";
import AddButton from "./AddButton";
import FilterInput from "./FilterInput";
import { getRoutes } from "@/routing/routes";

export default function FunctionalityComponent() {
  return (
    <div className="flex flex-row items-center justify-between p-4">
      <div className="flex flex-row items-center justify-start space-x-10">
        <AddButton />
        <FilterInput />
      </div>
      <Link
        href={getRoutes("Statistics")}
        className="border rounded-s-sm px-4 py-2 bg-third rounded-e-lg border-primary hover:bg-primary hover:text-third text-primary hover:cursor-pointer transition duration-200"
      >
        Go to Stats --&gt;
      </Link>
    </div>
  );
}
