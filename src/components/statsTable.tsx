"use client"

import { rowData } from "@/types/rowData"
import { useEffect, useState } from "react"
import StatsTableRow from "./statsTableRow"

export default function StatsTable() {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("http://localhost:8080/stats");
            const json = await res.json();
            setData(json)
        }
        fetchData()
    }, [])
    
  return (
    <table className="table-fixed">
        <thead className="sticky top-0 bg-slate-800">
            <tr>
                <th className="border">Country</th>
                <th className="border">Region</th>
                <th className="border">Confirmed</th>
                <th className="border">Deaths</th>
                <th className="border">Recovered</th>
                <th className="border">Active</th>
                <th className="border">New Cases</th>
                <th className="border">New Deaths</th>
                <th className="border">New Recovered</th>
                <th className="border">Confirmed Last Week</th>
                <th className="border">Deaths / 100 Cases</th>
                <th className="border">Recovered / 100 Cases</th>
                <th className="border">Deaths / 100 Recovered</th>
                <th className="border">1 week change</th>
                <th className="border">1 week % increase</th>
            </tr>
        </thead>
        <tbody>
            {data.map((row: rowData) => {
                return <tr key={row.id} className="bg-slate-950 even:bg-slate-900">
                    <td className="p-6 border text-center">{row.country}</td>
                    <td className="p-6 border text-center">{row.region}</td>
                    <td className="p-6 border text-center">{row.confirmed}</td>
                    <td className="p-6 border text-center">{row.deaths}</td>
                    <td className="p-6 border text-center">{row.recovered}</td>
                    <td className="p-6 border text-center">{row.active}</td>
                    <td className="p-6 border text-center">{row.newCases}</td>
                    <td className="p-6 border text-center">{row.newDeaths}</td>
                    <td className="p-6 border text-center">{row.newRecovered}</td>
                    <td className="p-6 border text-center">{row.confirmedLastWeek}</td>
                    <td className="p-6 border text-center">{row.deathsPerCases}</td>
                    <td className="p-6 border text-center">{row.recoveredPerCases}</td>
                    <td className="p-6 border text-center">{row.deathsPerRecovered}</td>
                    <td className="p-6 border text-center">{row.weekChange}</td>
                    <td className="p-6 border text-center">{row.weekPercentageIncrease}</td>
                </tr>
            })}
        </tbody>
    </table>
  )
}
