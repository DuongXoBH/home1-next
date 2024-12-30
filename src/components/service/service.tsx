import Card from "./component/card";

function ServiceComponent() {
    return (
      <div className="flex flex-col items-center w-full !mt-[81px] container">
        <div className="w-[800px]  flex flex-col items-center">
            <p className="text-base leading-10 font-semibold text-center text-custom-pink">Main Services</p>
            <p className="w-[432px] mt-[2px] mb-[14px] mx-0 text-4xl leading-[45px] font-semibold text-center text-purple-navy">Learn services to focus on your beauty</p>
            <p className="w-[848px] mt-[3px] text-base font-normal tracking-widest text-center text-custom-gray">Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</p>
        </div>
        <div className="grid grid-cols-[343px_343px_343px] gap-14 mt-[93px]">
            <Card/>
        </div>
    </div>
    );
  }
  
  export default ServiceComponent;