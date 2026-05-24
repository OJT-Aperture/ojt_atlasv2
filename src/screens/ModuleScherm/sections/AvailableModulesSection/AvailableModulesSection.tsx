const modules = [
  {
    id: "module-d",
    title: "Module D",
    description: "Eigenaarschap, motivatie & growth mindset",
    titleColor: "text-[#7d1c64]",
    imageUrl: "https://c.animaapp.com/jJme9IsX/img/grafieken-default@2x.png",
    titleWidthClass: "w-[93px]",
    titleMarginClass: "ml-[78px]",
    descriptionMarginClass: "ml-[13px]",
    descriptionTag: "p",
  },
  {
    id: "module-e",
    title: "Module E",
    description: "Beschrijving van module E",
    titleColor: "text-[#eb7a24]",
    imageUrl: "https://c.animaapp.com/jJme9IsX/img/grafieken-default-1@2x.png",
    titleWidthClass: "w-[89px]",
    titleMarginClass: "ml-20",
    descriptionMarginClass: "ml-3.5",
    descriptionTag: "div",
  },
  {
    id: "module-f",
    title: "Module F",
    description: "Beschrijving van module F",
    titleColor: "text-[#2d8ac4]",
    imageUrl: "https://c.animaapp.com/jJme9IsX/img/grafieken-default-2@2x.png",
    titleWidthClass: "w-[89px]",
    titleMarginClass: "ml-20",
    descriptionMarginClass: "ml-3.5",
    descriptionTag: "div",
  },
] as const;

export const AvailableModulesSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="available-modules-heading"
      className="flex flex-col w-[799px] items-start gap-5 absolute top-[241px] left-[282px]"
    >
      <h2
        id="available-modules-heading"
        className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-bold text-black text-2xl tracking-[-0.53px] leading-9"
      >
        Selecteer een module
      </h2>
      <div
        className="flex items-center gap-5 relative self-stretch w-full flex-[0_0_auto]"
        role="list"
        aria-label="Beschikbare modules"
      >
        {modules.map((module) => {
          const DescriptionTag = module.descriptionTag;

          return (
            <article
              key={module.id}
              role="listitem"
              aria-label={module.title}
              className="relative w-[253px] h-[208.74px]"
            >
              <div className="absolute top-[60px] left-0 w-[253px] h-[149px] flex flex-col gap-1 bg-[#f6f7f8] rounded-[20px] shadow-[0px_4px_4px_#00000040]">
                <h3
                  className={`${module.titleMarginClass} ${module.titleWidthClass} ${module.titleColor} flex items-center justify-center h-[30px] mt-[64.0px] [font-family:'Poppins',Helvetica] font-bold text-xl text-center tracking-[-0.44px] leading-[30px] whitespace-nowrap`}
                >
                  {module.title}
                </h3>
                <DescriptionTag
                  className={`flex items-center justify-center ${module.descriptionMarginClass} w-[228px] h-8 [font-family:'Poppins',Helvetica] font-normal text-black text-base text-center tracking-[-0.35px] leading-6`}
                >
                  {module.description}
                </DescriptionTag>
              </div>
              <div
                aria-hidden="true"
                className="absolute top-0 left-0 w-[253px] h-[116px] rounded-[20px_20px_0px_0px] bg-cover bg-[50%_50%]"
                style={{ backgroundImage: `url(${module.imageUrl})` }}
              />
            </article>
          );
        })}
      </div>
    </section>
  );
};
