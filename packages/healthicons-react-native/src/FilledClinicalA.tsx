import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledClinicalA = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M19 4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1v2.273a1.5 1.5 0 0 0-1 1.415V39a5 5 0 0 0 10 0V12.687a1.5 1.5 0 0 0-1-1.414V9h1a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H19Zm3 7.688V9h4v2.688a1.5 1.5 0 0 0 1 1.414V18h-6v-4.898a1.5 1.5 0 0 0 1-1.415Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledClinicalA);
export default ForwardRef;
