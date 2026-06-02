import { ActiveLearnersCarouselSection } from "./sections/ActiveLearnersCarouselSection";
import { AgendaScheduleSection } from "./sections/AgendaScheduleSection";
import { CompletedLearnersCarouselSection } from "./sections/CompletedLearnersCarouselSection";
import { Footer } from "../../Components/Footer";
import { Linkernavigatie } from "../../Components/Linkernavigatie";
import { ModuleOverviewSection } from "./sections/ModuleOverviewSection";
import { ModuleProgressSection } from "./sections/ModuleProgressSection";
import { Topbar } from "../../Components/Topbar";

export const ModuleSchermModule = (): JSX.Element => {
  return (
    <main
      className="relative min-h-[2050px] w-full min-w-[1440px] bg-[#f6f7f8]"
      data-model-id="1686:11099"
      aria-label="Module dashboard"
    >
      <Linkernavigatie />
      <Topbar />
      <header className="absolute top-[118px] left-[281px] w-[1159px]" aria-label="Module D header">
        <a
          href="#"
          className="absolute top-0 left-0 w-[73px] h-8 flex items-center [font-family:'Poppins',Helvetica] font-bold text-black text-xl tracking-[-0.44px] leading-[30px] whitespace-nowrap"
          aria-label="Terug"
        >
          &lt; Terug
        </a>
        <h1 className="absolute top-[20px] left-0 w-full h-[73px] flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-black text-[40px] text-center tracking-[-0.88px] leading-[60px]">
          Module D
        </h1>
        <div className="absolute top-[93px] left-0 w-[1114px] h-0.5 bg-[#686868]" aria-hidden="true" />
      </header>
      <section
        className="absolute left-[243px] top-[260px] h-[308px] w-[1162px]"
        aria-label="Module overview"
      >
        <ModuleOverviewSection />
      </section>
      <section
        className="absolute left-[247px] top-[604px] h-[373px] w-[873px]"
        aria-labelledby="module-status-heading"
      >
        <div className="absolute left-0 top-0 flex h-[373px] w-[873px]">
          <img
            className="-ml-1 h-[381px] w-[881px]"
            alt=""
            aria-hidden="true"
            src="https://c.animaapp.com/aWHY8P00/img/rectangle-269-1.png"
          />
        </div>
        <h2
          id="module-status-heading"
          className="absolute left-[41px] top-[22px] flex h-9 w-[226px] items-center [font-family:'Poppins',Helvetica] text-2xl font-bold leading-9 tracking-[-0.53px] text-black"
        >
          Module status
        </h2>
        <div
          className="absolute left-[43px] top-[98px] flex h-[118px] w-[793px] rounded-[25px] bg-[#d9d9d9]"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={70}
          aria-label="Module progress"
        >
          <div className="h-[118px] w-[552px] rounded-[25px_0px_0px_25px] bg-[#629460]" />
        </div>
        <div className="absolute left-0 top-0">
          <ModuleProgressSection />
        </div>
        <button
          type="button"
          className="absolute left-[734px] top-[305px] flex h-[17px] w-[37px] items-center justify-center"
          aria-label="Start module"
        >
          <span className="h-[17.37px] w-[35px] [font-family:'Poppins',Helvetica] text-center text-sm font-bold leading-[normal] tracking-[-0.31px] text-white">
            Start
          </span>
        </button>
      </section>
      <section
        className="absolute left-[1130px] top-[216px]"
        aria-label="Agenda schedule"
      >
        <AgendaScheduleSection />
      </section>
      <section
        className="absolute left-[247px] top-[1500px]"
        aria-label="Active learners carousel"
      >
        <ActiveLearnersCarouselSection />
      </section>
      <section
        className="absolute left-[1196px] top-[1197px] h-[42px] w-[172px]"
        aria-label="Agenda shortcut"
      >
        <button
          type="button"
          className="relative h-full w-full rounded-[10px] bg-[#74a2d1]"
          aria-label="Volledige agenda"
        >
          <span className="absolute left-[13.18%] top-[26.19%] h-[50%] w-[72.48%] [font-family:'Poppins',Helvetica] text-center text-sm font-bold leading-[normal] tracking-[-0.31px] text-white">
            Volledige agenda
          </span>
        </button>
      </section>
      <section
        className="absolute left-[247px] top-[1590px]"
        aria-label="Completed learners carousel"
      >
        <CompletedLearnersCarouselSection />
      </section>
      <Footer />
    </main>
  );
};
