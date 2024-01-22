import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPolygon = (passedProps: SvgProps) => {
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
      <G clipPath="url(#polygon_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm17.874 39A4.002 4.002 0 0 1 10 38a4 4 0 0 1 2.184-3.565l-2.32-10.437a4 4 0 1 1 2.706-7.063l7.696-5.497a4 4 0 1 1 7.467 0l7.697 5.497a4 4 0 1 1 2.706 7.063l-2.32 10.437A4 4 0 1 1 30.126 39H17.874Zm0-2a4.002 4.002 0 0 0-3.738-2.998l-2.32-10.437a4 4 0 0 0 1.918-5.003l7.696-5.497A3.984 3.984 0 0 0 24 14c.979 0 1.875-.351 2.57-.935l7.696 5.497a4 4 0 0 0 1.917 5.003l-2.319 10.437A4.002 4.002 0 0 0 30.126 37H17.874Z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="polygon_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgPolygon;
