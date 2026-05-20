const moduleSummaries = [
  {
    id: "module-a",
    title: "Module A",
    top: "top-[263px]",
    textTop: "top-[285px]",
    lineTop: "top-[327px]",
    iconTop: "top-[301px]",
    expanded: false,
  },
  {
    id: "module-b",
    title: "Module B",
    top: "top-[386px]",
    textTop: "top-[395px]",
    lineTop: "top-[437px]",
    iconTop: "top-[406px]",
    expanded: true,
  },
  {
    id: "module-c",
    title: "Module C",
    top: "top-[729px]",
    textTop: "top-[751px]",
    lineTop: "top-[793px]",
    iconTop: "top-[765px]",
    expanded: false,
  },
  {
    id: "module-d",
    title: "Module D",
    top: "top-[852px]",
    textTop: "top-[878px]",
    lineTop: "top-[920px]",
    iconTop: "top-[891px]",
    expanded: false,
  },
] as const;

const expandedColumns = [
  {
    title: "Relevante SLO Doelen voor deze module:",
    className: "absolute top-[465px] left-[336px] w-64 h-[225px]",
    content: [
      "Lorem ipsum dolor sit amet. Et omnis vero quo vero internos et dolor voluptatem est sunt ipsa cum magnam",
      "Lorem ipsum dolor sit amet. Et omnis vero quo vero internos et dolor voluptatem",
      "Lorem ipsum dolor sit amet. Et omnis vero quo vero internos et dolor voluptatem",
    ],
  },
  {
    title: "Welke T-Metingen vervullen ze?",
    className: "absolute top-[465px] left-[611px] w-64 h-[222px]",
    content: [
      "Lorem ipsum dolor sit amet. Et omnis vero quo vero internos et dolor voluptatem est sunt ipsa cum magnam",
      "Lorem ipsum dolor sit amet. Et omnis vero quo vero internos et dolor voluptatem",
      "Lorem ipsum dolor sit amet. Et omnis",
      "Lorem ipsum dolor sit amet. Et omnis vero quo vero internos et dolor voluptatem",
    ],
  },
  {
    title: "Type data wat uit metingen komen:",
    className: "absolute top-[465px] left-[886px] w-[489px] h-[150px]",
    content: [
      "Lorem ipsum dolor sit amet. Et omnis vero quo vero internos et dolor voluptatem est sunt ipsa cum magnam",
      "Lorem ipsum dolor sit amet. Et omnis vero quo vero internos et dolor voluptatem",
      "Lorem ipsum dolor sit amet. Et omnis vero quo vero internos et dolor voluptatem",
      "Lorem ipsum dolor sit amet. Et omnis vero quo vero internos et dolor voluptatem",
      "Lorem ipsum dolor sit amet. Et omnis vero quo vero internos et dolor voluptatem",
    ],
  },
] as const;

const navItems = [
  { label: "Klassen", icon: "/img/vector-80.svg", type: "custom" },
  { label: "T-Meting", icon: "/img/vector-81.svg", type: "img" },
  { label: "Modules", icon: "/img/vector-82.svg", type: "img" },
  { label: "Agenda", icon: "/img/vector-83.svg", type: "img" },
  { label: "Resultaten", type: "resultaten" },
] as const;

const settingsItems = [
  { label: "Instellingen", icon: "/img/vector-87.svg", type: "img" },
  { label: "Help", type: "help" },
  {
    label: "Balk inklappen",
    icon: "/img/vector-17.svg",
    type: "img",
    width: "w-28",
  },
] as const;

export const SloDoelen = (): JSX.Element => {
  return (
    <main
      className="bg-[#f6f7f8] w-full min-w-[1440px] min-h-[1130px] relative"
      data-model-id="1645:4522"
    >
      {moduleSummaries.map((module) => (
        <section
          key={module.id}
          aria-labelledby={module.id}
          className={`absolute left-[314px] w-[1084px] ${module.expanded ? "h-[318px]" : "h-[98px]"} ${module.top} bg-[#ebebeb] rounded-[20px] shadow-[0px_4px_4px_#00000040]`}
        >
          <h2
            id={module.id}
            className={`absolute left-[-10px] w-72 h-8 flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-black text-[32px] text-center tracking-[-0.70px] leading-[48px] whitespace-nowrap ${module.expanded ? "top-5" : "top-[33px]"}`}
          >
            {module.title}
          </h2>
          <div
            className={`absolute left-[308px] w-[285px] h-[53px] flex items-center [font-family:'Poppins',Helvetica] font-light text-[#74a2d1] text-base tracking-[-0.35px] leading-6 ${module.expanded ? "top-[9px]" : "top-[22px]"}`}
          >
            Moeite met langere concentratie
          </div>
          <img
            className={`absolute left-[308px] w-[317px] h-px object-cover ${module.expanded ? "top-[51px]" : "top-[64px]"}`}
            alt="Line"
            src="/img/line-87.svg"
          />
          <div
            className={`absolute w-5 h-5 flex aspect-[1] ${module.expanded ? "top-5 left-[1006px] -rotate-180" : "top-[38px] left-[1005px]"}`}
            aria-hidden="true"
          >
            <img
              className={`flex-1 w-[18px] ${module.expanded ? "rotate-180" : ""}`}
              alt="Vector"
              src={module.expanded ? "/img/vector-3.svg" : "/img/vector-2.svg"}
            />
          </div>
        </section>
      ))}

      {expandedColumns.map((column) => (
        <section
          key={column.title}
          className={`${column.className} [font-family:'Poppins',Helvetica] font-normal text-transparent text-sm tracking-[-0.31px] leading-[21px]`}
        >
          <h3 className="font-semibold text-black tracking-[-0.04px]">
            {column.title}
          </h3>
          <div className="h-[14px]" />
          <ul className="text-[#818181] text-xs tracking-[-0.03px] leading-[18px] list-disc pl-4">
            {column.content.map((item, index) => (
              <li key={`${column.title}-${index}`}>{item}</li>
            ))}
          </ul>
        </section>
      ))}

      <footer className="absolute top-[1068px] left-0 w-[1440px] h-[62px] flex bg-[#74a2d1] rounded-sm overflow-hidden shadow-[0px_-6px_13px_#00000040]">
        <div className="mt-1.5 w-[161px] ml-[766px] flex gap-[13px]">
          <div className="flex items-center mt-4 w-[75px] h-5 [font-family:'Poppins',Helvetica] font-bold text-black text-[13px] tracking-[-0.29px] leading-[19.5px] whitespace-nowrap">
            Powered by
          </div>
          <img
            className="w-[71px] h-[51px] aspect-[1.4]"
            alt="Logo design"
            src="/img/logo-design-labs7-1-4.png"
          />
        </div>
      </footer>
      <header className="absolute top-[18px] left-[245px] w-[1153px] h-[158px]">
        <div className="flex w-[94.02%] h-[25.61%] items-center justify-center gap-10 absolute top-0 left-[3.04%]">
          <div className="relative w-[164px] h-5">
            <div className="absolute top-0 left-0.5 w-5 h-5 flex aspect-[1]">
              <img
                className="flex-1 w-[18px]"
                alt="Vector"
                src="/img/vector-77.svg"
              />
            </div>
            <div className="absolute -top-0.5 left-8 h-6 flex items-center justify-center [font-family:'Poppins',Helvetica] font-medium text-black text-base text-center tracking-[-0.35px] leading-6 whitespace-nowrap">
              Harenslyceum
            </div>
          </div>
          <img
            className="relative w-px h-[35px] object-cover"
            alt="Line"
            src="/img/line-101-4.svg"
          />
          <form
            className="relative w-[534px] h-[40.46px] shadow-[0px_4px_4px_#00000033]"
            role="search"
          >
            <label htmlFor="atlas-search" className="sr-only">
              Zoeken naar klas, leerling, module
            </label>
            <div className="absolute top-0 left-0 w-[532px] h-10 bg-[#ededed] rounded-[20px]" />
            <input
              id="atlas-search"
              type="search"
              placeholder="Zoeken naar klas, leerling, module..."
              className="absolute top-[7px] left-[17px] w-[430px] h-[25px] [font-family:'Poppins',Helvetica] font-normal text-[#00000099] placeholder:text-[#00000066] text-sm tracking-[-0.31px] leading-[21px]"
            />
            <button
              type="submit"
              aria-label="Zoeken"
              className="absolute top-[5px] left-[489px] w-[31px] h-[31px] flex aspect-[1] items-center justify-center"
            >
              <img
                className="flex-1 w-[22.53px]"
                alt="Vector"
                src="/img/vector-78.svg"
              />
            </button>
          </form>
          <img
            className="relative w-px h-[35px] object-cover"
            alt="Line"
            src="/img/line-101-4.svg"
          />
          <button
            type="button"
            className="relative w-[90px] h-6"
            aria-label="Modules openen"
          >
            <div className="absolute top-0 left-[22px] h-6 flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-black text-base text-center tracking-[-0.35px] leading-6 whitespace-nowrap">
              Modules
            </div>
            <div className="absolute top-1.5 left-0 w-3.5 h-3.5 aspect-[1] bg-[url(/img/vector-79.svg)] bg-[100%_100%]" />
          </button>
          <img
            className="relative w-px h-[35px] object-cover"
            alt="Line"
            src="/img/line-101-4.svg"
          />
          <button type="button" aria-label="Profiel" className="relative">
            <img
              className="relative w-10 h-10 object-cover"
              alt="Ellipse"
              src="/img/ellipse-1.svg"
            />
          </button>
        </div>
        <div className="absolute w-full h-[39.87%] top-[60.13%] left-0">
          <h1 className="absolute w-[17.09%] h-[85.71%] top-0 left-[42.67%] flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-black text-4xl text-center tracking-[-0.79px] leading-[54px] whitespace-nowrap">
            SLO Doelen
          </h1>
          <div className="absolute w-full h-[3.17%] top-[96.83%] left-0 bg-[#686868]" />
          <button
            type="button"
            className="absolute w-[4.42%] h-[33.33%] top-[47.62%] left-0 flex items-center [font-family:'Poppins',Helvetica] font-medium text-black text-sm tracking-[-0.31px] leading-[21px] whitespace-nowrap"
          >
            &lt; Terug
          </button>
        </div>
      </header>
      <aside className="fixed top-0 left-0 w-[206px] h-[1024px] flex bg-[#e0ffdb] rounded-[0px_20px_20px_0px] shadow-[0px_4px_4px_#00000040]">
        <div className="mt-[18px] w-44 h-[761px] ml-4 flex flex-col gap-[61.8px]">
          <div className="-ml-0.5 h-[206.23px] relative">
            <img
              className="absolute top-0 left-2 w-[164px] h-[163px] aspect-[1.01] object-cover"
              alt="Ojt logo"
              src="/img/ojt-logo-2-4.png"
            />
            <div className="absolute top-[163px] left-0 w-[178px] h-[43px] flex">
              <div className="flex items-center justify-center w-44 h-[43.23px] [font-family:'Poppins',Helvetica] font-bold text-black text-xl text-center tracking-[-0.44px] leading-[18.0px]">
                Atlas dashboard
              </div>
            </div>
          </div>
          <div className="ml-1.5 -mr-1.5 flex-1 max-h-[388px] flex flex-col gap-20">
            <nav
              className="flex-1 max-h-[180px] flex flex-col gap-5"
              aria-label="Navigatie"
            >
              <div className="flex items-center flex-1 max-h-4 [font-family:'Poppins',Helvetica] font-bold text-black text-base tracking-[-0.35px] leading-6 whitespace-nowrap">
                Navigatie
              </div>
              <div className="w-[167px] h-[184px] flex flex-col">
                {navItems.map((item, index) => (
                  <button
                    key={item.label}
                    type="button"
                    className={`w-[167px] h-6 gap-2.5 relative flex items-center text-left ${
                      index === 0
                        ? "flex flex-1 max-h-6 relative mt-[-12.0px]"
                        : index === 1
                          ? "flex-1 max-h-6 mt-[9px]"
                          : index === 2
                            ? "flex flex-1 max-h-6 relative mt-2.5"
                            : index === 3
                              ? "flex flex-1 max-h-6 relative mt-2.5"
                              : "flex flex-1 max-h-6 relative mt-3"
                    }`}
                  >
                    {item.type === "custom" && (
                      <div className="relative w-6 h-6 aspect-[1]">
                        <div className="relative w-[78.45%] h-[90.18%] top-[9.05%] left-[12.50%] flex">
                          <img
                            className="flex-1 w-[18.83px]"
                            alt="Vector"
                            src={item.icon}
                          />
                        </div>
                      </div>
                    )}
                    {item.type === "img" && (
                      <div className="relative w-6 h-6 aspect-[1]">
                        <img
                          className={`absolute ${
                            item.label === "T-Meting"
                              ? "w-full h-[91.20%] top-[8.80%] left-0"
                              : item.label === "Modules"
                                ? "w-[94.17%] h-[94.48%] top-[5.52%] left-[5.83%]"
                                : "w-[89.28%] h-[89.29%] top-[10.71%] left-[10.72%]"
                          }`}
                          alt="Vector"
                          src={item.icon}
                        />
                      </div>
                    )}
                    {item.type === "resultaten" && (
                      <div className="relative w-6 h-6 aspect-[1]">
                        <img
                          className="absolute w-[31.25%] h-[31.25%] top-[68.75%] left-[68.75%]"
                          alt="Vector"
                          src="/img/vector-84.svg"
                        />
                        <img
                          className="absolute w-[68.75%] h-[59.38%] top-[40.62%] left-[31.25%]"
                          alt="Vector"
                          src="/img/vector-85.svg"
                        />
                        <img
                          className="absolute w-[84.38%] h-[93.75%] top-[6.25%] left-[15.62%]"
                          alt="Vector"
                          src="/img/vector-86.svg"
                        />
                      </div>
                    )}
                    <div className="relative flex items-center w-[137px] h-4 mr-[-4.00px] [font-family:'Poppins',Helvetica] font-normal text-black text-base tracking-[-0.35px] leading-6 whitespace-nowrap">
                      {item.label}
                    </div>
                  </button>
                ))}
              </div>
            </nav>
            <section
              className="w-44 h-32 flex flex-col gap-4"
              aria-label="Instellingen"
            >
              <div className="flex items-center w-[94px] h-6 -mt-1 [font-family:'Poppins',Helvetica] font-bold text-black text-base tracking-[-0.35px] leading-6 whitespace-nowrap">
                Instellingen
              </div>
              <div className="h-[92px] flex flex-col">
                {settingsItems.map((item, index) => (
                  <button
                    key={item.label}
                    type="button"
                    className={`flex gap-2.5 text-left ${
                      index === 0
                        ? "w-44 mt-[-14.0px]"
                        : index === 1
                          ? "w-44 mt-[7px]"
                          : "w-[215px] mt-[18px]"
                    }`}
                  >
                    {item.type === "img" && (
                      <img
                        className={index === 0 ? "w-5 h-5" : "w-5 h-5"}
                        alt="Vector"
                        src={item.icon}
                      />
                    )}
                    {item.type === "help" && (
                      <div className="mt-[5px] w-5 h-5 relative aspect-[1]">
                        <img
                          className="absolute w-[53.48%] h-[94.44%] top-[5.56%] left-[46.52%]"
                          alt="Vector"
                          src="/img/vector-88.svg"
                        />
                        <img
                          className="absolute w-[70.47%] h-[66.91%] top-[33.09%] left-[29.53%]"
                          alt="Vector"
                          src="/img/vector-89.svg"
                        />
                      </div>
                    )}
                    <div
                      className={`flex items-center [font-family:'Poppins',Helvetica] font-normal text-black text-base tracking-[-0.35px] leading-6 whitespace-nowrap ${
                        index === 0
                          ? "-mt-0.5 w-[88px] h-6"
                          : index === 1
                            ? "mt-[3px] w-[35px] h-6"
                            : "-mt-0.5 w-28 h-6"
                      }`}
                    >
                      {item.label}
                    </div>
                  </button>
                ))}
              </div>
            </section>
          </div>
        </div>
      </aside>
    </main>
  );
};
