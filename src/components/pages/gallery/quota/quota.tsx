import TextBoxComponent from "@/components/common/text-box";
import Image from "next/image";

export default function QuotaComponent() {
  return (
    <div className="w-full h-[375px] pt-4 md:p-0 md:mb-[49px] bg-gallery-bubble-background bg-no-repeat bg-right-top">
      <div className="w-full container md:pt-[120px] flex flex-col md:flex-row justify-between">
        {/* text */}
        <TextBoxComponent
          divClass="w-full md:w-[600px] flex-col"
          tittleClass="md:text-left"
          tittleText="Get The Quota"
          nameClass="md:text-left"
          nameText="Want to be handled by our professional team immediately?"
          descriptionClass="mt-6 md:text-left"
          descriptionText="Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim."
        />
        {/* button */}
        <div className="flex justify-center items-center mt-5 md:mt-0 md:pr-[56px]">
            <button className="w-[316px] h-[58px] rounded-md md:rounded-[50px] text-white bg-custom-pink text-base tracking-widest font-semibold">
            Make an Appointment
            </button>
        </div>
      </div>
    </div>
  );
}
