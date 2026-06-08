const creditMembers = [
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

export const FooterCreditsSection = (): JSX.Element => {
  return (
    <section
      aria-label="Projectleden"
      className="absolute top-[1320px] left-[247px]"
    >
      <div className="flex w-[879px] items-center gap-[9px]">
        {creditMembers.map((member) => (
          <article key={member.name} className="relative h-[218px] w-[169px]">
            <div
              aria-hidden="true"
              className="absolute top-0 left-0 h-[167px] w-[167px] bg-[100%_100%]"
              style={{ backgroundImage: `url(${member.image})` }}
            />
            <p className="absolute top-[172px] left-2 h-[46px] w-[152px] text-center font-normal [font-family:'Poppins',Helvetica] text-sm leading-[21px] tracking-[-0.31px] text-black">
              <span className="font-bold tracking-[-0.04px]">
                {member.name}
                <br />
              </span>
              <span className="tracking-[-0.04px]">{member.number}</span>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};
