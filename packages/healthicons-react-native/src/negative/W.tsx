import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgW = (passedProps: SvgProps) => {
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
      <G clipPath="url(#W_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM10.027 12.329a2 2 0 0 1 3.946-.658l3.076 18.46 5.214-9.123a2 2 0 0 1 3.473 0l5.214 9.124 3.077-18.461a2 2 0 0 1 3.946.658l-4 24a2 2 0 0 1-3.71.663L24 26.031l-6.264 10.961a2 2 0 0 1-3.709-.663l-4-24Z"
        />
      </G>
      <Defs>
        <ClipPath id="W_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgW;
