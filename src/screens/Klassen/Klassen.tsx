import { ClassCardSection } from "./sections/ClassCardSection/ClassCardSection";
import { ClassGridSection } from "./sections/ClassGridSection";
import { Footer } from "../../Components/Footer";
import { Linkernavigatie } from "../../Components/Linkernavigatie";
import { Topbar } from "../../Components/Topbar";

export const Klassen = (): JSX.Element => {
  return (
    <main
      className="bg-[#f6f7f8] w-full min-w-[1440px] min-h-[1024px] flex flex-col"
      data-model-id="1645:3682"
    >
      <Linkernavigatie />
      <Topbar />
      <section aria-labelledby="klassen-title" className="flex flex-col mt-[120px]">
        <h1
          id="klassen-title"
          className="flex items-center z-[2] ml-[324px] w-[795px] h-12 [font-family:'Poppins',Helvetica] font-bold text-black text-[32px] tracking-[-0.70px] leading-[48px]"
        >
          Selecteer een klas om te beginnen
        </h1>
        <ClassCardSection />
        <ClassGridSection />
      </section>
      <Footer />
    </main>
  );
};
