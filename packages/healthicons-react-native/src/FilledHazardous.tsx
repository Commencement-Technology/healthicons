import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledHazardous = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="m20.3 30-4.216 7.44a.64.64 0 0 0-.059.495.662.662 0 0 0 .315.393c4.667 2.61 10.654 2.61 15.318 0a.661.661 0 0 0 .317-.393.638.638 0 0 0-.06-.495L27.701 30a6.046 6.046 0 0 1-3.7 1.25A6.046 6.046 0 0 1 20.3 30Zm.55-12.276-4.336-7.371a.64.64 0 0 0-.398-.299.662.662 0 0 0-.499.077c-4.593 2.736-7.587 7.92-7.659 13.265a.661.661 0 0 0 .183.471c.12.125.284.195.458.196l8.55.07a6.047 6.047 0 0 1 .769-3.829 6.046 6.046 0 0 1 2.932-2.58Zm10 6.551 8.551-.069a.64.64 0 0 0 .458-.196.662.662 0 0 0 .183-.47c-.073-5.346-3.066-10.53-7.659-13.265a.662.662 0 0 0-.498-.078.638.638 0 0 0-.4.299l-4.335 7.37a6.047 6.047 0 0 1 2.932 2.58 6.04 6.04 0 0 1 .768 3.83ZM29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M24 42c9.941 0 18-8.059 18-18S33.941 6 24 6 6 14.059 6 24s8.059 18 18 18Zm0 2c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledHazardous);
export default ForwardRef;
