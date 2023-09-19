/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gorzelinski.com",
        port: "",
        pathname:
          "/static/1db41e3ecd311724a15306b270d99dd9/6e87d/next-js-logo.png",
      },
      {
        protocol: "https",
        hostname: "assets.website-files.com",
        port: "",
        pathname:
          "/5d3ef00c73102c436bc83996/5d3ef00c73102c1f23c83a2a_logo-reversed.png",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname:
          "/wikipedia/commons/e/ef/Logo-algolia-nebula-blue-withspaces%402x.png",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname:
          "/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      },
      {
        protocol: "https",
        hostname: "cdn.dribbble.com",
        port: "",
        pathname:
          "/users/528264/screenshots/3140440/media/5f34fd1aa2ebfaf2cd548bafeb021c8f.png",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/nextui-org/nextui/main/apps/docs/public/isotipo.png",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname:
          "/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png",
      },
    ],
  },
};

module.exports = nextConfig;
