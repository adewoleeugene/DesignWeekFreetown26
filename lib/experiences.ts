import type { ExperienceConfig } from "./types";

export const experiences: ExperienceConfig[] = [
  { id: 1, slug: "architect", name: "The Architect" },
  { id: 2, slug: "griot", name: "The Griot" },
  { id: 3, slug: "maker", name: "The Maker" },
  { id: 4, slug: "visionary", name: "The Visionary" },
  { id: 5, slug: "rhythm", name: "The Rhythm" },
];

export function getRandomExperienceId(): number {
  const index = Math.floor(Math.random() * experiences.length);
  return experiences[index].id;
}
