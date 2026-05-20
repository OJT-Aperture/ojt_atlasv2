import { Link } from "react-router-dom";
import { HeaderBrandSection } from "./sections/HeaderBrandSection";
import { ModulesIntroSection } from "./sections/ModulesIntroSection";
import { SidebarBrandSection } from "./sections/SidebarBrandSection";
import { StudentCountSection } from "./sections/StudentCountSection";
import { StudentCountValueSection } from "./sections/StudentCountValueSection";

export const ModuleSchermModule = (): JSX.Element => {
  const moduleLinks = [
    {
      id: "1249850901",
      href: "#",
      label: "Klik voor Module Lobby",
    },
  ];

  return (
    <main
      className="relative mx-auto h-[1477px] w-[1440px] bg-white"
      data-model-id="685:1332"
    >
      <HeaderBrandSection />
      <aside aria-label="Zijbalk navigatie">
        <SidebarBrandSection />
      </aside>
      <header className="absolute left-[281px] top-[130px] w-[1159px]">
        <h1 className="flex h-[73px] items-center justify-center text-center [font-family:'Poppins',Helvetica] text-[40px] font-bold leading-[60px] tracking-[-0.88px] text-black">
          Klas 1A | Module D
        </h1>
        <div className="absolute left-[21px] top-[75px] h-0.5 w-[1114px] bg-[#686868]" />
        <Link
          className="absolute left-[35px] top-[43px] flex h-8 w-[73px] items-center [font-family:'Poppins',Helvetica] text-xl font-bold leading-[30px] tracking-[-0.44px] text-black whitespace-nowrap"
          to="/module-scherm"
          aria-label="Ga terug naar module overzicht"
        >
          &lt; Terug
        </Link>
      </header>
      <section
        aria-label="Module introductie"
        className="absolute left-[312px] top-[244px] h-[182px] w-[1092px]"
      >
        <img
          className="absolute left-0 top-0 h-[182px] w-[1092px]"
          alt=""
          src="/img/rectangle-270.png"
          aria-hidden="true"
        />
        <div className="absolute left-[97px] top-0 h-[182px] w-72">
          <div className="absolute left-0 top-0 flex h-20 w-20 aspect-[1]">
            <img
              className="w-[66.33px] flex-1"
              alt="Module icoon"
              src="/img/vector-104.svg"
            />
          </div>
          <div className="absolute left-[-7px] top-[71px] flex h-8 w-72 items-center justify-center [font-family:'Poppins',Helvetica] text-[32px] font-bold leading-[48px] tracking-[-0.70px] text-black whitespace-nowrap text-center">
            Module D
          </div>
          <p className="absolute left-[18px] top-[118px] flex h-8 w-[238px] items-center justify-center [font-family:'Poppins',Helvetica] text-sm font-normal leading-[21px] tracking-[-0.31px] text-black text-center">
            Eigenaarschap, motivatie &amp; growth mindset
          </p>
        </div>
        <div className="absolute left-[287px] top-[11px]">
          <ModulesIntroSection />
        </div>
        <div className="absolute left-[847px] top-[16px] h-[126px] w-[228px]">
          <p className="absolute left-0 top-0 flex h-11 w-56 items-center [font-family:'Poppins',Helvetica] text-sm font-bold leading-[21px] tracking-[-0.31px] text-black">
            Hoe de SLO Doel(en) in de module behaald worden:
          </p>
          <p className="absolute left-0 top-[41px] h-[85px] w-[205px] [font-family:'Poppins',Helvetica] text-xs font-normal leading-[18px] tracking-[-0.26px] text-black">
            Lorem ipsum dolor sit amet. Et omnis vero quo vero internos et{" "}
            <br />
            Lorem ipsum dolor sit amet. Et omnis vero quo vero internos et
          </p>
          <button
            type="button"
            className="absolute left-[147px] top-[122px] flex h-3.5 items-center justify-center [font-family:'Poppins',Helvetica] text-[9px] font-normal leading-[13.5px] tracking-[-0.20px] text-[#1b89f8] underline whitespace-nowrap"
            aria-label="Lees meer over hoe de SLO doelen behaald worden"
          >
            Lees meer
          </button>
        </div>
      </section>
      <section
        aria-label="Leerlingen overzicht"
        className="absolute left-[140px] top-[417px] w-[1262px]"
      >
        <h2 className="flex h-[73px] w-[1159px] items-center justify-center [font-family:'Poppins',Helvetica] text-[32px] font-bold leading-[48px] tracking-[-0.70px] text-black text-center">
          Leerlingen
        </h2>
        <div className="absolute left-0 top-[96px]">
          <StudentCountValueSection />
        </div>
        <aside
          aria-label="Module status en links"
          className="absolute left-[1004px] top-[24px] h-[234px] w-[258px]"
        >
          <img
            className="absolute -left-1 top-0 h-[242px] w-[264px]"
            alt=""
            src="/img/rectangle-269.png"
            aria-hidden="true"
          />
          <div className="absolute left-3 top-2.5 flex h-[22px] w-56 items-center [font-family:'Poppins',Helvetica] text-sm font-bold leading-[21px] tracking-[-0.31px] text-black whitespace-nowrap">
            Module Status:
          </div>
          <div
            className="absolute left-[57px] top-[72px] h-11 w-[134px] rounded-[10px] bg-[#74a2d1]"
            aria-hidden="true"
          />
          <div className="absolute left-[58px] top-[77px] flex h-[34px] w-[132px] items-center justify-center [font-family:'Poppins',Helvetica] text-sm font-bold leading-[21px] tracking-[-0.31px] text-white text-center">
            Module al gestart.
          </div>
          <div className="absolute left-[12px] top-[138px] flex h-[34px] w-56">
            <div className="flex h-[34px] w-56 items-center [font-family:'Poppins',Helvetica] text-sm font-bold leading-[21px] tracking-[-0.31px] text-black">
              Module Link(s):
            </div>
          </div>
          {moduleLinks.map((link, _index) => (
            <div key={link.id}>
              <div className="absolute left-[-76px] top-[96px] flex h-[31px] w-[31px] aspect-[1]">
                <img
                  className="w-[27.12px] flex-1"
                  alt=""
                  src="/img/vector-106.svg"
                  aria-hidden="true"
                />
              </div>
              <div className="absolute left-[-76px] top-[150px] flex h-[31px] w-[31px] aspect-[1]">
                <img
                  className="w-[27.12px] flex-1"
                  alt=""
                  src="/img/vector-106.svg"
                  aria-hidden="true"
                />
              </div>
              <div className="absolute left-[50px] top-[180px] h-[35px] w-[134px] rounded-[5px] border border-solid border-black" />
              <div className="absolute left-[36px] top-[181px] flex h-[34px] w-[132px] items-center justify-center [font-family:'Poppins',Helvetica] text-sm font-bold leading-[21px] tracking-[-0.31px] text-black text-center">
                {link.id}
              </div>
              <div className="absolute left-[156px] top-[191px] flex h-4 w-4 aspect-[1]">
                <img
                  className="w-[13px] flex-1"
                  alt=""
                  src="/img/vector-107.svg"
                  aria-hidden="true"
                />
              </div>
              <a
                href={link.href}
                className="absolute left-[52px] top-[223px] flex h-[18px] items-center justify-center [font-family:'Poppins',Helvetica] text-xs font-normal leading-[18px] tracking-[-0.26px] text-[#1b89f8] underline whitespace-nowrap"
                aria-label={link.label}
              >
                {link.label}
              </a>
            </div>
          ))}
        </aside>
      </section>
      <section
        aria-label="Afgeronde leerlingen"
        className="absolute left-[140px] top-[701px] w-[1159px]"
      >
        <h2 className="flex h-[73px] w-[1159px] items-center justify-center [font-family:'Poppins',Helvetica] text-[32px] font-bold leading-[48px] tracking-[-0.70px] text-black text-center">
          Leerlingen die de module hebben afgerond
        </h2>
        <div className="absolute left-[28px] top-[137px]">
          <StudentCountSection />
        </div>
      </section>
      <nav
        aria-label="Bovennavigatie"
        className="absolute left-[1141px] top-[31px] flex h-28 w-[154px]"
      >
        <div className="relative w-[156px] flex-1">
          <div className="absolute left-0 top-0 flex h-full w-[98.72%] items-center justify-center [font-family:'Poppins',Helvetica] text-[15px] font-normal leading-[22.5px] tracking-[-0.33px] text-black text-center">
            Modules
          </div>
          <div
            className="absolute left-[19.05%] top-[13px] h-3.5 w-[9.24%] aspect-[1] bg-[url(/img/vector-186.svg)] bg-[100%_100%]"
            aria-hidden="true"
          />
        </div>
      </nav>
      <footer className="absolute left-0 top-[1415px] flex h-[62px] w-[1440px] overflow-hidden rounded-sm bg-[#74a2d1] shadow-[0px_-6px_13px_#00000040]">
        <div className="ml-[766px] mt-1.5 flex w-[161px] gap-[13px]">
          <div className="mt-4 flex h-5 w-[75px] items-center [font-family:'Poppins',Helvetica] text-[13px] font-bold leading-[19.5px] tracking-[-0.29px] text-black whitespace-nowrap">
            Powered by
          </div>
          <img
            className="h-[51px] w-[71px] aspect-[1.4]"
            alt="Logo design labs"
            src="/img/logo-design-labs7-1-8.png"
          />
        </div>
      </footer>
    </main>
  );
};
