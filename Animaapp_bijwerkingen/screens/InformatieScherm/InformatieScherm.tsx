const abbreviationCards = [
  {
    id: "FOC",
    title: "FOC = Focus",
    containerClassName: "top-[685px] left-[317px] w-[346px] absolute h-[369px]",
    titleClassName:
      "absolute w-[50.58%] h-[9.76%] top-[10.30%] left-[33.82%] [font-family:'Poppins',Helvetica] font-bold text-white text-2xl tracking-[-0.53px] leading-9",
    contentClassName:
      "absolute w-[87.20%] h-[39.84%] top-[33.06%] left-[6.14%] [font-family:'Poppins',Helvetica] font-normal text-white text-sm tracking-[-0.31px] leading-[normal]",
    icon: (
      <div className="absolute w-full h-full top-0 left-0 flex bg-[#74a2d1] rounded-[20px]">
        <img
          className="flex-1 w-[71.83px]"
          alt=""
          aria-hidden="true"
          src="/img/vector-71.svg"
        />
      </div>
    ),
    content: (
      <>
        <span className="italic tracking-[-0.04px]">
          Wat meet je:
          <br />
        </span>
        <span className="tracking-[-0.04px]">
          Aantal keren afgeleid (telefoon, praten)
          <br />
          Tijd dat iemand taakgericht werkt
          <br />
          <br />
        </span>
        <span className="italic tracking-[-0.04px]">
          Hoe meten:
          <br />
        </span>
        <span className="tracking-[-0.04px]">
          Observatie (turven per les)
          <br />
          Eventueel zelfrapportage (kort formulier)
        </span>
      </>
    ),
  },
  {
    id: "SAM",
    title: "SAM = Samenwerken",
    containerClassName:
      "top-[685px] left-[686px] w-[345px] bg-[#74a2d1] rounded-[20px] absolute h-[369px]",
    titleClassName:
      "absolute w-[57.10%] h-[19.51%] top-[5.42%] left-[33.04%] [font-family:'Poppins',Helvetica] font-bold text-white text-2xl tracking-[-0.53px] leading-9",
    contentClassName:
      "h-[51.22%] absolute w-[87.20%] top-[33.06%] left-[6.14%] [font-family:'Poppins',Helvetica] font-normal text-white text-sm tracking-[-0.31px] leading-[normal]",
    icon: (
      <div className="absolute w-[20.00%] top-6 left-[6.09%] h-16 flex aspect-[1.07]">
        <img
          className="flex-1 w-[60px]"
          alt=""
          aria-hidden="true"
          src="/img/vector-75.svg"
        />
      </div>
    ),
    content: (
      <>
        <span className="italic tracking-[-0.04px]">
          Wat meet je:
          <br />
        </span>
        <span className="tracking-[-0.04px]">
          Actieve bijdrage in groep
          <br />
          Luisteren naar anderen
          <br />
          Feedback geven
          <br />
          <br />
        </span>
        <span className="italic tracking-[-0.04px]">
          Hoe meten:
          <br />
        </span>
        <span className="tracking-[-0.04px]">
          Peer review (groepsgenoten geven score)
          <br />
          Docent observatie
        </span>
      </>
    ),
  },
  {
    id: "INZ",
    title: "INZ = Inzet",
    containerClassName:
      "top-[685px] left-[1054px] w-[346px] absolute h-[369px]",
    titleClassName:
      "absolute w-[40.35%] h-[9.76%] top-[10.30%] left-[33.92%] [font-family:'Poppins',Helvetica] font-bold text-white text-2xl tracking-[-0.53px] leading-9",
    contentClassName:
      "h-[45.53%] absolute w-[87.20%] top-[33.06%] left-[6.14%] [font-family:'Poppins',Helvetica] font-normal text-white text-sm tracking-[-0.31px] leading-[normal]",
    icon: (
      <div className="absolute w-full h-full top-0 left-0 flex bg-[#74a2d1] rounded-[20px]">
        <img
          className="flex-1 w-[73px]"
          alt=""
          aria-hidden="true"
          src="/img/vector-68.svg"
        />
      </div>
    ),
    content: (
      <>
        <span className="italic tracking-[-0.04px]">
          Wat meet je:
          <br />
        </span>
        <span className="tracking-[-0.04px]">
          Op tijd beginnen
          <br />
          Doorwerken zonder opgeven
          <br />
          Extra moeite doen
          <br />
          <br />
        </span>
        <span className="italic tracking-[-0.04px]">
          Hoe meten:
          <br />
        </span>
        <span className="tracking-[-0.04px]">
          Docent checklists per les
          <br />
          Inlevergedrag (op tijd / niet)
        </span>
      </>
    ),
  },
  {
    id: "RES",
    title: "RES = Resultaten",
    containerClassName:
      "top-[1087px] left-[317px] w-[346px] absolute h-[369px]",
    titleClassName:
      "absolute w-[56.94%] h-[9.76%] top-[10.30%] left-[33.82%] [font-family:'Poppins',Helvetica] font-bold text-white text-2xl tracking-[-0.53px] leading-9",
    contentClassName:
      "absolute w-[87.20%] h-[39.84%] top-[33.06%] left-[6.14%] [font-family:'Poppins',Helvetica] font-normal text-white text-sm tracking-[-0.31px] leading-[normal]",
    icon: (
      <div className="absolute w-full h-full top-0 left-0 flex bg-[#74a2d1] rounded-[20px]">
        <div className="mt-[18px] w-[67px] h-[67px] ml-8 flex -rotate-90 aspect-[1]">
          <img
            className="flex-1 w-[62.81px] rotate-90"
            alt=""
            aria-hidden="true"
            src="/img/vector-74.svg"
          />
        </div>
      </div>
    ),
    content: (
      <>
        <span className="italic tracking-[-0.04px]">
          Wat meet je:
          <br />
        </span>
        <span className="tracking-[-0.04px]">
          Toetsresultaten
          <br />
          Korte quizzen
          <br />
          Klassikale checks (bijv. Kahoot)
          <br />
          <br />
        </span>
        <span className="italic tracking-[-0.04px]">
          Hoe meten:
          <br />
        </span>
        <span className="tracking-[-0.04px]">
          Objectief (cijfers → makkelijkste stat)
        </span>
      </>
    ),
  },
  {
    id: "ZEL",
    title: "ZEL = Zelfstandheid",
    containerClassName:
      "top-[1087px] left-[686px] w-[345px] bg-[#74a2d1] rounded-[20px] absolute h-[369px]",
    titleClassName:
      "absolute w-[57.10%] h-[19.51%] top-[5.42%] left-[33.04%] [font-family:'Poppins',Helvetica] font-bold text-white text-2xl tracking-[-0.53px] leading-9",
    contentClassName:
      "absolute w-[87.20%] h-[39.84%] top-[33.06%] left-[6.14%] [font-family:'Poppins',Helvetica] font-normal text-white text-sm tracking-[-0.31px] leading-[normal]",
    icon: (
      <img
        className="absolute w-[91.01%] h-[94.58%] top-[5.42%] left-[8.99%]"
        alt=""
        aria-hidden="true"
        src="/img/vector-76.svg"
      />
    ),
    content: (
      <>
        <span className="italic tracking-[-0.04px]">
          Wat meet je:
          <br />
        </span>
        <span className="tracking-[-0.04px]">
          Hoe vaak hulp gevraagd wordt
          <br />
          Zelf oplossingen zoeken
          <br />
          <br />
        </span>
        <span className="italic tracking-[-0.04px]">
          Hoe meten:
          <br />
        </span>
        <span className="tracking-[-0.04px]">
          Aantal hulpvragen per les
          <br />
          Observatie: eerst zelf proberen?
        </span>
      </>
    ),
  },
  {
    id: "CRE",
    title: "CRE = Creativiteit",
    containerClassName:
      "top-[1087px] left-[1054px] w-[346px] bg-[#74a2d1] rounded-[20px] absolute h-[369px]",
    titleClassName:
      "absolute w-[59.54%] h-[9.76%] top-[10.30%] left-[28.90%] [font-family:'Poppins',Helvetica] font-bold text-white text-2xl tracking-[-0.53px] leading-9",
    contentClassName:
      "h-[45.53%] absolute w-[87.20%] top-[33.06%] left-[6.14%] [font-family:'Poppins',Helvetica] font-normal text-white text-sm tracking-[-0.31px] leading-[normal]",
    icon: (
      <div className="absolute w-[17.05%] h-[16.80%] top-[6.78%] left-[6.07%]">
        <img
          className="absolute w-[84.75%] h-[80.65%] top-[19.35%] left-[15.25%]"
          alt=""
          aria-hidden="true"
          src="/img/vector-69.svg"
        />
        <img
          className="absolute w-[101.69%] h-[101.61%] top-0 left-0"
          alt=""
          aria-hidden="true"
          src="/img/vector-70.svg"
        />
      </div>
    ),
    content: (
      <>
        <span className="italic tracking-[-0.04px]">
          Wat meet je:
          <br />
        </span>
        <span className="tracking-[-0.04px]">
          Originaliteit van werk
          <br />
          Variatie in oplossingen
          <br />
          Idee-ontwikkeling
          <br />
          <br />
        </span>
        <span className="italic tracking-[-0.04px]">
          Hoe meten:
          <br />
        </span>
        <span className="tracking-[-0.04px]">
          Rubric (bijv. 1–5 op originaliteit, experiment, uitwerking)
        </span>
      </>
    ),
  },
  {
    id: "DIS",
    title: "DIS = Discipline",
    containerClassName: "top-[1489px] left-80 w-[346px] absolute h-[369px]",
    titleClassName:
      "absolute w-[54.91%] h-[9.76%] top-[10.30%] left-[33.82%] [font-family:'Poppins',Helvetica] font-bold text-white text-2xl tracking-[-0.53px] leading-[normal]",
    contentClassName:
      "h-[45.53%] absolute w-[87.20%] top-[33.06%] left-[6.14%] [font-family:'Poppins',Helvetica] font-normal text-white text-sm tracking-[-0.31px] leading-[normal]",
    icon: (
      <div className="absolute w-full h-full top-0 left-0 flex bg-[#74a2d1] rounded-[20px]">
        <div className="mt-5 w-[72px] h-[72px] ml-[30px] flex aspect-[1]">
          <img
            className="flex-1 w-[66.84px]"
            alt=""
            aria-hidden="true"
            src="/img/vector-72.svg"
          />
        </div>
      </div>
    ),
    content: (
      <>
        <span className="italic tracking-[-0.04px]">
          Wat meet je:
          <br />
        </span>
        <span className="tracking-[-0.04px]">
          Op tijd komen
          <br />
          Regels volgen
          <br />
          Materiaal bij zich hebben
          <br />
          <br />
        </span>
        <span className="italic tracking-[-0.04px]">
          Hoe meten:
          <br />
        </span>
        <span className="tracking-[-0.04px]">
          Aanwezigheidssysteem
          <br />
          Aantekeningen docent
        </span>
      </>
    ),
  },
  {
    id: "PRE",
    title: "PRE = Presentatie",
    containerClassName:
      "top-[1489px] left-[685px] w-[346px] bg-[#74a2d1] rounded-[20px] absolute h-[369px]",
    titleClassName:
      "absolute w-[59.54%] h-[9.76%] top-[10.30%] left-[33.82%] [font-family:'Poppins',Helvetica] font-bold text-white text-2xl tracking-[-0.53px] leading-[normal]",
    contentClassName:
      "h-[22.76%] absolute w-[87.20%] top-[33.06%] left-[6.14%] [font-family:'Poppins',Helvetica] font-normal text-white text-sm tracking-[-0.31px] leading-[normal]",
    icon: (
      <div className="absolute w-[23.99%] top-[22px] left-[6.07%] h-[83px] flex aspect-[1]">
        <img
          className="flex-1 w-[62.25px]"
          alt=""
          aria-hidden="true"
          src="/img/vector-73.svg"
        />
      </div>
    ),
    content: (
      <>
        <span className="italic tracking-[-0.04px]">
          Wat meet je:
          <br />
        </span>
        <span className="tracking-[-0.04px]">
          Spreekvaardigheid
          <br />
          Structuur
          <br />
          Zelfvertrouwen
        </span>
      </>
    ),
  },
];

const lineLegend = [
  {
    id: "good",
    topClassName: "absolute top-[394px] left-[346px] w-[97px] h-[7px]",
    labelClassName:
      "absolute top-[389px] left-[489px] h-[18px] flex items-center [font-family:'Poppins',Helvetica] font-normal text-black text-xs tracking-[-0.26px] leading-[18px] whitespace-nowrap",
    src: "/img/line-58.svg",
    label: "Werkt goed samen",
  },
  {
    id: "average",
    topClassName: "absolute top-[444px] left-[346px] w-[97px] h-[7px]",
    labelClassName:
      "absolute top-[438px] left-[489px] h-[18px] flex items-center [font-family:'Poppins',Helvetica] font-normal text-black text-xs tracking-[-0.26px] leading-[18px] whitespace-nowrap",
    src: "/img/line-59.svg",
    label: "Werkt gemiddeld samen",
  },
  {
    id: "low",
    topClassName: "absolute top-[495px] left-[346px] w-[97px] h-[7px]",
    labelClassName:
      "absolute top-[489px] left-[489px] h-[18px] flex items-center [font-family:'Poppins',Helvetica] font-normal text-black text-xs tracking-[-0.26px] leading-[18px] whitespace-nowrap",
    src: "/img/line-60.svg",
    label: "Werkt minder goed samen",
  },
];

const navigationItems = [
  {
    label: "Klassen",
    icon: "/img/vector-80.svg",
    iconWrapper: "relative w-6 h-6 aspect-[1]",
    iconInner: "relative w-[78.45%] h-[90.18%] top-[9.05%] left-[12.50%] flex",
    type: "nested",
  },
  {
    label: "T-Meting",
    icon: "/img/vector-81.svg",
    iconWrapper: "relative w-6 h-6 aspect-[1]",
    iconInner: "absolute w-full h-[91.20%] top-[8.80%] left-0",
    type: "absolute",
  },
  {
    label: "Modules",
    icon: "/img/vector-82.svg",
    iconWrapper: "relative w-6 h-6 aspect-[1]",
    iconInner: "absolute w-[94.17%] h-[94.48%] top-[5.52%] left-[5.83%]",
    type: "absolute",
  },
  {
    label: "Agenda",
    icon: "/img/vector-83.svg",
    iconWrapper: "relative w-6 h-6 aspect-[1]",
    iconInner: "absolute w-[89.28%] h-[89.29%] top-[10.71%] left-[10.72%]",
    type: "absolute",
  },
];

export const InformatieScherm = (): JSX.Element => {
  return (
    <div
      className="bg-[#f6f7f8] w-full min-w-[1440px] min-h-[1983px] relative"
      data-model-id="1645:4722"
    >
      <aside className="fixed top-0 left-0 w-[206px] h-[1024px] flex bg-[#e0ffdb] rounded-[0px_20px_20px_0px] shadow-[0px_4px_4px_#00000040]">
        <div className="mt-[18px] w-44 h-[761px] ml-4 flex flex-col gap-[61.8px]">
          <div className="-ml-0.5 h-[206.23px] relative">
            <img
              className="absolute top-0 left-2 w-[164px] h-[163px] aspect-[1.01] object-cover"
              alt="OJT logo"
              src="/img/ojt-logo-2-4.png"
            />
            <div className="absolute top-[163px] left-0 w-[178px] h-[43px] flex">
              <div className="flex items-center justify-center w-44 h-[43.23px] [font-family:'Poppins',Helvetica] font-bold text-black text-xl text-center tracking-[-0.44px] leading-[18.0px]">
                Atlas dashboard
              </div>
            </div>
          </div>
          <nav
            aria-label="Hoofdnavigatie"
            className="ml-1.5 -mr-1.5 flex-1 max-h-[388px] flex flex-col gap-20"
          >
            <div className="flex-1 max-h-[180px] flex flex-col gap-5">
              <div className="flex items-center flex-1 max-h-4 [font-family:'Poppins',Helvetica] font-bold text-black text-base tracking-[-0.35px] leading-6 whitespace-nowrap">
                Navigatie
              </div>
              <div className="w-[167px] h-[184px] flex flex-col">
                {navigationItems.map((item, index) => (
                  <button
                    key={item.label}
                    type="button"
                    className={`flex items-center gap-2.5 text-left ${
                      index === 0
                        ? "flex-1 max-h-6 relative mt-[-12.0px] w-[167px] h-6"
                        : index === 1
                          ? "flex-1 max-h-6 mt-[9px] w-[167px] h-6 relative"
                          : index === 2
                            ? "flex flex-1 max-h-6 relative mt-2.5 w-[167px] h-6"
                            : "flex flex-1 max-h-6 relative mt-2.5 w-[167px] h-6"
                    }`}
                    aria-label={item.label}
                  >
                    <div className={item.iconWrapper}>
                      {item.type === "nested" ? (
                        <div className={item.iconInner}>
                          <img
                            className="flex-1 w-[18.83px]"
                            alt=""
                            aria-hidden="true"
                            src={item.icon}
                          />
                        </div>
                      ) : (
                        <img
                          className={item.iconInner}
                          alt=""
                          aria-hidden="true"
                          src={item.icon}
                        />
                      )}
                    </div>
                    <div className="w-[137px] h-4 mr-[-4.00px] [font-family:'Poppins',Helvetica] font-normal text-black text-base tracking-[-0.35px] leading-6 whitespace-nowrap relative flex items-center">
                      {item.label}
                    </div>
                  </button>
                ))}

                <button
                  type="button"
                  className="flex flex-1 max-h-6 relative mt-3 w-[167px] h-6 items-center gap-2.5 text-left"
                  aria-label="Resultaten"
                >
                  <div className="relative w-6 h-6 aspect-[1]">
                    <img
                      className="absolute w-[31.25%] h-[31.25%] top-[68.75%] left-[68.75%]"
                      alt=""
                      aria-hidden="true"
                      src="/img/vector-84.svg"
                    />
                    <img
                      className="absolute w-[68.75%] h-[59.38%] top-[40.62%] left-[31.25%]"
                      alt=""
                      aria-hidden="true"
                      src="/img/vector-85.svg"
                    />
                    <img
                      className="absolute w-[84.38%] h-[93.75%] top-[6.25%] left-[15.62%]"
                      alt=""
                      aria-hidden="true"
                      src="/img/vector-86.svg"
                    />
                  </div>
                  <div className="relative flex items-center w-[137px] h-4 mr-[-4.00px] [font-family:'Poppins',Helvetica] font-normal text-black text-base tracking-[-0.35px] leading-6 whitespace-nowrap">
                    Resultaten
                  </div>
                </button>
              </div>
            </div>
            <div className="w-44 h-32 flex flex-col gap-4">
              <div className="flex items-center w-[94px] h-6 -mt-1 [font-family:'Poppins',Helvetica] font-bold text-black text-base tracking-[-0.35px] leading-6 whitespace-nowrap">
                Instellingen
              </div>
              <div className="h-[92px] flex flex-col">
                <button
                  type="button"
                  className="w-44 mt-[-14.0px] flex gap-2.5 text-left"
                  aria-label="Instellingen"
                >
                  <img
                    className="w-5 h-5"
                    alt=""
                    aria-hidden="true"
                    src="/img/vector-87.svg"
                  />
                  <div className="flex items-center -mt-0.5 w-[88px] h-6 [font-family:'Poppins',Helvetica] font-normal text-black text-base tracking-[-0.35px] leading-6 whitespace-nowrap">
                    Instellingen
                  </div>
                </button>
                <button
                  type="button"
                  className="w-44 mt-[7px] flex gap-2.5 text-left"
                  aria-label="Help"
                >
                  <div className="mt-[5px] w-5 h-5 relative aspect-[1]">
                    <img
                      className="absolute w-[53.48%] h-[94.44%] top-[5.56%] left-[46.52%]"
                      alt=""
                      aria-hidden="true"
                      src="/img/vector-88.svg"
                    />
                    <img
                      className="absolute w-[70.47%] h-[66.91%] top-[33.09%] left-[29.53%]"
                      alt=""
                      aria-hidden="true"
                      src="/img/vector-89.svg"
                    />
                  </div>
                  <div className="flex items-center mt-[3px] w-[35px] h-6 [font-family:'Poppins',Helvetica] font-normal text-black text-base tracking-[-0.35px] leading-6 whitespace-nowrap">
                    Help
                  </div>
                </button>
                <button
                  type="button"
                  className="w-[215px] mt-[18px] flex gap-2.5 text-left"
                  aria-label="Balk inklappen"
                >
                  <div className="w-5 h-5 flex aspect-[1]">
                    <img
                      className="flex-1 w-[15px]"
                      alt=""
                      aria-hidden="true"
                      src="/img/vector-90.svg"
                    />
                  </div>
                  <div className="flex items-center -mt-0.5 w-28 h-6 [font-family:'Poppins',Helvetica] font-normal text-black text-base tracking-[-0.35px] leading-6 whitespace-nowrap">
                    Balk inklappen
                  </div>
                </button>
              </div>
            </div>
          </nav>
        </div>
      </aside>
      <header className="absolute top-[18px] left-[247px] w-[1153px] h-[158px]">
        <div className="flex w-[94.02%] h-[25.61%] items-center justify-center gap-10 absolute top-0 left-[3.04%]">
          <div className="relative w-[164px] h-5">
            <div className="absolute top-0 left-0.5 w-5 h-5 flex aspect-[1]">
              <img
                className="flex-1 w-[18px]"
                alt=""
                aria-hidden="true"
                src="/img/vector-77.svg"
              />
            </div>
            <div className="absolute -top-0.5 left-8 h-6 flex items-center justify-center [font-family:'Poppins',Helvetica] font-medium text-black text-base text-center tracking-[-0.35px] leading-6 whitespace-nowrap">
              Harenslyceum
            </div>
          </div>
          <img
            className="relative w-px h-[35px] object-cover"
            alt=""
            aria-hidden="true"
            src="/img/line-101-4.svg"
          />
          <form
            role="search"
            aria-label="Zoeken"
            className="relative w-[534px] h-[40.46px] shadow-[0px_4px_4px_#00000033]"
          >
            <div className="absolute top-0 left-0 w-[532px] h-10 bg-[#ededed] rounded-[20px]" />
            <input
              type="search"
              aria-label="Zoeken naar klas, leerling, module"
              placeholder="Zoeken naar klas, leerling, module..."
              className="absolute top-[7px] left-[17px] w-[430px] h-[25px] [font-family:'Poppins',Helvetica] font-normal text-[#00000066] placeholder:text-[#00000066] text-sm tracking-[-0.31px] leading-[21px]"
            />
            <button
              type="submit"
              aria-label="Zoeken"
              className="absolute top-[5px] left-[489px] w-[31px] h-[31px] flex aspect-[1]"
            >
              <img
                className="flex-1 w-[22.53px]"
                alt=""
                aria-hidden="true"
                src="/img/vector-78.svg"
              />
            </button>
          </form>
          <img
            className="relative w-px h-[35px] object-cover"
            alt=""
            aria-hidden="true"
            src="/img/line-101-4.svg"
          />
          <button
            type="button"
            className="relative w-[90px] h-6 text-left"
            aria-label="Modules"
          >
            <div className="absolute top-0 left-[22px] h-6 flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-black text-base text-center tracking-[-0.35px] leading-6 whitespace-nowrap">
              Modules
            </div>
            <div className="absolute top-1.5 left-0 w-3.5 h-3.5 aspect-[1] bg-[url(/img/vector-79.svg)] bg-[100%_100%]" />
          </button>
          <img
            className="relative w-px h-[35px] object-cover"
            alt=""
            aria-hidden="true"
            src="/img/line-101-4.svg"
          />
          <button type="button" aria-label="Profiel" className="relative">
            <img
              className="relative w-10 h-10 object-cover"
              alt="Profiel"
              src="/img/ellipse-1-4.svg"
            />
          </button>
        </div>
        <div className="absolute w-full h-[39.87%] top-[60.13%] left-0">
          <h1 className="absolute w-[47.88%] h-[85.71%] top-0 left-[27.23%] flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-black text-4xl text-center tracking-[-0.79px] leading-[54px] whitespace-nowrap">
            Informatie Ultimate Classroom
          </h1>
          <div className="absolute w-full h-[3.17%] top-[96.83%] left-0 bg-[#686868]" />
          <button
            type="button"
            className="absolute w-[4.42%] h-[33.33%] top-[47.62%] left-0 flex items-center [font-family:'Poppins',Helvetica] font-medium text-black text-sm tracking-[-0.31px] leading-[21px] whitespace-nowrap"
            aria-label="Terug"
          >
            &lt; Terug
          </button>
        </div>
      </header>
      <main>
        <section aria-labelledby="uitleg-klaslokaal-heading">
          <h2 className="absolute top-64 left-[337px] w-[307px] [font-family:'Poppins',Helvetica] font-extrabold text-black text-2xl tracking-[-0.53px] leading-[normal]">
            Uitleg klaslokaal
          </h2>
          <div className="absolute top-[308px] left-80 w-[1080px] h-[251px] bg-[#ebebeb] rounded-[20px] shadow-[0px_4px_4px_#00000040]" />
          <div className="absolute top-[332px] left-[346px] w-[484px] h-[34px] flex items-center [font-family:'Poppins',Helvetica] font-bold text-black text-sm tracking-[-0.31px] leading-[21px]">
            Lijnen tussen leerlingen
          </div>
          <div className="absolute top-[332px] left-[742px] w-[484px] h-[34px] flex items-center [font-family:'Poppins',Helvetica] font-bold text-black text-sm tracking-[-0.31px] leading-[21px]">
            Uitleg Ultimate Classroom
          </div>
          {lineLegend.map((item) => (
            <div key={item.id}>
              <img
                className={item.topClassName}
                alt=""
                aria-hidden="true"
                src={item.src}
              />
              <div className={item.labelClassName}>{item.label}</div>
            </div>
          ))}

          <p className="absolute top-[371px] left-[744px] w-[504px] h-[94px] flex items-center [font-family:'Poppins',Helvetica] font-normal text-black text-xs tracking-[-0.26px] leading-[18px]">
            Lorem ipsum dolor sit amet. Et omnis vero quo vero internos et dolor
            voluptatem est sunt ipsa cum magnamLorem ipsum dolor sit amet. Et
            omnis vero quo vero internos et dolor voluptatem est sunt ipsa cum
            magnamLorem ipsum dolor sit amet. Et omnis vero quo vero internos et
            dolor voluptatem est sunt ipsa cum magnamLorem ipsum dolor sit
            voluptatem est sunt ipsa cum magnam
          </p>
        </section>
        <section aria-labelledby="afkortingen-heading">
          <h2 className="absolute top-[604px] left-[337px] w-[307px] [font-family:'Poppins',Helvetica] font-extrabold text-black text-2xl tracking-[-0.53px] leading-[normal]">
            De gebruikte afkortingen:
          </h2>
          {abbreviationCards.map((card) => (
            <article
              key={card.id}
              className={card.containerClassName}
              aria-label={card.title}
            >
              {!card.containerClassName.includes("bg-[#74a2d1]") && card.icon}
              {card.containerClassName.includes("bg-[#74a2d1]") && (
                <div className="absolute inset-0 bg-[#74a2d1] rounded-[20px]" />
              )}
              {card.containerClassName.includes("bg-[#74a2d1]") && card.icon}
              <div className={card.titleClassName}>{card.title}</div>
              <p className={card.contentClassName}>{card.content}</p>
            </article>
          ))}
        </section>
      </main>
      <img
        className="absolute top-[1834px] left-[430px] w-[868px] h-1"
        alt=""
        aria-hidden="true"
        src="/img/line-80.svg"
      />
      <footer className="absolute top-[1921px] left-0 w-[1440px] h-[62px] flex bg-[#74a2d1] rounded-sm overflow-hidden shadow-[0px_-6px_13px_#00000040]">
        <div className="mt-1.5 w-[161px] ml-[766px] flex gap-[13px]">
          <div className="flex items-center mt-4 w-[75px] h-5 [font-family:'Poppins',Helvetica] font-bold text-black text-[13px] tracking-[-0.29px] leading-[19.5px] whitespace-nowrap">
            Powered by
          </div>
          <img
            className="w-[71px] h-[51px] aspect-[1.4]"
            alt="Logo Design Labs"
            src="/img/logo-design-labs7-1-4.png"
          />
        </div>
      </footer>
    </div>
  );
};
