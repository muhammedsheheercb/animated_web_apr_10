import { SVGProps } from "react";
import clsx from "clsx";

export function FizziLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      viewBox="0 0 240 80"
      className={clsx("group", props.className)}
      aria-labelledby="tasty-logo-title"
    >
      <title id="tasty-logo-title">Tasty</title>
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="900"
        fontSize="52"
      >
        Tasty
      </text>
    </svg>
  );
}
