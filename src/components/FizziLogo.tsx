import { SVGProps } from "react";
import clsx from "clsx";

export function FizziLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      viewBox="0 0 240 80"
      className={clsx("group", props.className)}
      aria-labelledby="rusty-ladle-logo-title"
    >
      <title id="rusty-ladle-logo-title">The Rusty Ladle</title>
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="900"
        fontSize="28"
      >
        The Rusty Ladle
      </text>
    </svg>
  );
}
