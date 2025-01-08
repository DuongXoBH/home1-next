import ContentBoxComponent from "@/components/pages/about/about-us/components/content-box";
import { SERVICEINFORMATIONS } from "@/constants/pages/service/details";

export default function DetailServiceComponent(){
    return(
        <div className="w-full container px-4 md:p-0 mt-[55px]">
            <ContentBoxComponent information={SERVICEINFORMATIONS} contentPadding="pt-[29px]" divClass="md:mt-[68px] md:mb-[68px]" textClass="md:w-[411px]"/>
        </div>
    )
}