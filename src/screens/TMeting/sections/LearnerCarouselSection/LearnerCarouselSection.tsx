const learners = [
  {
    name: "Jasper de Bos",
    number: "nr. 123456",
    image: "https://c.animaapp.com/tNip9Jvr/img/ellipse-19@2x.png",
    textLeft: "left-[29px]",
  },
  {
    name: "Daan Vermeulen",
    number: "nr. 123456",
    image: "https://c.animaapp.com/tNip9Jvr/img/ellipse-19-1@2x.png",
    textLeft: "left-[17px]",
  },
  {
    name: "Sophie Jansen",
    number: "nr. 123456",
    image: "https://c.animaapp.com/tNip9Jvr/img/ellipse-19-2@2x.png",
    textLeft: "left-[26px]",
  },
  {
    name: "Milan de Vries",
    number: "nr. 123456",
    image: "https://c.animaapp.com/tNip9Jvr/img/ellipse-19-3@2x.png",
    textLeft: "left-[29px]",
  },
  {
    name: "Noor Bakker",
    number: "nr. 123456",
    image: "https://c.animaapp.com/tNip9Jvr/img/ellipse-19-4@2x.png",
    textLeft: "left-[35px]",
  },
];

export const LearnerCarouselSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="learner-carousel-heading"
      className="absolute left-64 top-[1035px] flex h-[324px] w-[1146px] flex-col gap-10"
    >
      <h2
        id="learner-carousel-heading"
        className="ml-1 flex h-9 w-[226px] items-center [font-family:'Poppins',Helvetica] text-2xl font-bold leading-9 tracking-[-0.53px] text-black"
      >
        Leerlingen:&nbsp;&nbsp;klas 1B
      </h2>
      <div
        className="relative flex h-[248px] w-[1144px] flex-wrap items-center justify-center gap-[14px_40px]"
        role="group"
        aria-label="Leerlingen klas 1B"
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
            src="https://c.animaapp.com/tNip9Jvr/img/vector-1.svg"
          />
        </button>
        {learners.map((learner) => (
          <article key={learner.name} className="relative h-[218px] w-[169px]">
            <div
              className="absolute left-0 top-0 h-[167px] w-[167px] rounded-full bg-cover bg-center overflow-hidden"
              style={{ backgroundImage: `url(${learner.image})` }}
              aria-hidden="true"
            />
            <p
              className={`absolute top-[173px] h-[45px] [font-family:'Poppins',Helvetica] text-center text-base font-normal leading-6 tracking-[-0.35px] text-black ${learner.textLeft}`}
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
            src="https://c.animaapp.com/tNip9Jvr/img/vector-2.svg"
          />
        </button>
        <div className="relative aspect-[1] h-4 w-4" aria-hidden="true" />
      </div>
    </section>
  );
};
