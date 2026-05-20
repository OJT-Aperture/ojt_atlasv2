export const HeaderBrandSection = (): JSX.Element => {
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
    avatarSrc: "/img/ellipse-1-4.svg",
    avatarAlt: "Profiel",
  };

  return (
    <header className="flex w-[1084px] h-[100px] items-center justify-center gap-10 absolute top-0 left-[316px]">
      <div className="flex w-[181px] items-center justify-center gap-[15px] relative">
        <div className="relative w-[26px] h-[26px] ml-[-1.50px] aspect-[1] shrink-0">
          <img
            className="absolute w-[95.00%] h-[89.91%] top-[10.09%] left-[5.00%]"
            alt={brand.logoAlt}
            src={brand.logoSrc}
          />
        </div>
        <div className="relative flex items-center justify-center w-[143px] h-[19px] mr-[-1.50px] [font-family:'Poppins',Helvetica] font-medium text-black text-xl text-center tracking-[-0.44px] leading-[30px] whitespace-nowrap">
          {brand.name}
        </div>
      </div>
      <form
        className="relative w-[534px] h-[49px] shadow-[0px_4px_4px_#00000033]"
        role="search"
        aria-label="Zoeken"
      >
        <label htmlFor="header-brand-search" className="sr-only">
          {search.placeholder}
        </label>
        <div className="absolute top-0 left-0 w-[532px] h-[49px] bg-[#ededed] rounded-[20px]" />
        <input
          id="header-brand-search"
          name="search"
          type="search"
          placeholder={search.placeholder}
          className="absolute top-0 left-0 z-10 w-[532px] h-[49px] rounded-[20px] pl-[17px] pr-[58px] [font-family:'Poppins',Helvetica] font-normal text-base tracking-[-0.35px] leading-6 text-black placeholder:text-[#00000066]"
          aria-label={search.placeholder}
        />
        <button
          type="submit"
          aria-label={search.iconAlt}
          className="absolute top-2 left-[487px] z-10 flex w-[34px] h-[34px] items-center justify-center"
        >
          <img
            className="w-[24.8px]"
            alt={search.iconAlt}
            src={search.iconSrc}
          />
        </button>
      </form>
      <div className="relative w-[88px] h-[84px]" aria-hidden="true" />
      <button
        type="button"
        aria-label="Open profiel"
        className="relative flex items-center justify-center rounded-full"
      >
        <img
          className="relative w-[66px] h-[66px] object-cover"
          alt={profile.avatarAlt}
          src={profile.avatarSrc}
        />
      </button>
    </header>
  );
};
