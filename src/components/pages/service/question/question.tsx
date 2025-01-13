import { QUESTIONLIST } from "@/constants/pages/service/question";
import FaqBoxComponent from "./components/faq-box";

export default function QuestionComponent(){
    return (
        <div className="w-full container px-4 h-[552px] md:p-0 mt-[116px] md:mb-[126px] flex flex-col items-center">
            <p className="w-full md:w-[440px] text-3xl md:text-4xl md:leading-[45px] font-semibold text-oxford-blue md:tracking-[0.6px] text-center">Services FAQ’s</p>
            <FaqBoxComponent/>
        </div>
    )
}