import { Link } from "react-router-dom";

type NavigationItem = {
  label: string;
  icon: string;
  alt: string;
  to?: string;
  active?: boolean;
};

type SettingsItem = {
  label: string;
  icon: string;
  alt: string;
};

const navigationItems: NavigationItem[] = [
  {
    label: "Klassen",
    icon: "https://c.animaapp.com/tNip9Jvr/img/mingcute-classify-2-fill.svg",
    alt: "Mingcute classify",
  },
  {
    label: "T-Meting",
    icon: "https://c.animaapp.com/tNip9Jvr/img/gis-measure.svg",
    alt: "Gis measure",
    to: "/t-u45-meting",
    active: true,
  },
  {
    label: "Modules",
    icon: "https://c.animaapp.com/tNip9Jvr/img/clarity-blocks-group-solid.svg",
    alt: "Clarity blocks group",
  },
  {
    label: "Agenda",
    icon: "https://c.animaapp.com/tNip9Jvr/img/fluent-calendar-agenda-28-filled.svg",
    alt: "Fluent calendar",
  },
  {
    label: "Resultaten",
    icon: "https://c.animaapp.com/tNip9Jvr/img/carbon-result-new-1.svg",
    alt: "Carbon result new",
  },
];

const settingsItems: SettingsItem[] = [
  {
    label: "Instellingen",
    icon: "https://c.animaapp.com/tNip9Jvr/img/vector-4.svg",
    alt: "Vector",
  },
  {
    label: "Help",
    icon: "https://c.animaapp.com/tNip9Jvr/img/clarity-help-info-solid.svg",
    alt: "Clarity help info",
  },
  {
    label: "Balk inklappen",
    icon: "https://c.animaapp.com/tNip9Jvr/img/typcn-arrow-back-outline.svg",
    alt: "Typcn arrow back",
  },
];

export const SidebarNavigationSection = (): JSX.Element => {
  return (
    <aside
      aria-label="Zijbalk navigatie"
      className="fixed top-0 left-0 flex h-[1024px] w-[206px] rounded-[0px_20px_20px_0px] bg-[#e0ffdb] shadow-[0px_4px_4px_#00000040]"
    >
      <div className="ml-4 mt-[18px] flex h-[761px] w-44 flex-col gap-[61.8px]">
        <div className="relative -ml-0.5 h-[206.23px]">
          <img
            className="absolute left-2 top-0 h-[163px] w-[164px] object-cover aspect-[1.01]"
            alt="Ojt logo"
            src="https://c.animaapp.com/tNip9Jvr/img/ojt-logo-2@2x.png"
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
              <ul className="flex h-full flex-col">
                {navigationItems.map((item, index) => {
                  const marginClass =
                    index === 0
                      ? "mt-[-12.0px]"
                      : index === 1
                        ? "mt-[9px]"
                        : index === 4
                          ? "mt-3"
                          : "mt-2.5";

                  const content = (
                    <>
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
                    </>
                  );

                  return (
                    <li
                      key={item.label}
                      className={`relative flex h-6 w-[167px] flex-1 max-h-6 items-center gap-2.5 ${marginClass}`}
                    >
                      {item.to ? (
                        <Link
                          to={item.to}
                          aria-current={item.active ? "page" : undefined}
                          className="relative flex h-6 w-[167px] items-center gap-2.5"
                        >
                          {content}
                        </Link>
                      ) : (
                        <div className="relative flex h-6 w-[167px] items-center gap-2.5">
                          {content}
                        </div>
                      )}
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
            <ul className="flex h-[92px] flex-col">
              {settingsItems.map((item, index) => {
                const rowClass =
                  index === 0
                    ? "mt-[-14.0px] w-44"
                    : index === 1
                      ? "mt-[7px] w-44"
                      : "mt-[18px] w-[215px]";

                const iconClass =
                  index === 0
                    ? "h-5 w-5"
                    : index === 1
                      ? "mt-[5px] h-5 w-5 aspect-[1]"
                      : "h-5 w-5 aspect-[1]";

                const labelClass =
                  index === 0
                    ? "-mt-0.5 h-6 w-[88px]"
                    : index === 1
                      ? "mt-[3px] h-6 w-[35px]"
                      : "-mt-0.5 h-6 w-28";

                return (
                  <li key={item.label} className={`${rowClass} flex gap-2.5`}>
                    <img className={iconClass} alt={item.alt} src={item.icon} />
                    <span
                      className={`flex items-center whitespace-nowrap [font-family:'Poppins',Helvetica] text-base font-normal leading-6 tracking-[-0.35px] text-black ${labelClass}`}
                    >
                      {item.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </div>
    </aside>
  );
};
