import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPpeMask = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="m39.913 29.61-4.303 1.56c1.735-2.762 3.053-6.642 3.334-12.09l1.315.318a2 2 0 0 1 1.52 2.118l-.556 6.387a2 2 0 0 1-1.31 1.706ZM12.183 30.831c-1.628-2.73-2.851-6.501-3.125-11.708l-1.254.278a2 2 0 0 0-1.557 2.142l.573 6.021a2 2 0 0 0 1.266 1.674l4.097 1.593ZM24 18.47l-6.242 1.56a1 1 0 1 0 .485 1.94L24 20.53l5.758 1.44a1 1 0 1 0 .485-1.94L24 18.47Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0h48v48H0V0Zm20.16 12.642S9 12.642 9 16.868v.219l-1.63.362a4 4 0 0 0-3.114 4.284l.573 6.02a4 4 0 0 0 2.532 3.35l7.192 2.796C18.651 38 23.516 38 23.516 38h.968s4.794 0 8.872-4.01a.995.995 0 0 0 .485-.05l6.754-2.45a4 4 0 0 0 2.62-3.413l.557-6.388a4 4 0 0 0-3.041-4.234L39 17.035v-.167c0-4.226-10.986-4.226-10.986-4.226l-.9-1.616A2 2 0 0 0 25.367 10h-2.56a2 2 0 0 0-1.746 1.026l-.9 1.616Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgPpeMask);
export default ForwardRef;
