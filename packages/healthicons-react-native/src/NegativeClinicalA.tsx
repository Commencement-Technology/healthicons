import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeClinicalA = (
  passedProps: SvgProps,
  ref: Ref<SVGSVGElement>
) => {
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
        d="M48 0H0v48h48V0ZM18 5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v2.273a1.5 1.5 0 0 1 1 1.415V39a5 5 0 0 1-10 0V12.687a1.5 1.5 0 0 1 1-1.414V9h-1a1 1 0 0 1-1-1V5Zm4 4v2.688a1.5 1.5 0 0 1-1 1.414V18h6v-4.898a1.5 1.5 0 0 1-1-1.415V9h-4Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeClinicalA);
export default ForwardRef;
