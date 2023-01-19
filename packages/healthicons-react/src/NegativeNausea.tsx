import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeNausea = (
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
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fill="#333"
        fillRule="evenodd"
        d="M0 0h48v48H0V0Zm24 15h-5.012c-2.123 0-3.894.74-5.139 2A6.457 6.457 0 0 0 12 21.48c-.015 1.612.565 3.262 1.796 4.515C15.046 27.27 16.836 28 18.988 28h2.003a2 2 0 1 0 0-4h-2.003c-1.217 0-1.931-.394-2.338-.808A2.34 2.34 0 0 1 16 21.52a2.46 2.46 0 0 1 .694-1.707c.287-.29.706-.56 1.306-.703V22h3a4 4 0 0 1 0 8h-3v12a2 2 0 0 0 3.993.166L22.84 32h2.32l.847 10.166A2 2 0 0 0 30 42V19h4a2 2 0 0 0 1.414-3.414l-6-6a2 2 0 1 0-2.828 2.828L29.172 15H24Zm1.172-6.828a3.99 3.99 0 0 1 3.075-1.164A4.502 4.502 0 0 0 19.5 8.5a4.5 4.5 0 0 0 5.018 4.47 4.002 4.002 0 0 1 .654-4.798Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeNausea);
export default ForwardRef;
