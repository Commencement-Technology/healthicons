import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegative2 = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M48 0H0v48h48V0ZM30 18a4 4 0 0 0-4-4h-4a4.002 4.002 0 0 0-3.773 2.666 2 2 0 0 1-3.771-1.332A8.003 8.003 0 0 1 22 10h4a8 8 0 0 1 5.364 13.935L20.948 34H32a2 2 0 1 1 0 4H16a2 2 0 0 1-1.39-3.438l14-13.528.056-.052A3.985 3.985 0 0 0 30 18Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegative2);
export default ForwardRef;
