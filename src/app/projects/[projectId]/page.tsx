import { proyects } from "@/data/proyects";

export default function Project({ params }: { params: { projectId: string } }) {
  const project = proyects.find((p) => p.id === params.projectId);
  return (
    <main className="flex items-center justify-between p-8 mt-7">
      <picture className="max-w-4xl">
        <img
          className="w-full"
          src={project?.img}
          alt={`picture of ${project?.title}, Marcos Acuña  profile`}
        />
      </picture>
      <aside className="p-8">
        <h1 className="text-4xl font-bold">{project?.title}</h1>
        <h2 className="text-2xl mb-8">{project?.description}</h2>
        <div className="flex gap-8">
          {project?.logos.map((logo, index) => (
            <div className="max-w-xs flex flex-col justify-center" key={index}>
              <img
                src={logo}
                className="w-full h-auto"
                style={{ maxWidth: "100px" }}
                alt={`Logo ${index}`}
              />
            </div>
          ))}
        </div>
      </aside>
    </main>
  );
}
