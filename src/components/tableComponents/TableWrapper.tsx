export default function TableWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-[70dvh] shadow shadow-primary">
      <div className="w-full h-full overflow-auto "> {children} </div>
    </div>
  );
}
