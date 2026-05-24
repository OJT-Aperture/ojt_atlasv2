const actionTiles = [
  {
    title: "Modules",
    iconSrc: "https://c.animaapp.com/tNip9Jvr/img/vector.svg",
    iconAlt: "",
    iconClassName: "relative w-[75px] h-[75px]",
    cardClassName:
      "flex flex-col w-[251px] h-[193px] items-center gap-[18px] px-[29px] py-[31px] relative bg-[#74a2d1] rounded-[20px] shadow-[0px_4px_4px_#00000040]",
  },
  {
    title: "Resultaten",
    iconSrc: "https://c.animaapp.com/tNip9Jvr/img/carbon-result-new.svg",
    iconAlt: "",
    iconClassName: "relative w-[83px] h-[83px] aspect-[1]",
    cardClassName:
      "px-[29px] py-[31px] shadow-[0px_4px_4px_#00000040] flex flex-col w-[251px] h-[193px] items-center justify-center gap-2.5 relative bg-[#74a2d1] rounded-[20px]",
  },
  {
    title: "Aandachtspunten",
    iconSrc: "https://c.animaapp.com/tNip9Jvr/img/mynaui-pin.svg",
    iconAlt: "",
    iconClassName: "relative w-[89px] h-[89px] aspect-[1]",
    cardClassName:
      "px-[29px] py-[23px] flex flex-col w-[251px] h-[193px] items-center justify-center gap-2.5 relative bg-[#74a2d1] rounded-[20px]",
  },
];

export const DashboardActionTilesSection = (): JSX.Element => {
  return (
    <section
      aria-label="Dashboard actions"
      className="absolute top-[755px] left-[247px] w-[873px]"
    >
      <div className="flex w-[873px] items-center justify-center gap-[60px]">
        {actionTiles.map((tile) => (
          <button
            key={tile.title}
            type="button"
            aria-label={tile.title}
            className={`${tile.cardClassName} cursor-pointer transition-transform duration-150 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
          >
            <img
              className={tile.iconClassName}
              alt={tile.iconAlt}
              aria-hidden="true"
              src={tile.iconSrc}
            />
            <div className="flex flex-col items-center justify-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch h-8 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-bold text-white text-xl text-center tracking-[-0.44px] leading-[30px] whitespace-nowrap">
                {tile.title}
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};
