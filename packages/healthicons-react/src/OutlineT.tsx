import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineT = (
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
        d="M13 12a3 3 0 0 1 3-3h16a3 3 0 1 1 0 6h-5v21a3 3 0 1 1-6 0V15h-5a3 3 0 0 1-3-3Zm3-1a1 1 0 1 0 0 2h7v23a1 1 0 1 0 2 0V13h7a1 1 0 1 0 0-2H16Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineT);
export default ForwardRef;
