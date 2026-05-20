import { Link } from "react-router-dom";

type ModuleCard = {
  title: string;
  description: string;
  bgColor: string;
  iconSrc: string;
  iconAlt: string;
  infoIconSrc: string;
  titleWidthClass: string;
  titleMarginClass: string;
  descriptionClassName: string;
  iconImageClassName: string;
  contentWrapperClassName: string;
  isLink?: boolean;
  to?: string;
};

const availableModules: ModuleCard[] = [
  {
    title: "Module D",
    description: "Eigenaarschap, motivatie & growth mindset",
    bgColor: "bg-[#74a2d1]",
    iconSrc: "/img/vector-23.svg",
    iconAlt: "Kroon icoon",
    infoIconSrc: "/img/vector-28.svg",
    titleWidthClass: "w-72",
    titleMarginClass: "ml-[-75.00px] mr-[-75.00px]",
    descriptionClassName:
      "relative flex items-center justify-center w-[238px] h-8 mb-[-20.00px] ml-[-163.50px] mr-[-163.50px] [font-family:'Poppins',Helvetica] font-normal text-white text-sm text-center tracking-[-0.31px] leading-[21px]",
    iconImageClassName:
      "absolute w-[91.67%] h-[79.79%] top-[20.21%] left-[8.33%]",
    contentWrapperClassName:
      "flex flex-col w-[138px] items-center gap-2.5 relative flex-[0_0_auto] mt-[-21.00px] ml-[-113.50px] mr-[-113.50px]",
    isLink: true,
    to: "/module-scherm-u124-module-d",
  },
  {
    title: "Module E",
    description: "Module E",
    bgColor: "bg-[#74a2d1]",
    iconSrc: "/img/vector-27.svg",
    iconAlt: "Module E icoon",
    infoIconSrc: "/img/vector-28.svg",
    titleWidthClass: "w-[260px]",
    titleMarginClass: "ml-[-61.00px] mr-[-61.00px]",
    descriptionClassName:
      "relative flex items-center justify-center w-[238px] h-8 ml-[-50.00px] mr-[-50.00px] [font-family:'Poppins',Helvetica] font-normal text-white text-sm text-center tracking-[-0.31px] leading-[21px]",
    iconImageClassName:
      "absolute w-[91.67%] h-[91.67%] top-[8.33%] left-[8.33%]",
    contentWrapperClassName:
      "flex flex-col w-[138px] items-center gap-2.5 relative flex-[0_0_auto] mt-[-21.00px] mb-[-21.00px] ml-[-113.50px] mr-[-113.50px]",
  },
  {
    title: "Module F",
    description: "Module F",
    bgColor: "bg-[#74a2d1]",
    iconSrc: "/img/vector-27.svg",
    iconAlt: "Module F icoon",
    infoIconSrc: "/img/vector-28.svg",
    titleWidthClass: "w-[274px]",
    titleMarginClass: "ml-[-68.00px] mr-[-68.00px]",
    descriptionClassName:
      "relative flex items-center justify-center w-[238px] h-8 ml-[-50.00px] mr-[-50.00px] [font-family:'Poppins',Helvetica] font-normal text-white text-sm text-center tracking-[-0.31px] leading-[21px]",
    iconImageClassName:
      "absolute w-[91.67%] h-[91.67%] top-[8.33%] left-[8.33%]",
    contentWrapperClassName:
      "flex flex-col w-[138px] items-center gap-2.5 relative flex-[0_0_auto] mt-[-21.00px] mb-[-21.00px] ml-[-113.50px] mr-[-113.50px]",
  },
];

const completedModules: ModuleCard[] = [
  {
    title: "Module A",
    description: "Focus, taakgerichtheid & klassenorganisatie",
    bgColor: "bg-[#4cb04f]",
    iconSrc: "/img/vector-17.svg",
    iconAlt: "Doelwit icoon",
    infoIconSrc: "/img/vector-28.svg",
    titleWidthClass: "w-[238px]",
    titleMarginClass: "ml-[-50.00px] mr-[-50.00px]",
    descriptionClassName:
      "relative flex items-center justify-center w-[238px] h-8 ml-[-50.00px] mr-[-50.00px] [font-family:'Poppins',Helvetica] font-normal text-white text-sm text-center tracking-[-0.31px] leading-[21px]",
    iconImageClassName:
      "absolute w-[95.83%] h-[95.83%] top-[4.17%] left-[4.17%]",
    contentWrapperClassName:
      "flex flex-col w-[138px] items-center gap-2.5 relative flex-[0_0_auto] mt-[-21.00px] mb-[-21.00px] ml-[-113.50px] mr-[-113.50px]",
  },
  {
    title: "Module B",
    description: "Emotieregulatie & welbevinden",
    bgColor: "bg-[#4cb04f]",
    iconSrc: "/img/vector-19.svg",
    iconAlt: "Blij gezicht icoon",
    infoIconSrc: "/img/vector-28.svg",
    titleWidthClass: "w-[278px]",
    titleMarginClass: "ml-[-70.00px] mr-[-70.00px]",
    descriptionClassName:
      "relative flex items-center justify-center w-[238px] h-8 mb-[-20.00px] ml-[-163.50px] mr-[-163.50px] [font-family:'Poppins',Helvetica] font-normal text-white text-sm text-center tracking-[-0.31px] leading-[21px]",
    iconImageClassName:
      "absolute w-[91.67%] h-[91.67%] top-[8.33%] left-[8.33%]",
    contentWrapperClassName:
      "flex flex-col w-[138px] items-center gap-2.5 relative flex-[0_0_auto] mt-[-21.00px] ml-[-113.50px] mr-[-113.50px]",
  },
  {
    title: "Module C",
    description: "Solciaal klimaat, (anti)pesten & prosiaal gedrag",
    bgColor: "bg-[#4cb04f]",
    iconSrc: "/img/vector-21.svg",
    iconAlt: "Groepsicoon",
    infoIconSrc: "/img/vector-28.svg",
    titleWidthClass: "w-[236px]",
    titleMarginClass: "ml-[-49.00px] mr-[-49.00px]",
    descriptionClassName:
      "relative flex items-center justify-center w-[238px] h-8 mb-[-20.00px] ml-[-163.50px] mr-[-163.50px] [font-family:'Poppins',Helvetica] font-normal text-white text-sm text-center tracking-[-0.31px] leading-[21px]",
    iconImageClassName:
      "absolute w-[95.00%] h-[87.50%] top-[12.50%] left-[5.00%]",
    contentWrapperClassName:
      "flex flex-col w-[138px] items-center gap-2.5 relative flex-[0_0_auto] mt-[-21.00px] ml-[-113.50px] mr-[-113.50px]",
  },
];

const ModuleCardItem = ({ module }: { module: ModuleCard }): JSX.Element => {
  const cardClassName = `flex flex-col w-[305px] h-[180px] items-center justify-center gap-2.5 px-[197px] py-[29px] relative ${module.bgColor} rounded-[20px]`;

  const content = (
    <>
      <div className={module.contentWrapperClassName}>
        <div className="relative w-20 h-20 aspect-[1]">
          <img
            className={module.iconImageClassName}
            alt={module.iconAlt}
            src={module.iconSrc}
          />
        </div>
        <div
          className={`${module.titleWidthClass} ${module.titleMarginClass} relative flex items-center justify-center h-8 [font-family:'Poppins',Helvetica] font-bold text-white text-[32px] text-center tracking-[-0.70px] leading-[48px] whitespace-nowrap`}
        >
          {module.title}
        </div>
        <p className={module.descriptionClassName}>{module.description}</p>
      </div>
      <div className="absolute top-2 right-2.5 w-6 h-6 aspect-[1]">
        <img
          className="absolute w-[91.67%] h-[91.67%] top-[8.33%] left-[8.33%]"
          alt="Meer informatie"
          src={module.infoIconSrc}
        />
      </div>
    </>
  );

  if (module.isLink && module.to) {
    return (
      <Link
        aria-label={`${module.title} openen`}
        className={cardClassName}
        to={module.to}
      >
        {content}
      </Link>
    );
  }

  return (
    <article aria-label={module.title} className={cardClassName}>
      {content}
    </article>
  );
};

const ModuleRow = ({
  title,
  modules,
  titleClassName,
}: {
  title: string;
  modules: ModuleCard[];
  titleClassName: string;
}): JSX.Element => {
  return (
    <section
      aria-labelledby={title}
      className="w-[1086px] h-[236px] flex flex-col gap-5"
    >
      <h2 className={titleClassName} id={title}>
        {title}
      </h2>
      <div className="w-[1084px] flex">
        <div className="flex w-[1084px] h-[180px] relative flex-col items-center justify-center gap-2.5">
          <div className="flex items-center justify-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
            {modules.map((module) => (
              <ModuleCardItem key={module.title} module={module} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const ModulesGridSection = (): JSX.Element => {
  return (
    <main className="absolute w-[1084px] h-[548px] top-[294px] left-[306px] flex flex-col gap-[76px]">
      <ModuleRow
        title="Selecteer een module"
        modules={availableModules}
        titleClassName="flex items-center justify-center ml-px w-[1083px] h-9 [font-family:'Poppins',Helvetica] font-normal text-black text-2xl text-center tracking-[-0.53px] leading-9"
      />
      <ModuleRow
        title="Afgeronde modules"
        modules={completedModules}
        titleClassName="flex items-center justify-center w-[1083px] h-9 [font-family:'Poppins',Helvetica] font-normal text-black text-2xl text-center tracking-[-0.53px] leading-9"
      />
    </main>
  );
};
