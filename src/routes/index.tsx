import { BenefitSection } from "@/components/benefit-section";
import { FlavourSection } from "@/components/flavour-section";
import { FooterSection } from "@/components/footer-section";
import { HeroSection } from "@/components/hero-section";
import { MessageSection } from "@/components/message-section";
import { NavBar } from "@/components/navbar";
import { NutritionSection } from "@/components/nutrition-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <MessageSection />
      <FlavourSection />
      <NutritionSection />
      {/* <div> */}
      <BenefitSection />
      <TestimonialSection />
      {/* </div> */}
      <FooterSection />
      {/* <Test /> */}
      {/* <div className="h-[1000px]"></div> */}
    </div>
  );
}
