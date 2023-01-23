import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgChartDeathRateDecreasing = (passedProps: SvgProps) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 48 48"
      fill="none"
      color="currentColor"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.18 14.017a1 1 0 0 1 .803 1.164c-1.457 7.928-4.976 13.426-9.935 16.921C24.112 35.582 17.858 37 11.052 37H7a1 1 0 1 1 0-2h4.052c6.552 0 12.354-1.368 16.843-4.532 4.467-3.148 7.743-8.15 9.122-15.649a1 1 0 0 1 1.164-.803Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.616 13.03a1 1 0 0 1 .644.505l2.625 5a1 1 0 1 1-1.77.93l-2.102-4.004-3.447 2.364a1 1 0 1 1-1.132-1.65l4.376-3a1 1 0 0 1 .806-.146ZM8 6v34h34v2H7a1 1 0 0 1-1-1V6h2Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.694 19.846a.302.302 0 0 1-.01-.021c-.022-.054-.069-.198-.069-.477 0-1.484-.657-2.43-.968-2.877-.051-.074-.093-.135-.12-.181-.174-.292-.527-.931-.527-3.047 0-1.702.756-2.933 1.976-3.806C16.256 8.522 18.074 8 20 8c1.926 0 3.745.522 5.024 1.437 1.22.873 1.976 2.104 1.976 3.806 0 2.116-.353 2.755-.526 3.047-.028.046-.07.107-.121.18-.31.448-.968 1.394-.968 2.878 0 .2-.042.293-.06.327a.374.374 0 0 1-.103.12.703.703 0 0 1-.16.096l-.006.003a1.996 1.996 0 0 0-1.042.644 2.102 2.102 0 0 0-.301.461 4.89 4.89 0 0 0-.13.286 9.756 9.756 0 0 0-.517 1.619c-.795.093-1.882.096-3.066.096-1.146 0-2.201-.003-2.99-.087a7.516 7.516 0 0 0-.111-.703 4.04 4.04 0 0 0-.403-1.128c-.171-.306-.722-1.13-1.802-1.236Zm-2.079-.498c0 2.035 1.385 2.487 1.846 2.487.462 0 .616 1.356.616 2.26C15.077 25 17.692 25 20 25s4.923 0 4.923-.904c0-.905.577-2.261.616-2.261.038 0 1.846-.453 1.846-2.487 0-.805.252-1.186.558-1.646C28.41 17 29 16.112 29 13.243c0-9.657-18-9.657-18 0 0 2.87.59 3.757 1.057 4.46.306.46.558.84.558 1.645Z"
        fill="#333"
      />
      <Path
        d="M19 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM25.07 16.107a2.107 2.107 0 1 1-4.214.003 2.107 2.107 0 0 1 4.213-.003Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgChartDeathRateDecreasing;