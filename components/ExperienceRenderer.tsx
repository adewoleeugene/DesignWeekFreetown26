"use client";

import dynamic from "next/dynamic";

const experienceMap: Record<number, React.ComponentType> = {};

const Experience1 = dynamic(() => import("./experiences/Experience1"), {
  loading: () => <LoadingFallback />,
});
const Experience2 = dynamic(() => import("./experiences/Experience2"), {
  loading: () => <LoadingFallback />,
});
const Experience3 = dynamic(() => import("./experiences/Experience3"), {
  loading: () => <LoadingFallback />,
});
const Experience4 = dynamic(() => import("./experiences/Experience4"), {
  loading: () => <LoadingFallback />,
});
const Experience5 = dynamic(() => import("./experiences/Experience5"), {
  loading: () => <LoadingFallback />,
});

experienceMap[1] = Experience1;
experienceMap[2] = Experience2;
experienceMap[3] = Experience3;
experienceMap[4] = Experience4;
experienceMap[5] = Experience5;

function LoadingFallback() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <span className="text-sm font-bold tracking-[0.2em] uppercase text-black/30 animate-pulse">
        DWF&apos;26
      </span>
    </div>
  );
}

export default function ExperienceRenderer({ experienceId }: { experienceId: number }) {
  const Experience = experienceMap[experienceId] || experienceMap[1];
  return <Experience />;
}
