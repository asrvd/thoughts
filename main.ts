import blog, {
  redirects,
} from "https://deno.land/x/deno_blog_fork@0.3.11/blog.tsx";

blog({
  author: "ashish",
  title: "",
  description: "asrvd",
  avatar: "https://avatars.githubusercontent.com/u/68690233?v=4",
  avatarClass: "rounded-full",
  links: [
    {
      title: "email",
      url: "mailto:asheeshh@duck.com",
    },
    {
      title: "github",
      url: "https://github.com/asrvd",
    },
    {
      title: "twitter",
      url: "https://twitter.com/_asheeshh",
    },
    {
      title: "instagram",
      url: "https://www.instagram.com/asrvd_/",
    },
  ],
  lang: "en",
  timezone: "en-US",
  background: "#171819",
  middlewares: [
    redirects({
      "/catto": "https://api.thecatapi.com/v1/images/search",
    }),
  ],
});
