import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledSling = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M32 14a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM16.212 31.011a2 2 0 0 0-2.117 2.601l2.117-2.6Zm8.583 4.236A3.501 3.501 0 0 1 24 41.965V42h-8a9 9 0 1 1 0-18h16a9 9 0 1 1 0 18h-4.257a5.502 5.502 0 0 0-2.175-8.598l-.773 1.845ZM23.035 26h3.463l-5.86 14H16a6.968 6.968 0 0 1-3.677-1.042l9.647-11.852L23.036 26ZM34 33a2 2 0 0 1-2 2v-4a2 2 0 0 1 2 2Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledSling);
export default ForwardRef;
