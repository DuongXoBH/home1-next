import AboutUsComponent from "@/components/pages/about/about-us/about-us";
import AboutComponent from "@/components/pages/about/about/about";
import BusinessSloganComponent from "@/components/pages/about/business-slogan/business-slogan";
import ClientComponent from "@/components/pages/about/clients/clients";
import ProfessionalTeamComponent from "@/components/common/professional-team/professional-team";

export default function About() {
  return (
    <div>
      <AboutComponent />
      <div className="w-full h-[950px] absolute bg-no-repeat bg-right-top z-[-1] top-[666px] bg-professional-team-backgound"></div>
      <ProfessionalTeamComponent
        tittleText="Professional Teams"
        nameText="The Professional expert"
        nameClass="md:h-[53px]"
        descriptionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
        descriptionClass = "md:h-[51px]"
        maginTop="mt-10 md:mt-[136px]"
        textClass=""
      />
      <BusinessSloganComponent />
      <AboutUsComponent />
      <ClientComponent />
    </div>
  );
}
