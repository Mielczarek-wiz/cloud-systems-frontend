export default function FormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="px-10 mx-auto h-full">{children}</div>;
}
