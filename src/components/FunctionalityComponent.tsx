import AddButton from "./AddButton";
import FilterInput from "./FilterInput";
import LinkButton from "./LinkButton";

export default function FunctionalityComponent() {
  return (
    <div className="flex flex-row items-center justify-between p-4">
      <div className="flex flex-row items-center justify-start space-x-10">
        <AddButton />
        <FilterInput />
      </div>
      <LinkButton
        route={"Statistics"}
        text={"Go to Stats"}
        className="rounded-s-sm rounded-e-lg"
      />
    </div>
  );
}
