import { ActiveLearnersCarouselSection } from "./sections/ActiveLearnersCarouselSection";
import { AgendaScheduleSection } from "./sections/AgendaScheduleSection";
import { CompletedLearnersCarouselSection } from "./sections/CompletedLearnersCarouselSection";
import { DashboardSidebarNavigationSection } from "./sections/DashboardSidebarNavigationSection";
import { ModuleOverviewSection } from "./sections/ModuleOverviewSection";
import { ModuleProgressSection } from "./sections/ModuleProgressSection";
import { TopUtilityBarSection } from "./sections/TopUtilityBarSection";

const footerContent = {
  poweredByLabel: "Powered by",
  logoAlt: "Logo design labs",
  logoSrc: "https://c.animaapp.com/aWHY8P00/img/logo-design-labs7-1@2x.png",
};

export const ModuleSchermModule = (): JSX.Element => {
  return (
    <main
      className="relative min-h-[2050px] w-full min-w-[1440px] bg-[#f6f7f8]"
      data-model-id="1686:11099"
      aria-label="Module dashboard"
    >
      <DashboardSidebarNavigationSection />
      <TopUtilityBarSection />
      <section
        className="absolute left-[243px] top-[216px] h-[308px] w-[1162px]"
        aria-label="Module overview"
      >
        <ModuleOverviewSection />
      </section>
      <section
        className="absolute left-[247px] top-[560px] h-[373px] w-[873px]"
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
      <footer className="absolute left-0 top-[1958px] flex h-[62px] w-[1440px] overflow-hidden rounded-sm bg-[#74a2d1] shadow-[0px_-6px_13px_#00000040]">
        <div className="ml-[766px] mt-1.5 flex w-[161px] gap-[13px]">
          <div className="mt-4 flex h-5 w-[75px] items-center whitespace-nowrap [font-family:'Poppins',Helvetica] text-[13px] font-bold leading-[19.5px] tracking-[-0.29px] text-black">
            {footerContent.poweredByLabel}
          </div>
          <img
            className="h-[51px] w-[71px] aspect-[1.4]"
            alt={footerContent.logoAlt}
            src={footerContent.logoSrc}
          />
        </div>
      </footer>
    </main>
  );
};
