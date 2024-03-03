import LinkButton from "@/components/LinkButton";
import StatsTable from "@/components/StatsTable";

export default function Stats() {
  return (
    <div className="w-full px-10">
      <div className="flex justify-end p-4">
        <LinkButton route={"Home"} text={"Go back"}/>
      </div>
      <StatsTable />
    </div>
  );
}
