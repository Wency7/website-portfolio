import Link from "next/link"

Link
export default function Internship() {
  return (
    <main className="bg-inherit flex min-h-screen flex-col items-center justify-between p-24">
      <div className=" font-bold text-xl flex flex-col w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        Internship only No Experience yet.
        <Link
          href="/" className="mt-5 bg-[#BDA588ff] text-white px-4 py-4  rounded-lg shadow-lg hover:bg-[#E1D7CEff] transition-colors"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
