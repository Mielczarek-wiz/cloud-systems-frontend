import { FieldError, Path, UseFormRegister } from "react-hook-form";
import Error from "./Error";
import { Data } from "../types";
import Options from "./Options";

type SelectProps = {
  registerName: Path<Data>;
  required: boolean;
  register: UseFormRegister<Data>;
  error?: FieldError;
  otherOptions: Object;
  regions: { id: number; region: string }[];
};

export default function Select({
  registerName,
  required,
  register,
  error,
  otherOptions,
  regions,
}: SelectProps) {
  return (
    <>
      <select
        {...register(registerName, { required, ...otherOptions })}
        className="rounded-e-lg bg-primary border text-white p-2 placeholder-white"
      >
        <Options options={regions} />
      </select>
      {error && <Error />}
    </>
  );
}
