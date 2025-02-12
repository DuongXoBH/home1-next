import AboutUs from "@/components/pages/home-2/about-us/about-us";
import Banner from "@/components/pages/home-2/banner/banner";
import ChooseUs from "@/components/pages/home-2/choose-us/choose-us";
import MainService from "@/components/pages/home-2/main-service/main-service";
import RequesrService from "@/components/pages/home-2/request/request";
import TheBlog from "@/components/pages/home-2/the-blog/the-blog";

export default function SecondHome(){
    return (
        <>  
            <div className="w-full md:h-[918px] bg-home-2-banner-background bg-center bg-no-repeat -z-10 absolute top-0"></div>
            <Banner/>
            <AboutUs/>
            <MainService/>
            <ChooseUs/>
            <TheBlog/>
            <RequesrService/>
        </>
    )
}