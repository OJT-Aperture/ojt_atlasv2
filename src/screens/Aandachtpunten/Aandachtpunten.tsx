import { AttentionPointsHeaderSection } from "./sections/AttentionPointsHeaderSection";
import { AttentionPointsMetricsSection } from "./sections/AttentionPointsMetricsSection";
import { AttentionPointsTableSection } from "./sections/AttentionPointsTableSection";
import { Footer } from "../../Components/Footer";
import { Linkernavigatie } from "../../Components/Linkernavigatie";
import { Topbar } from "../../Components/Topbar";

const rowIconPositions = [675, 740, 804, 869, 938];

export const Aandachtpunten = (): JSX.Element => {
  return (
    <main
      className="relative w-[1440px] h-[1185px] bg-white overflow-hidden"
      data-model-id="630:1161"
      aria-label="Aandachtpunten pagina"
    >
      <Topbar />
      <AttentionPointsHeaderSection />
      <AttentionPointsMetricsSection />
      <AttentionPointsTableSection />
      {rowIconPositions.map((top) => (
        <div
          key={top}
          className="absolute left-[413px] w-[53px] h-[53px] flex aspect-[1]"
          style={{ top: `${top}px` }}
          aria-hidden="true"
        >
          <img className="flex-1 w-[50px]" alt="" src="/img/vector-182.svg" />
        </div>
      ))}

      <div
        className="absolute top-[291px] left-[1156px] w-[85px] h-[85px] flex aspect-[1]"
        aria-hidden="true"
      >
        <img className="flex-1 w-[30px]" alt="" src="/img/vector-183.svg" />
      </div>
      <div
        className="absolute top-[287px] left-[937px] w-[89px] h-[89px] flex aspect-[1]"
        aria-hidden="true"
      >
        <img className="flex-1 w-[30px]" alt="" src="/img/vector-184.svg" />
      </div>
      <div
        className="absolute top-[304px] left-[491px] w-8 h-8 flex aspect-[1]"
        aria-hidden="true"
      >
        <img className="flex-1 w-[28.4px]" alt="" src="/img/vector-185.svg" />
      </div>
      <div className="absolute top-[31px] left-[1141px] w-[154px] h-28 flex">
        <div className="relative flex-1 w-[156px]">
          <div className="absolute w-[98.72%] h-full top-0 left-0 flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-black text-[15px] text-center tracking-[-0.33px] leading-[22.5px]">
            Modules
          </div>
          <div
            className="absolute w-[9.24%] top-[13px] left-[19.05%] h-3.5 aspect-[1] bg-[url(/img/vector-186.svg)] bg-[100%_100%]"
            aria-hidden="true"
          />
        </div>
      </div>
      <Footer />
      <Linkernavigatie />
    </main>
  );
};
