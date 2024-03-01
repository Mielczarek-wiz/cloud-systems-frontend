import { PlusIcon } from "@heroicons/react/24/outline";

export default function AddButton() {
  return (
    <button className="px-2 py-2 rounded-md bg-emerald-500 font-bold transition duration-200 hover:bg-white  hover:border-emerald-500 text-white hover:text-emerald-500">
      <PlusIcon className="h-6 w-6" />
    </button>
  );
}
