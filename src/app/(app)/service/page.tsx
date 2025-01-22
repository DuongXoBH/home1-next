import DetailServiceComponent from "@/components/pages/service/details-service/details-service";
import OurServiceComponent from "@/components/pages/service/our-service/our-service";
import QuestionComponent from "@/components/pages/service/question/question";
import SloganComponent from "@/components/pages/service/slogan/slogan";

export default function Service(){
    return(
        <>  
            <OurServiceComponent/>
            <DetailServiceComponent/>
            <SloganComponent/>
            <QuestionComponent/>
        </>
    );
}