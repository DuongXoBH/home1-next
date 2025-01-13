import Image from "next/image";

export default function SloganComponent(){
    return (
        <div className="w-full md:h-[529px] mt-10 md:mt-[106px] bg-service-slogan-background bg-center bg-cover bg-no-repeat">
            <div className="w-full h-full bg-custom-service-slogan">
                <div className="container px-4 h-full md:p-0 md:w-full md:h-full flex flex-col md:flex-row md:justify-between md:items-center text-white">
                    <div className="flex flex-col w-full md:w-1/2 text-center md:text-left">
                        <p className="w-full text-3xl md:text-4xl !leading-[45px] font-semibold tracking-[0.46px]">Best responsibility and service for our customers</p>
                        <p className="w-full text-xs md:text-base md:font-normal text-custom-gray md:tracking-widest mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                    </div>
                    <div className="flex md:w-1/2 items-center justify-center gap-[11px] md:pl-[90px]">
                        <Image src="/service-images/play-button.svg" alt="Play Boutton" width={165} height={165}/>
                        <p className="text-xs md:text-base font-semibold tracking-widest">Treatments Videos</p>
                    </div>
                </div>
            </div>
        </div>
    )
}