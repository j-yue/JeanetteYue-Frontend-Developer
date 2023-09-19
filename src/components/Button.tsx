import { ComponentPropsWithoutRef } from "react";

interface ButtonInterface extends ComponentPropsWithoutRef<"button"> {
  // button appearance
  variant?: "primary" | "secondary" | "ghost" | "danger";
}

export default function Button({
  variant = "primary",
  children,
  ...args
}: ButtonInterface) {
  let variantStyles;

  switch (variant) {
    case "primary":
      variantStyles = "text-white bg-primary-200 focus:bg-primary-300";
      break;

    case "secondary":
      variantStyles = "text-white bg-secondary-200 focus:bg-secondary-300";
      break;

    case "ghost":
      variantStyles = "bg-transparent focus:bg-pearl-100";
      break;

    case "danger":
      variantStyles =
        "bg-transparent text-red-700 border border-current focus:bg-red-100";
      break;
  }
  return (
    <button
      className={`rounded font-['Zilla_Slab'] font-semibold leading-tight p-2 w-full max-w-[50%] md:max-w-[33%] lg:max-w-[25%] duration-100 hover:cursor-pointer active:drop-shadow-lg ${variantStyles}`}
      {...args}
    >
      {children}
    </button>
  );
}
