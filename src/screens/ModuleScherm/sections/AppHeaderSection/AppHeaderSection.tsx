import { FormEvent, JSX, useState } from "react";

export const AppHeaderSection = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <header className="absolute left-[316px] top-0 flex h-[100px] w-[1084px] items-center justify-center gap-10">
      <div className="relative flex w-[181px] items-center justify-center gap-[15px]">
        <div
          className="relative ml-[-1.50px] h-[26px] w-[26px] aspect-[1] shrink-0"
          aria-hidden="true"
        >
          <img
            className="absolute left-[5.00%] top-[10.09%] h-[89.91%] w-[95.00%]"
            alt=""
            src="/img/vector-173.svg"
          />
        </div>
        <div className="relative mr-[-1.50px] flex h-[19px] w-[143px] items-center justify-center whitespace-nowrap text-center [font-family:'Poppins',Helvetica] text-xl font-medium leading-[30px] tracking-[-0.44px] text-black">
          Harenslyceum
        </div>
      </div>
      <form
        className="relative h-[49px] w-[534px] shadow-[0px_4px_4px_#00000033]"
        role="search"
        aria-label="Zoeken"
        onSubmit={handleSubmit}
      >
        <div className="absolute left-0 top-0 h-[49px] w-[532px] rounded-[20px] bg-[#ededed]" />
        <label htmlFor="app-header-search" className="sr-only">
          Zoeken naar klas, leerling, module
        </label>
        <input
          id="app-header-search"
          name="search"
          type="search"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          placeholder="Zoeken naar klas, leerling, module..."
          className="absolute left-[17px] top-0 h-[49px] w-[457px] [font-family:'Poppins',Helvetica] text-base font-normal leading-6 tracking-[-0.35px] text-black placeholder:text-[#00000066]"
          autoComplete="off"
        />
        <button
          type="submit"
          aria-label="Zoeken"
          className="absolute left-[487px] top-2 flex h-[34px] w-[34px] aspect-[1] items-center justify-center"
        >
          <img
            className="w-[24.8px] flex-none"
            alt=""
            src="/img/vector-174.svg"
          />
        </button>
      </form>
      <nav className="relative h-[84px] w-[88px]" aria-label="Hoofdnavigatie">
        <button
          type="button"
          className="flex h-full w-full items-center justify-center [font-family:'Poppins',Helvetica] text-base font-normal leading-6 tracking-[-0.35px] text-black"
          aria-label="Modules"
        >
          Modules
        </button>
      </nav>
      <button
        type="button"
        className="relative h-[66px] w-[66px] overflow-hidden rounded-full"
        aria-label="Profiel"
      >
        <img
          className="h-[66px] w-[66px] object-cover"
          alt="Profiel"
          src="/img/ellipse-1-1.svg"
        />
      </button>
    </header>
  );
};
