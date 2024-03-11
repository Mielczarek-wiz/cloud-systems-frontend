"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { postOne, updateOne } from "@/api/apiCalls";
import Input from "./formComponents/Input";
import { useRouter } from "next/navigation";

type Inputs = {
  id: number;
  country: string;
  confirmed: string;
  deaths: string;
  recovered: string;
  active: string;
  newCases: string;
  newDeaths: string;
  newRecovered: string;
  confirmedLastWeek: string;
  whoId?: number;
};

export default function ObjectForm({ object }: { object?: Inputs }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

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
  const whoRegions: string[] = [];
  whoRegions[1] = "Eastern Mediterranean";
  whoRegions[2] = "Africa";
  whoRegions[3] = "Americas";
  whoRegions[4] = "Western Pacific";
  whoRegions[5] = "Europe";
  whoRegions[6] = "South-East Asia";

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log("new record: ", object!.id == 0);
    console.log(data);
    // @ts-ignore
    data.whoRegion = { region: whoRegions[data.whoId] };
    delete data.whoId;
    if (object!.id != 0) {
      data.id = object!.id;
    }
    console.log(data);
    let result;
    if (object!.id == 0) {
      result = await postOne(data);
    } else {
      result = await updateOne(object!.id, data);
    }
    console.log(result);
    router.refresh();
    router.push("/");
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>Country name</div>
      <input
        className="rounded-none rounded-e-lg bg-primary border text-white block flex-1 min-w-0 w-full text-sm p-2.5 placeholder-white mb-2"
        type="text"
        defaultValue={object.country}
        {...register("country", { required: true })}
      />
      {errors.country && (
        <div className="text-red-300">This field is required</div>
      )}
      <div>Confirmed cases</div>
      <input
        className="rounded-none rounded-e-lg bg-primary border text-white block flex-1 min-w-0 w-full text-sm p-2.5 placeholder-white mb-2"
        type="number"
        defaultValue={object.confirmed}
        {...register("confirmed", { required: true })}
      />
      {errors.confirmed && (
        <div className="text-red-300">This field is required</div>
      )}
      <div>Deaths</div>
      <input
        className="rounded-none rounded-e-lg bg-primary border text-white block flex-1 min-w-0 w-full text-sm p-2.5 placeholder-white mb-2"
        type="number"
        defaultValue={object.deaths}
        {...register("deaths", { required: true })}
      />
      {errors.deaths && (
        <div className="text-red-300">This field is required</div>
      )}
      <div>Recovered</div>
      <input
        className="rounded-none rounded-e-lg bg-primary border text-white block flex-1 min-w-0 w-full text-sm p-2.5 placeholder-white mb-2"
        type="number"
        defaultValue={object.recovered}
        {...register("recovered", { required: true })}
      />
      {errors.recovered && (
        <div className="text-red-300">This field is required</div>
      )}
      <div>Active</div>
      <input
        className="rounded-none rounded-e-lg bg-primary border text-white block flex-1 min-w-0 w-full text-sm p-2.5 placeholder-white mb-2"
        type="number"
        defaultValue={object.active}
        {...register("active", { required: true })}
      />
      {errors.active && (
        <div className="text-red-300">This field is required</div>
      )}
      <div>New cases</div>
      <input
        className="rounded-none rounded-e-lg bg-primary border text-white block flex-1 min-w-0 w-full text-sm p-2.5 placeholder-white mb-2"
        type="number"
        defaultValue={object.newCases}
        {...register("newCases", { required: true })}
      />
      {errors.newCases && (
        <div className="text-red-300">This field is required</div>
      )}
      <div>New deaths</div>
      <input
        className="rounded-none rounded-e-lg bg-primary border text-white block flex-1 min-w-0 w-full text-sm p-2.5 placeholder-white mb-2"
        type="number"
        defaultValue={object.newDeaths}
        {...register("newDeaths", { required: true })}
      />
      {errors.newDeaths && (
        <div className="text-red-300">This field is required</div>
      )}
      <div>New recovered</div>
      <input
        className="rounded-none rounded-e-lg bg-primary border text-white block flex-1 min-w-0 w-full text-sm p-2.5 placeholder-white mb-2"
        type="number"
        defaultValue={object.newRecovered}
        {...register("newRecovered", { required: true })}
      />
      {errors.newRecovered && (
        <div className="text-red-300">This field is required</div>
      )}
      <div>Confirmed last week</div>
      <input
        className="rounded-none rounded-e-lg bg-primary border text-white block flex-1 min-w-0 w-full text-sm p-2.5 placeholder-white mb-2"
        type="number"
        defaultValue={object.confirmedLastWeek}
        {...register("confirmedLastWeek", { required: true })}
      />
      {errors.confirmedLastWeek && (
        <div className="text-red-300">This field is required</div>
      )}
      <select
        {...register("whoId", { required: true, min: 1 })}
        defaultValue={object.whoId}
        className="rounded-none rounded-e-lg bg-primary border text-white block flex-1 min-w-0 w-full text-sm p-2.5 placeholder-white mb-2"
      >
        <option value="0">Choose...</option>
        <option value="1">Eastern Mediterranean</option>
        <option value="2">Africa</option>
        <option value="3">Americas</option>
        <option value="4">Western Pacific</option>
        <option value="5">Europe</option>
        <option value="6">South-East Asia</option>
      </select>
      {errors.whoId && (
        <div className="text-red-300">This field is required</div>
      )}
      <input
        className="rounded-none rounded-e-lg bg-primary border text-black block flex-1 min-w-0 m-auto my-8 text-sm p-2.5 hover:bg-gray-500"
        type="submit"
        value="Submit"
      />
    </form>
  );
}
