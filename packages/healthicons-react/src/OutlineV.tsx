import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineV = (
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
        d="M21.23 37.154a3 3 0 0 0 5.539 0l10-24a3 3 0 1 0-5.538-2.308L24 28.2l-7.231-17.354a3 3 0 1 0-5.538 2.308l10 24ZM24 37a1 1 0 0 1-.923-.615l-10-24a1 1 0 0 1 1.846-.77l8.154 19.57a1 1 0 0 0 1.846 0l8.154-19.57a1 1 0 0 1 1.846.77l-10 24A1 1 0 0 1 24 37Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineV);
export default ForwardRef;
