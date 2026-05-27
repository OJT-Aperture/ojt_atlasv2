import { AvailableModulesSection } from "./sections/AvailableModulesSection";
import { CompletedModulesSection } from "./sections/CompletedModulesSection";
import { ModuleInfoSidebarSection } from "./sections/ModuleInfoSidebarSection/ModuleInfoSidebarSection";
import { SideNavigationSection } from "./sections/SideNavigationSection";
import { TopNavigationSection } from "./sections/TopNavigationSection";

export const ModuleScherm = (): JSX.Element => {
  return (
    <main
      className="bg-[#f6f7f8] w-full min-w-[1440px] h-[1024px] relative overflow-hidden"
      data-model-id="1521:7045"
    >
      <TopNavigationSection />
      <SideNavigationSection />
      <section
        aria-label="Module overzicht"
        className="absolute top-[216px] left-[247px] w-[873px] h-[663px] flex flex-col items-center justify-center gap-[64px]"
      >
        <div className="absolute inset-0 bg-white rounded-[15px] shadow-[0px_4px_4px_#00000040]" />
        <AvailableModulesSection />
        <CompletedModulesSection />
      </section>
      <aside aria-label="Module informatie">
        <ModuleInfoSidebarSection />
      </aside>
      <button
        type="button"
        aria-label="Meer informatie"
        className="absolute w-[11.94%] h-[4.10%] top-[74.51%] left-[1280px] -translate-x-1/2 rounded-[10px] overflow-hidden bg-[#74a2d1]"
      >
        <span className="absolute inset-0 rounded-[10px]" />
        <span className="absolute w-[72.48%] h-[50.00%] top-[26.19%] left-[13.18%] [font-family:'Poppins',Helvetica] font-bold text-white text-sm text-center tracking-[-0.31px] leading-[normal]">
          Meer informatie
        </span>
      </button>
      <footer className="absolute top-[962px] left-0 w-[1440px] h-[62px] flex bg-[#74a2d1] rounded-sm overflow-hidden shadow-[0px_-6px_13px_#00000040]">
        <div className="mt-1.5 w-[161px] ml-[766px] flex gap-[13px]">
          <div className="flex items-center mt-4 w-[75px] h-5 [font-family:'Poppins',Helvetica] font-bold text-black text-[13px] tracking-[-0.29px] leading-[19.5px] whitespace-nowrap">
            Powered by
          </div>
          <img
            className="w-[71px] h-[51px] aspect-[1.4]"
            alt="Logo design"
            src="https://c.animaapp.com/jJme9IsX/img/logo-design-labs7-1@2x.png"
          />
        </div>
      </footer>
    </main>
  );
};
