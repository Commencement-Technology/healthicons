import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgChartCuredIncreasing = (
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
        d="M27.895 30.468C23.406 33.632 17.604 35 11.052 35H8V6H6v35a1 1 0 0 0 1 1h35v-2H8v-3h3.052c6.806 0 13.06-1.419 17.996-4.898 4.633-3.265 8.009-8.279 9.622-15.39l1.445 2.753a1 1 0 1 0 1.77-.93l-2.625-5a1 1 0 0 0-1.45-.36l-4.376 3a1 1 0 1 0 1.132 1.65l2.132-1.463c-1.526 6.649-4.65 11.179-8.803 14.106Z"
        fill="#333"
      />
      <path
        d="M27 13.857a1.524 1.524 0 0 0-1.524-1.524h-3.81v-3.81A1.524 1.524 0 0 0 20.144 7h-2.286a1.524 1.524 0 0 0-1.524 1.524v3.81h-3.81A1.524 1.524 0 0 0 11 13.856v2.286a1.524 1.524 0 0 0 1.524 1.524h3.81v3.81A1.524 1.524 0 0 0 17.856 23h2.286a1.524 1.524 0 0 0 1.524-1.524v-3.81h3.81A1.524 1.524 0 0 0 27 16.144v-2.286Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgChartCuredIncreasing);
export default ForwardRef;
