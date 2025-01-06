import Image from "next/image";

function ClientComponent(){
    return (
        <>
            <div className="w-[962px] flex flex-col items-center p-4 md:p-0 text-white mt-[102px] mb-[346px] md:h-[306px] mx-[auto] container">
                <div className="w-[848px] ml-[133px] mr-[159px] flex flex-col items-center">
                    <p className="w-full text-base leading-5 tracking-[0.35px] font-semibold text-custom-pink text-center">Our Clients</p>
                    <p className="w-full mt-3 text-4xl leading-[45px] tracking-[0.36px] font-semibold text-oxford-blue text-center">Well-known agencies</p>
                    <p className="w-full mt-5 text-base tracking-widest font-normal text-custom-gray text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div className="w-[962px] mt-[100px] flex flex-row justify-between">
                    <Image className="order-1" src="/about-us-images/logo-1.svg" alt="" width={147} height={80}></Image>
                    <Image className="order-2" src="/about-us-images/logo-2.svg" alt="" width={147} height={80}></Image>
                    <Image className="order-3" src="/about-us-images/logo-3.svg" alt="" width={147} height={80}></Image>
                    <Image className="order-4" src="/about-us-images/logo-4.svg" alt="" width={147} height={80}></Image>
                    <Image className="order-5" src="/about-us-images/logo-5.svg" alt="" width={147} height={80}></Image>
                </div>
            </div>
        </>
    )

}

export default ClientComponent;