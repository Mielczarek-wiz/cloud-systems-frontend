import { Data } from "@/types/Data";
import Th from "./Th";
import Tr from "./Tr";
import Td from "./Td";
import ModifyButton from "./ModifyButton";

export default function MainTableBody({rows} : {rows: Data[]}) {
  return (
    <tbody>
      {rows.map((item: Data) => (
        <Tr key={item.id} className="bg-third">
          <Th scope="row" value={item.id} className="py font-medium" />
          <Td text={item.country.toString()} />
          <Td text={item.confirmed.toString()} />
          <Td text={item.deaths.toString()} />
          <Td text={item.recovered.toString()} />
          <Td text={item.active.toString()} />
          <Td text={item.newCases.toString()} />
          <Td text={item.newDeaths.toString()} />
          <Td text={item.newRecovered.toString()} />
          <Td text={item.confirmedLastWeek.toString()} />
          <Td text={item.whoRegion.region.toString()} />
          <Td className="flex flex-row items-center justify-center px-4 py-3 border-none">
            <ModifyButton id={Number(item.id)} />
          </Td>
        </Tr>
      ))}
    </tbody>
  );
}
