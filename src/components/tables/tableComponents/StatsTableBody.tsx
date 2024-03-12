import { Stats } from "@/types/Stats";
import Tr from "./Tr";
import Th from "./Th";
import Td from "./Td";

export default function StatsTableBody({ rows }: { rows: Stats[] }) {
  return (
    <tbody>
      {rows.map((item: Stats) => (
        <Tr key={item.id} className="bg-third">
          <Th scope="row" value={item.id.toString()} />
          <Td text={item.country.toString()} />
          <Td text={item.deathsPerCases.toString()} />
          <Td text={item.recoveredPerCases.toString()} />
          <Td text={item.deathsPerRecovered.toString()} />
          <Td text={item.weekChange.toString()} />
          <Td text={item.weekPercentageIncrease.toString()} />
        </Tr>
      ))}
    </tbody>
  );
}
