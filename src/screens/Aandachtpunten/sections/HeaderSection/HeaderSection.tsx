const navigationItems = [
  {
    label: "Modules",
    iconSrc: "/img/vector-174.svg",
    iconAlt: "",
  },
];

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="flex w-[1084px] h-[100px] items-center justify-center gap-10 absolute top-0 left-[315px]">
      <div className="flex w-[181px] items-center justify-center gap-[15px] relative">
        <div
          className="relative w-[26px] h-[26px] ml-[-1.50px] aspect-[1] shrink-0"
          aria-hidden="true"
        >
          <img
            className="absolute w-[95.00%] h-[89.91%] top-[10.09%] left-[5.00%]"
            alt=""
            src="/img/vector-173.svg"
          />
        </div>
        <div className="relative flex items-center justify-center w-[143px] h-[19px] mr-[-1.50px] [font-family:'Poppins',Helvetica] font-medium text-black text-xl text-center tracking-[-0.44px] leading-[30px] whitespace-nowrap">
          Harenslyceum
        </div>
      </div>
      <form
        className="relative w-[534px] h-[49px] shadow-[0px_4px_4px_#00000033]"
        role="search"
        aria-label="Zoeken"
      >
        <label htmlFor="header-search" className="sr-only">
          Zoeken naar klas, leerling, module
        </label>
        <div className="absolute top-0 left-0 w-[532px] h-[49px] bg-[#ededed] rounded-[20px]" />
        <input
          id="header-search"
          name="search"
          type="search"
          placeholder="Zoeken naar klas, leerling, module..."
          className="absolute top-0 left-0 w-[532px] h-[49px] rounded-[20px] pl-[17px] pr-[58px] [font-family:'Poppins',Helvetica] font-normal text-black text-base tracking-[-0.35px] leading-6 placeholder:text-[#00000066]"
        />
        <button
          type="submit"
          aria-label="Zoeken"
          className="absolute top-2 left-[487px] flex w-[34px] h-[34px] items-center justify-center aspect-[1] cursor-pointer"
        >
          <img className="w-[24.8px]" alt="" src="/img/vector-174.svg" />
        </button>
      </form>
      <div className="relative w-[88px] h-[84px]">
        {navigationItems.map((item) => (
          <button
            key={item.label}
            type="button"
            className="absolute top-[31px] left-0 inline-flex items-center gap-[6px] [font-family:'Poppins',Helvetica] font-normal text-black text-base tracking-[-0.35px] leading-6 whitespace-nowrap"
            aria-label={item.label}
          >
            <img
              className="w-[13px] h-[13px] shrink-0"
              alt={item.iconAlt}
              src={item.iconSrc}
            />
            <span>{item.label}</span>
          </button>
        ))}
      </div>
      <button
        type="button"
        className="relative block w-[66px] h-[66px] rounded-full overflow-hidden"
        aria-label="Profiel"
      >
        <img
          className="w-[66px] h-[66px] object-cover"
          alt="Profiel"
          src="/img/ellipse-1-8.svg"
        />
      </button>
    </header>
  );
};
