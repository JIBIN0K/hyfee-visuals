import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";
import ServiceCard from "./ServiceCard";
import Section from "@/components/common/Section";

export default function Services() {
  return (
    <Section 
        id="services" 
        className="bg-black">
      <Container>
        <SectionHeader
          badge="OUR SERVICES"
          title="Everything You Need To Build Stunning Visuals"
          description="Photography, editing, Lightroom presets and AI prompt engineering — crafted for creators."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          <ServiceCard
            featured
            title="Photography"
            description="Premium cinematic portraits, couples, travel and lifestyle photography."
            price="₹2999+"
            button="Book Shoot"
            href="https://wa.me/918943557986"
          />

          <ServiceCard
            title="Photo Editing"
            description="Professional Lightroom edits with premium cinematic tones."
            price="₹199+"
            button="Order Now"
            href="https://wa.me/918943557986"
          />

          <ServiceCard
            title="Video Editing"
            description="Professional cinematic reels and colour grading."
            price="₹399+"
            button="Order Now"
            href="https://wa.me/918943557986"
          />

          <ServiceCard
            title="Presets"
            description="Professional Lightroom presets designed by HYFEE VISUALS."
            price="₹249+"
            button="View Packs"
            href="#presets"
          />
        </div>
      </Container>
    </Section>
  );
}