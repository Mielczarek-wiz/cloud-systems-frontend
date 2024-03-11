import ObjectForm from "@/components/forms/ObjectForm";

export default function Page() {
  return (
    <div className="px-10 mx-auto h-full">
      <h1 className="text-2xl p-4 border rounded-lg text-center w-1/2 mx-auto">
        Add Object
      </h1>
      <ObjectForm />
    </div>
  );
}
