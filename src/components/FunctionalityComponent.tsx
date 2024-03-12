import AddButton from "./AddButton";
import FilterInput from "./FilterInput";
import LinkButton from "./LinkButton";

export default function FunctionalityComponent() {
  return (
    <div className="px-2 py-6">
      <div className="hidden md:flex md:flex-row md:justify-between md:items-center">
        <div className="flex flex-row items-center justify-start space-x-10">
          <AddButton />
          <FilterInput />
        </div>
        <LinkButton
          route={"Statistics"}
          text={"Go to Stats"}
          toLeft={false}
          className="rounded-s-sm rounded-e-lg hidden md:block "
        />
      </div>

      <div className="flex flex-col justify-center items-center space-y-4 md:hidden">
        <div className="flex flex-row items-center justify-between w-full">
          <AddButton />
          <LinkButton
            route={"Statistics"}
            text={"Go to Stats"}
            toLeft={false}
            className="rounded-s-sm rounded-e-lg "
          />
        </div>
        <FilterInput />
      </div>
    </div>
  );
}
