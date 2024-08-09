import Hero from "@/components/Hero";
import About from "@/components/About";
import ScrollingLogo from "@/components/ScrollingLogo";
import ContactEmail from "@/components/ContactEmail";

export default function Home() {
  return (
    <main className="bg-[#E1D7CE] flex-col h-screen items-center justify-center px-16">
      <Hero></Hero>
      <About></About>
      <ScrollingLogo></ScrollingLogo>
      <ContactEmail></ContactEmail>
    </main>
  );
}
