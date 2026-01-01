import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "fr"],

  // Used when no locale matches
  defaultLocale: "en",
  pathnames: {
    "/contact": {
      en: "/contact-me",
      fr: "/contactez-moi",
    },
    "/about": {
      en: "/about-us",
      fr: "/a-propos",
    },
  },
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export type Locale = (typeof routing.locales)[number];

