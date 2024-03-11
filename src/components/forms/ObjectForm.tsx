"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { postOne, updateOne } from "@/api/apiCalls";
import { useRouter } from "next/navigation";
import Input from "./formComponents/Input";
import { Data, Inputs, Regions } from "./types";
import Select from "./formComponents/Select";
import Submit from "./formComponents/Submit";
import { use, useEffect, useState } from "react";

export default function ObjectForm({ object }: { object?: Inputs }) {
  const router = useRouter();
  const [regions, setRegions] = useState<Regions[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:8080/region");
      const data = await response.json();
      setRegions(data);
    }
    fetchData();
  }, []);

  if (object == null) {
    object = {
      id: 0,
      country: "",
      confirmed: "",
      deaths: "",
      recovered: "",
      active: "",
      newCases: "",
      newDeaths: "",
      newRecovered: "",
      confirmedLastWeek: "",
      whoId: 0,
    };
  }

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    const formData: Data = {
      id: data.id,
      country: data.country,
      confirmed: data.confirmed,
      deaths: data.deaths,
      recovered: data.recovered,
      active: data.active,
      newCases: data.newCases,
      newDeaths: data.newDeaths,
      newRecovered: data.newRecovered,
      confirmedLastWeek: data.confirmedLastWeek,
      region: regions.find((region: Regions) => region.id == data.whoId).region,
    };

    console.log(formData);
    let result;
    if (formData!.id == 0) {
      result = await postOne(formData);
    } else {
      result = await updateOne(formData!.id, formData);
    }
    router.push("/");
  };
  return (
    <form
      className="grid grid-cols-1 gap-2 w-1/2 mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        type="text"
        registerName="country"
        label="Country name"
        defaultValue={object.country}
        register={register}
        required
        error={errors.country}
      />
      <Input
        type="number"
        registerName="confirmed"
        label="Confirmed cases"
        defaultValue={object.confirmed}
        register={register}
        required
        error={errors.confirmed}
      />
      <Input
        type="number"
        registerName="deaths"
        label="Deaths"
        defaultValue={object.deaths}
        register={register}
        required
        error={errors.deaths}
      />
      <Input
        type="number"
        registerName="recovered"
        label="Recovered"
        defaultValue={object.recovered}
        register={register}
        required
        error={errors.recovered}
      />
      <Input
        type="number"
        registerName="active"
        label="Active"
        defaultValue={object.active}
        register={register}
        required
        error={errors.active}
      />
      <Input
        type="number"
        registerName="newCases"
        label="New cases"
        defaultValue={object.newCases}
        register={register}
        required
        error={errors.newCases}
      />

      <Input
        type="number"
        registerName="newDeaths"
        label="New deaths"
        defaultValue={object.newDeaths}
        register={register}
        required
        error={errors.newDeaths}
      />
      <Input
        type="number"
        registerName="newRecovered"
        label="New recovered"
        defaultValue={object.newRecovered}
        register={register}
        required
        error={errors.newRecovered}
      />
      <Input
        type="number"
        registerName="confirmedLastWeek"
        label="Confirmed last week"
        defaultValue={object.confirmedLastWeek}
        register={register}
        required
        error={errors.confirmedLastWeek}
      />
      <Select
        defaultValue={object.whoId}
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
