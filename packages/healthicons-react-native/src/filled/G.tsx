import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgG = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
      ref={ref}
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.49 16.39a2 2 0 0 1-2.823.156A10 10 0 1 0 30 32v-6h-6a2 2 0 1 1 0-4h8a2 2 0 0 1 2 2v8.944a2 2 0 0 1-.667 1.491 14 14 0 1 1 0-20.87 2 2 0 0 1 .158 2.824Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgG);
export default ForwardRef;
