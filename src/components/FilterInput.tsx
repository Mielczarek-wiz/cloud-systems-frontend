import Input from "./forms/formComponents/Input";

export default function FilterInput() {
  return (
    <div className=" flex flex-row items-center justify-center space-x-2 bg-third rounded-e-lg border border-primary">
      <span className="text-primary px-2">Filter: </span>
      <Input type="text" placeholder="Type.." />
    </div>
  );
}
