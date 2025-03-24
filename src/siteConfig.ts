import siteConfigJson from "./siteConfig.json";

export interface SiteConfiguration {
  name: string;
  subheading: string;
  bio: string;
  profilePicture: string;
  url: string;
  blog: boolean;
  iconLinks: IconLink[];
  customLinks: CustomLink[];
  locale: string;
}

interface IconLink {
  id: string;
  icon: string;
  url: string;
}

interface CustomLink {
  id: string;
  title: string;
  url: string;
}

export const SITE: SiteConfiguration = {
  ...siteConfigJson,
};
