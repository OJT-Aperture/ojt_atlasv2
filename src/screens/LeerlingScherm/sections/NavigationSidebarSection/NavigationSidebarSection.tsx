const navigationItems = [
  {
    label: "Klassen",
    icon: "https://c.animaapp.com/WMT0Xqbg/img/mingcute-classify-2-fill.svg",
    alt: "Mingcute classify",
    active: false,
    marginClassName: "mt-[-12.0px]",
  },
  {
    label: "T-Meting",
    icon: "https://c.animaapp.com/WMT0Xqbg/img/gis-measure.svg",
    alt: "Gis measure",
    active: false,
    marginClassName: "mt-[9px]",
  },
  {
    label: "Modules",
    icon: "https://c.animaapp.com/WMT0Xqbg/img/clarity-blocks-group-solid.svg",
    alt: "Clarity blocks group",
    active: false,
    marginClassName: "mt-2.5",
  },
  {
    label: "Agenda",
    icon: "https://c.animaapp.com/WMT0Xqbg/img/fluent-calendar-agenda-28-filled.svg",
    alt: "Fluent calendar",
    active: false,
    marginClassName: "mt-2.5",
  },
  {
    label: "Resultaten",
    icon: "https://c.animaapp.com/WMT0Xqbg/img/carbon-result-new.svg",
    alt: "Carbon result new",
    active: true,
    marginClassName: "mt-3",
  },
];

const settingsItems = [
  {
    label: "Instellingen",
    icon: "https://c.animaapp.com/WMT0Xqbg/img/vector-3.svg",
    alt: "Vector",
    rowClassName: "mt-[-14.0px]",
    iconClassName: "w-5 h-5",
    textClassName: "-mt-0.5 w-[88px] h-6",
  },
  {
    label: "Help",
    icon: "https://c.animaapp.com/WMT0Xqbg/img/clarity-help-info-solid.svg",
    alt: "Clarity help info",
    rowClassName: "mt-[7px]",
    iconClassName: "mt-[5px] w-5 h-5 aspect-[1]",
    textClassName: "mt-[3px] w-[35px] h-6",
  },
  {
    label: "Balk inklappen",
    icon: "https://c.animaapp.com/WMT0Xqbg/img/typcn-arrow-back-outline.svg",
    alt: "Typcn arrow back",
    rowClassName: "mt-[18px] w-[215px]",
    iconClassName: "w-5 h-5 aspect-[1]",
    textClassName: "-mt-0.5 w-28 h-6",
  },
];

export const NavigationSidebarSection = (): JSX.Element => {
  return (
    <aside
      aria-label="Zijbalk navigatie"
      className="fixed top-0 left-0 flex h-[1024px] w-[206px] rounded-[0px_20px_20px_0px] bg-[#e0ffdb] shadow-[0px_4px_4px_#00000040]"
    >
      <div className="ml-4 mt-[18px] flex h-[761px] w-44 flex-col gap-[61.8px]">
        <div className="relative -ml-0.5 h-[206.23px]">
          <img
            className="absolute left-2 top-0 h-[163px] w-[164px] aspect-[1.01] object-cover"
            alt="Ojt logo"
            src="https://c.animaapp.com/WMT0Xqbg/img/ojt-logo-2@2x.png"
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
            aria-labelledby="navigation-sidebar-heading"
          >
            <h2
              id="navigation-sidebar-heading"
              className="flex max-h-4 flex-1 items-center whitespace-nowrap [font-family:'Poppins',Helvetica] text-base font-bold leading-6 tracking-[-0.35px] text-black"
            >
              Navigatie
            </h2>
            <nav
              aria-label="Hoofdnavigatie"
              className="flex h-[184px] w-[167px] flex-col"
            >
              {navigationItems.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  aria-current={item.active ? "page" : undefined}
                  className={`relative flex h-6 w-[167px] flex-1 max-h-6 items-center gap-2.5 text-left ${item.marginClassName}`}
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
                </button>
              ))}
            </nav>
          </section>
          <section
            className="flex h-32 w-44 flex-col gap-4"
            aria-labelledby="settings-sidebar-heading"
          >
            <h2
              id="settings-sidebar-heading"
              className="-mt-1 flex h-6 w-[94px] items-center whitespace-nowrap [font-family:'Poppins',Helvetica] text-base font-bold leading-6 tracking-[-0.35px] text-black"
            >
              Instellingen
            </h2>
            <div
              className="flex h-[92px] flex-col"
              role="group"
              aria-label="Instellingen opties"
            >
              {settingsItems.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className={`flex gap-2.5 text-left ${item.rowClassName}`}
                >
                  <img
                    className={item.iconClassName}
                    alt={item.alt}
                    src={item.icon}
                  />
                  <span
                    className={`flex items-center whitespace-nowrap [font-family:'Poppins',Helvetica] text-base font-normal leading-6 tracking-[-0.35px] text-black ${item.textClassName}`}
                  >
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </section>
        </div>
      </div>
    </aside>
  );
};
