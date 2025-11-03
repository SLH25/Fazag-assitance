import Hero from "./HeroSection";
import AboutSection from "./AboutSection";
// import HeroSection3 from "./HeroD";
import ServicesSection from "./ServiceSection";
const HomeSection = () => {
  return (
    <div>
        <section>
            <Hero />
            {/* <HeroSection3 /> */}
            <AboutSection />
            <ServicesSection />
        </section>
    </div>
  );
};

export default HomeSection;
