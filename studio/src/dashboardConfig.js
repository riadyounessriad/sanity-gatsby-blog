export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6109b75e0b2c37139147dcb3",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-4tmphrwn",
                  apiId: "777f5fea-a1a4-45b2-afaf-ffd34287e7c3",
                },
                {
                  buildHookId: "6109b75e8764f313aad39bd0",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-ejhkoz9u",
                  apiId: "c654be22-d55e-446d-8cbc-8edd9d25e02d",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/riadyounessriad/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-ejhkoz9u.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
