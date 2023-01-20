import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgOverweight = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M24 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm4.986 6c4.048-.018 8.01.708 12.853 2.12a3 3 0 1 1-1.678 5.76 72.982 72.982 0 0 0-2.118-.584c.48 1.585.893 3.236.95 4.853.076 2.171-.485 4.308-2.287 6.216l-.718 7.907A3 3 0 0 1 25 41v-5.005c-.327.005-.655.005-.982.005h-.036c-.327 0-.655 0-.982-.005V41a3 3 0 0 1-5.988.272l-.719-7.907c-1.795-1.902-2.36-4.031-2.287-6.196.054-1.615.464-3.263.943-4.847-.687.172-1.401.362-2.147.569a3 3 0 1 1-1.604-5.782C16 15.776 19.948 15.02 23.986 15Zm12.294 4.04c-4.74-1.381-8.498-2.057-12.285-2.04-3.784.017-7.537.725-12.263 2.036a1 1 0 0 0 .535 1.928 77.95 77.95 0 0 1 3.95-.997l1.704-.378-.536 1.661c-.69 2.135-1.318 4.12-1.38 5.986-.06 1.798.41 3.454 1.953 4.97l.262.257.784 8.627A1 1 0 0 0 21 41v-7.113l1.067.072c.6.04 1.229.041 1.933.041s1.333 0 1.933-.04L27 33.886V41a1 1 0 0 0 1.996.09l.784-8.627.262-.257c1.548-1.52 2.016-3.181 1.952-4.987-.065-1.873-.7-3.865-1.391-6.007l-.539-1.668 1.71.386c1.236.278 2.541.62 3.946 1.03a1 1 0 0 0 .56-1.92Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOverweight);
export default ForwardRef;
