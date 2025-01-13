import FormComponent from "@/components/pages/contact/form/form";
import GetInTouchComponent from "@/components/pages/contact/get-in-touch/get-in-touch";

export default function Contact() {
  return (
    <>
      <FormComponent />
      <div className="w-full h-[1100px] absolute bg-no-repeat bg-right-top z-[-1] top-[348.97px] bg-contact-backgound"></div>
    {/* embed map */}
      <div className="w-full h-[418px] mt-[113px]">
        <iframe
          style={{ height: "100%", width: "100%", border: 0 }}
          src="https://www.google.com/maps/embed/v1/place?q=quang+truong+thanh+pho+Vinh&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        ></iframe>
      </div>
      {/* Get in Touch */}
      <GetInTouchComponent />
    </>
  );
}

