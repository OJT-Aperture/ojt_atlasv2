const introContent = {
  title: "Uitleg Module D:",
  description:
    "Lorem ipsum dolor sit amet. Et omnis vero quo vero internos et dolor voluptatem est sunt ipsa cum magnamLorem ipsum dolor sit amet. Et omnis vero quo vero internos et dolor voluptatem est sunt ipsa cum magnamLorem ipsum dolor sit amet. Et omnis vero quo vero internos et dolor voluptatem est sunt ipsa cum magnamLorem ipsum dolor sit voluptatem est sunt ipsa cum magnam",
};

export const ModulesIntroSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="modules-intro-section-title"
      className="absolute top-[260px] left-[613px] h-[126px] w-[508px]"
    >
      <h2
        id="modules-intro-section-title"
        className="absolute top-0 left-0 flex h-[34px] w-[484px] items-center [font-family:'Poppins',Helvetica] text-sm font-bold leading-[21px] tracking-[-0.31px] text-black"
      >
        {introContent.title}
      </h2>
      <p className="absolute top-8 left-0 flex h-[94px] w-[504px] items-center [font-family:'Poppins',Helvetica] text-xs font-normal leading-[18px] tracking-[-0.26px] text-black">
        {introContent.description}
      </p>
    </section>
  );
};
