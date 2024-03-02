import { Stats } from "@/types/rowData"
import type { InferGetStaticPropsType, GetStaticProps } from 'next'


//TODO fix this shit
export const getStaticProps = (async (context) => {
    const res = await fetch("http://localhost:8080/stats")
    const repo = await res.json()
    return { props: { repo } }
  }) satisfies GetStaticProps<{repo: Stats[]}>

export default function StatsTable({repo}: InferGetStaticPropsType<typeof getStaticProps>) {
  //TODO Replace temporary css classes 
  console.log(repo)
  return (
    <table className="table-fixed">
        <thead className="sticky top-0 bg-slate-800">
            <tr>
                <th className="border">Country</th>
                <th className="border">Deaths / 100 Cases</th>
                <th className="border">Recovered / 100 Cases</th>
                <th className="border">Deaths / 100 Recovered</th>
                <th className="border">1 week change</th>
                <th className="border">1 week % increase</th>
            </tr>
        </thead>
        <tbody>
            {repo.map((row: Stats) => {
                return <tr key={row.id} className="bg-slate-950 even:bg-slate-900">
                    <td className="p-6 border text-center">{row.country}</td>
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
