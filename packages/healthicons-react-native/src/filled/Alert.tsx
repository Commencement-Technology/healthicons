import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAlert = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M21 7a3 3 0 1 1 6 0v24a3 3 0 1 1-6 0V7ZM21 41a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgAlert);
export default ForwardRef;
