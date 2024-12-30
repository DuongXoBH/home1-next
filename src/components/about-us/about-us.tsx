function AboutUs(){
    return(
        <>
        <div className="w-full h-[950px] absolute bg-no-repeat bg-right-top z-[-1] top-[1448px] bg-about-us-background"></div>
      <div className="w-full flex !mt-[129px] container">
        <div className="w-[664px] h-[292px]">
          <p className="w-[73px] h-5 text-base font-semibold leading-5 text-left text-custom-pink m-0">About Us</p>
          <p className="w-[664px] h-[52px] text-4xl font-semibold leading-[45px] text-left text-[rgba(9,17,86,1)] mt-3 mb-0 mx-0">We are the best beauty clinic</p>
          <p className=" w-[483px] text-base font-normal leading-6 tracking-widest text-left text-custom-gray mt-3 mb-6 mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam
            suscipit purus donec amet. Egestas volutpat facilisi eu libero.
            Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in
            suspendisse placerat.
          </p>
          <p className="w-[483px] text-base font-normal leading-6 tracking-widest text-left text-custom-gray mt-3 mb-6 mx-0">
            Id dui erat sed quam tellus in purus. Pellentesque congue fringilla
            cras tellus enim.
          </p>
          <div className="flex w-[460px] h-[60px] mt-[52px] justify-between">
            <button className="w-[200px] h-[58px] text-[antiquewhite] bg-custom-pink text-base font-semibold leading-6 tracking-widest text-center mr-1.5 rounded-[50px] border-0">Learn More</button>
            <button className="about__play-btnw-[250px] flex items-center justify-center rounded-[50px] border-0">
              <img src="/images/play-button.svg" alt="" />
              <p className="text-base font-semibold leading-6 tracking-[1.6px] m-0 pl-[13px] pr-0 py-0;">Watch Video</p>
            </button>
          </div>
        </div>
        <div className="w-[476px] rounded-[50px_0px_0px_0px]">
          <img
            src="/images/about-us-img.png"
            className="mt-[45px]"
            alt=""
          />
        </div>
      </div>
        </>
    )
}

export default AboutUs;