import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="container flex min-h-screen flex-col items-center justify-center text-center">
      <span className="font-mono text-sm uppercase tracking-[0.2em] text-accent-600 dark:text-accent-400">
        404
      </span>
      <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        This page isn&apos;t on the calendar.
      </h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Button asChild variant="accent" className="mt-8">
        <Link href="/">
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
      </Button>
    </main>
  );
}
