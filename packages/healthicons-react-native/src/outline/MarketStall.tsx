import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMarketStall = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M10 18h2v10h24V18h2v10h2.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-33a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H10V18Zm0 16v6h28v-6H10Zm-1-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1H9Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m10.189 8-2.145 5.913A.727.727 0 0 0 8 14.16v2.39C8 17.359 8.647 18 9.429 18c.78 0 1.428-.64 1.428-1.449a1 1 0 0 1 2 0c0 .808.648 1.449 1.429 1.449.78 0 1.428-.64 1.428-1.449a1 1 0 1 1 2 0c0 .808.648 1.449 1.429 1.449.78 0 1.428-.64 1.428-1.448a1 1 0 0 1 2 0C22.572 17.36 23.22 18 24 18s1.429-.64 1.429-1.449a1 1 0 1 1 2 0c0 .808.647 1.449 1.428 1.449.78 0 1.428-.64 1.429-1.448a1 1 0 0 1 2 0c0 .808.648 1.448 1.428 1.448.781 0 1.429-.64 1.429-1.449a1 1 0 1 1 2 0c0 .808.647 1.449 1.428 1.449.782 0 1.429-.64 1.429-1.449v-2.39a.729.729 0 0 0-.044-.248L37.811 8H10.19Zm27.587-.096.142-.052-.142.052Zm-1.633 11.082A3.405 3.405 0 0 1 33.714 20a3.404 3.404 0 0 1-2.428-1.014A3.404 3.404 0 0 1 28.857 20a3.404 3.404 0 0 1-2.428-1.014A3.404 3.404 0 0 1 24 20a3.404 3.404 0 0 1-2.429-1.014A3.404 3.404 0 0 1 19.143 20c-.951 0-1.81-.389-2.429-1.014A3.404 3.404 0 0 1 14.286 20a3.405 3.405 0 0 1-2.429-1.014A3.404 3.404 0 0 1 9.43 20C7.527 20 6 18.448 6 16.551v-2.39c0-.317.055-.632.163-.93l2.18-6.01A1.85 1.85 0 0 1 10.083 6h27.836a1.85 1.85 0 0 1 1.738 1.222l2.18 6.009c.109.298.164.613.164.93v2.39C42 18.448 40.473 20 38.571 20a3.404 3.404 0 0 1-2.428-1.014Z"
        fill="#333"
      />
      <Path
        d="M14 25.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-2Z"
        fill="#333"
      />
      <Path
        d="M16 26.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1ZM24 26.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgMarketStall);
export default ForwardRef;
