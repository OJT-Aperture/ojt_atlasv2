import { Footer } from "../../Components/Footer";
import { Linkernavigatie } from "../../Components/Linkernavigatie";
import { Topbar } from "../../Components/Topbar";

const navigationItems = [
  {
    label: "Klassen",
    icon: (
      <div className="relative w-6 h-6 aspect-[1]">
        <div className="relative w-[78.45%] h-[90.18%] top-[9.05%] left-[12.50%] flex">
          <img className="flex-1 w-[18.83px]" alt="" src="/img/vector-3.svg" />
        </div>
      </div>
    ),
  },
  {
    label: "T-meting",
    icon: (
      <div className="relative w-6 h-6 aspect-[1]">
        <img
          className="absolute w-full h-[91.20%] top-[8.80%] left-0"
          alt=""
          src="/img/vector-4.svg"
        />
      </div>
    ),
  },
  {
    label: "Modules",
    icon: (
      <div className="relative w-6 h-6 aspect-[1]">
        <img
          className="absolute w-[94.17%] h-[94.48%] top-[5.52%] left-[5.83%]"
          alt=""
          src="/img/vector-5.svg"
        />
      </div>
    ),
  },
  {
    label: "Agenda",
    icon: (
      <div className="relative w-6 h-6 aspect-[1]">
        <img
          className="absolute w-[89.29%] h-[89.29%] top-[10.71%] left-[10.71%]"
          alt=""
          src="/img/vector-6.svg"
        />
      </div>
    ),
  },
  {
    label: "Resultaten",
    icon: (
      <div className="relative w-6 h-6 aspect-[1]">
        <img
          className="absolute w-[31.25%] h-[31.25%] top-[68.75%] left-[68.75%]"
          alt=""
          src="/img/vector-7.svg"
        />
        <img
          className="absolute w-[68.75%] h-[59.38%] top-[40.62%] left-[31.25%]"
          alt=""
          src="/img/vector-8.svg"
        />
        <img
          className="absolute w-[84.38%] h-[93.75%] top-[6.25%] left-[15.62%]"
          alt=""
          src="/img/vector-9.svg"
        />
      </div>
    ),
  },
];

const settingsItems = [
  {
    label: "Instellingen",
    icon: <img className="w-5 h-5" alt="" src="/img/vector-10.svg" />,
    rowClassName: "w-44 mt-[-14.0px] flex gap-2.5",
    labelClassName:
      "flex items-center -mt-0.5 w-[88px] h-6 [font-family:'Poppins',Helvetica] font-normal text-black text-base tracking-[-0.35px] leading-6 whitespace-nowrap",
  },
  {
    label: "Help",
    icon: (
      <div className="mt-[5px] w-5 h-5 relative aspect-[1]">
        <img
          className="absolute w-[53.47%] h-[94.44%] top-[5.56%] left-[46.53%]"
          alt=""
          src="/img/vector-11.svg"
        />
        <img
          className="absolute w-[70.46%] h-[66.91%] top-[33.09%] left-[29.54%]"
          alt=""
          src="/img/vector-12.svg"
        />
      </div>
    ),
    rowClassName: "w-44 mt-[7px] flex gap-2.5",
    labelClassName:
      "flex items-center mt-[3px] w-[35px] h-6 [font-family:'Poppins',Helvetica] font-normal text-black text-base tracking-[-0.35px] leading-6 whitespace-nowrap",
  },
  {
    label: "Balk inklappen",
    icon: (
      <div className="w-5 h-5 flex aspect-[1]">
        <img className="flex-1 w-[15px]" alt="" src="/img/vector-13.svg" />
      </div>
    ),
    rowClassName: "w-[215px] mt-[18px] flex gap-2.5",
    labelClassName:
      "flex items-center -mt-0.5 w-28 h-6 [font-family:'Poppins',Helvetica] font-normal text-black text-base tracking-[-0.35px] leading-6 whitespace-nowrap",
  },
];

export const BasisLayout = (): JSX.Element => {
  return (
    <div
      className="bg-white w-full min-w-[1440px] min-h-[1380px] relative flex flex-col"
      data-model-id="1573:8565"
    >
      <div className="absolute top-0 left-[206px] w-[1234px] h-[1375px] bg-[#f6f7f8]" />
      <Topbar />
      <Linkernavigatie />
      <main>
        <section className="absolute top-[113px] left-[248px] w-[1153px] h-[63px]">
          <h1 className="absolute w-[21.42%] h-[85.71%] top-0 left-[40.50%] flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-black text-4xl text-center tracking-[-0.79px] leading-[54px] whitespace-nowrap">
            BASIS LAYOUT
          </h1>
          <div className="absolute w-full h-[3.17%] top-[96.83%] left-0 bg-[#686868]" />
          <button
            type="button"
            className="absolute w-[4.42%] h-[33.33%] top-[47.62%] left-0 flex items-center [font-family:'Poppins',Helvetica] font-medium text-black text-sm tracking-[-0.31px] leading-[21px] whitespace-nowrap cursor-pointer"
            aria-label="Terug"
          >
            &lt; Terug
          </button>
        </section>
      </main>
      <Linkernavigatie />
      <div className="h-[1400px]" />
      <Footer />
    </div>
  );
};
