import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgGlobalPandemic = (passedProps: SvgProps) => {
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
      fill="currentColor"
      color="currentColor"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.285 6.405a18.016 18.016 0 0 1 9.804.626A18.07 18.07 0 0 1 36.545 11h-5.032a3.3 3.3 0 0 0-2.11.767 3.563 3.563 0 0 0-1.184 1.927l-1.193 5.077a1 1 0 1 0 1.948.458l1.192-5.077a1.56 1.56 0 0 1 .514-.845c.245-.204.538-.307.831-.307H38a.998.998 0 0 0 .311-.05 18.189 18.189 0 0 1 3.698 8.82 1 1 0 1 0 1.982-.26 20.187 20.187 0 0 0-4.315-10.057 20.083 20.083 0 0 0-8.92-6.308 20.016 20.016 0 0 0-10.893-.695 20.06 20.06 0 0 0-9.645 5.123A20.166 20.166 0 0 0 4.668 19a20.22 20.22 0 0 0 .18 10.948 20.16 20.16 0 0 0 5.86 9.236 20.054 20.054 0 0 0 9.81 4.8 1 1 0 1 0 .355-1.968 18.044 18.044 0 0 1-7.016-2.893l1.552-7.81h1.024a3.552 3.552 0 0 0 2.812-1.378 3.588 3.588 0 0 0 .65-3.067l-1.283-5.163-.001-.003a3.581 3.581 0 0 0-1.267-1.948A3.554 3.554 0 0 0 15.149 19H6.744a18.164 18.164 0 0 1 4.857-7.982 18.06 18.06 0 0 1 8.684-4.613ZM6.275 21a18.22 18.22 0 0 0 .49 8.374 18.16 18.16 0 0 0 5.277 8.32l.05.046 1.515-7.622a1 1 0 0 1 .98-.805h1.846a1.555 1.555 0 0 0 1.233-.605 1.588 1.588 0 0 0 .287-1.36l-1.282-5.157v-.002a1.582 1.582 0 0 0-.559-.859 1.554 1.554 0 0 0-.96-.33H6.275Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.678 33a6.366 6.366 0 0 0 1.145 2.763L24.7 36.886l-.193-.193a1 1 0 0 0-1.414 1.414l1.8 1.8a1 1 0 0 0 1.414-1.414l-.193-.193 1.123-1.123c.8.583 1.742.985 2.763 1.145v1.683A1 1 0 0 0 30.1 42h1.8a1 1 0 0 0 .1-1.995v-1.683a6.377 6.377 0 0 0 3.261-1.547l1.525 1.525-.193.193a1 1 0 0 0 1.414 1.414l1.8-1.8a1 1 0 0 0-1.414-1.414l-.193.193-1.667-1.667c.391-.672.664-1.42.79-2.219h1.682A1 1 0 0 0 41 32.9v-1.8a1 1 0 0 0-1.995-.1h-1.683a6.366 6.366 0 0 0-1.145-2.763l1.123-1.123.193.193a1 1 0 0 0 1.414-1.414l-1.8-1.8a1 1 0 0 0-1.414 1.414l.193.193-1.123 1.123A6.366 6.366 0 0 0 32 25.678v-1.683A1 1 0 0 0 31.9 22h-1.8a1 1 0 0 0-.1 1.995v1.683a6.366 6.366 0 0 0-2.763 1.145L26.114 25.7l.193-.193a1 1 0 0 0-1.414-1.414l-1.8 1.8a1 1 0 0 0 1.414 1.414l.193-.193 1.123 1.123A6.366 6.366 0 0 0 24.678 31h-1.683a1 1 0 0 0-1.995.1v1.8a1 1 0 0 0 1.995.1h1.683Zm1.922-1a4.4 4.4 0 1 1 8.8 0 4.4 4.4 0 0 1-8.8 0Z"
      />
    </Svg>
  );
};
export default SvgGlobalPandemic;
