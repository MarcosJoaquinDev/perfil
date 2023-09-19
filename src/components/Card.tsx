type CardProps = {
  id?: string;
  title: string;
  description: string;
  img: string;
  tags: string[];
  repository?: string;
  link?: string;
};
export default function Card({ title, description, img, tags }: CardProps) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
      <img className="w-full" src={img} alt="foto de chat" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((i) => (
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {i}
          </span>
        ))}
      </div>
    </div>
  );
}
