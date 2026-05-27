const learners = [
  {
    name: "Jasper de Bos",
    number: "nr. 123456",
    image: "https://c.animaapp.com/aWHY8P00/img/ellipse-19-3@2x.png",
    textLeftClass: "left-[29px]",
  },
  {
    name: "Daan Vermeulen",
    number: "nr. 123456",
    image: "https://c.animaapp.com/aWHY8P00/img/ellipse-19-4@2x.png",
    textLeftClass: "left-[17px]",
  },
  {
    name: "Sophie Jansen",
    number: "nr. 123456",
    image: "https://c.animaapp.com/aWHY8P00/img/ellipse-19-5@2x.png",
    textLeftClass: "left-[26px]",
  },
];

export const ActiveLearnersCarouselSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="active-learners-heading"
      className="absolute top-[973px] left-[247px] flex h-[297px] w-[875px] flex-col gap-[30.9px]"
    >
      <h2
        id="active-learners-heading"
        className="flex h-[33.73px] w-[397px] items-center whitespace-nowrap [font-family:'Poppins',Helvetica] text-2xl font-bold leading-9 tracking-[-0.53px] text-black"
      >
        Leerlingen:&nbsp;&nbsp;bezig
      </h2>
      <div
        className="relative flex h-[232.35px] w-[873px] flex-wrap items-center gap-[14px_81px]"
        role="group"
        aria-label="Actieve leerlingen"
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
        {learners.map((learner) => (
          <article
            key={learner.name}
            className="relative mt-[-7.82px] h-[218px] w-[169px]"
          >
            <div
              className="absolute left-0 top-0 h-[167px] w-[167px] rounded-full bg-cover bg-center"
              style={{ backgroundImage: `url(${learner.image})` }}
              aria-hidden="true"
            />
            <p
              className={`absolute top-[173px] h-[45px] text-center [font-family:'Poppins',Helvetica] text-base font-normal leading-6 tracking-[-0.35px] text-black ${learner.textLeftClass}`}
            >
              <span className="font-bold tracking-[-0.06px]">
                {learner.name}
                <br />
              </span>
              <span className="text-sm leading-[21px] tracking-[-0.04px]">
                {learner.number}
              </span>
            </p>
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
        <div className="mb-[-7.82px] aspect-[1] h-4 w-4" aria-hidden="true" />
      </div>
    </section>
  );
};
