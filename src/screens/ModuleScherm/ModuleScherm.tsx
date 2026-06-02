import { AvailableModulesSection } from "./sections/AvailableModulesSection";
import { CompletedModulesSection } from "./sections/CompletedModulesSection";
import { ModuleInfoSidebarSection } from "./sections/ModuleInfoSidebarSection/ModuleInfoSidebarSection";
import { Footer } from "../../Components/Footer";
import { Linkernavigatie } from "../../Components/Linkernavigatie";
import { Topbar } from "../../Components/Topbar";

export const ModuleScherm = (): JSX.Element => {
  return (
    <main
      className="bg-[#f6f7f8] w-full min-w-[1440px] min-h-screen relative flex flex-col"
      data-model-id="1521:7045"
    >
      <Topbar />
      <Linkernavigatie />
      <header className="absolute top-[118px] left-[281px] w-[1159px]" aria-label="Modules header">
        <a
          href="#"
          className="absolute top-0 left-0 w-[73px] h-8 flex items-center [font-family:'Poppins',Helvetica] font-bold text-black text-xl tracking-[-0.44px] leading-[30px] whitespace-nowrap"
          aria-label="Terug"
        >
          &lt; Terug
        </a>
        <h1 className="absolute top-[20px] left-0 w-full h-[73px] flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-black text-[40px] text-center tracking-[-0.88px] leading-[60px]">
          Modules
        </h1>
        <div className="absolute top-[93px] left-0 w-[1114px] h-0.5 bg-[#686868]" aria-hidden="true" />
      </header>
      <section
        aria-label="Module overzicht"
        className="absolute top-[260px] left-[247px] w-[873px] h-[663px] flex flex-col items-center justify-center gap-[64px]"
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
      <div className="h-[950px]" />
      <Footer />
    </main>
  );
};
