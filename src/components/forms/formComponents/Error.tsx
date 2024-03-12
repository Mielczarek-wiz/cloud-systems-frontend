export default function Error({
  message = "This field is required",
}: {
  message?: string;
}) {
  return (
    <div className="text-red-300 italic font-light tracking-wider">
      {message}
    </div>
  );
}
