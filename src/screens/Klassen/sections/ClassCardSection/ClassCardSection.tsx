const classCards = [
  {
    id: "klas-1a",
    title: "Klas 1A",
    students: "24 leerlingen",
    image: "/img/grafieken-default.png",
    titleClassName: "ml-[90px] w-[69px]",
    studentsClassName: "ml-[79px] w-[99px]",
  },
  {
    id: "klas-1b",
    title: "Klas 1B",
    students: "21 leerlingen",
    image: "/img/grafieken-default-1.png",
    titleClassName: "ml-[91px] w-[67px]",
    studentsClassName: "ml-[81px] w-[94px]",
  },
  {
    id: "klas-2a",
    title: "Klas 2A",
    students: "28 leerlingen",
    image: "/img/grafieken-default-2.png",
    titleClassName: "ml-[88px] w-[73px]",
    studentsClassName: "ml-[79px] w-[99px]",
  },
];

export const ClassCardSection = (): JSX.Element => {
  return (
    <section
      aria-label="Beschikbare klassen"
      className="relative z-[4] mt-12 ml-80 flex h-[208.74px] w-[1003px] items-center justify-center gap-[75px]"
    >
      {classCards.map((classCard) => (
        <article
          key={classCard.id}
          className="relative h-[208.74px] w-[253px]"
          aria-label={`${classCard.title}, ${classCard.students}`}
        >
          <div className="absolute left-0 top-[60px] flex h-[149px] w-[253px] flex-col gap-[4.4px] rounded-[20px] bg-[#f6f7f8] shadow-[0px_4px_4px_#00000040]">
            <h3
              className={`${classCard.titleClassName} mt-[64px] flex h-[30px] items-center justify-center whitespace-nowrap [font-family:'Poppins',Helvetica] text-center text-xl font-bold leading-[30px] tracking-[-0.44px] text-black`}
            >
              {classCard.title}
            </h3>
            <p
              className={`${classCard.studentsClassName} flex h-6 items-center justify-center whitespace-nowrap [font-family:'Poppins',Helvetica] text-center text-base font-normal leading-6 tracking-[-0.35px] text-black`}
            >
              {classCard.students}
            </p>
          </div>
          <div
            className="absolute left-0 top-0 h-[116px] w-[253px] rounded-[20px_20px_0px_0px] bg-cover bg-[50%_50%]"
            style={{ backgroundImage: `url(${classCard.image})` }}
            role="img"
            aria-label={classCard.title}
          />
        </article>
      ))}
    </section>
  );
};
