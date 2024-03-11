import { FieldError, Path, UseFormRegister } from "react-hook-form";
import Error from "./Error";
import { Inputs } from "../types";
import Options from "./Options";

type SelectProps = {
  registerName: Path<Inputs>;
  required: boolean;
  defaultValue?: number;
  register: UseFormRegister<Inputs>;
  error?: FieldError;
  otherOptions: Object;
  regions: { id: number; region: string }[];
};

export default function Select({
  registerName,
  required,
  defaultValue,
  register,
  error,
  otherOptions,
  regions,
}: SelectProps) {
  return (
    <>
      <select
        {...register(registerName, { required, ...otherOptions })}
        defaultValue={defaultValue}
        className="rounded-e-lg bg-primary border text-white p-2 placeholder-white"
      >
        <Options options={regions} />
      </select>
      {error && <Error />}
    </>
  );
}
