import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPpeGoggles = (
  passedProps: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 48 48"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path d="M11.5 26a1.5 1.5 0 0 1 1.5-1.5h22a1.5 1.5 0 0 1 1.5 1.5v3a4.5 4.5 0 0 1-8.805 1.315c-.43-1.412-1.76-2.815-3.695-2.815-1.935 0-3.264 1.403-3.695 2.815A4.5 4.5 0 0 1 11.5 29v-3Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 9C9.82 9 4 14.82 4 22a5.002 5.002 0 0 0 4 4.9V29a8 8 0 0 0 15.653 2.336.558.558 0 0 1 .17-.264A.274.274 0 0 1 24 31c.05 0 .11.017.177.072.07.058.135.15.17.264A8 8 0 0 0 40 29v-2.1a5.002 5.002 0 0 0 4-4.9c0-7.18-5.82-13-13-13H17Zm22.872 15.871A3.001 3.001 0 0 0 42 22c0-6.075-4.925-11-11-11H17c-6.075 0-11 4.925-11 11 0 1.354.896 2.498 2.128 2.871A5.002 5.002 0 0 1 13 21h22a5.002 5.002 0 0 1 4.872 3.871ZM13 23a3 3 0 0 0-3 3v3a6 6 0 0 0 11.74 1.753C22.02 29.833 22.86 29 24 29c1.141 0 1.98.834 2.26 1.753A6 6 0 0 0 38 29v-3a3 3 0 0 0-3-3H13Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPpeGoggles);
export default ForwardRef;
