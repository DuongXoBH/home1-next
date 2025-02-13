import FaqBoxComponent from "./components/faq-box";

export default function QuestionComponent(){
    return (
        <div className="w-full container px-4 md:p-0 mt-[116px] md:mb-[66px] flex flex-col items-center">
            <p className="w-full md:w-[440px] text-3xl md:text-4xl md:leading-[45px] font-semibold text-oxford-blue md:tracking-[0.6px] text-center">Services FAQ’s</p>
            <FaqBoxComponent/>
        </div>
    )
}