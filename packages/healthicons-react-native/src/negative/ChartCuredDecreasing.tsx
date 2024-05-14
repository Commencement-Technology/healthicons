import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgChartCuredDecreasing = (passedProps: SvgProps) => {
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
      <G clipPath="url(#chart-cured-decreasing_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm8 6v10h.871c2.432 0 4.813.74 6.957 2.14 2.141 1.397 3.984 3.41 5.403 5.859 1.282 2.215 2.919 3.982 4.764 5.186C27.838 30.388 29.844 31 31.86 31h6.507l-3.074-3.075a1 1 0 0 1 1.414-1.414l4.78 4.782a1 1 0 0 1 0 1.414l-4.78 4.782a1 1 0 0 1-1.414-1.414L38.366 33H31.86c-2.432 0-4.813-.74-6.957-2.14-2.141-1.397-3.984-3.41-5.403-5.859-1.283-2.215-2.919-3.982-4.765-5.186C12.892 18.612 10.887 18 8.871 18H8v22h34v2H7a1 1 0 0 1-1-1V6h2Zm32.554 6.78c.285.285.446.673.446 1.077v2.286a1.524 1.524 0 0 1-1.524 1.524h-3.81v3.81A1.524 1.524 0 0 1 34.144 23h-2.286a1.524 1.524 0 0 1-1.524-1.524v-3.81h-3.81A1.524 1.524 0 0 1 25 16.144v-2.286a1.524 1.524 0 0 1 1.524-1.524h3.81v-3.81A1.524 1.524 0 0 1 31.856 7h2.286a1.524 1.524 0 0 1 1.524 1.524v3.81h3.81c.403 0 .79.16 1.077.446Z"
        />
      </G>
      <Defs>
        <ClipPath id="chart-cured-decreasing_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgChartCuredDecreasing;
