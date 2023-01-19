import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledDeathAlt = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M15.415 25.31c.13.014.318.025.585.025.87 0 1.702.189 2.42.645a3.817 3.817 0 0 1 1.454 1.72c.323.738.42 1.546.448 2.173.798.12 1.992.127 3.678.127 1.685 0 2.88-.006 3.678-.127.028-.628.125-1.435.448-2.174a3.816 3.816 0 0 1 1.453-1.72c.72-.455 1.55-.644 2.42-.644.267 0 .456-.01.586-.024l.012-.08c.048-.339.07-.826.07-1.56 0-1.841.74-2.947 1.205-3.645.091-.135.171-.256.234-.363.36-.616.894-1.742.894-4.99 0-2.861-1.272-4.952-3.242-6.389C29.731 6.804 26.918 6 24 6s-5.73.804-7.759 2.284C14.272 9.721 13 11.812 13 14.674c0 3.247.534 4.373.894 4.99.063.106.143.227.234.362.466.698 1.205 1.804 1.205 3.644 0 .735.022 1.222.07 1.56l.012.08Zm-2.082-1.64c0 2.999.334 3.665 2.667 3.665 2.333 0 2.333 2 2.333 3.332C18.333 32 20.667 32 24 32c3.333 0 5.667 0 5.667-1.333s0-3.332 2.333-3.332 2.666-.666 2.667-3.665c0-1.186.365-1.747.806-2.424C36.148 20.21 37 18.903 37 14.674c0-14.232-26-14.232-26 0 0 4.229.852 5.537 1.527 6.572.441.677.806 1.238.806 2.424Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        d="M22.001 18.998a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm10.001-.003a3 3 0 1 1-6 .005 3 3 0 0 1 6-.005Z"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M20.725 38.503 9.701 42.048l.612 1.904 13.688-4.402 13.694 4.38.61-1.905-11.03-3.528 11.024-3.545-.613-1.904L24 37.45l-13.694-4.38-.61 1.905 11.03 3.528Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledDeathAlt);
export default ForwardRef;
