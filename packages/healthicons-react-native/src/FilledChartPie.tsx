import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledChartPie = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M24 6C14.059 6 6 14.059 6 24s8.059 18 18 18 18-8.059 18-18S33.941 6 24 6ZM4 24C4 12.954 12.954 4 24 4s20 8.954 20 20-8.954 20-20 20S4 35.046 4 24Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="m40.954 15.366-32.909 19-1-1.732 32.91-19 1 1.732Z"
        clipRule="evenodd"
      />
      <Path fill="#333" d="M7.546 33.5A19 19 0 0 1 24 5v19L7.546 33.5Z" />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M7.936 32.12 23 23.423V6.028A18 18 0 0 0 7.936 32.12ZM6.679 34A20 20 0 0 1 24 4a1 1 0 0 1 1 1v19a1 1 0 0 1-.5.866l-16.455 9.5A1 1 0 0 1 6.68 34Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledChartPie);
export default ForwardRef;
