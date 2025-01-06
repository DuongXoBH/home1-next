import Card from "./component/card";

function ServiceComponent() {
  return (
    <div className="flex flex-col items-center w-full mt-16 md:mt-32 p-4 md:p-0 container">
      <div className=" w-full md:w-[800px]  flex flex-col items-center">
        <p className="text-xs md:text-base md:leading-10 font-semibold text-center text-custom-pink">
          Main Services
        </p>
        <p className="w-full md:w-[462px] mt-[2px] mb-[14px] mx-0 text-3xl md:text-4xl md:leading-[45px] tracking-[0.3px] font-semibold text-center text-oxford-blue">
          Learn services to focus on your beauty
        </p>
        <p className="w-full md:w-[848px] mt-[3px] text-xs md:text-base font-normal tracking-widest text-center text-custom-gray">
          Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa.
          Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla
          turpis.
        </p>
      </div>
      <div className="w-full flex flex-col justify-center items-center md:flex-row md:justify-between mt-5 md:mt-[93px]">
        <Card />
      </div>
    </div>
  );
}

export default ServiceComponent;
