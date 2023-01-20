import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPpeSanitizer = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M0 0h48v48H0V0Zm13.928 9.048a8.748 8.748 0 0 0-1.56 1.948l-1.736-.992a10.736 10.736 0 0 1 1.94-2.427C13.43 6.787 14.624 6 16 6H33v2H25v6h4a2 2 0 0 1 2 2v3h1a5 5 0 0 1 5 5v16a2 2 0 0 1-2 2H13a2 2 0 0 1-2-2V24a5 5 0 0 1 5-5h1v-3a2 2 0 0 1 2-2h4V8H16c-.624 0-1.346.38-2.072 1.048ZM18 29h5v-5h2v5h5v2h-5v5h-2v-5h-5v-2Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgPpeSanitizer);
export default ForwardRef;
