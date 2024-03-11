import { getOneById } from "@/api/apiCalls";
import ObjectForm from "@/components/forms/ObjectForm";

export default async function Page({ params }: { params: { id: string } }) {
  const object_id = Number(params.id);
  if (Number.isNaN(object_id)) {
    return <div className="m-8">NaN</div>;
  }
  const data = await getOneById(object_id);
  return (
    <div className="container mx-auto p-4  max-w-screen-md">
      <h1 className="text-2xl my-8 mx-4">Modify Object</h1>
      <ObjectForm object={data} />
    </div>
  );
}
