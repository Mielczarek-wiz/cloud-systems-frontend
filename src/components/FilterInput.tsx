"use client";
import { useRouter, usePathname } from "next/navigation";
import Options from "./forms/formComponents/Options";
import { useEffect, useState } from "react";
import { Regions } from "./forms/types";
import { SubmitHandler, useForm } from "react-hook-form";

export default function FilterInput() {
  const pathname = usePathname();
  const { register, reset, handleSubmit } = useForm<{ regionId: number }>({
    defaultValues: { regionId: Number(pathname.split("/")[2]) || 0 },
  });
  const [regions, setRegions] = useState<Regions[]>([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:8080/region");
      const data = await response.json();
      setRegions(data);
      reset({ regionId: Number(pathname.split("/")[1]) || 0 });
    }
    if (Number(pathname.split("/")[1]) === 0) {
      router.push("/");
    }
    fetchData();
  }, [reset, pathname, router]);

  const onSubmit: SubmitHandler<{ regionId: number }> = async ({
    regionId,
  }: {
    regionId: number;
  }) => {
    router.push(`/${regionId}`);
  };

  return (
    <form
      className="space-x-2 flex flex-row items-center justify-center "
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="border border-primary rounded-lg">
        <span className="text-primary p-2">WHO Region</span>
        <select
          className="rounded-e-lg bg-primary border text-white p-2 placeholder-white"
          {...register("regionId")}
        >
          <option value={0}>All</option>
          <Options options={regions} />
        </select>
      </div>
      <input
        type="submit"
        value="Filter"
        className="rounded-md bg-primary text-white p-2 transition-colors hover:bg-third duration-300 ease-in-out cursor-pointer"
      />
    </form>
  );
}
