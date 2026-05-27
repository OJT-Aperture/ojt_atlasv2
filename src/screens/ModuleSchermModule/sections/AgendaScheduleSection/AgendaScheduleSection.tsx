const agendaItems = [
  {
    heading: "Vandaag 18 mei:",
    headingTop: "top-[85px]",
    todoTop: "top-[121px]",
    lineTop: "top-[141px]",
    contentTop: "top-[164px]",
    panelTop: "top-[62px]",
    panelHeight: "h-[184px]",
    tasks: ["Module D", "Ademhalen", "Yoga"],
  },
  {
    heading: "Morgen 19 mei:",
    headingTop: "top-[267px]",
    todoTop: "top-[303px]",
    lineTop: "top-[323px]",
    contentTop: "top-[346px]",
    panelTop: "top-[244px]",
    panelHeight: "h-[184px]",
    tasks: ["Module D", "Ademhalen", "Yoga"],
  },
  {
    heading: "Donderdag 21 mei:",
    headingTop: "top-[448px]",
    todoTop: "top-[484px]",
    lineTop: "top-[504px]",
    contentTop: "top-[527px]",
    panelTop: "",
    panelHeight: "",
    tasks: ["Module D", "Ademhalen", "Yoga"],
  },
];

export const AgendaScheduleSection = (): JSX.Element => {
  return (
    <aside
      aria-label="Agenda"
      className="absolute top-[556px] left-[1161px] w-[260px] h-[731px]"
    >
      <div className="absolute top-1 left-0 w-60 h-[727px] flex shadow-[0px_4px_4px_#00000040]">
        <img
          className="w-[248px] h-[735px] -ml-1"
          alt=""
          src="https://c.animaapp.com/aWHY8P00/img/rectangle-269.png"
        />
      </div>
      <header className="absolute top-0 left-0 w-60 h-[63px] bg-[#74a2d1] rounded-[15px_15px_0px_0px]">
        <p className="absolute top-[11px] left-[21px] w-[170px] h-[42px] [font-family:'Poppins',Helvetica] font-normal text-white text-xl tracking-[-0.44px] leading-[30px]">
          <span className="font-bold tracking-[-0.09px]">
            Agenda <br />
          </span>
          <span className="text-base tracking-[-0.06px] leading-6">
            Ma 18 mei
          </span>
        </p>
      </header>
      {agendaItems.map((item, _index) => (
        <section key={item.heading} aria-label={item.heading}>
          {item.panelTop ? (
            <div
              className={`absolute ${item.panelTop} -left-px w-[242px] ${item.panelHeight} bg-white border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-[#81818166]`}
            />
          ) : null}

          <h2
            className={`absolute ${item.headingTop} left-[21px] h-6 flex items-center [font-family:'Poppins',Helvetica] font-bold text-black text-base tracking-[-0.35px] leading-6 whitespace-nowrap`}
          >
            {item.heading}
          </h2>
          <div
            className={`absolute ${item.todoTop} left-[21px] w-[50px] h-[21px] [font-family:'Poppins',Helvetica] font-normal text-black text-base tracking-[-0.35px] leading-6 whitespace-nowrap`}
          >
            <br />
            To do:
          </div>
          <img
            className={`absolute ${item.lineTop} left-[21px] w-[131px] h-px object-cover`}
            alt=""
            src="https://c.animaapp.com/aWHY8P00/img/line-107.svg"
          />
          <ul
            className={`absolute ${item.contentTop} left-[21px] w-[152px] h-[53px] m-0 list-none p-0 [font-family:'Poppins',Helvetica] font-normal text-[#686868] text-sm tracking-[-0.31px] leading-[21px]`}
          >
            {item.tasks.map((task, taskIndex) => (
              <li key={`${item.heading}-${task}-${taskIndex}`}>{task}</li>
            ))}
          </ul>
        </section>
      ))}
    </aside>
  );
};
