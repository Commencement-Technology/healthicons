import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgE = (
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
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48 0H0v48h48V0ZM18 10a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h12a2 2 0 1 0 0-4H20v-8h10a2 2 0 1 0 0-4H20v-8h10a2 2 0 1 0 0-4H18Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgE);
export default ForwardRef;