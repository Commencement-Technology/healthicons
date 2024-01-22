import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPulseOximeter = (passedProps: SvgProps) => {
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
      {...props}
    >
      <Path fill="#fff" d="M0 0h48v48H0z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 14v1.574l.23.3a4 4 0 0 1 .82 2.427V19.7a4 4 0 0 1-.82 2.427l-.23.3V24h11.65c3.048 0 5.35-2.33 5.35-5s-2.302-5-5.35-5H6Zm-.425-2C4.705 12 4 12.672 4 13.5v2.074a2 2 0 0 0 .41 1.214l.23.3a2 2 0 0 1 .41 1.213V19.7a2 2 0 0 1-.41 1.213l-.23.3A2 2 0 0 0 4 22.426V24.5c0 .828.705 1.5 1.575 1.5H17.65c4.06 0 7.35-3.134 7.35-7s-3.29-7-7.35-7H5.575Z"
        fill="#000"
      />
      <Path d="M22 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" fill="#000" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 17h-5v4h5v-4Zm-7-2v8h9v-8H8ZM23 21.038v2h4.06a3.824 3.824 0 0 0 1.308 5.056 3.827 3.827 0 0 0 2.96 6.252h.676A3.827 3.827 0 0 0 35.368 40h8.617v-2h-8.617a1.827 1.827 0 1 1 0-3.654h4.045v-2h-8.084a1.827 1.827 0 1 1 0-3.654h5.352v-2h-6.258a1.827 1.827 0 1 1 0-3.654h6.259v-2H23Zm.5-3.654h15.812c2.184 0 2.787-3.003.772-3.846l-4.756-1.989a1.628 1.628 0 0 1 1.206-3.024L44 11.25V9.226l-6.754-2.57a3.627 3.627 0 0 0-3.8.77c-1.887 1.809-1.301 4.96 1.11 5.968l4.756 1.99H23.5v2Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgPulseOximeter;
