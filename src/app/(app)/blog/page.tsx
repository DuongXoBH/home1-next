import BlogBannerComponent from "@/components/pages/blog/banner/banner";
import BlogCardComponent from "@/components/pages/blog/blog-card/blog-card";
import { BlogContentComponent } from "@/components/pages/blog/blog-content/blog-content";

export default function Blog(){
    return (
        <>
            <BlogBannerComponent/>
            <div className="w-full container mt-5 md:mt-[65px] mb-[60px] md:mb-[65px] px-4 md:px-0 flex flex-col-reverse md:flex-row justify-between">
                {/* content */}
                <BlogContentComponent/>
                {/*card */}
                <BlogCardComponent/>
            </div>
        </>
    )
}