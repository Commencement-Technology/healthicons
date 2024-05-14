import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgChartPie = (passedProps: SvgProps) => {
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
      <G clipPath="url(#chart-pie_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM24 6v16.845l15.066-8.698C35.851 9.24 30.304 6 24 6ZM8.934 33.853l31.134-17.975A17.924 17.924 0 0 1 42 24c0 9.941-8.059 18-18 18-6.304 0-11.851-3.24-15.066-8.147ZM24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4Z"
        />
      </G>
      <Defs>
        <ClipPath id="chart-pie_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgChartPie;
