type OptionsProps = {
  id: number;
  region: string;
};
export default function Options({ options }: { options: OptionsProps[] }) {
  return (
    <>
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.region}
        </option>
      ))}
    </>
  );
}
