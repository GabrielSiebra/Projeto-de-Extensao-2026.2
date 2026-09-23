import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "../components/Navbar/Navbar";
import { Hero } from "../components/Hero/Hero";
import { Features } from "../components/Features/Features";
import { HowItWorks } from "../components/HowItWorks/HowItWorks";
import { BookingPreview } from "../components/BookingPreview/BookingPreview";
import { CTA } from "../components/CTA/CTA";
import { Footer } from "../components/Footer/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meu Campo — Organize seu jogo na areninha" },
      { name: "description", content: "Encontre horários, organize sua partida e monte seu time em areninhas de forma simples." },
      { property: "og:title", content: "Meu Campo — Organize seu jogo na areninha" },
      { property: "og:description", content: "Escolha o horário, monte seu time e coloque sua partida em campo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="site-page">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <BookingPreview />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
