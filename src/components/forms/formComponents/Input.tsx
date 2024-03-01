import React from "react";

export default function Input({
  type,
  placeholder,
}: {
  type: string;
  placeholder: string;
}) {
  return (
    <input
      type={type}
      className="rounded-none rounded-e-lg bg-primary border text-white block flex-1 min-w-0 w-full text-sm p-2.5 placeholder-white"
      placeholder={placeholder}
    />
  );
}
