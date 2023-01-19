import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineChartDeathRateIncreasing = (
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
        d="M27.694 19.846a.302.302 0 0 1-.01-.021c-.022-.054-.069-.198-.069-.477 0-1.484-.657-2.43-.968-2.877a3.415 3.415 0 0 1-.12-.181c-.174-.292-.527-.931-.527-3.047 0-1.702.756-2.933 1.976-3.806C29.256 8.522 31.074 8 33 8c1.926 0 3.745.522 5.024 1.437 1.22.873 1.976 2.104 1.976 3.806 0 2.116-.353 2.755-.526 3.047-.028.046-.07.107-.121.18-.31.448-.968 1.394-.968 2.878 0 .2-.042.293-.06.327a.374.374 0 0 1-.103.12.703.703 0 0 1-.16.096l-.006.003a1.996 1.996 0 0 0-1.042.644 2.102 2.102 0 0 0-.301.461 4.89 4.89 0 0 0-.13.286 9.756 9.756 0 0 0-.517 1.619c-.795.093-1.882.096-3.066.096-1.146 0-2.201-.003-2.99-.087a7.516 7.516 0 0 0-.111-.703 4.04 4.04 0 0 0-.403-1.128c-.171-.306-.722-1.13-1.802-1.236Zm-2.079-.498c0 2.035 1.385 2.487 1.847 2.487.461 0 .615 1.356.615 2.26C28.077 25 30.692 25 33 25s4.923 0 4.923-.904c0-.905.577-2.261.615-2.261.039 0 1.847-.453 1.847-2.487 0-.805.253-1.186.558-1.646C41.41 17 42 16.112 42 13.243c0-9.657-18-9.657-18 0 0 2.87.59 3.757 1.057 4.46.306.46.558.84.558 1.645Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M30.5 16a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm-2.5.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M35.465 15.999a.608.608 0 1 0 0 1.217.608.608 0 0 0 0-1.217Zm-2.609.61a2.609 2.609 0 1 1 5.218-.004 2.609 2.609 0 0 1-5.218.004ZM8 6v34h34v2H7a1 1 0 0 1-1-1V6h2Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M6 17a1 1 0 0 1 1-1h1.871c2.432 0 4.813.74 6.957 2.14 2.141 1.397 3.984 3.41 5.403 5.859 1.282 2.215 2.919 3.982 4.764 5.186C27.838 30.388 29.844 31 31.86 31h7.64a1 1 0 1 1 0 2h-7.64c-2.432 0-4.813-.74-6.957-2.14-2.141-1.397-3.984-3.41-5.403-5.859-1.283-2.215-2.919-3.982-4.765-5.186C12.892 18.612 10.887 18 8.871 18H7a1 1 0 0 1-1-1Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M35.293 26.51a1 1 0 0 1 1.414 0l4.78 4.783a1 1 0 0 1 0 1.414l-4.78 4.782a1 1 0 0 1-1.414-1.414L39.366 32l-4.073-4.075a1 1 0 0 1 0-1.415Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineChartDeathRateIncreasing);
export default ForwardRef;
