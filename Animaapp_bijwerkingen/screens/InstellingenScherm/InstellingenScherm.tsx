import React, { useId, useState } from "react";

type ToggleProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  className: string;
  ariaLabel: string;
};

const Toggle = ({ checked, onChange, className, ariaLabel }: ToggleProps) => {
  const id = useId();

  return (
    <label
      htmlFor={id}
      className={`absolute inline-flex cursor-pointer items-center ${className}`}
    >
      <input
        id={id}
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        aria-label={ariaLabel}
      />
      <span
        className={`relative flex h-[13px] w-[37px] rounded-[13px] transition-colors ${
          checked ? "bg-[#74a2d1]" : "bg-[#919191]"
        }`}
      >
        <span
          className={`absolute top-0 h-[13px] w-[13.8px] rounded-[6.9px/6.5px] bg-white transition-transform ${
            checked ? "translate-x-[23px]" : "translate-x-0"
          }`}
        />
      </span>
    </label>
  );
};

export const InstellingenScherm = (): JSX.Element => {
  const [themeDark, setThemeDark] = useState(false);
  const [boomerMode, setBoomerMode] = useState(false);
  const [parentAccess, setParentAccess] = useState(false);
  const [notificationAlerts, setNotificationAlerts] = useState(false);
  const [privacyMode, setPrivacyMode] = useState(false);

  const planningSections = [
    {
      title: "Vandaag:",
      titleClass:
        "absolute top-[509px] left-[862px] w-[168px] h-9 flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-black text-2xl text-center tracking-[-0.53px] leading-9",
      items: [
        {
          text: "Module A oefening",
          textClass:
            "top-[557px] left-[838px] w-[299px] absolute h-[30px] flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-black text-xl text-center tracking-[-0.44px] leading-[30px]",
          dotClass:
            "absolute top-[567px] left-[878px] w-3 h-3 rounded-md bg-[#74a2d1]",
        },
        {
          text: "Module A afronden",
          textClass:
            "top-[606px] left-[870px] w-[236px] absolute h-[30px] flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-black text-xl text-center tracking-[-0.44px] leading-[30px]",
          dotClass:
            "absolute top-[615px] left-[878px] w-3 h-3 rounded-md bg-[#74a2d1]",
        },
      ],
    },
    {
      title: "Deze week:",
      titleClass:
        "absolute top-[673px] left-[868px] w-[168px] h-9 flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-black text-2xl text-center tracking-[-0.53px] leading-9",
      items: [
        {
          text: "Module B  oefening",
          textClass:
            "absolute top-[720px] left-[848px] w-[291px] h-[30px] flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-black text-xl text-center tracking-[-0.44px] leading-[30px]",
          dotClass:
            "absolute top-[729px] left-[881px] w-3 h-3 rounded-md bg-[#a2a2a2]",
        },
        {
          text: "Module B resultaten bekijken",
          textClass:
            "absolute top-[763px] left-[901px] w-[291px] h-[30px] flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-black text-xl text-center tracking-[-0.44px] leading-[30px]",
          dotClass:
            "absolute top-[772px] left-[881px] w-3 h-3 rounded-md bg-[#a2a2a2]",
        },
      ],
    },
    {
      title: "Volgende week:",
      titleClass:
        "absolute top-[851px] left-[875px] w-[219px] h-9 flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-black text-2xl text-center tracking-[-0.53px] leading-9",
      items: [
        {
          text: "Module C beginnen",
          textClass:
            "absolute top-[900px] left-[854px] w-[291px] h-[30px] flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-black text-xl text-center tracking-[-0.44px] leading-[30px]",
          dotClass:
            "absolute top-[909px] left-[883px] w-3 h-3 rounded-md bg-[#a2a2a2]",
        },
        {
          text: "Module C resultaten bekijken",
          textClass:
            "absolute top-[949px] left-[903px] w-[291px] h-[30px] flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-black text-xl text-center tracking-[-0.44px] leading-[30px]",
          dotClass:
            "absolute top-[958px] left-[883px] w-3 h-3 rounded-md bg-[#a2a2a2]",
        },
      ],
    },
  ];

  const navigationItems = [
    { label: "Klassen", icon: "/img/vector-80.svg", custom: false },
    { label: "T-Meting", icon: "/img/vector-81.svg", custom: true },
    { label: "Modules", icon: "/img/vector-82.svg", custom: true },
    { label: "Agenda", icon: "/img/vector-83.svg", custom: true },
    { label: "Resultaten", icon: null, custom: "resultaten" as const },
  ];

  return (
    <main
      className="bg-[#f6f7f8] w-full min-w-[1440px] min-h-[1158px] relative"
      data-model-id="1645:4555"
    >
      <footer className="absolute top-[1096px] left-0 flex h-[62px] w-[1440px] overflow-hidden rounded-sm bg-[#74a2d1] shadow-[0px_-6px_13px_#00000040]">
        <div className="ml-[766px] mt-1.5 flex w-[161px] gap-[13px]">
          <div className="mt-4 flex h-5 w-[75px] items-center [font-family:'Poppins',Helvetica] text-[13px] font-bold leading-[19.5px] tracking-[-0.29px] text-black whitespace-nowrap">
            Powered by
          </div>
          <img
            className="h-[51px] w-[71px] aspect-[1.4]"
            alt="Logo design"
            src="/img/logo-design-labs7-1-4.png"
          />
        </div>
      </footer>
      <section
        className="absolute left-[246px] top-[243px]"
        aria-labelledby="profiel-naam"
      >
        <img
          className="h-[200px] w-[200px]"
          alt="Profielfoto van Lisanne"
          src="/img/mask-group.png"
        />
        <h1
          id="profiel-naam"
          className="absolute left-[230px] top-[61px] flex h-[30px] w-[302px] items-center [font-family:'Poppins',Helvetica] text-2xl font-bold leading-9 tracking-[-0.53px] text-[#666666] whitespace-nowrap"
        >
          Lisanne
        </h1>
        <a
          className="absolute left-[230px] top-[89px] flex h-[30px] w-[337px] items-center [font-family:'Poppins',Helvetica] text-xl font-normal leading-[30px] tracking-[-0.44px] text-[#666666] underline whitespace-nowrap"
          href="mailto:LisanneMevrow@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          LisanneMevrow@gmail.com
        </a>
      </section>
      <button
        type="button"
        className="absolute left-[1213px] top-[383px] h-[46px] w-[187px] rounded-[20px] bg-[#74a2d1]"
        aria-label="Uitloggen"
      >
        <span className="absolute left-0 top-[21.74%] flex h-[52.17%] w-full items-center justify-center [font-family:'Poppins',Helvetica] text-base font-bold leading-6 tracking-[-0.35px] text-center text-white whitespace-nowrap">
          Uitloggen
        </span>
      </button>
      <section
        className="absolute left-[246px] top-[459px] h-[325px] w-[532px] rounded-[20px] bg-[#ebebeb]"
        aria-labelledby="dashboard-instellingen"
      />
      <img
        className="absolute left-[246px] top-[496px] h-px w-[532px] object-cover"
        alt="Vector"
        src="/img/vector-10-1.svg"
      />
      <img
        className="absolute left-[246px] top-[496px] h-px w-[532px] object-cover"
        alt="Vector"
        src="/img/vector-10-1.svg"
      />
      <section
        className="absolute left-[246px] top-[802px] h-[268px] w-[532px] rounded-[20px] bg-[#ebebeb]"
        aria-labelledby="account-instellingen"
      />
      <img
        className="absolute left-[246px] top-[840px] h-px w-[532px] object-cover"
        alt="Vector"
        src="/img/vector-10-1.svg"
      />
      <h2
        id="dashboard-instellingen"
        className="absolute left-[130px] top-[447px] flex h-[70px] w-[490px] items-center justify-center [font-family:'Poppins',Helvetica] text-xl font-bold leading-[30px] tracking-[-0.44px] text-center text-black"
      >
        Dashboard instellingen:
      </h2>
      <h2
        id="account-instellingen"
        className="absolute left-[258px] top-[807px] flex h-9 w-[416px] items-center [font-family:'Poppins',Helvetica] text-xl font-bold leading-[30px] tracking-[-0.44px] text-black whitespace-nowrap"
      >
        Account instelingen:
      </h2>
      <section
        className="absolute left-[869px] top-[456px] h-[608px] w-[525px] rounded-[20px] border-2 border-solid border-[#ebebeb99] bg-[#ebebeb]"
        aria-labelledby="planning"
      />
      <h2
        id="planning"
        className="absolute left-[886px] top-[457px] flex h-9 w-[265px] items-center justify-center [font-family:'Poppins',Helvetica] text-2xl font-bold leading-9 tracking-[-0.53px] text-center text-black"
      >
        Planning:
      </h2>
      {planningSections.map((section) => (
        <React.Fragment key={section.title}>
          <h3 className={section.titleClass}>{section.title}</h3>
          {section.items.map((item) => (
            <React.Fragment key={item.text}>
              <div className={item.dotClass} />
              <div className={item.textClass}>{item.text}</div>
            </React.Fragment>
          ))}
        </React.Fragment>
      ))}

      <img
        className="absolute left-[870px] top-[660px] h-px w-[527px] object-cover"
        alt="Vector"
        src="/img/vector-1-1.svg"
      />
      <img
        className="absolute left-[869px] top-[496px] h-px w-[525px] object-cover"
        alt="Vector"
        src="/img/vector-3-1.svg"
      />
      <img
        className="absolute left-[868px] top-[840px] h-px w-[532px] object-cover"
        alt="Vector"
        src="/img/vector-2-1.svg"
      />
      <div className="absolute left-[228px] top-[501px] flex h-[30px] w-[119px] items-center justify-center [font-family:'Poppins',Helvetica] text-base font-semibold leading-6 tracking-[-0.35px] text-center text-black">
        Thema:
      </div>
      <div className="absolute left-[185px] top-[507px] flex h-[63px] w-[179px] items-center justify-center [font-family:'Poppins',Helvetica] text-sm font-normal leading-[21px] tracking-[-0.31px] text-center text-[#6e6e6e]">
        Licht
      </div>
      <div className="absolute left-[269px] top-[507px] flex h-[63px] w-[179px] items-center justify-center [font-family:'Poppins',Helvetica] text-sm font-normal leading-[21px] tracking-[-0.31px] text-center text-[#6e6e6e]">
        Donker
      </div>
      <Toggle
        checked={themeDark}
        onChange={setThemeDark}
        className="top-[532px] left-[294px]"
        ariaLabel="Thema donker inschakelen"
      />
      <Toggle
        checked={boomerMode}
        onChange={setBoomerMode}
        className="top-[628px] left-[258px]"
        ariaLabel="Boomer modus inschakelen"
      />
      <Toggle
        checked={parentAccess}
        onChange={setParentAccess}
        className="top-[742px] left-64"
        ariaLabel="Toegang voor ouders inschakelen"
      />
      <Toggle
        checked={notificationAlerts}
        onChange={setNotificationAlerts}
        className="top-[875px] left-[258px]"
        ariaLabel="Notification alerts inschakelen"
      />
      <Toggle
        checked={privacyMode}
        onChange={setPrivacyMode}
        className="top-[991px] left-[258px]"
        ariaLabel="Privacy modus inschakelen"
      />
      <div className="absolute left-[195px] top-[845px] flex h-[30px] w-[265px] items-center justify-center [font-family:'Poppins',Helvetica] text-base font-semibold leading-6 tracking-[-0.35px] text-center text-black">
        Notification alerts:
      </div>
      <div className="absolute left-[235px] top-[918px] flex h-[30px] w-[164px] items-center justify-center [font-family:'Poppins',Helvetica] text-base font-semibold leading-6 tracking-[-0.35px] text-center text-black">
        Privacy modus:
      </div>
      <div className="absolute left-[257px] top-[912px] flex h-[103px] w-[193px] items-center [font-family:'Poppins',Helvetica] text-sm font-semibold leading-[21px] tracking-[-0.31px] text-[#818181]">
        Studentgegevens prive maken
      </div>
      <div className="absolute left-[179px] top-[558px] flex h-[30px] w-[278px] items-center justify-center [font-family:'Poppins',Helvetica] text-base font-semibold leading-6 tracking-[-0.35px] text-center text-black">
        Boomer modus
      </div>
      <p className="absolute left-[258px] top-[550px] flex h-[103px] w-[184px] items-center [font-family:'Poppins',Helvetica] text-sm font-semibold leading-[21px] tracking-[-0.31px] text-[#818181]">
        Grotere tekst en simpele weergave
      </p>
      <div className="absolute left-[258px] top-[645px] flex h-9 w-[212px] items-center [font-family:'Poppins',Helvetica] text-base font-semibold leading-6 tracking-[-0.35px] text-black">
        Toegang voor ouders:
      </div>
      <p className="absolute left-[258px] top-[652px] flex h-[103px] w-[184px] items-center [font-family:'Poppins',Helvetica] text-sm font-semibold leading-[21px] tracking-[-0.31px] text-[#818181]">
        Maak de resultaten van de leerlingen zichtbaar voor de ouders
      </p>
      <header className="absolute left-[247px] top-[18px] h-[158px] w-[1153px]">
        <div className="absolute left-[3.04%] top-0 flex h-[25.61%] w-[94.02%] items-center justify-center gap-10">
          <div className="relative h-5 w-[164px]">
            <div className="absolute left-0.5 top-0 flex h-5 w-5 aspect-[1]">
              <img
                className="w-[18px] flex-1"
                alt="Vector"
                src="/img/vector-77.svg"
              />
            </div>
            <div className="absolute left-8 -top-0.5 flex h-6 items-center justify-center [font-family:'Poppins',Helvetica] text-base font-medium leading-6 tracking-[-0.35px] text-center text-black whitespace-nowrap">
              Harenslyceum
            </div>
          </div>
          <img
            className="relative h-[35px] w-px object-cover"
            alt="Line"
            src="/img/line-101-4.svg"
          />
          <form
            className="relative h-[40.46px] w-[534px] shadow-[0px_4px_4px_#00000033]"
            role="search"
          >
            <label htmlFor="dashboard-search" className="sr-only">
              Zoeken naar klas, leerling, module
            </label>
            <div className="absolute left-0 top-0 h-10 w-[532px] rounded-[20px] bg-[#ededed]" />
            <input
              id="dashboard-search"
              type="search"
              className="absolute left-[17px] top-[7px] h-[25px] w-[430px] [font-family:'Poppins',Helvetica] text-sm font-normal leading-[21px] tracking-[-0.31px] text-black placeholder:text-[#00000066]"
              placeholder="Zoeken naar klas, leerling, module..."
            />
            <button
              type="submit"
              className="absolute left-[489px] top-[5px] flex h-[31px] w-[31px] aspect-[1] items-center justify-center"
              aria-label="Zoeken"
            >
              <img
                className="w-[22.53px] flex-1"
                alt="Vector"
                src="/img/vector-78.svg"
              />
            </button>
          </form>
          <img
            className="relative h-[35px] w-px object-cover"
            alt="Line"
            src="/img/line-101-4.svg"
          />
          <button
            type="button"
            className="relative h-6 w-[90px]"
            aria-label="Modules"
          >
            <div className="absolute left-[22px] top-0 flex h-6 items-center justify-center [font-family:'Poppins',Helvetica] text-base font-normal leading-6 tracking-[-0.35px] text-center text-black whitespace-nowrap">
              Modules
            </div>
            <div className="absolute left-0 top-1.5 h-3.5 w-3.5 aspect-[1] bg-[url(/img/vector-79.svg)] bg-[100%_100%]" />
          </button>
          <img
            className="relative h-[35px] w-px object-cover"
            alt="Line"
            src="/img/line-101-4.svg"
          />
          <button type="button" aria-label="Profiel">
            <img
              className="relative h-10 w-10 object-cover"
              alt="Ellipse"
              src="/img/ellipse-1-1.svg"
            />
          </button>
        </div>
        <div className="absolute left-0 top-[60.13%] h-[39.87%] w-full">
          <h1 className="absolute left-[42.06%] top-0 flex h-[85.71%] w-[18.30%] items-center justify-center [font-family:'Poppins',Helvetica] text-4xl font-bold leading-[54px] tracking-[-0.79px] text-center text-black whitespace-nowrap">
            Instellingen
          </h1>
          <div className="absolute left-0 top-[96.83%] h-[3.17%] w-full bg-[#686868]" />
          <button
            type="button"
            className="absolute left-0 top-[47.62%] flex h-[33.33%] w-[4.42%] items-center [font-family:'Poppins',Helvetica] text-sm font-medium leading-[21px] tracking-[-0.31px] text-black whitespace-nowrap"
            aria-label="Terug"
          >
            &lt; Terug
          </button>
        </div>
      </header>
      <aside className="fixed left-0 top-0 flex h-[1024px] w-[206px] rounded-[0px_20px_20px_0px] bg-[#e0ffdb] shadow-[0px_4px_4px_#00000040]">
        <div className="ml-4 mt-[18px] flex h-[761px] w-44 flex-col gap-[61.8px]">
          <div className="relative -ml-0.5 h-[206.23px]">
            <img
              className="absolute left-2 top-0 h-[163px] w-[164px] aspect-[1.01] object-cover"
              alt="Ojt logo"
              src="/img/ojt-logo-2-4.png"
            />
            <div className="absolute left-0 top-[163px] flex h-[43px] w-[178px]">
              <div className="flex h-[43.23px] w-44 items-center justify-center [font-family:'Poppins',Helvetica] text-xl font-bold leading-[18.0px] tracking-[-0.44px] text-center text-black">
                Atlas dashboard
              </div>
            </div>
          </div>
          <div className="-mr-1.5 ml-1.5 flex max-h-[388px] flex-1 flex-col gap-20">
            <nav
              className="flex max-h-[180px] flex-1 flex-col gap-5"
              aria-label="Navigatie"
            >
              <div className="flex max-h-4 flex-1 items-center [font-family:'Poppins',Helvetica] text-base font-bold leading-6 tracking-[-0.35px] text-black whitespace-nowrap">
                Navigatie
              </div>
              <div className="flex h-[184px] w-[167px] flex-col">
                {navigationItems.map((item, index) => {
                  const wrapperClasses = [
                    "relative flex h-6 w-[167px] items-center gap-2.5",
                    index === 0
                      ? "mt-[-12.0px] flex-1 max-h-6"
                      : index === 1
                        ? "mt-[9px] flex-1 max-h-6"
                        : index === 2
                          ? "mt-2.5 flex-1 max-h-6"
                          : index === 3
                            ? "mt-2.5 flex-1 max-h-6"
                            : "mt-3 flex-1 max-h-6",
                  ].join(" ");

                  return (
                    <button
                      key={item.label}
                      type="button"
                      className={wrapperClasses}
                      aria-label={item.label}
                    >
                      <div className="relative h-6 w-6 aspect-[1]">
                        {item.custom === false && (
                          <div className="relative left-[12.50%] top-[9.05%] flex h-[90.18%] w-[78.45%]">
                            <img
                              className="w-[18.83px] flex-1"
                              alt="Vector"
                              src={item.icon as string}
                            />
                          </div>
                        )}

                        {item.custom === true && item.label === "T-Meting" && (
                          <img
                            className="absolute left-0 top-[8.80%] h-[91.20%] w-full"
                            alt="Vector"
                            src={item.icon as string}
                          />
                        )}

                        {item.custom === true && item.label === "Modules" && (
                          <img
                            className="absolute left-[5.83%] top-[5.52%] h-[94.48%] w-[94.17%]"
                            alt="Vector"
                            src={item.icon as string}
                          />
                        )}

                        {item.custom === true && item.label === "Agenda" && (
                          <img
                            className="absolute left-[10.72%] top-[10.71%] h-[89.29%] w-[89.28%]"
                            alt="Vector"
                            src={item.icon as string}
                          />
                        )}

                        {item.custom === "resultaten" && (
                          <>
                            <img
                              className="absolute left-[68.75%] top-[68.75%] h-[31.25%] w-[31.25%]"
                              alt="Vector"
                              src="/img/vector-84.svg"
                            />
                            <img
                              className="absolute left-[31.25%] top-[40.62%] h-[59.38%] w-[68.75%]"
                              alt="Vector"
                              src="/img/vector-85.svg"
                            />
                            <img
                              className="absolute left-[15.62%] top-[6.25%] h-[93.75%] w-[84.38%]"
                              alt="Vector"
                              src="/img/vector-86.svg"
                            />
                          </>
                        )}
                      </div>
                      <span className="relative mr-[-4.00px] flex h-4 w-[137px] items-center [font-family:'Poppins',Helvetica] text-base font-normal leading-6 tracking-[-0.35px] text-black whitespace-nowrap">
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </nav>
            <section
              className="flex h-32 w-44 flex-col gap-4"
              aria-label="Instellingen menu"
            >
              <div className="-mt-1 flex h-6 w-[94px] items-center [font-family:'Poppins',Helvetica] text-base font-bold leading-6 tracking-[-0.35px] text-black whitespace-nowrap">
                Instellingen
              </div>
              <div className="flex h-[92px] flex-col">
                <button
                  type="button"
                  className="mt-[-14.0px] flex w-44 gap-2.5"
                  aria-label="Instellingen"
                >
                  <img
                    className="h-5 w-5"
                    alt="Vector"
                    src="/img/vector-87.svg"
                  />
                  <div className="-mt-0.5 flex h-6 w-[88px] items-center [font-family:'Poppins',Helvetica] text-base font-normal leading-6 tracking-[-0.35px] text-black whitespace-nowrap">
                    Instellingen
                  </div>
                </button>
                <button
                  type="button"
                  className="mt-[7px] flex w-44 gap-2.5"
                  aria-label="Help"
                >
                  <div className="relative mt-[5px] h-5 w-5 aspect-[1]">
                    <img
                      className="absolute left-[46.52%] top-[5.56%] h-[94.44%] w-[53.48%]"
                      alt="Vector"
                      src="/img/vector-88.svg"
                    />
                    <img
                      className="absolute left-[29.53%] top-[33.09%] h-[66.91%] w-[70.47%]"
                      alt="Vector"
                      src="/img/vector-89.svg"
                    />
                  </div>
                  <div className="mt-[3px] flex h-6 w-[35px] items-center [font-family:'Poppins',Helvetica] text-base font-normal leading-6 tracking-[-0.35px] text-black whitespace-nowrap">
                    Help
                  </div>
                </button>
                <button
                  type="button"
                  className="mt-[18px] flex w-[215px] gap-2.5"
                  aria-label="Balk inklappen"
                >
                  <div className="flex h-5 w-5 aspect-[1]">
                    <img
                      className="w-[15px] flex-1"
                      alt="Vector"
                      src="/img/vector-31.svg"
                    />
                  </div>
                  <div className="-mt-0.5 flex h-6 w-28 items-center [font-family:'Poppins',Helvetica] text-base font-normal leading-6 tracking-[-0.35px] text-black whitespace-nowrap">
                    Balk inklappen
                  </div>
                </button>
              </div>
            </section>
          </div>
        </div>
      </aside>
    </main>
  );
};
