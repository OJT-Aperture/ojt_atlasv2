import React from "react";

export type ModuleCardProps = {
  id?: string;
  title: string;
  description?: string;
  imageUrl?: string;
  className?: string;
  onClick?: () => void;
};

export const ModuleCard = ({
  id,
  title,
  description,
  imageUrl,
  className = "",
  onClick,
}: ModuleCardProps): JSX.Element => {
  return (
    <article
      id={id}
      role="listitem"
      aria-label={title}
      onClick={onClick}
      className={`relative w-[253px] h-[208.74px] cursor-pointer ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-[253px] h-[116px] rounded-[20px_20px_0px_0px] bg-cover bg-[50%_50%]"
        style={{ backgroundImage: `url(${imageUrl ?? ""})` }}
      />

      <div className="absolute top-[60px] left-0 w-[253px] h-[149px] flex flex-col gap-1 bg-[#f6f7f8] rounded-[20px] shadow-[0px_4px_4px_#00000040]">
        <h3 className="flex items-center justify-center h-[30px] mt-[64.0px] [font-family:'Poppins',Helvetica] font-bold text-xl text-center tracking-[-0.44px] leading-[30px] whitespace-nowrap">
          {title}
        </h3>
        {description && (
          <p className="flex items-center justify-center mx-3.5 w-[228px] h-8 [font-family:'Poppins',Helvetica] font-normal text-black text-base text-center tracking-[-0.35px] leading-6">
            {description}
          </p>
        )}
      </div>
    </article>
  );
};
