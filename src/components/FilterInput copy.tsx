"use client";
import { useRouter } from "next/navigation";
import Input from "./forms/formComponents/Input";

export default function FilterInput() {
  const router = useRouter();
  const handleInput = async (e: any) => {
    /* Your logic here */
    console.log("Input handled", e.target.value);

    /* You need to do this to refresh all server side components (data-fetch) */
    router.refresh();
  };

  return (
    <div className=" flex flex-row items-center justify-center space-x-2 bg-third rounded-e-lg border border-primary rounded-s-sm">
      <span className="text-primary px-2">Filter: </span>

      <Input type="text" placeholder="Type.." onChange={handleInput} />
    </div>
  );
}
