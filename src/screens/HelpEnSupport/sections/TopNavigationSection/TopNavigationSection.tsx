export const TopNavigationSection = (): JSX.Element => {
  return (
    <header className="absolute top-0 left-[316px] flex h-[100px] w-[1084px] items-center justify-center gap-10">
      <div className="relative flex w-[181px] items-center justify-center gap-[15px]">
        <div
          className="relative ml-[-1.50px] h-[26px] w-[26px] aspect-[1] shrink-0"
          aria-hidden="true"
        >
          <img
            className="absolute left-[5.00%] top-[10.09%] h-[89.91%] w-[95.00%]"
            alt=""
            src="/img/vector-173.svg"
          />
        </div>
        <div className="relative mr-[-1.50px] flex h-[19px] w-[143px] items-center justify-center whitespace-nowrap text-center [font-family:'Poppins',Helvetica] text-xl font-medium leading-[30px] tracking-[-0.44px] text-black">
          Harenslyceum
        </div>
      </div>
      <form
        className="relative h-[49px] w-[534px] shadow-[0px_4px_4px_#00000033]"
        role="search"
        aria-label="Zoeken"
      >
        <label htmlFor="top-navigation-search" className="sr-only">
          Zoeken naar klas, leerling, module
        </label>
        <div className="absolute left-0 top-0 h-[49px] w-[532px] rounded-[20px] bg-[#ededed]" />
        <input
          id="top-navigation-search"
          name="search"
          type="search"
          placeholder="Zoeken naar klas, leerling, module..."
          className="absolute left-[17px] top-0 h-[49px] w-[457px] [font-family:'Poppins',Helvetica] text-base font-normal leading-6 tracking-[-0.35px] text-black placeholder:text-[#00000066]"
        />
        <button
          type="submit"
          aria-label="Zoeken"
          className="absolute left-[487px] top-2 flex h-[34px] w-[34px] items-center justify-center aspect-[1]"
        >
          <img
            className="w-[24.8px] max-w-none"
            alt=""
            src="/img/vector-174.svg"
          />
        </button>
      </form>
      <nav
        className="flex h-[84px] w-[88px] items-center justify-center"
        aria-label="Hoofdnavigatie"
      >
        <button
          type="button"
          className="flex items-center justify-center gap-1 whitespace-nowrap [font-family:'Poppins',Helvetica] text-sm font-normal leading-6 tracking-[-0.31px] text-black"
          aria-label="Modules"
        >
          <span className="text-base leading-none" aria-hidden="true">
            ≡
          </span>
          <span>Modules</span>
        </button>
      </nav>
      <button
        type="button"
        className="relative h-[66px] w-[66px] overflow-hidden rounded-full"
        aria-label="Profiel"
      >
        <img
          className="h-[66px] w-[66px] object-cover"
          alt="Profiel"
          src="/img/ellipse-1-7.svg"
        />
      </button>
    </header>
  );
};
