import Th from "./Th";
import Tr from "./Tr";

export default function Thead({ header }: { header: Array<string> }) {
  return (
    <thead className="sticky top-0 text-xs text-primary uppercase bg-secondary">
      <Tr>
        {header.map((item: string) => (
          <Th
            key={item}
            scope="col"
            value={item}
            className="py-4 font-extrabold"
          />
        ))}
      </Tr>
    </thead>
  );
}
