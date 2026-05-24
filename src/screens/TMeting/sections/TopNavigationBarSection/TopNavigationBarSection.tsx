export const TopNavigationBarSection = (): JSX.Element => {
  const separatorSrc = "https://c.animaapp.com/tNip9Jvr/img/line-101.svg";
  const navItems = [
    {
      type: "brand" as const,
      icon: "https://c.animaapp.com/tNip9Jvr/img/fa7-solid-school.svg",
      label: "Harenslyceum",
      width: "w-[164px]",
    },
    {
      type: "separator" as const,
    },
    {
      type: "search" as const,
    },
    {
      type: "separator" as const,
    },
    {
      type: "modules" as const,
      icon: "https://c.animaapp.com/tNip9Jvr/img/el-lines.svg",
      label: "Modules",
      width: "w-[90px]",
    },
    {
      type: "separator" as const,
    },
    {
      type: "avatar" as const,
      icon: "https://c.animaapp.com/tNip9Jvr/img/ellipse-1.svg",
    },
  ];

  return (
    <section
      className="absolute top-[18px] left-[247px] h-[158px] w-[1153px]"
      aria-label="Top navigation"
    >
      <header className="absolute left-[3.04%] top-0 flex h-[25.61%] w-[94.02%] items-center justify-center gap-10">
        {navItems.map((item, index) => {
          if (item.type === "separator") {
            return (
              <img
                key={`separator-${index}`}
                className="relative h-[35px] w-px object-cover"
                alt=""
                aria-hidden="true"
                src={separatorSrc}
              />
            );
          }

          if (item.type === "brand") {
            return (
              <div
                key={`brand-${index}`}
                className={`relative h-5 ${item.width}`}
              >
                <img
                  className="absolute left-0.5 top-0 h-5 w-5 aspect-[1]"
                  alt=""
                  aria-hidden="true"
                  src={item.icon}
                />
                <div className="absolute -top-0.5 left-8 flex h-6 items-center justify-center whitespace-nowrap text-center font-medium leading-6 tracking-[-0.35px] text-black text-base [font-family:'Poppins',Helvetica]">
                  {item.label}
                </div>
              </div>
            );
          }

          if (item.type === "search") {
            return (
              <form
                key={`search-${index}`}
                className="relative h-[40.46px] w-[534px] shadow-[0px_4px_4px_#00000033]"
                role="search"
                aria-label="Zoeken"
              >
                <label htmlFor="tm-search" className="sr-only">
                  Zoeken naar klas, leerling, module
                </label>
                <div className="absolute left-0 top-0 h-10 w-[532px] rounded-[20px] bg-[#ededed]" />
                <input
                  id="tm-search"
                  type="search"
                  placeholder="Zoeken naar klas, leerling, module..."
                  className="absolute left-[17px] top-[7px] h-[25px] w-[430px] bg-transparent text-sm font-normal leading-[21px] tracking-[-0.31px] text-black placeholder:text-[#00000066] [font-family:'Poppins',Helvetica]"
                />
                <button
                  type="submit"
                  aria-label="Zoeken"
                  className="absolute left-[489px] top-[5px] flex h-[31px] w-[31px] items-center justify-center"
                >
                  <img
                    className="h-[31px] w-[31px] aspect-[1]"
                    alt=""
                    aria-hidden="true"
                    src="https://c.animaapp.com/tNip9Jvr/img/material-symbols-search-rounded.svg"
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
                className={`relative h-6 ${item.width}`}
                aria-label={item.label}
              >
                <div className="absolute left-[22px] top-0 flex h-6 items-center justify-center whitespace-nowrap text-center font-normal leading-6 tracking-[-0.35px] text-black text-base [font-family:'Poppins',Helvetica]">
                  {item.label}
                </div>
                <img
                  className="absolute left-0 top-1.5 h-3.5 w-3.5 aspect-[1]"
                  alt=""
                  aria-hidden="true"
                  src={item.icon}
                />
              </button>
            );
          }

          return (
            <button
              key={`avatar-${index}`}
              type="button"
              className="relative h-10 w-10 rounded-full"
              aria-label="Profiel"
            >
              <img
                className="relative h-10 w-10 object-cover"
                alt=""
                aria-hidden="true"
                src={item.icon}
              />
            </button>
          );
        })}
      </header>
      <div className="absolute left-0 top-[60.13%] h-[39.87%] w-full">
        <button
          type="button"
          className="absolute left-0 top-[47.62%] flex h-[33.33%] w-[4.42%] items-center whitespace-nowrap text-sm font-medium leading-[21px] tracking-[-0.31px] text-black [font-family:'Poppins',Helvetica]"
          aria-label="Terug"
        >
          &lt; Terug
        </button>
        <h1 className="absolute left-[43.37%] top-0 flex h-[85.71%] w-[15.61%] items-center justify-center whitespace-nowrap text-center font-bold leading-[54px] tracking-[-0.79px] text-black text-4xl [font-family:'Poppins',Helvetica]">
          T - Meting
        </h1>
        <div
          className="absolute left-0 top-[96.83%] h-[3.17%] w-full bg-[#686868]"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};
