import HeaderComponent from "@/components/common/header/header";
import FooterComponent from "@/components/common/footer/footer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </>
  );
}
