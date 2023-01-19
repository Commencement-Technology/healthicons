import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeWar = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M48 0H0v48h48V0ZM7.136 22.005C6.986 23.1 7.903 24 9.007 24h22.984c1.105 0 2.023-.9 1.873-1.995a14.323 14.323 0 0 0-.75-3.005H43a1 1 0 1 0 0-2H32.194c-2.334-4.185-6.697-7-11.694-7-6.803 0-12.43 5.218-13.364 12.005ZM7.187 26c-2.174 0-3.709 2.006-3.021 3.949l1.397 3.948C6.43 36.347 8.864 38 11.606 38h24.788c2.742 0 5.176-1.653 6.043-4.103l1.397-3.948c.688-1.943-.847-3.949-3.021-3.949H7.187Zm6.313 8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm13-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm8 2.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeWar);
export default ForwardRef;
