import Link from "next/link";
import { LinkField } from "@prismicio/client";
import clsx from "clsx";

type Props = {
  buttonLink: LinkField;
  buttonText: string | null;
  className?: string;
};

export default function Button({ buttonText, className }: Props) {
  const label = buttonText
    ? buttonText.toLowerCase().includes("shop")
      ? "Order Now"
      : buttonText
    : "Order Now";

  return (
    <Link
      href="/menu"
      className={clsx(
        "rounded-xl bg-cyan-600 px-5 py-4 text-center text-xl font-bold uppercase tracking-wide text-white transition-colors duration-150 hover:bg-cyan-700 md:text-2xl",
        className,
      )}
    >
      {label}
    </Link>
  );
}
