import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeStop = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M0 0h48v48H0V0Zm24 5.905c9.994 0 18.095 8.101 18.095 18.095 0 9.994-8.101 18.095-18.095 18.095-9.994 0-18.095-8.101-18.095-18.095 0-9.994 8.101-18.095 18.095-18.095ZM44 24c0-11.046-8.954-20-20-20S4 12.954 4 24s8.954 20 20 20 20-8.954 20-20Zm-14 1.14V12.5a1.5 1.5 0 0 0-3 0V23h-2V9.5a1.5 1.5 0 0 0-3 0V23h-2V12.5a1.5 1.5 0 0 0-3 0V25h-2v-8.5a1.5 1.5 0 0 0-3 0v13.237a10.262 10.262 0 0 0 19.323 4.818l5.907-11.107a1.812 1.812 0 0 0-3.184-1.73l-2.172 3.909c-.501.902-1.874.546-1.874-.486Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeStop);
export default ForwardRef;
