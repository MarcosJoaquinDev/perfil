export default function Message({ prop }: any) {
  const type = prop.type === "user" ? "self-end" : "";
  return (
    <div className={`w-48 bg-black m-1 rounded p-2 ${type}`}>
      <p>{prop.message}</p>
    </div>
  );
}
