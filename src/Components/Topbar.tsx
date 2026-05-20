export const Topbar = (): JSX.Element => {
  return (
    <header
      className="flex w-[1084px] items-center justify-center gap-10 absolute top-[18px] left-[283px]"
      aria-label="Top navigatie"
    >
      <div className="relative w-[164px] h-5">
        <div className="absolute top-0 left-0.5 w-5 h-5 flex aspect-[1]">
          <img className="flex-1 w-[18px]" alt="" src="/img/vector.svg" />
        </div>
        <div className="absolute -top-0.5 left-8 h-6 flex items-center justify-center [font-family:'Poppins',Helvetica] font-medium text-black text-base text-center tracking-[-0.35px] leading-6 whitespace-nowrap">
          Harenslyceum
        </div>
      </div>
      <img
        className="relative w-px h-[35px] object-cover"
        alt=""
        aria-hidden="true"
        src="/img/line-101.svg"
      />
      <form className="relative w-[534px] h-10 bg-[#ededed] rounded-[20px] shadow-[0px_4px_4px_#00000033]" role="search">
        <label htmlFor="basis-layout-search" className="sr-only">
          Zoeken naar klas, leerling, module
        </label>
        <input
          id="basis-layout-search"
          type="search"
          className="w-full h-full rounded-[20px] bg-transparent pl-[17px] pr-[56px] [font-family:'Poppins',Helvetica] font-normal text-sm tracking-[-0.31px] leading-[21px] text-black placeholder:text-[#00000066]"
          placeholder="Zoeken naar klas, leerling, module..."
          aria-label="Zoeken naar klas, leerling, module"
        />
        <button
          type="submit"
          className="absolute top-[5px] left-[489px] w-[31px] h-[31px] flex aspect-[1] cursor-pointer"
          aria-label="Zoeken"
        >
          <img className="flex-1 w-[22.53px]" alt="" src="/img/vector-1.svg" />
        </button>
      </form>
      <img
        className="relative w-px h-[35px] object-cover"
        alt=""
        aria-hidden="true"
        src="/img/line-101.svg"
      />
      <button
        type="button"
        className="relative w-[90px] h-6 cursor-pointer"
        aria-label="Modules openen"
      >
        <div className="absolute top-0 left-[22px] h-6 flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-black text-base text-center tracking-[-0.35px] leading-6 whitespace-nowrap">
          Modules
        </div>
        <div className="absolute top-1.5 left-0 w-3.5 h-3.5 aspect-[1] bg-[url(/img/vector-2.svg)] bg-[100%_100%]" />
      </button>
      <img
        className="relative w-px h-[35px] object-cover"
        alt=""
        aria-hidden="true"
        src="/img/line-101.svg"
      />
      <button type="button" className="cursor-pointer rounded-full" aria-label="Profiel">
        <img className="relative w-10 h-10 object-cover" alt="Profielfoto" src="/img/ellipse-1.svg" />
      </button>
    </header>
  );
};
