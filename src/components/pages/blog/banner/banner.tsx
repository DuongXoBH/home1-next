
export default function BlogBannerComponent() {
  return (
    <div className="w-full h-[150px] md:h-[285px] mt-10 md:mt-[38px] bg-blog-banner-background bg-center bg-cover bg-no-repeat">
      <div className="w-full h-full bg-custom-service-slogan px-4 md:px-0 ">
        <div className="container px-4 md:p-0 w-full h-full flex flex-row justify-between items-center text-white">
          <div className="flex flex-col w-1/2 text-left">
            <p className="w-full text-3xl md:text-4xl !leading-[45px] font-semibold tracking-[0.46px]">
              Blog
            </p>
          </div>
          <div className="flex w-1/2 items-center justify-end gap-[11px] md:pl-[90px]">
            <p className="text-xs md:text-base font-semibold tracking-widest">
              Home • Blog
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
