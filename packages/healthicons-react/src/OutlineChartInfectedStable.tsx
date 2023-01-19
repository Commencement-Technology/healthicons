import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineChartInfectedStable = (
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
      <path fill="#fff" d="M0 0h48v48H0z" />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M22.92 31c-1.396 0-2.765.215-3.995.62l-3.672 1.208c-2.337.77-4.902 1.168-7.495 1.168H7a1 1 0 1 1 0-2h.758c2.393 0 4.746-.368 6.869-1.068l3.671-1.207A14.85 14.85 0 0 1 22.92 29c1.595 0 3.176.245 4.621.721m0 0 3.672 1.211c2.122.7 4.474 1.068 6.867 1.068H41a1 1 0 1 1 0 2h-2.92c-2.592 0-5.157-.398-7.493-1.168l-3.672-1.211A12.85 12.85 0 0 0 22.92 31"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M36.293 27.51a1 1 0 0 1 1.414 0l4.78 4.783a1 1 0 0 1 0 1.414l-4.78 4.782a1 1 0 0 1-1.414-1.414L40.366 33l-4.073-4.075a1 1 0 0 1 0-1.415Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M8 6v34h34v2H7a1 1 0 0 1-1-1V6h2Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M20.5 11.4a4.1 4.1 0 1 0 0 8.2 4.1 4.1 0 0 0 0-8.2Zm-6.1 4.1a6.1 6.1 0 1 1 12.2 0 6.1 6.1 0 0 1-12.2 0ZM18.65 7a1 1 0 0 1 1-1h1.7a1 1 0 1 1 0 2h-1.7a1 1 0 0 1-1-1Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M19.5 11.25v-3.4h2v3.4h-2Zm5.393-3.257a1 1 0 0 1 1.414 0l1.7 1.7a1 1 0 0 1-1.414 1.414l-1.7-1.7a1 1 0 0 1 0-1.414Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="m23.193 11.393 2.55-2.55 1.414 1.414-2.55 2.55-1.414-1.414ZM29 13.65a1 1 0 0 1 1 1v1.7a1 1 0 1 1-2 0v-1.7a1 1 0 0 1 1-1Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M24.6 15.5a1 1 0 0 1 1-1H29a1 1 0 1 1 0 2h-3.4a1 1 0 0 1-1-1Zm4.257 4.393a1 1 0 0 1 0 1.414l-1.7 1.7a1 1 0 0 1-1.414-1.414l1.7-1.7a1 1 0 0 1 1.414 0Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="m25.457 18.193 2.55 2.55-1.414 1.414-2.55-2.55 1.414-1.414ZM18.65 24a1 1 0 0 1 1-1h1.7a1 1 0 1 1 0 2h-1.7a1 1 0 0 1-1-1Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M20.5 19.6a1 1 0 0 1 1 1V24a1 1 0 1 1-2 0v-3.4a1 1 0 0 1 1-1Zm-7.507.293a1 1 0 0 1 1.414 0l1.7 1.7a1 1 0 0 1-1.414 1.414l-1.7-1.7a1 1 0 0 1 0-1.414Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="m17.807 19.607-2.55 2.55-1.414-1.414 2.55-2.55 1.414 1.414ZM12 13.65a1 1 0 0 1 1 1v1.7a1 1 0 1 1-2 0v-1.7a1 1 0 0 1 1-1Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M11 15.5a1 1 0 0 1 1-1h3.4a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1Zm5.107-7.507a1 1 0 0 1 0 1.414l-1.7 1.7a1 1 0 0 1-1.414-1.414l1.7-1.7a1 1 0 0 1 1.414 0Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="m16.393 12.807-2.55-2.55 1.414-1.414 2.55 2.55-1.414 1.414Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineChartInfectedStable);
export default ForwardRef;
