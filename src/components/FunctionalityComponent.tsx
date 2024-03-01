import AddButton from "./AddButton";
import FilterInput from "./FilterInput";

export default function FunctionalityComponent() {
  return (
    <div className="flex flex-row items-center justify-start p-4 space-x-10">
      <AddButton />
      <FilterInput />
    </div>
  );
}
