import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSayanaPress = (passedProps: SvgProps) => {
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
      <G clipPath="url(#sayana-press_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm23 6 2-2v7h-2V6Zm-1 13h1v-8h-2a1 1 0 0 0-1 1v5h-1v2h-3a4 4 0 0 0-4 4v17a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V23a4 4 0 0 0-4-4h-3v-2h-1v-5a1 1 0 0 0-1-1h-2v8h1v1a1 1 0 0 1-1 1v3h-2v-3a1 1 0 0 1-1-1v-1Zm2 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm-1 2v2h2v-2h-2Z"
        />
      </G>
      <Defs>
        <ClipPath id="sayana-press_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgSayanaPress;
