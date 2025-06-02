import AboutSection from "../../components/homePageSections/AboutSection";
import ContactSection from "../../components/homePageSections/ContactSection";
import HeroSection from "../../components/homePageSections/HeroSection";
import MapLocationSection from "../../components/homePageSections/MapLocationSection";
import ServicesSection from "../../components/homePageSections/ServicesSection";
import TestimonialSection from "../../components/homePageSections/TestimonialSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialSection />
      <ContactSection />
      <MapLocationSection />
    </>
  );
};

export default HomePage;
