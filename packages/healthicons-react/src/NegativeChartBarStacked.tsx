import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeChartBarStacked = (
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
        d="M0 0h48v48H0V0Zm8 40V7H6v34a1 1 0 0 0 1 1h34v-2h-2V13a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v27h-2V21a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v19h-2V25a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v15H8Zm29-16h-4V14h4v10Zm-14-2h4v6h-4v-6Zm-6 10h-4v-6h4v6Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeChartBarStacked);
export default ForwardRef;
