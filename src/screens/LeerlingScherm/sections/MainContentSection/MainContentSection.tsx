const students = [
  {
    name: "Lucas Smit",
    number: "nr. 123456",
    image: "https://c.animaapp.com/WMT0Xqbg/img/ellipse-19-15@2x.png",
  },
  {
    name: "Emma van Dijk",
    number: "nr. 123456",
    image: "https://c.animaapp.com/WMT0Xqbg/img/ellipse-19-16@2x.png",
  },
  {
    name: "Finn Mulder",
    number: "nr. 123456",
    image: "https://c.animaapp.com/WMT0Xqbg/img/ellipse-19-17@2x.png",
  },
  {
    name: "Sara Meijer",
    number: "nr. 123456",
    image: "https://c.animaapp.com/WMT0Xqbg/img/ellipse-19-18@2x.png",
  },
  {
    name: "Thomas Visser",
    number: "nr. 123456",
    image: "https://c.animaapp.com/WMT0Xqbg/img/ellipse-19-19@2x.png",
  },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <section
      aria-label="Leerlingen"
      className="absolute left-[247px] top-[546px] w-[879px]"
    >
      <div className="flex w-[879px] items-center gap-[9px]">
        {students.map((student) => (
          <article key={student.name} className="relative h-[218px] w-[169px]">
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 h-[167px] w-[167px] bg-[100%_100%]"
              style={{ backgroundImage: `url(${student.image})` }}
            />
            <p className="absolute left-2 top-[172px] h-[46px] w-[152px] text-center font-normal [font-family:'Poppins',Helvetica] text-sm leading-[21px] tracking-[-0.31px] text-black">
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
