const students = [
  {
    name: "Jasper de Bos",
    number: "nr. 123456",
    image: "https://c.animaapp.com/WMT0Xqbg/img/ellipse-19-5@2x.png",
  },
  {
    name: "Daan Vermeulen",
    number: "nr. 123456",
    image: "https://c.animaapp.com/WMT0Xqbg/img/ellipse-19-6@2x.png",
  },
  {
    name: "Sophie Jansen",
    number: "nr. 123456",
    image: "https://c.animaapp.com/WMT0Xqbg/img/ellipse-19-7@2x.png",
  },
  {
    name: "Milan de Vries",
    number: "nr. 123456",
    image: "https://c.animaapp.com/WMT0Xqbg/img/ellipse-19-8@2x.png",
  },
  {
    name: "Noor Bakker",
    number: "nr. 123456",
    image: "https://c.animaapp.com/WMT0Xqbg/img/ellipse-19-9@2x.png",
  },
];

export const StudentsHeaderSection = (): JSX.Element => {
  return (
    <section
      aria-label="Geselecteerde leerlingen"
      className="absolute top-72 left-[247px] w-[879px]"
    >
      <div className="flex w-[879px] items-center gap-[9px]">
        {students.map((student) => (
          <article
            key={student.name}
            className="relative h-[218px] w-[169px]"
            aria-label={`${student.name} ${student.number}`}
          >
            <div
              aria-hidden="true"
              className="absolute top-0 left-0 h-[167px] w-[167px] bg-[100%_100%]"
              style={{ backgroundImage: `url(${student.image})` }}
            />
            <p className="absolute top-[172px] left-2 h-[46px] w-[152px] [font-family:'Poppins',Helvetica] text-center text-sm font-normal leading-[21px] tracking-[-0.31px] text-black">
              <span className="font-bold tracking-[-0.04px]">
                {student.name}
                <br />
              </span>
              <span className="tracking-[-0.04px]">{student.number}</span>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};
