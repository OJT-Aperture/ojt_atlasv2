const classCards = [
  {
    id: "3A",
    title: "Klas 3A",
    students: "22 leerlingen",
    image: "/img/grafieken-default-3.png",
    titleWidthClass: "w-[74px]",
    titleMarginClass: "ml-[87px]",
  },
  {
    id: "3B",
    title: "Klas 3B",
    students: "24 leerlingen",
    image: "/img/grafieken-default-4.png",
    titleWidthClass: "w-[72px]",
    titleMarginClass: "ml-[88px]",
  },
];

export const ClassGridSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="class-grid-section-title"
      className="flex z-[5] ml-[367px] w-[581px] h-[208.74px] relative mt-[72.3px] items-center gap-[75px]"
    >
      <h2 id="class-grid-section-title" className="sr-only">
        Beschikbare klassen
      </h2>
      {classCards.map((classCard) => (
        <article
          key={classCard.id}
          className="relative w-[253px] h-[208.74px]"
          aria-label={`${classCard.title}, ${classCard.students}`}
        >
          <div className="top-[60px] h-[149px] flex flex-col gap-[0.4px] bg-[#f6f7f8] rounded-[20px] shadow-[0px_4px_4px_#00000040] absolute left-0 w-[253px]">
            <h3
              className={`${classCard.titleMarginClass} ${classCard.titleWidthClass} flex items-center justify-center h-[30px] mt-[64.0px] [font-family:'Poppins',Helvetica] font-bold text-black text-xl text-center tracking-[-0.44px] leading-[30px] whitespace-nowrap`}
            >
              {classCard.title}
            </h3>
            <p className="ml-3.5 w-[228px] h-8 flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-black text-base text-center tracking-[-0.35px] leading-6">
              {classCard.students}
            </p>
          </div>
          <div
            className="top-0 h-[116px] rounded-[20px_20px_0px_0px] bg-cover bg-[50%_50%] absolute left-0 w-[253px]"
            style={{ backgroundImage: `url(${classCard.image})` }}
            aria-hidden="true"
          />
        </article>
      ))}
    </section>
  );
};
