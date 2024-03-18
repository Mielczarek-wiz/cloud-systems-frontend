"use client";
import { useRouter, usePathname } from "next/navigation";
import Options from "./forms/formComponents/Options";
import { useCallback, useEffect, useState } from "react";
import { Regions } from "./forms/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { getRegions } from "@/api/apiCalls";

export default function FilterInput() {
  // const pathname = usePathname();
  // const defaultValues = {
  //   regionId: Number(pathname.split("/")[1]) || 0,
  // };
  const { register, reset, handleSubmit } = useForm<{ regionId: number }>({
    defaultValues: { regionId: 0 },
  });
  const [regions, setRegions] = useState<Regions[]>([]);
  const router = useRouter();

  const fetchData = useCallback(async () => {
    const abortController = new AbortController();

    try {
      const data = await getRegions();
      // setRegions(data);
      // reset({ regionId: defaultValues.regionId });
    } catch (error) {
      console.error(error);
    }
    return () => {
      abortController.abort();
    };
  }, []);

  useEffect(() => {
    let cleanup = () => {};

    (async () => {
      cleanup = await fetchData();
    })();

    return () => {
      cleanup();
    };
  }, [fetchData]);

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
