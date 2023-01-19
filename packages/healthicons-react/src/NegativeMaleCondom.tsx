import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeMaleCondom = (
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
        d="M19.67 26.5a5 5 0 1 0 8.66-5 5 5 0 0 0-8.66 5Zm1.576-.91a3.18 3.18 0 1 0 5.51-3.181 3.18 3.18 0 0 0-5.51 3.18Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M28.502 31.795a9 9 0 1 1-9-15.589 9 9 0 0 1 9 15.589Zm-1-1.735a6.999 6.999 0 1 1-6.999-12.122 6.999 6.999 0 0 1 7 12.122Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M48 0H0v48h48V0ZM31.994 7.14 27.886 6 7.09 18.517 6 22.787l2.733.764-.732 2.85 2.733.763-.732 2.85 2.733.764-.732 2.85 2.733.763-.732 2.85 2.734.764-.733 2.85 4.1 1.145 20.788-12.512L42 25.208l-2.734-.764.733-2.85-2.734-.763.733-2.85-2.734-.764.732-2.85-2.733-.763.733-2.85-2.734-.764.732-2.85Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeMaleCondom);
export default ForwardRef;
