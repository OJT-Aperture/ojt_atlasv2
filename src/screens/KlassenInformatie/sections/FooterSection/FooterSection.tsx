const percentageLabels = [
  {
    text: "13,5%",
    className: "absolute w-[17.50%] h-[8.82%] top-[36.02%] left-[67.66%]",
  },
  {
    text: "2,5%",
    className: "absolute w-[17.50%] h-[8.82%] top-[79.35%] left-[85.05%]",
  },
  {
    text: "2,5%",
    className: "absolute w-[17.50%] h-[8.82%] top-[81.36%] left-[-5.62%]",
  },
  {
    text: "13,5%",
    className: "absolute w-[17.50%] h-[8.82%] top-[36.02%] left-[12.83%]",
  },
];

const scoreLabels = ["2,4", "3,9", "5,4", "6,1", "7,4", "8,6", "9,7"];

export const FooterSection = (): JSX.Element => {
  return (
    <section
      aria-label="Grafische samenvatting"
      className="absolute top-[968px] left-[386px] flex h-[455px] w-[964px]"
    >
      <div className="relative h-[455px] w-[964px]" aria-hidden="true">
        <div className="absolute top-[3px] left-80 flex h-[392px] w-[162px] rotate-180">
          <img
            className="h-auto w-full flex-1 -rotate-180"
            alt=""
            src="/img/vector-57.svg"
          />
        </div>
        <div className="absolute top-0 left-[21px] h-[397px] w-[943px] overflow-hidden">
          <div className="absolute top-[72.04%] left-0 flex h-[27.46%] w-[15.06%] rotate-180">
            <img
              className="w-[142px] flex-1 -rotate-180"
              alt=""
              src="/img/vector-58.svg"
            />
          </div>
          <div className="absolute top-[19.65%] left-[65.43%] h-[79.09%] w-[16.54%] bg-[url(/img/vector-59.svg)] bg-[100%_100%]" />
          <div className="absolute top-0 left-[48.89%] h-[97.98%] w-[16.44%] bg-[url(/img/vector-60.svg)] bg-[100%_100%]" />
          <div className="absolute top-[20.91%] left-[14.85%] flex h-[78.59%] w-[16.76%] rotate-180">
            <img
              className="w-[158px] flex-1 -rotate-180"
              alt=""
              src="/img/vector-61.svg"
            />
          </div>
          <div className="absolute top-[73.55%] left-[81.97%] h-[25.19%] w-[16.76%] bg-[url(/img/vector-62.svg)] bg-[100%_100%]" />
          <img
            className="absolute top-0 left-0 h-[99.62%] w-full"
            alt=""
            src="/img/vector-63.svg"
          />
          <img
            className="absolute top-[21.28%] left-[65.27%] h-[78.72%] w-[34.73%]"
            alt=""
            src="/img/vector-65.svg"
          />
          <img
            className="absolute top-[21.28%] left-[31.54%] h-[78.72%] w-[68.46%]"
            alt=""
            src="/img/vector-65.svg"
          />
          <img
            className="absolute top-0 left-[48.77%] h-[99.36%] w-[51.23%]"
            alt=""
            src="/img/vector-66.svg"
          />
          <img
            className="absolute top-[73.23%] left-[81.92%] h-[26.77%] w-[18.08%]"
            alt=""
            src="/img/vector-68.svg"
          />
          <img
            className="absolute top-[73.23%] left-[15.03%] h-[26.77%] w-[84.97%]"
            alt=""
            src="/img/vector-68.svg"
          />
          {percentageLabels.map(({ text, className }) => (
            <div
              key={`${text}-${className}`}
              className={`${className} flex items-center justify-center whitespace-nowrap text-center font-bold leading-9 tracking-[-0.53px] text-black text-2xl [font-family:'Poppins',Helvetica]`}
            >
              {text}
            </div>
          ))}
        </div>
        <div className="absolute top-[419px] left-[calc(50.00%_-_482px)] inline-flex items-center justify-center gap-[123px]">
          {scoreLabels.map((label) => (
            <div
              key={label}
              className="relative mt-[-1.00px] flex w-fit items-center justify-center whitespace-nowrap text-center font-normal leading-9 tracking-[-0.53px] text-black text-2xl [font-family:'Poppins',Helvetica]"
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
