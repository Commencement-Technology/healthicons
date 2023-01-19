import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeB = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M30 18a4 4 0 0 1-4 4h-8v-8h8a4 4 0 0 1 4 4Zm-4 8h-8v8h8a4 4 0 0 0 0-8Z"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M48 0H0v48h48V0ZM16 10a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h10a8 8 0 0 0 5.292-14A8 8 0 0 0 26 10H16Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeB);
export default ForwardRef;
