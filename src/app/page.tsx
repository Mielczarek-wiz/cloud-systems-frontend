import { callApi } from "@/api/apiCalls";
import FunctionalityComponent from "@/components/FunctionalityComponent";
import Table from "@/components/Table";
import Title from "@/components/Title";

type Data = {
  id: string;
  country: string;
  confirmed: string;
  deaths: string;
  recovered: string;
  active: string;
  newCases: string;
  newDeaths: string;
  newRecovered: string;
  confirmedLastWeek: string;
  whoRegion: {
    region: string;
  };
};

export default async function Home() {
  const data: Data[] = await callApi();
  return (
    <div className="w-full h-full p-10">
      <Title />
      <FunctionalityComponent />
      <Table rows={data} />
    </div>
  );
}
