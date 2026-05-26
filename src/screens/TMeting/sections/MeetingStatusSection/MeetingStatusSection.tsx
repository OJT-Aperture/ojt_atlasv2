const meetingStatuses = [
  { label: "T-0", left: "left-[0px]" },
  { label: "T-1", left: "left-[365px]" },
  { label: "T-2", left: "left-[730px]" },
];

export const MeetingStatusSection = (): JSX.Element => {
  return (
    <section
      aria-label="Meeting status timeline"
      className="absolute top-[86px] left-[40px] w-[793px] h-[197px]"
    >
      <div
        aria-hidden="true"
        className="absolute top-[21px] left-0 w-[793px] h-[118px] bg-[#d9d9d9] rounded-[25px]"
      />
      <div
        aria-hidden="true"
        className="absolute top-[21px] left-0 w-[312px] h-[118px] bg-[#629460] rounded-[25px_0px_0px_25px]"
      />
      {meetingStatuses.map((status) => (
        <div
          key={status.label}
          className={`absolute top-0 ${status.left} flex flex-col w-[63px] items-center gap-1.5`}
        >
          <img
            className="relative self-stretch w-full h-[161px]"
            alt=""
            aria-hidden="true"
            src="https://c.animaapp.com/tNip9Jvr/img/line-12-2.svg"
          />
          <div className="relative self-stretch font-bold text-black text-xl text-center tracking-[-0.44px] leading-[normal] [font-family:'Poppins',Helvetica]">
            {status.label}
          </div>
        </div>
      ))}
    </section>
  );
};
