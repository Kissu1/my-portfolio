export default function Projects({ title, date, info }) {
  return (
    <div className="flex justify-center my-4">
      <div className="text-center max-w-xxs md:max-w-xl">
        <h1 className="mb-1">{title}</h1>
        <h2 className="mb-1">{date}</h2>
        <p className="mb-0">{info}</p>
      </div>
    </div>
  );
}
