import { ClassCardSection } from "./sections/ClassCardSection/ClassCardSection";
import { ClassGridSection } from "./sections/ClassGridSection";
import { GlobalHeaderSection } from "./sections/GlobalHeaderSection";
import { SidebarNavigationSection } from "./sections/SidebarNavigationSection";

export const Klassen = (): JSX.Element => {
  return (
    <main
      className="bg-[#f6f7f8] w-full min-w-[1440px] min-h-[1024px] flex flex-col"
      data-model-id="1645:3682"
    >
      <SidebarNavigationSection />
      <GlobalHeaderSection />
      <section aria-labelledby="klassen-title" className="flex flex-col">
        <h1
          id="klassen-title"
          className="flex items-center z-[2] ml-[324px] w-[795px] h-12 mt-[75px] [font-family:'Poppins',Helvetica] font-bold text-black text-[32px] tracking-[-0.70px] leading-[48px]"
        >
          Selecteer een klas om te beginnen
        </h1>
        <ClassCardSection />
        <ClassGridSection />
      </section>
      <footer className="z-[1] w-[1440px] h-[62px] mt-[125.3px] flex bg-[#74a2d1] rounded-sm overflow-hidden shadow-[0px_-6px_13px_#00000040]">
        <div className="mt-1.5 w-[161px] ml-[766px] flex gap-[13px]">
          <div className="flex items-center mt-4 w-[75px] h-5 [font-family:'Poppins',Helvetica] font-bold text-black text-[13px] tracking-[-0.29px] leading-[19.5px] whitespace-nowrap">
            Powered by
          </div>
          <img
            className="w-[71px] h-[51px] aspect-[1.4]"
            alt="Logo design"
            src="/img/logo-design-labs7-1-8.png"
          />
        </div>
      </footer>
    </main>
  );
};
