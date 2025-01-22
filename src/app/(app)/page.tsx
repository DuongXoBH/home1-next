"use client"
import AboutUs from "@/components/pages/home1/about-us/about-us";
import Home1BannerComponent from "@/components/pages/home1/home1-banner/home1-banner";
import ProfessionalTeamComponent from "@/components/common/professional-team/professional-team";
import ServiceComponent from "@/components/pages/home1/service/service";
import ContactUsComponent from "@/components/pages/home1/contact-us/contact-us";


export default function Home() {
  return (
    <>
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
      <div className="w-full h-[825px] absolute top-[3169px] bg-contact-us-background bg-no-repeat z-[-1] "></div>
      <ContactUsComponent />
    </>
  );
}
