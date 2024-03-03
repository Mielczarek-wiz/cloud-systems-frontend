import { getStats } from "@/api/apiCalls";
import { Stats } from "@/types/Stats"

export default async function StatsTable({
    header = [
        "ID",
        "Country",
        "Deaths / 100 Cases",
        "Recovered / 100 Cases",
        "Deaths / 100 Recovered",
        "1 week change",
        "New 1 week % increase"
      ]
}: {
    header?: Array<string>;
  }) {
    const tdClassName = "px-2 py-2 text-center font-medium text-primary whitespace-nowrap border border-primary";
    const rows = await getStats();
  return (
    <>
      <div className="w-full h-[70dvh] shadow shadow-primary">
        <div className="w-full h-full overflow-auto ">
          {rows.length !== 0 ? (
            <table className="w-full text-sm text-left text-primary rtl:text-right">
              <thead className="sticky top-0 text-xs text-primary uppercase bg-secondary">
                <tr className="border border-primary">
                  {header.map((item) => (
                    <th
                      key={item}
                      scope="col"
                      className="px-2 py-4 text-center font-extrabold text-primary border  border-primary whitespace-nowrap"
                    >
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((item: Stats) => (
                  <tr
                    key={item.id}
                    className="bg-third border border-primary text-primary"
                  >
                    <th scope="row" className={tdClassName}>
                      {item.id}
                    </th>
                    <td className={tdClassName}>{item.country.toString()}</td>
                    <td className={tdClassName}>{item.deathsPerCases}</td>
                    <td className={tdClassName}>{item.recoveredPerCases}</td>
                    <td className={tdClassName}>{item.deathsPerRecovered}</td>
                    <td className={tdClassName}>{item.weekChange}</td>
                    <td className={tdClassName}>{item.weekPercentageIncrease}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <span className="flex flex-row items-center justify-center w-full h-full text-xl font-extrabold text-center text-primary border">
              No data to display
            </span>
          )}
        </div>
      </div>
    </>
  )
}
