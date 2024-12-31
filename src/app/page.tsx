import AboutUs from "@/components/about-us/about-us";
import ContactUsConponent from "@/components/contact-us/contact-us";
import FooterComponent from "@/components/footer/footer";
import HeaderComponent from "@/components/header/header";
import ProfessionalTeamComponent from "@/components/professional-team/professional-team";
import ServiceComponent from "@/components/service/service";

export default function Home() {
  return (
    <div>
      <HeaderComponent />
      <ServiceComponent />
      <AboutUs/>
      <ProfessionalTeamComponent/>
      <ContactUsConponent/>
      <FooterComponent/>
    </div>
  );
}
