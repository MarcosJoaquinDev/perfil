import { GitHubIcon, LinkIcon } from "@/components/Icons";
import { proyects } from "@/data/proyects";
import Image from "next/image";

export default function Project({ params }: { params: { projectId: string } }) {
  const project = proyects.find(
    (p) => p.id === params.projectId
  ) as ProjectProps;
  return (
    <main className="flex flex-col md:flex-row items-center justify-between p-8 mt-7">
      <picture className="md:max-w-4xl">
        <Image
          className="w-full"
          src={project?.img}
          alt={`picture of ${project?.title}, Marcos Acuña  profile`}
          width={200}
          height={200}
        />
      </picture>
      <aside className="p-8">
        <h1 className="text-4xl font-bold">{project?.title}</h1>
        <h2 className="text-2xl mb-8">{project?.description}</h2>
        <h3 className="text-2xl mb-6 text-slate-400">Recursos</h3>
        <div className="flex gap-8">
          {project.logos?.map((logo, index) => (
            <div className="max-w-xs flex flex-col justify-center" key={index}>
              <Image
                src={logo}
                className="w-full h-auto"
                style={{ maxWidth: "100px" }}
                alt={`Logo ${index}`}
                width={200}
                height={200}
              />
            </div>
          ))}
        </div>
        <footer className="w-full flex  gap-20 mt-24">
          <a href={project.link} target="_blank">
            <LinkIcon />
          </a>
          <a href={project.repository} target="_blank">
            <GitHubIcon />
          </a>
        </footer>
      </aside>
    </main>
  );
}
