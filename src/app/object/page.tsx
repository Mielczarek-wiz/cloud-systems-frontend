import ObjectForm from "@/components/forms/ObjectForm";

export default async function Page() {
  return (
    <>
      <h1 className="text-2xl p-4 border rounded-lg text-center w-2/3 md:w-1/3 mx-auto">
        Add Object
      </h1>
      <ObjectForm />
    </>
  );
}
