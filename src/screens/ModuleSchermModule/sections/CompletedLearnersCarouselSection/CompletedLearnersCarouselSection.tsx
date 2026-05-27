const completedLearners = [
  {
    name: "Jasper de Bos",
    number: "nr. 123456",
    image: "https://c.animaapp.com/aWHY8P00/img/ellipse-19-3@2x.png",
    imageClassName: "absolute top-0 left-0 w-[167px] h-[167px] rounded-full bg-cover bg-center",
    textClassName:
      "absolute top-[173px] left-[29px] h-[45px] [font-family:'Poppins',Helvetica] font-normal text-black text-base text-center tracking-[-0.35px] leading-6",
    checkClassName:
      "absolute top-[62px] left-[66px] w-[42px] h-[42px] aspect-[1]",
  },
  {
    name: "Daan Vermeulen",
    number: "nr. 123456",
    image: "https://c.animaapp.com/aWHY8P00/img/ellipse-19-4@2x.png",
    imageClassName: "absolute top-0 left-0 w-[167px] h-[167px] rounded-full bg-cover bg-center",
    textClassName:
      "absolute top-[173px] left-[17px] h-[45px] [font-family:'Poppins',Helvetica] font-normal text-black text-base text-center tracking-[-0.35px] leading-6",
    checkClassName:
      "absolute top-[62px] left-[63px] w-[42px] h-[42px] aspect-[1]",
  },
  {
    name: "Sophie Jansen",
    number: "nr. 123456",
    image: "https://c.animaapp.com/aWHY8P00/img/ellipse-19-5@2x.png",
    imageClassName: "absolute top-0 left-0 w-[167px] h-[167px] rounded-full bg-cover bg-center",
    textClassName:
      "absolute top-[173px] left-[26px] h-[45px] [font-family:'Poppins',Helvetica] font-normal text-black text-base text-center tracking-[-0.35px] leading-6",
    checkClassName:
      "absolute top-[62px] left-[68px] w-[42px] h-[42px] aspect-[1]",
  },
  {
    name: "Milan de Vries",
    number: "nr. 123456",
    image: "https://c.animaapp.com/aWHY8P00/img/ellipse-19-6@2x.png",
    imageClassName: "absolute top-0 left-0 w-[167px] h-[167px] rounded-full bg-cover bg-center",
    textClassName:
      "absolute top-[173px] left-[29px] h-[45px] [font-family:'Poppins',Helvetica] font-normal text-black text-base text-center tracking-[-0.35px] leading-6",
    checkClassName:
      "absolute top-[62px] left-[62px] w-[42px] h-[42px] aspect-[1]",
  },
  {
    name: "Noor Bakker",
    number: "nr. 123456",
    image: "https://c.animaapp.com/aWHY8P00/img/ellipse-19-7@2x.png",
    imageClassName: "absolute top-0 left-0 w-[167px] h-[167px] rounded-full bg-cover bg-center",
    textClassName:
      "absolute top-[173px] left-[35px] h-[45px] [font-family:'Poppins',Helvetica] font-normal text-black text-base text-center tracking-[-0.35px] leading-6",
    checkClassName:
      "absolute top-[62px] left-[63px] w-[42px] h-[42px] aspect-[1]",
  },
];

export const CompletedLearnersCarouselSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="completed-learners-heading"
      className="absolute top-[1327px] left-[242px] flex h-[306px] w-[1155px] flex-col gap-[51.8px]"
    >
      <h2
        id="completed-learners-heading"
        className="ml-[15px] flex h-[32.21px] w-[295px] items-center whitespace-nowrap [font-family:'Poppins',Helvetica] text-2xl font-bold leading-9 tracking-[-0.53px] text-black"
      >
        Leerlingen:&nbsp;&nbsp;afgerond
      </h2>
      <div
        className="relative flex h-[222px] w-[1153px] flex-wrap items-center justify-center gap-[14px_45px]"
        aria-label="Afgeronde leerlingen carrousel"
      >
        <button
          type="button"
          aria-label="Vorige leerlingen"
          className="relative flex h-[33px] w-[19px] items-center justify-center"
        >
          <img
            className="h-[33px] w-[19px]"
            alt=""
            aria-hidden="true"
            src="https://c.animaapp.com/aWHY8P00/img/vector-2.svg"
          />
        </button>
        {completedLearners.map((learner) => (
          <article
            key={learner.name}
            className="relative mt-[-13.00px] h-[218px] w-[169px]"
            aria-label={`${learner.name}, ${learner.number}, afgerond`}
          >
            <div
              className={learner.imageClassName}
              style={{ backgroundImage: `url(${learner.image})` }}
              aria-hidden="true"
            />
            <p className={learner.textClassName}>
              <span className="font-bold tracking-[-0.06px]">
                {learner.name}
                <br />
              </span>
              <span className="text-sm leading-[21px] tracking-[-0.04px]">
                {learner.number}
              </span>
            </p>
            <img
              className={learner.checkClassName}
              alt=""
              aria-hidden="true"
              src="https://c.animaapp.com/aWHY8P00/img/lets-icons-check-fill-4.svg"
            />
          </article>
        ))}

        <button
          type="button"
          aria-label="Volgende leerlingen"
          className="relative flex h-[33px] w-[18.68px] items-center justify-center"
        >
          <img
            className="h-[33px] w-[18.68px]"
            alt=""
            aria-hidden="true"
            src="https://c.animaapp.com/aWHY8P00/img/vector-3.svg"
          />
        </button>
        <div
          className="relative mb-[-13.00px] h-4 w-4 aspect-[1]"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};
