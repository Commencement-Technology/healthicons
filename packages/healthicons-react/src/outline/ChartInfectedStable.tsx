import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgChartInfectedStable = (
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
      <path d="M7 42a1 1 0 0 1-1-1V6h2v25.995c2.31-.024 4.575-.39 6.627-1.067l3.671-1.207A14.85 14.85 0 0 1 22.92 29c1.595 0 3.176.245 4.621.721l3.672 1.211c2.122.7 4.474 1.068 6.867 1.068h1.287l-3.074-3.075a1 1 0 0 1 1.414-1.414l4.78 4.782a1 1 0 0 1 0 1.414l-4.78 4.782a1 1 0 0 1-1.414-1.414L39.366 34H38.08c-2.592 0-5.157-.398-7.493-1.168l-3.672-1.211A12.85 12.85 0 0 0 22.92 31c-1.396 0-2.765.215-3.995.62l-3.672 1.208c-2.264.746-4.743 1.143-7.253 1.167V40h34v2H7Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.482 16.5a6.067 6.067 0 0 0 1.056 2.548l-.988.988-.143-.143a1 1 0 0 0-1.414 1.414l1.7 1.7a1 1 0 0 0 1.414-1.414l-.143-.143.988-.988c.742.532 1.609.902 2.548 1.056v1.493A1 1 0 0 0 19.65 25h1.7a1 1 0 0 0 .15-1.989v-1.493a6.078 6.078 0 0 0 3.022-1.432l1.364 1.364-.143.143a1 1 0 0 0 1.414 1.414l1.7-1.7a1 1 0 0 0-1.414-1.414l-.143.143-1.505-1.505a6.06 6.06 0 0 0 .723-2.031h1.493A1 1 0 0 0 30 16.35v-1.7a1 1 0 0 0-1.989-.15h-1.493a6.067 6.067 0 0 0-1.056-2.548l.988-.988.143.143a1 1 0 0 0 1.414-1.414l-1.7-1.7a1 1 0 1 0-1.414 1.414l.143.143-.988.988A6.068 6.068 0 0 0 21.5 9.482V7.989A1 1 0 0 0 21.35 6h-1.7a1 1 0 0 0-.15 1.989v1.493a6.068 6.068 0 0 0-2.548 1.056l-.988-.988.143-.143a1 1 0 0 0-1.414-1.414l-1.7 1.7a1 1 0 0 0 1.414 1.414l.143-.143.988.988a6.067 6.067 0 0 0-1.056 2.548h-1.493a1 1 0 0 0-1.989.15v1.7a1 1 0 0 0 1.989.15h1.493Zm1.918-1a4.1 4.1 0 1 1 8.2 0 4.1 4.1 0 0 1-8.2 0Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgChartInfectedStable);
export default ForwardRef;
