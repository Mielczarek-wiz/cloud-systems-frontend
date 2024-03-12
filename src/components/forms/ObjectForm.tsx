"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { createOrUpdate } from "@/api/apiCalls";
import { useRouter } from "next/navigation";
import Input from "./formComponents/Input";
import { Data, Regions } from "./types";
import Select from "./formComponents/Select";
import Submit from "./formComponents/Submit";
import { useEffect, useMemo, useState } from "react";

export default function ObjectForm({ object }: { object?: Data }) {
  const defaultValues = useMemo(() => {
    return {
      id: Number(object?.id) || -1,
      country: object?.country || "",
      confirmed: Number(object?.confirmed) || 0,
      deaths: Number(object?.deaths) || 0,
      recovered: Number(object?.recovered) || 0,
      active: Number(object?.active) || 0,
      newCases: Number(object?.newCases) || 0,
      newDeaths: Number(object?.newDeaths) || 0,
      newRecovered: Number(object?.newRecovered) || 0,
      confirmedLastWeek: Number(object?.confirmedLastWeek) || 0,
      whoId: Number(object?.whoId) || 1,
    };
  }, [object]);
  const router = useRouter();
  const [regions, setRegions] = useState<Regions[]>([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Data>({
    defaultValues: defaultValues,
  });

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:8080/region");
      const data = await response.json();
      setRegions(data);
      reset({ ...defaultValues, whoId: defaultValues.whoId });
    }
    fetchData();
  }, [reset, defaultValues]);

  const onSubmit: SubmitHandler<Data> = async (data: Data) => {
    const formData: Data = {
      id: Number(data.id),
      country: data.country,
      confirmed: Number(data.confirmed),
      deaths: Number(data.deaths),
      recovered: Number(data.recovered),
      active: Number(data.active),
      newCases: Number(data.newCases),
      newDeaths: Number(data.newDeaths),
      newRecovered: Number(data.newRecovered),
      confirmedLastWeek: Number(data.confirmedLastWeek),
      whoId: Number(data.whoId),
    };
    if (formData.id == -1) {
      await createOrUpdate(formData, "POST");
    } else {
      await createOrUpdate(formData, "PUT");
    }
    router.push("/");
  };
  return (
    <form
      className="grid grid-cols-1 gap-2 w-2/3 md:w-1/3 mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        type="text"
        registerName="country"
        label="Country name"
        register={register}
        required
        error={errors.country}
      />
      <Input
        type="number"
        registerName="confirmed"
        label="Confirmed cases"
        register={register}
        required
        error={errors.confirmed}
      />
      <Input
        type="number"
        registerName="deaths"
        label="Deaths"
        register={register}
        required
        error={errors.deaths}
      />
      <Input
        type="number"
        registerName="recovered"
        label="Recovered"
        register={register}
        required
        error={errors.recovered}
      />
      <Input
        type="number"
        registerName="active"
        label="Active"
        register={register}
        required
        error={errors.active}
      />
      <Input
        type="number"
        registerName="newCases"
        label="New cases"
        register={register}
        required
        error={errors.newCases}
      />

      <Input
        type="number"
        registerName="newDeaths"
        label="New deaths"
        register={register}
        required
        error={errors.newDeaths}
      />
      <Input
        type="number"
        registerName="newRecovered"
        label="New recovered"
        register={register}
        required
        error={errors.newRecovered}
      />
      <Input
        type="number"
        registerName="confirmedLastWeek"
        label="Confirmed last week"
        register={register}
        required
        error={errors.confirmedLastWeek}
      />
      <Select
        otherOptions={{ min: 1 }}
        register={register}
        registerName="whoId"
        required
        error={errors.whoId}
        regions={regions}
      />
      <Submit />
    </form>
  );
}
