import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgDentalHygiene = (passedProps: SvgProps) => {
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
      {...props}
    >
      <Path d="M17.092 14.312a1 1 0 0 1 1 1v3.533h3.615a1 1 0 1 1 0 2h-3.615v3.533a1 1 0 1 1-2 0v-3.533h-3.616a1 1 0 1 1 0-2h3.616v-3.533a1 1 0 0 1 1-1Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 36.54 6.038 9.761a3.228 3.228 0 0 1 .765-2.628 3.304 3.304 0 0 1 1.13-.838A3.343 3.343 0 0 1 9.308 6h15.386c.474 0 .943.101 1.374.296.432.195.818.48 1.13.837a3.228 3.228 0 0 1 .765 2.628l-3.963 26.78V38.5c0 .915-.349 1.801-.982 2.46A3.352 3.352 0 0 1 20.6 42h-7.2c-.915 0-1.784-.38-2.418-1.04A3.554 3.554 0 0 1 10 38.5v-1.96ZM8.756 8.118c.172-.077.36-.118.552-.118h15.385c.191 0 .38.04.552.119.172.078.324.19.446.33a1.229 1.229 0 0 1 .294 1.008L22.206 35H11.794L8.016 9.465l-.001-.008a1.228 1.228 0 0 1 .295-1.009c.121-.139.273-.252.446-.33Zm12.82 31.457c.267-.278.424-.664.424-1.075v-1.033H12V38.5c0 .41.157.797.424 1.075.266.277.618.425.976.425h7.2c.358 0 .71-.148.976-.425Z"
      />
      <Path d="M42 7a1 1 0 1 0-2 0h-6v2h6v2h-6v2h6v2h-6v2h6v1.992l-3.757 4.355A1 1 0 0 0 36 24v17a1 1 0 1 0 2 0V24.372l3.757-4.355a1 1 0 0 0 .243-.653V7Z" />
    </Svg>
  );
};
export default SvgDentalHygiene;
