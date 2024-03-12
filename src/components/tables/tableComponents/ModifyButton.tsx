"use client";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export default function ModifyButton({ id }: { id: number }) {
  const router = useRouter();
  const handleModify = (id: number) => {
    router.push(`/object/${id}`);
  };
  return (
    <button onClick={() => handleModify(id)}>
      <PencilSquareIcon className="w-6 h-6 text-blue-500 transition duration-200 hover:cursor-pointer hover:text-blue-400" />
    </button>
  );
}
