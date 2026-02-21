import { headers } from "next/headers";
import { getRandomExperienceId } from "@/lib/experiences";
import ExperienceRenderer from "@/components/ExperienceRenderer";

export const dynamic = "force-dynamic";

export default async function Home() {
  // Read headers to ensure this page is never statically cached
  await headers();
  const experienceId = getRandomExperienceId();

  return (
    <main className="relative overflow-hidden">
      <ExperienceRenderer experienceId={experienceId} />
    </main>
  );
}
