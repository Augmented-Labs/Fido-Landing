import React, { FC } from "react";

export enum ButtonType {
  Primary = "primary",
  Secondary = "secondary",
  Outline = "outline",
}

interface IButton {
  className?: string;
  variant?: ButtonType;
  children: React.ReactNode;
}
const Button: FC<IButton> = ({
  children,
  className,
  variant = ButtonType.Primary,
}) => {
  return (
    <div className="flex space-x-2 justify-center">
      <button
        type="button"
        className={`inline-block 
        px-6 
        py-2.5
        ${variant === ButtonType.Primary && "bg-secondary text-black"}
        ${variant === ButtonType.Secondary && "bg-primary text-white"}
        ${
          variant === ButtonType.Outline && "bg-transparent border border-white"
        }
        font-medium 
        text-xs 
        leading-tight
        uppercase
        hover:shadow-lg 
        focus:shadow-lg 
        focus:outline-none 
        focus:ring-0 
        active:shadow-lg 
        transition duration-150 ease-in-out ${className}`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
