const moduleData = {
  title: "Module D",
  description: "Eigenaarschap, motivatie & growth mindset",
  explanationTitle: "Uitleg Module D:",
  explanation:
    "Lorem ipsum dolor sit amet. Et omnis vero quo vero internos et dolor voluptatem est sunt ipsa cum magnamLorem ipsum dolor sit amet. Et omnis vero quo vero internos et dolor voluptatem est sunt ipsa cum magnamLorem ipsum dolor sit amet. Et omnis vero quo vero internos et dolor voluptatem est sunt ipsa cum magnamLorem ipsum dolor sit voluptatem est sunt ipsa cum magnam. Lorem ipsum dolor sit amet. Et omnis vero quo vero internos et dolor voluptatem est sunt ipsa cum magnamLorem ipsum .",
  buttonLabel: "Start",
  iconSrc: "https://c.animaapp.com/aWHY8P00/img/tabler-crown-filled.svg",
  iconAlt: "Kroon icoon voor Module D",
};

export const ModuleOverviewSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="module-overview-title"
      className="inline-flex items-center gap-[38px] absolute top-[248px] left-[274px]"
    >
      <div className="flex flex-col w-72 items-center relative">
        <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
          <img
            className="relative w-[94px] h-[94px] aspect-[1]"
            alt={moduleData.iconAlt}
            src={moduleData.iconSrc}
          />
          <h2
            id="module-overview-title"
            className="relative justify-center self-stretch h-8 text-center whitespace-nowrap flex items-center [font-family:'Poppins',Helvetica] font-bold text-black text-2xl tracking-[-0.53px] leading-9"
          >
            {moduleData.title}
          </h2>
        </div>
        <p className="relative flex items-center justify-center w-[271px] h-[87px] [font-family:'Poppins',Helvetica] font-normal text-black text-xl text-center tracking-[-0.44px] leading-[30px]">
          {moduleData.description}
        </p>
      </div>
      <div className="flex flex-col w-[766px] items-end relative">
        <div className="flex flex-col items-start gap-[9px] relative self-stretch w-full flex-[0_0_auto]">
          <h3 className="relative flex items-center self-stretch h-[33.96px] mt-[-1.00px] [font-family:'Poppins',Helvetica] font-bold text-black text-xl tracking-[-0.44px] leading-[30px] whitespace-nowrap">
            {moduleData.explanationTitle}
          </h3>
          <p className="relative flex items-center self-stretch [font-family:'Poppins',Helvetica] font-normal text-black text-base tracking-[-0.35px] leading-6">
            {moduleData.explanation}
          </p>
        </div>
        <button
          type="button"
          aria-label={`${moduleData.buttonLabel} ${moduleData.title}`}
          className="relative w-[172px] h-[39.96px] mr-[-2.00px] cursor-pointer"
        >
          <span className="absolute top-0 left-0 w-[170px] h-10 bg-[#629460] rounded-[10px]" />
          <span className="absolute top-2.5 left-[68px] [font-family:'Poppins',Helvetica] font-bold text-white text-sm text-center tracking-[-0.31px] leading-[normal]">
            {moduleData.buttonLabel}
          </span>
        </button>
      </div>
    </section>
  );
};
