import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeD = (
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
        d="M16 34V14h6c5.523 0 10 4.477 10 10s-4.477 10-10 10h-6Z"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M48 0H0v48h48V0ZM14 10a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h8c7.732 0 14-6.268 14-14s-6.268-14-14-14h-8Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeD);
export default ForwardRef;
