import { getOneById } from "@/api/apiCalls";
import ObjectForm from "@/components/forms/ObjectForm";

export default async function Page({ params }: { params: { id: number } }) {
  const object = await getOneById(params.id);

  return (
    <>
      <h1 className="text-2xl p-4 border rounded-lg text-center w-2/3 md:w-1/3 mx-auto">
        Modify Object
      </h1>
      <ObjectForm object={object} />
    </>
  );
}
