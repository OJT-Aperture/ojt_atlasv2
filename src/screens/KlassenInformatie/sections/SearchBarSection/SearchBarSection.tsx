import { useId, useState } from "react";

export const SearchBarSection = (): JSX.Element => {
  const searchId = useId();
  const [searchValue, setSearchValue] = useState("");

  return (
    <header className="flex w-[1084px] h-[100px] items-center justify-center gap-10 absolute top-0 left-[316px]">
      <div className="flex w-[181px] items-center justify-center gap-[15px] relative">
        <div className="relative w-[26px] h-[26px] ml-[-1.50px] aspect-[1]">
          <img
            className="absolute w-[95.00%] h-[89.91%] top-[10.09%] left-[5.00%]"
            alt=""
            src="/img/vector-173.svg"
          />
        </div>
        <div className="relative flex items-center justify-center w-[143px] h-[19px] mr-[-1.50px] [font-family:'Poppins',Helvetica] font-medium text-black text-xl text-center tracking-[-0.44px] leading-[30px] whitespace-nowrap">
          Harenslyceum
        </div>
      </div>
      <form
        className="relative w-[534px] h-[49px] shadow-[0px_4px_4px_#00000033]"
        role="search"
        onSubmit={(event) => event.preventDefault()}
      >
        <label htmlFor={searchId} className="sr-only">
          Zoeken naar klas, leerling, module
        </label>
        <div className="top-0 w-[532px] h-[49px] bg-[#ededed] rounded-[20px] absolute left-0" />
        <input
          id={searchId}
          type="search"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          placeholder="Zoeken naar klas, leerling, module..."
          aria-label="Zoeken naar klas, leerling, module"
          className="absolute top-0 left-0 w-[532px] h-[49px] rounded-[20px] pl-[17px] pr-[58px] [font-family:'Poppins',Helvetica] font-normal text-black text-base tracking-[-0.35px] leading-6 placeholder:text-[#00000066]"
        />
        <button
          type="submit"
          aria-label="Zoeken"
          className="absolute top-2 left-[487px] flex w-[34px] h-[34px] items-center justify-center aspect-[1] cursor-pointer"
        >
          <img className="w-[24.8px]" alt="" src="/img/vector-174.svg" />
        </button>
      </form>
      <button
        type="button"
        aria-label="Modules"
        className="relative w-[88px] h-[84px]"
      >
        <div className="absolute top-[23px] left-0 flex items-center gap-[9px]">
          <img className="w-[13px] h-[13px]" alt="" src="/img/vector-175.svg" />
          <span className="[font-family:'Poppins',Helvetica] font-normal text-black text-xl tracking-[-0.44px] leading-[30px] whitespace-nowrap">
            Modules
          </span>
        </div>
      </button>
      <button
        type="button"
        aria-label="Profiel"
        className="relative flex items-center justify-center"
      >
        <img
          className="relative w-[66px] h-[66px] object-cover"
          alt="Profielfoto"
          src="/img/ellipse-1-3.svg"
        />
      </button>
    </header>
  );
};
