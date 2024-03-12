"use client";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export default function AddButton() {
  const router = useRouter();
  const handleAddButton = async () => {
    router.push("/object");
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
