const brand = {
  name: "Harenslyceum",
  logoSrc: "/img/vector-173.svg",
  logoAlt: "Harenslyceum logo",
};

const search = {
  placeholder: "Zoeken naar klas, leerling, module...",
  iconSrc: "/img/vector-174.svg",
  iconAlt: "Zoeken",
};

const profile = {
  imageSrc: "/img/ellipse-1-2.svg",
  imageAlt: "Profiel",
};

export const PageHeaderSection = (): JSX.Element => {
  return (
    <header className="absolute left-[316px] top-0 flex h-[100px] w-[1084px] items-center justify-center gap-10">
      <div className="relative flex w-[181px] items-center justify-center gap-[15px]">
        <div
          className="relative ml-[-1.50px] h-[26px] w-[26px] aspect-[1] shrink-0"
          aria-hidden="true"
        >
          <img
            className="absolute left-[5.00%] top-[10.09%] h-[89.91%] w-[95.00%]"
            alt={brand.logoAlt}
            src={brand.logoSrc}
          />
        </div>
        <div className="relative mr-[-1.50px] flex h-[19px] w-[143px] items-center justify-center whitespace-nowrap text-center [font-family:'Poppins',Helvetica] text-xl font-medium leading-[30px] tracking-[-0.44px] text-black">
          {brand.name}
        </div>
      </div>
      <form
        className="relative h-[49px] w-[534px] shadow-[0px_4px_4px_#00000033]"
        role="search"
        aria-label="Zoeken"
      >
        <label htmlFor="page-header-search" className="sr-only">
          {search.placeholder}
        </label>
        <div className="absolute left-0 top-0 h-[49px] w-[532px] rounded-[20px] bg-[#ededed]" />
        <input
          id="page-header-search"
          name="search"
          type="search"
          placeholder={search.placeholder}
          className="absolute left-[17px] top-0 h-[49px] w-[457px] [font-family:'Poppins',Helvetica] text-base font-normal leading-6 tracking-[-0.35px] text-black placeholder:text-[#00000066]"
          aria-label={search.placeholder}
        />
        <button
          type="submit"
          className="absolute left-[487px] top-2 flex h-[34px] w-[34px] items-center justify-center rounded-full"
          aria-label={search.iconAlt}
        >
          <img
            className="w-[24.8px] flex-none"
            alt={search.iconAlt}
            src={search.iconSrc}
          />
        </button>
      </form>
      <nav
        className="relative h-[84px] w-[88px]"
        aria-label="Primaire navigatie"
      >
        <button
          type="button"
          className="flex h-full w-full items-center justify-center"
          aria-label="Modules"
        >
          <div className="flex items-center justify-center whitespace-nowrap [font-family:'Poppins',Helvetica] text-base font-normal leading-6 tracking-[-0.35px] text-black">
            Modules
          </div>
        </button>
      </nav>
      <button
        type="button"
        className="relative h-[66px] w-[66px] overflow-hidden rounded-full"
        aria-label="Open profiel"
      >
        <img
          className="h-[66px] w-[66px] object-cover"
          alt={profile.imageAlt}
          src={profile.imageSrc}
        />
      </button>
    </header>
  );
};
