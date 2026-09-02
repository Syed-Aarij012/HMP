import Footer1 from "@/components/footers/Footer1";
import Header3 from "@/components/headers/Header3";

export default function CarLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header3 />
      {children}
      <Footer1 />
    </>
  );
}
