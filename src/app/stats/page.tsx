import LinkButton from "@/components/LinkButton";
import StatsTable from "@/components/StatsTable";

export default function Stats() {
  return (
    <div className="w-full px-10">
      <div className="flex justify-start p-4">
        <LinkButton
          route={"Home"}
          text={"Go back"}
          className="rounded-e-sm rounded-s-lg"
        />
      </div>
      <StatsTable />
    </div>
  );
}
