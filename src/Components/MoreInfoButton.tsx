import React from "react";

export type MoreInfoButtonProps = {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
};

export const MoreInfoButton = ({
  onClick,
  className = "",
  children,
}: MoreInfoButtonProps): JSX.Element => {
  return (
    <button
      type="button"
      aria-label="Meer informatie"
      onClick={onClick}
      className={`flex h-[30px] w-[121px] items-center justify-center rounded-[8px] bg-[#76a9dc] [font-family:'Poppins',Helvetica] text-[11px] font-semibold leading-normal text-white shadow-[0px_2px_4px_rgba(0,0,0,0.18)] ${className}`}
    >
      {children ?? "Meer informatie"}
    </button>
  );
};
