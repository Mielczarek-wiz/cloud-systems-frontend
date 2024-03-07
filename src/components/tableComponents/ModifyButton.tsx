"use client";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export default function ModifyButton({ id }: { id: Number }) {
  const router = useRouter();
  const handleModify = (id: Number) => {
    /* Your logic here */
    router.push(`/object/${id}`);
    console.log(id);

    /* You need to do this to refresh all server side components (data-fetch) */
    router.refresh();
  };
  return (
    <button onClick={() => handleModify(id)}>
      <PencilSquareIcon className="w-6 h-6 text-blue-500 transition duration-200 hover:cursor-pointer hover:text-blue-400" />
    </button>
  );
}
