import ProfessionalTeamComponent from "@/components/common/professional-team/professional-team";
import AssistanceTeamComponent from "@/components/pages/team/assistance-team/assistance-team";
import Banner from "@/components/pages/team/banner/banner";

export default function Team() {
  return (
    <>
      <ProfessionalTeamComponent
        tittleText="Our Team"
        nameText="We are Professional"
        nameClass="md:h-[57px]"
        descriptionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
        descriptionClass="md:h-[36px]"
        maginTop="mt-[125px]"
        textClass="mr-20"
      />
      <div className="w-full h-[1533px] absolute bg-no-repeat bg-right-top z-[-1] top-[229px] bg-team-bubble-background"></div>
      <AssistanceTeamComponent />
      <Banner/>
    </>
  );
}
