import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledS = (
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
        d="M22 14a4 4 0 0 0 0 8h4a8 8 0 1 1 0 16h-4a8.003 8.003 0 0 1-7.544-5.334 2 2 0 0 1 3.771-1.332A4.002 4.002 0 0 0 22 34h4a4 4 0 0 0 0-8h-4a8 8 0 1 1 0-16h4a8.003 8.003 0 0 1 7.544 5.334 2 2 0 0 1-3.771 1.332A4.002 4.002 0 0 0 26 14h-4Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledS);
export default ForwardRef;
