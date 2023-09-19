import Card from "@/components/Card";
import { proyects } from "@/data/proyects";
import Link from "next/link";
export default async function Projects() {
  const CardsProyects = proyects.map((p) => (
    <Link href={"/projects/" + p.id} key={p.id}>
      <Card
        title={p.title}
        description={p.description}
        img={p.img}
        tags={p.tags}
      />
    </Link>
  ));
  return (
    <main className="flex justify-around flex-wrap gap-8 p-4 mt-16">
      {CardsProyects}
    </main>
  );
}
