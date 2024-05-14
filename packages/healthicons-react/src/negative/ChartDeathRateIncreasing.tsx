import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgChartDeathRateIncreasing = (
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
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <g clipPath="url(#chart-death-rate-increasing_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm27.694 19.846a.302.302 0 0 1-.01-.021c-.022-.054-.069-.198-.069-.477 0-1.484-.657-2.43-.968-2.877a3.483 3.483 0 0 1-.12-.181c-.174-.292-.527-.931-.527-3.047 0-1.702.756-2.933 1.976-3.806C29.256 8.522 31.074 8 33 8c1.926 0 3.745.522 5.024 1.437 1.22.873 1.976 2.104 1.976 3.806 0 2.116-.353 2.755-.526 3.047-.028.046-.07.107-.121.18-.31.448-.968 1.394-.968 2.878 0 .2-.042.293-.06.327a.374.374 0 0 1-.103.12.703.703 0 0 1-.16.096l-.006.003a1.994 1.994 0 0 0-1.042.644 2.102 2.102 0 0 0-.301.461 4.89 4.89 0 0 0-.13.286 9.756 9.756 0 0 0-.517 1.619c-.795.093-1.882.096-3.066.096-1.146 0-2.201-.003-2.99-.087a7.516 7.516 0 0 0-.111-.703 4.04 4.04 0 0 0-.403-1.128c-.171-.306-.722-1.13-1.802-1.236Zm-2.079-.498c0 2.035 1.385 2.487 1.847 2.487.461 0 .615 1.356.615 2.26C28.077 25 30.692 25 33 25s4.923 0 4.923-.904c0-.905.577-2.261.615-2.261.039 0 1.847-.453 1.847-2.487 0-.805.253-1.186.558-1.646C41.41 17 42 16.112 42 13.243c0-9.657-18-9.657-18 0 0 2.87.59 3.757 1.057 4.46.306.46.558.84.558 1.645ZM30 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm8.07-1.893a2.107 2.107 0 1 1-4.214.003 2.107 2.107 0 0 1 4.213-.003ZM8 6H6v35a1 1 0 0 0 1 1h35v-2H8V18h.871c2.016 0 4.021.612 5.864 1.815 1.846 1.204 3.482 2.971 4.765 5.186 1.419 2.45 3.262 4.462 5.402 5.86C27.047 32.258 29.428 33 31.86 33h6.506l-3.073 3.075a1 1 0 0 0 1.414 1.414l4.78-4.782a1 1 0 0 0 0-1.414l-4.78-4.782a1 1 0 0 0-1.414 1.414L38.367 31H31.86c-2.016 0-4.022-.612-5.865-1.815-1.845-1.204-3.482-2.971-4.764-5.186-1.419-2.45-3.262-4.462-5.403-5.86C13.684 16.742 11.303 16 8.871 16H8V6Z"
        />
      </g>
      <defs>
        <clipPath id="chart-death-rate-increasing_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgChartDeathRateIncreasing);
export default ForwardRef;
