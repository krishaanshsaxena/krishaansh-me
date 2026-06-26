// src/lib/metadata.ts

import type { Metadata } from "next";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from "./site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },

  description: SITE_DESCRIPTION,

  keywords: [
    "Krishaansh",
    "AI",
    "Machine Learning",
    "Computer Science",
    "Statistics",
    "Programming",
    "Digital Garden",
    "Learning in Public",
  ],

  authors: [
    {
      name: "Krishaansh Pushkarprabhat Saxena",
    },
  ],

  creator: "Krishaansh Pushkarprabhat Saxena",

  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};