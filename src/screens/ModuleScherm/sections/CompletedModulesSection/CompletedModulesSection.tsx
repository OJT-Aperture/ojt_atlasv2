const completedModules = [
  {
    id: "module-a",
    title: "Module A",
    description: "Focus, taakgerichtheid & klassenorganisatie",
    titleColor: "#7d1c1d",
    imageUrl: "https://c.animaapp.com/jJme9IsX/img/grafieken-default-3@2x.png",
  },
  {
    id: "module-b",
    title: "Module B",
    description: "Emotieregulatie & welbevinden",
    titleColor: "#377f37",
    imageUrl: "https://c.animaapp.com/jJme9IsX/img/grafieken-default-4@2x.png",
  },
  {
    id: "module-c",
    title: "Module C",
    description: "Solciaal klimaat, (anti)pesten & prosiaal gedrag",
    titleColor: "#7950ab",
    imageUrl: "https://c.animaapp.com/jJme9IsX/img/grafieken-default-5@2x.png",
  },
];

export const CompletedModulesSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="afgeronde-modules-heading"
      className="flex flex-col w-[799px] items-center gap-5"
    >
      <h2
        id="afgeronde-modules-heading"
        className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-bold text-black text-2xl tracking-[-0.53px] leading-9"
      >
        Afgeronde modules
      </h2>
      <div
        className="flex items-center justify-center gap-5 relative self-stretch w-full flex-[0_0_auto]"
        role="list"
        aria-label="Lijst met afgeronde modules"
      >
        {completedModules.map((module) => (
          <article
            key={module.id}
            role="listitem"
            className="relative w-[253px] h-[208.74px]"
            aria-label={module.title}
          >
            <div className="absolute top-[60px] left-0 w-[253px] h-[149px] flex flex-col gap-1 bg-[#f6f7f8] rounded-[20px] shadow-[0px_4px_4px_#00000040]">
              <div
                className="flex items-center justify-center h-[30px] mt-[64.0px] [font-family:'Poppins',Helvetica] font-bold text-xl text-center tracking-[-0.44px] leading-[30px] whitespace-nowrap"
                style={{
                  color: module.titleColor,
                  marginLeft: module.title === "Module B" ? "79px" : "78px",
                  width: module.title === "Module B" ? "91px" : "93px",
                }}
              >
                {module.title}
              </div>
              <p
                className={`flex items-center justify-center ml-3.5 w-[228px] h-8 [font-family:'Poppins',Helvetica] font-normal text-black text-center ${
                  module.title === "Module B"
                    ? "text-sm tracking-[-0.31px] leading-[21px]"
                    : "text-base tracking-[-0.35px] leading-6"
                }`}
              >
                {module.description}
              </p>
            </div>
            <div
              className="absolute top-0 left-0 w-[253px] h-[116px] rounded-[20px_20px_0px_0px] bg-cover bg-[50%_50%]"
              style={{ backgroundImage: `url(${module.imageUrl})` }}
              aria-hidden="true"
            />
            <img
              className="absolute top-[37px] left-[107px] w-[42px] h-[42px] aspect-[1]"
              alt={`${module.title} voltooid`}
              src="https://c.animaapp.com/jJme9IsX/img/lets-icons-check-fill-2.svg"
            />
          </article>
        ))}
      </div>
    </section>
  );
};
