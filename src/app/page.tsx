import Header from "@/components/Header";
import PrimaryCopy from "@/components/PrimaryCopy";
import Body from "@/components/Body";
import SecondaryCopy from "@/components/SecondaryCopy";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="h-full bg-primary pb-24" style={{ minHeight: "500px" }}>
        <div className="w-full container mx-auto px-4">
          <Header />
          <PrimaryCopy />
        </div>
      </div>
      <Body />
      <div className="h-full bg-primary lg:pb-24 pb-12" style={{}}>
        <SecondaryCopy />
      </div>
      <div className="h-full">
        <CTA />
      </div>
      <div className="h-full bg-primary" style={{}}>
        <Footer />
      </div>
    </>
  );
}
