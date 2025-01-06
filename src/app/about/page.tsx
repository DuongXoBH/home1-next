import AboutUsComponent from "@/components/about/about-us/about-us";
import AboutComponent from "@/components/about/about/about";
import BusinessSloganComponent from "@/components/about/business-slogan/business-slogan";
import ClientComponent from "@/components/about/clients/clients";
import FooterComponent from "@/components/common/footer/footer";
import HeaderComponent from "@/components/common/header/header";
import ProfessionalTeamComponent from "@/components/common/professional-team/professional-team";

export default function About() {
    return (
      <div>
        <AboutComponent/>
        <div className="w-full h-[950px] absolute bg-no-repeat bg-right-top z-[-1] top-[666px] bg-professional-team-backgound"></div>
        <ProfessionalTeamComponent maginTop="mt-[136px]"/>
        <BusinessSloganComponent/>
        <AboutUsComponent/>
        <ClientComponent/>
      </div>
    );
  }