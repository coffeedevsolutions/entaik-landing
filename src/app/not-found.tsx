import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "./components/ui/button";

export const metadata: Metadata = {
  title: "Page Not Found - Uptaik",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-muted-foreground">404</h1>
        <h2 className="text-2xl font-semibold">Page Not Found</h2>
        <p className="text-muted-foreground max-w-md">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been moved or doesn&apos;t exist.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/">
            <Button>Go Home</Button>
          </Link>
          <Link href="/blog">
            <Button variant="outline">Browse Blog</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
