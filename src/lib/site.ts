// Everything about Michal in one place. Change it here and it updates everywhere.
export const me = {
  name: "Michal Segeč",
  email: "michalsegec.dev@gmail.com",
  github: "https://github.com/michalsegec",
  url: process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000"),
};

export const korinek = {
  live: "https://korinek-renovace.vercel.app",
  code: "https://github.com/michalsegec/korinek-renovace",
};
