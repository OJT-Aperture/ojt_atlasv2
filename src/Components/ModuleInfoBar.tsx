import React from "react";

export type ModuleInfoBarProps = {
  title?: string;
  items?: string[];
  className?: string;
};

export const ModuleInfoBar = ({
  title = "Hoe de SLO Doel(en) in de module behaald worden:",
  items = [],
  className = "",
}: ModuleInfoBarProps): JSX.Element => {
  return (
    <div className={`p-4 ${className}`}>
      <h2
        className="ml-3.5 flex h-[87.49px] w-[171px] items-center [font-family:'Poppins',Helvetica] text-base font-bold leading-6 tracking-[-0.35px] text-black"
        aria-label={title}
      >
        {title}
      </h2>
      <ul className="mt-2 w-full list-disc pl-6 [font-family:'Poppins',Helvetica] text-base font-normal leading-6 tracking-[-0.35px] text-black marker:text-black">
        {items.map((item, index) => (
          <li key={`${item}-${index}`} className="mb-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
