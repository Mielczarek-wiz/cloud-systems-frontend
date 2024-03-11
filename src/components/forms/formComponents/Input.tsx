import { FieldError, Path, UseFormRegister } from "react-hook-form";
import { Inputs } from "../types";
import Error from "./Error";

type InputProps = {
  registerName: Path<Inputs>;
  type: string;
  label: string;
  placeholder?: string;
  defaultValue: string;
  register: UseFormRegister<Inputs>;
  required: boolean;
  error?: FieldError;
};

export default function Input({
  registerName,
  type,
  label,
  placeholder,
  defaultValue,
  register,
  required,
  error,
}: InputProps) {
  return (
    <div className="grid grid-cols-1">
      <label htmlFor={registerName}>{label}</label>
      <input
        type={type}
        className="rounded-e-lg bg-primary border text-white p-2 placeholder-white"
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...register(registerName, { required })}
      />

      {error && <Error />}
    </div>
  );
}
