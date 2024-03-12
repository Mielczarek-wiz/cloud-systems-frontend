import FunctionalityComponent from "@/components/FunctionalityComponent";
import MainTable from "@/components/MainTable";

export default function RegionHome({
  params,
}: {
  params: { regionId: number };
}) {
  return (
    <div className="w-full px-10">
      <FunctionalityComponent />
      <MainTable regionId={params.regionId} />
    </div>
  );
}
