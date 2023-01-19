import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineHome = (
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
        d="M4 37a1 1 0 0 1 1-1h36a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M12 23.16V36h24V23.16l-12-6.857-12 6.858ZM10 22v16h28V22l-14-8-14 8Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        d="M28 25h6v11h-6V25Zm-14 0h11v6H14v-6Zm18-10.182V12h3v5l-3-2.182Z"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M31 12a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5a1 1 0 0 1-1.588.809l-3-2.182a1 1 0 0 1-.412-.809V12Zm2 1v1.309l1 .727V13h-1Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M23.493 10.138a1 1 0 0 1 1.014 0l17.862 10.507-1.014 1.724L24 12.16 6.645 22.37l-1.014-1.724 17.862-10.507Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineHome);
export default ForwardRef;
