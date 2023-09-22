
export const proyects = [
  {
    id: "e-comerce",
    title: "Ecomerce",
    description:
      "Este proyecto se centra en el desarrollo de una plataforma de comercio electrónico implementada con Next.js, que utiliza la API de Mercado Pago para la integración de pagos. Además, para gestionar eficazmente el contenido de los productos, se recurre a Airtable y Algolia. Esta solución ofrece una experiencia de compra en línea robusta y eficiente, permitiendo a los usuarios explorar y adquirir productos de manera sencilla y segura.",
    img: "/comerce.svg",
    tags:["Nextjs","Typescript", "Firebase","MercadoPago"],
    logos: [
      "https://gorzelinski.com/static/1db41e3ecd311724a15306b270d99dd9/6e87d/next-js-logo.png",
      "https://assets.website-files.com/5d3ef00c73102c436bc83996/5d3ef00c73102c1f23c83a2a_logo-reversed.png",
      "https://upload.wikimedia.org/wikipedia/commons/e/ef/Logo-algolia-nebula-blue-withspaces%402x.png",
    ],
    repository: "https://github.com/MarcosJoaquinDev/e-comerce",
    link: "https://e-comerce-bice.vercel.app/",
  },
  {
    id: "buscardos-de-mascotas",
    title: "Buscador de Mascotas",
    description:
      "Este proyecto consiste en la creación de un buscador de mascotas perdidas, utilizando la tecnología de geolocalización de Mapbox para proporcionar ubicaciones precisas. Los datos se indexan con Algolia para una búsqueda eficiente, y se almacenan en una base de datos PostgreSQL respaldada por una ORM para la gestión segura de la información del usuario. Esta solución profesional permite a los usuarios localizar y recuperar mascotas perdidas de manera efectiva y precisa.",
    img: "/dog.svg",
    tags:["React","Typescript", "Algolia","PosgreSQL"],
    logos: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      "https://assets.website-files.com/5d3ef00c73102c436bc83996/5d3ef00c73102c1f23c83a2a_logo-reversed.png",
      "https://upload.wikimedia.org/wikipedia/commons/e/ef/Logo-algolia-nebula-blue-withspaces%402x.png",
    ],
    repository: "https://github.com/MarcosJoaquinDev/app-pet",
    link: "https://app-pet.onrender.com/",
  },
  {
    id: "chat",
    title: "Chat",
    description:
      "Un chat basado en una base de datos en tiempo real que facilita la conexión entre 2 o más usuarios para su comunicación se ha desarrollado utilizando Firebase y React. Este sistema permite una interacción fluida y en tiempo real, brindando a los usuarios una plataforma eficaz para la comunicación en línea.",
    img: "/chat.svg",
    tags:["NextJs","Typescript", "Firebase","NextUI"],
    logos: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      "https://cdn.dribbble.com/users/528264/screenshots/3140440/media/5f34fd1aa2ebfaf2cd548bafeb021c8f.png?compress=1&resize=400x300&vertical=center",
      "https://raw.githubusercontent.com/nextui-org/nextui/main/apps/docs/public/isotipo.png",
    ],
    repository: "https://github.com/MarcosJoaquinDev/chat-client-next",
    link: "https://chat-client-next.vercel.app/",
  },
  {
    id: "enrutador",
    title: "Enrutador",
    description:
      "Esta librería proporciona a los desarrolladores web una herramienta que les permite crear rutas de navegación de manera eficiente mediante un sistema de organización de carpetas, lo que facilita la creación de aplicaciones de página única (SPA, por sus siglas en inglés). Con esta solución, los desarrolladores pueden estructurar sus proyectos de manera ordenada y coherente, lo que simplifica el proceso de desarrollo y mejora la mantenibilidad de las SPAs.",
    img: "/route.svg",
    tags:["React","NodeJs","NPM"],
    logos: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png",
    ],
    repository: "https://github.com/MarcosJoaquinDev/Router-MJD",
    link: "https://www.npmjs.com/package/mjd-router",
  },
  {
    id: "recetas",
    title: "Recetas",
    description:
      "Una pequeña app para buscar recetas, las clasifica segun el usuario y lleva a los links a sus respectivas recetas usando la api de la pagina de  Paulina cocina",
    img: "/cook.svg",
    tags:["React","Vitejs"],
    logos: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    ],
    repository: "https://github.com/MarcosJoaquinDev/recetas-random",
    link: "https://recetas-random.vercel.app/",
  },
];
