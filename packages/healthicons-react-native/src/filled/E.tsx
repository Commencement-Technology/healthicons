import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgE = (passedProps: SvgProps) => {
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
        d="M16 12a2 2 0 0 1 2-2h12a2 2 0 1 1 0 4H20v8h10a2 2 0 1 1 0 4H20v8h10a2 2 0 1 1 0 4H18a2 2 0 0 1-2-2V12Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgE;
