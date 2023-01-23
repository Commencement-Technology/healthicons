import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgRdtResultPositive = (passedProps: SvgProps) => {
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
      <Path
        d="M20 14v-2a2 2 0 1 0-4 0v2h4ZM16 16v5h4v-5h-4ZM16 25v-2h4v2a2 2 0 1 1-4 0Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v36a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V6Zm10 32a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-2-7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm0-23a4 4 0 0 0-4 4v13a4 4 0 0 0 8 0V12a4 4 0 0 0-4-4Z"
        fill="#333"
      />
      <Path
        d="M30.85 8.105c.238-.105.495-.131.743-.079.248.053.485.185.677.39a1 1 0 1 0 1.46-1.368 3.301 3.301 0 0 0-1.722-.978 3.207 3.207 0 0 0-1.966.206 3.383 3.383 0 0 0-1.495 1.304A3.62 3.62 0 0 0 28 9.5c0 .678.188 1.346.547 1.92.36.574.877 1.031 1.495 1.304a3.208 3.208 0 0 0 1.966.206 3.3 3.3 0 0 0 1.722-.978 1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.207 1.207 0 0 1-.742-.079 1.384 1.384 0 0 1-.609-.537A1.621 1.621 0 0 1 30 9.5c0-.31.087-.61.242-.858.156-.248.37-.432.609-.537ZM28.5 15a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-1v4a1 1 0 1 1-2 0v-4h-1a1 1 0 0 1-1-1ZM30 27.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .472.333 1 1 0 1 0 1.886-.666A2.5 2.5 0 0 0 31.5 25h-1a2.5 2.5 0 0 0 0 5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.472-.333 1 1 0 1 0-1.886.666A2.5 2.5 0 0 0 30.5 33h1a2.5 2.5 0 0 0 0-5h-1a.5.5 0 0 1-.5-.5ZM30.5 36a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 1 0 5h-1a2.5 2.5 0 0 1-2.358-1.667 1 1 0 1 1 1.886-.666.5.5 0 0 0 .472.333h1a.5.5 0 0 0 0-1h-1a2.5 2.5 0 0 1 0-5h1a2.5 2.5 0 0 1 2.358 1.667 1 1 0 1 1-1.886.666A.5.5 0 0 0 31.5 36h-1ZM38 26.5a1 1 0 0 0-1.721-.692l-1 1.041A1 1 0 0 0 36 28.542V31.5a1 1 0 1 0 2 0v-5Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgRdtResultPositive;