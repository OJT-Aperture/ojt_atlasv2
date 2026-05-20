export const UserGreetingSection = (): JSX.Element => {
  return (
    <header
      className="absolute top-36 left-[302px] h-[63px] w-[1118px]"
      aria-label="Pagina kop"
    >
      <button
        type="button"
        className="absolute left-[15px] top-[30px] flex h-8 w-[73px] items-center [font-family:'Poppins',Helvetica] text-xl font-bold leading-[30px] tracking-[-0.44px] text-black whitespace-nowrap"
        aria-label="Terug"
      >
        &lt; Terug
      </button>
      <h1 className="absolute top-0 left-[290px] flex h-[60px] w-[532px] items-center justify-center text-center [font-family:'Poppins',Helvetica] text-[40px] font-bold leading-[60px] tracking-[-0.88px] text-black">
        Klassen informatie
      </h1>
      <div
        className="absolute left-0 top-[61px] h-0.5 w-[1114px] bg-[#686868]"
        aria-hidden="true"
      />
    </header>
  );
};
