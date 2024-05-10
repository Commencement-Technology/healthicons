import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgChartInfectedIncreasing = (
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
      <path d="M19.65 6a1 1 0 0 0-.15 1.989v1.493a6.068 6.068 0 0 0-2.548 1.056l-.988-.988.143-.143a1 1 0 0 0-1.414-1.414l-1.7 1.7a1 1 0 0 0 1.414 1.414l.143-.143.988.988a6.067 6.067 0 0 0-1.056 2.548h-1.493a1 1 0 0 0-1.989.15v1.7a1 1 0 0 0 1.989.15h1.493a6.067 6.067 0 0 0 1.056 2.548l-.988.988-.143-.143a1 1 0 0 0-1.414 1.414l1.7 1.7a1 1 0 0 0 1.414-1.414l-.143-.143.988-.988c.742.532 1.609.902 2.548 1.056v1.493A1 1 0 0 0 19.65 25h1.7a1 1 0 0 0 .15-1.989v-1.493a6.078 6.078 0 0 0 3.022-1.432l1.364 1.364-.143.143a1 1 0 0 0 1.414 1.414l1.7-1.7a1 1 0 0 0-1.414-1.414l-.143.143-1.505-1.505a6.06 6.06 0 0 0 .723-2.031h1.493A1 1 0 0 0 30 16.35v-1.7a1 1 0 0 0-1.989-.15h-1.493a6.067 6.067 0 0 0-1.056-2.548l.988-.988.143.143a1 1 0 0 0 1.414-1.414l-1.7-1.7a1 1 0 1 0-1.414 1.414l.143.143-.988.988A6.068 6.068 0 0 0 21.5 9.482V7.989A1 1 0 0 0 21.35 6h-1.7Z" />
      <path d="m40.115 19.465-1.445-2.753c-1.613 7.111-4.99 12.125-9.622 15.39C24.112 35.582 17.858 37 11.052 37H8v3h34v2H7a1 1 0 0 1-1-1V6h2v29h3.052c6.552 0 12.354-1.368 16.843-4.532 4.153-2.927 7.277-7.457 8.803-14.106l-2.133 1.463a1 1 0 1 1-1.13-1.65l4.374-3a1 1 0 0 1 1.451.36l2.625 5a1 1 0 1 1-1.77.93Z" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgChartInfectedIncreasing);
export default ForwardRef;
