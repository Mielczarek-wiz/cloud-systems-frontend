import { getAllByRegionId } from "../api/apiCalls";
import NoData from "./tableComponents/NoData";
import TableWrapper from "./tableComponents/TableWrapper";
import Table from "./tableComponents/Table";
import Thead from "./tableComponents/Thead";
import MainTableBody from "./tableComponents/MainTableBody";

export default async function RegionTable({ regionId }: { regionId: number }) {
  const rows = await getAllByRegionId(regionId);
  console.log(rows);
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
