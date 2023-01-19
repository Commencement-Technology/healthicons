import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineBabyMale0306M = (
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
        d="M17 6a1 1 0 1 0 0 2h1.586l-3.11 3.11a6 6 0 1 0 1.414 1.414L20 9.414V11a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1h-4Zm-5 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm30 2.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-2 0a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-9.34 7.53a5.921 5.921 0 0 0-2.942-.767h-5.271l.054 1.052c.262 5.029.393 7.71.459 9.134a160.008 160.008 0 0 1 .063 1.53l.001.027V42h4.392c1.697-.003 3.03-.719 4.126-1.666.097.141.201.29.306.43.337.446.994 1.236 2.011 1.236h5C40.73 42 42 40.277 42 38.685c0-1.754-1.418-3.316-3.26-3.316h-2.648c-.814-.408-1.483-1.195-2.299-2.237l-.154-.197c-.776-.994-1.706-2.187-2.978-2.905Zm-.982 1.742a3.92 3.92 0 0 0-1.951-.509h-3.174A1479.279 1479.279 0 0 1 24.986 40h2.427c1.358-.002 2.437-.703 3.526-1.859l.715-.76.729.748c.227.233.427.516.588.75l.134.197c.119.175.224.33.339.482.267.354.4.426.426.44a.042.042 0 0 1 .005.002h4.985c.543 0 1.14-.592 1.14-1.315 0-.722-.594-1.316-1.26-1.316h-3.07l-.188-.08c-1.443-.612-2.442-1.876-3.264-2.924l-.068-.087c-.856-1.094-1.559-1.991-2.472-2.506ZM14.2 32.4 12.25 35H9.5a3.5 3.5 0 1 0 0 7H14a3.5 3.5 0 0 0 2.8-1.4l3-4a3.5 3.5 0 1 0-5.6-4.2Zm1.6 1.2L13.25 37H9.5a1.5 1.5 0 0 0 0 3H14a1.5 1.5 0 0 0 1.2-.6l3-4a1.5 1.5 0 0 0-2.4-1.8Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineBabyMale0306M);
export default ForwardRef;
