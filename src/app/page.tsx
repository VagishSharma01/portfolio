import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { Craft } from "@/components/Craft";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="divider" />
        <Work />
        <div className="divider" />
        <Craft />
        <Contact />
      </main>
    </>
  );
}
