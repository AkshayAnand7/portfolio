"use client";

import dynamic from "next/dynamic";

const FeaturedWork = dynamic(() => import("./FeaturedWork"), {
  ssr: false,
  loading: () => (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-muted text-sm">Loading...</div>
    </section>
  ),
});

export default function FeaturedWorkWrapper() {
  return <FeaturedWork />;
}
