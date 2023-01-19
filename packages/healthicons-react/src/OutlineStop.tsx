import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineStop = (
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
        d="M21 11v.17A3 3 0 0 0 17 14v1.17A3 3 0 0 0 13 18v11.525C13 35.31 17.69 40 23.475 40c3.637 0 7.014-1.887 8.92-4.985l5.736-9.32a3.006 3.006 0 0 0-4.92-3.436L31 25.063V14a3 3 0 0 0-4-2.83V11a3 3 0 1 0-6 0Zm4 0a1 1 0 1 0-2 0v12h-2v-9a1 1 0 1 0-2 0v11h-2v-7a1 1 0 1 0-2 0v11.525a8.475 8.475 0 0 0 15.692 4.442l5.736-9.32a1.006 1.006 0 0 0-1.647-1.15l-2.21 2.804c-1.175 1.49-3.571.66-3.571-1.238V14a1 1 0 1 0-2 0v9h-2V11Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M24 4c11.046 0 20 8.954 20 20s-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4Zm18 20c0-9.941-8.059-18-18-18S6 14.059 6 24s8.059 18 18 18 18-8.059 18-18Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineStop);
export default ForwardRef;
