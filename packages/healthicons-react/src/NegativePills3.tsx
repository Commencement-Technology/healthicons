import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativePills3 = (
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
        d="M24.384 9.91a1 1 0 0 1 .914 1.08l-.602 7.187a1 1 0 0 1-1.994-.167l.603-7.187a1 1 0 0 1 1.08-.913Zm-6.627 26.847a1 1 0 0 1-1.414 0l-5.1-5.1a1 1 0 0 1 1.414-1.414l5.1 5.1a1 1 0 0 1 0 1.414Zm19.458-5.707a1 1 0 0 0-.762-1.848l-6.668 2.748a1 1 0 0 0 .762 1.849l6.668-2.748Z"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M48 0H0v48h48V0ZM32.5 14.5a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Zm-9.5 19a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0ZM33.5 40a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNegativePills3);
export default ForwardRef;
