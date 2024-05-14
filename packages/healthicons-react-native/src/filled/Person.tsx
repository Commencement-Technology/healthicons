import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPerson = (passedProps: SvgProps) => {
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
      <Path d="M6 36c0-4.965 11.992-8 18-8 6.008 0 18 3.035 18 8v6H6v-6Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 26c5.523 0 10-4.477 10-10S29.523 6 24 6s-10 4.477-10 10 4.477 10 10 10Z"
      />
    </Svg>
  );
};
export default SvgPerson;
