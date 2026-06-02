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

export const Linkernavigatie = (): JSX.Element => {
  return (
    <aside
      className="fixed top-0 left-0 w-[212px] h-[1024px] rounded-[0px_20px_20px_0px] shadow-[0px_4px_4px_#00000040] z-50"
      aria-label="Zijbalk navigatie"
    >
      <div className="absolute top-0 left-0 w-full h-[1024px] bg-[#e0ffdb] rounded-[0px_20px_20px_0px]" />
      <div className="absolute top-[18px] left-4 w-44 h-[761px] flex flex-col gap-[61.8px]">
        <div className="-ml-0.5 h-[206.23px] relative">
          <img
            className="absolute top-0 left-2 w-[164px] h-[163px] aspect-[1.01] object-cover"
            alt="OJT logo"
            src="/img/ojt-logo-2.png"
          />
          <div className="absolute top-[163px] left-0 w-[178px] h-[43px] flex">
            <div className="flex items-center justify-center w-44 h-[43.23px] [font-family:'Poppins',Helvetica] font-bold text-black text-xl text-center tracking-[-0.44px] leading-[18.0px]">
              Atlas dashboard
            </div>
          </div>
        </div>
        <div className="ml-1.5 -mr-1.5 flex-1 max-h-[388px] flex flex-col gap-20">
          <nav className="flex-1 max-h-[180px] flex flex-col gap-5" aria-label="Navigatie">
            <div className="flex items-center flex-1 max-h-4 [font-family:'Poppins',Helvetica] font-bold text-black text-base tracking-[-0.35px] leading-6 whitespace-nowrap">
              Navigatie
            </div>
            <div className="w-[167px] h-[184px] flex flex-col">
              {navigationItems.map((item, index) => (
                <button
                  key={item.label}
                  type="button"
                  className={`flex flex-1 max-h-6 relative w-[167px] h-6 items-center gap-2.5 cursor-pointer ${
                    index === 0
                      ? "mt-[-12.0px]"
                      : index === 1
                      ? "mt-[9px]"
                      : index === 2
                      ? "mt-2.5"
                      : index === 3
                      ? "mt-2.5"
                      : "mt-3"
                  }`}
                  aria-label={item.label}
                >
                  {item.icon}
                  <div className="w-[137px] h-4 mr-[-4.00px] [font-family:'Poppins',Helvetica] font-normal text-black text-base tracking-[-0.35px] leading-6 whitespace-nowrap relative flex items-center">
                    {item.label}
                  </div>
                </button>
              ))}
            </div>
          </nav>
          <section className="w-44 h-32 flex flex-col gap-4" aria-label="Instellingen">
            <div className="flex items-center w-[94px] h-6 -mt-1 [font-family:'Poppins',Helvetica] font-bold text-black text-base tracking-[-0.35px] leading-6 whitespace-nowrap">
              Instellingen
            </div>
            <div className="h-[92px] flex flex-col">
              {settingsItems.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className={`${item.rowClassName} cursor-pointer text-left`}
                  aria-label={item.label}
                >
                  {item.icon}
                  <div className={item.labelClassName}>{item.label}</div>
                </button>
              ))}
            </div>
          </section>
        </div>
      </div>
    </aside>
  );
};
