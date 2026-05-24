const moduleGoalItems = [
  "Lorem ipsum dolor sit amet. Et omnis vero quo vero internos et",
  "Lorem ipsum dolor sit amet. Et omnis vero quo vero internos et",
  "Lorem ipsum dolor sit amet. Et omnis vero quo vero internos et",
  "Lorem ipsum dolor sit amet. Et omnis vero quo vero internos et",
  "Lorem ipsum dolor sit amet. Et omnis vero quo vero internos et",
];

export const ModuleInfoSidebarSection = (): JSX.Element => {
  return (
    <aside
      aria-labelledby="module-info-sidebar-title"
      className="absolute top-[216px] left-[1161px] h-[663px] w-[237px]"
    >
      <div className="absolute top-0 left-0 flex h-[663px] w-[237px]">
        <img
          className="-ml-1 h-[671px] w-[245px]"
          alt=""
          aria-hidden="true"
          src="https://c.animaapp.com/jJme9IsX/img/rectangle-269.png"
        />
      </div>
      <div className="absolute top-[26px] left-[15px] flex h-[560px] w-[209px] flex-col">
        <h2
          id="module-info-sidebar-title"
          className="ml-3.5 flex h-[87.49px] w-[171px] items-center [font-family:'Poppins',Helvetica] text-base font-bold leading-6 tracking-[-0.35px] text-black"
        >
          Hoe de SLO Doel(en) in de module behaald worden:
        </h2>
        <ul className="ml-0 mt-[10.5px] w-[205px] list-disc pl-6 [font-family:'Poppins',Helvetica] text-base font-normal leading-6 tracking-[-0.35px] text-black marker:text-black">
          {moduleGoalItems.map((item, index) => (
            <li key={`${item}-${index}`}>{item}</li>
          ))}
        </ul>
        <button
          type="button"
          aria-label="Meer informatie"
          className="mt-auto ml-[17px] flex h-[30px] w-[121px] items-center justify-center rounded-[8px] bg-[#76a9dc] [font-family:'Poppins',Helvetica] text-[11px] font-semibold leading-normal text-white shadow-[0px_2px_4px_rgba(0,0,0,0.18)]"
        >
          Meer informatie
        </button>
      </div>
    </aside>
  );
};
