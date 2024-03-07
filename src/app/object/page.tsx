import ObjectForm from "@/components/forms/ObjectForm";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto p-4 max-w-screen-md">
      <h1 className="text-2xl my-8 mx-4">Add Object</h1>
      <ObjectForm />
    </div>
  );
}
