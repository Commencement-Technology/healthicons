import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegative7 = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M48 0H0v48h48V0ZM16 10a2 2 0 1 0 0 4h11.922a73.401 73.401 0 0 0-4.599 7.369c-2.42 4.444-4.613 9.602-5.302 14.343a2 2 0 0 0 3.958.576c.59-4.06 2.531-8.734 4.858-13.006 2.316-4.254 4.918-7.933 6.678-9.977A2 2 0 0 0 32 10H16Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegative7);
export default ForwardRef;
