import Nav from "./components/nav";

function HeaderComponent() {
  return (
    <>
      <div className="w-full h-[1000px] absolute top-0 bg-no-repeat -z-10 bg-header-backround"></div>
      <div className="w-full h-[805px] container">
        <div
          className="w-full h-[63px] mt-[41px] flex items-center justify-between"
          id="top"
        >
          <div className="flex justify-between items-center gap-x-[18px]">
            <img src="/images/group-1.svg" alt="" />
            <p className="w-[161px] h-[34px] text-2xl font-bold leading-[36px] tracking-[3.2px] text-left text-[#091156]">
              Beautice
            </p>
          </div>
          <div className="flex items-center gap-x-[52px]">
            <ul className="flex items-center gap-[46px]">
              <li className="flex">
                <a className="text-custom-gray text-base font-semibold leading-[20px] text-left tracking-widest hover:text-oxford-blue">
                  Home
                </a>
                <img
                  className="ml-[5px]"
                  width="7px"
                  height="7px"
                  src="/images/plus-icon.svg"
                  alt=""
                />
              </li>
              <Nav />
            </ul>
            <a href="#">
              <button className="w-[158px] h-[52px] flex justify-center items-center text-[#FFFFFF] bg-[#FF64AE] text-base font-semibold tracking-widest text-left rounded-[50px]">
                Contact
              </button>
            </a>
          </div>
        </div>
        <div className="w-full h-[550px] mt-[159px] mb-0 mx-0">
          <div className="w-full pl-10 flex">
            <div className="w-[520px] text-[#091156] text-left pt-[56px] px-0">
              <p className="w-[430px] h-[128px] text-5xl font-semibold m-0 text-left !leading-[60px] tracking-[1px] text-[#091156]">
                Clinic & beauty consultant
              </p>
              <p className="w-[474px] h-[54px] text-base font-medium leading-6 tracking-widest text-[#8B8B8B] m-0">
                It is a long established fact that a reader will be by the
                readable content of a page.
              </p>
              <button className="w-[200px] h-[60px] mt-6  text-base tracking-widest bg-[#FF64AE] text-[white] border-0 rounded-[50px]">
                More Details
              </button>
            </div>
            <div className="w-[630px] float-left">
              <img src="/images/banner.png" alt="" />
            </div>
          </div>
          <div className="w-full mt-[132px] px-[auto] py-0 flex justify-center">
            <img src="/images/slide-button.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderComponent;
