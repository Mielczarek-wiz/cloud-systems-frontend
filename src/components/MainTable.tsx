import { getAll } from "../api/apiCalls";
import { Data } from "@/types/Data";
import ModifyButton from "./tableComponents/ModifyButton";
import Td from "./tableComponents/Td";
import NoData from "./tableComponents/NoData";
import TableWrapper from "./tableComponents/TableWrapper";
import Tr from "./tableComponents/Tr";
import Th from "./tableComponents/Th";
import Table from "./tableComponents/Table";
import Thead from "./tableComponents/Thead";
import MainTableBody from "./tableComponents/MainTableBody";

export default async function MainTable() {
  const rows = await getAll();
  return (
    <TableWrapper>
      {rows.length !== 0 ? (
        <Table>
          <Thead
            header={[
              "ID",
              "Country",
              "Confirmed",
              "Deaths",
              "Recovered",
              "Active",
              "New Cases",
              "New Deaths",
              "New Recovered",
              "Confirmed Last Week",
              "WHO Region",
              "Actions",
            ]}
          />
          <MainTableBody rows={rows} />
        </Table>
      ) : (
        <NoData />
      )}
    </TableWrapper>
  );
}
