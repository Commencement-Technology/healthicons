import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgWaterTreatment = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M48 0H0v48h48V0ZM24 33c3.314 0 6-2.768 6-6.182C30 21.41 24 15 24 15s-6 6.41-6 11.818C18 30.232 20.686 33 24 33ZM7 10h5.686a18 18 0 0 0 16.695 31.177l-.598-1.909A16 16 0 0 1 14 11.51V17h2V8H7v2Zm28.314 28H41v2h-9v-9h2v5.49A16 16 0 0 0 19.217 8.732l-.598-1.909A18 18 0 0 1 35.314 38Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgWaterTreatment);
export default ForwardRef;
