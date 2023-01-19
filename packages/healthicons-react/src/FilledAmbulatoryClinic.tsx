import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledAmbulatoryClinic = (
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
        d="M13.02 11.985c.057-.71.242-1.384.531-2H6v2.481l4 3.03v26.52h28V15.531l4.5-3.03V9.984H24.449c.29.616.474 1.29.532 2h14.706L36 14.468v25.547H12V14.503l-3.324-2.518h4.343Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M10 13.75 7.5 10.5h5.75L16.5 17H21l3.5-6.5H41l-3 4V41h-4V24h-8v17H10V13.75ZM14 24h7v7h-7v-7Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        d="M6 41a1 1 0 0 0 1 1h34a1 1 0 1 0 0-2H7a1 1 0 0 0-1 1Z"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M25 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0Zm-5-3v2h2v2h-2v2h-2v-2h-2v-2h2V9h2Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledAmbulatoryClinic);
export default ForwardRef;
