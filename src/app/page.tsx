import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4">
      <h1 className="text-4xl font-bold mb-8">
        Welcome to Next.js + Tailwind + shadcn/ui
      </h1>
      <div className="flex gap-4">
        <Button variant="default">Default Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="destructive">Destructive Button</Button>
        <Button variant="outline">Outline Button</Button>
      </div>
      <p className="mt-4 text-gray-600 dark:text-gray-400">
        Your project is now set up with all the necessary tools!
      </p>
    </main>
  );
}
