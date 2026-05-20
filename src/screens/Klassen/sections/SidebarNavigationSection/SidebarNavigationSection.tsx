import React from "react";
import { Link, useLocation } from "react-router-dom";

type NavItem = {
  label: string;
  to?: string;
  icon: React.ReactNode;
  active?: boolean;
};

type SettingsItem = {
  label: string;
  to?: string;
  icon: React.ReactNode;
};

const DashboardIcon = () => (
  <div className="relative w-6 h-6 aspect-[1]" aria-hidden="true">
    <div className="relative w-[78.45%] h-[90.18%] top-[9.05%] left-[12.50%]">
      <img
        className="absolute w-[51.80%] h-[3.10%] top-[96.90%] left-[48.20%]"
        alt=""
        src="/img/vector-3.svg"
      />
      <img
        className="absolute w-full h-full top-0 left-0"
        alt=""
        src="/img/vector-4.svg"
      />
    </div>
  </div>
);

const TMetingIcon = () => (
  <div className="relative w-6 h-6 aspect-[1]" aria-hidden="true">
    <img
      className="absolute w-full h-[91.20%] top-[8.80%] left-0"
      alt=""
      src="/img/vector-5.svg"
    />
  </div>
);

const ModulesIcon = () => (
  <div className="relative w-6 h-6 aspect-[1]" aria-hidden="true">
    <img
      className="absolute w-[94.17%] h-[94.48%] top-[5.52%] left-[5.83%]"
      alt=""
      src="/img/vector-6.svg"
    />
  </div>
);

const AgendaIcon = () => (
  <div className="relative w-6 h-6 aspect-[1]" aria-hidden="true">
    <img
      className="absolute w-[89.29%] h-[89.29%] top-[10.71%] left-[10.71%]"
      alt=""
      src="/img/vector-7.svg"
    />
  </div>
);

const ResultatenIcon = () => (
  <div className="relative w-6 h-6 aspect-[1]" aria-hidden="true">
    <img
      className="absolute w-[31.25%] h-[31.25%] top-[68.75%] left-[68.75%]"
      alt=""
      src="/img/vector-8.svg"
    />
    <img
      className="absolute w-[68.75%] h-[59.38%] top-[40.62%] left-[31.25%]"
      alt=""
      src="/img/vector-9.svg"
    />
    <img
      className="absolute w-[84.38%] h-[93.75%] top-[6.25%] left-[15.62%]"
      alt=""
      src="/img/vector-10.svg"
    />
  </div>
);

const SettingsIcon = () => (
  <img className="w-5 h-5" alt="" src="/img/vector-11.svg" aria-hidden="true" />
);

const HelpIcon = () => (
  <div className="mt-[5px] w-5 h-5 relative aspect-[1]" aria-hidden="true">
    <img
      className="absolute w-[53.47%] h-[94.44%] top-[5.56%] left-[46.53%]"
      alt=""
      src="/img/vector-12.svg"
    />
    <img
      className="absolute w-[70.46%] h-[66.91%] top-[33.09%] left-[29.54%]"
      alt=""
      src="/img/vector-13.svg"
    />
  </div>
);

const CollapseIcon = () => (
  <div className="w-5 h-5 flex aspect-[1]" aria-hidden="true">
    <img className="flex-1 w-[15px]" alt="" src="/img/vector-14.svg" />
  </div>
);

export const SidebarNavigationSection = (): JSX.Element => {
  const location = useLocation();

  const navigationItems: NavItem[] = [
    {
      label: "Klassen",
      to: "/klassen",
      icon: <DashboardIcon />,
      active: location.pathname === "/klassen",
    },
    {
      label: "T-Meting",
      icon: <TMetingIcon />,
    },
    {
      label: "Modules",
      icon: <ModulesIcon />,
    },
    {
      label: "Agenda",
      icon: <AgendaIcon />,
    },
    {
      label: "Resultaten",
      icon: <ResultatenIcon />,
    },
  ];

  const settingsItems: SettingsItem[] = [
    {
      label: "Instellingen",
      icon: <SettingsIcon />,
    },
    {
      label: "Help",
      icon: <HelpIcon />,
    },
    {
      label: "Balk inklappen",
      icon: <CollapseIcon />,
    },
  ];

  return (
    <aside
      className="fixed top-0 left-0 z-[6] flex h-[1024px] w-[206px] rounded-[0px_20px_20px_0px] bg-[#e0ffdb] shadow-[0px_4px_4px_#00000040]"
      aria-label="Zijbalk navigatie"
    >
      <div className="ml-4 mt-[18px] flex h-[761px] w-44 flex-col gap-[61.8px]">
        <div className="-ml-0.5 relative h-[206.23px]">
          <Link to="/klassen" aria-label="Ga naar Atlas dashboard">
            <img
              className="absolute top-0 left-2 block h-[163px] w-[164px] aspect-[1.01] object-cover"
              alt="OJT logo"
              src="/img/ojt-logo-2.png"
            />
          </Link>
          <div className="absolute top-[163px] left-0 flex h-[43px] w-[178px]">
            <Link
              className="flex h-[43.23px] w-44 items-center justify-center text-center [font-family:'Poppins',Helvetica] text-xl font-bold leading-[18.0px] tracking-[-0.44px] text-black"
              to="/klassen"
            >
              Atlas dashboard
            </Link>
          </div>
        </div>
        <div className="ml-1.5 -mr-1.5 flex max-h-[388px] flex-1 flex-col gap-20">
          <nav
            className="flex max-h-[180px] flex-1 flex-col gap-5"
            aria-label="Hoofdnavigatie"
          >
            <h2 className="flex flex-1 items-center max-h-4 whitespace-nowrap [font-family:'Poppins',Helvetica] text-base font-bold leading-6 tracking-[-0.35px] text-black">
              Navigatie
            </h2>
            <div className="flex h-[184px] w-[167px] flex-col">
              {navigationItems.map((item, index) => {
                const marginClass =
                  index === 0
                    ? "mt-[-12.0px]"
                    : index === 1
                      ? "mt-[9px]"
                      : index === 2 || index === 3
                        ? "mt-2.5"
                        : "mt-3";

                const itemContent = (
                  <>
                    {item.icon}
                    <div
                      className={`relative mr-[-4.00px] flex h-4 w-[137px] items-center whitespace-nowrap [font-family:'Poppins',Helvetica] text-base font-normal leading-6 tracking-[-0.35px] ${
                        item.active ? "text-[#4cb04f]" : "text-black"
                      }`}
                    >
                      {item.label}
                    </div>
                  </>
                );

                if (item.to) {
                  return (
                    <Link
                      key={item.label}
                      className={`relative flex h-6 w-[167px] flex-1 max-h-6 items-center gap-2.5 ${marginClass}`}
                      to={item.to}
                      aria-current={item.active ? "page" : undefined}
                    >
                      {itemContent}
                    </Link>
                  );
                }

                return (
                  <div
                    key={item.label}
                    className={`relative flex h-6 w-[167px] flex-1 max-h-6 items-center gap-2.5 ${marginClass}`}
                  >
                    {itemContent}
                  </div>
                );
              })}
            </div>
          </nav>
          <section
            className="flex h-32 w-44 flex-col gap-4"
            aria-labelledby="sidebar-settings-heading"
          >
            <h2
              id="sidebar-settings-heading"
              className="flex h-6 w-[94px] items-center -mt-1 whitespace-nowrap [font-family:'Poppins',Helvetica] text-base font-bold leading-6 tracking-[-0.35px] text-black"
            >
              Instellingen
            </h2>
            <div className="flex h-[92px] flex-col">
              {settingsItems.map((item, index) => {
                if (index === 0) {
                  return (
                    <div
                      key={item.label}
                      className="mt-[-14.0px] flex w-44 gap-2.5"
                    >
                      {item.icon}
                      <div className="flex h-6 w-[88px] items-center -mt-0.5 whitespace-nowrap [font-family:'Poppins',Helvetica] text-base font-normal leading-6 tracking-[-0.35px] text-black">
                        {item.label}
                      </div>
                    </div>
                  );
                }

                if (index === 1) {
                  return (
                    <div
                      key={item.label}
                      className="mt-[7px] flex w-44 gap-2.5"
                    >
                      {item.icon}
                      <div className="mt-[3px] flex h-6 w-[35px] items-center whitespace-nowrap [font-family:'Poppins',Helvetica] text-base font-normal leading-6 tracking-[-0.35px] text-black">
                        {item.label}
                      </div>
                    </div>
                  );
                }

                return (
                  <div
                    key={item.label}
                    className="mt-[18px] flex w-[215px] gap-2.5"
                  >
                    {item.icon}
                    <div className="flex h-6 w-28 items-center -mt-0.5 whitespace-nowrap [font-family:'Poppins',Helvetica] text-base font-normal leading-6 tracking-[-0.35px] text-black">
                      {item.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </aside>
  );
};
