import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledUnPavedRoad = (
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
        d="M42 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-.5 3.85a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM36.687 7.922a1.5 1.5 0 1 1-2.97.42 1.5 1.5 0 0 1 2.97-.42Zm.701 4.951a1.5 1.5 0 1 1-2.97.42 1.5 1.5 0 0 1 2.97-.42Zm.701 4.95a1.5 1.5 0 1 1-2.97.42 1.5 1.5 0 0 1 2.97-.42Zm.701 4.951a1.5 1.5 0 1 1-2.97.42 1.5 1.5 0 0 1 2.97-.42ZM30.045 9.63a1.5 1.5 0 1 1-2.736 1.23 1.5 1.5 0 0 1 2.736-1.23Zm2.05 4.561a1.5 1.5 0 1 1-2.737 1.23 1.5 1.5 0 0 1 2.737-1.23Zm2.049 4.561a1.5 1.5 0 1 1-2.736 1.23 1.5 1.5 0 0 1 2.736-1.23Zm.933 3.514a1 1 0 1 1-1.825.82 1 1 0 0 1 1.825-.82ZM23.025 12.91a1.5 1.5 0 1 1-2.28 1.95 1.5 1.5 0 0 1 2.28-1.95Zm3.623 3.772a1.5 1.5 0 1 1-2.28 1.95 1.5 1.5 0 0 1 2.28-1.95Zm3.25 3.8a1.5 1.5 0 1 1-2.28 1.95 1.5 1.5 0 0 1 2.28-1.95Zm3.249 3.8a1.5 1.5 0 1 1-2.28 1.95 1.5 1.5 0 0 1 2.28-1.95Zm-5.585-10.591a.868.868 0 1 1-1.737 0 .868.868 0 0 1 1.737 0Zm2.593 4.343a.868.868 0 1 1-1.736 0 .868.868 0 0 1 1.736 0Zm4.424-2.113a.868.868 0 1 1-1.736 0 .868.868 0 0 1 1.736 0Zm4.755-.789a.868.868 0 1 1-1.736 0 .868.868 0 0 1 1.736 0Zm-5.756-3.772a.868.868 0 1 1-1.737 0 .868.868 0 0 1 1.737 0ZM39 10.132a.868.868 0 1 1-1.736 0 .868.868 0 0 1 1.736 0Z"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M20.726 12.959A35.998 35.998 0 0 0 6.056 40c-.062 1.103.84 2 1.944 2h14c1.105 0 1.989-.899 2.111-1.997a18.001 18.001 0 0 1 8.51-13.367c-3.816-4.447-8.62-10.002-11.895-13.678Zm4.37 8.781-.724.69a26.823 26.823 0 0 0-1.56 1.622l-.663.748-1.497-1.326.663-.748a28.847 28.847 0 0 1 1.676-1.742l.724-.69 1.38 1.446Zm-4.453 5.069-.535.845a29.65 29.65 0 0 0-2.114 3.986l-.4.916-1.833-.8.4-.917a31.648 31.648 0 0 1 2.258-4.255l.534-.845 1.69 1.07Zm-3.886 8.128-.262.965c-.197.724-.368 1.46-.513 2.203l-.192.981-1.963-.383.192-.982c.154-.79.336-1.572.546-2.343l.262-.965 1.93.524Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledUnPavedRoad);
export default ForwardRef;
