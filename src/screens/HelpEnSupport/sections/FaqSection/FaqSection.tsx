import { useId, useState } from "react";

const faqItems = [
  {
    id: 1,
    question: "Hoe kan ik een klas openen en de voortgang bekijken?",
    iconSrc: "/img/vector-156.svg",
    lineSrc: "/img/line-2-32.svg",
    iconWrapperClassName: "ml-[1045.7px] w-[34.35px] h-[34.35px]",
    iconClassName: "w-[22.04px]",
    defaultOpen: false,
  },
  {
    id: 2,
    question: "Hoe navigeer ik tussen modules?",
    iconSrc: "/img/vector-162.svg",
    lineSrc: "/img/line-2-32.svg",
    iconWrapperClassName: "ml-[1046.0px] w-[34.34px] h-[34.34px]",
    iconClassName: "w-[22.03px]",
    defaultOpen: false,
  },
  {
    id: 3,
    question: "Wat betekenen T0, T1 en T2 en hoe bekijk ik ze?",
    iconSrc: "/img/vector-162.svg",
    lineSrc: "/img/line-2-32.svg",
    iconWrapperClassName: "ml-[1046.0px] w-[34.34px] h-[34.34px] mt-0",
    iconClassName: "w-[22.03px]",
    defaultOpen: false,
  },
  {
    id: 4,
    question: "Hoe pas ik mijn naam, email of wachtwoord aan?",
    iconSrc: "/img/vector-162.svg",
    lineSrc: "/img/line-2-32.svg",
    iconWrapperClassName: "ml-[1046.0px] w-[34.34px] h-[34.34px] mt-0",
    iconClassName: "w-[22.03px]",
    defaultOpen: false,
  },
  {
    id: 5,
    question: "Hoe verander ik het thema of grafiektype?",
    iconSrc: "/img/vector-162.svg",
    lineSrc: "/img/line-2-32.svg",
    iconWrapperClassName: "ml-[1046.0px] w-[34.34px] h-[34.34px]",
    iconClassName: "w-[22.03px]",
    defaultOpen: false,
  },
  {
    id: 6,
    question: "Hoe bescherm ik leerlinggegevens en geef ik ouders toegang?",
    iconSrc: "/img/vector-162.svg",
    lineSrc: "/img/line-2-31.svg",
    iconWrapperClassName: "ml-[1046.0px] w-[34.34px] h-[34.34px]",
    iconClassName: "w-[22.03px]",
    defaultOpen: false,
  },
  {
    id: 7,
    question: "Hoe ontvang ik meldingen over opdrachten of updates?",
    iconSrc: "/img/vector-162.svg",
    lineSrc: "/img/line-2-32.svg",
    iconWrapperClassName: "ml-[1046.0px] w-[34.34px] h-[34.34px]",
    iconClassName: "w-[22.03px]",
    defaultOpen: false,
  },
];

export const FaqSection = (): JSX.Element => {
  const generatedId = useId();
  const [openItemId, setOpenItemId] = useState<number | null>(
    faqItems.find((item) => item.defaultOpen)?.id ?? null,
  );

  return (
    <section
      aria-label="Veelgestelde vragen"
      className="absolute top-[337px] left-80 w-[1084px] h-[399px]"
    >
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-[1154px] h-[428px] rounded-[20px] bg-[#74a2d1]"
      />
      <div className="absolute top-[15px] left-[37px] flex w-[1080px] flex-col items-start gap-2.5">
        {faqItems.map((item, index) => {
          const isOpen = openItemId === item.id;
          const panelId = `${generatedId}-faq-panel-${item.id}`;
          const buttonId = `${generatedId}-faq-button-${item.id}`;

          return (
            <div
              key={item.id}
              className="relative mr-[-3.00px] h-[41px] w-[1083px]"
            >
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() =>
                  setOpenItemId((current) =>
                    current === item.id ? null : item.id,
                  )
                }
                className="absolute inset-0 block h-[41px] w-[1083px] cursor-pointer text-left"
              >
                <span className="sr-only">Vraag {index + 1}: </span>
                <p className="absolute top-0 left-[15px] flex h-[41px] w-[954px] items-center [font-family:'Poppins',Helvetica] text-xl font-medium tracking-[-0.44px] leading-[30px] text-white">
                  {item.question}
                </p>
                <span className="absolute top-1 left-0 flex h-[37px] w-[1081px] flex-col gap-[1.7px]">
                  <span
                    className={`${item.iconWrapperClassName} flex aspect-[1]`}
                    aria-hidden="true"
                  >
                    <img
                      className={`flex-1 ${item.iconClassName}`}
                      alt=""
                      src={item.iconSrc}
                    />
                  </span>
                  <img
                    className="h-px w-[1081px] object-cover"
                    alt=""
                    aria-hidden="true"
                    src={item.lineSrc}
                  />
                </span>
              </button>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
