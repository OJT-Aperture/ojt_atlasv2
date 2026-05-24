const navigationDividers = [
  {
    src: "https://c.animaapp.com/jJme9IsX/img/line-101.svg",
    alt: "Line",
  },
  {
    src: "https://c.animaapp.com/jJme9IsX/img/line-101.svg",
    alt: "Line",
  },
  {
    src: "https://c.animaapp.com/jJme9IsX/img/line-101.svg",
    alt: "Line",
  },
];

export const TopNavigationSection = (): JSX.Element => {
  return (
    <header
      className="absolute top-[18px] left-[247px] w-[1153px] h-[158px]"
      aria-label="Bovenste navigatie"
    >
      <div className="flex w-[94.02%] h-[25.61%] items-center justify-center gap-10 absolute top-0 left-[3.04%]">
        <div className="relative w-[164px] h-5" aria-label="Schoolnaam">
          <img
            className="absolute top-0 left-0.5 w-5 h-5 aspect-[1]"
            alt="Solid school"
            src="https://c.animaapp.com/jJme9IsX/img/fa7-solid-school.svg"
          />
          <div className="absolute -top-0.5 left-8 h-6 flex items-center justify-center [font-family:'Poppins',Helvetica] font-medium text-black text-base text-center tracking-[-0.35px] leading-6 whitespace-nowrap">
            Harenslyceum
          </div>
        </div>
        <img
          className="relative w-px h-[35px] object-cover"
          alt={navigationDividers[0].alt}
          src={navigationDividers[0].src}
          aria-hidden="true"
        />
        <form
          className="relative w-[534px] h-[40.46px] shadow-[0px_4px_4px_#00000033]"
          role="search"
          aria-label="Zoekformulier"
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
            className="absolute top-[5px] left-[489px] z-10 flex w-[31px] h-[31px] items-center justify-center rounded-full"
            aria-label="Zoeken"
          >
            <img
              className="w-[31px] h-[31px] aspect-[1]"
              alt="Material symbols"
              src="https://c.animaapp.com/jJme9IsX/img/material-symbols-search-rounded.svg"
            />
          </button>
        </form>
        <img
          className="relative w-px h-[35px] object-cover"
          alt={navigationDividers[1].alt}
          src={navigationDividers[1].src}
          aria-hidden="true"
        />
        <button
          type="button"
          className="relative w-[90px] h-6"
          aria-label="Modules"
        >
          <div className="absolute top-0 left-[22px] h-6 flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-black text-base text-center tracking-[-0.35px] leading-6 whitespace-nowrap">
            Modules
          </div>
          <img
            className="absolute top-1.5 left-0 w-3.5 h-3.5 aspect-[1]"
            alt="El lines"
            src="https://c.animaapp.com/jJme9IsX/img/el-lines.svg"
          />
        </button>
        <img
          className="relative w-px h-[35px] object-cover"
          alt={navigationDividers[2].alt}
          src={navigationDividers[2].src}
          aria-hidden="true"
        />
        <button
          type="button"
          className="relative w-10 h-10 rounded-full"
          aria-label="Profiel"
        >
          <img
            className="relative w-10 h-10 object-cover"
            alt="Ellipse"
            src="https://c.animaapp.com/jJme9IsX/img/ellipse-1.svg"
          />
        </button>
      </div>
      <div className="absolute w-full h-[39.87%] top-[60.13%] left-0">
        <h1 className="absolute w-[13.27%] h-[85.71%] top-0 left-[44.58%] flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-black text-4xl text-center tracking-[-0.79px] leading-[54px] whitespace-nowrap">
          Modules
        </h1>
        <div
          className="absolute w-full h-[3.17%] top-[96.83%] left-0 bg-[#686868]"
          aria-hidden="true"
        />
        <button
          type="button"
          className="absolute w-[4.42%] h-[33.33%] top-[47.62%] left-0 flex items-center [font-family:'Poppins',Helvetica] font-medium text-black text-sm tracking-[-0.31px] leading-[21px] whitespace-nowrap"
          aria-label="Terug"
        >
          &lt; Terug
        </button>
      </div>
    </header>
  );
};
