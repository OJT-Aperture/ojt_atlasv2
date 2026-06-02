import { ClassSelectionSection } from "./sections/ClassSelectionSection";
import { Footer } from "../../Components/Footer";
import { FooterSection } from "./sections/FooterSection";
import { Linkernavigatie } from "../../Components/Linkernavigatie";
import { MainContentSection } from "./sections/MainContentSection";
import { SearchBarSection } from "./sections/SearchBarSection";
import { Topbar } from "../../Components/Topbar";
import { UserGreetingSection } from "./sections/UserGreetingSection/UserGreetingSection";

export const KlassenInformatie = (): JSX.Element => {
  const metrics = [
    { value: "34%", className: "top-[59.60%] left-[48.82%]" },
    { value: "34%", className: "top-[59.60%] left-[60.28%]" },
  ];

  return (
    <main
      className="relative w-[1440px] min-h-[1567px] bg-white flex flex-col"
      data-model-id="825:1685"
    >
      <Topbar />
      <Linkernavigatie />
      <SearchBarSection />
      <ClassSelectionSection />
      <button
        type="button"
        className="absolute top-[164px] left-[1256px] w-36 h-9 bg-[#74a2d1] rounded-[20px]"
        aria-label="Selecteer klas"
      >
        <span className="absolute w-full h-[52.78%] top-[22.22%] left-0 flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-white text-[15px] text-center tracking-[-0.33px] leading-[22.5px] whitespace-nowrap">
          Selecteer klas
        </span>
      </button>
      <FooterSection />
      {metrics.map((metric, index) => (
        <div
          key={`${metric.value}-${index}`}
          className={`w-[11.46%] h-[2.34%] absolute flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-black text-2xl text-center tracking-[-0.53px] leading-9 whitespace-nowrap ${metric.className}`}
        >
          {metric.value}
        </div>
      ))}

      <section
        className="flex w-[254px] items-center gap-[5px] absolute top-[837px] left-[751px]"
        aria-labelledby="bhi-meting-title"
      >
        <h1
          id="bhi-meting-title"
          className="relative flex items-center justify-center w-[201px] mt-[-1.00px] [font-family:'Poppins',Helvetica] font-bold text-black text-[32px] text-center tracking-[-0.70px] leading-[48px]"
        >
          BHI-meting
        </h1>
        <span
          className="relative w-6 h-6 rounded-[5px] overflow-hidden aspect-[1]"
          aria-hidden="true"
        >
          <img
            className="absolute w-[91.67%] h-[91.67%] top-[8.33%] left-[8.33%]"
            alt=""
            src="/img/vector-69.svg"
          />
        </span>
      </section>
      <UserGreetingSection />
      <nav
        className="absolute top-[31px] left-[1141px] w-[154px] h-28 flex"
        aria-label="Modules navigatie"
      >
        <div className="flex-1 w-[156px] relative">
          <div className="absolute w-[98.72%] h-full top-0 left-0 flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-black text-[15px] text-center tracking-[-0.33px] leading-[22.5px]">
            Modules
          </div>
          <div className="absolute w-[9.24%] top-[13px] left-[19.05%] h-3.5 aspect-[1] bg-[url(/img/vector-186.svg)] bg-[100%_100%]" />
        </div>
      </nav>
      <MainContentSection />
      <div className="h-[1600px]" />
      <Footer />
    </main>
  );
};
