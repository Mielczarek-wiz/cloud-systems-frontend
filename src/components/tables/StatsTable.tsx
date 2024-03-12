import { getStats } from "@/api/apiCalls";
import Thead from "./tableComponents/Thead";
import Table from "./tableComponents/Table";
import TableWrapper from "./tableComponents/TableWrapper";
import NoData from "./tableComponents/NoData";
import StatsTableBody from "./tableComponents/StatsTableBody";

export default async function StatsTable() {
  const rows = await getStats();
  return (
    <TableWrapper>
      {rows.length !== 0 ? (
        <Table>
          <Thead
            header={[
              "ID",
              "Country",
              "Deaths / 100 Cases",
              "Recovered / 100 Cases",
              "Deaths / 100 Recovered",
              "1 week change",
              "New 1 week % increase",
            ]}
          />
          <StatsTableBody rows={rows} />
        </Table>
      ) : (
        <NoData />
      )}
    </TableWrapper>
  );
}
