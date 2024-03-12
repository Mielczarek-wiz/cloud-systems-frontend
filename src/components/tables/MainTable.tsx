import { getAll, getAllByRegionId } from "../../api/apiCalls";
import NoData from "./tableComponents/NoData";
import TableWrapper from "./tableComponents/TableWrapper";
import Table from "./tableComponents/Table";
import Thead from "./tableComponents/Thead";
import MainTableBody from "./tableComponents/MainTableBody";

export default async function MainTable({ regionId }: { regionId?: number }) {
  const getRows = async () => {
    if (regionId !== undefined && regionId !== 0) {
      return await getAllByRegionId(regionId);
    } else {
      return await getAll();
    }
  };

  const rows = await getRows();
  return (
    <TableWrapper>
      {rows.length !== 0 || rows !== undefined ? (
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
