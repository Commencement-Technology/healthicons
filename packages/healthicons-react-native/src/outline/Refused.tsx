import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgRefused = (passedProps: SvgProps) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.5 6A1.5 1.5 0 0 1 24 7.5V23h2V10.5a1.5 1.5 0 0 1 3 0v15.585c0 1.905 2.41 2.732 3.579 1.228l3.186-4.097a1.518 1.518 0 0 1 2.496 1.72L31.057 36.8A10.814 10.814 0 0 1 21.814 42C15.842 42 11 37.158 11 31.186V16.5a1.5 1.5 0 0 1 3 0v8.618h2V10.5a1.5 1.5 0 0 1 3 0V23h2V7.5A1.5 1.5 0 0 1 22.5 6Zm-3.496 1.339a3.5 3.5 0 0 1 6.992 0A3.5 3.5 0 0 1 31 10.5v15.585l3.187-4.097a3.518 3.518 0 0 1 5.784 3.987l-7.204 11.862A12.814 12.814 0 0 1 21.814 44C14.737 44 9 38.263 9 31.186V16.5a3.5 3.5 0 0 1 5-3.163V10.5a3.5 3.5 0 0 1 5.004-3.161Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgRefused;
