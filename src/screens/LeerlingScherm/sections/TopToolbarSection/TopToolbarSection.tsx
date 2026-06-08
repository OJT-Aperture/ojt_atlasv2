export const TopToolbarSection = (): JSX.Element => {
  const separators = [0, 1, 2];

  return (
    <header className="absolute top-[18px] left-[247px] w-[1153px] h-[158px]">
      <div className="flex w-[94.02%] h-[25.61%] items-center justify-center gap-10 absolute top-0 left-[3.04%]">
        <div className="relative w-[164px] h-5" aria-label="School naam">
          <img
            className="absolute top-0 left-0.5 w-5 h-5 aspect-[1]"
            alt=""
            aria-hidden="true"
            src="https://c.animaapp.com/WMT0Xqbg/img/fa7-solid-school.svg"
          />
          <div className="absolute -top-0.5 left-8 h-6 flex items-center justify-center [font-family:'Poppins',Helvetica] font-medium text-black text-base text-center tracking-[-0.35px] leading-6 whitespace-nowrap">
            Harenslyceum
          </div>
        </div>
        <img
          className="relative w-px h-[35px] object-cover"
          alt=""
          aria-hidden="true"
          src="https://c.animaapp.com/WMT0Xqbg/img/line-101.svg"
        />
        <form
          className="relative w-[534px] h-[40.46px] shadow-[0px_4px_4px_#00000033]"
          role="search"
          aria-label="Zoeken"
        >
          <label htmlFor="leerlingen-toolbar-search" className="sr-only">
            Zoeken naar klas, leerling, module
          </label>
          <div
            className="absolute top-0 left-0 w-[532px] h-10 bg-[#ededed] rounded-[20px]"
            aria-hidden="true"
          />
          <input
            id="leerlingen-toolbar-search"
            type="search"
            placeholder="Zoeken naar klas, leerling, module..."
            className="absolute top-0 left-0 w-[532px] h-10 rounded-[20px] pl-[17px] pr-[58px] [font-family:'Poppins',Helvetica] font-normal text-black text-sm tracking-[-0.31px] leading-[21px] placeholder:text-[#00000066]"
          />
          <button
            type="submit"
            aria-label="Zoeken"
            className="absolute top-[5px] left-[489px] flex h-[31px] w-[31px] items-center justify-center rounded-full"
          >
            <img
              className="w-[31px] h-[31px] aspect-[1]"
              alt=""
              aria-hidden="true"
              src="https://c.animaapp.com/WMT0Xqbg/img/material-symbols-search-rounded.svg"
            />
          </button>
        </form>
        {separators.slice(1, 2).map((separator) => (
          <img
            key={`separator-middle-${separator}`}
            className="relative w-px h-[35px] object-cover"
            alt=""
            aria-hidden="true"
            src="https://c.animaapp.com/WMT0Xqbg/img/line-101.svg"
          />
        ))}

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
            alt=""
            aria-hidden="true"
            src="https://c.animaapp.com/WMT0Xqbg/img/el-lines.svg"
          />
        </button>
        {separators.slice(2).map((separator) => (
          <img
            key={`separator-end-${separator}`}
            className="relative w-px h-[35px] object-cover"
            alt=""
            aria-hidden="true"
            src="https://c.animaapp.com/WMT0Xqbg/img/line-101.svg"
          />
        ))}

        <button
          type="button"
          className="relative w-10 h-10 rounded-full"
          aria-label="Profiel"
        >
          <img
            className="relative w-10 h-10 object-cover"
            alt=""
            aria-hidden="true"
            src="https://c.animaapp.com/WMT0Xqbg/img/ellipse-1.svg"
          />
        </button>
      </div>
      <div className="absolute w-full h-[39.87%] top-[60.13%] left-0">
        <h1 className="absolute w-[16.22%] h-[85.71%] top-0 left-[43.10%] flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-black text-4xl text-center tracking-[-0.79px] leading-[54px] whitespace-nowrap">
          Leerlingen
        </h1>
        <div className="absolute w-full h-[3.17%] top-[96.83%] left-0 bg-[#686868]" />
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
