import { Link, useLocation } from "react-router-dom";

type NavItem = {
  label: string;
  to?: string;
  icon: JSX.Element;
};

export const SideNavSection = (): JSX.Element => {
  const location = useLocation();

  const mainMenuItems: NavItem[] = [
    {
      label: "Main menu",
      icon: (
        <div className="relative w-6 h-6 aspect-[1]">
          <img
            className="absolute w-[83.33%] h-[85.42%] top-[14.58%] left-[16.67%]"
            alt=""
            src="/img/vector-187.svg"
          />
        </div>
      ),
    },
    {
      label: "Klassen",
      to: "/u40u45klassenu41-informatie-scherm-u61-resulaten",
      icon: (
        <div className="relative w-6 h-6 aspect-[1]">
          <div className="relative w-[78.45%] h-[90.18%] top-[9.05%] left-[12.50%] flex">
            <img
              className="flex-1 w-[18.83px]"
              alt=""
              src="/img/vector-188.svg"
            />
          </div>
        </div>
      ),
    },
    {
      label: "Modules",
      to: "/module-scherm",
      icon: (
        <div className="relative w-6 h-6 aspect-[1]">
          <img
            className="absolute w-[94.17%] h-[94.48%] top-[5.52%] left-[5.83%]"
            alt=""
            src="/img/vector-189.svg"
          />
        </div>
      ),
    },
    {
      label: "Leerlingen",
      to: "/leerling-scherm",
      icon: (
        <div className="relative w-6 h-6 aspect-[1]">
          <img
            className="absolute w-[95.83%] h-[79.17%] top-[20.83%] left-[4.17%]"
            alt=""
            src="/img/vector-190.svg"
          />
        </div>
      ),
    },
  ];

  const settingsItems: NavItem[] = [
    {
      label: "Instellingen",
      icon: (
        <img className="relative w-5 h-5" alt="" src="/img/vector-191.svg" />
      ),
    },
    {
      label: "Help",
      to: "/help-en-support-scherm",
      icon: (
        <div className="relative w-5 h-5 aspect-[1]">
          <img
            className="absolute w-[53.47%] h-[94.44%] top-[5.56%] left-[46.53%]"
            alt=""
            src="/img/vector-192.svg"
          />
          <img
            className="absolute w-[70.46%] h-[66.91%] top-[33.09%] left-[29.54%]"
            alt=""
            src="/img/vector-193.svg"
          />
        </div>
      ),
    },
  ];

  const renderItem = (item: NavItem, index: number) => {
    const content = (
      <>
        {item.icon}
        <div className="relative flex items-center w-[137px] h-4 mr-[-4.00px] [font-family:'Poppins',Helvetica] font-normal text-black text-xl tracking-[-0.44px] leading-[30px] whitespace-nowrap">
          {item.label}
        </div>
      </>
    );

    if (!item.to) {
      return (
        <div
          key={`${item.label}-${index}`}
          className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]"
          aria-current={
            item.label === "Main menu" || item.label === "Instellingen"
              ? "page"
              : undefined
          }
        >
          {content}
        </div>
      );
    }

    const isActive = location.pathname === item.to;

    return (
      <Link
        key={`${item.label}-${index}`}
        className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black rounded-sm"
        to={item.to}
        aria-current={isActive ? "page" : undefined}
      >
        {content}
      </Link>
    );
  };

  return (
    <aside
      className="fixed top-0 left-0 w-[276px] h-[1024px] bg-[#e0ffdb] rounded-[0px_20px_20px_0px] shadow-[0px_4px_4px_#00000080]"
      aria-label="Zij navigatie"
    >
      <div className="flex flex-col w-[216px] h-[479px] items-start gap-10 absolute top-[22px] left-[30px]">
        <div className="relative w-[216px] h-[284px]">
          <img
            className="absolute top-0 left-4 w-[184px] h-[182px] aspect-[1.01] object-cover"
            alt="OJT logo"
            src="/img/ojt-logo-2-8.png"
          />
          <div className="absolute top-[222px] left-0 w-[218px] h-[62px] flex flex-col gap-4">
            <div className="flex items-center justify-center w-[216px] h-11 [font-family:'Poppins',Helvetica] font-bold text-black text-[32px] text-center tracking-[-0.70px] leading-[28.8px]">
              Kracht Atlas dashboard
            </div>
            <img
              className="-ml-px w-[218px] h-[3px]"
              alt=""
              src="/img/line-1-7.svg"
            />
          </div>
        </div>
        <div className="flex flex-col items-start gap-20 relative self-stretch w-full flex-[0_0_auto] mb-[-197.00px]">
          <nav
            className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]"
            aria-label="Hoofdmenu"
          >
            <div className="relative flex items-center self-stretch h-4 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-bold text-black text-xl tracking-[-0.44px] leading-[30px] whitespace-nowrap">
              Main menu
            </div>
            <div className="flex flex-col w-[167px] items-start gap-4 relative flex-[0_0_auto]">
              {mainMenuItems.map(renderItem)}
            </div>
          </nav>
          <nav
            className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]"
            aria-label="Instellingen"
          >
            <div className="relative flex items-center self-stretch h-4 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-bold text-black text-xl tracking-[-0.44px] leading-[30px] whitespace-nowrap">
              Instellingen
            </div>
            <div className="flex flex-col w-44 items-start gap-4 relative flex-[0_0_auto]">
              {settingsItems.map(renderItem)}
            </div>
          </nav>
        </div>
      </div>
      <div
        className="absolute w-[9.83%] h-[2.32%] top-[49.78%] left-[78.10%] rotate-[-90.00deg]"
        aria-hidden="true"
      >
        <img
          className="absolute w-[63.87%] h-[73.02%] top-[26.98%] left-[36.13%] rotate-[90.00deg]"
          alt=""
          src="/img/vector-194.svg"
        />
        <img
          className="absolute w-[79.35%] h-[128.75%] top-[-28.75%] left-[20.65%] rotate-[90.00deg]"
          alt=""
          src="/img/vector-195.svg"
        />
      </div>
    </aside>
  );
};
