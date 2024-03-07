"use client";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export default function AddButton() {
  const router = useRouter();
  const handleAddButton = async () => {
    /* Your logic here */
    router.push("/object");
    console.log("Add button clicked");

    /* You need to do this to refresh all server side components (data-fetch) */
    router.refresh();
  };
  return (
    <button
      className="px-2 py-2 rounded-md bg-emerald-500 font-bold transition duration-200 hover:bg-white  hover:border-emerald-500 text-white hover:text-emerald-500"
      onClick={handleAddButton}
    >
      <PlusIcon className="h-6 w-6" />
    </button>
  );
}
