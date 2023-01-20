import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPeople = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M17 24c3.867 0 7-3.133 7-7s-3.133-7-7-7-7 3.133-7 7 3.133 7 7 7Zm5-7c0 2.763-2.237 5-5 5s-5-2.237-5-5 2.237-5 5-5 5 2.237 5 5ZM4 38v-5.6c0-4.256 8.661-6.4 13-6.4 2.886 0 7.685.949 10.575 2.837C29.635 28.28 31.894 28 33.5 28c1.858 0 4.351.374 6.41 1.13 1.026.378 2.009.874 2.752 1.516.749.647 1.338 1.522 1.338 2.62V38H4Zm2-5.6c0-.317.146-.751.766-1.315.633-.576 1.607-1.134 2.84-1.62C12.077 28.49 15.077 28 17 28c1.923 0 4.924.49 7.393 1.465 1.234.486 2.208 1.044 2.84 1.62.621.564.767.998.767 1.315V36H6v-3.6Zm23.353-1.93c1.513-.313 3.03-.47 4.147-.47 1.647 0 3.903.34 5.72 1.008.909.334 1.644.728 2.135 1.152.485.419.645.787.645 1.107V36H30v-3.6c0-.7-.235-1.345-.647-1.93ZM39 20.5c0 3.039-2.461 5.5-5.5 5.5a5.499 5.499 0 0 1-5.5-5.5c0-3.039 2.461-5.5 5.5-5.5s5.5 2.461 5.5 5.5ZM33.5 24c1.934 0 3.5-1.566 3.5-3.5S35.434 17 33.5 17a3.498 3.498 0 0 0-3.5 3.5c0 1.934 1.566 3.5 3.5 3.5Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgPeople);
export default ForwardRef;
