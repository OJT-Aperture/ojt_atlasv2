import { Link } from "react-router-dom";

type SelectionCard = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  to?: string;
  cardClassName?: string;
  contentClassName: string;
  titleClassName: string;
  imageWrapperClassName: string;
  imageClassName: string;
};

const topRowCards: SelectionCard[] = [
  {
    title: "Gemiddelde resultaten modules",
    imageSrc: "/img/vector-141.svg",
    imageAlt: "Gemiddelde resultaten modules",
    contentClassName:
      "flex flex-col w-[247px] items-center justify-center gap-3 relative top-[19px] left-[29px]",
    titleClassName:
      "relative self-stretch h-8 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-bold text-white text-xl text-center tracking-[-0.44px] leading-[22.0px]",
    imageWrapperClassName: "relative w-[99px] h-[99px] aspect-[1]",
    imageClassName: "absolute w-[95.83%] h-[95.83%] top-[4.17%] left-[4.17%]",
  },
  {
    title: "Gemiddelde vooruitgang t-metingen",
    imageSrc: "/img/vector-142.svg",
    imageAlt: "Gemiddelde vooruitgang t-metingen",
    contentClassName:
      "flex flex-col w-[247px] items-center justify-center gap-3 relative top-[19px] left-[29px]",
    titleClassName:
      "relative self-stretch h-8 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-bold text-white text-xl text-center tracking-[-0.44px] leading-[22.0px]",
    imageWrapperClassName: "relative w-[103px] h-[103px] aspect-[1]",
    imageClassName: "absolute w-[87.50%] h-[87.50%] top-[12.50%] left-[12.50%]",
  },
  {
    title: "Aandachtspunten",
    imageSrc: "/img/vector-143.svg",
    imageAlt: "Aandachtspunten",
    to: "/aandachtpunten-pagina",
    contentClassName:
      "flex flex-col w-[247px] items-center justify-center gap-3 relative top-[19px] left-[29px]",
    titleClassName:
      "relative self-stretch h-8 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-bold text-white text-xl text-center tracking-[-0.44px] leading-[30px] whitespace-nowrap",
    imageWrapperClassName: "relative w-[95px] h-[95px] aspect-[1]",
    imageClassName: "absolute w-[91.18%] h-[91.19%] top-[8.81%] left-[8.82%]",
  },
];

const bottomCard: SelectionCard = {
  title: "Ultimate classroom",
  imageSrc: "/img/vector-56.svg",
  imageAlt: "Ultimate classroom",
  to: "/ultimate-classroom-versie-1",
  cardClassName:
    "ml-[45px] w-[305px] h-[180px] flex bg-[#74a2d1] rounded-[20px]",
  contentClassName:
    "flex mt-[19px] w-[247px] h-[139px] ml-[29px] relative flex-col items-center justify-center gap-3",
  titleClassName:
    "relative self-stretch h-8 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-bold text-white text-xl text-center tracking-[-0.44px] leading-[30px] whitespace-nowrap",
  imageWrapperClassName: "relative w-[95px] h-[95px] aspect-[1]",
  imageClassName: "absolute w-[89.58%] h-[81.65%] top-[18.35%] left-[10.42%]",
};

const baseCardClassName =
  "relative w-[305px] h-[180px] bg-[#74a2d1] rounded-[20px]";

const renderCardContent = (card: SelectionCard) => (
  <div className={card.contentClassName}>
    <div className={card.titleClassName}>{card.title}</div>
    <div className={card.imageWrapperClassName}>
      <img
        className={card.imageClassName}
        alt={card.imageAlt}
        src={card.imageSrc}
      />
    </div>
  </div>
);

export const ClassSelectionSection = (): JSX.Element => {
  return (
    <section
      className="absolute top-[158px] left-[302px] flex h-[555px] w-[1114px]"
      aria-labelledby="class-selection-heading"
    >
      <div className="ml-[15px] mt-[155px] flex h-[400px] w-[1084px] flex-col gap-10">
        <h2 id="class-selection-heading" className="sr-only">
          Klasselectie
        </h2>
        <div className="relative flex h-[180px] w-[1084px] items-center justify-center gap-10">
          {topRowCards.map((card) =>
            card.to ? (
              <Link
                key={card.title}
                className={`${baseCardClassName} block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1d4ed8]`}
                to={card.to}
                aria-label={card.title}
              >
                {renderCardContent(card)}
              </Link>
            ) : (
              <article
                key={card.title}
                className={baseCardClassName}
                aria-label={card.title}
              >
                {renderCardContent(card)}
              </article>
            ),
          )}
        </div>
        <Link
          className={`${bottomCard.cardClassName} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1d4ed8]`}
          to={bottomCard.to as string}
          aria-label={bottomCard.title}
        >
          {renderCardContent(bottomCard)}
        </Link>
      </div>
    </section>
  );
};
