import { AuthorType, SiteMetaData } from "@/types";

import { socialProfiles } from "./social-data";

export const BASE_URL =
  `https://${process.env.VERCEL_URL}` ||
  process.env.NEXT_PUBLIC_BASE_URL ||
  `http://localhost:${process.env.PORT || 3000}`;

export const defaultAuthor: AuthorType = {
  name: "Hoang-Tam Lee (Hoàng Tâm Lê)",
  handle: "@kokorolx",
  socialProfiles,
  email: "hello@thnkandgrow.com",
  website: "https://thnkandgrow.com",
  jobTitle: "Full stack web developer | AWS cloud architect",
  company: "SudoX",
  availableForWork: true,
  location: {
    city: "Ho Chi Minh City",
    media: "/losangeles.jpg",
  },
};

const defaultTitle = `${defaultAuthor.name}'s Blog`;
const defaultDescription = `I'm ${defaultAuthor.name}. Building hackin’ cool digital products around the world 🌴.`;

const siteMetadata: SiteMetaData = {
  title: {
    template: `%s | ${defaultTitle}`,
    default: defaultTitle,
  },
  description: defaultDescription,
  siteRepo: "https://github.com/kokorolx/digital-garden",
  newsletterProvider: "mailerlite",
  newsletterUrl: "https://thnkandgrow.com",
  analyticsProvider: "google",
  defaultTheme: "system",
  activeAnnouncement: false,
  announcement: {
    buttonText: "Support on DevHunt →",
    link: "https://devhunt.org/tool/modern-developer-blog-template-digital-garden-starter",
  },
  postsPerPage: 10,
  postsOnHomePage: 8,
  projectsOnHomePage: 4,
};

export default siteMetadata;
