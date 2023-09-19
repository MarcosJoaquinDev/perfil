export default function Home() {
  return (
    <main className="flex items-center justify-around p-4 mt-7">
      <aside>
        <h1 className="text-4xl font-bold">Marcos Joaquin Dev</h1>
        <h2 className="text-2xl">Software Developer</h2>
      </aside>
      <picture className="max-w-md">
        <img
          className="w-full"
          src="/hero.svg"
          alt="picture hero of Marcos Acuña's profile"
        />
      </picture>
    </main>
  );
}
