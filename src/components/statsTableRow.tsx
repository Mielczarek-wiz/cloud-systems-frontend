import { rowData } from "@/types/rowData";

export default function StatsTableRow(props: rowData) {
    return <div className="flex">
        <p className="m-6">{props.country}</p>
        <p className="my-6 mr-6">{props.region}</p>
        <p className="my-6 mr-6">{props.confirmed}</p>
        <p className="my-6 mr-6">{props.deaths}</p>
        <p className="my-6 mr-6">{props.recovered}</p>
        <p className="my-6 mr-6">{props.active}</p>
        <p className="my-6 mr-6">{props.newCases}</p>
        <p className="my-6 mr-6">{props.newDeaths}</p>
        <p className="my-6 mr-6">{props.newRecovered}</p>
        <p className="my-6 mr-6">{props.confirmedLastWeek}</p>
        <p className="my-6 mr-6">{props.deathsPerCases}</p>
        <p className="my-6 mr-6">{props.recoveredPerCases}</p>
        <p className="my-6 mr-6">{props.deathsPerRecovered}</p>
        <p className="my-6 mr-6">{props.weekChange}</p>
        <p className="my-6 mr-6">{props.weekPercentageIncrease}</p>
    </div>
}