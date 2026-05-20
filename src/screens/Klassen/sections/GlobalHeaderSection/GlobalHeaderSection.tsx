const dividerClasses = "relative w-px h-[35px] object-cover";
const searchPlaceholder = "Zoeken naar klas, leerling, module...";

export const GlobalHeaderSection = (): JSX.Element => {
  return (
    <header
      className="z-[3] ml-[247px] mt-[18px] h-[158px] w-[1153px] relative"
      aria-label="Globale header"
    >
      <div className="absolute left-[3.04%] top-0 flex h-[25.61%] w-[94.02%] items-center justify-center gap-10">
        <div
          className="relative h-5 w-[164px] shrink-0"
          aria-label="Schoolnaam"
        >
          <div className="absolute left-0.5 top-0 flex h-5 w-5 aspect-[1] items-center justify-center">
            <img
              className="w-[18px]"
              alt=""
              src="/img/vector.svg"
              aria-hidden="true"
            />
          </div>
          <div className="absolute -top-0.5 left-8 flex h-6 items-center justify-center whitespace-nowrap text-center [font-family:'Poppins',Helvetica] text-base font-medium leading-6 tracking-[-0.35px] text-black">
            Harenslyceum
          </div>
        </div>
        <img
          className={dividerClasses}
          alt=""
          src="/img/line-101.svg"
          aria-hidden="true"
        />
        <form
          className="relative h-[40.46px] w-[534px] shadow-[0px_4px_4px_#00000033]"
          role="search"
          aria-label="Zoeken"
        >
          <label htmlFor="global-header-search" className="sr-only">
            Zoek naar klas, leerling of module
          </label>
          <div
            className="absolute left-0 top-0 h-10 w-[532px] rounded-[20px] bg-[#ededed]"
            aria-hidden="true"
          />
          <input
            id="global-header-search"
            name="search"
            type="search"
            placeholder={searchPlaceholder}
            className="absolute left-[17px] top-[7px] h-[25px] w-[450px] [font-family:'Poppins',Helvetica] text-sm font-normal leading-[21px] tracking-[-0.31px] text-black placeholder:text-[#00000066]"
            aria-label="Zoeken naar klas, leerling of module"
          />
          <button
            type="submit"
            className="absolute left-[489px] top-[5px] flex h-[31px] w-[31px] aspect-[1] items-center justify-center"
            aria-label="Zoeken"
          >
            <img
              className="w-[22.53px]"
              alt=""
              src="/img/vector-1.svg"
              aria-hidden="true"
            />
          </button>
        </form>
        <img
          className={dividerClasses}
          alt=""
          src="/img/line-101.svg"
          aria-hidden="true"
        />
        <button
          type="button"
          className="relative h-6 w-[90px] shrink-0"
          aria-label="Modules openen"
        >
          <div
            className="absolute left-0 top-1.5 h-3.5 w-3.5 aspect-[1] bg-[url(/img/vector-186.svg)] bg-[100%_100%]"
            aria-hidden="true"
          />
          <div className="absolute left-[22px] top-0 flex h-6 items-center justify-center whitespace-nowrap text-center [font-family:'Poppins',Helvetica] text-base font-normal leading-6 tracking-[-0.35px] text-black">
            Modules
          </div>
        </button>
        <img
          className={dividerClasses}
          alt=""
          src="/img/line-101.svg"
          aria-hidden="true"
        />
        <button
          type="button"
          className="relative h-10 w-10 shrink-0 rounded-full"
          aria-label="Profiel openen"
        >
          <img
            className="h-10 w-10 object-cover"
            alt="Profielfoto"
            src="/img/ellipse-1.svg"
          />
        </button>
      </div>
      <div className="absolute left-0 top-[60.13%] h-[39.87%] w-full">
        <h1 className="absolute left-[33.48%] top-0 flex h-[85.71%] w-[35.39%] items-center justify-center whitespace-nowrap text-center [font-family:'Poppins',Helvetica] text-4xl font-bold leading-[54px] tracking-[-0.79px] text-black">
          Welkom terug, Lisanne
        </h1>
        <div
          className="absolute left-0 top-[96.83%] h-[3.17%] w-full bg-[#686868]"
          aria-hidden="true"
        />
      </div>
    </header>
  );
};
