import AboutUs from "@/components/about-us/about-us";
import HeaderComponent from "@/components/header/header";
import ServiceComponent from "@/components/service/service";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeaderComponent />
      <ServiceComponent />
      <AboutUs/>
    </div>
  );
}
