import { ComponentPropsWithoutRef } from "react";

interface CardInterface extends ComponentPropsWithoutRef<"div"> {
  direction?: "vertical" | "horizontal";
  border?: boolean;
}

export default function Card({
  direction = "vertical",
  border = false,
  children,
}: CardInterface) {
  let styles = "";
  styles += direction === "vertical" ? "" : "";
  styles += border ? "rounded border border-current" : "";

  return (
    <article
      className={`rounded p-default flex flex-col justify-center align-center shadow-md bg-primary-100/20 ${styles}`}
    >
      {children}
    </article>
  );
}
