import AboutUs from "@/components/home1/about-us/about-us";
import ContactUsConponent from "@/components/home1/contact-us/contact-us";
import FooterComponent from "@/components/common/footer/footer";
import HeaderComponent from "@/components/common/header/header";
import Home1BannerComponent from "@/components/home1/home1-banner/home1-banner";
import ProfessionalTeamComponent from "@/components/common/professional-team/professional-team";
import ServiceComponent from "@/components/home1/service/service";

export default function Home() {
  return (
    <div>
      <Home1BannerComponent/>
      <ServiceComponent />
      <AboutUs/>
      <ProfessionalTeamComponent maginTop=" mt-8 md:mt-[147px]"/>
      <ContactUsConponent/>
    </div>
  );
}