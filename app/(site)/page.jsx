"use client";
import { useSession } from "next-auth/react";

import { redirect } from "next/navigation";

export default function Home() {
  const { data: session } = useSession();

  if (!session) {
    redirect("/");
  }

  return (
    <section className="container mx-auto text-center">
      <h1 className="text-4xl font-bold text-blue-700">Home Page</h1>
    </section>
  );
}
