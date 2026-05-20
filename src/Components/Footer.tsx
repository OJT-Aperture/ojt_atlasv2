export const Footer = (): JSX.Element => {
  return (
    <footer className="absolute top-[1318px] left-0 w-[1440px] h-[62px] flex bg-[#74a2d1] rounded-sm overflow-hidden shadow-[0px_-6px_13px_#00000040]">
      <div className="mt-1.5 w-[161px] ml-[766px] flex gap-[13px]">
        <div className="flex items-center mt-4 w-[75px] h-5 [font-family:'Poppins',Helvetica] font-bold text-black text-[13px] tracking-[-0.29px] leading-[19.5px] whitespace-nowrap">
          Powered by
        </div>
        <img
          className="w-[71px] h-[51px] aspect-[1.4]"
          alt="Logo design labs"
          src="/img/logo-design-labs7-1.png"
        />
      </div>
    </footer>
  );
};
