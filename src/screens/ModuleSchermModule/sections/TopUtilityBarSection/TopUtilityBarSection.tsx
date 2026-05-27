const dividerSrc = "https://c.animaapp.com/aWHY8P00/img/line-101.svg";

const utilityItems = [
  {
    type: "school" as const,
    label: "Harenslyceum",
    icon: "https://c.animaapp.com/aWHY8P00/img/fa7-solid-school.svg",
    width: "w-[164px]",
  },
  {
    type: "divider" as const,
  },
  {
    type: "search" as const,
  },
  {
    type: "divider" as const,
  },
  {
    type: "modules" as const,
    label: "Modules",
    icon: "https://c.animaapp.com/aWHY8P00/img/el-lines.svg",
    width: "w-[90px]",
  },
  {
    type: "divider" as const,
  },
  {
    type: "avatar" as const,
    src: "https://c.animaapp.com/aWHY8P00/img/ellipse-1.svg",
  },
];

export const TopUtilityBarSection = (): JSX.Element => {
  return (
    <header
      className="absolute top-[18px] left-[247px] w-[1153px] h-[158px]"
      aria-label="Bovenste navigatiebalk"
    >
      <nav
        className="flex w-[94.02%] h-[25.61%] items-center justify-center gap-10 absolute top-0 left-[3.04%]"
        aria-label="Utility navigatie"
      >
        {utilityItems.map((item, index) => {
          if (item.type === "divider") {
            return (
              <img
                key={`divider-${index}`}
                className="relative w-px h-[35px] object-cover"
                alt=""
                aria-hidden="true"
                src={dividerSrc}
              />
            );
          }

          if (item.type === "school") {
            return (
              <div
                key={`school-${index}`}
                className={`relative ${item.width} h-5`}
              >
                <img
                  className="absolute top-0 left-0.5 w-5 h-5 aspect-[1]"
                  alt=""
                  aria-hidden="true"
                  src={item.icon}
                />
                <div className="absolute -top-0.5 left-8 h-6 flex items-center justify-center [font-family:'Poppins',Helvetica] font-medium text-black text-base text-center tracking-[-0.35px] leading-6 whitespace-nowrap">
                  {item.label}
                </div>
              </div>
            );
          }

          if (item.type === "search") {
            return (
              <form
                key={`search-${index}`}
                className="relative w-[534px] h-[40.46px] shadow-[0px_4px_4px_#00000033]"
                role="search"
                aria-label="Zoeken"
              >
                <label htmlFor="module-search" className="sr-only">
                  Zoeken naar klas, leerling, module
                </label>
                <div className="absolute top-0 left-0 w-[532px] h-10 bg-[#ededed] rounded-[20px]" />
                <input
                  id="module-search"
                  name="search"
                  type="search"
                  className="absolute top-0 left-0 z-10 w-[532px] h-10 pl-[17px] pr-[58px] rounded-[20px] [font-family:'Poppins',Helvetica] font-normal text-black text-sm tracking-[-0.31px] leading-[21px] placeholder:text-[#00000066]"
                  placeholder="Zoeken naar klas, leerling, module..."
                  aria-label="Zoeken naar klas, leerling, module"
                />
                <button
                  type="submit"
                  className="absolute top-[5px] left-[489px] z-10 flex items-center justify-center w-[31px] h-[31px] cursor-pointer"
                  aria-label="Zoeken"
                >
                  <img
                    className="w-[31px] h-[31px] aspect-[1]"
                    alt=""
                    aria-hidden="true"
                    src="https://c.animaapp.com/aWHY8P00/img/material-symbols-search-rounded.svg"
                  />
                </button>
              </form>
            );
          }

          if (item.type === "modules") {
            return (
              <button
                key={`modules-${index}`}
                type="button"
                className={`relative ${item.width} h-6`}
                aria-label={item.label}
              >
                <div className="absolute top-0 left-[22px] h-6 flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-black text-base text-center tracking-[-0.35px] leading-6 whitespace-nowrap">
                  {item.label}
                </div>
                <img
                  className="absolute top-1.5 left-0 w-3.5 h-3.5 aspect-[1]"
                  alt=""
                  aria-hidden="true"
                  src={item.icon}
                />
              </button>
            );
          }

          return (
            <img
              key={`avatar-${index}`}
              className="relative w-10 h-10 object-cover"
              alt="Profielfoto"
              src={item.src}
            />
          );
        })}
      </nav>
      <div className="absolute w-full h-[39.87%] top-[60.13%] left-0">
        <button
          type="button"
          className="absolute w-[4.42%] h-[33.33%] top-[47.62%] left-0 flex items-center [font-family:'Poppins',Helvetica] font-medium text-black text-sm tracking-[-0.31px] leading-[21px] whitespace-nowrap"
          aria-label="Terug"
        >
          &lt; Terug
        </button>
        <h1 className="absolute w-[14.40%] h-[85.71%] top-0 left-[43.97%] flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-black text-4xl text-center tracking-[-0.79px] leading-[54px] whitespace-nowrap">
          Module D
        </h1>
        <div
          className="absolute w-full h-[3.17%] top-[96.83%] left-0 bg-[#686868]"
          aria-hidden="true"
        />
      </div>
    </header>
  );
};
