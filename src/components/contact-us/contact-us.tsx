import InputElement from "./components/input-element";

function ContactUsConponent() {
  return (
    <>
      <div className="w-full h-[825px] absolute top-[3169px] bg-contact-us-background bg-no-repeat z-[-1]"></div>
      <div className="w-full !mt-[147px] grid grid-cols-[570px_570px] container">
        <div className="pt-[165px] text-left px-[auto]">
          <img src="/images/contact-animations.png" alt="" className="" />
        </div>
        <div className="pl-[50px]">
          <p className="w-[90px] h-5 text-base font-semibold leading-5 text-left text-custom-pink mt-[10px]">
            Contact Us
          </p>
          <p className="w-[404px] h-[97px] text-4xl font-semibold leading-[45px] !tracking-[0.47px] text-left text-oxford-blue mt-3 mb-0 mx-0">
            Send your inquiry to our expert team
          </p>
          <p className="w-[497px] h-7 text-base font-normal leading-6 tracking-widest text-left text-custom-gray mt-3 mb-0 mx-0">
            Lorem ipsum dolor sit amet nulla turapis tellus.
          </p>
          <form
            className="w-[520px] flex flex-col gap-[38.3px] mt-[42px]"
            action="#"
            method="get"
          >
            <div className="w-full h-[61.58px] flex justify-between">
              <InputElement
                type={"text"}
                name={"fname"}
                width={"w-[242.21px]"}
                padding={"p-6"}
                placehoder={"First name"}
              />
              <InputElement
                type={"text"}
                name={"lname"}
                width={"w-[242.21px]"}
                padding={"p-[28.21px]"}
                placehoder={"Last name"}
              />
            </div>
            <InputElement
              type={"email"}
              name={"email"}
              width={"w-full"}
              padding={"p-6"}
              placehoder={"Email address"}
            />
            <InputElement
              type={"text"}
              name={"message"}
              width={"w-full"}
              padding={"p-6"}
              placehoder={"Subject message"}
            />
            <textarea
              name="inquity"
              placeholder="Your inquiry here"
              className="w-full h-60 p-6 text-base font-normal tracking-widest text-left border-2 border-solid border-[gray] rounded-2xl"
            ></textarea>
            <button
              type="button"
              className="w-[248px] h-[58px] text-base font-semibold leading-6 tracking-widest text-center text-white bg-custom-pink mt-[14.84px] rounded-[50px]"
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
