import ProtectRoute from "./protect-route";


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ProtectRoute>
        {children}
      </ProtectRoute>
    </>
  );
}
