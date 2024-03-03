import FunctionalityComponent from "@/components/FunctionalityComponent";
import MainTable from "@/components/MainTable";

export default async function Home() {
  return (
    <div className="w-full px-10">
      <FunctionalityComponent />
      <MainTable />
    </div>
  );
}
