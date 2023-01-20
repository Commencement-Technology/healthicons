import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgChartDeathRateStable = (
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
      <path fill="#fff" d="M0 0h48v48H0z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.92 31c-1.396 0-2.765.215-3.995.62l-3.672 1.208c-2.337.77-4.902 1.168-7.495 1.168H7a1 1 0 1 1 0-2h.758c2.393 0 4.746-.368 6.869-1.068l3.671-1.207A14.85 14.85 0 0 1 22.92 29c1.595 0 3.176.245 4.621.721m0 0 3.672 1.211c2.122.7 4.474 1.068 6.867 1.068H41a1 1 0 1 1 0 2h-2.92c-2.592 0-5.157-.398-7.493-1.168l-3.672-1.211A12.85 12.85 0 0 0 22.92 31"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.293 27.51a1 1 0 0 1 1.414 0l4.78 4.783a1 1 0 0 1 0 1.414l-4.78 4.782a1 1 0 0 1-1.414-1.414L40.366 33l-4.073-4.075a1 1 0 0 1 0-1.415Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 6v34h34v2H7a1 1 0 0 1-1-1V6h2Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.694 19.846a.302.302 0 0 1-.01-.021c-.022-.054-.069-.198-.069-.477 0-1.484-.657-2.43-.968-2.877-.051-.074-.093-.135-.12-.181-.174-.292-.527-.931-.527-3.047 0-1.702.756-2.933 1.976-3.806C16.256 8.522 18.074 8 20 8c1.926 0 3.745.522 5.024 1.437 1.22.873 1.976 2.104 1.976 3.806 0 2.116-.353 2.755-.526 3.047-.028.046-.07.107-.121.18-.31.448-.968 1.394-.968 2.878 0 .2-.042.293-.06.327a.374.374 0 0 1-.103.12.703.703 0 0 1-.16.096l-.006.003a1.996 1.996 0 0 0-1.042.644 2.102 2.102 0 0 0-.301.461 4.89 4.89 0 0 0-.13.286 9.756 9.756 0 0 0-.517 1.619c-.795.093-1.882.096-3.066.096-1.146 0-2.201-.003-2.99-.087a7.516 7.516 0 0 0-.111-.703 4.04 4.04 0 0 0-.403-1.128c-.171-.306-.722-1.13-1.802-1.236Zm-2.079-.498c0 2.035 1.385 2.487 1.846 2.487.462 0 .616 1.356.616 2.26C15.077 25 17.692 25 20 25s4.923 0 4.923-.904c0-.905.577-2.261.616-2.261.038 0 1.846-.453 1.846-2.487 0-.805.252-1.186.558-1.646C28.41 17 29 16.112 29 13.243c0-9.657-18-9.657-18 0 0 2.87.59 3.757 1.057 4.46.306.46.558.84.558 1.645Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5 16a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm-2.5.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.465 15.999a.608.608 0 1 0 0 1.217.608.608 0 0 0 0-1.217Zm-2.608.61a2.609 2.609 0 1 1 5.217-.004 2.609 2.609 0 0 1-5.218.004Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgChartDeathRateStable);
export default ForwardRef;
