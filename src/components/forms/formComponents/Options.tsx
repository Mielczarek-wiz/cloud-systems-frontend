type OptionsProps = {
  id: number;
  region: string;
};
export default function Options({ options }: { options?: OptionsProps[] }) {
  return (
    <>
      <option value="0">Region...</option>
      {options?.map((option) => (
        <option key={option.id} value={option.id}>
          {option.region}
        </option>
      ))}
    </>
  );
}
