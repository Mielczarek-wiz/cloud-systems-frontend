import FunctionalityComponent from "@/components/FunctionalityComponent";
import RegionTable from "@/components/RegionTable";

export default function RegionHome({ params }: { params: { id: string } }) {
  const region_id = Number(params.id);
  if (Number.isNaN(region_id)) {
    return <div className="m-8">NaN</div>;
  }
  return (
    <div className="w-full px-10">
      <FunctionalityComponent />
      <RegionTable regionId={region_id} />
    </div>
  );
}
