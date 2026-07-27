import type { NavItem } from "../components/Header.astro";

const base = import.meta.env.BASE_URL.replace(/\/$/, "");
const href = (path: string) =>
  `${base}/${path.replace(/^\//, "")}`.replace(/\/{2,}/g, "/");

export const site = {
  name: "Sanger STEM Camp",
  description: "Educational STEM camp activity guides.",
  homeHref: href(""),
} as const;

export const primaryNavigation: NavItem[] = [
  { label: "Home", href: href("") },
  { label: "Planning Your Camp", href: href("planning/") },
  {
    label: "Day 1",
    items: [
      {
        label: "Personalized Tinkercad Keychains",
        href: href("day-1/tinkercad-keychains/"),
      },
      { label: "Paper LED Circuits", href: href("day-1/paper-circuits/") },
      {
        label: "Paper Airplane Weight Experiment",
        href: href("day-1/paper-airplanes/"),
      },
    ],
  },
  {
    label: "Day 2",
    items: [
      { label: "Vibrating Art Robots", href: href("day-2/art-bots/") },
      {
        label: "Makey Makey Instruments",
        href: href("day-2/makey-makey/"),
      },
      { label: "Activity 3 — Coming Soon", href: href("day-2/activity-3/") },
    ],
  },
  {
    label: "Day 3",
    items: [
      { label: "Activity 1 — Coming Soon", href: href("day-3/activity-1/") },
      { label: "Activity 2 — Coming Soon", href: href("day-3/activity-2/") },
      { label: "Bottle Rockets", href: href("day-3/bottle-rockets/") },
    ],
  },
  { label: "About", href: href("about/") },
];

export const footerNavigation = primaryNavigation.filter(
  (item): item is Extract<NavItem, { href: string }> => "href" in item,
);
