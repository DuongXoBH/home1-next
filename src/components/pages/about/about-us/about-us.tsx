import { INFORMATIONS } from "@/constants/pages/about/about-us";
import ContentBoxComponent from "./components/content-box";

function AboutUsComponent(){
    return(
        <>
            <div className="w-full md:w-[1137px] px-[auto] container mt-10 md:mt-[116px] flex flex-col p-4 md:p-0">
                <ContentBoxComponent information={INFORMATIONS} contentPadding="" divClass="md:mt-[82px]" textClass="md:w-[500px]"/>
            </div>
            <div className="w-full h-[1136px] z-[-1] absolute top-[2936px] bg-bubble-1-background bg-no-repeat"></div>
            <div className="w-full h-[1213px] z-[-2] absolute top-[2886px] bg-bubble-2-background bg-no-repeat"></div>
        </>
    )
}

export default AboutUsComponent;