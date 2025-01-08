import IntroduceComponent from "@/components/pages/gallery/introduce/introduce";
import QuotaComponent from "@/components/pages/gallery/quota/quota";
import TourVideoComponent from "@/components/pages/gallery/tour-video/tour-video";

export default function Gallery(){
    return(
        <>
            <IntroduceComponent/>
            <TourVideoComponent/>
            <QuotaComponent/>
            <></>
        </>
    )
}