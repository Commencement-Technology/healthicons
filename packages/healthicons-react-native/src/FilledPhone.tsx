import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledPhone = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M13.24 21.58c2.88 5.66 7.52 10.28 13.18 13.18l4.4-4.4c.54-.54 1.34-.72 2.04-.48 2.24.74 4.66 1.14 7.14 1.14 1.1 0 2 .9 2 2V40c0 1.1-.9 2-2 2C21.22 42 6 26.78 6 8c0-1.1.9-2 2-2h7c1.1 0 2 .9 2 2 0 2.5.4 4.9 1.14 7.14.22.7.06 1.48-.5 2.04l-4.4 4.4Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledPhone);
export default ForwardRef;
