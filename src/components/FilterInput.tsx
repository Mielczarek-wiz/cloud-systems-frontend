"use client";
import { useRouter, usePathname } from "next/navigation";

export default function FilterInput() {
  const router = useRouter();
  const region_id = 0;
  const pathname = usePathname();
  let selectDefaultValue = 0;
  if (Number.isInteger(Number(pathname.at(-1)))) {
    selectDefaultValue = Number(pathname.at(-1));
  }

  const handleInput = async (e: any) => {
    /* Your logic here */
    if (e.target.value === "0") {
      router.push(`/`);
      return;
    }
    router.push(`/region/${e.target.value}`);
    /* You need to do this to refresh all server side components (data-fetch) */
    router.refresh();
  };

  return (
    <div className=" flex flex-row items-center justify-center space-x-2 bg-third rounded-e-lg border border-primary rounded-s-sm">
      <span className="text-primary px-2">WHO Region</span>

      {/* <Input type="text" placeholder="Type.." onChange={handleInput} /> */}
      <select
        onChange={handleInput}
        defaultValue={selectDefaultValue}
        className="rounded-none rounded-e-lg bg-primary border text-white block flex-1 min-w-0 w-full text-sm p-2.5 placeholder-white"
      >
        <option value="0">All</option>
        <option value="1">Eastern Mediterranean</option>
        <option value="2">Africa</option>
        <option value="3">Americas</option>
        <option value="4">Western Pacific</option>
        <option value="5">Europe</option>
        <option value="6">South-East Asia</option>
      </select>
      {/* <button className="text-primary px-2 hover:text-emerald-500">Go</button> */}
    </div>
  );
}
