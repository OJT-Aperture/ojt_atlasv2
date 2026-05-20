const metrics = [
  {
    id: "attention-points",
    value: "4",
    label: "Leerlingen met aandachtspunten",
    cardClassName: "left-0",
    contentClassName: "top-[46px] left-[22px] w-[183px] h-[68px]",
    labelClassName: "font-medium text-lg tracking-[-0.07px] leading-[27px]",
    icon: null,
  },
  {
    id: "new-insights",
    value: "2",
    label: "Nieuwe inzichten van resultaten",
    cardClassName: "left-[222px]",
    contentClassName: "top-[42px] left-[246px] w-[185px] h-[68px]",
    labelClassName: "font-medium text-lg tracking-[-0.07px] leading-[27px]",
    icon: (
      <div className="absolute top-[22px] left-[304px] w-[34px] h-[34px] rounded overflow-hidden aspect-[1]">
        <div className="relative w-[83.33%] h-[92.01%] top-[8.33%] left-[8.33%]">
          <img
            className="absolute w-[49.62%] h-[3.03%] top-[96.97%] left-[50.38%]"
            alt=""
            aria-hidden="true"
            src="/img/vector-175.svg"
          />
          <img
            className="absolute w-full h-full top-0 left-0"
            alt=""
            aria-hidden="true"
            src="/img/vector-176.svg"
          />
        </div>
      </div>
    ),
  },
  {
    id: "students-total",
    value: "15",
    label: "Totaal aantal leerlingen",
    cardClassName: "left-[444px]",
    contentClassName: "top-[41px] left-[476px] w-[185px] h-[68px]",
    labelClassName: "font-medium text-lg tracking-[-0.07px] leading-[27px]",
    icon: null,
  },
  {
    id: "positive-growth",
    value: "9",
    label: "Positieve groei momenten van leerlingen deze week",
    cardClassName: "left-[666px]",
    contentClassName: "top-12 left-[694px] w-[185px] h-[68px]",
    labelClassName:
      "font-medium text-[15px] tracking-[-0.05px] leading-[22.5px]",
    icon: null,
  },
];

export const AttentionPointsMetricsSection = (): JSX.Element => {
  return (
    <section
      aria-label="Samenvatting aandachtspunten"
      className="absolute top-[276px] left-[413px] w-[879px] h-[152px] shadow-[0px_4px_4px_#00000040]"
    >
      <div className="relative w-full h-full">
        {metrics.map((metric) => (
          <div key={metric.id}>
            <div
              className={`absolute top-0 ${metric.cardClassName} w-[198px] h-[152px] bg-[#ebebeb] rounded-[20px]`}
              aria-hidden="true"
            />
            {metric.icon}
            <div className={`absolute flex ${metric.contentClassName}`}>
              <p className="w-[183px] h-[68px] [font-family:'Poppins',Helvetica] font-normal text-[#484848] text-xl tracking-[-0.44px] leading-[30px]">
                <span className="font-bold tracking-[-0.09px]">
                  {metric.value}
                  <br />
                </span>
                <span className={metric.labelClassName}>{metric.label}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
