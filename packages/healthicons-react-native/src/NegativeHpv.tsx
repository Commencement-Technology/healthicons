import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeHpv = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M16 21a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0v-2h2v2a1 1 0 1 0 2 0v-6a1 1 0 1 0-2 0v2h-2v-2Z"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M21 21a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H23v2a1 1 0 1 1-2 0v-6Zm2 2h1.5a.5.5 0 0 0 0-1H23v1Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        d="M31.923 27.385a1 1 0 0 1-1.846 0l-2.5-6a1 1 0 0 1 1.846-.77L31 24.4l1.577-3.785a1 1 0 0 1 1.846.77l-2.5 6Z"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M48 0H0v48h48V0ZM22 4a1 1 0 1 0 0 2h1v2a1 1 0 1 0 2 0V6h1a1 1 0 1 0 0-2h-4Zm3 36a1 1 0 1 0-2 0v2h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-2Zm-13.728-.443-2.828-2.829a1 1 0 1 1 1.414-1.414l.707.707 1.414-1.414a1 1 0 1 1 1.414 1.414l-1.414 1.414.707.707a1 1 0 0 1-1.414 1.415Zm23.335-27.578a1 1 0 0 0 1.414 1.415l1.414-1.415.707.707a1 1 0 0 0 1.414-1.414l-2.828-2.828a1 1 0 1 0-1.414 1.414l.707.707-1.414 1.414ZM5 27a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v1h2a1 1 0 1 1 0 2H6v1a1 1 0 0 1-1 1Zm35-4a1 1 0 1 0 0 2h2v1a1 1 0 1 0 2 0v-4a1 1 0 1 0-2 0v1h-2ZM8.444 12.687a1 1 0 0 1 0-1.415l2.828-2.828a1 1 0 1 1 1.414 1.414l-.707.707 1.414 1.415a1 1 0 0 1-1.414 1.414l-1.414-1.415-.707.708a1 1 0 0 1-1.414 0ZM37.435 36.02l-1.414-1.414a1 1 0 0 0-1.414 1.414l1.414 1.415-.707.707a1 1 0 0 0 1.414 1.414l2.828-2.829a1 1 0 1 0-1.414-1.414l-.707.707Zm-22.602-22.6A13.94 13.94 0 0 1 23 10.035V12a1 1 0 1 0 2 0v-1.965a13.94 13.94 0 0 1 8.167 3.383l-1.389 1.39a1 1 0 0 0 1.414 1.414l1.39-1.39A13.94 13.94 0 0 1 37.964 23H36a1 1 0 1 0 0 2h1.965a13.94 13.94 0 0 1-3.384 8.167l-1.389-1.389a1 1 0 0 0-1.414 1.414l1.39 1.39A13.94 13.94 0 0 1 25 37.964V36a1 1 0 1 0-2 0v1.965a13.94 13.94 0 0 1-8.167-3.383l1.389-1.39a1 1 0 0 0-1.414-1.413l-1.39 1.388A13.94 13.94 0 0 1 10.036 25H12a1 1 0 1 0 0-2h-1.965a13.94 13.94 0 0 1 3.383-8.167l1.39 1.39a1 1 0 0 0 1.414-1.415l-1.39-1.39Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeHpv);
export default ForwardRef;
