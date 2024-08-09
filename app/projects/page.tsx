import MyRepos from "@/components/myproject";

export default function Projects() {
  return (
    <main className="bg-inherit flex min-h-screen flex-col items-center justify-between p-10">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <MyRepos />
      </div>
    </main>
  );
}
