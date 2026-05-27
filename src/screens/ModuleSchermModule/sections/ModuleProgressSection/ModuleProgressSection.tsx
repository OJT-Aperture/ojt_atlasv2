const progressItems = [
  {
    label: "Progress",
    value: "75%",
    labelClassName: "text-right",
    valueClassName: "w-[121px] h-[58px]",
  },
  {
    label: "Dagen",
    value: "90",
    labelClassName: "",
    valueClassName: "w-[60px] h-[57px] whitespace-nowrap",
  },
];

export const ModuleProgressSection = (): JSX.Element => {
  return (
    <section
      aria-label="Module voortgang"
      className="absolute top-[816px] left-[600px] flex w-[483px] items-center justify-center gap-[30px]"
    >
      {progressItems.map((item) => (
        <div
          key={item.label}
          className="relative inline-flex flex-[0_0_auto] items-end gap-5"
        >
          <div
            className={`relative w-fit [font-family:'Poppins',Helvetica] text-xl font-normal leading-[normal] tracking-[-0.44px] text-black ${item.labelClassName}`}
          >
            {item.label}
          </div>
          <output
            aria-label={`${item.label} ${item.value}`}
            className={`relative mt-[-1.00px] [font-family:'Poppins',Helvetica] text-5xl font-normal leading-[normal] tracking-[-1.06px] text-[#74a2d1] ${item.valueClassName}`}
          >
            {item.value}
          </output>
        </div>
      ))}
    </section>
  );
};
