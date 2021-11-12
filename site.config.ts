export const config = {
  siteMeta: {
    title: "Digitalcube Blog Hub",
    teamName: "Digitalcube",
    description: "RSS based blog.",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://dc-team-blog-hub.netlify.app/"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Company",
      href: "https://www.digitalcube.jp/",
    },
    {
      title: "GitHub",
      href: "https://github.com/digitalcube/team-blog-hub",
    },
  ],
};
