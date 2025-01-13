import InputElement from "../pages/home1/contact-us/components/input-element";

export default function ContactFormComponent(){
    return(
        <form
        className="w-full md:w-[520px] flex flex-col gap-[38.3px] md:mt-[42px] items-center md:items-start" 
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
    )
}