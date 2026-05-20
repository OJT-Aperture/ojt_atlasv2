export const AttentionPointsHeaderSection = (): JSX.Element => {
  const title = "Aandachtspunten";
  const description =
    "Een overzicht van leerlingen die extra aandacht nodig hebben.";

  return (
    <header
      className="absolute top-[143px] left-[300px] flex h-[95px] w-[1114px] flex-col gap-2"
      aria-labelledby="attention-points-heading"
    >
      <div className="flex h-[63px] w-[1116px] flex-col gap-px">
        <h1
          id="attention-points-heading"
          className="ml-[290px] flex h-[60px] w-[532px] items-center justify-center text-center [font-family:'Poppins',Helvetica] text-[40px] font-bold leading-[60px] tracking-[-0.88px] text-black"
        >
          {title}
        </h1>
        <div className="h-0.5 w-[1114px] bg-[#686868]" aria-hidden="true" />
      </div>
      <div className="ml-[318px] flex w-[479px] justify-center">
        <p className="flex h-6 w-[477px] items-center justify-center text-center [font-family:'Poppins',Helvetica] text-base font-light leading-6 tracking-[-0.35px] text-black">
          {description}
        </p>
      </div>
    </header>
  );
};
