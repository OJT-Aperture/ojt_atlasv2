import { AttentionPointsHeaderSection } from "../Aandachtpunten/sections/AttentionPointsHeaderSection";
import { AttentionPointsMetricsSection } from "../Aandachtpunten/sections/AttentionPointsMetricsSection";
import { AttentionPointsTableSection } from "../Aandachtpunten/sections/AttentionPointsTableSection";
import { HeaderSection } from "../Aandachtpunten/sections/HeaderSection";
import { SideNavSection } from "../Aandachtpunten/sections/SideNavSection";
import { ContactUsSection } from "../HelpEnSupport/sections/ContactUsSection";
import { FaqSection } from "../HelpEnSupport/sections/FaqSection";
import { TopNavigationSection } from "../HelpEnSupport/sections/TopNavigationSection";
import { ClassCardSection } from "../Klassen/sections/ClassCardSection/ClassCardSection";
import { ClassGridSection } from "../Klassen/sections/ClassGridSection";
import { GlobalHeaderSection } from "../Klassen/sections/GlobalHeaderSection";
import { SidebarNavigationSection } from "../Klassen/sections/SidebarNavigationSection";
import { ClassSelectionSection } from "../KlassenInformatie/sections/ClassSelectionSection";
import { FooterSection } from "../KlassenInformatie/sections/FooterSection";
import { MainContentSection } from "../KlassenInformatie/sections/MainContentSection";
import { SearchBarSection } from "../KlassenInformatie/sections/SearchBarSection";
import { UserGreetingSection } from "../KlassenInformatie/sections/UserGreetingSection/UserGreetingSection";
import { PageHeaderSection } from "../LeerlingScherm/sections/PageHeaderSection/PageHeaderSection";
import { StudentListSection } from "../LeerlingScherm/sections/StudentListSection/StudentListSection";
import { HeaderBrandSection } from "../ModuleSchermModule/sections/HeaderBrandSection";
import { ModulesIntroSection } from "../ModuleSchermModule/sections/ModulesIntroSection";
import { SidebarBrandSection } from "../ModuleSchermModule/sections/SidebarBrandSection";
import { StudentCountSection } from "../ModuleSchermModule/sections/StudentCountSection";
import { StudentCountValueSection } from "../ModuleSchermModule/sections/StudentCountValueSection";
import { AppHeaderSection } from "./sections/AppHeaderSection";
import { ModulesGridSection } from "./sections/ModulesGridSection";
import { PageTitleSection } from "./sections/PageTitleSection";

export const ModuleScherm = (): JSX.Element => {
  return (
    <main
      className="relative w-[1440px] h-[1024px] bg-white overflow-hidden"
      data-model-id="491:13"
    >
      <aside
        className="absolute top-0 left-0 h-[962px]"
        aria-label="Sidebar navigation"
      >
        <SidebarNavigationSection />
      </aside>
      <header className="absolute top-0 left-[197px] w-[1243px]">
        <AppHeaderSection />
      </header>
      <section
        className="absolute top-[102px] left-[214px] w-[796px]"
        aria-labelledby="modules-page-title"
      >
        <PageTitleSection />
      </section>
      <section
        className="absolute top-[149px] left-[434px] w-[362px]"
        aria-label="Modules introduction"
      >
        <ModulesIntroSection />
      </section>
      <section
        className="absolute top-[243px] left-[216px] w-[771px]"
        aria-label="Modules overview"
      >
        <ModulesGridSection />
      </section>
      <section
        className="absolute top-[842px] left-[224px] w-[574px]"
        aria-label="Footer content section"
      >
        <FooterSection />
      </section>
      <footer className="absolute top-[962px] left-0 w-[1440px] h-[62px] bg-[#74a2d1] rounded-sm overflow-hidden shadow-[0px_-6px_13px_#00000040]">
        <div className="flex items-center justify-center w-full h-full">
          <div className="flex items-center gap-[13px]">
            <span className="[font-family:'Poppins',Helvetica] font-bold text-black text-[13px] tracking-[-0.29px] leading-[19.5px] whitespace-nowrap">
              Powered by
            </span>
            <img
              className="w-[71px] h-[51px] aspect-[1.4]"
              alt="Aperture logo"
              src="/img/logo-design-labs7-1-8.png"
            />
          </div>
        </div>
      </footer>
      <nav
        className="absolute top-[31px] left-[1141px] w-[154px] h-28"
        aria-label="Current page"
      >
        <div className="relative w-[156px] h-full">
          <div
            id="modules-page-title"
            className="absolute w-[98.72%] h-full top-0 left-0 flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-black text-[15px] text-center tracking-[-0.33px] leading-[22.5px]"
          >
            Modules
          </div>
          <div
            className="absolute w-[9.24%] top-[13px] left-[19.05%] h-3.5 aspect-[1] bg-[url(/img/vector-186.svg)] bg-[100%_100%]"
            aria-hidden="true"
          />
        </div>
      </nav>
      <div className="hidden">
        <FaqSection />
        <SearchBarSection />
        <ContactUsSection />
        <GlobalHeaderSection />
        <ClassSelectionSection />
        <StudentCountValueSection />
        <SideNavSection />
        <AttentionPointsMetricsSection />
        <StudentListSection />
        <StudentCountSection />
        <HeaderBrandSection />
        <MainContentSection />
        <UserGreetingSection />
        <ClassGridSection />
        <PageHeaderSection />
        <TopNavigationSection />
        <ClassCardSection />
        <AttentionPointsHeaderSection />
        <AttentionPointsTableSection />
        <SidebarBrandSection />
        <HeaderSection />
      </div>
    </main>
  );
};
