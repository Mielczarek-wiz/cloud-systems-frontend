export default function Table({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  return (
    <table className="w-full text-sm text-left text-primary rtl:text-right">
      {children}
    </table>
  );
}
