import FunctionalityComponent from "@/components/FunctionalityComponent";
import Table from "@/components/Table";

export default async function Home() {
  return (
    <div className="w-full h-full px-10">
      <FunctionalityComponent />
      <Table />
    </div>
  );
}
