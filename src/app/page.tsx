import { callApi } from "@/api/apiCalls";
import FunctionalityComponent from "@/components/FunctionalityComponent";
import Table from "@/components/Table";
import Title from "@/components/Title";
import { useEffect } from "react";

export default async function Home() {
  const data = await callApi();

  return (
    <div className="w-full h-full p-10">
      <Title />
      <FunctionalityComponent />
      <Table rows={[]} />
    </div>
  );
}
