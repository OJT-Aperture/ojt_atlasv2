import { useMemo, useState } from "react";
import { FooterCreditsSection } from "./sections/FooterCreditsSection";
import { MainContentSection } from "./sections/MainContentSection";
import { NavigationSidebarSection } from "./sections/NavigationSidebarSection";
import { StudentGallerySection } from "./sections/StudentGallerySection";
import { StudentInsightsPanelSection } from "./sections/StudentInsightsPanelSection";
import { StudentsHeaderSection } from "./sections/StudentsHeaderSection";
import { TopToolbarSection } from "./sections/TopToolbarSection";

const classOptions = [
  { id: "klas-1a", label: "Klas 1A", checked: false },
  { id: "klas-1b", label: "Klas 1B", checked: true },
  { id: "klas-2a", label: "Klas 2A", checked: false },
  { id: "klas-3a", label: "Klas 3A", checked: false },
  { id: "klas-3b", label: "Klas 3B", checked: false },
];

const attentionItems = [
  {
    id: "aandachtspunten",
    title: "4 Leerlingen",
    subtitle: "met aandachtspunten",
    top: "top-[642px]",
    contentTop: "top-[675px]",
    icon: (
      <img
        className="absolute left-[1178px] top-[678px] w-[31px] h-[29px]"
        alt="Aandachtspunten icoon"
        src="https://c.animaapp.com/WMT0Xqbg/img/group-1@2x.png"
      />
    ),
  },
  {
    id: "inzichten",
    title: "2 Nieuwe inzichten",
    subtitle: "van resultaten",
    top: "top-[749px]",
    contentTop: "top-[782px]",
    icon: (
      <img
        className="absolute left-[1179px] top-[780px] w-[31px] h-[31px]"
        alt="Nieuwe inzichten icoon"
        src="https://c.animaapp.com/WMT0Xqbg/img/group-2@2x.png"
      />
    ),
  },
  {
    id: "totaal",
    title: "26 Totaal aantal",
    subtitle: "Leerlingen",
    top: "top-[856px]",
    contentTop: "top-[887px]",
    icon: (
      <img
        className="absolute left-[1177px] top-[888px] w-[34px] h-[29px]"
        alt="Totaal aantal leerlingen icoon"
        src="https://c.animaapp.com/WMT0Xqbg/img/group-3@2x.png"
      />
    ),
  },
  {
    id: "groei",
    title: "9 Positieve groei",
    subtitle: "Momenten van leerlingen",
    top: "top-[961px]",
    contentTop: "top-[992px]",
    icon: (
      <img
        className="absolute left-[1177px] top-[994px] w-[34px] h-[34px]"
        alt="Positieve groei icoon"
        src="https://c.animaapp.com/WMT0Xqbg/img/group-4@2x.png"
      />
    ),
  },
];

export const LeerlingScherm = (): JSX.Element => {
  const [selectedClasses, setSelectedClasses] = useState(
    classOptions.reduce<Record<string, boolean>>((acc, option) => {
      acc[option.id] = option.checked;
      return acc;
    }, {}),
  );

  const totalStudents = 26;

  const selectedClassLabels = useMemo(
    () =>
      classOptions
        .filter((option) => selectedClasses[option.id])
        .map((option) => option.label),
    [selectedClasses],
  );

  const handleCheckboxChange = (id: string) => {
    setSelectedClasses((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <main
      className="bg-[#f6f7f8] w-full min-w-[1440px] h-[1774px] relative"
      data-model-id="1521:7253"
      aria-label="Leerling scherm"
    >
      <NavigationSidebarSection />
      <TopToolbarSection />
      <section
        className="absolute top-[216px] left-[247px] w-[532px] h-9 flex items-center [font-family:'Poppins',Helvetica] font-bold text-black text-2xl tracking-[-0.53px] leading-9"
        aria-label="Leerlingen samenvatting"
      >
        Aantal leerlingen: {totalStudents}
      </section>
      <StudentsHeaderSection />
      <MainContentSection />
      <StudentInsightsPanelSection />
      <StudentGallerySection />
      <FooterCreditsSection />
      <aside
        className="absolute top-[216px] left-[1160px] w-60"
        aria-label="Selecteer klas en aandachtspunten"
      >
        <section
          className="absolute top-0 left-0 w-60 h-[321px] bg-white rounded-[20px] shadow-[0px_4px_4px_#00000040]"
          aria-labelledby="selecteer-klas-heading"
        >
          <div className="absolute top-[27px] left-[35px] w-[143px] h-[237px] flex flex-col gap-10">
            <div
              id="selecteer-klas-heading"
              className="flex items-center w-[134px] h-[23px] [font-family:'Poppins',Helvetica] font-bold text-black text-2xl tracking-[-0.53px] leading-9 whitespace-nowrap"
            >
              Selecteer
            </div>
            <div className="h-[174px] flex flex-col">
              <div className="flex items-center w-[134px] h-[23px] [font-family:'Poppins',Helvetica] font-bold text-black text-xl tracking-[-0.44px] leading-[30px] whitespace-nowrap">
                Klas
              </div>
              <img
                className="w-[131px] h-px mt-2.5 object-cover"
                alt=""
                aria-hidden="true"
                src="https://c.animaapp.com/WMT0Xqbg/img/line-105.svg"
              />
              <fieldset className="w-[151px] h-[131px] relative mt-[9px]">
                <legend className="sr-only">
                  Selecteer één of meer klassen
                </legend>
                {classOptions.map((option, index) => {
                  const topClassNames = [
                    "top-0",
                    "top-7",
                    "top-14",
                    "top-[84px]",
                    "top-28",
                  ][index];

                  return (
                    <label
                      key={option.id}
                      htmlFor={option.id}
                      className={`absolute left-0 ${topClassNames} w-[151px] h-[19px] flex items-center cursor-pointer`}
                    >
                      <span
                        className={`absolute left-0 w-[19px] h-[19px] rounded-[5px] ${
                          selectedClasses[option.id]
                            ? "bg-[#74a2d1]"
                            : "bg-[#d9d9d9] border-[0.75px] border-solid border-[#74a2d1]"
                        }`}
                        aria-hidden="true"
                      />
                      <input
                        id={option.id}
                        name={option.id}
                        type="checkbox"
                        checked={selectedClasses[option.id]}
                        onChange={() => handleCheckboxChange(option.id)}
                        className="absolute left-0 top-0 w-[19px] h-[19px] opacity-0 cursor-pointer"
                        aria-label={option.label}
                      />
                      <span className="absolute left-7 w-[113px] h-[19px] flex items-center [font-family:'Poppins',Helvetica] font-normal text-black text-base tracking-[-0.35px] leading-6 whitespace-nowrap">
                        {option.label}
                      </span>
                    </label>
                  );
                })}
              </fieldset>
            </div>
          </div>
        </section>
        <section
          className="absolute top-[362px] left-0 w-60 h-[619px]"
          aria-labelledby="aandachtspunten-heading"
        >
          <div className="absolute top-0 left-0 w-60 h-[619px] flex">
            <img
              className="w-[248px] h-[627px] -ml-1"
              alt=""
              aria-hidden="true"
              src="https://c.animaapp.com/WMT0Xqbg/img/rectangle-269.png"
            />
          </div>
          <div className="absolute top-0 left-0 w-60 h-[65px] bg-[#74a2d1] rounded-[15px_15px_0px_0px]" />
          <div className="absolute top-[19px] left-7 w-[185px] h-[30px] flex">
            <h2
              id="aandachtspunten-heading"
              className="flex items-center w-[183px] h-[30px] [font-family:'Poppins',Helvetica] font-bold text-white text-xl tracking-[-0.44px] leading-[30px] whitespace-nowrap"
            >
              Aandachtspunten
            </h2>
          </div>
          {attentionItems.map((item) => (
            <div key={item.id}>
              <div
                className={`absolute left-[-1px] ${item.top} w-[242px] ${
                  item.id === "groei" ? "h-[127px]" : "h-[109px]"
                } bg-white border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-[#81818166]`}
              />
              {item.icon}
            </div>
          ))}

          <div className="absolute top-[675px] left-[63px] w-[159px] h-12">
            <div className="absolute top-0 left-0 w-[98px] h-12 flex items-center [font-family:'Poppins',Helvetica] font-bold text-black text-base tracking-[-0.35px] leading-6">
              4 Leerlingen
            </div>
            <div className="absolute top-6 left-0 h-[21px] flex items-center [font-family:'Poppins',Helvetica] font-medium text-black text-sm tracking-[-0.31px] leading-[21px] whitespace-nowrap">
              met aandachtspunten
            </div>
          </div>
          <div className="absolute top-[782px] left-[61px] w-[169px] h-11">
            <div className="absolute top-0 left-0 w-[165px] h-6 flex items-center [font-family:'Poppins',Helvetica] font-bold text-black text-base tracking-[-0.35px] leading-6">
              2 Nieuwe inzichten
            </div>
            <div className="top-[23px] left-0 h-[21px] flex items-center font-medium whitespace-nowrap absolute [font-family:'Poppins',Helvetica] text-black text-sm tracking-[-0.31px] leading-[21px]">
              van resultaten
            </div>
          </div>
          <div className="absolute top-[887px] left-[63px] w-[169px] h-11">
            <div className="absolute top-0 left-0 w-[165px] h-6 flex items-center [font-family:'Poppins',Helvetica] font-bold text-black text-base tracking-[-0.35px] leading-6">
              26 Totaal aantal
            </div>
            <div className="absolute top-[23px] left-0 h-[21px] flex items-center [font-family:'Poppins',Helvetica] font-medium text-black text-sm tracking-[-0.31px] leading-[21px] whitespace-nowrap">
              Leerlingen
            </div>
          </div>
          <div className="absolute top-[992px] left-[63px] w-[169px] h-[66px] flex flex-col">
            <div className="w-[165px] h-6 flex items-center [font-family:'Poppins',Helvetica] font-bold text-black text-base tracking-[-0.35px] leading-6">
              9 Positieve groei
            </div>
            <div className="w-[107px] h-[42px] [font-family:'Poppins',Helvetica] font-medium text-black text-sm tracking-[-0.31px] leading-[21px]">
              Momenten van <br />
              leerlingen
            </div>
          </div>
          <img
            className="absolute w-[17.92%] h-[61.95%] top-[38.05%] left-[82.08%]"
            alt=""
            aria-hidden="true"
            src="https://c.animaapp.com/WMT0Xqbg/img/vector.svg"
          />
          <img
            className="absolute w-[17.99%] h-[44.14%] top-[55.86%] left-[82.01%]"
            alt=""
            aria-hidden="true"
            src="https://c.animaapp.com/WMT0Xqbg/img/vector-1.svg"
          />
          <img
            className="absolute w-[18.13%] h-[55.98%] top-[44.02%] left-[81.88%]"
            alt=""
            aria-hidden="true"
            src="https://c.animaapp.com/WMT0Xqbg/img/group@2x.png"
          />
          <img
            className="absolute w-[18.13%] h-[49.94%] top-[50.06%] left-[81.88%]"
            alt=""
            aria-hidden="true"
            src="https://c.animaapp.com/WMT0Xqbg/img/vector-2.svg"
          />
          <button
            type="button"
            className="absolute w-[11.94%] h-[2.37%] top-[63.19%] left-[82.99%]"
            aria-label="Meer informatie over aandachtspunten"
          >
            <span className="absolute w-[98.84%] h-full top-0 left-0 bg-[#74a2d1] rounded-[10px]" />
            <span className="absolute w-[72.48%] h-[50.00%] top-[26.19%] left-[13.18%] [font-family:'Poppins',Helvetica] font-bold text-white text-sm text-center tracking-[-0.31px] leading-[normal]">
              Meer informatie
            </span>
          </button>
        </section>
      </aside>
      <footer className="absolute top-[1712px] left-0 w-[1440px] h-[62px] flex bg-[#74a2d1] rounded-sm overflow-hidden shadow-[0px_-6px_13px_#00000040]">
        <div className="mt-1.5 w-[161px] ml-[766px] flex gap-[13px] items-start">
          <div className="flex items-center mt-4 w-[75px] h-5 [font-family:'Poppins',Helvetica] font-bold text-black text-[13px] tracking-[-0.29px] leading-[19.5px] whitespace-nowrap">
            Powered by
          </div>
          <img
            className="w-[71px] h-[51px] aspect-[1.4]"
            alt="Logo design"
            src="https://c.animaapp.com/WMT0Xqbg/img/logo-design-labs7-1@2x.png"
          />
        </div>
      </footer>
      <div className="sr-only" aria-live="polite">
        Geselecteerde klassen:{" "}
        {selectedClassLabels.length > 0
          ? selectedClassLabels.join(", ")
          : "geen klassen geselecteerd"}
      </div>
    </main>
  );
};
