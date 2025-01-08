import AboutUs from "@/components/pages/home1/about-us/about-us";
import ContactUsConponent from "@/components/pages/home1/contact-us/contact-us";
import Home1BannerComponent from "@/components/pages/home1/home1-banner/home1-banner";
import ProfessionalTeamComponent from "@/components/common/professional-team/professional-team";
import ServiceComponent from "@/components/pages/home1/service/service";

export default function Home() {
  return (
    <div>
      <Home1BannerComponent />
      <ServiceComponent />
      <AboutUs />
      <ProfessionalTeamComponent
        tittleText="Professional Teams"
        nameText="The Professional expert"
        nameClass="md:h-[53px]" 
        descriptionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
        descriptionClass = "md:h-[51px]"
        maginTop=" mt-8 md:mt-[147px]"
        textClass=""
      />
      <ContactUsConponent />
    </div>
  );
}
