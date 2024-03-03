import FunctionalityComponent from "@/components/FunctionalityComponent";
import Table from "@/components/Table";
import Title from "@/components/Title";

export default async function Home() {
  return (
    <div className="w-full h-full p-10">
      <Title />
      <FunctionalityComponent />
      <Table />
    </div>
  );
}
