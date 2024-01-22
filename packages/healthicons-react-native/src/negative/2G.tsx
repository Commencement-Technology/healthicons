import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const Svg2G = (passedProps: SvgProps) => {
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
      <G clipPath="url(#2g_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0v48h48V0H0Zm35.087 9.408a12.001 12.001 0 0 0-2.602-3.893L33.9 4.1a14 14 0 0 1 0 19.799l-1.415-1.415a12 12 0 0 0 2.602-13.077Zm-6.844.35a6.001 6.001 0 0 1 0 8.485l1.414 1.414a8 8 0 0 0 0-11.314l-1.414 1.414Zm-8.486 0a6.001 6.001 0 0 0 0 8.485l-1.414 1.414a8 8 0 0 1 0-11.314l1.414 1.414Zm-6.844-.35a12.001 12.001 0 0 1 2.602-3.893L14.1 4.1a14 14 0 0 0 0 19.799l1.415-1.415a12 12 0 0 1-2.602-13.077ZM26 14a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM13 26a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3V29a3 3 0 0 0-3-3H13Zm7 6.25c0-.69-.56-1.25-1.25-1.25h-1.5a1.25 1.25 0 0 0-1.18.833 1 1 0 1 1-1.885-.666A3.25 3.25 0 0 1 17.25 29h1.5a3.25 3.25 0 0 1 2.182 5.658L17.474 38H21a1 1 0 1 1 0 2h-6a1 1 0 0 1-.695-1.72l5.25-5.072A1.244 1.244 0 0 0 20 32.25Zm12.674-1.888a1 1 0 1 1-1.333 1.49 3.503 3.503 0 1 0-.334 5.487v-1.875h-2.002a1 1 0 1 1 0-2h3.002a1 1 0 0 1 1 1v3.357a1 1 0 0 1-.333.745 5.503 5.503 0 1 1 0-8.204Z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="2g_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default Svg2G;
