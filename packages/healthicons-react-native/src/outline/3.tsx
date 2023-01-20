import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const Svg3 = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M35 18c0-5.033-4.15-9-9.13-9h-4.088c-3.94 0-7.335 2.468-8.604 5.981a3 3 0 1 0 5.644 2.038c.414-1.147 1.56-2.019 2.96-2.019h4.087C27.657 15 29 16.4 29 18s-1.343 3-3.13 3h-4.088a3 3 0 1 0 0 6h4.087C27.657 27 29 28.4 29 30s-1.343 3-3.13 3h-4.088c-1.4 0-2.546-.871-2.96-2.019a3 3 0 1 0-5.644 2.038C14.448 36.532 17.842 39 21.782 39h4.087C30.85 39 35 35.033 35 30a8.881 8.881 0 0 0-2.324-6A8.881 8.881 0 0 0 35 18Zm-9.13-7c3.918 0 7.13 3.115 7.13 7a6.91 6.91 0 0 1-2.408 5.244 1 1 0 0 0 0 1.512A6.91 6.91 0 0 1 33 30c0 3.885-3.212 7-7.13 7h-4.088c-3.093 0-5.738-1.936-6.723-4.66a1 1 0 1 1 1.882-.68c.699 1.937 2.595 3.34 4.841 3.34h4.087C28.726 35 31 32.738 31 30s-2.274-5-5.13-5h-4.088a1 1 0 1 1 0-2h4.087C28.726 23 31 20.738 31 18s-2.274-5-5.13-5h-4.088c-2.246 0-4.142 1.403-4.841 3.34a1 1 0 1 1-1.881-.68c.984-2.724 3.63-4.66 6.722-4.66h4.087Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(Svg3);
export default ForwardRef;
