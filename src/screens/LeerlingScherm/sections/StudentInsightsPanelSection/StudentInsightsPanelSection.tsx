const students = [
  {
    name: "Lotte de Bos",
    number: "nr. 123456",
    imageType: "background" as const,
    imageSrc: "https://c.animaapp.com/WMT0Xqbg/img/ellipse-19-20@2x.png",
  },
  {
    name: "Ruben Kuipers",
    number: "nr. 123456",
    imageType: "image" as const,
    imageSrc: "https://c.animaapp.com/WMT0Xqbg/img/frame-89.svg",
  },
  {
    name: "Julian Dekker",
    number: "nr. 123456",
    imageType: "background" as const,
    imageSrc: "https://c.animaapp.com/WMT0Xqbg/img/ellipse-19-21@2x.png",
  },
  {
    name: "Jasper de Bos junior",
    number: "nr. 123456",
    imageType: "background" as const,
    imageSrc: "https://c.animaapp.com/WMT0Xqbg/img/ellipse-19-22@2x.png",
  },
  {
    name: "Jasperina de Bos",
    number: "nr. 123456",
    imageType: "background" as const,
    imageSrc: "https://c.animaapp.com/WMT0Xqbg/img/ellipse-19-23@2x.png",
  },
];

export const StudentInsightsPanelSection = (): JSX.Element => {
  return (
    <section
      aria-label="Geselecteerde leerlingen"
      className="absolute top-[804px] left-[247px] w-[876px]"
    >
      <ul className="flex items-center gap-[9px]">
        {students.map((student) => (
          <li
            key={student.name}
            className="relative h-[218px] w-[169px] list-none"
          >
            {student.imageType === "image" ? (
              <img
                className="absolute top-0 left-0 h-[167px] w-[167px]"
                alt={student.name}
                src={student.imageSrc}
              />
            ) : (
              <div
                aria-label={student.name}
                role="img"
                className="absolute top-0 left-0 h-[167px] w-[167px] bg-[100%_100%]"
                style={{ backgroundImage: `url(${student.imageSrc})` }}
              />
            )}

            <p className="absolute top-[172px] left-2 h-[46px] w-[152px] text-center [font-family:'Poppins',Helvetica] text-sm font-normal leading-[21px] tracking-[-0.31px] text-black">
              <span className="font-bold tracking-[-0.04px]">
                {student.name}
                <br />
              </span>
              <span className="tracking-[-0.04px]">{student.number}</span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};
