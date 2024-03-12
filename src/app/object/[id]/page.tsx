import { getOneById } from "@/api/apiCalls";
import ObjectForm from "@/components/forms/ObjectForm";

export default async function Page({ params }: { params: { id: number } }) {
  if (Number.isNaN(params.id)) {
    return <div className="m-8">NaN</div>;
  }
  const object = await getOneById(params.id);

  return (
    <>
      <h1 className="text-2xl p-4 border rounded-lg text-center w-1/2 mx-auto">
        Modify Object
      </h1>
      <ObjectForm object={object} />
    </>
  );
}
