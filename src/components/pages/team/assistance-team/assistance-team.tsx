import TextBoxComponent from "@/components/common/text-box";
import AssistanceTeamListComponent from "./component/assistance-team-list";
import { ASSISTANCELIST } from "@/constants/pages/team/assistance";

export default function AssistanceTeamComponent() {
  return (
    <div className="w-full container mt-10 md:mt-[163px] flex flex-col ">
      <TextBoxComponent
        divClass="w-full flex-col items-center"
        tittleClass=""
        tittleText="Assistance Team"
        nameClass=""
        nameText="Meet the pro assistance"
        descriptionClass="mt-6"
        descriptionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
      />
      <AssistanceTeamListComponent information={ASSISTANCELIST}/>
    </div>
  );
}
