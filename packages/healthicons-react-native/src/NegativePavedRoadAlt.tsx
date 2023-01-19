import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativePavedRoadAlt = (
  passedProps: SvgProps,
  ref: Ref<SVGSVGElement>
) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <G clipPath="url(#negative_paved_road_alt_svg__a)">
        <Path
          fill="#333"
          fillRule="evenodd"
          d="M48.02 1.02.02.98l-.04 48 48 .04.04-48ZM13.013 8.95a2 2 0 0 1 2.002-1.998l18 .015a2 2 0 0 1 1.998 2.001l-.026 32a2 2 0 0 1-2.002 1.999l-18-.015a2 2 0 0 1-1.998-2.002l.026-32Zm11.018 2.03a1 1 0 0 0-1 .998l-.004 4a1 1 0 0 0 2 .002l.003-4a1 1 0 0 0-.999-1Zm-.009 11a1 1 0 0 0-1 .998l-.004 4a1 1 0 0 0 2 .002l.003-4a1 1 0 0 0-.999-1Zm-1.01 11.998a1 1 0 1 1 2 .002l-.003 4a1 1 0 0 1-2-.002l.003-4Z"
          clipRule="evenodd"
        />
      </G>
      <Defs>
        <ClipPath id="negative_paved_road_alt_svg__a">
          <Path fill="#fff" d="M.02.98h48v48h-48z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegativePavedRoadAlt);
export default ForwardRef;
