import clsx from "clsx";

type Props = {
  textColor?: string;
  backgroundColor?: string;
  className?: string;
};

export default function CircleText({
  textColor = "#1A871D",
  backgroundColor = "#FFFCFA",
  className,
}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      className={clsx("circle-text animate-spin-slow origin-center", className)}
      aria-label="The Rusty Ladle • Fresh • Daily • Real •"
    >
      <circle cx="100" cy="100" r="100" fill={backgroundColor} />
      <defs>
        <path
          id="circle-path"
          d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
        />
      </defs>
      <text
        fill={textColor}
        fontSize="17"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="700"
        letterSpacing="3"
      >
        <textPath href="#circle-path">
          TASTY • FRESH • DAILY • REAL •&nbsp;
        </textPath>
      </text>
    </svg>
  );
}
