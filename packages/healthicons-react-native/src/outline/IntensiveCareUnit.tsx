import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgIntensiveCareUnit = (passedProps: SvgProps) => {
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
        d="M29.222 13.741a3 3 0 0 1-1.555-2.63V10h2v1.111a1 1 0 0 0 1 1h4a2 2 0 0 1 2 2v9.7A3.09 3.09 0 0 1 38 26.36c0 1.684-1.338 3.053-3 3.085v2.112h3v2h-2.17a2.722 2.722 0 1 1-4.217 0H16.387a2.722 2.722 0 1 1-4.217 0H10v-2h2v-8.403l-.315-.316a3.137 3.137 0 0 1 0-4.415 3.073 3.073 0 0 1 2.774-.855l.644-.644a3.156 3.156 0 0 1 4.462.002l1.4 1.4a3.154 3.154 0 0 1-.001 4.462l-.287.287.128.13c.045.044.106.07.17.07h13.692V14.11h-3.445v.556h.333a1 1 0 0 1 1 1v4.222a1 1 0 0 1-1 1H28.89a1 1 0 0 1-1-1v-4.222a1 1 0 0 1 1-1h.333v-.926Zm-9.955 7.914.283-.283a1.155 1.155 0 0 0 0-1.633l-1.4-1.4a1.156 1.156 0 0 0-1.633-.001l-.273.273 3.023 3.044Zm-1.275 7.53a.874.874 0 0 0 .62.26H33v2.11H14v-6.388l3.992 4.019Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Zm31 3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgIntensiveCareUnit;
