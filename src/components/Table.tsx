import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

type TableProps = {
  header?: Array<string>;
  rows: Array<Data>;
};

type Data = {
  id: number;
  country: string;
  confirmed: number;
  deaths: number;
  recovered: number;
  active: number;
  newCases: number;
  newDeaths: number;
  newRecovered: number;
  confirmedLastWeek: number;
  whoRegion: {
    region: string;
  };
};

export default function Table({
  header = [
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
  ],
  rows,
}: TableProps) {
  const rowsy: Data[] = [
    {
      id: 1,
      country: "Afghanistan",
      confirmed: 55514,
      deaths: 2425,
      recovered: 49378,
      active: 2711,
      newCases: 0,
      newDeaths: 0,
      newRecovered: 0,
      confirmedLastWeek: 0,
      whoRegion: {
        region: "Eastern Mediterranean",
      },
    },
  ];

  const tdClassName =
    "px-2 py text-center font-medium text-primary whitespace-nowrap border border-primary";
  return (
    <>
      <div className="w-full h-[70dvh]">
        <div className="w-full h-full overflow-auto ">
          {rowsy.length !== 0 ? (
            <table className="w-full text-sm text-left text-primary rtl:text-right">
              <thead className="sticky top-0 text-xs text-primary uppercase bg-secondary">
                <tr className="border border-primary">
                  {header.map((item) => (
                    <th
                      key={item}
                      scope="col"
                      className="px-4 py-4 text-center font-extrabold text-primary border  border-primary whitespace-nowrap"
                    >
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rowsy.map((item: Data) => (
                  <tr
                    key={item.id}
                    className="bg-third border border-primary text-primary"
                  >
                    <th scope="row" className={tdClassName}>
                      {item.id}
                    </th>
                    <td className={tdClassName}>{item.country.toString()}</td>
                    <td className={tdClassName}>{item.confirmed.toString()}</td>
                    <td className={tdClassName}>{item.deaths.toString()}</td>
                    <td className={tdClassName}>{item.recovered.toString()}</td>
                    <td className={tdClassName}>{item.active.toString()}</td>
                    <td className={tdClassName}>{item.newCases.toString()}</td>
                    <td className={tdClassName}>{item.newDeaths.toString()}</td>
                    <td className={tdClassName}>
                      {item.newRecovered.toString()}
                    </td>
                    <td className={tdClassName}>
                      {item.confirmedLastWeek.toString()}
                    </td>
                    <td className={tdClassName}>
                      {item.whoRegion.region.toString()}
                    </td>
                    <td>
                      <div className="flex flex-row items-center justify-center px-2 py-2">
                        <button>
                          <PencilSquareIcon className="w-6 h-6 text-blue-500 hover:cursor-pointer" />
                        </button>
                      </div>
                    </td>
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
  );
}
