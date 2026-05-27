const navigationItems = [
  {
    label: "Klassen",
    icon: "https://c.animaapp.com/aWHY8P00/img/mingcute-classify-2-fill.svg",
    alt: "Mingcute classify",
    active: false,
  },
  {
    label: "T-Meting",
    icon: "https://c.animaapp.com/aWHY8P00/img/gis-measure.svg",
    alt: "Gis measure",
    active: false,
  },
  {
    label: "Modules",
    icon: "https://c.animaapp.com/aWHY8P00/img/clarity-blocks-group-solid.svg",
    alt: "Clarity blocks group",
    active: true,
  },
  {
    label: "Agenda",
    icon: "https://c.animaapp.com/aWHY8P00/img/fluent-calendar-agenda-28-filled.svg",
    alt: "Fluent calendar",
    active: false,
  },
  {
    label: "Resultaten",
    icon: "https://c.animaapp.com/aWHY8P00/img/carbon-result-new.svg",
    alt: "Carbon result new",
    active: false,
  },
];

const settingsItems = [
  {
    label: "Instellingen",
    icon: "https://c.animaapp.com/aWHY8P00/img/vector-4.svg",
    alt: "Vector",
    iconClassName: "w-5 h-5",
    wrapperClassName: "w-44 mt-[-14.0px] flex gap-2.5",
    labelClassName:
      "flex items-center -mt-0.5 w-[88px] h-6 [font-family:'Poppins',Helvetica] font-normal text-black text-base tracking-[-0.35px] leading-6 whitespace-nowrap",
  },
  {
    label: "Help",
    icon: "https://c.animaapp.com/aWHY8P00/img/clarity-help-info-solid.svg",
    alt: "Clarity help info",
    iconClassName: "mt-[5px] w-5 h-5 aspect-[1]",
    wrapperClassName: "w-44 mt-[7px] flex gap-2.5",
    labelClassName:
      "flex items-center mt-[3px] w-[35px] h-6 [font-family:'Poppins',Helvetica] font-normal text-black text-base tracking-[-0.35px] leading-6 whitespace-nowrap",
  },
  {
    label: "Balk inklappen",
    icon: "https://c.animaapp.com/aWHY8P00/img/typcn-arrow-back-outline.svg",
    alt: "Typcn arrow back",
    iconClassName: "w-5 h-5 aspect-[1]",
    wrapperClassName: "w-[215px] mt-[18px] flex gap-2.5",
    labelClassName:
      "flex items-center -mt-0.5 w-28 h-6 [font-family:'Poppins',Helvetica] font-normal text-black text-base tracking-[-0.35px] leading-6 whitespace-nowrap",
  },
];

export const DashboardSidebarNavigationSection = (): JSX.Element => {
  return (
    <aside
      aria-label="Dashboard navigatie"
      className="fixed top-0 left-0 flex h-screen w-[206px] rounded-[0px_20px_20px_0px] bg-[#e0ffdb] shadow-[0px_4px_4px_#00000040]"
    >
      <div className="ml-4 mt-[18px] flex h-[761px] w-44 flex-col gap-[61.8px]">
        <div className="relative -ml-0.5 h-[206.23px]">
          <img
            className="absolute left-2 top-4 h-[163px] w-[164px] aspect-[1.01] object-cover"
            alt="Ojt logo"
            src="https://c.animaapp.com/aWHY8P00/img/ojt-logo-2@2x.png"
          />
          <div className="absolute left-0 top-[163px] flex h-[43px] w-[178px]">
            <div className="flex h-[43.23px] w-44 items-center justify-center text-center [font-family:'Poppins',Helvetica] text-xl font-bold leading-[18.0px] tracking-[-0.44px] text-black">
              Atlas dashboard
            </div>
          </div>
        </div>
        <div className="-mr-1.5 ml-1.5 flex max-h-[388px] flex-1 flex-col gap-20">
          <section
            className="flex max-h-[180px] flex-1 flex-col gap-5"
            aria-labelledby="sidebar-navigation-heading"
          >
            <h2
              id="sidebar-navigation-heading"
              className="flex max-h-4 flex-1 items-center whitespace-nowrap [font-family:'Poppins',Helvetica] text-base font-bold leading-6 tracking-[-0.35px] text-black"
            >
              Navigatie
            </h2>
            <nav aria-label="Hoofdnavigatie" className="h-[184px] w-[167px]">
              <ul className="flex flex-col">
                {navigationItems.map((item, index) => {
                  const marginTopClassName =
                    index === 0
                      ? "mt-[-12.0px]"
                      : index === 1
                        ? "mt-[9px]"
                        : index === 4
                          ? "mt-3"
                          : "mt-2.5";

                  return (
                    <li
                      key={item.label}
                      className={`relative flex h-6 w-[167px] max-h-6 flex-1 items-center gap-2.5 ${marginTopClassName}`}
                    >
                      <a
                        href="#"
                        aria-current={item.active ? "page" : undefined}
                        className="flex w-full items-center gap-2.5"
                      >
                        <img
                          className="relative h-6 w-6 aspect-[1]"
                          alt={item.alt}
                          src={item.icon}
                        />
                        <span
                          className={`relative mr-[-4.00px] flex h-4 w-[137px] items-center whitespace-nowrap [font-family:'Poppins',Helvetica] text-base font-normal leading-6 tracking-[-0.35px] ${
                            item.active ? "text-[#4cb04f]" : "text-black"
                          }`}
                        >
                          {item.label}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </section>
          <section
            className="flex h-32 w-44 flex-col gap-4"
            aria-labelledby="sidebar-settings-heading"
          >
            <h2
              id="sidebar-settings-heading"
              className="-mt-1 flex h-6 w-[94px] items-center whitespace-nowrap [font-family:'Poppins',Helvetica] text-base font-bold leading-6 tracking-[-0.35px] text-black"
            >
              Instellingen
            </h2>
            <nav aria-label="Instellingen" className="flex h-[92px] flex-col">
              {settingsItems.map((item) => (
                <a key={item.label} href="#" className={item.wrapperClassName}>
                  <img
                    className={item.iconClassName}
                    alt={item.alt}
                    src={item.icon}
                  />
                  <span className={item.labelClassName}>{item.label}</span>
                </a>
              ))}
            </nav>
          </section>
        </div>
      </div>
    </aside>
  );
};
