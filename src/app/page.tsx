import AddButton from "@/components/AddButton";
import FunctionalityComponent from "@/components/FunctionalityComponent";
import Table from "@/components/Table";
import Title from "@/components/Title";

export default function Home() {
  return (
    <div className="w-full h-full p-10">
      <Title />
      <FunctionalityComponent />
      <Table rows={[]} />
    </div>
  );
}
