import Image from "next/image";
import InputElement from "./components/input-element";

function ContactUsConponent() {
  return (
    <>
      <div className="w-full h-[825px] absolute top-[3169px] bg-contact-us-background bg-no-repeat z-[-1] "></div>
      <div className="w-full mt-8 md:mt-[147px] p-4 md:p-0 mb-20 md:mb-[295px] flex flex-col md:flex-row md:justify-between container">
        <div className="w-full md:w-[520px] md:pt-[165px] text-left px-[auto]">
          <Image src="/images/contact-animations.png" width={520} height={610} alt="" className="" />
        </div>
        <div className="w-full md:w-[520px] flex flex-col items-center md:items-start">
          <p className="w-full md:w-[90px] md:h-5 text-xs md:text-base font-semibold md:leading-5 text-center md:text-left text-custom-pink mt-[10px]">
            Contact Us
          </p>
          <p className="w-full md:w-[404px] md:h-[97px] text-3xl md:text-4xl font-semibold md:leading-[45px] md:tracking-[0.47px] text-center md:text-left text-oxford-blue mt-3 mb-0 mx-0">
            Send your inquiry to our expert team
          </p>
          <p className="w-full md:w-[497px] md:h-7 text-xs md:text-base font-normal md:leading-6 md:tracking-widest text-center md:text-left text-custom-gray mt-3 mb-0 mx-0">
            Lorem ipsum dolor sit amet nulla turapis tellus.
          </p>
          <form
            className="w-full md:w-[520px] flex flex-col gap-[38.3px] mt-[42px] items-center md:items-start" 
            action="#"
            method="GET"
          >
            <div className="w-full md:h-[61.58px] flex justify-between">
              <InputElement
                type={"text"}
                name={"fname"}
                width={"w-[45%] md:w-[242.21px]"}
                padding={"p-2 md:p-6"}
                placehoder={"First name"}
              />
              <InputElement
                type={"text"}
                name={"lname"}
                width={"w-[45%] md:w-[242.21px]"}
                padding={"p-2 md:p-[28.21px]"}
                placehoder={"Last name"}
              />
            </div>
            <InputElement
              type={"email"}
              name={"email"}
              width={"w-full"}
              padding={"p-2 md:p-6"}
              placehoder={"Email address"}
            />
            <InputElement
              type={"text"}
              name={"message"}
              width={"w-full"}
              padding={"p-2 md:p-6"}
              placehoder={"Subject message"}
            />
            <textarea
              name="inquity"
              placeholder="Your inquiry here"
              className="w-full h-32 md:h-60 p-2 md:p-6 text-xs md:text-base font-normal md:tracking-widest text-left border-2 border-solid border-[gray] rounded-2xl"
            ></textarea>
            <button
              type="button"
              className="w-1/2 md:w-[248px] h-11 md:h-[58px] text-base font-semibold leading-6 tracking-widest text-center text-white bg-custom-pink mt-0 md:mt-[14.84px] rounded-md md:rounded-[50px]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactUsConponent;
